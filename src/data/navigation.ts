import { siteConfig } from "@/constants/site";

export const navigation = [
  ...(siteConfig.showWork ? [{ label: "Work", href: "/work" }] : []),
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];