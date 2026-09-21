"use client";

import Link from "next/link";
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

        {/* Project preview */}
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
          <div
            className="
              relative
              aspect-[16/9]
              overflow-hidden
              rounded-[24px]
              border
              border-black/10
              bg-neutral-200
            "
          >
            {/* Temporary visual until we add a real project */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-[12px] uppercase tracking-[0.16em] text-neutral-500">
                  Featured Project
                </p>

                <h2 className="mt-3 text-3xl font-medium tracking-[-0.04em] md:text-5xl">
                  Project Preview
                </h2>
              </div>
            </div>

            {/* Project label */}
            <div className="absolute bottom-5 left-5 rounded-full bg-white/90 px-4 py-2 text-[12px] font-medium backdrop-blur-md">
              UI/UX · Development
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}