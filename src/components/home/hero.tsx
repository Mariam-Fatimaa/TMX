"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowDownRight } from "lucide-react";
import { siteConfig } from "@/constants/site";


export default function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pt-40 md:px-8 lg:px-12 xl:px-16">
      <div className="mx-auto max-w-[1440px]">

        {/* Top label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-8 text-[12px] font-medium uppercase tracking-[0.18em] text-neutral-500"
        >
          Think • Make • eXecute
        </motion.p>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            max-w-[1200px]
            text-[52px]
            font-medium
            leading-[0.95]
            tracking-[-0.055em]
            sm:text-[68px]
            md:text-[88px]
            lg:text-[108px]
            xl:text-[124px]
          "
        >
          Digital products,
          <br />
          designed to perform.
        </motion.h1>

        {/* Bottom content */}
        <div className="mt-10 flex flex-col gap-8 border-t border-black/10 pt-8 md:mt-14 md:flex-row md:items-end md:justify-between">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="max-w-[520px] text-[17px] leading-[1.6] text-neutral-600 md:text-[18px]"
          >
            We design and build websites, web applications, mobile products,
            and digital experiences for modern businesses.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-wrap items-center gap-3"
          >
            {siteConfig.showWork && (
              <Link
                href="/work"
                className="rounded-full bg-black px-6 py-3.5 text-[14px] font-medium text-white transition-transform duration-300 hover:scale-[1.03]"
              >
                View our work
              </Link>
            )}

            <Link
              href="/contact"
              className="group flex items-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3.5 text-[14px] font-medium transition-colors hover:bg-neutral-100"
            >
              Start a project

              <ArrowDownRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
              />
            </Link>
          </motion.div>
        </div>

        {/* Featured Project Preview */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.75,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-16 md:mt-20"
        >
          <Link
            href={
              siteConfig.showWork
                ? "/work/plinth"
                : "/demos/slate-and-signal.html"
            }
            className="group relative block aspect-[16/9] overflow-hidden rounded-[28px] border border-black/10 bg-neutral-100"
          >
            {/* Background image */}
            <Image
              src="/Images/projects/slate-signal.png"
              alt="Slate & Signal — Creative Agency Website"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1440px"
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />

            {/* Base dark gradient for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent" />

            {/* Glass hover card */}
            <div
              className="
        absolute bottom-5 left-5 right-5
        rounded-[24px]
        border border-white/12
        bg-black/45
        backdrop-blur-xl
        shadow-[0_8px_30px_rgba(0,0,0,0.25)]
        transition-all duration-500 ease-out
        opacity-0 translate-y-4
        group-hover:opacity-100 group-hover:translate-y-0
        md:bottom-6 md:left-6 md:right-6
      "
            >
              <div className="p-6 md:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-[30px] font-medium tracking-[-0.04em] text-white md:text-[36px]">
                      Slate Signal
                    </h2>
                    <p className="mt-2 text-[15px] text-white/80 md:text-[16px]">
                       Creative Agency / Web Design & Development
                    </p>
                  </div>

                  <p className="text-[22px] font-medium text-white/90 md:text-[24px]">
                    2026
                  </p>
                </div>

                <div className="mt-6 border-t border-white/12 pt-5">
                  <div className="flex items-center justify-between">
                    <span className="text-[18px] font-medium text-white md:text-[20px]">
                      View Project
                    </span>

                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/5 text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                      <ArrowDownRight size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}


// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { motion, useReducedMotion } from "motion/react";
// import { ArrowDownRight, ArrowUpRight } from "lucide-react";

// const ACCENT = "#F04438";

// function TMXSymbol({ className = "" }: { className?: string }) {
//   return (
//     <svg
//       viewBox="0 0 48 48"
//       fill="none"
//       aria-hidden="true"
//       className={className}
//     >
//       <path
//         d="M24 4V44M4 24H44M9.86 9.86L38.14 38.14M38.14 9.86L9.86 38.14"
//         stroke={ACCENT}
//         strokeWidth="2.5"
//         strokeLinecap="round"
//       />
//       <circle cx="24" cy="24" r="3" fill={ACCENT} />
//     </svg>
//   );
// }

