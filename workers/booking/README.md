# Booking Worker (Google Calendar + Google Meet)

Powers `book-a-call.html`:

- `GET /availability?from=YYYY-MM-DD&to=YYYY-MM-DD` returns open slots: your working hours minus anything busy on your Google Calendar.
- `POST /book` checks the captcha, re-checks that the slot is free, creates the event with a Google Meet link, and Google emails the invite to the visitor.

Working hours, slot times and call length live in `RULES` at the top of `src/index.js`. Keep them in sync with `CONFIG` in `js/book-call.js`.

This folder is excluded from the GitHub Pages site (`_config.yml`). It contains no secrets.

## 1. Google Cloud (about 10 minutes)

1. Go to https://console.cloud.google.com and create a project, for example "uxrodrigo-booking".
2. **APIs & Services → Library**: enable **Google Calendar API**.
3. **APIs & Services → OAuth consent screen** (Google Auth Platform):
   - User type: **External**.
   - App name "UX Rodrigo Booking", your email as support and developer contact.
   - Scopes: add `.../auth/calendar.events` and `.../auth/calendar.freebusy`.
   - **Publish the app ("In production")**. While it's in "Testing", Google expires the refresh token after 7 days and booking stops working. You don't need to submit it for verification. You'll see an "unverified app" warning once when you approve it yourself.
4. **APIs & Services → Credentials → Create credentials → OAuth client ID**:
   - Application type: **Desktop app**.
   - Copy the **Client ID** and **Client secret**.

## 2. Get your refresh token (one time)

```bash
cd workers/booking
GOOGLE_CLIENT_ID="…" GOOGLE_CLIENT_SECRET="…" node scripts/get-refresh-token.mjs
```

Open the printed URL and sign in with the Google account whose calendar should be used. Approve access ("Advanced → Go to … (unsafe)" on the unverified-app screen, since it's your own app). The refresh token prints in the terminal.

## 3. Turnstile secret

Cloudflare dashboard → **Turnstile** → your site (key `0x4AAAAAACaRt9DVAXg6s8YU`) → copy the **Secret key**. This is the same widget the contact form uses. Make sure `uxrodrigo.com` and `www.uxrodrigo.com` are in its hostnames.

## 4. Deploy the Worker

```bash
cd workers/booking
npx wrangler login
npx wrangler secret put GOOGLE_CLIENT_ID
npx wrangler secret put GOOGLE_CLIENT_SECRET
npx wrangler secret put GOOGLE_REFRESH_TOKEN
npx wrangler secret put TURNSTILE_SECRET
npx wrangler deploy
```

`deploy` prints the Worker URL, for example `https://uxrodrigo-booking.<your-subdomain>.workers.dev`.

Check it:

```bash
curl "https://uxrodrigo-booking.<your-subdomain>.workers.dev/availability?from=2026-12-01&to=2026-12-14"
```

## 5. Turn on live booking on the site

In `js/book-call.js`, set:

```js
bookingApiUrl: 'https://uxrodrigo-booking.<your-subdomain>.workers.dev'
```

Then commit and push. While `bookingApiUrl` is empty, the page keeps the old request-by-email flow.

## Options

- **More calendars blocking time:** set `BUSY_CALENDAR_IDS` in `wrangler.toml` to a comma-separated list, for example `primary,work@company.com`. The account you authorized must be able to see their free/busy.
- **Testing locally:** put the four secrets in `workers/booking/.dev.vars` (git-ignored) and run `npx wrangler dev`. Add `http://localhost:8787` (or wherever you serve the site) to `ALLOWED_ORIGINS`.
- **Changing hours:** edit `RULES` in `src/index.js` and `CONFIG` in `js/book-call.js`, then redeploy the Worker and push the site.
