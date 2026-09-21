import ServicesHero from "./hero";
// import ServicesList from "./services-list";
import DetailedServiceSections from "./detailed-service-sections";
import ServicesProcess from "./process";
import ServicesTech from "./Capabilites/tech";
import ServicesCTA from "./CTA";

export default function ServicesPageContent() {
  return (
    <main>
      <ServicesHero />
      {/* <ServicesList /> */}
      <DetailedServiceSections />
      <ServicesProcess />
      <ServicesTech />
      <ServicesCTA />
    </main>
  );
}