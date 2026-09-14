import type { ReactNode } from "react";
import Cursor from "../ui/Cursor";
import Header from "./Header";
import Footer from "./Footer";

type SiteChromeProps = {
  children: ReactNode;
};

export default function SiteChrome({ children }: SiteChromeProps) {
  return (
    <>
      <Cursor />
      <Header />
      {children}
      <Footer />
    </>
  );
}
