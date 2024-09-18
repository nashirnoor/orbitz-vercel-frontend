import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import { baseurl } from "../../constants";
import Breadcrumb from "../Breadcrumbs/Breadcrumbs";
import { CartContext } from "../../Context/CartContext";
import "react-toastify/dist/ReactToastify.css";
import "./Cart.css";

const Cart = () => {
  const { getCartItems, removeFromCart, updateQuantity, clearCart } = useContext(CartContext);
  const cartItems = getCartItems();
  const [location, setLocation] = useState(null);
  const [distance, setDistance] = useState(null);
  const [selectedStore, setSelectedStore] = useState(null);
  const [address, setAddress] = useState({
    phone: "",
    zone: "",
    street: "",
    building: "",
    details: "",
  });
  const [showAddressForm, setShowAddressForm] = useState(false);
  // const deliveryCharge = 10;

  const removeFromCartMessage = () => {
    toast.success("Product Successfully Removed From Cart!", {
      position: "bottom-right",
      autoClose: 5000,
    });
  };

  const removeQtyCartMessage = () => {
    toast.success("Removed Product Quantity Successfully!", {
      position: "bottom-right",
      autoClose: 5000,
    });
  };

  const addQtyCartMessage = () => {
    toast.success("Added Product Quantity Successfully!", {
      position: "bottom-right",
      autoClose: 5000,
    });
  };

  const getTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleQuantityChange = (index, change) => {
    const newQuantity = Math.max(1, cartItems[index].quantity + change);
    updateQuantity(index, newQuantity);
  };

  const handleRemoveItem = (index) => {
    removeFromCart(index);
  };

  const handleOrderNow = () => {
    if (
      !address.phone ||
      !address.zone ||
      !address.street ||
      !address.building
    ) {
      toast.error(
        "Please enter your address before proceeding with the order.",
        {
          position: "bottom-right",
          autoClose: 5000,
        }
      );
      return;
    }

    // const totalPrice = getTotalPrice();
    const totalQuantity = getTotalQuantity();
    // const deliveryFee = distance > 10 ? deliveryCharge : 0;



    const baseUrl = "mailto:";
    const recipientEmail = "info@orbitztrading.com";
    const subject = "Order Details from Your Website";

    const body = `Order Details:\n\n${cartItems
      .map(
        (item, index) =>
          `${index + 1}. Product: ${item.name}\nQuantity: ${item.quantity
          }\n`
      )
      .join(
        "\n\n"
      )}\n\nTotal Quantity: ${totalQuantity}\n\nAddress:\n\n Phone Number: ${address.phone},\n\nZone: ${address.zone
      }, \n\nStreet: ${address.street}, \n\nBuilding NO: ${address.building
      },\n\n LandMark: ${address.details},`;

    const mailtoUrl = `${baseUrl}${recipientEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    console.log("Mailto URL:", mailtoUrl);
    clearCart();
    window.open(mailtoUrl, "_self");
  };

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371;
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  useEffect(() => {
    if (selectedStore && location) {
      const calculatedDistance = calculateDistance(
        selectedStore.latitude,
        selectedStore.longitude,
        location.latitude,
        location.longitude
      );
      setDistance(calculatedDistance);
    }
  }, [selectedStore, location]);

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress({
      ...address,
      [name]: value,
    });
  };

  const saveAddress = () => {
    setShowAddressForm(false);
  };

  return (
    <div className="cart-container">
      <Breadcrumb style={{ marginTop: '130px' }} />
      <ToastContainer />
      {cartItems.length === 0 ? (
        <div className="empty-cart-text">
          <h4>Your Cart is Empty</h4>
          <Link
            to="/products"
            style={{ color: "black", textDecoration: "underline" }}
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <h2>Your Cart</h2>
          <div className="cart_item_container">
            <div className="cart-items">
              {cartItems.map((item, index) => (
                <div key={index} className="cart-item">
                  <img
                    src={baseurl + item.image}
                    alt={item.name}
                    className="cart-item-image"
                  />
                  <div className="cart-item-details">
                    <h3>
                      {item.name}
                      { }
                    </h3>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: "1rem",
                      }}
                    >
                      <div className="quantity-control">
                        <button
                          className="quantity-button"
                          onClick={() => {
                            handleQuantityChange(index, -1);
                            removeQtyCartMessage();
                          }}
                        >
                          -
                        </button>
                        <span className="quantity">{item.quantity}</span>
                        <button
                          className="quantity-button"
                          onClick={() => {
                            handleQuantityChange(index, 1);
                            addQtyCartMessage();
                          }}
                        >
                          +
                        </button>
                      </div>
                      <button
                        className="remove-button"
                        onClick={() => {
                          handleRemoveItem(index);
                          removeFromCartMessage();
                        }}
                      >
                        <FaTrash />
                      </button>
                    </div>
                    {/* <div className="item-price">Price: {item.price} QAR</div> */}
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h2 style={{ marginBottom: "3rem" }}> Cart Summery</h2>
              <h3
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "1rem",
                }}
              >
                Total Quantity :
                <span>
                  {getTotalQuantity()}
                </span>
              </h3>
              <h3
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "1rem",
                }}
              >
                {/* Total Price :<span>{getTotalPrice().toFixed(2)}QAR </span> */}
              </h3>
              <div className="store-selection"></div>
              <div className="address-section">
                <button
                  className="add-address-button"
                  onClick={() => setShowAddressForm(true)}
                >
                  {!address.building ||
                    !address.details ||
                    !address.phone ||
                    !address.street ||
                    !address.zone
                    ? "Add Adderss"
                    : "Edit Address"}
                </button>
                {showAddressForm && (
                  <div className="address-form">
                    <h3>Enter Your Address</h3>
                    <form>
                      <input
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        value={address.phone}
                        onChange={handleAddressChange}
                      />
                      <input
                        type="text"
                        name="zone"
                        placeholder="Zone"
                        value={address.zone}
                        onChange={handleAddressChange}
                      />
                      <input
                        type="text"
                        name="street"
                        placeholder="Street"
                        value={address.street}
                        onChange={handleAddressChange}
                      />
                      <input
                        type="text"
                        name="building"
                        placeholder="Building"
                        value={address.building}
                        onChange={handleAddressChange}
                      />
                      <textarea
                        name="details"
                        placeholder="Additional Details"
                        value={address.details}
                        onChange={handleAddressChange}
                      />
                      <button
                        type="button"
                        onClick={saveAddress}
                        className="save-address-button"
                      >
                        Save Address
                      </button>
                    </form>
                  </div>
                )}
                {!showAddressForm && address.zone && (
                  <div className="address-card">
                    <h3>Address Details</h3>
                    <p>Phone: {address.phone}</p>
                    <p>Zone: {address.zone}</p>
                    <p>Street: {address.street}</p>
                    <p>Building No: {address.building}</p>
                    <p>Land Mark: {address.details}</p>
                  </div>
                )}
              </div>
              <button className="order-now-button" onClick={handleOrderNow}>
                Order Now{" "}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
