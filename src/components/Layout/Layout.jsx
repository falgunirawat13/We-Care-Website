import React from 'react';
import Header from '../Header/Header';
import Routers from '../../router/Router';
import Footer from '../Footer/Footer';
import Starter from '../Starter/Starter';


const Layout = () => {
  return (
    <>
    <Starter/>
    <Header/>
    <Routers/>
    <Footer/>
    </>
  )
}

export default Layout