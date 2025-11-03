import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../Components/Navbar/Navbar';
import Header from '../Components/Header/Header';
import DirectorHero2 from '../Components/DirectorsMsg2Hero/DirectorsMsg2Hero.jsx';
import Dm2 from '../Components/Dm2/Dm2.jsx';
import D_msg from '../Components/D_msg/D_msg';
import Testimonials from '../Components/Testimonials/Testimonials.jsx';
import Whatsapp from '../Components/Whatsapp/Whatsapp.jsx';
import Footer from '../Components/Footer/Footer.jsx';

function D_msg_pg() {
  return (
    <>
    <Helmet>
      <title>Director&#x27;s Message - ASQUARE Medical &amp; IIT-JEE Academy Best Coaching
  Institute for IIT-JEE NEET MHCET 10th 12th BOARD FOUNDATION 9th 10th
  in Pimpri Chinchwad PimpleSaudagar vishrantwdi pune west INDIA</title>
      <meta name="description" content="Explore a message from the Director of ASQUARE Institute, Mr. Ajit Anupam. Learn about our institute&#x27;s educational philosophy, innovative initiatives, and dedication to nurturing the next generation of leaders. Discover how Mr. Ajit Anupam&#x27;s guidance shapes the educational journey of our students towards a brighter future." />
      <meta name="keywords" content="Director&#x27;s Message,ASQUARE Classes,coaching institute,IIT-JEE,NEET,MHCET,10th,12th,BOARD,FOUNDATION,Pimpri Chinchwad,PimpleSaudagar,vishrantwdi,pune,west INDIA,medical,engineering,doctor,best engineering,best medical,best coaching institude,maharashtra,best results,results,neet results,cet results,Amit Anupam,Sandeep Roy,Devaasish Gaurav,Top-Scorers,kota,kota in pune,neet coaching in pune,iit-jee coaching in pune,jee main coaching in pune,maths olympiad,ntse,ijso,prmo,nmtc,best coaching for a foundation in pune,list of top 10 coaching centres in pune,fees structure for iit in pune,best coaching for neet in pune,best coaching in pune,pune neet coaching center,asquare pune,best medical coaching in india,best coaching institute in pune,top 10 coaching center in pune,best coaching for iit in pune,best coaching for iit in india,pune coaching institute,asquare education pune" />
    </Helmet>
      <Navbar />
      <Header />
      <DirectorHero2 />
      <D_msg />
      {/* <Dm2 /> */}
      <Testimonials />
      <Whatsapp />
      <Footer />
    </>
  );
}

export default D_msg_pg;
