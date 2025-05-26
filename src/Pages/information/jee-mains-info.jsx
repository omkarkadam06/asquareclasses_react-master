import React from 'react';
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
      <title>Top JEE Mains Coaching Classes & Institute in Pune</title>
      <meta name="description" content="Crack JEE Mains with expert coaching classes in Pune. Get top-notch faculty, regular mock tests, personalized support & proven success in IIT-JEE preparation." />
      <meta name="keywords" content="JEE Mains coaching Pune, JEE Mains preparation Pune, best JEE Mains classes, IIT entrance coaching Pune, A Square Classes, JEE Mains training, JEE Mains exam coaching" />
    </Helmet>
      <Navbar />
      <Header />
      <Information data={id} />
      <Footer />
    </>
  );
}

export default Information_pg;
