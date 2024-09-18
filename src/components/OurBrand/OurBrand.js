import React from "react";
import "./OurBrand.css";
import { Row } from "react-bootstrap";
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
import brand26 from "../../assets/brands/brand26.png";
import Breadcrumb from "../Breadcrumbs/Breadcrumbs";

const brands = [
  { id: 1, name: "Brand One", image: brand1 },
  { id: 2, name: "Brand Two", image: brand2 },
  { id: 3, name: "Brand Three", image: brand3 },
  { id: 4, name: "Brand Four", image: brand4 },
  { id: 5, name: "Brand Five", image: brand5 },
  { id: 6, name: "Brand Six", image: brand6 },
  { id: 7, name: "Brand Seven", image: brand7 },
  { id: 8, name: "Brand Eight", image: brand8 },
  { id: 9, name: "Brand Nine", image: brand9 },
  { id: 10, name: "Brand Ten", image: brand10 },
  { id: 11, name: "Brand Eleven", image: brand11 },
  { id: 12, name: "Brand Twelve", image: brand12 },
  { id: 13, name: "Brand Thirteen", image: brand13 },
  { id: 14, name: "Brand Fourteen", image: brand14 },
  { id: 15, name: "Brand Fifteen", image: brand15 },
  { id: 16, name: "Brand Sixteen", image: brand16 },
  { id: 17, name: "Brand Sixteen", image: brand17 },
  { id: 18, name: "Brand Sixteen", image: brand18 },
  { id: 19, name: "Brand Sixteen", image: brand19 },
  { id: 20, name: "Brand Sixteen", image: brand20 },
  { id: 21, name: "Brand Sixteen", image: brand21 },
  { id: 22, name: "Brand Sixteen", image: brand22 },
  { id: 23, name: "Brand Sixteen", image: brand23 },
  { id: 24, name: "Brand Sixteen", image: brand24 },
  { id: 25, name: "Brand Sixteen", image: brand25 },
  { id: 26, name: "Brand Sixteen", image: brand26 },
];

const OurBrand = () => {
  return (
    <div className="our-brand-container">
      <Breadcrumb style={{ marginTop: '130px' }} />
      <Row>
        <div className="section-heading" style={{ marginBottom: '5rem' }}>
          <div className="heading-text">Our Brands</div>
          <div className="heading-desc">
            Checkout our best brands that we are successfully trading!
          </div>
        </div>
      </Row>
      <div className="brand-grid">
        {brands.map((brand) => (
          <div key={brand.id} className="brand-card">
            <img src={brand.image} alt={brand.name} className="brand-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurBrand;
