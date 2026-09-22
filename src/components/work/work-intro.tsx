"use client";

import { motion } from "motion/react";

export default function WorkIntro() {
  return (
    <section className="border-b border-black/10 pb-12">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="mb-5 text-[12px] font-medium uppercase tracking-[0.18em] text-neutral-500"
      >
        Our work
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
          max-w-[1100px]
          text-[54px]
          font-medium
          leading-[0.95]
          tracking-[-0.055em]
          sm:text-[72px]
          md:text-[92px]
          lg:text-[110px]
        "
      >
        Selected digital
        <br />
        work and products.
      </motion.h1>

      <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.5,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="max-w-[560px] text-[17px] leading-[1.7] text-neutral-600"
        >
          A collection of websites, applications, product interfaces, and
          digital experiences designed and developed by TMX.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.6,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="text-[12px] uppercase tracking-[0.16em] text-neutral-400"
        >
          TMX Digital Solutions / Portfolio
        </motion.p>
      </div>
    </section>
  );
}