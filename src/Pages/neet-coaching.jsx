import React, { Suspense } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Header from '../Components/Header/Header';
import Loading from './Loading.jsx';
import { Helmet } from 'react-helmet';
import banner1 from "../Assets/slider/asquare-banner.webp"
import img from '../Assets/amitsir.png';
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
        <title>Best NEET Coaching Classes in Pune | Top NEET Institute at ASQUARE</title>
        <meta
          name="description"
          content="Join top NEET coaching classes in Pune with ASQUARE. Best NEET institute for NEET preparation classes. Get affordable NEET coaching in Pune with expert guidance and support."
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
                                    <div className="course-name"><h4>CBSE, ICSE, State Board</h4></div>
                                </div>
                                <div className="banner-titleSection">
                                    <h1 className="banner-title mt-3">NEET Coaching Institute in Pune</h1>
                                    <h4>For Class 11th, 12th &12th Pass Out </h4>
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
                    <h2>NEET Coaching Classes in Pune – Crack NEET with the Best Institute in Pune – ASQUARE</h2>
                    <p className='data_info_p1 t4'>ASQUARE Classes is your trusted destination for result-oriented NEET coaching classes in Pune. Known as the Best NEET institute in Pune, we’ve guided hundreds of students to secure top medical seats. With our expert faculty, personalized learning, and scientifically structured curriculum, ASQUARE is recognized among the Top NEET coaching institutes in Pune.</p>
                    <p className='data_info_p1 t4'>We offer targeted NEET coaching across Pimpri, Chinchwad, Pimple Saudagar, Vishrantwadi, and Hadapsar, empowering students from Class 11, Class 12, and Dropper batches to confidently crack NEET and begin their journey toward a medical career.</p>
                    <h3 className='mt-4'>Structured NEET Preparation Classes in Pune for Every Stage</h3>
                    <p className='data_info_p1 t4'>We provide two specialized learning formats designed for every type of learner:</p>
                    <p className='data_info_p1 t4'><b>📚 Integrated Batch (6 Hours/Day, 6 Days a Week)</b></p>
                    <ul>
                        <li>For Class 11 & 12 students</li>
                        <li>Covers both school syllabus and NEET preparation</li>
                        <li>Time-managed schedules to handle school + coaching</li>
                        <li>Extensive classroom hours for conceptual learning</li>
                        <li>Perfect for students balancing school and NEET</li>
                    </ul>
                    <p className='data_info_p1 t4'><b>📚 Non-Integrated Batch (4 Hours/Day, 6 Days a Week)</b></p>
                    <ul>
                        <li>For Dropper students or those focused solely on NEET</li>
                        <li>In-depth NEET preparation without school curriculum load</li>
                        <li>Individual doubt clearing sessions</li>
                        <li>Focused mentoring to improve weak areas</li>
                    </ul>
                    <h4 className='mt-4'>NEET Coaching Programs We Offer in Pune</h4>
                    <ul>
                        <li>2-Year Program – For Class 11 students beginning their NEET journey</li>
                        <li>1-Year Program – For Class 12 students targeting NEET alongside boards</li>
                        <li>Dropper Batch – For repeat aspirants aiming for top medical ranks</li>
                        <li>Crash Course – Short-term booster with high-impact revision sessions</li>
                    </ul>
                    <p><i>All our programs include full NEET syllabus coverage, chapter-wise tests, mock exams, and personal mentoring.</i></p>
                    <h4>Why ASQUARE is the Best NEET Coaching Institute in Pune?</h4>
                    <ul>
                        <li>Expert Faculty – Experienced NEET teachers with a track record of producing toppers</li>
                        <li>Complete Study Material – Syllabus-aligned, regularly updated content</li>
                        <li>Conceptual Clarity – Strong focus on understanding over memorization</li>
                        <li>Mock Tests & Analysis – Real-time NEET simulations and progress tracking</li>
                        <li>1-on-1 Doubt Solving – Direct mentorship for personalized improvement</li>
                        <li>Hybrid Learning Mode – Access recorded sessions and study materials anytime</li>
                        <li>Multiple Branches – Study close to home in Pimpri, Chinchwad, Vishrantwadi, Hadapsar or Pimple Saudagar</li>
                        <li>Affordable NEET Coaching in Pune – High-quality learning at student-friendly fees</li>
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
                    <p>If you're searching for NEET preparation classes in Pune that combine quality, affordability, and results — ASQUARE is your destination.</p>
                    <h4>Who Should Join ASQUARE’s NEET Classes?</h4>
                    <ul>
                        <li>Students in Class 11 & 12 preparing for NEET + boards</li>
                        <li>Dropper students aiming to improve their rank</li>
                        <li>Learners needing personal guidance and doubt clearing</li>
                        <li>Families looking for affordable NEET coaching in Pune with strong results</li>
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
