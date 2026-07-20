/**
 * LEADERSHIP — update officers, board, and steering committee here.
 * Do not invent biographies. Use null or empty strings for missing fields.
 * Categories: "executive" | "board" | "steering"
 *
 * Headshots: drop files in public/images/leadership/ and update `image` paths.
 */

export type LeadershipCategory = "executive" | "board" | "steering";

export type LeadershipMember = {
  id: string;
  name: string;
  title: string;
  firm: string | null;
  image: string;
  bio: string | null;
  externalProfile: string | null;
  email: string | null;
  category: LeadershipCategory;
};

export const leadership: LeadershipMember[] = [
  {
    id: "janani-rana",
    name: "Janani S. Rana",
    title: "President",
    firm: "Minyard Morris",
    image: "/images/leadership/placeholder.svg",
    bio: null,
    externalProfile: "https://www.minyardmorris.com/attorney/janani-s-rana/",
    email: null,
    category: "executive",
  },
  {
    id: "fred-thiagarajah",
    name: "Fred Thiagarajah",
    title: "Vice President",
    firm: "Right Choice Law",
    image: "/images/leadership/placeholder.svg",
    bio: null,
    externalProfile: "https://www.fredthia.com/about-us/fred-thiagarajah/",
    email: null,
    category: "executive",
  },
  {
    id: "jehan-jayakumar",
    name: "Jehan Jayakumar",
    title: "Treasurer",
    firm: "Carlson & Jayakumar LLP",
    image: "/images/leadership/placeholder.svg",
    bio: null,
    externalProfile: "https://cjattorneys.com/attorneys/jehan-n-jayakumar/",
    email: null,
    category: "executive",
  },
  {
    id: "simon-khinda",
    name: "Simon Khinda",
    title: "Secretary",
    firm: "Bridge Law LLP",
    image: "/images/leadership/placeholder.svg",
    bio: null,
    externalProfile: "https://www.bridgelawllp.com/team/simon-khinda/",
    email: null,
    category: "executive",
  },
];

export function getByCategory(category: LeadershipCategory): LeadershipMember[] {
  return leadership.filter((m) => m.category === category);
}
