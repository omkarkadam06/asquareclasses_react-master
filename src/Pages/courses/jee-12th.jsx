import React, { Suspense } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Header from '../../Components/Header/Header';
import Course_hero from '../../Components/Course_Hero/Course_hero';
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
      <title>IIT /JEE Coaching Classes For 12th in Pune | Square Classes</title>
      <meta name="description" content="Join A Square Classes for expert JEE coaching in Pune. Tailored for 12th-grade students aiming for IIT success! Get Ready To Take Your First Step To Achieve Success" />
      <meta name="keywords" content="JEE coaching for 12th in Pune, IIT JEE classes Pune, JEE preparation for class 12th, JEE mains coaching Pune, JEE advanced coaching Pune, 12th-grade JEE coaching Pune, best JEE coaching Pune, IIT entrance prep Pune, JEE tutors Pune, A Square Classes, JEE coaching for 12th in Pune near me " />
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
