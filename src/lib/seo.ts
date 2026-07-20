import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url;

export function createMetadata({
  title,
  description,
  path = "/",
}: {
  title?: string;
  description?: string;
  path?: string;
}): Metadata {
  const fullTitle = title
    ? `${title} | ${siteConfig.shortName}`
    : `${siteConfig.name} | ${siteConfig.shortName}`;
  const desc = description ?? siteConfig.description;
  const url = `${siteUrl.replace(/\/$/, "")}${path}`;

  return {
    title: fullTitle,
    description: desc,
    metadataBase: new URL(siteUrl),
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description: desc,
      url,
      siteName: siteConfig.shortName,
      locale: "en_US",
      type: "website",
      images: [{ url: "/images/brand/og-default.svg", width: 1600, height: 1000 }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
      images: ["/images/brand/og-default.svg"],
    },
  };
}
