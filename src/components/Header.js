import Link from "next/link";

export default function Header() {
	return (
		<header style={{ padding: 16, display: "flex", gap: 16, borderBottom: "1px solid #eee" }}>
			<Link href="/">Home</Link>
			<Link href="/bet">Bet</Link>
			<Link href="/casino">Casino</Link>
			<Link href="/slots">Slots</Link>
		</header>
	);
}
