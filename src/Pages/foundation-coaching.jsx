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
        <title>Best Foundation Classes in Pune | Top Science Courses at ASQUARE</title>
        <meta
          name="description"
          content="Join top foundation classes in Pune at ASQUARE. Best JEE/NEET foundation courses and science foundation classes from one of the top foundation institutes in Pune."
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
                                    <h1 className="banner-title mt-3">FOUNDATION Coaching Classes in Pune</h1>
                                    <h4>For Class  8th, 9th & 10th Std.</h4>
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
                    <h2>Foundation Classes in Pune – Build a Strong Base for JEE & NEET</h2>
                    <p className='data_info_p1 t4'>At ASQUARE Classes, we believe that a strong foundation is the key to success in competitive exams like JEE and NEET. Our specially designed Foundation Classes in Pune for CBSE and ICSE students from Class 8 to 10 focus on conceptual clarity, analytical thinking, and early exposure to competitive exam patterns. With experienced mentors, structured modules, and interactive sessions, we make learning engaging and goal-oriented.</p>
                    <p className='data_info_p1 t4'>We offer foundation courses at our centers in Pimpri, Chinchwad, Pimple Saudagar, Vishrantwadi, and Hadapsar, making us one of the top foundation institutes in Pune from Class 8 to 10.</p>
                    <h3 className='mt-4'>What Is a Foundation Course and Why Is It Important?</h3>
                    <p className='data_info_p1 t4'>Foundation courses prepare students from Class 8 onwards to gradually develop the problem-solving mindset and academic discipline needed for future success in JEE, NEET, Olympiads, and school exams.</p>
                    <p>Whether your child is in CBSE or ICSE, our program complements school learning while building skills beyond textbooks. We help students build confidence in subjects like Physics, Chemistry, Biology, and Mathematics—all of which form the backbone of higher-level competitive exams.</p>
                    <h4 className='mt-4'>Foundation Programs at ASQUARE (Class 8, 9 & 10)</h4>
                    <p><b>Class 8 Foundation Program</b></p>
                    <ul>
                        <li>Basics of Math & Science</li>
                        <li>Logical reasoning & aptitude development</li>
                        <li>Fun-based learning approach for CBSE & ICSE boards</li>
                        <li>Weekly tests, assignments, and regular PTMs</li>
                    </ul>
                    <p><b>Class 9 Foundation Program</b></p>
                    <ul>
                        <li>Strengthens concepts aligned with school syllabus</li>
                        <li>Covers JEE/NEET basics, NTSE/Olympiad practice</li>
                        <li>Weekly tests, performance tracking, and personalized feedback</li>
                        <li>Weekly tests, assignments, and regular PTMs</li>
                    </ul>
                    <p><b>Class 10 Foundation Program</b></p>
                    <ul>
                        <li>Board preparation + Competitive exam introduction</li>
                        <li>Syllabus coverage for school + early exposure to NEET/JEE concepts</li>
                        <li>Helps in smooth transition to Class 11 coaching</li>
                        <li>Weekly tests, assignments, and regular PTMs</li>
                    </ul>
                    <h5>Separate Batches for CBSE & ICSE Students</h5>
                    <p><b>CBSE Foundation Batches</b></p>
                    <ul>
                        <li>Aligned with NCERT syllabus and pattern</li>
                        <li>Concept-building with applications for NEET/JEE level</li>
                        <li>Weekly tests, assignments, and regular PTMs</li>
                    </ul>
                    <p><b>ICSE Foundation Batches</b></p>
                    <ul>
                        <li>In-depth explanation of ICSE concepts with competitive edge</li>
                        <li>Focus on application-based questions</li>
                        <li>Additional practice for Olympiads and aptitude building</li>
                    </ul>
                    <h5>Why Choose ASQUARE for Science Foundation Courses in Pune?</h5>
                    <ul>
                        <li>Expert Faculty: Teachers with experience in mentoring students for JEE, NEET, and Olympiads</li>
                        <li>Integrated Curriculum: Conceptual learning aligned with CBSE/ICSE syllabus and beyond</li>
                        <li>Frequent Testing: Unit tests, mock tests, and detailed feedback</li>
                        <li>Mentor Support: Doubt-solving, personalized guidance, and regular parent-teacher meetings</li>
                        <li>Tech-enabled Learning: Smart classrooms, digital notes, and online access</li>
                        <li>Multiple Branches Across Pune: Study at a center near you in Pimpri, Chinchwad, Pimple Saudagar, Vishrantwadi, or Hadapsar</li>
                    </ul>
                    <h5>Who Should Join Our Foundation Program?</h5>
                    <ul>
                        <li>Students in Class 8 to 10 from CBSE or ICSE boards</li>
                        <li>Parents looking for early preparation for JEE, NEET, NTSE, Olympiads</li>
                        <li>Students who want to improve conceptual clarity in Maths, Science, and Logical Reasoning</li>
                        <li>Students planning to join integrated JEE/NEET courses after Class 10</li>
                    </ul>
                    <h5>Foundation Coaching Centers in Pune</h5>
                    <p>ASQUARE Classes offers its expert foundation programs at these convenient Pune locations:</p>
                    <ul>
                        <li>Pimpri</li>
                        <li>Chinchwad</li>
                        <li>Pimple Saudagar</li>
                        <li>Vishrantwadi</li>
                        <li>Hadapsar</li>
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
