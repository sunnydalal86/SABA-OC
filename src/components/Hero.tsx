"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { ButtonLink } from "./Button";
import { siteConfig } from "@/data/site";

type HeroProps = {
  imageSrc?: string;
  imageAlt?: string;
};

export function Hero({
  imageSrc = "/images/events/hero.svg",
  imageAlt = "Abstract navy backdrop for the SABA-OC homepage hero",
}: HeroProps) {
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate min-h-[min(85vh,920px)] overflow-hidden bg-navy-deep text-ivory">
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          unoptimized
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Readable left-to-right wash — keeps type clear without muddying the field */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/80 to-navy-deep/35"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-navy-deep/50 via-transparent to-navy-deep/20"
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-[min(85vh,920px)] max-w-6xl items-center px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <motion.div
          className="max-w-2xl"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
            {siteConfig.name}
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-[1.12] tracking-tight text-balance sm:text-5xl lg:text-[3.35rem]">
            {siteConfig.tagline}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ivory/85 sm:text-lg">
            SABA-OC advances the professional growth, visibility, and success of
            South Asian attorneys, law students, judges, and legal professionals
            throughout Orange County.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={siteConfig.membershipUrl} external size="lg">
              Become a Member
              <ExternalLink className="size-4 opacity-70" aria-hidden />
            </ButtonLink>
            <ButtonLink href="/events" variant="light" size="lg">
              Explore Upcoming Events
            </ButtonLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
