import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../Components/Navbar/Navbar';
import Header from '../Components/Header/Header';
import Courses_pg_hero from '../Components/Courses_pg_hero/Courses_pg_hero';
import Courses from '../Components/Courses/Courses.jsx';
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
      <title>Courses - ASQUARE Medical & IIT-JEE Academy Best Coaching Institute for IIT-JEE NEET MHCET 10th 12th BOARD FOUNDATION 9th 10th in Pimpri Chinchwad PimpleSaudagar vishrantwdi pune west INDIA</title>
      <meta name="description" content="Explore ASQUARE Institute's wide range of courses designed to cater to the diverse educational needs of aspiring engineers and medical professionals. From comprehensive IIT-JEE and NEET preparation to foundation courses and board exam coaching, our expert-led programs are tailored to help students excel academically and achieve their career goals.." />
      <meta name="keywords" content="ASQUARE Classes,coaching institute,IIT-JEE,NEET,MHCET,10th,12th,BOARD,FOUNDATION,Pimpri Chinchwad,PimpleSaudagar,vishrantwdi,pune,west INDIA,medical,engineering,doctor,best engineering,best medical,best coaching institude,maharashtra,best results,results,neet results,cet results,Amit Anupam,Sandeep Roy,Devaasish Gaurav,Top-Scorers,kota,kota in pune,neet coaching in pune,iit-jee coaching in pune,jee main coaching in pune,maths olympiad,ntse,ijso,prmo,nmtc,best coaching for a foundation in pune,list of top 10 coaching centres in pune,fees structure for iit in pune,best coaching for neet in pune,best coaching in pune,pune neet coaching center,asquare pune,best medical coaching in india,best coaching institute in pune,top 10 coaching center in pune,best coaching for iit in pune,best coaching for iit in india,pune coaching institute,asquare education pune" />
    </Helmet>
      <Navbar />
      <Header />
      <Courses_pg_hero />
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
