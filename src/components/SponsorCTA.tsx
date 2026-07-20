import { Mail } from "lucide-react";
import { sponsorshipInquiry, sponsorshipPacketUrl } from "@/data/sponsors";
import { ButtonLink } from "./Button";
import { SectionHeading } from "./SectionHeading";

export function SponsorCTA() {
  const mailHref = `mailto:${sponsorshipInquiry.email}?subject=SABA-OC%20Sponsorship%20Inquiry`;

  return (
    <section className="bg-ivory-deep">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-8 rounded-sm border border-border bg-white p-8 lg:grid-cols-12 lg:p-12">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Sponsorship"
              title="Partner with SABA-OC"
              description="Law firms, corporations, legal service providers, and community partners can help advance mentorship, programming, and public service across Orange County."
            />
            <p className="mt-4 text-sm text-muted">{sponsorshipInquiry.note}</p>
          </div>
          <div className="flex flex-col justify-end gap-3 lg:col-span-5">
            <ButtonLink href="/sponsors" size="lg">
              View Sponsorship Opportunities
            </ButtonLink>
            <ButtonLink href={mailHref} external variant="secondary" size="lg">
              <Mail className="size-4" aria-hidden />
              Contact the Sponsorship Team
            </ButtonLink>
            {sponsorshipPacketUrl ? (
              <ButtonLink href={sponsorshipPacketUrl} external variant="ghost">
                Download sponsorship packet
              </ButtonLink>
            ) : (
              <p className="text-xs text-muted">
                Sponsorship packet available upon request.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
