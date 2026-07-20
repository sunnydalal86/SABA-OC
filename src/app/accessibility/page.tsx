import { InteriorHero } from "@/components/InteriorHero";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Accessibility",
  description:
    "Accessibility commitment for the South Asian Bar Association of Orange County website.",
  path: "/accessibility",
});

export default function AccessibilityPage() {
  return (
    <>
      <InteriorHero
        title="Accessibility"
        description="Our commitment to an inclusive digital experience."
        breadcrumbs={[{ label: "Accessibility" }]}
      />
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 prose-saba text-muted">
        <p>
          {siteConfig.name} aims to make this website usable by as many people as
          possible. We design for keyboard navigation, visible focus states,
          sufficient color contrast, descriptive text alternatives, and reduced
          motion preferences.
        </p>
        <p className="mt-4">
          If you encounter an accessibility barrier, please let us know through
          the{" "}
          <a href="/contact" className="text-navy underline underline-offset-2">
            Contact
          </a>{" "}
          form and include the page URL and a description of the issue. We will
          work to address reported barriers.
        </p>
        <p className="mt-4 text-sm">
          This statement is a starting point and should be reviewed as the site
          and content evolve.
        </p>
      </section>
    </>
  );
}
