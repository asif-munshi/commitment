import "@/styles/globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Commitment Accessories",
  description: "Generated by create next app",
  keywords: ["Next.js", "React", "Tailwind CSS", "Commitment", "Accessories"],
  icons: {
    icon: "/commitment.svg",
    // shortcut: "/favicon-16x16.png",
    // apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="relative flex min-h-screen flex-col justify-between bg-background font-[family-name:var(--font-geist-sans)]">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
