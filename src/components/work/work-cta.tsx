import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function WorkCTA() {
  return (
    <section className="mt-28 border-t border-black/10 pt-10">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">

        <div>
          <p className="mb-4 text-[12px] font-medium uppercase tracking-[0.18em] text-neutral-500">
            Let’s work together
          </p>

          <h2 className="max-w-[850px] text-4xl font-medium tracking-[-0.045em] md:text-6xl">
            Have a project
            <br />
            worth building?
          </h2>
        </div>

        <div className="max-w-[390px]">
          <p className="text-[15px] leading-[1.7] text-neutral-500">
            Tell us what you’re building and where you need help. We’ll help
            shape the right design and development direction.
          </p>

          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3.5 text-[14px] font-medium text-white transition-transform duration-300 hover:scale-[1.03]"
          >
            Start a project
            <ArrowUpRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
}