"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { InteriorHero } from "@/components/InteriorHero";
import { SectionHeading } from "@/components/SectionHeading";
import { GalleryGrid } from "@/components/Gallery";
import { galleryAlbums } from "@/data/gallery";
import { formatEventDate } from "@/lib/utils";
import { cn } from "@/lib/utils";

export default function GalleryPage() {
  const [activeId, setActiveId] = useState(galleryAlbums[0]?.id ?? "");
  const album = useMemo(
    () => galleryAlbums.find((a) => a.id === activeId) ?? galleryAlbums[0],
    [activeId],
  );

  return (
    <>
      <InteriorHero
        title="Gallery"
        description="A curated look at SABA-OC gatherings, service, and community — organized by album."
        breadcrumbs={[{ label: "Gallery" }]}
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Albums"
          title="Explore by program"
          description="Select an album to view photographs. Replace placeholders with client-provided event photography when available."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryAlbums.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveId(item.id)}
              className={cn(
                "overflow-hidden rounded-sm border text-left transition-shadow",
                activeId === item.id
                  ? "border-navy shadow-md"
                  : "border-border hover:shadow-sm",
              )}
              aria-pressed={activeId === item.id}
            >
              <span className="relative block aspect-[16/10] bg-navy">
                <Image
                  src={item.coverImage}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </span>
              <span className="block bg-white p-4">
                <span className="block font-serif text-lg text-navy">{item.name}</span>
                {item.date ? (
                  <span className="mt-1 block text-xs text-muted">
                    {formatEventDate(item.date)}
                  </span>
                ) : null}
              </span>
            </button>
          ))}
        </div>

        {album ? (
          <div className="mt-14">
            <div className="mb-6 max-w-2xl">
              <h2 className="font-serif text-3xl text-navy">{album.name}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {album.description}
              </p>
            </div>
            <GalleryGrid images={album.images} />
          </div>
        ) : null}
      </section>
    </>
  );
}
