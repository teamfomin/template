export default function SectionList({ title, items }) {
	return (
		<section >
			<h2>{title}</h2>
			<ul>
				{items.map((item, i) => (
					<li key={i}>
						<h3>{item.subtitle}</h3>
						<p>{item.text}</p>
					</li>
				))}
			</ul>
		</section>
	);
}
