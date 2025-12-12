import React, { useEffect, useState, Suspense } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import {
  Users,
  BookOpen,
  Target,
  BarChart,
  Lightbulb,
  MapPin,
  BadgeQuestionMark,
  Star,
  Trophy,
  Rocket,
} from "lucide-react";
import Navbar from "../../../Components/Navbar/Navbar.jsx";
import Header from "../../../Components/Header/Header.jsx";
import MobileForm from "../../../Components/Mobileform/MobileForm.jsx";
import Footer from "../../../Components/Footer/Footer.jsx";
import FAQAccordion from "../../LocationsPages/neet-pages/components/FAQAccordion.jsx";
import "../../../App.css";
import "./iit-jee.css";
import Loading from "../../Loading.jsx";

import sampleimg1 from '../../../Assets/SampleImages/Banners/Banners (9).jpeg';
import sampleimg11 from '../../../Assets/SampleImages/Banners/Banners (1).jpeg';
import sampleimg2 from '../../../Assets/SampleImages/MobBanners/MobBanner4.jpeg';
import sampleimg22 from'../../../Assets/SampleImages/MobBanners/MobBanner8.jpeg';

import sampleimg3 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (9).jpeg';
import sampleimg4 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (2).jpeg';
import sampleimg5 from '../../../Assets/SampleImages/sampleimg5.jpeg';
import sampleimg6 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (4).jpeg';
import sampleimg7 from '../../../Assets/SampleImages/sampleimg7.jpeg';
import Form from '../../../Components/Form2/Form2.jsx';

const Reviews = React.lazy(() => import("../../../Components/Reviews/Reviews.jsx"));

