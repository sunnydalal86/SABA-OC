import { ExternalLink } from "lucide-react";
import { InteriorHero } from "@/components/InteriorHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ButtonLink } from "@/components/Button";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Membership",
  description:
    "Join SABA-OC for networking, mentorship, educational programming, community events, leadership opportunities, and public service.",
  path: "/membership",
});

const benefits = [
  {
    title: "Professional networking",
    text: "Meet colleagues across practice areas and build relationships throughout Orange County.",
  },
  {
    title: "Educational panels",
    text: "Access programming designed for attorneys, students, and legal professionals.",
  },
  {
    title: "Mentorship",
    text: "Connect with mentors and mentees who understand the South Asian legal experience.",
  },
  {
    title: "Community events",
    text: "Celebrate culture and belonging through gatherings like Diwali and member mixers.",
  },
  {
    title: "Leadership opportunities",
    text: "Serve on committees and help shape the direction of an independent OC chapter.",
  },
  {
    title: "Public service",
    text: "Volunteer at clinics and initiatives that expand access to justice.",
  },
];

const faqs = [
  {
    q: "Who can join?",
    a: "SABA-OC welcomes South Asian attorneys, law students, judges, legal professionals, and allies who support our mission.",
  },
  {
    q: "How do I register and pay?",
    a: "Membership registration, dues, and member administration are handled through our Wild Apricot portal. This website is the information and marketing layer only.",
  },
  {
    q: "Are there student rates?",
    a: "Student and other membership categories are managed in Wild Apricot. Visit the membership portal for current options.",
  },
  {
    q: "How do I get event updates?",
    a: "Members receive organization communications through Wild Apricot. You can also follow Events on this site and contact us about specific programs.",
  },
];

export default function MembershipPage() {
  return (
    <>
      <InteriorHero
        title="Membership"
        description="Join a growing Orange County community dedicated to professional growth, mentorship, advocacy, and service."
        breadcrumbs={[{ label: "Membership" }]}
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Join SABA-OC"
              title="A polished path into the community"
              description="Become a member to access events, panels, and programming that foster professional and personal growth, community, and connection."
            />
          </div>
          <div className="lg:col-span-5">
            <ButtonLink href={siteConfig.membershipUrl} external size="lg">
              Become a Member on Wild Apricot
              <ExternalLink className="size-4 opacity-70" aria-hidden />
            </ButtonLink>
            <p className="mt-3 text-xs text-muted">
              Opens in a new tab. Registration and payment are processed by Wild
              Apricot.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Benefits" title="What membership unlocks" />
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div key={b.title} className="border-t border-border pt-5">
                <h3 className="font-serif text-xl text-navy">{b.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Ways to Participate"
          title="More than a membership card"
          description="Attend events, volunteer at clinics, mentor students, sponsor programming, or help lead committees."
        />
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/events" variant="secondary">
            View events
          </ButtonLink>
          <ButtonLink href="/sponsors" variant="secondary">
            Sponsor SABA-OC
          </ButtonLink>
          <ButtonLink href="/contact" variant="secondary">
            Ask a membership question
          </ButtonLink>
        </div>
      </section>

      <section className="border-t border-border bg-ivory-deep">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="FAQ" title="Common questions" />
          <dl className="mt-10 space-y-6">
            {faqs.map((item) => (
              <div key={item.q} className="border-b border-border pb-6">
                <dt className="font-serif text-xl text-navy">{item.q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
