import Cursor from "./ui/Cursor";
import Header from "./navigation/Header";
import Hero from "./hero/Hero";
import Intro from "./intro/Intro";
import Work from "./work/Work";
import Capabilities from "./capabilities/Capabilities";
import Journal from "./journal/Journal";
import Philosophy from "./philosophy/Philosophy";
import About from "./about/About";
import Contact from "./contact/Contact";

export default function Portfolio() {
  return (
    <>
      <Cursor />
      <Header />
      <main>
        <Hero />
        <Intro />
        <Work />
        <Capabilities />
        <Journal />
        <Philosophy />
        <About />
        <Contact />
      </main>
      <footer>
        <div className="footer-row">
          <span className="footer-brand">P@RTH</span>
          <span className="mono">Frontend developer / India</span>
          <span className="mono">© 2026 Parth Panchal</span>
        </div>
      </footer>
    </>
  );
}
