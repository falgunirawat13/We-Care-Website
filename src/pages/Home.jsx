import React, { useState } from "react";
import "../styles/home.css";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import carousel2 from "../assets/images/carousel2.jpg";
import who1 from "../assets/images/whoweare1.JPG";
import what1 from "../assets/images/whatwedo1.JPG";
import what2 from "../assets/images/whatwedo2.JPG";
import what3 from "../assets/images/whatwedo3.jpg";
import card11 from "../assets/images/bachpanshala.jpg";
import card22 from "../assets/images/menstrual.jpg";
import card33 from "../assets/images/Bichona.jpg";
import card44 from "../assets/images/Road.jpg";
import card55 from "../assets/images/Charity Cup.jpg";
import TreesPlantedAnimation from "./countup";
import LivesImpactedAnimation from "./countuplives";
import PlaysAnimation from "./countupplays";
import SchoolsAnimation from "./countupschools";
import growingtree from "../assets/images/growingtree.png";
import school from "../assets/images/school.png";
import thumbsup from "../assets/images/thumbsup.png";
import streetplays from "../assets/images/streetplays.png";
import {
  MDBCarousel,
  MDBAccordion,
  MDBAccordionItem,
  MDBCarouselItem,
} from "mdb-react-ui-kit";
import Testimonials from "./testimonials";

