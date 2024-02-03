import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './../pages/Home';
import AboutUs from './../pages/AboutUs';
import Campaigns from './../pages/Campaigns';
import ContactUs from './../pages/ContactUs';
import OurWork from './../pages/OurWork';
import Impact from './../pages/Impact';
import GetInvolved from '../pages/GetInvolved';
import OurTeam from '../pages/OurTeam';
import WhereWeWork from '../pages/WhereWeWork';
import HowWeStarted from '../pages/HowWeStarted';
import { Certifications } from '../pages/Certifications';
import Vp from '../pages/Vp';
import Sponsorship from "../pages/Sponsorship";
import PartnerWithUs from "../pages/PartnerWithUs";
import DonateNow from '../pages/DonateNow';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home/>} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/OurTeam" element={<OurTeam />} />
      <Route path="/WhereWeWork" element={<WhereWeWork />} />
      <Route path="/HowWeStarted" element={<HowWeStarted />} />
      <Route path="/Certifications" element={<Certifications />} />
      <Route path="/Vp" element={<Vp/>} />
      <Route path="/Sponsorship" element={<Sponsorship />} />
      <Route path="/PartnerWithUs" element={<PartnerWithUs />} />
      <Route path="/Campaigns" element={<Campaigns />} />
      <Route path="/GetInvolved" element={<GetInvolved />} />
      <Route path="/Impact" element={<Impact />} />
      <Route path="/ContactUs" element={<ContactUs />} />
      <Route path="/OurWork" element={<OurWork />} />
      <Route path="/donate" element={<DonateNow />} />
    </Routes>
  );
};

export default Routers;