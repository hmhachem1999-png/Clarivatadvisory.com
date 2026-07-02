import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { company } from "@/data/site";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Loader from "@/components/Loader";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const SITE_URL = "https://clarivatadvisory.com";

export const metadata: Metadata = {
  title: {
    default: `${company.legalName} — Accounting, Tax & Business Setup in RAKEZ, UAE`,
    template: `%s — ${company.name}`,
  },
  description: `${company.tagline} ${company.subline}`,
  metadataBase: new URL(SITE_URL),
  keywords: [
    "accounting UAE",
    "bookkeeping Ras Al Khaimah",
    "UAE corporate tax",
    "VAT compliance UAE",
    "business setup RAKEZ",
    "PRO services UAE",
    "feasibility study UAE",
    "advisory firm RAK",
  ],
  openGraph: {
    title: `${company.legalName} — ${company.tagline}`,
    description: company.subline,
    locale: "en_AE",
    type: "website",
    url: SITE_URL,
  },
};

// Structured data: ProfessionalService (subtype of LocalBusiness).
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: company.legalName,
  alternateName: `${company.name} Advisory`,
  slogan: company.tagline,
  description: company.subline,
  url: SITE_URL,
  logo: `${SITE_URL}/clarivat-mark.png`,
  image: `${SITE_URL}/clarivat-mark.png`,
  telephone: company.phone,
  email: company.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${company.address.line1}, ${company.address.line2}`,
    addressLocality: company.address.city,
    addressCountry: "AE",
  },
  areaServed: "AE",
  knowsAbout: [
    "Accounting",
    "Bookkeeping",
    "UAE Corporate Tax",
    "VAT",
    "Business Setup",
    "Feasibility Studies",
    "Project Management",
    "Real Estate Consultancy",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full`}>
      <body className="min-h-full antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Loader />
        <div className="grain" aria-hidden />
        <CustomCursor />
        <SmoothScroll>
          <Nav />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </SmoothScroll>
      </body>
    </html>
  );
}
