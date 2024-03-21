import React, { useEffect, useState } from "react";
import "./Main.css";
import Aos from "aos";
import "aos/dist/aos.css";
import dizen from "../../assets/dizen.jpg";
import group from "../../assets/Group.png";
import secruty from "../../assets/secruty.jpg";
import dicons from "../../assets/3dicons.png";
import frame from "../../assets/frame.png";
import mask from "../../assets/mask.png";
import mask2 from "../../assets/mask2.png";
import mask1 from "../../assets/mask1.png";
import slack2 from "../../assets/slack2.png";
import slack3 from "../../assets/slack3.png";
import { useTranslation } from "react-i18next";

const Main = () => {
  const { t } = useTranslation();
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const [openAccordionIndex, setOpenAccordionIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordionIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div id="about" className="container2">
      <h3 className="cart-text" data-aos="fade-up">
        Avfzalliklarimiz
      </h3>
      <span className="line"></span>
      <div className="card">
        <div className="card-item" data-aos="fade-right">
          <img src={mask} alt="#" />
          <h4>Tezkor Xizmat Ko'rsatish</h4>
          <p>
            Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan
            kompaniyamiz Mijozlarimiz bizdan mamnun
          </p>
        </div>
        <div className="card-item" data-aos="fade-right">
          <img src={mask1} alt="#" />
          <h4>Yetuk mutahasislaimiz</h4>
          <p>
            Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan
            kompaniyamiz Mijozlarimiz bizdan mamnun
          </p>
        </div>
        <div className="card-item" data-aos="fade-right">
          <img src={mask2} alt="#" />
          <h4>Sizga maqul vaqtda</h4>
          <p>
            Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan
            kompaniyamiz Mijozlarimiz bizdan mamnun
          </p>
        </div>
      </div>
      {/* mein qismi */}
      <div className="dizenfeksiya-card">
        <img src={dizen} alt="#" />
        <div className="dizenfeksiya-card-item" data-aos="fade-left">
          <h4>Klapa va zararli hashorot endi yo’q deb hisoblang !!!</h4>
          <p>
            Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan
            kompaniyamiz Mijozlarimiz bizdan mamnun
          </p>
          <button className="dizen-btn">{t("connection")}</button>
        </div>
      </div>
      {/* servises */}
      <div id="servis" className="servise" data-aos="fade-up-right">
        <h4>Service</h4>
        <p>Bu darsliklari sizning yuqori daraja olishingizga yordam beradi</p>
        <div className="service-card">
          <div className="service-card-item">
            <h4>Boshlang’ich tushunchalar</h4>
            <p>
              Dezinfektsiya - yuqumli kasalliklar qo'zg'atuvchilarini yo'q
              qilish va ularning teriga, shilliq pardalarga va yara yuzasiga
              tushishini oldini olish uchun atrof-muhit ob'ektlarida toksinlarni
              yo'q qilishga qaratilgan chora-tadbirlar majmui. Bu dezinfeksiya
              turlaridan biridir.
            </p>

            <img src={group} alt="#" />
          </div>
          <div className="service-card-item">
            <h4>Boshlang’ich tushunchalar</h4>
            <p>
              Dezinfektsiya - yuqumli kasalliklar qo'zg'atuvchilarini yo'q
              qilish va ularning teriga, shilliq pardalarga va yara yuzasiga
              tushishini oldini olish uchun atrof-muhit ob'ektlarida toksinlarni
              yo'q qilishga qaratilgan chora-tadbirlar majmui. Bu dezinfeksiya
              turlaridan biridir.
            </p>

            <img src={slack2} alt="#" />
          </div>
          <div className="service-card-item">
            <h4>Boshlang’ich tushunchalar</h4>
            <p>
              Dezinfektsiya - yuqumli kasalliklar qo'zg'atuvchilarini yo'q
              qilish va ularning teriga, shilliq pardalarga va yara yuzasiga
              tushishini oldini olish uchun atrof-muhit ob'ektlarida toksinlarni
              yo'q qilishga qaratilgan chora-tadbirlar majmui. Bu dezinfeksiya
              turlaridan biridir.
            </p>

            <img src={slack3} alt="#" />
          </div>
        </div>
      </div>
      {/* secruty */}
      <div className="secruty">
        <div className="secruty-img" data-aos="fade-up-left">
          <img src={secruty} alt="#" />
        </div>
        <div className="secruty-text" data-aos="fade-up-left">
          <img src={dicons} alt="#" />
          <h4>
            Bizga ko'p yillardan beri kompaniyamizga ishonch bildirganlar
            talaygina
          </h4>
          <button className="secruty-btn">{t("connection")}</button>
        </div>
      </div>
      {/* comment */}
      <div className="comment">
        <div className="comment-faq">
          <h4>FAQ</h4>
        </div>
        <div className="acardion">
          {[0, 1, 2].map((index) => (
            <div className="acardion-item" key={index}>
              <span onClick={() => toggleAccordion(index)}>
                <h4>Kursdan nima topaman</h4>
                <img
                  src={frame}
                  alt="#"
                  className={openAccordionIndex === index ? "rotate" : "180"}
                />
              </span>
              {openAccordionIndex === index && (
                <span className="acardion-text">
                  Arzon narxlar kafolati bilan Toshkentda dezinfeksiya
                  +977572010 raqamiga qo'ng'iroq qiling. Dezinseksiya -
                  odamlarga yaqinligi istalmagan har qanday hasharotlarni yo'q
                  qilish tartibi. Toshkentda dezinfeksiya. hasharotlar va
                  tarakanlardan.
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
