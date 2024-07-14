import React, { useState, useEffect } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Header from '../../Components/Header/Header';
import Information from '../../Components/Information/Information.jsx';
import Footer from '../../Components/Footer/Footer.jsx';
import '../pages.css';
import { Helmet } from 'react-helmet';

function Information_pg({ id }) {
  return (
    <>
    <Helmet>
      <title>Best Neet Coaching Classes in Pune | A Square for Neet in Pune</title>
      <meta name="description" content="Looking for best neet classes in pune? Join A Square - Coaching classes for neet in Pune, run by experienced instructors. New Neet coaching class starting soon!" />
      <meta name="keywords" content="best classes for neet,neet classes in pune,neet coaching classes,best neet classes in pune,best neet coaching in pune,best coaching for neet in pune,best coaching classes for neet in pune,coaching classes for neet in pune" />
    </Helmet>
      <Navbar />
      <Header />
      <Information data={id} />
      <Footer />
    </>
  );
}

export default Information_pg;
