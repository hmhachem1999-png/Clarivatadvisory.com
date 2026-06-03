import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to Clarivat FZ-LLC about accounting, tax and business setup in Ras Al Khaimah. Call +971 55 527 6398 or send us a message.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get in touch"
        title="Let's talk clarity."
        highlight={[1]}
        intro="Tell us where you are and where you want to go. We'll reply within one business day."
      />
      <Contact />
    </>
  );
}
