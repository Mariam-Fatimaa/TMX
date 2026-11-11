const faqs = [
  {
    q: "How much does a project cost?",
    a: "It depends on scope. A small business website usually starts around $1,000, an online store or web app is more. After a short call we give you a fixed price, so you know the total before we start.",
  },
  {
    q: "How long does it take?",
    a: "A small business website is typically live in 2 to 3 weeks. Larger sites, stores and apps take 1 to 3 months. We share progress every week, so you are never waiting in the dark.",
  },
  {
    q: "Can I update the content myself?",
    a: "Yes. If you need to edit text, images, menus or products, we set up a simple editor and show you how to use it.",
  },
  {
    q: "Do you handle hosting and domains?",
    a: "We can set up fast hosting, your domain and email, or work with what you already have. Either way, everything stays in your name.",
  },
  {
    q: "What happens after launch?",
    a: "Every project includes a period of free fixes after launch. After that you can keep us on a small monthly plan for updates and improvements, or take it from there yourself.",
  },
];

export default function ContactFAQ() {
  return (
    <section className="grid gap-10 border-t border-black/10 py-20 md:grid-cols-[0.45fr_1fr]">
      <div>
        <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-neutral-500">
          Questions
        </p>
        <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] md:text-5xl">
          Good to know.
        </h2>
      </div>

      <div className="divide-y divide-black/10 border-y border-black/10">
        {faqs.map((item) => (
          <details key={item.q} className="group py-6">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-[17px] font-medium md:text-[19px] [&::-webkit-details-marker]:hidden">
              {item.q}
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-black/10 text-[18px] leading-none transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-4 max-w-[640px] text-[15px] leading-[1.7] text-neutral-600">
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
