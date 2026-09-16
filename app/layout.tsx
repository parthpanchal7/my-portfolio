import type { Metadata, Viewport } from "next";
import "../src/components/portfolio.css";
import "./work/work.css";
import "./work/[slug]/project.css";
import "./work/[slug]/case-study.css";
import "./notes/notes.css";
import "./mobile.css";
import SiteChrome from "../src/components/navigation/SiteChrome";
import StructuredData from "./structured-data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://revamped-portfolio.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Parth Panchal — Frontend Developer",
    template: "%s | Parth Panchal",
  },
  description:
    "Portfolio of Parth Panchal, a frontend developer building thoughtful interfaces with React, Next.js, WordPress, Shopify and JavaScript.",
  applicationName: "Parth Panchal Portfolio",
  authors: [{ name: "Parth Panchal", url: siteUrl }],
  creator: "Parth Panchal",
  publisher: "Parth Panchal",
  keywords: [
    "Parth Panchal",
    "frontend developer",
    "React developer",
    "Next.js developer",
    "WordPress developer",
    "Shopify developer",
    "WooCommerce developer",
    "JavaScript developer",
  ],
  alternates: { canonical: "/" },
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
    url: siteUrl,
    siteName: "Parth Panchal",
    title: "Parth Panchal — Frontend Developer",
    description:
      "Portfolio of Parth Panchal, a frontend developer building thoughtful interfaces across React, WordPress, Shopify and JavaScript.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Parth Panchal — Frontend Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Parth Panchal — Frontend Developer",
    description:
      "Frontend development across React, Next.js, WordPress, Shopify, WooCommerce and JavaScript.",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#f3f1eb",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <StructuredData />
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
