// app/layout.js
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
  title: "अभिव्यक्ति | समसामयिक साहित्य को समर्पित",
  description:
    "अभिव्यक्ति - समसामयिक साहित्य की प्रमुख पत्रिका। कविता, कहानी, उपन्यास अंश, यात्रा वृतांत, बाल साहित्य, हास्य व्यंग्य और पुस्तक समीक्षा। प्रधान संपादक: रामचंद्र शुक्ल।",
  keywords: [
    "अभिव्यक्ति",
    "हिंदी साहित्य",
    "कविता",
    "कहानी",
    "उपन्यास",
    "यात्रा वृतांत",
    "बाल साहित्य",
    "हास्य व्यंग्य",
    "पुस्तक समीक्षा",
    "समसामयिक साहित्य",
    "रामचंद्र शुक्ल",
    "साहित्यिक पत्रिका",
    "hindi literature",
    "abhivyakti magazine",
  ],
  authors: [{ name: "रामचंद्र शुक्ल" }],
  creator: "अभिव्यक्ति",
  publisher: "अभिव्यक्ति",
  openGraph: {
    title: "अभिव्यक्ति - समसामयिक साहित्य को समर्पित",
    description:
      "कविता, कहानी, उपन्यास अंश, यात्रा वृतांत और अन्य साहित्यिक विधाओं का संग्रह।",
    type: "website",
    locale: "hi_IN",
    siteName: "अभिव्यक्ति",
  },
  twitter: {
    card: "summary_large_image",
    title: "अभिव्यक्ति - समसामयिक साहित्य को समर्पित",
    description:
      "हिंदी साहित्य की प्रमुख पत्रिका। कविता, कहानी, और अन्य साहित्यिक रचनाएं।",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://abhivyakti.com",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="hi">
      <head>
        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "अभिव्यक्ति",
              url: "https://abhivyakti.com",
              logo: "https://abhivyakti.com/logo.png",
              description: "समसामयिक साहित्य को समर्पित पत्रिका",
              founder: {
                "@type": "Person",
                name: "रामचंद्र शुक्ल",
              },
              contactPoint: {
                "@type": "ContactPoint",
                email: "abhivyakti1153@rediffmail.com",
                telephone: "+91-9454413842",
                contactType: "Editorial",
                areaServed: "IN",
                availableLanguage: ["Hindi"],
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "548 वी/125, विक्रम नगर",
                addressLocality: "लखनऊ",
                postalCode: "226011",
                addressRegion: "उत्तर प्रदेश",
                addressCountry: "IN",
              },
            }),
          }}
        />

        {/* Google Analytics - Replace with your actual GA ID */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        {/* Header */}
        <Navbar />

        {/* Main content */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}