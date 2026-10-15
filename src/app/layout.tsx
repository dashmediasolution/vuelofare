 import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import MobileCallButton from "./_components/MobileCallButton";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://vuelofare.com";

const SITE_NAME = "Vuelofare";

const GOOGLE_ADS_ID = "AW-18507429014";
const GA_MEASUREMENT_ID = "G-0PTZER082F";
const PHONE_CONVERSION_LABEL = "02XMCOX_w5sdEJbpg_lE";
const PHONE_CONVERSION_NUMBER = "(877) 881-0087";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Vuelofare | Flight Booking & Travel Assistance",
    template: "%s | Vuelofare.com",
  },

  description:
    "Get expert assistance with flight bookings, flight changes, cancellations, baggage information, travel planning, itineraries, and travel support.",

  applicationName: SITE_NAME,

  keywords: [
    "flight booking",
    "flight booking assistance",
    "travel assistance",
    "flight changes",
    "flight cancellation",
    "flight information",
    "baggage assistance",
    "travel planning",
    "international flights",
    "domestic flights",
    "USA flights",
  ],

  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: SITE_NAME,
    title: "Vuelofare.com | Flight Booking & Travel Assistance",
    description:
      "Get expert assistance with flight bookings, flight changes, cancellations, baggage information, travel planning, and travel support.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vuelofare - Flight Booking and Travel Assistance",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Vuelofare | Flight Booking & Travel Assistance",
    description:
      "Expert assistance for flight bookings, changes, cancellations, travel planning, and travel support.",
    images: ["/images/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  category: "travel",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#159b9c",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geist.variable} min-h-screen bg-white antialiased`}
      >
        {/* Google Ads and GA4 shared Google tag */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
          strategy="afterInteractive"
        />

        <Script id="google-tracking" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            window.gtag = gtag;

            gtag('js', new Date());

            // Google Ads
            gtag('config', '${GOOGLE_ADS_ID}');

            // Google Analytics 4
            gtag('config', '${GA_MEASUREMENT_ID}');

            // Google Ads phone call conversion tracking
            gtag(
              'config',
              '${GOOGLE_ADS_ID}/${PHONE_CONVERSION_LABEL}',
              {
                phone_conversion_number: '${PHONE_CONVERSION_NUMBER}'
              }
            );
          `}
        </Script>

        <Navbar />

        <main className="min-h-screen">
          {children}
          <MobileCallButton />
        </main>

        <Footer />
      </body>
    </html>
  );
}
 