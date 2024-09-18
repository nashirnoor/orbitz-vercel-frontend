// import React, { useContext, useEffect, useState } from "react";
// import { Link, renderMatches, useParams } from "react-router-dom";
// import { CartContext } from "../../Context/CartContext";
// import { ToastContainer, toast } from "react-toastify";
// import { baseurl } from "../../constants";
// import Breadcrumb from "../Breadcrumbs/Breadcrumbs";
// import Loading from "../Loading/Loading";
// import "./ProductList.css";

// const ProductListing = () => {
//   const { cat_name } = useParams();
//   if (!cat_name) {
//     window.href = '/'
//   }
//   const [loading, setLoading] = useState(true)
//   const [selectedCategory, setSelectedCategory] = useState({})
//   const { addToCart } = useContext(CartContext);

//   useEffect(() => {
//     fetch(baseurl + 'product/get-category/' + cat_name)
//       .then(a => a.json()).then(
//         (res) => {
//           setSelectedCategory({ ...res.data })
//           console.log(res.data)
//           setLoading(false)
//         }).catch(res => {
//           console.log(res)
//         })
//   }, [])

//   const addToCartMessage = () => {
//     toast.success("Product Successfully Added To Cart!", {
//       position: "bottom-right",
//       autoClose: 5000,
//     });
//   };

//   if (!selectedCategory) {
//     return <div>Category not found</div>;
//   }

//   if (loading) return <Loading />

//   return (
//     <div className="container">
//       <ToastContainer />
//       <h2 className="category-title">{selectedCategory.name}</h2>
//       <Breadcrumb />
//       {selectedCategory.subcategories ? (
//         selectedCategory.subcategories.map((subcat, index) => (
//           <div key={index} className="subcategory-section">
//             <h3 className="subcategory-title">{subcat.name}</h3>
//             <div className="product-grid">
//               {subcat.products.map((product, idx) => (

//                 <Link
//                   to={`/products/${cat_name}/${product.name}`}
//                   key={product.id}
//                   className="product-card"
//                 >
//                   <img
//                     src={baseurl + product.image}
//                     alt={product.name}
//                     className="product-image"
//                   />
//                   <h4 className="product-name">{product.name}</h4>
//                   <p className="product-desc">{product.description}</p>
//                   <button
//                     className="order-now-button"
//                     onClick={(e) => {
//                       e.preventDefault();
//                       e.stopPropagation();
//                       addToCart(product); addToCartMessage()
//                     }}
//                   >
//                     Add to Cart
//                   </button>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         ))
//       ) : (
//         <div className="product-grid">
//           {selectedCategory.products.map((product, index) => (

//             <Link
//               to={`/products/${cat_name}/${product.name}`}
//               key={product.id}
//               className="product-card"
//             >
//               <img
//                 src={baseurl + product.image}
//                 alt={product.name}
//                 className="product-image"
//               />
//               <h4 className="product-name">{product.name}</h4>
//               <p className="product-desc">{product.description}</p>
//               <button
//                 className="order-now-button"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   e.stopPropagation();
//                   addToCart(product);
//                   addToCartMessage()
//                 }}
//               >
//                 Add to Cart
//               </button>
//             </Link>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductListing;


import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { ToastContainer, toast } from "react-toastify";
import { baseurl } from "../../constants";
import Breadcrumb from "../Breadcrumbs/Breadcrumbs";
import Loading from "../Loading/Loading";
import "./ProductList.css";

const ProductListing = () => {
  const { cat_name } = useParams();
  if (!cat_name) {
    window.location.href = '/';
  }

  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState({});
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch(`${baseurl}product/get-category/${cat_name}`)
      .then((response) => response.json())
      .then((res) => {
        setSelectedCategory({ ...res.data });
        console.log(res.data); // For debugging to see the API response
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [cat_name]); // Dependency array should include cat_name

  const addToCartMessage = () => {
    toast.success("Product Successfully Added To Cart!", {
      position: "bottom-right",
      autoClose: 5000,
    });
  };

  if (loading) return <Loading />;

  if (!selectedCategory) {
    return <div>Category not found</div>;
  }

  return (
    <div className="container">
      <ToastContainer />
      <h2 className="category-title">{selectedCategory.name}</h2>
      <Breadcrumb />

      {/* Check for subcategories under sub_catogeries */}
      {selectedCategory.sub_catogeries && selectedCategory.sub_catogeries.length > 0 ? (
        selectedCategory.sub_catogeries.map((subcat, subcatIndex) => (
          <div key={subcatIndex} className="subcategory-section">
            <h3 className="subcategory-title">{subcat.name}</h3>
            <div className="product-grid">
              {subcat.products && subcat.products.length > 0 ? (
                subcat.products.map((product, idx) => (
                  <Link
                    to={`/products/${cat_name}/${product.name}`}
                    key={product.id}
                    className="product-card"
                  >
                    <img
                      src={baseurl + product.image}
                      alt={product.name}
                      className="product-image"
                    />
                    <h4 className="product-name">{product.name}</h4>
                    <p className="product-desc">{product.description}</p>
                    <button
                      className="order-now-button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        addToCart(product);
                        addToCartMessage();
                      }}
                    >
                      Add to Cart
                    </button>
                  </Link>
                ))
              ) : (
                <p>No products available in this subcategory.</p>
              )}
            </div>
          </div>
        ))
      ) : (
        <div className="product-grid">
          {selectedCategory.products && selectedCategory.products.length > 0 ? (
            selectedCategory.products.map((product, index) => (
              <Link
                to={`/products/${cat_name}/${product.name}`}
                key={product.id}
                className="product-card"
              >
                <img
                  src={baseurl + product.image}
                  alt={product.name}
                  className="product-image"
                />
                <h4 className="product-name">{product.name}</h4>
                <p className="product-desc">{product.description}</p>
                <button
                  className="order-now-button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    addToCart(product);
                    addToCartMessage();
                  }}
                >
                  Add to Cart
                </button>
              </Link>
            ))
          ) : (
            <p>No products available.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductListing;
