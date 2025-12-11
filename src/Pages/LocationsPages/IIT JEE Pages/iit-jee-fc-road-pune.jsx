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

import sampleimg1 from '../../../Assets/SampleImages/Banners/Banners (2).jpeg';
import sampleimg11 from '../../../Assets/SampleImages/Banners/Banners (7).jpeg';
import sampleimg2 from '../../../Assets/SampleImages/MobBanners/MobBanner4.jpeg';
import sampleimg22 from'../../../Assets/SampleImages/MobBanners/MobBanner1.jpeg';

import sampleimg3 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (9).jpeg';
import sampleimg4 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (2).jpeg';
import sampleimg6 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (4).jpeg';

import Form from '../../../Components/Form2/Form2.jsx';

const Reviews = React.lazy(() => import("../../../Components/Reviews/Reviews.jsx"));

function IITJEEFCRoad() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const whyChoose = [
    { Icon: Users, title: "Qualified Faculty Experts", desc: "Specialists in IIT-JEE, CET & NEET coaching." },
    { Icon: BookOpen, title: "Complete PCM Coverage", desc: "Physics, Chemistry & Mathematics as per latest JEE pattern." },
    { Icon: Target, title: "Small Batch Size", desc: "Ensures focused doubt-solving and personalised attention." },
    { Icon: BarChart, title: "Performance-Oriented Testing", desc: "Weekly unit tests, assignments & full-length mock exams." },
    { Icon: Lightbulb, title: "Student Guidance & Motivation", desc: "Career counselling, time-management & strategy workshops." },
  ];

  const subjects = [
    { title: "Physics", desc: "Core concepts with application-based numerical solving" },
    { title: "Chemistry", desc: "Strong foundation in Physical, Organic & Inorganic Chemistry" },
    { title: "Mathematics", desc: "Rigorous practice in Algebra, Calculus, Geometry, Trigonometry & Probability" },
  ];

  const batches = [
    { title: "2-Year Foundation Program (10th → 12th Moving Students)", desc: "Covers XI + XII Boards + JEE syllabus." },
    { title: "1-Year Intensive Program (11th → 12th Moving Students)", desc: "XII Boards + JEE coaching." },
    { title: "Crash Course (2–3 Months)", desc: "Fast-track revision & exam drills." },
    { title: "Dropper/Repeater Batch (XII Pass-outs)", desc: "One-year exclusive JEE preparation." },
  ];

  const faqs = [
    { q: "Q1: Who can enroll at ASQUARE Academy FC Road?", a: "Students of Class XI, XII, and XII pass-outs preparing for JEE Main & Advanced can enroll." },
    { q: "Q2: What subjects are covered?", a: "Physics, Chemistry & Mathematics (PCM) are covered comprehensively for JEE preparation." },
    { q: "Q3: Do you conduct mock tests?", a: "Yes — weekly subject tests and full-length JEE mock exams are part of the program." },
    { q: "Q4: What course options are available?", a: "2-Year, 1-Year, Crash Courses & Dropper Batches are offered." },
    { q: "Q5: How many students per batch?", a: "We maintain small batches for better individual attention." },
    { q: "Q6: Do parents get updates on progress?", a: "Yes — parents receive regular performance updates through PTMs and detailed reports." },
    { q: "Q7: Which areas does the FC Road branch serve?", a: "FC Road, Deccan, Shivajinagar, JM Road, and nearby Pune localities." },
  ];

  return (
    <>
      <Helmet>
        <title>Best IIT JEE Coaching Classes in FC Road Pune | ASQUARE Academy</title>
        <meta name="title" content="Best IIT JEE Coaching Classes in FC Road Pune | ASQUARE Academy" />
        <meta
          name="description"
          content="Join the best IIT JEE coaching classes in FC Road Pune at ASQUARE Academy. Expert faculty, small batches & JEE Main/Advanced preparation for Class 11, 12 & droppers."
        />
        <meta
          name="keywords"
          content={`IIT JEE coaching classes in FC Road Pune,
Best IIT JEE Coaching in FC Road Pune,
Top JEE Mains Coaching Classes FC Road Pune,
IIT JEE Advanced Preparation FC Road Pune,
JEE Advanced coaching classes in FC Road Pune,
IIT JEE Classes in FC Road Pune,
Best IIT JEE Classes in FC Road Pune,
Top IIT JEE Classes in FC Road Pune,
IIT JEE Institute coaching in FC Road Pune,
IIT JEE Institute classes in FC Road Pune,
`}
        />

        <script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-fc-road-pune#edu",
      "name": "ASQUARE Academy - IIT JEE Coaching in FC Road Pune",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-fc-road-pune",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "telephone": "+919766118877",
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune/"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "FC Road",
        "addressRegion": "Pune",
        "addressCountry": "India"
      },
      "description": "ASQUARE Academy offers IIT JEE coaching classes in FC Road Pune with expert faculty, small batches, and structured JEE Mains & Advanced preparation."
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-fc-road-pune#local",
      "name": "ASQUARE Academy FC Road",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-fc-road-pune",
      "telephone": "+919766118877",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "FC Road, Pune",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "addressCountry": "India"
      },
      "priceRange": "₹₹",
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune/"
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-fc-road-pune#webpage",
      "name": "Best IIT JEE Coaching Classes in FC Road Pune | ASQUARE Academy",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-fc-road-pune",
      "description": "Join top IIT JEE coaching classes in FC Road Pune at ASQUARE Academy for JEE Mains and Advanced with expert faculty, PCM training & mock tests."
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-fc-road-pune#breadcrumbs",
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
          "name": "IIT JEE Coaching",
          "item": "https://www.asquareclasses.com/iit-jee-coaching-classes"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "IIT JEE Coaching in FC Road Pune",
          "item": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-fc-road-pune"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-fc-road-pune#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can enroll at ASQUARE Academy FC Road?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students of Class XI, XII, and XII pass-outs preparing for JEE Main & Advanced can enroll."
          }
        },
        {
          "@type": "Question",
          "name": "What subjects are covered?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We cover Physics, Chemistry, and Mathematics (PCM) for JEE Mains & Advanced."
          }
        },
        {
          "@type": "Question",
          "name": "Do you conduct mock tests?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, weekly subject tests and full-length JEE mock exams are conducted regularly."
          }
        },
        {
          "@type": "Question",
          "name": "What course options are available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer 2-Year, 1-Year, Crash Courses, and specialized Dropper Batches."
          }
        },
        {
          "@type": "Question",
          "name": "How many students per batch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE Academy maintains small batches to ensure better individual attention."
          }
        },
        {
          "@type": "Question",
          "name": "Do parents get updates on progress?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, parents receive regular performance updates through PTMs and detailed reports."
          }
        },
        {
          "@type": "Question",
          "name": "Which areas does the FC Road branch serve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The FC Road branch serves students from FC Road, Deccan, Shivajinagar, JM Road, and nearby Pune areas."
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
                <div
                  key={i}
                  className={`carousel-item ${i === 0 ? "active" : ""}`}
                  style={{
                    height: "400px",
                    backgroundImage: `url(${img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
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
                Crack JEE Main & Advanced with <span className="highlight-text text-warning">ASQUARE Academy FC Road</span>
              </motion.h1>

              <motion.h2>Premier Coaching Institute for Engineering Aspirants in FC Road</motion.h2>

              <p className="lead d-none d-md-block">
                Searching for IIT-JEE coaching classes in FC Road, Pune? At <b className="bld">ASQUARE Academy</b>, we provide expert-led teaching, structured courses, and personalised mentoring to prepare students for JEE Main & Advanced. Our FC Road branch helps aspirants build strong fundamentals, exam-smart strategies, and speed–accuracy balance to secure admission into IITs, NITs, IIITs, and other top engineering institutes in India.
              </p>

              <p className="lead d-block d-md-none">
               Searching for IIT-JEE coaching classes in FC Road, Pune? At <b className="bld">ASQUARE Academy</b>, we provide expert-led teaching, structured courses, and personalised mentoring to prepare students for JEE Main & Advanced. Our FC Road branch helps aspirants build strong fundamentals, exam-smart strategies, and speed–accuracy balance to secure admission into IITs, NITs, IIITs, and other top engineering institutes in India.
              </p>

              <a className="btn btn-warning btn-lg rounded-pill mt-3 shadow-lg">
                <Link to={'/'} className="nav-item nav-item-list text-white">🚀 Enroll Now</Link>
              </a>
            </div>

            <div className="col-12 col-lg-4 col-md-12 mt-5 mt-md-0 text-center">
              <img src={sampleimg3} alt="ASQUARE Academy FC Road" className="img-fluid mx-auto fade-in imgsiz" style={{ objectFit: "contain", opacity: 0.95, borderRadius: "10px" }} />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Why Choose */}
      <section className="jee-why py-5">
        <div className="container">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">
            Why Join <span className="text-primary">ASQUARE Academy</span> FC Road?
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
        </div>
      </section>

      <hr />

      {/* Programs */}
      <section className="jee-programs py-5 bg-light">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-8 text-center text-lg-start order-2">
              <motion.h4 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-centerr">
                JEE Programs Offered at <span className="text-primary">FC Road Branch</span>
              </motion.h4>

              <p className="lead text-secondary">
                The Joint Entrance Examination (JEE) demands dedication, practice, and conceptual clarity. At ASQUARE Academy FC Road, our programs are designed to strengthen basics, improve problem-solving skills, and build exam confidence for both JEE Main & Advanced.
              </p>
            </div>

            <div className="col-lg-4 text-center order-1">
              <motion.img whileHover={{ scale: 1.03 }} src={sampleimg4} alt="FC Road JEE Coaching" className="img-fluid rounded-4 shadow-lg mx-auto d-block" style={{ width: "85%" }} />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Subjects + Batches */}
      <section className="jee-gradient-section py-5 text-white">
        <div className="container">
          <motion.h4 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">
            Subjects We Teach <span className="highlight-text text-warning">&nbsp;&&nbsp;</span> Course Options
          </motion.h4>

          <div className="row g-4">
            <div className="col-lg-6">
              <h4 className="highlight-text text-warning fw-bold mb-4">Subjects We Teach</h4>
              {subjects.map((sub, i) => (
                <div key={i} className="jee-subject-box mb-4 p-3 pb-4 pt-4 rounded-4 bg-white bg-opacity-10 backdrop-blur-md border border-light border-opacity-25">
                  <h5 className="fw-semibold">{sub.title}</h5>
                  <p className="small mb-0">{sub.desc}</p>
                </div>
              ))}
            </div>
            <div className="col-lg-6">
              <h4 className="highlight-text text-warning fw-bold mb-4">Course Options</h4>
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
              <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">
                Teaching <span className="text-primary">Methodology</span>
              </motion.h3>

              <div className="row g-4 justify-content-center">
                {[
                  "Interactive classroom lectures with structured assignments",
                  "Individualized doubt-solving sessions",
                  "Weekly practice tests & full-length mock exams",
                  "Parent–teacher meetings for consistent progress evaluation",
                ].map((text, i) => (
                  <div key={i} className="col-lg-3 col-6">
                    <motion.div whileHover={{ y: -5 }} className="method-card p-4 bg-white rounded-4 shadow-sm h-100 text-center">
                      <p className="text-muted small mb-0">{text}</p>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Key Highlights */}
      <section className="jee-highlights py-5 text-white">
        <div className="container text-center">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
            Key Highlights of <span className="highlight-text text-warning">FC Road</span> Branch
          </motion.h3>

          <div className="row justify-content-center g-4">
            {[
              "Limited batch strength for focused learning",
              "Updated IIT-JEE study notes, test series & question banks",
              "Workshops on exam shortcuts, time-saving techniques & smart problem-solving",
              "Continuous student progress tracking with parent updates",
              "Recognized as a leading JEE coaching institute on FC Road, Pune",
            ].map((text, i) => (
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
              <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
                Proven <span className="highlight-text text-warning">Success Stories</span>
              </motion.h3>
              <p className="lead text-light">
                ASQUARE Academy has guided many students to achieve top scores in JEE Main & Advanced. The FC Road branch continues this legacy with result-focused teaching, expert mentors, and structured preparation methods.
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
            <div className="col-12 col-md-6 mb-4 mb-md-0">
              <FAQAccordion faqs={faqs.slice(0, Math.ceil(faqs.length / 2))} accordionId="fcRoadFaqLeft" />
            </div>
            <div className="col-12 col-md-6">
              <FAQAccordion faqs={faqs.slice(Math.ceil(faqs.length / 2))} accordionId="fcRoadFaqRight" />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Final CTA */}
      <section id="enroll" className="jee-enroll-section py-5 text-center text-white">
        <div className="container">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
            Join ASQUARE Academy <span className="highlight-text text-warning">FC Road Today</span>
          </motion.h3>

          <p className="lead mb-4">Take the next step in your engineering journey with ASQUARE Academy’s IIT-JEE coaching on FC Road, Pune. With expert teachers, structured learning, and consistent results, we are your trusted choice for JEE, CET & NEET coaching.</p>

          <p><MapPin className="text-warning" /> Serving students from <b className="bld">FC Road, Deccan, Shivajinagar, JM Road, and nearby Pune regions.</b></p>

          <a className="btn btn-lg btn-warning fw-bold mt-3 px-5 py-3 rounded-pill shadow-lg">
            <Link to={'/'} className="nav-item nav-item-list text-white">
              ⚡ Admissions Open – Limited seats available! Contact us today to enroll.
            </Link>
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default IITJEEFCRoad;
