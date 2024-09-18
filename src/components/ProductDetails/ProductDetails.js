import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { baseurl } from "../../constants";
import Breadcrumb from "../Breadcrumbs/Breadcrumbs";
import Loading from "../Loading/Loading";
import { toast, ToastContainer } from "react-toastify";
import { CartContext } from "../../Context/CartContext";
import "./ProductDetails.css";

function ProductDetails() {
  const { name } = useParams();
  const { addToCart } = useContext(CartContext);
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  const addToCartMessage = () => {
    toast.success("Product Successfully Added To Cart!", {
      position: "bottom-right",
      autoClose: 5000,
    });
  };
  useEffect(() => {
    fetch(baseurl + "product/get-product/" + name)
      .then((a) => a.json())
      .then((res) => {
        setProduct({ ...res.data });
        console.log(res.data);
        setLoading(false);
      })
      .catch((res) => {
        console.log(res);
      });
  }, []);

  if (loading) return <Loading />;

  return (
    <>
      <Breadcrumb style={{ paddingTop: "130px", paddingLeft: "35px" }} />
      <div className="main-container" style={{ paddingTop: "130px" }}>
        <ToastContainer />
        <img src={baseurl + product.image} className="image" alt={product.name} />
        <div className="details">
          <h2 className="name">{product.name}</h2>
          <p className="p">
            <b>Category:</b>
            {product.category?.name}
          </p>
          {product.sub_category?.name && (
            <p className="p" style={{ marginBottom: "2rem" }}>
              <b>Sub Category:</b>
              {product.sub_category?.name}
            </p>
          )}
          {product.description_detail && (
            <>
              <b style={{marginBottom:'0.8rem'}}>Description:</b>{" "}
              <p className="desc">{product.description_detail}</p>
            </>
          )}
          <button
            className="order-now-button"
            onClick={() => {
              addToCart(product);
              addToCartMessage();
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
      {product.category.products.filter((obj) => product.id !== obj.id).length >
        0 && <h2 className="related-title">RELATED PRODUCTS</h2>}
      <div className="related-products">
        {product.category.products
          .filter((obj) => product.id !== obj.id)
          .map((related_product, index) => {
            return (
              <Link
                to={`/products/${product.category.name}/${related_product.name}`}
                key={related_product.id}
                className="product-card"
              >
                <img
                  src={baseurl + related_product.image}
                  alt={related_product.name}
                  className="product-image"
                />
                <h4 className="product-name">{related_product.name}</h4>
                <p className="product-desc">{related_product.description}</p>
                <button
                  className="order-now-button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    addToCart(related_product);
                    addToCartMessage();
                  }}
                >
                  Add to Cart
                </button>
              </Link>
            );
          })}
      </div>
    </>
  );
}

export default ProductDetails;
