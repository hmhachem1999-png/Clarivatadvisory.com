import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Services from "@/components/Services";
import Process from "@/components/Process";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Accounting, corporate tax, VAT, feasibility studies, document clearing, real estate and web design — full-service business advisory in RAKEZ.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="What we do"
        title="Services that keep you clear."
        highlight={[3]}
        intro="One advisory partner across accounting, tax, setup and beyond — pick what you need today and scale into the rest as you grow."
      />
      <Services />
      <Process />
      <CTA />
    </>
  );
}
