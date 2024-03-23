import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationsEn from "./locale/traslationsEn";
import translationsUz from "./locale/translationUz";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationsEn },
    uz: { translation: translationsUz },
  },
  lng: "en",
  fallbackLng: "en",
});

function App() {
  const changeLang = (value) => {
    i18n.changeLanguage(value);
  };
  return (
    <div className="app-container">
      <Navbar changeLang={changeLang} />
      <Header />
      <Main />

      <Footer />
    </div>
  );
}

export default App;
