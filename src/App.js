import React, { useEffect } from "react";
import "./App.css";
import "./App_responsive.css";

import StickyHeader from "./components/StickyHeader/StickyHeader";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Project from "./components/Projects/projects";
import Skill from "./components/Skills/Skills";
import CF from "./components/CForm/CForm";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/scrolltotop";

import Swal from "sweetalert2";

function App() {
  useEffect(() => {
    Swal.fire({
      title: "Hi!",
      text: "Welcome to my Portfolio",
      imageUrl: "../logo.png",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Portfolio Logo",
    });
  }, []);

  return (
    <>
      <StickyHeader />
      <Hero />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <input type="hidden" autoFocus />
      </div>

      <ScrollToTop />
      <About />
      <Project />
      <Skill />
      <CF />
      <Footer />
    </>
  );
}

export default App;