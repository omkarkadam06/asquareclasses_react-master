import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../Components/Navbar/Navbar';
import Header from '../Components/Header/Header';
import Contact_Us from '../Components/Contact_Us/Contact_Us';
import Location from '../Components/Location/Location';
import FAQ from '../Components/FAQ/FAQ';
import Form1 from '../Components/Form1/Form1';
import Whatsapp from '../Components/Whatsapp/Whatsapp.jsx';
import Footer from '../Components/Footer/Footer.jsx';

function Contact_pg() {
  return (
    <>
    <Helmet>
      <title>Contact Us - ASQUARE Medical & IIT-JEE Academy Best Coaching Institute for IIT-JEE NEET MHCET 10th 12th BOARD FOUNDATION 9th 10th in Pimpri Chinchwad PimpleSaudagar vishrantwdi pune west INDIA</title>
      <meta name="description" content="Connect with ASQUARE Institute's dedicated team through our Contact Us page. Whether you have questions about our courses, admissions, or facilities, we're here to help. Reach out to us via phone, email, or by filling out the contact form, and we'll respond promptly to assist you." />
      <meta name="keywords" content="Contact ASQUARE Institute,Reach out to us,Contact form,Phone,Email,Inquiry,Support,Assistance,ASQUARE Classes,coaching institute,IIT-JEE,NEET,MHCET,10th,12th,BOARD,FOUNDATION,Pimpri Chinchwad,PimpleSaudagar,vishrantwdi,pune,west INDIA,medical,engineering,doctor,best engineering,best medical,best coaching institude,maharashtra,best results,results,neet results,cet results,Amit Anupam,Sandeep Roy,Devaasish Gaurav,Top-Scorers,kota,kota in pune,neet coaching in pune,iit-jee coaching in pune,jee main coaching in pune,maths olympiad,ntse,ijso,prmo,nmtc,best coaching for a foundation in pune,list of top 10 coaching centres in pune,fees structure for iit in pune,best coaching for neet in pune,best coaching in pune,pune neet coaching center,asquare pune,best medical coaching in india,best coaching institute in pune,top 10 coaching center in pune,best coaching for iit in pune,best coaching for iit in india,pune coaching institute,asquare education pune" />
    </Helmet>
      <Navbar />
      <Header />
      <Contact_Us />
      <Location />
      <FAQ />
      <Form1 />
      <Whatsapp />
      <Footer />
    </>
  );
}

export default Contact_pg;
