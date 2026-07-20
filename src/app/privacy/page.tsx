import { InteriorHero } from "@/components/InteriorHero";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Privacy",
  description: "Privacy information for the South Asian Bar Association of Orange County website.",
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
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 prose-saba text-muted">
        <p>
          This page is a placeholder privacy statement for the {siteConfig.name}{" "}
          website. Replace this content with counsel-approved privacy language
          before public launch.
        </p>
        <p className="mt-4">
          Information submitted through the contact form is used to respond to
          inquiries about membership, sponsorship, events, volunteering,
          partnerships, and related matters. Membership registration and payment
          data are processed by Wild Apricot under that platform’s policies.
        </p>
        <p className="mt-4">
          Questions about this policy may be submitted through the{" "}
          <a href="/contact" className="text-navy underline underline-offset-2">
            Contact
          </a>{" "}
          page.
        </p>
      </section>
    </>
  );
}
