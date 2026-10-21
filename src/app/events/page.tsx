"use client";

import { useEffect, useMemo, useState } from "react";
import { InteriorHero } from "@/components/InteriorHero";
import { SectionHeading } from "@/components/SectionHeading";
import { EventCard } from "@/components/EventCard";
import { FeaturedEvent } from "@/components/FeaturedEvent";
import {
  events,
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
  const [expandedId, setExpandedId] = useState<string | null>(featured?.id ?? null);
  const upcoming = getUpcomingEvents();
  const past = getPastEvents();
  const volunteer = getVolunteerEvents();

  const list = useMemo(() => {
    if (tab === "volunteer") return volunteer;
    if (tab === "past") return past;
    return upcoming;
  }, [tab, upcoming, past, volunteer]);

  const expanded = events.find((event) => event.id === expandedId) ?? featured;

  useEffect(() => {
    function openFromHash(behavior: ScrollBehavior) {
      const id = window.location.hash.replace("#", "");
      if (!id || !events.some((event) => event.id === id)) return;
      setExpandedId(id);
      requestAnimationFrame(() => {
        document.getElementById("event-detail")?.scrollIntoView({ behavior, block: "start" });
      });
    }

    function onClick(event: MouseEvent) {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }
      const anchor = (event.target as Element | null)?.closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("http")) return;
      const url = new URL(href, window.location.origin);
      if (url.pathname !== window.location.pathname) return;
      const id = url.hash.replace("#", "");
      if (!events.some((item) => item.id === id)) return;
      event.preventDefault();
      window.history.pushState(null, "", `${url.pathname}${url.search}#${id}`);
      setExpandedId(id);
      requestAnimationFrame(() => {
        document.getElementById("event-detail")?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }

    function onHashChange() {
      openFromHash("smooth");
    }

    openFromHash("auto");
    window.addEventListener("hashchange", onHashChange);
    document.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("hashchange", onHashChange);
      document.removeEventListener("click", onClick);
    };
  }, []);

  function selectEvent(id: string) {
    setExpandedId(id);
    const url = new URL(window.location.href);
    url.hash = id;
    window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
    requestAnimationFrame(() => {
      document.getElementById("event-detail")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  return (
    <>
      <InteriorHero
        title="Events"
        description="Networking, public service, education, and celebration — programming for Orange County’s South Asian legal community."
        breadcrumbs={[{ label: "Events" }]}
      />

      {expanded ? <FeaturedEvent event={expanded} /> : null}

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
              <EventCard
                key={event.id}
                event={event}
                anchor={event.id !== expanded?.id}
                selected={event.id === expanded?.id}
                onSelect={selectEvent}
              />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
