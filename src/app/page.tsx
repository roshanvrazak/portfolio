"use client";

import { DATA } from "@/app/data";
import {
  AboutMe,
  Experience,
  Footer,
  Header,
  Navbar,
  Projects,
  Education,
  Skills,
} from "@/components/sections";

export default function Page() {
  return (
    <div className="site-shell">
      <Navbar />

      <main className="min-h-lvh">
        <Header data={DATA.HEADER} />
        <AboutMe data={DATA.ABOUT_ME} />
        <Experience data={DATA.EXPERIENCE} />
        <Projects data={DATA.PROJECTS} all={DATA.ALL_PROJECTS} />
        <Education data={DATA.EDUCATION} certifications={DATA.CERTIFICATIONS} />
        <Skills data={DATA.SKILLS} />
        <Footer />
      </main>
    </div>
  );
}
