import { siteConfig } from "@/data/site";
import type { SabaEvent } from "@/data/events";
import { absoluteUrl } from "@/lib/utils";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    description: siteConfig.description,
    areaServed: "Orange County, California",
    sameAs: Object.values(siteConfig.social).filter(Boolean),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function EventJsonLd({ event }: { event: SabaEvent }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    description: event.summary,
    startDate: `${event.date}T${event.startTime}:00`,
    endDate: `${event.date}T${event.endTime}:00`,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: event.location,
      address: event.location,
    },
    organizer: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    image: [absoluteUrl(event.image)],
    url: absoluteUrl(`/events#${event.id}`),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
