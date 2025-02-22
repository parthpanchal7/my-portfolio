import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./components/styles/global.css";
import Banner from "./components/banner/Banner";
import About from "./components/about/About";
import Skills from "./components/skill-snapshots/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div>
      <Header />
      <main className="content">
        <Banner />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
