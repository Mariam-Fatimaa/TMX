"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import Image from "next/image";

const navItems = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="pointer-events-none fixed left-0 top-0 z-50 w-full pt-4">
      <nav
        className={`
    pointer-events-auto
    mx-auto
    flex
    h-[64px]
    items-center
    justify-between
    border
    border-black/10
    bg-white/90
    px-5
    backdrop-blur-xl
    transition-[width,border-radius]
    duration-[1200ms]
    ease-[cubic-bezier(0.22,1,0.36,1)]
    md:px-6

    ${scrolled
            ? "w-[calc(100vw-48px)] rounded-[20px]"
            : "w-[760px] max-w-[calc(100vw-32px)] rounded-full"
          }
  `}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logos/Logo.svg"
            alt="TMX Digital Solutions"
            width={200}
            height={80}
            priority
            className="h-[72px] w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[14px] font-medium text-neutral-600 transition-colors duration-200 hover:text-black"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-full bg-black px-5 py-2.5 text-[13px] font-medium text-white transition-transform duration-200 hover:scale-[1.02] md:block"
          >
            Start a project ↗
          </Link>

          {/* Mobile Menu */}
          <button
            type="button"
            aria-label="Open menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 md:hidden"
          >
            <Menu size={18} />
          </button>
        </div>
      </nav>
    </header>
  );
}