function IITJEEBopkhel() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const whyChoose = [
    { Icon: Users, title: "Highly Experienced Teachers", desc: "Specialists in JEE Main, Advanced, NEET & CET coaching." },
    { Icon: BookOpen, title: "Complete PCM Syllabus  Coverage", desc: "Physics, Chemistry & Mathematics aligned with the latest NTA pattern." },
    { Icon: Target, title: "Small Batches for Personalized Learning ", desc: "Focused attention on every student." },
    { Icon: BarChart, title: "Weekly Tests & Progress Tracking ", desc: "Assignments, chapter-wise tests & full-length mock exams" },
    { Icon: Lightbulb, title: "Motivation & Study Planning", desc: "Career guidance, exam strategies & doubt-solving support." },
  ];

  const subjects = [
    { title: "Physics", desc: "Concept-based learning with application-oriented questions to strengthen analytical skills." },
    { title: "Chemistry", desc: "Balanced focus on Organic, Physical & Inorganic Chemistry for both JEE Main & Advanced." },
    { title: "Mathematics", desc: "Intensive problem-solving in Algebra, Calculus, Coordinate Geometry, Trigonometry & Probability." },
  ];

  const batches = [
    { title: "2-Year Foundation Program (10th → 12th)", desc: "Board + JEE integrated coaching." },
    { title: "1-Year JEE Course (11th → 12th)", desc: "Fast-track learning for JEE aspirants." },
    { title: "Crash Course (2–3 Months)", desc: "Intensive revision & exam-focused practice." },
    { title: "Dropper/Repeater Batch", desc: "One-year dedicated coaching for repeaters." },
  ];

  const faqs = [
    { q: "Q1: Who can join ASQUARE Academy Bopkhel?", a: "Students in Class XI, XII, and dropper candidates preparing for JEE Main & Advanced can enroll at ASQUARE Academy Bopkhel." },
    { q: "Q2: What subjects are taught?", a: "Physics, Chemistry, and Mathematics (PCM) are covered with a mix of NCERT foundation and advanced problem-solving for JEE." },
    { q: "Q3: Do you provide mock tests?", a: "Yes — weekly tests, chapter-wise assessments, and full-length mock exams are part of the program." },
    { q: "Q4: Which courses are available?", a: "2-Year Foundation, 1-Year JEE Course, Crash Course, and Dropper/Repeater Batches." },
    { q: "Q5: What is the batch size?", a: "We maintain small batches for personalized attention and effective doubt-solving." },
    { q: "Q6: Do parents receive updates?", a: "Yes — regular progress reports and parent–teacher meetings are provided." },
    { q: "Q7: Which areas does the Bopkhel branch serve?", a: "Accessible from Bopkhel, Dighi, Khadki, Aundh, Bopodi, Vishrantwadi and nearby Pune localities." },
  ];

  return (
    <>
      <Helmet>
        <title>IIT JEE Coaching Classes in Bopkhel Pune | Best JEE Main & Advanced Institute</title>
        <meta name="title" content="IIT JEE Coaching Classes in Bopkhel Pune | Best JEE Main & Advanced Institute" />
        <meta name="description" content="Join ASQUARE Academy for the best IIT JEE coaching classes in Bopkhel Pune. Expert faculty, PCM coverage, mock tests & advanced preparation for JEE Main & Advanced." />
        <meta name="keywords" content="IIT JEE coaching classes in Bopkhel Pune,
Best IIT JEE Coaching in Bopkhel Pune,
Top JEE Mains Coaching Classes Bopkhel Pune,
IIT JEE Advanced Preparation Bopkhel Pune,
JEE Advanced coaching classes in Bopkhel Pune,
IIT JEE Classes in Bopkhel Pune,
Best IIT JEE Classes in Bopkhel Pune,
Top IIT JEE Classes in Bopkhel Pune,
IIT JEE Institute coaching in Bopkhel Pune,
IIT JEE Institute classes in Bopkhel Pune,
" />
        <script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "name": "ASQUARE Academy Bopkhel",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-Bopkhel-pune",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "description": "ASQUARE Academy offers IIT JEE coaching classes in Bopkhel Pune with expert faculty, complete PCM coverage, mock tests, and advanced preparation for JEE Main & Advanced.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Bopkhel",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411031",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9766118877",
        "contactType": "customer service"
      },
      "areaServed": [
        "Bopkhel",
        "Dighi",
        "Khadki",
        "Aundh",
        "Bopodi",
        "Vishrantwadi",
        "Pune"
      ],
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune/"
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can join ASQUARE Academy Bopkhel?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students from Class XI, XII, and dropper candidates preparing for JEE Main & Advanced can join ASQUARE Academy Bopkhel."
          }
        },
        {
          "@type": "Question",
          "name": "What subjects are covered in IIT JEE coaching at Bopkhel?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE Academy Bopkhel covers Physics, Chemistry, and Mathematics as per the latest JEE syllabus."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide mock tests?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, weekly tests, chapter-wise assessments, and full-length mock exams are included in the program."
          }
        },
        {
          "@type": "Question",
          "name": "Which IIT JEE courses are available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE Academy offers 2-Year, 1-Year, Crash Course, and Dropper Batch programs for IIT JEE preparation."
          }
        },
        {
          "@type": "Question",
          "name": "What is the batch size at ASQUARE Academy Bopkhel?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Small batches are maintained to ensure personalized attention and focused learning."
          }
        },
        {
          "@type": "Question",
          "name": "Do parents receive student performance updates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, parents receive regular performance updates through PTMs and detailed progress reports."
          }
        }
      ]
    }
  ]
}

        `}</script>

        <link rel="canonical" href={canonicalUrl} />
      </Helmet>

      <Navbar />
      <Header />

      {/* Full-width Slider with Overlaid Form */}
      <section className="jee-full-slider-section position-relative">
        {isDesktop ? (
          <div id="jeeFullCarouselDesktop" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {[sampleimg1, sampleimg11].map((img, i) => (
                <div key={i} className={`carousel-item ${i === 0 ? "active" : ""}`}>
                  <img src={img} className="d-block w-100 carousel-image" alt={`Slide ${i + 1}`} />
                  <div className="carousel-overlay" />
                </div>
              ))}
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#jeeFullCarouselDesktop" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" />
            </button>

            <button className="carousel-control-next" type="button" data-bs-target="#jeeFullCarouselDesktop" data-bs-slide="next">
              <span className="carousel-control-next-icon" />
            </button>
          </div>
        ) : (
          <div id="jeeFullCarouselMobile" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {[sampleimg2, sampleimg22].map((img, i) => (
                <div key={i} className={`carousel-item ${i === 0 ? "active" : ""}`} style={{ height: "400px", backgroundImage: `url(${img})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                  <div className="carousel-overlay" />
                </div>
              ))}
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#jeeFullCarouselMobile" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" />
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#jeeFullCarouselMobile" data-bs-slide="next">
              <span className="carousel-control-next-icon" />
            </button>
          </div>
        )}

        {/* Form Over Slider */}
        <div className="jee-slider-form-box">
          <div className="jee-enquiry-form rounded-4 ">
            <MobileForm />
            <Form />
          </div>
        </div>
      </section>

      <hr />

      {/* Hero Section */}
      <section className="jee-hero-section text-white d-flex align-items-center bg-transparent">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-12 col-lg-8 col-md-12 text-center text-md-start">
              <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
                IIT JEE Coaching Classes in <span className="highlight-text text-warning">Bopkhel Pune</span> – ASQUARE Academy
              </motion.h1>
              <motion.h2>Best IIT-JEE Coaching in Bopkhel Pune for JEE Main & Advanced</motion.h2>

              <p className="lead d-none d-md-block">
                Preparing for IIT-JEE and searching for reliable <b className="bld">IIT JEE coaching classes in Bopkhel Pune?</b> <b className="bld">ASQUARE Academy</b> offers result-oriented coaching designed to build strong fundamentals, boost problem-solving skills, and prepare students for JEE Main & Advanced. Our Bopkhel branch provides structured teaching methods, expert faculty, and personalized learning support to help aspirants secure admission to IITs, NITs, IIITs and top engineering colleges.
              </p>

              <p className="lead d-block d-md-none">
                               Preparing for IIT-JEE and searching for reliable <b className="bld">IIT JEE coaching classes in Bopkhel Pune?</b> <b className="bld">ASQUARE Academy</b> offers result-oriented coaching designed to build strong fundamentals, boost problem-solving skills, and prepare students for JEE Main & Advanced. Our Bopkhel branch provides structured teaching methods, expert faculty, and personalized learning support to help aspirants secure admission to IITs, NITs, IIITs and top engineering colleges.
              </p>

              <a className="btn btn-warning btn-lg rounded-pill mt-3 shadow-lg">
                <Link to={'/'} className="nav-item nav-item-list text-warning">🚀 Enroll Now</Link>
              </a>
            </div>

            <div className="col-12 col-lg-4 col-md-12 mt-5 mt-md-0 text-center">
              <img src={sampleimg3} alt="ASQUARE Academy" className="img-fluid mx-auto fade-in imgsiz" style={{ objectFit: "contain", opacity: 0.95, borderRadius: "10px" }} />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Why Choose */}
      <section className="jee-why py-5 ">
        <div className="container">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">
            Why Choose <span className="text-primary">ASQUARE Academy</span> in Bopkhel?
          </motion.h3>

          <div className="row g-4 justify-center" style={{ justifyContent: "center" }}>
            {whyChoose.map((item, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <motion.div whileHover={{ scale: 1.05 }} className="jee-feature-card shadow-lg rounded-4 p-4 h-100">
                  <item.Icon size={40} className="mb-3 text-warning" />
                  <h5 className="fw-bold mb-2">{item.title}</h5>
                  <p className="text-muted">{item.desc}</p>
                </motion.div>
              </div>
            ))}
          </div>
          <br></br>
          <p className="lead ">ASQUARE stands among the Top JEE Mains Coaching Classes in Bopkhel Pune, helping students build strong academic foundations.</p>
        </div>
      </section>

      <hr />

      {/* Program Description */}
      <section className="jee-programs py-5 bg-light">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-8 text-center text-lg-start order-2">
              <motion.h4 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-centerr">
                IIT JEE Advanced Preparation in <span className="text-primary">Bopkhel  </span> Pune
              </motion.h4>

              <p className="lead text-secondary">
                Cracking JEE Advanced requires accuracy, speed, and deep conceptual clarity. ASQUARE Academy Bopkhel offers structured programs that include: <br></br>
                • Advanced-level problem-solving<br></br>