// function DecorativeGeometry() {
//   const reduceMotion = useReducedMotion();

//   const squares = [
//     { top: "17%", right: "5%", size: 36, rotate: 12, fill: false },
//     { top: "22%", right: "11%", size: 18, rotate: -10, fill: true },
//     { top: "29%", right: "4%", size: 64, rotate: 16, fill: false },
//     { top: "36%", right: "13%", size: 24, rotate: -15, fill: false },
//     { top: "43%", right: "6%", size: 12, rotate: 8, fill: true },
//   ];

//   return (
//     <div
//       aria-hidden="true"
//       className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block"
//     >
//       {squares.map((square, index) => (
//         <motion.div
//           key={index}
//           initial={
//             reduceMotion
//               ? false
//               : { opacity: 0, scale: 0.65, rotate: 0 }
//           }
//           animate={{
//             opacity: square.fill ? 0.45 : 0.28,
//             scale: 1,
//             rotate: square.rotate,
//           }}
//           transition={{
//             duration: 1,
//             delay: 0.5 + index * 0.12,
//             ease: [0.16, 1, 0.3, 1],
//           }}
//           style={{
//             top: square.top,
//             right: square.right,
//             width: square.size,
//             height: square.size,
//           }}
//           className={
//             square.fill
//               ? "absolute rounded-[3px] bg-[#F04438]"
//               : "absolute rounded-[3px] border border-black/40"
//           }
//         />
//       ))}
//     </div>
//   );
// }

// export default function Hero() {
//   const reduceMotion = useReducedMotion();

//   const entrance = {
//     ease: [0.16, 1, 0.3, 1] as const,
//   };

//   return (
//     <section className="relative isolate overflow-hidden px-5 pt-36 md:px-8 md:pt-40 lg:px-12 xl:px-16">

//       {/* Background decorative elements */}
//       <DecorativeGeometry />

//       <div className="relative z-10 mx-auto max-w-[1440px]">

//         {/* Top editorial label */}
//         <motion.div
//           initial={
//             reduceMotion
//               ? false
//               : { opacity: 0, y: 15 }
//           }
//           animate={{ opacity: 1, y: 0 }}
//           transition={{
//             duration: 0.7,
//             delay: 0.1,
//             ...entrance,
//           }}
//           className="mb-10 flex items-center justify-between md:mb-12"
//         >
//           <div className="flex items-center gap-3">
//             <span className="h-[7px] w-[7px] rounded-full bg-[#F04438]" />

//             <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-600 md:text-[12px]">
//               Think · Make · eXecute
//             </p>
//           </div>

//           <span className="hidden text-[11px] font-medium uppercase tracking-[0.12em] text-neutral-400 sm:block">
//             Independent Digital Studio / Est. 2026
//           </span>
//         </motion.div>

//         {/* Main headline */}
//         <div className="relative">
//           <motion.h1
//             initial={
//               reduceMotion
//                 ? false
//                 : { opacity: 0, y: 45 }
//             }
//             animate={{ opacity: 1, y: 0 }}
//             transition={{
//               duration: 1,
//               delay: 0.2,
//               ...entrance,
//             }}
//             className="
//               relative z-10
//               max-w-[1320px]
//               text-[clamp(3.25rem,7.5vw,8.5rem)]
//               font-medium
//               leading-[0.98]
//               tracking-[-0.06em]
//               text-[#111111]
//             "
//           >
//             Digital products,
//             <br />
//             designed to{" "}
//             <span className="relative inline-block whitespace-nowrap text-[#F04438]">
//               perform.
//             </span>
//           </motion.h1>

