import Link from "next/link";

const projects = [
  {
    title: "FitLayer",
    category: "AI / Fashion Tech",
    year: "2026",
    image: "/images/projects/fitlayer-cover.jpg",
    href: "/work/fitlayer",
  },
  {
    title: "BYLT",
    category: "Construction Technology",
    year: "2026",
    image: "/images/projects/bylt-cover.jpg",
    href: "/work/bylt",
  },
  {
    title: "Commerce Platform",
    category: "E-Commerce",
    year: "2026",
    image: "/images/projects/ecommerce-cover.jpg",
    href: "/work/ecommerce-platform",
  },
];

export default function SelectedWork() {
  return (
    <section className="px-5 py-28 md:px-8 lg:px-12 xl:px-16">
      <div className="mx-auto max-w-[1440px]">

        {/* Header */}
        <div className="mb-12 flex flex-col gap-6 border-t border-black/10 pt-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.18em] text-neutral-500">
              Featured Work
            </p>

            <h2 className="max-w-[760px] text-4xl font-medium tracking-[-0.045em] md:text-6xl">
              Work that speaks
              <br />
              for itself.
            </h2>
          </div>

          <Link
            href="/work"
            className="text-[14px] font-medium text-neutral-700 transition-colors hover:text-black"
          >
            View all work ↗
          </Link>
        </div>

        {/* Large featured project */}
        <Link href={projects[0].href} className="group block">
          <div className="relative aspect-[16/9] overflow-hidden rounded-[24px] bg-neutral-200">

            <img
              src={projects[0].image}
              alt={projects[0].title}
              className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.025]"
            />

            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/45 to-transparent p-6 text-white md:p-8">
              <div>
                <p className="text-[13px] text-white/75">
                  {projects[0].category}
                </p>

                <h3 className="mt-2 text-3xl font-medium tracking-[-0.04em] md:text-5xl">
                  {projects[0].title}
                </h3>
              </div>

              <p className="text-[13px] text-white/75">
                {projects[0].year}
              </p>
            </div>
          </div>
        </Link>

        {/* Smaller project grid */}
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {projects.slice(1).map((project) => (
            <Link key={project.title} href={project.href} className="group block">

              <div className="aspect-[4/3] overflow-hidden rounded-[20px] bg-neutral-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                />
              </div>

              <div className="mt-4 flex items-start justify-between gap-6">
                <div>
                  <h3 className="text-xl font-medium tracking-[-0.03em]">
                    {project.title}
                  </h3>

                  <p className="mt-1 text-sm text-neutral-500">
                    {project.category}
                  </p>
                </div>

                <p className="text-sm text-neutral-400">
                  {project.year}
                </p>
              </div>

            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}