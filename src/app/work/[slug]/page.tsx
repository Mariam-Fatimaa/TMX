import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="px-5 pb-28 pt-40 md:px-8 lg:px-12 xl:px-16">
      <div className="mx-auto max-w-[1440px]">

        {/* Back */}
        <Link
          href="/work"
          className="text-[13px] font-medium text-neutral-500 transition-colors hover:text-black"
        >
          ← Back to work
        </Link>

        {/* Hero */}
        <section className="pb-14 pt-12">
          <p className="mb-5 text-[12px] font-medium uppercase tracking-[0.18em] text-neutral-500">
            {project.category}
          </p>

          <h1 className="max-w-[1100px] text-[58px] font-medium leading-[0.95] tracking-[-0.055em] sm:text-[76px] md:text-[96px] lg:text-[116px]">
            {project.title}
          </h1>

          <div className="mt-10 grid gap-8 border-t border-black/10 pt-8 md:grid-cols-[1.4fr_0.6fr]">
            <p className="max-w-[680px] text-[18px] leading-[1.7] text-neutral-600">
              {project.description}
            </p>

            <div className="grid grid-cols-2 gap-6 text-[13px]">
              <div>
                <p className="text-neutral-400">
                  Year
                </p>

                <p className="mt-2 font-medium">
                  {project.year}
                </p>
              </div>

              <div>
                <p className="text-neutral-400">
                  Services
                </p>

                <div className="mt-2 space-y-1">
                  {project.services.map((service) => (
                    <p
                      key={service}
                      className="font-medium"
                    >
                      {service}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hero image */}
        <section>
          <div className="aspect-[16/9] overflow-hidden rounded-[24px] bg-neutral-200">
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover"
            />
          </div>
        </section>

        {/* Overview */}
        <section className="grid gap-10 border-b border-black/10 border-t border-black/10 py-20 md:mt-24 md:grid-cols-[0.45fr_1fr]">
          <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-neutral-500">
            Overview
          </p>

          <div className="max-w-[800px]">
            <h2 className="text-3xl font-medium leading-[1.15] tracking-[-0.04em] md:text-5xl">
              Designing a clearer and more considered digital experience.
            </h2>

            <p className="mt-7 max-w-[680px] text-[16px] leading-[1.8] text-neutral-600">
              The project focused on bringing structure, usability, and a
              cohesive visual system together into one experience. The goal was
              to make the product easier to understand while creating a strong
              foundation for future growth.
            </p>
          </div>
        </section>

        {/* Challenge */}
        <section className="grid gap-10 border-b border-black/10 py-20 md:grid-cols-[0.45fr_1fr]">
          <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-neutral-500">
            The challenge
          </p>

          <div className="max-w-[800px]">
            <h2 className="text-3xl font-medium tracking-[-0.04em] md:text-5xl">
              Turning complexity into clarity.
            </h2>

            <p className="mt-7 max-w-[680px] text-[16px] leading-[1.8] text-neutral-600">
              The experience needed to communicate complex functionality
              without overwhelming users. Clear hierarchy, predictable
              interactions, and a consistent design system were central to the
              solution.
            </p>
          </div>
        </section>

        {/* Visual placeholder */}
        <section className="py-20">
          <div className="aspect-[16/10] rounded-[24px] bg-neutral-200" />
        </section>

        {/* Approach */}
        <section className="grid gap-10 border-b border-black/10 border-t border-black/10 py-20 md:grid-cols-[0.45fr_1fr]">
          <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-neutral-500">
            Approach
          </p>

          <div className="max-w-[800px]">
            <h2 className="text-3xl font-medium tracking-[-0.04em] md:text-5xl">
              A system designed to scale.
            </h2>

            <p className="mt-7 max-w-[680px] text-[16px] leading-[1.8] text-neutral-600">
              Reusable components, consistent spacing, typography, and
              interaction patterns were defined early so the interface could
              grow without losing visual consistency.
            </p>
          </div>
        </section>

        {/* Next project */}
        <section className="py-24">
          <p className="mb-5 text-[12px] uppercase tracking-[0.18em] text-neutral-500">
            Next project
          </p>

          <Link
            href="/work"
            className="group inline-flex items-center gap-4 text-4xl font-medium tracking-[-0.045em] md:text-6xl"
          >
            Explore more work

            <span className="transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </Link>
        </section>

      </div>
    </main>
  );
}