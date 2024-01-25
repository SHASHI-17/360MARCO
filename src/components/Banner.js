import { useState, useEffect, useMemo } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  // Wrap the initialization of 'toRotate' in useMemo
  const toRotate = useMemo(() => ["Lists: The Foundation of Success", "Appending: Elevate Your Data to New Heights", "Marketing: Engage, Grow, and Succeed"], []);

  const period = 2000;

  useEffect(() => {
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(500);
      }
    };

    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, delta, loopNum, isDeleting, setLoopNum, setText, setIsDeleting, toRotate, period]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to 360 Marco</span>
                  <h1>{`Email `} <span className="txt-rotate" data-period="1000" data-rotate='[ "Lists: The Foundation of Success", "Appending: Elevate Your Data to New Heights", "Marketing: Engage, Grow, and Succeed" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Supercharge Your Email Marketing with
                    360 Marketing Concepts
                    Elevate Engagement and Conversion Rates with our Dynamic Email Marketing Solutions</p>

                  <Nav.Link  style={{
                    "color": 'white',
                    "fontSize": "1.5rem","fontWeight":"semiBold"
                  }} href={'#connect'} >Let’s Connect  <span className="lets"><ArrowRightCircle size={25} /></span></Nav.Link>

                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
