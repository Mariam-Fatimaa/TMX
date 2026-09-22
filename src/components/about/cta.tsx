import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function AboutCTA() {
  return (
    <section className="px-5 pb-28 pt-20 md:px-8 md:pb-36 md:pt-28 lg:px-12 xl:px-16">
      <div className="mx-auto max-w-[1440px]">
        <div>
          <p className="mb-8 text-[12px] font-medium uppercase tracking-[0.18em] text-neutral-500">
            Start a project
          </p>

          <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-[900px] text-[44px] font-medium leading-[0.98] tracking-[-0.05em] sm:text-[56px] md:text-[72px] lg:text-[88px]">
              Have an idea?
              <br />
              Let&apos;s make it real.
            </h2>

            <Link
              href="/contact"
              className="group flex w-fit items-center gap-2 rounded-full bg-black px-6 py-3.5 text-[14px] font-medium text-white transition-transform duration-300 hover:scale-[1.03]"
            >
              Start a project
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}