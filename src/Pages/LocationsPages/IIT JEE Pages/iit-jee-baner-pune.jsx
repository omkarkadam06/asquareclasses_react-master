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
import sampleimg11 from '../../../Assets/SampleImages/Banners/Banners (3).jpeg';
import sampleimg2 from '../../../Assets/SampleImages/MobBanners/MobBanner7.jpeg';
import sampleimg22 from'../../../Assets/SampleImages/MobBanners/MobBanner3.jpeg';

import sampleimg3 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (9).jpeg';
import sampleimg4 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (2).jpeg';
import sampleimg6 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (4).jpeg';
import Form from '../../../Components/Form2/Form2.jsx';

const Reviews = React.lazy(() => import("../../../Components/Reviews/Reviews.jsx"));

function IITJEEBaner() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const whyChoose = [
    { Icon: Users, title: "Expert Faculty", desc: "Specialists in IIT-JEE, CET & NEET coaching." },
    { Icon: BookOpen, title: "Full PCM Curriculum", desc: "Physics, Chemistry & Mathematics designed as per latest JEE patterns." },
    { Icon: Target, title: "Individual Mentoring", desc: "Small batches for better attention and guidance." },
    { Icon: BarChart, title: "Continuous Evaluation", desc: "Weekly unit tests, assignments & full mock exams." },
    { Icon: Lightbulb, title: "Student Support", desc: "Motivation, study planning & exam strategy workshops." },
  ];

  const subjects = [
    { title: "Physics", desc: "Conceptual clarity with numerical applications." },
    { title: "Chemistry", desc: "Detailed study of Physical, Organic & Inorganic Chemistry." },
    { title: "Mathematics", desc: "Rigorous practice in Algebra, Geometry, Trigonometry, Calculus & Probability." },
  ];

  const batches = [
    { title: "2-Year Foundation Program (10th → 12th Moving Students)", desc: "XI + XII Boards + JEE preparation." },
    { title: "1-Year Intensive Course (11th → 12th Moving Students)", desc: "Comprehensive XII + JEE training." },
    { title: "Crash Course (2–3 Months)", desc: "Fast-paced revision with mock exams." },
    { title: "Dropper/Repeater Batch (XII Pass-outs)", desc: "One-year exclusive JEE coaching for repeaters." },
  ];

  const faqs = [
    { q: "Q1: Who can join ASQUARE Academy Baner?", a: "Students of Class XI, XII, and XII pass-outs preparing for JEE Main & Advanced." },
    { q: "Q2: What subjects are taught?", a: "Physics, Chemistry, and Mathematics (PCM)." },
    { q: "Q3: Are mock exams part of the program?", a: "Yes, weekly practice tests and full-length JEE mock exams are included." },
    { q: "Q4: What courses are available?", a: "2-Year, 1-Year, Crash Courses & Dropper Batches." },
    { q: "Q5: How many students are in a batch?", a: "We maintain small batch sizes for personalized attention." },
    { q: "Q6: Do parents receive updates?", a: "Yes, through progress reports and parent–teacher meetings." },
    { q: "Q7: Which areas does the Baner branch serve?", a: "Conveniently located for students from Baner, Balewadi, Aundh, Pashan, Wakad, Hinjewadi, and nearby Pune areas." },
  ];

  return (
    <>
      <Helmet>
        <title>Best IIT JEE Coaching Classes in Baner Pune | ASQUARE Academy</title>
        <meta name="title" content="Best IIT JEE Coaching Classes in Baner Pune | ASQUARE Academy" />
        <meta name="description" content="Top IIT JEE coaching in Baner Pune with expert PCM faculty, small batches, mock tests, and structured programs for JEE Main & Advanced aspirants at ASQUARE Academy." />
        <meta name="keywords" content={`IIT JEE coaching classes in baner Pune,
Best IIT JEE Coaching in baner Pune,
Top JEE Mains Coaching Classes baner Pune,
IIT JEE Advanced Preparation baner Pune,
JEE Advanced coaching classes in baner Pune,
IIT JEE Classes in baner Pune,
Best IIT JEE Classes in baner Pune,
Top IIT JEE Classes in baner Pune,
IIT JEE Institute coaching in baner Pune,
IIT JEE Institute classes in baner Pune,
`} />

        <script type="application/ld+json">{`
{
"@context": "https://schema.org",
"@graph": [
{
"@type": "LocalBusiness",
"@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-baner-pune#localbusiness",
"name": "ASQUARE Academy - IIT JEE Coaching in Baner Pune",
"url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-baner-pune",
"logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
"image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
"telephone": "+91-9766118877",
"address": {
"@type": "PostalAddress",
"streetAddress": "Baner",
"addressLocality": "Pune",
"addressRegion": "Maharashtra",
"postalCode": "411045",
"addressCountry": "IN"
},
"sameAs": [
"https://www.instagram.com/asquarepune",
"https://www.facebook.com/asquarepune/"
],
"description": "Best IIT JEE Coaching Classes in Baner Pune offering expert PCM training, mock tests, and structured programs for JEE Main & Advanced."
},

{
"@type": "WebPage",
"@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-baner-pune#webpage",
"url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-baner-pune",
"name": "Best IIT JEE Coaching Classes in Baner Pune | ASQUARE Academy",
"description": "Top IIT JEE Classes in Baner Pune with expert PCM faculty and result-driven JEE Main & Advanced coaching.",
"breadcrumb": {
  "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-baner-pune#breadcrumb"
}
},

{
"@type": "EducationalOrganization",
"@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-baner-pune#educational",
"name": "ASQUARE Academy Baner",
"url": "https://www.asquareclasses.com/",
"logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
"sameAs": [
"https://www.instagram.com/asquarepune",
"https://www.facebook.com/asquarepune/"
],
"description": "Leading IIT JEE coaching centre in Baner Pune for JEE Main & Advanced aspirants."
},

{
"@type": "BreadcrumbList",
"@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-baner-pune#breadcrumb",
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
"item": "https://www.asquareclasses.com/"
},
{
"@type": "ListItem",
"position": 3,
"name": "Baner Pune",
"item": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-baner-pune"
}
]
},

{
"@type": "FAQPage",
"@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-baner-pune#faq",
"mainEntity": [
{
"@type": "Question",
"name": "Who can join ASQUARE Academy Baner?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Students of Class XI, XII, and XII pass-outs preparing for JEE Main & Advanced can enroll."
}
},
{
"@type": "Question",
"name": "What subjects are taught?",
"acceptedAnswer": {
"@type": "Answer",
"text": "We teach Physics, Chemistry, and Mathematics (PCM) aligned with the JEE syllabus."
}
},
{
"@type": "Question",
"name": "Are mock exams part of the program?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Yes, weekly practice tests and full-length JEE mock exams are included in the curriculum."
}
},
{
"@type": "Question",
"name": "What courses are available?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Programs offered include 2-Year Courses, 1-Year Courses, Crash Courses, and Dropper Batches."
}
},
{
"@type": "Question",
"name": "How many students are in a batch?",
"acceptedAnswer": {
"@type": "Answer",
"text": "We maintain small batch sizes to ensure personal attention and strong concept-building."
}
},
{
"@type": "Question",
"name": "Do parents receive updates?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Yes, parents get updates through progress reports and periodic parent–teacher meetings."
}
},
{
"@type": "Question",
"name": "Which areas does the Baner branch serve?",
"acceptedAnswer": {
"@type": "Answer",
"text": "The Baner center serves students from Baner, Balewadi, Aundh, Pashan, Wakad, Hinjewadi, and nearby Pune locations."
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
                Achieve IIT-JEE Excellence with <span className="highlight-text text-warning">ASQUARE Academy Baner</span>
              </motion.h1>
              <motion.h2>Advanced Coaching for Engineering Aspirants in Baner</motion.h2>

              <p className="lead d-none d-md-block">
                Looking for <b className="bld">IIT-JEE coaching classes in Baner, Pune?</b> At <b className="bld">ASQUARE Academy,</b> we provide concept-driven teaching, structured study material, and personalized mentorship to help students succeed in JEE Main & Advanced. Our Baner branch focuses preparing aspirants for IITs, NITs, IIITs, and India’s leading engineering colleges through strategic learning, doubt-clearing sessions, and rigorous practice modules.
              </p>

              <p className="lead d-block d-md-none">
                           Looking for <b className="bld">IIT-JEE coaching classes in Baner, Pune?</b> At <b className="bld">ASQUARE Academy,</b> we provide concept-driven teaching, structured study material, and personalized mentorship to help students succeed in JEE Main & Advanced. Our Baner branch focuses preparing aspirants for IITs, NITs, IIITs, and India’s leading engineering colleges through strategic learning, doubt-clearing sessions, and rigorous practice modules.
              </p>

              <a className="btn btn-warning btn-lg rounded-pill mt-3 shadow-lg">
                <Link to={'/'} className="nav-item nav-item-list text-warning">
                  🚀 Enroll Now
                </Link>
              </a>
            </div>

            {/* Right Side: Transparent Image */}
            <div className="col-12 col-lg-4 col-md-12 mt-5 mt-md-0 text-center">
              <img
                src={sampleimg3}
                alt="ASQUARE Academy"
                className="img-fluid mx-auto fade-in imgsiz"
                style={{ objectFit: "contain", opacity: 0.95, borderRadius: "10px" }}
              />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Why Choose */}
      <section className="jee-why py-5 ">
        <div className="container">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">
            Why Choose <span className="text-primary">ASQUARE Academy</span> in Baner?
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
                Our <span className="text-primary">IIT-JEE</span> Programs
              </motion.h4>

              <p className="lead text-secondary">
                The <b className="bld">Joint Entrance Examination (JEE)</b> demands clarity, consistency, and smart preparation. At ASQUARE Academy Baner, our coaching programs are designed to strengthen concepts, enhance problem-solving skills, and boost exam readiness for both JEE Main & Advanced.
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
            Subjects We Teach <span className="highlight-text text-warning">&nbsp;&&nbsp;</span> Batch Options
          </motion.h4>

          <div className="row g-4">
            <div className="col-lg-6">
              <h4 className="highlight-text text-warning fw-bold mb-4 text-centerr">Subjects Covered</h4>
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
                {["Learn", "Practice", "Assess", "Revise"].map((step, i) => (
                  <div key={i} className="col-lg-3 col-6">
                    <motion.div whileHover={{ y: -5 }} className="method-card p-4 bg-white rounded-4 shadow-sm h-100 text-center">
                      <p className="text-muted small mb-0">
                        {step === "Learn"
                          ? "• Daily interactive lectures with practice-based assignments"
                          : step === "Practice"
                            ? "• One-to-one doubt-clearing sessions"
                            : step === "Assess"
                              ? "• Weekly chapter tests & full-length mock exams"
                              : "• Parent–teacher meetings with progress updates"}
                      </p>
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
            Key Highlights of <span className="highlight-text text-warning">&nbsp;Baner&nbsp;</span> Branch
          </motion.h3>

          <div className="row justify-content-center g-4">
            {[
              "Small batch size for personalized focus",
              "Updated IIT-JEE study notes, question banks & practice sets",
              "Special workshops on time management, exam strategies & problem-solving skills",
              "Continuous performance monitoring with parent updates",
              "Recognized as a top JEE coaching institute in Baner, Pune",
            ].map((text, i) => (
              <motion.div key={i} className="col-md-5 col-lg-4 col-6" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <div className="highlight-card shadow-lg rounded-4 p-4 bg-white bg-opacity-10 backdrop-blur-md border border-light border-opacity-25">
                  <div className="icon-circle mx-auto mb-3"><h2>🎓</h2></div>
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
             Results That <span className="highlight-text text-warning">&nbsp;Inspire Confidence&nbsp;</span>
              </motion.h3>
              <p className="lead text-light">
                ASQUARE Academy has a proven track record of producing IIT-JEE toppers and top-rank achievers. The Baner branch continues this success with student-focused programs, expert mentoring, and consistent results.
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
            Join ASQUARE Academy <span className="highlight-text text-warning">&nbsp;Baner Today&nbsp;</span>
          </motion.h3>
          <p className="lead mb-4">
            Prepare for your engineering dream with ASQUARE Academy’s IIT-JEE coaching in Baner, Pune. With experienced faculty, structured study material, and proven success, we are your trusted choice for JEE, CET & NEET coaching.
          </p>
          <p><MapPin className="text-warning" /> Serving students from <b className="bld">Baner, Balewadi, Aundh, Pashan, Wakad, Hinjewadi, and nearby areas of Pune.</b></p>
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

export default IITJEEBaner;
