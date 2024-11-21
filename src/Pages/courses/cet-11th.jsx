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
    {currentURL === '/mht-cet-course-classes-institute-in-vishrantwadi-pune' ? (
              <Helmet>
                <title>MHT-CET Coaching Classes Institute in Vishrantwadi | ASquare</title>
                <meta name="description" content="Boost Your MHT-CET Scores with Expert Coaching at ASquare in Vishrantwadi. Proven Strategies, Dedicated Faculty, And a Result-Focused Approach For Success." />
                <meta name="keywords" content="MHT-CET coaching classes, Vishrantwadi, Pune, A Square Classes, MHT-CET preparation, CET institute, entrance exam coaching, top results, MHT-CET coaching classes in Vishrantwadi, MHT-CET institute in Vishrantwadi, MHT-CET preparation in Vishrantwadi, Vishrantwadi coaching institute, entrance exam coaching in Vishrantwadi, MHT-CET training in Vishrantwadi, expert faculty for MHT-CET in Vishrantwadi, best MHT-CET coaching in Vishrantwadi, competitive exam preparation in Vishrantwadi, Pune MHT-CET classes in Vishrantwadi" />
                <link rel="canonical" href="https://www.asquareclasses.com/mht-cet-course-classes-institute-for-11th-in-pune/" />
              </Helmet>
            ) : currentURL === '/mht-cet-course-classes-institute-in-yerwada-pune' ? (
              <Helmet>
                <title>MHT-CET Coaching Classes Institute in Yerwada Call 9404282283</title>
                <meta name="description" content="Achieve High Scores in MHT-CET with Asquare's Coaching in Yerwada. Expert Guidance, Proven Strategies, And a Success-Driven Approach For CET Excellence." />
                <meta name="keywords" content="MHT-CET coaching classes, Yerwada, Pune, A Square Classes, CET preparation, MHT-CET institute, entrance exam coaching, expert faculty, MHT-CET coaching classes in Yerwada, MHT-CET institute in Yerwada, MHT-CET preparation in Yerwada, Yerwada coaching institute, entrance exam coaching in Yerwada, MHT-CET training in Yerwada, expert faculty for MHT-CET in Yerwada, best MHT-CET coaching in Yerwada, competitive exam preparation in Yerwada, Pune MHT-CET classes in Yerwada" />
                <link rel="canonical" href="https://www.asquareclasses.com/mht-cet-course-classes-institute-for-11th-in-pune/" />
              </Helmet>
            ) : currentURL === '/mht-cet-course-classes-institute-in-dhanori-pune' ? (
              <Helmet>
                <title>MHT-CET Coaching Classes Institute in Dhanori | Asquare Classes</title>
                <meta name="description" content="Prepare For MHT-CET at Asquare's Top Institute in Dhanori. Expert Faculty, Effective Study Plans, And a Results-Focused Approach To Ace Your CET Exams." />
                <meta name="keywords" content="MHT-CET coaching classes, Dhanori, Pune, A Square Classes, CET preparation, MHT-CET institute, entrance exam coaching, expert faculty, MHT-CET coaching classes in Dhanori, MHT-CET institute in Dhanori, MHT-CET preparation in Dhanori, Dhanori coaching institute, entrance exam coaching in Dhanori, MHT-CET training in Dhanori, expert faculty for MHT-CET in Dhanori, best MHT-CET coaching in Dhanori, competitive exam preparation in Dhanori, Pune MHT-CET classes in Dhanori" />
                <link rel="canonical" href="https://www.asquareclasses.com/mht-cet-course-classes-institute-for-11th-in-pune/" />
              </Helmet>
            ) : currentURL === '/mht-cet-course-classes-institute-in-lohegaon-pune' ? (
              <Helmet>
                <title>MHT-CET Coaching Classes Institute in Lohegaon | Asquare Classes</title>
                <meta name="description" content="Ace Your MHT-CET Exams With Asquare's Coaching in Lohegaon. Proven Techniques, Expert Faculty, And Dedicated Support For Top CET Results. For More Info Call On +91 9404282283" />
                <meta name="keywords" content="MHT-CET coaching classes, Lohegaon, Pune, A Square Classes, CET preparation, MHT-CET institute, entrance exam coaching, expert faculty, MHT-CET coaching classes in Lohegaon, MHT-CET institute in Lohegaon, MHT-CET preparation in Lohegaon, Lohegaon coaching institute, entrance exam coaching in Lohegaon, MHT-CET training in Lohegaon, expert faculty for MHT-CET in Lohegaon, best MHT-CET coaching in Lohegaon, competitive exam preparation in Lohegaon, Pune MHT-CET classes in Lohegaon" />
                <link rel="canonical" href="https://www.asquareclasses.com/mht-cet-course-classes-institute-for-11th-in-pune/" />
              </Helmet>
            ) : currentURL === '/mht-cet-course-classes-institute-in-dighi-pune' ? (
              <Helmet>
                <title>MHT-CET Coaching Classes Institute in Dighi | Asquare Classes</title>
                <meta name="description" content="Excel in MHT-CET with Asquare's Coaching in Dighi. Benefit From Experienced Faculty, Targeted Preparation, And a Success-Oriented Approach to CET Exams." />
                <meta name="keywords" content="MHT-CET coaching classes, Dighi, Pune, A Square Classes, CET preparation, MHT-CET institute, entrance exam coaching, expert faculty, MHT-CET coaching classes in Dighi , MHT-CET institute in Dighi , MHT-CET preparation in Dighi , Dighi  coaching institute, entrance exam coaching in Dighi , MHT-CET training in Dighi , expert faculty for MHT-CET in Dighi , best MHT-CET coaching in Dighi , competitive exam preparation in Dighi , Pune MHT-CET classes in Dighi " />
                <link rel="canonical" href="https://www.asquareclasses.com/mht-cet-course-classes-institute-for-11th-in-pune/" />
              </Helmet>
            ) : currentURL === '/mht-cet-course-classes-institute-in-alandi-pune' ? (
              <Helmet>
                <title>MHT-CET Coaching Classes Institute in Alandi | Asquare Classes</title>
                <meta name="description" content="Achieve Top MHT-CET Scores With Asquare's Expert Coaching in Alandi. Proven Methods, Skilled Faculty, And a Focused Approach For Exam Success." />
                <meta name="keywords" content="MHT-CET coaching classes, Alandi, Pune, A Square Classes, CET preparation, MHT-CET institute, entrance exam coaching, expert faculty, MHT-CET coaching classes in Alandi , MHT-CET institute in Alandi , MHT-CET preparation in Alandi , Alandi  coaching institute, entrance exam coaching in Alandi , MHT-CET training in Alandi , expert faculty for MHT-CET in Alandi , best MHT-CET coaching in Alandi , competitive exam preparation in Alandi , Pune MHT-CET classes in Alandi " />
                <link rel="canonical" href="https://www.asquareclasses.com/mht-cet-course-classes-institute-for-11th-in-pune/" />
              </Helmet>
            ) : currentURL === '/mht-cet-course-classes-institute-in-khadki-pune' ? (
              <Helmet>
                <title>MHT-CET Coaching Classes Institute in Khadki | Asquare Classes</title>
                <meta name="description" content="Join A Square’s MHT-CET Coaching in Khadki For Top Results. Expert Faculty, Personalized Guidance, And Proven Techniques To Ace Your CET Exams. Enroll Now +91 9404282283 " />
                <meta name="keywords" content="MHT-CET coaching classes, Khadki, Pune, A Square Classes, CET preparation, MHT-CET institute, entrance exam coaching, expert faculty, MHT-CET coaching classes in Khadki , MHT-CET institute in Khadki , MHT-CET preparation in Khadki , Khadki  coaching institute, entrance exam coaching in Khadki , MHT-CET training in Khadki , expert faculty for MHT-CET in Khadki , best MHT-CET coaching in Khadki , competitive exam preparation in Khadki , Pune MHT-CET classes in Khadki " />
                <link rel="canonical" href="https://www.asquareclasses.com/mht-cet-course-classes-institute-for-11th-in-pune/" />
              </Helmet>
            ) : currentURL === '/mht-cet-course-classes-institute-in-tingre-nagar-pune' ? (
              <Helmet>
                <title>MHT-CET Coaching Classes Institute in Tingre Nagar Pune</title>
                <meta name="description" content="Prepare For MHT-CET at Asquare's Institute in Tingre Nagar. Expert Faculty, Effective Strategies, And a Success-Driven Approach For Top Results." />
                <meta name="keywords" content="MHT-CET coaching classes, Tingre Nagar, Pune, A Square Classes, CET preparation, MHT-CET institute, entrance exam coaching, expert faculty, MHT-CET coaching classes in Tingre Nagar , MHT-CET institute in Tingre Nagar , MHT-CET preparation in Tingre Nagar , Tingre Nagar  coaching institute, entrance exam coaching in Tingre Nagar , MHT-CET training in Tingre Nagar , expert faculty for MHT-CET in Tingre Nagar , best MHT-CET coaching in Tingre Nagar , competitive exam preparation in Tingre Nagar , Pune MHT-CET classes in Tingre Nagar " />
                <link rel="canonical" href="https://www.asquareclasses.com/mht-cet-course-classes-institute-for-11th-in-pune/" />
              </Helmet>
            ) : currentURL === '/mht-cet-course-classes-institute-in-shastri-nagar-pune' ? (
              <Helmet>
                <title>MHT-CET Coaching Classes Institute in Shastri Nagar Pune</title>
                <meta name="description" content="Boost your MHT-CET Scores with Asquare’s Coaching in Shastri Nagar. Expert Guidance, Proven Methods, And a Dedicated Team For CET Exam Success." />
                <meta name="keywords" content="MHT-CET coaching classes, Shastri Nagar, Pune, A Square Classes, CET preparation, MHT-CET institute, entrance exam coaching, expert faculty, MHT-CET coaching classes in Shastri Nagar , MHT-CET institute in Shastri Nagar , MHT-CET preparation in Shastri Nagar , Shastri Nagar  coaching institute, entrance exam coaching in Shastri Nagar , MHT-CET training in Shastri Nagar , expert faculty for MHT-CET in Shastri Nagar , best MHT-CET coaching in Shastri Nagar , competitive exam preparation in Shastri Nagar , Pune MHT-CET classes in Shastri Nagar " />
                <link rel="canonical" href="https://www.asquareclasses.com/mht-cet-course-classes-institute-for-11th-in-pune/" />
              </Helmet>
            ) : currentURL === '/mht-cet-course-classes-institute-in-pratik-nagar-pune' ? (
              <Helmet>
                <title>MHT-CET Coaching Classes Institute in Pratik Nagar Pune</title>
                <meta name="description" content="Achieve Top Results in MHT-CET with Asquare’s Coaching in Pratik Nagar. Expert Faculty, Structured Lessons, And a Proven Approach To Exam Success." />
                <meta name="keywords" content="MHT-CET coaching classes, Pratik Nagar, Pune, A Square Classes, CET preparation, MHT-CET institute, entrance exam coaching, expert faculty" />
                <link rel="canonical" href="https://www.asquareclasses.com/mht-cet-course-classes-institute-for-11th-in-pune/" />
              </Helmet>
            ) : currentURL === '/mht-cet-course-classes-institute-in-viman-nagar-pune' ? (
              <Helmet>
                <title>MHT-CET Coaching Classes Institute in Viman Nagar Pune </title>
                <meta name="description" content="Excel in MHT-CET With A Square’s Expert Coaching in Viman Nagar. Get Personalized Guidance, Effective Strategies, And Comprehensive Support For Exam Success." />
                <meta name="keywords" content="MHT-CET coaching classes, Viman Nagar, Pune, A Square Classes, CET preparation, MHT-CET institute, entrance exam coaching, expert faculty" />
                <link rel="canonical" href="https://www.asquareclasses.com/mht-cet-course-classes-institute-for-11th-in-pune/" />
              </Helmet>
            ) : currentURL === '/mht-cet-course-classes-institute-in-kalyani-nagar-pune' ? (
              <Helmet>
                <title>MHT-CET Coaching Classes Institute in Kalyani Nagar Pune</title>
                <meta name="description" content="Prepare For MHT-CET at Asquare’s Institute in Kalyani Nagar. Benefit From Expert Faculty, Tailored Coaching, And a Strategic Approach For Exam Success." />
                <meta name="keywords" content="MHT-CET coaching classes, Kalyani Nagar, Pune, A Square Classes, CET preparation, MHT-CET institute, entrance exam coaching, expert faculty" />
                <link rel="canonical" href="https://www.asquareclasses.com/mht-cet-course-classes-institute-for-11th-in-pune/" />
              </Helmet>
            ) : currentURL === '/mht-cet-course-classes-institute-in-wagholi-pune' ? (
              <Helmet>
                <title>MHT-CET Coaching Classes Institute in Wagholi | Asquare Classes</title>
                <meta name="description" content="Join A Square’s MHT-CET Coaching in Wagholi For Expert Guidance. Our Tailored Programs And Experienced Faculty Will Help You Excel in Your CET Exams." />
                <meta name="keywords" content="MHT-CET coaching classes, Wagholi, Pune, A Square Classes, CET preparation, MHT-CET institute, entrance exam coaching, expert faculty" />
                <link rel="canonical" href="https://www.asquareclasses.com/mht-cet-course-classes-institute-for-11th-in-pune/" />
              </Helmet>
            ) : currentURL === '/mht-cet-course-classes-institute-in-pimpri-pune' ? (
              <Helmet>
                <title>MHT-CET Coaching Classes Institute in Pimpri | Asquare Classes</title>
                <meta name="description" content="Achieve Success in MHT-CET With Asquare's Coaching Classes in Pimpri. Expert Instructors And Tailored Study Programs To Help You Excel in Your Exams." />
                <meta name="keywords" content="MHT-CET coaching classes, Pimpri, Pune, A Square Classes, CET preparation, MHT-CET institute, entrance exam coaching, expert faculty" />
                <link rel="canonical" href="https://www.asquareclasses.com/mht-cet-course-classes-institute-for-11th-in-pune/" />
              </Helmet>
            ) : currentURL === '/mht-cet-course-classes-institute-in-chinchwad-pune' ? (
              <Helmet>
                <title>MHT-CET Coaching Classes Institute in Chinchwad | Asquare Classes</title>
                <meta name="description" content="Excel in MHT-CET With Asquare's Coaching Classes in Chinchwad. Our Experienced Faculty And Structured Programs Are Designed For Your Success in The Exams." />
                <meta name="keywords" content="MHT-CET coaching classes, Chinchwad, Pune, A Square Classes, CET preparation, MHT-CET institute, entrance exam coaching, expert faculty" />
                <link rel="canonical" href="https://www.asquareclasses.com/mht-cet-course-classes-institute-for-11th-in-pune/" />
              </Helmet>
            ) : currentURL === '/mht-cet-course-classes-institute-in-pcmc-pune' ? (
              <Helmet>
                <title>MHT-CET Coaching Classes Institute in PCMC | Asquare Classes</title>
                <meta name="description" content="Join A Square's MHT-CET Coaching Classes in PCMC For Expert Guidance And Personalized Study Plans. Achieve Your Best Scores And Excel in Your Exams." />
                <meta name="keywords" content="MHT-CET Coaching Classes, PCMC, Pune, Asquare Classes, CET Preparation, MHT-CET Institute, Entrance Exam Coaching, Expert Faculty" />
                <link rel="canonical" href="https://www.asquareclasses.com/mht-cet-course-classes-institute-for-11th-in-pune/" />
              </Helmet>
            ) : currentURL === '/mht-cet-course-classes-institute-in-akudi-pune' ? (
              <Helmet>
                <title>MHT-CET Coaching Classes Institute in Akurdi | Asquare Classes</title>
                <meta name="description" content="Prepare For MHT-CET at Asquare's Coaching Institute in Akurdi. Benefit From Expert Faculty, Structured Lessons, And a Focused Approach To Maximize Your Success." />
                <meta name="keywords" content="MHT-CET coaching classes, Akurdi, Pune, A Square Classes, CET preparation, MHT-CET institute, entrance exam coaching, expert faculty" />
                <link rel="canonical" href="https://www.asquareclasses.com/mht-cet-course-classes-institute-for-11th-in-pune/" />
              </Helmet>
            ) : currentURL === '/mht-cet-course-classes-institute-in-nigdi-pune' ? (
              <Helmet>
                <title>MHT-CET Coaching Classes Institute in Nigdi | Asquare Classes</title>
                <meta name="description" content="Excel in MHT-CET with Asquare's Coaching Classes in Nigdi. Our Expert Instructors Provide Personalized Guidance To Help You Achieve Top Exam Scores." />
                <meta name="keywords" content="MHT-CET coaching classes, Nigdi, Pune, A Square Classes, CET preparation, MHT-CET institute, entrance exam coaching, expert faculty" />
                <link rel="canonical" href="https://www.asquareclasses.com/mht-cet-course-classes-institute-for-11th-in-pune/" />
              </Helmet>
            ) : currentURL === '/mht-cet-course-classes-institute-in-bhosari-pune' ? (
              <Helmet>
                <title>MHT-CET Coaching Classes Institute in Bhosari Pune </title>
                <meta name="description" content="Join Asquare's MHT-CET Coaching Classes in Bhosari For Expert Guidance And Effective Study Strategies. Achieve Your Best Scores With Our Dedicated Support." />
                <meta name="keywords" content="MHT-CET coaching classes, Bhosari, Pune, Asquare Classes, CET preparation, MHT-CET institute, entrance exam coaching, expert faculty" />
                <link rel="canonical" href="https://www.asquareclasses.com/mht-cet-course-classes-institute-for-11th-in-pune/" />
              </Helmet>
            ) : currentURL === '/mht-cet-course-classes-institute-in-moshi-pune' ? (
              <Helmet>
                <title>MHT-CET Coaching Classes Institute in Moshi | Asquare Classes</title>
                <meta name="description" content="Achieve Your MHT-CET Goals With Asquare's Coaching Classes in Moshi. Our Expert Faculty Provides Tailored Guidance To Help You Excel in Your Exams." />
                <meta name="keywords" content="MHT-CET coaching classes, Moshi, Pune, A Square Classes, CET preparation, MHT-CET institute, entrance exam coaching, expert faculty" />
                <link rel="canonical" href="https://www.asquareclasses.com/mht-cet-course-classes-institute-for-11th-in-pune/" />
              </Helmet>
            ) : currentURL === '/mht-cet-course-classes-institute-in-chakan-pune' ? (
              <Helmet>
                <title>MHT-CET Coaching Classes Institute in Chakan Call 9404282283</title>
                <meta name="description" content="Prepare For MHT-CET at Asquare's Coaching Institute in Chakan. Our Experienced Faculty Offers Personalized Instruction To Ensure Your Success in The Exams." />
                <meta name="keywords" content="MHT-CET coaching classes, Chakan, Pune, A Square Classes, CET preparation, MHT-CET institute, entrance exam coaching, expert faculty" />
                <link rel="canonical" href="https://www.asquareclasses.com/mht-cet-course-classes-institute-for-11th-in-pune/" />
              </Helmet>
            ) : currentURL === '/mht-cet-course-classes-institute-in-kasarwadi-pune' ? (
              <Helmet>
                <title>MHT-CET Coaching Classes Institute in Kasarwadi | Asquare Classes</title>
                <meta name="description" content="Join Asquare's MHT-CET Coaching Classes in Kasarwadi For Expert Guidance. Our Tailored Approach Ensures You Achieve Your Best Results in The Exams." />
                <meta name="keywords" content="MHT-CET coaching classes, Kasarwadi, Pune, A Square Classes, CET preparation, MHT-CET institute, entrance exam coaching, expert faculty" />
                <link rel="canonical" href="https://www.asquareclasses.com/mht-cet-course-classes-institute-for-11th-in-pune/" />
              </Helmet>
            ) : currentURL === '/mht-cet-course-classes-institute-in-dapodi-pune' ? (
              <Helmet>
                <title>MHT-CET Coaching Classes Institute in Dapodi | Asquare Classes</title>
                <meta name="description" content="Prepare For MHT-CET at Asquare's Coaching Institute in Dapodi. Benefit From Expert Faculty and Tailored Study Plans Designed To Maximize Your Exam Success." />
                <meta name="keywords" content="MHT-CET coaching classes, Dapodi, Pune, A Square Classes, CET preparation, MHT-CET institute, entrance exam coaching, expert faculty" />
                <link rel="canonical" href="https://www.asquareclasses.com/mht-cet-course-classes-institute-for-11th-in-pune/" />
              </Helmet>
            ) : currentURL === '/mht-cet-course-classes-institute-in-ravet-pune' ? (
              <Helmet>
                <title>MHT-CET Coaching Classes Institute in Ravet | Asquare Classes</title>
                <meta name="description" content="Join A Square's MHT-CET Coaching Classes in Ravet For Expert Guidance. Our Experienced Faculty will Help You Excel And Achieve Your Desired Exam Scores." />
                <meta name="keywords" content="MHT-CET coaching classes, Ravet, Pune, A Square Classes, CET preparation, MHT-CET institute, entrance exam coaching, expert faculty" />
                <link rel="canonical" href="https://www.asquareclasses.com/mht-cet-course-classes-institute-for-11th-in-pune/" />
              </Helmet>
            ) : currentURL === '/mht-cet-course-classes-institute-in-kalewadi-pune' ? (
              <Helmet>
                <title>MHT-CET Coaching Classes Institute in Kalewadi | Asquare Classes</title>
                <meta name="description" content="Prepare for MHT-CET with Asquare's Coaching Classes in Kalewadi. Our Dedicated Faculty Provides Personalized Support To Help You Excel in Your Exams." />
                <meta name="keywords" content="MHT-CET coaching classes, Kalewadi, Pune, A Square Classes, CET preparation, MHT-CET institute, entrance exam coaching, expert faculty" />
                <link rel="canonical" href="https://www.asquareclasses.com/mht-cet-course-classes-institute-for-11th-in-pune/" />
              </Helmet>
            ) : currentURL === '/mht-cet-course-classes-institute-in-wakad-pune' ? (
              <Helmet>
                <title>MHT-CET Coaching Classes Institute in Wakad | Asquare Classes</title>
                <meta name="description" content="Join A Square's MHT-CET Coaching Classes in Wakad For Expert Guidance. Our Experienced Faculty And Tailored Programs Ensure You Excel in Your Exams." />
                <meta name="keywords" content="MHT-CET coaching classes, Wakad, Pune, A Square Classes, CET preparation, MHT-CET institute, entrance exam coaching, expert faculty" />
                <link rel="canonical" href="https://www.asquareclasses.com/mht-cet-course-classes-institute-for-11th-in-pune/" />
              </Helmet>
            ) : currentURL === '/mht-cet-course-classes-institute-in-aundh-pune' ? (
              <Helmet>
                <title>MHT-CET Coaching Classes Institute in Aundh | Asquare Classes</title>
                <meta name="description" content="Excel in MHT-CET with Asquare's Coaching Classes in Aundh. Our Expert Instructors Provide Personalized Support To Help You Achieve Top Exam Scores." />
                <meta name="keywords" content="MHT-CET coaching classes, Aundh, Pune, A Square Classes, CET preparation, MHT-CET institute, entrance exam coaching, expert faculty" />
                <link rel="canonical" href="https://www.asquareclasses.com/mht-cet-course-classes-institute-for-11th-in-pune/" />
              </Helmet>
            ) : currentURL === '/mht-cet-course-classes-institute-in-baner-pune' ? (
              <Helmet>
                <title>MHT-CET Coaching Classes Institute in Baner | Asquare Classes</title>
                <meta name="description" content="Join Asquare's MHT-CET Coaching Classes in Baner For Expert Guidance. Our Experienced Faculty Will Help You Excel And Achieve Your Desired Exam Results." />
                <meta name="keywords" content="MHT-CET coaching classes, Baner, Pune, A Square Classes, CET preparation, MHT-CET institute, entrance exam coaching, expert faculty" />
                <link rel="canonical" href="https://www.asquareclasses.com/mht-cet-course-classes-institute-for-11th-in-pune/" />
              </Helmet>
            ) : currentURL === '/mht-cet-course-classes-institute-in-hinjewadi-pune' ? (
              <Helmet>
                <title>MHT-CET Coaching Classes Institute in Hinjewadi Pune</title>
                <meta name="description" content="Prepare For MHT-CET at Asquare's Coaching Classes in Hinjewadi. Our Expert Faculty Provides Personalized Instruction To Help You Excel in Your Exams." />
                <meta name="keywords" content="MHT-CET coaching classes, Hinjewadi, Pune, A Square Classes, CET preparation, MHT-CET institute, entrance exam coaching, expert faculty" />
                <link rel="canonical" href="https://www.asquareclasses.com/mht-cet-course-classes-institute-for-11th-in-pune/" />
              </Helmet>
            ) : currentURL === '/mht-cet-course-classes-institute-in-pimple-saudagar-pune' ? (
              <Helmet>
                <title>MHT-CET Coaching Classes Institute in Pimple Saudagar Pune</title>
                <meta name="description" content="Join Asquare's MHT-CET Coaching Classes in Pimple Saudagar. Our Expert Faculty Offers Personalized Guidance To Help You Achieve Outstanding Exam Results." />
                <meta name="keywords" content="MHT-CET coaching classes, Pimple Saudagar, Pune, A Square Classes, CET preparation, MHT-CET institute, entrance exam coaching, expert faculty" />
                <link rel="canonical" href="https://www.asquareclasses.com/mht-cet-course-classes-institute-for-11th-in-pune/" />
              </Helmet>
            ) : currentURL === '/mht-cet-course-classes-institute-in-pimple-gurav-pune' ? (
              <Helmet>
                <title>MHT-CET Coaching Classes Institute in Pimple Gurav Pune</title>
                <meta name="description" content="Enroll in Asquare's MHT-CET Coaching Classes in Pimple Gurav. Our Dedicated Faculty Provides Personalized Instruction To Help You Excel in Your Exams." />
                <meta name="keywords" content="MHT-CET coaching classes, Pimple Gurav, Pune, A Square Classes, CET preparation, MHT-CET institute, entrance exam coaching, expert faculty" />
                <link rel="canonical" href="https://www.asquareclasses.com/mht-cet-course-classes-institute-for-11th-in-pune/" />
              </Helmet>
            ) : currentURL === '/mht-cet-course-classes-institute-in-pimple-nilakh-pune' ? (
              <Helmet>
                <title>MHT-CET Coaching Classes Institute in Pimple Nilakh | Asquare Classes</title>
                <meta name="description" content="Join Asquare's MHT-CET Coaching Classes in Pimple Nilakh For Expert Guidance. Our Experienced Faculty Ensures Personalized Support To Help You Excel in Exams." />
                <meta name="keywords" content="MHT-CET coaching classes, Pimple Nilakh, Pune, A Square Classes, CET preparation, MHT-CET institute, entrance exam coaching, expert faculty" />
                <link rel="canonical" href="https://www.asquareclasses.com/mht-cet-course-classes-institute-for-11th-in-pune/" />
              </Helmet>
            ) : (
              <Helmet>
                <title>MHT-CET Coaching Classes for 11th in Pune | A Square Classes</title>
                <meta name="description" content="Join A Square Classes For Expert MHT-CET Coaching Designed For 11th-grade Students in Pune. Get The Guidance You Need To Excel In Your Entrance Exams!" />
                <meta name="keywords" content="MHT-CET coaching classes Pune, MHT-CET classes for 11th, best MHT-CET prep Pune, 11th-grade MHT-CET coaching, A Square Classes, MHT-CET training Pune, entrance exam coaching, MHT-CET preparation courses" />
                <link rel="canonical" href="https://www.asquareclasses.com/mht-cet-course-classes-institute-for-11th-in-pune/" />
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
