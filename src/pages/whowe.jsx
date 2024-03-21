import React, { useState, useEffect } from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import { Container, Row, Col } from "react-bootstrap";
import who1 from "../assets/images/whoweare1.JPG";
import who2 from "../assets/images/whoweare2.jpg";
import who3 from "../assets/images/whoweare3.jpg";
import who4 from "../assets/images/whoweare4.jpg";
import who5 from "../assets/images/whoweare5.JPG";
import "../styles/Whowe.css";

const Whowe = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 767);
    };

    // Initial check on mount
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col lg="6" style={{ marginLeft: "1px" }}>
            <MDBCarousel showIndicators>
              <MDBCarouselItem
                className={`w-100 d-block ${
                  isSmallScreen ? "carousel-item-small" : "carousel-item-large"
                }`}
                itemId={1}
                alt="..."
                src={who1}
              >
                {/* Content for the carousel item */}
              </MDBCarouselItem>
              <MDBCarouselItem
                className={`w-100 d-block ${
                  isSmallScreen ? "carousel-item-small" : "carousel-item-large"
                }`}
                itemId={2}
                alt="..."
                src={who2}
              >
                {/* Content for the carousel item */}
              </MDBCarouselItem>
              <MDBCarouselItem
                className={`w-100 d-block ${
                  isSmallScreen ? "carousel-item-small" : "carousel-item-large"
                }`}
                itemId={3}
                alt="..."
                src={who3}
              ></MDBCarouselItem>
              <MDBCarouselItem
                className={`w-100 d-block ${
                  isSmallScreen ? "carousel-item-small" : "carousel-item-large"
                }`}
                itemId={4}
                alt="..."
                src={who4}
              >
                {/* Content for the carousel item */}
              </MDBCarouselItem>
              <MDBCarouselItem
                className={`w-100 d-block ${
                  isSmallScreen ? "carousel-item-small" : "carousel-item-large"
                }`}
                itemId={5}
                alt="..."
                src={who5}
              >
                {/* Content for the carousel item */}
              </MDBCarouselItem>
            </MDBCarousel>
          </Col>
          <Col lg="6" style={{ marginLeft: "-2px" }}>
            <div className="Content1">
              <div className="Main2">
                <div className="aboutheading">
                  <a href="/AboutUs">
                    <h4
                      style={{
                        color: "black",
                        textAlign: "center",
                        marginTop: "12px",
                      }}
                    >
                      About Us
                    </h4>
                  </a>

                  <h1 className="main-head" style={{ marginTop: "2px" }}>
                    WHO WE ARE
                  </h1>
                </div>
                <p>
                  Founded on the belief that small actions can lead to
                  significant change, WeCare is just a group of teenagers trying
                  to make a difference in the lives of the underprivileged
                  section of society.
                  <br />
                  <br />
                  Our goal is to empower communities, nurture dreams, and create
                  a world where everyone has the opportunity to thrive.
                  <br />
                  <br />
                  At the heart of our mission is Bachpanshala, a project that
                  bridges the gap between dreams and reality, and together with
                  your support, we aim to make a lasting impact on the lives of
                  those we serve.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      
    </>
  );
};

export default Whowe;
