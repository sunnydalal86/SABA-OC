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
    <section className="relative isolate overflow-hidden bg-navy-deep text-ivory">
      <div className="relative h-[29vw] max-h-[440px] overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={1500}
          height={1000}
          priority
          sizes="100vw"
          className="absolute left-0 top-[-16.3vw] h-auto w-full max-w-none"
        />
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
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
