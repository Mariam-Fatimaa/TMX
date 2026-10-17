import Link from "next/link";

const projects = [
  {
    title: "Plinth",
    category: "Real Estate / Web Development",
    year: "2026",
    image: "/Images/projects/plinth.png",
    href: "/demos/plinth.html",
  },
  {
    title: "AUREL",
    category: "Jewellery / E-Commerce Development",
    year: "2026",
    image: "/Images/projects/aurel-jewellery.png",
    href: "/demos/aurel-jewellery.html",
  },
  {
    title: "Atelier Noor",
    category: "Web Development",
    year: "2026",
    image: "/Images/projects/atelier-noor.png",
    href: "/demos/atelier-noor.html",
  },
];

export default function SelectedWork() {
  return (
    <section className="px-5 py-20 md:px-8 lg:px-12 xl:px-16">
      <div className="mx-auto max-w-[1440px]">

        {/* Section Header */}
        <div className="mb-10 flex flex-col gap-6 border-t border-black/10 pt-8 md:flex-row md:items-end md:justify-between">
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


        {/* Three Equal Project Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              className="group block"
            >
              <div
                className="
          relative aspect-[4/5]
          overflow-hidden rounded-[20px]
          bg-[#F1F0ED]
          p-[6px] md:p-[8px]
        "
              >
                {/* Image Container */}
                <div className="relative h-full w-full overflow-hidden rounded-[14px]">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="
              h-full w-full
              object-cover object-top
              transition-transform duration-[900ms]
              ease-[cubic-bezier(0.16,1,0.3,1)]
              group-hover:scale-[1.02]
            "
                  />

                  {/* Subtle Glass Overlay on Hover */}
                  <div
                    className="
              absolute inset-x-3 bottom-3
              rounded-[12px]
              border border-white/20
              bg-black/30
              p-4 text-white
              backdrop-blur-lg
              translate-y-3 opacity-0
              transition-all duration-500
              group-hover:translate-y-0
              group-hover:opacity-100
              group-focus-visible:translate-y-0
              group-focus-visible:opacity-100
              max-md:translate-y-0
              max-md:opacity-100
            "
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-medium tracking-[-0.03em]">
                          {project.title}
                        </h3>

                        <p className="mt-1 text-[12px] text-white/80">
                          {project.category}
                        </p>
                      </div>

                      <span className="text-[12px] text-white/80">
                        {project.year}
                      </span>
                    </div>

                    <div className="mt-3 flex items-center justify-between border-t border-white/20 pt-3 text-[12px]">
                      <span>View Project</span>
                      <span className="text-lg">↗</span>
                    </div>
                  </div>

                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
