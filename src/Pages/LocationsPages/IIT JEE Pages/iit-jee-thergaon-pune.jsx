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
import sampleimg11 from '../../../Assets/SampleImages/Banners/Banners (7).jpeg';
import sampleimg2 from '../../../Assets/SampleImages/MobBanners/MobBanner4.jpeg';
import sampleimg22 from'../../../Assets/SampleImages/MobBanners/MobBanner6.jpeg';

import sampleimg3 from "../../../Assets/SampleImages/AsquarePics/AsquarePics (9).jpeg";
import sampleimg4 from "../../../Assets/SampleImages/AsquarePics/AsquarePics (2).jpeg";
import sampleimg6 from "../../../Assets/SampleImages/AsquarePics/AsquarePics (4).jpeg";

import Form from "../../../Components/Form2/Form2.jsx";

const Reviews = React.lazy(() => import("../../../Components/Reviews/Reviews.jsx"));

function IITJEEThergaon() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const whyChoose = [
    { Icon: Users, title: "Expert Faculty ", desc: "– Experienced in IIT-JEE, NEET & CET coaching." },
    { Icon: BookOpen, title: "Updated Syllabus Coverage ", desc: "– PCM subjects aligned with JEE Main & Advanced exams." },
    { Icon: Target, title: "Individual Mentoring ", desc: "– Small batches for focused guidance." },
    { Icon: BarChart, title: "Regular Mock Exams ", desc: "– Weekly tests & performance reviews." },
    { Icon: Lightbulb, title: "Career Guidance ", desc: "– Strategy sessions for rank improvement and confidence building." },
  ];

  const subjects = [
    { title: "Physics", desc: "Concept-based teaching & application-focused problems" },
    { title: "Chemistry", desc: "Physical, Organic & Inorganic topics in detail" },
    { title: "Mathematics", desc: "Advanced practice in Algebra, Calculus, Geometry & Probability" },
  ];

  const batches = [
    { title: "2-Year Foundation (10th → 12th) – Boards + JEE prep together", desc: "" },
    { title: "1-Year Intensive (11th → 12th) – Quick-paced course for XII + JEE", desc: "" },
    { title: "Crash Course (2–3 Months) – Fast revision & practice before exams", desc: "" },
    { title: "Dropper / Repeater Batch – One-year targeted JEE prep for XII pass-outs", desc: "" },
  ];

  const faqs = [
    {
      q: "Q1: Who can join ASQUARE IIT JEE coaching classes in Thergaon Pune?",
      a: "Students of Class XI, XII, and XII pass-outs preparing for JEE Main and JEE Advanced can enroll.",
    },
    {
      q: "Q2: Which subjects are covered in the JEE program?",
      a: "The IIT JEE coaching program includes Physics, Chemistry, and Mathematics with concept-building and problem-solving practice.",
    },
    {
      q: "Q3: Do you conduct mock exams for JEE preparation?",
      a: "Yes—students take weekly tests, chapter-wise quizzes, and full-length JEE mock exams for consistent evaluation.",
    },
    {
      q: "Q4: What course options are available for IIT JEE aspirants in Thergaon Pune?",
      a: "ASQUARE offers 2-Year Integrated, 1-Year Program, Crash Courses, and Dropper Batches.",
    },
    {
      q: "Q5: What is the batch size in your IIT JEE classes?",
      a: "We maintain small, focused batches to ensure personalized attention and efficient doubt-solving.",
    },
    {
      q: "Q6: Do parents receive performance updates?",
      a: "Yes—parents are updated through PTMs, performance reports, and detailed test analyses.",
    },
    {
      q: "Q7: Which areas does the Thergaon branch serve?",
      a: "The center is easily accessible for students from Thergaon, Wakad, Kalewadi, Pimple Saudagar, Pimpri, and nearby PCMC areas.",
    },
    {
      q: "Q8: Do you offer IIT JEE Advanced Preparation in Thergaon Pune?",
      a: "Yes—students receive Advanced-level modules, high-difficulty problem sets, and specialized test series are provided.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>IIT JEE Coaching Classes & Institute in Thergaon Pune | ASQUARE Academy</title>
        <meta
          name="title"
          content="IIT JEE Coaching Classes & Institute in Thergaon Pune | ASQUARE Academy"
        />
        <meta
          name="description"
          content="Join ASQUARE Academy’s IIT JEE coaching classes & institute in Thergaon Pune for JEE Main & Advanced preparation with expert faculty, small batches & mock tests."
        />
        <meta
          name="keywords"
          content="IIT JEE coaching classes in Thergaon pune, Best IIT JEE Coaching in Thergaon pune, Top JEE Mains Coaching Classes Thergaon pune, IIT JEE Advanced Preparation Thergaon pune, JEE Advanced coaching classes in Thergaon pune, IIT JEE Classes in Thergaon pune, Best IIT JEE Classes in Thergaon pune, Top IIT JEE Classes in Thergaon pune, IIT JEE coaching Institute Thergaon pune"
        />
        <script type="application/ld+json">{`
{
"@context": "https://schema.org",
"@graph": [
{
"@type": "LocalBusiness",
"@id": "https://www.asquareclasses.com/iit-jee-coaching-institute-in-thergaon-pune#localbusiness",
"name": "ASQUARE Academy - IIT JEE Coaching Institute in Thergaon Pune",
"description": "ASQUARE Academy offers top IIT JEE coaching classes in Thergaon Pune with expert faculty, small batches, JEE Main & Advanced preparation, and regular mock tests.",
"url": "https://www.asquareclasses.com/iit-jee-coaching-institute-in-thergaon-pune",
"logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
"telephone": "9766118877",
"sameAs": [
"https://www.instagram.com/asquarepune",
"https://www.facebook.com/asquarepune/"
],
"address": {
"@type": "PostalAddress",
"addressLocality": "Thergaon",
"addressRegion": "Pune",
"addressCountry": "India"
}
},

{
"@type": "WebPage",
"@id": "https://www.asquareclasses.com/iit-jee-coaching-institute-in-thergaon-pune#webpage",
"url": "https://www.asquareclasses.com/iit-jee-coaching-institute-in-thergaon-pune",
"name": "IIT JEE Coaching Classes & Institute in Thergaon Pune",
"isPartOf": {
"@id": "https://www.asquareclasses.com/#website"
},
"primaryImageOfPage": {
"@type": "ImageObject",
"url": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png"
},
"description": "Best IIT JEE coaching classes and institute in Thergaon Pune for JEE Main & Advanced preparation with PCM subjects, mock tests and expert guidance."
},

{
"@type": "EducationalOrganization",
"@id": "https://www.asquareclasses.com/iit-jee-coaching-institute-in-thergaon-pune#eduorg",
"name": "ASQUARE Academy - IIT JEE Coaching Institute Thergaon",
"url": "https://www.asquareclasses.com/iit-jee-coaching-institute-in-thergaon-pune",
"logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
"sameAs": [
"https://www.instagram.com/asquarepune",
"https://www.facebook.com/asquarepune/"
]
},

{
"@type": "BreadcrumbList",
"@id": "https://www.asquareclasses.com/iit-jee-coaching-institute-in-thergaon-pune#breadcrumbs",
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
"item": "https://www.asquareclasses.com/iit-jee-coaching-pune"
},
{
"@type": "ListItem",
"position": 3,
"name": "IIT JEE Coaching Institute in Thergaon Pune"
}
]
},

{
"@type": "FAQPage",
"@id": "https://www.asquareclasses.com/iit-jee-coaching-institute-in-thergaon-pune#faq",
"mainEntity": [
{
"@type": "Question",
"name": "Who can join ASQUARE IIT JEE coaching classes in Thergaon Pune?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Students of Class XI, XII, and XII pass-outs preparing for JEE Main and Advanced can enroll."
}
},
{
"@type": "Question",
"name": "Which subjects are covered in the JEE program?",
"acceptedAnswer": {
"@type": "Answer",
"text": "The IIT JEE coaching program includes Physics, Chemistry, and Mathematics with concept-building and problem-solving practice."
}
},
{
"@type": "Question",
"name": "Do you conduct mock exams for JEE preparation?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Yes, weekly tests, chapter-wise quizzes, and full-length JEE mock exams are included."
}
},
{
"@type": "Question",
"name": "What course options are available for IIT JEE aspirants in Thergaon Pune?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Courses include 2-Year Integrated, 1-Year Program, Crash Courses, and Dropper Batches."
}
},
{
"@type": "Question",
"name": "What is the batch size in your IIT JEE classes?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Small batches are maintained to ensure individual attention and effective doubt-solving."
}
},
{
"@type": "Question",
"name": "Do parents receive performance updates?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Yes, parents receive updates through PTMs, performance reports, and detailed test analyses."
}
},
{
"@type": "Question",
"name": "Which areas does the Thergaon branch serve?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Students from Thergaon, Wakad, Kalewadi, Pimple Saudagar, Pimpri, and nearby PCMC areas can easily access this branch."
}
},
{
"@type": "Question",
"name": "Do you offer IIT JEE Advanced Preparation in Thergaon Pune?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Yes, Advanced-level modules, high-difficulty problem sets, and specialized test series are provided."
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
            {/* Left Side: Text */}
            <div className="col-12 col-lg-8 col-md-12 text-center text-md-start">
              <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
                Excel in JEE Main & Advanced with <span className="highlight-text text-warning">ASQUARE Institute Thergaon</span>
              </motion.h1>

              <motion.h2>Build a Strong Career with Premier JEE Coaching in Thergaon</motion.h2>

              <p className="lead d-none d-md-block">
                Looking for the best IIT JEE institute in Thergaon, Pune? At ASQUARE Academy, we specialize in building strong concepts, enhancing problem-solving speed, and providing exam-oriented training. Our programs help students achieve top ranks in IITs, NITs, IIITs, and leading engineering colleges.
              </p>

              <p className="lead d-block d-md-none">
                Looking for the best IIT JEE institute in Thergaon, Pune? At ASQUARE Academy, we specialize in building strong concepts, enhancing problem-solving speed, and providing exam-oriented training.
              </p>

              <a className="btn btn-warning btn-lg rounded-pill mt-3 shadow-lg">
                <Link to={'/'} className="nav-item nav-item-list text-warning">🚀 Enroll Now</Link>
              </a>
            </div>

            {/* Right Side: Transparent Image */}
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
            Why Choose <span className="text-primary">ASQUARE</span> as Your JEE Institute in Thergaon?
          </motion.h3>

          <div className="row g-4 justify-center" style={{ justifyContent: "center" }}>
            {whyChoose.map((item, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <motion.div whileHover={{ scale: 1.05 }} className="jee-feature-card shadow-lg rounded-4 p-4 h-100">
                  <item.Icon size={40} className="mb-3 text-warning" />
                  <h5 className="fw-bold mb-2">{item.title}</h5>
                  {item.desc && <p className="text-muted">{item.desc}</p>}
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
                About Our JEE Coaching Programs
              </motion.h4>

              <p className="lead text-secondary">
                The JEE exam demands precision, speed, and conceptual clarity. At our Thergaon branch, we combine structured lessons, practice-driven modules, and mock testing to ensure students excel in JEE Main & Advanced.
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
            Subjects covered<span className="highlight-text text-warning"> &nbsp;&&nbsp; </span> Course Duration & Batches
          </motion.h4>

          <div className="row g-4">
            <div className="col-lg-6">
              <h4 className="highlight-text text-warning fw-bold mb-4 text-centerr">Subjects We Train You In</h4>
              {subjects.map((sub, i) => (
                <div key={i} className="jee-subject-box mb-4 p-3 pb-4 pt-4 rounded-4 bg-white bg-opacity-10 backdrop-blur-md border border-light border-opacity-25">
                  <h5 className="fw-semibold">{sub.title}</h5>
                  <p className="small mb-0">{sub.desc}</p>
                </div>
              ))}
            </div>
            <div className="col-lg-6">
              <h4 className="highlight-text text-warning fw-bold mb-4 text-centerr">Course Duration & Batches</h4>
              {batches.map((b, i) => (
                <div key={i} className="jee-subject-box mb-3 p-3 rounded-4 bg-white bg-opacity-10 backdrop-blur-md border border-light border-opacity-25">
                  <h5 className="fw-semibold">{b.title}</h5>
                  {b.desc && <p className="small mb-0">{b.desc}</p>}
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
                Teaching Style at ASQUARE Thergaon
              </motion.h3>

              <div className="row g-4 justify-content-center">
                {[
                  "Daily topic-wise classes with assignments",
                  "One-to-one doubt-solving sessions",
                  "Weekly practice papers & mock exams",
                  "PTMs for parents with progress updates",
                ].map((step, i) => (
                  <div key={i} className="col-lg-3 col-6">
                    <motion.div whileHover={{ y: -5 }} className="method-card p-4 bg-white rounded-4 shadow-sm h-100 text-center">
                      <p className="text-muted small mb-0">{step}</p>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Highlights Section */}
      <section className="jee-highlights py-5 text-white">
        <div className="container text-center">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
            Key Benefits of Joining Our <span className="highlight-text text-warning">Thergaon</span> Branch
          </motion.h3>

          <div className="row justify-content-center g-4">
            {[
              "• Individual attention with limited batch strength",
              "• Latest JEE-oriented study material & question banks",
              "• Special workshops on exam strategy & time management",
              "• Trusted IIT-JEE coaching in Thergaon, Pune",
            ].map((text, i) => (
              <motion.div key={i} className="col-md-5 col-lg-4 col-6" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <div className="highlight-card shadow-lg rounded-4 p-4 bg-white bg-opacity-10 backdrop-blur-md border border-light border-opacity-25">
                  <div className="icon-circle mx-auto mb-3">
                    <h2>🎓</h2>
                  </div>
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
                Success & Results
              </motion.h3>
              <p className="lead text-light">
                ASQUARE students consistently secure seats in IITs, NITs, and top engineering institutes. With our focused training and systematic mentoring, the Thergaon branch delivers excellent results every year.
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
            Enroll at ASQUARE Academy Thergaon Today
          </motion.h3>

          <p className="lead mb-4">
            Step closer to your IIT dream with ASQUARE Academy, Thergaon, Pune. With expert faculty, structured programs, and consistent results, we are your reliable partner for JEE, CET & NEET preparation.
          </p>

          <p><MapPin className="text-warning" /> 📍 Ideal for students from Thergaon, Wakad, Kalewadi, Pimple Saudagar, Rahatni, and PCMC areas.</p>

          <a className="btn btn-lg btn-warning fw-bold mt-3 px-5 py-3 rounded-pill shadow-lg">
            <Link to={'/'} className="nav-item nav-item-list text-white">
              ⚡ Admissions Open – Join Today!
              <p className="text-warning">Limited seats available.</p>
            </Link>
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default IITJEEThergaon;
