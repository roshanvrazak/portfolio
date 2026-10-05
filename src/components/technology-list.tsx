export function TechnologyList({ items }: { items: string[] }) {
  return (
    <ul
      aria-label="Technologies and practices"
      className="technology-list mt-5 flex flex-wrap gap-y-2 text-[0.9375rem] leading-relaxed text-muted-foreground"
    >
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
