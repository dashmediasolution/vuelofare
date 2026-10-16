 import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
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
const PHONE_CONVERSION_ID ="AW-18507429014/02XMCOX_w5sdEJbpg_lE";
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
        {/* Google tag (gtag.js) - Google Ads */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
          strategy="afterInteractive"
        />

        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];

            window.gtag = window.gtag || function() {
              window.dataLayer.push(arguments);
            };

            window.gtag('js', new Date());

            window.gtag('config', '${GOOGLE_ADS_ID}');
          `}
        </Script>

        {/* Google Ads - Phone Call Conversion Tracking */}
        <Script
          id="google-phone-conversion"
          strategy="afterInteractive"
        >
          {`
            window.gtag('config', '${PHONE_CONVERSION_ID}', {
              phone_conversion_number: '${PHONE_CONVERSION_NUMBER}'
            });
          `}
        </Script>

{/* Sticky Disclaimer + Navbar */}
<div className="sticky top-0 z-50 w-full">
  {/* Disclaimer */}
  <div className="border-y border-[#dcebea] bg-[#eaf7f6] px-3 py-2 sm:px-5 sm:py-3">
    <p className="mx-auto max-w-[1280px] text-center text-[11px] leading-4 text-[#355c68] sm:text-sm sm:leading-5">
      <strong className="font-bold text-[#073452]">
        Disclaimer:
      </strong>{" "}
      Vuelofare is an independent, third-party travel agency
      and is not directly affiliated with, authorized by, or
      endorsed by any specific airline.
    </p>
  </div>

  {/* Navbar */}
  <Navbar />
</div>

<main className="min-h-screen">
  {children}
  <MobileCallButton />
</main>

<Footer />


        {/* Google tag (gtag.js) - Google Analytics 4 (GA4) */}
        <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
      </body>
    </html>
  );
}
 