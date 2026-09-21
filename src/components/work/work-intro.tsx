export default function WorkIntro() {
  return (
    <section className="border-b border-black/10 pb-12">
      <p className="mb-5 text-[12px] font-medium uppercase tracking-[0.18em] text-neutral-500">
        Our work
      </p>

      <h1
        className="
          max-w-[1100px]
          text-[54px]
          font-medium
          leading-[0.95]
          tracking-[-0.055em]
          sm:text-[72px]
          md:text-[92px]
          lg:text-[110px]
        "
      >
        Selected digital
        <br />
        work and products.
      </h1>

      <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <p className="max-w-[560px] text-[17px] leading-[1.7] text-neutral-600">
          A collection of websites, applications, product interfaces, and
          digital experiences designed and developed by TMX.
        </p>

        <p className="text-[12px] uppercase tracking-[0.16em] text-neutral-400">
          TMX Digital Solutions / Portfolio
        </p>
      </div>
    </section>
  );
}