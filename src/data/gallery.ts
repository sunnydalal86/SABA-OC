/**
 * GALLERY — photographs published on sabaoc.org.
 * Alts describe what is visible. Do not name people unless they are confirmed.
 */

export type GalleryImage = {
  src: string;
  alt: string;
  /** CSS object-position for the thumbnail crop. Defaults to "center" if omitted. */
  objectPosition?: string;
};

export type GalleryAlbum = {
  id: string;
  name: string;
  date: string | null;
  coverImage: string;
  description: string;
  images: GalleryImage[];
};

const gatherings: GalleryImage[] = [
  { src: "/images/gallery/events/dsc-00171.jpg", alt: "SABA-OC gathering" },
  { src: "/images/gallery/events/img-5737.jpg", alt: "SABA-OC gathering" },
  { src: "/images/gallery/events/dsc-00283.jpg", alt: "SABA-OC gathering" },
  { src: "/images/gallery/events/dsc-00008.jpg", alt: "SABA-OC gathering" },
  { src: "/images/gallery/events/dsc-00004.jpg", alt: "SABA-OC gathering" },
  { src: "/images/gallery/events/gathering-5.jpg", alt: "SABA-OC gathering" },
  { src: "/images/gallery/events/judges.jpg", alt: "SABA-OC members with judges", objectPosition: "center 20%" },
  { src: "/images/gallery/events/img-5741.jpg", alt: "SABA-OC gathering" },
  { src: "/images/gallery/events/img-5742.jpg", alt: "SABA-OC gathering" },
  { src: "/images/gallery/events/img-5736.jpg", alt: "SABA-OC gathering", objectPosition: "center 20%" },
  { src: "/images/gallery/events/gathering-2.jpg", alt: "SABA-OC gathering", objectPosition: "center 25%" },
  { src: "/images/gallery/events/gathering-4.jpg", alt: "SABA-OC gathering" },
  { src: "/images/gallery/events/dsc-09749.jpg", alt: "SABA-OC gathering" },
  { src: "/images/gallery/events/saba-oc-5.jpg", alt: "SABA-OC members and leaders in professional attire with California state flag" },
  { src: "/images/gallery/events/img-5740.jpg", alt: "Members networking at an outdoor reception" },
  { src: "/images/gallery/events/img-5738.jpg", alt: "Members gathered on a rooftop at an evening networking event", objectPosition: "center 30%" },
  { src: "/images/gallery/events/img-5739.jpg", alt: "Members posing together at a social outing", objectPosition: "center 20%" },
  { src: "/images/gallery/events/saba-oc-4.jpg", alt: "Members at a formal gala celebration" },
  { src: "/images/gallery/events/saba-oc-3.jpg", alt: "Members at a photo booth, June 2019" },
  { src: "/images/gallery/events/judges-1.jpg", alt: "Members with California state flag at a courthouse event", objectPosition: "center 20%" },
  { src: "/images/gallery/events/img-5745.jpg", alt: "Three members on a rooftop with a city skyline at dusk", objectPosition: "center 30%" },
  { src: "/images/gallery/events/img-5746.jpg", alt: "Three members posing together at an indoor gathering", objectPosition: "center 20%" },
];

export const galleryAlbums: GalleryAlbum[] = [
  {
    id: "gatherings",
    name: "Community gatherings",
    date: null,
    coverImage: "/images/gallery/events/dsc-00171.jpg",
    description:
      "Photographs from SABA-OC receptions and member gatherings, as published on the chapter website.",
    images: gatherings,
  },
];
