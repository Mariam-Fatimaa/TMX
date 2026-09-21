import Link from "next/link";
import { projects } from "@/data/projects";

interface ProjectGridProps {                    
  activeCategory: string;
}

export default function ProjectGrid({
  activeCategory,
}: ProjectGridProps) {
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  return (
    <section>
      <div className="grid gap-x-8 gap-y-14 md:grid-cols-2">
        {filteredProjects.map((project, index) => {
          const isLarge = index % 3 === 0;

          return (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className={`group block ${
                isLarge ? "md:col-span-2" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`
                  overflow-hidden
                  rounded-[22px]
                  bg-neutral-200
                  ${
                    isLarge
                      ? "aspect-[16/8]"
                      : "aspect-[4/3]"
                  }
                `}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-[900ms]
                    ease-[cubic-bezier(0.16,1,0.3,1)]
                    group-hover:scale-[1.025]
                  "
                />
              </div>

              {/* Project Info */}
              <div className="mt-4 flex items-start justify-between gap-6">
                <div>
                  <h2 className="text-[22px] font-medium tracking-[-0.035em] md:text-[26px]">
                    {project.title}
                  </h2>

                  <p className="mt-1 text-[14px] text-neutral-500">
                    {project.category}
                  </p>
                </div>

                <p className="text-[13px] text-neutral-400">
                  {project.year}
                </p>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="py-24 text-center">
          <p className="text-[16px] text-neutral-500">
            No projects in this category yet.
          </p>
        </div>
      )}
    </section>
  );
}