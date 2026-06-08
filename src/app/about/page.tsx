import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import About from "@/components/About";
import BrandStory from "@/components/BrandStory";
import Process from "@/components/Process";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "Clarivat FZ-LLC is a RAKEZ-licensed Free Zone consultancy in Ras Al Khaimah helping UAE companies stay compliant, tax-ready and financially clear.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Who we are"
        title="Your financial backbone in the UAE."
        highlight={[1]}
        intro="A RAKEZ-licensed advisory firm built for founders who would rather build than chase compliance."
      />
      <About />
      <BrandStory />
      <Process />
      <CTA />
    </>
  );
}
