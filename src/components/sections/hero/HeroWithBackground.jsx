export default function HeroWithBackground({
  title,
  text,
  backgroundImage,
  overlay = true,
}) {
  return (
    <section
      className="hero hero--with-bg"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {overlay && <div className="hero__overlay"></div>}
      <div className="hero__content">
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
}
