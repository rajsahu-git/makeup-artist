import Nav from "@/components/Nav";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-full flex-col lg:justify-end overflow-hidden bg-ink-2"
    >
      {/* Placeholder editorial plate — replace by rendering an <Image src="/work/hero.jpg" fill> here */}
      <div
        className="grain absolute inset-0"
        style={{
          background:
            "radial-gradient(90% 70% at 75% 15%, #c6a15b26 0%, transparent 55%), radial-gradient(80% 60% at 15% 90%, #7a1f2b22 0%, transparent 55%), linear-gradient(180deg, #151210 0%, #0b0a08 100%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />

      <Nav />

      <div className="relative mx-auto w-full max-w-[1400px] px-6 pb-14 pt-40 sm:px-10 sm:pb-20">
        <div className="mb-6 flex items-center justify-between">
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-bone-dim">
            Makeup Artist — London
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-foil">
            No. 001
          </span>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-foil/70 via-foil-dim/40 to-transparent" />

        <h1 className="mt-8 max-w-3xl font-display text-[13vw] italic leading-[0.92] tracking-tight text-bone sm:text-[7vw] lg:text-[5.5rem]">
          Skin first.
          <br />
          Colour after.
        </h1>

        <p className="mt-8 max-w-md font-body text-base leading-relaxed text-bone-dim">
          Bridal, editorial, and film makeup — built around your skin, not a
          filter. Fifteen years behind the chair, from Cotswold weddings to
          shoot days for print.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-6">
          <a
            href="#book"
            className="rounded-full bg-foil px-7 py-3 font-mono text-xs uppercase tracking-widest text-ink transition hover:bg-bone"
          >
            Book a date
          </a>
          <a
            href="#work"
            className="font-mono text-xs uppercase tracking-widest text-bone-dim underline decoration-foil-dim/50 underline-offset-4 transition hover:text-foil"
          >
            See the work
          </a>
        </div>
      </div>
    </section>
  );
}
