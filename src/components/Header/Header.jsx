import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaBars } from 'react-icons/fa';
import './Header.css';

function Header() {
  const isSmallScreen = useMediaQuery({ maxWidth: 767 }); // Define the breakpoint for small screens

  return (
    <Navbar expand="lg" className="sticky-top" style={{ backgroundColor: 'rgb(132, 202, 229)' }}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <FaBars />
        </Navbar.Toggle>
        {isSmallScreen && (
          <Link to="/donate" className="donate" style={{ fontSize: '20px', fontWeight: '600', marginLeft: 'auto' }}>
            DONATE NOW
          </Link>
        )}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100 justify-content-evenly nav-link">
            <Nav.Link style={{ fontSize: '20px', fontWeight: '600' }} href="/Home">HOME</Nav.Link>
            <NavDropdown title="ABOUT" id="about-nav-dropdown" style={{ fontSize: '20px', fontWeight: '600' }}>
              <NavDropdown.Item href="/HowWeStarted" style={{ fontSize: '20px', fontWeight: '600' }}>HOW WE STARTED</NavDropdown.Item>
              <NavDropdown.Item href="/WhereWeWork" style={{ fontSize: '20px', fontWeight: '600' }}>
                WHERE WE WORK
              </NavDropdown.Item>
              <NavDropdown.Item style={{ fontSize: '20px', fontWeight: '600' }} href="/OurTeam">OUR TEAM</NavDropdown.Item>
              <NavDropdown.Item style={{ fontSize: '20px', fontWeight: '600' }} href="/Certifications">
                CERTIFICATION
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/Campaigns" style={{ fontSize: '20px', fontWeight: '600' }}>OUR INITIATIVES</Nav.Link>
            <Nav.Link href="/impact" style={{ fontSize: '20px', fontWeight: '600' }}>IMPACT</Nav.Link>
            <Nav.Link href="/ourwork" style={{ fontSize: '20px', fontWeight: '600' }}>BLOGS</Nav.Link>
            <NavDropdown title="GET INVOLVED" id="get-involved-nav-dropdown" style={{ fontSize: '20px', fontWeight: '600' }}>
              <NavDropdown.Item style={{ fontSize: '20px', fontWeight: '600' }} href="#action/3.1">VOLUNTEERSHIP PROGRAM</NavDropdown.Item>
              <NavDropdown.Item style={{ fontSize: '20px', fontWeight: '600' }} href="#action/3.2">
                SPONSORSHIP PROGRAM
              </NavDropdown.Item>
              <NavDropdown.Item style={{ fontSize: '20px', fontWeight: '600' }} href="#action/3.3">PARTNER WITH US</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="MEDIA" id="media-nav-dropdown" style={{ fontSize: '20px', fontWeight: '600' }}>
              <NavDropdown.Item style={{ fontSize: '20px', fontWeight: '600' }} href="#action/3.1">IMAGES</NavDropdown.Item>
              <NavDropdown.Item style={{ fontSize: '20px', fontWeight: '600' }} href="#action/3.2">
                VIDEOS
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link style={{ fontSize: '20px', fontWeight: '600' }} href="/contactus">CONTACT US</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
