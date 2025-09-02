import Image from "next/image";


export default function SectionImage({ title, src, alt, text }) {
	return (
		<section style={{ marginBottom: "2rem" }}>
			<h2>{title}</h2>
			<figure>
				<Image src={src} alt={alt} width={600} height={400} />
				<figcaption>{alt}</figcaption>
			</figure>
			<p>{text}</p>
		</section>
	);
}
