import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { baseurl } from "../../constants";
import { motion } from "framer-motion";
import Breadcrumb from "../Breadcrumbs/Breadcrumbs";
import { Row } from "react-bootstrap";
import Loading from "../Loading/Loading";
import "./ProductCategory.css";

const ProductCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation().pathname;
  useEffect(() => {
    fetch(baseurl + "product/get-categories/")
      .then((a) => a.json())
      .then((res) => {
        setCategories([...res.data]);
        setLoading(false);
      })
      .catch((res) => {
        console.log(res);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;
  const containerStyle = location !== "/" ? { marginTop: "130px" } : {};

  return (
    <div className="container mx-auto p-6" >
      {!location === "/" && <Breadcrumb style={{ marginTop: "130px" }} />}

      <div className="content-1-details" style={containerStyle}>
        <Row>
          <div className="section-heading">
            <div className=  "heading-text">Our Products</div>
            <div className="heading-desc">An overview of what we do.</div>
          </div>
        </Row>
      </div>

      <div className="product-category">
        {categories.map((category) => (
          <div>
            <Link
              to={`/products/${category.name}`}
              key={category.id}
              className="product-category__card"
            >
              <img
                src={baseurl + category.image}
                alt=""
                style={{
                  width: "200px",
                  height: "200px",
                  borderRadius: "2rem",
                }}
              />
            </Link>
            <span
              style={{
                fontSize: "15px",
                display: "flex",
                fontWeight: "bold",
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {category.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategories;
