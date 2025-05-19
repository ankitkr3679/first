import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import "../../styles/Headerstyle.css";
import Logo from "../../assets/logo/logo.png";

function Header() {
  const [nav, setNav] = useState(false);
  const [expanded, setExpanded] = useState(false); // toggle state

  // Scroll effect for sticky navbar
  const changeValueOnScroll = () => {
    const scrollValue = document?.documentElement?.scrollTop;
    setNav(scrollValue > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeValueOnScroll);
    return () => window.removeEventListener("scroll", changeValueOnScroll);
  }, []);

  // Scroll and close toggle on nav click
  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setExpanded(false); // close the toggle
  };

  return (
    <header header >
      <Navbar
        collapseOnSelect
        expand="xl"
        expanded={expanded}
        onToggle={() => setExpanded(prev => !prev)}
        className={`${nav ? "sticky" : ""}`}
      >
        <Container>

          {/* Mobile Layout (visible below 1200px) */}
          <div className="d-flex d-xl-none w-100 justify-content-between align-items-center mobile-header">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <a href="#home" className="logo mx-auto">
              <img src={Logo} alt="Logo" className="img-fluid" />
            </a>
            <a href="#cart" className="cart">
              <i className="bi bi-bag fs-5"></i>
              <em className="roundpoint">3</em>
            </a>
          </div>

          {/* Main Brand (hidden below xl) */}
          <Navbar.Brand className="d-none d-xl-block">
            <a href="#home" className="logo">
              <img src={Logo} alt="Logo" className="img-fluid" />
            </a>
          </Navbar.Brand>

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link onClick={() => handleNavClick("home")}>Home</Nav.Link>
              <Nav.Link onClick={() => handleNavClick("about")}>About</Nav.Link>
              <Nav.Link onClick={() => handleNavClick("menu")}>Our Menu</Nav.Link>
              <Nav.Link onClick={() => handleNavClick("shop")}>Shop</Nav.Link>
              <Nav.Link onClick={() => handleNavClick("blog")}>Blog</Nav.Link>
              <Nav.Link onClick={() => handleNavClick("contact")}>Contact</Nav.Link>
              <Nav.Link href="#cart" className="d-none d-xl-block">
                <div className="cart">
                  <i className="bi bi-bag fs-5"></i>
                  <em className="roundpoint">3</em>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>

  );
}

export default Header;
