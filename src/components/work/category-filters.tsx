import { categories, projects } from "@/data/projects";

const filters = ["All", ...categories];

const countFor = (category: string) =>
  category === "All"
    ? projects.length
    : projects.filter((project) => project.category === category).length;

interface CategoryFiltersProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

export default function CategoryFilters({
  activeCategory,
  setActiveCategory,
}: CategoryFiltersProps) {
  return (
    <section className="py-10">
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects">
        {filters.map((category) => {
          const isActive = activeCategory === category;

          return (
            <button
              key={category}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActiveCategory(category)}
              className={`
                rounded-full
                border
                px-4
                py-2.5
                text-[13px]
                font-medium
                transition-all
                duration-300
                ${
                  isActive
                    ? "border-black bg-black text-white"
                    : "border-black/10 bg-white text-neutral-600 hover:border-black/25 hover:text-black"
                }
              `}
            >
              {category}
              <span className={`ml-1.5 text-[11px] ${isActive ? "text-white/60" : "text-neutral-400"}`}>
                {countFor(category)}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
