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
// import sampleimg1 from '../../../Assets/SampleImages/sampleimg1.jpeg';
// import sampleimg2 from '../../../Assets/SampleImages/sampleimg2.jpeg';

import sampleimg1 from '../../../Assets/SampleImages/Banners/Banners (1).jpeg';
import sampleimg11 from '../../../Assets/SampleImages/Banners/Banners (2).jpeg';
import sampleimg2 from '../../../Assets/SampleImages/MobBanners/MobBanner9.jpeg';
import sampleimg22 from'../../../Assets/SampleImages/MobBanners/MobBanner1.jpeg';


import sampleimg3 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (9).jpeg'; // portrait/transparent-like
import sampleimg4 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (2).jpeg';
import sampleimg5 from '../../../Assets/SampleImages/sampleimg5.jpeg';
import sampleimg6 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (4).jpeg';
import sampleimg7 from '../../../Assets/SampleImages/sampleimg7.jpeg';
import Form from '../../../Components/Form2/Form2.jsx';

const Reviews = React.lazy(() => import("../../../Components/Reviews/Reviews.jsx"));

function IITJEEChakan() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Page-specific data (text taken verbatim from uploaded Chakan word file). Source: uploaded file. :contentReference[oaicite:1]{index=1}
  const whyChoose = [
    { Icon: Users, title: "Expert Faculty", desc: "Specialists in IIT-JEE, CET & NEET coaching." },
    { Icon: BookOpen, title: "PCM Curriculum Coverage", desc: "Physics, Chemistry & Mathematics taught per latest JEE guidelines." },
    { Icon: Target, title: "Personal Attention", desc: "Small batches at Chakan branch ensure better interaction." },
    { Icon: BarChart, title: "Practice-Oriented Learning", desc: "Weekly tests, assignments & mock exams." },
    { Icon: Lightbulb, title: "Career Guidance", desc: "Motivation, counseling & time-management strategies." },
  ];

  const subjects = [
    { title: "Physics", desc: "Strengthening fundamentals with real-life applications & numericals" },
    { title: "Chemistry", desc: "Physical, Organic & Inorganic Chemistry taught in detail" },
    { title: "Mathematics", desc: "Rigorous practice in Algebra, Geometry, Trigonometry, Calculus & Probability" },
  ];

  const batches = [
    { title: "2-Year Foundation Program (10th → 12th Moving Students)", desc: "Covers Board + JEE preparation." },
    { title: "1-Year Advanced Course (11th → 12th Moving Students)", desc: "Focused XII + JEE program." },
    { title: "Crash Course (2–3 Months)", desc: "Short-term intensive revision & practice tests." },
    { title: "Repeater/Dropper Batch (XII Pass-outs)", desc: "One-year full-time JEE coaching for repeaters." },
  ];

  const faqs = [
    { q: "Q1: Who can join ASQUARE Academy Chakan?", a: "Students of Class XI, XII, and XII pass-outs preparing for JEE Main & Advanced." },
    { q: "Q2: What subjects are included?", a: "Physics, Chemistry, and Mathematics (PCM)." },
    { q: "Q3: Do you conduct mock exams?", a: "Yes, weekly unit tests and JEE mock exams are included." },
    { q: "Q4: What courses are available?", a: "2-Year, 1-Year, Crash Courses & Dropper Batches." },
    { q: "Q5: What is the batch size?", a: "We keep small batches for better student interaction." },
    { q: "Q6: Do parents receive progress updates?", a: "Yes, through reports and regular PTMs." },
    { q: "Q7: Which areas does the Chakan branch serve?", a: "Easily accessible from Chakan, Moshi, Bhosari, Talegaon, Alandi, and nearby PCMC regions." },
  ];

  return (
    <>
      <Helmet>
        <title>Best IIT JEE Coaching Classes in Chakan Pune | ASQUARE Academy</title>
        <meta name="title" content="Best IIT JEE Coaching Classes in Chakan Pune | ASQUARE Academy" />
        <meta name="description" content="Join ASQUARE Academy for top IIT JEE Coaching Classes in Chakan Pune. Expert faculty, PCM syllabus coverage, mock exams & personalized JEE Main & Advanced preparation." />
        <meta name="keywords" content="IIT JEE coaching classes in chakan,
Best IIT JEE Coaching in chakan,
Top JEE Mains Coaching Classes chakan,
IIT JEE Advanced Preparation chakan,
JEE Advanced coaching classes in chakan,
IIT JEE Classes in chakan,
Best IIT JEE Classes in chakan,
Top IIT JEE Classes in chakan,
" />
        <script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "name": "ASQUARE Academy - IIT JEE Coaching Classes in Chakan Pune",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-chakan-pune",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-chakan-pune",
      "telephone": "9766118877",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Chakan",
        "addressRegion": "Pune",
        "addressCountry": "India"
      },
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune"
      ],
      "description": "ASQUARE Academy offers the best IIT JEE Coaching Classes in Chakan Pune. Courses for JEE Main & Advanced include PCM subjects, mock tests, small batches & expert guidance."
    },
    {
      "@type": "WebPage",
      "name": "IIT JEE Coaching Classes in Chakan Pune | ASQUARE Academy",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-chakan-pune",
      "description": "Best IIT JEE Coaching Classes in Chakan Pune with expert faculty, PCM subjects, mock exams, small batches, and JEE Main & Advanced preparation at ASQUARE Academy."
    },
    {
      "@type": "EducationalOrganization",
      "name": "ASQUARE Academy",
      "url": "https://www.asquareclasses.com/",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune"
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can join ASQUARE Academy Chakan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students of Class XI, XII, and XII pass-outs preparing for JEE Main & Advanced can join ASQUARE Academy Chakan."
          }
        },
        {
          "@type": "Question",
          "name": "What subjects are included?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Physics, Chemistry, and Mathematics (PCM) are covered in the IIT JEE courses."
          }
        },
        {
          "@type": "Question",
          "name": "Do you conduct mock exams?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, weekly unit tests and JEE mock exams are part of the regular assessment plan."
          }
        },
        {
          "@type": "Question",
          "name": "What courses are available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE Academy offers 2-Year, 1-Year, Crash Courses & Dropper Batches for JEE preparation."
          }
        },
        {
          "@type": "Question",
          "name": "What is the batch size?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We maintain small batch sizes for individual focus and better interaction."
          }
        },
        {
          "@type": "Question",
          "name": "Do parents receive progress updates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, parents receive progress reports and updates through regular PTMs."
          }
        },
        {
          "@type": "Question",
          "name": "Which areas does the Chakan branch serve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Chakan branch serves students from Chakan, Moshi, Bhosari, Talegaon, Alandi, and nearby PCMC regions."
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
          "name": "IIT JEE Coaching",
          "item": "https://www.asquareclasses.com/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "IIT JEE Coaching Classes in Chakan Pune",
          "item": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-chakan-pune"
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
                <div key={i} className={`carousel-item ${i === 0 ? "active" : ""}`} style={{ height: "400px", backgroundImage: `url(${img})`, backgroundSize: "cover", backgroundPosition: "center" }}>
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
                Ace IIT JEE Main & Advanced with{" "}
                <span className="highlight-text text-warning">ASQUARE Academy</span> Chakan
              </motion.h1>

              <motion.h2>Quality Coaching for Engineering Aspirants in Chakan</motion.h2>

              <p className="lead d-none d-md-block">
                Searching for <b className="bld">IIT-JEE classes in Chakan, Pune?</b> At <b className="bld">ASQUARE Academy,</b> we provide structured study modules, concept-based teaching, and exam-focused preparation. Our Chakan branch supports students aiming for <b className="bld">IITs, NITs, IIITs, and India’s top engineering institutes.</b> With personalized mentoring, rigorous practice sessions, and updated study material, students are fully prepared for <b className="bld">JEE Main & Advanced.</b>
              </p>

              <p className="lead d-block d-md-none">
                Searching for <b className="bld">IIT-JEE classes in Chakan, Pune?</b> At <b className="bld">ASQUARE Academy,</b> we provide structured study modules, concept-based teaching, and exam-focused preparation. Our Chakan branch supports students aiming for <b className="bld">IITs, NITs, IIITs, and India’s top engineering institutes.</b>
              </p>

              <a className="btn btn-warning btn-lg rounded-pill mt-3 shadow-lg">
                <Link to={'/'} className="nav-item nav-item-list text-warning">
                  🚀 Enroll Now
                </Link>
              </a>
            </div>

            {/* Right Side: Image */}
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
            Why ASQUARE Academy in <span className="text-primary">Chakan?</span>
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
                The Joint Entrance Examination (JEE) is among the toughest entrance tests in India. At ASQUARE Academy Chakan, our courses focus on concept clarity, speed, accuracy, and problem-solving techniques to prepare students for both <b className="bld">JEE Main & Advanced.</b>
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
                Teaching <span className="text-primary">Methodology</span>
              </motion.h3>

              <div className="row g-4 justify-content-center">
                {["Daily topic-wise lectures with assignments", "One-to-one doubt-solving support", "Weekly unit tests & mock exams for practice", "Parent–teacher meetings for performance updates"].map((text, i) => (
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

      {/* Highlights */}
      <section className="jee-highlights py-5 text-white">
        <div className="container text-center">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
            Key Features of the <span className="highlight-text text-warning">Chakan</span> Branch
          </motion.h3>

          <div className="row justify-content-center g-4">
            {[
              "• Small batch strength for individual mentoring",
              "• Updated IIT-JEE study notes, test papers & practice material",
              "• Workshops on exam hacks, problem-solving & strategy building",
              "• Regular feedback reports shared with parents",
              "• Recognized as a trusted IIT-JEE coaching institute in Chakan, Pune"
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
                Results That<span className="highlight-text text-warning">&nbsp;Speak&nbsp;</span>
              </motion.h3>
              <p className="lead text-light">
                ASQUARE Academy has produced IIT-JEE toppers and high-rank achievers over the years. The Chakan branch continues this success with quality coaching, dedicated teachers, and a student-focused approach.
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
            Join ASQUARE Academy <span className="highlight-text text-warning">&nbsp;Chakan Today&nbsp;</span>
          </motion.h3>

          <p className="lead mb-4">
            Begin your engineering journey with ASQUARE Academy’s IIT-JEE coaching in Chakan, Pune. With expert faculty, advanced study resources, and consistent results, we are your trusted partner for JEE, CET & NEET coaching.
          </p>

          <p><MapPin className="text-warning" />Serving students from <b className="bld">Chakan, Moshi, Bhosari, Talegaon, Alandi, and nearby areas in Pune.</b></p>

          <a className="btn btn-lg btn-warning fw-bold mt-3 px-5 py-3 rounded-pill shadow-lg">
            <Link to={'/'} className="nav-item nav-item-list text-white">
              ⚡ Admissions Open – Enroll now!
              &nbsp;<p className="text-warning">Limited seats available! Enroll today to secure your seat.</p>
            </Link>
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default IITJEEChakan;
