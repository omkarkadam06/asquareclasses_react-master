import React, { Suspense } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Header from '../Components/Header/Header';
import Hero from '../Components/Hero/Hero';
import Success from '../Components/Success/Success';
import About from '../Components/About/About.jsx';
import Courses from '../Components/Courses/Courses.jsx';
import Whatsapp from '../Components/Whatsapp/Whatsapp.jsx';
import Loading from './Loading.jsx';
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
      <title>Best IIT JEE Coaching in Pune & Pimpri Chinchwad | JEE Coaching Classes</title>
      <meta name="description" content="Unlock your potential with best IIT coaching in Pimpri Chinchwad, Pune. Asquare Classes is best JEE coaching Institute pimpri chinchwad offering expert preparation." />
      <meta name="keywords" content="Jee mains coaching centre in pimpri,IIT JEE Coaching Institutes in Pimpri Chinchwad,Best IIT JEE Coaching in Pimpri & Chinchwad,medical and iit academy in pune,Best medical and iit academy in pimpri,NEET and IIT jee coaching classes in pune,IIT/ NEET classes in Pimpri Chinchwad,best iit coaching in pune,best iit classes in pune,best iit coaching classes in pune,iit preparation classes in pune,best coaching institute for iit in pune,jee classes in pune,best jee classes in pune" />
    </Helmet>
      <Navbar />
      <Header />
      <Hero />
      <Success />
      <About />
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
        <Form1 />
        <Footer />
      </Suspense>
    </>
  );
}

export default Home;
