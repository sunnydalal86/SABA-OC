import Image from "next/image";
import { CalendarDays, Clock, MapPin, Users } from "lucide-react";
import type { SabaEvent } from "@/data/events";
import {
  buildGoogleCalendarUrl,
  formatEventDate,
  formatTimeRange,
} from "@/lib/utils";
import { ButtonLink } from "./Button";
import { ExpandableFlyer } from "./FlyerLightbox";
import { SectionHeading } from "./SectionHeading";

export function FeaturedEvent({ event }: { event: SabaEvent }) {
  const calendarHref = event.calendarUrl ?? buildGoogleCalendarUrl(event);

  const upcoming = event.status === "upcoming";
  const flyer = event.imageFit === "contain";

  return (
    <section id="event-detail" className="scroll-mt-28 border-y border-border bg-white lg:scroll-mt-36 xl:scroll-mt-44">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow={event.featured && upcoming ? "Featured Event" : "Event details"}
          title={upcoming ? "Join us for our next gathering" : "From the calendar"}
          description={event.summary}
        />

        <div
          className={`mt-10 grid overflow-hidden rounded-sm border border-border ${flyer ? "lg:grid-cols-[minmax(0,28rem)_1fr]" : "lg:grid-cols-2"}`}
        >
          {flyer ? (
            <div className="flex items-center justify-center bg-[#f6f3ec] px-4 py-6 sm:px-6 lg:py-8">
              <ExpandableFlyer
                src={event.image}
                alt={event.imageAlt}
                width={989}
                height={1280}
                className="h-auto w-full"
                sizes="(max-width: 1024px) 100vw, 448px"
              />
            </div>
          ) : (
            <div className="relative min-h-[280px] bg-navy lg:min-h-full">
              <Image
                src={event.image}
                alt={event.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          )}

          <div className="bg-ivory p-6 sm:p-8 lg:p-10" id={event.id}>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-ink">
              {event.eventType} · {event.status === "upcoming" ? "Upcoming" : "Past"}
            </p>
            <h3 className="mt-3 font-serif text-3xl text-navy">{event.title}</h3>

            <dl className="mt-6 space-y-3 text-sm text-charcoal/90">
              <div className="flex gap-3">
                <dt className="sr-only">Date</dt>
                <CalendarDays className="mt-0.5 size-4 text-navy/50" aria-hidden />
                <dd>{formatEventDate(event.date)}</dd>
              </div>
              <div className="flex gap-3">
                <dt className="sr-only">Time</dt>
                <Clock className="mt-0.5 size-4 text-navy/50" aria-hidden />
                <dd>{event.timeLabel ?? formatTimeRange(event.startTime, event.endTime)}</dd>
              </div>
              <div className="flex gap-3">
                <dt className="sr-only">Location</dt>
                <MapPin className="mt-0.5 size-4 text-navy/50" aria-hidden />
                <dd>{event.location}</dd>
              </div>
            </dl>

            <p className="mt-6 text-base leading-relaxed text-muted">{event.fullDescription}</p>

            {event.tickets?.length ? (
              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-ink">
                  Tickets
                </p>
                <ul className="mt-3 grid grid-cols-2 gap-3">
                  {event.tickets.map((ticket) => (
                    <li
                      key={ticket.label}
                      className="rounded-sm border border-border bg-white px-3 py-3"
                    >
                      <p className="font-serif text-2xl text-navy">{ticket.price}</p>
                      <p className="mt-1 text-xs text-muted">{ticket.label}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {event.volunteerRoles?.length ? (
              <div className="mt-6 rounded-sm border border-border bg-white p-4">
                <p className="flex items-center gap-2 text-sm font-medium text-navy">
                  <Users className="size-4 text-gold" aria-hidden />
                  Volunteer roles
                </p>
                <ul className="mt-3 space-y-2 text-sm text-muted">
                  {event.volunteerRoles.map((role) => (
                    <li key={role} className="pl-3 border-l-2 border-gold/40">
                      {role}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div className="mt-8 flex flex-wrap gap-3">
              {event.rsvpUrl ? (
                <ButtonLink href={event.rsvpUrl} external>
                  {event.volunteer
                    ? "RSVP / Volunteer"
                    : event.tickets?.length
                      ? "Buy tickets"
                      : "RSVP"}
                </ButtonLink>
              ) : event.status === "upcoming" ? (
                <ButtonLink href="/contact">Ask about volunteering</ButtonLink>
              ) : null}
              <ButtonLink href={calendarHref} external variant="secondary">
                Add to Calendar
              </ButtonLink>
              <ButtonLink href="/events" variant="ghost">
                All events
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
