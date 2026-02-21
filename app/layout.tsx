import type { Metadata } from "next";
import { Noto_Sans_Bengali, Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";

const notoSansBengali = Noto_Sans_Bengali({
  variable: "--font-bengali",
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const notoSerifBengali = Noto_Serif_Bengali({
  variable: "--font-heading-bengali",
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Y100 Smartwatch with 11 Straps | মাত্র ২৪৯০ টাকায়",
  description: "Y100 Smartwatch with 11 Straps – ব্লুটুথ কলিং, হার্ট রেট, ব্লাড প্রেশার, স্লিপ ট্র্যাকিং। অর্ডার করুন এখনই।",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" className={`${notoSansBengali.variable} ${notoSerifBengali.variable}`} suppressHydrationWarning>
      <body className="font-body antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
