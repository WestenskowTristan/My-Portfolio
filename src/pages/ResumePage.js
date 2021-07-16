import React from "react";
import Resume from "../components/Resume";
import Footer from "../components/Footer";
import "./pages.css";

const ResumePage = () => {
  return (
    <div className="page-container">
      <div className="page-content-container">
        <Resume />
      </div>
      <Footer />
    </div>
  );
};

export default ResumePage;
