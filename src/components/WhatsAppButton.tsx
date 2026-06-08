import { company } from "@/data/site";

/** Official WhatsApp glyph (lucide ships no brand icons). */
export function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden
      className={className}
      fill="currentColor"
    >
      <path d="M16.004 0h-.008C7.174 0 .002 7.174.002 16c0 3.5 1.13 6.747 3.05 9.38L1.06 31.32l6.142-1.964A15.9 15.9 0 0 0 16.004 32C24.83 32 32 24.826 32 16S24.83 0 16.004 0Zm9.31 22.594c-.386 1.09-1.92 1.995-3.142 2.26-.836.178-1.927.32-5.6-1.203-4.7-1.948-7.726-6.724-7.962-7.035-.226-.31-1.9-2.53-1.9-4.826 0-2.296 1.166-3.425 1.636-3.905.386-.394.99-.573 1.57-.573.188 0 .357.01.51.017.45.02.676.046.973.756.37.89 1.27 3.186 1.378 3.42.11.234.22.55.06.86-.15.32-.282.46-.516.73-.234.27-.456.48-.69.77-.214.252-.456.524-.186.99.27.456 1.2 1.98 2.576 3.206 1.774 1.58 3.215 2.078 3.733 2.294.386.16.846.122 1.128-.186.357-.394.798-1.05 1.246-1.696.318-.46.72-.518 1.142-.36.43.15 2.71 1.276 3.174 1.508.464.234.77.348.886.542.114.194.114 1.116-.272 2.205Z" />
    </svg>
  );
}

/**
 * Floating WhatsApp button (bottom-right) for one-tap chat. Opens a WhatsApp
 * conversation with the company number.
 */
export default function WhatsAppButton() {
  return (
    <a
      href={company.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-[#25D366] py-3.5 pl-4 pr-4 text-ink shadow-lg shadow-black/30 transition-transform duration-300 hover:scale-105 md:bottom-7 md:right-7"
    >
      <WhatsAppIcon className="h-7 w-7" />
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:max-w-[10rem] md:inline">
        Chat with us
      </span>
    </a>
  );
}
