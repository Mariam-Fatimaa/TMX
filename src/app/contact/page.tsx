import type { Metadata } from "next";
import ContactHero from "@/components/contact/hero";
import ProjectForm from "@/components/contact/project-form";
import ContactSidebar from "@/components/contact/sidebar";
import ContactFAQ from "@/components/contact/faq";

export const metadata: Metadata = {
  title: "Start a project",
  description:
    "Tell us about your website, online store or app. We reply within one working day with questions, a plan and a fixed quote.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />

      <div className="px-5 pb-12 pt-14 md:px-8 lg:px-12 xl:px-16">
        <div className="mx-auto grid max-w-[1440px] items-start gap-8 lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px]">
          <ProjectForm />
          <ContactSidebar />
        </div>
      </div>

      <div className="px-5 pb-16 md:px-8 lg:px-12 xl:px-16">
        <div className="mx-auto max-w-[1440px]">
          <ContactFAQ />
        </div>
      </div>
    </main>
  );
}
