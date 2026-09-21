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
    <section className="px-5 md:px-8 lg:px-12 xl:px-16">
      <div className="mx-auto max-w-[1440px] border-t border-black/10 pt-14 md:pt-20">
        
        {/* Section Intro */}
        <div className="mb-12 md:mb-16">
          <div className="grid gap-6 md:grid-cols-[0.42fr_1fr] md:items-end md:gap-8">
            <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-neutral-500">
              What we do
            </p>

            <h2
              className="
                max-w-[820px]
                text-[32px]
                font-medium
                leading-[1.08]
                tracking-[-0.045em]
                sm:text-[38px]
                md:text-[46px]
                lg:text-[52px]
              "
            >
              Everything needed to take a digital product from idea to execution.
            </h2>
          </div>
        </div>

        {/* Services */}
        <div className="border-b border-black/10">
          {services.map((service) => (
            <article
              key={service.number}
              className="border-t border-black/10 py-10 md:py-14"
            >
              {/* Main title */}
              <div className="grid gap-5 md:grid-cols-[80px_1fr] md:gap-6">
                <span className="pt-1 text-[12px] font-medium text-neutral-400">
                  {service.number}
                </span>

                <h3
                  className="
                    text-[38px]
                    font-medium
                    leading-[0.98]
                    tracking-[-0.05em]
                    sm:text-[48px]
                    md:text-[58px]
                    lg:text-[68px]
                  "
                >
                  {service.title}
                </h3>
              </div>

              {/* Content */}
              <div className="mt-8 grid gap-8 md:ml-[80px] md:mt-9 md:grid-cols-[1.05fr_0.95fr] md:gap-16 lg:gap-20">
                
                {/* Left */}
                <div>
                  <h4
                    className="
                      max-w-[650px]
                      text-[24px]
                      font-medium
                      leading-[1.2]
                      tracking-[-0.035em]
                      md:text-[30px]
                    "
                  >
                    {service.statement}
                  </h4>

                  <p className="mt-4 max-w-[580px] text-[15px] leading-[1.8] text-neutral-600 md:mt-5">
                    {service.description}
                  </p>
                </div>

                {/* Right */}
                <div>
                  <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-400 md:mb-5">
                    Capabilities
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {service.capabilities.map((capability) => (
                      <span
                        key={capability}
                        className="
                          rounded-full
                          border
                          border-black/10
                          bg-white
                          px-4
                          py-2.5
                          text-[13px]
                          text-neutral-600
                          transition-colors
                          duration-200
                          hover:border-black/20
                          hover:text-black
                        "
                      >
                        {capability}
                      </span>
                    ))}
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