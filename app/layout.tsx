import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { ContactModalProvider } from "./context/ContactModalContext";
import ContactModalWrapper from "./context/ContactModalWrapper";
import { Suspense } from "react";
import fs from "fs";
import path from "path";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AP Controls",
  icons: {
    icon: [{ url: "/icon.png", sizes: "32x32", type: "image/png" }],
  },
  description:
    "AP Controls is a trusted provider of engineering solutions and industrial components for bulk material handling systems across the Asia-Pacific region.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-6165VZT7JM"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6165VZT7JM');
          `}
        </Script>
      </head>
      <Suspense>
        <body className={`${inter.variable} ${geistMono.variable} antialiased`}>
          <ContactModalProvider>
            {children}
            <ContactModalWrapper />
          </ContactModalProvider>
        </body>
      </Suspense>
    </html>
  );
}
