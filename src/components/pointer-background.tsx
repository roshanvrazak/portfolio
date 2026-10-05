"use client";

import { useEffect, useRef } from "react";

export function PointerBackground() {
  const glow = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const preference = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)"
    );
    let frame = 0;
    let x = 0;
    let y = 0;
    const hide = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      if (glow.current) glow.current.style.opacity = "0";
    };
    const move = (event: PointerEvent) => {
      if (!preference.matches || event.pointerType !== "mouse") return;
      x = event.clientX;
      y = event.clientY;
      if (frame) return;
      frame = requestAnimationFrame(() => {
        if (glow.current) {
          glow.current.style.transform = `translate3d(${x - 360}px, ${y - 360}px, 0)`;
          glow.current.style.opacity = "1";
        }
        frame = 0;
      });
    };
    window.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("pointerleave", hide);
    window.addEventListener("blur", hide);
    preference.addEventListener("change", hide);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("pointerleave", hide);
      window.removeEventListener("blur", hide);
      preference.removeEventListener("change", hide);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-background">
      <div ref={glow} className="pointer-glow" />
    </div>
  );
}
