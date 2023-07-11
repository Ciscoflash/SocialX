import React from "react";
import "./Features.css";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import phoneFeatures from "../../assets/phone-features.png";
import Feature from "./Feature";
import { featureList } from "./data.js";
const Features = () => {
  return (
    <section id="features">
      <div className="container features">
        <div className="u-title">
          <BsFillBookmarkStarFill color="orangered" size={30} />
          <h2>Core Features</h2>
          <p className="u-text-small u-text-dark">
            Social-X app has lorem ipsum dolor sit ametconsetor adispicing elit
            . sequi labore , halum officit error peaitur lopse
          </p>
        </div>

        <div className="features-content">
          <div className="features-left">
            <img src={phoneFeatures} alt="phone" />
          </div>
          <div className="features-right">
            {/* HERE WE WOULD BE REFRECING THE FEATURE COMPONENT */}
            {/* here wea re going t map through the feature
          list to show the datas in the feature props */}
            {featureList.map((feature) => {
              return <Feature key={feature.id} icon={feature.icon} text={feature.text} heading={feature.heading}/>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
