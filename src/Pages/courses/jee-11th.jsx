import React, { Suspense } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Header from '../../Components/Header/Header';
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
    {currentURL === '/iit-jee-coaching-classes-institute-in-vishrantwadi-pune' ? (

    <Helmet>
         <title>IIT JEE Coaching Classes Institute in Vishrantwadi | Asquare</title>
         <meta name="description" content="Prepare For IIT JEE With Top Coaching Classes at ASquare in Vishrantwadi. Our Expert Faculty And Proven Methods Help Students Achieve Top Ranks And Success. Call On +91 9404282283" />
         <meta name="keywords" content="IIT JEE coaching Vishrantwadi Pune, best IIT classes Vishrantwadi Pune, JEE preparation Pune, top JEE coaching Vishrantwadi Pune, IIT JEE tutors Vishrantwadi Pune, engineering entrance coaching Vishrantwadi Pune, IIT JEE training Vishrantwadi Pune, JEE mains and advanced coaching Vishrantwadi Pune, IIT JEE coaching Vishrantwadi Pune near me, IIT JEE coaching classes, Vishrantwadi, Pune, A Square Classes, IIT JEE preparation, JEE institute, JEE coaching, competitive exams, expert faculty" />
      <link rel="canonical" href="https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-vishrantwadi-pune" />
    </Helmet>
      ) : currentURL === '/iit-jee-coaching-classes-institute-in-yerwada-pune' ? (
    <Helmet>
        <title>IIT JEE Coaching Classes Institute in Yerwada | Asquare Classes</title>
        <meta name="description" content="Prepare For IIT JEE With Top Coaching Classes at ASquare in Yerwada. Our Expert Faculty And Proven Methods Help Students Achieve Top Ranks And Success. Call On +91 9404282283" />
        <meta name="keywords" content="IIT JEE coaching Yerwada Pune, JEE coaching for 11th in Yerwada Pune, best IIT classes Yerwada Pune, JEE preparation Pune, 11th IIT coaching Yerwada Pune, top JEE coaching Yerwada Pune, IIT JEE tutors Yerwada Pune, engineering entrance coaching Yerwada Pune, IIT JEE training Yerwada Pune, JEE mains and advanced coaching Yerwada Pune, IIT JEE coaching Yerwada Pune near me, IIT JEE coaching classes, Yerwada, Pune, A Square Classes, IIT JEE preparation, JEE institute, JEE coaching, competitive exams, expert faculty" />
      <link rel="canonical" href="https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-yerwada-pune" />
    </Helmet>
      ) : currentURL === '/iit-jee-coaching-classes-institute-in-dhanori-pune' ? (
    <Helmet>
        <title>IIT JEE Coaching Classes Institute in Dhanori Pune | Asquare</title>
        <meta name="description" content="Prepare For IIT JEE With Top Coaching Classes at ASquare in  Dhanori. Our Expert Faculty And Proven Methods Help Students Achieve Top Ranks And Success. Call On +91 9404282283" />
        <meta name="keywords" content="IIT JEE coaching Dhanori Pune, JEE coaching for 11th in Dhanori Pune, best IIT classes Dhanori Pune, JEE preparation Pune, 11th IIT coaching Dhanori Pune, top JEE coaching Dhanori Pune, IIT JEE tutors Dhanori Pune, engineering entrance coaching Dhanori Pune, IIT JEE training Dhanori Pune, JEE mains and advanced coaching Dhanori Pune, IIT JEE coaching Dhanori Pune near me, IIT JEE coaching classes, Dhanori, Pune, A Square Classes, IIT JEE preparation, JEE institute, JEE coaching, competitive exams, expert faculty" />
      <link rel="canonical" href="https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-dhanori-pune" />
    </Helmet>
      ) : currentURL === '/iit-jee-coaching-classes-institute-in-lohegaon-pune' ? (
    <Helmet>
        <title>IIT JEE Coaching Classes Institute in Lohegaon Pune | Asquare</title>
        <meta name="description" content="Prepare For IIT JEE With Top Coaching Classes at ASquare in Lohegaon. Our Expert Faculty And Proven Methods Help Students Achieve Top Ranks And Success. Call On +91 9404282283" />
        <meta name="keywords" content="IIT JEE coaching Lohegaon Pune, JEE coaching for 11th in Lohegaon Pune, best IIT classes Lohegaon Pune, JEE preparation Pune, 11th IIT coaching Lohegaon Pune, top JEE coaching Lohegaon Pune, IIT JEE tutors Lohegaon Pune, engineering entrance coaching Lohegaon Pune, IIT JEE training Lohegaon Pune, JEE mains and advanced coaching Lohegaon Pune, IIT JEE coaching Lohegaon Pune near me, IIT JEE coaching classes, Lohegaon, Pune, A Square Classes, IIT JEE preparation, JEE institute, JEE coaching, competitive exams, expert faculty" />
      <link rel="canonical" href="https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-lohegaon-pune" />
    </Helmet>
      )  : currentURL === '/iit-jee-coaching-classes-institute-in-dighi-pune' ? (
    <Helmet>
        <title>IIT JEE Coaching Classes Institute in Dighi Pune | Asquare</title>
        <meta name="description" content="Prepare For IIT JEE With Top Coaching Classes at ASquare in Dighi. Our Expert Faculty And Proven Methods Help Students Achieve Top Ranks And Success. Call On +91 9404282283" />
        <meta name="keywords" content="IIT JEE coaching Dighi Pune, JEE coaching for 11th in Dighi Pune, best IIT classes Dighi Pune, JEE preparation Pune, 11th IIT coaching Dighi Pune, top JEE coaching Dighi Pune, IIT JEE tutors Dighi Pune, engineering entrance coaching Dighi Pune, IIT JEE training Dighi Pune, JEE mains and advanced coaching Dighi Pune, IIT JEE coaching Dighi Pune near me, IIT JEE coaching classes, Dighi, Pune, A Square Classes, IIT JEE preparation, JEE institute, JEE coaching, competitive exams, expert faculty" />
      <link rel="canonical" href="https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-dighi-pune" />
    </Helmet>
      ) : currentURL === '/iit-jee-coaching-classes-institute-in-alandi-pune' ? (
    <Helmet>
        <title>IIT JEE Coaching Classes Institute in Alandi Pune | Asquare</title>
        <meta name="description" content="Prepare For IIT JEE With Top Coaching Classes at ASquare in Alandi. Our Expert Faculty And Proven Methods Help Students Achieve Top Ranks And Success. Call On +91 9404282283" />
        <meta name="keywords" content="IIT JEE coaching alandi Pune, JEE coaching for 11th in alandi Pune, best IIT classes alandi Pune, JEE preparation Pune, 11th IIT coaching alandi Pune, top JEE coaching alandi Pune, IIT JEE tutors alandi Pune, engineering entrance coaching alandi Pune, IIT JEE training alandi Pune, JEE mains and advanced coaching alandi Pune, IIT JEE coaching alandi Pune near me, IIT JEE coaching classes, Alandi, Pune, A Square Classes, IIT JEE preparation, JEE institute, JEE coaching, competitive exams, expert faculty" />
      <link rel="canonical" href="https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-alandi-pune" />
    </Helmet>
      ) : currentURL === '/iit-jee-coaching-classes-institute-in-khadki-pune' ? (
    <Helmet>
        <title>IIT JEE Coaching Classes Institute in Khadki Pune | Asquare</title>
        <meta name="description" content="Prepare For IIT JEE With Top Coaching Classes at ASquare in Khadki. Our Expert Faculty And Proven Methods Help Students Achieve Top Ranks And Success. Call On +91 9404282283" />
        <meta name="keywords" content="IIT JEE coaching khadki Pune, JEE coaching for 11th in khadki Pune, best IIT classes khadki Pune, JEE preparation Pune, 11th IIT coaching khadki Pune, top JEE coaching khadki Pune, IIT JEE tutors khadki Pune, engineering entrance coaching khadki Pune, IIT JEE training khadki Pune, JEE mains and advanced coaching khadki Pune, IIT JEE coaching khadki Pune near me, IIT JEE coaching classes, Khadki, Pune, A Square Classes, IIT JEE preparation, JEE institute, JEE coaching, competitive exams, expert faculty" />
      <link rel="canonical" href="https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-khadki-pune" />
    </Helmet>
      ) : currentURL === '/iit-jee-coaching-classes-institute-in-tingre-nagar-pune' ? (
    <Helmet>
        <title>IIT JEE Coaching Classes Institute in Tingre Nagar Pune</title>
        <meta name="description" content="Prepare For IIT JEE With Top Coaching Classes at ASquare in Tingre Nagar. Our Expert Faculty And Proven Methods Help Students Achieve Top Ranks And Success. Call On +91 9404282283" />
        <meta name="keywords" content="IIT JEE coaching Tingre Nagar Pune, JEE coaching for 11th in Tingre Nagar Pune, best IIT classes Tingre Nagar Pune, JEE preparation Pune, 11th IIT coaching Tingre Nagar Pune, top JEE coaching Tingre Nagar Pune, IIT JEE tutors Tingre Nagar Pune, engineering entrance coaching Tingre Nagar Pune, IIT JEE training Tingre Nagar Pune, JEE mains and advanced coaching Tingre Nagar Pune, IIT JEE coaching Tingre Nagar Pune near me, IIT JEE coaching classes, Tingre Nagar, Pune, A Square Classes, IIT JEE preparation, JEE institute, JEE coaching, competitive exams, expert faculty" />
      <link rel="canonical" href="https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-tingre-nagar-pune" />
    </Helmet>
      ) : currentURL === '/iit-jee-coaching-classes-institute-in-shastri-nagar-pune' ? (
    <Helmet>
        <title>IIT JEE Coaching Classes Institute in Shastri Nagar Pune</title>
        <meta name="description" content="Prepare For IIT JEE With Top Coaching Classes at ASquare in Shastri Nagar. Our Expert Faculty And Proven Methods Help Students Achieve Top Ranks And Success. Call On +91 9404282283" />
        <meta name="keywords" content="IIT JEE coaching Shastri Nagar Pune, JEE coaching for 11th in Shastri Nagar Pune, best IIT classes Shastri Nagar Pune, JEE preparation Pune, 11th IIT coaching Shastri Nagar Pune, top JEE coaching Shastri Nagar Pune, IIT JEE tutors Shastri Nagar Pune, engineering entrance coaching Shastri Nagar Pune, IIT JEE training Shastri Nagar Pune, JEE mains and advanced coaching Shastri Nagar Pune, IIT JEE coaching Shastri Nagar Pune near me, IIT JEE coaching classes, Shastri Nagar, Pune, A Square Classes, IIT JEE preparation, JEE institute, JEE coaching, competitive exams, expert faculty" />
      <link rel="canonical" href="https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-shastri-nagar-pune" />
    </Helmet>
      ) : currentURL === '/iit-jee-coaching-classes-institute-in-pratik-nagar-pune' ? (
    <Helmet>
        <title>IIT JEE Coaching Classes Institute in Pratik Nagar Pune</title>
        <meta name="description" content="Prepare For IIT JEE With Top Coaching Classes at ASquare in Pratik Nagar. Our Expert Faculty And Proven Methods Help Students Achieve Top Ranks And Success. Call On +91 9404282283" />
        <meta name="keywords" content="IIT JEE coaching Pratik Nagar Pune, JEE coaching for 11th in Pratik Nagar Pune, best IIT classes Pratik Nagar Pune, JEE preparation Pune, 11th IIT coaching Pratik Nagar Pune, top JEE coaching Pratik Nagar Pune, IIT JEE tutors Pratik Nagar Pune, engineering entrance coaching Pratik Nagar Pune, IIT JEE training Pratik Nagar Pune, JEE mains and advanced coaching Pratik Nagar Pune, IIT JEE coaching Pratik Nagar Pune near me, IIT JEE coaching classes, Pratik Nagar, Pune, A Square Classes, IIT JEE preparation, JEE institute, JEE coaching, competitive exams, expert faculty" />
      <link rel="canonical" href="https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-pratik-nagar-pune" />
    </Helmet>
      ) : currentURL === '/iit-jee-coaching-classes-institute-in-viman-nagar-pune' ? (
    <Helmet>
        <title>IIT JEE Coaching Classes Institute in Viman Nagar Pune</title>
        <meta name="description" content="Prepare For IIT JEE With Top Coaching Classes at ASquare in Viman Nagar. Our Expert Faculty And Proven Methods Help Students Achieve Top Ranks And Success. Call On +91 9404282283" />
        <meta name="keywords" content="IIT JEE coaching Viman Nagar Pune, JEE coaching for 11th in Viman Nagar Pune, best IIT classes Viman Nagar Pune, JEE preparation Pune, 11th IIT coaching Viman Nagar Pune, top JEE coaching Viman Nagar Pune, IIT JEE tutors Viman Nagar Pune, engineering entrance coaching Viman Nagar Pune, IIT JEE training Viman Nagar Pune, JEE mains and advanced coaching Viman Nagar Pune, IIT JEE coaching Viman Nagar Pune near me, IIT JEE coaching classes, Viman Nagar, Pune, A Square Classes, IIT JEE preparation, JEE institute, JEE coaching, competitive exams, expert faculty" />
      <link rel="canonical" href="https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-viman-nagar-pune" />
    </Helmet>
      ) : currentURL === '/iit-jee-coaching-classes-institute-in-kalyani-nagar-pune' ? (
    <Helmet>
        <title>IIT JEE Coaching Classes Institute in Kalyani Nagar Pune</title>
        <meta name="description" content="Prepare For IIT JEE With Top Coaching Classes at ASquare in Kalyani Nagar. Our Expert Faculty And Proven Methods Help Students Achieve Top Ranks And Success. Call On +91 9404282283" />
        <meta name="keywords" content="IIT JEE coaching Viman Nagar Pune, JEE coaching for 11th in Viman Nagar Pune, best IIT classes Viman Nagar Pune, JEE preparation Pune, 11th IIT coaching Viman Nagar Pune, top JEE coaching Viman Nagar Pune, IIT JEE tutors Viman Nagar Pune, engineering entrance coaching Viman Nagar Pune, IIT JEE training Viman Nagar Pune, JEE mains and advanced coaching Viman Nagar Pune, IIT JEE coaching Viman Nagar Pune near me, IIT JEE coaching classes, Kalyani Nagar, Pune, A Square Classes, IIT JEE preparation, JEE institute, JEE coaching, competitive exams, expert faculty " />
      <link rel="canonical" href="https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-kalyani-nagar-pune" />
    </Helmet>
      ) : currentURL === '/iit-jee-coaching-classes-institute-in-wagholi-pune' ? (
    <Helmet>
        <title>IIT JEE Coaching Classes Institute in Wagholi Pune | Asquare Classes</title>
        <meta name="description" content="Prepare For IIT JEE With Top Coaching Classes at ASquare in Wagholi. Our Expert Faculty And Proven Methods Help Students Achieve Top Ranks And Success. Call On +91 9404282283" />
        <meta name="keywords" content="IIT JEE coaching Wagholi Pune, JEE coaching for 11th in Wagholi Pune, best IIT classes Wagholi Pune, JEE preparation Pune, 11th IIT coaching Wagholi Pune, top JEE coaching Wagholi Pune, IIT JEE tutors Wagholi Pune, engineering entrance coaching Wagholi Pune, IIT JEE training Wagholi Pune, JEE mains and advanced coaching Wagholi Pune, IIT JEE coaching Wagholi Pune near me, IIT JEE coaching classes, Wagholi, Pune, A Square Classes, IIT JEE preparation, JEE institute, JEE coaching, competitive exams, expert faculty" />
      <link rel="canonical" href="https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-wagholi-pune" />
    </Helmet>
      ) : currentURL === '/iit-jee-coaching-classes-institute-in-pimpri-pune' ? (
    <Helmet>
        <title>IIT JEE Coaching Classes Institute in Khadki Pune | Asquare Classes</title>
        <meta name="description" content="Prepare For IIT JEE With Top Coaching Classes at ASquare in Khadki. Our Expert Faculty And Proven Methods Help Students Achieve Top Ranks And Success. Call On +91 9404282283" />
        <meta name="keywords" content="IIT JEE coaching Khadki Pune, JEE coaching for 11th in Khadki Pune, best IIT classes Khadki Pune, JEE preparation Pune, 11th IIT coaching Khadki Pune, top JEE coaching Khadki Pune, IIT JEE tutors Khadki Pune, engineering entrance coaching Khadki Pune, IIT JEE training Khadki Pune, JEE mains and advanced coaching Khadki Pune, IIT JEE coaching Khadki Pune near me, IIT JEE coaching classes, Khadki, Pune, A Square Classes, IIT JEE preparation, JEE institute, JEE coaching, competitive exams, expert faculty" />
      <link rel="canonical" href="https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-pimpri-pune" />
    </Helmet>
      ) : currentURL === '/iit-jee-coaching-classes-institute-in-chinchwad-pune' ? (
    <Helmet>
        <title>IIT JEE Coaching Classes Institute in Pimpri Pune | Asquare Classes</title>
        <meta name="description" content="Prepare For IIT JEE With Top Coaching Classes at ASquare in Pimpri. Our Expert Faculty And Proven Methods Help Students Achieve Top Ranks And Success. Call On +91 9404282283" />
        <meta name="keywords" content="IIT JEE coaching Pimpri Pune, JEE coaching for 11th in Pimpri Pune, best IIT classes Pimpri Pune, JEE preparation Pune, 11th IIT coaching Pimpri Pune, top JEE coaching Pimpri Pune, IIT JEE tutors Pimpri Pune, engineering entrance coaching Pimpri Pune, IIT JEE training Pimpri Pune, JEE mains and advanced coaching Pimpri Pune, IIT JEE coaching Pimpri Pune near me, IIT JEE coaching classes, Pimpri, Pune, A Square Classes, IIT JEE preparation, JEE institute, JEE coaching, competitive exams, expert faculty" />
      <link rel="canonical" href="https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-chinchwad-pune" />
    </Helmet>
      ) : currentURL === '/iit-jee-coaching-classes-institute-in-pcmc-pune' ? (
    <Helmet>
        <title>IIT JEE Coaching Classes Institute in Chinchwad Pune | Asquare Classes</title>
        <meta name="description" content="Prepare For IIT JEE With Top Coaching Classes at ASquare in Chinchwad. Our Expert Faculty And Proven Methods Help Students Achieve Top Ranks And Success. Call On +91 9404282283" />
        <meta name="keywords" content="IIT JEE coaching Chinchwad Pune, JEE coaching for 11th in Chinchwad Pune, best IIT classes Chinchwad Pune, JEE preparation Pune, 11th IIT coaching Chinchwad Pune, top JEE coaching Chinchwad Pune, IIT JEE tutors Chinchwad Pune, engineering entrance coaching Chinchwad Pune, IIT JEE training Chinchwad Pune, JEE mains and advanced coaching Chinchwad Pune, IIT JEE coaching Chinchwad Pune near me, IIT JEE coaching classes, Chinchwad, Pune, A Square Classes, IIT JEE preparation, JEE institute, JEE coaching, competitive exams, expert faculty" />
      <link rel="canonical" href="https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-pcmc-pune" />
    </Helmet>
      ) : currentURL === '/iit-jee-coaching-classes-institute-in-akudi-pune' ? (
    <Helmet>
        <title>IIT JEE Coaching Classes Institute in PCMC Pune | Asquare Classes</title>
        <meta name="description" content="Prepare For IIT JEE With Top Coaching Classes at ASquare in PCMC. Our Expert Faculty And Proven Methods Help Students Achieve Top Ranks And Success. Call On +91 9404282283" />
        <meta name="keywords" content="IIT JEE coaching PCMC Pune, JEE coaching for 11th in PCMC Pune, best IIT classes PCMC Pune, JEE preparation Pune, 11th IIT coaching PCMC Pune, top JEE coaching PCMC Pune, IIT JEE tutors PCMC Pune, engineering entrance coaching PCMC Pune, IIT JEE training PCMC Pune, JEE mains and advanced coaching PCMC Pune, IIT JEE coaching PCMC Pune near me, IIT JEE coaching classes, PCMC, Pune, A Square Classes, IIT JEE preparation, JEE institute, JEE coaching, competitive exams, expert faculty" />
      <link rel="canonical" href="https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-akudi-pune" />
    </Helmet>
      ) : currentURL === '/iit-jee-coaching-classes-institute-in-nigdi-pune' ? (
    <Helmet>
        <title>IIT JEE Coaching Classes Institute in Akudi Pune | Asquare Classes</title>
        <meta name="description" content="Prepare For IIT JEE With Top Coaching Classes at ASquare in Akudi. Our Expert Faculty And Proven Methods Help Students Achieve Top Ranks And Success. Call On +91 9404282283" />
        <meta name="keywords" content="IIT JEE coaching Akudi Pune, JEE coaching for 11th in Akudi Pune, best IIT classes Akudi Pune, JEE preparation Pune, 11th IIT coaching Akudi Pune, top JEE coaching Akudi Pune, IIT JEE tutors Akudi Pune, engineering entrance coaching Akudi Pune, IIT JEE training Akudi Pune, JEE mains and advanced coaching Akudi Pune, IIT JEE coaching Akudi Pune near me, IIT JEE coaching classes, Akudi, Pune, A Square Classes, IIT JEE preparation, JEE institute, JEE coaching, competitive exams, expert faculty" />
      <link rel="canonical" href="https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-nigdi-pune" />
    </Helmet>
      ) : currentURL === '/iit-jee-coaching-classes-institute-in-bhosari-pune' ? (
    <Helmet>
        <title>IIT JEE Coaching Classes Institute in Nigdi Pune | Asquare Classes</title>
        <meta name="description" content="Prepare For IIT JEE With Top Coaching Classes at ASquare in Nigdi. Our Expert Faculty And Proven Methods Help Students Achieve Top Ranks And Success. Call On +91 9404282283" />
        <meta name="keywords" content="IIT JEE coaching Nigdi Pune, JEE coaching for 11th in Nigdi Pune, best IIT classes Nigdi Pune, JEE preparation Pune, 11th IIT coaching Nigdi Pune, top JEE coaching Nigdi Pune, IIT JEE tutors Nigdi Pune, engineering entrance coaching Nigdi Pune, IIT JEE training Nigdi Pune, JEE mains and advanced coaching Nigdi Pune, IIT JEE coaching Nigdi Pune near me, IIT JEE coaching classes, Nigdi , Pune, A Square Classes, IIT JEE preparation, JEE institute, JEE coaching, competitive exams, expert faculty" />
      <link rel="canonical" href="https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-bhosari-pune" />
    </Helmet>
      ) : currentURL === '/iit-jee-coaching-classes-institute-in-moshi-pune' ? (
    <Helmet>
        <title>IIT JEE Coaching Classes Institute in Bhosari Pune | Asquare Classes</title>
        <meta name="description" content="Prepare For IIT JEE With Top Coaching Classes at ASquare in Bhosari. Our Expert Faculty And Proven Methods Help Students Achieve Top Ranks And Success. Call On +91 9404282283" />
        <meta name="keywords" content="IIT JEE coaching Bhosari Pune, JEE coaching for 11th in Bhosari Pune, best IIT classes Bhosari Pune, JEE preparation Pune, 11th IIT coaching Bhosari Pune, top JEE coaching Bhosari Pune, IIT JEE tutors Bhosari Pune, engineering entrance coaching Bhosari Pune, IIT JEE training Bhosari Pune, JEE mains and advanced coaching Bhosari Pune, IIT JEE coaching Bhosari Pune near me, IIT JEE coaching classes, Bhosari, Pune, A Square Classes, IIT JEE preparation, JEE institute, JEE coaching, competitive exams, expert faculty" />
      <link rel="canonical" href="https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-moshi-pune" />
    </Helmet>
      ) : currentURL === '/iit-jee-coaching-classes-institute-in-chakan-pune' ? (
    <Helmet>
        <title>IIT JEE Coaching Classes Institute in Moshi Pune | Asquare Classes</title>
        <meta name="description" content="Prepare For IIT JEE With Top Coaching Classes at ASquare in Moshi. Our Expert Faculty And Proven Methods Help Students Achieve Top Ranks And Success. Call On +91 9404282283" />
        <meta name="keywords" content="IIT JEE coaching Moshi Pune, JEE coaching for 11th in Moshi Pune, best IIT classes Moshi Pune, JEE preparation Pune, 11th IIT coaching Moshi Pune, top JEE coaching Moshi Pune, IIT JEE tutors Moshi Pune, engineering entrance coaching Moshi Pune, IIT JEE training Moshi Pune, JEE mains and advanced coaching Moshi Pune, IIT JEE coaching Moshi Pune near me, IIT JEE coaching classes, Moshi, Pune, A Square Classes, IIT JEE preparation, JEE institute, JEE coaching, competitive exams, expert faculty" />
      <link rel="canonical" href="https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-chakan-pune" />
    </Helmet>
      ) : currentURL === '/iit-jee-coaching-classes-institute-in-kasarwadi-pune' ? (
    <Helmet>
        <title>IIT JEE Coaching Classes Institute in Chakan Pune | Asquare Classes</title>
        <meta name="description" content="Prepare For IIT JEE With Top Coaching Classes at ASquare in Chakan. Our Expert Faculty And Proven Methods Help Students Achieve Top Ranks And Success. Call On +91 9404282283" />
        <meta name="keywords" content="IIT JEE coaching Chakan Pune, JEE coaching for 11th in Chakan Pune, best IIT classes Chakan Pune, JEE preparation Pune, 11th IIT coaching Chakan Pune, top JEE coaching Chakan Pune, IIT JEE tutors Chakan Pune, engineering entrance coaching Chakan Pune, IIT JEE training Chakan Pune, JEE mains and advanced coaching Chakan Pune, IIT JEE coaching Chakan Pune near me, IIT JEE coaching classes, Chakan, Pune, A Square Classes, IIT JEE preparation, JEE institute, JEE coaching, competitive exams, expert faculty" />
      <link rel="canonical" href="https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-kasarwadi-pune" />
    </Helmet>
      ) : currentURL === '/iit-jee-coaching-classes-institute-in-dapodi-pune' ? (
    <Helmet>
        <title>IIT JEE Coaching Classes Institute in Kasarwadi Pune | Asquare Classes</title>
        <meta name="description" content="Prepare For IIT JEE With Top Coaching Classes at ASquare in Kasarwadi. Our Expert Faculty And Proven Methods Help Students Achieve Top Ranks And Success. Call On +91 9404282283" />
        <meta name="keywords" content="IIT JEE coaching Kasarwadi Pune, JEE coaching for 11th in Kasarwadi Pune, best IIT classes Kasarwadi Pune, JEE preparation Pune, 11th IIT coaching Kasarwadi Pune, top JEE coaching Kasarwadi Pune, IIT JEE tutors Kasarwadi Pune, engineering entrance coaching Kasarwadi Pune, IIT JEE training Kasarwadi Pune, JEE mains and advanced coaching Kasarwadi Pune, IIT JEE coaching Kasarwadi Pune near me, IIT JEE coaching classes, Kasarwadi, Pune, A Square Classes, IIT JEE preparation, JEE institute, JEE coaching, competitive exams, expert faculty" />
      <link rel="canonical" href="https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-dapodi-pune" />
    </Helmet>
      ) : currentURL === '/iit-jee-coaching-classes-institute-in-ravet-pune' ? (
    <Helmet>
        <title>IIT JEE Coaching Classes Institute in Dapodi Pune | Asquare Classes</title>
        <meta name="description" content="Prepare For IIT JEE With Top Coaching Classes at ASquare in Dapodi. Our Expert Faculty And Proven Methods Help Students Achieve Top Ranks And Success. Call On +91 9404282283" />
        <meta name="keywords" content="IIT JEE coaching Dapodi Pune, JEE coaching for 11th in Dapodi Pune, best IIT classes Dapodi Pune, JEE preparation Pune, 11th IIT coaching Dapodi Pune, top JEE coaching Dapodi Pune, IIT JEE tutors Dapodi Pune, engineering entrance coaching Dapodi Pune, IIT JEE training Dapodi Pune, JEE mains and advanced coaching Dapodi Pune, IIT JEE coaching Dapodi Pune near me, IIT JEE coaching classes, Dapodi, Pune, A Square Classes, IIT JEE preparation, JEE institute, JEE coaching, competitive exams, expert faculty" />
      <link rel="canonical" href="https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-ravet-pune" />
    </Helmet>
      ) : currentURL === '/iit-jee-coaching-classes-institute-in-vishrantwadi-pune' ? (
    <Helmet>
        <title>IIT JEE Coaching Classes Institute in Ravet Pune | Asquare Classes</title>
        <meta name="description" content="Prepare For IIT JEE With Top Coaching Classes at ASquare in Ravet. Our Expert Faculty And Proven Methods Help Students Achieve Top Ranks And Success. Call On +91 9404282283" />
        <meta name="keywords" content="IIT JEE coaching classes, Ravet, Pune, A Square Classes, IIT JEE preparation, JEE institute, JEE coaching, competitive exams, expert faculty" />
      <link rel="canonical" href="https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-vishrantwadi-pune" />
    </Helmet>
      ) : currentURL === '/iit-jee-coaching-classes-institute-in-kalewadi-pune' ? (
    <Helmet>
        <title>IIT JEE Coaching Classes Institute in Vishrantwadi Pune | Asquare Classes</title>
        <meta name="description" content="Prepare For IIT JEE With Top Coaching Classes at ASquare in Vishrantwadi. Our Expert Faculty And Proven Methods Help Students Achieve Top Ranks And Success. Call On +91 9404282283" />
        <meta name="keywords" content="IIT JEE coaching Vishrantwadi Pune, JEE coaching for 11th in Vishrantwadi Pune, best IIT classes Vishrantwadi Pune, JEE preparation Pune, 11th IIT coaching Vishrantwadi Pune, top JEE coaching Vishrantwadi Pune, IIT JEE tutors Vishrantwadi Pune, engineering entrance coaching Vishrantwadi Pune, IIT JEE training Vishrantwadi Pune, JEE mains and advanced coaching Vishrantwadi Pune, IIT JEE coaching Vishrantwadi Pune near me, IIT JEE coaching classes, Vishrantwadi, Pune, A Square Classes, IIT JEE preparation, JEE institute, JEE coaching, competitive exams, expert faculty" />
      <link rel="canonical" href="https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-kalewadi-pune" />
    </Helmet>
      ) : currentURL === '/iit-jee-coaching-classes-institute-in-wakad-pune' ? (
    <Helmet>
        <title>IIT JEE Coaching Classes Institute in Kalewadi Pune | Asquare Classes</title>
        <meta name="description" content="Prepare For IIT JEE With Top Coaching Classes at ASquare in Kalewadi. Our Expert Faculty And Proven Methods Help Students Achieve Top Ranks And Success. Call On +91 9404282283" />
        <meta name="keywords" content="IIT JEE coaching Kalewadi Pune, JEE coaching for 11th in Vishrantwadi Pune, best IIT classes Vishrantwadi Pune, JEE preparation Pune, 11th IIT coaching Vishrantwadi Pune, top JEE coaching Vishrantwadi Pune, IIT JEE tutors Vishrantwadi Pune, engineering entrance coaching Vishrantwadi Pune, IIT JEE training Vishrantwadi Pune, JEE mains and advanced coaching Vishrantwadi Pune, IIT JEE coaching Vishrantwadi Pune near me, IIT JEE coaching classes, Kalewadi, Pune, A Square Classes, IIT JEE preparation, JEE institute, JEE coaching, competitive exams, expert faculty" />
      <link rel="canonical" href="https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-wakad-pune" />
    </Helmet>
      ) : currentURL === '/iit-jee-coaching-classes-institute-in-aundh-pune' ? (
    <Helmet>
        <title>IIT JEE Coaching Classes Institute in Wakad Pune | Asquare Classes</title>
        <meta name="description" content="Prepare For IIT JEE With Top Coaching Classes at ASquare in Wakad. Our Expert Faculty And Proven Methods Help Students Achieve Top Ranks And Success. Call On +91 9404282283" />
        <meta name="keywords" content="IIT JEE coaching Wakad Pune, JEE coaching for 11th in Wakad Pune, best IIT classes Wakad Pune, JEE preparation Pune, 11th IIT coaching Wakad Pune, top JEE coaching Wakad Pune, IIT JEE tutors Wakad Pune, engineering entrance coaching Wakad Pune, IIT JEE training Wakad Pune, JEE mains and advanced coaching Wakad Pune, IIT JEE coaching Wakad Pune near me, IIT JEE coaching classes, Wakad, Pune, A Square Classes, IIT JEE preparation, JEE institute, JEE coaching, competitive exams, expert faculty" />
      <link rel="canonical" href="https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-aundh-pune" />
    </Helmet>
      ) : currentURL === '/iit-jee-coaching-classes-institute-in-baner-pune' ? (
    <Helmet>
        <title>IIT JEE Coaching Classes Institute in Aundh Pune | Asquare Classes</title>
        <meta name="description" content="Prepare For IIT JEE With Top Coaching Classes at ASquare in Aundh. Our Expert Faculty And Proven Methods Help Students Achieve Top Ranks And Success. Call On +91 9404282283" />
        <meta name="keywords" content="IIT JEE coaching Aundh Pune, JEE coaching for 11th in Aundh Pune, best IIT classes Aundh Pune, JEE preparation Pune, 11th IIT coaching Aundh Pune, top JEE coaching Aundh Pune, IIT JEE tutors Aundh Pune, engineering entrance coaching Aundh Pune, IIT JEE training Aundh Pune, JEE mains and advanced coaching Aundh Pune, IIT JEE coaching Aundh Pune near me, IIT JEE coaching classes, Aundh, Pune, A Square Classes, IIT JEE preparation, JEE institute, JEE coaching, competitive exams, expert faculty" />
      <link rel="canonical" href="https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-baner-pune" />
    </Helmet>
      ) : currentURL === '/iit-jee-coaching-classes-institute-in-hinjewadi-pune' ? (
    <Helmet>
        <title>IIT JEE Coaching Classes Institute in Baner Pune | Asquare Classes</title>
        <meta name="description" content="Prepare For IIT JEE With Top Coaching Classes at ASquare in Baner. Our Expert Faculty And Proven Methods Help Students Achieve Top Ranks And Success. Call On +91 9404282283" />
        <meta name="keywords" content="IIT JEE coaching Baner Pune, JEE coaching for 11th in Baner Pune, best IIT classes Baner Pune, JEE preparation Pune, 11th IIT coaching Baner Pune, top JEE coaching Baner Pune, IIT JEE tutors Baner Pune, engineering entrance coaching Baner Pune, IIT JEE training Baner Pune, JEE mains and advanced coaching Baner Pune, IIT JEE coaching Baner Pune near me, IIT JEE coaching classes, Baner, Pune, A Square Classes, IIT JEE preparation, JEE institute, JEE coaching, competitive exams, expert faculty" />
      <link rel="canonical" href="https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-hinjewadi-pune" />
    </Helmet>
      ) : currentURL === '/iit-jee-coaching-classes-institute-in-pimple-saudagar-pune' ? (
    <Helmet>
        <title>IIT JEE Coaching Classes Institute in Hinjewadi Pune | Asquare Classes</title>
        <meta name="description" content="Prepare For IIT JEE With Top Coaching Classes at ASquare in Hinjewadi. Our Expert Faculty And Proven Methods Help Students Achieve Top Ranks And Success. Call On +91 9404282283" />
        <meta name="keywords" content="IIT JEE coaching Hinjewadi Pune, JEE coaching for 11th in Hinjewadi Pune, best IIT classes Hinjewadi Pune, JEE preparation Pune, 11th IIT coaching Hinjewadi Pune, top JEE coaching Hinjewadi Pune, IIT JEE tutors Hinjewadi Pune, engineering entrance coaching Hinjewadi Pune, IIT JEE training Hinjewadi Pune, JEE mains and advanced coaching Hinjewadi Pune, IIT JEE coaching Hinjewadi Pune near me, IIT JEE coaching classes, Hinjewadi, Pune, A Square Classes, IIT JEE preparation, JEE institute, JEE coaching, competitive exams, expert faculty" />
      <link rel="canonical" href="https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-pimple-saudagar-pune" />
    </Helmet>
      ) : currentURL === '/iit-jee-coaching-classes-institute-in-pimple-gurav-pune' ? (
    <Helmet>
        <title>IIT JEE Coaching Classes Institute in Pimple Saudagar Pune | Asquare Classes</title>
        <meta name="description" content="Prepare For IIT JEE With Top Coaching Classes at ASquare in Pimple Saudagar. Our Expert Faculty And Proven Methods Help Students Achieve Top Ranks And Success. Call On +91 9404282283" />
        <meta name="keywords" content="IIT JEE coaching Pimple Saudagar Pune, JEE coaching for 11th in Pimple Saudagar Pune, best IIT classes Pimple Saudagar Pune, JEE preparation Pune, 11th IIT coaching Pimple Saudagar Pune, top JEE coaching Pimple Saudagar Pune, IIT JEE tutors Pimple Saudagar Pune, engineering entrance coaching Pimple Saudagar Pune, IIT JEE training Pimple Saudagar Pune, JEE mains and advanced coaching Pimple Saudagar Pune, IIT JEE coaching Pimple Saudagar Pune near me, IIT JEE coaching classes, Pimple Saudagar, Pune, A Square Classes, IIT JEE preparation, JEE institute, JEE coaching, competitive exams, expert faculty" />
      <link rel="canonical" href="https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-pimple-gurav-pune" />
    </Helmet>
      ) : currentURL === '/iit-jee-coaching-classes-institute-in-pimple-nilakh-pune' ? (
    <Helmet>
        <title>IIT JEE Coaching Classes Institute in Pimple Gurav Pune | Asquare Classes</title>
        <meta name="description" content="Prepare For IIT JEE With Top Coaching Classes at ASquare in Pimple Gurav. Our Expert Faculty And Proven Methods Help Students Achieve Top Ranks And Success. Call On +91 9404282283" />
        <meta name="keywords" content="IIT JEE coaching Pimple Gurav Pune, JEE coaching for 11th in Pimple Gurav Pune, best IIT classes Pimple Gurav Pune, JEE preparation Pune, 11th IIT coaching Pimple Gurav Pune, top JEE coaching Pimple Gurav Pune, IIT JEE tutors Pimple Gurav Pune, engineering entrance coaching Pimple Gurav Pune, IIT JEE training Pimple Gurav Pune, JEE mains and advanced coaching Pimple Gurav Pune, IIT JEE coaching Pimple Gurav Pune near me, IIT JEE coaching classes, Pimple Gurav, Pune, A Square Classes, IIT JEE preparation, JEE institute, JEE coaching, competitive exams, expert faculty" />
      <link rel="canonical" href="https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-pimple-nilakh-pune" />
    </Helmet>
      ) : (
    <Helmet>
        <title>IIT JEE Coaching Institute For 11th in Pune | Square Classes</title>
        <meta name="description" content="Get Expert Coaching For IIT/JEE At A Square Classes in Pune. Join Our 11th-grade Program To Excel In Your Engineering Dreams! Call On +91 9404282283" />
        <meta name="keywords" content="IIT JEE coaching Pune, JEE coaching for 11th in Pune, best IIT classes Pune, JEE preparation Pune, 11th IIT coaching Pune, top JEE coaching Pune, IIT JEE tutors Pune, engineering entrance coaching Pune, IIT JEE training Pune, JEE mains and advanced coaching Pune, IIT JEE coaching Pune near me" />
      <link rel="canonical" href="https://www.asquareclasses.com/iit-jee-coaching-classes-institute-for-11th-in-pune/" />
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
