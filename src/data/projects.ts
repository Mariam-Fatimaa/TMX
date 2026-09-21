export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  description: string;
  services: string[];
  image: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "fitlayer",
    title: "FitLayer",
    category: "UI/UX",
    year: "2026",
    description:
      "An AI-powered virtual try-on experience designed for fashion retailers.",
    services: ["UI/UX Design", "Frontend Development"],
    image: "/images/projects/fitlayer-cover.jpg",
    featured: true,
  },
  {
    slug: "bylt",
    title: "BYLT",
    category: "Web Apps",
    year: "2026",
    description:
      "A digital platform for passive fire protection workflows and documentation.",
    services: ["Product Design", "UI/UX"],
    image: "/images/projects/bylt-cover.jpg",
    featured: true,
  },
  {
    slug: "commerce-platform",
    title: "Commerce Platform",
    category: "Websites",
    year: "2026",
    description:
      "A modern commerce experience focused on product discovery and conversion.",
    services: ["Web Design", "Development"],
    image: "/images/projects/ecommerce-cover.jpg",
  },
  {
    slug: "mobile-banking",
    title: "Mobile Banking App",
    category: "Mobile Apps",
    year: "2026",
    description:
      "A clean mobile banking experience focused on speed, clarity, and usability.",
    services: ["UI/UX Design", "Mobile Product Design"],
    image: "/images/projects/mobile-banking.jpg",
  },
  {
    slug: "identity-system",
    title: "Identity System",
    category: "Branding",
    year: "2026",
    description:
      "A modern visual identity system designed for consistency across digital channels.",
    services: ["Branding", "Visual Design"],
    image: "/images/projects/identity-system.jpg",
  },
  {
    slug: "analytics-dashboard",
    title: "Analytics Dashboard",
    category: "Web Apps",
    year: "2026",
    description:
      "A data-heavy dashboard simplified into a clear and usable product interface.",
    services: ["Product Design", "Dashboard UI"],
    image: "/images/projects/analytics-dashboard.jpg",
  },
];