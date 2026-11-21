/*
 * Book a Call (book-a-call.html)
 *
 * Two modes:
 *  - Live (bookingApiUrl set): open times come from the booking Worker
 *    (workers/booking), which reads Rodrigo's Google Calendar, and booking
 *    creates the event with a Google Meet link and emails the invite.
 *  - Request (bookingApiUrl empty): the rules below are used as-is and the
 *    form sends a booking request through the contact-form Worker; Rodrigo
 *    confirms by email.
 *
 * Times are defined in Guatemala time and shown in the visitor's time zone.
 * Keep weekdays/slots/duration in sync with workers/booking/src/index.js.
 */
(function () {
  var CONFIG = {
    hostTimeZone: 'America/Guatemala',
    hostUtcOffset: -6,              // Guatemala has no daylight saving time
    hostLabel: 'Guatemala (UTC-6)',
    weekdays: [1, 2, 3, 4, 5],      // 0 = Sunday … 6 = Saturday
    slots: ['09:00', '10:30', '13:00', '14:30', '16:00'],
    durationMinutes: 45,
    minNoticeHours: 24,
    maxDaysAhead: 60,
    workerUrl: 'https://soft-hill-c327.silent-king-b9bb.workers.dev/',
    // Booking Worker URL, e.g. 'https://uxrodrigo-booking.<subdomain>.workers.dev'
    // Leave empty to keep the request-by-email flow.
    bookingApiUrl: ''
  };
  var LIVE = !!CONFIG.bookingApiUrl;

  var root = document.getElementById('book-call');
  if (!root) return;

  var els = {
    month: document.getElementById('bc-month'),
    weekdays: document.getElementById('bc-weekdays'),
    days: document.getElementById('bc-days'),
    prev: document.getElementById('bc-prev'),
    next: document.getElementById('bc-next'),
    slotsDate: document.getElementById('bc-slots-date'),
    slots: document.getElementById('bc-slots'),
    tz: document.getElementById('bc-tz'),
    form: document.getElementById('bc-form'),
    summary: document.getElementById('bc-summary'),
    summaryText: document.getElementById('bc-summary-text'),
    status: document.getElementById('bc-status'),
    submit: document.getElementById('bc-submit'),
    success: document.getElementById('bc-success'),
    successText: document.getElementById('bc-success-text'),
    meet: document.getElementById('bc-meet'),
    note: document.getElementById('bc-note'),
    again: document.getElementById('bc-again'),
    name: document.getElementById('bc-name'),
    email: document.getElementById('bc-email'),
    message: document.getElementById('bc-message'),
    honey: document.getElementById('bc-company')
  };

  var visitorTz = (Intl.DateTimeFormat().resolvedOptions().timeZone) || '';
  var state = { viewYear: 0, viewMonth: 0, day: null, slot: null };
  // Live mode: { 'YYYY-MM-DD' (host date): [Date, …] }, null while loading
  var live = { slots: null, error: false };

  /* ---------- helpers ---------- */
  function t(key) {
    return typeof window.__i18nT === 'function' ? window.__i18nT(key) : key;
  }
  function lang() {
    try { return localStorage.getItem('language') || 'en'; } catch (e) { return 'en'; }
  }
  function locale() { return lang() === 'es' ? 'es' : 'en-US'; }

  function slotStart(y, m, d, hhmm) {
    var p = hhmm.split(':');
    return new Date(Date.UTC(y, m, d, +p[0] - CONFIG.hostUtcOffset, +p[1]));
  }
  function hostToday() {
    var n = new Date(Date.now() + CONFIG.hostUtcOffset * 3600e3);
    return { y: n.getUTCFullYear(), m: n.getUTCMonth(), d: n.getUTCDate() };
  }
  function sameDay(a, b) { return a && b && a.y === b.y && a.m === b.m && a.d === b.d; }

  function hostKey(y, m, d) {
    return y + '-' + String(m + 1).padStart(2, '0') + '-' + String(d).padStart(2, '0');
  }

  function slotsFor(y, m, d) {
    if (LIVE) {
      var list = live.slots && live.slots[hostKey(y, m, d)];
      return list ? list.filter(function (dt) { return dt.getTime() > Date.now(); }) : [];
    }
    var weekday = new Date(Date.UTC(y, m, d)).getUTCDay();
    if (CONFIG.weekdays.indexOf(weekday) === -1) return [];
    var earliest = Date.now() + CONFIG.minNoticeHours * 3600e3;
    var latest = Date.now() + CONFIG.maxDaysAhead * 864e5;
    return CONFIG.slots
      .map(function (s) { return slotStart(y, m, d, s); })
      .filter(function (dt) { return dt.getTime() >= earliest && dt.getTime() <= latest; });
  }

  function fmtTime(date, tz) {
    var o = { hour: 'numeric', minute: '2-digit' };
    if (tz) o.timeZone = tz;
    return new Intl.DateTimeFormat(locale(), o).format(date);
  }
  function fmtRange(start, tz) {
    var end = new Date(start.getTime() + CONFIG.durationMinutes * 60e3);
    return fmtTime(start, tz) + ' – ' + fmtTime(end, tz);
  }
  function fmtDate(date, tz, long) {
    var o = long
      ? { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }
      : { weekday: 'short', month: 'short', day: 'numeric' };
    if (tz) o.timeZone = tz;
    return new Intl.DateTimeFormat(locale(), o).format(date);
  }
  function hostDateLabel(day) {
    // Noon UTC keeps the calendar date stable when formatted in UTC
    return new Intl.DateTimeFormat(locale(), { weekday: 'long', month: 'long', day: 'numeric', timeZone: 'UTC' })
      .format(new Date(Date.UTC(day.y, day.m, day.d, 12)));
  }

  /* ---------- calendar ---------- */
  function monthHasSlots(y, m) {
    var last = new Date(Date.UTC(y, m + 1, 0)).getUTCDate();
    for (var d = 1; d <= last; d++) if (slotsFor(y, m, d).length) return true;
    return false;
  }

  function renderWeekdays() {
    var f = new Intl.DateTimeFormat(locale(), { weekday: 'short', timeZone: 'UTC' });
    var html = '';
    for (var i = 0; i < 7; i++) {
      // 2024-01-01 was a Monday
      html += '<span>' + f.format(new Date(Date.UTC(2024, 0, 1 + i, 12))).replace('.', '') + '</span>';
    }
    els.weekdays.innerHTML = html;
  }

  function renderCalendar() {
    var y = state.viewYear, m = state.viewMonth;
    els.month.textContent = new Intl.DateTimeFormat(locale(), { month: 'long', year: 'numeric', timeZone: 'UTC' })
      .format(new Date(Date.UTC(y, m, 15)));

    var today = hostToday();
    var first = new Date(Date.UTC(y, m, 1)).getUTCDay();   // 0 = Sun
    var lead = (first + 6) % 7;                              // Monday-first grid
    var last = new Date(Date.UTC(y, m + 1, 0)).getUTCDate();
    var labelFmt = new Intl.DateTimeFormat(locale(), { weekday: 'long', month: 'long', day: 'numeric', timeZone: 'UTC' });

    var frag = document.createDocumentFragment();
    for (var i = 0; i < lead; i++) {
      var pad = document.createElement('span');
      pad.className = 'bc-day is-outside';
      pad.setAttribute('aria-hidden', 'true');
      frag.appendChild(pad);
    }
    for (var d = 1; d <= last; d++) {
      var day = { y: y, m: m, d: d };
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'bc-day';
      btn.textContent = d;
      btn.setAttribute('aria-label', labelFmt.format(new Date(Date.UTC(y, m, d, 12))));
      if (sameDay(day, today)) btn.classList.add('is-today');
      if (!slotsFor(y, m, d).length) {
        btn.disabled = true;
      } else {
        btn.setAttribute('aria-pressed', sameDay(day, state.day) ? 'true' : 'false');
        btn.addEventListener('click', selectDay.bind(null, day));
      }
      frag.appendChild(btn);
    }
    els.days.innerHTML = '';
    els.days.appendChild(frag);

    var isCurrentMonth = y === today.y && m === today.m;
    els.prev.disabled = isCurrentMonth;
    var ny = m === 11 ? y + 1 : y, nm = (m + 1) % 12;
    els.next.disabled = !monthHasSlots(ny, nm);
  }

  function shiftMonth(delta) {
    var m = state.viewMonth + delta;
    state.viewYear += Math.floor(m / 12);
    state.viewMonth = ((m % 12) + 12) % 12;
    renderCalendar();
  }

  /* ---------- slots ---------- */
  function selectDay(day) {
    state.day = day;
    state.slot = null;
    renderCalendar();
    renderSlots();
    renderSummary();
  }

  function renderSlots() {
    els.slots.innerHTML = '';
    if (LIVE && (live.error || !live.slots)) {
      els.slotsDate.textContent = '';
      var msg = document.createElement('p');
      msg.className = 'bc-empty';
      msg.textContent = t(live.error ? 'book-load-error' : 'book-loading');
      els.slots.appendChild(msg);
      return;
    }
    if (!state.day) {
      els.slotsDate.textContent = t('book-pick-date');
      return;
    }
    els.slotsDate.textContent = hostDateLabel(state.day);
    var list = slotsFor(state.day.y, state.day.m, state.day.d);
    if (!list.length) {
      var p = document.createElement('p');
      p.className = 'bc-empty';
      p.textContent = t('book-no-slots');
      els.slots.appendChild(p);
      return;
    }
    list.forEach(function (start) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'bc-slot';
      var selected = state.slot && state.slot.getTime() === start.getTime();
      btn.setAttribute('aria-pressed', selected ? 'true' : 'false');
      btn.innerHTML = '<span></span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';
      btn.firstChild.textContent = fmtRange(start, visitorTz || undefined);
      btn.addEventListener('click', function () {
        state.slot = start;
        renderSlots();
        renderSummary();
      });
      els.slots.appendChild(btn);
    });
  }

  function renderTz() {
    els.tz.textContent = t('book-tz-note').replace('{tz}', (visitorTz || 'local').replace(/_/g, ' '));
  }

  function renderSummary() {
    if (!state.slot) {
      els.summary.classList.add('is-empty');
      els.summaryText.textContent = t('book-pick-prompt');
      return;
    }
    els.summary.classList.remove('is-empty');
    els.summaryText.textContent = fmtDate(state.slot, visitorTz || undefined) + ' · ' + fmtRange(state.slot, visitorTz || undefined);
  }

  /* ---------- placeholders (not covered by data-i18n) ---------- */
  function renderPlaceholders() {
    els.prev.setAttribute('aria-label', t('book-prev'));
    els.next.setAttribute('aria-label', t('book-next'));
    els.name.placeholder = t('book-name-ph');
    els.email.placeholder = t('book-email-ph');
    els.message.placeholder = t('book-message-ph');
    if (LIVE) {
      els.note.textContent = t('book-note-live');
      if (!els.submit.disabled) els.submit.textContent = t('book-submit-live');
    }
  }

  /* ---------- submit ---------- */
  function showError(msg) {
    els.status.textContent = msg;
    els.status.className = 'bc-status is-error';
  }
  function clearError() {
    els.status.textContent = '';
    els.status.className = 'bc-status';
  }
  function resetTurnstile() {
    window.__turnstileToken = '';
    if (window.turnstile && typeof window.turnstile.reset === 'function') window.turnstile.reset();
  }

  els.form.addEventListener('submit', async function (e) {
    e.preventDefault();
    clearError();

    if (!state.slot) { showError(t('book-need-slot')); return; }
    if (!els.form.reportValidity()) return;

    var start = state.slot;
    var hostWhen = fmtDate(start, CONFIG.hostTimeZone, true) + ' · ' + fmtRange(start, CONFIG.hostTimeZone);
    var visitorWhen = fmtDate(start, visitorTz || undefined, true) + ' · ' + fmtRange(start, visitorTz || undefined);
    var about = els.message.value.trim();

    var message = [
      'BOOKING REQUEST (Book a Call page)',
      '',
      'Requested time, ' + CONFIG.hostLabel + ': ' + hostWhen,
      "Visitor's time" + (visitorTz ? ' (' + visitorTz + ')' : '') + ': ' + visitorWhen,
      'Length: ' + CONFIG.durationMinutes + ' minutes',
      '',
      'About the project:',
      about || '(no details provided)'
    ].join('\n');

    els.submit.disabled = true;
    els.submit.textContent = t('book-sending');

    if (LIVE) {
      await submitLive(start, visitorWhen, about);
      return;
    }

    try {
      var res = await fetch(CONFIG.workerUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: els.name.value.trim(),
          email: els.email.value.trim(),
          message: message,
          honey: els.honey.value,
          turnstileToken: window.__turnstileToken || ''
        })
      });
      var data = await res.json().catch(function () { return {}; });
      if (!res.ok) {
        showError(data && data.error ? t('book-error-prefix') + ' ' + data.error : t('book-error'));
        resetTurnstile();
        return;
      }
      els.successText.textContent = t('book-success-body')
        .replace('{when}', visitorWhen)
        .replace('{email}', els.email.value.trim());
      els.form.hidden = true;
      els.success.classList.add('is-visible');
      els.form.reset();
      resetTurnstile();
    } catch (err) {
      showError(t('book-error'));
      resetTurnstile();
    } finally {
      els.submit.disabled = false;
      els.submit.textContent = t('book-submit');
    }
  });

  async function submitLive(start, visitorWhen, about) {
    var email = els.email.value.trim();
    try {
      var res = await fetch(CONFIG.bookingApiUrl.replace(/\/$/, '') + '/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: els.name.value.trim(),
          email: email,
          message: about,
          start: start.toISOString(),
          tz: visitorTz,
          lang: lang(),
          honey: els.honey.value,
          turnstileToken: window.__turnstileToken || ''
        })
      });
      var data = await res.json().catch(function () { return {}; });
      if (!res.ok) {
        if (res.status === 409) {
          showError(t('book-slot-taken'));
          state.slot = null;
          loadAvailability();
        } else if (data && data.error === 'captcha_failed') {
          showError(t('book-captcha-failed'));
        } else {
          showError(t('book-error'));
        }
        resetTurnstile();
        return;
      }
      els.successText.textContent = t('book-success-live-body')
        .replace('{when}', visitorWhen)
        .replace('{email}', email);
      if (data.meetLink) {
        els.meet.href = data.meetLink;
        els.meet.hidden = false;
      }
      els.form.hidden = true;
      els.success.classList.add('is-visible');
      els.form.reset();
      resetTurnstile();
      state.slot = null;
      loadAvailability();
    } catch (err) {
      showError(t('book-error'));
      resetTurnstile();
    } finally {
      els.submit.disabled = false;
      els.submit.textContent = t('book-submit-live');
    }
  }

  els.again.addEventListener('click', function () {
    els.success.classList.remove('is-visible');
    els.form.hidden = false;
    els.meet.hidden = true;
    state.slot = null;
    renderSlots();
    renderSummary();
  });

  /* ---------- feature card images follow the theme ---------- */
  function syncThemeImages() {
    var dark = document.documentElement.getAttribute('data-theme') === 'dark';
    document.querySelectorAll('.bc-feature img[data-dark-src]').forEach(function (img) {
      var want = img.getAttribute(dark ? 'data-dark-src' : 'data-light-src');
      if (want && img.getAttribute('src') !== want) img.setAttribute('src', want);
    });
  }
  new MutationObserver(syncThemeImages).observe(document.documentElement, {
    attributes: true, attributeFilter: ['data-theme']
  });

  /* ---------- init ---------- */
  var ready = false;

  function renderAll() {
    if (!ready) return; // i18n.js may announce the language before init runs
    renderWeekdays();
    renderCalendar();
    renderSlots();
    renderTz();
    renderSummary();
    renderPlaceholders();
  }

  // Pre-select the first day that has open slots (unless the current one still does)
  function selectFirstAvailable() {
    if (state.day && slotsFor(state.day.y, state.day.m, state.day.d).length) return;
    var today = hostToday();
    state.day = null;
    for (var i = 0; i <= CONFIG.maxDaysAhead; i++) {
      var dt = new Date(Date.UTC(today.y, today.m, today.d + i));
      var day = { y: dt.getUTCFullYear(), m: dt.getUTCMonth(), d: dt.getUTCDate() };
      if (slotsFor(day.y, day.m, day.d).length) {
        state.day = day;
        state.viewYear = day.y;
        state.viewMonth = day.m;
        return;
      }
    }
  }

  // Live mode: fetch open times from the booking Worker (Google Calendar)
  async function loadAvailability() {
    var today = hostToday();
    var end = new Date(Date.UTC(today.y, today.m, today.d + CONFIG.maxDaysAhead));
    var url = CONFIG.bookingApiUrl.replace(/\/$/, '') + '/availability?from=' + hostKey(today.y, today.m, today.d) +
      '&to=' + hostKey(end.getUTCFullYear(), end.getUTCMonth(), end.getUTCDate());
    try {
      var res = await fetch(url);
      if (!res.ok) throw new Error('HTTP ' + res.status);
      var data = await res.json();
      var map = {};
      (data.slots || []).forEach(function (iso) {
        var dt = new Date(iso);
        var h = new Date(dt.getTime() + CONFIG.hostUtcOffset * 3600e3);
        var key = hostKey(h.getUTCFullYear(), h.getUTCMonth(), h.getUTCDate());
        (map[key] = map[key] || []).push(dt);
      });
      live.slots = map;
      live.error = false;
    } catch (err) {
      console.error('Booking availability failed:', err);
      live.error = true;
    }
    selectFirstAvailable();
    renderAll();
  }

  function init() {
    var today = hostToday();
    state.viewYear = today.y;
    state.viewMonth = today.m;
    selectFirstAvailable();
    els.prev.addEventListener('click', function () { shiftMonth(-1); });
    els.next.addEventListener('click', function () { shiftMonth(1); });
    syncThemeImages();
    ready = true;
    renderAll();
    if (LIVE) loadAvailability();
  }

  document.addEventListener('i18n:change', renderAll);
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
