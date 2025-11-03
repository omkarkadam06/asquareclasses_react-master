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
      <title>MHT-CET Coaching Classes For 12th Pass in Pune</title>
      <meta name="description" content="Join A Square Classes For Expert MHT-CET Coaching Designed For 12th Pass Students in Pune. Get The Guidance You Need To Excel in Your Entrance Exams And Achieve Success!" />
      <meta name="keywords" content="MHT-CET coaching classes Pune, MHT-CET classes for 12th pass, best MHT-CET prep Pune, MHT-CET training for graduates, A Square Classes, entrance exam coaching, MHT-CET preparation courses" />
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
