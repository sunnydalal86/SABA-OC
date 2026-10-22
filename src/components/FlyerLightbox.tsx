"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X } from "lucide-react";

export function FlyerLightbox({
  src,
  alt,
  open,
  onClose,
}: {
  src: string;
  alt: string;
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-deep/92 p-4 sm:p-8"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 z-10 rounded-sm bg-ivory/10 p-2 text-ivory hover:bg-ivory/20"
        aria-label="Close brochure"
      >
        <X className="size-6" />
      </button>
      <div
        className="relative h-[min(92vh,1280px)] w-[min(92vw,calc(92vh*989/1280))]"
        onClick={(event) => event.stopPropagation()}
      >
        <Image src={src} alt={alt} fill className="object-contain" sizes="92vw" priority />
      </div>
    </div>,
    document.body,
  );
}

export function ExpandableFlyer({
  src,
  alt,
  width,
  height,
  sizes,
  className,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full">
      <button
        type="button"
        className="block w-full cursor-zoom-in"
        onClick={() => setOpen(true)}
        aria-label={`Enlarge brochure: ${alt}`}
        aria-expanded={open}
      >
        <Image src={src} alt="" width={width} height={height} sizes={sizes} className={className} />
      </button>
      <p className="mt-3 text-center text-xs text-muted">Click the brochure to enlarge</p>
      <FlyerLightbox src={src} alt={alt} open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
