import Cursor from "../ui/Cursor";
import Header from "./Header";
import Footer from "./Footer";

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Cursor />
      <Header />
      {children}
      <Footer />
    </>
  );
}
