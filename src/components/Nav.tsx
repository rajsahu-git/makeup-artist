"use client";

import { useState } from "react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#notes", label: "Notes" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-6 sm:px-10">
        <a
          href="#top"
          className="font-display text-lg tracking-tight text-bone"
        >
          Harshita makeoverz
        </a>

        <nav className="hidden items-center gap-8 sm:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-xs uppercase tracking-widest text-bone-dim transition hover:text-foil"
            >
              {l.label}
            </a>
          ))}
          {/* <a
            href="#book"
            className="rounded-full border border-foil px-4 py-2 font-mono text-xs uppercase tracking-widest text-foil transition hover:bg-foil hover:text-ink"
          >
            Book a date
          </a> */}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 sm:hidden"
        >
          <span
            className={`h-px w-6 bg-bone transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 bg-bone transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-foil-dim/20 bg-ink px-6 pb-6 sm:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-foil-dim/10 py-4 font-mono text-xs uppercase tracking-widest text-bone-dim"
            >
              {l.label}
            </a>
          ))}
          {/* <a
            href="#book"
            onClick={() => setOpen(false)}
            className="py-4 font-mono text-xs uppercase tracking-widest text-foil"
          >
            Book a date
          </a> */}
        </nav>
      )}
    </header>
  );
}
