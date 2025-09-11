export default function EndingSection({ title, text }) {
  return (
    <section className="ending" style={{ marginBottom: "2rem" }}>
      <h2 className="ending__title">{title}</h2>
      <p className="ending__text">{text}</p>
      <button className="ending__btn cta-btn">
        <span>Играть сейчас</span>
      </button>
    </section>
  );
}
