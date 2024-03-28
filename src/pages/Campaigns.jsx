import React from "react";
import carousel5 from "../assets/images/carousel3.jpg";
import "../styles/Campaigns.css";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import card11 from "../assets/images/bachpanshala.jpg";
import card22 from "../assets/images/menstrual.jpg";
import card33 from "../assets/images/Bichona.jpg";
import card44 from "../assets/images/Road.JPG";
import card55 from "../assets/images/Charity Cup.jpg";
import card66 from "../assets/images/plantation.jpg";
import { useNavigate } from "react-router-dom";

const Campaigns = () => {
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
      <div>
        <div className="image-container">
          <img
            src={carousel5}
            alt=""
            style={{
              objectFit: "cover",
              width: "100%",
              height: "400px",
              borderRadius: "0",
            }}
          />
          <div className="image-text">OUR INITIATIVES</div>
        </div>
      </div>

      <section className="Camp">
        <>
          <Container>
            <Row>
              <br />
              <br/>
            </Row>
            <Row>
              <Col lg="6" md="6" sm="12" style={{ marginBottom: "3%" }}>
                <Card className="cardcamp" style={{ width: "100%" }}>
                  <Card.Img className="cardis" variant="top" src={card11} />
                  <Card.Body className="text-center d-flex flex-column align-items-center">
                    <Card.Title className="text-center">
                      BACHPANSHALA
                    </Card.Title>
                    <Card.Text className="Content5">
                      Welcome to Bachpanshala, a transformative initiative
                      pioneered by the NGO WeCare. Bachpanshala provides free
                      education to underprivileged children. Beyond traditional
                      academics, our holistic approach includes engaging sports
                      activities and vibrant celebrations of festivals,
                      fostering a dynamic learning environment. With a
                      commitment to nurturing young minds, we blend study and
                      play, ensuring a well-rounded educational experience,
                      where every child's potential is embraced and celebrated.
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

              <Col lg="6" md="6" sm="12" style={{ marginBottom: "3%" }}>
                <Card className="cardcamp" style={{ width: "100%" }}>
                  <Card.Img className="cardis" variant="top" src={card22} />
                  <Card.Body className="text-center d-flex flex-column align-items-center">
                    <Card.Title className="text-center">
                      WOMEN EMPOWERMENT
                    </Card.Title>
                    <Card.Text className="Content5">
                      Welcome to Bachpanshala, a transformative initiative
                      pioneered by the NGO WeCare. Bachpanshala provides free
                      education to underprivileged children. Beyond traditional
                      academics, our holistic approach includes engaging sports
                      activities and vibrant celebrations of festivals,
                      fostering a dynamic learning environment. With a
                      commitment to nurturing young minds, we blend study and
                      play, ensuring a well-rounded educational experience,
                      where every child's potential is embraced and celebrated.
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

              <Col lg="6" md="6" sm="12" style={{ marginBottom: "3%" }}>
                <Card className="cardcamp" style={{ width: "100%" }}>
                  <Card.Img className="cardis" variant="top" src={card33} />
                  <Card.Body className="text-center d-flex flex-column align-items-center">
                    <Card.Title className="text-center">
                      ANIMAL WELFARE
                    </Card.Title>
                    <Card.Text className="Content5">
                      Welcome to Bachpanshala, a transformative initiative
                      pioneered by the NGO WeCare. Bachpanshala provides free
                      education to underprivileged children. Beyond traditional
                      academics, our holistic approach includes engaging sports
                      activities and vibrant celebrations of festivals,
                      fostering a dynamic learning environment. With a
                      commitment to nurturing young minds, we blend study and
                      play, ensuring a well-rounded educational experience,
                      where every child's potential is embraced and celebrated.
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

              <Col lg="6" md="6" sm="12" style={{ marginBottom: "3%" }}>
                <Card className="cardcamp" style={{ width: "100%" }}>
                  <Card.Img className="cardis" variant="top" src={card44} />
                  <Card.Body className="text-center d-flex flex-column align-items-center">
                    <Card.Title className="text-center">
                      ROAD SAFETY CAMPAIGN
                    </Card.Title>
                    <Card.Text className="Content5">
                      The Road Safety initiative was a crucial aspect of our
                      commitment to community welfare. Road Safety was a
                      month-long campaign by We Care to bring a change. From
                      conducting nukkad natakas and plays to demonstrate the
                      cruciality of human life, WeCare also organized rallies on
                      roads and drawing competitions in various schools to
                      address the need for road safety awareness. We Care
                      collaborated with multiple welfare organizations to echo
                      the lesson of road safety to a larger audience.
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

              <Col lg="6" md="6" sm="12" style={{ marginBottom: "3%" }}>
                <Card className="cardcamp" style={{ width: "100%" }}>
                  <Card.Img className="cardis" variant="top" src={card55} />
                  <Card.Body className="text-center d-flex flex-column align-items-center">
                    <Card.Title className="text-center">CHARITY CUP</Card.Title>
                    <Card.Text className="Content5">
                      The WeCare Charity Cup, an annual initiative by our
                      dedicated NGO, transcends sports. More than a football
                      tournament, it symbolizes collective compassion and
                      impactful change. Undoubtedly, this stands out as the most
                      dynamic and captivating event of the year. With every goal
                      scored, we fundraise for crucial causes, championing the
                      spirit of giving. Participants, sponsors, and supporters
                      unite work collectively to make a lasting difference in
                      the lives of those in need.
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

              <Col lg="6" md="6" sm="12" style={{ marginBottom: "3%" }}>
                <Card className="cardcamp" style={{ width: "100%" }}>
                  <Card.Img className="cardis" variant="top" src={card66} />
                  <Card.Body className="text-center d-flex flex-column align-items-center">
                    <Card.Title className="text-center">
                      DONATION DRIVE
                    </Card.Title>
                    <Card.Text className="Content5">
                      Rooted in the principle of "Alone we can do so little;
                      together we can do so much”, WeCare spreads joy through
                      vibrant donation drives. In the past, we shared smiles by
                      providing clothing to children and older individuals in
                      need. Simultaneously, our heartfelt food donation drive
                      has touched the lives of both homeless individuals on the
                      streets and our furry friends, the stray animals. These
                      endeavors reflect our unwavering commitment to making the
                      world a brighter place, one act of generosity at a time.
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

              <Col lg="6" md="6" sm="12" style={{ marginBottom: "3%" }}>
                <Card className="cardcamp" style={{ width: "100%" }}>
                  <Card.Img className="cardis" variant="top" />
                  <Card.Body className="text-center d-flex flex-column align-items-center">
                    <Card.Title className="text-center">
                      MENSTRUAL HYGIENE
                    </Card.Title>
                    <Card.Text className="Content5">
                      One of the most important initiatives by WeCare, the
                      Menstrual Hygiene Initiative empowers women in villages
                      lacking awareness and essential facilities. In areas with
                      a higher female population, we've organized awareness
                      camps, educating and emphasizing the significance of
                      proper menstrual hygiene. By reaching out to these
                      communities, we aim to break taboos and ensure women have
                      access to the knowledge and resources necessary for
                      maintaining their health with dignity.
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

              <Col lg="6" md="6" sm="12" style={{ marginBottom: "3%" }}>
                <Card className="cardcamp" style={{ width: "100%" }}>
                  <Card.Img className="cardis" variant="top" />
                  <Card.Body className="text-center d-flex flex-column align-items-center">
                    <Card.Title className="text-center">
                      PROJECT BICHONA
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
            </Row>
          </Container>
        </>
      </section>
    </>
  );
};

export default Campaigns;
