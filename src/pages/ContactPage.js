import React from "react";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import "./pages.css";

const ContactPage = () => {
  return (
    <div className="page-container">
      <div className="page-content-container">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
