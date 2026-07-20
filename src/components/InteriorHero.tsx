import { Breadcrumbs } from "./Breadcrumbs";

type InteriorHeroProps = {
  title: string;
  description?: string;
  breadcrumbs: Array<{ label: string; href?: string }>;
};

export function InteriorHero({
  title,
  description,
  breadcrumbs,
}: InteriorHeroProps) {
  return (
    <section className="border-b border-border bg-navy text-ivory">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="text-ivory/60 [&_a]:text-ivory/70 [&_a:hover]:text-gold-soft [&_[aria-current]]:text-gold-soft">
          <Breadcrumbs items={breadcrumbs} />
        </div>
        <h1 className="mt-6 max-w-3xl font-serif text-4xl tracking-tight sm:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ivory/80 sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}
