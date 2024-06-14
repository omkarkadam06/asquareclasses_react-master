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
      <title>Best IIT JEE Coaching Classes in Pune |  Asquare IIT JEE Classes</title>
      <meta name="description" content="Get the best IIT coaching in Pune at  Asquare Classes. Join our IIT JEE coaching classes to excel in IIT JEE exams. Get ready for comprehensive preparation for IIT JEE." />
      <meta name="keywords" content="iit coaching,iit coaching classes in pune,iit jee coaching,iit coaching in pune,best iit coaching,iit jee coaching classes" />
    </Helmet>
      <Navbar />
      <Header />
      <Information data={id} />
      <Footer />
    </>
  );
}

export default Information_pg;
