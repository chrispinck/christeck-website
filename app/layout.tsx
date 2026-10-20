import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://christeck.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "CHRISTECK | Electrical Engineering Solutions",
    template: "%s | CHRISTECK",
  },

  description:
    "CHRISTECK provides LV switchboard engineering, IEC 61439 design verification, AS/NZS 61439 compliance support, temperature rise assessment, busbar design and technical documentation.",

  applicationName: "CHRISTECK",

  keywords: [
    "CHRISTECK",
    "Electrical Engineering Services",
    "LV Switchboard Engineering",
    "Low Voltage Switchboard Design",
    "IEC 61439 Design Verification",
    "AS/NZS 61439 Compliance",
    "IEC TR 60890 Temperature Rise Calculation",
    "Switchboard Temperature Rise Assessment",
    "Busbar Design and Sizing",
    "Switchboard Technical Documentation",
    "Modular Enclosure Solutions",
    "Electrical Engineering India",
    "Australian Switchboard Engineering",
  ],

  authors: [
    {
      name: "CHRISTECK",
      url: siteUrl,
    },
  ],

  creator: "CHRISTECK",
  publisher: "CHRISTECK",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "CHRISTECK",
    title: "CHRISTECK | Electrical Engineering Solutions",
    description:
      "Engineering Knowledge. Engineering Services. Professional support for LV switchboard engineering, IEC 61439 design verification, temperature rise assessment and technical documentation.",
    locale: "en_IN",
    images: [
      {
        url: "/images/hero-engineering-v1.png",
        width: 840,
        height: 840,
        alt: "CHRISTECK low-voltage switchboard engineering solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "CHRISTECK | Electrical Engineering Solutions",
    description:
      "Professional LV switchboard engineering, IEC 61439 design verification, temperature rise assessment and technical documentation.",
    images: ["/images/hero-engineering-v1.png"],
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

  category: "engineering",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#176C73",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="bg-white text-slate-900 antialiased">
        <Navbar />

        <main className="min-h-screen pt-20">{children}</main>

        <Footer />
      </body>
    </html>
  );
}