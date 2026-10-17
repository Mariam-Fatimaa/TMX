"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowDownRight } from "lucide-react";


export default function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pt-40 md:px-8 lg:px-12 xl:px-16">
      <div className="mx-auto max-w-[1440px]">

        {/* Top label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-8 text-[12px] font-medium uppercase tracking-[0.18em] text-neutral-500"
        >
          Think • Make • eXecute
        </motion.p>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            max-w-[1200px]
            text-[52px]
            font-medium
            leading-[0.95]
            tracking-[-0.055em]
            sm:text-[68px]
            md:text-[88px]
            lg:text-[108px]
            xl:text-[124px]
          "
        >
          Digital products,
          <br />
          designed to perform.
        </motion.h1>

        {/* Bottom content */}
        <div className="mt-10 flex flex-col gap-8 border-t border-black/10 pt-8 md:mt-14 md:flex-row md:items-end md:justify-between">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="max-w-[520px] text-[17px] leading-[1.6] text-neutral-600 md:text-[18px]"
          >
            We design and build websites, web applications, mobile products,
            and digital experiences for modern businesses.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-wrap items-center gap-3"
          >
            <Link
              href="/work"
              className="rounded-full bg-black px-6 py-3.5 text-[14px] font-medium text-white transition-transform duration-300 hover:scale-[1.03]"
            >
              View our work
            </Link>

            <Link
              href="/contact"
              className="group flex items-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3.5 text-[14px] font-medium transition-colors hover:bg-neutral-100"
            >
              Start a project

              <ArrowDownRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
              />
            </Link>
          </motion.div>
        </div>

        {/* Featured Project Preview */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.75,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-16 md:mt-20"
        >
          <Link
            href="/work/plinth"
            className="group relative block aspect-[16/9] overflow-hidden rounded-[28px] border border-black/10 bg-neutral-100"
          >
            {/* Background image */}
            <Image
              src="/images/projects/Preview Img.png"
              alt="Slate & Signal — Creative Agency Website"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1440px"
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />

            {/* Base dark gradient for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent" />

            {/* Glass hover card */}
            <div
              className="
        absolute bottom-5 left-5 right-5
        rounded-[24px]
        border border-white/12
        bg-black/45
        backdrop-blur-xl
        shadow-[0_8px_30px_rgba(0,0,0,0.25)]
        transition-all duration-500 ease-out
        opacity-0 translate-y-4
        group-hover:opacity-100 group-hover:translate-y-0
        md:bottom-6 md:left-6 md:right-6
      "
            >
              <div className="p-6 md:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-[30px] font-medium tracking-[-0.04em] text-white md:text-[36px]">
                      Slate Signal
                    </h2>
                    <p className="mt-2 text-[15px] text-white/80 md:text-[16px]">
                       Creative Agency / Web Design & Development
                    </p>
                  </div>

                  <p className="text-[22px] font-medium text-white/90 md:text-[24px]">
                    2026
                  </p>
                </div>

                <div className="mt-6 border-t border-white/12 pt-5">
                  <div className="flex items-center justify-between">
                    <span className="text-[18px] font-medium text-white md:text-[20px]">
                      View Project
                    </span>

                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/5 text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                      <ArrowDownRight size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}