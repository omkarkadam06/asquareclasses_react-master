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

// import sampleimg2 from '../../../Assets/SampleImages/sampleimg2.jpeg';
import sampleimg2 from '../../../Assets/SampleImages/MobBanners/MobBanner2.jpeg';
import sampleimg22 from'../../../Assets/SampleImages/MobBanners/MobBanner3.jpeg';
import sampleimg1 from '../../../Assets/SampleImages/Banners/Banners (7).jpeg';
import sampleimg11 from '../../../Assets/SampleImages/Banners/Banners (8).jpeg';

import sampleimg3 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (9).jpeg';
import sampleimg4 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (2).jpeg';
import sampleimg6 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (4).jpeg';

import Form from '../../../Components/Form2/Form2.jsx';

const Reviews = React.lazy(() => import("../../../Components/Reviews/Reviews.jsx"));

function IITJEEKalewadi() {

  const canonicalUrl = window.location.origin + window.location.pathname;
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // --------------------------
  // 💛 WHY CHOOSE (from Word File)
  // --------------------------
  const whyChoose = [
    { Icon: Users, title: "Expert Faculty", desc: "Skilled teachers in IIT-JEE, CET & NEET coaching." },
    { Icon: BookOpen, title: "Comprehensive PCM Coverage", desc: "Physics, Chemistry & Mathematics as per latest exam guidelines." },
    { Icon: Target, title: "Focused Mentorship", desc: "Small batch sizes at Kalewadi branch for personalized attention." },
    { Icon: BarChart, title: "Rigorous Test Series", desc: "Weekly unit tests, mock exams & performance analysis." },
    { Icon: Lightbulb, title: "Career Guidance & Motivation", desc: "Counseling sessions & exam strategy workshops." },
  ];

  // --------------------------
  // 💛 SUBJECTS (from Word File)
  // --------------------------
  const subjects = [
    { title: "Physics", desc: "Strong fundamentals with application-based problem-solving" },
    { title: "Chemistry", desc: "Detailed study of Physical, Organic & Inorganic Chemistry" },
    { title: "Mathematics", desc: "Advanced practice in Algebra, Geometry, Calculus, Probability & Trigonometry" },
  ];

  // --------------------------
  // 💛 BATCHES (from Word File)
  // --------------------------
  const batches = [
    { title: "2-Year Foundation Program (10th → 12th Moving Students)", desc: "Board + JEE integrated course." },
    { title: "1-Year Advanced Program (11th → 12th Moving Students)", desc: "Intensive XII + JEE preparation." },
    { title: "Crash Course (2–3 Months)", desc: "Fast-paced revision & test-based learning." },
    { title: "Dropper/Repeater Batch (XII Pass-outs)", desc: "One-year full-time JEE coaching for repeaters." },
  ];

  // --------------------------
  // 💛 FAQS (from Word File)
  // --------------------------
  const faqs = [
    { q: "Q1: Who can join ASQUARE Academy Kalewadi?", a: "Students of Class XI, XII, and XII pass-outs preparing for IIT JEE coaching classes in Kalewadi, including JEE Main & Advanced aspirants." },
    { q: "Q2: Which subjects are covered?", a: "We teach Physics, Chemistry, and Mathematics (PCM) as part of structured IIT JEE Advanced preparation in Kalewadi." },
    { q: "Q3: Are mock exams included in the program?", a: "Yes, weekly unit tests and full-length JEE mock exams are included, supporting the efficiency of the Top JEE Mains Coaching Classes in Kalewadi." },
    { q: "Q4: What courses are offered at ASQUARE Academy?", a: "We provide 2-Year, 1-Year, Crash Courses, and Dropper Batches—ideal for students seeking the Best IIT JEE Coaching in Kalewadi." },
    { q: "Q5: How many students are there per batch?", a: "We maintain small, focused batches to enhance learning outcomes at our Top IIT JEE Classes in Kalewadi." },
    { q: "Q6: Do parents get regular progress updates?", a: "Yes, parents receive detailed performance reports, attendance updates, and PTMs for better tracking and support." },
    { q: "Q7: Which areas does the Kalewadi branch serve?", a: "The center is easily reachable from Kalewadi, Rahatani, Wakad, Thergaon, Pimpri, and nearby PCMC regions—making it a preferred choice for JEE Advanced coaching classes in Kalewadi." },
    { q: "Q8: Why choose ASQUARE Academy for IIT JEE preparation?", a: "Expert faculty, planned study modules, doubt-solving sessions, and result-driven training rank us among the Best IIT JEE Classes in Kalewadi and Top IIT JEE Classes in Kalewadi." },
  ];

  return (
    <>
      <Helmet>
        <title>Best IIT JEE Coaching Classes in Kalewadi | JEE Main & Advanced Institute</title>

        <meta
          name="title"
          content="Best IIT JEE Coaching Classes in Kalewadi | JEE Main & Advanced Institute"
        />
        <meta
          name="description"
          content="Achieve your JEE goals with the Best IIT JEE Coaching in Kalewadi offering expert PCM classes, mock tests, structured JEE Main & Advanced preparation & focused batches."
        />

        <meta
          name="keywords"
          content="
IIT JEE coaching classes in kalewadi, 
Best IIT JEE Coaching in kalewadi,
Top JEE Mains Coaching Classes kalewadi,
IIT JEE Advanced Preparation kalewadi,
JEE Advanced coaching classes in kalewadi,
IIT JEE Classes in kalewadi,
Best IIT JEE Classes in kalewadi,
Top IIT JEE Classes in kalewadi,
"
        />

        {/* SCHEMA FROM WORD FILE */}
        <script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-kalewadi-pune#localbusiness",
      "name": "ASQUARE Academy Kalewadi - IIT JEE Coaching",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-kalewadi-pune",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "telephone": "9766118877",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Kalewadi, Pune",
        "addressLocality": "Kalewadi",
        "addressRegion": "Maharashtra",
        "postalCode": "411017",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune"
      ],
      "description": "Best IIT JEE Coaching Classes in Kalewadi providing JEE Main & Advanced preparation with expert faculty, PCM coaching, mock exams and focused study plans."
    },

    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-kalewadi-pune#webpage",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-kalewadi-pune",
      "name": "IIT JEE Coaching Classes in Kalewadi",
      "description": "Top IIT JEE Coaching in Kalewadi with complete PCM classes, mock tests, doubt-solving sessions, small batches and structured JEE Main & Advanced preparation."
    },

    {
      "@type": "EducationalOrganization",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-kalewadi-pune#educational",
      "name": "ASQUARE Academy Kalewadi",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-kalewadi-pune",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "description": "Best IIT JEE Classes in Kalewadi offering Physics, Chemistry & Mathematics coaching with mock tests and expert guidance for JEE Main & Advanced aspirants.",
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune"
      ]
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-kalewadi-pune#breadcrumb",
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
          "name": "IIT JEE Coaching Kalewadi",
          "item": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-kalewadi-pune"
        }
      ]
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-kalewadi-pune#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can join ASQUARE Academy Kalewadi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students of Class XI, XII, and XII pass-outs preparing for IIT JEE coaching classes in Kalewadi, including JEE Main & Advanced aspirants."
          }
        },
        {
          "@type": "Question",
          "name": "Which subjects are covered?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We teach Physics, Chemistry, and Mathematics (PCM) as part of structured IIT JEE Advanced preparation in Kalewadi."
          }
        },
        {
          "@type": "Question",
          "name": "Are mock exams included in the program?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, weekly unit tests and full-length JEE mock exams are included, supporting the efficiency of the Top JEE Mains Coaching Classes in Kalewadi."
          }
        },
        {
          "@type": "Question",
          "name": "What courses are offered at ASQUARE Academy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We provide 2-Year, 1-Year, Crash Courses, and Dropper Batches—ideal for students seeking the Best IIT JEE Coaching in Kalewadi."
          }
        },
        {
          "@type": "Question",
          "name": "How many students are there per batch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We maintain small, focused batches to enhance learning outcomes at our Top IIT JEE Classes in Kalewadi."
          }
        },
        {
          "@type": "Question",
          "name": "Do parents get regular progress updates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, parents receive detailed performance reports, attendance updates, and PTMs for better tracking and support."
          }
        },
        {
          "@type": "Question",
          "name": "Which areas does the Kalewadi branch serve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The center is reachable from Kalewadi, Rahatani, Wakad, Thergaon, Pimpri, and nearby PCMC regions—making it a preferred choice for JEE Advanced coaching classes in Kalewadi."
          }
        },
        {
          "@type": "Question",
          "name": "Why choose ASQUARE Academy for IIT JEE preparation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Expert faculty, structured modules, doubt-solving sessions, and result-oriented training make us one of the Best IIT JEE Classes in Kalewadi."
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

      {/* -------------------------- */}
      {/* FULL-WIDTH SLIDER */}
      {/* -------------------------- */}
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
              {[sampleimg2, sampleimg2].map((img, i) => (
                <div key={i} className={`carousel-item ${i === 0 ? "active" : ""}`}
                  style={{
                    height: "400px",
                    backgroundImage: `url(${img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}>
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

        {/* FORM */}
        <div className="jee-slider-form-box">
          <div className="jee-enquiry-form rounded-4">
            <MobileForm />
            <Form />
          </div>
        </div>
      </section>

      <hr />

      {/* -------------------------- */}
      {/* HERO SECTION */}
      {/* -------------------------- */}
      <section className="jee-hero-section text-white d-flex align-items-center bg-transparent">
        <div className="container py-5">
          <div className="row align-items-center">

            {/* LEFT CONTENT */}
            <div className="col-12 col-lg-8 text-center text-md-start">

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="fw-bold display-6 mb-3"
              >
                Crack JEE Main & Advanced with{" "}
                <span className="highlight-text text-warning">ASQUARE Academy</span>{" "}
                Kalewadi
              </motion.h1>

              <motion.h2 className="mb-3">
                Specialized Coaching for Engineering Aspirants in Kalewadi
              </motion.h2>

              <p className="lead d-none d-md-block">
                Looking for <b>IIT-JEE coaching classes in Kalewadi, Pune?</b> At <b>ASQUARE Academy</b>,
                we provide structured learning, concept-based teaching, and exam-focused training to
                help students achieve their career goals. Our Kalewadi branch prepares aspirants to
                secure admission in <b>IITs, NITs, IIITs</b> and India’s top engineering colleges.
              </p>

              <p className="lead d-block d-md-none">
                Looking for <b>IIT-JEE coaching classes in Kalewadi, Pune?</b> At <b>ASQUARE Academy</b>,
                we provide structured learning, concept-based teaching, and exam-focused training.
              </p>

              <a className="btn btn-warning btn-lg rounded-pill mt-3 shadow-lg">
                <Link to={'/'} className="nav-item nav-item-list text-warning">
                  🚀 Enroll Now
                </Link>
              </a>
            </div>

            {/* RIGHT IMAGE */}
            <div className="col-12 col-lg-4 text-center mt-4 mt-lg-0">
              <img
                src={sampleimg3}
                alt="ASQUARE Academy Kalewadi"
                className="img-fluid mx-auto fade-in imgsiz"
                style={{ objectFit: "contain", opacity: 0.95, borderRadius: "10px" }}
              />
            </div>

          </div>
        </div>
      </section>

      <hr />

      {/* -------------------------- */}
      {/* WHY CHOOSE ASQUARE KALEWADI */}
      {/* -------------------------- */}
      <section className="jee-why py-5">
        <div className="container">

          <motion.h3
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="fw-bold display-6 mb-3 text-center"
          >
            Why Choose{" "}
            <span className="highlight-text text-primary">ASQUARE Academy</span> in Kalewadi?
          </motion.h3>

          <div className="row g-4 justify-center" style={{ justifyContent: "center" }}>
            {whyChoose.map((item, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="jee-feature-card shadow-lg rounded-4 p-4 h-100"
                >
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

      {/* -------------------------- */}
      {/* PROGRAM DESCRIPTION */}
      {/* -------------------------- */}
      <section className="jee-programs py-5 bg-light">
        <div className="container">
          <div className="row align-items-center g-5">

            {/* LEFT TEXT */}
            <div className="col-lg-8 text-center text-lg-start order-2">
              <motion.h4
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="fw-bold display-6 mb-3"
              >
                Our <span className="highlight-text text-primary">IIT-JEE</span> Coaching Programs
              </motion.h4>

              <p className="lead text-secondary">
                The Joint Entrance Examination (JEE) is one of the toughest engineering entrance exams.
                At ASQUARE Academy Kalewadi, our courses emphasize <b>clarity of concepts</b>,
                <b> speed and accuracy</b>, and <b>smart exam strategies</b> to prepare students for both
                <b> JEE Main & Advanced.</b>
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="col-lg-4 text-center order-1">
              <motion.img
                whileHover={{ scale: 1.03 }}
                src={sampleimg4}
                alt="JEE Coaching Kalewadi"
                className="img-fluid rounded-4 shadow-lg mx-auto d-block"
                style={{ width: "85%" }}
              />
            </div>

          </div>
        </div>
      </section>

      <hr />

      {/* -------------------------- */}
      {/* SUBJECTS & BATCHES */}
      {/* -------------------------- */}
      <section className="jee-gradient-section py-5 text-white">
        <div className="container">

          <motion.h4
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="fw-bold display-6 mb-3 text-center"
          >
            Subjects We Teach
            <span className="highlight-text text-warning">&nbsp;&&nbsp;</span>
            Batch Options
          </motion.h4>

          <br />

          <div className="row g-4">

            {/* SUBJECTS */}
            <div className="col-lg-6">
              <h4 className="highlight-text text-warning fw-bold mb-4 text-centerr">
                Subjects We Teach
              </h4>

              {subjects.map((sub, i) => (
                <div
                  key={i}
                  className="jee-subject-box mb-4 p-3 pb-4 pt-4 rounded-4 
                             bg-white bg-opacity-10 backdrop-blur-md border border-light border-opacity-25"
                >
                  <h5 className="fw-semibold">{sub.title}</h5>
                  <p className="small mb-0">{sub.desc}</p>
                </div>
              ))}
            </div>

            {/* BATCHES */}
            <div className="col-lg-6">
              <h4 className="highlight-text text-warning fw-bold mb-4 text-centerr">
                Course Duration & Batch Options
              </h4>

              {batches.map((b, i) => (
                <div
                  key={i}
                  className="jee-subject-box mb-3 p-3 rounded-4 
                             bg-white bg-opacity-10 backdrop-blur-md border border-light border-opacity-25"
                >
                  <h5 className="fw-semibold">{b.title}</h5>
                  <p className="small mb-0">{b.desc}</p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      <hr />

      {/* -------------------------- */}
      {/* TEACHING METHODOLOGY */}
      {/* -------------------------- */}
      <section className="jee-method py-5 bg-light">
        <div className="container">
          <div className="row align-items-center g-4">

            {/* TEXT BLOCK */}
            <div className="col-lg-12 text-center text-lg-start">
              <motion.h3
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="fw-bold display-6 mb-3 text-center"
              >
                Teaching <span className="highlight-text text-primary">Methodology</span>
              </motion.h3>

              <div className="row g-4 justify-content-center">

                {["Learn", "Practice", "Assess", "Revise"].map((step, i) => (
                  <div key={i} className="col-lg-3 col-6">
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="method-card p-4 bg-white rounded-4 shadow-sm h-100 text-center"
                    >
                      <p className="text-muted small mb-0">
                        {step === "Learn"
                          ? "Daily lectures with assignments for practice"
                          : step === "Practice"
                          ? "Individual doubt-solving sessions"
                          : step === "Assess"
                          ? "Weekly unit tests & mock exams"
                          : "Parent–teacher meetings with performance tracking"}
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

      {/* -------------------------- */}
      {/* HIGHLIGHTS SECTION */}
      {/* -------------------------- */}
      <section className="jee-highlights py-5 text-white">
        <div className="container text-center">

          <motion.h3
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="fw-bold display-6 mb-3"
          >
            Key Highlights of{" "}
            <span className="highlight-text text-warning">Kalewadi</span> Branch
          </motion.h3>

          <div className="row justify-content-center g-4">

            {[
              "Small batch strength for personalized mentoring",
              "Updated IIT-JEE notes, study material & question banks",
              "Workshops on time management, problem-solving & exam hacks",
              "Regular student progress reports shared with parents",
              "Recognized as a leading JEE coaching institute in Kalewadi, Pune",
            ].map((text, i) => {
              const highlightedText = text.includes("leading JEE coaching institute in Kalewadi, Pune")
                ? text.replace(
                    "leading JEE coaching institute in Kalewadi, Pune",
                    '<b class="bld">leading JEE coaching institute in Kalewadi, Pune</b>'
                  )
                : text;

              return (
                <motion.div
                  key={i}
                  className="col-md-5 col-lg-4 col-6"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="highlight-card shadow-lg rounded-4 p-4 
                                  bg-white bg-opacity-10 backdrop-blur-md 
                                  border border-light border-opacity-25">
                    <div className="icon-circle mx-auto mb-3">
                      <h2>🎓</h2>
                    </div>

                    <p
                      className="fw-semibold text-light"
                      dangerouslySetInnerHTML={{ __html: highlightedText }}
                    ></p>
                  </div>
                </motion.div>
              );
            })}

          </div>
        </div>
      </section>

      <hr />

      {/* -------------------------- */}
      {/* RESULTS SECTION */}
      {/* -------------------------- */}
      <section className="jee-results py-5 text-white">
        <div className="container">
          <div className="row align-items-center g-5">

            {/* TEXT */}
            <div className="col-lg-8 text-center text-lg-start">
              <motion.h3
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="fw-bold display-6 mb-3"
              >
                Proven Track{" "}
                <span className="highlight-text text-warning">Record</span>
              </motion.h3>

              <p className="lead text-light">
                ASQUARE Academy has consistently produced <b>IIT-JEE toppers and engineering achievers.</b>
                The <b>Kalewadi branch</b> adds to this legacy by offering quality teaching, structured learning,
                and results-driven preparation.
              </p>
            </div>

            {/* IMAGE */}
            <div className="col-lg-4 text-center">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={sampleimg6}
                alt="Success Stories Kalewadi"
                className="img-fluid rounded-4 shadow-lg mx-auto d-block"
                style={{ width: "80%" }}
              />
            </div>

          </div>
        </div>
      </section>

      <hr />

      {/* -------------------------- */}
      {/* FAQ SECTION */}
      {/* -------------------------- */}
      <section className="jee-faq py-5">
        <div className="container">

          {/* Heading */}
          <div className="text-center mb-5">
            <div className="d-inline-block bg-primary bg-opacity-10 
                            text-primary fw-bold rounded-pill px-3 py-1 mb-3">
              <BadgeQuestionMark /> FAQs
            </div>

            <motion.h3
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="fw-bold display-6 mb-3 text-center"
            >
              Frequently Asked Questions <span className="text-primary">(FAQ)</span>
            </motion.h3>
          </div>

          {/* FAQ Columns */}
          <div className="row justify-content-center">
            
            {/* LEFT COLUMN */}
            <div className="col-12 col-md-6 mb-4 mb-md-0">
              <FAQAccordion
                faqs={faqs.slice(0, Math.ceil(faqs.length / 2))}
                accordionId="jeeFaqLeft"
              />
            </div>

            {/* RIGHT COLUMN */}
            <div className="col-12 col-md-6">
              <FAQAccordion
                faqs={faqs.slice(Math.ceil(faqs.length / 2))}
                accordionId="jeeFaqRight"
              />
            </div>
          </div>

        </div>
      </section>

      <hr />
      {/* -------------------------- */}
      {/* FINAL CALL TO ACTION */}
      {/* -------------------------- */}
      <section id="enroll" className="jee-enroll-section py-5 text-center text-white">
        <div className="container">

          <motion.h3
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="fw-bold display-6 mb-3"
          >
            Join ASQUARE Academy{" "}
            <span className="highlight-text text-warning">Kalewadi Today</span>
          </motion.h3>

          <p className="lead mb-4">
            Begin your IIT-JEE journey with <b>ASQUARE Academy’s expert coaching in Kalewadi, Pune.</b>
            With <b>experienced faculty, updated resources, and consistent results,</b> we are your
            reliable partner for <b>JEE, CET & NEET coaching.</b>
          </p>

          <p>
            <MapPin className="text-warning" />
            Serving students from <b>Kalewadi, Wakad, Rahatani, Thergaon, Pimpri, and surrounding PCMC regions.</b>
          </p>

          <a className="btn btn-lg btn-warning fw-bold mt-3 px-5 py-3 rounded-pill shadow-lg">
            <Link to={'/'} className="nav-item nav-item-list text-white">
              ⚡ Admissions Open – Enroll now!
              <p className="text-warning mb-0">Limited seats available.</p>
            </Link>
          </a>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default IITJEEKalewadi;
