/**
 * Booking Worker for www.uxrodrigo.com/book-a-call.html
 *
 *   GET  /availability?from=YYYY-MM-DD&to=YYYY-MM-DD
 *        → open slots (host calendar dates, Guatemala time), minus anything
 *          busy on Rodrigo's Google Calendar.
 *   POST /book  { name, email, guests[], message, start, tz, lang, honey, turnstileToken }
 *        → verifies Turnstile, re-checks the slot is free, creates the event
 *          with a Google Meet link and emails the invite to the visitor and
 *          any guests (up to MAX_GUESTS).
 *
 * Secrets (wrangler secret put …):
 *   GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REFRESH_TOKEN, TURNSTILE_SECRET
 * Vars (wrangler.toml): CALENDAR_ID, BUSY_CALENDAR_IDS, ALLOWED_ORIGINS
 */

/* ---------- Availability rules (Guatemala time) ---------- */
const RULES = {
  hostTimeZone: 'America/Guatemala',
  hostUtcOffset: -6,                 // Guatemala has no daylight saving time
  weekdays: [1, 2, 3, 4, 5],         // 0 = Sunday … 6 = Saturday
  slots: ['09:00', '10:30', '13:00', '14:30', '16:00'],
  durationMinutes: 45,
  minNoticeHours: 24,
  maxDaysAhead: 60,
};

const MAX_GUESTS = 5;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const GOOGLE_TOKEN_URL = 'https://oauth2.googleapis.com/token';
const CAL_API = 'https://www.googleapis.com/calendar/v3';
const TURNSTILE_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

/* ---------- Small helpers ---------- */
function corsHeaders(request, env) {
  const origin = request.headers.get('Origin') || '';
  const allowed = (env.ALLOWED_ORIGINS || '').split(',').map((s) => s.trim()).filter(Boolean);
  const h = {
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
    Vary: 'Origin',
  };
  if (allowed.includes(origin)) h['Access-Control-Allow-Origin'] = origin;
  return h;
}

function json(request, env, body, status = 200, extra = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', ...corsHeaders(request, env), ...extra },
  });
}

function parseDate(s) {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s || '');
  return m ? { y: +m[1], m: +m[2] - 1, d: +m[3] } : null;
}

function slotStart(y, m, d, hhmm) {
  const [h, min] = hhmm.split(':').map(Number);
  return new Date(Date.UTC(y, m, d, h - RULES.hostUtcOffset, min));
}

/** Every candidate slot start (Date) between two host dates, inclusive. */
function candidateSlots(from, to) {
  const out = [];
  const earliest = Date.now() + RULES.minNoticeHours * 3600e3;
  const latest = Date.now() + RULES.maxDaysAhead * 864e5;
  const day = new Date(Date.UTC(from.y, from.m, from.d));
  const end = new Date(Date.UTC(to.y, to.m, to.d));
  while (day <= end) {
    if (RULES.weekdays.includes(day.getUTCDay())) {
      for (const s of RULES.slots) {
        const start = slotStart(day.getUTCFullYear(), day.getUTCMonth(), day.getUTCDate(), s);
        if (start.getTime() >= earliest && start.getTime() <= latest) out.push(start);
      }
    }
    day.setUTCDate(day.getUTCDate() + 1);
  }
  return out;
}

function overlaps(start, busy) {
  const s = start.getTime();
  const e = s + RULES.durationMinutes * 60e3;
  return busy.some((b) => s < b.end && e > b.start);
}

/* ---------- Google ---------- */
let cachedToken = null; // { token, exp } — reused while this isolate is warm

