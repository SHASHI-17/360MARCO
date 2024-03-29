import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Map from "./Map";
// import { Link } from "react-router-dom";
export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }

  const submitHandler = () => {
    // if(formDetails.email || formDetails.firstName || formDetails.lastName || formDetails.message || formDetails.phone){

    // }
    const mailtoLink = `mailto:quantumfunnelyzers@gmail.com?subject=Regarding Your Email Marketing with 360 Marketing Concepts&body=${formDetails.message}%0A%0A${`Thank you`}%0A${formDetails.firstName}${` `}${formDetails.lastName}%0APhone: ${formDetails.phone}`;


    window.location.href = mailtoLink;
  }

  const [hasInteracted, setHasInteracted] = useState(false);
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form onSubmit={() => {
                    if (!formDetails.email || !formDetails.firstName || !formDetails.lastName || !formDetails.message || !formDetails.phone) {
                      return;
                    }
                    submitHandler();
                  }} >
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input required minLength={2} type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input required minLength={2} type="text" value={formDetails.lasttName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input required type="email"
                          title="Please enter a valid email"
                          value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          required
                          type="tel"
                          pattern="[0-9]{10,}"
                          title="Please enter a valid phone number with a minimum length of 10 digits"
                          value={formDetails.phone}
                          placeholder="Phone No."
                          onChange={(e) => onFormUpdate('phone', e.target.value.replace(/\D/g, ''))}
                        />


                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          required
                          rows="6"
                          value={formDetails.message}
                          placeholder="Message"
                          onChange={(e) => {
                            onFormUpdate('message', e.target.value);
                            setHasInteracted(true);
                          }}
                        ></textarea>
                        {hasInteracted && formDetails.message.length < 16 && (
                          <p style={{ color: 'white' }}>Message must be at least 16 characters long.</p>
                        )}


                        <button type="submit"><span>Submit</span></button>
                      </Col>
                      {/* {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    } */}
                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <Map />
    </section>
  )
}
