"use client";

import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { projects } from "@/data/projects";
import { siteConfig } from "@/constants/site";

const projectTypes = [
  "Website",
  "Online store",
  "Web app / SaaS",
  "Mobile app",
  "UI/UX design",
  "Not sure yet",
];

const budgets = ["Under $1k", "$1k – $3k", "$3k – $7k", "$7k+", "Not sure"];

const timelines = ["As soon as possible", "Within a month", "1 – 3 months", "Flexible"];

type Errors = Partial<Record<"types" | "name" | "email" | "message", string>>;

function Chip({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2.5 text-[13px] font-medium transition-all duration-200 ${
        selected
          ? "border-black bg-black text-white"
          : "border-black/10 bg-white text-neutral-600 hover:border-black/30 hover:text-black"
      }`}
    >
      {selected && <Check size={14} strokeWidth={2.5} />}
      {label}
    </button>
  );
}

function Field({
  label,
  hint,
  error,
  children,
}: {
  label: string;
  hint?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-3 flex items-baseline justify-between gap-4">
        <p className="text-[14px] font-medium">{label}</p>
        {hint && <p className="text-[12px] text-neutral-400">{hint}</p>}
      </div>
      {children}
      {error && <p className="mt-2 text-[13px] text-red-600">{error}</p>}
    </div>
  );
}

const inputClass =
  "w-full rounded-[14px] border border-black/10 bg-white px-4 py-3.5 text-[15px] outline-none transition-colors placeholder:text-neutral-400 focus:border-black";

export default function ProjectForm() {
  const [types, setTypes] = useState<string[]>([]);
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [reference, setReference] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const toggleType = (type: string) =>
    setTypes((current) =>
      current.includes(type) ? current.filter((t) => t !== type) : [...current, type]
    );

  const validate = () => {
    const next: Errors = {};
    if (types.length === 0) next.types = "Pick at least one option.";
    if (!name.trim()) next.name = "Please tell us your name.";
    if (!/^\S+@\S+\.\S+$/.test(email.trim())) next.email = "Please enter a valid email address.";
    if (message.trim().length < 10) next.message = "A sentence or two about the project helps.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!validate()) return;

    const lines = [
      `Name: ${name}`,
      `Email: ${email}`,
      company && `Company / website: ${company}`,
      `Looking for: ${types.join(", ")}`,
      budget && `Budget: ${budget}`,
      timeline && `Timeline: ${timeline}`,
      reference && `Something like: ${reference}`,
      `\n${message}`,
    ].filter(Boolean);

    const subject = `New project: ${types.join(", ")}${company ? ` — ${company}` : ""}`;
    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(lines.join("\n"))}`;
    setSent(true);
  };

  if (sent) {
    return (
      <div className="rounded-[28px] border border-black/10 bg-white p-8 md:p-12">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
          <Check size={22} />
        </div>
        <h2 className="mt-8 text-[32px] font-medium leading-[1.05] tracking-[-0.04em] md:text-[44px]">
          Thanks, {name.split(" ")[0]}.
          <br />
          Your brief is ready to send.
        </h2>
        <p className="mt-5 max-w-[520px] text-[16px] leading-[1.7] text-neutral-600">
          Your email app should have opened with everything filled in. Hit send
          and we&apos;ll reply within one working day. If nothing opened, email us
          directly at{" "}
          <a href={`mailto:${siteConfig.email}`} className="font-medium text-black underline underline-offset-4">
            {siteConfig.email}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-8 rounded-full border border-black/10 px-6 py-3 text-[14px] font-medium transition-colors hover:bg-neutral-100"
        >
          Edit my brief
        </button>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="space-y-10 rounded-[28px] border border-black/10 bg-white p-6 md:p-10"
    >
      <Field label="What do you need?" hint="Choose all that apply" error={errors.types}>
        <div className="flex flex-wrap gap-2">
          {projectTypes.map((type) => (
            <Chip key={type} label={type} selected={types.includes(type)} onClick={() => toggleType(type)} />
          ))}
        </div>
      </Field>

      <div className="grid gap-10 md:grid-cols-2">
        <Field label="Budget" hint="Optional">
          <div className="flex flex-wrap gap-2">
            {budgets.map((b) => (
              <Chip key={b} label={b} selected={budget === b} onClick={() => setBudget(budget === b ? "" : b)} />
            ))}
          </div>
        </Field>

        <Field label="Timeline" hint="Optional">
          <div className="flex flex-wrap gap-2">
            {timelines.map((t) => (
              <Chip key={t} label={t} selected={timeline === t} onClick={() => setTimeline(timeline === t ? "" : t)} />
            ))}
          </div>
        </Field>
      </div>

      <Field label="Something like one of our projects?" hint="Optional">
        <select
          value={reference}
          onChange={(e) => setReference(e.target.value)}
          className={`${inputClass} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%228%22 viewBox=%220 0 12 8%22><path d=%22M1 1l5 5 5-5%22 fill=%22none%22 stroke=%22%23111%22 stroke-width=%221.5%22/></svg>')] bg-[length:12px] bg-[right_18px_center] bg-no-repeat pr-12`}
        >
          <option value="">No preference</option>
          {projects.map((p) => (
            <option key={p.slug} value={`${p.title} (${p.type})`}>
              {p.title} — {p.type}
            </option>
          ))}
        </select>
      </Field>

      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Your name" error={errors.name}>
          <input
            type="text"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jane Smith"
            aria-invalid={!!errors.name}
            className={inputClass}
          />
        </Field>

        <Field label="Email" error={errors.email}>
          <input
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="jane@company.com"
            aria-invalid={!!errors.email}
            className={inputClass}
          />
        </Field>
      </div>

      <Field label="Company or current website" hint="Optional">
        <input
          type="text"
          autoComplete="organization"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="company.com"
          className={inputClass}
        />
      </Field>

      <Field label="Tell us about the project" error={errors.message}>
        <textarea
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="What does your business do, what should the site or app help with, and is there anything you already have (logo, content, a current site)?"
          aria-invalid={!!errors.message}
          className={`${inputClass} resize-y leading-[1.6]`}
        />
      </Field>

      <div className="flex flex-col gap-4 border-t border-black/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[13px] text-neutral-500">
          We reply within one working day. No sales calls unless you ask.
        </p>
        <button
          type="submit"
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-black px-7 py-4 text-[14px] font-medium text-white transition-transform duration-300 hover:scale-[1.03]"
        >
          Send project brief
          <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </button>
      </div>
    </form>
  );
}
