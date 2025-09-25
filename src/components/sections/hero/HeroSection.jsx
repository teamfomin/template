export default function HeroSection({ title, text }) {
  return (
    <section className="hero" style={{ marginBottom: "2rem" }}>
      <h1 className="hero__title">{title}</h1>
      <p className="hero__text">{text}</p>
    </section>
  );
}
