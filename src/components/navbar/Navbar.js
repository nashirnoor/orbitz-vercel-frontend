import React, { useContext, useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import whitelogo from "../../assets/logo/logo.png";
import { Link, useLocation } from "react-router-dom";
import { FaAngleDown, FaShoppingCart } from "react-icons/fa";
import Dropdown from "./Dropdown";
import { CartContext } from "../../Context/CartContext";
import logo from "../../assets/logo/logo.png";
import "./NavbarStyles.css";

function Navbar() {
  const { getTotalQuantity } = useContext(CartContext);
  const totalQuantity = getTotalQuantity();
  const [nav, setNav] = useState(false);
  const [bgnav, setBgnav] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleNav = () => setNav(!nav);
  const location = useLocation().pathname;

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setBgnav(true);
    } else {
      setBgnav(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  const navItems = [
    {
      id: 1,
      title: "HOME",
      path: "/",
      cName: "nav-item",
      icon: "",
    },
    {
      id: 2,
      title: "ABOUT US",
      path: "/aboutus",
      cName: "nav-item",
      icon: "",
    },
    {
      id: 3,
      title: "OUR PRODUCTS",
      path: "/products",
      cName: "nav-item",
      icon: "",
    },
    {
      id: 4,
      title: "OUR BRAND",
      path: "/our-brand",
      cName: "nav-item",
      icon: "",
    },
    {
      id: 5,
      title: "CONTACT US",
      path: "/contactus",
      cName: "nav-item",
      icon: "",
    },
    {
      id: 6,
      title:  `Cart(${totalQuantity})`,
      path: "/cart",
      cName: "nav-item",
      icon: <FaShoppingCart />,
    },
  ];

  return (
    <div>
      <div className={bgnav ? "nav-header active" : "nav-header"}>
        <Link to={"/"}>
          <div className={bgnav ? "logo1" : "logo"}>
            <div className={bgnav ? "no-logo" : "yes-logo"}>
              <img src={logo} alt="Company logo gulf shore" />
            </div>
            <div className={bgnav ? "yes-logo" : "no-logo"}>
              <img style={{ width: "120px" }} src={whitelogo} alt="Orbitz" />
            </div>
          </div>
        </Link>
        <ul className={"nav-menu"}>
          {navItems.map((item) => {
            if (item.title === "SERVICES") {
              return (
                <li
                  key={item.id}
                  onClick={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <Link
                    className={
                      (location === "/" && !bgnav) || bgnav ? "white" : "black"
                    }
                    to={item.path}
                  >
                    {item.title}

                    <FaAngleDown
                      color={
                        (location === "/" && !bgnav) || bgnav
                          ? "white"
                          : "black"
                      }
                      className="down-icon"
                    />
                  </Link>

                  {dropdown && <Dropdown />}
                </li>
              );
            }
            return (
              <li key={item.id} className={item.cName}>
                <Link
                  className={
                    (location === "/" && !bgnav) || bgnav ? "white" : "black"
                  }
                  to={item.path}
                >
                  {item.title && item.title} {""}
                  {item.icon} {""}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hamburger" onClick={handleNav}>
          <HiOutlineMenuAlt4
            color={
              (useLocation().pathname === "/" && !bgnav) || bgnav
                ? "white"
                : "black"
            }
            size={40}
          />
        </div>
        <div className={nav ? "mobile-menu active" : "mobile-menu"}>
          <ul className="mobile-nav">
            <Link className="mobile-link" to={"/"}>
              <li onClick={handleNav}>HOME</li>
            </Link>
            <Link className="mobile-link" to={"/aboutus"}>
              <li onClick={handleNav}>ABOUT US</li>
            </Link>
            <Link className="mobile-link" to={"/products"}>
              <li onClick={handleNav}>OUR PRODUCTS</li>
            </Link>
            <Link className="mobile-link" to={"/our-brand"}>
              <li onClick={handleNav}>OUR BRAND</li>
            </Link>
            <Link className="mobile-link" to={"/contactus"}>
              <li onClick={handleNav}>CONTACT US</li>
            </Link>
            <Link className="mobile-link" to={"/contactus"}>
              <li onClick={handleNav}>
                CART <FaShoppingCart />({totalQuantity})
              </li>
            </Link>
            <div
              style={{
                width: "100%",
                justifyContent: "space-around",
                display: "flex",
              }}
            >
              <IoMdClose size={40} onClick={handleNav} />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
