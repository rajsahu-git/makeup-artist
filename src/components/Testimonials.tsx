const notes = [
  {
    quote:
      "She got to the venue before my hairstylist and never once made me feel like a schedule. My skin looked like my skin, just quieter about it.",
    from: "Amara",
    context: "Bride, Kensington",
    rotate: "-rotate-1",
  },
  {
    quote:
      "Twelve hour set day, three costume changes, zero touch-ups needed under those lights. That's the whole job, done right.",
    from: "Danielle R.",
    context: "1st AD, campaign shoot",
    rotate: "rotate-1",
  },
  {
    quote:
      "Asked for a bruise that would read from the back row. Got one that made the front row wince. Exactly the brief.",
    from: "Tomasz K.",
    context: "Director, student short",
    rotate: "-rotate-2",
  },
];

export default function Testimonials() {
  return (
    <section
      id="notes"
      className="border-t border-foil-dim/15 bg-ink-2 px-6 py-24 sm:px-10 sm:py-32"
    >
      <div className="mx-auto max-w-[1400px]">
        <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-foil">
          Notes left on the mirror
        </span>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {notes.map((n) => (
            <figure
              key={n.from}
              className={`rounded-sm border border-foil-dim/20 bg-ink p-8 shadow-[0_20px_40px_-25px_rgba(0,0,0,0.8)] ${n.rotate}`}
            >
              <blockquote className="font-display text-xl italic leading-snug text-bone">
                &ldquo;{n.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 font-mono text-[11px] uppercase tracking-widest text-bone-dim">
                {n.from} <span className="text-foil-dim">— {n.context}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
