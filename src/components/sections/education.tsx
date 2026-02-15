export function Education({
  data,
}: {
  data: {
    DEGREE: string;
    INSTITUTION: string;
    DURATION: string;
    MODULES?: string;
    DISSERTATION?: string;
  }[];
}) {
  return (
    <div id="education" className="space-y-6 pt-10 pb-5">
      <h2 className="text-base font-medium uppercase tracking-widest text-[#94a3b8]">
        Education
      </h2>

      <div className="grid grid-cols-1 gap-4">
        {data.map((edu, index) => (
          <div key={index}>
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-base font-medium text-foreground">
                {edu.INSTITUTION}
              </h3>
              <p className="text-sm text-muted-foreground">{edu.DURATION}</p>
            </div>
            <p className="text-base text-muted-foreground">{edu.DEGREE}</p>

            {(edu.MODULES || edu.DISSERTATION) && (
              <div className="mt-2 text-sm text-muted-foreground space-y-1">
                {edu.MODULES && (
                  <p>
                    <span className="font-medium text-foreground">Modules:</span>{" "}
                    {edu.MODULES}
                  </p>
                )}
                {edu.DISSERTATION && (
                  <p>
                    <span className="font-medium text-foreground">
                      Dissertation:
                    </span>{" "}
                    {edu.DISSERTATION}
                  </p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}