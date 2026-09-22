const principles = [
  {
    number: "01",
    title: "Clarity",
    description:
      "Good digital products should feel easy to understand, navigate, and use.",
  },
  {
    number: "02",
    title: "Craft",
    description:
      "Details matter — from spacing and hierarchy to interaction and implementation.",
  },
  {
    number: "03",
    title: "Collaboration",
    description:
      "The best work happens when ideas, feedback, design, and development stay connected.",
  },
  {
    number: "04",
    title: "Execution",
    description:
      "A strong idea only matters when it is carried through properly into the final product.",
  },
];

export default function Principles() {
  return (
    <section className="px-5 py-24 md:px-8 md:py-8 lg:px-12 xl:px-16">
      <div className="mx-auto max-w-[1440px]">

        <div>
          <div className="mb-12 grid gap-6 md:grid-cols-[0.32fr_0.68fr]">
            <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-neutral-500">
              What matters to us
            </p>

            <h2 className="max-w-[820px] text-[32px] font-medium leading-[1.08] tracking-[-0.045em] sm:text-[38px] md:text-[46px] lg:text-[52px]">
              A few principles that shape how we work.
            </h2>
          </div>

          <div className="grid border-b border-black/10 md:grid-cols-2">
            {principles.map((item, index) => (
              <div
                key={item.number}
                className={`
                  border-t border-black/10 py-8 md:p-8
                  ${index % 2 !== 0 ? "md:border-l md:border-black/10" : ""}
                `}
              >
                <p className="text-[11px] text-neutral-400">
                  {item.number}
                </p>

                <h3 className="mt-4 text-2xl font-medium tracking-[-0.035em] md:text-3xl">
                  {item.title}
                </h3>

                <p className="mt-4 max-w-[520px] text-[15px] leading-[1.7] text-neutral-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}