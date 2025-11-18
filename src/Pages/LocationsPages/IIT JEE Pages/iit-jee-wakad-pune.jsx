
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

import sampleimg2 from '../../../Assets/SampleImages/sampleimg2.jpeg';
import sampleimg1 from '../../../Assets/SampleImages/Banners/Banners (9).jpeg';
import sampleimg11 from '../../../Assets/SampleImages/Banners/Banners (1).jpeg';
import sampleimg3 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (9).jpeg';
import sampleimg4 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (2).jpeg';
import sampleimg6 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (4).jpeg';

import Form from '../../../Components/Form2/Form2.jsx';

const Reviews = React.lazy(() => import("../../../Components/Reviews/Reviews.jsx"));

function IITJEEWakad() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Why Choose (verbatim from Wakad word file). Source: :contentReference[oaicite:3]{index=3}
  const whyChoose = [
    { Icon: Users, title: "Qualified Faculty Experts", desc: "Specialists in IIT-JEE, MHT-CET & NEET coaching." },
    { Icon: BookOpen, title: "Complete PCM Syllabus", desc: "Physics, Chemistry & Mathematics covered per latest JEE exam patterns." },
    { Icon: Target, title: "Personal Attention", desc: "Small batches to ensure better guidance and mentoring." },
    { Icon: BarChart, title: "Exam Simulation Practice", desc: "Weekly tests, mock exams & detailed performance reviews." },
    { Icon: Lightbulb, title: "Career Guidance Sessions", desc: "Motivation, study planning & stress management support." },
  ];

  // Subjects (verbatim). Source: :contentReference[oaicite:4]{index=4}
  const subjects = [
    { title: "Physics", desc: "In-depth learning with numerical problem-solving" },
    { title: "Chemistry", desc: "Thorough coverage of Physical, Organic & Inorganic Chemistry" },
    { title: "Mathematics", desc: "Rigorous practice in Algebra, Calculus, Geometry, Trigonometry & Probability" },
  ];

  // Batches (verbatim). Source: :contentReference[oaicite:5]{index=5}
  const batches = [
    { title: "2-Year Foundation Program (10th → 12th Moving Students)", desc: "Covers XI & XII Boards + JEE prep." },
    { title: "1-Year Advanced Course (11th → 12th Moving Students)", desc: "Comprehensive JEE program with XII syllabus." },
    { title: "Crash Course (2–3 Months)", desc: "Fast-track revision & exam-based practice." },
    { title: "Repeater/Dropper Batch (XII Pass-outs)", desc: "One-year specialized JEE coaching for repeaters." },
  ];

  // FAQs (verbatim from Wakad file). Source: 
  const faqs = [
    { q: "Q1: Who can join ASQUARE Academy Wakad?", a: "Students of Class XI, XII, and XII pass-outs targeting JEE Main & Advanced can enroll. ASQUARE is among the Best IIT JEE Coaching in Wakad Pune, offering structured guidance for engineering aspirants to achieve top results." },
    { q: "Q2: What subjects are included in the IIT JEE course?", a: "Our curriculum focuses on Physics, Chemistry, and Mathematics (PCM) — the foundation of JEE preparation. Each subject is taught by expert faculty to build problem-solving skills for IIT JEE Advanced Preparation in Wakad Pune." },
    { q: "Q3: Do you conduct mock tests and practice exams?", a: "Yes, regular weekly tests and full-length JEE mock exams are part of the learning process. These assessments help students evaluate their progress, making us one of the Top JEE Mains Coaching Classes in Wakad Pune." },
    { q: "Q4: What types of courses are offered at ASQUARE Wakad?", a: "We offer 2-Year, 1-Year, Crash Courses, and Dropper Batches, designed for students at different academic stages. Each course is structured for comprehensive IIT JEE Classes in Wakad Pune." },
    { q: "Q5: How many students are there in a batch?", a: "Our small batch sizes allow personalized attention, focused mentoring, and interactive learning. This setup ensures ASQUARE remains the Best IIT JEE Classes in Wakad Pune for serious JEE aspirants." },
    { q: "Q6: Do parents receive updates on their child’s progress?", a: "Yes, parents receive regular performance reports and PTM updates to track academic growth. This transparency sets ASQUARE apart among IIT JEE Coaching Classes in Wakad Pune." },
    { q: "Q7: What makes ASQUARE the Best IIT JEE Coaching in Wakad Pune?", a: "With expert mentors, proven study material, and a student-centric approach, ASQUARE stands as the Best IIT JEE Coaching in Wakad Pune. Our results-driven strategy ensures consistent improvement and exam excellence." },
    { q: "Q8: Which areas does the Wakad branch serve?", a: "The ASQUARE Wakad branch is easily accessible from Hinjewadi, Thergaon, Kalewadi, Baner, and other PCMC localities. It’s a leading destination for students seeking Top IIT JEE Classes in Wakad Pune." },
  ];

  return (
    <>
      <Helmet>
        <title>Best IIT JEE Coaching Classes in Wakad Pune | ASQUARE Academy</title>

        <meta name="title" content="Best IIT JEE Coaching Classes in Wakad Pune | ASQUARE Academy" />
        <meta name="description" content="Join ASQUARE Academy for the Best IIT JEE Coaching Classes in Wakad Pune. Expert faculty, mock tests & small batches for JEE Main & Advanced success." />
        <meta name="keywords" content={`IIT JEE coaching classes in wakad pune, Best IIT JEE Coaching in wakad pune, Top JEE Mains Coaching Classes wakad pune, IIT JEE Advanced Preparation wakad pune, JEE Advanced coaching classes in wakad pune, IIT JEE Classes in wakad pune, Best IIT JEE Classes in wakad pune, Top IIT JEE Classes in wakad pune`} />

        {/* JSON-LD schema taken verbatim from Wakad Word file. Source: :contentReference[oaicite:7]{index=7} */}
        <script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-wakad-pune#localbusiness",
      "name": "ASQUARE Academy Wakad",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "telephone": "+91-9766118877",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-wakad-pune",
      "priceRange": "$$",
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune"
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Wakad, Pune",
        "addressLocality": "Wakad",
        "addressRegion": "Maharashtra",
        "postalCode": "411057",
        "addressCountry": "IN"
      },
      "description": "ASQUARE Academy offers the Best IIT JEE Coaching Classes in Wakad Pune with expert faculty, mock tests, and personalized mentoring for JEE Main & Advanced.",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "310"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Aditya Kulkarni"
          },
          "datePublished": "2025-08-14",
          "reviewBody": "ASQUARE Academy Wakad provides excellent IIT JEE coaching. Teachers explain concepts clearly and the test series is very helpful.",
          "name": "Top Coaching for IIT JEE Aspirants!",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          }
        },
        {
          "@type": "Review",
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Priya Shah"
          },
          "datePublished": "2025-07-05",
          "reviewBody": "The batch size is small and teachers give individual attention. ASQUARE Wakad truly focuses on student improvement.",
          "name": "Highly Recommended IIT JEE Classes!",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          }
        }
      ]
    },
    {
      "@type": "EducationalOrganization",
      "name": "ASQUARE Academy Wakad",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-wakad-pune",
      "description": "IIT JEE Coaching Classes in Wakad Pune by ASQUARE Academy – offering Physics, Chemistry & Mathematics courses with mock tests and focused JEE preparation."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-wakad-pune#webpage",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-wakad-pune",
      "name": "Best IIT JEE Coaching Classes in Wakad Pune | ASQUARE Academy",
      "description": "Enroll in the Best IIT JEE Coaching Classes in Wakad Pune. ASQUARE Academy offers expert guidance, small batches, and structured study programs for JEE success."
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
          "name": "IIT JEE Coaching Wakad",
          "item": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-wakad-pune"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can join ASQUARE Academy Wakad?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students of Class XI, XII, and XII pass-outs targeting JEE Main & Advanced can enroll at ASQUARE Academy Wakad Pune."
          }
        },
        {
          "@type": "Question",
          "name": "What subjects are included in the IIT JEE course?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The IIT JEE course includes Physics, Chemistry, and Mathematics taught by expert faculty for conceptual clarity and strong problem-solving skills."
          }
        },
        {
          "@type": "Question",
          "name": "Do you conduct mock tests and practice exams?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, regular weekly tests and full-length JEE mock exams help students evaluate progress and prepare effectively for IIT JEE."
          }
        },
        {
          "@type": "Question",
          "name": "What types of courses are offered at ASQUARE Wakad?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer 2-Year, 1-Year, Crash Courses, and Dropper Batches, designed for students at different academic stages."
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

        <div className="jee-slider-form-box">
          <div className="jee-enquiry-form rounded-4 ">
            <MobileForm />
            <Form />
          </div>
        </div>
      </section>

      <hr />

      {/* Hero Section — verbatim from Wakad file. Source: :contentReference[oaicite:8]{index=8} */}
      <section className="jee-hero-section text-white d-flex align-items-center bg-transparent">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-12 col-lg-8 col-md-12 text-center text-md-start">
              <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
                Transform Your JEE Preparation with   <span className="highlight-text text-warning">ASQUARE Academy</span> Wakad
              </motion.h1>

              <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                Premier Coaching Hub for Engineering Aspirants in Wakad
              </motion.h2>

              <p className="lead d-none d-md-block">
                Searching for IIT-JEE coaching classes in Wakad, Pune? At ASQUARE Academy, we provide concept-based learning, structured programs, and personalized mentoring that prepare students for success in JEE Main & Advanced. Our Wakad branch focuses on helping aspirants crack IITs, NITs, IIITs, and India’s leading engineering colleges through systematic study, doubt-solving support, and result-driven strategies.
              </p>

              <p className="lead d-block d-md-none">
                Searching for IIT-JEE coaching classes in Wakad, Pune? At ASQUARE Academy, we provide concept-based learning, structured programs, and personalized mentoring that prepare students for success in JEE Main & Advanced. Our Wakad branch focuses on helping aspirants crack IITs, NITs, IIITs, and India’s leading engineering colleges through systematic study, doubt-solving support, and result-driven strategies.
              </p>
    <a

                className="btn btn-warning btn-lg rounded-pill mt-3 shadow-lg"
              >      <Link
                to={'/'}
                className="nav-item nav-item-list text-warning"

              >
                  🚀 Enroll Now
                </Link>

              </a>
            </div>

            <div className="col-12 col-lg-4 col-md-12 mt-5 mt-md-0 text-center">
              <img src={sampleimg3} alt="ASQUARE Academy Wakad" className="img-fluid mx-auto fade-in imgsiz" style={{ objectFit: "contain", opacity: 0.95, borderRadius: "10px" }} />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Why Choose */}
      <section className="jee-why py-5 ">
        <div className="container">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">
            Why Students Prefer <span className="highlight-text text-primary">SQUARE Academy</span>A Wakad
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

      {/* Programs Section — verbatim from Wakad file */}
      <section className="jee-programs py-5 bg-light">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-8 text-center text-lg-start order-2">
              <motion.h4 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-centerr">
                Programs Designed for  <span className="highlight-text text-primary">JEE Success</span>
              </motion.h4>

              <p className="lead text-secondary">
                The Joint Entrance Examination (JEE) demands clarity, practice, and exam readiness. At ASQUARE Academy Wakad, we design our programs to build strong subject foundations, sharpen problem-solving skills, and improve exam strategies for both JEE Main & Advanced.
              </p>
            </div>

            <div className="col-lg-4 text-center order-1">
              <motion.img whileHover={{ scale: 1.03 }} src={sampleimg4} alt="JEE Coaching Wakad" className="img-fluid rounded-4 shadow-lg mx-auto d-block" style={{ width: "85%" }} />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Subjects + Batches Section — Left: Subject-Wise Coverage, Right: Course Structures & Batches */}
      <section className="jee-gradient-section py-5 text-white">
        <div className="container">
          <motion.h4 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">
            Subject-Wise Coverage
            <span className="highlight-text text-warning">&nbsp;&&nbsp;</span>
            Course Structures & Batches
          </motion.h4>

          <br />

          <div className="row g-4">
            <div className="col-lg-6">
              <h4 className="highlight-text text-warning fw-bold mb-4 text-centerr">Subject-Wise Coverage</h4>
              {subjects.map((sub, i) => (
                <div key={i} className="jee-subject-box mb-4 p-3 pb-4 pt-4 rounded-4 bg-white bg-opacity-10 backdrop-blur-md border border-light border-opacity-25">
                  <h5 className="fw-semibold">{sub.title}</h5>
                  <p className="small mb-0">{sub.desc}</p>
                </div>
              ))}
            </div>

            <div className="col-lg-6">
              <h4 className="highlight-text text-warning fw-bold mb-4 text-centerr">Course Structures & Batches</h4>
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

      {/* Teaching Methodology — verbatim from Wakad file */}
      <section className="jee-method py-5 bg-light">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-12 text-center text-lg-start">
              <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">
                Our Approach to <span className="highlight-text text-primary">Teaching</span>
              </motion.h3>

              <div className="row g-4 justify-content-center">
                {[
                  "Daily interactive lectures with topic-based assignments",
                  "Individual doubt-solving sessions",
                  "Weekly chapter-wise tests & mock exams",
                  "Parent–teacher meetings for performance tracking"
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

      {/* Key Highlights — verbatim */}
      <section className="jee-highlights py-5 text-white">
        <div className="container text-center">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
            Key Highlights of Wakad Branch
          </motion.h3>

          <div className="row justify-content-center g-4">
            {[
              "Limited students per batch for personalized mentoring",
              "Updated JEE study notes, question banks & practice papers",
              "Workshops on time management, exam strategies & problem-solving skills",
              "Regular parent updates & performance reviews",
              "Recognized as a top IIT-JEE coaching institute in Wakad, Pune"
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

      {/* Results Section — verbatim */}
      <section className="jee-results py-5 text-white">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-8 text-center text-lg-start">
              <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
                Proven Excellence in <span className="highlight-text text-warning">Results</span>
              </motion.h3>
              <p className="lead text-light">
                ASQUARE Academy has a consistent record of producing IIT-JEE toppers and top scorers. The Wakad branch continues this legacy by offering quality education, structured guidance, and a result-oriented environment.
              </p>
            </div>

            <div className="col-lg-4 text-center">
              <motion.img whileHover={{ scale: 1.05 }} src={sampleimg6} alt="Success Stories" className="img-fluid rounded-4 shadow-lg mx-auto d-block" style={{ width: "80%" }} />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* FAQs — verbatim from Wakad file (split into two accordions) */}
      <section className="jee-faq py-5">
        <div className="container">
          <div className="text-center mb-5">
            <div className="d-inline-block bg-primary bg-opacity-10 text-primary fw-bold rounded-pill px-3 py-1 mb-3">
              <BadgeQuestionMark /> FAQs
            </div>

            <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">
              FAQs – JEE Coaching in <span className="highlight-text text-primary">Wakad</span> 
            </motion.h3>
          </div>

          <div className="row justify-content-center">
            <div className="col-12 col-md-6 mb-4 mb-md-0 ">
              <FAQAccordion faqs={faqs.slice(0, Math.ceil(faqs.length / 2))} accordionId="wakadFaqLeft" />
            </div>

            <div className="col-12 col-md-6">
              <FAQAccordion faqs={faqs.slice(Math.ceil(faqs.length / 2))} accordionId="wakadFaqRight" />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Final CTA — verbatim */}
      <section id="enroll" className="jee-enroll-section py-5 text-center text-white">
        <div className="container">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
            Enroll Today at  <span className="highlight-text text-warning">ASQUARE Academy</span> Wakad
          </motion.h3>

          <p className="lead mb-4">
            Take the smart step towards engineering success with ASQUARE Academy’s IIT-JEE coaching in Wakad, Pune. With skilled faculty, modern resources, and consistent results, we are your trusted partner for JEE, CET & NEET preparation.
          </p>

          <p><MapPin className="text-warning" /> Serving students from Wakad, Hinjewadi, Thergaon, Kalewadi, Baner, and surrounding Pune regions.</p>

          <a className="btn btn-lg btn-warning fw-bold mt-3 px-5 py-3 rounded-pill shadow-lg">
            <Link to={'/'} className="nav-item nav-item-list text-warning">
              ⚡ Admissions Open – Limited seats available! Book your spot today.
            </Link>
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default IITJEEWakad;
