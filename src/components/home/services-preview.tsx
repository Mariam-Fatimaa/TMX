"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Website Development",
    description:
      "High-performing responsive websites built with clean frontend architecture and scalable backend foundations.",
    tags: ["Frontend", "Backend", "Responsive", "CMS"],
  },
  {
    number: "02",
    title: "Web Application Development",
    description:
      "Custom web applications designed around real workflows, product goals, and business requirements.",
    tags: ["Dashboards", "SaaS", "APIs", "Product Development"],
  },
  {
    number: "03",
    title: "Mobile App Development",
    description:
      "Mobile experiences focused on usability, performance, and consistent cross-device interaction.",
    tags: ["iOS", "Android", "Responsive UI", "Product UX"],
  },
  {
    number: "04",
    title: "UI/UX Design",
    description:
      "User-focused interfaces, wireframes, prototypes, design systems, and polished digital product experiences.",
    tags: ["Figma", "UX", "Design Systems", "Prototyping"],
  },
  {
    number: "05",
    title: "Brand & Visual Design",
    description:
      "Clean visual assets for businesses that need a more consistent and professional digital presence.",
    tags: ["Logos", "Business Cards", "Visual Identity"],
  },
];

export default function ServicesPreview() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="px-5 py-28 md:px-8 md:py-36 lg:px-12 xl:px-16">
      <div className="mx-auto max-w-[1440px]">

        <div className="mb-12 flex flex-col gap-6 border-t border-black/10 pt-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.18em] text-neutral-500">
              What we do
            </p>

            <h2 className="text-4xl font-medium tracking-[-0.045em] md:text-6xl">
              Services built around
              <br />
              digital products.
            </h2>
          </div>

          <p className="max-w-[380px] text-[15px] leading-[1.7] text-neutral-500">
            From early product thinking to final implementation, we help shape
            digital experiences from idea to launch.
          </p>
        </div>

        <div className="border-b border-black/10">
          {services.map((service, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={service.title}
                className="border-t border-black/10"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-6 py-7 text-left md:py-9"
                >
                  <div className="flex items-center gap-6 md:gap-10">
                    <span className="text-[12px] font-medium text-neutral-400">
                      {service.number}
                    </span>

                    <h3 className="text-2xl font-medium tracking-[-0.035em] md:text-4xl">
                      {service.title}
                    </h3>
                  </div>

                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/10">
                    {isOpen ? <Minus size={17} /> : <Plus size={17} />}
                  </span>
                </button>

                <div
                  className={`
                    grid overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
                    ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >
                  <div className="min-h-0">
                    <div className="pb-8 pl-0 md:pb-10 md:pl-[84px]">
                      <p className="max-w-[650px] text-[16px] leading-[1.7] text-neutral-600">
                        {service.description}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-black/10 bg-white px-3.5 py-2 text-[12px] text-neutral-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}