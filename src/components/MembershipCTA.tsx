import { ExternalLink } from "lucide-react";
import { siteConfig } from "@/data/site";
import { ButtonLink } from "./Button";
import { SectionHeading } from "./SectionHeading";

const benefits = [
  "Professional networking across Orange County",
  "Educational panels and programming",
  "Mentorship for students and new lawyers",
  "Community events and cultural celebrations",
  "Leadership opportunities within SABA-OC",
  "Public service and pro bono initiatives",
  "Connections to regional and national SABA chapters",
];

export function MembershipCTA({ compact = false }: { compact?: boolean }) {
  return (
    <section className={compact ? "" : "bg-navy text-ivory"}>
      <div
        className={
          compact
            ? ""
            : "mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
        }
      >
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Membership"
              title="Belong to Orange County’s South Asian legal community"
              description="Join attorneys, judges, law students, and allies who are building connection, visibility, and opportunity together."
              light={!compact}
            />
          </div>
          <div className="lg:col-span-6">
            <ul className="grid gap-3 sm:grid-cols-2">
              {benefits.map((item) => (
                <li
                  key={item}
                  className={
                    compact
                      ? "border-l-2 border-gold pl-3 text-sm text-muted"
                      : "border-l-2 border-gold/50 pl-3 text-sm text-ivory/80"
                  }
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <ButtonLink
                href={siteConfig.membershipUrl}
                external
                variant={compact ? "primary" : "light"}
                size="lg"
              >
                Join SABA-OC
                <ExternalLink className="size-4 opacity-70" aria-hidden />
              </ButtonLink>
              <p
                className={
                  compact
                    ? "mt-3 text-xs text-muted"
                    : "mt-3 text-xs text-ivory/55"
                }
              >
                Membership registration is handled securely through Wild Apricot.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
