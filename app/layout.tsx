import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import OrganizationSchema from "@/components/seo/OrganizationSchema";

const siteUrl = "https://christeck.in";

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

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "LV Switchboard Engineering & IEC 61439",
    template: "%s | CHRISTECK",
  },

  description:
    "CHRISTECK provides professional LV switchboard engineering, IEC 61439 design verification, AS/NZS 61439 support, temperature rise assessment, busbar design and technical documentation.",

  applicationName: "CHRISTECK",

  keywords: [
    "CHRISTECK",
    "LV Switchboard Engineering",
    "LV Switchboard Design",
    "IEC 61439 Design Verification",
    "AS/NZS 61439 Engineering",
    "IEC TR 60890 Temperature Rise Assessment",
    "LV Switchboard Temperature Rise",
    "Busbar System Design",
    "Switchboard Technical Documentation",
    "Electrical Engineering Services",
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

  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "CHRISTECK",
    title: "LV Switchboard Engineering & IEC 61439 | CHRISTECK",
    description:
      "Engineering Knowledge. Engineering Services. Professional LV switchboard engineering, IEC 61439 design verification, temperature rise assessment and technical documentation.",
    locale: "en_IN",
    images: [
      {
        url: "/images/hero-engineering-v1.png",
        width: 1536,
        height: 1024,
        alt: "CHRISTECK LV switchboard engineering solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "LV Switchboard Engineering & IEC 61439 | CHRISTECK",
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
        <OrganizationSchema />

        <Navbar />

        <main className="min-h-screen pt-20">{children}</main>

        <Footer />
      </body>
    </html>
  );
}