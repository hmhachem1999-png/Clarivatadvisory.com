import Image from "next/image";
import { company } from "@/data/site";

/**
 * Brand lockup: the gold star mark (from the official logo) + the Clarivat
 * wordmark. `markOnly` renders just the icon.
 */
export default function Logo({
  className = "",
  markSize = 26,
  markOnly = false,
  showWordmark = true,
}: {
  className?: string;
  markSize?: number;
  markOnly?: boolean;
  showWordmark?: boolean;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image
        src="/clarivat-mark.png"
        alt={`${company.name} logo`}
        width={markSize}
        height={markSize}
        priority
        loading="eager"
        className="h-auto w-auto"
        style={{ width: markSize, height: markSize }}
      />
      {!markOnly && showWordmark && (
        <span className="text-xl font-extrabold tracking-tight leading-none">
          {company.name}
        </span>
      )}
    </span>
  );
}
