import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../Components/Navbar/Navbar';
import Header from '../Components/Header/Header';
import Faculty_hero from '../Components/Faculty_hero/Faculty_hero';
import Faculty from '../Components/Faculty/Faculty.jsx';
import Staff from '../Components/Staff/Staff.jsx';
import Features_2 from '../Components/Features_2/Features_2.jsx';
import Features from '../Components/Features/Features.jsx';
import Updates from '../Components/Live_Updates/Updates.jsx';
import Introduction from '../Components/Introduction/Introduction.jsx';
import Testimonials from '../Components/Testimonials/Testimonials.jsx';
import Form1 from '../Components/Form1/Form1.jsx';
import Whatsapp from '../Components/Whatsapp/Whatsapp.jsx';
import Footer from '../Components/Footer/Footer.jsx';
import Gallery from '../Components/Gallery/Gallery.jsx';

function Faculty_pg() {
  return (
    <>
    <Helmet>
      <title>Faculty - ASQUARE Medical &amp; IIT-JEE Academy Best Coaching Institute
  for IIT-JEE NEET MHCET 10th 12th BOARD FOUNDATION 9th 10th in Pimpri
  Chinchwad PimpleSaudagar vishrantwdi pune west INDIA</title>
      <meta name="description" content="Meet the esteemed faculty members who bring expertise, passion, and dedication to ASQUARE Institute. Our experienced instructors are committed to providing quality education and personalized guidance to help students succeed. Learn more about our faculty&#x27;s qualifications, teaching methodologies, and contributions to student learning." />
      <meta name="keywords" content="ASQUARE Classes,coaching institute,IIT-JEE,NEET,MHCET,10th,12th,BOARD,FOUNDATION,Pimpri Chinchwad,PimpleSaudagar,vishrantwdi,pune,west INDIA,medical,engineering,doctor,best engineering,best medical,best coaching institude,maharashtra,best results,results,neet results,cet results,Amit Anupam,Sandeep Roy,Devaasish Gaurav,Top-Scorers,kota,kota in pune,neet coaching in pune,iit-jee coaching in pune,jee main coaching in pune,maths olympiad,ntse,ijso,prmo,nmtc,best coaching for a foundation in pune,list of top 10 coaching centres in pune,fees structure for iit in pune,best coaching for neet in pune,best coaching in pune,pune neet coaching center,asquare pune,best medical coaching in india,best coaching institute in pune,top 10 coaching center in pune,best coaching for iit in pune,best coaching for iit in india,pune coaching institute,asquare education pune" />
    </Helmet>
      <Navbar />
      <Header />
      <Faculty_hero />
      <Faculty />
      <Staff />
      <Testimonials />
      <Gallery />
      <Introduction />
      <Form1 />
      <Whatsapp />
      <Footer />
    </>
  );
}

export default Faculty_pg;
