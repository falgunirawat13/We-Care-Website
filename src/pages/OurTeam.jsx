import React, { useEffect } from "react";
import clamp from "clamp-js";
import areeb from "../assets/images/Areeb.jpg";
import azhan from "../assets/images/azhan.jpg";
import rehman from "../assets/images/Rehman.jpg";
import zaid from "../assets/images/zaid.jpg";
import satnam from "../assets/images/satnam.jpg";
import harsh from "../assets/images/harsh.jpg";
import hr from "../assets/images/hr.jpg";
import "../styles/Ourteam.css";

const OurTeam = () => {
  useEffect(() => {
    // This adds some nice ellipsis to the description:
    document.querySelectorAll(".projcard-description").forEach(function (box) {
      clamp(box, { clamp: 6 });
    });
  }, []);

  return (
    <>
      <div>
        <h1 className="main-head">MEET OUR TEAM</h1>
      </div>
      <div className="projcard-container">
        {/* Card 1 */}
        <div className="projcard projcard-blue">
          <div className="projcard-innerbox">
            <img className="projcard-img" src={areeb} alt="Card 1" />
            <div className="projcard-textbox">
              <div className="projcard-title">President</div>
              <div className="projcard-subtitle">Areeb Khan</div>
              <div className="projcard-bar"></div>
              <div className="projcard-description">
                Our team's President, Areeb. He founded "We Care," a little
                place that he created from scratch that resonates purity in this
                world. Areeb is an exemplary leader and an inspiration to us
                all. He embodies the qualities of integrity, dedication, and
                hard work, and his team looks up to him. Areeb leads by example
                and consistently demonstrates that change starts with an
                individual's actions. We are fortunate to have him as our
                President, and we strive to emulate his qualities in all that we
                do.
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="projcard projcard-red">
          <div className="projcard-innerbox">
            <img className="projcard-img" src={azhan} alt="Card 2" />
            <div className="projcard-textbox">
              <div className="projcard-title">Vice-President</div>
              <div className="projcard-subtitle">Azhan Ahmed</div>
              <div className="projcard-bar"></div>
              <div className="projcard-description">
                He is a dedicated and intellectual individual who personifies
                the word 'dedication.' Azhan is not only a skilled speaker but
                also a compassionate teacher who is always eager to share his
                knowledge with others. He has a wealth of ideas for bringing
                about positive change and is constantly thinking of ways to
                revolutionize the world around us. Azhan is the voice of "We
                Care" and works tirelessly to make a difference in the lives of
                those around him. He is truly an inspiration to us all, and we
                are proud to have him as our Vice President.
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="projcard projcard-green">
          <div className="projcard-innerbox">
            <img className="projcard-img" src={rehman} alt="Card 3" />
            <div className="projcard-textbox">
              <div className="projcard-title">Treasurer</div>
              <div className="projcard-subtitle">Rehman Aziz</div>
              <div className="projcard-bar"></div>
              <div className="projcard-description">
                Our Treasurer, Rehman. He is the co-founder of "We Care" and the
                treasure himself. Rehman is the visionary head and backbone of
                our organization, and his selfless contributions have been
                instrumental in our success. He is a multi-tasker who wears many
                hats and effortlessly manages various responsibilities. Rehman
                is the guardian of "Bachpanshala," and his dedication to the
                cause is unwavering. His sweet demeanor and kind heart make him
                a pleasure to work with, and we are fortunate to have him as our
                Treasurer.
              </div>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div
          className="projcard projcard-customcolor"
          style={{ "--projcard-color": "#F5AF41" }}
        >
          <div className="projcard-innerbox">
            <img className="projcard-img" src={satnam} alt="Card 4" />
            <div className="projcard-textbox">
              <div className="projcard-title">Volunteers Coordinator</div>
              <div className="projcard-subtitle">Satnam Singh</div>
              <div className="projcard-bar"></div>
              <div className="projcard-description">
                Our Volunteer Coordinator, Satnam. Though he is the youngest
                member of our team, age is just a number for him. Satnam never
                fails to amaze us with his organizing and sense of things
                skills. He possesses great managerial powers, and we can always
                rely on him to complete the tasks given to him. Satnam is an
                asset to our team, and his contributions have been invaluable.
                We appreciate his dedication and hard work, and we are fortunate
                to have him as our Volunteer Coordinator.
              </div>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="projcard projcard-blue">
          <div className="projcard-innerbox">
            <img className="projcard-img" src={zaid} alt="Card 1" />
            <div className="projcard-textbox">
              <div className="projcard-title">Brainstorming Chair</div>
              <div className="projcard-subtitle">Mohmmad Zaid</div>
              <div className="projcard-bar"></div>
              <div className="projcard-description">
                Our Brainstorming Chair Head, Zaid. Just as the position
                suggests, he lives by being the same and is a true brainstormer.
                Zaid is the most sincere and time-abided person you will ever
                meet, and his leadership qualities are exceptional. He has a
                unique ability to turn a scratch to a resourceful idea, Zaid is
                an outstanding leader and a valuable member of our team, and we
                are lucky to have him as our Brainstorming Chair Head.
              </div>
            </div>
          </div>
        </div>

        {/* Card 6 */}
        <div className="projcard projcard-red">
          <div className="projcard-innerbox">
            <img className="projcard-img" src={harsh} alt="Card 2" />
            <div className="projcard-textbox">
              <div className="projcard-title">Event Head</div>
              <div className="projcard-subtitle">Harsh Singh</div>
              <div className="projcard-bar"></div>
              <div className="projcard-description">
                Our Event Head, Harsh. He is the optimistic and powerful member
                that holds our group together. Harsh is like the guardian of us
                all, and he keeps us safe. With him by our side, we are fearless
                and strong. He is a great teacher, team mate, and supportive
                co-founder who is always willing to lend a helping hand. Harsh's
                contributions to our team have been invaluable, and we
                appreciate his dedication and hard work. We are lucky to have
                him as our Event Head.
              </div>
            </div>
          </div>
        </div>

        {/* Card 7 */}
        <div className="projcard projcard-green">
          <div className="projcard-innerbox">
            <img className="projcard-img" src={hr} alt="Card 3" />
            <div className="projcard-textbox">
              <div className="projcard-title">Human Resource</div>
              <div className="projcard-subtitle">
                {" "}
                Sanskriti Verma & S Saranya
              </div>
              <div className="projcard-bar"></div>
              {/* <div className="projcard-description">
              Meet Shivansh, our Communication Chair Head. He is a person full
              of ideas, someone who binds his team together and an exceptional
              leader. Shivansh is creative and possesses other great qualities
              that make him an asset to our team. A selfless person and his
              efforts have made our organization reach new heights.
            </div> */}
              <div className="projcard-description">
                Our HR team, Saranya and Sanskriti. They are the perfect duo one
                could ask for and the perfect examples of diligence. From
                retrenchment to orientation, they treat each employee as their
                own and make sure that they receive the utmost care and
                attention. Their energy and enthusiasm are infectious, and we
                are lucky to have them as a part of our team. Saranya and
                Sanskriti are invaluable members of our organization, and we
                appreciate their contributions.
              </div>
            </div>
          </div>
        </div>

        {/* Card 8 */}
        {/* <div
        className="projcard projcard-customcolor"
        style={{ "--projcard-color": "#F5AF41" }}
      >
        <div className="projcard-innerbox">
          <img
            className="projcard-img"
            src={hr}
            alt="Card 4"
          />
          <div className="projcard-textbox">
         
            <div className="projcard-subtitle"> Sanskriti Verma & S Saranya</div>
            <div className="projcard-bar"></div>
           
          </div>
        </div>
      </div> */}
      </div>
    </>
  );
};

export default OurTeam;
