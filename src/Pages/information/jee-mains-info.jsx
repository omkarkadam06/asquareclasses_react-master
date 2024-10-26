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
      <title>JEE Mains Coaching in Pune | A Square Classes </title>
      <meta name="description" content="Join A Square Classes in Pune For Expert JEE Mains Coaching. Our Experienced Faculty And Comprehensive Programs Are Designed To Help You Succeed in Your Exam! For More Info +91 9404282283" />
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
