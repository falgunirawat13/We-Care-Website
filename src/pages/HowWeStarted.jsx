import React from "react";
import carousel5 from "../assets/images/carousel3.jpg";
import "../styles/WeStarted.css";

const HowWeStarted = () => {
  return (
    <>
      <div class="image-container">
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
        <div class="image-text">HOW WE STARTED</div>
      </div>
      <div>
        <h4 className="head1">
          <br /> Inception of We Care: A Spark of Compassion{" "}
        </h4>
        <p className="para1">
          <br></br>
          <span>
            “A little love and care can revolutionize the entire world.”{" "}
          </span>{" "}
          We Care started as a simple Idea in the mind of a simple man that
          someone must care for the Un-asked. We Care came into existence in
          2020 when the COVID-19 pandemic brought the entire world to its knees.
          But the people who were most adversely affected by the pandemic were
          the ones already deprived and left behind by society.
          <br />
          <br />
          It was the will and desire to change the destiny of these people that
          inspired a youngster in Bhopal, Areeb Khan to act. Areeb, who was just
          18 at that time, with his childhood friends Rehman and Harsh went on a
          crusade to make a difference, to bring change in the depressing times
          of the pandemic. It was this motivation and a belief in change that
          later morphed into We Care.
          <br />
          <br />
          We Care started with food distribution to the poor during the COVID
          crisis. Soon realizing the need of the hour, We Care rapidly expanded
          its horizon and started working on Animal Welfare, Women Empowerment,
          Road Safety Campaigns, Awareness drives, and Education.
          <br />
          <br />
          At the first anniversary of We Care, we launched Bachpanshala an
          initiative by We Care to educate the underprivileged kids of slums in
          Bhopal. Bachpanshala initially worked on weekends and on the first
          anniversary Bachpanshala made a revolutionary decision to take classes
          every single day of the week. The new approach proved highly
          successful in transforming the lives of the children. Bachpanshala is
          the beacon of hope, lighting the path towards a brighter future for
          the children of Bhopal.
          <br />
          <br />
        </p>
      </div>
    </>
  );
};

export default HowWeStarted;
