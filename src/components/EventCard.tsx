import Link from "next/link";
import Image from "next/image";
import { CalendarDays, MapPin } from "lucide-react";
import type { SabaEvent } from "@/data/events";
import { formatEventDate, formatShortDate, formatTimeRange, buildGoogleCalendarUrl } from "@/lib/utils";
import { ButtonLink } from "./Button";

export function EventCard({ event }: { event: SabaEvent }) {
  const badge = formatShortDate(event.date);
  const calendarHref = event.calendarUrl ?? buildGoogleCalendarUrl(event);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-sm border border-border bg-white shadow-[0_1px_0_rgba(12,35,64,0.04)] transition-shadow hover:shadow-md">
      <div className="relative aspect-[16/10] overflow-hidden bg-navy">
        <Image
          src={event.image}
          alt={event.imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute left-4 top-4 flex flex-col items-center rounded-sm bg-ivory px-3 py-2 text-center shadow-sm">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-gold">
            {badge.month}
          </span>
          <span className="font-serif text-2xl leading-none text-navy">{badge.day}</span>
        </div>
        {event.volunteer ? (
          <span className="absolute right-4 top-4 rounded-sm bg-navy/90 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-gold-soft">
            Volunteers Needed
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold">
          {event.eventType}
        </p>
        <h3 className="mt-2 font-serif text-xl text-navy leading-snug">
          <Link href={`/events#${event.id}`} className="hover:underline underline-offset-4">
            {event.title}
          </Link>
        </h3>
        <div className="mt-3 space-y-1.5 text-sm text-muted">
          <p className="flex items-start gap-2">
            <CalendarDays className="mt-0.5 size-4 shrink-0 text-navy/50" aria-hidden />
            <span>
              {formatEventDate(event.date)} · {formatTimeRange(event.startTime, event.endTime)}
            </span>
          </p>
          <p className="flex items-start gap-2">
            <MapPin className="mt-0.5 size-4 shrink-0 text-navy/50" aria-hidden />
            <span>{event.location}</span>
          </p>
        </div>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-charcoal/85">{event.summary}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {event.rsvpUrl ? (
            <ButtonLink href={event.rsvpUrl} external size="sm">
              RSVP
            </ButtonLink>
          ) : (
            <ButtonLink href="/contact" size="sm">
              Inquire to RSVP
            </ButtonLink>
          )}
          <ButtonLink href={calendarHref} external variant="secondary" size="sm">
            Add to Calendar
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}
