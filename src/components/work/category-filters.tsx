const categories = [
  "All",
  "Websites",
  "Web Apps",
  "Mobile Apps",
  "UI/UX",
  "Branding",
];

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
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => {
          const isActive = activeCategory === category;

          return (
            <button
              key={category}
              type="button"
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
            </button>
          );
        })}
      </div>
    </section>
  );
}