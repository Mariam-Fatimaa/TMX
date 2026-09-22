const services = [
  {
    number: "01",
    title: "UI/UX Design",
    statement:
      "Digital experiences that feel clear from the first interaction.",
    description:
      "From early user flows to polished interfaces, we design products around usability, hierarchy, and consistency.",
    capabilities: [
      "UX Strategy",
      "User Flows",
      "Wireframing",
      "UI Design",
      "Prototyping",
      "Design Systems",
      "Responsive Design",
      "Developer Handoff",
    ],
  },
  {
    number: "02",
    title: "Website Development",
    statement:
      "Websites designed to look sharp and perform properly.",
    description:
      "We turn digital concepts into responsive, maintainable websites with modern frontend and backend foundations.",
    capabilities: [
      "Frontend Development",
      "Backend Integration",
      "Next.js",
      "Responsive Development",
      "CMS Integration",
      "API Integration",
      "Performance",
      "Deployment",
    ],
  },
  {
    number: "03",
    title: "Web Applications",
    statement:
      "Complex products made easier to understand and use.",
    description:
      "We design and build web applications around real workflows, from SaaS products and dashboards to internal business tools.",
    capabilities: [
      "SaaS",
      "Dashboards",
      "Authentication",
      "APIs",
      "Databases",
      "Admin Panels",
      "Role-Based Interfaces",
      "Scalable Components",
    ],
  },
  {
    number: "04",
    title: "Mobile Applications",
    statement:
      "Thoughtful experiences designed for smaller screens.",
    description:
      "We create mobile product experiences with clear flows, responsive interaction, and consistency across the entire application.",
    capabilities: [
      "Mobile UX",
      "iOS",
      "Android",
      "App Prototypes",
      "Product Flows",
      "Design Systems",
      "Responsive UI",
      "Developer Handoff",
    ],
  },
  {
    number: "05",
    title: "Brand & Visual Design",
    statement:
      "A clearer visual identity for how your business shows up.",
    description:
      "Focused visual assets that help businesses maintain a professional and consistent presence across digital and physical touchpoints.",
    capabilities: [
      "Logo Design",
      "Visual Direction",
      "Business Cards",
      "Brand Assets",
      "Social Graphics",
      "Presentation Graphics",
    ],
  },
];

export default function DetailedServiceSections() {
  return (
    <section className="px-5 pb-20 pt-16 md:px-8 md:pb-24 md:pt-20 lg:px-12 xl:px-16">
      <div className="mx-auto max-w-[1440px]">

        {/* Section Intro */}
        <div className="border-t border-black/10 pt-8 md:pt-10">
          <div className="grid gap-6 md:grid-cols-[0.32fr_0.68fr] md:items-end">
            <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-neutral-500">
              What we do
            </p>

            <h2
              className="
                max-w-[850px]
                text-[32px]
                font-medium
                leading-[1.08]
                tracking-[-0.045em]
                sm:text-[38px]
                md:text-[46px]
                lg:text-[52px]
              "
            >
              Everything needed to take a digital product from idea to
              execution.
            </h2>
          </div>
        </div>

        {/* Services */}
        <div className="mt-12 border-b border-black/10 md:mt-16">
          {services.map((service) => (
            <article
              key={service.number}
              className="
                group
                border-t
                border-black/10
                py-10
                transition-colors
                duration-300
                hover:bg-black/[0.015]
                md:py-14
              "
            >
              <div className="grid gap-8 lg:grid-cols-[0.38fr_0.62fr] lg:gap-16">

                {/* Left */}
                <div>
                  <p className="mb-4 text-[11px] font-medium text-neutral-400">
                    {service.number}
                  </p>

                  <h3
                    className="
                      max-w-[500px]
                      text-[34px]
                      font-medium
                      leading-[0.98]
                      tracking-[-0.05em]
                      sm:text-[42px]
                      md:text-[50px]
                      lg:text-[58px]
                    "
                  >
                    {service.title}
                  </h3>
                </div>

                {/* Right */}
                <div>
                  <h4
                    className="
                      max-w-[700px]
                      text-[22px]
                      font-medium
                      leading-[1.2]
                      tracking-[-0.035em]
                      md:text-[28px]
                    "
                  >
                    {service.statement}
                  </h4>

                  <p className="mt-4 max-w-[660px] text-[15px] leading-[1.75] text-neutral-600">
                    {service.description}
                  </p>

                  {/* Capabilities */}
                  <div className="mt-8">
                    <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-400">
                      Capabilities
                    </p>

                    <div className="grid border-t border-black/10 sm:grid-cols-2">
                      {service.capabilities.map((capability, index) => (
                        <div
                          key={capability}
                          className={`
                            border-b
                            border-black/10
                            py-3.5
                            text-[13px]
                            text-neutral-600

                            ${
                              index % 2 === 0
                                ? "sm:pr-6"
                                : "sm:border-l sm:border-black/10 sm:pl-6"
                            }
                          `}
                        >
                          {capability}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}