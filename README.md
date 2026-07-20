# SABA-OC Website

Production-ready Next.js website for the **South Asian Bar Association of Orange County (SABA-OC)**.

Membership registration and payments remain on Wild Apricot. This site is the marketing, events, and information layer.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Framer Motion (restrained)
- Lucide icons
- Netlify deployment via `@netlify/plugin-nextjs`

## Getting started

```bash
cd SABA-OC
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run lint    # eslint
```

## Environment

Optional:

```bash
NEXT_PUBLIC_SITE_URL=https://www.sabaoc.org
```

Defaults to `https://www.sabaoc.org` for canonical URLs, Open Graph, sitemap, and robots.

## Deploy on Netlify

1. Connect this repository to Netlify.
2. Build settings are in `netlify.toml` (`npm run build` + Next.js runtime plugin).
3. Enable form detection so the Contact form (`name="contact"`) is registered.
4. Set `NEXT_PUBLIC_SITE_URL` to the production domain if different from sabaoc.org.

## Updating content

Nontechnical editors: see **[CONTENT.md](./CONTENT.md)**.

Frequently changed data lives in:

| File | Purpose |
|------|---------|
| `src/data/site.ts` | Org name, mission, membership URL, announcement bar, socials |
| `src/data/events.ts` | Events, RSVP links, featured flag |
| `src/data/leadership.ts` | Officers, board, steering committee |
| `src/data/gallery.ts` | Gallery albums and images |
| `src/data/sponsors.ts` | Tiers, current sponsors, sponsorship contact |
| `src/data/navigation.ts` | Primary / footer navigation |

Images live in `public/images/`.

## Project structure

```
src/
  app/           # Pages (App Router)
  components/    # Shared UI
  data/          # Editable content
  lib/           # SEO + helpers
public/images/   # Placeholder and client assets
```

## Notes for launch

- Replace placeholder photography and leadership headshots.
- Confirm Wild Apricot membership URL in `src/data/site.ts`.
- Add RSVP URLs for events when available.
- Replace Privacy placeholder with counsel-approved language.
- Add official logo / favicon when provided.
- Do not invent bios, stats, or sponsor pricing.

## License

Private project for SABA-OC. All rights reserved.
