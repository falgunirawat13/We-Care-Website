import React from "react";
import "../styles/home.css";
import { Container, Row, Col } from "react-bootstrap";
import {
  MDBCarousel,
  MDBCarouselItem,
} from "mdb-react-ui-kit";
import what3 from "../assets/images/whatwedo3.jpg";

const AboutUs = () => {
  return (
    <section className="Who">
    <Container>
      <Row>
        <Col
          lg="6"
          className="text-center"
          style={{ marginLeft: "-40px", marginRight: "20px" }}
        >
          <MDBCarousel showIndicators fade>
            <MDBCarouselItem
              className="w-100 d-block"
              itemId={1}
              alt="..."
              src={what3}
              style={{
                height: "390px",
                borderRadius: "0",
                objectFit: "cover",
              }}
            ></MDBCarouselItem>

            <MDBCarouselItem
              className="w-100 d-block"
              itemId={2}
              src={what3}
              alt="..."
              style={{
                height: "390px",
                borderRadius: "0",
                objectFit: "cover",
              }}
            >
              {/* <h5>Second slide label</h5>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </MDBCarouselItem>

            <MDBCarouselItem
              className="w-100 d-block"
              itemId={3}
              src={what3}
              alt="..."
              style={{
                height: "390px",
                borderRadius: "0",
                objectFit: "cover",
              }}
            >
              {/* <h5>Third slide label</h5>
    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
            </MDBCarouselItem>

            <MDBCarouselItem
              className="w-100 d-block "
              itemId={4}
              src={what3}
              alt="..."
              style={{
                height: "390px",
                borderRadius: "0",
                objectFit: "cover",
              }}
            >
              {/* <h5>Fourth slide label</h5>
    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
            </MDBCarouselItem>

            <MDBCarouselItem
              className="w-100 d-block"
              itemId={5}
              src={what3}
              alt="..."
              style={{
                height: "410px",
                borderRadius: "0",
                objectFit: "cover",
              }}
            >
              {/* <h5>Fifth slide label</h5>
    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
            </MDBCarouselItem>
          </MDBCarousel>
        </Col>
        <Col lg="6" className="Content1">
          <div>
            <div className="aboutheading">
              <a href="/AboutUs">
                <h4 style={{ color: "black" }}>About Us</h4>
              </a>
            </div>
            <h1 class="main-head">WHO WE ARE</h1>
            <p>
              {" "}
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
              your support, we aim to make a lasting impact on the lives
              of those we serve.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
  )
}

export default AboutUs