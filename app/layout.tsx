import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const sniglet = localFont({
  src: [
    {
      path: "/fonts/Sniglet-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "/fonts/Sniglet-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
});

const nunito = localFont({
  src: [
    {
      path: "/fonts/Nunito-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "/fonts/Nunito-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "/fonts/Nunito-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "/fonts/Nunito-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "/fonts/Nunito-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "/fonts/Nunito-Italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--nunito",
});

export const metadata: Metadata = {
  title: "Boulder app",
  description: "Boulder App – Find all climbing events near you.",
  icons: {
    icon: "/header/logo3.svg", // or .png, .svg
  },
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
        className={`${sniglet.className} ${nunito.variable} max-w-screen antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
