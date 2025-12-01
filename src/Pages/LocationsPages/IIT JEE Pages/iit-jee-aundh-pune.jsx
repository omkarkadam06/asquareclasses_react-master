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

import sampleimg1 from '../../../Assets/SampleImages/Banners/Banners (7).jpeg';
import sampleimg11 from '../../../Assets/SampleImages/Banners/Banners (2).jpeg';
import sampleimg2 from '../../../Assets/SampleImages/MobBanners/MobBanner4.jpeg';
import sampleimg22 from'../../../Assets/SampleImages/MobBanners/MobBanner3.jpeg';

import sampleimg3 from "../../../Assets/SampleImages/AsquarePics/AsquarePics (9).jpeg";
import sampleimg4 from "../../../Assets/SampleImages/AsquarePics/AsquarePics (2).jpeg";
import sampleimg6 from "../../../Assets/SampleImages/AsquarePics/AsquarePics (4).jpeg";

import Form from "../../../Components/Form2/Form2.jsx";

const Reviews = React.lazy(() => import("../../../Components/Reviews/Reviews.jsx"));

function IITJEEAundh() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const whyChoose = [
    {
      Icon: Users,
      title: "Experienced Faculty Members",
      desc:
        "Experts in IIT-JEE, CET & NEET preparation.",
    },
    {
      Icon: BookOpen,
      title: "Comprehensive PCM Syllabus",
      desc:
        "Physics, Chemistry & Mathematics designed as per latest JEE exam updates.",
    },
    {
      Icon: Target,
      title: "Small Batch Advantage",
      desc:
        "Individual mentoring and personalized doubt-solving.",
    },
    {
      Icon: BarChart,
      title: "Regular Assessments",
      desc:
        "Weekly assignments, unit tests & mock exams.",
    },
    {
      Icon: Lightbulb,
      title: "Motivation & Career Guidance",
      desc:
        "Counseling sessions to build exam strategies and confidence.",
    },
  ];

  const subjects = [
    {
      title: "Physics",
      desc: "Core concepts explained with numerical applications",
    },
    {
      title: "Chemistry",
      desc: "Detailed coverage of Physical, Organic & Inorganic Chemistry",
    },
    {
      title: "Mathematics",
      desc: "Practice-intensive training in Algebra, Geometry, Trigonometry, Calculus & Probability",
    },
  ];

  const batches = [
    {
      title:
        "2-Year Foundation Program (10th → 12th Moving Students): XI + XII Boards + JEE coaching.",
      desc: "",
    },
    {
      title:
        "1-Year Advanced Program (11th → 12th Moving Students): XII Boards + JEE crash-intensive program.",
      desc: "",
    },
    {
      title: "Crash Course (2–3 Months): Short-term revision & exam-based practice.",
      desc: "",
    },
    {
      title:
        "Repeater/Dropper Batch (XII Pass-outs): One-year focused JEE coaching.",
      desc: "",
    },
  ];

  const faqs = [
    {
      q: "Q1: Who can join ASQUARE Academy Aundh?",
      a:
        "Class XI, Class XII, and XII pass-out students preparing for JEE Main & Advanced can join. ASQUARE is known for offering the Best IIT JEE Coaching in Aundh Pune with result-driven programs.",
    },
    {
      q: "Q2: What subjects are taught at the Aundh center?",
      a:
        "The institute covers Physics, Chemistry, and Mathematics (PCM) with chapter-wise assignments. This makes it a preferred choice for Top IIT JEE Classes in Aundh Pune.",
    },
    {
      q: "Q3: Do you conduct regular mock exams?",
      a:
        "Yes, ASQUARE conducts weekly practice tests and full-length JEE mock exams to boost accuracy and confidence. These are a key part of Top JEE Mains Coaching Classes in Aundh Pune.",
    },
    {
      q: "Q4: What course options are offered?",
      a:
        "Students can choose from 2-year, 1-year, crash courses, and dropper batches, ideal for structured IIT JEE Advanced Preparation in Aundh Pune.",
    },
    {
      q: "Q5: How many students are there per batch?",
      a:
        "ASQUARE maintains small, focused batches to ensure maximum individual attention. This approach makes it one of the Best IIT JEE Classes in Aundh Pune.",
    },
    {
      q: "Q6: Do parents receive regular performance updates?",
      a:
        "Yes, parents get detailed performance reports and PTM updates. This transparent system supports effective learning under IIT JEE coaching classes in Aundh Pune.",
    },
    {
      q: "Q7: Which nearby areas does the Aundh branch serve?",
      a:
        "The center is easily accessible from Baner, Pimple Nilakh, Sangvi, Wakad, and nearby localities. Students from these areas benefit from JEE Advanced coaching classes in Aundh Pune.",
    },
    {
      q: "Q8: Why choose ASQUARE Academy for IIT JEE in Aundh?",
      a:
        "With expert faculty, strong mentoring, and proven results, ASQUARE stands as one of the Top IIT JEE Classes in Aundh Pune, helping students excel in both JEE Mains and Advanced.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>IIT JEE Coaching Classes Institute in Aundh Pune | ASQUARE Academy</title>
        <meta
          name="title"
          content="IIT JEE Coaching Classes Institute in Aundh Pune | ASQUARE Academy"
        />
        <meta
          name="description"
          content="Best IIT JEE coaching classes institute in Aundh Pune for JEE Mains & Advanced. Small batches, expert PCM faculty, mock tests & structured preparation programs."
        />
        <meta
          name="keywords"
          content="IIT JEE coaching classes in aundh pune,
Best IIT JEE Coaching in aundh- pune,
Top JEE Mains Coaching Classes aundh pune,
IIT JEE Advanced Preparation aundh pune,
JEE Advanced coaching classes in aundh  pune,
IIT JEE Classes in aundh  pune,
Best IIT JEE Classes in aundh  pune,
Top IIT JEE Classes in aundh  pune,
"
        />
        <script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-aundh-pune#localbusiness",
      "name": "ASQUARE Academy - IIT JEE Coaching Classes Institute Aundh Pune",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-aundh-pune",
      "telephone": "+919766118877",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Aundh",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411007",
        "addressCountry": "IN"
      },
      "description": "Best IIT JEE Coaching Classes Institute in Aundh Pune offering expert PCM faculty, JEE Mains coaching, JEE Advanced preparation, small batches, and regular mock tests.",
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune/"
      ]
    },
    {
      "@type": "EducationalOrganization",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-aundh-pune#edu",
      "name": "ASQUARE Academy Aundh Pune",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-aundh-pune",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "description": "Top IIT JEE Classes in Aundh Pune with structured learning modules, expert faculty, and complete preparation for JEE Mains & Advanced."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-aundh-pune#webpage",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-aundh-pune",
      "name": "IIT JEE Coaching Classes in Aundh Pune | ASQUARE Academy",
      "description": "IIT JEE coaching classes in Aundh Pune with mock tests, small batches, PCM subjects, and complete JEE Mains & Advanced preparation."
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-aundh-pune#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can join ASQUARE Academy Aundh?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Class XI, Class XII, and XII pass-out students preparing for JEE Main & Advanced can join ASQUARE Academy Aundh Pune."
          }
        },
        {
          "@type": "Question",
          "name": "What subjects are taught at the Aundh center?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Physics, Chemistry, and Mathematics (PCM) with chapter-wise assignments are taught."
          }
        },
        {
          "@type": "Question",
          "name": "Do you conduct regular mock exams?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, weekly practice tests and full-length JEE mock exams are conducted."
          }
        },
        {
          "@type": "Question",
          "name": "What course options are offered?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "2-year, 1-year, crash courses, and dropper batches are available."
          }
        },
        {
          "@type": "Question",
          "name": "How many students are in a batch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Small and focused batches ensure maximum personal attention."
          }
        },
        {
          "@type": "Question",
          "name": "Do parents receive performance updates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, parents receive regular performance reports and PTM updates."
          }
        },
        {
          "@type": "Question",
          "name": "Which nearby areas does the Aundh branch serve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The center serves students from Baner, Pimple Nilakh, Sangvi, Wakad, and nearby areas."
          }
        },
        {
          "@type": "Question",
          "name": "Why choose ASQUARE Academy for IIT JEE in Aundh?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE offers expert faculty, strong mentoring, mock tests, and structured modules for JEE Mains and Advanced."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-aundh-pune#breadcrumbs",
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
          "name": "IIT JEE Coaching Aundh Pune",
          "item": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-aundh-pune"
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

      {/* Slider with form */}
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
                Achieve JEE Success with{" "}
                <span className="highlight-text text-warning">ASQUARE Academy Aundh</span>
              </motion.h1>

              <motion.h2>Advanced Coaching for Engineering Aspirants in Aundh</motion.h2>

              <p className="lead d-none d-md-block">
                Looking for IIT-JEE coaching classes in Aundh, Pune? At ASQUARE Academy, we deliver concept-driven teaching, systematic preparation, and personalized mentoring to help students crack JEE Main & Advanced. Our Aundh branch trains aspirants aiming for IITs, NITs, IIITs, and India’s top engineering universities through structured courses, rigorous practice, and result-oriented guidance.
              </p>

              <p className="lead d-block d-md-none">
                Looking for IIT-JEE coaching classes in Aundh, Pune? At ASQUARE Academy, we deliver concept-driven teaching, systematic preparation, and personalized mentoring to help students crack JEE Main & Advanced.
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

      {/* Why Join */}
      <section className="jee-why py-5">
        <div className="container">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">
            Why <span className="text-primary">ASQUARE Academy</span> in Aundh?
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
                Courses Offered at <span className="text-primary">Aundh</span> Branch
              </motion.h4>

              <p className="lead text-secondary">
                The Joint Entrance Examination (JEE) demands clarity of concepts, accuracy, and exam readiness. At ASQUARE Academy Aundh, our programs are crafted to strengthen fundamentals, enhance speed and accuracy, and boost exam confidence for both JEE Main & Advanced.
              </p>
            </div>

            <div className="col-lg-4 text-center order-1">
              <motion.img whileHover={{ scale: 1.03 }} src={sampleimg4} alt="JEE Coaching" className="img-fluid rounded-4 shadow-lg mx-auto d-block" style={{ width: "85%" }} />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Subjects + Batches */}
      <section className="jee-gradient-section py-5 text-white">
        <div className="container">
          <motion.h4 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">
            Subjects Covered
            <span className="highlight-text text-warning"> &nbsp;&&nbsp; </span>
            Course Options Available
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
              <h4 className="highlight-text text-warning fw-bold mb-4 text-centerr">Course Options Available</h4>
              {batches.map((b, i) => (
                <div key={i} className="jee-subject-box mb-3 p-3 rounded-4 bg-white bg-opacity-10 backdrop-blur-md border border-light border-opacity-25">
                  <h5 className="fw-semibold">{b.title}</h5>
                  {b.desc && <p className="small mb-0">{b.desc}</p>}
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
          <div className="row align-items-center g-4">
            <div className="col-lg-12 text-center text-lg-start">
              <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">
                Teaching <span className="text-primary">Methodology</span>
              </motion.h3>

              <div className="row g-4 justify-content-center">
                {["Interactive lectures with practice-based assignments", "One-to-one doubt-solving sessions", "Weekly subject tests & full-length JEE mock exams", "Parent–teacher meetings for continuous progress tracking"].map((step, i) => (
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

      {/* Highlights */}
      <section className="jee-highlights py-5 text-white">
        <div className="container text-center">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
            Key Highlights of <span className="highlight-text text-warning">Aundh</span> Branch
          </motion.h3>

          <div className="row justify-content-center g-4">
            {[
              "• Limited batch strength for personalized focus",
              "• Updated IIT-JEE notes, assignments & test material",
              "• Workshops on time management, quick problem-solving & exam strategies",
              "• Regular parent updates for performance tracking",
              "• Recognized as a leading JEE coaching institute in Aundh, Pune",
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

      {/* Results */}
      <section className="jee-results py-5 text-white">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-8 text-center text-lg-start">
              <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
                Our Results <span className="highlight-text text-warning">Speak</span>
              </motion.h3>
              <p className="lead text-light">
                ASQUARE Academy has produced many IIT-JEE rank holders and engineering achievers. The Aundh branch continues this tradition with dedicated coaching, expert guidance, and structured preparation.
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

            <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">
              Frequently Asked Questions <span className="text-primary">(FAQ)</span>
            </motion.h3>
          </div>

          <div className="row justify-content-center">
            <div className="col-12 col-md-6 mb-4 mb-md-0">
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
            Enroll Now at <span className="highlight-text text-warning">ASQUARE Academy Aundh</span>
          </motion.h3>

          <p className="lead mb-4">
            Prepare for engineering success with ASQUARE Academy’s IIT-JEE coaching in Aundh, Pune. With expert teachers, structured resources, and a proven track record, we are your trusted partner for JEE, CET & NEET coaching.
          </p>

          <p><MapPin className="text-warning" /> Serving students from <b className="bld">Aundh, Baner, Pimple Nilakh, Sangvi, Wakad, and surrounding Pune regions.</b></p>

          <a className="btn btn-lg btn-warning fw-bold mt-3 px-5 py-3 rounded-pill shadow-lg">
            <Link to={'/'} className="nav-item nav-item-list text-white">
              ⚡ Admissions Open – Enroll now!
              {/* <p className="text-warning">Limited seats available! Enroll today to secure your seat.</p> */}
            </Link>
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default IITJEEAundh;
