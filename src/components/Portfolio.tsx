import Hero from "./hero/Hero";
import About from "./about/About";
import Work from "./work/Work";
import Capabilities from "./capabilities/Capabilities";
import Journal from "./journal/Journal";
import Philosophy from "./philosophy/Philosophy";
import Intro from "./intro/Intro";
import Contact from "./contact/Contact";

export default function Portfolio() {
  return (
    <main>
      <Hero />
      <About />
      <Work />
      <Capabilities />
      <Journal />
      <Philosophy />
      <Intro />
      <Contact />
    </main>
  );
}
