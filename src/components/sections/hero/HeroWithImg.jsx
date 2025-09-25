export default function HeroSection({ title, text, imageUrl, imageAlt }) {
  return (
    <section className="hero" style={{ marginBottom: "2rem" }}>
      <div className="hero__content">
        <h1 className="hero__title">{title}</h1>
        <p className="hero__text">{text}</p>
      </div>
      <img className="hero__img" src={imageUrl} alt={imageAlt} />
    </section>
  );
}
