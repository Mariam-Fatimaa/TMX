"use client";

import { motion } from "motion/react";

export default function ContactHero() {
  return (
    <section className="px-5 pt-40 md:px-8 lg:px-12 xl:px-16">
      <div className="mx-auto max-w-[1440px]">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-8 text-[12px] font-medium uppercase tracking-[0.18em] text-neutral-500"
        >
          Start a project
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[1200px] text-[52px] font-medium leading-[0.95] tracking-[-0.055em] sm:text-[68px] md:text-[88px] lg:text-[108px]"
        >
          Tell us what
          <br />
          you&apos;re building.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-10 flex flex-col gap-6 border-t border-black/10 pt-8 md:mt-14 md:flex-row md:items-end md:justify-between"
        >
          <p className="max-w-[560px] text-[17px] leading-[1.6] text-neutral-600 md:text-[18px]">
            A few details are enough to get started. We&apos;ll come back with
            questions, a rough plan and an honest estimate, usually within one
            working day.
          </p>

          <div className="flex items-center gap-2 text-[13px] text-neutral-500">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Taking on new projects
          </div>
        </motion.div>
      </div>
    </section>
  );
}
