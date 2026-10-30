import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://my-portfolio-omega-sand-89.vercel.app"),
  title: "Adam Mbori | Creative Developer & AI Builder",
  description:
    "The personal portfolio of Adam Mbori (Uncbatman): creative websites, practical AI integrations, and automations built with curiosity.",
  openGraph: {
    title: "Adam Mbori | Creative Developer & AI Builder",
    description:
      "Creative websites, practical AI integrations, and automations—built with curiosity by Adam Mbori.",
    type: "website",
    images: ["/projects/nextlevel-3.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adam Mbori | Creative Developer & AI Builder",
    description:
      "Creative websites, practical AI integrations, and automations—built with curiosity by Adam Mbori.",
    images: ["/projects/nextlevel-3.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${kanit.variable} h-full antialiased`}>
      <body>{children}</body>
    </html>
  );
}
