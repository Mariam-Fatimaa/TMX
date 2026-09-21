"use client";

import { motion } from "motion/react";

export default function ServicesHero() {
  return (
    <section className="px-5 pt-40 md:px-8 lg:px-12 xl:px-16">
      <div className="mx-auto max-w-[1440px] border-b border-black/10 pb-12">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5 text-[12px] font-medium uppercase tracking-[0.18em] text-neutral-500"
        >
          Services
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            max-w-[1180px]
            text-[54px]
            font-medium
            leading-[0.95]
            tracking-[-0.055em]
            sm:text-[72px]
            md:text-[92px]
            lg:text-[110px]
          "
        >
          Design and development,
          <br />
          built around real products.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.35,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            mt-10
            flex
            flex-col
            gap-6
            md:flex-row
            md:items-end
            md:justify-between
          "
        >
          <p className="max-w-[620px] text-[17px] leading-[1.7] text-neutral-600">
            TMX brings product thinking, interface design, and development
            together to help businesses move from idea to a polished digital
            product.
          </p>

          <p className="shrink-0 text-[12px] uppercase tracking-[0.16em] text-neutral-400">
            Strategy · Design · Development
          </p>
        </motion.div>

      </div>
    </section>
  );
}