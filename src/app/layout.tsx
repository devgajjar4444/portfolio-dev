import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dev Gajjar - Full Stack Software Engineer",
  description:
    "Full Stack Software Engineer with 3.5+ years of experience in Node.js, NestJS, Next.js, React, React Native, and Go. Building scalable, secure, and high-performance applications.",
  keywords: [
    "Dev Gajjar",
    "Full Stack Developer",
    "Node.js",
    "Next.js",
    "React Native",
    "Software Engineer",
    "Ahmedabad",
  ],
  authors: [{ name: "Dev Gajjar" }],
  openGraph: {
    title: "Dev Gajjar - Full Stack Software Engineer",
    description: "3.5+ years building scalable web & mobile applications",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-screen antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
