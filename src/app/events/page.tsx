"use client";

import { useMemo, useState } from "react";
import { InteriorHero } from "@/components/InteriorHero";
import { SectionHeading } from "@/components/SectionHeading";
import { EventCard } from "@/components/EventCard";
import { FeaturedEvent } from "@/components/FeaturedEvent";
import {
  getFeaturedEvent,
  getPastEvents,
  getUpcomingEvents,
  getVolunteerEvents,
} from "@/data/events";
import { cn } from "@/lib/utils";

type Tab = "upcoming" | "volunteer" | "past";

export default function EventsPage() {
  const [tab, setTab] = useState<Tab>("upcoming");
  const featured = getFeaturedEvent();
  const upcoming = getUpcomingEvents();
  const past = getPastEvents();
  const volunteer = getVolunteerEvents();

  const list = useMemo(() => {
    if (tab === "volunteer") return volunteer;
    if (tab === "past") return past;
    return upcoming;
  }, [tab, upcoming, past, volunteer]);

  return (
    <>
      <InteriorHero
        title="Events"
        description="Networking, public service, education, and celebration — programming for Orange County’s South Asian legal community."
        breadcrumbs={[{ label: "Events" }]}
      />

      {featured ? <FeaturedEvent event={featured} /> : null}

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Calendar"
          title="Browse events"
          description="Filter by upcoming programs, volunteer opportunities, or past gatherings."
        />

        <div
          className="mt-8 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Event filters"
        >
          {(
            [
              ["upcoming", "Upcoming"],
              ["volunteer", "Volunteer"],
              ["past", "Past"],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={tab === id}
              className={cn(
                "rounded-sm border px-4 py-2 text-sm transition-colors",
                tab === id
                  ? "border-navy bg-navy text-ivory"
                  : "border-border bg-white text-navy hover:border-navy/40",
              )}
              onClick={() => setTab(id)}
            >
              {label}
            </button>
          ))}
        </div>

        {list.length === 0 ? (
          <div className="mt-10 rounded-sm border border-dashed border-border bg-white p-10 text-center">
            <p className="font-serif text-2xl text-navy">No events in this view</p>
            <p className="mt-2 text-sm text-muted">
              Check back soon, or contact us to propose a program or volunteer
              opportunity.
            </p>
          </div>
        ) : (
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {list.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
