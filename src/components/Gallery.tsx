"use client";

import { useMemo, useState } from "react";
import Plate from "@/components/Plate";
import { categories, work, type Category } from "@/data/work";

export default function Gallery() {
  const [active, setActive] = useState<Category | "all">("all");

  const items = useMemo(
    () => (active === "all" ? work : work.filter((w) => w.category === active)),
    [active]
  );

  return (
    <section id="work" className="relative bg-ink px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-14 flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-foil">
              Selected work
            </span>
            <h2 className="mt-4 max-w-lg font-display text-4xl italic leading-tight text-bone sm:text-5xl">
              A shade for every brief.
            </h2>
          </div>

          {/* Signature element — category filters styled as makeup swatches */}
          <div
            role="group"
            aria-label="Filter work by category"
            className="flex flex-wrap items-center gap-5"
          >
            <SwatchButton
              label="All"
              hex="#f2e8d8"
              active={active === "all"}
              onClick={() => setActive("all")}
            />
            {categories.map((c) => (
              <SwatchButton
                key={c.id}
                label={c.label}
                hex={c.swatch}
                active={active === c.id}
                onClick={() => setActive(c.id)}
              />
            ))}
          </div>
        </div>

        <ul className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>li]:mb-5 [&>li]:break-inside-avoid">
          {items.map((item, i) => {
            const tone = categories.find((c) => c.id === item.category)!.swatch;
            return (
              <li key={item.id}>
                <Plate
                  src={item.src}
                  alt={item.title}
                  code={item.code}
                  toneHex={tone}
                  aspect={item.aspect}
                  priority={i < 3}
                />
                <div className="mt-3 flex items-baseline justify-between">
                  <span className="font-body text-sm text-bone-dim">
                    {item.title}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-foil-dim">
                    {categories.find((c) => c.id === item.category)?.label}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function SwatchButton({
  label,
  hex,
  active,
  onClick,
}: {
  label: string;
  hex: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className="group flex items-center gap-2.5"
    >
      <span
        className={`h-6 w-6 rounded-full border-2 transition ${
          active
            ? "border-lip scale-110"
            : "border-transparent group-hover:border-foil-dim/60"
        }`}
        style={{ boxShadow: `inset 0 0 0 2px #0b0a08` }}
      >
        <span
          className="block h-full w-full rounded-full"
          style={{ backgroundColor: hex }}
        />
      </span>
      <span
        className={`font-mono text-[11px] uppercase tracking-widest transition ${
          active ? "text-bone" : "text-bone-dim group-hover:text-bone"
        }`}
      >
        {label}
      </span>
    </button>
  );
}
