import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdFingerprint } from "react-icons/md";
import "./Navbar.css";
import { IconContext } from "react-icons/lib";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="__navbar">
          <div className="navbar__container __container">
            <Link to="/" className="navbar__logo" onClick={closeMobileMenu}>
              <MdFingerprint className="navbar__icon" />
              Test
            </Link>
            <div className="menu__icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav__menu active" : "nav__menu"}>
              <li className="nav__item">
                <Link to="/" className="nav__links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav__item">
                <Link
                  to="/services"
                  className="nav__links"
                  onClick={closeMobileMenu}
                >
                  Services
                </Link>
              </li>
              <li className="nav__item">
                <Link
                  to="/features"
                  className="nav__links"
                  onClick={closeMobileMenu}
                >
                  Features
                </Link>
              </li>

              <li className="nav__item">
                <Link
                  to="/test-page"
                  className="nav__links"
                  onClick={closeMobileMenu}
                >
                  Test Page
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
