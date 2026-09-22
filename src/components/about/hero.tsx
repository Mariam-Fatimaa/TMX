"use client";

import { motion } from "motion/react";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden px-5 pt-40 md:px-8 lg:px-12 xl:px-16">
      <div className="mx-auto max-w-[1440px]">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-8 text-[12px] font-medium uppercase tracking-[0.18em] text-neutral-500"
        >
          About TMX
        </motion.p>

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
          Ideas deserve more
          <br />
          than good design.
        </motion.h1>

        <div className="mt-10 flex flex-col gap-8 border-t border-black/10 pt-8 md:mt-14 md:flex-row md:items-end md:justify-between">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="max-w-[620px] text-[17px] leading-[1.6] text-neutral-600 md:text-[18px]"
          >
            TMX Digital Solutions is a design and development studio focused on
            turning ideas into thoughtful, functional digital products.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-[12px] uppercase tracking-[0.16em] text-neutral-400"
          >
            Think · Make · eXecute
          </motion.p>
        </div>
      </div>
    </section>
  );
}