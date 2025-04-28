import React, { Suspense } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Header from '../Components/Header/Header';
import Loading from './Loading.jsx';
import { Helmet } from 'react-helmet';
import banner1 from "../Assets/slider/asquare-banner.webp"
import img from '../Assets/rb_2148192915.png';
import Form2 from '../Components/Form2/Form2';
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
        <title>Best MHT CET Classes in Pune | Top Coaching Institute at ASQUARE</title>
        <meta
          name="description"
          content="Enroll in top MHT CET classes in Pune at ASQUARE. Get the best MHT CET coaching, affordable preparation classes, and expert guidance from one of the top MHT CET institutes in Pune."
        />
    </Helmet>
    <Navbar />
    <Header />
    <div className="content_pg_div iitjes">
        <section className="Hero2">
            <div className='iitpagenew'>
                <div className="bannerSlider inner-banner info-banner" style={{ backgroundImage: `url('${banner1}')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-8">
                                <div className="course-title d-flex">
                                    <div className="course-name"><h4>CBSE, ICSE, State Board </h4></div>
                                </div>
                                <div className="banner-titleSection">
                                    <h1 className="banner-title mt-3">MHT CET Coaching Classes in Pune</h1>
                                    <h4>For Class 11th, 12th &12th Pass Out</h4>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <img src={img} alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="cont_pgd_cont2">
            <div className="content_pgd_p1 infoCol-right">
                <div className="t2 cont_cont_pg customotherpages">
                    <h2>MHT CET Coaching Classes in Pune – Your Gateway to Engineering and Medical Success</h2>
                    <p className='data_info_p1 t4'>ASQUARE Classes offers top MHT CET coaching in Pune, providing comprehensive preparation for students aiming to secure seats in the best engineering and medical colleges in Maharashtra. With a reputation for excellence, we offer affordable MHT CET coaching that is tailored to meet the unique needs of students at every level. Our expert faculty, personalized approach, and result-driven programs have helped countless students succeed. We offer coaching at our centers in Pimpri, Chinchwad, Pimple Saudagar, Vishrantwadi, and Hadapsar.</p>
                    <p className='data_info_p1 t4'>Whether you're in Class 11, Class 12, or a Dropper, Asquare’s personalized approach and expert faculty give you the edge you need.</p>
                    <h3 className='mt-4'>MHT CET Coaching Programs at ASQUARE</h3>
                    <p className='data_info_p1 t4'>We offer two dedicated learning paths to suit your academic journey:</p>
                    <p className='data_info_p1 t4'><b>📚 Integrated Batch (6 Hours/Day, 6 Days a Week)</b></p>
                    <ul>
                        <li>For Class 11 & 12 students looking to prepare for both school exams and MHT CET</li>
                        <li>Dual benefit: School Board syllabus + MHT CET preparation in one course</li>
                        <li>6-hour classes, 6 days a week</li>
                        <li>Ideal for students looking to balance school and MHT CET preparation efficiently</li>
                    </ul>
                    <p className='data_info_p1 t4'><b>📚 Non-Integrated Batch (4 Hours/Day, 6 Days a Week)</b></p>
                    <ul>
                        <li>Focused MHT CET preparation for Dropper students or those not enrolled in integrated programs</li>
                        <li>Comprehensive preparation focusing solely on the MHT CET syllabus</li>
                        <li>4-hour classes, 6 days a week</li>
                        <li>Personal mentoring to help students master each concept</li>
                    </ul>
                    <h4 className='mt-4'>MHT CET Coaching Programs Offered</h4>
                    <ul>
                        <li>2-Year Program – Ideal for Class 11 students beginning their MHT CET preparation</li>
                        <li>1-Year Program – For Class 12 students focusing exclusively on MHT CET</li>
                        <li>Dropper Batch – For students reappearing for MHT CET with a personalized approach</li>
                        <li>Crash Course – Focused, intensive program for final-phase preparation</li>
                    </ul>
                    <h4>Why Choose ASQUARE for MHT CET Preparation in Pune?</h4>
                    <ul>
                        <li>Experienced Faculty – Learn from top medical experts, with years of experience in NEET coaching</li>
                        <li>Comprehensive Study Material – Carefully designed to cover the complete NEET syllabus</li>
                        <li>Concept Clarity – We focus on building strong conceptual knowledge</li>
                        <li>Regular Mock Tests – NEET-like mock tests and performance analysis</li>
                        <li>1:1 Doubt Solving – Get personalized support and attention from faculty</li>
                        <li>Smart Classrooms – Advanced teaching tools to enhance learning</li>
                        <li>Hybrid Learning – Access to recorded classes and online study resources</li>
                        <li>Convenient Locations – Centers in Pimpri, Chinchwad, Hadapsar, Pimple Saudagar and Vishrantwadi</li>
                    </ul>
                    <h5>ASQUARE MHT CET Coaching Centers in Pune</h5>
                    <p>We have multiple convenient locations across Pune for students to easily access our top-rated MHT CET coaching:</p>
                    <ul>
                        <li>Pimpri</li>
                        <li>Chinchwad</li>
                        <li>Pimple Saudagar</li>
                        <li>Vishrantwadi</li>
                        <li>Hadapsar</li>
                    </ul>
                    <p>Looking for affordable MHT CET coaching in Pune? Asquare is your best option. Visit us today and take the first step toward a successful future.</p>
                    <h4>Who Should Enroll for ASQUARE MHT CET Coaching?</h4>
                    <ul>
                        <li>Class 11 & 12 students preparing for MHT CET alongside school studies</li>
                        <li>Dropper students aiming for a focused preparation plan to improve their score</li>
                        <li>Students seeking affordable MHT CET coaching in Pune with personalized attention</li>
                        <li>Parents who want their children to receive high-quality coaching for a top MHT CET rank</li>
                    </ul>
                </div>
            </div>
            <div className="content_pgd_p2 info-page-form infoCol-left">
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
