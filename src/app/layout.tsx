import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Digital Space — AI Automation Community",
  description:
    "Join the elite AI automation community. Learn AI agents, workflow systems, and business scaling with the world's top AI entrepreneurs and creators.",
  keywords: ["AI automation", "AI agents", "workflow systems", "digital space", "AI community"],
  openGraph: {
    title: "Digital Space — AI Automation Community",
    description: "Join the elite AI automation community for entrepreneurs and creators.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
