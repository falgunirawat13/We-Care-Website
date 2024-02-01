import React, { useState } from "react";
import "../styles/home.css";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import card11 from "../assets/images/bachpanshala.jpg";
import card22 from "../assets/images/menstrual.jpg";
import card33 from "../assets/images/Bichona.jpg";
import card44 from "../assets/images/Road.jpg";
import card55 from "../assets/images/Charity Cup.jpg";
import card66 from "../assets/images/plantation.jpg";
import TreesPlantedAnimation from "./countup";
import LivesImpactedAnimation from "./countuplives";
import PlaysAnimation from "./countupplays";
import SchoolsAnimation from "./countupschools";
import growingtree from "../assets/images/growingtree.png";
import school from "../assets/images/school.png";
import thumbsup from "../assets/images/thumbsup.png";
import streetplays from "../assets/images/streetplays.png";
import { MDBAccordion, MDBAccordionItem, MDBIcon } from "mdb-react-ui-kit";
import Testimonials from "./testimonials";
import Carous from "./Carous";
import Whowe from "./whowe";
import Whatwe from "./whatwe";

const Home = () => {
  const [showAdditionalCards, setShowAdditionalCards] = useState(false);
  return (
    <>
      <section>
        <Carous />
      </section>
      <section className="What1">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                <MDBIcon fas icon="quote-left" className="pe-2" />
                <span style={{ fontStyle: "italic" }}>
                  There is no greater violence than to deny the dreams of our
                  children.
                </span>
                <MDBIcon fas icon="quote-right" className="pe-2" />
                <br />
                Kailash Satyarthi, Nobel Laurate in Peace
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="Who">
        <Whowe />
      </section>
      <section className="What">
        <Whatwe />
      </section>
      <section className="Camp">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h1 class="main-head" style={{ marginTop: "1%" }}>
                OUR INITIATIVES
              </h1>
              <p> <MDBIcon fas icon="quote-left" className="pe-2" /> 
              The only way to do great work is to love what you do {" "}
              <MDBIcon fas icon="quote-right" className="pe-2" /></p>
              <p>
                Explore how our initiatives create positive changes amid the
                complexities of our ever-changing world.
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

                <Col lg="4" md="6" sm="12" style={{ marginBottom: "3%" }}>
                  <Card className="cardcamp" style={{ width: "100%" }}>
                    <Card.Img className="cardi" variant="top" src={card66} />
                    <Card.Body className="text-center d-flex flex-column align-items-center">
                      <Card.Title className="text-center">
                        DONATION DRIVE
                      </Card.Title>
                      <Card.Text className="Content5">
                        Rooted in the principle of "Alone we can do so little;
                        together we can do so much”, WeCare spreads joy through
                        vibrant donation drives. In the past, we shared smiles
                        by providing clothing to children and older individuals
                        in need. Simultaneously, our heartfelt food donation
                        drive has touched the lives of both homeless individuals
                        on the streets and our furry friends, the stray animals.
                        These endeavors reflect our unwavering commitment to
                        making the world a brighter, happier place, one act of
                        generosity at a time.
                      </Card.Text>
                      <Button variant="primary">Explore More</Button>
                    </Card.Body>
                  </Card>
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
              <MDBIcon fas icon="quote-left" className="pe-2" />
              It’s not about how much we give, but how much love we put into giving {" "}
              <MDBIcon fas icon="quote-right" className="pe-2" />
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
        {/* testimonials */}
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
