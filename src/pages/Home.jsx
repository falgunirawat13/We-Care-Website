import React from "react";
import "../styles/home.css";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import card11 from "../assets/images/bachpanshala.jpg";
import card22 from "../assets/images/menstrual.jpg";
import card33 from "../assets/images/Bichona.jpg";
import TreesPlantedAnimation from "./countup";
import LivesImpactedAnimation from "./countuplives";
// import PlaysAnimation from "./countupplays";
import SchoolsAnimation from "./countupschools";
import StudentsAnimation from "./countupstudents";
import growingtree from "../assets/images/growingtree.png";
import school from "../assets/images/school.png";
import thumbsup from "../assets/images/thumbsup.png";
import streetplays from "../assets/images/streetplays.png";
import { MDBAccordion, MDBAccordionItem, MDBIcon } from "mdb-react-ui-kit";
import Testimonials from "./testimonials";
import Carous from "./Carous";
import Whowe from "./whowe";
import Whatwe from "./whatwe";
// import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";

const Home = () => {
  // const [showAdditionalCards, setShowAdditionalCards] = useState(false);
  // const isSmallScreen = useMediaQuery({ maxWidth: 767 });
  const navigate = useNavigate();
  const handlewomenempowermentClick = () => {
    navigate("/womenempowerment");
  };

  const handleanimalwelfareClick = () => {
    navigate("/animalwelfare");
  };

  const handleBachpanshalaClick = () => {
    navigate("/bachpanshala");
  };
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
                  children{" "}
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
        <>
          <Container>
            <Row>
              <Col lg="12" className="text-center">
                <h1 class="main-head" style={{ marginTop: "1%" }}>
                  OUR INITIATIVES
                </h1>
                <p>
                  {" "}
                  <MDBIcon fas icon="quote-left" className="pe-2" />
                  The only way to do great work is to love what you do{" "}
                  <MDBIcon fas icon="quote-right" className="pe-2" />
                </p>
                <p>
                  Explore how our initiatives create positive changes amid the
                  complexities of our ever-changing world.
                </p>
                <br />
              </Col>

              <>
                <Col lg="4" md="6" sm="12" style={{ marginBottom: "3%" }}>
                  <Card className="cardcamps" style={{ width: "100%" }}>
                    <Card.Img className="cardi" variant="top" src={card11} />
                    <Card.Body className="text-center d-flex flex-column align-items-center">
                      <Card.Title className="text-center">
                        BACHPANSHALA
                      </Card.Title>
                      <Card.Text className="Content5">
                        Welcome to Bachpanshala, a transformative and educational
                        initiative pioneered by the NGO WeCare. Bachpanshala aims to
                        provides free education to needy children.
                        Beyond traditional academics, our holistic approach
                        includes engaging sports activities and vibrant
                        celebrations of festivals, fostering a dynamic learning
                        environment. With a commitment to nurturing young minds,
                        we blend study and play, ensuring a well-rounded
                        educational experience, where every child's potential is well
                        celebrated.
                      </Card.Text>
                      <Button
                        variant="primary"
                        className="mt-auto"
                        onClick={handleBachpanshalaClick}
                      >
                        Explore More
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>

                <Col lg="4" md="6" sm="12" style={{ marginBottom: "3%" }}>
                  <Card className="cardcamps" style={{ width: "100%" }}>
                    <Card.Img className="cardi" variant="top" src={card22} />
                    <Card.Body className="text-center d-flex flex-column align-items-center">
                      <Card.Title className="text-center">
                        WOMEN EMPOWERMENT
                      </Card.Title>
                      <Card.Text className="Content5">
                        At WeCare, we prioritize women's empowerment through
                        diverse initiatives, recognizing that their success is
                        essential for building stronger and more equitable
                        communities. From educational programs to menstrual
                        hygiene drives and inclusive sports events, we equip
                        young girls with essential skills for a brighter future.
                        Our efforts extend to fostering gender equality through
                        initiatives like organizing football cups, ensuring
                        women's voices are heard, and empowering them to lead
                        fulfilling lives.
                      </Card.Text>
                      <Button
                        variant="primary"
                        className="mt-auto"
                        onClick={handlewomenempowermentClick}
                      >
                        Explore More
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>

                <Col lg="4" md="6" sm="12">
                  <Card className="cardcamps" style={{ width: "100%" }}>
                    <Card.Img className="cardi" variant="top" src={card33} />
                    <Card.Body className="text-center d-flex flex-column align-items-center">
                      <Card.Title className="text-center">
                        ANIMAL WELFARE
                      </Card.Title>
                      <Card.Text className="Content5">
                        WeCare's sincere commitment to animal welfare is
                        unwavering. Through Project Bicchona, we provide
                        blankets and essential care for street dogs, ensuring
                        their well-being during harsh conditions. Additionally,
                        we have dog food donation drives to support their
                        sustenance, reflecting our dedication to creating a
                        safer, secure and more caring environment. Join us in
                        advocating for those who cannot speak and ask for
                        themselves, as we strive to make a lasting difference in
                        their lives.
                      </Card.Text>
                      <Button
                        variant="primary"
                        className="mt-auto"
                        onClick={handleanimalwelfareClick}
                      >
                        Explore More
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              </>

              {/* {isSmallScreen && (
                <>
                  <Carousel>
                    <CarouselItem>
                      <Col lg="4" md="6" sm="12" style={{ marginBottom: "3%" }}>
                        <Card className="cardcamp" style={{ width: "100%" }}>
                          <Card.Img
                            className="cardi"
                            variant="top"
                            src={card11}
                          />
                          <Card.Body className="text-center d-flex flex-column align-items-center">
                            <Card.Title className="text-center">
                              BACHPANSHALA
                            </Card.Title>
                            <Card.Text className="Content5">
                              Welcome to Bachpanshala, a transformative
                              initiative pioneered by the NGO WeCare.
                              Bachpanshala provides free education to
                              underprivileged children. Beyond traditional
                              academics, our holistic approach includes engaging
                              sports activities and vibrant celebrations of
                              festivals, fostering a dynamic learning
                              environment. With a commitment to nurturing young
                              minds, we blend study and play, ensuring a
                              well-rounded educational experience, where every
                              child's potential is embraced and celebrated.
                            </Card.Text>
                            <Button variant="primary" className="mt-auto">
                              Explore More
                            </Button>
                          </Card.Body>
                        </Card>
                      </Col>
                    </CarouselItem>
                    <CarouselItem>
                      <Col lg="4" md="6" sm="12">
                        <Card className="cardcamp" style={{ width: "100%" }}>
                          <Card.Img
                            className="cardi"
                            variant="top"
                            src={card22}
                          />
                          <Card.Body className="text-center d-flex flex-column align-items-center">
                            <Card.Title className="text-center">
                              MENSTRUAL HYGIENE
                            </Card.Title>
                            <Card.Text className="Content5">
                              One of the most important initiatives by WeCare,
                              the Menstrual Hygiene Initiative empowers women in
                              villages lacking awareness and essential
                              facilities. In areas with a higher female
                              population, we've organized awareness camps,
                              educating and emphasizing the significance of
                              proper menstrual hygiene. By reaching out to these
                              communities, we aim to break taboos and ensure
                              women have access to the knowledge and resources
                              necessary for maintaining their health with
                              dignity.
                            </Card.Text>
                            <Button variant="primary">Explore More</Button>
                          </Card.Body>
                        </Card>
                      </Col>
                    </CarouselItem>
                    <CarouselItem>
                      <Col lg="4" md="6" sm="12">
                        <Card className="cardcamp" style={{ width: "100%" }}>
                          <Card.Img
                            className="cardi"
                            variant="top"
                            src={card33}
                          />
                          <Card.Body className="text-center d-flex flex-column align-items-center">
                            <Card.Title className="text-center">
                              PROJECT BICHHONA
                            </Card.Title>
                            <Card.Text className="Content5">
                              Project Bichona, a compassionate initiative driven
                              by WeCare, is dedicated to championing the cause
                              of Animal Rights. Our focus is on alleviating the
                              struggles faced by street dogs, who often endure
                              harsh conditions without proper warmth and
                              nourishment. In our commitment to their
                              well-being, we actively provide blankets through
                              this project. This ensures these resilient animals
                              not only receive physical comfort but also the
                              care and support necessary for a significantly
                              improved quality of life.
                            </Card.Text>
                            <Button variant="primary">Explore More</Button>
                          </Card.Body>
                        </Card>
                      </Col>
                    </CarouselItem>

                  
                  </Carousel>
                </>
              )} */}
            </Row>
          </Container>
        </>
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
                It’s not about how much we give, but how much love we put into
                giving <MDBIcon fas icon="quote-right" className="pe-2" />
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
                  width: "90%",
                  height: "75%",
                  marginBottom: "-20px",
                  marginTop: "-2px",
                }}
              />
              <StudentsAnimation />
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
                  headerTitle="What do we do in We Care?"
                  style={{ marginBottom: "10px" }}
                >
                  We Care is a social welfare non-profit organization dedicated
                  to bringing positive societal change. Operating in the fields
                  of Education, women empowerment, and animal welfare, We Care
                  provides a platform for those passionate about contributing to
                  these causes. Notable projects like Bachpanshala, Project
                  Bichhona, Menstrual Hygiene Drive are spearheaded by We Care
                  to foster impactful changes in society.
                </MDBAccordionItem>
                <MDBAccordionItem
                  collapseId={2}
                  headerTitle="How can I join We Care?"
                  style={{ marginBottom: "10px" }}
                >
                  We Care operates as a role-based organization, recruiting
                  volunteers for various roles aligned with the organization's
                  needs. Our structured recruitment process involves posting
                  vacancies on our social media platforms for positions such as
                  ground workers, teachers, photographers, HR professionals,
                  graphic designers, and more. Anyone interested in joining We
                  Care is encouraged to participate in our recruitment process,
                  contributing their skills and passion to our impactful
                  initiatives.
                </MDBAccordionItem>
                <MDBAccordionItem
                  collapseId={3}
                  headerTitle="What is Bachpanshala?"
                  style={{ marginBottom: "10px" }}
                >
                  Bachpanshala is a unique educational endeavour initiated by We
                  Care. Bachpanshala aims to provide quality education to kids
                  deprived of education. Bachpanshala is one of few
                  non-governmental educational programs that teaches kids every
                  single day of the week and every week of the year.
                  Bachpanshala has been running continuously for the past 2
                  years and has impacted the lives of dozens of underprivileged
                  kids
                </MDBAccordionItem>
                <MDBAccordionItem
                  collapseId={4}
                  headerTitle="Where is we Care based?"
                  style={{ marginBottom: "10px" }}
                >
                  We Care is a Bhopal-based NGO, dedicated to serving the
                  underprivileged in the city of Lakes. Over the past three
                  years, We Care has become synonymous with positive change in
                  the lives of underprivileged children in{" "}
                  <strong>Bhopal</strong>.
                </MDBAccordionItem>
              </MDBAccordion>
            </Col>
            <Col lg="6">
              <MDBAccordion>
                <MDBAccordionItem
                  collapseId={1}
                  headerTitle="How Can I donate to We Care?"
                  style={{ marginBottom: "10px" }}
                >
                  We Care gratefully accepts monetary donations from individuals
                  who wish to contribute to our impactful causes. To make a
                  donation, simply click on the "Donate Now" button located at
                  the top of our website. We appreciate every little
                  contribution made to We Care, as it plays a significant role
                  in supporting the meaningful work we are dedicated to. Your
                  generosity contributes to positive change in society. Thank
                  you for your support!
                </MDBAccordionItem>
                <MDBAccordionItem
                  collapseId={2}
                  headerTitle="How can I stay updated on WeCare's latest activities and events?"
                  style={{ marginBottom: "10px" }}
                >
                  Stay informed about WeCare's latest activities and events by
                  regularly visiting our website and following us on our social
                  media platforms. Our updates, announcements, and impactful
                  stories are regularly shared on these channels, keeping you
                  connected with our journey of positive change.
                </MDBAccordionItem>
                <MDBAccordionItem
                  collapseId={3}
                  headerTitle="How does We Care raise and utilize resources?"
                  style={{ marginBottom: "10px" }}
                >
                  At We Care, our resources are derived from diverse channels,
                  including:
                  <ul>
                    <li>
                      {" "}
                      Individual Contributions: Compassionate supporters
                      contribute to our initiatives.
                    </li>
                    <li>
                      Corporate and Institutional Collaborations: Partnerships
                      with corporations and institutions result in valuable
                      contributions.
                    </li>
                  </ul>
                  Our proposal formation includes a comprehensive budget
                  outlining resource allocation. The majority of funds are
                  earmarked for directly impacting and improving social causes.
                  We prioritize transparency and efficiency in utilizing
                  resources to maximize our positive impact.
                </MDBAccordionItem>
                <MDBAccordionItem
                  collapseId={4}
                  headerTitle="Is We Care a certified NGO?"
                  style={{ marginBottom: "10px" }}
                >
                  Yes, We Care is a certified NGO under the Indian Societies
                  Registration Act of 1860, with the Serial Number –
                  01/01/01/37459/21. We Care received its certification on 6
                  February 2021, establishing itself as a recognized
                  non-governmental organization. Since its inception, We Care
                  has been dedicated to tirelessly working towards creating
                  positive change in society, and we remain committed to this
                  mission in the years to come
                </MDBAccordionItem>
                {/* <MDBAccordionItem
                  collapseId={4}
                  headerTitle="Are there any ongoing initiatives open for donations at We Care?"
                  style={{ marginBottom: "10px" }}
                >
                  Yes, We Care frequently has ongoing initiatives available for
                  donations. Explore our website or contact us directly to learn
                  about current projects open for contributions and how you can
                  actively participate in creating positive change.
                </MDBAccordionItem> */}
                {/* <MDBAccordionItem
                  collapseId={5}
                  headerTitle=" "
                >
                 
                </MDBAccordionItem> */}
              </MDBAccordion>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
