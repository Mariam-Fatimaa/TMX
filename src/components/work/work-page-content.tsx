"use client";

import { useState } from "react";
import WorkIntro from "./work-intro";
import CategoryFilters from "./category-filters";
import ProjectGrid from "./project-grid";
import WorkCTA from "./work-cta";

export default function WorkPageContent() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <main className="px-5 pb-28 pt-40 md:px-8 lg:px-12 xl:px-16">
      <div className="mx-auto max-w-[1440px]">
        <WorkIntro />

        <CategoryFilters
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        <ProjectGrid activeCategory={activeCategory} />

        <WorkCTA />
      </div>
    </main>
  );
}