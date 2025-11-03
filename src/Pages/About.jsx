import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../Components/Navbar/Navbar';
import Header from '../Components/Header/Header';
import About_Us from '../Components/About_Us/About_Us';
import History from '../Components/History/History';
import Achivements from '../Components/Achivements/Achivements';
import About_para from '../Components/About_para/About_para.jsx';
import Form1 from '../Components/Form1/Form1';
import Faculty from '../Components/Faculty/Faculty';
import Testimonials from '../Components/Testimonials/Testimonials';
import Result from '../Components/Result/Result';
import Features from '../Components/Features/Features';
import Gallery from '../Components/Gallery/Gallery.jsx';
import Footer from '../Components/Footer/Footer.jsx';
import Reviews from '../Components/Reviews/Reviews.jsx';
import Whatsapp from '../Components/Whatsapp/Whatsapp.jsx';
import FAQ from '../Components/FAQ/FAQ.jsx';

function About() {
  const [loading, setLoading] = useState(true);

  return (
    <>
    <Helmet>
      <title>Best Medical Coaching in Pune, Pimpri | A Square Classes</title>
      <meta name="description" content="Looking for Medical classess NEET coaching in Pune? Visit A Square Classes - Best institute for medical preparation. Enrol tp Top 10 Medical Coaching in Pimpri upcoming batch." />
      <meta name="keywords" content="Medical classess NEET coaching in Pune,Top 10 Medical Coaching in Pimpri,medical coaching classes in pune,best institute for medical preparation" />
    </Helmet>
      <Navbar />
      <Header />
      <About_Us />
      <About_para />
      <Achivements />
      <History />
      <Faculty />
      <Features />
      <Testimonials />
      <Reviews />
      <Result />
      <Gallery />
      <FAQ />
      <Form1 />
      <Whatsapp />
      <Footer />
    </>
  );
}

export default About;
