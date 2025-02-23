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
  const currentURL = window.location.pathname;
  return (
    <>
    {currentURL === '/class-8th-9th-10th-coaching-Institutes-classes-in-vishrantwadi-pune' ? (
              <Helmet>
                <title>Foundation Course for Class 8th, 9th & 10th std in Vishrantwadi</title>
                <meta name="description" content="Build a Strong Academic Foundation with Asquare's Course For Class 8th, 9th, & 10th in Pune. Expert Guidance to Excel in School and Entrance Exams." />
                <meta name="keywords" content="Foundation Course for Class 8th in Vishrantwadi, Foundation Course for Class 9th in Vishrantwadi, Foundation Course for Class 10th in Vishrantwadi, Foundation classes in Vishrantwadi, Academic foundation Vishrantwadi, Asquare Classes" />
                <link rel="canonical" href="https://www.asquareclasses.com/class-8th-9th-10th-coaching-Institutes-classes-in-vishrantwadi-pune" />
              </Helmet>
            ) : currentURL === '/class-8th-9th-10th-coaching-Institutes-classes-in-yerwada-pune' ? (
              <Helmet>
                <title>Foundation Course For Class 8th, 9th & 10th Std in Yerwada</title>
                <meta name="description" content="Enroll in Asquare’s Foundation Course For Class 8th, 9th, & 10th in Yerwada. Strengthen Academic Skills With Expert Guidance For Future Success." />
                <meta name="keywords" content="Foundation Course for Class 8th Yerwada, Foundation Course for Class 9th Yerwada, Foundation Course for Class 10th Yerwada, Foundation classes Yerwada" />
                <link rel="canonical" href="https://www.asquareclasses.com/class-8th-9th-10th-coaching-Institutes-classes-in-yerwada-pune" />
              </Helmet>
            ) : currentURL === '/class-8th-9th-10th-coaching-Institutes-classes-in-dhanori-pune' ? (
              <Helmet>
                <title>Foundation Course for Class 8th, 9th & 10th Std in Dhanori</title>
                <meta name="description" content="Enroll in Asquare’s Foundation Course For Class 8th, 9th, & 10th in Dhanori. Strengthen Fundamentals and Excel with Expert Guidance in Academics." />
                <meta name="keywords" content="Foundation Course for Class 8th Dhanori, Foundation Course for Class 9th Dhanori, Foundation Course for Class 10th Dhanori, Foundation classes Dhanori, Academic foundation course Dhanori, Asquare Classes Dhanori" />
                <link rel="canonical" href="https://www.asquareclasses.com/class-8th-9th-10th-coaching-Institutes-classes-in-dhanori-pune" />
              </Helmet>
            ) : currentURL === '/class-8th-9th-10th-coaching-Institutes-classes-in-lohegaon-pune' ? (
              <Helmet>
                <title>Foundation Course For Class 8th, 9th & 10th Std in Lohegaon</title>
                <meta name="description" content="Join Asquare’s Foundation Course in Lohegaon For Class 8th, 9th, & 10th. Strengthen Core Skills with Expert Guidance For Academic Success." />
                <meta name="keywords" content="Foundation Course for Class 8th Lohegaon, Foundation Course for Class 9th Lohegaon, Foundation Course for Class 10th Lohegaon, Foundation classes Lohegaon, Academic foundation Lohegaon, Asquare Classes Lohegaon" />
                <link rel="canonical" href="https://www.asquareclasses.com/class-8th-9th-10th-coaching-Institutes-classes-in-lohegaon-pune" />
              </Helmet>
            ) : currentURL === '/class-8th-9th-10th-coaching-Institutes-classes-in-dighi-pune' ? (
              <Helmet>
                <title>Foundation Course For Class 8th, 9th & 10th Std in Dighi</title>
                <meta name="description" content="Enroll in Asquare’s Foundation Course in Dighi For Class 8th, 9th, & 10th. Strengthen Academic Foundations And Excel with Expert Support." />
                <meta name="keywords" content="Foundation Course for Class 8th Dighi, Foundation Course for Class 9th Dighi, Foundation Course for Class 10th Dighi, Foundation classes Dighi, Academic foundation Dighi, Asquare Classes Dighi" />
                <link rel="canonical" href="https://www.asquareclasses.com/class-8th-9th-10th-coaching-Institutes-classes-in-dighi-pune" />
              </Helmet>
            ) : currentURL === '/class-8th-9th-10th-coaching-Institutes-classes-in-alandi-pune' ? (
              <Helmet>
                <title>Foundation Course For Class 8th, 9th & 10th Std in Alandi</title>
                <meta name="description" content="Join Asquare’s Foundation Course in Alandi for Class 8th, 9th, & 10th. Build Strong Academic Skills And Prepare For Success with Expert Guidance." />
                <meta name="keywords" content="Foundation Course for Class 8th Alandi, Foundation Course for Class 9th Alandi, Foundation Course for Class 10th Alandi, Foundation classes Alandi, Academic foundation Alandi, Asquare Classes Alandi" />
                <link rel="canonical" href="https://www.asquareclasses.com/class-8th-9th-10th-coaching-Institutes-classes-in-alandi-pune" />
              </Helmet>
            ) : currentURL === '/class-8th-9th-10th-coaching-Institutes-classes-in-khadki-pune' ? (
              <Helmet>
                <title>Foundation Course For Class 8th, 9th & 10th Std in Khadki</title>
                <meta name="description" content="Enroll in Asquare’s foundation Course in Khadki For Class 8th, 9th, & 10th. Strengthen Academic Foundations with Expert Coaching and Guidance." />
                <meta name="keywords" content="Foundation Course for Class 8th Khadki, Foundation Course for Class 9th Khadki, Foundation Course for Class 10th Khadki, Foundation classes Khadki, Academic foundation Khadki, Asquare Classes Khadki" />
                <link rel="canonical" href="https://www.asquareclasses.com/class-8th-9th-10th-coaching-Institutes-classes-in-khadki-pune" />
              </Helmet>
            ) : currentURL === '/class-8th-9th-10th-coaching-Institutes-classes-in-tingre-nagar-pune' ? (
              <Helmet>
                <title>Foundation Course For Class 8th, 9th & 10th Std in Tingre Nagar Pune</title>
                <meta name="description" content="Join Asquare’s Foundation Course in Tingre Nagar, Pune, For Class 8th, 9th, & 10th. Build a Strong Academic Base with Expert Faculty and Focused Learning." />
                <meta name="keywords" content="Foundation Course for Class 8th Tingre Nagar Pune, Foundation Course for Class 9th Tingre Nagar Pune, Foundation Course for Class 10th Tingre Nagar Pune, Foundation classes Tingre Nagar Pune, Academic foundation Tingre Nagar Pune, Asquare Classes Tingre Nagar" />
                <link rel="canonical" href="https://www.asquareclasses.com/class-8th-9th-10th-coaching-Institutes-classes-in-tingre-nagar-pune" />
              </Helmet>
            ) : currentURL === '/class-8th-9th-10th-coaching-Institutes-classes-in-shastri-nagar-pune' ? (
              <Helmet>
                <title>Foundation Course For Class 8th, 9th & 10th Std in Shastri Nagar Pune</title>
                <meta name="description" content="Enroll in Asquare’s Foundation Course For Class 8th, 9th, & 10th in Shastri Nagar, Pune. Build Strong Academic Fundamentals with Expert Guidance." />
                <meta name="keywords" content="Foundation Course for Class 8th Shastri Nagar Pune, Foundation Course for Class 9th Shastri Nagar Pune, Foundation Course for Class 10th Shastri Nagar Pune, Foundation classes Shastri Nagar Pune, Academic foundation Shastri Nagar Pune, Asquare Classes Shastri Nagar" />
                <link rel="canonical" href="https://www.asquareclasses.com/class-8th-9th-10th-coaching-Institutes-classes-in-shastri-nagar-pune" />
              </Helmet>
            ) : currentURL === '/class-8th-9th-10th-coaching-Institutes-classes-in-pratik-nagar-pune' ? (
              <Helmet>
                <title>Foundation Course For Class 8th, 9th & 10th Std in Pratik Nagar Pune</title>
                <meta name="description" content="Join Asquare’s Foundation Course For Class 8th, 9th, & 10th in Pratik Nagar, Pune. Strengthen Core Subjects with Experienced Faculty and Comprehensive Study Plans." />
                <meta name="keywords" content="Foundation Course for Class 8th Pratik Nagar Pune, Foundation Course for Class 9th Pratik Nagar Pune, Foundation Course for Class 10th Pratik Nagar Pune, Foundation classes Pratik Nagar Pune, Asquare Classes Pratik Nagar Pune, Academic foundation Pratik Nagar Pune" />
                <link rel="canonical" href="https://www.asquareclasses.com/class-8th-9th-10th-coaching-Institutes-classes-in-pratik-nagar-pune" />
              </Helmet>
            ) : currentURL === '/class-8th-9th-10th-coaching-Institutes-classes-in-viman-nagar-pune' ? (
              <Helmet>
                <title>Foundation Course for Class 8th, 9th & 10th Std in Viman Nagar Pune</title>
                <meta name="description" content="Enroll in Asquare's Foundation Course For Class 8th, 9th, & 10th in Viman Nagar, Pune. Expert Coaching to Build a Strong Academic Base and Excel in Exams." />
                <meta name="keywords" content="Foundation Course for Class 8th Viman Nagar Pune, Foundation Course for Class 9th Viman Nagar Pune, Foundation Course for Class 10th Viman Nagar Pune, Foundation classes Viman Nagar Pune, A Square Classes Viman Nagar Pune, Academic foundation Viman Nagar Pune" />
                <link rel="canonical" href="https://www.asquareclasses.com/class-8th-9th-10th-coaching-Institutes-classes-in-viman-nagar-pune" />
              </Helmet>
            ) : currentURL === '/class-8th-9th-10th-coaching-Institutes-classes-in-kalyani-nagar-pune' ? (
              <Helmet>
                <title>Foundation Course for Class 8th, 9th & 10th in Kalyani Nagar Pune</title>
                <meta name="description" content="Join Asquare's Foundation Course For Class 8th, 9th, & 10th in Kalyani Nagar, Pune. Enhance Academic Skills With Expert Guidance For Future Success." />
                <meta name="keywords" content="Foundation Course for Class 8th Kalyani Nagar Pune, Foundation Course for Class 9th Kalyani Nagar Pune, Foundation Course for Class 10th Kalyani Nagar Pune, Foundation classes Kalyani Nagar Pune, Asquare Classes Kalyani Nagar Pune, Academic foundation Kalyani Nagar Pune" />
                <link rel="canonical" href="https://www.asquareclasses.com/class-8th-9th-10th-coaching-Institutes-classes-in-kalyani-nagar-pune" />
              </Helmet>
            ) : currentURL === '/class-8th-9th-10th-coaching-Institutes-classes-in-wagholi-pune' ? (
              <Helmet>
                <title>Foundation Course for Class 8th, 9th & 10th in Wagholi Pune</title>
                <meta name="description" content="Boost Your Academic Journey with Asquare’s Foundation Course for Class 8th, 9th, & 10th in Wagholi, Pune. Expert Guidance for Strong Academic Roots." />
                <meta name="keywords" content="Foundation Course for Class 8th Wagholi Pune, Foundation Course for Class 9th Wagholi Pune, Foundation Course for Class 10th Wagholi Pune, Foundation classes Wagholi Pune, Asquare Classes Wagholi Pune, Academic foundation Wagholi Pune" />
                <link rel="canonical" href="https://www.asquareclasses.com/class-8th-9th-10th-coaching-Institutes-classes-in-wagholi-pune" />
              </Helmet>
            ) : currentURL === '/class-8th-9th-10th-coaching-Institutes-classes-in-pimpri-pune' ? (
              <Helmet>
                <title>Foundation Course for Class 8th, 9th & 10th in Pimpri Pune</title>
                <meta name="description" content="Join Asquare’s Foundation Course in Pimpri Pune for Class 8th, 9th, & 10th. Build Strong Academic Skills with Experienced Teachers for Future Success." />
                <meta name="keywords" content="Foundation Course for Class 8th Pimpri Pune, Foundation Course for Class 9th Pimpri Pune, Foundation Course for Class 10th Pimpri Pune, Foundation classes Pimpri Pune, Asquare Classes Pimpri Pune, Academic foundation Pimpri Pune" />
                <link rel="canonical" href="https://www.asquareclasses.com/class-8th-9th-10th-coaching-Institutes-classes-in-pimpri-pune" />
              </Helmet>
            ) : currentURL === '/class-8th-9th-10th-coaching-Institutes-classes-in-chinchwad-pune' ? (
              <Helmet>
                <title>Foundation Course for Class 8th, 9th & 10th in Chinchwad Pune</title>
                <meta name="description" content="Enroll in Asquare’s Foundation Course in Chinchwad Pune for Class 8th, 9th, & 10th. Build a Strong Academic Foundation with Expert Guidance and Support." />
                <meta name="keywords" content="Foundation Course for Class 8th Chinchwad Pune, Foundation Course for Class 9th Chinchwad Pune, Foundation Course for Class 10th Chinchwad Pune, Foundation classes Chinchwad Pune, Asquare Classes Chinchwad Pune, Academic foundation Chinchwad Pune" />
                <link rel="canonical" href="https://www.asquareclasses.com/class-8th-9th-10th-coaching-Institutes-classes-in-chinchwad-pune" />
              </Helmet>
            ) : currentURL === '/class-8th-9th-10th-coaching-Institutes-classes-in-pcmc-pune' ? (
              <Helmet>
                <title>Foundation Course for Class 8th, 9th & 10th in PCMC Pune</title>
                <meta name="description" content="Join Asquare’s Foundation Course in PCMC Pune for Classes 8th, 9th, & 10th. Build a Solid Academic Base with Expert Coaching for Future Success." />
                <meta name="keywords" content="Foundation Course for Class 8th PCMC Pune, Foundation Course for Class 9th PCMC Pune, Foundation Course for Class 10th PCMC Pune, Foundation classes PCMC Pune, Asquare Classes PCMC Pune, Academic foundation PCMC Pune" />
                <link rel="canonical" href="https://www.asquareclasses.com/class-8th-9th-10th-coaching-Institutes-classes-in-pcmc-pune" />
              </Helmet>
            ) : currentURL === '/class-8th-9th-10th-coaching-Institutes-classes-in-akudi-pune' ? (
              <Helmet>
                <title>Foundation Course for Class 8th, 9th & 10th in Akudi Pune</title>
                <meta name="description" content="Enroll in Asquare’s Foundation Course in Akudi Pune for 8th, 9th, & 10th Graders. Strengthen Core Concepts and Prepare for Future Academic success." />
                <meta name="keywords" content="Foundation Course for Class 8th Akudi Pune, Foundation Course for Class 9th Akudi Pune, Foundation Course for Class 10th Akudi Pune, Academic foundation classes Akudi Pune, Asquare Classes Akudi Pune" />
                <link rel="canonical" href="https://www.asquareclasses.com/class-8th-9th-10th-coaching-Institutes-classes-in-akudi-pune" />
              </Helmet>
            ) : currentURL === '/class-8th-9th-10th-coaching-Institutes-classes-in-nigdi-pune' ? (
              <Helmet>
                <title>Foundation Course for Class 8th, 9th & 10th in Nigdi Pune</title>
                <meta name="description" content="Join Asquare’s Foundation Course in Nigdi Pune for Class 8th, 9th, and 10th. Build a Strong Academic Base And Excel in Future Competitive Exams." />
                <meta name="keywords" content="Foundation Course for Class 8th Nigdi Pune, Foundation Course for Class 9th Nigdi Pune, Foundation Course for Class 10th Nigdi Pune, Academic foundation classes Nigdi Pune, Asquare Classes Nigdi Pune" />
                <link rel="canonical" href="https://www.asquareclasses.com/class-8th-9th-10th-coaching-Institutes-classes-in-nigdi-pune" />
              </Helmet>
            ) : currentURL === '/class-8th-9th-10th-coaching-Institutes-classes-in-bhosari-pune' ? (
              <Helmet>
                <title>Foundation Course for Class 8th, 9th & 10th in Bhosari Pune</title>
                <meta name="description" content="Enroll in Asquare's Foundation Course in Bhosari Pune for Class 8th, 9th, and 10th Students. Strengthen Core Concepts for Academic Excellence." />
                <meta name="keywords" content="Foundation Course for Class 8th Bhosari Pune, Foundation Course for Class 9th Bhosari Pune, Foundation Course for Class 10th Bhosari Pune, Academic foundation classes Bhosari Pune, Asquare Classes Bhosari Pune" />
                <link rel="canonical" href="https://www.asquareclasses.com/class-8th-9th-10th-coaching-Institutes-classes-in-bhosari-pune" />
              </Helmet>
            ) : currentURL === '/class-8th-9th-10th-coaching-Institutes-classes-in-moshi-pune' ? (
              <Helmet>
                <title>Foundation Course for Class 8th, 9th & 10th in Moshi Pune</title>
                <meta name="description" content="Join Asquare's Foundation Course in Moshi Pune for Class 8th, 9th, and 10th Students. Build a Strong Academic Base For Future Success." />
                <meta name="keywords" content="Foundation Course for Class 8th Moshi Pune, Foundation Course for Class 9th Moshi Pune, Foundation Course for Class 10th Moshi Pune, Academic foundation classes Moshi Pune, Asquare Classes Moshi Pune" />
                <link rel="canonical" href="https://www.asquareclasses.com/class-8th-9th-10th-coaching-Institutes-classes-in-moshi-pune" />
              </Helmet>
            ) : currentURL === '/class-8th-9th-10th-coaching-Institutes-classes-in-chakan-pune' ? (
              <Helmet>
                <title>Foundation Course for Class 8th, 9th & 10th in Chakan Pune</title>
                <meta name="description" content="Join Asquare's Foundation Course in Chakan Pune for Class 8th, 9th, and 10th Students. Strengthen Your Academic Foundation For Future Academic Success." />
                <meta name="keywords" content="Foundation Course for Class 8th Chakan Pune, Foundation Course for Class 9th Chakan Pune, Foundation Course for Class 10th Chakan Pune, Academic foundation classes Chakan Pune, Asquare Classes Chakan Pune" />
                <link rel="canonical" href="https://www.asquareclasses.com/class-8th-9th-10th-coaching-Institutes-classes-in-chakan-pune" />
              </Helmet>
            ) : currentURL === '/class-8th-9th-10th-coaching-Institutes-classes-in-kasarwadi-pune' ? (
              <Helmet>
                <title>Foundation Course for Class 8th, 9th & 10th in Kasarwadi Pune</title>
                <meta name="description" content="Enroll in Asquare's Foundation Course for Class 8th, 9th, and 10th in Kasarwadi Pune. Strengthen Your Basics and Excel in Your Academic Journey. Join now!" />
                <meta name="keywords" content="Foundation Course for Class 8th Kasarwadi Pune, Foundation Course for Class 9th Kasarwadi Pune, Foundation Course for Class 10th Kasarwadi Pune, Academic foundation classes Kasarwadi Pune, Asquare Classes Kasarwadi Pune" />
                <link rel="canonical" href="https://www.asquareclasses.com/class-8th-9th-10th-coaching-Institutes-classes-in-kasarwadi-pune" />
              </Helmet>
            ) : currentURL === '/class-8th-9th-10th-coaching-Institutes-classes-in-dapodi-pune' ? (
              <Helmet>
                <title>Foundation Course for Class 8th, 9th & 10th in Dapodi Pune</title>
                <meta name="description" content="Join Asquare's Foundation Course in Dapodi Pune for Class 8th, 9th, and 10th. Strengthen Your Fundamentals For Success in Board Exams and Competitive Exams." />
                <meta name="keywords" content="Foundation Course for Class 8th Dapodi Pune, Foundation Course for Class 9th Dapodi Pune, Foundation Course for Class 10th Dapodi Pune, Asquare Classes Dapodi Pune, Academic foundation classes Dapodi Pune" />
                <link rel="canonical" href="https://www.asquareclasses.com/class-8th-9th-10th-coaching-Institutes-classes-in-dapodi-pune" />
              </Helmet>
            ) : currentURL === '/class-8th-9th-10th-coaching-Institutes-classes-in-ravet-pune' ? (
              <Helmet>
                <title>Foundation Course for Class 8th, 9th & 10th in Ravet Pune</title>
                <meta name="description" content="Enroll in Asquare’s Foundation Course in Ravet Pune for Class 8th, 9th, and 10th. Prepare For Boards And Competitive Exams With Expert Guidance And Comprehensive Study." />
                <meta name="keywords" content="Foundation Course for Class 8th Ravet Pune, Foundation Course for Class 9th Ravet Pune, Foundation Course for Class 10th Ravet Pune, Asquare Classes Ravet Pune, Academic foundation classes Ravet Pune" />
                <link rel="canonical" href="https://www.asquareclasses.com/class-8th-9th-10th-coaching-Institutes-classes-in-ravet-pune" />
              </Helmet>
            ) : currentURL === '/class-8th-9th-10th-coaching-Institutes-classes-in-kalewadi-pune' ? (
              <Helmet>
                <title>Foundation Course for Class 8th, 9th & 10th in Kalewadi Pune</title>
                <meta name="description" content="Join Asquare Classes in Kalewadi Pune for a Foundation Course for Class 8th, 9th, and 10th. Strengthen Your Academic Skills and Excel in Exams with Expert Coaching." />
                <meta name="keywords" content="Foundation Course for Class 8th Kalewadi Pune, Foundation Course for Class 9th Kalewadi Pune, Foundation Course for Class 10th Kalewadi Pune, Asquare Classes Kalewadi Pune, Academic foundation Kalewadi Pune" />
                <link rel="canonical" href="https://www.asquareclasses.com/class-8th-9th-10th-coaching-Institutes-classes-in-kalewadi-pune" />
              </Helmet>
            ) : currentURL === '/class-8th-9th-10th-coaching-Institutes-classes-in-wakad-pune' ? (
              <Helmet>
                <title>Foundation Course For Class 8th, 9th & 10th in Wakad Pune</title>
                <meta name="description" content="Enroll in Asquare Classes for a Foundation Course in Wakad, Pune, for Class 8th, 9th, and 10th. Build Strong Academic Foundations with Expert Coaching and Guidance." />
                <meta name="keywords" content="Foundation Course for Class 8th Wakad Pune, Foundation Course for Class 9th Wakad Pune, Foundation Course for Class 10th Wakad Pune, Asquare Classes Wakad Pune, Academic foundation Wakad Pune" />
                <link rel="canonical" href="https://www.asquareclasses.com/class-8th-9th-10th-coaching-Institutes-classes-in-wakad-pune" />
              </Helmet>
            ) : currentURL === '/class-8th-9th-10th-coaching-Institutes-classes-in-aundh-pune' ? (
              <Helmet>
                <title>Foundation Course for Class 8th, 9th & 10th in Aundh Pune</title>
                <meta name="description" content="Join Asquare Classes in Aundh, Pune For a Comprehensive Foundation Course for Class 8th, 9th, and 10th Students. Strengthen your Academic Skills With Expert Coaching." />
                <meta name="keywords" content="Foundation Course for Class 8th Aundh Pune, Foundation Course for Class 9th Aundh Pune, Foundation Course for Class 10th Aundh Pune, Asquare Classes Aundh Pune, Academic foundation Aundh Pune" />
                <link rel="canonical" href="https://www.asquareclasses.com/class-8th-9th-10th-coaching-Institutes-classes-in-aundh-pune" />
              </Helmet>
            ) : currentURL === '/class-8th-9th-10th-coaching-Institutes-classes-in-baner-pune' ? (
              <Helmet>
                <title>Foundation Course for Class 8th, 9th & 10th in Baner Pune</title>
                <meta name="description" content="Enroll in Asquare Classes in Baner, Pune For a Robust Foundation Course for Class 8th, 9th, and 10th Students. Prepare For Academic Success with Expert Guidance." />
                <meta name="keywords" content="Foundation Course for Class 8th Baner Pune, Foundation Course for Class 9th Baner Pune, Foundation Course for Class 10th Baner Pune Asquare Classes Baner Pune, Academic foundation Baner Pune" />
                <link rel="canonical" href="https://www.asquareclasses.com/class-8th-9th-10th-coaching-Institutes-classes-in-baner-pune" />
              </Helmet>
            ) : currentURL === '/class-8th-9th-10th-coaching-Institutes-classes-in-hinjewadi-pune' ? (
              <Helmet>
                <title>Foundation Course for Class 8th, 9th & 10th in Hinjewadi Pune</title>
                <meta name="description" content="Join Asquare Classes in Hinjewadi, Pune, for a Comprehensive Foundation Course for Class 8th, 9th, and 10th Students. Build a Strong Academic Base for Future Success." />
                <meta name="keywords" content="Foundation Course for Class 8th Hinjewadi Pune, Foundation Course for Class 9th Hinjewadi Pune, Foundation Course for Class 10th Hinjewadi Pune, Asquare Classes Hinjewadi Pune, Academic foundation Hinjewadi Pune" />
                <link rel="canonical" href="https://www.asquareclasses.com/class-8th-9th-10th-coaching-Institutes-classes-in-hinjewadi-pune" />
              </Helmet>
            ) : currentURL === '/class-8th-9th-10th-coaching-Institutes-classes-in-pimple-saudagar-pune' ? (
              <Helmet>
                <title>Foundation Course for Class 8th, 9th & 10th in Pimple Saudagar Pune</title>
                <meta name="description" content="Join Asquare Classes in Pimple Saudagar, Pune, for a Strong Foundation Course for Class 8th, 9th & 10th students. Build Essential Academic Skills for Success." />
                <meta name="keywords" content="Foundation Course for Class 8th Pimple Saudagar Pune, Foundation Course for Class 9th Pimple Saudagar Pune, Foundation Course for Class 10th Pimple Saudagar Pune, Asquare Classes Pimple Saudagar Pune, Academic foundation Pimple Saudagar Pune" />
                <link rel="canonical" href="https://www.asquareclasses.com/class-8th-9th-10th-coaching-Institutes-classes-in-pimple-saudagar-pune" />
              </Helmet>
            ) : currentURL === '/class-8th-9th-10th-coaching-Institutes-classes-in-pimple-gurav-pune' ? (
              <Helmet>
                <title>Foundation Course for Class 8th, 9th & 10th in Pimple Gurav Pune</title>
                <meta name="description" content="Enroll in Asquare Classes in Pimple Gurav, Pune for a Comprehensive Foundation Course for Class 8th, 9th & 10th Students. Strengthen your Academic Skills." />
                <meta name="keywords" content="Foundation Course for Class 8th Pimple Gurav Pune, Foundation Course for Class 9th Pimple Gurav Pune, Foundation Course for Class 10th Pimple Gurav Pune, Asquare Classes Pimple Gurav Pune, Academic foundation Pimple Gurav Pune" />
                <link rel="canonical" href="https://www.asquareclasses.com/class-8th-9th-10th-coaching-Institutes-classes-in-pimple-gurav-pune" />
              </Helmet>
            ) : currentURL === '/class-8th-9th-10th-coaching-Institutes-classes-in-pimple-nilakh-pune' ? (
              <Helmet>
                <title>Foundation Course for Class 8th, 9th & 10th in Pimple Nilakh Pune</title>
                <meta name="description" content="Join A Square Classes in Pimple Nilakh, Pune for a Strong Foundation Course for Class 8th, 9th & 10th. Build Your Academic Skills For Better Future Success." />
                <meta name="keywords" content="Foundation Course for Class 8th Pimple Nilakh Pune, Foundation Course for Class 9th Pimple Nilakh Pune, Foundation Course for Class 10th Pimple Nilakh Pune, Asquare Classes Pimple Nilakh Pune, Academic foundation Pimple Nilakh Pune" />
                <link rel="canonical" href="https://www.asquareclasses.com/class-8th-9th-10th-coaching-Institutes-classes-in-pimple-nilakh-pune" />
              </Helmet>
            ) : (
              <Helmet>
                <title>Foundation Course for 8th Class in Pune | A Square Classes</title>
                <meta name="description" content="Join A Square Classes For A Comprehensive Class 8th Foundation Course in Pune. Build Strong Fundamentals To Excel in Future Studies And Competitive Exams!" />
                <meta name="keywords" content="Class 8 foundation course Pune, foundation coaching for 8th grade, best 8th grade classes Pune, A Square Classes, academic coaching Pune, 8th grade preparation course, foundation program for 8th students" />
                <link rel="canonical" href="https://www.asquareclasses.com/8th-foundation-regular-course-institutes-classes-in-pune/" />
              </Helmet>
            )}
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
