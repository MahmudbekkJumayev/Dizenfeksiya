import React, { useEffect, useState } from "react";
import "./Main.css";
import Aos from "aos";
import "aos/dist/aos.css";
import dizen from "../../assets/dizen.jpg";
import group from "../../assets/Group.png";
import secruty from "../../assets/secruty.jpg";
import dicons from "../../assets/3dicons.png";
import mask from "../../assets/mask.png";
import mask2 from "../../assets/mask2.png";
import mask1 from "../../assets/mask1.png";
import slack2 from "../../assets/slack2.png";
import slack3 from "../../assets/slack3.png";
import { useTranslation } from "react-i18next";
import frame from "../../assets/frame.png";

const Main = () => {
  const { t } = useTranslation();
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const [openAccordionIndex, setOpenAccordionIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordionIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const [openAccordionIndex1, setOpenAccordionIndex1] = useState(null);

  const toggleAccordion1 = (index) => {
    setOpenAccordionIndex1((prevIndex) => (prevIndex === index ? null : index));
  };

  const [openAccordionIndex2, setOpenAccordionIndex2] = useState(null);

  const toggleAccordion2 = (index) => {
    setOpenAccordionIndex2((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div id="about">
      <div className="offer-container">
        <h3 className="cart-text" data-aos="fade-up">
          {t("our")}
        </h3>
        <span className="line"></span>
        <div className="card">
          <div className="card-item" data-aos="fade-right">
            <img src={mask} alt="#" />
            <h4>{t("ourT1")}</h4>
            <p>{t("ourT4")}</p>
          </div>
          <div className="card-item" data-aos="fade-right">
            <img src={mask1} alt="#" />
            <h4>{t("ourT2")}</h4>
            <p>{t("ourT4")}</p>
          </div>
          <div className="card-item" data-aos="fade-right">
            <img src={mask2} alt="#" />
            <h4>{t("ourT3")}</h4>
            <p>{t("ourT4")}</p>
          </div>
        </div>
      </div>
      {/* mein qismi */}
      <div className="dizenfeksiya-card">
        <img src={dizen} alt="#" />
        <div className="dizenfeksiya-card-item" data-aos="fade-right">
          <h4>{t("klapa")}</h4>
          <p>{t("ourT4")}</p>
          <button
            onClick={() => (window.location.href = "#faq")}
            className="dizen-btn"
          >
            {t("connection")}
          </button>
        </div>
      </div>
      {/* servises */}
      <div id="servis" className="servise">
        <h4 data-aos="fade-right">Service</h4>
        <p data-aos="fade-right">{t("lesson")}</p>
        <div className="service-card">
          <div className="service-card-item" data-aos="fade-right">
            <h4>{t("basic")}</h4>
            <p>{t("basicT")}</p>

            <img src={group} alt="#" />
          </div>
          <div className="service-card-item" data-aos="fade-right">
            <h4> {t("basic2")}</h4>
            <p>{t("basicT2")}</p>

            <img src={slack2} alt="#" />
          </div>
          <div className="service-card-item" data-aos="fade-right">
            <h4> {t("basic3")}</h4>
            <p>{t("basicT2")}</p>

            <img src={slack3} alt="#" />
          </div>
        </div>
      </div>
      {/* secruty */}
      <div className="secruty">
        <div className="secruty-img" data-aos="fade-right">
          <img src={secruty} alt="#" />
        </div>
        <div className="secruty-text" data-aos="fade-right">
          <img src={dicons} alt="#" />
          <h4>{t("trust")}</h4>
          <button
            onClick={() => (window.location.href = "#faq")}
            className="secruty-btn"
          >
            {t("connection")}
          </button>
        </div>
      </div>
      {/* comment */}
      <div className="comment">
        <div className="comment-faq" data-aos="fade-right">
          <h4>FAQ</h4>
        </div>
        <div className="acardion" data-aos="fade-right">
          {[0].map((index) => (
            <div className="acardion-item" key={index}>
              <span onClick={() => toggleAccordion(index)}>
                <h4>{t("acardion")}</h4>
                <img
                  src={frame}
                  alt="#"
                  className={openAccordionIndex === index ? "rotate" : "180"}
                />
              </span>
              {openAccordionIndex === index && (
                <span className="acardion-text">{t("acardionT")}</span>
              )}
            </div>
          ))}
          {[0].map((index) => (
            <div className="acardion-item" key={index}>
              <span onClick={() => toggleAccordion1(index)}>
                <h4>{t("acardion1")}</h4>
                <img
                  src={frame}
                  alt="#"
                  className={openAccordionIndex1 === index ? "rotate" : "180"}
                />
              </span>
              {openAccordionIndex1 === index && (
                <span className="acardion-text">{t("acardionT1")}</span>
              )}
            </div>
          ))}
          {[0].map((index) => (
            <div className="acardion-item" key={index}>
              <span onClick={() => toggleAccordion2(index)}>
                <h4>{t("acardion2")}</h4>
                <img
                  src={frame}
                  alt="#"
                  className={openAccordionIndex2 === index ? "rotate" : "180"}
                />
              </span>
              {openAccordionIndex2 === index && (
                <span className="acardion-text">{t("acardionT2")}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
