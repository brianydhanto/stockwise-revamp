import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";

export const metadata: Metadata = {
  title: 'Stockwise',
  description: 'Kata siapa investasi saham itu susah? Stockwise adalah platform edukasi investasi dan pengelolaan keuangan yang terbaik dan terlengkap di Indonesia. Gabung komunitas saham dan investasi Stockwise, dan mulai belajar untuk melipatgandakan asset kamu sejak dini!',
  keywords: ['Investasi', 'Saham', 'Edukasi', 'Keuangan', 'Stockwise', 'Indonesia'],
};

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
      </head>
      <body>
        <Header/>
        <main className="px-20">{children}</main>
        <footer className="footer">
          <div className="flex justify-between gap-4">
            <div className="self-center text-xs md:text-xl cursor-pointer">PT Stockwise Karya Digital</div>
            <div className="text-xs md:text-xl">info@stockwise.id | +62 852-8386-1223 (WA Only)</div>
          </div>
        </footer>
      </body>
    </html>
  );
}
