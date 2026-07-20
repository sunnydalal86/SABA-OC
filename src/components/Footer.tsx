import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { footerNav } from "@/data/navigation";
import { siteConfig } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();
  const socials = [
    { label: "LinkedIn", href: siteConfig.social.linkedin },
    { label: "Instagram", href: siteConfig.social.instagram },
    { label: "Facebook", href: siteConfig.social.facebook },
    { label: "X", href: siteConfig.social.x },
  ].filter((s) => s.href);

  return (
    <footer className="mt-auto border-t border-border bg-navy text-ivory">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-5">
          <p className="font-serif text-2xl tracking-tight">{siteConfig.shortName}</p>
          <p className="mt-2 text-sm text-ivory/70">{siteConfig.name}</p>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-ivory/75">
            {siteConfig.missionShort}
          </p>
          <p className="mt-6 text-sm text-gold-soft">{siteConfig.locale}</p>
        </div>

        <div className="lg:col-span-3">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-soft">
            Explore
          </p>
          <ul className="mt-4 space-y-2">
            {footerNav.slice(0, 6).map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-ivory/80 transition-colors hover:text-ivory"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-4">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-soft">
            Get Involved
          </p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={siteConfig.membershipUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-ivory/90 hover:text-ivory"
              >
                Become a Member
                <ExternalLink className="size-3.5 opacity-70" aria-hidden />
              </a>
            </li>
            <li>
              <Link href="/events" className="text-ivory/80 hover:text-ivory">
                Upcoming Events
              </Link>
            </li>
            <li>
              <Link href="/sponsors" className="text-ivory/80 hover:text-ivory">
                Sponsor SABA-OC
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-ivory/80 hover:text-ivory">
                Contact
              </Link>
            </li>
          </ul>

          {socials.length > 0 ? (
            <ul className="mt-6 flex flex-wrap gap-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-ivory/70 hover:text-gold-soft"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-6 text-xs text-ivory/50">
              Social profiles coming soon.
            </p>
          )}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-5 text-xs text-ivory/55 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-ivory">
              Privacy
            </Link>
            <Link href="/accessibility" className="hover:text-ivory">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
