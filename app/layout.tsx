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
  title: "NextCinema",
  description: "Лучший сервис для просмотра рейтинга фильмов и не только!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <header className="w-full p-5 flex items-center bg-dark text-white">
          <h2 className="text-2xl font-bold  uppercase">Next<span className="text-primary uppercase">Cinema</span></h2>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="w-full p-10 flex items-center justify-between bg-dark text-white">
          <h2 className="text-2xl font-bold  uppercase">Next<span className="text-primary uppercase">Cinema</span></h2>
          <span>© {new Date().getFullYear()} Kinomore</span>
        </footer>
      </body>
    </html>
  );
}
