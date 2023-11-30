import React from 'react';
import { MDBInput, MDBBtn, MDBValidation, MDBTextArea } from 'mdb-react-ui-kit';

// const btnHead = {
//   marginBottom: '5px',
// };


const ContactUs = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6" style={{ maxHeight: '100vh', overflowY: 'auto' }}>
          <h1>Get In Touch</h1>
        </div>
        <div className="col-md-6" style={{ maxHeight: '100vh', overflowY: 'auto' }}>
          <MDBValidation noValidate id='form'>
            <h2>Contact us</h2>

            <MDBInput label='Name' v-model='name' wrapperClass='mb-4' />

            <MDBInput type='email' label='Email address' v-model='email' wrapperClass='mb-4' />

            <MDBInput label='Subject' v-model='subject' wrapperClass='mb-4' />

            <MDBTextArea wrapperClass='mb-4' label='Message' />


            <MDBBtn color='primary' block>
              Send
            </MDBBtn>
          </MDBValidation>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
