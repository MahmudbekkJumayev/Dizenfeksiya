import React from "react";
import "./Footer.css";
import contact from "../../assets/contact.png";
import phone from "../../assets/phone1.png";
import location from "../../assets/location1.png";

const Footer = () => {
  return (
    <div id="faq" className="container3">
      <div className="connection">
        <div className="forma" data-aos="fade-right">
          <h2>Malumotingizni Qoldiring</h2>
          <form className="form">
            <input type="text" placeholder="Ism" />
            <input type="phone" placeholder="+998" />
            <button className="forma-btn">Yuborish</button>
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
