import React, { useState, useEffect } from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import { Container, Row, Col } from "react-bootstrap";
import what1 from "../assets/images/whatwedo1.JPG";
import what2 from "../assets/images/whatwedo2.JPG";
import what3 from "../assets/images/whatwedo3.jpg";
import what4 from "../assets/images/whatwedo4.jpg";
import what5 from "../assets/images/whatwedo5.jpg";
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
          <Col className="whatwe2" lg="6" md="12" style={{ marginLeft: "-42px" }}>
            <div className="Content2">
              <div className="Main2">
                <h1 className="main-head">WHAT WE DO </h1>
                <br />
                <p>
                  At WeCare, we shift compassion into concrete change. We're
                  dedicated to providing quality education, ensuring essential
                  healthcare access, supporting communities, spreading
                  awareness, and advocating for vital causes.
                  <br />
                  <br />
                  Our Bachpanshala is a project that shrinks the gap between
                  dreams and reality by teaching underprivileged children. We
                  also offer volunteering opportunities, and our collective
                  efforts are focused on turning dreams into reality and
                  fostering positive change in the lives of those we serve.
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" style={{ marginLeft: "1px" }}>
            <MDBCarousel showIndicators>
              <MDBCarouselItem
                className={`w-100 d-block ${
                  isSmallScreen ? "carousel-item-small" : "carousel-item-large"
                }`}
                itemId={1}
                alt="..."
                src={what1}
              >
                {/* Content for the carousel item */}
              </MDBCarouselItem>
              <MDBCarouselItem
                className={`w-100 d-block ${
                  isSmallScreen ? "carousel-item-small" : "carousel-item-large"
                }`}
                itemId={2}
                alt="..."
                src={what2}
              >
                {/* Content for the carousel item */}
              </MDBCarouselItem>
              <MDBCarouselItem
                className={`w-100 d-block ${
                  isSmallScreen ? "carousel-item-small" : "carousel-item-large"
                }`}
                itemId={3}
                alt="..."
                src={what3}
              ></MDBCarouselItem>
              <MDBCarouselItem
                className={`w-100 d-block ${
                  isSmallScreen ? "carousel-item-small" : "carousel-item-large"
                }`}
                itemId={4}
                alt="..."
                src={what4}
              >
                {/* Content for the carousel item */}
              </MDBCarouselItem>
              <MDBCarouselItem
                className={`w-100 d-block ${
                  isSmallScreen ? "carousel-item-small" : "carousel-item-large"
                }`}
                itemId={5}
                alt="..."
                src={what5}
              >
                {/* Content for the carousel item */}
              </MDBCarouselItem>
            </MDBCarousel>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Whowe;
