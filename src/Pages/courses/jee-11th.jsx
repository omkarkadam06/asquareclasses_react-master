import React, { Suspense } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Header from '../../Components/Header/Header';
import Course_Details from '../../Components/Course_Details/Course_Details';
import Whatsapp from '../../Components/Whatsapp/Whatsapp.jsx';
import Loading from '../Loading.jsx';
import '../pages.css';
import { Helmet } from 'react-helmet';

const Faculty = React.lazy(() => import('../../Components/Faculty/Faculty.jsx'));
const Features = React.lazy(() => import('../../Components/Features/Features'));
const Testimonials = React.lazy(() =>
  import('../../Components/Testimonials/Testimonials.jsx')
);
const Form1 = React.lazy(() => import('../../Components/Form1/Form1.jsx'));
const Footer = React.lazy(() => import('../../Components/Footer/Footer.jsx'));

function Course({ courseName, className }) {
  return (
    <>
    <Helmet>
      <title>IIT JEE Coaching Institute For 11th in Pune | Square Classes</title>
      <meta name="description" content="Get Expert Coaching For IIT/JEE At A Square Classes in Pune. Join Our 11th-grade Program To Excel In Your Engineering Dreams! Call On +91 9404282283" />
      <meta name="keywords" content="IIT JEE coaching Pune, JEE coaching for 11th in Pune, best IIT classes Pune, JEE preparation Pune, 11th IIT coaching Pune, top JEE coaching Pune, IIT JEE tutors Pune, engineering entrance coaching Pune, IIT JEE training Pune, JEE mains and advanced coaching Pune, IIT JEE coaching Pune near me" />
    </Helmet>
      <Navbar />
      <Header />
      <Course_Details courseName={courseName} className={className} />
      <Whatsapp />
      <Suspense fallback={<Loading />}>
        <Faculty />
        <Features />
        <Testimonials />
        <Form1 />
        <Footer />
      </Suspense>
    </>
  );
}

export default Course;
