"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryImage } from "@/data/gallery";

type GalleryLightboxProps = {
  images: GalleryImage[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export function GalleryLightbox({
  images,
  index,
  onClose,
  onNavigate,
}: GalleryLightboxProps) {
  const open = index !== null;
  const current = index !== null ? images[index] : null;

  const goPrev = useCallback(() => {
    if (index === null || images.length === 0) return;
    onNavigate((index - 1 + images.length) % images.length);
  }, [index, images.length, onNavigate]);

  const goNext = useCallback(() => {
    if (index === null || images.length === 0) return;
    onNavigate((index + 1) % images.length);
  }, [index, images.length, onNavigate]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose, goPrev, goNext]);

  if (!open || !current) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-deep/92 p-4"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 rounded-sm bg-ivory/10 p-2 text-ivory hover:bg-ivory/20"
        aria-label="Close lightbox"
      >
        <X className="size-6" />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          goPrev();
        }}
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-sm bg-ivory/10 p-2 text-ivory hover:bg-ivory/20 sm:left-6"
        aria-label="Previous image"
      >
        <ChevronLeft className="size-7" />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          goNext();
        }}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-sm bg-ivory/10 p-2 text-ivory hover:bg-ivory/20 sm:right-6"
        aria-label="Next image"
      >
        <ChevronRight className="size-7" />
      </button>

      <div
        className="relative max-h-[85vh] w-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm bg-navy">
          <Image
            src={current.src}
            alt={current.alt}
            fill
            className="object-contain"
            sizes="90vw"
            priority
          />
        </div>
        <p className="mt-3 text-center text-sm text-ivory/80">{current.alt}</p>
        <p className="mt-1 text-center text-xs text-ivory/50">
          {index! + 1} of {images.length}
        </p>
      </div>
    </div>
  );
}

type GalleryGridProps = {
  images: GalleryImage[];
};

export function GalleryGrid({ images }: GalleryGridProps) {
  const [index, setIndex] = useState<number | null>(null);

  return (
    <>
      <ul className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {images.map((image, i) => (
          <li key={`${image.src}-${i}`} className="mb-4 break-inside-avoid">
            <button
              type="button"
              className="group relative block w-full overflow-hidden rounded-sm border border-border bg-navy text-left"
              onClick={() => setIndex(i)}
              aria-label={`Open image: ${image.alt}`}
            >
              <span className="relative block aspect-[4/3]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </span>
            </button>
          </li>
        ))}
      </ul>
      <GalleryLightbox
        images={images}
        index={index}
        onClose={() => setIndex(null)}
        onNavigate={setIndex}
      />
    </>
  );
}
