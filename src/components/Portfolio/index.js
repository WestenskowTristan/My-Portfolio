import React from "react";
import Image from "../Image";
import PortWorkImg from "../../assets/work-img/screenshot3.png";
import PortProjectImg from "../../assets/work-img/2021-07-04 (2).png";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div className="port-container">
      <div className="port-header">
        <h1>My Work</h1>
      </div>
      <div className="port-work-container">
        <div className="">
          <a href="https://github.com/alyssawinn/a-night-in">
            <Image src={PortWorkImg} alt="An image of my A night in project" />
          </a>
        </div>
        <div className="">
          <a href="https://dudley-doright-93373.herokuapp.com/">
            <Image
              src={PortProjectImg}
              alt="An image of my Savannah's Sweets project"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
