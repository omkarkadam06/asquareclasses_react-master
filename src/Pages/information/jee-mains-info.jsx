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
      <title>JEE Main Coaching Classes in Pune | Asquare Jee Preparation Classes</title>
      <meta name="description" content="Find the best JEE coaching and classes in Pune for 100% success in JEE preparation. Join our JEE main coaching classes in Pune to excel your potential in JEE exams." />
      <meta name="keywords" content="jee coaching,jee classes in pune,jee preparation,jee main coaching classes,jee coaching classes in pune" />
    </Helmet>
      <Navbar />
      <Header />
      <Information data={id} />
      <Footer />
    </>
  );
}

export default Information_pg;
