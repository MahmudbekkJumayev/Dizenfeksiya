import React, { useEffect } from "react";
import "./Main.css";
import Aos from "aos";
import "aos/dist/aos.css";
import brain from "../../assets/brain.png";
import dizen from "../../assets/dizen.jpg";
import group from "../../assets/Group.png";
import secruty from "../../assets/secruty.jpg";
import dicons from "../../assets/3dicons.png";
import frame from "../../assets/frame.png";

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 }); // AOS-ni boshlang'ichlashtirish
  }, []);

  return (
    <div id="about" className="container2">
      <h3 className="cart-text" data-aos="fade-up">
        Avfzalliklarimiz
      </h3>
      <span className="line"></span>
      <div className="card">
        <div className="card-item" data-aos="fade-right">
          <img src={brain} alt="#" />
          <h4>Tezkor Xizmat Ko'rsatish</h4>
          <p>
            Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan
            kompaniyamiz Mijozlarimiz bizdan mamnun
          </p>
        </div>
        <div className="card-item" data-aos="fade-right">
          <img src={brain} alt="#" />
          <h4>Yetuk mutahasislaimiz</h4>
          <p>
            Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan
            kompaniyamiz Mijozlarimiz bizdan mamnun
          </p>
        </div>
        <div className="card-item" data-aos="fade-right">
          <img src={brain} alt="#" />
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
          <button className="dizen-btn">Bog'lanish</button>
        </div>
      </div>
      {/* servises */}
      <div id="servis" className="servise" data-aos="fade-up-right">
        <h4>Service</h4>
        <p>Bu darsliklari sizning yuqori daraja olishingizga yordam beradi</p>
        <div className="service-card">
          <div className="service-card-item">
            <h4>Boshlang’ich tushunchalar</h4>
            <p>nazariy bilimlar 16 dars</p>

            <img src={group} alt="#" />
          </div>
          <div className="service-card-item">
            <h4>Boshlang’ich tushunchalar</h4>
            <p>nazariy bilimlar 16 dars</p>

            <img src={group} alt="#" />
          </div>
          <div className="service-card-item">
            <h4>Boshlang’ich tushunchalar</h4>
            <p>nazariy bilimlar 16 dars</p>

            <img src={group} alt="#" />
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
          <button className="secruty-btn">Bog'lanish</button>
        </div>
      </div>
      {/* comment */}
      <div className="comment">
        <div className="comment-faq">
          <h4>FAQ</h4>
        </div>
        <div className="acardion">
          <div className="acardion-item">
            <span>
              <h4>Kursdan nima topaman</h4>
              <img src={frame} alt="#" />
            </span>
            <span>
              Bu bir nonti kaypiday kapy darsga qatnasha olmasangiz, darsdan
              so‘ng guruhingizga zoom zapisi tashlab beriladi
            </span>
          </div>
          <div className="acardion-item">
            <span>
              <h4>Kursdan nima topaman</h4>
              <img src={frame} alt="#" />
            </span>
            <span>
              Bu bir nonti kaypiday kapy darsga qatnasha olmasangiz, darsdan
              so‘ng guruhingizga zoom zapisi tashlab beriladi
            </span>
          </div>
          <div className="acardion-item">
            <span>
              <h4>Kursdan nima topaman</h4>
              <img src={frame} alt="#" />
            </span>
            <span>
              Bu bir nonti kaypiday kapy darsga qatnasha olmasangiz, darsdan
              so‘ng guruhingizga zoom zapisi tashlab beriladi
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
