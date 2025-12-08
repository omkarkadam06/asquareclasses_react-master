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
} from "lucide-react";
import Navbar from "../../../Components/Navbar/Navbar.jsx";
import Header from "../../../Components/Header/Header.jsx";
import MobileForm from "../../../Components/Mobileform/MobileForm.jsx";
import Footer from "../../../Components/Footer/Footer.jsx";
import FAQAccordion from "../../LocationsPages/neet-pages/components/FAQAccordion.jsx";
import "../../../App.css";
import "./iit-jee.css";
import Loading from "../../Loading.jsx";

import sampleimg1 from '../../../Assets/SampleImages/Banners/Banners (7).jpeg';
import sampleimg11 from '../../../Assets/SampleImages/Banners/Banners (2).jpeg';
import sampleimg2 from '../../../Assets/SampleImages/MobBanners/MobBanner9.jpeg';
import sampleimg22 from'../../../Assets/SampleImages/MobBanners/MobBanner6.jpeg';

import sampleimg3 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (9).jpeg';
import sampleimg4 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (2).jpeg';
import sampleimg6 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (4).jpeg';

import Form from '../../../Components/Form2/Form2.jsx';

const Reviews = React.lazy(() => import("../../../Components/Reviews/Reviews.jsx"));

function IITJEENIBM() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const whyChoose = [
    { Icon: Users, title: "Expert Faculty Panel", desc: "Specialists in IIT-JEE, CET & NEET coaching with proven track records." },
    { Icon: BookOpen, title: "Complete PCM Syllabus", desc: "Physics, Chemistry & Mathematics aligned with latest JEE trends." },
    { Icon: Target, title: "Focused Learning", desc: "Small batch sizes for personal attention and faster doubt resolution." },
    { Icon: BarChart, title: "Systematic Test Practice", desc: "Weekly unit tests, mock exams and detailed progress reviews." },
    { Icon: Lightbulb, title: "Student Growth Support", desc: "Motivation, counseling and exam strategy sessions for balanced growth." },
  ];

  const subjects = [
    { title: "Physics", desc: "Conceptual learning with numerical applications and problem-solving drills." },
    { title: "Chemistry", desc: "Thorough coverage of Physical, Organic & Inorganic chemistry with PYQ practice." },
    { title: "Mathematics", desc: "Extensive practice in Algebra, Trigonometry, Calculus, Geometry & Probability." },
  ];

  const batches = [
    { title: "2-Year Foundation Program (10th → 12th Moving Students)", desc: "Integrated board + JEE foundation building." },
    { title: "1-Year Advanced Course (11th → 12th Moving Students)", desc: "Focused Class XII + JEE preparation." },
    { title: "Crash Course (2–3 Months)", desc: "Revision, PYQs and exam strategy for last-leg preparation." },
    { title: "Repeater/Dropper Batch (XII Pass-outs)", desc: "One-year intensive program for repeat aspirants." },
  ];

  const faqs = [
    { q: "Who can join ASQUARE Academy NIBM?", a: "Students of Class XI, XII and XII pass-outs preparing for JEE Main & Advanced." },
    { q: "What subjects are taught?", a: "Physics, Chemistry & Mathematics (PCM) with topic-wise tests and practice sets." },
    { q: "Are mock tests included?", a: "Yes — weekly tests and full-length mock exams are an integral part of our curriculum." },
    { q: "What course options are available?", a: "2-Year, 1-Year, Crash Courses & Dropper/Repeater batches to suit every stage of preparation." },
    { q: "How many students are there in a batch?", a: "We keep batch sizes small to ensure personalised attention and effective doubt-solving." },
    { q: "Do parents get regular updates?", a: "Yes — progress reports, test analytics and PTMs keep parents informed." },
    { q: "Which areas does the NIBM branch serve?", a: "Convenient for students from NIBM, Wanwadi, Undri, Kondhwa, Mohammed Wadi and nearby Pune localities." },
    { q: "How can I enroll?", a: "Contact the NIBM branch or use the enquiry form on this page to reserve your seat — admissions are limited." },
  ];

  return (
    <>
      <Helmet>
        <title>Top IIT JEE Coaching Classes in NIBM Pune | JEE Main & Advanced Institute</title>
        <meta name="title" content="Top IIT JEE Coaching Classes in NIBM Pune | JEE Main & Advanced Institute" />
        <meta name="description" content="Join top IIT JEE coaching classes in NIBM Pune with expert faculty, small batches, mock tests & JEE Main/Advanced preparation. Enroll at ASQUARE Academy today." />
        <meta name="keywords" content={`IIT JEE coaching classes in NIBM Pune,
Best IIT JEE Coaching in  NIBM Pune,
Top JEE Mains Coaching Classes NIBM Pune,
IIT JEE Advanced Preparation NIBM Pune,
JEE Advanced coaching classes in NIBM Pune,
IIT JEE Classes in NIBM Pune,
Best IIT JEE Classes in NIBM Pune,
Top IIT JEE Classes in NIBM Pune,
IIT JEE Institute coaching in NIBM Pune,
IIT JEE Institute classes in NIBM Pune,
`} />

        <script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-nibm-pune#localbusiness",
      "name": "ASQUARE Academy - IIT JEE Coaching NIBM Pune",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-nibm-pune",
      "telephone": "9766118877",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "NIBM Pune",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune"
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-nibm-pune#webpage",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-nibm-pune",
      "name": "IIT JEE Coaching Classes in NIBM Pune | ASQUARE Academy",
      "description": "Best IIT JEE Coaching in NIBM Pune offering JEE Mains & Advanced preparation with expert faculty, mock tests, crash courses and small batches."
    },
    {
      "@type": "EducationalOrganization",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-nibm-pune#edu",
      "name": "ASQUARE Academy NIBM Pune",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-nibm-pune",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "9766118877",
        "contactType": "customer support"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-nibm-pune#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.asquareclasses.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "IIT JEE Coaching Pune",
          "item": "https://www.asquareclasses.com/iit-jee-coaching-classes"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "IIT JEE Coaching Classes in NIBM Pune",
          "item": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-nibm-pune"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-nibm-pune#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can join ASQUARE Academy NIBM?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students of Class XI, XII, and XII pass-outs preparing for JEE Main & Advanced."
          }
        },
        {
          "@type": "Question",
          "name": "What subjects are taught?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Physics, Chemistry & Mathematics (PCM)."
          }
        },
        {
          "@type": "Question",
          "name": "Are mock tests included?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, weekly tests and full-length mock exams are part of the curriculum."
          }
        },
        {
          "@type": "Question",
          "name": "What course options are available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "2-Year, 1-Year, Crash Courses & Dropper Batches."
          }
        },
        {
          "@type": "Question",
          "name": "How many students are there in a batch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We maintain small batches for personalized learning."
          }
        },
        {
          "@type": "Question",
          "name": "Do parents get regular updates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, through progress reports and PTMs."
          }
        },
        {
          "@type": "Question",
          "name": "Which areas does the NIBM branch serve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students from NIBM, Wanwadi, Undri, Kondhwa, Mohammed Wadi, and nearby Pune areas."
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

      {/* Slider */}
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
                <div
                  key={i}
                  className={`carousel-item ${i === 0 ? "active" : ""}`}
                  style={{ height: "400px", backgroundImage: `url(${img})`, backgroundSize: "cover", backgroundPosition: "center" }}
                >
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

        <div className="jee-slider-form-box">
          <div className="jee-enquiry-form rounded-4">
            <MobileForm />
            <Form />
          </div>
        </div>
      </section>

      <hr />

      {/* Hero */}
      <section className="jee-hero-section text-white d-flex align-items-center bg-transparent">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-12 col-lg-8 col-md-12 text-center text-md-start">
              <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
                Build a Strong JEE Foundation with <span className="highlight-text text-warning">ASQUARE Academy NIBM</span>
              </motion.h1>

              <motion.h2>Trusted Coaching Hub for Future Engineers in NIBM</motion.h2>

              <p className="lead d-none d-md-block">
               Searching for IIT-JEE coaching classes in NIBM, Pune? At ASQUARE Academy, we offer concept-based teaching, structured preparation, and personalized mentoring to help students achieve success in JEE Main & Advanced. Our NIBM branch ensures aspirants develop strong fundamentals, problem-solving accuracy, and exam confidence to secure admissions in IITs, NITs, IIITs, and India’s leading engineering colleges.
              </p>

              <p className="lead d-block d-md-none">
               Searching for IIT-JEE coaching classes in NIBM, Pune? At ASQUARE Academy, we offer concept-based teaching, structured preparation, and personalized mentoring to help students achieve success in JEE Main & Advanced. Our NIBM branch ensures aspirants develop strong fundamentals, problem-solving accuracy, and exam confidence to secure admissions in IITs, NITs, IIITs, and India’s leading engineering colleges.
              </p>

              <a className="btn btn-warning btn-lg rounded-pill mt-3 shadow-lg"><Link to={'/'} className="nav-item nav-item-list text-warning">🚀 Enroll Now</Link></a>
            </div>

            <div className="col-12 col-lg-4 col-md-12 mt-5 mt-md-0 text-center">
              <img src={sampleimg3} alt="ASQUARE Academy NIBM" className="img-fluid mx-auto fade-in imgsiz" style={{ objectFit: "contain", opacity: 0.95, borderRadius: "10px" }} />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Why Choose */}
      <section className="jee-why py-5">
        <div className="container">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">Why ASQUARE Academy NIBM is the Right Choice</motion.h3>

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
        </div>
      </section>

      <hr />

      {/* Programs */}
      <section className="jee-programs py-5 bg-light">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-8 text-center text-lg-start order-2">
              <motion.h4 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-centerr">Programs to Crack IIT-JEE with Confidence</motion.h4>

              <p className="lead text-secondary">The Joint Entrance Examination (JEE) requires dedication, clarity and continuous practice. Our NIBM programs are designed to strengthen fundamentals, boost speed & accuracy and improve exam strategies for both JEE Main & Advanced.</p>
            </div>

            <div className="col-lg-4 text-center order-1">
              <motion.img whileHover={{ scale: 1.03 }} src={sampleimg4} alt="JEE Programs" className="img-fluid rounded-4 shadow-lg mx-auto d-block" style={{ width: "85%" }} />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Subjects & Batches */}
      <section className="jee-gradient-section py-5 text-white">
        <div className="container">
          <motion.h4 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">Subjects We Teach at NIBM Branch</motion.h4>

          <div className="row g-4">
            <div className="col-lg-6">
              <h4 className="highlight-text text-warning fw-bold mb-4">Subjects We Teach</h4>
              {subjects.map((sub, i) => (
                <div key={i} className="jee-subject-box mb-4 p-3 rounded-4 bg-white bg-opacity-10 backdrop-blur-md border border-light border-opacity-25">
                  <h5 className="fw-semibold">{sub.title}</h5>
                  <p className="small mb-0">{sub.desc}</p>
                </div>
              ))}
            </div>

            <div className="col-lg-6">
              <h4 className="highlight-text text-warning fw-bold mb-4">Course Options for Students</h4>
              {batches.map((b, i) => (
                <div key={i} className="jee-subject-box mb-3 p-3 rounded-4 bg-white bg-opacity-10 backdrop-blur-md border border-light border-opacity-25">
                  <h5 className="fw-semibold">{b.title}</h5>
                  <p className="small mb-0">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Methodology */}
      <section className="jee-method py-5 bg-light">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-12 text-center text-lg-start">
              <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">Teaching Methodology</motion.h3>

              <div className="row g-4 justify-content-center">
                {["Learn →", "Practice →", "Assess →", "Revise"].map((text, i) => (
                  <div key={i} className="col-lg-3 col-6">
                    <motion.div whileHover={{ y: -5 }} className="method-card p-4 bg-white rounded-4 shadow-sm h-100 text-center">
                      <p className="text-muted small mb-0">{text === "Learn →" ? "Interactive lectures with practice-based assignments" : text === "Practice →" ? "One-on-one doubt-clearing sessions" : text === "Assess →" ? "Weekly subject tests & full-length mocks" : "Parent–teacher meetings for progress analysis"}</p>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Highlights */}
      <section className="jee-highlights py-5 text-white">
        <div className="container text-center">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">Key Highlights of ASQUARE Academy – NIBM</motion.h3>

          <div className="row justify-content-center g-4">
            {["Small batch strength for individual focus","Updated IIT-JEE study material, test papers & question banks","Workshops on time management, problem-solving & exam shortcuts","Regular student performance tracking and parent updates","Recognized as a leading JEE coaching institute in NIBM, Pune"].map((text, i) => (
              <motion.div key={i} className="col-md-5 col-lg-4 col-6" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <div className="highlight-card shadow-lg rounded-4 p-4 bg-white bg-opacity-10 backdrop-blur-md border border-light border-opacity-25">
                  <div className="icon-circle mx-auto mb-3"><h2>🎓</h2></div>
                  <p className="fw-semibold text-light">{text}</p>
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

      {/* Results */}
      <section className="jee-results py-5 text-white">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-8 text-center text-lg-start">
              <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">Our Results Speak for Themselves</motion.h3>
              <p className="lead text-light">ASQUARE Academy has produced IIT-JEE qualifiers and top scorers across Pune. The NIBM branch carries this legacy forward with student-focused coaching, expert mentorship, and result-oriented preparation.</p>
            </div>

            <div className="col-lg-4 text-center">
              <motion.img whileHover={{ scale: 1.05 }} src={sampleimg6} alt="Success Stories" className="img-fluid rounded-4 shadow-lg mx-auto d-block" style={{ width: "80%" }} />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* FAQ */}
      <section className="jee-faq py-5">
        <div className="container">
          <div className="text-center mb-5">
            <div className="d-inline-block bg-primary bg-opacity-10 text-primary fw-bold rounded-pill px-3 py-1 mb-3"><BadgeQuestionMark /> FAQs</div>

            <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">Frequently Asked Questions <span className="text-primary">(FAQ)</span></motion.h3>
          </div>

          <div className="row justify-content-center">
            <div className="col-12 col-md-6 mb-4 mb-md-0">
              <FAQAccordion faqs={faqs.slice(0, Math.ceil(faqs.length / 2))} accordionId="nibmFaqLeft" />
            </div>
            <div className="col-12 col-md-6">
              <FAQAccordion faqs={faqs.slice(Math.ceil(faqs.length / 2))} accordionId="nibmFaqRight" />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Final CTA */}
      <section id="enroll" className="jee-enroll-section py-5 text-center text-white">
        <div className="container">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">Enroll Today at <span className="highlight-text text-warning">ASQUARE Academy – NIBM</span></motion.h3>

          <p className="lead mb-4">Begin your IIT-JEE journey with ASQUARE Academy’s expert coaching in NIBM, Pune. With skilled faculty, updated material, and consistent results, we are your trusted partner for JEE, CET & NEET preparation.</p>

          <p><MapPin className="text-warning" /> Serving students from <b className="bld">NIBM, Wanwadi, Undri, Kondhwa, Mohammed Wadi, and surrounding Pune areas.</b></p>

          <a className="btn btn-lg btn-warning fw-bold mt-3 px-5 py-3 rounded-pill shadow-lg"><Link to={'/'} className="nav-item nav-item-list text-white">⚡ Admissions Open – Limited seats available! Enroll Now.</Link></a>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default IITJEENIBM;
