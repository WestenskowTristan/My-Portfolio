import { motion } from "framer-motion";
import pageTransition from "../PageTransition";
import React from "react";

const MyResume = () => {
  return (
    <motion.div initial="out" animate="in" exit="out" variants={pageTransition}>
      <div>
        <h1>What I know</h1>
      </div>
      <div className="resume-container">
        <div className="resume-download">
          <a
            href="https://docs.google.com/document/d/1uiSJtRoc3ssEyVYeyQqegc-D1hk3xHMADSv23g3d9QQ/edit?usp=sharing"
            download
          >
            Click to download Resume
          </a>
        </div>
        <div className="resume-items">
          <h2>Frontend Knowledge</h2>
          <ul>
            <li>HTML</li>
            <li>Css</li>
            <li>React</li>
            <li>JavaScrpit</li>
            <li>BootStrap</li>
            <li>Handlebars</li>
            <li>jQuery</li>
            <li>Responsive Design</li>
          </ul>
          <h2>Backend Knowledge</h2>
          <ul>
            <li>API's</li>
            <li>Express</li>
            <li>Node</li>
            <li>MongoDb</li>
            <li>MongoAtlas</li>
            <li>SQL</li>
            <li>Mongoose</li>
            <li>GraphQl</li>
            <li>REST</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default MyResume;
