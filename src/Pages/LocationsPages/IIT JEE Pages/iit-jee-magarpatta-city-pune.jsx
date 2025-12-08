// IITJEEMagarpattaCity.jsx
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

import sampleimg2 from '../../../Assets/SampleImages/MobBanners/MobBanner3.jpeg';
import sampleimg22 from '../../../Assets/SampleImages/MobBanners/MobBanner8.jpeg';
import sampleimg1 from '../../../Assets/SampleImages/Banners/Banners (2).jpeg';
import sampleimg11 from '../../../Assets/SampleImages/Banners/Banners (8).jpeg';

import sampleimg3 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (9).jpeg';
import sampleimg4 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (2).jpeg';
import sampleimg6 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (4).jpeg';

import Form from '../../../Components/Form2/Form2.jsx';

const Reviews = React.lazy(() => import("../../../Components/Reviews/Reviews.jsx"));

function IITJEEMagarpattaCity() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const whyChoose = [
    { Icon: Users, title: "Highly Experienced Faculty", desc: "Specialists in IIT-JEE, CET & NEET with proven teaching methods." },
    { Icon: BookOpen, title: "Comprehensive PCM Curriculum", desc: "Complete coverage of Physics, Chemistry & Mathematics aligned to JEE." },
    { Icon: Target, title: "Small Batch Learning", desc: "Individual attention and effective mentoring for every student." },
    { Icon: BarChart, title: "Exam-Focused Testing", desc: "Weekly assignments, topic tests & full-length mock exams." },
    { Icon: Lightbulb, title: "Student Growth Support", desc: "Career counselling, study planning and confidence-building sessions." },
  ];

  const subjects = [
    { title: "Physics", desc: "In-depth learning with application-based numericals to build conceptual clarity." },
    { title: "Chemistry", desc: "Strong coverage of Physical, Organic & Inorganic chemistry with solved examples." },
    { title: "Mathematics", desc: "Rigorous practice in Algebra, Calculus, Geometry, Trigonometry & Probability." },
  ];

  const batches = [
    { title: "2-Year Foundation Program (10th → 12th Moving Students)", desc: "XI + XII Boards integrated with gradual JEE-level problem solving." },
    { title: "1-Year Intensive Program (11th → 12th Moving Students)", desc: "Focused Class XII + JEE training with regular assessments." },
    { title: "Crash Course (2–3 Months)", desc: "Final phase revision with PYQs, speed practice and exam strategies." },
    { title: "Repeater/Dropper Batch (XII Pass-outs)", desc: "One-year dedicated program for repeat aspirants aiming for top ranks." },
  ];

  const faqs = [
    { q: "Q1: Who can join ASQUARE Academy Magarpatta City?", a: "Class XI, XII students and XII pass-outs preparing for JEE Main & Advanced." },
    { q: "Q2: What subjects are covered?", a: "Physics, Chemistry & Mathematics (PCM) with chapter-wise practice and mocks." },
    { q: "Q3: Are mock tests part of the program?", a: "Yes — weekly unit tests, topic tests and full-length mock exams are included." },
    { q: "Q4: What course options are available?", a: "2-Year Foundation, 1-Year Intensive, Crash Course and Repeater/Dropper batches." },
    { q: "Q5: How big are the batches?", a: "We maintain small batch sizes for personalised attention and better learning outcomes." },
    { q: "Q6: Do parents receive progress updates?", a: "Yes — regular performance reports and PTMs keep parents informed." },
    { q: "Q7: Which areas does the Magarpatta City branch serve?", a: "Magarpatta, Amanora, Hadapsar, Mundhwa, Kharadi and nearby Pune localities." },
  ];

  return (
    <>
      <Helmet>
        <title>Best IIT JEE Coaching Classes in Magarpatta City Pune | ASQUARE Academy</title>
        <meta name="title" content="Best IIT JEE Coaching Classes in Magarpatta City Pune | ASQUARE Academy" />
        <meta
          name="description"
          content="ASQUARE Academy offers the best IIT JEE coaching classes in Magarpatta City, Pune for JEE Main & Advanced aspirants. Expert PCM faculty, mock tests, 1-Year/2-Year/Crash Courses, small batches & detailed progress tracking. Ideal for students from Magarpatta, Amanora, Hadapsar, Mundhwa & Kharadi."
        />
        <meta
          name="keywords"
          content={`IIT JEE coaching classes in magarpatta city Pune,
Best IIT JEE Coaching in magarpatta city Pune,
Top JEE Mains Coaching Classes magarpatta city Pune,
IIT JEE Advanced Preparation magarpatta city Pune,
JEE Advanced coaching classes in magarpatta city Pune,
IIT JEE Classes in magarpatta city Pune,
Best IIT JEE Classes in magarpatta city Pune,
Top IIT JEE Classes in magarpatta city Pune,
IIT JEE Institute coaching in magarpatta city Pune,
IIT JEE Institute classes in magarpatta city Pune,
`}
        />

        <script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-magarpatta-city-pune#localbusiness",
      "name": "ASQUARE Academy - IIT JEE Coaching in Magarpatta City Pune",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-magarpatta-city-pune",
      "telephone": "9766118877",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Magarpatta City",
        "addressRegion": "Pune",
        "addressCountry": "India"
      },
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune/"
      ],
      "description": "ASQUARE Academy offers the best IIT JEE coaching classes in Magarpatta City Pune with expert PCM faculty, mock tests, crash courses, 1-year & 2-year programs."
    },

    {
      "@type": "EducationalOrganization",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-magarpatta-city-pune#educationalorganization",
      "name": "ASQUARE Academy",
      "url": "https://www.asquareclasses.com/",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune/"
      ]
    },

    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-magarpatta-city-pune#webpage",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-magarpatta-city-pune",
      "name": "Best IIT JEE Coaching in Magarpatta City Pune | ASQUARE Academy",
      "description": "Join the top IIT JEE Coaching Classes in Magarpatta City Pune for JEE Main & Advanced preparation. Small batches, mock exams & expert PCM faculty at ASQUARE Academy.",
      "isPartOf": {
        "@id": "https://www.asquareclasses.com/"
      }
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-magarpatta-city-pune#breadcrumb",
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
          "item": "https://www.asquareclasses.com/iit-jee-coaching-classes"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Magarpatta City Pune"
        }
      ]
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-magarpatta-city-pune#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can join ASQUARE Academy Magarpatta City?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Class XI, XII students and XII pass-outs preparing for JEE Main & Advanced can join ASQUARE Academy Magarpatta City."
          }
        },
        {
          "@type": "Question",
          "name": "What subjects are taught?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We teach Physics, Chemistry, and Mathematics (PCM) for JEE preparation."
          }
        },
        {
          "@type": "Question",
          "name": "Are mock tests included?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, weekly unit tests and full-length JEE mock exams are included."
          }
        },
        {
          "@type": "Question",
          "name": "What course options are available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer 2-Year, 1-Year, Crash Courses, and Dropper Batches."
          }
        },
        {
          "@type": "Question",
          "name": "How many students per batch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We maintain small batch sizes to ensure focused learning."
          }
        },
        {
          "@type": "Question",
          "name": "Do parents get performance updates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, parents receive updates through PTMs and regular progress reports."
          }
        },
        {
          "@type": "Question",
          "name": "Which areas does the Magarpatta City branch serve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We serve students from Magarpatta, Amanora, Hadapsar, Mundhwa, Kharadi, and nearby areas."
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
                Excel in JEE Main & Advanced with <span className="highlight-text text-warning">ASQUARE Academy Magarpatta City</span>
              </motion.h1>

              <motion.h2>Top Coaching Destination for Engineering Aspirants in Magarpatta City</motion.h2>

              <p className="lead d-none d-md-block">
                Looking for IIT-JEE coaching classes in Magarpatta City, Pune? At ASQUARE Academy, we provide expert faculty guidance, structured study material, and personalized mentorship to help students crack JEE Main & Advanced. Our Magarpatta City branch focuses on strong fundamentals, advanced problem-solving, and exam-smart strategies to secure seats in IITs, NITs and top engineering institutes.
              </p>

              <p className="lead d-block d-md-none">
                Looking for IIT-JEE coaching classes in Magarpatta City, Pune? At ASQUARE Academy, we provide expert faculty guidance, structured study material, and personalized mentorship to help students crack JEE Main & Advanced.
              </p>

              <a className="btn btn-warning btn-lg rounded-pill mt-3 shadow-lg">
                <Link to={'/'} className="nav-item nav-item-list text-warning">🚀 Enroll Now</Link>
              </a>
            </div>

            {/* Right Side: Image */}
            <div className="col-12 col-lg-4 col-md-12 mt-5 mt-md-0 text-center">
              <img src={sampleimg3} alt="ASQUARE Academy Magarpatta City" className="img-fluid mx-auto fade-in imgsiz" style={{ objectFit: "contain", opacity: 0.95, borderRadius: "10px" }} />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Why Choose */}
      <section className="jee-why py-5">
        <div className="container">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">
            Why Choose <span className="text-primary">ASQUARE Academy</span> Magarpatta City?
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
                JEE Coaching Programs at <span className="text-primary">Magarpatta City</span>
              </motion.h4>

              <p className="lead text-secondary">
              The Joint Entrance Examination (JEE) requires deep subject knowledge, accuracy, and consistent practice. At ASQUARE Academy Magarpatta City, our courses are structured to strengthen fundamentals, sharpen problem-solving, and improve exam performance for both JEE Main & Advanced.
              </p>
            </div>

            <div className="col-lg-4 text-center order-1">
              <motion.img whileHover={{ scale: 1.03 }} src={sampleimg4} alt="Magarpatta City JEE Coaching" className="img-fluid rounded-4 shadow-lg mx-auto d-block" style={{ width: "85%" }} />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Subjects + Batches */}
      <section className="jee-gradient-section py-5 text-white">
        <div className="container">
          <motion.h4 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">
            Subjects Covered & Course Options
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
              <h4 className="highlight-text text-warning fw-bold mb-4 text-centerr">Course Options Offered</h4>
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
          <div className="row align-items-center g-4">
            <div className="col-lg-12 text-center text-lg-start">
              <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">
                Teaching <span className="text-primary">Methodology</span>
              </motion.h3>

              <div className="row g-4 justify-content-center">
                {[
                  "Daily interactive classroom lectures with assignments",
                  "Individual doubt-solving sessions",
                  "Weekly subject tests & full-length mock exams",
                  "Parent–teacher meetings for progress updates",
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
            Key Highlights of <span className="highlight-text text-warning">Magarpatta City</span>
          </motion.h3>

          <div className="row justify-content-center g-4">
            {[
              "Small batch strength for better focus",
              "Updated IIT-JEE notes, assignments & test material",
              "Special workshops on exam shortcuts & time management",
              "Regular parent updates and performance analysis",
              "Recognized as a leading IIT-JEE coaching institute in Magarpatta City",
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
      <Suspense fallback={<Loading />}><Reviews /></Suspense>

      <hr />

      {/* Results */}
      <section className="jee-results py-5 text-white">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-8 text-center text-lg-start">
              <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
                Track Record of <span className="highlight-text text-warning">Excellence</span>
              </motion.h3>
              <p className="lead text-light">
                ASQUARE Academy has consistently guided students to achieve top ranks in JEE Main & Advanced. The Magarpatta City branch continues this legacy with result-oriented programs, experienced mentors, and structured preparation.
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
              <FAQAccordion faqs={faqs.slice(0, Math.ceil(faqs.length / 2))} accordionId="magarLeft" />
            </div>
            <div className="col-12 col-md-6">
              <FAQAccordion faqs={faqs.slice(Math.ceil(faqs.length / 2))} accordionId="magarRight" />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Final CTA */}
      <section id="enroll" className="jee-enroll-section py-5 text-center text-white">
        <div className="container">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
            Enroll Today at <span className="highlight-text text-warning">ASQUARE Academy Magarpatta City</span>
          </motion.h3>

          <p className="lead mb-4">
          Shape your engineering career with ASQUARE Academy’s IIT-JEE coaching in Magarpatta City, Pune. With skilled faculty, updated resources, and consistent results, we are your reliable partner for JEE, CET & NEET preparation.
          </p>

          <p><MapPin className="text-warning" /> Serving students from <b className="bld">Magarpatta, Amanora, Hadapsar, Mundhwa, Kharadi</b> and nearby areas.</p>

          <a className="btn btn-lg btn-warning fw-bold mt-3 px-5 py-3 rounded-pill shadow-lg">
            <Link to={'/'} className="nav-item nav-item-list text-white">⚡ Admissions Open – Limited seats available! Contact us today.</Link>
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default IITJEEMagarpattaCity;
