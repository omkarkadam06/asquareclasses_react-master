/**
 * Component: IITJEEKasarwadi.jsx
 * Content sourced from uploaded file: :contentReference[oaicite:0]{index=0}
 *
 * NOTE: This file follows the same structure and style as your existing IIT-JEE location components.
 * It uses the exact content provided in the uploaded Kasarwadi Word file (no invented content).
 */

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
// sample images - reusing same assets as other pages
import sampleimg2 from '../../../Assets/SampleImages/sampleimg2.jpeg';
import sampleimg1 from '../../../Assets/SampleImages/Banners/Banners (8).jpeg';
import sampleimg11 from '../../../Assets/SampleImages/Banners/Banners (9).jpeg';
import sampleimg3 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (15).jpeg';
import sampleimg4 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (17).jpeg';
import sampleimg6 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (13).jpeg';
import Form from '../../../Components/Form2/Form2.jsx';

const Reviews = React.lazy(() => import("../../../Components/Reviews/Reviews.jsx"));

function IITJEEKasarwadi() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Content below is taken exactly from the uploaded Kasarwadi word file.
  const whyChoose = [
    { Icon: Users, title: "Experienced Faculty Team", desc: "Subject experts for IIT-JEE, CET & NEET coaching." },
    { Icon: BookOpen, title: "Full PCM Curriculum", desc: "Physics, Chemistry & Mathematics aligned with the latest JEE syllabus." },
    { Icon: Target, title: "Personalized Mentoring", desc: "Small batch size for better interaction and guidance." },
    { Icon: BarChart, title: "Weekly Testing System", desc: "Chapter tests, mock exams & detailed performance tracking." },
    { Icon: Lightbulb, title: "Motivational Support", desc: "Career guidance, time management & stress-handling sessions." },
  ];

  const subjects = [
    { title: "Physics", desc: "In-depth concepts with numerical applications" },
    { title: "Chemistry", desc: "Balanced coverage of Physical, Organic & Inorganic Chemistry" },
    { title: "Mathematics", desc: "Advanced practice in Algebra, Geometry, Calculus, Trigonometry & Probability" },
  ];

  const batches = [
    { title: "2-Year Foundation Program (10th → 12th Moving Students)", desc: "Board + JEE integrated coaching." },
    { title: "1-Year Intensive Course (11th → 12th Moving Students)", desc: "Comprehensive JEE prep with Class XII." },
    { title: "Crash Course (2–3 Months)", desc: "Short-term revision & test-focused sessions." },
    { title: "Repeater/Dropper Batch (XII Pass-outs)", desc: "One-year full-time JEE preparation for repeaters." },
  ];

  const faqs = [
    { q: "Q1: Who can join ASQUARE Academy Kasarwadi?", a: "Students of Class XI, XII, and XII pass-outs preparing for JEE Main & Advanced." },
    { q: "Q2: What subjects are included?", a: "Physics, Chemistry & Mathematics (PCM)." },
    { q: "Q3: Do you provide mock exams?", a: "Yes, weekly practice tests and full-length mock exams are conducted." },
    { q: "Q4: What course options are available?", a: "2-Year, 1-Year, Crash Courses & Dropper Batches." },
    { q: "Q5: What is the batch size?", a: "We keep batches small for personalized guidance." },
    { q: "Q6: Do parents receive progress updates?", a: "Yes, regular PTMs and performance reports are part of our system." },
    { q: "Q7: Which areas does the Kasarwadi branch serve?", a: "Conveniently located for students from Kasarwadi, Dapodi, Bhosari, Pimple Saudagar, Pimpri, and nearby PCMC areas." },
  ];

  return (
    <>
      <Helmet>
        <title>Best IIT JEE Coaching Classes in Kasarwadi | ASQUARE Academy JEE Mains & Advanced</title>
        <meta
          name="title"
          content="Best IIT JEE Coaching Classes in Kasarwadi | ASQUARE Academy JEE Mains & Advanced"
        />
        <meta
          name="description"
          content="Join ASQUARE Academy for the Best IIT JEE Coaching Classes in Kasarwadi. Expert faculty, small batches & complete JEE Main & Advanced preparation for students from Kasarwadi, Pimpri & Bhosari"
        />
        <meta name="keywords" content="IIT JEE coaching classes in kasarwadi,
Best IIT JEE Coaching in kasarwadi,
Top JEE Mains Coaching Classes kasarwadi,
IIT JEE Advanced Preparation kasarwadi,
JEE Advanced coaching classes in kasarwadi,
IIT JEE Classes in kasarwadi,
Best IIT JEE Classes in kasarwadi,
Top IIT JEE Classes in kasarwadi,
" />

        {/* JSON-LD Schema (from uploaded Kasarwadi file) */}
        <script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-kasarwadi-pune#localbusiness",
      "name": "ASQUARE Academy - IIT JEE Coaching Classes in Kasarwadi",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-kasarwadi-pune",
      "telephone": "9766118877",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kasarwadi",
        "addressRegion": "Pune",
        "addressCountry": "India"
      },
      "areaServed": "Pune, Kasarwadi, Pimpri, Bhosari, Dapodi, Pimple Saudagar",
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune"
      ],
      "description": "ASQUARE Academy offers the Best IIT JEE Coaching Classes in Kasarwadi with expert mentors, focused batches, and structured learning for JEE Main & Advanced success."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-kasarwadi-pune#webpage",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-kasarwadi-pune",
      "name": "Best IIT JEE Coaching Classes in Kasarwadi | ASQUARE Academy Pune",
      "description": "Enroll at ASQUARE Academy Kasarwadi for expert IIT JEE Coaching Classes. Learn from experienced faculty with full syllabus coverage, tests & advanced preparation.",
      "publisher": {
        "@type": "Organization",
        "name": "ASQUARE Academy",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png"
        }
      },
      "inLanguage": "en-IN"
    },
    {
      "@type": "EducationalOrganization",
      "name": "ASQUARE Academy",
      "url": "https://www.asquareclasses.com/",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "description": "ASQUARE Academy provides the Best IIT JEE Coaching Classes in Kasarwadi, Pune, covering JEE Main & Advanced with top faculty and focused mentoring."
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can join ASQUARE Academy Kasarwadi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students of Class XI, XII, and XII pass-outs preparing for JEE Main & Advanced can join ASQUARE Academy Kasarwadi."
          }
        },
        {
          "@type": "Question",
          "name": "What subjects are included?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Physics, Chemistry, and Mathematics (PCM) are covered in detail for both JEE Mains and Advanced preparation."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide mock exams?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, weekly practice tests and full-length mock exams are conducted to evaluate performance."
          }
        },
        {
          "@type": "Question",
          "name": "What course options are available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer 2-Year, 1-Year, Crash Courses & Dropper Batches for JEE Main and Advanced preparation."
          }
        },
        {
          "@type": "Question",
          "name": "What is the batch size?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Small batch sizes are maintained for better individual attention and personalized mentoring."
          }
        },
        {
          "@type": "Question",
          "name": "Do parents receive progress updates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we conduct regular PTMs and share performance reports with parents to ensure transparency."
          }
        },
        {
          "@type": "Question",
          "name": "Which areas does the Kasarwadi branch serve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE Kasarwadi serves students from Kasarwadi, Dapodi, Bhosari, Pimpri, Pimple Saudagar, and nearby PCMC areas."
          }
        }
      ]
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
          "name": "IIT JEE Coaching Classes in Pune",
          "item": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-pune"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "IIT JEE Coaching Classes in Kasarwadi",
          "item": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-kasarwadi-pune"
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
          <div
            id="jeeFullCarouselDesktop"
            className="carousel slide"
            data-bs-ride="carousel"
          >
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

      {/* Hero Section */}
      <section className="jee-hero-section text-white d-flex align-items-center bg-transparent">
        <div className="container py-5">
          <div className="row align-items-center">
            {/* Left Side: Text */}
            <div className="col-12 col-lg-8 col-md-12 text-center text-md-start">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="fw-bold display-6 mb-3"
              >
                Excel in JEE Main & Advanced with{" "}
                <span className="highlight-text text-warning">ASQUARE Academy Kasarwadi</span>
              </motion.h1>

              <motion.h2>Trusted Coaching for Engineering Aspirants in Kasarwadi</motion.h2>

              <p className="lead d-none d-md-block">
                Searching for IIT-JEE coaching classes in Kasarwadi, Pune? At <b className="bld">ASQUARE Academy</b>, we provide structured study material, expert guidance, and result-focused training for aspiring engineers. Our Kasarwadi branch is designed to prepare students for IITs, NITs, IIITs, and top engineering colleges. With concept-based teaching, regular assessments, and personalized mentoring, we help students achieve success in JEE Main & Advanced.
              </p>

              <p className="lead d-block d-md-none">
                Searching for IIT-JEE coaching classes in Kasarwadi, Pune? At <b className="bld">ASQUARE Academy</b>, we provide structured study material, expert guidance, and result-focused training for aspiring engineers.
              </p>

              <a className="btn btn-warning btn-lg rounded-pill mt-3 shadow-lg">
                <Link to={'/'} className="nav-item nav-item-list text-warning">
                  🚀 Enroll Now
                </Link>
              </a>
            </div>

            {/* Right Side: Image */}
            <div className="col-12 col-lg-4 col-md-12 mt-5 mt-md-0 text-center">
              <img
                src={sampleimg3}
                alt="ASQUARE Academy"
                className="img-fluid mx-auto fade-in imgsiz"
                style={{
                  objectFit: "contain",
                  opacity: 0.95,
                  borderRadius: "10px",
                }}
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
            Why Choose <span className="highlight-text text-primary">ASQUARE Academy</span> in Kasarwadi?
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
                Our <span className="highlight-text text-primary">JEE</span> Coaching Programs
              </motion.h4>

              <p className="lead text-secondary">
                The Joint Entrance Examination (JEE) demands strong concepts and consistent practice. At ASQUARE Academy Kasarwadi, our programs are built to strengthen fundamentals, sharpen problem-solving, and develop exam strategies for both JEE Main & Advanced.
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
            Subjects We Cover
            <span className="highlight-text text-warning">&nbsp;&&nbsp;</span>
            Batch Options
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
                {["Daily topic-based lectures with practice assignments", "One-to-one doubt-solving sessions", "Weekly unit tests & full-length mock exams", "Parent–teacher meetings for performance feedback"].map((text, i) => (
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
            Key Highlights of <span className="highlight-text text-warning">&nbsp;Kasarwadi&nbsp;</span> Branch
          </motion.h3>

          <div className="row justify-content-center g-4">
            {[
              "•\tLimited student intake for focused learning",
              "•\tUpdated IIT-JEE notes, test papers & practice modules",
              "•\tWorkshops on exam strategies, problem-solving & time management",
              "•\tProgress tracking & regular communication with parents",
              "•\tRecognized as a top IIT-JEE coaching institute in Kasarwadi, Pune",
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
               Results That Prove Our  <span className="highlight-text text-warning">&nbsp;Excellence&nbsp;</span>
              </motion.h3>
              <p className="lead text-light">
                ASQUARE Academy has consistently produced IIT-JEE rankers and engineering toppers. The Kasarwadi branch continues this tradition with result-oriented coaching, expert mentoring, and student-focused programs.
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
              <FAQAccordion faqs={faqs.slice(0, Math.ceil(faqs.length / 2))} accordionId="kasarwadiFaqLeft" />
            </div>

            <div className="col-12 col-md-6">
              <FAQAccordion faqs={faqs.slice(Math.ceil(faqs.length / 2))} accordionId="kasarwadiFaqRight" />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Final CTA */}
      <section id="enroll" className="jee-enroll-section py-5 text-center text-white">
        <div className="container">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
            Join ASQUARE Academy <span className="highlight-text text-warning">&nbsp;Kasarwadi Today&nbsp;</span>
          </motion.h3>

          <p className="lead mb-4">
            Prepare for your engineering future with ASQUARE Academy’s IIT-JEE coaching in Kasarwadi, Pune. With expert faculty, advanced resources, and proven success rates, we are your trusted choice for JEE, CET & NEET coaching.
          </p>

          <p><MapPin className="text-warning" />Serving students from <b className="bld">Kasarwadi, Dapodi, Pimpri, Bhosari, Pimple Saudagar, and nearby PCMC regions.</b></p>

          <a className="btn btn-lg btn-warning fw-bold mt-3 px-5 py-3 rounded-pill shadow-lg">
            <Link to={'/'} className="nav-item nav-item-list text-white">
              ⚡ Admissions Open – Enroll now!
              &nbsp;<p className="text-warning">Limited seats available!</p>
            </Link>
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default IITJEEKasarwadi;
