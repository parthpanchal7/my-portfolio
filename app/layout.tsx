import type { Metadata } from "next";
import "../src/components/portfolio.css";
import "./work/work.css";
import "./work/[slug]/project.css";

export const metadata: Metadata = {
  title: "Parth Panchal — Frontend Developer",
  description: "Parth Panchal — frontend developer building thoughtful interfaces for the web.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
