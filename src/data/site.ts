/**
 * SITE CONFIG — update frequently changed organization details here.
 * Nontechnical admins: edit the values below, save, and redeploy.
 */

export const siteConfig = {
  name: "South Asian Bar Association of Orange County",
  shortName: "SABA-OC",
  url: "https://www.sabaoc.org",
  locale: "Orange County, California",
  tagline: "Building Community. Elevating Voices. Leading Together.",
  description:
    "Connect with the South Asian legal community in Orange County through networking, mentorship, advocacy, education, public service, and professional development.",
  mission:
    "The South Asian Bar Association of Orange County (SABA-OC) advances the professional growth, visibility, and success of South Asian aspiring and practicing legal professionals. We build an inclusive community through networking, mentorship, advocacy, education, and public service, while promoting equity, representation, and access to justice.",
  missionShort:
    "SABA-OC builds an inclusive legal community through networking, mentorship, advocacy, education, public service, and a shared commitment to equity, representation, and access to justice.",
  /** Wild Apricot membership portal — confirm before changing */
  membershipUrl: "https://SabaOrangeCounty.wildapricot.org",
  /** Set to null or { enabled: false } to hide the announcement bar */
  announcement: {
    enabled: true,
    text: "Naturalization Clinic — Saturday, August 22, 2026 in Artesia. Volunteers welcome.",
    href: "/events",
    label: "View event",
  },
  contact: {
    /** Placeholder until official public contact email is confirmed */
    email: null as string | null,
    sponsorshipEmail: "asheth@kelleranderle.com",
    sponsorshipContactName: "Akhil Sheth",
  },
  social: {
    /** Replace placeholders when official profiles are confirmed */
    linkedin: null as string | null,
    instagram: null as string | null,
    facebook: null as string | null,
    x: null as string | null,
  },
  sabanaNote:
    "Proud to be the 32nd chapter of the South Asian Bar Association of North America.",
} as const;

export type SiteConfig = typeof siteConfig;
