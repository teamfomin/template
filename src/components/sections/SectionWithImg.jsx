export default function SectionWithImg({ title, text, imageUrl, imageAlt }) {
  return (
    <section className="section" style={{ marginBottom: "2rem" }}>
      <h2 className="section__title">{title}</h2>
      <div className="section__content-img">
        <p>{text}</p>
        <img src={imageUrl} alt={imageAlt} />
      </div>
    </section>
  );
}
