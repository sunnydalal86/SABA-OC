"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ExternalLink } from "lucide-react";
import { mainNav } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { ButtonLink } from "./Button";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-200",
        scrolled
          ? "border-border bg-white/95 backdrop-blur-md"
          : "border-transparent bg-white",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2.5 sm:px-5 lg:px-4 xl:gap-4 xl:px-8">
        <Link href="/" className="shrink-0">
          <Image
            src="/images/brand/logo.png"
            alt="SABA-OC, South Asian Bar Association of Orange County"
            width={1009}
            height={353}
            priority
            className="h-[4.5rem] w-auto sm:h-20 lg:h-[5.5rem] xl:h-28"
          />
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex xl:gap-1" aria-label="Primary">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-sm px-1.5 py-2 text-xs font-medium tracking-wide text-charcoal/90 transition-colors hover:text-navy xl:px-2.5 xl:text-[13px]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <ButtonLink
            href={siteConfig.membershipUrl}
            external
            size="sm"
            className="hidden sm:inline-flex"
          >
            Become a Member
            <ExternalLink className="size-3.5 opacity-70" aria-hidden />
          </ButtonLink>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-sm border border-border p-2 text-navy lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "border-t border-border bg-white lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav className="mx-auto flex max-w-6xl flex-col px-4 py-4 sm:px-6" aria-label="Mobile">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border-b border-border/70 py-3 text-base text-navy"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <ButtonLink
            href={siteConfig.membershipUrl}
            external
            className="mt-4"
            onClick={() => setOpen(false)}
          >
            Become a Member
            <ExternalLink className="size-3.5 opacity-70" aria-hidden />
          </ButtonLink>
        </nav>
      </div>
    </header>
  );
}
