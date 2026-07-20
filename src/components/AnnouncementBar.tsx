import Link from "next/link";
import { siteConfig } from "@/data/site";

export function AnnouncementBar() {
  const { announcement } = siteConfig;
  if (!announcement.enabled) return null;

  return (
    <div className="bg-navy-deep text-ivory">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 px-4 py-2.5 text-sm sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <p className="leading-snug text-ivory/90">{announcement.text}</p>
        <Link
          href={announcement.href}
          className="shrink-0 font-medium text-gold-soft underline-offset-4 hover:underline"
        >
          {announcement.label}
        </Link>
      </div>
    </div>
  );
}
