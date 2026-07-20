# Content Update Guide (SABA-OC)

This guide is for nontechnical administrators who need to update the website without redesigning it.

After editing files, a developer (or Netlify auto-deploy from Git) must rebuild/redeploy the site for changes to appear.

---

## 1. Announcement bar (homepage top)

**File:** `src/data/site.ts`

Find `announcement`:

- Set `enabled: false` to hide the bar.
- Edit `text`, `href`, and `label` to promote the next event or campaign.

## 2. Membership link

**File:** `src/data/site.ts`

Update `membershipUrl` if the Wild Apricot portal address changes.

Current default: `https://SabaOrangeCounty.wildapricot.org`

## 3. Events

**File:** `src/data/events.ts`

Each event includes:

- `title`, `date` (`YYYY-MM-DD`), `startTime`, `endTime`, `location`
- `summary` / `fullDescription`
- `rsvpUrl` (or `null` until a signup link exists)
- `featured: true` for homepage highlight (usually one upcoming event)
- `status`: `"upcoming"` or `"past"`
- `volunteer: true` and optional `volunteerRoles`

**Rules**

- Do not leave old events as `upcoming` after they occur — set `status: "past"`.
- Prefer ISO dates so sorting stays correct.

## 4. Leadership

**File:** `src/data/leadership.ts`

Add people with:

- `name`, `title`, `firm`, `image`, `bio`, `externalProfile`, `email`, `category`

Categories:

- `"executive"` — officers
- `"board"` — board of directors
- `"steering"` — steering committee

If a bio is unknown, set `bio: null` (the site shows “Biography coming soon”).

**Do not invent biographies or names.**

Headshots: place files in `public/images/leadership/` and point `image` to that path.

## 5. Gallery

**File:** `src/data/gallery.ts`

Albums have a cover image plus an `images` list (`src` + `alt`).

Add photos under `public/images/gallery/` and reference them in the album.

Write accurate `alt` text for accessibility.

## 6. Sponsors

**File:** `src/data/sponsors.ts`

- Update `currentSponsors` with confirmed partners only.
- Keep pricing out of the site — use “contact for current levels.”
- Sponsorship contact email/name come from `site.ts` / `sponsors.ts`.
- Set `sponsorshipPacketUrl` when a PDF is hosted.

## 7. Contact & social

**File:** `src/data/site.ts`

- Add social URLs when official profiles exist (`linkedin`, `instagram`, etc.).
- Leave as `null` until confirmed.

## 8. Images

Place files in:

- `public/images/events/`
- `public/images/leadership/`
- `public/images/gallery/`
- `public/images/brand/` (logo, Open Graph image)

Prefer JPG/WebP for photos. SVG placeholders can remain until real photography arrives.

## Need help?

Ask the web maintainer to redeploy after your edits, or open a pull request if the project is on GitHub.
