export default function SectionWithListNum({ title, list = [], children }) {
  return (
    <section className="section">
      <h2 сlassName="section__title">{title}</h2>
      {children}
      {/*children на случай если будет текст*/}
      <ol className="section__list">
        {list.map((item, index) => (
          <li className="section__list-item" key={index}>
            {item}
          </li>
        ))}
      </ol>
    </section>
  );
}
