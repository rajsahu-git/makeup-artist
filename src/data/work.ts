export type Category = "bridal" | "editorial" | "glam" | "sfx";

export interface WorkItem {
  id: string;
  title: string;
  category: Category;
  code: string; // shade-code style index, e.g. "No. 04"
  /** Drop a high-resolution photo into /public/work and set this path, e.g. "/work/bridal-01.jpg" */
  src?: string;
  aspect: "3/4" | "4/5" | "1/1" | "5/4";
}

export const categories: { id: Category; label: string; swatch: string }[] = [
  { id: "bridal", label: "Bridal", swatch: "#d8b4a0" },
  { id: "editorial", label: "Editorial", swatch: "#c6a15b" },
  { id: "glam", label: "Glam", swatch: "#7a1f2b" },
  { id: "sfx", label: "SFX", swatch: "#4a3b52" },
];

export const work: WorkItem[] = [
  { id: "bridal-01", title: "Ananya, South Delhi", category: "bridal", code: "No. 01", aspect: "4/5" },
  { id: "editorial-01", title: "Vogue India test shoot", category: "editorial", code: "No. 02", aspect: "3/4" },
  { id: "glam-01", title: "Filmfare after-party", category: "glam", code: "No. 03", aspect: "1/1" },
  { id: "bridal-02", title: "Priya, Udaipur", category: "bridal", code: "No. 04", aspect: "5/4" },
  { id: "sfx-01", title: "Bruising study, short film", category: "sfx", code: "No. 05", aspect: "4/5" },
  { id: "editorial-02", title: "Campaign, wet-look skin", category: "editorial", code: "No. 06", aspect: "4/5" },
  { id: "glam-02", title: "Red carpet, premiere night", category: "glam", code: "No. 07", aspect: "3/4" },
  { id: "bridal-03", title: "Meera, Kerala backwaters", category: "bridal", code: "No. 08", aspect: "1/1" },
  { id: "sfx-02", title: "Aging prosthetic, stage", category: "sfx", code: "No. 09", aspect: "5/4" },
];
