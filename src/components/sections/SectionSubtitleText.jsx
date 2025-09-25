export default function SectionSubtitleText({ title, subtitle, text }) {
  return (
    <section className="section" style={{ marginBottom: "2rem" }}>
      <h2 className="section__title">{title}</h2>
      <h3 className="section__subtitle">{subtitle}</h3>
      <p className="section__text">{text}</p>
    </section>
  );
}
