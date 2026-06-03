import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { company } from "@/data/site";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${company.legalName} — Business Setup, Tax & Advisory in RAKEZ`,
    template: `%s — ${company.name}`,
  },
  description: company.subline,
  metadataBase: new URL("https://clarivatadvisory.com"),
  openGraph: {
    title: `${company.legalName} — ${company.tagline}`,
    description: company.subline,
    locale: "en_AE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full`}>
      <body className="min-h-full antialiased">
        <div className="grain" aria-hidden />
        <CustomCursor />
        <SmoothScroll>
          <Nav />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
