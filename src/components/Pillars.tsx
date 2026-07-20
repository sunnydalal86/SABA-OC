import {
  Briefcase,
  GraduationCap,
  Handshake,
  HeartHandshake,
  Megaphone,
  Users,
  type LucideIcon,
} from "lucide-react";

const pillars: Array<{
  title: string;
  description: string;
  icon: LucideIcon;
}> = [
  {
    title: "Professional Growth",
    description:
      "Programming and relationships that support attorneys at every stage of practice in Orange County.",
    icon: Briefcase,
  },
  {
    title: "Mentorship",
    description:
      "Connecting seasoned practitioners with law students and new lawyers navigating the profession.",
    icon: Handshake,
  },
  {
    title: "Advocacy",
    description:
      "Elevating South Asian voices in the legal community and advancing equity and representation.",
    icon: Megaphone,
  },
  {
    title: "Community",
    description:
      "Building belonging among attorneys, judges, students, and allies across Orange County.",
    icon: Users,
  },
  {
    title: "Education",
    description:
      "Panels, CLE-minded conversations, and learning opportunities grounded in real practice.",
    icon: GraduationCap,
  },
  {
    title: "Public Service",
    description:
      "Clinics and partnerships that expand access to justice for South Asian and broader communities.",
    icon: HeartHandshake,
  },
];

export function Pillars() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {pillars.map((pillar) => {
        const Icon = pillar.icon;
        return (
          <div key={pillar.title} className="border-t border-border pt-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex size-10 items-center justify-center rounded-sm bg-navy text-gold-soft">
                <Icon className="size-5" aria-hidden />
              </span>
              <h3 className="font-serif text-xl text-navy">{pillar.title}</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">{pillar.description}</p>
          </div>
        );
      })}
    </div>
  );
}
