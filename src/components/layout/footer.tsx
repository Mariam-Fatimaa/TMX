"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const navigation = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const services = [
  "UI/UX Design",
  "Website Development",
  "Web Applications",
  "Mobile Applications",
  "Brand & Visual Design",
];

const socials = [
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Behance", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white">

      <div className="mx-auto max-w-[1440px] px-5 pb-8 pt-16 md:px-8 md:pt-20 lg:px-12 xl:px-16">

        {/* Top */}
        <div className="grid gap-14 border-b border-white/15 pb-16 md:grid-cols-2 lg:grid-cols-[1.5fr_0.7fr_0.9fr_0.7fr]">

          {/* Brand */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-3"
            >
              <span className="text-2xl font-semibold tracking-[-0.05em]">
                TMX
              </span>

              <span className="text-[10px] font-medium uppercase leading-[1.15] tracking-[0.1em] text-white/45">
                Digital
                <br />
                Solutions
              </span>
            </Link>

            <p className="mt-7 max-w-[350px] text-[15px] leading-[1.7] text-white/55">
              Designing and developing thoughtful digital products for modern
              businesses.
            </p>

            <p className="mt-7 text-[12px] uppercase tracking-[0.2em] text-white/35">
              Think • Make • eXecute
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-6 text-[11px] uppercase tracking-[0.18em] text-white/35">
              Explore
            </p>

            <div className="flex flex-col gap-3">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="w-fit text-[14px] text-white/70 transition-colors duration-200 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="mb-6 text-[11px] uppercase tracking-[0.18em] text-white/35">
              Services
            </p>

            <div className="flex flex-col gap-3">
              {services.map((service) => (
                <span
                  key={service}
                  className="text-[14px] text-white/70"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="mb-6 text-[11px] uppercase tracking-[0.18em] text-white/35">
              Follow
            </p>

            <div className="flex flex-col gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-fit items-center gap-1.5 text-[14px] text-white/70 transition-colors duration-200 hover:text-white"
                >
                  {social.label}

                  <ArrowUpRight
                    size={13}
                    className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Brand statement */}
        {/* Brand statement */}
<div className="border-b border-white/15 py-12 md:py-16">
  <div
    className="
      flex
      w-full
      items-center
      justify-between
      whitespace-nowrap
      px-1
      text-[8.2vw]
      font-medium
      leading-[0.9]
      tracking-[-0.05em]
      text-white
    "
  >
    <span>Think</span>

    <span className="text-[0.35em] text-white/35">•</span>

    <span>Make</span>

    <span className="text-[0.35em] text-white/35">•</span>

    <span className="pr-1">
      <span className="text-white/40">e</span>Xecute
    </span>
  </div>
</div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 pt-7 text-[12px] text-white/40 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {new Date().getFullYear()} TMX Digital Solutions
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="transition-colors hover:text-white"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-white"
            >
              Terms
            </Link>

            <button
              type="button"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="transition-colors hover:text-white"
            >
              Back to top ↑
            </button>
          </div>

        </div>

      </div>

    </footer>
  );
}