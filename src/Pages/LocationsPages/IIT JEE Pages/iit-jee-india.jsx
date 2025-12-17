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

import sampleimg1 from '../../../Assets/SampleImages/Banners/Banners (3).jpeg';
import sampleimg11 from '../../../Assets/SampleImages/Banners/Banners (4).jpeg';
import sampleimg2 from '../../../Assets/SampleImages/MobBanners/MobBanner3.jpeg';
import sampleimg22 from'../../../Assets/SampleImages/MobBanners/MobBanner4.jpeg';
import sampleimg3 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (9).jpeg';
import sampleimg4 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (2).jpeg';
import sampleimg6 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (4).jpeg';

import Form from '../../../Components/Form2/Form2.jsx';
const Reviews = React.lazy(() => import("../../../Components/Reviews/Reviews.jsx"));

function IITJEEIndia() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const whyChoose = [
    { Icon: Users, title: "Expert IIT-JEE Faculty", desc: "Highly qualified teachers for Physics, Chemistry & Mathematics." },
    { Icon: BookOpen, title: "Complete JEE Mains + Advanced Syllabus", desc: "Concept-building followed by advanced numerical practice." },
    { Icon: Target, title: "Small Batches for Personal Attention", desc: "Focused learning with regular doubt-solving and performance tracking" },
    { Icon: BarChart, title: "Weekly Tests and Monthly Mock Exams", desc: "Designed to enhance accuracy, speed, and exam readiness." },
    { Icon: Lightbulb, title: "Online and Offline IIT JEE Classes", desc: "Flexible learning options for students across Maharashtra." },
     { Icon: Lightbulb, title: "Boards + JEE Hybrid Preparation", desc: "Integrated approach to strengthen both school academics and JEE performance." },
  ];

  const subjects = [
    { title: "Physics", desc: "Strong conceptual foundation, numericals and problem-solving sessions." },
    { title: "Chemistry", desc: "Complete Physical, Organic, and Inorganic Chemistry aligned with JEE standards" },
    { title: "Mathematics", desc: "Advanced-level question practice, concepts, and application-based learning." },
  ];

  const batches = [
    { title: "2-Year Integrated Program (Class 11 + 12)", desc: "Comprehensive training for Boards and JEE." },
    { title: "1-Year Target Program (Class 12)", desc: "Structured syllabus completion with mock tests." },
    { title: "Dropper / Repeater IIT JEE Batch", desc: "One-year intensive coaching with revision and analysis." },
    { title: "IIT JEE Crash Course (2–3 Months)", desc: "Quick revision, PYQs, short notes, and daily mock tests." },
  ];

  const faqs = [
    { q: "Q1: Why is ASQUARE Academy known as the Best IIT JEE Coaching in Maharashtra?", a: "Because of expert faculty, structured learning, small batches, rigorous test series and consistent results across many cities." },
    { q: "Q2: Do you provide personal doubt-solving?", a: "Yes — every student receives individual doubt sessions and mentor guidance." },
    { q: "Q3: Which cities do you serve?", a: "We serve students across Pune, Mumbai, Nagpur, Thane, Nashik, Aurangabad, Solapur, Kolhapur, Satara and nearby regions." },
    { q: "Q4: Is online IIT JEE coaching available?", a: "Yes — complete online coaching with test analytics and downloadable study material is available." },
    { q: "Q5: Do you track student performance?", a: "Yes — weekly tests, full-length mocks and detailed progress reports are provided." },
    { q: "Q6: Are study materials included?", a: "Yes — printed & digital notes, DPPs, PYQs and assignments are part of the program." },
    { q: "Q7: Do you offer crash courses?", a: "Yes — fast-track crash courses are run before exams focusing on PYQs and mock tests." },
    { q: "Q8: Do you cover both JEE Mains & Advanced?", a: "Yes — our integrated programs prepare students for both JEE Mains & Advanced." },
  ];

  return (
    <>
      <Helmet>
        <title>Best IIT JEE Coaching Classes | Top JEE Mains & Advanced Institute – ASQUARE Academy</title>
        <meta name="title" content="Best IIT JEE Coaching Classes | Top JEE Mains & Advanced Institute – ASQUARE Academy" />
        <meta name="description" content="Join the Best IIT JEE Coaching Classes at ASQUARE Academy. Expert faculty, small batches, JEE Mains & Advanced preparation, doubt-solving, online coaching, study material & results-driven learning." />
        <meta name="keywords" content="IIT JEE coaching classes,
Best IIT JEE Coaching ,
Top JEE Mains Coaching Classes ,
IIT JEE Advanced Preparation,
JEE Advanced coaching classes,
IIT JEE Classes,
Best IIT JEE Classes,
Top IIT JEE Classes,
IIT JEE Institute coaching,
IIT JEE Institute classes,
" />
        <link rel="canonical" href={canonicalUrl} />

        <script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute#localbusiness",
      "name": "ASQUARE Academy - IIT JEE Coaching Institute",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "telephone": "9766118877",
      "description": "ASQUARE Academy offers the best IIT JEE coaching with expert faculty, small batches, JEE Mains & Advanced preparation, online coaching & structured learning.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune/"
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute#webpage",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute",
      "name": "Best IIT JEE Coaching Classes | Top JEE Mains & Advanced Institute",
      "description": "Top IIT JEE coaching institute providing JEE Mains & Advanced preparation with expert faculty, doubt-solving, assessments, and online coaching options."
    },
    {
      "@type": "EducationalOrganization",
      "@id": "https://www.asquareclasses.com/#educational",
      "name": "ASQUARE Academy",
      "url": "https://www.asquareclasses.com/",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "description": "Leading IIT JEE and NEET coaching institute in Maharashtra offering structured learning programs.",
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune/"
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute#breadcrumb",
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
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why is ASQUARE Academy known as the Best IIT JEE Coaching in Maharashtra?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE Academy is known for expert faculty, structured learning, small batches, advanced preparation system, and consistent results."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide personal doubt-solving?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we offer individual doubt-solving sessions for every student."
          }
        },
        {
          "@type": "Question",
          "name": "Which cities do you serve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We serve students from Pune, Mumbai, Nagpur, Thane, Nashik, Aurangabad, Solapur, Kolhapur, and Satara."
          }
        },
        {
          "@type": "Question",
          "name": "Is online IIT JEE coaching available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we offer complete online IIT JEE coaching for students across Maharashtra."
          }
        },
        {
          "@type": "Question",
          "name": "Do you track student performance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we provide detailed assessments, progress reports, and regular performance tracking."
          }
        },
        {
          "@type": "Question",
          "name": "Are study materials included?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we provide printed & digital notes, DPPs, PYQs, and assignments."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer IIT JEE crash courses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, fast-track crash courses are available before exams."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer JEE Mains and Advanced preparation together?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, our integrated coaching covers both JEE Mains and JEE Advanced."
          }
        }
      ]
    }
  ]
}

        `}</script>
      </Helmet>

      <Navbar />
      <Header />

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

      <section className="jee-hero-section text-white d-flex align-items-center bg-transparent">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-12 col-lg-8 col-md-12 text-center text-md-start">
              <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
                Best IIT JEE Coaching Classes in India –{" "}
                <span className="highlight-text text-warning">ASQUARE Academy</span>for Top Engineering Entrance Preparation
              </motion.h1>
              <motion.h4>Best IIT JEE Coaching | Top JEE Mains Coaching Classes | IIT JEE Advanced Preparation | JEE Advanced Coaching Classes | IIT JEE Classes | Best IIT JEE Classes | Top IIT JEE Classes | IIT JEE Institute Coaching | IIT JEE Institute Classes</motion.h4>

              <p className="lead ">
                ASQUARE Academy offers one of India’s most structured and result-oriented IIT JEE Coaching Classes across Pune, Mumbai, Nagpur, Thane, Nashik, Aurangabad, Solapur, Kolhapur, and Satara.
              </p>
                <p className="lead ">
                If you're searching for Best IIT JEE Coaching, Top JEE Mains Coaching Classes, or a reliable IIT JEE Institute Coaching, ASQUARE Academy is the preferred destination for engineering entrance preparation.
              </p>
                <p className="lead ">
                Our expert faculty, concept-oriented teaching, personalized guidance, and rigorous test series help students excel in JEE Mains & JEE Advanced.
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

      <section className="jee-why py-5">
        <div className="container">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">
            Why <span className="text-primary">ASQUARE Academy ?</span> -Best IIT JEE Coaching in Maharashtra
          </motion.h3>

     <p className="lead ">
            ASQUARE Academy is recognized among the Top IIT JEE Coaching Classes for its structured methodology and impressive results.
          </p>

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

            <p className="lead ">
            Students from Pune, Mumbai, Nagpur, Thane, Nashik, Aurangabad, Solapur, Kolhapur, and Satara choose ASQUARE Academy for high-quality IIT JEE preparation.
          </p>
        </div>
      </section>

      <hr />

      <section className="jee-programs py-5 bg-light">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-8 text-center text-lg-start order-2">
              <motion.h4 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-centerr">
                Comprehensive IIT JEE Course Overview – <span className="text-primary">ASQUARE Academy</span>
              </motion.h4>

              <p className="lead text-secondary">
                Our program helps students master Physics, Chemistry, and Mathematics through conceptual learning, daily practice, mock examinations, and personalized mentoring.
Students from major regions across Maharashtra—including Pune, Mumbai, Nagpur, Thane, Nashik, Aurangabad, Solapur, Kolhapur, and Satara—join ASQUARE Academy for structured IIT JEE coaching.

              </p>
              <code className="lead text-secondary">
                <b>Course Details – IIT JEE Mains and Advanced Coaching</b><br></br>
 <b>Targeted for aspirants aiming for:</b><br></br>
•	IITs
•	NITs
•	IIITs
•	CFTIs
•	Top private engineering colleges<br></br>
 <b>ASQUARE Academy ensures:</b><br></br>
•	Complete JEE syllabus coverage
•	Topic-wise PYQs and advanced problems
•	Full-length mock exams
•	Numerical and logical problem-solving
•	Personalized performance improvement plans<br></br>
ASQUARE is trusted as one of the Top IIT JEE Institute Coaching Centers in Maharashtra.

              </code>
            </div>

            <div className="col-lg-4 text-center order-1">
              <motion.img whileHover={{ scale: 1.03 }} src={sampleimg4} alt="JEE Coaching" className="img-fluid rounded-4 shadow-lg mx-auto d-block" style={{ width: "85%" }} />
            </div>
          </div>
        </div>
      </section>

      <hr />

      <section className="jee-gradient-section py-5 text-white">
        <div className="container">
          <motion.h4 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">
            Subjects Covered — IIT JEE Classes at ASQUARE Academy
            <span className="highlight-text text-warning">&nbsp;&&nbsp;</span>
            Program Duration & Batch Options
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

              <p>
                Students across Maharashtra choose ASQUARE Academy for systematic and competitive JEE preparation.
              </p>
            </div>

            <div className="col-lg-6">
              <h4 className="highlight-text text-warning fw-bold mb-4 text-centerr">Program Duration & Batch Options</h4>
              {batches.map((b, i) => (
                <div key={i} className="jee-subject-box mb-3 p-3 rounded-4 bg-white bg-opacity-10 backdrop-blur-md border border-light border-opacity-25">
                  <h5 className="fw-semibold">{b.title}</h5>
                  <p className="small mb-0">{b.desc}</p>
                </div>
              ))}
              <p>
                Students join from Pune, Mumbai, Nagpur, Thane, Nashik, Aurangabad, Solapur, Kolhapur, and Satara.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr />

      <section className="jee-method py-5 bg-light">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-12 text-center text-lg-start">
              <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">
                ASQUARE Teaching Methodology
              </motion.h3>

              <div className="row g-4 justify-content-center">
                {["Learn", "Practice", "Assess", "Revise"].map((step, i) => (
                  <div key={i} className="col-lg-3 col-6">
                    <motion.div whileHover={{ y: -5 }} className="method-card p-4 bg-white rounded-4 shadow-sm h-100 text-center">
                      <p className="text-muted small mb-0">
                        {step === "Learn"
                          ? "Learn: Concept-oriented classroom sessions"
                          : step === "Practice"
                            ? "Practice: Worksheets, DPPs, assignments"
                            : step === "Assess"
                              ? "Assess: Weekly tests and full-length mock exams"
                              : "Revise: Strategy-based revision sessions and PYQ practice"}
                      </p>
                    </motion.div>
                  </div>
                ))}
              <p className="lead ">
                    This proven teaching pattern positions ASQUARE Academy among the Best IIT JEE Classes in Maharashtra.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr />

      <section className="jee-highlights py-5 text-white">
        <div className="container text-center">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
            Key Highlights of ASQUARE Academy
          </motion.h3>

          <div className="row justify-content-center g-4">
            {[
              "Expert faculty and mentors across multiple cities",
              "Digital & printed study materials, PYQs & DPPs",
              "Online test portal with analytics and progress reports",
              "Parent–teacher meetings and consistent performance tracking",
              "Proven results with students in top IITs & NITs",
              "Accessible across major Maharashtra cities"
            ].map((text, i) => (
              <motion.div key={i} className="col-md-5 col-lg-4 col-6" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <div className="highlight-card shadow-lg rounded-4 p-4 bg-white bg-opacity-10 backdrop-blur-md border border-light border-opacity-25">
                  <div className="icon-circle mx-auto mb-3"><h2>🎯</h2></div>
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

      <section className="jee-results py-5 text-white">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-8 text-center text-lg-start">
              <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
                ASQUARE Academy’s IIT JEE Success Stories
              </motion.h3>
              <p className="lead text-light">
                Our students secure admissions to top engineering institutions including: <br></br>
                •	IIT Bombay<br></br>
•	IIT Delhi<br></br>
•	IIT Madras<br></br>
•	IIT Kanpur<br></br>
•	IIT Kharagpur<br></br>
•	NITs, IIITs, and COEP Pune

              </p>
            </div>

            <div className="col-lg-4 text-center">
              <motion.img whileHover={{ scale: 1.05 }} src={sampleimg6} alt="Success Stories" className="img-fluid rounded-4 shadow-lg mx-auto d-block" style={{ width: "80%" }} />
            </div>
          </div>
        </div>
      </section>

      <hr />

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

      <section id="enroll" className="jee-enroll-section py-5 text-center text-white">
        <div className="container">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
            Join ASQUARE Academy — Top IIT JEE Coaching in Maharashtra
          </motion.h3>

          <p className="lead mb-4">
           Join ASQUARE Academy and begin your IIT JEE preparation with structured learning, expert mentors, and proven results.
          </p>

          <p><MapPin className="text-warning" />Serving Maharashtra:<b className="bld">Pune | Mumbai | Nagpur | Thane | Nashik | Aurangabad | Solapur | Kolhapur | Satara </b></p>

          <a className="btn btn-lg btn-warning fw-bold mt-3 px-5 py-3 rounded-pill shadow-lg">
            <Link to={'/'} className="nav-item nav-item-list text-white">
              ⚡ Admissions Open – Enroll now!
              &nbsp;<span className="text-warning">Limited seats available.</span>
            </Link>
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default IITJEEIndia;
