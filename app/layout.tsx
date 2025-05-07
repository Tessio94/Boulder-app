import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const sniglet = localFont({
	src: [
		{
			path: "/fonts/Sniglet Regular.ttf",
			weight: "400",
			style: "normal",
		},
	],
});

const bebasNeue = localFont({
	src: [
		{
			path: "/fonts/BebasNeue-Regular.ttf",
			weight: "400",
			style: "normal",
		},
	],
	variable: "--bebas-neue",
});

export const metadata: Metadata = {
	title: "Boulder app",
	description: "Boulder App – Find all climbing events near you.",
	// description: "Boulder App – Finden Sie alle Kletter-Events in Ihrer Nähe.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${sniglet.className} ${bebasNeue.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
