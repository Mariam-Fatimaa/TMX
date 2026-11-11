import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Download, Mail } from "lucide-react";
import { featuredProjects, projects } from "@/data/projects";
import { siteConfig } from "@/constants/site";

const steps = [
  {
    title: "We reply within a day",
    text: "With a few questions about your goals, content and must-haves.",
  },
  {
    title: "A short call",
    text: "30 minutes to agree scope. We show you work close to what you need.",
  },
  {
    title: "Fixed quote and timeline",
    text: "A clear price, milestones and a start date. No hourly surprises.",
  },
];

export default function ContactSidebar() {
  const recent = featuredProjects.slice(0, 3);

  return (
    <aside className="space-y-6 lg:sticky lg:top-28">
      {/* What happens next */}
      <div className="rounded-[28px] bg-black p-8 text-white">
        <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-white/50">
          What happens next
        </p>
        <ol className="mt-6 space-y-6">
          {steps.map((step, i) => (
            <li key={step.title} className="flex gap-4">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/20 text-[12px] font-medium">
                {i + 1}
              </span>
              <div>
                <p className="text-[15px] font-medium">{step.title}</p>
                <p className="mt-1 text-[14px] leading-[1.6] text-white/60">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <a
          href={`mailto:${siteConfig.email}`}
          className="mt-8 flex items-center gap-3 border-t border-white/15 pt-6 text-[14px] text-white/80 transition-colors hover:text-white"
        >
          <Mail size={16} />
          {siteConfig.email}
        </a>
      </div>

      {/* Portfolio PDF */}
      <a
        href="/demos/TMX-Portfolio.pdf"
        download
        className="group flex items-center justify-between gap-4 rounded-[22px] border border-black/10 bg-white p-6 transition-colors hover:border-black/30"
      >
        <div>
          <p className="text-[15px] font-medium">Not ready yet?</p>
          <p className="mt-1 text-[14px] text-neutral-500">
            Download our portfolio, {projects.length} projects on 2 pages.
          </p>
        </div>
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-100 transition-colors group-hover:bg-black group-hover:text-white">
          <Download size={16} />
        </span>
      </a>

      {/* Recent work */}
      <div className="rounded-[22px] border border-black/10 bg-white p-6">
        <div className="flex items-baseline justify-between">
          <p className="text-[15px] font-medium">Recent work</p>
          <Link href="/work" className="text-[13px] text-neutral-500 hover:text-black">
            View all ↗
          </Link>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2">
          {recent.map((p) => (
            <Link
              key={p.slug}
              href={`/work/${p.slug}`}
              className="group relative block aspect-[4/5] overflow-hidden rounded-[12px] bg-[#F1F0ED]"
              aria-label={p.title}
            >
              <Image
                src={p.cover}
                alt=""
                fill
                sizes="120px"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <span className="absolute bottom-1.5 right-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-white/90 opacity-0 transition-opacity group-hover:opacity-100">
                <ArrowUpRight size={12} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
