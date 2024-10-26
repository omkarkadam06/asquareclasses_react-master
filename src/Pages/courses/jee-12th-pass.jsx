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
      <title>IIT/JEE Coaching Classes Institute For 12th Pass in Pune</title>
      <meta name="description" content="Join A Square Classes For IIT/JEE Coaching Tailored For 12th Pass Students in Pune. Start Your Journey To Success Today!" />
      <meta name="keywords" content="IIT JEE coaching for 12th pass Pune, JEE classes for graduates, best IIT coaching Pune, JEE preparation for 12th pass, IIT entrance coaching Pune, 12th pass JEE training Pune, IIT JEE preparation classes, JEE coaching in Pune for graduates, A Square Classes JEE coaching, IIT JEE courses for 12th pass students" />
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