//           {/* Signature TMX symbol */}
//           <motion.div
//             initial={
//               reduceMotion
//                 ? false
//                 : { opacity: 0, scale: 0.5, rotate: -45 }
//             }
//             animate={{ opacity: 1, scale: 1, rotate: 0 }}
//             transition={{
//               duration: 1,
//               delay: 0.85,
//               ...entrance,
//             }}
//             className="absolute -bottom-12 right-0 hidden lg:block xl:-bottom-16"
//           >
//             <motion.div
//               animate={
//                 reduceMotion
//                   ? undefined
//                   : { rotate: [0, 20, 0] }
//               }
//               transition={{
//                 duration: 8,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//             >
//               <TMXSymbol className="h-12 w-12 xl:h-16 xl:w-16" />
//             </motion.div>
//           </motion.div>
//         </div>

//         {/* Description and CTAs */}
//         <div className="mt-12 flex flex-col gap-8 border-t border-black/10 pt-8 md:mt-20 md:flex-row md:items-end md:justify-between">

//           <motion.div
//             initial={
//               reduceMotion
//                 ? false
//                 : { opacity: 0, y: 20 }
//             }
//             animate={{ opacity: 1, y: 0 }}
//             transition={{
//               duration: 0.8,
//               delay: 0.5,
//               ...entrance,
//             }}
//             className="max-w-[570px]"
//           >
//             <p className="text-[16px] leading-[1.7] text-neutral-600 md:text-[18px]">
//               We design and build websites, web applications,
//               mobile products, and digital experiences for
//               modern businesses.
//             </p>
//           </motion.div>

//           <motion.div
//             initial={
//               reduceMotion
//                 ? false
//                 : { opacity: 0, y: 20 }
//             }
//             animate={{ opacity: 1, y: 0 }}
//             transition={{
//               duration: 0.8,
//               delay: 0.6,
//               ...entrance,
//             }}
//             className="flex flex-wrap items-center gap-3"
//           >
//             <Link
//               href="/work"
//               className="
//                 group inline-flex items-center gap-3
//                 rounded-full bg-[#111111]
//                 px-6 py-3.5
//                 text-[14px] font-medium text-white
//                 transition-all duration-300
//                 hover:-translate-y-0.5 hover:bg-[#F04438]
//               "
//             >
//               View our work
//               <ArrowUpRight
//                 size={16}
//                 className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
//               />
//             </Link>

//             <Link
//               href="/contact"
//               className="
//                 group inline-flex items-center gap-3
//                 rounded-full border border-black/15
//                 bg-white px-6 py-3.5
//                 text-[14px] font-medium text-[#111111]
//                 transition-all duration-300
//                 hover:border-[#F04438]/40 hover:bg-[#F04438]/5
//               "
//             >
//               Start a project

//               <ArrowDownRight
//                 size={16}
//                 className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
//               />
//             </Link>
//           </motion.div>
//         </div>

//         {/* Featured project heading */}
//         <motion.div
//           initial={
//             reduceMotion
//               ? false
//               : { opacity: 0, y: 20 }
//           }
//           animate={{ opacity: 1, y: 0 }}
//           transition={{
//             duration: 0.8,
//             delay: 0.75,
//             ...entrance,
//           }}
//           className="mt-20 mb-5 flex items-end justify-between gap-4 md:mt-28 md:mb-6"
//         >
//           <div className="flex items-center gap-3">
//             <span className="h-2 w-2 bg-[#F04438]" />

//             <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-600">
//               Selected Work
//             </span>
//           </div>

//           <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-neutral-400">
//             01 / Featured Project
//           </span>
//         </motion.div>

//         {/* Featured project preview */}
//         <motion.div
//           initial={
//             reduceMotion
//               ? false
//               : { opacity: 0, y: 60 }
//           }
//           animate={{ opacity: 1, y: 0 }}
//           transition={{
//             duration: 1.1,
//             delay: 0.85,
//             ...entrance,
//           }}
//         >
//           <div className="rounded-[24px] bg-[#EAEAE7] p-2 sm:p-3 md:rounded-[32px] md:p-4">

