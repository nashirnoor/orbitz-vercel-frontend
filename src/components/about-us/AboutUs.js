import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import Carousel from "react-bootstrap/Carousel";
import Breadcrumb from "../Breadcrumbs/Breadcrumbs";
import "./AboutUs.css";

import productImage3 from "../../assets/aboutus/about-us-img.png";

function AboutUs() {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}
    >
      <Container>
        <Row style={{ width: "100%" }}>
          {/* <Col>
            <div className="oil-banner7">
              <div className="overlay7">
                <div className="oil-title7">
                  <div className="about-us-heading">
                    Welcome To
                    <span className="highlighted-text">{" "}Orbitz</span>
                  </div>
                </div>
              </div>
            </div>
          </Col> */}
        </Row>
        <Breadcrumb style={{marginTop:"8rem"}}/>
        <div className="content-1-details">
          <h1 className="heading"> ABOUT ORBITZ</h1>
        </div>
        <Row>
          <div className="aboutus_container">
            <Col>
              <div className="content-1-img-section">
                <Carousel pause={false}>
                  <Carousel.Item interval={2000}>
                    <div className="carousel-img-wrapper">
                      <img
                        src={productImage3}
                        alt="oil pipe"
                        className="carousel-img"
                      />
                    </div>
                  </Carousel.Item>
                </Carousel>
              </div>
            </Col>

            <Col>
              <div className="content-1">
                <h1 className="heading"> WHO WE ARE</h1>
                <div className="content-1-details" >
                  <p className="para">
                    We are the premier trader & Provider of engineering,
                    construction, and trading in the state of Qatar. Moreover,
                    we are the major suppliers of oil field equipment,
                    electrical & plumbing accessories, hardware materials,
                    safety materials, paint materials, and all construction
                    materials. We can also supply other similar items as per
                    your requirements with skilled employees and vast
                    experience. The achievement is the ability to provide the
                    highest quality products and services on time. The products
                    and services we supply are proven dependable and backed by
                    the best warranties and best products from the international
                    market. We represent and deal with several companies,
                    manufactures and stockiest worldwide with our support team
                    in the Middle East. We are in a position to offer you
                    competitive prices and quick deliveries with the highest
                    levels of quality, safety, and technical expertise.
                  </p>
                </div>
              </div>
            </Col>
          </div>
        </Row>
      </Container>
    </motion.div>
  );
}

export default AboutUs;
