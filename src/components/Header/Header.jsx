import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import imgHead from "../../assets/hero.jpg";
import "./Header.css";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  return (
    <header>
      <Container>
        <Row className="header-container">
          <Col data-aos="fade-right">
            <h2 className="head-text">{t("dizen")}</h2>
            <p className="head-text-1">{t("head")}</p>
            <Button
              onClick={() => (window.location.href = "#faq")}
              className="head-btn"
            >
              {t("connection")}
            </Button>
          </Col>
          <Col className="head-img">
            <img src={imgHead} alt="imp" />
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
