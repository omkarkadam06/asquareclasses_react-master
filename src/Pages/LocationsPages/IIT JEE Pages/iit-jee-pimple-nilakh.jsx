// File: IITJEEPimpleNilakh.jsx
import React, { useEffect, useState, Suspense } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Users,
  BookOpen,
  Target,
  BarChart,
  Lightbulb,
  MapPin,
  BadgeQuestionMark,
  Trophy,
} from "lucide-react";
import Navbar from "../../../Components/Navbar/Navbar.jsx";
import Header from "../../../Components/Header/Header.jsx";
import MobileForm from "../../../Components/Mobileform/MobileForm.jsx";
import Footer from "../../../Components/Footer/Footer.jsx";
import FAQAccordion from "../../LocationsPages/neet-pages/components/FAQAccordion.jsx";
import "../../../App.css";
import "./iit-jee.css";
import Loading from "../../Loading.jsx";

import sampleimg1 from '../../../Assets/SampleImages/Banners/Banners (3).jpeg';
import sampleimg11 from '../../../Assets/SampleImages/Banners/Banners (4).jpeg';
import sampleimg2 from '../../../Assets/SampleImages/MobBanners/MobBanner1.jpeg';
import sampleimg22 from '../../../Assets/SampleImages/MobBanners/MobBanner2.jpeg';

import sampleimg3 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (9).jpeg';
import sampleimg4 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (2).jpeg';
import sampleimg6 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (4).jpeg';

import Form from "../../../Components/Form2/Form2.jsx";

const Reviews = React.lazy(() => import("../../../Components/Reviews/Reviews.jsx"));

