import Link from "next/link";
import { InteriorHero } from "@/components/InteriorHero";
import { SectionHeading } from "@/components/SectionHeading";
import { MembershipCTA } from "@/components/MembershipCTA";
import { ButtonLink } from "@/components/Button";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About",
  description:
    "Learn about the South Asian Bar Association of Orange County — our mission, story, values, and the community we serve.",
  path: "/about",
});

const values = [
  {
    title: "Inclusion",
    text: "We welcome South Asian legal professionals and all who support our mission of equity and belonging.",
  },
  {
    title: "Excellence",
    text: "We elevate professional standards through education, mentorship, and thoughtful programming.",
  },
  {
    title: "Service",
    text: "We expand access to justice through clinics, partnerships, and public-interest initiatives.",
  },
  {
    title: "Community",
    text: "We build lasting relationships across Orange County’s legal community and neighboring SABA chapters.",
  },
];

export default function AboutPage() {
  return (
    <>
      <InteriorHero
        title="About SABA-OC"
        description="Advancing the professional growth, visibility, and success of South Asian aspiring and practicing legal professionals in Orange County."
        breadcrumbs={[{ label: "About" }]}
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading eyebrow="Mission" title="Who we are" />
            <div className="prose-saba mt-6 text-base leading-relaxed text-muted">
              <p>{siteConfig.mission}</p>
              <p className="mt-4">
                For decades to come, we hope to serve as a hub for connection,
                mentorship, advocacy, and professional growth for attorneys, law
                students, judges, and legal professionals of South Asian descent —
                and for all who support our mission.
              </p>
              <p className="mt-4">
                Whether you are a seasoned practitioner, a new lawyer finding your
                path, or a student exploring the profession, SABA-OC is here to
                celebrate your journey, create space for your voice, and amplify
                your impact.
              </p>
            </div>
          </div>
          <aside className="lg:col-span-5">
            <div className="rounded-sm border border-border bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-ink">
                Recognition
              </p>
              <p className="mt-3 font-serif text-2xl text-navy leading-snug">
                {siteConfig.sabanaNote}
              </p>
              <ButtonLink href="/membership" className="mt-6" variant="secondary">
                Explore membership
              </ButtonLink>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-y border-border bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Story"
            title="An independent Orange County chapter"
            description="SABA-OC launched with gratitude for the South Asian Bar Association of Southern California and a clear commitment to serve Orange County exclusively."
          />
          <div className="prose-saba mt-8 max-w-3xl text-base leading-relaxed text-muted">
            <p>
              We are deeply indebted to the tireless efforts of the South Asian Bar
              Association of Southern California over the past several decades for
              representing our community. With their support, we have the resources
              necessary to launch an independent South Asian legal bar organization
              serving Orange County.
            </p>
            <p className="mt-4">
              We look forward to building stronger relationships with our SABA
              neighbors in Los Angeles and San Diego as we gain our footing as an
              independent chapter — while remaining connected to the broader South
              Asian Bar Association of North America network.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Values" title="What guides our work" />
        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {values.map((value) => (
            <div key={value.title} className="border-t border-border pt-5">
              <h3 className="font-serif text-2xl text-navy">{value.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{value.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-ivory-deep">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Who We Serve"
            title="Attorneys, students, judges, and allies"
            description="SABA-OC is for South Asian legal professionals in Orange County — and for everyone who supports representation, mentorship, and access to justice."
          />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Practicing attorneys across practice areas",
              "Law students and aspiring lawyers",
              "Judges and judicial officers",
              "In-house and public-sector counsel",
              "Legal professionals and paralegals",
              "Community partners and allies",
            ].map((item) => (
              <li
                key={item}
                className="border-l-2 border-gold bg-white px-4 py-3 text-sm text-charcoal"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-muted">
            Interested in collaborating?{" "}
            <Link href="/contact" className="text-navy underline underline-offset-2">
              Contact our team
            </Link>{" "}
            or explore{" "}
            <Link href="/sponsors" className="text-navy underline underline-offset-2">
              sponsorship opportunities
            </Link>
            .
          </p>
        </div>
      </section>

      <MembershipCTA />
    </>
  );
}
