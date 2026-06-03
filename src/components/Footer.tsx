import Link from "next/link";
import { company, navLinks, services } from "@/data/site";

export default function Footer() {
  const year = 2026;

  return (
    <footer className="border-t border-white/10 bg-ink px-6 pt-20 pb-10 md:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Big logotype */}
        <Link
          href="/"
          className="block text-[clamp(3.5rem,14vw,12rem)] font-extrabold leading-none tracking-[-0.04em]"
        >
          {company.name}
          <span className="gradient-text">.</span>
        </Link>

        <div className="mt-16 grid gap-12 border-t border-white/10 pt-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="max-w-sm text-paper/60">{company.tagline}</p>
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
