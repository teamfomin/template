export default function FaqList({ title, items = [] }) {
  return (
    <section className="faq-section">
      {title && <h2 className="faq-title">{title}</h2>}

      <div className="faq-list">
        {items.map((item, index) => (
          <div key={item.id || index} className="faq-item">
            <div className="faq-header">
              <h3 className="faq-question">{item.question}</h3>
            </div>
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
