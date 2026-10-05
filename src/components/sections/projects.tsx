import { ArrowUpRight } from "lucide-react";
import { TechnologyList } from "@/components/technology-list";
interface Project {
  SLUG: string;
  LIVE_PREVIEW?: string;
  GITHUB?: string;
  DESCRIPTION: string[];
  TECH_STACK: string[];
}
export function Projects({
  data,
  all,
}: {
  data?: Record<string, Project>;
  all: string;
}) {
  return (
    <section id="projects" className="content-section">
      <div className="section-heading">
        <h2 className="section-title">Selected projects</h2>
        <a href={all} target="_blank" rel="noopener noreferrer">
          All on GitHub <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </div>
      <div className="project-list">
        {Object.entries(data ?? {}).map(([title, project]) => (
          <article className="project-entry" key={project.SLUG}>
            <header className="project-heading">
              <h3>{title}</h3>
              <div className="project-links">
                {project.LIVE_PREVIEW && (
                  <a
                    href={project.LIVE_PREVIEW}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                )}
                {project.GITHUB && (
                  <a
                    href={project.GITHUB}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                )}
              </div>
            </header>
            <p className="project-summary">
              {project.DESCRIPTION[0].replace(/^[^:]+:\s*/, "")}
            </p>
            <ul className="project-notes">
              {project.DESCRIPTION.slice(1).map((text) => (
                <li key={text}>{text}</li>
              ))}
            </ul>
            <TechnologyList items={project.TECH_STACK} />
          </article>
        ))}
      </div>
    </section>
  );
}
