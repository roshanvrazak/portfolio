"use client";

import { motion, useReducedMotion, useSpring } from "framer-motion";
import type { ReactNode } from "react";

export function Magnetic({
  children,
  bouncy = false,
}: {
  children: ReactNode;
  bouncy?: boolean;
}) {
  const reduced = useReducedMotion();
  const x = useSpring(0, { stiffness: 280, damping: bouncy ? 12 : 22 });
  const y = useSpring(0, { stiffness: 280, damping: bouncy ? 12 : 22 });
  return (
    <motion.div
      className="magnetic-control"
      style={{ x, y }}
      whileHover={reduced || !bouncy ? undefined : { scale: 1.06 }}
      transition={{ type: "spring", stiffness: 280, damping: 12 }}
      onPointerMove={(event) => {
        if (reduced || event.pointerType !== "mouse") return;
        const bounds = event.currentTarget.getBoundingClientRect();
        x.set(
          (event.clientX - bounds.left - bounds.width / 2) *
            (bouncy ? 0.3 : 0.1)
        );
        y.set(
          (event.clientY - bounds.top - bounds.height / 2) *
            (bouncy ? 0.3 : 0.15)
        );
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
      onBlur={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}
