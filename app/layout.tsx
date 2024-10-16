import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import "./layout.scss";

const geistSans = localFont({
  src: "../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Collab Studio",
  description:
    "real-time collaboration tool where you can architect solutions, ideas for a proof of concept or potentially a great idea",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Collab Studio</title>
        <meta
          name="description"
          content="real-time collaboration tool where you can architect solutions, ideas for a proof of concept or potentially a great idea"
        />
        <meta property="og:title" content="Machine Learning Workshop" />
        <meta
          property="og:description"
          content="real-time collaboration tool where you can architect solutions, ideas for a proof of concept"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
