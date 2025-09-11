export default function SectionWithText({ title, text }) {
  return (
    <section className="section" style={{ marginBottom: "2rem" }}>
      <h2 className="section__title">{title}</h2>
      <p className="section__text">{text}</p>
    </section>
  );
}