async function accessToken(env) {
  if (cachedToken && cachedToken.exp > Date.now() + 60e3) return cachedToken.token;
  const res = await fetch(GOOGLE_TOKEN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: env.GOOGLE_CLIENT_ID,
      client_secret: env.GOOGLE_CLIENT_SECRET,
      refresh_token: env.GOOGLE_REFRESH_TOKEN,
      grant_type: 'refresh_token',
    }),
  });
  const data = await res.json();
  if (!res.ok || !data.access_token) throw new Error('google_auth_failed: ' + (data.error || res.status));
  cachedToken = { token: data.access_token, exp: Date.now() + (data.expires_in || 3600) * 1000 };
  return cachedToken.token;
}

async function busyTimes(env, timeMin, timeMax) {
  const ids = (env.BUSY_CALENDAR_IDS || env.CALENDAR_ID || 'primary')
    .split(',').map((s) => s.trim()).filter(Boolean);
  const res = await fetch(`${CAL_API}/freeBusy`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${await accessToken(env)}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      timeMin: timeMin.toISOString(),
      timeMax: timeMax.toISOString(),
      items: ids.map((id) => ({ id })),
    }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error('freebusy_failed: ' + res.status);
  const busy = [];
  for (const cal of Object.values(data.calendars || {})) {
    if (cal.errors && cal.errors.length) throw new Error('freebusy_calendar_error');
    for (const b of cal.busy || []) busy.push({ start: Date.parse(b.start), end: Date.parse(b.end) });
  }
  return busy;
}

