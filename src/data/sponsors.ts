/**
 * SPONSORS — update sponsor logos and inquiry details here.
 * Do not invent pricing. Direct inquiries to the sponsorship contact.
 */

import { siteConfig } from "./site";

export type SponsorTier = {
  id: string;
  name: string;
  description: string;
  benefits: string[];
};

export type Sponsor = {
  id: string;
  name: string;
  logo: string | null;
  website: string | null;
};

/** Sample tier labels only — contact SABA-OC for current levels and pricing */
export const sponsorTiers: SponsorTier[] = [
  {
    id: "title",
    name: "Title Sponsor",
    description:
      "Premier visibility across a signature SABA-OC program or annual celebration.",
    benefits: [
      "Lead recognition on event materials",
      "Speaking or welcome opportunity when appropriate",
      "Featured logo placement",
      "Recognition across digital channels",
    ],
  },
  {
    id: "presenting",
    name: "Presenting Sponsor",
    description:
      "High-visibility support for major events, clinics, or professional programming.",
    benefits: [
      "Prominent logo placement",
      "Event program recognition",
      "Digital acknowledgment",
      "Networking access with attendees",
    ],
  },
  {
    id: "community",
    name: "Community Sponsor",
    description:
      "Meaningful support for membership programming, mentorship, and public service.",
    benefits: [
      "Logo placement on selected materials",
      "Event acknowledgment",
      "Recognition on the sponsors page",
    ],
  },
];

/**
 * Current sponsors — only include confirmed sponsors.
 * Keller Anderle Scolnick was named as title sponsor for Diwali on the source site.
 */
export const currentSponsors: Sponsor[] = [
  {
    id: "keller-anderle-scolnick",
    name: "Keller Anderle Scolnick",
    logo: null,
    website: "https://www.kelleranderle.com",
  },
  {
    id: "crowell-moring",
    name: "Crowell & Moring LLP",
    logo: null,
    website: "https://www.crowell.com",
  },
];

export const sponsorshipPacketUrl: string | null =
  "https://www.sabaoc.org/s/SABA-2027-Sponsorship-Levels.pdf";

export const sponsorshipInquiry = {
  name: siteConfig.contact.sponsorshipContactName,
  email: siteConfig.contact.sponsorshipEmail,
  note: "Keller Anderle Scolnick is the title sponsor of the 2026 Diwali celebration, and Crowell & Moring LLP is the valet sponsor. SABA-OC is seeking sponsors for 2027.",
};
