import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBContainer,
  MDBIcon,
} from "mdb-react-ui-kit";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from "react-responsive-carousel";

export default function App() {
  return (
    <MDBContainer fluid className="py-5" style={{ color: "#000" }}>
      <Carousel
        autoPlay={true}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        interval={11000}
      >
        <div>
          <MDBCard>
            <MDBCardBody className="py-4 mt-2 text-center">
              {/* <div className="d-flex justify-content-center mb-4">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                  className="rounded-circle shadow-1-strong"
                  style={{
                    width: '100px',  // Set the width and height to your desired size
                    height: '100px',
                    borderRadius: '50%', // Create a circular shape
                  }}
                  alt=""
                />
              </div> */}
              <h5 className="font-weight-bold">Ananya</h5>
              <h6 className="font-weight-bold my-3">Former Teacher at WeCare</h6>
              <p className="mb-2">
                <MDBIcon fas icon="quote-left" className="pe-2" />
                Teaching at WeCare NGO has been a heartwarming experience for me. Guiding and nurturing students from underserved communities has been truly rewarding. Witnessing their eagerness to learn and grow despite challenges inspires me daily. The supportive environment and collaborative ethos within the NGO make the teaching journey here incredibly fulfilling. I cherish the opportunity to contribute to the educational empowerment of these resilient individuals.

              </p>
            </MDBCardBody>
          </MDBCard>
        </div>

        <div>
          <MDBCard>
            <MDBCardBody className="py-4 mt-2 text-center">
              {/* <div className="d-flex justify-content-center mb-4">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                  className="rounded-circle shadow-1-strong"
                  style={{
                    width: '100px',  // Set the width and height to your desired size
                    height: '100px',
                    borderRadius: '50%', // Create a circular shape
                  }}
                  alt=""
                />
              </div> */}
              <h5 className="font-weight-bold">Samarth</h5>
              <h6 className="font-weight-bold my-3">Former Volunteer at WeCare</h6>
              <p className="mb-2">
                <MDBIcon fas icon="quote-left" className="pe-2" />
                Witnessing the children's unwavering spirit fueled my personal growth, leaving an indelible mark on my character. Contributing to the community through WeCare has been immensely rewarding, as every positive impact made echoes the foundation's commitment to uplifting those in need. Grateful for the enriching experiences, I carry forward the lessons learned, cherishing the shared moments of growth, laughter, and progress.

              </p>
            </MDBCardBody>
          </MDBCard>
        </div>

        <div>
          <MDBCard>
            <MDBCardBody className="py-4 mt-2 text-center">
              {/* <div className="d-flex justify-content-center mb-4">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                  className="rounded-circle shadow-1-strong"
                  style={{
                    width: '100px',  // Set the width and height to your desired size
                    height: '100px',
                    borderRadius: '50%', // Create a circular shape
                  }}
                  alt=""
                />
              </div> */}
              <h5 className="font-weight-bold">Anany</h5>
              <h6 className="font-weight-bold my-3">Volunteer at WeCare</h6>
              <p className="mb-2">
                <MDBIcon fas icon="quote-left" className="pe-2" />
                I've had the privilege of working with 'We Care' NGO for the past three years, focusing on the education of underprivileged children. Through teaching and diverse activities, I've witnessed the transformative power of education, contributing not only to the students' lives but also fostering my personal growth. 'We Care' has been a catalyst in shaping a better version of myself, providing immense satisfaction and purpose in my journey.

              </p>
            </MDBCardBody>
          </MDBCard>
        </div>

        <div>
          <MDBCard>
            <MDBCardBody className="py-4 mt-2 text-center">
              {/* <div className="d-flex justify-content-center mb-4">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                  className="rounded-circle shadow-1-strong"
                  style={{
                    width: '100px',  // Set the width and height to your desired size
                    height: '100px',
                    borderRadius: '50%', // Create a circular shape
                  }}
                  alt=""
                />
              </div> */}
              <h5 className="font-weight-bold">Vipul Saxena</h5>
              <h6 className="font-weight-bold my-3">Volunteer at WeCare</h6>
              <p className="mb-2">
                <MDBIcon fas icon="quote-left" className="pe-2" />
                In we care , i was assigned with the task of teaching the underprivileged children and to provide them with plethora of support so that they could achieve their dreams and become a better person.
The ambiance that i experienced was not only giving me a sense of social work but also helped me in developing several skills as i went through events that are organised, focusing the children.
We work as a team, train ourselves to guide the children to lead the right path in life.

              </p>
            </MDBCardBody>
          </MDBCard>
        </div>

        {/* Add more slides for additional testimonials */}
      </Carousel>
    </MDBContainer>
  );
}
