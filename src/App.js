import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./components/styles/global.css";
import Banner from "./components/banner/Banner";

function App() {
  return (
    <div>
      <Header />
      <main className="content">
        <Banner />
      </main>
      <Footer />
    </div>
  );
}

export default App;
