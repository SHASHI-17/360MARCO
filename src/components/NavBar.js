import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon2 from '../assets/img/nav-icon2.svg';
import IndustryDropdown from "./IndustryDropdown";
import { useState, useEffect } from "react";
import ServiceDropdown from "./ServiceDropdown";
// import logoImg from "../assets/360marco.png";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/" className="logoImg">
          <h1 style={{ color: "white", fontFamily: "revert-layer" }}>360Marco</h1>
          {/* <img src={logoImg} className="iimg" alt="logoImg" style={{ height: "50px", marginLeft: "10px" }} /> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="/" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            {/* Add other navigation links as needed */}
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <IndustryDropdown />
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <ServiceDropdown />
            </div>
            <Nav.Link style={{ marginLeft: "-1.2rem" }} href="/projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Blog</Nav.Link>
            <Nav.Link style={{ marginLeft: "-1.2rem" }} href="/about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
            <Nav.Link style={{ marginLeft: "-1.2rem" }} href="/#connect" className={activeLink === 'connect' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('connect')}>Connect Us</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.facebook.com/360marketingconcepts"><img src={navIcon2} alt="" /></a>
            </div>
            <Nav.Link href='#connect'>
              <button className="vvd"><span>Let’s Connect</span></button>
            </Nav.Link>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
