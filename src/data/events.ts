/**
 * EVENTS — add, edit, or archive events here.
 * Set status to "upcoming" or "past". Featured events appear on the homepage.
 * Update rsvpUrl and calendarUrl when registration links are available.
 */

export type EventStatus = "upcoming" | "past";

export type SabaEvent = {
  id: string;
  title: string;
  date: string; // ISO date YYYY-MM-DD
  startTime: string;
  endTime: string;
  location: string;
  summary: string;
  fullDescription: string;
  eventType: "networking" | "clinic" | "celebration" | "panel" | "other";
  image: string;
  imageAlt: string;
  rsvpUrl: string | null;
  calendarUrl: string | null;
  volunteer: boolean;
  volunteerRoles?: string[];
  featured: boolean;
  status: EventStatus;
};

export const events: SabaEvent[] = [
  {
    id: "naturalization-clinic-2026",
    title: "Naturalization Clinic",
    date: "2026-08-22",
    startTime: "10:00",
    endTime: "16:00",
    location: "Artesia, California",
    summary:
      "A free community legal clinic offering assistance with the U.S. naturalization process and N-400 applications, including fee waiver support.",
    fullDescription:
      "SABA-OC and the South Asian Bar Association Public Interest Foundation, in partnership with SAHARA (South Asian Helpline & Referral Agency), are hosting a free Naturalization Clinic in Artesia, CA. Lunch is provided for all volunteers. Session-specific slots are available for morning, midday, and afternoon. Attorneys can review N-400 applications and earn pro bono hours toward State Bar reporting requirements. Law students can shadow licensed attorneys. Legal professionals can support intake, fee waiver prep, and form review.",
    eventType: "clinic",
    image: "/images/events/naturalization-clinic.svg",
    imageAlt: "Abstract illustration representing a naturalization legal clinic",
    rsvpUrl: null, // TODO: add RSVP / volunteer signup URL
    calendarUrl: null,
    volunteer: true,
    volunteerRoles: [
      "Attorneys — Review N-400 applications and earn pro bono hours",
      "Law Students — Shadow licensed attorneys for hands-on immigration experience",
      "Legal Professionals — Support intake, fee waiver prep, and form review",
    ],
    featured: true,
    status: "upcoming",
  },
  {
    id: "diwali-2026",
    title: "1st Annual Diwali Celebration: Illuminate the Night",
    date: "2026-11-05",
    startTime: "17:30",
    endTime: "21:00",
    location: "Location TBD",
    summary:
      "Celebrate the Festival of Lights with the Orange County legal community — food, music, dancing, and connection in support of SABA-OC’s mission.",
    fullDescription:
      "Join SABA Orange County for our 1st Annual Diwali Celebration: Illuminate the Night. Come celebrate with an evening of South Asian food, music, dancing, henna artists, and joyful community. This gathering brings together the Orange County legal community to connect, celebrate, and support SABA-OC’s mission of building community, elevating voices, and fostering belonging within the profession. Sponsorship opportunities are available. Ticket tiers and final venue details will be announced as planning continues.",
    eventType: "celebration",
    image: "/images/events/diwali.svg",
    imageAlt: "Abstract illustration representing a Diwali celebration",
    rsvpUrl: null,
    calendarUrl: null,
    volunteer: false,
    featured: false,
    status: "upcoming",
  },
  {
    id: "happy-hour-2025",
    title: "Inaugural Happy Hour",
    date: "2025-04-24",
    startTime: "16:30",
    endTime: "20:00",
    location: "Orange County, California",
    summary:
      "A mix-and-mingle for anyone interested in becoming involved with SABA-OC and serving on its inaugural board of directors.",
    fullDescription:
      "Members and supporters gathered to mix and mingle with anyone interested in becoming involved with the South Asian Bar Association of Orange County and serving on its inaugural board of directors.",
    eventType: "networking",
    image: "/images/events/networking.svg",
    imageAlt: "Abstract illustration representing a networking gathering",
    rsvpUrl: null,
    calendarUrl: null,
    volunteer: false,
    featured: false,
    status: "past",
  },
];

export function getUpcomingEvents(): SabaEvent[] {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return events
    .filter((e) => e.status === "upcoming" && new Date(e.date) >= today)
    .sort((a, b) => a.date.localeCompare(b.date));
}

export function getPastEvents(): SabaEvent[] {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return events
    .filter((e) => e.status === "past" || new Date(e.date) < today)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getFeaturedEvent(): SabaEvent | undefined {
  return getUpcomingEvents().find((e) => e.featured) ?? getUpcomingEvents()[0];
}

export function getVolunteerEvents(): SabaEvent[] {
  return getUpcomingEvents().filter((e) => e.volunteer);
}
