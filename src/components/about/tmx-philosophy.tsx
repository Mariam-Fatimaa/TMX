"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

const pillars = [
  {
    word: "Think",
    description:
      "We start by understanding the problem, the users, and what the product actually needs to achieve.",
  },
  {
    word: "Make",
    description:
      "We turn ideas into clear interfaces, prototypes, systems, and working digital experiences.",
  },
  {
    word: "eXecute",
    description:
      "We refine, build, and deliver with focus on the details that make the final product feel complete.",
  },
];

export default function TMXPhilosophy() {
  const [activeIndex, setActiveIndex] = useState(0);
  const pillarRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    pillarRefs.current.forEach((element, index) => {
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIndex(index);
          }
        },
        {
          root: null,
          rootMargin: "-42% 0px -42% 0px",
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

  return (
    <section className="px-5 py-24 md:px-8 md:pt-28 lg:px-12 xl:px-16">
      <div className="mx-auto max-w-[1440px]">
        <div>

          <p className="mb-10 text-[12px] font-medium uppercase tracking-[0.18em] text-neutral-500">
            Idea Behind TMX
          </p>

          <div className="border-b border-black/10">
            {pillars.map((pillar, index) => {
              const isActive = activeIndex === index;
              const isReached = index <= activeIndex;

              return (
                <motion.div
                  key={pillar.word}
                  ref={(el) => {
                    pillarRefs.current[index] = el;
                  }}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="
                    grid
                    gap-6
                    border-t
                    border-black/10
                    py-10
                    md:grid-cols-[0.45fr_0.55fr]
                    md:items-end
                    md:py-14
                  "
                >
                  <motion.h2
                    animate={{
                      x: isActive ? 8 : 0,
                    }}
                    transition={{
                      duration: 0.45,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={`
                      text-[48px]
                      font-medium
                      leading-[0.9]
                      tracking-[-0.06em]
                      transition-colors
                      duration-500
                      sm:text-[64px]
                      md:text-[82px]
                      lg:text-[96px]

                      ${
                        isReached
                          ? "text-black"
                          : "text-neutral-300"
                      }
                    `}
                  >
                    {pillar.word}
                  </motion.h2>

                  <motion.p
                    animate={{
                      x: isActive ? 8 : 0,
                    }}
                    transition={{
                      duration: 0.45,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={`
                      max-w-[560px]
                      text-[16px]
                      leading-[1.75]
                      transition-colors
                      duration-500

                      ${
                        isReached
                          ? "text-neutral-700"
                          : "text-neutral-300"
                      }
                    `}
                  >
                    {pillar.description}
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