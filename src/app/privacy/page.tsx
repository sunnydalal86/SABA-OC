import { InteriorHero } from "@/components/InteriorHero";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Privacy",
  description:
    "How the South Asian Bar Association of Orange County website handles contact form submissions, and where membership and payments are processed.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <InteriorHero
        title="Privacy"
        description="How SABA-OC handles information submitted through this website."
        breadcrumbs={[{ label: "Privacy" }]}
      />
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="prose-saba space-y-4 leading-relaxed text-muted">
          <p>
            The {siteConfig.name} ({siteConfig.shortName}) operates this website
            to share information about the organization, its events, and ways to
            get involved. This site does not process membership dues or event
            payments.
          </p>
        </div>

        <h2 className="mt-10 font-serif text-2xl text-navy">Contact form</h2>
        <div className="prose-saba mt-4 space-y-4 leading-relaxed text-muted">
          <p>
            If you use the contact form, we receive the information you submit:
            your name, email address, organization, phone number if you provide
            one, the topic you select, and your message. We use that information
            to read and respond to your inquiry, including questions about
            membership, sponsorship, events, volunteering, partnerships, and
            media.
          </p>
          <p>
            Submissions are delivered through Netlify, the service that hosts
            this website. Netlify receives each submission so it can be stored
            and forwarded to {siteConfig.shortName}. We do not use the form to
            build a marketing list. We keep submissions for as long as we need
            them to respond and for ordinary organizational records.
          </p>
        </div>

        <h2 className="mt-10 font-serif text-2xl text-navy">
          Membership, registration, and payments
        </h2>
        <div className="prose-saba mt-4 space-y-4 leading-relaxed text-muted">
          <p>
            Membership registration, dues, member records, event registration,
            and ticket payments are handled on our{" "}
            <a
              href={siteConfig.membershipUrl}
              className="text-navy underline underline-offset-2"
            >
              Wild Apricot portal
            </a>
            , not on this website. When you join, renew, RSVP, or buy a ticket,
            you leave this site and provide that information directly to Wild
            Apricot. Wild Apricot processes it under its own privacy policy.{" "}
            {siteConfig.shortName} uses the member and registration information
            Wild Apricot provides to administer membership and events.
          </p>
        </div>

        <h2 className="mt-10 font-serif text-2xl text-navy">
          What this site does not do
        </h2>
        <div className="prose-saba mt-4 space-y-4 leading-relaxed text-muted">
          <p>
            We do not sell personal information. This website does not use
            advertising or analytics cookies, and browsing the public pages does
            not require an account.
          </p>
        </div>

        <h2 className="mt-10 font-serif text-2xl text-navy">Other sites</h2>
        <div className="prose-saba mt-4 space-y-4 leading-relaxed text-muted">
          <p>
            Some pages link to Wild Apricot, Google Calendar, and{" "}
            {siteConfig.shortName}’s social media profiles. Those sites have
            their own privacy practices.
          </p>
        </div>

        <h2 className="mt-10 font-serif text-2xl text-navy">Questions</h2>
        <div className="prose-saba mt-4 space-y-4 leading-relaxed text-muted">
          <p>
            Questions about this statement may be sent through the{" "}
            <a href="/contact" className="text-navy underline underline-offset-2">
              Contact
            </a>{" "}
            form.
          </p>
        </div>
      </section>
    </>
  );
}
