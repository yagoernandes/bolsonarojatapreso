import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bolsonaro já ta preso?",
  description: "Tenha a resposta para essa pergunta em tempo real",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-6MK159NH1G"
        strategy="afterInteractive"
      />

      <Script strategy="afterInteractive" id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-6MK159NH1G');
        `}
      </Script>
    </html>
  );
}
