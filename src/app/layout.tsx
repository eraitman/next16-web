import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#FFCD00',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://cliffenglish.com'),
  title: {
    default: "벼랑영어 | 단호, 정직, 솔직한 성과",
    template: "%s | 벼랑영어"
  },
  description: "실제 수강생의 데이터로 증명하는 단호하고 정직한 영어 완성, 벼랑영어입니다.",
  keywords: ["영어회화", "홍대영어학원", "성인영어", "벼랑영어"],
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://cliffenglish.com',
    siteName: '벼랑영어',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '벼랑영어'
      }
    ]
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${inter.variable}`}>
      <body className="antialiased font-sans min-h-screen flex flex-col pt-[60px] md:pt-[80px]">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
