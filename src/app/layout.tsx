import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Providers from "./providers";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import "./globals.css";
import { Suspense } from "react";
import { Spinner } from "@/components/UI/Spinner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NextCinema",
  description: "Лучший сервис для просмотра рейтинга фильмов и не только!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Suspense fallback={<Spinner />}>
          <Providers>
            <Header />
            <main className="flex-1 container mx-auto">{children}</main>
            <Footer />
          </Providers>
        </Suspense>
      </body>
    </html>
  );
}
