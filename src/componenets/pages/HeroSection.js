import React from "react";
import "./HeroSection.css";
import { Button } from "../Button";
import { Link } from "react-router-dom";

function HeroSection({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
}) {
  return (
    <>
      <div
        className={
          lightBg ? "home__hero__section" : "home__hero__section __darkBg"
        }
      >
        <div className="__container">
          <div
            className="__row home__hero__row"
            style={{
              display: "flex",
              flexDirection: imgStart === "start" ? "row-reverse" : "row",
            }}
          >
            <div className="__col">
              <div className="home__hero__text__wrapper">
                <div className="top__line">{topLine}</div>
                <h1 className={lightText ? "__heading" : "__heading __dark"}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? "home__hero__subtitle"
                      : "home__hero-subtitle __dark"
                  }
                >
                  {description}
                </p>
                <Link to="/">
                  <Button buttonSize="btn--wide" buttonColor="blue">
                    {buttonLabel}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="__col">
              <div className="home__hero__img__wrapper">
                <img src={img} alt={alt} className="home__hero__img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
