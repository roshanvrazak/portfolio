import { ArrowUpRight } from "lucide-react";
import { TechnologyList } from "@/components/technology-list";

interface IExperienceData {
  WEBSITE: string | null;
  POSITION: string;
  LOCATION: string;
  DURATION: string;
  DESCRIPTION: string[];
  TECH_STACK: string[];
}

export function Experience({
  data,
}: {
  data: Record<string, IExperienceData>;
}) {
  return (
    <section id="experience" className="content-section experience-section">
      <h2 className="section-title">Experience</h2>

      <ul className="mt-4 flex flex-col divide-y divide-border text-base font-normal text-primary/90">
        {Object.entries(data).map(([key, value]) => (
          <li key={key} className="py-8 first:pt-2 sm:py-10">
            <div className="size-full">
              <header className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                <div>
                  <h3 className="text-xl font-medium leading-snug tracking-tight text-foreground">
                    {value.WEBSITE ? (
                      <a
                        className="company-link inline-flex items-center gap-1.5"
                        href={value.WEBSITE}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {key}
                        <ArrowUpRight
                          size={13}
                          className="text-muted-foreground"
                        />
                      </a>
                    ) : (
                      key
                    )}
                  </h3>
                  <p className="mt-2 text-base text-foreground">
                    {value.POSITION}
                  </p>
                  <p className="mt-1 text-[0.9375rem] leading-relaxed text-muted-foreground">
                    {value.LOCATION}
                  </p>
                </div>
                <p className="shrink-0 text-[0.9375rem] tabular-nums text-muted-foreground">
                  {value.DURATION}
                </p>
              </header>

              <ul className="mt-4 list-disc space-y-3 pl-4 text-[1.0625rem] leading-[1.7] text-muted-foreground text-left">
                {value.DESCRIPTION.map((desc, index) => (
                  <li key={index}>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: desc.replace(
                          /\*\*(.*?)\*\*/g,
                          "<strong>$1</strong>"
                        ),
                      }}
                    />
                  </li>
                ))}
              </ul>

              <TechnologyList items={value.TECH_STACK} />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
