"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatedText } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/magnetic";

export function Navbar() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <header className="site-nav">
      <Magnetic bouncy>
        <Button asChild variant="ghost" className="h-11 px-3">
          <Link href="/" className="wordmark" aria-label="Roshan Razak home">
            rvr.
          </Link>
        </Button>
      </Magnetic>
      <nav aria-label="Main navigation">
        <AnimatedText href="/#experience">Experience</AnimatedText>
        <AnimatedText href="/#projects">Projects</AnimatedText>
        <AnimatedText href="/#aboutme">About</AnimatedText>
        <Magnetic>
          <Button
            variant="ghost"
            size="icon"
            type="button"
            disabled={!mounted}
            aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
          >
            {mounted &&
              (resolvedTheme === "dark" ? (
                <Sun size={18} />
              ) : (
                <Moon size={18} />
              ))}
          </Button>
        </Magnetic>
      </nav>
    </header>
  );
}
