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
    {currentURL === '/neet-coaching-classes-institute-in-vishrantwadi-pune' ? (
          <Helmet>
            <title>NEET Coaching Institute in Vishrantwadi | Asquare Classes</title>
            <meta name="description" content="Join A Square's NEET Classes in Vishrantwadi Pune For Top-Notch Coaching. Our Experienced Faculty And Focused Approach Help Students Excel in Medical Entrance Exams." />
            <meta name="keywords" content="Neet classes in Vishrantwadi , Best neet classes in Vishrantwadi, NEET classes in Vishrantwadi, A Square Classes, NEET coaching, NEET preparation, medical entrance, expert faculty, Vishrantwadi coaching institute, NEET success, NEET coaching institute in Vishrantwadi, Neet coaching institute in Vishrantwadi, Best neet coaching institute in Vishrantwadi, NEET coaching centre near me, Coaching classes for NEET, Best neet coaching centre near me, Best NEET Classes in Vishrantwadi, Coaching classes for NEET, NEET Coaching Classes in Vishrantwadi, Best NEET Coaching Classes in Vishrantwadi , NEET Coaching Institute in Vishrantwadi, Best NEET Coaching Institute in Vishrantwadi, Best NEET Coaching Center in Vishrantwadi, Best Coaching Classes for Neet In Vishrantwadi, Best Coaching Center for NEET in Vishrantwadi, NEET Exam Prepration Coaching Center in Vishrantwadi, top NEET coaching classes in Vishrantwadi, top NEET coaching institute in Vishrantwadi" />
            <link rel="canonical" href="https://www.asquareclasses.com/neet-coaching-classes-institute-in-vishrantwadi-pune" />
          </Helmet>
            ) : currentURL === '/neet-coaching-classes-institute-in-yerwada-pune' ? (
              <Helmet>
                <title>NEET Coaching Institute in Yerwada | Asquare Classes</title>
                <meta name="description" content="Best Coaching Centers for NEET in Pune with Fee Structure: Join Asquare Classes in Yerwada Pune for NEET Preparation. We Provide Cutting-Edge Educational Solutions That Help Students To Excel in Their Goals." />
                <meta name="keywords" content="Neet classes in Yerwada , Best neet classes in Yerwada, NEET classes in Yerwada, A Square Classes, NEET coaching, NEET preparation, medical entrance, expert faculty, Yerwada coaching institute, NEET success, NEET coaching institute in Yerwada, Neet coaching institute in Yerwada, Best neet coaching institute in Yerwada, NEET coaching centre near me, Coaching classes for NEET, Best neet coaching centre near me, Best NEET Classes in Yerwada, Coaching classes for NEET, NEET Coaching Classes in Yerwada, Best NEET Coaching Classes in Yerwada , NEET Coaching Institute in Yerwada, Best NEET Coaching Institute in Yerwada, Best NEET Coaching Center in Yerwada, Best Coaching Classes for Neet In Yerwada, Best Coaching Center for NEET in Yerwada, NEET Exam Prepration Coaching Center in Yerwada, top NEET coaching classes in Yerwada, top NEET coaching institute in Yerwada" />
                <link rel="canonical" href="https://www.asquareclasses.com/neet-coaching-classes-institute-in-yerwada-pune" />
              </Helmet>
            ) : currentURL === '/neet-coaching-classes-institute-in-dhanori-pune' ? (
              <Helmet>
                <title>NEET Coaching Institute in Dhanori | Affordable NEET Coaching</title>
                <meta name="description" content="Best Coaching Centers for NEET in Pune with Fee Structure: Join Asquare Classes in Dhanori Pune for NEET Preparation. We Provide Cutting-Edge Educational Solutions That Help Students To Excel in Their Goals." />
                <meta name="keywords" content="Neet classes in Dhanori , Best neet classes in Dhanori, NEET classes in Dhanori, A Square Classes, NEET coaching, NEET preparation, medical entrance, expert faculty, Dhanori coaching institute, NEET success, NEET coaching institute in Dhanori, Neet coaching institute in Dhanori, Best neet coaching institute in Dhanori, NEET coaching centre near me, Coaching classes for NEET, Best neet coaching centre near me, Best NEET Classes in Dhanori, Coaching classes for NEET, NEET Coaching Classes in Dhanori, Best NEET Coaching Classes in Dhanori , NEET Coaching Institute in Dhanori, Best NEET Coaching Institute in Dhanori, Best NEET Coaching Center in Dhanori, Best Coaching Classes for Neet In Dhanori, Best Coaching Center for NEET in Dhanori, NEET Exam Prepration Coaching Center in Dhanori, top NEET coaching classes in Dhanori, top NEET coaching institute in Dhanori" />
                <link rel="canonical" href="https://www.asquareclasses.com/neet-coaching-classes-institute-in-dhanori-pune" />
              </Helmet>
            ) : currentURL === '/neet-coaching-classes-institute-in-lohegaon-pune' ? (
              <Helmet>
                <title>NEET Coaching Institute in Lohegaon Pune | NEET Regular Batch</title>
                <meta name="description" content="Best Coaching Centers for NEET in Pune with Fee Structure: Join Asquare Classes in Lohegaon Pune for NEET Preparation. We Provide Cutting-Edge Educational Solutions That Help Students To Excel in Their Goals." />
                <meta name="keywords" content="Neet classes in Lohegaon , Best neet classes in Lohegaon, NEET classes in Lohegaon, A Square Classes, NEET coaching, NEET preparation, medical entrance, expert faculty, Lohegaon coaching institute, NEET success, NEET coaching institute in Lohegaon, Neet coaching institute in Lohegaon, Best neet coaching institute in Lohegaon, NEET coaching centre near me, Coaching classes for NEET, Best neet coaching centre near me, Best NEET Classes in Lohegaon, Coaching classes for NEET, NEET Coaching Classes in Lohegaon, Best NEET Coaching Classes in Lohegaon , NEET Coaching Institute in Lohegaon, Best NEET Coaching Institute in Lohegaon, Best NEET Coaching Center in Lohegaon, Best Coaching Classes for Neet In Lohegaon, Best Coaching Center for NEET in Lohegaon, NEET Exam Prepration Coaching Center in Lohegaon, top NEET coaching classes in Lohegaon, top NEET coaching institute in Lohegaon" />
                <link rel="canonical" href="https://www.asquareclasses.com/neet-coaching-classes-institute-in-lohegaon-pune" />
              </Helmet>
            ) : currentURL === '/neet-coaching-classes-institute-in-dighi-pune' ? (
              <Helmet>
                <title>NEET Coaching Institute in Dighi Pune | Expert NEET Faculty</title>
                <meta name="description" content="Best Coaching Centers for NEET in Pune with Fee Structure: Join Asquare Classes in Dighi Pune for NEET Preparation. We Provide Cutting-Edge Educational Solutions That Help Students To Excel in Their Goals." />
                <meta name="keywords" content="Neet classes in Dighi , Best neet classes in Dighi, NEET classes in Dighi, A Square Classes, NEET coaching, NEET preparation, medical entrance, expert faculty, Dighi coaching institute, NEET success, NEET coaching institute in Dighi, Neet coaching institute in Dighi, Best neet coaching institute in Dighi, NEET coaching centre near me, Coaching classes for NEET, Best neet coaching centre near me, Best NEET Classes in Dighi, Coaching classes for NEET, NEET Coaching Classes in Dighi, Best NEET Coaching Classes in Dighi , NEET Coaching Institute in Dighi, Best NEET Coaching Institute in Dighi, Best NEET Coaching Center in Dighi, Best Coaching Classes for Neet In Dighi, Best Coaching Center for NEET in Dighi, NEET Exam Prepration Coaching Center in Dighi, top NEET coaching classes in Dighi, top NEET coaching institute in Dighi" />
                <link rel="canonical" href="https://www.asquareclasses.com/neet-coaching-classes-institute-in-dighi-pune" />
              </Helmet>
            ) : currentURL === '/neet-coaching-classes-institute-in-alandi-pune' ? (
              <Helmet>
                <title>NEET Coaching Institute in Alandi Pune | NEET Mock Exams</title>
                <meta name="description" content="Join A Square's NEET Classes in Alandi Pune For Top-Notch Coaching. Our Experienced Faculty And Focused Approach Help Students Excel in Medical Entrance Exams." />
                <meta name="keywords" content="Neet classes in Alandi , Best neet classes in Alandi, NEET classes in Alandi, A Square Classes, NEET coaching, NEET preparation, medical entrance, expert faculty, Alandi coaching institute, NEET success, NEET coaching institute in Alandi, Neet coaching institute in Alandi, Best neet coaching institute in Alandi, NEET coaching centre near me, Coaching classes for NEET, Best neet coaching centre near me, Best NEET Classes in Alandi, Coaching classes for NEET, NEET Coaching Classes in Alandi, Best NEET Coaching Classes in Alandi , NEET Coaching Institute in Alandi, Best NEET Coaching Institute in Alandi, Best NEET Coaching Center in Alandi, Best Coaching Classes for Neet In Alandi, Best Coaching Center for NEET in Alandi, NEET Exam Prepration Coaching Center in Alandi, top NEET coaching classes in Alandi, top NEET coaching institute in Alandi" />
                <link rel="canonical" href="https://www.asquareclasses.com/neet-coaching-classes-institute-in-alandi-pune" />
              </Helmet>
            ) : currentURL === '/neet-coaching-classes-institute-in-khadki-pune' ? (
              <Helmet>
                <title>NEET Coaching Institute in Khadki Pune | NEET Results Success</title>
                <meta name="description" content="Join A Square's NEET Classes in Khadki Pune For Top-Notch Coaching. Our Experienced Faculty And Focused Approach Help Students Excel in Medical Entrance Exams." />
                <meta name="keywords" content="Neet classes in Khadki  , Best neet classes in Khadki , NEET classes in Khadki , ASquare Classes, NEET coaching, NEET preparation, medical entrance, expert faculty, Khadki  coaching institute, NEET success, NEET coaching institute in Khadki , Neet coaching institute in Khadki , Best neet coaching institute in Khadki , NEET coaching centre near me, Coaching classes for NEET, Best neet coaching centre near me, Best NEET Classes in Khadki , Coaching classes for NEET, NEET Coaching Classes in Khadki , Best NEET Coaching Classes in Khadki  , NEET Coaching Institute in Khadki , Best NEET Coaching Institute in Khadki , Best NEET Coaching Center in Khadki , Best Coaching Classes for Neet In Khadki , Best Coaching Center for NEET in Khadki , NEET Exam Prepration Coaching Center in Khadki , top NEET coaching classes in Khadki , top NEET coaching institute in Khadki" />
                <link rel="canonical" href="https://www.asquareclasses.com/neet-coaching-classes-institute-in-khadki-pune" />
              </Helmet>
            ) : currentURL === '/neet-coaching-classes-institute-in-tingre-nagar-pune' ? (
              <Helmet>
                <title>NEET Coaching Institute in Tingre Nagar Pune | NEET Foundation</title>
                <meta name="description" content="Join A Square's NEET Classes in Tingre Nagar Pune For Top-Notch Coaching. Our Experienced Faculty And Focused Approach Help Students Excel in Medical Entrance Exams." />
                <meta name="keywords" content="Neet classes in Tingre Nagar Pune  , Best neet classes in Tingre Nagar Pune , NEET classes in Tingre Nagar Pune , ASquare Classes, NEET coaching, NEET preparation, medical entrance, expert faculty, Tingre Nagar Pune  coaching institute, NEET success, NEET coaching institute in Tingre Nagar Pune , Neet coaching institute in Tingre Nagar Pune , Best neet coaching institute in Tingre Nagar Pune , NEET coaching centre near me, Coaching classes for NEET, Best neet coaching centre near me, Best NEET Classes in Tingre Nagar Pune , Coaching classes for NEET, NEET Coaching Classes in Tingre Nagar Pune , Best NEET Coaching Classes in Tingre Nagar Pune  , NEET Coaching Institute in Tingre Nagar Pune , Best NEET Coaching Institute in Tingre Nagar Pune , Best NEET Coaching Center in Tingre Nagar Pune , Best Coaching Classes for Neet In Tingre Nagar Pune , Best Coaching Center for NEET in Tingre Nagar Pune , NEET Exam Prepration Coaching Center in Tingre Nagar Pune , top NEET coaching classes in Tingre Nagar Pune , top NEET coaching institute in Tingre Nagar Pune" />
                <link rel="canonical" href="https://www.asquareclasses.com/neet-coaching-classes-institute-in-tingre-nagar-pune" />
              </Helmet>
            ) : currentURL === '/neet-coaching-classes-institute-in-shastri-nagar-pune' ? (
              <Helmet>
                <title>NEET Coaching Institute in Shastri Nagar Pune Call 9404282283</title>
                <meta name="description" content="Join A Square's NEET Classes in Shastri Nagar Pune For Top-Notch Coaching. Our Experienced Faculty And Focused Approach Help Students Excel in Medical Entrance Exams." />
                <meta name="keywords" content="Neet classes in Shastri Nagar Pune  , Best neet classes in Shastri Nagar Pune , NEET classes in Shastri Nagar Pune , ASquare Classes, NEET coaching, NEET preparation, medical entrance, expert faculty, Shastri Nagar Pune  coaching institute, NEET success, NEET coaching institute in Shastri Nagar Pune , Neet coaching institute in Shastri Nagar Pune , Best neet coaching institute in Shastri Nagar Pune , NEET coaching centre near me, Coaching classes for NEET, Best neet coaching centre near me, Best NEET Classes in Shastri Nagar Pune , Coaching classes for NEET, NEET Coaching Classes in Shastri Nagar Pune , Best NEET Coaching Classes in Shastri Nagar Pune  , NEET Coaching Institute in Shastri Nagar Pune , Best NEET Coaching Institute in Shastri Nagar Pune , Best NEET Coaching Center in Shastri Nagar Pune , Best Coaching Classes for Neet In Shastri Nagar Pune , Best Coaching Center for NEET in Shastri Nagar Pune , NEET Exam Prepration Coaching Center in Shastri Nagar Pune , top NEET coaching classes in Shastri Nagar Pune , top NEET coaching institute in Shastri Nagar Pune" />
                <link rel="canonical" href="https://www.asquareclasses.com/neet-coaching-classes-institute-in-shastri-nagar-pune" />
              </Helmet>
            ) : currentURL === '/neet-coaching-classes-institute-in-pratik-nagar-pune' ? (
              <Helmet>
                <title>NEET Coaching Institute in Pratik Nagar Pune Call 9404282283</title>
                <meta name="description" content="Join A Square's NEET Classes in Pratik Nagar Pune For Top-Notch Coaching. Our Experienced Faculty And Focused Approach Help Students Excel in Medical Entrance Exams." />
                <meta name="keywords" content="Neet classes in Pratik Nagar Pune  , Best neet classes in Pratik Nagar Pune , NEET classes in Pratik Nagar Pune , ASquare Classes, NEET coaching, NEET preparation, medical entrance, expert faculty, Pratik Nagar Pune  coaching institute, NEET success, NEET coaching institute in Pratik Nagar Pune , Neet coaching institute in Pratik Nagar Pune , Best neet coaching institute in Pratik Nagar Pune , NEET coaching centre near me, Coaching classes for NEET, Best neet coaching centre near me, Best NEET Classes in Pratik Nagar Pune , Coaching classes for NEET, NEET Coaching Classes in Pratik Nagar Pune , Best NEET Coaching Classes in Pratik Nagar Pune  , NEET Coaching Institute in Pratik Nagar Pune , Best NEET Coaching Institute in Pratik Nagar Pune , Best NEET Coaching Center in Pratik Nagar Pune , Best Coaching Classes for Neet In Pratik Nagar Pune , Best Coaching Center for NEET in Pratik Nagar Pune , NEET Exam Prepration Coaching Center in Pratik Nagar Pune , top NEET coaching classes in Pratik Nagar Pune , top NEET coaching institute in Pratik Nagar Pune" />
                <link rel="canonical" href="https://www.asquareclasses.com/neet-coaching-classes-institute-in-pratik-nagar-pune" />
              </Helmet>
            ) : currentURL === '/neet-coaching-classes-institute-in-viman-nagar-pune' ? (
              <Helmet>
                <title>NEET Coaching Institute in Viman Nagar Pune Call 9404282283</title>
                <meta name="description" content="Join A Square's NEET Classes in Vimannagar Pune For Top-Notch Coaching. Our Experienced Faculty And Focused Approach Help Students Excel in Medical Entrance Exams." />
                <meta name="keywords" content="Neet classes in Viman Nagar Pune  , Best neet classes in Viman Nagar Pune , NEET classes in Viman Nagar Pune , ASquare Classes, NEET coaching, NEET preparation, medical entrance, expert faculty, Viman Nagar Pune  coaching institute, NEET success, NEET coaching institute in Viman Nagar Pune , Neet coaching institute in Viman Nagar Pune , Best neet coaching institute in Viman Nagar Pune , NEET coaching centre near me, Coaching classes for NEET, Best neet coaching centre near me, Best NEET Classes in Viman Nagar Pune , Coaching classes for NEET, NEET Coaching Classes in Viman Nagar Pune , Best NEET Coaching Classes in Viman Nagar Pune  , NEET Coaching Institute in Viman Nagar Pune , Best NEET Coaching Institute in Viman Nagar Pune , Best NEET Coaching Center in Viman Nagar Pune , Best Coaching Classes for Neet In Viman Nagar Pune , Best Coaching Center for NEET in Viman Nagar Pune , NEET Exam Prepration Coaching Center in Viman Nagar Pune , top NEET coaching classes in Viman Nagar Pune , top NEET coaching institute in Viman Nagar Pune" />
                <link rel="canonical" href="https://www.asquareclasses.com/neet-coaching-classes-institute-in-viman-nagar-pune" />
              </Helmet>
            ) : currentURL === '/neet-coaching-classes-institute-in-kalyani-nagar-pune' ? (
              <Helmet>
                <title>NEET Coaching Institute in Kalyani Nagar Pune | Asquare Classes</title>
                <meta name="description" content="Join A Square's NEET Classes in Kalyani Nagar Pune For Top-Notch Coaching. Our Experienced Faculty And Focused Approach Help Students Excel in Medical Entrance Exams." />
                <meta name="keywords" content="Neet classes in Kalyani Nagar Pune  , Best neet classes in Kalyani Nagar Pune , NEET classes in Kalyani Nagar Pune , ASquare Classes, NEET coaching, NEET preparation, medical entrance, expert faculty, Kalyani Nagar Pune  coaching institute, NEET success, NEET coaching institute in Kalyani Nagar Pune , Neet coaching institute in Kalyani Nagar Pune , Best neet coaching institute in Kalyani Nagar Pune , NEET coaching centre near me, Coaching classes for NEET, Best neet coaching centre near me, Best NEET Classes in Kalyani Nagar Pune , Coaching classes for NEET, NEET Coaching Classes in Kalyani Nagar Pune , Best NEET Coaching Classes in Kalyani Nagar Pune  , NEET Coaching Institute in Kalyani Nagar Pune , Best NEET Coaching Institute in Kalyani Nagar Pune , Best NEET Coaching Center in Kalyani Nagar Pune , Best Coaching Classes for Neet In Kalyani Nagar Pune , Best Coaching Center for NEET in Kalyani Nagar Pune , NEET Exam Prepration Coaching Center in Kalyani Nagar Pune , top NEET coaching classes in Kalyani Nagar Pune , top NEET coaching institute in Kalyani Nagar Pune" />
                <link rel="canonical" href="https://www.asquareclasses.com/neet-coaching-classes-institute-in-kalyani-nagar-pune" />
              </Helmet>
            ) : currentURL === '/neet-coaching-classes-institute-in-wagholi-pune' ? (
              <Helmet>
                <title>NEET Coaching Institute in Wagholi Pune | Asquare Classes</title>
                <meta name="description" content="Join A Square's NEET Classes in Wagholi Pune For Top-Notch Coaching. Our Experienced Faculty And Focused Approach Help Students Excel in Medical Entrance Exams." />
                <meta name="keywords" content="Neet classes in Wagholi Pune  , Best neet classes in Wagholi Pune , NEET classes in Wagholi Pune , ASquare Classes, NEET coaching, NEET preparation, medical entrance, expert faculty, Wagholi Pune  coaching institute, NEET success, NEET coaching institute in Wagholi Pune , Neet coaching institute in Wagholi Pune , Best neet coaching institute in Wagholi Pune , NEET coaching centre near me, Coaching classes for NEET, Best neet coaching centre near me, Best NEET Classes in Wagholi Pune , Coaching classes for NEET, NEET Coaching Classes in Wagholi Pune , Best NEET Coaching Classes in Wagholi Pune  , NEET Coaching Institute in Wagholi Pune , Best NEET Coaching Institute in Wagholi Pune , Best NEET Coaching Center in Wagholi Pune , Best Coaching Classes for Neet In Wagholi Pune , Best Coaching Center for NEET in Wagholi Pune , NEET Exam Prepration Coaching Center in Wagholi Pune , top NEET coaching classes in Wagholi Pune , top NEET coaching institute in Wagholi Pune" />
                <link rel="canonical" href="https://www.asquareclasses.com/neet-coaching-classes-institute-in-wagholi-pune" />
              </Helmet>
            ) : currentURL === '/neet-coaching-classes-institute-in-pimpri-pune' ? (
              <Helmet>
                <title>NEET Coaching Institute in Pimpri Pune Call On +91 9404282283</title>
                <meta name="description" content="Join A Square's NEET Classes in Pimpri Pune For Top-Notch Coaching. Our Experienced Faculty And Focused Approach Help Students Excel in Medical Entrance Exams." />
                <meta name="keywords" content="Neet classes in Pimpri Pune  , Best neet classes in Pimpri Pune , NEET classes in Pimpri Pune , ASquare Classes, NEET coaching, NEET preparation, medical entrance, expert faculty, Pimpri Pune  coaching institute, NEET success, NEET coaching institute in Pimpri Pune , Neet coaching institute in Pimpri Pune , Best neet coaching institute in Pimpri Pune , NEET coaching centre near me, Coaching classes for NEET, Best neet coaching centre near me, Best NEET Classes in Pimpri Pune , Coaching classes for NEET, NEET Coaching Classes in Pimpri Pune , Best NEET Coaching Classes in Pimpri Pune  , NEET Coaching Institute in Pimpri Pune , Best NEET Coaching Institute in Pimpri Pune , Best NEET Coaching Center in Pimpri Pune , Best Coaching Classes for Neet In Pimpri Pune , Best Coaching Center for NEET in Pimpri Pune , NEET Exam Prepration Coaching Center in Pimpri Pune , top NEET coaching classes in Pimpri Pune , top NEET coaching institute in Pimpri Pune" />
                <link rel="canonical" href="https://www.asquareclasses.com/neet-coaching-classes-institute-in-pimpri-pune" />
              </Helmet>
            ) : currentURL === '/neet-coaching-classes-institute-in-chinchwad-pune' ? (
              <Helmet>
                <title>NEET Coaching Institute in Chinchwad Pune Call +91 9404282283</title>
                <meta name="description" content="Join A Square's NEET Classes in Chinchwad Pune For Top-Notch Coaching. Our Experienced Faculty And Focused Approach Help Students Excel in Medical Entrance Exams." />
                <meta name="keywords" content="Neet classes in CHINCHWAD Pune  , Best neet classes in CHINCHWAD Pune , NEET classes in CHINCHWAD Pune , ASquare Classes, NEET coaching, NEET preparation, medical entrance, expert faculty, CHINCHWAD Pune  coaching institute, NEET success, NEET coaching institute in CHINCHWAD Pune , Neet coaching institute in CHINCHWAD Pune , Best neet coaching institute in CHINCHWAD Pune , NEET coaching centre near me, Coaching classes for NEET, Best neet coaching centre near me, Best NEET Classes in CHINCHWAD Pune , Coaching classes for NEET, NEET Coaching Classes in CHINCHWAD Pune , Best NEET Coaching Classes in CHINCHWAD Pune  , NEET Coaching Institute in CHINCHWAD Pune , Best NEET Coaching Institute in CHINCHWAD Pune , Best NEET Coaching Center in CHINCHWAD Pune , Best Coaching Classes for Neet In CHINCHWAD Pune , Best Coaching Center for NEET in CHINCHWAD Pune , NEET Exam Prepration Coaching Center in CHINCHWAD Pune , top NEET coaching classes in CHINCHWAD Pune , top NEET coaching institute in CHINCHWAD Pune" />
                <link rel="canonical" href="https://www.asquareclasses.com/neet-coaching-classes-institute-in-chinchwad-pune" />
              </Helmet>
            ) : currentURL === '/neet-coaching-classes-institute-in-pcmc-pune' ? (
              <Helmet>
                <title>NEET Coaching Institute in PCMC Pune Call On +91 9404282283</title>
                <meta name="description" content="Join A Square's NEET Classes in PCMC Pune For Top-Notch Coaching. Our Experienced Faculty And Focused Approach Help Students Excel in Medical Entrance Exams." />
                <meta name="keywords" content="Neet classes in PCMC Pune  , Best neet classes in PCMC Pune , NEET classes in PCMC Pune , ASquare Classes, NEET coaching, NEET preparation, medical entrance, expert faculty, PCMC Pune  coaching institute, NEET success, NEET coaching institute in PCMC Pune , Neet coaching institute in PCMC Pune , Best neet coaching institute in PCMC Pune , NEET coaching centre near me, Coaching classes for NEET, Best neet coaching centre near me, Best NEET Classes in PCMC Pune , Coaching classes for NEET, NEET Coaching Classes in PCMC Pune , Best NEET Coaching Classes in PCMC Pune  , NEET Coaching Institute in PCMC Pune , Best NEET Coaching Institute in PCMC Pune , Best NEET Coaching Center in PCMC Pune , Best Coaching Classes for Neet In PCMC Pune , Best Coaching Center for NEET in PCMC Pune , NEET Exam Prepration Coaching Center in PCMC Pune , top NEET coaching classes in PCMC Pune , top NEET coaching institute in PCMC Pune" />
                <link rel="canonical" href="https://www.asquareclasses.com/neet-coaching-classes-institute-in-pcmc-pune" />
              </Helmet>
            ) : currentURL === '/neet-coaching-classes-institute-in-akudi-pune' ? (
              <Helmet>
                <title>NEET Coaching Institute in Akudi Pune Call On +91 9404282283</title>
                <meta name="description" content="Join A Square's NEET Classes in Akudi Pune For Top-Notch Coaching. Our Experienced Faculty And Focused Approach Help Students Excel in Medical Entrance Exams." />
                <meta name="keywords" content="Neet classes in Akudi Pune  , Best neet classes in Akudi Pune , NEET classes in Akudi Pune , ASquare Classes, NEET coaching, NEET preparation, medical entrance, expert faculty, Akudi Pune  coaching institute, NEET success, NEET coaching institute in Akudi Pune , Neet coaching institute in Akudi Pune , Best neet coaching institute in Akudi Pune , NEET coaching centre near me, Coaching classes for NEET, Best neet coaching centre near me, Best NEET Classes in Akudi Pune , Coaching classes for NEET, NEET Coaching Classes in Akudi Pune , Best NEET Coaching Classes in Akudi Pune  , NEET Coaching Institute in Akudi Pune , Best NEET Coaching Institute in Akudi Pune , Best NEET Coaching Center in Akudi Pune , Best Coaching Classes for Neet In Akudi Pune , Best Coaching Center for NEET in Akudi Pune , NEET Exam Prepration Coaching Center in Akudi Pune , top NEET coaching classes in Akudi Pune , top NEET coaching institute in Akudi Pune" />
                <link rel="canonical" href="https://www.asquareclasses.com/neet-coaching-classes-institute-in-akudi-pune" />
              </Helmet>
            ) : currentURL === '/neet-coaching-classes-institute-in-nigdi-pune' ? (
              <Helmet>
                <title>NEET Coaching Institute in Nigdi Pune Call On +91 9404282283</title>
                <meta name="description" content="Join A Square's NEET Classes in Nigdi Pune For Top-Notch Coaching. Our Experienced Faculty And Focused Approach Help Students Excel in Medical Entrance Exams." />
                <meta name="keywords" content="Neet classes in Nigdi Pune  , Best neet classes in Nigdi Pune , NEET classes in Nigdi Pune , ASquare Classes, NEET coaching, NEET preparation, medical entrance, expert faculty, Nigdi Pune  coaching institute, NEET success, NEET coaching institute in Nigdi Pune , Neet coaching institute in Nigdi Pune , Best neet coaching institute in Nigdi Pune , NEET coaching centre near me, Coaching classes for NEET, Best neet coaching centre near me, Best NEET Classes in Nigdi Pune , Coaching classes for NEET, NEET Coaching Classes in Nigdi Pune , Best NEET Coaching Classes in Nigdi Pune  , NEET Coaching Institute in Nigdi Pune , Best NEET Coaching Institute in Nigdi Pune , Best NEET Coaching Center in Nigdi Pune , Best Coaching Classes for Neet In Nigdi Pune , Best Coaching Center for NEET in Nigdi Pune , NEET Exam Prepration Coaching Center in Nigdi Pune , top NEET coaching classes in Nigdi Pune , top NEET coaching institute in Nigdi Pune" />
                <link rel="canonical" href="https://www.asquareclasses.com/neet-coaching-classes-institute-in-nigdi-pune" />
              </Helmet>
            ) : currentURL === '/neet-coaching-classes-institute-in-bhosari-pune' ? (
              <Helmet>
                <title>NEET Coaching Institute in Bhosari Pune Call +91 9404282283</title>
                <meta name="description" content="Join A Square's NEET Classes in Bhosari Pune For Top-Notch Coaching. Our Experienced Faculty And Focused Approach Help Students Excel in Medical Entrance Exams." />
                <meta name="keywords" content="Neet classes in Bhosari Pune  , Best neet classes in Bhosari Pune , NEET classes in Bhosari Pune , ASquare Classes, NEET coaching, NEET preparation, medical entrance, expert faculty, Bhosari Pune  coaching institute, NEET success, NEET coaching institute in Bhosari Pune , Neet coaching institute in Bhosari Pune , Best neet coaching institute in Bhosari Pune , NEET coaching centre near me, Coaching classes for NEET, Best neet coaching centre near me, Best NEET Classes in Bhosari Pune , Coaching classes for NEET, NEET Coaching Classes in Bhosari Pune , Best NEET Coaching Classes in Bhosari Pune  , NEET Coaching Institute in Bhosari Pune , Best NEET Coaching Institute in Bhosari Pune , Best NEET Coaching Center in Bhosari Pune , Best Coaching Classes for Neet In Bhosari Pune , Best Coaching Center for NEET in Bhosari Pune , NEET Exam Prepration Coaching Center in Bhosari Pune , top NEET coaching classes in Bhosari Pune , top NEET coaching institute in Bhosari Pune" />
                <link rel="canonical" href="https://www.asquareclasses.com/neet-coaching-classes-institute-in-bhosari-pune" />
              </Helmet>
            ) : currentURL === '/neet-coaching-classes-institute-in-moshi-pune' ? (
              <Helmet>
                <title>NEET Coaching Institute in Moshi Pune Call +91 9404282283</title>
                <meta name="description" content="Join A Square's NEET Classes in Moshi Pune For Top-Notch Coaching. Our Experienced Faculty And Focused Approach Help Students Excel in Medical Entrance Exams." />
                <meta name="keywords" content="Neet classes in Moshi Pune  , Best neet classes in Moshi Pune , NEET classes in Moshi Pune , ASquare Classes, NEET coaching, NEET preparation, medical entrance, expert faculty, Moshi Pune  coaching institute, NEET success, NEET coaching institute in Moshi Pune , Neet coaching institute in Moshi Pune , Best neet coaching institute in Moshi Pune , NEET coaching centre near me, Coaching classes for NEET, Best neet coaching centre near me, Best NEET Classes in Moshi Pune , Coaching classes for NEET, NEET Coaching Classes in Moshi Pune , Best NEET Coaching Classes in Moshi Pune  , NEET Coaching Institute in Moshi Pune , Best NEET Coaching Institute in Moshi Pune , Best NEET Coaching Center in Moshi Pune , Best Coaching Classes for Neet In Moshi Pune , Best Coaching Center for NEET in Moshi Pune , NEET Exam Prepration Coaching Center in Moshi Pune , top NEET coaching classes in Moshi Pune , top NEET coaching institute in Moshi Pune" />
                <link rel="canonical" href="https://www.asquareclasses.com/neet-coaching-classes-institute-in-moshi-pune" />
              </Helmet>
            ) : currentURL === '/neet-coaching-classes-institute-in-chakan-pune' ? (
              <Helmet>
                <title>NEET Coaching Institute in Chakan Pune Call On+91 9404282283</title>
                <meta name="description" content="Join A Square's NEET Classes in Chakan Pune For Top-Notch Coaching. Our Experienced Faculty And Focused Approach Help Students Excel in Medical Entrance Exams." />
                <meta name="keywords" content="Neet classes in Chakan Pune  , Best neet classes in Chakan Pune , NEET classes in Chakan Pune , ASquare Classes, NEET coaching, NEET preparation, medical entrance, expert faculty, Chakan Pune  coaching institute, NEET success, NEET coaching institute in Chakan Pune , Neet coaching institute in Chakan Pune , Best neet coaching institute in Chakan Pune , NEET coaching centre near me, Coaching classes for NEET, Best neet coaching centre near me, Best NEET Classes in Chakan Pune , Coaching classes for NEET, NEET Coaching Classes in Chakan Pune , Best NEET Coaching Classes in Chakan Pune  , NEET Coaching Institute in Chakan Pune , Best NEET Coaching Institute in Chakan Pune , Best NEET Coaching Center in Chakan Pune , Best Coaching Classes for Neet In Chakan Pune , Best Coaching Center for NEET in Chakan Pune , NEET Exam Prepration Coaching Center in Chakan Pune , top NEET coaching classes in Chakan Pune , top NEET coaching institute in Chakan Pune" />
                <link rel="canonical" href="https://www.asquareclasses.com/neet-coaching-classes-institute-in-chakan-pune" />
              </Helmet>
            ) : currentURL === '/neet-coaching-classes-institute-in-kasarwadi-pune' ? (
              <Helmet>
                <title>NEET Coaching Institute in Kasarwadi Pune Call+91 9404282283</title>
                <meta name="description" content="Join A Square's NEET Classes in Kasarwadi Pune For Top-Notch Coaching. Our Experienced Faculty And Focused Approach Help Students Excel in Medical Entrance Exams." />
                <meta name="keywords" content="Neet classes in Kasarwadi Pune  , Best neet classes in Kasarwadi Pune , NEET classes in Kasarwadi Pune , ASquare Classes, NEET coaching, NEET preparation, medical entrance, expert faculty, Kasarwadi Pune  coaching institute, NEET success, NEET coaching institute in Kasarwadi Pune , Neet coaching institute in Kasarwadi Pune , Best neet coaching institute in Kasarwadi Pune , NEET coaching centre near me, Coaching classes for NEET, Best neet coaching centre near me, Best NEET Classes in Kasarwadi Pune , Coaching classes for NEET, NEET Coaching Classes in Kasarwadi Pune , Best NEET Coaching Classes in Kasarwadi Pune  , NEET Coaching Institute in Kasarwadi Pune , Best NEET Coaching Institute in Kasarwadi Pune , Best NEET Coaching Center in Kasarwadi Pune , Best Coaching Classes for Neet In Kasarwadi Pune , Best Coaching Center for NEET in Kasarwadi Pune , NEET Exam Prepration Coaching Center in Kasarwadi Pune , top NEET coaching classes in Kasarwadi Pune , top NEET coaching institute in Kasarwadi Pune" />
                <link rel="canonical" href="https://www.asquareclasses.com/neet-coaching-classes-institute-in-kasarwadi-pune" />
              </Helmet>
            ) : currentURL === '/neet-coaching-classes-institute-in-dapodi-pune' ? (
              <Helmet>
                <title>NEET Coaching Institute in Dapodi Pune | Asquare Classes</title>
                <meta name="description" content="Join A Square's NEET Classes in Dapodi Pune For Top-Notch Coaching. Our Experienced Faculty And Focused Approach Help Students Excel in Medical Entrance Exams." />
                <meta name="keywords" content="Neet classes in Dapodi Pune  , Best neet classes in Dapodi Pune , NEET classes in Dapodi Pune , ASquare Classes, NEET coaching, NEET preparation, medical entrance, expert faculty, Dapodi Pune  coaching institute, NEET success, NEET coaching institute in Dapodi Pune , Neet coaching institute in Dapodi Pune , Best neet coaching institute in Dapodi Pune , NEET coaching centre near me, Coaching classes for NEET, Best neet coaching centre near me, Best NEET Classes in Dapodi Pune , Coaching classes for NEET, NEET Coaching Classes in Dapodi Pune , Best NEET Coaching Classes in Dapodi Pune  , NEET Coaching Institute in Dapodi Pune , Best NEET Coaching Institute in Dapodi Pune , Best NEET Coaching Center in Dapodi Pune , Best Coaching Classes for Neet In Dapodi Pune , Best Coaching Center for NEET in Dapodi Pune , NEET Exam Prepration Coaching Center in Dapodi Pune , top NEET coaching classes in Dapodi Pune , top NEET coaching institute in Dapodi Pune" />
                <link rel="canonical" href="https://www.asquareclasses.com/neet-coaching-classes-institute-in-dapodi-pune" />
              </Helmet>
            ) : currentURL === '/neet-coaching-classes-institute-in-ravet-pune' ? (
              <Helmet>
                <title>NEET Coaching Institute in Ravet | NEET Doubt Clearing Sessions</title>
                <meta name="description" content="Join A Square's NEET Classes in Ravet Pune For Top-Notch Coaching. Our Experienced Faculty And Focused Approach Help Students Excel in Medical Entrance Exams." />
                <meta name="keywords" content="Neet classes in Ravet Pune  , Best neet classes in Ravet Pune , NEET classes in Ravet Pune , ASquare Classes, NEET coaching, NEET preparation, medical entrance, expert faculty, Ravet Pune  coaching institute, NEET success, NEET coaching institute in Ravet Pune , Neet coaching institute in Ravet Pune , Best neet coaching institute in Ravet Pune , NEET coaching centre near me, Coaching classes for NEET, Best neet coaching centre near me, Best NEET Classes in Ravet Pune , Coaching classes for NEET, NEET Coaching Classes in Ravet Pune , Best NEET Coaching Classes in Ravet Pune  , NEET Coaching Institute in Ravet Pune , Best NEET Coaching Institute in Ravet Pune , Best NEET Coaching Center in Ravet Pune , Best Coaching Classes for Neet In Ravet Pune , Best Coaching Center for NEET in Ravet Pune , NEET Exam Prepration Coaching Center in Ravet Pune , top NEET coaching classes in Ravet Pune , top NEET coaching institute in Ravet Pune" />
                <link rel="canonical" href="https://www.asquareclasses.com/neet-coaching-classes-institute-in-ravet-pune" />
              </Helmet>
            ) : currentURL === '/neet-coaching-classes-institute-in-kalewadi-pune' ? (
              <Helmet>
                <title>NEET Coaching Institute in Kalewadi Pune | Asquare Classes</title>
                <meta name="description" content="Join A Square's NEET Classes in Kalewadi Pune For Top-Notch Coaching. Our Experienced Faculty And Focused Approach Help Students Excel in Medical Entrance Exams." />
                <meta name="keywords" content="Neet classes in Kalewadi Pune  , Best neet classes in Kalewadi Pune , NEET classes in Kalewadi Pune , ASquare Classes, NEET coaching, NEET preparation, medical entrance, expert faculty, Kalewadi Pune  coaching institute, NEET success, NEET coaching institute in Kalewadi Pune , Neet coaching institute in Kalewadi Pune , Best neet coaching institute in Kalewadi Pune , NEET coaching centre near me, Coaching classes for NEET, Best neet coaching centre near me, Best NEET Classes in Kalewadi Pune , Coaching classes for NEET, NEET Coaching Classes in Kalewadi Pune , Best NEET Coaching Classes in Kalewadi Pune  , NEET Coaching Institute in Kalewadi Pune , Best NEET Coaching Institute in Kalewadi Pune , Best NEET Coaching Center in Kalewadi Pune , Best Coaching Classes for Neet In Kalewadi Pune , Best Coaching Center for NEET in Kalewadi Pune , NEET Exam Prepration Coaching Center in Kalewadi Pune , top NEET coaching classes in Kalewadi Pune , top NEET coaching institute in Kalewadi Pune" />
                <link rel="canonical" href="https://www.asquareclasses.com/neet-coaching-classes-institute-in-kalewadi-pune" />
              </Helmet>
            ) : currentURL === '/neet-coaching-classes-institute-in-wakad-pune' ? (
              <Helmet>
                <title>NEET Coaching Institute in Wakad Pune Call on +91 9404282283</title>
                <meta name="description" content="Join A Square's NEET Classes in Wakad Pune For Top-Notch Coaching. Our Experienced Faculty And Focused Approach Help Students Excel in Medical Entrance Exams." />
                <meta name="keywords" content="Neet classes in Wakad Pune  , Best neet classes in Wakad Pune , NEET classes in Wakad Pune , ASquare Classes, NEET coaching, NEET preparation, medical entrance, expert faculty, Wakad Pune  coaching institute, NEET success, NEET coaching institute in Wakad Pune , Neet coaching institute in Wakad Pune , Best neet coaching institute in Wakad Pune , NEET coaching centre near me, Coaching classes for NEET, Best neet coaching centre near me, Best NEET Classes in Wakad Pune , Coaching classes for NEET, NEET Coaching Classes in Wakad Pune , Best NEET Coaching Classes in Wakad Pune  , NEET Coaching Institute in Wakad Pune , Best NEET Coaching Institute in Wakad Pune , Best NEET Coaching Center in Wakad Pune , Best Coaching Classes for Neet In Wakad Pune , Best Coaching Center for NEET in Wakad Pune , NEET Exam Prepration Coaching Center in Wakad Pune , top NEET coaching classes in Wakad Pune , top NEET coaching institute in Wakad Pune" />
                <link rel="canonical" href="https://www.asquareclasses.com/neet-coaching-classes-institute-in-wakad-pune" />
              </Helmet>
            ) : currentURL === '/neet-coaching-classes-institute-in-aundh-pune' ? (
              <Helmet>
                <title>NEET Coaching Institute in Aundh Pune Call on+91 9404282283</title>
                <meta name="description" content="Join A Square's NEET Classes in Aundh Pune For Top-Notch Coaching. Our Experienced Faculty And Focused Approach Help Students Excel in Medical Entrance Exams." />
                <meta name="keywords" content="Neet classes in Aundh Pune  , Best neet classes in Aundh Pune , NEET classes in Aundh Pune , ASquare Classes, NEET coaching, NEET preparation, medical entrance, expert faculty, Aundh Pune  coaching institute, NEET success, NEET coaching institute in Aundh Pune , Neet coaching institute in Aundh Pune , Best neet coaching institute in Aundh Pune , NEET coaching centre near me, Coaching classes for NEET, Best neet coaching centre near me, Best NEET Classes in Aundh Pune , Coaching classes for NEET, NEET Coaching Classes in Aundh Pune , Best NEET Coaching Classes in Aundh Pune  , NEET Coaching Institute in Aundh Pune , Best NEET Coaching Institute in Aundh Pune , Best NEET Coaching Center in Aundh Pune , Best Coaching Classes for Neet In Aundh Pune , Best Coaching Center for NEET in Aundh Pune , NEET Exam Prepration Coaching Center in Aundh Pune , top NEET coaching classes in Aundh Pune , top NEET coaching institute in Aundh Pune" />
                <link rel="canonical" href="https://www.asquareclasses.com/neet-coaching-classes-institute-in-aundh-pune" />
              </Helmet>
            ) : currentURL === '/neet-coaching-classes-institute-in-baner-pune' ? (
              <Helmet>
                <title>NEET Coaching Institute in Baner Pune Call on+91 9404282283</title>
                <meta name="description" content="Join A Square's NEET Classes in Baner Pune For Top-Notch Coaching. Our Experienced Faculty And Focused Approach Help Students Excel in Medical Entrance Exams." />
                <meta name="keywords" content="Neet classes in Baner Pune  , Best neet classes in Baner Pune , NEET classes in Baner Pune , ASquare Classes, NEET coaching, NEET preparation, medical entrance, expert faculty, Baner Pune  coaching institute, NEET success, NEET coaching institute in Baner Pune , Neet coaching institute in Baner Pune , Best neet coaching institute in Baner Pune , NEET coaching centre near me, Coaching classes for NEET, Best neet coaching centre near me, Best NEET Classes in Baner Pune , Coaching classes for NEET, NEET Coaching Classes in Baner Pune , Best NEET Coaching Classes in Baner Pune  , NEET Coaching Institute in Baner Pune , Best NEET Coaching Institute in Baner Pune , Best NEET Coaching Center in Baner Pune , Best Coaching Classes for Neet In Baner Pune , Best Coaching Center for NEET in Baner Pune , NEET Exam Prepration Coaching Center in Baner Pune , top NEET coaching classes in Baner Pune , top NEET coaching institute in Baner Pune" />
                <link rel="canonical" href="https://www.asquareclasses.com/neet-coaching-classes-institute-in-baner-pune" />
              </Helmet>
            ) : currentURL === '/neet-coaching-classes-institute-in-hinjewadi-pune' ? (
              <Helmet>
                <title>NEET Coaching Institute in Hinjewadi Pune Call+91 9404282283</title>
                <meta name="description" content="Join A Square's NEET Classes in Hinjewadi Pune For Top-Notch Coaching. Our Experienced Faculty And Focused Approach Help Students Excel in Medical Entrance Exams." />
                <meta name="keywords" content="Neet classes in Hinjewadi Pune  , Best neet classes in Hinjewadi Pune , NEET classes in Hinjewadi Pune , ASquare Classes, NEET coaching, NEET preparation, medical entrance, expert faculty, Hinjewadi Pune  coaching institute, NEET success, NEET coaching institute in Hinjewadi Pune , Neet coaching institute in Hinjewadi Pune , Best neet coaching institute in Hinjewadi Pune , NEET coaching centre near me, Coaching classes for NEET, Best neet coaching centre near me, Best NEET Classes in Hinjewadi Pune , Coaching classes for NEET, NEET Coaching Classes in Hinjewadi Pune , Best NEET Coaching Classes in Hinjewadi Pune  , NEET Coaching Institute in Hinjewadi Pune , Best NEET Coaching Institute in Hinjewadi Pune , Best NEET Coaching Center in Hinjewadi Pune , Best Coaching Classes for Neet In Hinjewadi Pune , Best Coaching Center for NEET in Hinjewadi Pune , NEET Exam Prepration Coaching Center in Hinjewadi Pune , top NEET coaching classes in Hinjewadi Pune , top NEET coaching institute in Hinjewadi Pune" />
                <link rel="canonical" href="https://www.asquareclasses.com/neet-coaching-classes-institute-in-hinjewadi-pune" />
              </Helmet>
            ) : currentURL === '/neet-coaching-classes-institute-in-pimple-saudagar-pune' ? (
              <Helmet>
                <title>NEET Coaching Institute in Pimple Saudagar | Asquare Classes</title>
                <meta name="description" content="Join A Square's NEET Classes in Pimple Saudagar Pune For Top-Notch Coaching. Our Experienced Faculty And Focused Approach Help Students Excel in Medical Entrance Exams." />
                <meta name="keywords" content="Neet classes in Pimple Saudagar Pune  , Best neet classes in Pimple Saudagar Pune , NEET classes in Pimple Saudagar Pune , ASquare Classes, NEET coaching, NEET preparation, medical entrance, expert faculty, Pimple Saudagar Pune  coaching institute, NEET success, NEET coaching institute in Pimple Saudagar Pune , Neet coaching institute in Pimple Saudagar Pune , Best neet coaching institute in Pimple Saudagar Pune , NEET coaching centre near me, Coaching classes for NEET, Best neet coaching centre near me, Best NEET Classes in Pimple Saudagar Pune , Coaching classes for NEET, NEET Coaching Classes in Pimple Saudagar Pune , Best NEET Coaching Classes in Pimple Saudagar Pune  , NEET Coaching Institute in Pimple Saudagar Pune , Best NEET Coaching Institute in Pimple Saudagar Pune , Best NEET Coaching Center in Pimple Saudagar Pune , Best Coaching Classes for Neet In Pimple Saudagar Pune , Best Coaching Center for NEET in Pimple Saudagar Pune , NEET Exam Prepration Coaching Center in Pimple Saudagar Pune , top NEET coaching classes in Pimple Saudagar Pune , top NEET coaching institute in Pimple Saudagar Pune" />
                <link rel="canonical" href="https://www.asquareclasses.com/neet-coaching-classes-institute-in-pimple-saudagar-pune" />
              </Helmet>
            ) : currentURL === '/neet-coaching-classes-institute-in-pimple-gurav-pune' ? (
              <Helmet>
                <title>NEET Coaching Institute in Pimple Gurav Pune | Asquare Classes</title>
                <meta name="description" content="Join A Square's NEET Classes in Pimple Gurav Pune For Top-Notch Coaching. Our Experienced Faculty And Focused Approach Help Students Excel in Medical Entrance Exams." />
                <meta name="keywords" content="Neet classes in Pimple Gurav Pune  , Best neet classes in Pimple Gurav Pune , NEET classes in Pimple Gurav Pune , ASquare Classes, NEET coaching, NEET preparation, medical entrance, expert faculty, Pimple Gurav Pune  coaching institute, NEET success, NEET coaching institute in Pimple Gurav Pune , Neet coaching institute in Pimple Gurav Pune , Best neet coaching institute in Pimple Gurav Pune , NEET coaching centre near me, Coaching classes for NEET, Best neet coaching centre near me, Best NEET Classes in Pimple Gurav Pune , Coaching classes for NEET, NEET Coaching Classes in Pimple Gurav Pune , Best NEET Coaching Classes in Pimple Gurav Pune  , NEET Coaching Institute in Pimple Gurav Pune , Best NEET Coaching Institute in Pimple Gurav Pune , Best NEET Coaching Center in Pimple Gurav Pune , Best Coaching Classes for Neet In Pimple Gurav Pune , Best Coaching Center for NEET in Pimple Gurav Pune , NEET Exam Prepration Coaching Center in Pimple Gurav Pune , top NEET coaching classes in Pimple Gurav Pune , top NEET coaching institute in Pimple Gurav Pune" />
                <link rel="canonical" href="https://www.asquareclasses.com/neet-coaching-classes-institute-in-pimple-gurav-pune" />
              </Helmet>
            ) : currentURL === '/neet-coaching-classes-institute-in-pimple-nilakh-pune' ? (
              <Helmet>
                <title>NEET Coaching Institute in Pimple Nilakh Pune | Asquare Classes</title>
                <meta name="description" content="Join A Square's NEET Classes in Pimple Nilakh Pune For Top-Notch Coaching. Our Experienced Faculty And Focused Approach Help Students Excel in Medical Entrance Exams." />
                <meta name="keywords" content="Neet classes in Pimple Nilakh Pune  , Best neet classes in Pimple Nilakh Pune , NEET classes in Pimple Nilakh Pune , ASquare Classes, NEET coaching, NEET preparation, medical entrance, expert faculty, Pimple Nilakh Pune  coaching institute, NEET success, NEET coaching institute in Pimple Nilakh Pune , Neet coaching institute in Pimple Nilakh Pune , Best neet coaching institute in Pimple Nilakh Pune , NEET coaching centre near me, Coaching classes for NEET, Best neet coaching centre near me, Best NEET Classes in Pimple Nilakh Pune , Coaching classes for NEET, NEET Coaching Classes in Pimple Nilakh Pune , Best NEET Coaching Classes in Pimple Nilakh Pune  , NEET Coaching Institute in Pimple Nilakh Pune , Best NEET Coaching Institute in Pimple Nilakh Pune , Best NEET Coaching Center in Pimple Nilakh Pune , Best Coaching Classes for Neet In Pimple Nilakh Pune , Best Coaching Center for NEET in Pimple Nilakh Pune , NEET Exam Prepration Coaching Center in Pimple Nilakh Pune , top NEET coaching classes in Pimple Nilakh Pune , top NEET coaching institute in Pimple Nilakh Pune" />
                <link rel="canonical" href="https://www.asquareclasses.com/neet-coaching-classes-institute-in-pimple-nilakh-pune" />
              </Helmet>
        ) : (
          <Helmet>
            <title>NEET Coaching Classes For 11th in Pune | A Square Classes</title>
            <meta name="description" content="Join A Square Classes For Specialized NEET Coaching For 11th-grade Students in Pune. Get Expert Guidance And Personalized Support To Excel In Your NEET Exams!" />
            <meta name="keywords" content="NEET coaching classes Pune, NEET classes for 11th, best NEET prep Pune, 11th-grade NEET coaching, A Square Classes, NEET training Pune, medical entrance coaching, NEET preparation courses" />
            <link rel="canonical" href="https://www.asquareclasses.com/iit-jee-neet-coaching-classes-institute-for-11th-in-pune/" />
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
