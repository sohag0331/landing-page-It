import React from "react";
import "./Footer.css";
import { Button } from "../../Button";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { MdFingerprint } from "react-icons/md";

function Footer() {
  return (
    <div className="footer__container">
      <section className="footer__subscription">
        <p className="footer__subscription__heading">
          Join our exclusive membership to receive the latest news and trends
        </p>
        <p className="footer__subscription__text">
          You can unsubscribe at any time.
        </p>
        <div className="input__areas">
          <form>
            <input
              className="footer__input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer__links">
        <div className="footer__link__wrapper">
          <div className="footer__link__items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div className="footer__link__items">
            <h2>Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Destinations</Link>
            <Link to="/">Sponsorships</Link>
          </div>
        </div>
        <div className="footer__link__wrapper">
          <div className="footer__link__items">
            <h2>Videos</h2>
            <Link to="/">Submit Video</Link>
            <Link to="/">Ambassadors</Link>
            <Link to="/">Agency</Link>
            <Link to="/">Influencer</Link>
          </div>
          <div className="footer__link__items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section className="social__media">
        <div className="social__media__wrap">
          <div className="footer__logo">
            <Link to="/" className="social__logo">
              <MdFingerprint className="navbar__icon" />
              TEST
            </Link>
          </div>
          <small className="website__rights">TEST © 2020</small>
          <div className="social__icons">
            <Link
              className="social__icon__link"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook />
            </Link>
            <Link
              className="social__icon__link"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </Link>
            <Link
              className="social__icon__link"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <FaYoutube />
            </Link>
            <Link
              className="social__icon__link"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <FaTwitter />
            </Link>
            <Link
              className="social__icon__link"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
