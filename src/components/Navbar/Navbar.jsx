import React, { useState } from "react";
import "./Navbar.css";
import { useTranslation } from "react-i18next";

const Navbar = ({ changeLang }) => {
  const { t } = useTranslation();
  const changeLangHandler = (e) => {
    console.log(e.target.value);
    changeLang(e.target.value);
  };
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="nav">
      <div className="container">
        <a className="navbar-logo" href="#home">
          Dezinfeksiya
        </a>
        <div className={`navigation ${showMenu ? "active" : ""}`}>
          <ul className="nav-tab">
            <li>
              <a className="link" href="#" onClick={toggleMenu}>
                {t("main")}
              </a>
            </li>
            <li>
              <a className="link" href="#about" onClick={toggleMenu}>
                {t("aboutUs")}
              </a>
            </li>
            <li>
              <a className="link" href="#servis" onClick={toggleMenu}>
                {t("services")}
              </a>
            </li>
            <li>
              <a className="link" href="#faq" onClick={toggleMenu}>
                FAQ
              </a>
            </li>
          </ul>
          <select className="translation" onChange={changeLangHandler}>
            <option value="en">English</option>
            <option value="uz">Uzbek</option>
          </select>
          <button
            className="nav-btn"
            onClick={() => (window.location.href = "#faq")}
          >
            {t("connection")}
          </button>
        </div>
        <div className="burger-menu" onClick={toggleMenu}>
          <div className={`line ${showMenu ? "active" : ""}`}></div>
          <div className={`line ${showMenu ? "active" : ""}`}></div>
          <div className={`line ${showMenu ? "active" : ""}`}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
