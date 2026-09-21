import Hero from "@/components/home/hero";
import SelectedWork from "@/components/home/selected-work";
import AgencyStatement from "@/components/home/agency-statement";
import ServicesPreview from "@/components/home/services-preview";
import ContactCTA from "@/components/home/contact-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <AgencyStatement />
      <ServicesPreview />
      <ContactCTA />
    </>
  );
}