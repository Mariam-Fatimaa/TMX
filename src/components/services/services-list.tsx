const services = [
  {
    number: "01",
    title: "UI/UX Design",
    description:
      "Product interfaces designed around clarity, usability, and scalable visual systems.",
  },
  {
    number: "02",
    title: "Website Development",
    description:
      "Responsive, high-performing websites built with modern frontend and backend foundations.",
  },
  {
    number: "03",
    title: "Web Applications",
    description:
      "Custom digital products designed around workflows, dashboards, SaaS, and business requirements.",
  },
  {
    number: "04",
    title: "Mobile Applications",
    description:
      "Mobile experiences focused on usability, consistency, and thoughtful interaction.",
  },
  {
    number: "05",
    title: "Brand & Visual Design",
    description:
      "Visual assets and brand systems that create a more consistent digital presence.",
  },
];

export default function ServicesList() {
  return (
    <section className="px-5 md:px-8 lg:px-12 xl:px-16">
      <div className="mx-auto max-w-[1440px] border-t border-black/10 py-14 md:py-20">
        <div className="mb-10 md:mb-12">
          <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-neutral-500">
            What we do
          </p>
        </div>

        <div className="border-b border-black/10">
          {services.map((service) => (
            <div
              key={service.number}
              className="
                grid
                gap-5
                border-t
                border-black/10
                py-7
                md:grid-cols-[80px_1fr_1fr]
                md:items-start
                md:gap-6
                md:py-10
              "
            >
              <span className="text-[12px] font-medium text-neutral-400">
                {service.number}
              </span>

              <h2 className="text-2xl font-medium tracking-[-0.035em] md:text-4xl">
                {service.title}
              </h2>

              <p className="max-w-[520px] text-[15px] leading-[1.7] text-neutral-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}