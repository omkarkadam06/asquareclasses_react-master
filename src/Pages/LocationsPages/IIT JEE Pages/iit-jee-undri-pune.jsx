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

import sampleimg2 from '../../../Assets/SampleImages/MobBanners/MobBanner1.jpeg';
import sampleimg22 from '../../../Assets/SampleImages/MobBanners/MobBanner2.jpeg';
import sampleimg1 from '../../../Assets/SampleImages/Banners/Banners (3).jpeg';
import sampleimg11 from '../../../Assets/SampleImages/Banners/Banners (4).jpeg';
import sampleimg3 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (9).jpeg';
import sampleimg4 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (2).jpeg';
import sampleimg6 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (4).jpeg';

import Form from '../../../Components/Form2/Form2.jsx';

const Reviews = React.lazy(() => import("../../../Components/Reviews/Reviews.jsx"));

function IITJEEUndri() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const whyChoose = [
    { Icon: Users, title: "Expert Faculty Panel", desc: "Specialists in IIT-JEE, MHT-CET & NEET coaching." },
    { Icon: BookOpen, title: "Full PCM Coverage", desc: "Physics, Chemistry & Mathematics aligned with the latest JEE syllabus." },
    { Icon: Target, title: "Small Batch Strength", desc: "Better attention, doubt-solving & personalised guidance." },
    { Icon: BarChart, title: "Exam-Oriented Practice", desc: "Weekly assignments, chapter tests & full-length mock exams." },
    { Icon: Lightbulb, title: "Student Support & Counseling", desc: "Time management, study planning & motivational sessions." },
  ];

  const subjects = [
    { title: "Physics", desc: "Strong theoretical understanding with numerical problem-solving." },
    { title: "Chemistry", desc: "Thorough study of Physical, Organic & Inorganic Chemistry." },
    { title: "Mathematics", desc: "Intensive practice in Algebra, Trigonometry, Calculus, Geometry & Probability." },
  ];

  const batches = [
    { title: "2-Year Foundation Program (10th → 12th Moving Students)", desc: "XI + XII Boards + JEE integrated preparation." },
    { title: "1-Year Intensive Program (11th → 12th Moving Students)", desc: "XII Boards + JEE fast-track coaching." },
    { title: "Crash Course (2–3 Months)", desc: "Short-term revision & exam practice series." },
    { title: "Repeater/Dropper Batch (XII Pass-outs)", desc: "One-year exclusive JEE coaching program." },
  ];

  const faqs = [
    { q: "Q1: Who can join ASQUARE Academy Undri?", a: "Students of Class XI, XII, and XII pass-outs preparing for JEE Main & Advanced can join." },
    { q: "Q2: Which subjects are included?", a: "Physics, Chemistry & Mathematics (PCM)." },
    { q: "Q3: Do you conduct mock exams?", a: "Yes, weekly unit tests and full-length mock exams are part of the program." },
    { q: "Q4: What course options are available?", a: "2-Year, 1-Year, Crash Courses & Dropper Batches are available." },
    { q: "Q5: How many students per batch?", a: "We keep batch sizes small for personalized attention." },
    { q: "Q6: Do parents receive updates on progress?", a: "Yes, through PTMs and detailed reports." },
    { q: "Q7: Which areas does the Undri branch serve?", a: "Conveniently located for students from Undri, Kondhwa, Mohammed Wadi, NIBM, Wanwadi, and nearby Pune areas." },
  ];

  return (
    <>
      <Helmet>
        <title>IIT JEE Coaching Classes in Undri Pune | Best JEE Mains & Advanced Prep</title>
        <meta name="title" content="IIT JEE Coaching Classes in Undri Pune | Best JEE Mains & Advanced Prep" />
        <meta name="description" content="ASQUARE Academy offers top IIT JEE coaching classes in Undri Pune with expert faculty, small batches, mock tests & full JEE Main/Advanced preparation for XI, XII & droppers" />
        <meta name="keywords" content={`IIT JEE coaching classes in undri Pune,
Best IIT JEE Coaching in  undri Pune,
Top JEE Mains Coaching Classes undri Pune,
IIT JEE Advanced Preparation undri Pune,
JEE Advanced coaching classes in undri Pune,
IIT JEE Classes in undri Pune,
Best IIT JEE Classes in undri Pune,
Top IIT JEE Classes in undri Pune,
IIT JEE Institute coaching in undri Pune,
IIT JEE Institute classes in undri Pune,
`} />

        <script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@graph": [

    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-undri-pune#localbusiness",
      "name": "ASQUARE Academy - IIT JEE Coaching Undri Pune",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-undri-pune",
      "telephone": "9766118877",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Undri",
        "addressRegion": "Pune",
        "addressCountry": "India"
      },
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune"
      ],
      "description": "ASQUARE Academy provides top IIT JEE coaching classes in Undri Pune with expert faculty, small batches, mock tests, and complete JEE Main & Advanced preparation."
    },

    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-undri-pune#webpage",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-undri-pune",
      "name": "IIT JEE Coaching Classes in Undri Pune",
      "primaryImageOfPage": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "breadcrumb": {
        "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-undri-pune#breadcrumb"
      }
    },

    {
      "@type": "EducationalOrganization",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-undri-pune#education",
      "name": "ASQUARE Academy Undri",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-undri-pune",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "description": "Expert coaching for JEE Main & Advanced in Undri Pune with PCM subjects, mock exams, and personalized mentoring.",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "9766118877",
        "contactType": "customer service"
      }
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-undri-pune#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can join ASQUARE Academy Undri?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students of Class XI, XII, and XII pass-outs preparing for JEE Main & Advanced can join."
          }
        },
        {
          "@type": "Question",
          "name": "Which subjects are included?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Physics, Chemistry & Mathematics (PCM) are taught."
          }
        },
        {
          "@type": "Question",
          "name": "Do you conduct mock exams?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, weekly unit tests and full-length mock exams are part of the program."
          }
        },
        {
          "@type": "Question",
          "name": "What course options are available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "2-Year, 1-Year, Crash Courses & Dropper Batches are available."
          }
        },
        {
          "@type": "Question",
          "name": "How many students per batch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Batch sizes are kept small for personalized attention."
          }
        },
        {
          "@type": "Question",
          "name": "Do parents receive updates on progress?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, through PTMs and detailed progress reports."
          }
        },
        {
          "@type": "Question",
          "name": "Which areas does the Undri branch serve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It serves students from Undri, Kondhwa, Mohammed Wadi, NIBM, Wanwadi, and nearby Pune areas."
          }
        }
      ]
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-undri-pune#breadcrumb",
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
          "item": "https://www.asquareclasses.com/iit-jee-coaching"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "IIT JEE Coaching in Undri Pune",
          "item": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-undri-pune"
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
                Crack JEE Main & Advanced with <span className="highlight-text text-warning">ASQUARE Academy Undri</span>
              </motion.h1>

              <motion.h2>Dedicated Coaching for Engineering Aspirants in Undri</motion.h2>

              <p className="lead d-none d-md-block">
                Looking for IIT-JEE coaching classes in Undri, Pune? At <b className="bld">ASQUARE Academy</b>, we provide concept-driven learning, structured study plans, and personalized mentorship to help students excel in JEE Main & Advanced. Our Undri branch prepares aspirants for IITs, NITs, IIITs, and India’s premier engineering institutions with focused teaching, practice-oriented sessions, and exam-smart strategies.
              </p>

              <p className="lead d-block d-md-none">
                Looking for IIT-JEE coaching classes in Undri, Pune? At <b className="bld">ASQUARE Academy</b>, we provide concept-driven learning, structured study plans, and personalized mentorship to help students excel in JEE Main & Advanced.
              </p>

              <a className="btn btn-warning btn-lg rounded-pill mt-3 shadow-lg">
                <Link to={'/'} className="nav-item nav-item-list text-warning">🚀 Enroll Now</Link>
              </a>
            </div>

            {/* Right Side: Image */}
            <div className="col-12 col-lg-4 col-md-12 mt-5 mt-md-0 text-center">
              <img src={sampleimg3} alt="ASQUARE Academy Undri" className="img-fluid mx-auto fade-in imgsiz" style={{ objectFit: "contain", opacity: 0.95, borderRadius: "10px" }} />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Why Choose */}
      <section className="jee-why py-5">
        <div className="container">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">
            Why Enroll at <span className="text-primary">ASQUARE Academy Undri?</span>
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
                Programs Tailored for JEE Preparation
              </motion.h4>

              <p className="lead text-secondary">
                The Joint Entrance Examination (JEE) requires conceptual clarity, speed, and accuracy. At ASQUARE Academy Undri, our courses are designed to strengthen subject fundamentals, enhance problem-solving skills, and improve exam confidence for both JEE Main & Advanced.
              </p>
            </div>

            <div className="col-lg-4 text-center order-1">
              <motion.img whileHover={{ scale: 1.03 }} src={sampleimg4} alt="JEE Coaching Undri" className="img-fluid rounded-4 shadow-lg mx-auto d-block" style={{ width: "85%" }} />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Subjects + Batches Section */}
      <section className="jee-gradient-section py-5 text-white">
        <div className="container">
          <motion.h4 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">
            Subjects We Cover &nbsp; &&nbsp; Course Duration & Batch Options
          </motion.h4>
          <br />

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
                Our <span className="text-primary">Teaching Approach</span>
              </motion.h3>

              <div className="row g-4 justify-content-center">
                {[
                  "Interactive classroom lectures with structured assignments",
                  "One-to-one doubt-solving support",
                  "Weekly tests & full-length JEE mock exams",
                  "Regular parent–teacher meetings for progress evaluation",
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
            Key Features of <span className="highlight-text text-warning">Undri Branch</span>
          </motion.h3>

          <div className="row justify-content-center g-4">
            {[
              "Small batch sizes for effective mentoring",
              "Updated IIT-JEE study notes, test papers & question banks",
              "Special workshops on exam strategies, problem-solving hacks & time management",
              "Detailed progress tracking with parent updates",
              "Recognized as a leading JEE coaching institute in Undri, Pune",
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

      {/* Results Section */}
      <section className="jee-results py-5 text-white">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-8 text-center text-lg-start">
              <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
                Proven <span className="highlight-text text-warning">Success</span>
              </motion.h3>
              <p className="lead text-light">
                ASQUARE Academy has helped many students secure top scores in JEE Main & Advanced. The Undri branch continues this success by offering dedicated coaching, expert mentorship, and structured preparation methods.
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
              <FAQAccordion faqs={faqs.slice(0, Math.ceil(faqs.length / 2))} accordionId="undriFaqLeft" />
            </div>
            <div className="col-12 col-md-6">
              <FAQAccordion faqs={faqs.slice(Math.ceil(faqs.length / 2))} accordionId="undriFaqRight" />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Final CTA */}
      <section id="enroll" className="jee-enroll-section py-5 text-center text-white">
        <div className="container">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
            Join ASQUARE Academy <span className="highlight-text text-warning">Undri</span> Today
          </motion.h3>

          <p className="lead mb-4">
            Start your journey toward IIT success with ASQUARE Academy’s IIT-JEE coaching in Undri, Pune. With skilled faculty, modern resources, and proven results, we are your trusted choice for JEE, CET & NEET coaching.
          </p>

          <p><MapPin className="text-warning" /> <b className="bld">Serving students from Undri, Kondhwa, Mohammed Wadi, NIBM, Wanwadi, and nearby Pune localities.</b></p>

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

export default IITJEEUndri;
