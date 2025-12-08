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

import sampleimg1 from '../../../Assets/SampleImages/Banners/Banners (1).jpeg';
import sampleimg11 from '../../../Assets/SampleImages/Banners/Banners (9).jpeg';
import sampleimg2 from '../../../Assets/SampleImages/MobBanners/MobBanner2.jpeg';
import sampleimg22 from'../../../Assets/SampleImages/MobBanners/MobBanner4.jpeg';
import sampleimg3 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (9).jpeg';
import sampleimg4 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (2).jpeg';
import sampleimg6 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (4).jpeg';

import Form from "../../../Components/Form2/Form2.jsx";
const Reviews = React.lazy(() => import("../../../Components/Reviews/Reviews.jsx"));

function IITJEEWagholi() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const whyChoose = [
    { Icon: Users, title: "Skilled Faculty", desc: "Expert mentors experienced in IIT-JEE, CET & NEET coaching." },
    { Icon: BookOpen, title: "Complete PCM Curriculum", desc: "Physics, Chemistry & Mathematics taught as per updated JEE guidelines." },
    { Icon: Target, title: "Focused Mentoring", desc: "Small batches to ensure doubt-solving and individual attention." },
    { Icon: BarChart, title: "Regular Test Practice", desc: "Weekly chapter tests, mock exams & actionable performance reports." },
    { Icon: Lightbulb, title: "Confidence Building", desc: "Motivational sessions and exam strategy workshops to boost performance." },
  ];

  const subjects = [
    { title: "Physics", desc: "Concept clarity, numericals & application-based learning." },
    { title: "Chemistry", desc: "Thorough preparation in Physical, Organic & Inorganic Chemistry." },
    { title: "Mathematics", desc: "Rigorous practice in Algebra, Geometry, Calculus, Probability & Trigonometry." },
  ];

  const batches = [
    { title: "2-Year Foundation Course (10th → 12th Moving Students)", desc: "Board exams + JEE integrated program." },
    { title: "1-Year Intensive Course (11th → 12th Moving Students)", desc: "Focused XII + JEE preparation." },
    { title: "Crash Course (2–3 Months)", desc: "Short-term exam-focused revision and practice." },
    { title: "Dropper/Repeater Batch (XII Pass-outs)", desc: "One-year specialized JEE training for repeaters." },
  ];

  const faqs = [
    { q: "Who can join ASQUARE Academy Wagholi?", a: "Class XI, XII, and XII pass-outs preparing for JEE Main & Advanced." },
    { q: "Which subjects are covered?", a: "Physics, Chemistry & Mathematics (PCM)." },
    { q: "Are mock exams included?", a: "Yes — weekly chapter tests and full-length JEE mock exams are conducted regularly." },
    { q: "What course options are available?", a: "2-Year, 1-Year, Crash Courses & Dropper Batches." },
    { q: "How many students per batch?", a: "We keep batches small for better focus and personalised guidance." },
    { q: "Do parents receive progress updates?", a: "Yes — regular progress reports and parent–teacher meetings are part of the system." },
    { q: "Which areas does the Wagholi branch serve?", a: "Wagholi, Kharadi, Lohegaon, Viman Nagar, Hadapsar and nearby areas." },
  ];

  return (
    <>
      <Helmet>
        <title>IIT JEE Coaching Classes in Wagholi Pune | Best JEE Institute ASQUARE Academy</title>
        <meta name="title" content="IIT JEE Coaching Classes in Wagholi Pune | Best JEE Institute ASQUARE Academy" />
        <meta name="description" content="Get top IIT JEE coaching classes in Wagholi Pune with expert faculty, small batches, mock exams & PCM coaching. Join ASQUARE Academy for JEE Main & Advanced preparation." />
        <meta name="keywords" content={`IIT JEE coaching classes in wagholi Pune,
Best IIT JEE Coaching in wagholi Pune,
Top JEE Mains Coaching Classes wagholi Pune,
IIT JEE Advanced Preparation wagholiPune,
JEE Advanced coaching classes in wagholi Pune,
IIT JEE Classes in wagholi Pune,
Best IIT JEE Classes in wagholi Pune,
Top IIT JEE Classes in wagholi Pune,
IIT JEE Institute coaching in wagholi Pune,
IIT JEE Institute classes in wagholi Pune,
`} />

        <script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-wagholi-pune#localbusiness",
      "name": "ASQUARE Academy - IIT JEE Coaching Wagholi Pune",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-wagholi-pune",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "telephone": "9766118877",
      "description": "Best IIT JEE coaching classes in Wagholi Pune offering JEE Main & Advanced preparation, PCM coaching, mock tests and small batch guidance.",
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Wagholi",
        "addressRegion": "Pune",
        "addressCountry": "IN"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-wagholi-pune#webpage",
      "name": "IIT JEE Coaching Classes in Wagholi Pune",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-wagholi-pune",
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png"
      },
      "description": "Top IIT JEE classes in Wagholi Pune with expert faculty and structured JEE preparation for JEE Main & Advanced.",
      "publisher": {
        "@type": "Organization",
        "name": "ASQUARE Academy",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png"
        }
      }
    },
    {
      "@type": "EducationalOrganization",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-wagholi-pune#edu",
      "name": "ASQUARE Academy Wagholi",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-wagholi-pune",
      "description": "JEE Main & Advanced preparation with PCM subjects, mock exams, small batches and expert faculty in Wagholi Pune."
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-wagholi-pune#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can join ASQUARE Academy Wagholi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Class XI, XII, and XII pass-outs preparing for JEE Main & Advanced can join ASQUARE Academy Wagholi."
          }
        },
        {
          "@type": "Question",
          "name": "Which subjects are covered?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE Academy Wagholi covers Physics, Chemistry and Mathematics (PCM)."
          }
        },
        {
          "@type": "Question",
          "name": "Are mock exams included?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, weekly chapter tests and JEE mock exams are conducted regularly."
          }
        },
        {
          "@type": "Question",
          "name": "What courses are available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE Academy offers 2-Year, 1-Year, Crash Courses and Dropper Batches."
          }
        },
        {
          "@type": "Question",
          "name": "How many students per batch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Batches are kept small for better focus and personalized guidance."
          }
        },
        {
          "@type": "Question",
          "name": "Do parents get performance updates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, regular progress reports and parent–teacher meetings are part of the system."
          }
        },
        {
          "@type": "Question",
          "name": "Which areas does the Wagholi branch serve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The branch is accessible from Wagholi, Kharadi, Lohegaon, Viman Nagar, Hadapsar and nearby areas in Pune."
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
          "item": "https://www.asquareclasses.com/iit-jee-coaching"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "IIT JEE Coaching in Wagholi Pune",
          "item": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-wagholi-pune"
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

      {/* Slider with overlaid form */}
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
          <div className="jee-enquiry-form rounded-4">
            <MobileForm />
            <Form />
          </div>
        </div>
      </section>

      <hr />

      {/* Hero */}
      <section className="jee-hero-section text-white d-flex align-items-center bg-transparent">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-12 col-lg-8 col-md-12 text-center text-md-start">
              <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
                Get Ready for JEE Main & Advanced with <span className="highlight-text text-warning">ASQUARE Academy Wagholi</span>
              </motion.h1>
 <motion.h2>
                  Smart Coaching for Engineering Entrance in Wagholi
 </motion.h2>


              <p className="lead d-none d-md-block">
                Searching for top IIT-JEE coaching classes in Wagholi, Pune? At ASQUARE Academy, we provide systematic learning modules, doubt-clearing sessions, and exam-oriented practice. Our Wagholi branch prepares aspirants to achieve seats in IITs, NITs, IIITs, and leading engineering institutes with personalised mentoring and proven strategies.
              </p>

              <p className="lead d-block d-md-none">
  Searching for top IIT-JEE coaching classes in Wagholi, Pune? At ASQUARE Academy, we provide systematic learning modules, doubt-clearing sessions, and exam-oriented practice. Our Wagholi branch prepares aspirants to achieve seats in IITs, NITs, IIITs, and leading engineering institutes with personalised mentoring and proven strategies.
              </p>

              <a className="btn btn-warning btn-lg rounded-pill mt-3 shadow-lg">
                <Link to={'/'} className="nav-item nav-item-list text-warning">🚀 Enroll Now</Link>
              </a>
            </div>

            <div className="col-12 col-lg-4 col-md-12 mt-5 mt-md-0 text-center">
              <img src={sampleimg3} alt="ASQUARE Academy Wagholi" className="img-fluid mx-auto fade-in imgsiz" style={{ objectFit: "contain", opacity: 0.95, borderRadius: "10px" }} />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Why Choose */}
      <section className="jee-why py-5">
        <div className="container">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">
            Why Choose <span className="text-primary">ASQUARE Academy</span> for IIT JEE in Wagholi?
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

      {/* Programs */}
      <section className="jee-programs py-5 bg-light">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-8 text-center text-lg-start order-2">
              <motion.h4 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-centerr">
                Our JEE Coaching Programs at <span className="text-primary">Wagholi</span>
              </motion.h4>

              <p className="lead text-secondary">
              The Joint Entrance Examination (JEE) is India’s most competitive engineering exam. At ASQUARE Academy Wagholi, our courses focus on concept mastery, accuracy, and time management so that students are ready for both JEE Main & Advanced.
              </p>
            </div>

            <div className="col-lg-4 text-center order-1">
              <motion.img whileHover={{ scale: 1.03 }} src={sampleimg4} alt="Wagholi JEE Coaching" className="img-fluid rounded-4 shadow-lg mx-auto d-block" style={{ width: "85%" }} />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Subjects + Batches */}
      <section className="jee-gradient-section py-5 text-white">
        <div className="container">
          <motion.h4 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">
            Subjects We Cover & Course Duration
          </motion.h4>

          <div className="row g-4">
            <div className="col-lg-6">
              <h4 className="highlight-text text-warning fw-bold mb-4">Subjects We Cover</h4>
              {subjects.map((sub, i) => (
                <div key={i} className="jee-subject-box mb-4 p-3 rounded-4 bg-white bg-opacity-10 backdrop-blur-md border border-light border-opacity-25">
                  <h5 className="fw-semibold">{sub.title}</h5>
                  <p className="small mb-0">{sub.desc}</p>
                </div>
              ))}
            </div>

            <div className="col-lg-6">
              <h4 className="highlight-text text-warning fw-bold mb-4">Course Duration & Batch Options</h4>
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

      {/* Methodology */}
      <section className="jee-method py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-12 text-center">
              <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
                Teaching <span className="text-primary">Methodology</span>
              </motion.h3>

              <div className="row g-4 justify-content-center">
                {[
                  "Daily interactive lectures with assignments",
                  "One-to-one doubt-solving sessions",
                  "Weekly assessments & full-length mock exams",
                  "Parent–teacher meetings for student progress tracking",
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

      {/* Key Features */}
      <section className="jee-highlights py-5 text-white">
        <div className="container text-center">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
            Key Features of <span className="highlight-text text-warning">Wagholi Branch</span>
          </motion.h3>

          <div className="row justify-content-center g-4">
            {[
              "Personalized learning with limited batch size",
              "Updated JEE study material & test series",
              "Workshops on exam hacks, problem-solving & time management",
              "Regular parent updates & feedback sessions",
              "Recognized as a trusted IIT-JEE coaching center in Wagholi, Pune",
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

      {/* Results */}
      <section className="jee-results py-5 text-white">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-8 text-center text-lg-start">
              <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
                Results That <span className="highlight-text text-warning">Speak</span>
              </motion.h3>
              <p className="lead text-light">
                ASQUARE Academy has helped students consistently achieve admission into IITs, NITs, and top engineering colleges. The Wagholi branch continues this success with structured coaching and student-focused guidance.
              </p>
            </div>

            <div className="col-lg-4 text-center">
              <motion.img whileHover={{ scale: 1.05 }} src={sampleimg6} alt="Success Stories" className="img-fluid rounded-4 shadow-lg mx-auto d-block" style={{ width: "80%" }} />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* FAQ */}
      <section className="jee-faq py-5">
        <div className="container">
          <div className="text-center mb-5">
            <div className="d-inline-block bg-primary bg-opacity-10 text-primary fw-bold rounded-pill px-3 py-1 mb-3">
              <BadgeQuestionMark /> FAQs
            </div>

            <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
              Frequently Asked Questions <span className="text-primary">(FAQ)</span>
            </motion.h3>
          </div>

          <div className="row justify-content-center">
            <div className="col-12 col-md-6 mb-4 mb-md-0">
              <FAQAccordion faqs={faqs.slice(0, Math.ceil(faqs.length / 2))} accordionId="wagholiFaqLeft" />
            </div>
            <div className="col-12 col-md-6">
              <FAQAccordion faqs={faqs.slice(Math.ceil(faqs.length / 2))} accordionId="wagholiFaqRight" />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Final CTA */}
      <section id="enroll" className="jee-enroll-section py-5 text-center text-white">
        <div className="container">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
            Enroll with <span className="highlight-text text-warning">ASQUARE Academy Wagholi</span> Today
          </motion.h3>

          <p className="lead mb-4">
          Start your engineering journey with ASQUARE Academy’s IIT-JEE coaching in Wagholi, Pune. With expert faculty, updated study resources, and consistent results, we are your trusted partner for IIT-JEE, CET & NEET coaching.
          </p>

          <p><MapPin className="text-warning" /> <b className="bld">Serving students from Wagholi, Kharadi, Lohegaon, Viman Nagar, Hadapsar, and nearby Pune areas.</b></p>

          <a className="btn btn-lg btn-warning fw-bold mt-3 px-5 py-3 rounded-pill shadow-lg">
            <Link to={'/'} className="nav-item nav-item-list text-white">
              ⚡ Admissions Open – Limited seats available! Contact today to reserve your spot.
            </Link>
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default IITJEEWagholi;
