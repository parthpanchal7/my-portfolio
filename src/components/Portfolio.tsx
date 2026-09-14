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
  );
}
