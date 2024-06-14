import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../Components/Navbar/Navbar';
import Header from '../Components/Header/Header';
import Adword_home_hero from '../Components/Adword_home_hero/Adword_home_hero';
import About from '../Components/About/About.jsx';
import Courses from '../Components/Courses/Courses.jsx';
import Whatsapp from '../Components/Whatsapp/Whatsapp.jsx';
import Loading from './Loading.jsx';
import './pages.css';

const Faculty = React.lazy(() => import('../Components/Faculty/Faculty.jsx'));
const Testimonials = React.lazy(() =>
  import('../Components/Testimonials/Testimonials.jsx')
);
const Result = React.lazy(() => import('../Components/Result/Result.jsx'));
const FAQ = React.lazy(() => import('../Components/FAQ/FAQ.jsx'));
const Updates = React.lazy(() =>
  import('../Components/Live_Updates/Updates.jsx')
);
const Introduction = React.lazy(() =>
  import('../Components/Introduction/Introduction.jsx')
);
const Form1 = React.lazy(() => import('../Components/Form1/Form1.jsx'));
const Reviews = React.lazy(() => import('../Components/Reviews/Reviews.jsx'));
const Features = React.lazy(() =>
  import('../Components/Features/Features.jsx')
);
const Location = React.lazy(() =>
  import('../Components/Location/Location.jsx')
);
const Footer = React.lazy(() => import('../Components/Footer/Footer.jsx'));

function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Adword_home_hero />
      <About />
      <Courses />
      <Suspense fallback={<Loading />}>
        <Reviews />
        <Faculty />
        <Features />
        <Testimonials />
        <Result />
        <FAQ />
        <Location />
        <Introduction />
        <Form1 />
        <Whatsapp />
        <Footer />
      </Suspense>
    </>
  );
}

export default Home;
