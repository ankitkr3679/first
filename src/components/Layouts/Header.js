import React, { useState, useEffect } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import "../../styles/Headerstyle.css"
import { Link } from 'react-router-dom';
import Logo from "../../assets/logo/logo.png"

function Header() {
  const [nav, setNav] = useState(false);

  // Scroll Navbar
  const changeValueOnScroll = () => {
    const scrollValue = document?.documentElement?.scrollTop;
    scrollValue > 50 ? setNav(true) : setNav(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", changeValueOnScroll);
    return () => window.removeEventListener("scroll", changeValueOnScroll);
  }, []);
  return (
    <header>
      <Navbar collapseOnSelect expand="lg"
        className={`${nav ? "sticky" : ""}`}
      >
        <Container>
          <Navbar.Brand href="#home">
            <Link to="/" className="logo">
              <img src={Logo} alt="Logo" className='img-fluid' />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/"> Home</Nav.Link>
              <Nav.Link as={Link} to="/"> About</Nav.Link>
              <Nav.Link as={Link} to="/"> Our Menu</Nav.Link>
              <Nav.Link as={Link} to="/"> Shop</Nav.Link>
              <Nav.Link as={Link} to="/"> Blog</Nav.Link>
              <Nav.Link as={Link} to="/"> Contact</Nav.Link>
              <Nav.Link as={Link} to="/">
                <div className='cart'>
                  <i class="bi bi-bag fs-5"></i>
                  <em className='roundpoint'>3</em>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </header>
  );
}

export default Header