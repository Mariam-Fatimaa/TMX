"use client";

import { useEffect, useRef, useState } from "react";
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
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    stepRefs.current.forEach((element, index) => {
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveStep(index);
          }
        },
        {
          root: null,
          rootMargin: "-40% 0px -40% 0px",
          threshold: 0,
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const progress =
    steps.length > 1 ? (activeStep / (steps.length - 1)) * 100 : 0;

  return (
  <section className="px-5 pb-14 pt-12 md:px-8 md:pb-20 md:pt-16 lg:px-12 xl:px-16">
    <div className="mx-auto max-w-[1440px]">

      {/* Header */}
      <div>
        <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-500 md:mb-4 md:text-[12px]">
          Our process
        </p>

        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-8">
          <h2 className="max-w-[850px] text-[40px] font-medium leading-[0.98] tracking-[-0.045em] sm:text-5xl md:text-6xl">
            A clear path from
            <br />
            idea to launch.
          </h2>

          <p className="max-w-[390px] text-[14px] leading-[1.7] text-neutral-500 md:text-[15px]">
            Every project follows a flexible process designed to keep
            decisions clear and progress visible.
          </p>
        </div>
      </div>
      
        {/* Process */}
        <div className="relative mt-10 md:mt-14">
          {/* Desktop Journey Line */}
          <div className="absolute bottom-0 left-[15px] top-0 hidden w-px bg-black/10 md:block">
            <motion.div
              className="absolute left-0 top-0 w-px bg-black"
              animate={{
                height: `${progress}%`,
              }}
              transition={{
                duration: 0.55,
                ease: [0.16, 1, 0.3, 1],
              }}
            />
          </div>

          {/* Steps */}
          <div className="border-b border-black/10">
            {steps.map((step, index) => {
              const isActive = activeStep === index;
              const isPassed = index < activeStep;

              return (
                <motion.div
                  key={step.number}
                  ref={(el) => {
                    stepRefs.current[index] = el;
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.04,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`
                    relative
                    grid
                    min-h-[138px]
                    gap-4
                    border-t
                    border-black/10
                    py-6
                    transition-all
                    duration-500

                    md:min-h-[158px]
                    md:grid-cols-[80px_1fr_1fr]
                    md:items-center
                    md:gap-6
                    md:py-9

                    ${
                      isActive
                        ? "opacity-100"
                        : isPassed
                        ? "opacity-60"
                        : "opacity-35"
                    }
                  `}
                >
                  {/* Number / marker */}
                  <div className="relative flex items-center gap-3 md:block">
                    <motion.div
                      animate={{
                        scale: isActive ? 1 : 0.72,
                        backgroundColor:
                          isActive || isPassed ? "#000000" : "#d4d4d4",
                      }}
                      transition={{
                        duration: 0.35,
                      }}
                      className="
                        h-2.5
                        w-2.5
                        shrink-0
                        rounded-full

                        md:absolute
                        md:left-[11px]
                        md:top-1/2
                        md:-translate-y-1/2
                      "
                    />

                    <span
                      className={`
                        text-[11px]
                        font-medium
                        transition-colors
                        duration-500

                        md:pl-10
                        md:text-[12px]

                        ${
                          isActive
                            ? "text-black"
                            : "text-neutral-400"
                        }
                      `}
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Title */}
                  <motion.h3
                    animate={{
                      x: isActive ? 5 : 0,
                    }}
                    transition={{
                      duration: 0.45,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={`
                      text-[28px]
                      font-medium
                      leading-none
                      tracking-[-0.035em]
                      transition-colors
                      duration-500

                      md:text-4xl

                      ${
                        isActive
                          ? "text-black"
                          : "text-neutral-500"
                      }
                    `}
                  >
                    {step.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    animate={{
                      x: isActive ? 5 : 0,
                    }}
                    transition={{
                      duration: 0.45,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={`
                      max-w-[520px]
                      text-[14px]
                      leading-[1.65]
                      transition-colors
                      duration-500

                      md:text-[15px]

                      ${
                        isActive
                          ? "text-neutral-700"
                          : "text-neutral-400"
                      }
                    `}
                  >
                    {step.description}
                  </motion.p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}