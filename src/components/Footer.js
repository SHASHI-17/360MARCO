import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import navIcon2 from "../assets/img/nav-icon2.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
          <h1 style={{color:"white" ,fontFamily:"revert-layer"}}>360Marco</h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              {/* <p><img src={navIcon1} alt="Icon" /></p> */}
              <a href="https://www.facebook.com/360marketingconcepts"><img src={navIcon2} alt="Icon" /></a>
              {/* <p href="#"><img src={navIcon3} alt="Icon" /></p> */}
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
