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
  title: "Hamara Morcha | News & Analysis",
  description: "Hamara Morcha - Latest news from World, India, Performing Arts, Academics, Health and more. A struggle for dignity and livelihood.",
  keywords: [
    "Hamara Morcha",
    "news",
    "world news",
    "india news",
    "performing arts",
    "academics",
    "health news",
  ],
  metadataBase: new URL('https://www.hamaramorcha.com'),
  openGraph: {
    title: "Hamara Morcha",
    description: "Latest news and analysis - A struggle for dignity and livelihood",
    url: "https://www.hamaramorcha.com",
    siteName: "Hamara Morcha",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Hamara Morcha',
      }
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hamara Morcha",
    description: "Latest news and analysis",
    images: ['/og-image.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics (untouched) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}