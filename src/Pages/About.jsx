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
      <title>A Square Classes - Online Classes for Medical Coaching</title>
      <meta name="description" content="Looking for Medical Coaching in Pimpri Chinchwad, Pune ? Visit A Square Classes and join upcoming batch of in -person as well as Online Classes for Medical Coaching!" />
      <meta name="keywords" content="a square classes, online classes for medical, medical coaching" />
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
