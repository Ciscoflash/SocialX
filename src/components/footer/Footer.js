import React from "react";
import "./Footer.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFax,
  FaEnvelope,
  FaGlobe,
  FaPhone,
} from "react-icons/fa";
import logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <div id="footer">
      <div className="container footer">
        <div className="footer-box">
          <h4>Useful Links</h4>
          <div className="footer-links">
            <a href="#"> &bull; Support</a>
            <a href="#">&bull; About</a>
            <a href="#">&bull; Learn</a>
            <a href="#">&bull; Hosting</a>
            <a href="#">&bull; Messenger</a>
          </div>
        </div>
        <div className="footer-box">
          <h4>Support</h4>
          <div className="footer-links">
            <a href="#">&bull; Support</a>
            <a href="#">&bull; About</a>
            <a href="#">&bull; Learn</a>
            <a href="#">&bull; Hosting</a>
            <a href="#">&bull; Messenger</a>
          </div>
        </div>
        <div className="footer-box">
          <h4>Contact Us</h4>
          <div className="footer-contact">
            {/* we use the &nbsp; to create a customed space between an icon and a text*/}
            <p>
              <FaMapMarkerAlt /> &nbsp; Address: United States
            </p>
            <p>
              <FaPhoneAlt /> &nbsp; Phone: +234 9055 047 774
            </p>
            <p>
              <FaFax /> &nbsp; Fax: +2349055047774
            </p>
            <p>
              <FaEnvelope /> &nbsp; Email: abrahamjude1999@gmail.com;
            </p>
            <p>
              <FaGlobe /> &nbsp; Website: autocommpos.com
            </p>
          </div>
        </div>
        <div className="footer-box">
            <img src={logo} alt="logo"/>
            <p className="u-small-text">
              &copy; copyright 2023 Designed By Abraham Jude.
            </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
