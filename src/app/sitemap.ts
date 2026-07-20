import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url;

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/leadership",
    "/events",
    "/membership",
    "/gallery",
    "/sponsors",
    "/contact",
    "/privacy",
    "/accessibility",
  ];

  return routes.map((route) => ({
    url: `${siteUrl.replace(/\/$/, "")}${route || "/"}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/events" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
