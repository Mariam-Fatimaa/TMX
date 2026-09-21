"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight} from "lucide-react";
import Image from "next/image";

const navItems = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
      <div className="relative mx-auto">
        <nav
          className={`
            pointer-events-auto
            relative
            z-50
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

            ${
              scrolled
                ? "w-[calc(100vw-48px)] rounded-[20px]"
                : "w-[760px] max-w-[calc(100vw-32px)] rounded-full"
            }
          `}
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center"
            onClick={() => setMenuOpen(false)}
          >
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

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden rounded-full bg-black px-5 py-2.5 text-[13px] font-medium text-white transition-transform duration-200 hover:scale-[1.02] md:block"
            >
              <span className="flex items-center gap-1.5">
  Start a project
  <ArrowUpRight size={14} strokeWidth={1.8} />
</span>
            </Link>

            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((prev) => !prev)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 transition-colors hover:bg-black/5 md:hidden"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`
            pointer-events-auto
            absolute
            left-1/2
            top-[72px]
            z-40
            w-[calc(100vw-32px)]
            -translate-x-1/2
            overflow-hidden
            rounded-[24px]
            border
            border-black/10
            bg-white
            shadow-[0_18px_50px_rgba(0,0,0,0.12)]
            transition-all
            duration-300
            md:hidden

            ${
              menuOpen
                ? "visible translate-y-0 opacity-100"
                : "invisible -translate-y-2 opacity-0"
            }
          `}
        >
          <div className="flex flex-col p-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-[16px] px-4 py-4 text-[16px] font-medium text-neutral-800 transition-colors hover:bg-neutral-100"
              >
                {item.label}
              </Link>
            ))}

            <div className="my-2 h-px bg-black/10" />

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-1 flex items-center justify-between rounded-[16px] bg-black px-4 py-4 text-[15px] font-medium text-white"
            >
              Start a project
              <ArrowUpRight size={17} strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}