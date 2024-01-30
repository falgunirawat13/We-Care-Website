import React , {useRef} from 'react';
import { MDBInput, MDBBtn, MDBValidation, MDBTextArea } from 'mdb-react-ui-kit';
import emailjs from '@emailjs/browser'
import img from "../assets/images/contactus.jpg";
// const btnHead = {
//   marginBottom: '5px',
// };


const ContactUs = () => {
  const formRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_909c4z2', 'template_o0h4emj', formRef?.current || "", 'mrAY7SQBW-Bdifzop')
      .then((result) => {
          window.alert("Email sent successfully");
      }, (error) => {
          console.log(error.text, 'send error');
      });
  };
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6" style={{ maxHeight: '100vh', overflowY: 'auto' }}>
          <h1>Get In Touch</h1>
          <img src={img} alt="" style={{width: '560px' , height: '390px' ,borderRadius: '0', marginTop:"10px", marginBottom:"28px" , marginLeft:"-10px"}}/>
        </div>
        <div className="col-md-6" style={{ maxHeight: '100vh', overflowY: 'auto' }}>
          <MDBValidation noValidate id='form' ref={formRef} onSubmit={sendEmail}>
            <h1>Contact us</h1><br/>

            <MDBInput name='name' required label='Name' v-model='name' wrapperClass='mb-4' />

            <MDBInput name='email' required type='email' label='Email address' v-model='email' wrapperClass='mb-4' />

            <MDBInput name='subject' required label='Subject' v-model='subject' wrapperClass='mb-4' />

            <MDBTextArea name='message' required wrapperClass='mb-4' label='Message' />
            <MDBBtn color='primary' block type='submit' >
              Send
            </MDBBtn>
          </MDBValidation>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
