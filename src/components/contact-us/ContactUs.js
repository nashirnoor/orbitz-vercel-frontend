import { Col, Container, Row } from "react-bootstrap";
import { BsWhatsapp } from "react-icons/bs";
import { IoCallOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import CallButton from "../CallButton/CallButton";
import Breadcrumb from "../Breadcrumbs/Breadcrumbs";
import "./ContactUs.css";

function ContactUs() {
  const phoneNumber = "+97470057774";
  const whatsappURL = `https://wa.me/${phoneNumber}`;
  const email = "info@orbitztrading.com";
  const subject = encodeURIComponent("Your Subject Here");
  const body = encodeURIComponent("Your email body here");
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}
    >
      <Container>
        <Row style={{ width: "100%" }}>
          {/* <Col>
            <div className="banner8">
              <div className="overlay8"></div>
              <div className="title8">
                <div className="about-us-heading">
                  Contact with
                  <span className="highlighted-text">{" "}Orbitz</span>
                </div>{" "}
              </div>
            </div>
          </Col> */}
        </Row>
        <Breadcrumb style={{marginTop:"8rem"}}/>
        <Row>
          <div>
            <div className="contact-heading-section">
              <div className="contact-heading">Contact our Friendly Team</div>
              <div className="contact-heading-desc">
                what are we doing, and why are we doing it.
              </div>
            </div>
          </div>
        </Row>
        <Row >
          <Col>
            <div className="contact-card">
              <motion.div
                whileHover={{ scale: 1.2, rotate: -20 }}
                whileTap={{ scale: 0.8, rotate: 90, borderRadius: "100%" }}
                className="contact-card-icon"
              >
                <IoCallOutline size={35}/>
                {/* <img src={callIcon} alt=" call icon" /> */}
              </motion.div>
              <div className="contact-card-title">call us</div>
              <div className="contact-card-title-desc">Sat-Thu</div>
              <CallButton />
            </div>
          </Col>
          <Col>
            <div className="contact-card">
              <motion.div
                whileHover={{ scale: 1.2, rotate: -20 }}
                whileTap={{ scale: 0.8, rotate: 90, borderRadius: "100%" }}
                className="contact-card-icon"
              >
                <IoMailOutline size={35}/>
                {/* <img src={emailIcon} alt=" email icon" /> */}
              </motion.div>
              <div className="contact-card-title">email</div>
              <div className="contact-card-title-desc">send emails at</div>
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`}
                className="contact-card-details"
                target="_blank"
                rel="noopener noreferrer"
              >
                {email}
              </a>
            </div>
          </Col>
          <Col>
            <div className="contact-card">
              <motion.div
                whileHover={{ scale: 1.2, rotate: -20 }}
                whileTap={{ scale: 0.8, rotate: 90, borderRadius: "100%" }}
                className="contact-card-icon"
              >
                <BsWhatsapp size={35}/>
              </motion.div>
              <div className="contact-card-title">Chat with us</div>
              <div className="contact-card-title-desc">Chat on WhatsApp</div>
              <div className="contact-card-detail">
                <a
                  href={whatsappURL}
                  target="_blank"
                  className="contact-card-detail-whatsapp"
                  rel="noopener noreferrer"
                >
                  {phoneNumber}
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* <VisionSection /> */}
    </motion.div>
  );
}

export default ContactUs;
