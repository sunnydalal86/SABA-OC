import { InteriorHero } from "@/components/InteriorHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { sponsorshipInquiry } from "@/data/sponsors";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Contact the South Asian Bar Association of Orange County about membership, sponsorship, events, volunteering, and partnerships.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <InteriorHero
        title="Contact Us"
        description="If you are interested in collaborating, share your information and we will be in touch."
        breadcrumbs={[{ label: "Contact" }]}
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Get in Touch"
              title="We welcome your message"
              description="Use the form for general inquiries. For sponsorship questions, you may also reach the sponsorship contact listed below."
            />
            <dl className="mt-8 space-y-5 text-sm">
              <div>
                <dt className="font-medium text-navy">Location</dt>
                <dd className="mt-1 text-muted">Orange County, California</dd>
              </div>
              <div>
                <dt className="font-medium text-navy">Sponsorship inquiries</dt>
                <dd className="mt-1 text-muted">
                  {sponsorshipInquiry.name}
                  <br />
                  <a
                    href={`mailto:${sponsorshipInquiry.email}`}
                    className="text-navy underline underline-offset-2"
                  >
                    {sponsorshipInquiry.email}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
