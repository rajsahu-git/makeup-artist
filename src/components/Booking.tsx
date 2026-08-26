export default function Booking() {
  return (
    <footer
      id="book"
      className="relative overflow-hidden border-t border-foil-dim/15 bg-ink px-6 pb-10 pt-24 sm:px-10 sm:pt-32"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, #c6a15b 50%, transparent)",
        }}
      />

      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-16 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <h2 className="max-w-lg font-display text-4xl italic leading-tight text-bone sm:text-5xl">
              Let&rsquo;s talk before the day, not on it.
            </h2>
            <p className="mt-6 max-w-md font-body text-sm leading-relaxed text-bone-dim">
              Dates fill fastest March through October. Send the details
              below and expect a reply within two days.
            </p>
            <a
              href="mailto:hello@marlowevance.com"
              className="mt-8 inline-block rounded-full bg-foil px-7 py-3 font-mono text-xs uppercase tracking-widest text-ink transition hover:bg-bone"
            >
              hello@marlowevance.com
            </a>
          </div>

          <dl className="grid grid-cols-2 gap-x-6 gap-y-8 self-end font-mono text-xs uppercase tracking-widest sm:grid-cols-1">
            <div>
              <dt className="text-foil-dim">Based in</dt>
              <dd className="mt-2 text-bone-dim">Jaipur, India</dd>
            </div>
            <div>
              <dt className="text-foil-dim">Travels for</dt>
              <dd className="mt-2 text-bone-dim">Bridal &amp; editorial</dd>
            </div>
            <div>
              <dt className="text-foil-dim">Instagram</dt>
              <dd className="mt-2 text-bone-dim">@marlowevance.mua</dd>
            </div>
          </dl>
        </div>

        <div className="mt-24 flex flex-col items-start justify-between gap-4 border-t border-foil-dim/15 pt-8 sm:flex-row sm:items-center">
          <span className="font-display text-base italic text-bone-dim">
            Marlowe Vance
          </span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-bone-dim/60">
            © {new Date().getFullYear()} — Makeup artistry, India
          </span>
        </div>
      </div>
    </footer>
  );
}
