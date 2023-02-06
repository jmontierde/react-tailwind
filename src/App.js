import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
   
      <Navbar/>
      <Hero/>
      <Features/>
      <Testimonials/>
      <Cta/>
      <Footer/>
    </div>
  );
}

export default App;
