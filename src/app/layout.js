import "./globals.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
	title: "Casino Project",
	description: "Разделы bet casino slots",
	other: {
		keywords: "casino, bet, slots, онлайн казино, ставки"
	}
};


export default function RootLayout({ children }) {
	return (
		<html lang="en">
		<body>
			<Header />
			<main style={{ padding: 24 }}>{children}</main>
			<Footer />
		</body>
		</html>
	);
}
