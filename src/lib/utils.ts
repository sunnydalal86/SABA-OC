export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

export function formatEventDate(isoDate: string): string {
  const date = new Date(`${isoDate}T12:00:00`);
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function formatShortDate(isoDate: string): {
  month: string;
  day: string;
  year: string;
} {
  const date = new Date(`${isoDate}T12:00:00`);
  return {
    month: date.toLocaleDateString("en-US", { month: "short" }),
    day: date.toLocaleDateString("en-US", { day: "numeric" }),
    year: date.toLocaleDateString("en-US", { year: "numeric" }),
  };
}

export function formatTimeRange(start: string, end: string): string {
  const format = (t: string) => {
    const [h, m] = t.split(":").map(Number);
    const date = new Date();
    date.setHours(h, m, 0, 0);
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    });
  };
  return `${format(start)} – ${format(end)}`;
}

export function buildGoogleCalendarUrl(event: {
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  location: string;
  summary: string;
}): string {
  const start = event.date.replace(/-/g, "") + "T" + event.startTime.replace(":", "") + "00";
  const end = event.date.replace(/-/g, "") + "T" + event.endTime.replace(":", "") + "00";
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: event.title,
    dates: `${start}/${end}`,
    details: event.summary,
    location: event.location,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function absoluteUrl(path: string): string {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sabaoc.org";
  return `${base.replace(/\/$/, "")}${path.startsWith("/") ? path : `/${path}`}`;
}
