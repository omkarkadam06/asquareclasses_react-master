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
import sampleimg2 from '../../../Assets/SampleImages/MobBanners/MobBanner3.jpeg';
import sampleimg22 from'../../../Assets/SampleImages/MobBanners/MobBanner6.jpeg';

import sampleimg3 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (9).jpeg';
import sampleimg4 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (2).jpeg';
import sampleimg6 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (4).jpeg';

import Form from '../../../Components/Form2/Form2.jsx';

const Reviews = React.lazy(() => import("../../../Components/Reviews/Reviews.jsx"));

function IITJEEPCMCPune() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const whyChoose = [
    { Icon: Users, title: "Highly Skilled Faculty", desc: "Subject experts for IIT-JEE, CET & NEET coaching." },
    { Icon: BookOpen, title: "Complete PCM Curriculum", desc: "Physics, Chemistry & Mathematics covered as per latest JEE guidelines." },
    { Icon: Target, title: "Personal Mentorship", desc: "Small batches to focus on each student’s progress." },
    { Icon: BarChart, title: "Rigorous Testing", desc: "Weekly practice tests, mock exams & detailed performance tracking." },
    { Icon: Lightbulb, title: "Motivational Support", desc: "Guidance sessions to improve exam confidence and strategy." },
  ];

  const subjects = [
    { title: "Physics", desc: "Strong conceptual foundation with application-based numericals" },
    { title: "Chemistry", desc: "Physical, Organic & Inorganic Chemistry taught in detail" },
    { title: "Mathematics", desc: "Advanced practice in Algebra, Calculus, Geometry, Probability & Trigonometry" },
  ];

  const batches = [
    { title: "2-Year Foundation Program (10th → 12th Moving Students)", desc: "Integrated XI + XII Boards + JEE prep." },
    { title: "1-Year Advanced Program (11th → 12th Moving Students)", desc: "Comprehensive Class XII + JEE training." },
    { title: "Crash Course (2–3 Months)", desc: "High-speed revision with mock tests." },
    { title: "Dropper/Repeater Batch (XII Pass-outs)", desc: "One-year focused JEE coaching for repeaters." },
  ];

  const faqs = [
    { q: "Q1: Who can enroll at ASQUARE Academy PCMC?", a: "Students of Class XI, XII, and XII pass-outs preparing for JEE Main & Advanced can join ASQUARE Academy PCMC." },
    { q: "Q2: Which subjects are included?", a: "The subjects taught are Physics, Chemistry, and Mathematics (PCM), fully aligned with the IIT JEE syllabus." },
    { q: "Q3: Do you conduct mock exams?", a: "Yes, weekly practice tests and full-length JEE mock exams are part of every program." },
    { q: "Q4: What courses are available?", a: "We offer 2-Year, 1-Year, Crash Courses and Dropper Batches for JEE Main & Advanced." },
    { q: "Q5: What is the batch size?", a: "We maintain small batch sizes to provide individual focus and doubt resolution." },
    { q: "Q6: Do parents get performance updates?", a: "Yes, parents receive regular progress reports and updates through PTMs." },
    { q: "Q7: Which areas does the PCMC branch serve?", a: "Students from Pimpri, Chinchwad, Nigdi, Akurdi, Ravet, Pimple Saudagar, and nearby PCMC areas can easily access this branch." },
  ];

  return (
    <>
      <Helmet>
        <title>Best IIT JEE Coaching Classes in PCMC Pune | JEE Main & Advanced Training</title>
        <meta name="title" content="Best IIT JEE Coaching Classes in PCMC Pune | JEE Main & Advanced Training" />
        <meta name="description" content="Get top IIT JEE coaching classes in PCMC Pune with expert faculty, small batches, mock tests & complete JEE Main + Advanced preparation at ASQUARE Academy." />
        <meta name="keywords" content={`IIT JEE coaching classes in PCMC Pune,
Best IIT JEE Coaching in PCMC Pune,
Top JEE Mains Coaching Classes PCMC Pune,
IIT JEE Advanced Preparation PCMC Pune,
JEE Advanced coaching classes in PCMC Pune,
IIT JEE Classes in PCMC Pune,
Best IIT JEE Classes in PCMC Pune,
Top IIT JEE Classes in PCMC Pune,
IIT JEE Institute coaching in PCMC Pune,
IIT JEE Institute classes in PCMC Pune`} />

        <script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-pcmc-pune#localbusiness",
      "name": "ASQUARE Academy - IIT JEE Coaching PCMC Pune",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-pcmc-pune",
      "telephone": "+919766118877",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "PCMC, Pune",
        "addressLocality": "PCMC",
        "addressRegion": "Pune",
        "postalCode": "411033",
        "addressCountry": "India"
      },
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune/"
      ],
      "description": "Best IIT JEE Coaching Classes in PCMC Pune for JEE Main & Advanced with expert faculty, small batches and mock exams."
    },
    {	
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-pcmc-pune#webpage",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-pcmc-pune",
      "name": "IIT JEE Coaching Classes in PCMC Pune | ASQUARE Academy",
      "isPartOf": {
        "@id": "https://www.asquareclasses.com/#website"
      },
      "primaryImageOfPage": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "about": "IIT JEE coaching classes in PCMC Pune for JEE Main and JEE Advanced preparation."
    },
    {
      "@type": "EducationalOrganization",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-pcmc-pune#eduorg",
      "name": "ASQUARE Academy",
      "url": "https://www.asquareclasses.com/",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "description": "Top IIT JEE Classes in PCMC Pune for JEE Mains & Advanced preparation.",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+919766118877",
        "contactType": "customer service"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-pcmc-pune#breadcrumb",
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
          "name": "IIT JEE Coaching PCMC",
          "item": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-pcmc-pune"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-pcmc-pune#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can enroll at ASQUARE Academy PCMC?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students of Class XI, XII, and XII pass-outs preparing for JEE Main & Advanced can join ASQUARE Academy PCMC."
          }
        },
        {
          "@type": "Question",
          "name": "Which subjects are included?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The subjects taught are Physics, Chemistry, and Mathematics (PCM), fully aligned with the IIT JEE syllabus."
          }
        },
        {
          "@type": "Question",
          "name": "Do you conduct mock exams?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, weekly practice tests and full-length JEE mock exams are part of every program."
          }
        },
        {
          "@type": "Question",
          "name": "What courses are available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer 2-Year, 1-Year, Crash Courses and Dropper Batches for JEE Main & Advanced."
          }
        },
        {
          "@type": "Question",
          "name": "What is the batch size?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We maintain small batch sizes to provide individual focus and doubt resolution."
          }
        },
        {
          "@type": "Question",
          "name": "Do parents get performance updates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, parents receive regular progress reports and updates through PTMs."
          }
        },
        {
          "@type": "Question",
          "name": "Which areas does the PCMC branch serve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students from Pimpri, Chinchwad, Nigdi, Akurdi, Ravet, Pimple Saudagar, and nearby PCMC areas can easily access this branch."
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
            <div className="col-12 col-lg-8 col-md-12 text-center text-md-start">
              <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
                Crack JEE Main & Advanced with <span className="highlight-text text-warning">ASQUARE Academy PCMC</span>
              </motion.h1>
              <motion.h2>Leading Coaching Institute for Engineering Aspirants in PCMC</motion.h2>

              <p className="lead d-none d-md-block">
                Looking for IIT-JEE classes in <b className="bld">PCMC, Pune?</b> At <b className="bld">ASQUARE Academy</b> we provide structured study programs, expert mentoring, and exam-focused practice to help students achieve their goals. Our PCMC center focuses on systematic preparation and personalized guidance to help aspirants perform their best in <b className="bld">JEE Main & Advanced.</b>
              </p>

              <p className="lead d-block d-md-none">
                Looking for IIT-JEE classes in <b className="bld">PCMC, Pune?</b> At <b className="bld">ASQUARE Academy</b> we provide structured study programs, expert mentoring, and exam-focused practice to help students achieve their goals.
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
            Why Students Prefer <span className="text-primary">ASQUARE Academy</span> in PCMC?
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
                Our <span className="text-primary">IIT-JEE</span> Coaching Programs
              </motion.h4>

              <p className="lead text-secondary">
                The Joint Entrance Examination (JEE) is one of the most competitive exams in India. At ASQUARE Academy PCMC, our programs emphasize concept clarity, speed & accuracy, and time management. We prepare students for both JEE Main & Advanced, along with providing support for CET and NEET aspirants.
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
            Subjects We Teach <span className="highlight-text text-warning">&nbsp;&&nbsp;</span> Course Options
          </motion.h4>

          <div className="row g-4">
            <div className="col-lg-6">
              <h4 className="highlight-text text-warning fw-bold mb-4 text-centerr">Subjects We Teach</h4>
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
                          ? "• Daily lectures with structured assignments"
                          : step === "Practice"
                            ? "• One-to-one doubt-solving sessions"
                            : step === "Assess"
                              ? "• Weekly chapter-wise tests & full-length mock exams"
                              : "• Parent–teacher meetings for progress monitoring"}
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
            Key Features of <span className="highlight-text text-warning">PCMC Branch</span>
          </motion.h3>

          <div className="row justify-content-center g-4">
            {[
              "Limited batch strength for focused mentoring",
              "Updated IIT-JEE study modules & test series",
              "Workshops on exam strategies, problem-solving, and time management",
              "Regular feedback reports for parents",
              "Trusted as a top JEE coaching institute in PCMC, Pune",
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
                Results That <span className="highlight-text text-warning">&nbsp;Speak &nbsp;</span>
              </motion.h3>
              <p className="lead text-light">
                ASQUARE Academy has built a track record of IIT-JEE success stories and high ranks. The PCMC branch continues this tradition with result-driven coaching, expert mentoring, and student-focused programs.
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
            <div className="d-inline-block bg-primary bg-opacity-10 text-primary fw-bold rounded-pill px-3 py-1 mb-3"><BadgeQuestionMark /> FAQs</div>

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
            Join ASQUARE Academy <span className="highlight-text text-warning">&nbsp;PCMC Today&nbsp;</span>
          </motion.h3>
          <p className="lead mb-4">
           Achieve your engineering dreams with ASQUARE Academy’s IIT-JEE coaching in PCMC, Pune. With dedicated faculty, updated study material, and consistent results, we are your trusted partner for JEE, CET & NEET coaching.
          </p>
          <p><MapPin className="text-warning" /> <b className="bld">Serving students from Pimpri, Chinchwad, Nigdi, Akurdi, Ravet, Pimple Saudagar, and nearby PCMC areas.</b></p>
          <a className="btn btn-lg btn-warning fw-bold mt-3 px-5 py-3 rounded-pill shadow-lg">
            <Link to={'/'} className="nav-item nav-item-list text-white">
              ⚡ Admissions Open – Limited seats available! Contact today to enroll.
            </Link>
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default IITJEEPCMCPune;
