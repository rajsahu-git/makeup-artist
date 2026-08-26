import Image from "next/image";

interface PlateProps {
  src?: string;
  alt: string;
  code: string;
  toneHex: string;
  aspect: "3/4" | "4/5" | "1/1" | "5/4";
  priority?: boolean;
  sizes?: string;
}

/**
 * A portfolio image tile. Renders the real photo when `src` is set;
 * otherwise renders a pressed-pigment placeholder plate so the layout
 * reads correctly before real photography is dropped into /public/work.
 */
export default function Plate({
  src,
  alt,
  code,
  toneHex,
  aspect,
  priority,
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
}: PlateProps) {
  return (
    <figure
      className="group relative overflow-hidden rounded-sm border border-foil-dim/20 bg-ink-2"
      style={{ aspectRatio: aspect.replace("/", " / ") }}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
        />
      ) : (
        <div
          className="grain absolute inset-0"
          style={{
            background: `radial-gradient(120% 90% at 30% 20%, ${toneHex}33 0%, transparent 60%), radial-gradient(100% 80% at 80% 90%, ${toneHex}22 0%, transparent 55%), var(--color-ink-2)`,
          }}
        >
          <div className="absolute inset-0 flex flex-col justify-between p-4">
            <span className="self-end font-mono text-[10px] tracking-widest text-bone-dim/70">
              {code}
            </span>
            <span className="font-mono text-[10px] leading-relaxed text-bone-dim/50">
              /public/work/{alt.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.jpg
            </span>
          </div>
        </div>
      )}
      {src && (
        <span className="pointer-events-none absolute right-3 top-3 font-mono text-[10px] tracking-widest text-bone/80 drop-shadow">
          {code}
        </span>
      )}
    </figure>
  );
}
