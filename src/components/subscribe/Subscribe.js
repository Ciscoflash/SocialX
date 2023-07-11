import React from "react";
import "./Subscribe.css";
import { TiSocialGooglePlus } from "react-icons/ti";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
const Subscribe = () => {
  return (
    <section id="subscribe">
      <section className="container subscribe">
        <h2>Subscribe now!</h2>
        <form>
          <div className="form-control">
            <input
              type="email"
              name=""
              value=""
              placeholder="Enter your Email..."
            />
            <button type="buttn">Subscribe</button>
          </div>
        </form>
        <div className="social-icons">
          <div className="social-icon">
            <TiSocialGooglePlus/>
          </div>
          <div className="social-icon">
            <FaFacebookF/>
          </div>
          <div className="social-icon">
            <FaTwitter/>
          </div>
          <div className="social-icon">
            <FaInstagram/>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Subscribe;
