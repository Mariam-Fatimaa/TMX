"use client";

import { motion } from "motion/react";

export default function WhoWeAre() {
  return (
    <section className="px-5 pb-20 pt-24 md:px-8 md:pb-24 md:pt-28 lg:px-12 xl:px-16">
      <div className="mx-auto max-w-[1440px]">
        <div className="border-y border-black/10 py-8 md:py-10">
          <div className="grid gap-10 md:grid-cols-[0.32fr_0.68fr] md:gap-12">
            
            <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-neutral-500">
              Who we are
            </p>

            <div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  max-w-[900px]
                  text-[32px]
                  font-medium
                  leading-[1.08]
                  tracking-[-0.045em]
                  sm:text-[38px]
                  md:text-[46px]
                  lg:text-[52px]
                "
              >
                A digital studio bringing design and development together.
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="mt-8 grid gap-6 text-[15px] leading-[1.75] text-neutral-600 sm:grid-cols-2"
              >
                <p>
                  We work across UI/UX design, websites, web applications and
                  mobile products — combining thoughtful interfaces with
                  practical development.
                </p>

                <p>
                  Our focus is simple: understand what needs to be built,
                  design it clearly, and execute it properly.
                </p>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}