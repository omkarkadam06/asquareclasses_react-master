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
      <title>JEE Advanced Coaching in Pune | Call On +91 9404282283</title>
      <meta name="description" content="Prepare For JEE Advanced with A Square Classes in Pune. Our Expert Faculty And Tailored Programs Will Help You Achieve Your Dream Of IIT Admission!" />
      <meta name="keywords" content="JEE Advanced coaching Pune, JEE Advanced preparation Pune, best JEE Advanced classes, IIT entrance coaching Pune, A Square Classes, JEE Advanced training, JEE Advanced exam coaching" />
    </Helmet>
      <Navbar />
      <Header />
      <Information data={id} />
      <Footer />
    </>
  );
}

export default Information_pg;
