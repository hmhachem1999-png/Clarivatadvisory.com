"use client";

import { useEffect, useRef, useState } from "react";

/**
 * A small dot that trails the pointer and grows over interactive elements.
 * Desktop / fine-pointer only and disabled when prefers-reduced-motion is set.
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!fine || reduced) return;

    setEnabled(true);
    document.documentElement.classList.add("cursor-active");

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const target = { ...pos };
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      const el = e.target as HTMLElement;
      setHovering(
        !!el.closest('a, button, [role="button"], input, textarea, label')
      );
    };

    const render = () => {
      pos.x += (target.x - pos.x) * 0.18;
      pos.y += (target.y - pos.y) * 0.18;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("cursor-active");
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={dotRef}
      aria-hidden
      className="cursor-dot transition-[width,height,opacity] duration-200 ease-out"
      style={{
        width: hovering ? 44 : 12,
        height: hovering ? 44 : 12,
        opacity: hovering ? 0.6 : 1,
      }}
    />
  );
}
