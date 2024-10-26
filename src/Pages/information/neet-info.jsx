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
      <title>NEET Coaching Classes in Pune | A Square Classes</title>
      <meta name="description" content="Join A Square Classes in Pune For Expert NEET Coaching. Our Dedicated Faculty And Tailored Programs will Help You Achieve Your Dream Of a Medical Career!" />
      <meta name="keywords" content="NEET coaching Pune, NEET preparation Pune, best NEET classes, medical entrance coaching Pune, A Square Classes, NEET training, NEET exam coaching, NEET classes in Pune" />
    </Helmet>
      <Navbar />
      <Header />
      <Information data={id} />
      <Footer />
    </>
  );
}

export default Information_pg;
