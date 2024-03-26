import React from "react";
import imgHead from "../../assets/hero.jpg";
import "./Header.css";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  return (
    <header>
      <div className="header">
        <div className="header-text" data-aos="fade-right">
          <h2>{t("dizen")}</h2>
          <p>{t("head")}</p>
          <button>{t("connection")}</button>
        </div>
        <div className="header-img">
          <img src={imgHead} alt="imghead" />
        </div>
      </div>
    </header>
  );
};

export default Header;
