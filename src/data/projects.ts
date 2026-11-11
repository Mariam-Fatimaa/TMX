import data from "./projects.json";

// Single source of truth for all portfolio projects.
// Each project has a live demo at public/demos/<slug>.html.
// Add a project to projects.json, then run `npm run covers`
// (and `npm run one-pagers -- <slug>` / `npm run portfolio` for the PDFs).

export const categories = ["Websites", "E-commerce", "SaaS", "Mobile Apps"] as const;
export type Category = (typeof categories)[number];

export type Project = {
  slug: string;
  title: string;
  category: Category;
  type: string;
  description: string;
  summary: string;
  services: string[];
  featured?: boolean;
  year: string;
  /** Live demo page */
  demo: string;
  /** One-page PDF of the full demo */
  pdf: string;
  /** 4:5 cover for cards */
  cover: string;
  /** 16:10 image for wide layouts */
  wide: string;
};

export const projects: Project[] = (data as Omit<Project, "year" | "demo" | "pdf" | "cover" | "wide">[]).map(
  (p) => ({
    ...p,
    year: "2026",
    demo: `/demos/${p.slug}.html`,
    pdf: `/demos/one-pagers/${p.slug}.pdf`,
    cover: `/Images/projects/covers/${p.slug}.webp`,
    wide: `/Images/projects/wide/${p.slug}.webp`,
  })
);

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
