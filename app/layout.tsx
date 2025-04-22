import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"], // Including all weights we need
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Pinsline - Find Your Perfect Space",
  description: "Discover Handpicked Luxury Cabins In Breathtaking Locations",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
