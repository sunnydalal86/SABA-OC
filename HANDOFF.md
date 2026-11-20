# SABA-OC Website — Technical Handoff

This document explains where the new SABA-OC website lives, how it works, and what steps are needed to make it the live site at **www.sabaoc.org**.

---

## Where things are right now

| What | Where | Notes |
|------|-------|-------|
| **Source code** | [github.com/sunnydalal86/SABA-OC](https://github.com/sunnydalal86/SABA-OC) | The full website codebase |
| **Preview site** | [saba-oc.netlify.app](https://saba-oc.netlify.app/) | Live preview — updates automatically when code is pushed to GitHub |
| **Production domain** | `www.sabaoc.org` | Currently points to Squarespace |
| **Membership portal** | [SabaOrangeCounty.wildapricot.org](https://SabaOrangeCounty.wildapricot.org) | Unchanged — the new site links to this for membership/payments |

The new website is **fully built and functional** at the Netlify preview URL. The only remaining step to go live is pointing the `www.sabaoc.org` domain to the new site instead of Squarespace.

---

## How to go live

Going live requires two decisions:

### Decision 1: Where to host

The site is already deployed on **Netlify** (free tier). Unless there's a reason to move, the simplest path is to stay on Netlify.

Other options (Vercel, AWS, etc.) are possible since the site is a standard Next.js application, but they would require additional setup. Netlify is ready to go today.

### Decision 2: Point the domain (DNS cutover)

This is the key step. You need to update your DNS records so that `www.sabaoc.org` points to Netlify instead of Squarespace.

#### Step-by-step (staying on Netlify)

1. **Log in to Netlify** → go to the SABA-OC site → **Domain management** → **Add a custom domain** → enter `www.sabaoc.org`
2. Netlify will give you a **CNAME target** (something like `saba-oc.netlify.app`)
3. **Log in to your domain registrar** (wherever `sabaoc.org` was purchased — this might be Squarespace, GoDaddy, Namecheap, Google Domains, etc.)
4. Find the **DNS settings** for `sabaoc.org`
5. Update (or create) a **CNAME record** for `www` pointing to the Netlify target from step 2
6. For the **root domain** (`sabaoc.org` without `www`), either:
   - Add a Netlify DNS A record (Netlify provides the IP), or
   - Set up a redirect from `sabaoc.org` → `www.sabaoc.org` at the registrar level
7. Back in Netlify, enable **HTTPS** (free, automatic via Let's Encrypt) — Netlify will provision the SSL certificate once DNS propagates
8. DNS changes typically take **5 minutes to 48 hours** to propagate worldwide

> **Important:** The Squarespace site stays intact during this process. If anything goes wrong, you can point DNS back to Squarespace within minutes. There is no data loss risk.

#### If you choose a different host

The process is the same concept — the new host gives you DNS records, and you update your registrar. Every major host (Vercel, AWS Amplify, Cloudflare Pages, etc.) has documentation for custom domain setup.

---

## Ongoing website maintenance

### Updating content (events, leadership, sponsors, etc.)

Content is stored in simple data files. See **[CONTENT.md](./CONTENT.md)** for a complete guide. The key files are:

| File | What it controls |
|------|------------------|
| `src/data/site.ts` | Org name, tagline, membership URL, announcement bar, social links |
| `src/data/events.ts` | Events, dates, RSVP links |
| `src/data/leadership.ts` | Officers, board members, steering committee |
| `src/data/gallery.ts` | Photo gallery albums |
| `src/data/sponsors.ts` | Sponsor tiers and current sponsors |

Images go in `public/images/` (organized by subfolder: `events/`, `leadership/`, `gallery/`, `sponsors/`).

### How changes get published

1. Someone edits a file in the GitHub repository (directly on github.com or via a code editor)
2. The change is pushed/merged to the `main` branch
3. Netlify automatically rebuilds and deploys the site (takes ~1-2 minutes)
4. The live site is updated — no manual deployment needed

### Who can make changes

Anyone with **write access** to the GitHub repository can edit content. This can be done:
- Directly on github.com (click a file → pencil icon → edit → commit)
- Using a code editor like VS Code or Cursor
- Via pull requests for review before publishing

---

## Transferring ownership

The GitHub repository currently lives under a personal account. To give SABA-OC full control:

### Option A: Transfer the repository (recommended)

1. Create a **GitHub organization** for SABA-OC (e.g., `saba-oc`) at [github.com/organizations/plan](https://github.com/organizations/plan) — the free tier is fine
2. Add team members to the organization
3. The current owner transfers the repo: **Repository Settings → General → Danger Zone → Transfer ownership** → select the new org
4. All issues, pull requests, and deployment connections transfer automatically
5. Update the Netlify site to point to the new repo location (Netlify dashboard → Build & deploy → Link to a different repository)

### Option B: Add collaborators

If a full transfer isn't needed immediately:
1. Go to the repo → **Settings → Collaborators** → invite team members
2. Grant **Write** or **Admin** access as appropriate

### Netlify account

The Netlify site should also be transferred or recreated under an account the organization controls:
1. Create a Netlify account with an organizational email
2. Either transfer the existing site (Netlify team settings) or create a new site connected to the GitHub repo
3. The `netlify.toml` file in the repo has all the build configuration, so a new Netlify site will work with zero additional setup

---

## Tech stack summary

For any developer who works on the site in the future:

- **Framework:** Next.js 16 (App Router) + TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Hosting:** Netlify (with `@netlify/plugin-nextjs`)
- **No CMS / no database** — content is in TypeScript data files
- **No authentication** — membership is handled entirely by Wild Apricot

### Local development

```bash
git clone https://github.com/sunnydalal86/SABA-OC.git
cd SABA-OC
npm install
npm run dev
# Opens at http://localhost:3000
```

See **[README.md](./README.md)** for more details.

---

## Pre-launch checklist

Before pointing the live domain, confirm:

- [ ] Leadership photos and bios are current
- [ ] Upcoming events are accurate with correct RSVP links
- [ ] Sponsor logos and tiers are confirmed
- [ ] Contact email is set in `src/data/site.ts` (currently placeholder)
- [ ] Privacy policy language has been reviewed by counsel
- [ ] Wild Apricot membership URL is correct
- [ ] Official logo/favicon has been added
- [ ] Social media links are confirmed

---

## Questions?

For technical questions about the codebase, refer to:
- **[README.md](./README.md)** — developer setup and project structure
- **[CONTENT.md](./CONTENT.md)** — content editing guide for non-developers

For DNS or hosting help, any web developer or IT professional can assist — the setup is standard and well-documented by Netlify, Vercel, and other hosts.
