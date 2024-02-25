import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Service from "./components/Service";
import Contact from "./components/Contact";
// Import other components as needed

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutMe />
      <Skills />
      <Service />
      <Contact />
      {/* Render other components here */}
    </div>
  );
}

export default App;
