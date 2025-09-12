import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { InitialLoader } from "@/components";
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
  title: "Tung Pham",
  description:
    "Personal portfolio of Pham Chau Thanh Tung, a passionate software developer specializing in building exceptional digital experiences.",
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
        <InitialLoader duration={3100}>{children}</InitialLoader>
      </body>
    </html>
  );
}
