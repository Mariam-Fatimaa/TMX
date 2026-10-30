import { notFound } from "next/navigation";
import { siteConfig } from "@/constants/site";
import WorkPageContent from "@/components/work/work-page-content";

export default function WorkPage() {
  if (!siteConfig.showWork) {
    notFound();
  }

  return <WorkPageContent />;
}