//             <Link
//               href="/work/slate-signal"
//               aria-label="View Slate & Signal project"
//               className="
//                 group relative block
//                 aspect-[4/5] sm:aspect-[16/10] lg:aspect-[16/9]
//                 overflow-hidden rounded-[18px]
//                 bg-[#F5F3ED]
//                 md:rounded-[24px]
//               "
//             >
//               {/* Slate & Signal image */}
//               <Image
//                 src="/Images/projects/slate-signal.png"
//                 alt="Slate & Signal — Creative Agency Website"
//                 fill
//                 priority
//                 sizes="(max-width: 768px) 100vw, 1440px"
//                 className="
//                   object-cover object-top
//                   transition-transform duration-[900ms]
//                   ease-[cubic-bezier(0.16,1,0.3,1)]
//                   group-hover:scale-[1.035]
//                 "
//               />

//               {/* Subtle image shading on hover */}
//               <div
//                 className="
//                   absolute inset-0
//                   bg-gradient-to-t
//                   from-black/30 via-transparent to-transparent
//                   opacity-30 transition-opacity duration-500
//                   group-hover:opacity-100
//                 "
//               />

//               {/* Project glass overlay */}
//               <div
//                 className="
//                   absolute bottom-3 left-3 right-3
//                   translate-y-0 opacity-100
//                   rounded-[20px]
//                   border border-white/20
//                   bg-[#111111]/65
//                   shadow-[0_12px_50px_rgba(0,0,0,0.2)]
//                   backdrop-blur-xl
//                   transition-all duration-500
//                   ease-[cubic-bezier(0.16,1,0.3,1)]
//                   sm:bottom-5 sm:left-5 sm:right-5
//                   md:translate-y-6 md:opacity-0
//                   md:group-hover:translate-y-0
//                   md:group-hover:opacity-100
//                   md:group-focus-visible:translate-y-0
//                   md:group-focus-visible:opacity-100
//                   md:bottom-7 md:left-7 md:right-7
//                 "
//               >
//                 <div className="p-5 md:p-8">
//                   <div className="flex items-start justify-between gap-4">

//                     <div>
//                       <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.18em] text-white/60 md:text-[11px]">
//                         Featured Project / 01
//                       </p>

//                       <h2 className="text-[28px] font-medium leading-none tracking-[-0.045em] text-white md:text-[40px]">
//                         Slate & Signal
//                       </h2>

//                       <p className="mt-3 text-[13px] text-white/75 md:text-[16px]">
//                         Creative Agency / Web Design & Development
//                       </p>
//                     </div>

//                     <span className="text-[16px] font-medium text-white/85 md:text-[22px]">
//                       2026
//                     </span>
//                   </div>

//                   <div className="mt-6 flex items-center justify-between border-t border-white/20 pt-5 md:mt-8">
//                     <span className="text-[15px] font-medium text-white md:text-[18px]">
//                       View Project
//                     </span>

//                     <span
//                       className="
//                         flex h-10 w-10 items-center justify-center
//                         rounded-full border border-white/20
//                         bg-white/10 text-white
//                         transition-all duration-300
//                         group-hover:-translate-y-1
//                         group-hover:translate-x-1
//                         group-hover:bg-[#F04438]
//                         md:h-12 md:w-12
//                       "
//                     >
//                       <ArrowUpRight size={20} />
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           </div>
//         </motion.div>

//         {/* Bottom editorial details */}
//         <div className="mt-6 flex items-center justify-between gap-4 border-t border-black/10 pt-5">
//           <span className="text-[11px] uppercase tracking-[0.14em] text-neutral-500">
//             TMX Digital Solutions © 2026
//           </span>

//           <a
//             href="#next-section"
//             className="group flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-500 transition-colors hover:text-[#F04438]"
//           >
//             Scroll to explore
//             <ArrowDownRight
//               size={15}
//               className="transition-transform duration-300 group-hover:translate-y-1"
//             />
//           </a>
//         </div>

//       </div>
//     </section>
//   );
// }
