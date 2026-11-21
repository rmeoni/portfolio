/**
 * One-time helper: get a Google OAuth refresh token for the booking Worker.
 *
 * Usage (from workers/booking):
 *   GOOGLE_CLIENT_ID=... GOOGLE_CLIENT_SECRET=... node scripts/get-refresh-token.mjs
 *
 * It opens nothing by itself: copy the printed URL into your browser, sign in
 * with the Google account whose calendar you want to use, and approve.
 * The refresh token is printed in this terminal. It is not saved anywhere.
 */
import http from 'node:http';

// Trim whitespace and any quotes that came along with copy/paste
const clean = (v) => (v || '').trim().replace(/^["'“”‘’]+|["'“”‘’]+$/g, '').trim();
const CLIENT_ID = clean(process.env.GOOGLE_CLIENT_ID);
const CLIENT_SECRET = clean(process.env.GOOGLE_CLIENT_SECRET);
const PORT = 53682;
const REDIRECT_URI = `http://127.0.0.1:${PORT}/callback`;
const SCOPES = [
  'https://www.googleapis.com/auth/calendar.events',   // create the booked event + Meet link
  'https://www.googleapis.com/auth/calendar.freebusy', // read busy times only (no event details)
];

if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error('Set GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET first.');
  process.exit(1);
}

// Catch the usual mix-ups before Google answers with "invalid_client"
if (/^AIza/.test(CLIENT_ID)) {
  console.error('GOOGLE_CLIENT_ID looks like an API key (starts with "AIza"). Use the OAuth 2.0 Client ID instead.');
  process.exit(1);
}
if (/^GOCSPX-/.test(CLIENT_ID)) {
  console.error('GOOGLE_CLIENT_ID looks like the client secret (starts with "GOCSPX-"). The two values are swapped.');
  process.exit(1);
}
if (!/^\d+-[a-z0-9]+\.apps\.googleusercontent\.com$/.test(CLIENT_ID)) {
  console.error(
    'GOOGLE_CLIENT_ID doesn\'t look like an OAuth Client ID.\n' +
    'Expected something like: 123456789012-abc123def456.apps.googleusercontent.com\n' +
    'Got: ' + JSON.stringify(CLIENT_ID)
  );
  process.exit(1);
}
if (!/^GOCSPX-/.test(CLIENT_SECRET)) {
  console.warn('Note: GOOGLE_CLIENT_SECRET usually starts with "GOCSPX-". Double-check it if the token exchange fails.\n');
}

// The Client ID isn't secret; showing it helps compare against the console
console.log('Using Client ID: ' + CLIENT_ID + '\n');

const authUrl = new URL('https://accounts.google.com/o/oauth2/v2/auth');
authUrl.search = new URLSearchParams({
  client_id: CLIENT_ID,
  redirect_uri: REDIRECT_URI,
  response_type: 'code',
  scope: SCOPES.join(' '),
  access_type: 'offline',
  prompt: 'consent',
}).toString();

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, REDIRECT_URI);
  if (url.pathname !== '/callback') { res.writeHead(404).end(); return; }

  const code = url.searchParams.get('code');
  if (!code) {
    res.writeHead(400).end('No code received: ' + (url.searchParams.get('error') || 'unknown error'));
    return;
  }

  const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      code,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      redirect_uri: REDIRECT_URI,
      grant_type: 'authorization_code',
    }),
  });
  const data = await tokenRes.json();

  if (!data.refresh_token) {
    res.writeHead(500).end('No refresh token returned. Check the terminal.');
    console.error('\nGoogle response:', data);
    server.close();
    return;
  }

  res.writeHead(200, { 'Content-Type': 'text/plain' }).end('Done. You can close this tab and go back to the terminal.');
  console.log('\nRefresh token (store it with `npx wrangler secret put GOOGLE_REFRESH_TOKEN`):\n');
  console.log(data.refresh_token + '\n');
  server.close();
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(
      `Port ${PORT} is already in use, probably by an earlier run of this script that's still waiting.\n` +
      'Go to that terminal and press Ctrl+C, then run this again.'
    );
    process.exit(1);
  }
  throw err;
});

server.listen(PORT, '127.0.0.1', () => {
  console.log('Open this URL in your browser and approve access:\n');
  console.log(authUrl.toString() + '\n');
});