async function createEvent(env, { start, name, email, guests, message, tz }) {
  const end = new Date(start.getTime() + RULES.durationMinutes * 60e3);
  const calendarId = encodeURIComponent(env.CALENDAR_ID || 'primary');
  const lines = [`Booked from uxrodrigo.com/book-a-call.html`, `Name: ${name}`, `Email: ${email}`];
  if (guests.length) lines.push(`Guests: ${guests.join(', ')}`);
  if (tz) lines.push(`Visitor time zone: ${tz}`);
  lines.push('', 'About the project:', message || '(no details provided)');
  const description = lines.join('\n');

  const res = await fetch(
    `${CAL_API}/calendars/${calendarId}/events?conferenceDataVersion=1&sendUpdates=all`,
    {
      method: 'POST',
      headers: { Authorization: `Bearer ${await accessToken(env)}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        summary: `Call with ${name} · UX Rodrigo`,
        description,
        start: { dateTime: start.toISOString(), timeZone: RULES.hostTimeZone },
        end: { dateTime: end.toISOString(), timeZone: RULES.hostTimeZone },
        attendees: [{ email, displayName: name }, ...guests.map((g) => ({ email: g }))],
        conferenceData: {
          createRequest: {
            requestId: crypto.randomUUID(),
            conferenceSolutionKey: { type: 'hangoutsMeet' },
          },
        },
        reminders: { useDefault: true },
      }),
    }
  );
  const data = await res.json();
  if (!res.ok) throw new Error('event_insert_failed: ' + res.status + ' ' + (data.error && data.error.message));
  const meet =
    data.hangoutLink ||
    ((data.conferenceData && data.conferenceData.entryPoints) || []).find((e) => e.entryPointType === 'video')?.uri ||
    null;
  return { id: data.id, meetLink: meet, end };
}

async function verifyTurnstile(env, token, ip) {
  if (!token) return false;
  const body = new URLSearchParams({ secret: env.TURNSTILE_SECRET, response: token });
  if (ip) body.set('remoteip', ip);
  const res = await fetch(TURNSTILE_URL, { method: 'POST', body });
  const data = await res.json().catch(() => ({}));
  return !!data.success;
}

/* ---------- Routes ---------- */
async function handleAvailability(request, env) {
  const url = new URL(request.url);
  const from = parseDate(url.searchParams.get('from'));
  const to = parseDate(url.searchParams.get('to'));
  if (!from || !to) return json(request, env, { error: 'from and to are required (YYYY-MM-DD)' }, 400);
  const span = (Date.UTC(to.y, to.m, to.d) - Date.UTC(from.y, from.m, from.d)) / 864e5;
  if (span < 0 || span > RULES.maxDaysAhead + 7) return json(request, env, { error: 'range too large' }, 400);

  const candidates = candidateSlots(from, to);
  let open = [];
  if (candidates.length) {
    const timeMin = candidates[0];
    const timeMax = new Date(candidates[candidates.length - 1].getTime() + RULES.durationMinutes * 60e3);
    const busy = await busyTimes(env, timeMin, timeMax);
    open = candidates.filter((s) => !overlaps(s, busy));
  }
  return json(
    request, env,
    {
      timeZone: RULES.hostTimeZone,
      durationMinutes: RULES.durationMinutes,
      slots: open.map((d) => d.toISOString()),
    },
    200,
    { 'Cache-Control': 'no-store' }
  );
}

async function handleBook(request, env) {
  let body;
  try { body = await request.json(); } catch { return json(request, env, { error: 'invalid_json' }, 400); }

  const name = String(body.name || '').trim().slice(0, 100);
  const email = String(body.email || '').trim().slice(0, 200);
  const message = String(body.message || '').trim().slice(0, 3000);
  const tz = String(body.tz || '').slice(0, 64);
  const start = new Date(String(body.start || ''));

  // Honeypot: pretend it worked
  if (body.honey) return json(request, env, { ok: true });

  if (!name) return json(request, env, { error: 'name_required' }, 400);
  if (!EMAIL_RE.test(email)) return json(request, env, { error: 'email_invalid' }, 400);

  // Guests: array (or comma string) of emails; trimmed, de-duplicated,
  // without the visitor's own address, at most MAX_GUESTS
  const rawGuests = Array.isArray(body.guests) ? body.guests : String(body.guests || '').split(',');
  const guests = [];
  for (const g of rawGuests) {
    const e = String(g || '').trim().slice(0, 200);
    if (!e || e.toLowerCase() === email.toLowerCase() || guests.some((x) => x.toLowerCase() === e.toLowerCase())) continue;
    if (!EMAIL_RE.test(e)) return json(request, env, { error: 'guest_email_invalid' }, 400);
    guests.push(e);
  }
  if (guests.length > MAX_GUESTS) return json(request, env, { error: 'too_many_guests' }, 400);
  if (isNaN(start.getTime())) return json(request, env, { error: 'start_invalid' }, 400);

  const ip = request.headers.get('CF-Connecting-IP');
  if (!(await verifyTurnstile(env, body.turnstileToken, ip))) {
    return json(request, env, { error: 'captcha_failed' }, 403);
  }

  // The start must be one of the published slots (by host calendar day)
  const host = new Date(start.getTime() + RULES.hostUtcOffset * 3600e3);
  const day = { y: host.getUTCFullYear(), m: host.getUTCMonth(), d: host.getUTCDate() };
  const valid = candidateSlots(day, day).some((s) => s.getTime() === start.getTime());
  if (!valid) return json(request, env, { error: 'slot_unavailable' }, 409);

  // Re-check the calendar right before booking
  const end = new Date(start.getTime() + RULES.durationMinutes * 60e3);
  const busy = await busyTimes(env, start, end);
  if (overlaps(start, busy)) return json(request, env, { error: 'slot_taken' }, 409);

  const event = await createEvent(env, { start, name, email, guests, message, tz });
  return json(request, env, {
    ok: true,
    start: start.toISOString(),
    end: event.end.toISOString(),
    meetLink: event.meetLink,
  });
}

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders(request, env) });
    }
    const { pathname } = new URL(request.url);
    try {
      if (request.method === 'GET' && pathname === '/availability') return await handleAvailability(request, env);
      if (request.method === 'POST' && pathname === '/book') return await handleBook(request, env);
      return json(request, env, { error: 'not_found' }, 404);
    } catch (err) {
      console.error(err && err.stack ? err.stack : err);
      return json(request, env, { error: 'server_error' }, 500);
    }
  },
};
