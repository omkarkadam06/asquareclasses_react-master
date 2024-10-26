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
      <title>Foundation Course for 8th Class in Pune | A Square Classes</title>
      <meta name="description" content="Join A Square Classes For A Comprehensive Class 8th Foundation Course in Pune. Build Strong Fundamentals To Excel in Future Studies And Competitive Exams!" />
      <meta name="keywords" content="Class 8 foundation course Pune, foundation coaching for 8th grade, best 8th grade classes Pune, A Square Classes, academic coaching Pune, 8th grade preparation course, foundation program for 8th students" />
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
