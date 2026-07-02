import {
  Calculator,
  Receipt,
  ClipboardList,
  ChartLine,
  FileCheck,
  Building2,
  Database,
  MonitorSmartphone,
  BadgeCheck,
  MapPin,
  ShieldCheck,
  Compass,
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
  // PLACEHOLDER: swap for a real Calendly/Cal.com link to enable direct booking.
  calendarUrl: "",
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
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/#contact" },
];

// Social profiles — hrefs are PLACEHOLDERS until the real profiles exist.
export type SocialLink = { label: string; href: string };
export const socials: SocialLink[] = [
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
];

export type ServiceCategoryKey = "finance" | "setup" | "advisory" | "digital";

export type ServiceCategory = {
  key: ServiceCategoryKey;
  label: string;
  blurb: string;
};

export const serviceCategories: ServiceCategory[] = [
  {
    key: "finance",
    label: "Finance & Tax",
    blurb: "Clean books and confident filings, every period.",
  },
  {
    key: "setup",
    label: "Business Setup & Compliance",
    blurb: "Licences, paperwork and intelligence — handled.",
  },
  {
    key: "advisory",
    label: "Advisory & Growth",
    blurb: "Evidence and structure for your next move.",
  },
  {
    key: "digital",
    label: "Digital Services",
    blurb: "A modern presence to match your ambition.",
  },
];

export type Service = {
  title: string;
  description: string;
  /** Extra copy revealed by the card's “Learn more” interaction. */
  details: string;
  icon: LucideIcon;
  category: ServiceCategoryKey;
};

export const services: Service[] = [
  {
    title: "Accounting & Bookkeeping",
    description:
      "Accurate records, monthly closing and clean financial statements your stakeholders can trust.",
    details:
      "Management accounts, reconciliations, payables & receivables, and year-end statements prepared to IFRS.",
    icon: Calculator,
    category: "finance",
  },
  {
    title: "Tax Consultancy",
    description:
      "UAE Corporate Tax & VAT registration, filing and compliance — handled end to end.",
    details:
      "Registrations, return filing, FTA correspondence and a compliance calendar that keeps every deadline met.",
    icon: Receipt,
    category: "finance",
  },
  {
    title: "Documents Clearing Services",
    description:
      "Government & PRO paperwork managed start to finish, without the back-and-forth.",
    details:
      "Trade licences, visas, approvals and renewals — represented before government bodies on your behalf.",
    icon: FileCheck,
    category: "setup",
  },
  {
    title: "Commercial Information Services",
    description:
      "Business intelligence and reporting that turns raw data into decisions.",
    details:
      "Market research, competitor profiles and commercial due-diligence reporting for informed moves.",
    icon: Database,
    category: "setup",
  },
  {
    title: "Feasibility Studies",
    description:
      "Market and financial viability analysis so you commit capital with confidence.",
    details:
      "Demand analysis, financial modelling and risk assessment — built for banks, investors and boards.",
    icon: ChartLine,
    category: "advisory",
  },
  {
    title: "Project Management Consultancy",
    description:
      "Planning and delivery support that keeps complex initiatives on time and on budget.",
    details:
      "Scope, budget and timeline governance with clear milestone reporting from kick-off to close.",
    icon: ClipboardList,
    category: "advisory",
  },
  {
    title: "Real Estate Brokerage & Consultancy",
    description:
      "Leasing brokerage and advisory to help you secure the right space on the right terms.",
    details:
      "Tenant representation, lease negotiation and market advisory across RAK and the wider UAE.",
    icon: Building2,
    category: "advisory",
  },
  {
    title: "Web Design",
    description:
      "Modern, fast websites for UAE businesses — built to convert and easy to maintain.",
    details:
      "Design, build and launch — fast, SEO-ready sites with content and hosting guidance included.",
    icon: MonitorSmartphone,
    category: "digital",
  },
];

// “Why Clarivat” trust points.
export type TrustPoint = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const whyClarivat: TrustPoint[] = [
  {
    title: "RAKEZ Free Zone licensed",
    description:
      "A licensed advisory firm operating from the Ras Al Khaimah Economic Zone.",
    icon: BadgeCheck,
  },
  {
    title: "UAE-based support",
    description:
      "An on-the-ground team that understands local regulation and business culture.",
    icon: MapPin,
  },
  {
    title: "Compliance-focused",
    description:
      "Corporate Tax, VAT and reporting deadlines tracked and met — before they become problems.",
    icon: ShieldCheck,
  },
  {
    title: "Clear, practical guidance",
    description:
      "Advice in plain language, sized to your business — no jargon, no noise.",
    icon: Compass,
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

// Trust strip — scrolls beneath the hero.
export const marqueeWords = [
  "RAKEZ Licensed",
  "UAE Corporate Tax",
  "VAT Compliance",
  "Business Setup",
  "Financial Clarity",
  "Accounting",
  "Advisory",
  "Feasibility",
];
