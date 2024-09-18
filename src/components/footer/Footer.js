import React from "react";
import { Link } from "react-router-dom";
import { IoMailOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { BsWhatsapp } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import CallButton from "../CallButton/CallButton";
import "./Footer.css";

import logoWhite from "../../assets/logo/logo2.png";

function Footer() {
  const phoneNumber = "+97470057774";
  const whatsappURL = `https://wa.me/${phoneNumber}`;
  const email = "info@orbitztrading.com";
  const subject = encodeURIComponent("Your Subject Here");
  const body = encodeURIComponent("Your email body here");
  return (
    <div className="footer">
      <div className="logofooter">
        <Link to="/">
          <img src={logoWhite} alt="" className="footer_logo" />
        </Link>
      </div>
      <div className="menufooter">
        <div>
          <ul className="menu-list">
            <li>
              <Link className="menu-list-link" to={"/"}>
                home
              </Link>{" "}
            </li>
            <li>
              <Link className="menu-list-link" to={"/aboutus"}>
                {" "}
                about us
              </Link>{" "}
            </li>
            <li>
              <Link className="menu-list-link" to={"/products"}>
                our Products
              </Link>
            </li>
            <li>
              <Link className="menu-list-link" to={"/our-brand"}>
                our brands
              </Link>
            </li>
            <li>
              <Link className="menu-list-link" to={"/contactus"}>
                contact us
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="contactfooter">
        <div className="footerHeading">
          <IoLocationOutline />
          <div className="footerDetail">
            Orbitz Group Building No. 12, Street 123, Zone 123 ,Qatar
          </div>
        </div>

        <div className="footerHeading">
          <IoCallOutline />
          <div className="footerDetail">
            <CallButton variant="footer" />
          </div>
        </div>

        <div className="footerHeading">
          <BsWhatsapp />
          <div className="footerDetail">
            <a
              href={whatsappURL}
              target="_blank"
              className=""
              rel="noopener noreferrer"
              style={{color:'white'}}
            >
              {phoneNumber}
            </a>
          </div>
        </div>

        <div className="footerHeading">
          <IoMailOutline />
          <div className="footerDetail">
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`}
              className=""
              style={{ color: "white" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              {email}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
