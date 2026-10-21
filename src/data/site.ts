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
  /** Set enabled to false to hide the announcement bar */
  announcement: {
    enabled: true,
    items: [
      {
        title: "Beyond the Legal Answer: Becoming the Trusted Advisor Companies Need",
        detail: "Tuesday, October 27, 2026 in Newport Beach",
        href: "/events#trusted-advisor-2026",
        label: "RSVP",
      },
      {
        title: "1st Annual Diwali Celebration",
        detail: "Thursday, November 5, 2026 at Hotel Zessa in Santa Ana",
        href: "/events#diwali-2026",
        label: "Get tickets",
      },
    ],
  },
  contact: {
    /** Placeholder until official public contact email is confirmed */
    email: null as string | null,
    sponsorshipEmail: "asheth@kelleranderle.com",
    sponsorshipContactName: "Akhil Sheth",
  },
  social: {
    linkedin:
      "https://www.linkedin.com/company/south-asian-bar-association-of-orange-county-saba-oc/posts/",
    instagram: "https://www.instagram.com/saba.orangecounty/",
    facebook: "https://www.facebook.com/groups/1774454326590288",
    x: null as string | null,
  },
  sabanaNote:
    "Proud to be the 32nd chapter of the South Asian Bar Association of North America.",
} as const;

export type SiteConfig = typeof siteConfig;
