import { InteriorHero } from "@/components/InteriorHero";
import { SectionHeading } from "@/components/SectionHeading";
import { LeadershipCard } from "@/components/LeadershipCard";
import { ButtonLink } from "@/components/Button";
import { getByCategory } from "@/data/leadership";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Leadership",
  description:
    "Meet the executive officers, board of directors, and steering committee of the South Asian Bar Association of Orange County.",
  path: "/leadership",
});

export default function LeadershipPage() {
  const executives = getByCategory("executive");
  const board = getByCategory("board");
  const steering = getByCategory("steering");

  return (
    <>
      <InteriorHero
        title="Leadership"
        description="Volunteer leaders guiding SABA-OC’s growth as an independent Orange County chapter."
        breadcrumbs={[{ label: "Leadership" }]}
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Executive Officers"
          title="Current officers"
          description="The executive team stewarding day-to-day leadership and chapter development."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {executives.map((member) => (
            <LeadershipCard key={member.id} member={member} />
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Board of Directors"
            title="Board"
            description="Board members will be listed here once official bios and confirmations are provided."
          />
          {board.length === 0 ? (
            <EmptyState
              title="Board listings coming soon"
              text="We are preparing a complete board directory with photos and biographies. In the meantime, connect with our executive officers or contact us about leadership opportunities."
            />
          ) : (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {board.map((member) => (
                <LeadershipCard key={member.id} member={member} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Steering Committee"
          title="Steering Committee"
          description="Committee members helping guide programming, outreach, and chapter priorities."
        />
        {steering.length === 0 ? (
          <EmptyState
            title="Steering Committee listings coming soon"
            text="Names and biographies will appear here when confirmed. Interested in serving? Reach out through our contact form."
          />
        ) : (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {steering.map((member) => (
              <LeadershipCard key={member.id} member={member} />
            ))}
          </div>
        )}
        <div className="mt-10">
          <ButtonLink href="/contact" variant="secondary">
            Inquire about leadership opportunities
          </ButtonLink>
        </div>
      </section>
    </>
  );
}

function EmptyState({ title, text }: { title: string; text: string }) {
  return (
    <div className="mt-8 rounded-sm border border-dashed border-border bg-ivory p-8">
      <h3 className="font-serif text-2xl text-navy">{title}</h3>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{text}</p>
    </div>
  );
}
