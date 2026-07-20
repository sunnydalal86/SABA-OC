import Image from "next/image";
import { ExternalLink, Mail } from "lucide-react";
import type { LeadershipMember } from "@/data/leadership";

export function LeadershipCard({ member }: { member: LeadershipMember }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-sm border border-border bg-white">
      <div className="relative aspect-[4/5] w-full shrink-0 overflow-hidden bg-navy-muted">
        <Image
          src={member.image}
          alt={`Portrait of ${member.name}`}
          fill
          className="object-cover object-[center_20%]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-serif text-xl text-navy">{member.name}</h3>
        <p className="mt-1 text-sm font-medium text-gold">{member.title}</p>
        {member.firm ? (
          <p className="mt-1 text-sm text-muted">{member.firm}</p>
        ) : null}
        {member.bio ? (
          <p className="mt-4 text-sm leading-relaxed text-charcoal/85">{member.bio}</p>
        ) : (
          <p className="mt-4 text-sm italic text-muted">Biography coming soon.</p>
        )}
        <div className="mt-auto flex gap-3 pt-5">
          {member.externalProfile ? (
            <a
              href={member.externalProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-navy hover:text-gold"
              aria-label={`${member.name} professional profile`}
            >
              <ExternalLink className="size-4" aria-hidden />
              Profile
            </a>
          ) : null}
          {member.email ? (
            <a
              href={`mailto:${member.email}`}
              className="inline-flex items-center gap-1.5 text-sm text-navy hover:text-gold"
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
