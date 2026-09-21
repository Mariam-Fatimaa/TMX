"use client";

import { motion } from "motion/react";
import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="px-5 py-28 md:px-8 md:py-36 lg:px-12 xl:px-16">
      <div className="mx-auto max-w-[1440px]">

        <div className="border-t border-black/10 pt-8">

          <p className="mb-8 text-[12px] font-medium uppercase tracking-[0.18em] text-neutral-500">
            About TMX
          </p>

          <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20">

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
                text-[42px]
                font-medium
                leading-[1.02]
                tracking-[-0.05em]
                sm:text-[54px]
                md:text-[68px]
                lg:text-[78px]
              "
            >
              Small team.
              <br />
              Serious digital work.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col justify-end"
            >
              <p className="max-w-[480px] text-[16px] leading-[1.8] text-neutral-600">
                TMX Digital Solutions is a digital design and development studio
                focused on building websites, web applications, mobile products,
                and thoughtful digital experiences.
              </p>

              <p className="mt-5 max-w-[480px] text-[16px] leading-[1.8] text-neutral-600">
                We bring design, product thinking, and development together so
                businesses can move from idea to finished product with more
                clarity and consistency.
              </p>

              <div className="mt-8">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-[14px] font-medium"
                >
                  More about TMX
                  <span>↗</span>
                </Link>
              </div>
            </motion.div>

          </div>

          {/* Bottom stats / facts */}
          <div className="mt-20 grid border-y border-black/10 sm:grid-cols-2 lg:grid-cols-4">

            <div className="py-7 lg:border-r lg:border-black/10 lg:px-6 lg:first:pl-0">
              <p className="text-[12px] uppercase tracking-[0.16em] text-neutral-400">
                Focus
              </p>

              <p className="mt-2 text-lg font-medium">
                Digital Products
              </p>
            </div>

            <div className="border-t border-black/10 py-7 sm:border-t-0 lg:border-r lg:px-6">
              <p className="text-[12px] uppercase tracking-[0.16em] text-neutral-400">
                Services
              </p>

              <p className="mt-2 text-lg font-medium">
                Design + Development
              </p>
            </div>

            <div className="border-t border-black/10 py-7 lg:border-r lg:px-6">
              <p className="text-[12px] uppercase tracking-[0.16em] text-neutral-400">
                Approach
              </p>

              <p className="mt-2 text-lg font-medium">
                Product First
              </p>
            </div>

            <div className="border-t border-black/10 py-7 sm:border-t-0 lg:px-6 lg:pr-0">
              <p className="text-[12px] uppercase tracking-[0.16em] text-neutral-400">
                Built for
              </p>

              <p className="mt-2 text-lg font-medium">
                Modern Businesses
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}