const Home = () => {
  const [showAdditionalCards, setShowAdditionalCards] = useState(false);
  return (
    <>
      <section>
        <div>
          <MDBCarousel showIndicators>
            <MDBCarouselItem
              className="w-100 d-block"
              itemId={1}
              alt="..."
              src={carousel2}
              style={{ height: "600px", borderRadius: "0", objectFit: "cover" }}
            >
              {/* <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </MDBCarouselItem>

            <MDBCarouselItem
              className="w-100 d-block"
              itemId={2}
              src={carousel2}
              alt="..."
              style={{ height: "600px", borderRadius: "0", objectFit: "cover" }}
            >
              {/* <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </MDBCarouselItem>

            <MDBCarouselItem
              className="w-100 d-block"
              itemId={3}
              src={carousel2}
              alt="..."
              style={{
                height: "600px",
                borderRadius: "0",
                objectFit: "cover",
                paddingTop: "1px",
                paddingBottom: "1px",
              }}
            >
              {/*   <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
            </MDBCarouselItem>

            <MDBCarouselItem
              className="w-100 d-block "
              itemId={4}
              src={carousel2}
              alt="..."
              style={{ height: "600px", borderRadius: "0", objectFit: "cover" }}
            >
              {/* <h5>Fourth slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
            </MDBCarouselItem>

            <MDBCarouselItem
              className="w-100 d-block"
              itemId={5}
              src={carousel2}
              alt="..."
              style={{ height: "600px", borderRadius: "0", objectFit: "cover" }}
            >
              {/* <h5>Fifth slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
            </MDBCarouselItem>
          </MDBCarousel>
        </div>
      </section>
      <section className="Who">
        <Container>
          <Row>
          <Col lg="6" style={{ marginLeft: "1px" }}>
              <MDBCarousel showIndicators>
                <MDBCarouselItem
                  className="w-100 d-block"
                  itemId={1}
                  alt="..."
                  src={who1}
                  style={{
                    height: "390px",
                    borderRadius: "0",
                    objectFit: "cover",
                  }}
                ></MDBCarouselItem>

                <MDBCarouselItem
                  className="w-100 d-block"
                  itemId={2}
                  src={what2}
                  alt="..."
                  style={{
                    height: "390px",
                    borderRadius: "0",
                    objectFit: "cover",
                  }}
                ></MDBCarouselItem>

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
                ></MDBCarouselItem>

                <MDBCarouselItem
                  className="w-100 d-block "
                  itemId={4}
                  src={what1}
                  alt="..."
                  style={{
                    height: "390px",
                    borderRadius: "0",
                    objectFit: "cover",
                  }}
                ></MDBCarouselItem>

                <MDBCarouselItem
                  className="w-100 d-block"
                  itemId={5}
                  src={what1}
                  alt="..."
                  style={{
                    height: "390px",
                    borderRadius: "0",
                    objectFit: "cover",
                  }}
                ></MDBCarouselItem>
              </MDBCarousel>
            </Col>
            <Col lg="6" style={{ marginLeft: "-2px" }}>
              <div className="Content1">
                <div className="Main2">
                <div className="aboutheading">
            <a href="/AboutUs">
              <h4 style={{ color: "black" }}>About Us</h4>
            </a>
          </div>
          <h1 className="main-head">WHO WE ARE</h1>
          <p>
            Founded on the belief that small actions can lead to significant change, WeCare is just a group of teenagers trying to make a difference in the lives of the underprivileged section of society.
            <br />
            <br />
            Our goal is to empower communities, nurture dreams, and create a world where everyone has the opportunity to thrive.
            <br />
            <br />
            At the heart of our mission is Bachpanshala, a project that bridges the gap between dreams and reality, and together with your support, we aim to make a lasting impact on the lives of those we serve.
          </p>
        </div>
                
              </div>
            </Col>
          
          </Row>
        </Container>
      </section>
      <section className="What">
        <Container>
          <Row>
            <Col lg="6" style={{ marginLeft: "-42px" }}>
              <div className="Content2">
                <div className="Main2">
                  <h1 class="main-head">WHAT WE DO? </h1>
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
                    fostering positive change in the lives of those we serve.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="6" style={{ marginLeft: "25px" }}>
              <MDBCarousel showIndicators>
                <MDBCarouselItem
                  className="w-100 d-block"
                  itemId={1}
                  alt="..."
                  src={what1}
                  style={{
                    height: "390px",
                    borderRadius: "0",
                    objectFit: "cover",
                  }}
                ></MDBCarouselItem>

                <MDBCarouselItem
                  className="w-100 d-block"
                  itemId={2}
                  src={what2}
                  alt="..."
                  style={{
                    height: "390px",
                    borderRadius: "0",
                    objectFit: "cover",
                  }}
                ></MDBCarouselItem>

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
                ></MDBCarouselItem>

                <MDBCarouselItem
                  className="w-100 d-block "
                  itemId={4}
                  src={what1}
                  alt="..."
                  style={{
                    height: "390px",
                    borderRadius: "0",
                    objectFit: "cover",
                  }}
                ></MDBCarouselItem>

                <MDBCarouselItem
                  className="w-100 d-block"
                  itemId={5}
                  src={what1}
                  alt="..."
                  style={{
                    height: "390px",
                    borderRadius: "0",
                    objectFit: "cover",
                  }}
                ></MDBCarouselItem>
              </MDBCarousel>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="Camp">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h1 class="main-head" style={{ marginTop: "1%" }}>
                OUR INITIATIVES
              </h1>
              <p>
                {" "}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi,
                itaque!
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
                ipsam sequi esse rerum mollitia deserunt. Sint dolore quam
                magnam quos.
              </p>
              <br />
            </Col>
            <Col lg="4" md="6" sm="12" style={{ marginBottom: "3%" }}>
              <Card className="cardcamp" style={{ width: "100%" }}>
                <Card.Img className="cardi" variant="top" src={card11} />
                <Card.Body className="text-center d-flex flex-column align-items-center">
                  <Card.Title className="text-center">BACHPANSHALA</Card.Title>
                  <Card.Text className="Content5">
                    Welcome to Bachpanshala, a transformative initiative
                    pioneered by the NGO WeCare. Bachpanshala provides free
                    education to underprivileged children. Beyond traditional
                    academics, our holistic approach includes engaging sports
                    activities and vibrant celebrations of festivals, fostering
                    a dynamic learning environment. With a commitment to
                    nurturing young minds, we blend study and play, ensuring a
                    well-rounded educational experience, where every child's
                    potential is embraced and celebrated.
                  </Card.Text>
                  <Button variant="primary" className="mt-auto">
                    Explore More
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col lg="4" md="6" sm="12">
              <Card className="cardcamp" style={{ width: "100%" }}>
                <Card.Img className="cardi" variant="top" src={card22} />
                <Card.Body className="text-center d-flex flex-column align-items-center">
                  <Card.Title className="text-center">
                    MENSTRUAL HYGIENE
                  </Card.Title>
                  <Card.Text className="Content5">
                    One of the most important initiatives by WeCare, the
                    Menstrual Hygiene Initiative empowers women in villages
                    lacking awareness and essential facilities. In areas with a
                    higher female population, we've organized awareness camps,
                    educating and emphasizing the significance of proper
                    menstrual hygiene. By reaching out to these communities, we
                    aim to break taboos and ensure women have access to the
                    knowledge and resources necessary for maintaining their
                    health with dignity.
                  </Card.Text>
                  <Button variant="primary">Explore More</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col lg="4" md="6" sm="12">
              <Card className="cardcamp" style={{ width: "100%" }}>
                <Card.Img className="cardi" variant="top" src={card33} />
                <Card.Body className="text-center d-flex flex-column align-items-center">
                  <Card.Title className="text-center">
                    PROJECT BICHHONA
                  </Card.Title>
                  <Card.Text className="Content5">
                    Project Bichona, a compassionate initiative driven by
                    WeCare, is dedicated to championing the cause of Animal
                    Rights. Our focus is on alleviating the struggles faced by
                    street dogs, who often endure harsh conditions without
                    proper warmth and nourishment. In our commitment to their
                    well-being, we actively provide blankets through this
                    project. This ensures these resilient animals not only
                    receive physical comfort but also the care and support
                    necessary for a significantly improved quality of life.
                  </Card.Text>
                  <Button variant="primary">Explore More</Button>
                </Card.Body>
              </Card>
            </Col>

            {showAdditionalCards && (
              <>
                {/* Render additional cards here */}
                <Col lg="4" md="6" sm="12" style={{ marginBottom: "3%" }}>
                  <Card className="cardcamp" style={{ width: "100%" }}>
                    <Card.Img className="cardi" variant="top" src={card44} />
                    <Card.Body className="text-center d-flex flex-column align-items-center">
                      <Card.Title className="text-center">
                        ROAD SAFETY CAMPAIGN
                      </Card.Title>
                      <Card.Text className="Content5">
                        The Road Safety initiative was a crucial aspect of our
                        commitment to community welfare. Road Safety was a
                        month-long campaign by We Care to bring a change. From
                        conducting nukkad natakas and plays to demonstrate the
                        cruciality of human life, WeCare also organized rallies
                        on roads and drawing competitions in various schools to
                        address the need for road safety awareness. We Care
                        collaborated with multiple welfare organizations to echo
                        the lesson of road safety to a larger audience.
                      </Card.Text>
                      <Button variant="primary">Explore More</Button>
                    </Card.Body>
                  </Card>
                </Col>

                <Col lg="4" md="6" sm="12" style={{ marginBottom: "3%" }}>
                  <Card className="cardcamp" style={{ width: "100%" }}>
                    <Card.Img className="cardi" variant="top" src={card55} />
                    <Card.Body className="text-center d-flex flex-column align-items-center">
                      <Card.Title className="text-center">
                        CHARITY CUP
                      </Card.Title>
                      <Card.Text className="Content5">
                        The WeCare Charity Cup, an annual initiative by our
                        dedicated NGO, transcends sports. More than a football
                        tournament, it symbolizes collective compassion and
                        impactful change. Undoubtedly, this stands out as the
                        most dynamic and captivating event of the year. With
                        every goal scored, we fundraise for crucial causes,
                        championing the spirit of giving. Participants,
                        sponsors, and supporters unite work collectively to make
                        a lasting difference in the lives of those in need.
                      </Card.Text>
                      <Button variant="primary">Explore More</Button>
                    </Card.Body>
                  </Card>
                </Col>

                <Col lg="4" md="6" sm="12">
                  {/* Additional Card 3 */}
                </Col>
              </>
            )}

            {/* Add a "Next" button */}
            <Col
              lg="12"
              className="text-center"
              style={{ marginTop: "1px", marginBottom: "20px" }}
            >
              <Button
                variant="primary"
                onClick={() => setShowAdditionalCards(!showAdditionalCards)}
              >
                {showAdditionalCards ? "Less" : "More"}
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="impact" style={{ background: " #c7fbff" }}>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h1 className="main-head" style={{ marginTop: "2%" }}>
                OUR IMPACT
              </h1>
              <p>
                “No step is too small on the road to social reform.” <br />
                Focusing on bringing change from the bottom-up, we have curated
                campaigns focused on the grassroots level, with our impact
                reaching far and wide.
              </p>
            </Col>
          </Row>
          <Row className="animated" style={{ gap: "2%" }}>
            <Col
              className="animsection text-center impactCard"
              style={{ borderRadius: "15px" }}
            >
              <img
                className="move-up-image " // Added mb-3 class for margin-bottom
                src={growingtree}
                alt="growingtree"
                style={{ width: "80%", height: "68%" }}
              />
              <TreesPlantedAnimation />
              <h3 class="main-head1">CLASSES TAUGHT</h3>
            </Col>
            <Col
              className="animsection text-center impactCard"
              style={{ borderRadius: "15px" }}
            >
              <img
                className="move-up-image " // Added mb-3 class for margin-bottom
                src={streetplays}
                alt="streetplay"
                style={{
                  width: "95%",
                  height: "80%",
                  marginBottom: "-20px",
                  marginTop: "-21px",
                }}
              />
              <PlaysAnimation />
              <h3 class="main-head1">STUDENTS</h3>
            </Col>
            <Col
              className="animsection text-center impactCard"
              style={{ borderRadius: "15px" }}
            >
              <img
                className="move-up-image " // Added mb-3 class for margin-bottom
                src={thumbsup}
                alt="school"
                style={{
                  width: "102%",
                  height: "57%",
                  borderRadius: "0px",
                  marginTop: "40px",
                }}
              />
              <LivesImpactedAnimation />
              <h3 class="main-head1">LIVES IMPACTED</h3>
            </Col>
            <Col
              className="animsection text-center impactCard"
              style={{ borderRadius: "15px" }}
            >
              <img
                className="move-up-image" // Added mb-3 class for margin-bottom
                src={school}
                alt="schools"
                style={{ width: "89%", height: "70%", marginBottom: "-7px" }}
              />
              <SchoolsAnimation />
              <h3 class="main-head1">ANIMALS SERVED</h3>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="Who">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h1 class="main-head">TESTIMONIALS</h1>
            </Col>
          </Row>

          <Row>
            <Testimonials />
          </Row>
        </Container>
      </section>
      <section className="question">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h1
                class="main-head"
                style={{ marginTop: "2%", marginBottom: "1%" }}
              >
                QUESTIONS ?
              </h1>
            </Col>
          </Row>
          <Row>
            <Row>
              <br />
            </Row>
          </Row>
          <Row>
            <Col lg="6">
              <MDBAccordion>
                {/* initialActive={1} */}
                <MDBAccordionItem
                  collapseId={1}
                  headerTitle="Accordion Item #1"
                  style={{ marginBottom: "10px" }}
                >
                  t's also worth noting that just about any HTML can go within
                  the
                </MDBAccordionItem>
                <MDBAccordionItem
                  collapseId={2}
                  headerTitle="Accordion Item #2"
                  style={{ marginBottom: "10px" }}
                >
                  hough the transition does limit overflow.
                </MDBAccordionItem>
                <MDBAccordionItem
                  collapseId={3}
                  headerTitle="Accordion Item #3"
                  style={{ marginBottom: "10px" }}
                >
                  though the transition does limit overflow.
                </MDBAccordionItem>
                <MDBAccordionItem
                  collapseId={4}
                  headerTitle="Accordion Item #4"
                  style={{ marginBottom: "10px" }}
                >
                  <strong>This is the third item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </MDBAccordionItem>
                <MDBAccordionItem
                  collapseId={5}
                  headerTitle="Accordion Item #5"
                  style={{ marginBottom: "10px" }}
                >
                  <strong>This is the third item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </MDBAccordionItem>
              </MDBAccordion>
            </Col>
            <Col lg="6">
              <MDBAccordion>
                <MDBAccordionItem
                  collapseId={1}
                  headerTitle="Accordion Item #1"
                  style={{ marginBottom: "10px" }}
                >
                  well as the showing and hiding via CSS transitions. You can
                  modify any of this with custom CSS or overriding our default
                  variables. It's also worth noting that just about any HTML can
                  go within the <code>.accordion-body</code>, though the
                  transition does limit overflow.
                </MDBAccordionItem>
                <MDBAccordionItem
                  collapseId={2}
                  headerTitle="Accordion Item #2"
                  style={{ marginBottom: "10px" }}
                >
                  It is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with
                </MDBAccordionItem>
                <MDBAccordionItem
                  collapseId={3}
                  headerTitle="Accordion Item #3"
                  style={{ marginBottom: "10px" }}
                >
                  <strong>This is the third item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding
                </MDBAccordionItem>
                <MDBAccordionItem
                  collapseId={4}
                  headerTitle="Accordion Item #4"
                  style={{ marginBottom: "10px" }}
                >
                  <strong>This is the third item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </MDBAccordionItem>
                <MDBAccordionItem
                  collapseId={5}
                  headerTitle="Accordion Item #5"
                >
                  <strong>This is the third item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </MDBAccordionItem>
              </MDBAccordion>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