function IITJEEPimpleNilakh() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const whyChoose = [
    { Icon: Users, title: "Expert Teaching Faculty", desc: "Specialists in IIT-JEE, MHT-CET & NEET coaching with proven experience." },
    { Icon: BookOpen, title: "Complete PCM Coverage", desc: "Physics, Chemistry & Mathematics taught per latest JEE syllabus." },
    { Icon: Target, title: "Small Batch Strength", desc: "Individual mentoring and focused doubt-solving for every student." },
    { Icon: BarChart, title: "Systematic Testing", desc: "Weekly unit tests, practice papers & full-length mock exams." },
    { Icon: Lightbulb, title: "Motivational Support", desc: "Counseling, exam-strategy workshops and confidence-building sessions." },
  ];

  const subjects = [
    { title: "Physics", desc: "Concept clarity with problem-solving applications to build accuracy." },
    { title: "Chemistry", desc: "Strong base in Physical, Organic & Inorganic Chemistry with practice." },
    { title: "Mathematics", desc: "Rigorous practice in Algebra, Trigonometry, Geometry, Calculus & Probability." },
  ];

  const batches = [
    { title: "2-Year Foundation Program (10th → 12th Moving Students)", desc: "Board + JEE integrated program to build strong fundamentals." },
    { title: "1-Year Intensive Program (11th → 12th Moving Students)", desc: "Focused Class XII + JEE coaching with rigorous revision." },
    { title: "Crash Course (2–3 Months)", desc: "Quick revision with high-frequency mock exam practice." },
    { title: "Dropper/Repeater Batch (XII Pass-outs)", desc: "One-year advanced JEE coaching tailored for repeat aspirants." },
  ];

  const faqs = [
    { q: "Q1: Who can join ASQUARE Academy Pimple Nilakh?", a: "Class XI, XII students and XII pass-outs targeting JEE Main & Advanced." },
    { q: "Q2: Which subjects are included?", a: "Physics, Chemistry & Mathematics (PCM) are covered comprehensively." },
    { q: "Q3: Do you provide mock exams?", a: "Yes — regular mock exams and weekly topic tests are part of the program." },
    { q: "Q4: What courses are available?", a: "2-Year, 1-Year, Crash Courses & Dropper/Repeater Batches." },
    { q: "Q5: How many students are in a batch?", a: "We keep batch sizes small to ensure personalised learning." },
    { q: "Q6: Do parents receive student progress updates?", a: "Yes — regular PTMs and detailed progress reports are provided." },
    { q: "Q7: Which areas does the Pimple Nilakh branch serve?", a: "Accessible from Pimple Nilakh, Aundh, Baner, Wakad, Balewadi and nearby Pune regions." },
  ];

  return (
    <>
      <Helmet>
        <title>Best IIT JEE Coaching Classes in Pimple Nilakh Pune | ASQUARE Academy</title>
        <meta name="title" content="Best IIT JEE Coaching Classes in Pimple Nilakh Pune | ASQUARE Academy" />
        <meta
          name="description"
          content="ASQUARE Academy offers top IIT JEE coaching in Pimple Nilakh with expert PCM faculty, small batches, mock tests & JEE Main/Advanced-focused programs for Class 11 & 12 students."
        />
        <meta
          name="keywords"
          content={`IIT JEE coaching classes in Pimple Nilakh Pune,
Best IIT JEE Coaching in Pimple Nilakh Pune,
Top JEE Mains Coaching Classes Pimple Nilakh Pune,
IIT JEE Advanced Preparation Pimple Nilakh Pune,
JEE Advanced coaching classes in Pimple Nilakh Pune,
IIT JEE Classes in Pimple Nilakh Pune,
Best IIT JEE Classes in Pimple Nilakh Pune,
Top IIT JEE Classes in Pimple Nilakh Pune,
IIT JEE Institute coaching in Pimple Nilakh Pune,
IIT JEE Institute classes in Pimple Nilakh Pune,
`}
        />

        <script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-pimple-nilakh-pune#localbusiness",
      "name": "ASQUARE Academy - IIT JEE Coaching Pimple Nilakh",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-pimple-nilakh-pune",
      "telephone": "9766118877",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "description": "Best IIT JEE Coaching Classes in Pimple Nilakh Pune for JEE Main & Advanced with expert PCM faculty, mock tests & small batches.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Pimple Nilakh",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411027",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune/"
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-pimple-nilakh-pune#webpage",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-pimple-nilakh-pune",
      "name": "Best IIT JEE Coaching Classes in Pimple Nilakh Pune | ASQUARE Academy",
      "description": "Top IIT JEE coaching in Pimple Nilakh Pune for JEE Main & Advanced with expert faculty & structured programs."
    },
    {
      "@type": "EducationalOrganization",
      "@id": "https://www.asquareclasses.com/#educationalorganization",
      "name": "ASQUARE Academy",
      "url": "https://www.asquareclasses.com/",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune/"
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-pimple-nilakh-pune#breadcrumb",
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
          "item": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-pimple-nilakh-pune"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-pimple-nilakh-pune#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can join ASQUARE Academy Pimple Nilakh?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Class XI, XII students and XII pass-outs targeting JEE Main & Advanced."
          }
        },
        {
          "@type": "Question",
          "name": "Which subjects are included?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Physics, Chemistry & Mathematics (PCM)."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide mock exams?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, regular mock exams and weekly tests are part of the program."
          }
        },
        {
          "@type": "Question",
          "name": "What courses are available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "2-Year, 1-Year, Crash Courses & Dropper Batches."
          }
        },
        {
          "@type": "Question",
          "name": "How many students are in a batch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We keep small batches for personalized learning."
          }
        },
        {
          "@type": "Question",
          "name": "Do parents receive student progress updates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, regular PTMs and performance reports are provided."
          }
        },
        {
          "@type": "Question",
          "name": "Which areas does the Pimple Nilakh branch serve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Easily accessible from Pimple Nilakh, Aundh, Baner, Wakad, Balewadi, and nearby Pune areas."
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

        {/* Form Over Slider */}
        <div className="jee-slider-form-box">
          <div className="jee-enquiry-form rounded-4">
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
            {/* Left Side: Text */}
            <div className="col-12 col-lg-8 col-md-12 text-center text-md-start">
              <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
                Shape Your Engineering Future with <span className="highlight-text text-warning">ASQUARE Academy – Pimple Nilakh</span>
              </motion.h1>

              <motion.h2>Premier JEE Coaching Hub for Aspirants in Pimple Nilakh</motion.h2>

              <p className="lead d-none d-md-block">
                Searching for IIT-JEE coaching classes in Pimple Nilakh, Pune? At <b className="bld">ASQUARE Academy</b>, we provide structured courses, expert mentoring, and exam-focused preparation that empower students to achieve their dream of studying at IITs, NITs, IIITs, and top engineering institutes. Our Pimple Nilakh branch emphasizes conceptual learning, intensive practice, and doubt-solving sessions, making students exam-ready for JEE Main & Advanced.
              </p>

              <p className="lead d-block d-md-none">
                Searching for IIT-JEE coaching classes in Pimple Nilakh? ASQUARE Academy provides structured courses, expert mentoring, and exam-focused prep to make you JEE-ready.
              </p>

              <a className="btn btn-warning btn-lg rounded-pill mt-3 shadow-lg">
                <Link to={'/'} className="nav-item nav-item-list text-warning">🚀 Enroll Now</Link>
              </a>
            </div>

            {/* Right Side: Image */}
            <div className="col-12 col-lg-4 col-md-12 mt-5 mt-md-0 text-center">
              <img src={sampleimg3} alt="ASQUARE Academy Pimple Nilakh" className="img-fluid mx-auto fade-in imgsiz" style={{ objectFit: "contain", opacity: 0.95, borderRadius: "10px" }} />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Why Choose */}
      <section className="jee-why py-5">
        <div className="container">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">
            Why Enroll at <span className="text-primary">ASQUARE Academy Pimple Nilakh?</span>
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

      {/* Program Description */}
      <section className="jee-programs py-5 bg-light">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-8 text-center text-lg-start order-2">
              <motion.h4 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-centerr">
                Courses Designed for <span className="text-primary">IIT-JEE Success</span>
              </motion.h4>

              <p className="lead text-secondary">
                The JEE demands consistent practice and clarity. At ASQUARE Pimple Nilakh we design programs that develop strong foundations, build speed & accuracy, and improve exam temperament — covering both JEE Main & Advanced.
              </p>
            </div>

            <div className="col-lg-4 text-center order-1">
              <motion.img whileHover={{ scale: 1.03 }} src={sampleimg4} alt="JEE Coaching Pimple Nilakh" className="img-fluid rounded-4 shadow-lg mx-auto d-block" style={{ width: "85%" }} />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Subjects + Batches Section */}
      <section className="jee-gradient-section py-5 text-white">
        <div className="container">
          <motion.h4 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">
            Subjects We Cover <span className="highlight-text text-warning">&nbsp;&&nbsp;</span> Course Duration & Batch Options
          </motion.h4>

          <div className="row g-4">
            <div className="col-lg-6">
              <h4 className="highlight-text text-warning fw-bold mb-4 text-centerr">Subjects We Cover</h4>
              {subjects.map((sub, i) => (
                <div key={i} className="jee-subject-box mb-4 p-3 pb-4 pt-4 rounded-4 bg-white bg-opacity-10 backdrop-blur-md border border-light border-opacity-25">
                  <h5 className="fw-semibold">{sub.title}</h5>
                  <p className="small mb-0">{sub.desc}</p>
                </div>
              ))}
            </div>

            <div className="col-lg-6">
              <h4 className="highlight-text text-warning fw-bold mb-4 text-centerr">Course Duration & Batch Options</h4>
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

      {/* Methodology Section */}
      <section className="jee-method py-5 bg-light">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-12 text-center text-lg-start">
              <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">
                Teaching <span className="text-primary">Methodology</span>
              </motion.h3>

              <div className="row g-4 justify-content-center">
                {[
                  "Daily interactive classes with assignments",
                  "One-to-one doubt-clearing support",
                  "Weekly chapter tests & full-length mock exams",
                  "Parent–teacher meetings for progress tracking",
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

      {/* Key Features Section */}
      <section className="jee-highlights py-5 text-white">
        <div className="container text-center">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
            Key Features of <span className="highlight-text text-warning">Pimple Nilakh</span>
          </motion.h3>

          <div className="row justify-content-center g-4">
            {[
              "Small batch size for individual focus",
              "Updated JEE study modules, test series & question banks",
              "Special sessions on time management & exam hacks",
              "Regular student progress updates for parents",
              "Recognized as a trusted IIT-JEE coaching institute in Pimple Nilakh, Pune",
            ].map((text, i) => (
              <motion.div key={i} className="col-md-5 col-lg-4 col-6" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <div className="highlight-card shadow-lg rounded-4 p-4 bg-white bg-opacity-10 backdrop-blur-md border border-light border-opacity-25">
                  <div className="icon-circle mx-auto mb-3"><h2>🏆</h2></div>
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

      {/* Results Section */}
      <section className="jee-results py-5 text-white">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-8 text-center text-lg-start">
              <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
                Our <span className="highlight-text text-warning">&nbsp;Results&nbsp;</span> Speak for Themselves
              </motion.h3>
              <p className="lead text-light">
                ASQUARE Academy has produced several IIT-JEE qualifiers and top rankers across Pune. The Pimple Nilakh branch continues this tradition with student-centric coaching, expert guidance, and result-driven preparation.
              </p>
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
            <div className="d-inline-block bg-primary bg-opacity-10 text-primary fw-bold rounded-pill px-3 py-1 mb-3">
              <BadgeQuestionMark /> FAQs
            </div>

            <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">
              Frequently Asked Questions <span className="text-primary">(FAQ)</span>
            </motion.h3>
          </div>

          <div className="row justify-content-center">
            <div className="col-12 col-md-6 mb-4 mb-md-0">
              <FAQAccordion faqs={faqs.slice(0, Math.ceil(faqs.length / 2))} accordionId="pimpleNilakhFaqLeft" />
            </div>
            <div className="col-12 col-md-6">
              <FAQAccordion faqs={faqs.slice(Math.ceil(faqs.length / 2))} accordionId="pimpleNilakhFaqRight" />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Final CTA */}
      <section id="enroll" className="jee-enroll-section py-5 text-center text-white">
        <div className="container">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
            Enroll Now at <span className="highlight-text text-warning">ASQUARE Academy – Pimple Nilakh</span>
          </motion.h3>

          <p className="lead mb-4">
            Kickstart your IIT-JEE journey with ASQUARE Academy’s trusted coaching in Pimple Nilakh. With skilled teachers, advanced resources, and consistent success, we are your reliable partner for JEE, CET & NEET preparation.
          </p>

          <p><MapPin className="text-warning" /> <b className="bld">Serving students from Pimple Nilakh, Aundh, Baner, Wakad, Balewadi, and surrounding Pune areas.</b></p>

          <a className="btn btn-lg btn-warning fw-bold mt-3 px-5 py-3 rounded-pill shadow-lg">
            <Link to={'/'} className="nav-item nav-item-list text-white">
              ⚡ Admissions Open – Limited seats available! Secure your spot today.
            </Link>
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default IITJEEPimpleNilakh;
