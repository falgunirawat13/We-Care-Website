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
              <div className="d-flex justify-content-center mb-4">
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
              </div>
              <h5 className="font-weight-bold">Person 1</h5>
              <h6 className="font-weight-bold my-3">Founder at ET Company</h6>
              <p className="mb-2">
                <MDBIcon fas icon="quote-left" className="pe-2" />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                eos id officiis hic tenetur quae quaerat ad velit ab hic
                tenetur.
              </p>
            </MDBCardBody>
          </MDBCard>
        </div>

        <div>
          <MDBCard>
            <MDBCardBody className="py-4 mt-2 text-center">
              <div className="d-flex justify-content-center mb-4">
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
              </div>
              <h5 className="font-weight-bold">Person 1</h5>
              <h6 className="font-weight-bold my-3">Founder at ET Company</h6>
              <p className="mb-2">
                <MDBIcon fas icon="quote-left" className="pe-2" />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                eos id officiis hic tenetur quae quaerat ad velit ab hic
                tenetur.
              </p>
            </MDBCardBody>
          </MDBCard>
        </div>

        <div>
          <MDBCard>
            <MDBCardBody className="py-4 mt-2 text-center">
              <div className="d-flex justify-content-center mb-4">
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
              </div>
              <h5 className="font-weight-bold">Person 1</h5>
              <h6 className="font-weight-bold my-3">Founder at ET Company</h6>
              <p className="mb-2">
                <MDBIcon fas icon="quote-left" className="pe-2" />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                eos id officiis hic tenetur quae quaerat ad velit ab hic
                tenetur.
              </p>
            </MDBCardBody>
          </MDBCard>
        </div>

        <div>
          <MDBCard>
            <MDBCardBody className="py-4 mt-2 text-center">
              <div className="d-flex justify-content-center mb-4">
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
              </div>
              <h5 className="font-weight-bold">Person 1</h5>
              <h6 className="font-weight-bold my-3">Founder at ET Company</h6>
              <p className="mb-2">
                <MDBIcon fas icon="quote-left" className="pe-2" />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                eos id officiis hic tenetur quae quaerat ad velit ab hic
                tenetur.
              </p>
            </MDBCardBody>
          </MDBCard>
        </div>

        {/* Add more slides for additional testimonials */}
      </Carousel>
    </MDBContainer>
  );
}
