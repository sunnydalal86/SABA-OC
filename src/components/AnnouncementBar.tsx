import { siteConfig } from "@/data/site";

export function AnnouncementBar() {
  const { announcement } = siteConfig;
  if (!announcement.enabled || announcement.items.length === 0) return null;

  return (
    <div className="bg-navy-deep text-ivory">
      <div className="mx-auto flex max-w-6xl flex-col px-4 text-sm sm:px-6 lg:px-8">
        <h2 className="pb-2 pt-3 text-xs font-semibold uppercase tracking-[0.16em] text-gold-soft">
          Upcoming Events
        </h2>
        {announcement.items.map((item) => (
          <div
            key={item.href}
            className="flex flex-col items-start justify-between gap-1 border-t border-ivory/15 py-2.5 first:border-t-0 sm:flex-row sm:items-center sm:gap-6"
          >
            <p className="min-w-0 leading-snug">
              <span className="font-medium text-ivory">{item.title}</span>
              <span className="mt-0.5 block text-ivory/70 sm:mt-0">{item.detail}</span>
            </p>
            <a
              href={item.href}
              className="shrink-0 font-medium text-gold-soft underline-offset-4 hover:underline"
            >
              {item.label}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
