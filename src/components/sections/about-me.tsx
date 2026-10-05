export function AboutMe({ data }: { data: Record<string, string> }) {
  return (
    <section id="aboutme" className="content-section">
      <h2 className="section-title">About</h2>
      <div className="about-prose">
        <p>{data.INTRO}</p>
        <p>{data.EXPERTISE}</p>
        <p>{data.BLOG}</p>
      </div>
    </section>
  );
}
