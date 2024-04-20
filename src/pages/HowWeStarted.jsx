import React from "react";
import car5 from "../assets/images/car5.jpg";
import "../styles/WeStarted.css";
import { MDBIcon } from "mdb-react-ui-kit";
import video from "../assets/images/video1.mp4";
import { Container, Row, Col } from "react-bootstrap";
const HowWeStarted = () => {
  return (
    <>
      <section>
        <div class="image-container">
          <img
            src={car5}
            alt=""
            style={{
              objectFit: "cover",
              width: "100%",
              height: "400px",
              borderRadius: "0",
              filter:"blur(3px)"
            }}
          />
          <div class="image-text" >HOW WE STARTED</div>
        </div>
        <div>
          <h4 className="head1">
            <br /> Inception of We Care: A Spark of Compassion{" "}
          </h4>
          <div className="containerofwhat">
            <div className="textofwhat" style={{}}>
              <p className="para1">
                <br />
                <span style={{ fontWeight: "bold" }}>
                  -------------------“A little love and care can revolutionize
                  the entire world”--------------------{" "}
                </span>{" "}
                <br />
                <br />
                We Care started as a simple Idea in the mind of a simple man
                that someone must care for the Un-asked. We Care came into
                existence in 2020 when the COVID-19 pandemic brought the entire
                world to its knees. But the people who were most adversely
                affected by the pandemic were the ones already deprived and left
                behind by society.
                <br />
                <br />
                Driven by the desire to make a tangible difference, We Care
                embarked on a journey to address the root causes of societal
                issues, extending support to marginalized communities and
                advocating for their rights. Our initiatives, fueled by passion
                and empathy, aim to create lasting impact and foster positive
                change.
              </p>
            </div>
            <div className="imgofwhat">
              <img
                src={car5}
                alt=""
                style={{
                  width: "83%",
                  height: "90%",
                  objectFit: "cover",
                  borderRadius: "0",
                  marginTop: "30px",
                }}
              />
            </div>
          </div>
          <br />

          <p className="para1">
            It was the will and desire to change the destiny of these people
            that inspired a youngster in Bhopal, Areeb Khan to act. Areeb, who
            was just 18 at that time, with his childhood friends Rehman and
            Harsh went on a crusade to make a difference, to bring change in the
            depressing times of the pandemic. It was this motivation and a
            belief in change that later morphed into We Care.
            <br />
            <br />
            We Care started with food distribution to the poor during the COVID
            crisis. Soon realizing the need of the hour, We Care rapidly
            expanded its horizon and started working on Animal Welfare, Women
            Empowerment, Road Safety Campaigns, Awareness drives, and Education.
            <br />
            <br />
            At the first anniversary of We Care, we launched Bachpanshala an
            initiative by We Care to educate the underprivileged kids of slums
            in Bhopal. Bachpanshala initially worked on weekends and on the
            first anniversary Bachpanshala made a revolutionary decision to take
            classes every single day of the week. The new approach proved highly
            successful in transforming the lives of the children. Bachpanshala
            is the beacon of hope, lighting the path towards a brighter future
            for the children of Bhopal.
            <br />
            <br />
          </p>
        </div>
      </section>
      <section className="What1">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                <MDBIcon fas icon="quote-left" className="pe-2" />
                <span style={{ fontStyle: "italic" }}>
                  One child, one Teacher, one Book, one Pen can change the
                  world.{" "}
                </span>
                <MDBIcon fas icon="quote-right" className="pe-2" />
                <br />
                Malala Yousafzai , Education Activist
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="timeline">
        <div>
          <h4 className="head1">
            <br /> Our Timeline{" "}
          </h4>
          <p className="para1">
            <br />
            <video
              controls
              style={{ width: "80%", marginLeft: "150px", marginRight: "auto" }}
              src={video}
            >
              <source src="your_video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </p>
        </div>
      </section>
    
    </>
  );
};

export default HowWeStarted;
