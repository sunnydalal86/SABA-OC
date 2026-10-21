import Image from "next/image";
import { ExternalLink, Mail } from "lucide-react";
import type { LeadershipMember } from "@/data/leadership";

export function LeadershipCard({
  member,
  showBio = true,
}: {
  member: LeadershipMember;
  showBio?: boolean;
}) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-sm border border-border bg-white">
      <div className="relative aspect-[4/5] w-full shrink-0 overflow-hidden bg-navy-muted">
        {member.image ? (
          <Image
            src={member.image}
            alt={`Portrait of ${member.name}`}
            fill
            className="object-cover"
            style={{ objectPosition: member.imagePosition ?? "center 20%" }}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-navy">
            <span className="font-serif text-4xl tracking-wide text-white">
              {initials(member.name)}
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-serif text-xl text-navy">{member.name}</h3>
        <p className="mt-1 text-sm font-medium text-gold-ink">{member.title}</p>
        {member.firm ? (
          <p className="mt-1 text-sm text-muted">{member.firm}</p>
        ) : null}
        {showBio ? (
          member.bio ? (
            <p className="mt-4 text-sm leading-relaxed text-charcoal/85">{member.bio}</p>
          ) : (
            <p className="mt-4 text-sm italic text-muted">Biography coming soon.</p>
          )
        ) : null}
        <div className="mt-auto flex flex-wrap gap-x-3 gap-y-2 pt-5">
          {member.externalProfile ? (
            <a
              href={member.externalProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-navy hover:text-gold-ink"
              aria-label={`${member.name} professional profile`}
            >
              <ExternalLink className="size-4" aria-hidden />
              Profile
            </a>
          ) : null}
          {member.linkedin ? (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-navy hover:text-gold-ink"
              aria-label={`${member.name} on LinkedIn`}
            >
              <ExternalLink className="size-4" aria-hidden />
              LinkedIn
            </a>
          ) : null}
          {member.email ? (
            <a
              href={`mailto:${member.email}`}
              className="inline-flex items-center gap-1.5 text-sm text-navy hover:text-gold-ink"
            >
              <Mail className="size-4" aria-hidden />
              Email
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

function initials(name: string) {
  const skip = new Set(["hon", "dr", "mr", "ms", "mrs"]);
  const parts = name
    .replace(/\(.*?\)/g, "")
    .split(/\s+/)
    .map((part) => part.replace(/[^A-Za-z]/g, ""))
    .filter((part) => part && !skip.has(part.toLowerCase()));
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return `${first}${last}`.toUpperCase();
}
