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
  BadgeQuestionMark
} from "lucide-react";

import Navbar from "../../../Components/Navbar/Navbar.jsx";
import Header from "../../../Components/Header/Header.jsx";
import MobileForm from "../../../Components/Mobileform/MobileForm.jsx";
import Footer from "../../../Components/Footer/Footer.jsx";
import FAQAccordion from "../../LocationsPages/neet-pages/components/FAQAccordion.jsx";

import "../../../App.css";
import "./iit-jee.css";
import Loading from "../../Loading.jsx";

import sampleimg1 from '../../../Assets/SampleImages/Banners/Banners (5).jpeg';
import sampleimg11 from '../../../Assets/SampleImages/Banners/Banners (6).jpeg';
import sampleimg2 from '../../../Assets/SampleImages/sampleimg2.jpeg';
import sampleimg3 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (9).jpeg';
import sampleimg4 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (2).jpeg';
import sampleimg6 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (13).jpeg';

import Form from '../../../Components/Form2/Form2.jsx';

const Reviews = React.lazy(() => import("../../../Components/Reviews/Reviews.jsx"));

function IITJEERahatni() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Content arrays (verbatim from the Word file)
  const whyChoose = [
    { Icon: Users, title: "Expert Faculty", desc: "Seasoned trainers in IIT-JEE, NEET & CET." },
    { Icon: BookOpen, title: "Complete Syllabus Coverage", desc: "Physics, Chemistry & Mathematics aligned to JEE Main & Advanced." },
    { Icon: Target, title: "Personal Attention", desc: "Small batches for focused learning." },
    { Icon: BarChart, title: "Regular Mock Exams", desc: "Weekly tests & detailed performance reviews." },
    { Icon: Lightbulb, title: "Motivational & Career Support", desc: "Guidance to build confidence and achieve top ranks." },
  ];

  const subjectsLeft = [ // Left column will be "Subjects We Teach" (Option B mapping)
    { title: "Physics", desc: "Conceptual clarity & logical application" },
    { title: "Chemistry", desc: "Comprehensive coverage of Physical, Organic & Inorganic topics" },
    { title: "Mathematics", desc: "Advanced practice in Algebra, Calculus, Geometry & Probability" },
  ];

  const batches = [
    { title: "2-Year Foundation (10th → 12th)", desc: "Integrated Boards + JEE coaching" },
    { title: "1-Year Intensive (11th → 12th)", desc: "Fast-paced JEE + XII prep" },
    { title: "Crash Course (2–3 Months)", desc: "Quick revision & exam readiness" },
    { title: "Dropper / Repeater Batch", desc: "Focused 1-year JEE program for XII pass-outs" },
  ];

  const methodology = [
    "Topic-wise lectures with assignments",
    "One-to-one doubt-solving sessions",
    "Weekly practice & mock exams",
    "Parent-teacher meetings with progress reports"
  ];

  const highlights = [
    "Individual attention due to limited batch size",
    "Latest study material & updated problem sets",
    "Exam strategy & time management workshops",
    "Trusted IIT-JEE coaching in Rahatni, Pune"
  ];

  const faqs = [
    { q: "Q1: Who can apply at ASQUARE Academy Rahatni?", a: "Students of Class XI, XII, and XII pass-outs preparing for JEE Main & Advanced can join our Best IIT JEE Coaching in Rahatni for result-oriented learning." },
    { q: "Q2: What subjects are covered in your IIT JEE Classes in Rahatni?", a: "Our IIT JEE Classes in Rahatni include Physics, Chemistry, and Mathematics (PCM) with a focus on concept clarity and exam-based preparation." },
    { q: "Q3: Do you conduct mock tests for students?", a: "Yes, we organize weekly unit tests and full-length mock exams to boost confidence and improve performance in JEE Main & Advanced." },
    { q: "Q4: What course options are available at ASQUARE Rahatni?", a: "We offer 2-Year, 1-Year, Crash Courses, and Dropper Batches designed for effective IIT JEE Advanced Preparation in Rahatni." },
    { q: "Q5: What makes ASQUARE the Top JEE Mains Coaching Classes in Rahatni?", a: "Our Top JEE Mains Coaching Classes in Rahatni provide personalized mentoring, experienced faculty, and continuous academic tracking for better outcomes." },
    { q: "Q6: How are batch sizes managed at your Best IIT JEE Classes in Rahatni?", a: "We keep small batch sizes to ensure one-on-one attention and focused guidance, making us the Best IIT JEE Classes in Rahatni." },
    { q: "Q7: Do parents receive performance updates regularly?", a: "Yes, we share progress reports and conduct Parent-Teacher Meetings (PTMs) to keep parents informed about student progress." },
    { q: "Q8: Which nearby areas benefit from your Top IIT JEE Classes in Rahatni?", a: "Our Top IIT JEE Classes in Rahatni are easily accessible from Pimple Saudagar, Thergaon, Kalewadi, Wakad, and nearby PCMC areas." },
  ];

  return (
    <>
      <Helmet>
        <title>Best IIT JEE Coaching Classes in Rahatni Pune | ASQUARE Academy</title>
        <meta name="title" content="Best IIT JEE Coaching Classes in Rahatni Pune | ASQUARE Academy" />
        <meta name="description" content="Join the Best IIT JEE Coaching Classes in Rahatni Pune for expert-led training, mock tests, and personalized guidance for JEE Main & Advanced at ASQUARE Academy." />
        <meta name="keywords" content={`IIT JEE coaching classes in rahatni,
Best IIT JEE Coaching in rahatni,
Top JEE Mains Coaching Classes rahatni,
IIT JEE Advanced Preparation rahatni,
JEE Advanced coaching classes in rahatni,
IIT JEE Classes in rahatni,
Best IIT JEE Classes in rahatni,
Top IIT JEE Classes in rahatni`} />

        {/* JSON-LD Schema (verbatim from the Word file) */}
        <script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-institute-rahatni-pune#localbusiness",
      "name": "ASQUARE Academy",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-institute-rahatni-pune",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "telephone": "9766118877",
      "priceRange": "₹₹",
      "description": "ASQUARE Academy offers the Best IIT JEE Coaching Classes in Rahatni Pune for JEE Main and Advanced aspirants with expert faculty and regular mock tests.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rahatni, Pune, Maharashtra",
        "addressLocality": "Pune",
        "addressRegion": "MH",
        "postalCode": "411017",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune/"
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-institute-rahatni-pune#webpage",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-institute-rahatni-pune",
      "name": "IIT JEE Coaching Classes in Rahatni Pune | ASQUARE Academy",
      "description": "Enroll in the Best IIT JEE Coaching Classes in Rahatni Pune for JEE Main & Advanced with expert mentors, small batches, and regular performance tracking.",
      "inLanguage": "en-IN",
      "isPartOf": {
        "@id": "https://www.asquareclasses.com/#website"
      }
    },
    {
      "@type": "EducationalOrganization",
      "name": "ASQUARE Academy",
      "url": "https://www.asquareclasses.com/",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune/"
      ],
      "description": "ASQUARE Academy in Rahatni Pune provides IIT JEE coaching with expert faculty, structured study plans, and performance-focused learning."
    },
    {
      "@type": "BreadcrumbList",
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
          "name": "IIT JEE Coaching Rahatni Pune",
          "item": "https://www.asquareclasses.com/iit-jee-coaching-institute-rahatni-pune"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can apply at ASQUARE Academy Rahatni?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students of Class XI, XII, and XII pass-outs preparing for JEE Main & Advanced can join our Best IIT JEE Coaching in Rahatni for result-oriented learning."
          }
        },
        {
          "@type": "Question",
          "name": "What subjects are covered in your IIT JEE Classes in Rahatni?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our IIT JEE Classes in Rahatni include Physics, Chemistry, and Mathematics (PCM) with a focus on concept clarity and exam-based preparation."
          }
        },
        {
          "@type": "Question",
          "name": "Do you conduct mock tests for students?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we conduct weekly unit tests and full-length mock exams to help students prepare for JEE Main and Advanced."
          }
        },
        {
          "@type": "Question",
          "name": "What course options are available at ASQUARE Rahatni?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer 2-Year, 1-Year, Crash Courses, and Dropper Batches for JEE aspirants seeking focused preparation in Rahatni Pune."
          }
        },
        {
          "@type": "Question",
          "name": "What makes ASQUARE the Top JEE Mains Coaching Classes in Rahatni?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE Academy provides personalized mentoring, expert faculty, and consistent academic tracking to ensure student success."
          }
        },
        {
          "@type": "Question",
          "name": "How are batch sizes managed at your Best IIT JEE Classes in Rahatni?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We maintain small batch sizes to ensure personal attention and effective guidance for every student."
          }
        },
        {
          "@type": "Question",
          "name": "Do parents receive performance updates regularly?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we share detailed progress reports and conduct PTMs to keep parents informed about their child’s academic growth."
          }
        },
        {
          "@type": "Question",
          "name": "Which nearby areas benefit from your Top IIT JEE Classes in Rahatni?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our Top IIT JEE Classes in Rahatni are easily accessible from Pimple Saudagar, Thergaon, Kalewadi, Wakad, and nearby PCMC regions."
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
              {[sampleimg2, sampleimg2, sampleimg2].map((img, i) => (
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

      {/* Hero Section (verbatim header/content from docx) */}
      <section className="jee-hero-section text-white d-flex align-items-center bg-transparent">
        <div className="container py-5">
          <div className="row align-items-center">
            {/* Left Side: Text */}
            <div className="col-12 col-lg-8 col-md-12 text-center text-md-start">
              <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
                Excel in JEE Main & Advanced with <span className="highlight-text text-warning">ASQUARE Institute</span> Rahatni
              </motion.h1>

              <motion.h2>Achieve Your IIT Dreams with Leading JEE Coaching in Rahatni</motion.h2>

              <p className="lead d-none d-md-block">
                Looking for the best IIT JEE institute in Rahatni, Pune? At ASQUARE Academy, we help students strengthen fundamentals, sharpen problem-solving abilities, and master exam techniques. Our programs prepare aspirants for IITs, NITs, IIITs, and other top engineering colleges across India.
              </p>

              <p className="lead d-block d-md-none">
                Looking for the best IIT JEE institute in Rahatni, Pune? At ASQUARE Academy, we help students strengthen fundamentals, sharpen problem-solving abilities, and master exam techniques. Our programs prepare aspirants for IITs, NITs, IIITs, and other top engineering colleges across India.
              </p>

              <a className="btn btn-warning btn-lg rounded-pill mt-3 shadow-lg">
                <Link to={'/'} className="nav-item nav-item-list text-warning">🚀 Enroll Now</Link>
              </a>
            </div>

            {/* Right Side: Image */}
            <div className="col-12 col-lg-4 col-md-12 mt-5 mt-md-0 text-center">
              <img src={sampleimg3} alt="ASQUARE Academy Rahatni" className="img-fluid mx-auto fade-in imgsiz" style={{ objectFit: "contain", opacity: 0.95, borderRadius: "10px" }} />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Why ASQUARE is the Best */}
      <section className="jee-why py-5 ">
        <div className="container">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">
            Why ASQUARE is the Best JEE Institute in <span className="highlight-text text-primary">Rahatni?</span>
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

      {/* About Our JEE Coaching Programs (verbatim) */}
      <section className="jee-programs py-5 bg-light">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-8 text-center text-lg-start order-2">
              <motion.h4 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-centerr">
                About Our <span className="highlight-text text-primary">JEE Coaching</span> Programs
              </motion.h4>

              <p className="lead text-secondary">
                The Joint Entrance Examination (JEE) is one of India’s toughest challenges. Our Rahatni branch delivers structured lessons, test practice, and concept-driven teaching designed for high success in JEE Main & Advanced.
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
            Subjects We Teach
            <span className="highlight-text text-warning">&nbsp;&&nbsp;</span>
            Batches
          </motion.h4>

          <br />

          <div className="row g-4">
            {/* LEFT: Subjects We Teach (Option B mapping) */}
            <div className="col-lg-6">
              <h4 className="highlight-text text-warning fw-bold mb-4 text-centerr">Subjects We Teach</h4>
              {subjectsLeft.map((sub, i) => (
                <div key={i} className="jee-subject-box mb-4 p-3 pb-4 pt-4 rounded-4 bg-white bg-opacity-10 backdrop-blur-md border border-light border-opacity-25">
                  <h5 className="fw-semibold">{sub.title}</h5>
                  <p className="small mb-0">{sub.desc}</p>
                </div>
              ))}
            </div>

            {/* RIGHT: Subjects We Cover (Option B mapping) */}
            <div className="col-lg-6">
              <h4 className="highlight-text text-warning fw-bold mb-4 text-centerr">Course Options & Batches</h4>

              {/* Use the batches area to list course options & batches (verbatim from docx) */}
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

      {/* Teaching Style (verbatim) */}
      <section className="jee-method py-5 bg-light">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-12 text-center text-lg-start">
              <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">
                Teaching Style at <span className="highlight-text text-primary">ASQUARE Rahatni</span>
              </motion.h3>

              <div className="row g-4 justify-content-center">
                {methodology.map((m, i) => (
                  <div key={i} className="col-lg-3 col-6">
                    <motion.div whileHover={{ y: -5 }} className="method-card p-4 bg-white rounded-4 shadow-sm h-100 text-center">
                      <p className="text-muted small mb-0">{m}</p>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Key Benefits */}
      <section className="jee-highlights py-5 text-white">
        <div className="container text-center">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
            Key Benefits of Joining Our <span className="highlight-text text-warning">Rahatni Branch</span>
          </motion.h3>

          <div className="row justify-content-center g-4">
            {highlights.map((text, i) => (
              <motion.div key={i} className="col-md-5 col-lg-4 col-6" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <div className="highlight-card shadow-lg rounded-4 p-4 bg-white bg-opacity-10 backdrop-blur-md border border-light border-opacity-25">
                  <div className="icon-circle mx-auto mb-3"><h2>🎯</h2></div>
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

      {/* Success & Results (verbatim) */}
      <section className="jee-results py-5 text-white">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-8 text-center text-lg-start">
              <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
                Success & <span className="highlight-text text-warning">Results</span>
              </motion.h3>
              <p className="lead text-light">
                With proven strategies and dedicated guidance, ASQUARE students consistently secure admissions in IITs, NITs, and top institutes. The Rahatni center continues this legacy with strong results every year.
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
              Frequently Asked Questions  <span className="text-primary">(FAQ)</span>
            </motion.h3>
          </div>

          <div className="row justify-content-center">
            <div className="col-12 col-md-6 mb-4 mb-md-0 ">
              <FAQAccordion faqs={faqs.slice(0, Math.ceil(faqs.length / 2))} accordionId="rahFaqLeft" />
            </div>

            <div className="col-12 col-md-6">
              <FAQAccordion faqs={faqs.slice(Math.ceil(faqs.length / 2))} accordionId="rahFaqRight" />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Final CTA (verbatim enroll section) */}
      <section id="enroll" className="jee-enroll-section py-5 text-center text-white">
        <div className="container">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
            Enroll at <span className="highlight-text text-warning">ASQUARE Academy</span> Rahatni Today
          </motion.h3>
          <p className="lead mb-4">
            Kickstart your IIT JEE journey with ASQUARE Academy, Rahatni, Pune. With expert teaching, structured learning, and consistent success, we are your trusted choice for JEE, CET & NEET coaching.
          </p>
          <p><MapPin className="text-warning" /> <b className="bld">Ideal for students from Rahatni, Thergaon, Pimple Saudagar, Wakad, Kalewadi, and surrounding PCMC areas.</b></p>
          <a className="btn btn-lg btn-warning fw-bold mt-3 px-5 py-3 rounded-pill shadow-lg">
            <Link to={'/'} className="nav-item nav-item-list text-white">
              ⚡ Admissions Open – Book your seat now!
            </Link>
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default IITJEERahatni;
