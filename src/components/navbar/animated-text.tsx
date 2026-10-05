import { motion, useReducedMotion } from "framer-motion";
import type React from "react";

const DURATION = 0.25;
const STAGGER = 0.025;

interface AnimatedTextProps {
  children: string;
  href: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  children,
  href,
}) => {
  const reducedMotion = useReducedMotion();
  if (reducedMotion)
    return (
      <a
        href={href}
        className="rounded-lg text-sm sm:px-2 sm:py-1 sm:text-base"
      >
        {children}
      </a>
    );

  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block w-fit leading-[1.2rem] rounded-lg p-0 text-sm sm:text-base text-primary/90 whitespace-nowrap sm:px-2 sm:py-1"
    >
      <motion.div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-px bg-foreground/50"
        variants={{
          initial: { width: "0%" },
          hovered: { width: "100%" },
        }}
        transition={{ duration: DURATION, ease: "easeInOut" }}
      />

      <span className="relative inline-block cursor-pointer">
        {children.split("").map((l, i) => (
          <span key={i} className="relative inline-block overflow-hidden">
            <motion.span
              variants={{
                initial: { y: 0 },
                hovered: { y: "-100%" },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: i * STAGGER,
              }}
              className="block"
            >
              {l}
            </motion.span>
            <motion.span
              variants={{
                initial: { y: "100%" },
                hovered: { y: "0%" },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: i * STAGGER,
              }}
              aria-hidden="true"
              className="block absolute left-0 top-0"
            >
              {l}
            </motion.span>
          </span>
        ))}
      </span>
    </motion.a>
  );
};
