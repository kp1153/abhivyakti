import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "अभिव्यक्ति — समसामयिक साहित्य को समर्पित",
  description:
    "अभिव्यक्ति — वर्तमान रचनाकारों की आवाज़, नई प्रतिभाओं को सामने लाने का माध्यम।",
  keywords: [
    "अभिव्यक्ति पत्रिका",
    "समसामयिक हिंदी साहित्य",
    "नए लेखक",
    "वर्तमान रचनाकार",
    "कविता",
    "कहानी",
    "आलोचना",
    "साहित्यिक पत्रिका",
    "नवीन साहित्य",
  ],
  authors: [{ name: "अभिव्यक्ति सम्पादक मंडल" }],
  creator: "अभिव्यक्ति",
  publisher: "अभिव्यक्ति",
  metadataBase: new URL("https://www.abhivyakti.xyz"),
  openGraph: {
    title: "अभिव्यक्ति — समसामयिक साहित्य को समर्पित",
    description:
      "वर्तमान रचनाकारों की कविता, कहानी, आलोचना और वैचारिकी का विश्वसनीय मंच।",
    type: "website",
    url: "https://www.abhivyakti.xyz",
    locale: "hi_IN",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="hi">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}