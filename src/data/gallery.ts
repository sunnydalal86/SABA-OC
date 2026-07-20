/**
 * GALLERY — organize photos into event albums.
 * Replace placeholder images with client-provided photography when available.
 */

export type GalleryImage = {
  src: string;
  alt: string;
};

export type GalleryAlbum = {
  id: string;
  name: string;
  date: string | null;
  coverImage: string;
  description: string;
  images: GalleryImage[];
};

export const galleryAlbums: GalleryAlbum[] = [
  {
    id: "networking",
    name: "Networking Events",
    date: "2025-04-24",
    coverImage: "/images/gallery/networking-cover.svg",
    description:
      "Gatherings that connect attorneys, students, and supporters across Orange County.",
    images: [
      {
        src: "/images/gallery/networking-1.svg",
        alt: "Placeholder: SABA-OC networking event atmosphere",
      },
      {
        src: "/images/gallery/networking-2.svg",
        alt: "Placeholder: Members connecting at a SABA-OC gathering",
      },
      {
        src: "/images/gallery/networking-3.svg",
        alt: "Placeholder: Community conversation at a SABA-OC event",
      },
    ],
  },
  {
    id: "community-service",
    name: "Community Service",
    date: null,
    coverImage: "/images/gallery/service-cover.svg",
    description:
      "Public-interest programming and service rooted in access to justice.",
    images: [
      {
        src: "/images/gallery/service-1.svg",
        alt: "Placeholder: Community service and public interest work",
      },
      {
        src: "/images/gallery/service-2.svg",
        alt: "Placeholder: Volunteers supporting community legal services",
      },
    ],
  },
  {
    id: "naturalization-clinic",
    name: "Naturalization Clinic",
    date: "2026-08-22",
    coverImage: "/images/gallery/clinic-cover.svg",
    description:
      "Pro bono naturalization support in partnership with community organizations.",
    images: [
      {
        src: "/images/gallery/clinic-1.svg",
        alt: "Placeholder: Naturalization clinic preparation",
      },
      {
        src: "/images/gallery/clinic-2.svg",
        alt: "Placeholder: Attorneys and volunteers at a legal clinic",
      },
    ],
  },
  {
    id: "student-mentorship",
    name: "Student and Mentorship Programs",
    date: null,
    coverImage: "/images/gallery/mentorship-cover.svg",
    description:
      "Programs that support law students and emerging South Asian legal professionals.",
    images: [
      {
        src: "/images/gallery/mentorship-1.svg",
        alt: "Placeholder: Mentorship conversation between attorneys and students",
      },
    ],
  },
  {
    id: "leadership-programs",
    name: "Judicial and Leadership Programs",
    date: null,
    coverImage: "/images/gallery/leadership-cover.svg",
    description:
      "Programming that elevates leadership, visibility, and professional development.",
    images: [
      {
        src: "/images/gallery/leadership-1.svg",
        alt: "Placeholder: Leadership and professional development programming",
      },
    ],
  },
  {
    id: "celebration",
    name: "Annual Celebration",
    date: "2026-11-05",
    coverImage: "/images/gallery/celebration-cover.svg",
    description:
      "Cultural and community celebrations that bring the Orange County legal community together.",
    images: [
      {
        src: "/images/gallery/celebration-1.svg",
        alt: "Placeholder: Community celebration atmosphere",
      },
      {
        src: "/images/gallery/celebration-2.svg",
        alt: "Placeholder: Diwali and cultural celebration gathering",
      },
    ],
  },
];
