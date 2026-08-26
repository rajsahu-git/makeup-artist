const services = [
  {
    label: "Bridal",
    detail:
      "Trial plus wedding day. Skin-first application built to hold through tears, heat, and photographs.",
    meta: "2–3 HRS",
  },
  {
    label: "Editorial",
    detail:
      "Shoot-ready looks for print, campaign, and lookbook work, built to camera and lighting.",
    meta: "ON SET",
  },
  {
    label: "Glam",
    detail:
      "Event and red-carpet makeup with staying power for long nights and bright rooms.",
    meta: "90 MIN",
  },
  {
    label: "SFX & Character",
    detail:
      "Prosthetics, bruising, ageing, and creature work for film, stage, and student sets.",
    meta: "BY BRIEF",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="border-t border-foil-dim/15 bg-ink px-6 py-24 sm:px-10 sm:py-32"
    >
      <div className="mx-auto max-w-[1400px]">
        <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-foil">
          Services
        </span>
        <h2 className="mt-4 max-w-lg font-display text-4xl italic leading-tight text-bone sm:text-5xl">
          The kit, applied with intent.
        </h2>

        <ul className="mt-14 divide-y divide-foil-dim/15 border-t border-foil-dim/15">
          {services.map((s) => (
            <li
              key={s.label}
              className="group grid grid-cols-1 gap-3 py-8 sm:grid-cols-[1fr_2fr_auto] sm:items-center sm:gap-8"
            >
              <span className="font-display text-2xl italic text-bone transition group-hover:text-foil">
                {s.label}
              </span>
              <span className="font-body text-sm leading-relaxed text-bone-dim">
                {s.detail}
              </span>
              <span className="font-mono text-[11px] uppercase tracking-widest text-foil-dim">
                {s.meta}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
