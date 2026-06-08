import {
  Calculator,
  Receipt,
  ClipboardList,
  ChartLine,
  FileCheck,
  Building2,
  Database,
  MonitorSmartphone,
  type LucideIcon,
} from "lucide-react";

export const company = {
  name: "Clarivat",
  legalName: "Clarivat FZ-LLC",
  tagline: "Clarity today. Confidence tomorrow.",
  subline:
    "A RAKEZ-licensed advisory firm helping UAE companies stay compliant, tax-ready, and financially clear — from bookkeeping to corporate tax to business setup.",
  shortAbout:
    "We are a Free Zone consultancy based in Ras Al Khaimah, partnering with founders and finance teams across the Emirates. Numbers, handled. Growth, unlocked.",
  email: "info@clarivatadvisory.com",
  phone: "+971 55 527 6398",
  phoneHref: "tel:+971555276398",
  // WhatsApp deep link (digits only, no +, spaces or dashes)
  whatsapp: "https://wa.me/971555276398",
  address: {
    line1: "Compass Building",
    line2: "Al Hulaila Industrial Zone, RAKEZ",
    city: "Ras Al Khaimah",
    country: "United Arab Emirates",
  },
  license: "RAKEZ Free Zone Services Licence",
};

// The brand story — official copy, shown in its own section.
export const brandStory = {
  story:
    "Clarivat Advisory empowers organizations and leaders to navigate complexity with clarity and confidence. Guided by insight, precision, and foresight, we help our clients make informed decisions today that shape a stronger tomorrow.",
  mark: "The abstract North Star symbolizes clarity, guidance, and direction. The flowing lines represent insight, precision, and forward thinking — illuminating the path to confident decisions.",
};

export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Story", href: "/#story" },
  { label: "Contact", href: "/#contact" },
];

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    title: "Accounting & Bookkeeping",
    description:
      "Accurate records, monthly closing and clean financial statements your stakeholders can trust.",
    icon: Calculator,
  },
  {
    title: "Tax Consultancy",
    description:
      "UAE Corporate Tax & VAT registration, filing and compliance — handled end to end.",
    icon: Receipt,
  },
  {
    title: "Project Management Consultancy",
    description:
      "Planning and delivery support that keeps complex initiatives on time and on budget.",
    icon: ClipboardList,
  },
  {
    title: "Feasibility Studies",
    description:
      "Market and financial viability analysis so you commit capital with confidence.",
    icon: ChartLine,
  },
  {
    title: "Documents Clearing Services",
    description:
      "Government & PRO paperwork managed start to finish, without the back-and-forth.",
    icon: FileCheck,
  },
  {
    title: "Real Estate Brokerage & Consultancy",
    description:
      "Leasing brokerage and advisory to help you secure the right space on the right terms.",
    icon: Building2,
  },
  {
    title: "Commercial Information Services",
    description:
      "Business intelligence and reporting that turns raw data into decisions.",
    icon: Database,
  },
  {
    title: "Web Design",
    description:
      "Modern, fast websites for UAE businesses — built to convert and easy to maintain.",
    icon: MonitorSmartphone,
  },
];

export type Stat = { value: string; label: string };

export const stats: Stat[] = [
  { value: "8+", label: "Specialised services" },
  { value: "RAKEZ", label: "Free Zone licensed" },
  { value: "UAE", label: "Based & operating" },
  { value: "100%", label: "Compliance focused" },
];

export type Step = { title: string; description: string };

export const process: Step[] = [
  {
    title: "Discover",
    description:
      "We start with a conversation — your structure, your goals, and where the financial and regulatory risks sit.",
  },
  {
    title: "Plan",
    description:
      "We map a clear path: the registrations, filings and processes you need, with realistic timelines.",
  },
  {
    title: "Execute",
    description:
      "We handle the bookkeeping, tax and paperwork — keeping you compliant while you focus on growth.",
  },
  {
    title: "Optimise",
    description:
      "Ongoing reporting and advice so your numbers stay clear and your decisions stay sharp.",
  },
];

export const marqueeWords = [
  "Accounting",
  "Corporate Tax",
  "VAT",
  "Advisory",
  "RAKEZ",
  "Bookkeeping",
  "Feasibility",
  "Business Setup",
  "Compliance",
  "Real Estate",
];
