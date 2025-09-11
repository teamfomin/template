export default function SectionSubtitleList({
  title,
  subtitle,
  list = [],
  children,
}) {
  return (
    <section className="section">
      <h2 сlassName="section__title">{title}</h2>
      <h3 childrenName="section__subtitle">{subtitle}</h3>
      {children}
      {/*children на случай если будет текст*/}
      <ul className="section__list">
        {list.map((item, index) => (
          <li className="section__list-item" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
