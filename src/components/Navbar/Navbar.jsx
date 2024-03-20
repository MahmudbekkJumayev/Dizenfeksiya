import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav>
      <div className="container">
        <a className="navbar-logo" href="#home">
          Dezinfeksiya
        </a>
        <div className={`navigation ${showMenu ? "active" : ""}`}>
          <ul>
            <li>
              <a href="#" onClick={toggleMenu}>
                Asosiy
              </a>
            </li>
            <li>
              <a href="#about" onClick={toggleMenu}>
                Biz haqimizda
              </a>
            </li>
            <li>
              <a href="#servis" onClick={toggleMenu}>
                Xizmatlar
              </a>
            </li>
            <li>
              <a href="#faq" onClick={toggleMenu}>
                FAQ
              </a>
            </li>
          </ul>
          <button className="nav-btn">Bog'lanish</button>
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
