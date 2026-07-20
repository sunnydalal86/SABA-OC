import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Events",
  description:
    "Upcoming SABA-OC events, volunteer opportunities, and past programs for Orange County’s South Asian legal community.",
  path: "/events",
});

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
