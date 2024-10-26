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
      <title>IIT/JEE Crash Course Institute, Classes in Pune</title>
      <meta name="description" content="Join A Square Classes For An Intensive IIT/JEE Crash Course in Pune. Our Expert Instructors Provide Tailored Guidance To Help You Excel In Your Exams Quickly And Effectively!" />
      <meta name="keywords" content="IIT JEE crash course Pune, JEE crash course institute in pune, IIT coaching classes Pune, JEE preparation courses in pune, best JEE crash course Pune, A Square Classes, IIT JEE training in pune, short-term JEE classes in pune, fast-track JEE coaching Pune" />
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
