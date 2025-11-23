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
import sampleimg2 from '../../../Assets/SampleImages/MobBanners/MobBanner4.jpeg';
import sampleimg22 from'../../../Assets/SampleImages/MobBanners/MobBanner5.jpeg';
// import sampleimg2 from '../../../Assets/SampleImages/sampleimg2.jpeg';
import sampleimg1 from '../../../Assets/SampleImages/Banners/Banners (4).jpeg';
import sampleimg11 from '../../../Assets/SampleImages/Banners/Banners (5).jpeg';
import sampleimg3 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (9).jpeg';
import sampleimg4 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (2).jpeg';
import sampleimg6 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (4).jpeg';
import Form from '../../../Components/Form2/Form2.jsx';

const Reviews = React.lazy(() => import("../../../Components/Reviews/Reviews.jsx"));

function IITJEEChikhali() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Why choose remains visually consistent; descriptions pulled from the Word file content
  const whyChoose = [
    { Icon: Users, title: "Expert Faculty", desc: "Experienced trainers for IIT-JEE, NEET & CET." },
    { Icon: BookOpen, title: "Updated Syllabus Coverage", desc: "PCM subjects as per JEE Main & Advanced exam patterns." },
    { Icon: Target, title: "Personalized Attention", desc: "Small batch sizes ensure focus on each student." },
    { Icon: BarChart, title: "Regular Mock Exams", desc: "Weekly tests and progress analysis." },
    { Icon: Lightbulb, title: "Motivation & Career Counseling", desc: "Confidence-building and rank improvement support." },
  ];

  const subjects = [
    { title: "Physics", desc: "Concept clarity & application-based learning" },
    { title: "Chemistry", desc: "Comprehensive Physical, Organic & Inorganic coverage" },
    { title: "Mathematics", desc: "Advanced practice in Algebra, Geometry, Calculus & Probability" },
  ];

  const batches = [
    { title: "2-Year Foundation (10th → 12th)", desc: "Integrated coaching for Boards + JEE" },
    { title: "1-Year Intensive (11th → 12th)", desc: "Quick-paced preparation for JEE + XII" },
    { title: "Crash Course (2–3 Months)", desc: "Rapid revision and test practice" },
    { title: "Dropper/Repeater Batch", desc: "One-year focused JEE program for XII pass-outs" },
  ];

  const faqs = [
    { q: "Q1: Who can apply at ASQUARE Chikhali?", a: "Students of Class XI, XII & XII pass-outs targeting JEE Main & Advanced." },
    { q: "Q2: Which subjects are included?", a: "Physics, Chemistry & Mathematics (PCM)." },
    { q: "Q3: Are mock exams conducted?", a: "Yes, regular practice tests and mocks are part of every course." },
    { q: "Q4: What are the course options?", a: "2-Year, 1-Year, Crash & Dropper batches." },
    { q: "Q5: What’s the batch size?", a: "Small batches for better focus." },
    { q: "Q6: Do parents receive updates?", a: "Yes, via progress reports and PTMs." },
    { q: "Q7: Which areas can access this branch?", a: "Easily reachable from Chikhali, Moshi, Talwade, Bhosari, Spine Road, and nearby PCMC areas." },
  ];

  return (
    <>
      <Helmet>
        <title>Best IIT JEE Coaching Classes in Chikhali | ASQUARE Academy</title>
        <meta name="title" content="Best IIT JEE Coaching Classes in Chikhali | ASQUARE Academy" />
        <meta name="description" content="Join ASQUARE Academy for the Best IIT JEE Coaching Classes in Chikhali. Expert faculty, small batches & full JEE Main & Advanced preparation with mock tests. Serving Chikhali, Moshi, Bhosari & nearby PCMC areas." />
        <meta name="keywords" content="IIT JEE coaching classes in chikhali,
Best IIT JEE Coaching in chikhali,
Top JEE Mains Coaching Classes chikhali,
IIT JEE Advanced Preparation chikhali,
JEE Advanced coaching classes in chikhali,
IIT JEE Classes in chikhali,
Best IIT JEE Classes in chikhali,
Top IIT JEE Classes in chikhali,
" />
        <script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-institute-chikhali-pune#localbusiness",
      "name": "ASQUARE Academy - IIT JEE Coaching Classes in Chikhali",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-institute-chikhali-pune",
      "telephone": "9766118877",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Chikhali",
        "addressRegion": "Pune",
        "addressCountry": "India"
      },
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune"
      ],
      "description": "ASQUARE Academy offers the Best IIT JEE Coaching Classes in Chikhali with expert faculty, personalized mentoring, mock exams & complete JEE Main & Advanced preparation."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-institute-chikhali-pune#webpage",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-institute-chikhali-pune",
      "name": "Best IIT JEE Coaching Classes in Chikhali | ASQUARE Academy Pune",
      "description": "Join ASQUARE Academy Chikhali for expert IIT JEE Coaching Classes. Specialized programs for JEE Main & Advanced with tests, reports & PTMs for students.",
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
      "name": "ASQUARE Academy",
      "url": "https://www.asquareclasses.com/",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "description": "ASQUARE Academy provides top IIT JEE Coaching Classes in Chikhali, Pune with expert mentorship, small batches, and mock exams for JEE Main & Advanced success."
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can apply at ASQUARE Chikhali?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students of Class XI, XII & XII pass-outs targeting JEE Main & Advanced can join ASQUARE Academy’s IIT JEE Coaching Classes in Chikhali."
          }
        },
        {
          "@type": "Question",
          "name": "Which subjects are included?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The IIT JEE Coaching Classes include Physics, Chemistry & Mathematics (PCM)."
          }
        },
        {
          "@type": "Question",
          "name": "Are mock exams conducted?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, regular practice tests and mock exams are conducted for all coaching classes."
          }
        },
        {
          "@type": "Question",
          "name": "What are the course options?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE offers 2-Year, 1-Year, Crash & Dropper batches under its IIT JEE Coaching Classes in Chikhali."
          }
        },
        {
          "@type": "Question",
          "name": "What’s the batch size?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Small batch sizes are maintained to ensure personalized attention and effective learning."
          }
        },
        {
          "@type": "Question",
          "name": "Do parents receive updates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, parents receive regular progress reports and updates through PTMs."
          }
        },
        {
          "@type": "Question",
          "name": "Which areas can access this branch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Chikhali branch is easily accessible from Moshi, Talwade, Bhosari, Spine Road, and nearby PCMC areas."
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
          "name": "IIT JEE Coaching Classes in Chikhali",
          "item": "https://www.asquareclasses.com/iit-jee-coaching-institute-chikhali-pune"
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

      {/* Hero Section */}
      <section className="jee-hero-section text-white d-flex align-items-center bg-transparent">
        <div className="container py-5">
          <div className="row align-items-center">
            {/* Left Side: Text */}
            <div className="col-12 col-lg-8 col-md-12 text-center text-md-start">
              <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
                Excel in JEE Main & Advanced with{" "}
                <span className="highlight-text text-warning">ASQUARE Institute Chikhali</span>
              </motion.h1>

              <motion.h2>Shape Your Future with Expert JEE Coaching in Chikhali</motion.h2>

              <p className="lead d-none d-md-block">
                Searching for the best IIT JEE institute in Chikhali, Pune? At ASQUARE Academy, we guide students with strong fundamentals, advanced problem-solving strategies, and effective exam techniques. Our structured programs help aspirants secure admission to IITs, NITs, IIITs, and top engineering colleges nationwide.
              </p>

              <p className="lead d-block d-md-none">
                Searching for the best IIT JEE institute in Chikhali, Pune? At ASQUARE Academy, we guide students with strong fundamentals, advanced problem-solving strategies, and effective exam techniques.
              </p>

              <a className="btn btn-warning btn-lg rounded-pill mt-3 shadow-lg">
                <Link to={'/'} className="nav-item nav-item-list text-warning">🚀 Enroll Now</Link>
              </a>
            </div>

            {/* Right Side: Image */}
            <div className="col-12 col-lg-4 col-md-12 mt-5 mt-md-0 text-center">
              <img src={sampleimg3} alt="ASQUARE Academy Chikhali" className="img-fluid mx-auto fade-in imgsiz" style={{ objectFit: "contain", opacity: 0.95, borderRadius: "10px" }} />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Why Choose */}
      <section className="jee-why py-5 ">
        <div className="container">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">
            Why ASQUARE is the Best JEE Institute in <span className="text-primary">Chikhali</span>?
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

      {/* Programs Section */}
      <section className="jee-programs py-5 bg-light">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-8 text-center text-lg-start order-2">
              <motion.h4 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-centerr">
                About Our <span className="text-primary">JEE Coaching</span> Programs
              </motion.h4>

              <p className="lead text-secondary">
                The Joint Entrance Examination (JEE) is one of the toughest exams in India. Our Chikhali branch delivers concept-based learning, practice-driven modules, and exam-oriented training for JEE Main & Advanced success.
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
            Subjects We Cover <span className="highlight-text text-warning">&nbsp;&&nbsp;</span> Batches
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
              <h4 className="highlight-text text-warning fw-bold mb-4 text-centerr">Course Options & Batches</h4>
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

      {/* Teaching Style */}
      <section className="jee-method py-5 bg-light">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-12 text-center text-lg-start">
              <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">
                Teaching Style at <span className="highlight-text text-primary">ASQUARE Chikhali</span>
              </motion.h3>

              <div className="row g-4 justify-content-center">
                {["Daily topic-wise lectures with assignments", "One-to-one doubt-solving sessions", "Weekly practice & full-length mock tests", "Parent-teacher meetings for progress updates"].map((text, i) => (
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
            Key Benefits of Joining Our <span className="highlight-text text-warning">Chikhali</span> Branch
          </motion.h3>

          <div className="row justify-content-center g-4">
            {[
              "Personalized mentoring with limited batch size",
              "Latest study material & problem sets",
              "Workshops on exam strategy & time management",
              "Trusted JEE institute in Chikhali, Pune"
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
                Success & <span className="highlight-text text-warning">Results</span>
              </motion.h3>
              <p className="lead text-light">
                Year after year, ASQUARE students achieve top results in IIT-JEE, NITs, and other engineering entrances. Our Chikhali center continues this legacy with consistent student success.
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
            Enroll at <span className="highlight-text text-warning">ASQUARE Academy</span> Chikhali Today
          </motion.h3>

          <p className="lead mb-4">
            Start your IIT JEE journey with ASQUARE Academy Chikhali, Pune. With expert teachers, result-oriented training, and proven programs, we are your trusted partner in JEE, CET & NEET preparation.
          </p>

          <p><MapPin className="text-warning" /> Serving students from <b className="bld">Chikhali, Moshi, Talwade, Bhosari, Spine Road, and nearby PCMC areas.</b></p>

          <a className="btn btn-lg btn-warning fw-bold mt-3 px-5 py-3 rounded-pill shadow-lg">
            <Link to={'/'} className="nav-item nav-item-list text-white">
              ⚡ Admissions Open – Reserve your seat today!
            </Link>
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default IITJEEChikhali;
