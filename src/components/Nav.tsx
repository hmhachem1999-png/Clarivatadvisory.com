"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { company, navLinks } from "@/data/site";
import Logo from "./Logo";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the overlay menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "bg-ink/70 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <Link href="/" aria-label={`${company.name} home`}>
          <Logo markSize={28} />
        </Link>

        <ul className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="link-underline text-sm font-medium text-paper/80 transition-colors hover:text-paper"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="rounded-full bg-gradient-to-r from-teal to-cyan px-6 py-2.5 text-sm font-semibold text-ink transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(200,161,58,0.35)]"
          >
            Book a consultation
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="md:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-7 w-7" />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 flex flex-col bg-ink md:hidden"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <Logo markSize={28} />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-7 w-7" />
              </button>
            </div>

            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
              }}
              className="flex flex-1 flex-col justify-center gap-3 px-6"
            >
              {[...navLinks, { label: "Get in touch", href: "/contact" }].map(
                (link) => (
                  <motion.li
                    key={link.href}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block text-5xl font-extrabold tracking-tight text-paper"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                )
              )}
            </motion.ul>

            <div className="px-6 py-8 text-sm text-muted">
              <p>{company.phone}</p>
              <p>{company.address.city}, UAE</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
