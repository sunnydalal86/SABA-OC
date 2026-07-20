export function DesignPreviewBar() {
  return (
    <div className="relative z-[60] bg-gold text-navy-deep">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-2 gap-y-1 px-4 py-3 text-center text-sm font-semibold tracking-wide sm:px-6 sm:text-base lg:px-8">
        <span>Design Preview</span>
        <span className="font-normal text-navy-deep/70" aria-hidden="true">
          —
        </span>
        <span className="font-normal">Prepared by</span>
        <a
          href="https://dizzledigital.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-2 underline-offset-4 transition-colors hover:text-navy"
        >
          Dizzle Digital
        </a>
      </div>
    </div>
  );
}