• Topic-wise practice sessions<br></br>
• Time-management strategies<br></br>
• Personalized mentorship from IIT-JEE experts <br></br>
This makes us one of the most trusted institutes for JEE Advanced coaching classes in Bopkhel Pune.

              </p>
            </div>
            <div className="col-lg-4 text-center order-1">
              <motion.img whileHover={{ scale: 1.03 }} src={sampleimg4} alt="JEE Coaching" className="img-fluid rounded-4 shadow-lg mx-auto d-block" style={{ width: "85%" }} />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Subjects + Batches Section */}
      <section className="jee-gradient-section py-5 text-white">
        <div className="container">
          <motion.h4 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">
            Subject-Wise IIT-JEE Classes
            <span className="highlight-text text-warning">&nbsp;in&nbsp;</span>
           Bopkhel
          </motion.h4>
          <br />

          <div className="row g-4">
            <div className="col-lg-6">
              <h4 className="highlight-text text-warning fw-bold mb-4 text-centerr">Subject-Wise IIT-JEE Classes</h4>
              {subjects.map((sub, i) => (
                <div key={i} className="jee-subject-box mb-4 p-3 pb-4 pt-4 rounded-4 bg-white bg-opacity-10 backdrop-blur-md border border-light border-opacity-25">
                  <h5 className="fw-semibold">{sub.title}</h5>
                  <p className="small mb-0">{sub.desc}</p>
                </div>
              ))}
                 <p className="lead ">    Whether you're looking for Best IIT JEE Classes in Bopkhel Pune or detailed subject-wise training, ASQUARE delivers excellence.</p>
            </div>
            <div className="col-lg-6">
              <h4 className="highlight-text text-warning fw-bold mb-4 text-centerr">Available Courses at ASQUARE Academy Bopkhel</h4>
              {batches.map((b, i) => (
                <div key={i} className="jee-subject-box mb-3 p-3 rounded-4 bg-white bg-opacity-10 backdrop-blur-md border border-light border-opacity-25">
                  <h5 className="fw-semibold">{b.title}</h5>
                  <p className="small mb-0">{b.desc}</p>
                </div>
              ))}
               <p className="lead ">Our programs cover everything needed for efficient IIT JEE Advanced preparation in Bopkhel Pune.  </p>
            </div>
                 
        
          </div>
        </div>
      </section>

      <hr />

      {/* Methodology Section */}
      <section className="jee-method py-5 bg-light">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-12 text-center text-lg-start">
              <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">
                Teaching Methodology at  <span className="text-primary">ASQUARE Bopkhel</span>
              </motion.h3>

              <div className="row g-4 justify-content-center">
                {["Learn", "Practice", "Assess", "Revise","Revisee"].map((step, i) => (
                  <div key={i} className="col-lg-3 col-6">
                    <motion.div whileHover={{ y: -5 }} className="method-card p-4 bg-white rounded-4 shadow-sm h-100 text-center">
                      <p className="text-muted small mb-0">
                        {step === "Learn"
                          ? "• Interactive classroom sessions with daily assignments"
                          : step === "Practice"
                            ? "• Individual doubt-clearing support"
                               : step === "Revisee"
                            ? "• Updated study material & previous year problem sheets"
                            : step === "Assess"
                              ? "• Weekly mock tests & complete performance analysis"
                              : "• Detailed feedback and parent–teacher meetings"}
                      </p>
                    </motion.div>
                  </div>
                ))}
                <p className="lead text-center">This scientific approach ensures we remain among the Top IIT JEE Classes in Bopkhel Pune.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* New Highlights Section */}
      <section className="jee-highlights py-5 text-white">
        <div className="container text-center">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
          Top Benefits of Joining <span className="highlight-text text-warning">&nbsp;IIT-JEE Coaching &nbsp;</span> in Bopkhel
          </motion.h3>

          <div className="row justify-content-center g-4">
            {[
              "• Expert faculty with proven JEE results",
              "• Limited batch size for focused learning",
              "• Comprehensive PCM study modules",
              "• Concept reinforcement through weekly assessments",
              "• Consistent performance reporting to parents",


                  "• Strong reputation as the leading IIT JEE Institute classes in Bopkhel Pune",






            ].map((text, i) => (
              <motion.div key={i} className="col-md-5 col-lg-4 col-6" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <div className="highlight-card shadow-lg rounded-4 p-4 bg-white bg-opacity-10 backdrop-blur-md border border-light border-opacity-25">
                  <div className="icon-circle mx-auto mb-3">
                    <h2>🎓</h2>
                  </div>
                  <p className="fw-semibold text-light ">{text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <hr />
      <Suspense fallback={<Loading />}>
        <Reviews />
      </Suspense>

      <hr />

      {/* Results Section */}
      <section className="jee-results py-5 text-white">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-8 text-center text-lg-start">
              <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
               ASQUARE Academy Results <span className="highlight-text text-warning">&nbsp;– A Legacy of Excellence&nbsp;</span>
              </motion.h3>
              <p className="lead text-light">
               Many students trained by ASQUARE have secured top ranks in JEE Main & JEE Advanced. Our Bopkhel branch continues this legacy by offering disciplined preparation, high-quality teaching, and structured programs.
              </p>
            </div>

            <div className="col-lg-4 text-center">
              <motion.img whileHover={{ scale: 1.05 }} src={sampleimg6} alt="Success Stories" className="img-fluid rounded-4 shadow-lg mx-auto d-block" style={{ width: "80%" }} />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* FAQs */}
      <section className="jee-faq py-5">
        <div className="container">
          <div className="text-center mb-5">
            <div className="d-inline-block bg-primary bg-opacity-10 text-primary fw-bold rounded-pill px-3 py-1 mb-3">
              <BadgeQuestionMark /> FAQs
            </div>

            <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">
              Frequently Asked Questions <span className="text-primary">(FAQ)</span>
            </motion.h3>
          </div>

          <div className="row justify-content-center">
            <div className="col-12 col-md-6 mb-4 mb-md-0 ">
              <FAQAccordion faqs={faqs.slice(0, Math.ceil(faqs.length / 2))} accordionId="jeeFaqLeft" />
            </div>

            <div className="col-12 col-md-6">
              <FAQAccordion faqs={faqs.slice(Math.ceil(faqs.length / 2))} accordionId="jeeFaqRight" />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Final CTA */}
      <section id="enroll" className="jee-enroll-section py-5 text-center text-white">
        <div className="container">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
            Join ASQUARE Academy <span className="highlight-text text-warning">&nbsp;Bopkhel Today&nbsp;</span>
          </motion.h3>
          <p className="lead mb-4">
          Prepare confidently with expert guidance at the Best IIT JEE Coaching in Bopkhel Pune. Our structured programs, dedicated faculty, and focused test preparation make ASQUARE the ideal choice for JEE aspirants.
          </p>
          <p><MapPin className="text-warning" />Serving students from <b className="bld">Bopkhel, Dighi, Vishrantwadi, Khadki, Aundh and nearby Pune areas.</b></p>
          <a className="btn btn-lg btn-warning fw-bold mt-3 px-5 py-3 rounded-pill shadow-lg">
            <Link to={'/'} className="nav-item nav-item-list text-white">
              ⚡ Admissions Open – Enroll now!
              &nbsp;<p className="text-warning">Limited Seats Available</p>
            </Link>
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default IITJEEBopkhel;
