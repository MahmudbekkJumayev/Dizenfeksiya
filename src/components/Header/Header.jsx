import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import imgHead from "../../assets/hero.jpg";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <Container>
        <Row>
          <Col xs={6} md={12} data-aos="fade-up">
            <h2 className="head-text">Dezinfeksiya Hizmati</h2>
            <p className="head-text-1">
              Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan
              kompaniyamiz Mijozlarimiz bizdan mamnun
            </p>
            <Button className="head-btn">Bog'lanish</Button>
          </Col>
          <Col xs={6} md={12}>
            <img className="head-img" src={imgHead} alt="imp" />
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
