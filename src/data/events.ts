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
  /** Shown instead of a start–end range when the site publishes a schedule, not a single end time. */
  timeLabel?: string;
  tickets?: { label: string; price: string }[];
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
      "SABA-OC and the South Asian Bar Association Public Interest Foundation, in partnership with SAHARA (South Asian Helpline & Referral Agency), hosted a free Naturalization Clinic in Artesia, CA on August 22, 2026. Lunch was provided for volunteers. Attorneys reviewed N-400 applications, law students shadowed licensed attorneys, and legal professionals supported intake, fee waiver prep, and form review.",
    eventType: "clinic",
    image: "/images/events/naturalization-clinic.svg",
    imageAlt: "Abstract illustration representing a naturalization legal clinic",
    rsvpUrl: null,
    calendarUrl: null,
    volunteer: true,
    volunteerRoles: [
      "Attorneys — Review N-400 applications and earn pro bono hours",
      "Law Students — Shadow licensed attorneys for hands-on immigration experience",
      "Legal Professionals — Support intake, fee waiver prep, and form review",
    ],
    featured: false,
    status: "past",
  },
  {
    id: "diwali-2026",
    title: "1st Annual Diwali Celebration: Illuminate the Night",
    date: "2026-11-05",
    startTime: "17:30",
    endTime: "21:00",
    location: "Hotel Zessa, 201 E MacArthur Blvd, Santa Ana",
    summary:
      "Thursday, November 5, 2026 at Hotel Zessa in Santa Ana. Cocktail hour at 5:30 p.m., then dinner and dancing at 6:30 p.m.",
    fullDescription:
      "Join SABA Orange County for the 1st Annual Diwali Celebration: Illuminate the Night. The evening includes South Asian food, music, dancing, and henna artists. Keller Anderle Scolnick is the title sponsor, and Crowell & Moring LLP is the valet sponsor. A few sponsorship opportunities remain.",
    eventType: "celebration",
    image: "/images/events/diwali-rangoli.jpg",
    imageAlt: "Lit diyas set in a ring of marigold petals",
    tickets: [
      { price: "$75", label: "Members" },
      { price: "$100", label: "Non-members" },
      { price: "$50", label: "Non-profit & judges" },
      { price: "$25", label: "Law students" },
    ],
    timeLabel: "Cocktail hour 5:30 p.m.; dinner and dancing 6:30 p.m.",
    rsvpUrl: "https://sabaorangecounty.wildapricot.org/event-6718574",
    calendarUrl: null,
    volunteer: false,
    featured: true,
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
    image: "/images/gallery/events/img-5736.jpg",
    imageAlt: "Three members at a SABA-OC restaurant gathering",
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
