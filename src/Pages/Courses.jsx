import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../Components/Navbar/Navbar';
import Header from '../Components/Header/Header';
import Courses_pg_hero from '../Components/Courses_pg_hero/Courses_pg_hero';
import Courses from '../Components/Courses/Courses.jsx';
import CourseHero2 from '../Components/Course_Hero/Course_Hero2.jsx'
import Testimonials from '../Components/Testimonials/Testimonials.jsx';
import Result from '../Components/Result/Result.jsx';
import FAQ from '../Components/FAQ/FAQ.jsx';
import Updates from '../Components/Live_Updates/Updates.jsx';
import Form1 from '../Components/Form1/Form1.jsx';
import Whatsapp from '../Components/Whatsapp/Whatsapp.jsx';
import Footer from '../Components/Footer/Footer.jsx';

function Courses_pg() {
  return (
    <>
    <Helmet>
      <title>Best Medical Coaching in Pimpri, Chinchwad, Pune | Entrance Coaching</title>
      <meta name="description" content="Looking for medical entrance coaching? A Square Classes is best coaching for medical preparation in pimpri, chinchwad, Pune. Contact to know about upcoming medical coaching!" />
      <meta name="keywords" content="best medical coaching in pimpri chinchwad,best coaching for medical preparation,medical entrance coaching,best medical coaching in pune" />
    </Helmet>
      <Navbar />
      <Header />
      {/* <Courses_pg_hero /> */}
      <CourseHero2 />
      <Updates />
      <Courses />
      <Result />
      <Testimonials />
      <Form1 />
      <Whatsapp />
      <Footer />
    </>
  );
}

export default Courses_pg;
