"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Wraps the app in Lenis inertia scrolling. Respects prefers-reduced-motion
 * by skipping Lenis entirely (native scroll takes over).
 */
export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    // Bridge in-page anchor clicks to Lenis for smooth jumps.
    const onAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest(
        'a[href*="#"]'
      ) as HTMLAnchorElement | null;
      if (!target) return;
      const url = new URL(target.href, window.location.href);
      if (url.pathname !== window.location.pathname) return;
      const el = document.querySelector(url.hash);
      if (url.hash && el) {
        e.preventDefault();
        lenis.scrollTo(el as HTMLElement, { offset: -80 });
        history.pushState(null, "", url.hash);
      }
    };
    document.addEventListener("click", onAnchorClick);

    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("click", onAnchorClick);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
