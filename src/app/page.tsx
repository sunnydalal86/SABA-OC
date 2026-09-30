import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Hero } from "@/components/Hero";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { Pillars } from "@/components/Pillars";
import { FeaturedEvent } from "@/components/FeaturedEvent";
import { MembershipCTA } from "@/components/MembershipCTA";
import { LeadershipCard } from "@/components/LeadershipCard";
import { SponsorCTA } from "@/components/SponsorCTA";
import { ButtonLink } from "@/components/Button";
import { EventJsonLd } from "@/components/JsonLd";
import { getFeaturedEvent } from "@/data/events";
import { getByCategory } from "@/data/leadership";
import { galleryAlbums } from "@/data/gallery";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  path: "/",
});

export default function HomePage() {
  const featured = getFeaturedEvent();
  const executives = getByCategory("executive");
  const photoStory = galleryAlbums
    .flatMap((a) => a.images)
    .slice(0, 4);

  return (
    <>
      {featured ? <EventJsonLd event={featured} /> : null}
      <Hero
        imageSrc="/images/gallery/events/dsc-00171.jpg"
        imageAlt="SABA-OC members gathered for an evening reception"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <FadeIn>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="Our Mission"
                title="A hub for connection, mentorship, advocacy, and growth"
                description={siteConfig.missionShort}
              />
            </div>
            <div className="lg:col-span-5 lg:text-right">
              <p className="text-sm leading-relaxed text-muted">
                {siteConfig.sabanaNote}
              </p>
              <ButtonLink href="/about" variant="secondary" className="mt-5">
                Learn more about SABA-OC
              </ButtonLink>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="border-t border-border bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <FadeIn>
            <SectionHeading
              eyebrow="What We Do"
              title="Six pillars that guide our work"
              description="SABA-OC exists to strengthen South Asian legal professionals and expand access to justice across Orange County."
            />
            <div className="mt-12">
              <Pillars />
            </div>
          </FadeIn>
        </div>
      </section>

      {featured ? <FeaturedEvent event={featured} /> : null}

      <MembershipCTA />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <FadeIn>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Leadership"
              title="Meet our executive officers"
              description="Volunteer leaders building SABA-OC as an independent Orange County chapter."
            />
            <ButtonLink href="/leadership" variant="secondary" className="shrink-0">
              Meet Our Leadership
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {executives.map((member) => (
              <LeadershipCard key={member.id} member={member} />
            ))}
          </div>
        </FadeIn>
      </section>

      <section className="border-y border-border bg-ivory-deep">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <FadeIn>
            <SectionHeading
              eyebrow="Community Impact"
              title="Building presence with purpose"
              description="SABA-OC connects legal professionals, supports future attorneys, increases South Asian representation, delivers public-interest programming, and partners across Orange County to expand access to justice."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Connect",
                  text: "Create space for attorneys, judges, students, and allies to build lasting professional relationships.",
                },
                {
                  title: "Elevate",
                  text: "Support visibility, mentorship, and leadership pathways for South Asian legal professionals.",
                },
                {
                  title: "Serve",
                  text: "Advance public service through clinics, partnerships, and community-centered legal programming.",
                },
              ].map((item) => (
                <div key={item.title} className="border-t-2 border-gold pt-5">
                  <h3 className="font-serif text-2xl text-navy">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <FadeIn>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Photo Story"
              title="Moments from our community"
              description="A small selection from recent gatherings — full albums live in the gallery."
            />
            <ButtonLink href="/gallery" variant="secondary">
              View the Gallery
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {photoStory.map((image) => (
              <div
                key={image.src}
                className="relative aspect-[4/5] overflow-hidden rounded-sm border border-border bg-navy"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      <SponsorCTA />

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <FadeIn>
            <div className="grid gap-8 rounded-sm border border-border bg-ivory p-8 lg:grid-cols-12 lg:p-12">
              <div className="lg:col-span-7">
                <SectionHeading
                  eyebrow="Stay Connected"
                  title="Events, volunteering, and partnerships"
                  description="Receive updates by joining as a member, or reach out directly about volunteering, sponsorship, and collaboration."
                />
              </div>
              <div className="flex flex-col justify-end gap-3 lg:col-span-5">
                <ButtonLink href={siteConfig.membershipUrl} external size="lg">
                  Become a Member
                  <ExternalLink className="size-4 opacity-70" aria-hidden />
                </ButtonLink>
                <ButtonLink href="/contact" variant="secondary" size="lg">
                  Contact SABA-OC
                </ButtonLink>
                <p className="text-xs text-muted">
                  Prefer email updates? Membership is the best way to stay informed
                  while Wild Apricot manages registration.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
