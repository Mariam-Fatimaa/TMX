"use client";

import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We start by understanding the product, business goals, audience, and current challenges.",
  },
  {
    number: "02",
    title: "Define",
    description:
      "We shape the scope, structure, user flows, priorities, and technical direction.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We translate the strategy into wireframes, polished interfaces, and reusable systems.",
  },
  {
    number: "04",
    title: "Develop",
    description:
      "We build the product with a focus on responsiveness, maintainability, and performance.",
  },
  {
    number: "05",
    title: "Launch",
    description:
      "We test, refine, deploy, and make sure the final experience is ready for real users.",
  },
];

export default function ServicesProcess() {
  return (
    <section className="px-5 py-24 md:px-8 lg:px-12 xl:px-16">
      <div className="mx-auto max-w-[1440px]">

        {/* Header */}
        <div className="border-t border-black/10 pt-8">
          <p className="mb-4 text-[12px] font-medium uppercase tracking-[0.18em] text-neutral-500">
            Our process
          </p>

          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-[850px] text-4xl font-medium tracking-[-0.045em] md:text-6xl">
              A clear path from
              <br />
              idea to launch.
            </h2>

            <p className="max-w-[390px] text-[15px] leading-[1.7] text-neutral-500">
              Every project follows a flexible process designed to keep
              decisions clear and progress visible.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="mt-14 border-b border-black/10">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.7,
                delay: index * 0.07,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="grid gap-6 border-t border-black/10 py-8 md:grid-cols-[80px_1fr_1fr] md:py-10"
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