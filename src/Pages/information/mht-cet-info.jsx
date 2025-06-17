import React, { useState, useEffect } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Header from '../../Components/Header/Header';
import Information from '../../Components/Information/Information.jsx';
import Footer from '../../Components/Footer/Footer.jsx';
import '../pages.css';
import { Helmet } from 'react-helmet';

function Information_pg({ id }) {
  const canonicalUrl = window.location.origin + window.location.pathname;
  return (
    <>
    <Helmet>
      <title>MHT CET Classes in Pune | CET Preparation Online Coaching in Pune</title>
      <meta name="description" content="Join CET online coaching at  Asquare - MHT CET preparation classes in Pune. Join our CET coaching program to excel in MHT CET and other CET exams. Enrol in upcoming batch." />
      <meta name="keywords" content="cet classes,cet classes in pune,cet preparation,cet online coaching,cet coaching,mht cet preparation" />
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
      <Navbar />
      <Header />
      <Information data={id} />
      <Footer />
    </>
  );
}

export default Information_pg;
