"use client";

import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand the product, audience, goals, and business context before making design decisions.",
  },
  {
    number: "02",
    title: "Define",
    description:
      "We shape the structure, user flows, priorities, and technical direction for the project.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We turn the strategy into clear interfaces, responsive layouts, prototypes, and reusable systems.",
  },
  {
    number: "04",
    title: "Develop",
    description:
      "We build the experience with scalable frontend and backend foundations, keeping performance and usability in focus.",
  },
  {
    number: "05",
    title: "Launch",
    description:
      "We test, refine, deploy, and make sure the final product is ready for real users.",
  },
];

export default function Process() {
  return (
    <section className="px-5 py-28 md:px-8 md:py-36 lg:px-12 xl:px-16">
      <div className="mx-auto max-w-[1440px]">

        {/* Header */}
        <div className="mb-14 border-t border-black/10 pt-8">
          <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.18em] text-neutral-500">
            How we work
          </p>

          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-[760px] text-4xl font-medium tracking-[-0.045em] md:text-6xl">
              From first idea
              <br />
              to final launch.
            </h2>

            <p className="max-w-[380px] text-[15px] leading-[1.7] text-neutral-500">
              A simple process built around clarity, collaboration, and getting
              the important decisions right early.
            </p>
          </div>
        </div>

        {/* Process list */}
        <div className="border-b border-black/10">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="grid gap-6 border-t border-black/10 py-8 md:grid-cols-[80px_1fr_1fr] md:items-start md:py-10"
            >
              <span className="text-[12px] font-medium text-neutral-400">
                {step.number}
              </span>

              <h3 className="text-2xl font-medium tracking-[-0.035em] md:text-4xl">
                {step.title}
              </h3>

              <p className="max-w-[520px] text-[15px] leading-[1.7] text-neutral-600">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}