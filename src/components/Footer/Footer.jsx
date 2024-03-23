import React, { useState } from "react";
import axios from "axios";
import contact from "../../assets/contact.png";
import phone from "../../assets/phone1.png";
import location from "../../assets/location1.png";
import "./Footer.css";

const Footer = () => {
  const [formData, setFormData] = useState({ name: "", phone: "" });

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
        "https://api.telegram.org/bot7134895187:AAGXztQoWmiNoOOUlBoct2D4QuMbTkPhnjc/sendMessage",
        {
          chat_id: "-1002122412259",
          text: `Ism: ${formData.name}\nTelefon: ${formData.phone}`,
        }
      );
      // Reset the formData state to empty values
      setFormData({ name: "", phone: "" });
      alert("Ma'lumotlaringiz muvaffaqiyatli yuborildi!");
    } catch (error) {
      console.error(error);
      alert("Xatolik yuz berdi. Qaytadan urinib ko'ring.");
    }
  };

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
              Yuborish
            </button>
          </form>
        </div>
        <div className="connect-img">
          <div data-aos="fade-right" className="connect-text">
            <p>
              Bizga ko'p yillardan beri kompaniyamizga ishonch bildirganlar
              talaygina
            </p>
          </div>
          <div className="connect-img">
            <img src={contact} alt="#" />
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer-logo">
          <h4>Dizenfeksiya</h4>
        </div>
        <div className="footer-contact" data-aos="fade-left">
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
