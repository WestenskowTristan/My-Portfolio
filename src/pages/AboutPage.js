import React from "react";
import About from "../components/About";
import Footer from "../components/Footer";
import "./pages.css";

const AboutPage = () => {
  return (
    <div className="page-container">
      <div className="page-content-container">
        <About />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
