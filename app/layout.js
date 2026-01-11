// app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/**
 * Next.js 14+ / 15 / 16 compatible Metadata API
 * (root layout – server side, crawler safe)
 */
export const metadata = {
  metadataBase: new URL("https://www.abhivyakti.xyz"),
  title: {
    default: "अभिव्यक्ति | समसामयिक साहित्य को समर्पित",
    template: "%s | अभिव्यक्ति",
  },
  description:
    "अभिव्यक्ति - हिंदी साहित्य की समसामयिक पत्रिका। कविता, कहानी, उपन्यास अंश, यात्रा वृतांत, बाल साहित्य, हास्य व्यंग्य, समीक्षा और आत्मकथा का संग्रह।",
  keywords: [
    "अभिव्यक्ति",
    "हिंदी साहित्य",
    "कविता",
    "कहानी",
    "उपन्यास",
    "यात्रा वृतांत",
    "बाल साहित्य",
    "हास्य व्यंग्य",
    "समीक्षा",
    "आत्मकथा",
    "साहित्यिक पत्रिका",
  ],
  openGraph: {
    title: "अभिव्यक्ति | समसामयिक साहित्य को समर्पित",
    description:
      "हिंदी साहित्य की समसामयिक पत्रिका - कविता, कहानी, उपन्यास और विविध साहित्यिक विधाओं का संग्रह",
    url: "https://www.abhivyakti.xyz",
    siteName: "अभिव्यक्ति",
    locale: "hi_IN",
    type: "website",
    images: [
      {
        url: "https://www.abhivyakti.xyz/og-image.png",
        width: 1200,
        height: 630,
        alt: "अभिव्यक्ति - समसामयिक साहित्य को समर्पित",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "अभिव्यक्ति | समसामयिक साहित्य को समर्पित",
    description: "हिंदी साहित्य की समसामयिक पत्रिका",
    images: ["https://www.abhivyakti.xyz/og-image.png"],
  },
  alternates: {
    canonical: "https://www.abhivyakti.xyz",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="hi">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-gray-50`}
      >
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}