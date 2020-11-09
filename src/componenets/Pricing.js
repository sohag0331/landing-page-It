import React from "react";
import { Button } from "./Button";
import "./Pricing.css";
import { FaFire } from "react-icons/fa";
import { BsXDiamondFill } from "react-icons/bs";
import { GiCrystalize } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";

function Pricing() {
  return (
    <IconContext.Provider value={{ color: "#fff", size: 64 }}>
      <div className="pricing__section">
        <div className="pricing__wrapper">
          <h1 className="pricing__heading">Pricing</h1>
          <div className="pricing__container">
            <Link to="/" className="pricing__container-card">
              <div className="pricing__container-cardInfo">
                <div className="icon">
                  <FaFire />
                </div>
                <h3>WordPress</h3>
                <h4>$1150</h4>
                <p>SEO Optimized</p>
                <ul className="pricing__container-features">
                  <li>Full Responsive Design</li>
                  <li>Multiple Page Styles</li>
                  <li>Product on Sales</li>
                </ul>
                <Button buttonSize="btn--wide" buttonColor="primary">
                  Get Started
                </Button>
              </div>
            </Link>
            <Link to="/" className="pricing__container-card">
              <div className="pricing__container-cardInfo">
                <div className="icon">
                  <BsXDiamondFill />
                </div>
                <h3>Laravel</h3>
                <h4>$2500</h4>
                <p>Design Bundles</p>
                <ul className="pricing__container-features">
                  <li>Responsive Design</li>
                  <li>Multiple Page Styles</li>
                  <li>Retina-Display Ready</li>
                </ul>
                <Button buttonSize="btn--wide" buttonColor="blue">
                  Get Started
                </Button>
              </div>
            </Link>
            <Link to="/" className="pricing__container-card">
              <div className="pricing__container-cardInfo">
                <div className="icon">
                  <GiCrystalize />
                </div>
                <h3>Android</h3>
                <h4>$4500</h4>
                <p>Design Bundles</p>
                <ul className="pricing__container-features">
                  <li>Responsive Design</li>
                  <li>Multiple Page Styles</li>
                  <li>Theme Customization</li>
                </ul>
                <Button buttonSize="btn--wide" buttonColor="primary">
                  Get Started
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Pricing;
