import React, { Suspense } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Header from '../Components/Header/Header';
import Hero from '../Components/Hero/Hero2.jsx';
import NewSuccess from './new-succes/new-sucess.jsx';
import Success from '../Components/Success/Success';
import About from '../Components/About/About.jsx';
import About2 from '../Components/About2/About2.jsx';
import Courses from '../Components/Courses/Courses.jsx';
import Whatsapp from '../Components/Whatsapp/Whatsapp.jsx';
import Loading from './Loading.jsx';
// import Youtube from '../Components/Youtube_section/Youtube.jsx';
import './pages.css';
import { Helmet } from 'react-helmet';

const Faculty = React.lazy(() => import('../Components/Faculty/Faculty.jsx'));
const Testimonials = React.lazy(() =>
  import('../Components/Testimonials/Testimonials.jsx')
);
const Result = React.lazy(() => import('../Components/Result/Result.jsx'));
const FAQ = React.lazy(() => import('../Components/FAQ/FAQ.jsx'));
const Updates = React.lazy(() =>
  import('../Components/Live_Updates/Updates.jsx')
);
const Reviews = React.lazy(() => import('../Components/Reviews/Reviews.jsx'));
const Introduction = React.lazy(() =>
  import('../Components/Introduction/Introduction.jsx')
);
const Form1 = React.lazy(() => import('../Components/Form1/Form1.jsx'));
const Footer = React.lazy(() => import('../Components/Footer/Footer.jsx'));

function Home() {
  return (
    <>
    <Helmet>
      <title>Top Coaching for IIT JEE & NEET in Pune | A Square Classes</title>
      <meta name="description" content="Join A Square Classes for expert coaching in IIT JEE, NEET, and MHT CET. Achieve success with personalized guidance!" />
      <meta name="keywords" content="IIT JEE coaching Pune, NEET coaching Pune, MHT CET classes, best coaching classes Pune, A Square Classes, IIT JEE prep" />
    </Helmet>
      <Navbar />
      <Header />
      <Hero />
      <NewSuccess />
      <About2/>
      {/* <Success /> */}
      {/* <About /> */}
      <Whatsapp />
      <Courses />
      <Suspense fallback={<Loading />}>
        <Faculty />
        <Testimonials />
        <Reviews />
        <Result />
        <FAQ />
        <Updates />
        <Introduction />
        <Youtube/>
        <Form1 />
        <Footer />
      </Suspense>
    </>
  );
}

export default Home;
