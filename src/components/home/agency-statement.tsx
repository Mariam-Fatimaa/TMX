"use client";

import { motion } from "motion/react";

export default function AgencyStatement() {
  return (
    <section className="px-5 py-32 md:px-8 md:py-40 lg:px-12 xl:px-16">
      <div className="mx-auto max-w-[1440px]">

        <div className="border-t border-black/10 pt-10">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mb-8 text-[12px] font-medium uppercase tracking-[0.18em] text-neutral-500"
          >
            What we believe
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              max-w-[1200px]
              text-[42px]
              font-medium
              leading-[1.02]
              tracking-[-0.05em]
              sm:text-[54px]
              md:text-[72px]
              lg:text-[88px]
            "
          >
            We don’t just make things look good.
            <span className="text-neutral-400">
              {" "}
              We design digital experiences that are clear, useful, and built
              to move businesses forward.
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-12 flex justify-end"
          >
            <p className="max-w-[420px] text-[16px] leading-[1.7] text-neutral-600">
              Strategy, interface design, and development come together to
              create products that feel considered from the first interaction
              to the final build.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}