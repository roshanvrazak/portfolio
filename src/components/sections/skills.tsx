export function Skills({ data }: { data: Record<string, string[]> }) {
  return (
    <div id="skills" className="content-section skills-section">
      <h2 className="section-title">Technical skills</h2>

      <ul className="mt-4 flex flex-col gap-6 text-base font-normal text-primary/90">
        {Object.entries(data).map(([key, value]) => (
          <li
            key={key}
            className="grid gap-2 md:grid-cols-[220px_1fr] md:gap-6 items-start"
          >
            <p>{key}</p>
            <p className="text-[1.0625rem] leading-[1.7] text-muted-foreground">
              {value.join(", ")}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
