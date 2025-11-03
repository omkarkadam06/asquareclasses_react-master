import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../Components/Navbar/Navbar';
import Header from '../Components/Header/Header';
import C_msg_hero from '../Components/C_msg/C_msg_hero';
import C_msg from '../Components/C_msg/C_msg';
import Testimonials from '../Components/Testimonials/Testimonials.jsx';
import Whatsapp from '../Components/Whatsapp/Whatsapp.jsx';
import Footer from '../Components/Footer/Footer.jsx';

function Chairman_msg_pg() {
  return (
    <>
    <Helmet>
      <title>Chairman&#x27;s Message - ASQUARE Medical &amp; IIT-JEE Academy Best Coaching Institute for IIT-JEE
  NEET MHCET 10th 12th BOARD FOUNDATION 9th 10th in Pimpri Chinchwad
  PimpleSaudagar vishrantwdi pune west INDIA</title>
      <meta name="description" content="Read a heartfelt message from the Chairman of ASQUARE Institute, Dr. [Chairman&#x27;s Name]. Gain insights into our institute&#x27;s vision, values, and commitment to excellence in education. Discover how Dr. [Chairman&#x27;s Name]&#x27;s leadership inspires our community to strive for academic success and personal growth." />
      <meta name="keywords" content="Chairman&#x27;s Message,ASQUARE Classes,coaching institute,IIT-JEE,NEET,MHCET,10th,12th,BOARD,FOUNDATION,Pimpri Chinchwad,PimpleSaudagar,vishrantwdi,pune,west INDIA,medical,engineering,doctor,best engineering,best medical,best coaching institude,maharashtra,best results,results,neet results,cet results,Amit Anupam,Sandeep Roy,Devaasish Gaurav,Top-Scorers,kota,kota in pune,neet coaching in pune,iit-jee coaching in pune,jee main coaching in pune,maths olympiad,ntse,ijso,prmo,nmtc,best coaching for a foundation in pune,list of top 10 coaching centres in pune,fees structure for iit in pune,best coaching for neet in pune,best coaching in pune,pune neet coaching center,asquare pune,best medical coaching in india,best coaching institute in pune,top 10 coaching center in pune,best coaching for iit in pune,best coaching for iit in india,pune coaching institute,asquare education pune" />
    </Helmet>
      <Navbar />
      <Header />
      <C_msg_hero />
      <C_msg />
      <Testimonials />
      <Whatsapp />
      <Footer />
    </>
  );
}

export default Chairman_msg_pg;
