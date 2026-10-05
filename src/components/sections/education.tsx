export function Education({
  data,
  certifications = [],
}: {
  certifications?: string[];
  data: {
    DEGREE: string;
    INSTITUTION: string;
    DURATION: string;
    MODULES?: string;
    DISSERTATION?: string;
  }[];
}) {
  return (
    <div id="education" className="content-section education-section space-y-8">
      <h2 className="section-title">Education</h2>

      <div className="grid grid-cols-1 gap-8">
        {data.map((edu, index) => (
          <div key={index}>
            <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:items-baseline mb-2">
              <h3 className="text-lg font-medium text-foreground">
                {edu.INSTITUTION}
              </h3>
              <p className="text-base text-muted-foreground">{edu.DURATION}</p>
            </div>
            <p className="text-base text-muted-foreground">{edu.DEGREE}</p>

            {(edu.MODULES || edu.DISSERTATION) && (
              <div className="mt-2 text-base text-muted-foreground leading-[1.7] space-y-2">
                {edu.MODULES && (
                  <p>
                    <span className="font-medium text-foreground">
                      Modules:
                    </span>{" "}
                    {edu.MODULES}
                  </p>
                )}
                {edu.DISSERTATION && (
                  <p>
                    <span className="font-medium text-foreground">
                      {edu.DEGREE.startsWith("MSc")
                        ? "Dissertation:"
                        : "Capstone:"}
                    </span>{" "}
                    {edu.DISSERTATION}
                  </p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      {certifications.length > 0 && (
        <div className="training-block space-y-3">
          <h3 className="section-title">Training & certifications</h3>
          <ul className="list-disc space-y-2 pl-4 text-base text-muted-foreground">
            {certifications.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
