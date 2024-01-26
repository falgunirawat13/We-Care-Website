import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Footer.css' ;
import { NavLink } from 'react-router-dom'


export default function App() {
  return (
    <MDBFooter bgColor='light'  className='text-center text-lg-start text-muted dark-text footer'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
         
          <a href='https://www.instagram.com/wecareorgg/' className='me-4 text-reset'>
            <MDBIcon className='dark-text' color='secondary' fab icon='instagram' />
          </a>
          <a href='https://www.linkedin.com/company/wecare-me/' className='me-4 text-reset'>
            <MDBIcon className='dark-text' color='secondary' fab icon='linkedin' />
          </a>
          <a href='https://www.youtube.com/channel/UChatyDOKLvb6rVoMxJkYg6g' className='me-4 text-reset'>
            <MDBIcon className='dark-text' color='secondary' fab icon='youtube' />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3 dark-text' />
                We Care
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Links</h6>
              <p>
              <NavLink to="/Home" className="text-reset">
                <a className='text-reset'>
                  Home
                </a>
                </NavLink>
              </p>
              <p>
              <NavLink to="/AboutUs" className="text-reset">
                <a className='text-reset'>
                  About Us
                </a>
                </NavLink>
              </p>
              <p>
              <NavLink to="/GetInvolved" className="text-reset">
                <a className='text-reset'>
                  Get Invovled
                </a>
                </NavLink>
              </p>
              <p>
              <NavLink to="/ContactUs" className="text-reset">
                <a className='text-reset'>
                  Contact Us
                </a>
                </NavLink>
              </p>
              
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
              <NavLink to="/Campaigns" className="text-reset">
                <a className='text-reset'>
                  Campaigns
                </a>
                </NavLink>
              </p>
              <p>
              <NavLink to="/OurWork" className="text-reset">
                <a className='text-reset'>
                  Our Work
                </a>
                </NavLink>
              </p>
              <p>
              <NavLink to="/Impact" className="text-reset">
                <a className='text-reset'>
                  Impact
                </a>
                </NavLink>
              </p>
              <p>
                <a href='/Impact' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                India
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                wecare7920@gmail.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> + 91 21 234 567 88
              </p>
              <p>
                <MDBIcon color='secondary' icon='print' className='me-3' /> + 91 12 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          : We Care Social Welfare Society
        </a>
      </div>
    </MDBFooter>
  );
}