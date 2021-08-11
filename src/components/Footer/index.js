import React from "react";
import Image from "../Image";
import linkedinImage from "../../assets/linkedin.png";
import gitHubImage from "../../assets/GitHub-Mark.png";
import stackImage from "../../assets/overflow-logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <Image
        height="50px"
        width="50px"
        src={linkedinImage}
        link="https://www.linkedin.com/in/tristan-westenskow-814222202/"
        alt="An image for my linkedin account"
      />
      <Image
        height="50px"
        width="50px"
        src={gitHubImage}
        link="https://github.com/WestenskowTristan?tab=repositories"
        alt="GitHub logo link"
      />
      <Image
        height="50px"
        width="50px"
        src={stackImage}
        link="https://stackoverflow.com/users/story/16218578?newreg=f7cfa2c544e543ac94a8e5acc8cd9a0e&_=1"
        alt="stack overflow logo link"
      />
      {/* <Image
        height="50px"
        width="50px"
        src={resumeImage}
        link=""
        alt="Resume logo link"
      /> */}
    </div>
  );
};

export default Footer;
