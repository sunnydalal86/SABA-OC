import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { footerNav } from "@/data/navigation";
import { siteConfig } from "@/data/site";

function SocialLogo({ brand }: { brand: "linkedin" | "instagram" | "facebook" }) {
  if (brand === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" className="size-8" aria-hidden>
        <rect width="24" height="24" rx="4" fill="#0A66C2" />
        <path
          fill="#fff"
          d="M7.05 9.2H4.7V19h2.35V9.2zM5.87 4.55a1.38 1.38 0 1 0 0 2.76 1.38 1.38 0 0 0 0-2.76zM19.3 19h-2.34v-4.76c0-1.2-.43-2.02-1.5-2.02-.82 0-1.3.55-1.52 1.08-.08.19-.1.46-.1.73V19H11.5s.04-8.35 0-9.2h2.34v1.3c.31-.48 1.1-1.36 2.68-1.36 1.96 0 3.43 1.28 3.43 4.03V19z"
        />
      </svg>
    );
  }

  if (brand === "instagram") {
    return (
      <svg viewBox="0 0 24 24" className="size-8" aria-hidden>
        <defs>
          <linearGradient id="saba-instagram" x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#f9ce34" />
            <stop offset="45%" stopColor="#ee2a7b" />
            <stop offset="100%" stopColor="#6228d7" />
          </linearGradient>
        </defs>
        <rect width="24" height="24" rx="6" fill="url(#saba-instagram)" />
        <rect x="6.2" y="6.2" width="11.6" height="11.6" rx="3.4" fill="none" stroke="#fff" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="2.55" fill="none" stroke="#fff" strokeWidth="1.6" />
        <circle cx="16.15" cy="7.85" r="0.9" fill="#fff" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="size-8" aria-hidden>
      <rect width="24" height="24" rx="4" fill="#1877F2" />
      <path
        fill="#fff"
        d="M15.9 12.6h-2.05V20h-2.7v-7.4H9.3V9.9h1.85V8.45c0-1.85 1.1-2.95 2.85-2.95.8 0 1.6.1 1.6.1v1.85h-.95c-.9 0-1.15.55-1.15 1.15V9.9h2.15l-.35 2.7z"
      />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  const socials = [
    { label: "LinkedIn", href: siteConfig.social.linkedin, brand: "linkedin" as const },
    { label: "Instagram", href: siteConfig.social.instagram, brand: "instagram" as const },
    { label: "Facebook", href: siteConfig.social.facebook, brand: "facebook" as const },
    { label: "X", href: siteConfig.social.x, brand: null },
  ].filter((s) => s.href && s.brand);

  return (
    <footer className="mt-auto border-t border-border bg-navy text-ivory">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-5">
          <Image
            src="/images/brand/logo-on-dark.png"
            alt="SABA-OC, South Asian Bar Association of Orange County"
            width={1009}
            height={353}
            className="h-14 w-auto"
          />
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
                    aria-label={s.label}
                    className="inline-flex rounded-sm transition-opacity hover:opacity-80"
                  >
                    <SocialLogo brand={s.brand!} />
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
            <span className="text-ivory/35">·</span>
            <span>
              Website by{" "}
              <a
                href="https://dizzledigital.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ivory/65 transition-colors hover:text-ivory"
              >
                Dizzle Digital
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
