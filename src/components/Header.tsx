"use client";

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
          ? "border-border/80 bg-ivory/95 backdrop-blur-md"
          : "border-transparent bg-ivory/80 backdrop-blur-sm",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="group min-w-0">
          <span className="block font-serif text-xl tracking-tight text-navy sm:text-2xl">
            {siteConfig.shortName}
          </span>
          <span className="mt-0.5 hidden text-[11px] font-sans uppercase tracking-[0.14em] text-muted sm:block">
            South Asian Bar Association of Orange County
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-sm px-2.5 py-2 text-sm text-charcoal/90 transition-colors hover:text-navy"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
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
          "border-t border-border bg-ivory lg:hidden",
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
