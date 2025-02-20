import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./components/styles/global.css";
import Banner from "./components/banner/Banner";
import About from "./components/about/About";
import Skills from "./components/skill-snapshots/Skills";

function App() {
  return (
    <div>
      <Header />
      <main className="content">
        <Banner />
        <About />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}

export default App;
