// src/.../IITJEEBundGarden.jsx
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

import sampleimg1 from '../../../Assets/SampleImages/Banners/Banners (1).jpeg';
import sampleimg11 from '../../../Assets/SampleImages/Banners/Banners (2).jpeg';
import sampleimg2 from '../../../Assets/SampleImages/MobBanners/MobBanner2.jpeg';
import sampleimg22 from'../../../Assets/SampleImages/MobBanners/MobBanner3.jpeg';

import sampleimg3 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (9).jpeg';
import sampleimg4 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (2).jpeg';
import sampleimg6 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (4).jpeg';

import Form from '../../../Components/Form2/Form2.jsx';
const Reviews = React.lazy(() => import("../../../Components/Reviews/Reviews.jsx"));

function IITJEEBundGarden() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  const wordFilePath = "/mnt/data/Best IIT JEE Coaching Classes in Bund Garden.docx"; // as requested

  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const whyChoose = [
    { Icon: Users, title: "Experienced Faculty", desc: "Expert educators specializing in Physics, Chemistry, and Mathematics." },
    { Icon: BookOpen, title: "In-Depth Curriculum", desc: "A perfect blend of NCERT concepts and advanced-level problem-solving." },
    { Icon: Target, title: "Focused Batches", desc: "Small group sizes for maximum personal attention." },
    { Icon: BarChart, title: "Performance Monitoring", desc: "Regular quizzes, test analysis, and improvement tracking." },
    { Icon: Lightbulb, title: "Hybrid Learning", desc: "Flexible options for both offline and online coaching." },
     { Icon: Lightbulb, title: "Academic Mentorship", desc: "Helping students maintain a balance between board exams and JEE goals." },
  ];

  const subjects = [
    { title: "2-Year Integrated Course (for Class 11 students)", desc: "" },
    { title: "1-Year Target Course (for Class 12 students)", desc: "" },
    { title: "Dropper/Repeater Program", desc: "" },
    { title: "Short-Term Crash Course (2–3 months intensive training)", desc: "" },
  ];

  const batches = [
    { title: "Concept → Application → Evaluation → Revision", desc: "We believe in a progressive learning cycle that ensures deep understanding, consistent practice, and confident performance." },
  ];

  const highlights = [
    "Latest and well-structured JEE study material (digital + printed)",
    "Doubt-clearing sessions after every major topic",
    "Smart performance analytics and personalized feedback",
    "Workshops focused on accuracy, speed, and strategy",
    "Widely recognized as one of the Top IIT JEE Coaching Centers in Bund Garden"
  ];

  const faqs = [
    { q: "Q1: Does ASQUARE Academy train students for both JEE Mains and JEE Advanced exams?", a: "Yes, ASQUARE offers structured programs covering the complete syllabus, strategy sessions, and practice tests for both Mains and Advanced." },
    { q: "Q2: Are individual doubt-solving sessions available at the Bund Garden branch?", a: "Yes, students get personalized doubt-clearing, after-class support, and one-on-one mentoring whenever needed." },
    { q: "Q3: Do you conduct special IIT JEE batches for dropper students in Bund Garden Pune?", a: "Absolutely—ASQUARE has dedicated repeater/dropper batches focusing on concept mastery and rigorous problem-solving." },
    { q: "Q4: How is the teaching style different from other IIT JEE institutes in Bund Garden Pune?", a: "Our approach includes concept-driven learning, regular assessments, performance tracking, and small-batch teaching for maximum attention." },
    { q: "Q5: Can students from Koregaon Park, MG Road, and nearby localities join the Bund Garden center?", a: "Yes! Students from Koregaon Park, MG Road, Camp, Dhole Patil Road, and Sangamwadi commonly attend our IIT JEE classes." },
    { q: "Q6: Do you offer Top JEE Mains Coaching Classes in Bund Garden Pune for Class XI & XII?", a: "Yes, we provide year-long programs for both classes, covering fundamentals, NCERT strengthening, and PYQ-based practice." },
    { q: "Q7: Are mock tests included for IIT JEE Advanced Preparation in Bund Garden Pune?", a: "Yes—weekly and monthly mock tests, full-length papers, and detailed performance reports are part of the curriculum." },
    { q: "Q8: What facilities does the IIT JEE Coaching Institute in Bund Garden Pune provide?", a: "We offer digital classrooms, study materials, expert faculty, assignment tracking, and regular parent-teacher reviews." },
  ];

  return (
    <>
      <Helmet>
        <title>IIT JEE Coaching Classes & Institute in Bund Garden Pune | ASQUARE</title>
        <meta name="title" content="IIT JEE Coaching Classes & Institute in Bund Garden Pune | ASQUARE" />
        <meta name="description" content="ASQUARE Academy offers top IIT JEE coaching classes and institute in Bund Garden Pune with expert faculty, JEE Mains & Advanced prep, mock tests & personalized mentoring." />
        <meta name="keywords" content={
          `IIT JEE coaching classes in Bund Garden pune,
Best IIT JEE Coaching in Bund Garden pune,
Top JEE Mains Coaching Classes Bund Garden pune,
IIT JEE Advanced Preparation Bund Garden pune,
JEE Advanced coaching classes in Bund Garden pune,
IIT JEE Classes in Bund Gardenpune,
Best IIT JEE Classes in Bund Garden pune,
Top IIT JEE Classes in Bund Garden pune,
IIT JEE coaching Institute Bund Garden pune`
        } />

        {/* JSON-LD schema (using uploaded file path as requested) */}
        <script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "name": "ASQUARE Academy - IIT JEE Coaching Classes & Institute Bund Garden Pune",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-Institute-bund-garden-pune",
      "telephone": "9766118877",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bund Garden",
        "addressRegion": "Pune",
        "addressCountry": "India"
      },
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune/"
      ],
      "description": "ASQUARE Academy offers top IIT JEE coaching classes and institute in Bund Garden Pune for JEE Mains and Advanced preparation with expert faculty and mock tests."
    },
    {
      "@type": "WebPage",
      "name": "IIT JEE Coaching Classes & Institute in Bund Garden Pune | ASQUARE",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-Institute-bund-garden-pune",
      "description": "Top IIT JEE coaching classes and institute in Bund Garden Pune offering JEE Mains & Advanced coaching, mock tests, doubt-solving sessions, and personalized mentoring."
    },
    {
      "@type": "EducationalOrganization",
      "name": "ASQUARE Academy",
      "url": "https://www.asquareclasses.com/",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "description": "Leading institute providing IIT JEE coaching classes in Bund Garden Pune with advanced preparation modules and expert faculty."
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does ASQUARE Academy train students for both JEE Mains and JEE Advanced exams?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, ASQUARE offers structured programs covering the full syllabus, strategy sessions, and practice tests for both JEE Mains and Advanced."
          }
        },
        {
          "@type": "Question",
          "name": "Are individual doubt-solving sessions available at the Bund Garden branch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, students receive personalized doubt-clearing, after-class support, and one-on-one mentoring."
          }
        },
        {
          "@type": "Question",
          "name": "Do you conduct special IIT JEE batches for dropper students in Bund Garden Pune?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, ASQUARE provides dedicated dropper batches focusing on concept mastery and rigorous practice."
          }
        },
        {
          "@type": "Question",
          "name": "How is the teaching style different from other IIT JEE institutes in Bund Garden Pune?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE focuses on concept-driven learning, regular tests, performance tracking, and small-batch teaching."
          }
        },
        {
          "@type": "Question",
          "name": "Can students from Koregaon Park, MG Road, and nearby localities join the Bund Garden center?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, students from Koregaon Park, MG Road, Camp, Dhole Patil Road, and Sangamwadi commonly attend."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer Top JEE Mains Coaching Classes in Bund Garden Pune for Class XI & XII?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we offer year-long programs for both classes with fundamentals, NCERT strengthening, and PYQ practice."
          }
        },
        {
          "@type": "Question",
          "name": "Are mock tests included for IIT JEE Advanced Preparation in Bund Garden Pune?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, weekly and monthly mock tests, full-length papers, and performance analysis are included."
          }
        },
        {
          "@type": "Question",
          "name": "What facilities does the IIT JEE Coaching Institute in Bund Garden Pune provide?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Facilities include digital classrooms, study materials, expert faculty, assignment tracking, and parent-teacher reviews."
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
          "item": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "IIT JEE Coaching Classes Bund Garden Pune",
          "item": "https://www.asquareclasses.com/iit-jee-coaching-classes-Institute-bund-garden-pune"
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

      {/* Hero Section (H1 as requested) */}
      <section className="jee-hero-section text-white d-flex align-items-center bg-transparent">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-12 col-lg-8 col-md-12 text-center text-md-start">
              <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
                Achieve Your IIT JEE Goals with <span className="highlight-text text-warning">ASQUARE Academy</span> – Bund Garden
              </motion.h1>

              <p className="lead d-none d-md-block">Cracking the IIT JEE exam takes determination, a clear strategy, and the right mentors. At ASQUARE Academy, we offer one of the most result-oriented IIT JEE coaching programs in Bund Garden, Pune.</p>

              <p className="lead d-none d-md-block">
                Our mission is to help students build a strong conceptual foundation, sharpen their analytical thinking, and develop exam-ready confidence.
                Counted among the leading IIT JEE institutes in Bund Garden, ASQUARE Academy provides dedicated coaching for both JEE Mains and Advanced, ensuring every student receives comprehensive guidance. Learners from Bund Garden, Koregaon Park, Camp, MG Road, Sangamwadi, and Yerwada rely on ASQUARE to turn their engineering dreams into reality.
              </p>

              <p className="lead d-block d-md-none">
                Achieve your IIT JEE goals with ASQUARE Academy in Bund Garden — expert mentors and focused JEE Mains & Advanced coaching.
              </p>

              <a className="btn btn-warning btn-lg rounded-pill mt-3 shadow-lg">
                <Link to={'/'} className="nav-item nav-item-list text-warning">🚀 Enroll Now</Link>
              </a>
            </div>

            <div className="col-12 col-lg-4 col-md-12 mt-5 mt-md-0 text-center">
              <img src={sampleimg3} alt="ASQUARE Academy Bund Garden" className="img-fluid mx-auto fade-in imgsiz" style={{ objectFit: "contain", opacity: 0.95, borderRadius: "10px" }} />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Why Choose (H2) */}
      <section className="jee-why py-5 ">
        <div className="container">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">
            <span className="highlight-text text-primary">Why Choose ASQUARE Academy for IIT JEE Preparation in Bund Garden?</span>
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

      {/* Programs Offered (H3) */}
      <section className="jee-programs py-5 bg-light">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-8 text-center text-lg-start order-2">
              <motion.h4 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-centerr">
                <span className="highlight-text text-primary">Programs Offered at ASQUARE – Bund Garden</span>
              </motion.h4>

              <p className="lead text-secondary">
                {/* exact content preserved */}
              </p>

              <div className="mb-3">
                <ul className="list-unstyled">
                  <li>• 2-Year Integrated Course (for Class 11 students)</li>
                  <li>• 1-Year Target Course (for Class 12 students)</li>
                  <li>• Dropper/Repeater Program</li>
                  <li>• Short-Term Crash Course (2–3 months intensive training)</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 text-center order-1">
              <motion.img whileHover={{ scale: 1.03 }} src={sampleimg4} alt="Programs" className="img-fluid rounded-4 shadow-lg mx-auto d-block" style={{ width: "85%" }} />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Teaching Philosophy (H4) */}
      <section className="jee-gradient-section py-5 text-white">
        <div className="container">
          <motion.h4 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">
            <span className="highlight-text text-warning">ASQUARE Teaching Philosophy</span>
          </motion.h4>

          <div className="row g-4">
            <div className="col-lg-12">
              <div className="jee-subject-box mb-4 p-3 rounded-4 bg-white bg-opacity-10 backdrop-blur-md border border-light border-opacity-25">
                <h5 className="fw-semibold">Concept → Application → Evaluation → Revision</h5>
                <p className="small mb-0">We believe in a progressive learning cycle that ensures deep understanding, consistent practice, and confident performance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Highlights (H4) */}
      <section className="jee-highlights py-5 text-white">
        <div className="container text-center">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
            <span className="highlight-text text-warning">Highlights of ASQUARE Academy – Bund Garden</span>
          </motion.h3>

          <div className="row justify-content-center g-4">
            {highlights.map((text, i) => (
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

      {/* Students' Achievements (H4) */}
      <section className="jee-results py-5 text-white">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-8 text-center text-lg-start">
              <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
                <span className="highlight-text text-warning">Our Students’ Achievements</span>
              </motion.h3>
              <p className="lead text-light">
                Students from Bund Garden and nearby areas have delivered outstanding results in JEE Mains and Advanced, earning seats in IITs, NITs, and top engineering colleges across India. The consistent success of our batches makes ASQUARE a trusted name for IIT JEE preparation in Pune.
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
            Join ASQUARE Academy <span className="highlight-text text-warning">&nbsp;Bund Garden Today &nbsp;</span>
          </motion.h3>

          <p className="lead mb-4">
            Searching for the top IIT JEE coaching in Bund Garden, Pune? Your search ends here! ASQUARE Academy offers structured programs, expert mentoring, and a proven track record of success.
          </p>
          <p><MapPin className="text-warning" /> Easily accessible to students from Bund Garden, Koregaon Park, Camp, MG Road, Sangamwadi, and Yerwada.</p>

          <a className="btn btn-lg btn-warning fw-bold mt-3 px-5 py-3 rounded-pill shadow-lg">
            <Link to={'/'} className="nav-item nav-item-list text-white">
              ⚡ Admissions Open – Book Your Seat Now!
              {/* <span className="d-block text-warning small">Limited seats available.</span> */}
            </Link>
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default IITJEEBundGarden;
