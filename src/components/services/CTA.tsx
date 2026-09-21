import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ServicesCTA() {
  return (
    <section className="px-5 pb-28 pt-24 md:px-8 lg:px-12 xl:px-16">
      <div className="mx-auto max-w-[1440px] border-t border-black/10 pt-10">

        <p className="mb-5 text-[12px] font-medium uppercase tracking-[0.18em] text-neutral-500">
          Start a project
        </p>

        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <h2
            className="
              max-w-[950px]
              text-[46px]
              font-medium
              leading-[0.98]
              tracking-[-0.05em]
              sm:text-[60px]
              md:text-[78px]
              lg:text-[92px]
            "
          >
            Need the right team
            <br />
            to bring it to life?
          </h2>

          <div className="max-w-[420px]">
            <p className="text-[16px] leading-[1.7] text-neutral-600">
              Tell us what you’re building, what stage you’re at, and where you
              need support. We’ll help shape the right next step.
            </p>

            <Link
              href="/contact"
              className="
                mt-7
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-black
                px-6
                py-3.5
                text-[14px]
                font-medium
                text-white
                transition-transform
                duration-300
                hover:scale-[1.03]
              "
            >
              Start a project
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}