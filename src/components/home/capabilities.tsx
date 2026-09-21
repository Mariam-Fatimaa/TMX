"use client";

import { motion } from "motion/react";

const capabilities = [
  {
    title: "Design",
    items: [
      "UI/UX Design",
      "Wireframing",
      "Prototyping",
      "Design Systems",
      "Responsive Design",
      "Figma",
    ],
  },
  {
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Responsive Interfaces",
      "Motion",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "APIs",
      "Databases",
      "Authentication",
      "CMS Integration",
      "Scalable Architecture",
    ],
  },
  {
    title: "Product",
    items: [
      "Product Strategy",
      "User Flows",
      "SaaS",
      "Dashboards",
      "E-commerce",
      "Mobile Experiences",
    ],
  },
];

export default function Capabilities() {
  return (
    <section className="px-5 py-28 md:px-8 md:py-36 lg:px-12 xl:px-16">
      <div className="mx-auto max-w-[1440px]">

        {/* Header */}
        <div className="mb-14 border-t border-black/10 pt-8">
          <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.18em] text-neutral-500">
            Capabilities
          </p>

          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-[760px] text-4xl font-medium tracking-[-0.045em] md:text-6xl">
              Design and technology,
              <br />
              working together.
            </h2>

            <p className="max-w-[380px] text-[15px] leading-[1.7] text-neutral-500">
              We combine product thinking, interface design, and modern
              development to create complete digital experiences.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid border-b border-black/10 md:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                border-t border-black/10
                py-8
                md:px-6
                lg:border-l
                lg:first:border-l-0
              "
            >
              <p className="mb-7 text-[12px] font-medium uppercase tracking-[0.16em] text-neutral-400">
                0{index + 1}
              </p>

              <h3 className="mb-7 text-2xl font-medium tracking-[-0.035em]">
                {group.title}
              </h3>

              <div className="space-y-3">
                {group.items.map((item) => (
                  <p
                    key={item}
                    className="text-[15px] leading-[1.6] text-neutral-600"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}