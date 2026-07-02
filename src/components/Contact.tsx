"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Mail, MapPin, Phone } from "lucide-react";
import { company } from "@/data/site";
import { Reveal } from "./RevealText";
import { WhatsAppIcon } from "./WhatsAppButton";

type Errors = { name?: string; email?: string; message?: string };

// Netlify Forms identifier — must match the form's `name` and the hidden
// `form-name` input. Submissions land in the Netlify dashboard; set up an
// email notification there to forward them to clarivatfzllc@gmail.com.
const FORM_NAME = "contact";

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
    .join("&");

export default function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validate = (): Errors => {
    const next: Errors = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = "That email doesn't look right.";
    }
    if (values.message.trim().length < 10)
      next.message = "Tell us a little more (10+ characters).";
    return next;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setSubmitting(true);
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": FORM_NAME, ...values }),
      });
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      setSent(true);
    } catch {
      setSubmitError(
        "Something went wrong sending your message. Please email us directly at " +
          company.email +
          "."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const field =
    "w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-paper placeholder:text-paper/30 outline-none transition-colors focus:border-cyan/60";

  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24 md:px-10 md:py-40"
    >
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
        {/* Left: heading + details */}
        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-cyan">
            Get in touch
          </p>
          <h2 className="text-[clamp(2rem,5vw,4rem)] font-extrabold leading-[1] tracking-[-0.02em]">
            Let&apos;s talk about your business.
          </h2>
          <p className="mt-6 max-w-md text-paper/60">
            Send us a message and we&apos;ll get back to you within one business
            day.
          </p>

          <div className="mt-12 space-y-6">
            <ContactRow icon={<MapPin className="h-5 w-5" />} label="Visit">
              {company.address.line1}, {company.address.line2}
              <br />
              {company.address.city}, {company.address.country}
            </ContactRow>
            <ContactRow icon={<Phone className="h-5 w-5" />} label="Call">
              <a href={company.phoneHref} className="link-underline">
                {company.phone}
              </a>
            </ContactRow>
            <ContactRow icon={<Mail className="h-5 w-5" />} label="Email">
              <a
                href={`mailto:${company.email}`}
                className="link-underline"
              >
                {company.email}
              </a>
            </ContactRow>
            <ContactRow
              icon={<WhatsAppIcon className="h-5 w-5" />}
              label="WhatsApp"
            >
              <a
                href={company.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline"
              >
                Chat with us instantly
              </a>
            </ContactRow>
          </div>

          <a
            href={company.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-ink transition-transform duration-300 hover:scale-105"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Message us on WhatsApp
          </a>
        </div>

        {/* Right: form / success state */}
        <Reveal>
          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex h-full min-h-[420px] flex-col items-center justify-center rounded-3xl border border-cyan/30 bg-white/5 p-10 text-center"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-teal to-cyan text-ink">
                <Check className="h-8 w-8" strokeWidth={3} />
              </span>
              <h3 className="mt-6 text-2xl font-bold">Message sent</h3>
              <p className="mt-3 max-w-sm text-paper/60">
                Thanks, {values.name.split(" ")[0] || "there"}. We&apos;ll be in
                touch shortly.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSent(false);
                  setValues({ name: "", email: "", message: "" });
                }}
                className="link-underline mt-8 text-sm font-semibold text-paper/80"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form
              name={FORM_NAME}
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              noValidate
              className="space-y-5"
            >
              {/* Netlify Forms plumbing */}
              <input type="hidden" name="form-name" value={FORM_NAME} />
              <p className="hidden">
                <label>
                  Don&apos;t fill this out if you&apos;re human:{" "}
                  <input name="bot-field" />
                </label>
              </p>

              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={values.name}
                  onChange={(e) =>
                    setValues((v) => ({ ...v, name: e.target.value }))
                  }
                  className={field}
                  aria-invalid={!!errors.name}
                />
                {errors.name && <FieldError>{errors.name}</FieldError>}
              </div>

              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email address"
                  value={values.email}
                  onChange={(e) =>
                    setValues((v) => ({ ...v, email: e.target.value }))
                  }
                  className={field}
                  aria-invalid={!!errors.email}
                />
                {errors.email && <FieldError>{errors.email}</FieldError>}
              </div>

              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="How can we help?"
                  value={values.message}
                  onChange={(e) =>
                    setValues((v) => ({ ...v, message: e.target.value }))
                  }
                  className={`${field} resize-none`}
                  aria-invalid={!!errors.message}
                />
                {errors.message && <FieldError>{errors.message}</FieldError>}
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="group w-full rounded-full bg-gradient-to-r from-teal to-cyan px-8 py-4 text-base font-bold text-ink transition-transform duration-300 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? "Sending…" : "Send message"}
              </button>
              {submitError && (
                <p className="text-center text-sm text-red-400">{submitError}</p>
              )}
              <p className="text-center text-xs text-paper/40">
                Your enquiry will be handled confidentially. We&apos;ll never
                share your details.
              </p>
              {company.calendarUrl && (
                <p className="text-center text-sm text-paper/60">
                  Prefer to pick a time?{" "}
                  <a
                    href={company.calendarUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline font-semibold text-cyan"
                  >
                    Book a consultation slot
                  </a>
                </p>
              )}
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-cyan">
        {icon}
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-paper/40">
          {label}
        </p>
        <p className="mt-1 text-paper/80">{children}</p>
      </div>
    </div>
  );
}

function FieldError({ children }: { children: React.ReactNode }) {
  return <p className="mt-2 pl-1 text-sm text-red-400">{children}</p>;
}
