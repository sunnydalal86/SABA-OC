import { Mail } from "lucide-react";
import { InteriorHero } from "@/components/InteriorHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ButtonLink } from "@/components/Button";
import {
  currentSponsors,
  sponsorshipInquiry,
  sponsorshipPacketUrl,
  sponsorTiers,
} from "@/data/sponsors";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Sponsors",
  description:
    "Partner with SABA-OC to support mentorship, programming, and public service for Orange County’s South Asian legal community.",
  path: "/sponsors",
});

export default function SponsorsPage() {
  const mailHref = `mailto:${sponsorshipInquiry.email}?subject=SABA-OC%20Sponsorship%20Inquiry`;

  return (
    <>
      <InteriorHero
        title="Sponsors"
        description="Support a growing chapter that connects legal professionals, elevates representation, and expands access to justice."
        breadcrumbs={[{ label: "Sponsors" }]}
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Sponsor"
          title="Reach a valued professional audience"
          description="Sponsors help underwrite events, clinics, and educational programming while building relationships with attorneys, students, judges, and community partners across Orange County."
        />
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {[
            "Visibility with South Asian legal professionals in Orange County",
            "Association with mentorship, advocacy, and public service",
            "Brand presence at networking and cultural celebrations",
            "Opportunities to support access-to-justice programming",
          ].map((item) => (
            <li
              key={item}
              className="border-l-2 border-gold bg-white px-4 py-3 text-sm text-charcoal"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="border-y border-border bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Opportunities"
            title="Sample sponsorship levels"
            description="These labels illustrate typical partnership structures. Contact SABA-OC for current sponsorship levels and pricing."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {sponsorTiers.map((tier) => (
              <article
                key={tier.id}
                className="flex h-full flex-col rounded-sm border border-border bg-ivory p-6"
              >
                <h3 className="font-serif text-2xl text-navy">{tier.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {tier.description}
                </p>
                <ul className="mt-5 flex-1 space-y-2 text-sm text-charcoal/85">
                  {tier.benefits.map((b) => (
                    <li key={b} className="pl-3 border-l border-gold/50">
                      {b}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-xs text-muted">
                  Pricing available upon request.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Current Sponsors"
          title="Thank you to our partners"
          description="We gratefully recognize organizations supporting SABA-OC programming."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {currentSponsors.map((sponsor) => (
            <div
              key={sponsor.id}
              className="flex min-h-28 items-center justify-center rounded-sm border border-border bg-white px-6 py-8 text-center"
            >
              <p className="font-serif text-xl text-navy">{sponsor.name}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-muted">
          Sponsor logos will replace text placeholders when official assets are
          provided.
        </p>
      </section>

      <section className="border-t border-border bg-navy text-ivory">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Next Step"
            title="Become a sponsor"
            description="Reach out to discuss event sponsorship, annual partnerships, and in-kind support."
            light
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={mailHref} external variant="light" size="lg">
              <Mail className="size-4" aria-hidden />
              Email {sponsorshipInquiry.name}
            </ButtonLink>
            <ButtonLink href="/contact" variant="light" size="lg">
              General inquiry form
            </ButtonLink>
            {sponsorshipPacketUrl ? (
              <ButtonLink href={sponsorshipPacketUrl} external variant="ghost" className="!text-ivory">
                Download packet
              </ButtonLink>
            ) : null}
          </div>
          <p className="mt-4 text-sm text-ivory/65">{sponsorshipInquiry.note}</p>
        </div>
      </section>
    </>
  );
}
