# SABA-OC New Website — Handoff for Executive Director

Hi — this document is a plain-language summary of the new SABA-OC website: what's been built, where it is, and what you need to do to make it live.

---

## What's done

A brand-new website for SABA-OC has been built and is ready for review. You can see it right now at:

> **Preview:** [https://saba-oc.netlify.app](https://saba-oc.netlify.app/)

This preview is fully functional. It includes pages for events, leadership, gallery, sponsors, and more. Membership registration and payments still go through your existing Wild Apricot portal — the website links there seamlessly.

---

## What's needed to go live at www.sabaoc.org

Right now, `www.sabaoc.org` still points to your old Squarespace site. To make the new site live, you just need to **change where the domain points** — a simple DNS update at your domain registrar.

### The short version

1. Log in to wherever `sabaoc.org` is registered (Squarespace, GoDaddy, Namecheap, etc.)
2. Change the DNS records for `www.sabaoc.org` to point to Netlify instead of Squarespace
3. That's it — the new site goes live

The old Squarespace site is not deleted or affected. If anything goes wrong, you can switch back in minutes.

### Do you need a developer for this?

The DNS change itself takes about 5 minutes and doesn't require a developer — just access to your domain registrar account. However, if you're not comfortable with DNS settings, any IT professional or web developer can do this quickly. Detailed step-by-step instructions are in the technical handoff document (`HANDOFF.md` in the code repository).

---

## You can host wherever you want

The site is currently hosted on **Netlify** (free). This is the path of least resistance — it's already set up and working.

However, you are not locked in. The website is built with standard technology (Next.js) and can be moved to any modern hosting provider — Vercel, AWS, Cloudflare, etc. The code is yours. If you ever want to switch hosts, any web developer can set that up.

**My recommendation:** Stay on Netlify for now. It's free, fast, and already configured. You can always migrate later if needed.

---

## Ongoing updates

The website content — events, leadership roster, sponsors, gallery photos — lives in simple text files in the code repository. There is a content editing guide (`CONTENT.md`) included in the project that explains how to update each section.

Changes can be made:
- By editing files directly on GitHub (no coding software needed)
- By a developer using a code editor

When a change is saved to the repository, the live site automatically rebuilds and updates within a couple of minutes.

---

## What you'll want to take ownership of

1. **GitHub repository** — the source code is currently at [github.com/sunnydalal86/SABA-OC](https://github.com/sunnydalal86/SABA-OC) under a personal account. I recommend creating a SABA-OC organization on GitHub and transferring the repo there so it belongs to the organization.

2. **Netlify account** — the preview site is on Netlify. You'll want to either get access to the existing Netlify account or create your own and reconnect the repository. It takes about 5 minutes.

3. **Domain registrar access** — whoever manages `sabaoc.org` needs to make the DNS change described above.

---

## Before you flip the switch

Review the preview site and confirm:

- [ ] Leadership photos and bios are up to date
- [ ] Upcoming events and RSVP links are correct
- [ ] Sponsor logos and tier placements are accurate
- [ ] Contact email is set (currently a placeholder)
- [ ] Privacy policy text has been reviewed
- [ ] Social media links are correct

Once you're satisfied with the preview, the DNS change makes it live. There's no "big migration" — it's just telling the internet where `www.sabaoc.org` should go.

---

## Key links

| Resource | Link |
|----------|------|
| Preview site | [saba-oc.netlify.app](https://saba-oc.netlify.app/) |
| Source code | [github.com/sunnydalal86/SABA-OC](https://github.com/sunnydalal86/SABA-OC) |
| Content editing guide | `CONTENT.md` in the repository |
| Technical handoff | `HANDOFF.md` in the repository |
| Wild Apricot (membership) | [SabaOrangeCounty.wildapricot.org](https://SabaOrangeCounty.wildapricot.org) |

---

*If you have questions about any of this, I'm happy to help with the transition.*
