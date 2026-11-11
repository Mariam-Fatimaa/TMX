import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Pre-render every project page at build time.
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: `${project.title} — ${project.type}`,
    description: project.summary,
    openGraph: { images: [project.wide] },
  };
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const index = projects.findIndex((item) => item.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <main className="px-5 pb-28 pt-40 md:px-8 lg:px-12 xl:px-16">
      <div className="mx-auto max-w-[1440px]">

        {/* Back */}
        <Link
          href="/work"
          className="text-[13px] font-medium text-neutral-500 transition-colors hover:text-black"
        >
          ← Back to work
        </Link>

        {/* Hero */}
        <section className="pb-14 pt-12">
          <p className="mb-5 text-[12px] font-medium uppercase tracking-[0.18em] text-neutral-500">
            {project.category} / {project.type}
          </p>

          <h1 className="max-w-[1100px] text-[58px] font-medium leading-[0.95] tracking-[-0.055em] sm:text-[76px] md:text-[96px] lg:text-[116px]">
            {project.title}
          </h1>

          <div className="mt-10 grid gap-10 border-t border-black/10 pt-8 md:grid-cols-[1.4fr_0.6fr]">
            <div>
              <p className="max-w-[680px] text-[18px] leading-[1.7] text-neutral-600">
                {project.summary}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener"
                  className="rounded-full bg-black px-6 py-3.5 text-[14px] font-medium text-white transition-transform duration-300 hover:scale-[1.03]"
                >
                  View live demo ↗
                </a>

                <a
                  href={project.pdf}
                  download
                  className="rounded-full border border-black/10 bg-white px-6 py-3.5 text-[14px] font-medium transition-colors hover:bg-neutral-100"
                >
                  Download PDF
                </a>
              </div>
            </div>

            <dl className="grid grid-cols-2 content-start gap-6 text-[13px]">
              <div>
                <dt className="text-neutral-400">Year</dt>
                <dd className="mt-2 font-medium">{project.year}</dd>
              </div>

              <div>
                <dt className="text-neutral-400">Type</dt>
                <dd className="mt-2 font-medium">{project.type}</dd>
              </div>

              <div className="col-span-2">
                <dt className="text-neutral-400">Services</dt>
                <dd className="mt-2 space-y-1 font-medium">
                  {project.services.map((service) => (
                    <p key={service}>{service}</p>
                  ))}
                </dd>
              </div>
            </dl>
          </div>
        </section>

        {/* Hero image */}
        <section>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener"
            className="group relative block aspect-[16/10] overflow-hidden rounded-[24px] border border-black/5 bg-neutral-100"
          >
            <Image
              src={project.wide}
              alt={`${project.title} homepage`}
              fill
              preload
              sizes="(min-width: 1440px) 1360px, 100vw"
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.015]"
            />
          </a>
        </section>

        {/* Live preview */}
        <section className="grid gap-10 border-b border-black/10 py-20 md:grid-cols-[0.45fr_1fr]">
          <div>
            <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-neutral-500">
              Live preview
            </p>
            <p className="mt-4 max-w-[320px] text-[15px] leading-[1.7] text-neutral-600">
              This is the working site, not a picture. Scroll and click inside
              the frame, or open it in a new tab.
            </p>
          </div>

          <div className="overflow-hidden rounded-[18px] border border-black/10 bg-white shadow-[0_20px_60px_-30px_rgba(0,0,0,0.35)]">
            <div className="flex items-center gap-1.5 border-b border-black/10 bg-neutral-50 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-black/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-black/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-black/15" />
              <span className="ml-3 truncate text-[12px] text-neutral-500">
                {project.title}
              </span>
            </div>
            <iframe
              src={project.demo}
              title={`${project.title} live demo`}
              loading="lazy"
              className="block h-[640px] w-full md:h-[760px]"
            />
          </div>
        </section>

        {/* Next project */}
        <section className="py-24">
          <p className="mb-5 text-[12px] uppercase tracking-[0.18em] text-neutral-500">
            Next project
          </p>

          <Link
            href={`/work/${next.slug}`}
            className="group inline-flex items-center gap-4 text-4xl font-medium tracking-[-0.045em] md:text-6xl"
          >
            {next.title}

            <span className="transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </Link>
        </section>

      </div>
    </main>
  );
}
