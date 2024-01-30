import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
// import navIcon2 from "../assets/img/nav-icon2.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <h1 style={{ color: "white", fontFamily: "revert-layer" }}>360Marco</h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end" style={{ color: "white" }}>
            <p style={{ color: "white", fontFamily: "revert-layer" }}>360 Marketing Concepts LLC</p>
            <p style={{ color: "white", fontFamily: "revert-layer" }}>9314 Forest Hill Blvd Wellington, FL 33411, USA</p>
            <p style={{ color: "white", fontFamily: "revert-layer" }}>+1 (561) 424-6023</p>
            <p style={{ color: "white", fontFamily: "revert-layer" }}>Copyright 2024. All Rights Reserved</p>
            <a href="mailto:info@360marco.com" style={{ color: "white" }}>
              info@360marco.com
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
