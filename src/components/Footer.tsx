import Link from "next/link";
import Image from "next/image";
import { company, navLinks, services, socials } from "@/data/site";

export default function Footer() {
  const year = 2026;

  return (
    <footer className="border-t border-white/10 bg-ink px-6 pt-20 pb-10 md:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Big logotype */}
        <Link href="/" className="flex items-center gap-4 md:gap-6">
          <Image
            src="/clarivat-mark.png"
            alt={`${company.name} logo`}
            width={120}
            height={120}
            className="h-[clamp(2.5rem,9vw,7rem)] w-auto"
          />
          <span className="text-[clamp(3.5rem,14vw,12rem)] font-extrabold leading-none tracking-[-0.04em]">
            {company.name}
          </span>
        </Link>

        <div className="mt-16 grid gap-12 border-t border-white/10 pt-12 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <p className="max-w-sm text-lg font-semibold text-paper/80">
              {company.tagline}
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper/50">
              Guided by insight, precision and foresight — we help UAE
              businesses make informed decisions today that shape a stronger
              tomorrow.
            </p>
            <p className="mt-4 max-w-sm text-sm text-paper/40">
              {company.legalName} — {company.license}.
            </p>
          </div>

          <nav aria-label="Footer">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-paper/40">
              Navigate
            </h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="link-underline text-paper/80 hover:text-paper"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-paper/40">
              Services
            </h3>
            <ul className="mt-5 space-y-3">
              {services.slice(0, 5).map((s) => (
                <li key={s.title}>
                  <Link
                    href="/#services"
                    className="link-underline text-paper/80 hover:text-paper"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-paper/40">
              Contact
            </h3>
            <ul className="mt-5 space-y-3 text-paper/80">
              <li className="text-sm leading-relaxed text-paper/60">
                {company.address.line1}, {company.address.line2},{" "}
                {company.address.city}, {company.address.country}
              </li>
              <li>
                <a href={company.phoneHref} className="link-underline">
                  {company.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="link-underline break-all"
                >
                  {company.email}
                </a>
              </li>
              <li>
                <a
                  href={company.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
            {/* Social profiles — placeholder hrefs until real pages exist */}
            <div className="mt-6 flex gap-5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="link-underline text-sm font-semibold text-paper/60 hover:text-paper"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-sm text-paper/40 md:flex-row md:items-center">
          <p>
            &copy; {year} {company.legalName}. All rights reserved.
          </p>
          <p>Built in Ras Al Khaimah 🇦🇪</p>
        </div>
      </div>
    </footer>
  );
}
