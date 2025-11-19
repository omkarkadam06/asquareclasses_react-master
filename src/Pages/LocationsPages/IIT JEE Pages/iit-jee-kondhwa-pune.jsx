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
import sampleimg1 from '../../../Assets/SampleImages/Banners/Banners (5).jpeg';
import sampleimg11 from '../../../Assets/SampleImages/Banners/Banners (6).jpeg';
import sampleimg3 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (9).jpeg';
import sampleimg4 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (2).jpeg';
import sampleimg6 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (4).jpeg';
import Form from '../../../Components/Form2/Form2.jsx';

const Reviews = React.lazy(() => import("../../../Components/Reviews/Reviews.jsx"));

function IITJEEKondhwa() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Content taken directly from uploaded Word file (Kondhwa)
  const whyChoose = [
    { Icon: Users, title: "Expert Faculty", desc: "Highly experienced mentors for Physics, Chemistry, and Mathematics." },
    { Icon: BookOpen, title: "Comprehensive Curriculum", desc: "Strong NCERT base combined with advanced JEE-level problem-solving." },
    { Icon: Target, title: "Small Batch Sizes", desc: "Personal attention and doubt-clearing for every student." },
    { Icon: BarChart, title: "Regular Assessments", desc: "Weekly tests, mock exams, and detailed performance reviews." },
    { Icon: Lightbulb, title: "Flexible Learning", desc: "Choose from classroom or online sessions as per convenience." },
  ];

  const subjects = [
    { title: "Physics", desc: "Concept mastery and problem solving for JEE-level questions." },
    { title: "Chemistry", desc: "Balanced coverage of Physical, Organic & Inorganic Chemistry." },
    { title: "Mathematics", desc: "Rigorous practice in Algebra, Geometry, Trigonometry, Calculus & Probability." },
  ];

  const batches = [
    { title: "2-Year Integrated Program (Class 11 → 12)", desc: "" },
    { title: "1-Year Target Program (Class 12)", desc: "" },
    { title: "Dropper/Repeater Batch", desc: "" },
    { title: "Crash Course (2–3 Months)", desc: "" },
  ];

  const faqs = [
    {
      q: "Q1: Does ASQUARE offer training for both JEE Mains and Advanced?",
      a: "Yes, ASQUARE provides comprehensive IIT JEE coaching classes in Kondhwa covering both JEE Mains and Advanced. Students receive structured lessons, test series, and conceptual clarity for every topic."
    },
    {
      q: "Q2: Are small, focused batches available?",
      a: "Absolutely. We maintain small batch sizes at our Best IIT JEE Coaching in Kondhwa to ensure individual attention, personalized guidance, and better interaction with faculty members."
    },
    {
      q: "Q3: Do you have a dropper/repeater program?",
      a: "Yes, ASQUARE offers a specialized dropper batch for IIT JEE Classes in Kondhwa designed for repeaters aiming to improve ranks through intensive revision, test analysis, and strategy-based study plans."
    },
    {
      q: "Q4: What is ASQUARE’s teaching approach?",
      a: "Our Top JEE Mains Coaching Classes in Kondhwa focus on conceptual understanding, application-based learning, and continuous testing to help students build strong fundamentals for both JEE Mains and Advanced."
    },
    {
      q: "Q5: Can students from Undri or NIBM Road join the Kondhwa center?",
      a: "Yes, students from nearby areas like Undri and NIBM Road can easily enroll at our IIT JEE Coaching Classes in Kondhwa, as the center is conveniently located with flexible batch timings."
    },
    {
      q: "Q6: How does ASQUARE prepare students for IIT JEE Advanced?",
      a: "We conduct exclusive sessions for IIT JEE Advanced Preparation in Kondhwa, emphasizing advanced problem-solving techniques, mock tests, and previous year paper discussions."
    },
    {
      q: "Q7: What subjects are covered in ASQUARE’s IIT JEE program?",
      a: "Our Best IIT JEE Classes in Kondhwa cover Physics, Chemistry, and Mathematics thoroughly, with a balanced focus on NCERT concepts and JEE-level applications."
    },
    {
      q: "Q8: Why choose ASQUARE as the Top IIT JEE Classes in Kondhwa?",
      a: "ASQUARE stands out as the Top IIT JEE Classes in Kondhwa for its experienced faculty, consistent results, personalized mentoring, and student-focused teaching methodology."
    },
  ];

  return (
    <>
      <Helmet>
        <title>Best IIT JEE Coaching Classes in Kondhwa | ASQUARE Academy</title>
        <meta name="title" content="Best IIT JEE Coaching Classes in Kondhwa | ASQUARE Academy" />
        <meta
          name="description"
          content="Join ASQUARE Academy Kondhwa for expert IIT JEE Coaching Classes. Learn from top faculty, attempt regular mock tests & build strong JEE Mains & Advanced preparation."
        />
        <meta name="keywords" content="IIT JEE coaching classes in kondhwa,
Best IIT JEE Coaching in kondhwa,
Top JEE Mains Coaching Classes kondhwa,
IIT JEE Advanced Preparation kondhwa,
JEE Advanced coaching classes in kondhwa,
IIT JEE Classes in kondhwa,
Best IIT JEE Classes in kondhwa,
Top IIT JEE Classes in kondhwa,
" />

        {/* JSON-LD schema copied from the Word file (kept as in source file) */}
        <script type="application/ld+json">{`
       {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-kondhwa-pune#localbusiness",
      "name": "ASQUARE Academy - IIT JEE Coaching Classes in Kondhwa",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-kondhwa-pune",
      "telephone": "9766118877",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kondhwa",
        "addressRegion": "Pune",
        "addressCountry": "India"
      },
      "areaServed": "Pune, Undri, NIBM Road, Maharashtra",
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune"
      ],
      "description": "ASQUARE Academy offers the Best IIT JEE Coaching Classes in Kondhwa with expert mentors, small batches & structured learning for JEE Main & Advanced success."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-kondhwa-pune#webpage",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-kondhwa-pune",
      "name": "Best IIT JEE Coaching Classes in Kondhwa | ASQUARE Academy Pune",
      "description": "Join ASQUARE Academy Kondhwa for expert IIT JEE Coaching Classes. Learn from top faculty, attempt regular mock tests & build strong JEE Mains & Advanced preparation.",
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
      "description": "ASQUARE Academy provides the Best IIT JEE Coaching Classes in Kondhwa, Pune with comprehensive preparation for JEE Mains & Advanced through expert mentoring and focused batches."
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does ASQUARE offer training for both JEE Mains and Advanced?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, ASQUARE provides complete IIT JEE Coaching Classes in Kondhwa covering both JEE Mains and Advanced with structured lessons and mock tests."
          }
        },
        {
          "@type": "Question",
          "name": "Are small, focused batches available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, small batch sizes are maintained to ensure personalized guidance and one-on-one doubt-solving."
          }
        },
        {
          "@type": "Question",
          "name": "Do you have a dropper/repeater program?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, ASQUARE offers a dedicated dropper batch for IIT JEE aspirants focusing on advanced preparation, revision, and test analysis."
          }
        },
        {
          "@type": "Question",
          "name": "What is ASQUARE’s teaching approach?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our JEE Coaching Classes in Kondhwa focus on conceptual clarity, application-based learning, and continuous testing to ensure mastery of every topic."
          }
        },
        {
          "@type": "Question",
          "name": "Can students from Undri or NIBM Road join the Kondhwa center?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, students from Undri and NIBM Road can easily access our Kondhwa center with convenient timing options."
          }
        },
        {
          "@type": "Question",
          "name": "How does ASQUARE prepare students for IIT JEE Advanced?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE conducts advanced-level sessions, problem-solving workshops, and mock tests focused on JEE Advanced preparation."
          }
        },
        {
          "@type": "Question",
          "name": "What subjects are covered in ASQUARE’s IIT JEE program?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The program includes Physics, Chemistry, and Mathematics (PCM) taught with equal focus on conceptual depth and problem-solving."
          }
        },
        {
          "@type": "Question",
          "name": "Why choose ASQUARE as the Top IIT JEE Classes in Kondhwa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE stands out for its expert faculty, proven results, individual mentoring, and structured JEE Mains & Advanced preparation strategy."
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
          "name": "IIT JEE Coaching Classes in Kondhwa",
          "item": "https://www.asquareclasses.com/iit-jee-coaching-classes-kondhwa-pune"
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
                Crack JEE Mains &amp; Advanced with {" "}
                <span className="highlight-text text-primary">ASQUARE Academy</span> – Kondhwa
              </motion.h1>

              <motion.h2>Preparing for IIT JEE requires consistent effort, expert mentorship, and the right guidance.</motion.h2>

              <p className="lead d-none d-md-block">
                At ASQUARE Academy, we provide the most trusted IIT JEE coaching classes in Kondhwa, Pune, to help students master concepts, sharpen their analytical skills, and perform confidently in both JEE Mains and Advanced exams.
              </p>

              <p className="lead d-block d-md-none">
                At ASQUARE Academy, we provide the most trusted IIT JEE coaching classes in Kondhwa, Pune, to help students master concepts, sharpen their analytical skills, and perform confidently in both JEE Mains and Advanced exams.
              </p>

              <a className="btn btn-warning btn-lg rounded-pill mt-3 shadow-lg">
                <Link to={'/'} className="nav-item nav-item-list text-warning">
                  🚀 Enroll Now
                </Link>
              </a>
            </div>

            {/* Right Side: Transparent Image */}
            <div className="col-12 col-lg-4 col-md-12 mt-5 mt-md-0 text-center">
              <img src={sampleimg3} alt="ASQUARE Academy Kondhwa" className="img-fluid mx-auto fade-in imgsiz" style={{ objectFit: "contain", opacity: 0.95, borderRadius: "10px" }} />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Why Choose */}
      <section className="jee-why py-5 ">
        <div className="container">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">
            Why Choose{" "}
            <span className="highlight-text text-primary">ASQUARE Academy</span> for IIT JEE in Kondhwa?
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
                Programs Offered at <span className="highlight-text text-primary">ASQUARE – Kondhwa</span>
              </motion.h4>

              <p className="lead text-secondary">
                Recognized among the Best IIT JEE Coaching in Kondhwa, our programs emphasize conceptual clarity, structured study plans, and regular assessments. Students from Kondhwa and nearby areas like Undri, NIBM Road, Mohammed Wadi, Wanowrie, and Bibwewadi trust ASQUARE Academy for their IIT JEE success.
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
            Subjects We Cover <span className="highlight-text text-warning">&nbsp;&&nbsp;</span> Batch Options
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

      {/* Methodology */}
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
                          ? "• Daily topic-wise lectures with assignments"
                          : step === "Practice"
                            ? "• One-to-one doubt-clearing sessions"
                            : step === "Assess"
                              ? "• Weekly tests, mock exams, and detailed performance reviews"
                              : "• Revision and performance feedback"}
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

      {/* Highlights */}
      <section className="jee-highlights py-5 text-white">
        <div className="container text-center">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
            Key Features of <span className="highlight-text text-warning">ASQUARE Academy – Kondhwa</span>
          </motion.h3>

          <div className="row justify-content-center g-4">
            {[
              "• Updated study material in both print and digital formats",
              "• Regular doubt-solving and mentoring sessions",
              "• Online test series with detailed analytics",
              "• Time management & strategy workshops",
              "• Ranked among the Top IIT JEE Classes in Kondhwa and trusted by aspirants across South Pune"
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
                Results That Define Our <span className="text-warning"> Success</span>
              </motion.h3>
              <p className="lead text-light">
                Students from Kondhwa and nearby areas have consistently performed exceptionally well in JEE Mains & Advanced, securing admission to IITs, NITs, and other premier engineering colleges. ASQUARE Academy’s focused teaching approach ensures top results every year.
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
              <FAQAccordion faqs={faqs.slice(0, Math.ceil(faqs.length / 2))} accordionId="kondhwaFaqLeft" />
            </div>

            <div className="col-12 col-md-6">
              <FAQAccordion faqs={faqs.slice(Math.ceil(faqs.length / 2))} accordionId="kondhwaFaqRight" />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Final CTA */}
      <section id="enroll" className="jee-enroll-section py-5 text-center text-white">
        <div className="container">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
            Join ASQUARE Academy <span className="highlight-text text-warning">&nbsp;Kondhwa Today&nbsp;</span>
          </motion.h3>

          <p className="lead mb-4">
            If you’re looking for the Best IIT JEE Coaching in Kondhwa, Pune, your search ends here. With expert faculty, personalized attention, and a proven record of success, ASQUARE Academy is your trusted partner in JEE preparation.
          </p>

          <p><MapPin className="text-warning" /> Convenient for students from Kondhwa, Undri, NIBM Road, Mohammed Wadi, Wanowrie, and Bibwewadi.</p>

          <a className="btn btn-lg btn-warning fw-bold mt-3 px-5 py-3 rounded-pill shadow-lg">
            <Link to={'/'} className="nav-item nav-item-list text-white">
              ⚡ Admissions Open – Enroll Now!
              &nbsp;<span className="text-warning">Limited Seats!</span>
            </Link>
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default IITJEEKondhwa;
