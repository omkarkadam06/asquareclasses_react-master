import React, { Suspense } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Header from '../Components/Header/Header';
import Loading from './Loading.jsx';
import { Helmet } from 'react-helmet';
import banner1 from "../Assets/slider/asquare-banner.webp"
import img from '../Assets/amitsir.png';
import Form2 from '../Components/Form2/Form2';
import { Link } from 'react-router-dom';
const Form1 = React.lazy(() => import('../Components/Form1/Form1.jsx'));
const Footer = React.lazy(() => import('../Components/Footer/Footer.jsx'));
const Testimonials = React.lazy(() =>
  import('../Components/Testimonials/Testimonials.jsx')
);

function Home() {
  return (
    <>
      {/* Add Helmet for SEO purposes */}
    <Helmet>
        <title>Best IIT JEE Mains Coaching in Pune | Top JEE Classes at ASQUARE</title>
        <meta
          name="description"
          content="Get top IIT JEE Mains coaching in Pune with ASQUARE. Join the best JEE coaching classes and IIT coaching center for focused JEE Mains preparation by expert faculty in Pune."
        />
    </Helmet>
    <Navbar />
    <Header />
    <div className="content_pg_div iitjes">
        <section className="Hero2">
            <div className='iitpagenew'>
                <div className="bannerSlider inner-banner info-banner-new" style={{ backgroundImage: `url('${banner1}')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-8">
                                <div className="course-title d-flex">
                                    <div className="course-name"><h4>CBSE, ICSE, State Board</h4></div>
                                </div>
                                <div className="banner-titleSection">
                                    <h1 className="banner-title mt-3">IIT-JEE (Mains & Advance) Coaching Institute in Pune</h1>
                                    <h4>For Class 11th, 12th & 12th Pass Out </h4>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="breacrumimg">
                                    <img src={img} alt="img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="cont_pgd_cont2">
            <div className="content_pgd_p1 infoCol-right">
                <div className="t2 cont_cont_pg customotherpages">
                    <h2>IIT JEE Mains & Advanced Coaching in Pune – Achieve Your Dream with ASQUARE</h2>
                    <p className='data_info_p1 t4'>ASQUARE Classes is Pune’s trusted name for result-driven IIT JEE Mains coaching in Pune. With a legacy of mentoring toppers and nurturing potential, we offer structured programs across Pimpri, Chinchwad, Pimple Saudagar, Vishrantwadi, and Hadapsar to help students crack India’s toughest engineering entrance exams. Whether you're in Class 11, Class 12, or a Dropper, ASQUARE’s personalized approach and expert faculty give you the edge you need to succeed.</p>
                    <h3 className='mt-4'>Tailored Programs for JEE Success</h3>
                    <p className='data_info_p1 t4'>We offer two dedicated learning paths to suit your academic journey:</p>
                    <p className='data_info_p1 t4'><b>📚 Integrated Batch (6 Hours/Day, 6 Days a Week)</b></p>
                    <ul>
                        <li>Designed for Class 11 & 12 students managing school + JEE prep</li>
                        <li>Combines Board syllabus with JEE Mains coaching</li>
                        <li>Saves time and ensures a stress-free learning rhythm</li>
                        <li>Daily class hours: 6 hours, Monday to Saturday</li>
                    </ul>
                    <p className='data_info_p1 t4'><b>📚 Non-Integrated Batch (4 Hours/Day, 6 Days a Week)</b></p>
                    <ul>
                        <li>Focused JEE Mains preparation in Pune for droppers or students from other schools</li>
                        <li>Ideal for deep conceptual learning and high-level problem-solving</li>
                        <li>Daily class hours: 4 hours, Monday to Saturday</li>
                    </ul>
                    <h4 className='mt-4'>JEE Coaching Programs We Offer</h4>
                    <ul>
                        <li>2-Year Program – For students starting in Class 11</li>
                        <li>1-Year Program – For Class 12 students aiming for JEE Mains and Advanced</li>
                        <li>Dropper Batch – For students repeating the exam</li>
                        <li>Crash Course – For final-phase intensive preparation</li>
                    </ul>
                    <p><i>All programs include test series, regular assessments, and personal mentoring.</i></p>
                    <h4>Why Choose ASQUARE for JEE Mains Coaching in Pune?</h4>
                    <ul>
                        <li>Expert Faculty – IITians, NITians, and experienced mentors</li>
                        <li>Structured Syllabus – Fully aligned with NTA exam pattern</li>
                        <li>Concept Mastery – Deep understanding, not just memorization</li>
                        <li>Weekly Tests & Mock Exams – With detailed feedback</li>
                        <li>1:1 Doubt Sessions – Daily support to clear concepts</li>
                        <li>Smart Classrooms – Visual learning with modern tools</li>
                        <li>Hybrid Learning – Access recorded sessions anytime</li>
                        <li>Multiple Centers – Convenient locations across Pune</li>
                    </ul>
                    <h5>ASQUARE IIT Coaching Centers in Pune</h5>
                    <p>Our centers are strategically located to provide easy access to students across the city:</p>
                    <ul>
                        <li>Pimpri</li>
                        <li>Chinchwad</li>
                        <li>Pimple Saudagar</li>
                        <li>Vishrantwadi</li>
                        <li>Hadapsar</li>
                    </ul>
                    <p>Looking for the Best JEE coaching classes in Pune? ASQUARE is just around the corner.</p>
                    <h4>Who Should Join ASQUARE IIT Coaching Center in Pune?</h4>
                    <ul>
                        <li>Class 11 or 12 students looking for a structured JEE plan</li>
                        <li>Students aiming to crack JEE Mains + Advanced in one go</li>
                        <li>Parents looking for a result-oriented and safe learning environment</li>
                        <li>Droppers who want a second chance with the right guidance</li>
                    </ul>
                </div>
            </div>
            <div className="content_pgd_p2 info-page-form infoCol-left customcousersl">
                <div className="ourcorses">
                    <div class="section title_aaa about_us_title"><span class="block_aaa"></span><h3>Our Courses<span></span></h3></div>
                    <ul>
                        <li><Link to="/iit-jee-coaching-classes-institute-for-11th-in-pune">Class 11th</Link></li>
                        <li><Link to="/iit-jee-coaching-classes-institute-for-12th-in-pune">Class 12th</Link></li>
                        <li><Link to="/iit-jee-coaching-classes-for-repeaters-12th-pass-in-pune">12th-Pass</Link></li>
                        <li><Link to="/iit-jee-crash-course-institutes-classes-in-pune">Crash Course</Link></li>
                    </ul>
                </div>
                <Form2 />
            </div>
        </div>
    </div>
    <Suspense fallback={<Loading />}>
        <Testimonials />
        <Form1 />
        <Footer />
    </Suspense>
    </>
  );
}

export default Home;
