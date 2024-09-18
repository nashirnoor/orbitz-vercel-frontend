import React, { useState } from "react";
import contentLogo from "../../assets/content-logo/Frame 4 1.png";
import contentLogo2 from "../../assets/content-logo/Frame 5 1.png";
import { motion } from "framer-motion";
import "./VisionSection.css";

function VisionSection() {
  const [selectedContent, setSelectedContent] = useState("vision");

  const handleClick = (content) => {
    setSelectedContent(content);
  };

  return (
    <div className="container" style={{ marginTop: "6rem" }}>
      <div className="section-heading">
        <div className="heading-text">Vision & Mission</div>
        <div className="heading-desc">What are we doing, and why are we doing it.</div>
      </div>
      <div className="button-group">
        <button
          onClick={() => handleClick("vision")}
          className={`button ${selectedContent === "vision" ? "active" : ""}`}
        >
          OUR VISION
        </button>
        <button
          onClick={() => handleClick("mission")}
          className={`button ${selectedContent === "mission" ? "active" : ""}`}
        >
          OUR MISSION
        </button>
      </div>
      <div className="section-content3">
        {selectedContent === "vision" && (
          <div className="content3">
            <motion.div animate={{ scale: [1, 1.2, 1] }} className="v-icon">
              <img src={contentLogo} alt="Vision Logo" />
            </motion.div>
            <div className="content3-heading">OUR VISION</div>
            <div className="line"></div>
            <div className="content3-detail">
              The most reliable industrial product distributor in Qatar. A
              progressive and proactive industrial supplier, who is capable of
              competing in any all segments of the market place which we are.
            </div>
          </div>
        )}
        {selectedContent === "mission" && (
          <div className="content3">
            <motion.div
              animate={{ rotate: [20, -30, 20] }}
              whileTap={{ scale: 0.8, rotate: 90, borderRadius: "100%" }}
              className="v-icon"
            >
              <img src={contentLogo2} alt="Mission Logo" />
            </motion.div>
            <div className="content3-heading">OUR MISSION</div>
            <div className="line"></div>
            <div className="content3-detail">
              We aim to supply the finest quality product to customers. The key
              purpose of our organization is to assist customers to get the
              preferred quality product, thereby supporting them to meet their
              needs.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default VisionSection;
