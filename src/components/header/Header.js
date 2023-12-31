import React from "react";
import phoneHeader from "../../assets/phone-header-bg.png";
import { Button } from "../UI/button/Button";
import "../UI/button/Button.css";
import "./Header.css";
import {BsMouse} from "react-icons/bs"; 
const Header = () => {
  return (
    <section id="header">
      <div className="container header">
        <div className="header-left">
          <h1>
            <span>THE WORLD'S LEADING</span>
            <span>CROSS-PLATFORM SECURE</span>
            <span>MESSAGING SYSTEM</span>
          </h1>
          <p className="u-text-small u-text-light">
            Social-X is a Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Fusce ut ante eu odio dapibus sagittis sit amet sit amet
            tellus.  
          </p>
          <div className="header-cta">
            <Button text={"Get Started"} btnClass={"btn-dark"} href={"#"} />
            <Button text={"How IT Works"} btnClass={"btn-orange"} href={"#"} />
          </div>
        </div>
        <div className="header-right">
            <img src={phoneHeader} alt="phone"/>
          </div>
      </div>
      <div className="floating-icon">
        <a href="#features">
          <BsMouse color="#fff" size={25} className="mouse "/>
        </a>
      </div>
    </section>
  );
};

export default Header;
