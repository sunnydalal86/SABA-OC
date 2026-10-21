"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CalendarDays, MapPin } from "lucide-react";
import type { SabaEvent } from "@/data/events";
import { formatEventDate, formatShortDate, formatTimeRange, buildGoogleCalendarUrl } from "@/lib/utils";
import { Button, ButtonLink } from "./Button";
import { FlyerLightbox } from "./FlyerLightbox";

export function EventCard({
  event,
  anchor = true,
  selected = false,
  onSelect,
}: {
  event: SabaEvent;
  anchor?: boolean;
  selected?: boolean;
  onSelect?: (id: string) => void;
}) {
  const badge = formatShortDate(event.date);
  const calendarHref = event.calendarUrl ?? buildGoogleCalendarUrl(event);
  const brochure = event.imageFit === "contain";
  const [brochureOpen, setBrochureOpen] = useState(false);

  return (
    <article
      id={anchor ? event.id : undefined}
      className={`group flex h-full flex-col overflow-hidden rounded-sm border bg-white shadow-[0_1px_0_rgba(12,35,64,0.04)] transition-shadow hover:shadow-md ${selected ? "border-navy ring-1 ring-navy" : "border-border"}`}
    >
      <button
        type="button"
        className={`relative block aspect-[16/10] w-full overflow-hidden text-left ${brochure ? "cursor-zoom-in bg-ivory" : "bg-navy"} ${!brochure && onSelect ? "cursor-pointer" : ""}`}
        onClick={() => (brochure ? setBrochureOpen(true) : onSelect?.(event.id))}
        aria-label={brochure ? `Enlarge brochure for ${event.title}` : `View details for ${event.title}`}
        aria-expanded={brochure ? brochureOpen : onSelect ? selected : undefined}
        aria-controls={brochure ? undefined : onSelect ? "event-detail" : undefined}
      >
        <Image
          src={event.image}
          alt=""
          fill
          className={`${event.imageFit === "contain" ? "object-contain" : "object-cover"} transition-transform duration-500 group-hover:scale-[1.03]`}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute left-4 top-4 flex flex-col items-center rounded-sm bg-ivory px-3 py-2 text-center shadow-sm">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-gold-ink">
            {badge.month}
          </span>
          <span className="font-serif text-2xl leading-none text-navy">{badge.day}</span>
        </div>
        {event.volunteer ? (
          <span className="absolute right-4 top-4 rounded-sm bg-navy/90 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-gold-soft">
            Volunteers Needed
          </span>
        ) : null}
      </button>
      {brochure ? (
        <FlyerLightbox
          src={event.image}
          alt={event.imageAlt}
          open={brochureOpen}
          onClose={() => setBrochureOpen(false)}
        />
      ) : null}

      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-ink">
          {event.eventType}
        </p>
        <h3 className="mt-2 font-serif text-xl text-navy leading-snug">
          {onSelect ? (
            <button
              type="button"
              className="text-left hover:underline underline-offset-4"
              onClick={() => onSelect(event.id)}
              aria-expanded={selected}
              aria-controls="event-detail"
            >
              {event.title}
            </button>
          ) : (
            <Link href={`/events#${event.id}`} className="hover:underline underline-offset-4">
              {event.title}
            </Link>
          )}
        </h3>
        <div className="mt-3 space-y-1.5 text-sm text-muted">
          <p className="flex items-start gap-2">
            <CalendarDays className="mt-0.5 size-4 shrink-0 text-navy/50" aria-hidden />
            <span>
              {formatEventDate(event.date)}
              {event.timeLabel ? ` · ${event.timeLabel}` : ` · ${formatTimeRange(event.startTime, event.endTime)}`}
            </span>
          </p>
          <p className="flex items-start gap-2">
            <MapPin className="mt-0.5 size-4 shrink-0 text-navy/50" aria-hidden />
            <span>{event.location}</span>
          </p>
        </div>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-charcoal/85">{event.summary}</p>
        {event.tickets?.length ? (
          <ul className="mt-4 grid grid-cols-2 gap-2">
            {event.tickets.map((ticket) => (
              <li key={ticket.label} className="rounded-sm border border-border px-2.5 py-2">
                <p className="font-serif text-lg leading-none text-navy">{ticket.price}</p>
                <p className="mt-1 text-[11px] text-muted">{ticket.label}</p>
              </li>
            ))}
          </ul>
        ) : null}
        <div className="mt-5 flex flex-wrap gap-2">
          {onSelect ? (
            <Button type="button" size="sm" variant="secondary" onClick={() => onSelect(event.id)}>
              {selected ? "Viewing" : "View details"}
            </Button>
          ) : null}
          {event.status === "upcoming" && event.rsvpUrl ? (
            <ButtonLink href={event.rsvpUrl} external size="sm">
              {event.tickets?.length ? "Buy tickets" : "RSVP"}
            </ButtonLink>
          ) : event.status === "upcoming" ? (
            <ButtonLink href="/contact" size="sm">
              Inquire to RSVP
            </ButtonLink>
          ) : null}
          <ButtonLink href={calendarHref} external variant="secondary" size="sm">
            Add to Calendar
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}
