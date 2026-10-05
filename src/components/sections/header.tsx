"use client";

import { ArrowUpRight, FileText, Github, Linkedin, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/magnetic";

export function Header({ data }: { data: Record<string, string> }) {
  return (
    <section className="profile-header">
      <p className="profile-greeting">
        Hi there
        <span className="greeting-wave" aria-hidden="true">
          👋
        </span>
        , I’m
      </p>
      <p className="profile-role">
        {data.AGE} <span aria-hidden="true">·</span> {data.PRONOUN}
      </p>
      <h1>{data.NAME}</h1>
      <p className="profile-intro">{data.HEADLINE}</p>
      <nav
        className="profile-actions"
        aria-label="Contact and professional profiles"
      >
        <Magnetic>
          <Button asChild size="lg" className="h-12 px-5 text-base">
            <a href={data.RESUME} target="_blank" rel="noopener noreferrer">
              <FileText aria-hidden="true" /> View CV{" "}
              <ArrowUpRight aria-hidden="true" />
            </a>
          </Button>
        </Magnetic>
        <Magnetic>
          <Button asChild variant="outline" className="h-12 px-4 text-base">
            <a href={data.LINKEDIN} target="_blank" rel="noopener noreferrer">
              <Linkedin aria-hidden="true" /> LinkedIn
            </a>
          </Button>
        </Magnetic>
        <Magnetic>
          <Button asChild variant="outline" className="h-12 px-4 text-base">
            <a href={data.GITHUB} target="_blank" rel="noopener noreferrer">
              <Github aria-hidden="true" /> GitHub
            </a>
          </Button>
        </Magnetic>
        <Magnetic>
          <Button asChild variant="ghost" className="h-12 px-4 text-base">
            <a href={data.EMAIL}>
              <Mail aria-hidden="true" /> Email
            </a>
          </Button>
        </Magnetic>
      </nav>
    </section>
  );
}
