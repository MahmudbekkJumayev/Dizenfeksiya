import React, { useState, useEffect } from "react";
import axios from "axios";
import contact from "../../assets/contact.png";
import phone from "../../assets/phone1.png";
import location from "../../assets/location1.png";
import "./Footer.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [modalOpen, setModalOpen] = useState(false);
  const { t } = useTranslation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://api.telegram.org/bot6428568310:AAFJNsB2heebFvp9YG63NypKzk12U_x7KI0/sendMessage",
        {
          chat_id: "-1002085422187",
          text: `Ism: ${formData.name}\nTelefon: ${formData.phone}`,
        }
      );
      setFormData({ name: "", phone: "" });
      setModalOpen(true);
    } catch (error) {
      console.error(error);
      alert("Xatolik yuz berdi. Qaytadan urinib ko'ring.");
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setModalOpen(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, [modalOpen]);

  return (
    <div id="faq">
      <div className="connection">
        <div className="forma" data-aos="fade-right">
          <h2>Malumotingizni Qoldiring</h2>
          <form className="form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Ism"
              onChange={handleChange}
            />
            <input
              type="phone"
              name="phone"
              value={formData.phone}
              placeholder="+998"
              onChange={handleChange}
            />
            <button type="submit" className="forma-btn">
              {t("send")}
            </button>
          </form>
        </div>
        <div className="connect-img" data-aos="fade-right">
          <div className="connect-img">
            <img src={contact} alt="#" />
          </div>
        </div>
      </div>
      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setModalOpen(false)}>
              &times;
            </span>
            <p className="modal-text">
              Ma'lumotlaringiz muvaffaqiyatli yuborildi🎊🎊🎊🎊🎊
            </p>
          </div>
        </div>
      )}
      <div className="footer" data-aos="fade-right">
        <div className="footer-logo">
          <h4>Dizenfeksiya</h4>
        </div>
        <div className="footer-contact">
          <div className="location">
            <span>
              <img src={location} alt="#" />
              Toshkent shahri Yashnabod tumani Mo’ljal Sergeli-4 bekat
            </span>
            <span>
              <img src={phone} alt="#" />
              +998 94 099 3434
            </span>
          </div>
          <div className="phone"></div>
          <div className="social-media">
            <button className="fecebook">Fecebook</button>
            <button className="instagram">Instagram</button>
            <button className="telegram">Telegram</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
