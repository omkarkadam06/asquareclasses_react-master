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
      <title>Best Neet Coaching Class | Online Coaching for Neet Classes in Pune</title>
      <meta name="description" content="Enrol best coaching for NEET preparation at NEET coaching center. We offer online coaching classes for NEET by experienced instructors. Join our NEET coaching classes!" />
      <meta name="keywords" content="neet coaching,neet coaching class,best coaching for neet,best neet coaching,neet coaching centre,coaching for neet,online coaching for neet,neet best coaching,classes for neet,neet classes" />
    </Helmet>
      <Navbar />
      <Header />
      <Information data={id} />
      <Footer />
    </>
  );
}

export default Information_pg;
