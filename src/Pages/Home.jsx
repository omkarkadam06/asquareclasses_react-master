import React, { Suspense } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Header from '../Components/Header/Header';
import Hero from '../Components/Hero/Hero2.jsx';
import NewSuccess from './new-succes/new-sucess.jsx';
import About2 from '../Components/About2/About2.jsx';
import Courses from '../Components/Courses/Courses.jsx';
import Whatsapp from '../Components/Whatsapp/Whatsapp.jsx';
import MobileForm from '../Components/Mobileform/MobileForm.jsx';
import Loading from './Loading.jsx';
import Youtube from '../Components/Youtube_section/Youtube.jsx';
import { Helmet } from 'react-helmet';

const Faculty = React.lazy(() => import('../Components/Faculty/Faculty.jsx'));
const Reviews = React.lazy(() => import('../Components/Reviews/Reviews.jsx'));
const Result = React.lazy(() => import('../Components/Result/Result.jsx'));
const FAQ = React.lazy(() => import('../Components/FAQ/FAQ.jsx'));
const Updates = React.lazy(() =>
  import('../Components/Live_Updates/Updates.jsx')
);
const Form1 = React.lazy(() => import('../Components/Form1/Form1.jsx'));
const Footer = React.lazy(() => import('../Components/Footer/Footer.jsx'));

function Home() {
  return (
    <>
      {/* Add Helmet for SEO purposes */}
      <Helmet>
        <title>Top Coaching for IIT JEE & NEET in Pune | A Square Classes</title>
        <meta
          name="description"
          content="Join A Square Classes for expert coaching in IIT JEE, NEET, and MHT CET. Achieve success with personalized guidance!"
        />
        <meta
          name="keywords"
          content="IIT JEE coaching Pune, NEET coaching Pune, MHT CET classes, best coaching classes Pune, A Square Classes, IIT JEE prep"
        />
      </Helmet>

      {/* Static components */}
      <Navbar />
      <Header />
      <Hero />
      <MobileForm />
      <NewSuccess />
      <About2 />
      <Whatsapp />
      <Courses />
      {/* Components loaded lazily */}
      <Suspense fallback={<Loading />}>
        <Faculty />
        <Reviews />
        <Result />
        <FAQ />
        <Updates />
        <Youtube />
        <Form1 />
        <Footer />
      </Suspense>
    </>
  );
}

export default Home;
