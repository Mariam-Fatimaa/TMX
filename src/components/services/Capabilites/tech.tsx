const techGroups = [
  {
    title: "Design",
    items: [
      "Figma",
      "Wireframing",
      "Prototyping",
      "Design Systems",
      "Responsive UI",
      "Developer Handoff",
    ],
  },
  {
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Responsive Development",
      "Motion",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "APIs",
      "Databases",
      "Authentication",
      "CMS Integration",
      "Server Logic",
    ],
  },
  {
    title: "Product",
    items: [
      "SaaS",
      "Dashboards",
      "E-commerce",
      "Mobile Products",
      "User Flows",
      "Product Strategy",
    ],
  },
];

export default function ServicesTech() {
  return (
    <section className="px-5 py-24 md:px-8 lg:px-12 xl:px-16">
      <div className="mx-auto max-w-[1440px]">

        {/* Header */}
        <div className="border-t border-black/10 pt-8">
          <p className="mb-4 text-[12px] font-medium uppercase tracking-[0.18em] text-neutral-500">
            Capabilities
          </p>

          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-[850px] text-4xl font-medium tracking-[-0.045em] md:text-6xl">
              The tools behind
              <br />
              the work.
            </h2>

            <p className="max-w-[390px] text-[15px] leading-[1.7] text-neutral-500">
              A practical stack for designing and building scalable digital
              products from concept to launch.
            </p>
          </div>
        </div>

        {/* Tech grid */}
        <div className="mt-14 grid border-b border-black/10 md:grid-cols-2 lg:grid-cols-4">
          {techGroups.map((group, index) => (
            <div
              key={group.title}
              className="
                border-t
                border-black/10
                py-8
                md:px-6
                lg:border-l
                lg:first:border-l-0
              "
            >
              <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-400">
                0{index + 1}
              </p>

              <h3 className="mb-7 text-2xl font-medium tracking-[-0.035em]">
                {group.title}
              </h3>

              <div className="space-y-3">
                {group.items.map((item) => (
                  <p
                    key={item}
                    className="text-[14px] leading-[1.6] text-neutral-600"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}