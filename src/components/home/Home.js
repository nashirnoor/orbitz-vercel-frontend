import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import Carousel from "react-bootstrap/Carousel";
import { Col, Container, Row } from "react-bootstrap";
import "./Home.css";
import video from "../../assets/banner-bg-video.mp4";
import VisionSection from "../vision/VisionSection";
import { Link } from "react-router-dom";
import CategorySection from "../CategorySection/CategorySection";
import "slick-carousel/slick/slick-theme.css";

import productImage3 from "../../assets/aboutus/about-us-img.png";

import brand1 from "../../assets/brands/brand1.png";
import brand2 from "../../assets/brands/brand2.png";
import brand3 from "../../assets/brands/brand3.png";
import brand4 from "../../assets/brands/brand4.png";
import brand5 from "../../assets/brands/brand5.png";
import brand6 from "../../assets/brands/brand6.png";
import brand7 from "../../assets/brands/brand7.png";
import brand8 from "../../assets/brands/brand8.png";
import brand9 from "../../assets/brands/brand9.png";
import brand10 from "../../assets/brands/brand10.png";
import brand11 from "../../assets/brands/brand11.png";
import brand12 from "../../assets/brands/brand12.png";
import brand13 from "../../assets/brands/brand13.png";
import brand14 from "../../assets/brands/brand14.png";
import brand15 from "../../assets/brands/brand15.png";
import brand16 from "../../assets/brands/brand16.png";
import brand17 from "../../assets/brands/brand17.png";
import brand18 from "../../assets/brands/brand18.png";
import brand19 from "../../assets/brands/brand19.png";
import brand20 from "../../assets/brands/brand20.png";
import brand21 from "../../assets/brands/brand21.png";
import brand22 from "../../assets/brands/brand22.png";
import brand23 from "../../assets/brands/brand23.png";
import brand24 from "../../assets/brands/brand24.png";
import brand25 from "../../assets/brands/brand25.png";

const clientImage = [
  {
    img: brand1,
    id: "11",
  },
  {
    img: brand2,
    id: "12",
  },
  {
    img: brand3,
    id: "13",
  },
  {
    img: brand4,
    id: "14",
  },
  {
    img: brand5,
    id: "15",
  },
  {
    img: brand6,
    id: "16",
  },
  {
    img: brand7,
    id: "17",
  },
  {
    img: brand8,
    id: "18",
  },
  {
    img: brand9,
    id: "19",
  },
  {
    img: brand10,
    id: "20",
  },
  {
    img: brand11,
    id: "21",
  },
  {
    img: brand12,
    id: "22",
  },
  {
    img: brand13,
    id: "23",
  },
  {
    img: brand14,
    id: "24",
  },
  {
    img: brand15,
    id: "25",
  },
  {
    img: brand16,
    id: "26",
  },
  {
    img: brand17,
    id: "27",
  },
  {
    img: brand18,
    id: "28",
  },
  {
    img: brand19,
    id: "29",
  },
  {
    img: brand20,
    id: "30",
  },
  {
    img: brand21,
    id: "31",
  },
  {
    img: brand22,
    id: "32",
  },
  {
    img: brand23,
    id: "33",
  },
  {
    img: brand24,
    id: "34",
  },
  {
    img: brand25,
    id: "35",
  },
];

function Home() {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}
    >
      <div className="home">
        <div className="hero">
          <video autoPlay loop muted playsInline id="video">
            <source src={video} type="video/mp4" />
          </video>
          <div className="overlay10"></div>
        </div>

        <Container>
          <Row>
            <Col sm={12} md={6}>
              <div className="content-1-img-section">
                <Carousel pause={false}>
                  <Carousel.Item interval={2000}>
                    <div className="content-1-img">
                      <img src={productImage3} alt="oil pipe" />
                    </div>
                  </Carousel.Item>
                </Carousel>
              </div>
            </Col>

            <Col>
              <div className="content-1">
                <div className="content-1-details">
                  <h1 className="heading">about the Orbitz</h1>
                </div>
                <div className="content-1-details">
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
                    market........
                  </p>
                </div>
                <div className="content-1-details">
                  <Link to={"aboutus"}>
                    <button className="content-btn">MORE INFO</button>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>

          <CategorySection />
        </Container>

        <VisionSection />
      </div>
    </motion.div>
  );
}

export default Home;
