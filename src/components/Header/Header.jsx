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
            <h2 className="head-text">Dezinfeksiya Hizmati</h2>
            <p className="head-text-1">
              Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan
              kompaniyamiz Mijozlarimiz bizdan mamnun
            </p>
            <Button className="head-btn">{t("connection")}</Button>
          </Col>
          <Col>
            <img className="head-img" src={imgHead} alt="imp" />
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
