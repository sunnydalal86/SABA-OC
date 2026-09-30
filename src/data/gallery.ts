/**
 * GALLERY — photographs published on sabaoc.org.
 * Alts describe what is visible. Do not name people unless they are confirmed.
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

const gatherings: GalleryImage[] = [
  "/images/gallery/events/dsc-00171.jpg",
  "/images/gallery/events/img-5737.jpg",
  "/images/gallery/events/dsc-00283.jpg",
  "/images/gallery/events/dsc-00008.jpg",
  "/images/gallery/events/dsc-00004.jpg",
  "/images/gallery/events/gathering-5.jpg",
  "/images/gallery/events/judges.jpg",
  "/images/gallery/events/img-5741.jpg",
  "/images/gallery/events/img-5742.jpg",
  "/images/gallery/events/img-5736.jpg",
  "/images/gallery/events/gathering-2.jpg",
  "/images/gallery/events/gathering-4.jpg",
  "/images/gallery/events/dsc-09749.jpg",
].map((src) => ({ src, alt: "SABA-OC gathering" }));

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
