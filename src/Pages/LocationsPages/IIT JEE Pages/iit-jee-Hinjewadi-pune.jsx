

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
import sampleimg1 from '../../../Assets/SampleImages/Banners/Banners (3).jpeg';
import sampleimg11 from '../../../Assets/SampleImages/Banners/Banners (4).jpeg';
import sampleimg3 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (15).jpeg';
import sampleimg4 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (17).jpeg';
import sampleimg6 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (8).jpeg';

import Form from '../../../Components/Form2/Form2.jsx';

const Reviews = React.lazy(() => import("../../../Components/Reviews/Reviews.jsx"));

function IITJEEHinjewadi() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Why choose content (verbatim from Word file) :contentReference[oaicite:1]{index=1}
  const whyChoose = [
    { Icon: Users, title: "Experienced Faculty Members", desc: "Experts in IIT-JEE, MHT-CET & NEET coaching." },
    { Icon: BookOpen, title: "Comprehensive PCM Coverage", desc: "Physics, Chemistry & Mathematics aligned with latest exam trends." },
    { Icon: Target, title: "Focused Mentorship", desc: "Small batches at Hinjewadi branch for doubt-solving and individual guidance." },
    { Icon: BarChart, title: "Systematic Testing", desc: "Weekly assignments, unit tests & mock exams." },
    { Icon: Lightbulb, title: "Motivation & Career Guidance", desc: "Regular counseling sessions for stress management and confidence building." },
  ];

  // Subjects (exact wording) :contentReference[oaicite:2]{index=2}
  const subjects = [
    { title: "Physics", desc: "Strong fundamentals with problem-solving applications" },
    { title: "Chemistry", desc: "Detailed focus on Physical, Organic & Inorganic Chemistry" },
    { title: "Mathematics", desc: "Rigorous practice in Algebra, Calculus, Trigonometry, Geometry & Probability" },
  ];

  // Batches (exact wording) :contentReference[oaicite:3]{index=3}
  const batches = [
    { title: "2-Year Foundation Program (10th → 12th Moving Students)", desc: "Covers XI + XII Boards + JEE syllabus." },
    { title: "1-Year Intensive Program (11th → 12th Moving Students)", desc: "Fast-track preparation for XII + JEE." },
    { title: "Crash Course (2–3 Months)", desc: "Quick revision & mock exam practice." },
    { title: "Repeater/Dropper Batch (XII Pass-outs)", desc: "One-year focused JEE training program." },
  ];

  // FAQs (verbatim from the Word file) :contentReference[oaicite:4]{index=4}
  const faqs = [
    { q: "Q1: Who can enroll at ASQUARE Academy Hinjewadi?", a: "Students of Class XI, XII, and XII pass-outs preparing for JEE Main & Advanced." },
    { q: "Q2: What subjects are taught?", a: "Physics, Chemistry & Mathematics (PCM)." },
    { q: "Q3: Do you provide mock tests?", a: "Yes, weekly tests and full-length JEE mock exams are conducted." },
    { q: "Q4: What course options are available?", a: "2-Year, 1-Year, Crash Courses & Dropper Batches." },
    { q: "Q5: How big are the batches?", a: "We keep small batches for better guidance." },
    { q: "Q6: Do parents receive progress reports?", a: "Yes, through PTMs and detailed performance tracking." },
    { q: "Q7: Which areas does the Hinjewadi branch serve?", a: "Conveniently accessible from Hinjewadi, Wakad, Baner, Pimpri-Chinchwad, Tathawade, and nearby Pune IT hub localities." },
    { q: "Q8: Why choose ASQUARE Academy Hinjewadi?", a: "Expert coaching, advanced study material, mock exams & personalized guidance make ASQUARE a top choice." },
  ];

  return (
    <>
      <Helmet>
        <title>Best IIT JEE Coaching Classes in Hinjewadi Pune | ASQUARE Academy</title>
        <meta name="title" content="Best IIT JEE Coaching Classes in Hinjewadi Pune | ASQUARE Academy" />
        <meta name="description" content="Join ASQUARE Academy Hinjewadi for IIT-JEE coaching with expert faculty, mock tests & structured PCM training for JEE Main & Advanced." />
        <meta name="keywords" content={`IIT JEE coaching classes in hinjewadi, Best IIT JEE Coaching in hinjewadi, Top JEE Mains Coaching Classes hinjewadi, IIT JEE Advanced Preparation hinjewadi, JEE Advanced coaching classes in hinjewadi, IIT JEE Classes in hinjewadi, Best IIT JEE Classes in hinjewadi, Top IIT JEE Classes in Hinjewadi`} />

        {/* JSON-LD schema taken exactly from the Word file (verbatim). Source: :contentReference[oaicite:5]{index=5} */}
        <script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-hinjewadi-pune#localbusiness",
      "name": "ASQUARE Academy",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-hinjewadi-pune",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "telephone": "9766118877",
      "priceRange": "₹₹",
      "description": "ASQUARE Academy offers the Best IIT JEE Coaching Classes in Hinjewadi Pune with expert faculty, focused study plans, and regular mock tests for JEE aspirants.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Hinjewadi, Pune, Maharashtra",
        "addressLocality": "Pune",
        "addressRegion": "MH",
        "postalCode": "411057",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune/"
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-hinjewadi-pune#webpage",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-hinjewadi-pune",
      "name": "IIT JEE Coaching Classes in Hinjewadi Pune | ASQUARE Academy",
      "description": "Enroll in ASQUARE Academy, the Best IIT JEE Coaching in Hinjewadi Pune, offering expert training, small batches, and consistent performance evaluation.",
      "inLanguage": "en-IN",
      "isPartOf": {
        "@id": "https://www.asquareclasses.com/#website"
      }
    },
    {
      "@type": "EducationalOrganization",
      "name": "ASQUARE Academy",
      "url": "https://www.asquareclasses.com/",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune/"
      ],
      "description": "ASQUARE Academy in Hinjewadi Pune provides IIT JEE Coaching with dedicated mentors, structured lessons, and consistent mock test analysis."
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
          "name": "IIT JEE Coaching Hinjewadi Pune",
          "item": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-hinjewadi-pune"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can enroll at ASQUARE Academy Hinjewadi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students of Class XI, XII, and XII pass-outs preparing for JEE Main & Advanced can enroll in our Hinjewadi branch."
          }
        },
        {
          "@type": "Question",
          "name": "What subjects are taught?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE Academy Hinjewadi teaches Physics, Chemistry, and Mathematics (PCM) with concept-based and problem-solving approaches."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide mock tests?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we conduct weekly tests and full-length JEE mock exams to assess student performance and improve accuracy."
          }
        },
        {
          "@type": "Question",
          "name": "What course options are available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer 2-Year, 1-Year, Crash Courses, and Dropper Batches designed for JEE Main & Advanced preparation."
          }
        },
        {
          "@type": "Question",
          "name": "How big are the batches?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We maintain small batches to ensure better teacher-student interaction and focused mentoring."
          }
        },
        {
          "@type": "Question",
          "name": "Do parents receive progress reports?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we provide detailed progress reports and conduct PTMs to update parents about their child’s performance."
          }
        },
        {
          "@type": "Question",
          "name": "Which areas does the Hinjewadi branch serve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our Hinjewadi branch serves students from Wakad, Baner, Pimpri-Chinchwad, Tathawade, and nearby Pune IT hub areas."
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

      {/* Hero Section — exact text from Word file (see filecite) */}
      <section className="jee-hero-section text-white d-flex align-items-center bg-transparent">
        <div className="container py-5">
          <div className="row align-items-center">
            {/* Left Side: Text */}
            <div className="col-12 col-lg-8 col-md-12 text-center text-md-start">
              <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
                Unlock IIT-JEE Success with  <span className="highlight-text text-warning">ASQUARE Academy</span> Hinjewadi
              </motion.h1>

              <motion.h5 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                Advanced Coaching Destination for Engineering Aspirants in Hinjewadi
              </motion.h5>

              <p className="lead d-none d-md-block">
                Searching for IIT-JEE coaching classes in Hinjewadi, Pune? At ASQUARE Academy, we provide concept-based learning, exam-oriented training, and personalized mentoring to prepare students for engineering entrance success. Our Hinjewadi branch is a hub for aspirants aiming for IITs, NITs, IIITs, and India’s top engineering institutes. With dedicated faculty, modern study resources, and regular practice tests, we ensure students excel in JEE Main & Advanced.
              </p>

              <p className="lead d-block d-md-none">
                Searching for IIT-JEE coaching classes in Hinjewadi, Pune? At ASQUARE Academy, we provide concept-based learning, exam-oriented training, and personalized mentoring to prepare students for engineering entrance success. Our Hinjewadi branch is a hub for aspirants aiming for IITs, NITs, IIITs, and India’s top engineering institutes. With dedicated faculty, modern study resources, and regular practice tests, we ensure students excel in JEE Main & Advanced.
              </p>

         
            </div>

            {/* Right Side: Image */}
            <div className="col-12 col-lg-4 col-md-12 mt-5 mt-md-0 text-center">
              <img src={sampleimg3} alt="ASQUARE Academy Hinjewadi" className="img-fluid mx-auto fade-in imgsiz" style={{ objectFit: "contain", opacity: 0.95, borderRadius: "10px" }} />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Why Choose */}
      <section className="jee-why py-5 ">
        <div className="container">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">
            Why  <span className="highlight-text text-primary">ASQUARE Academy</span> Hinjewadi is the Right Choice
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

      {/* Programs section — exact heading/content from Word file */}
      <section className="jee-programs py-5 bg-light">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-8 text-center text-lg-start order-2">
              <motion.h4 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-centerr">
                Programs to Power Your <span className="highlight-text text-primary">JEE Preparation</span>
              </motion.h4>

              <p className="lead text-secondary">
                The Joint Entrance Examination (JEE) is one of the most competitive exams in India. At ASQUARE Academy Hinjewadi, our courses are designed to strengthen fundamentals, enhance accuracy, and boost exam performance so that students succeed in both JEE Main & Advanced.
              </p>
            </div>

            <div className="col-lg-4 text-center order-1">
              <motion.img whileHover={{ scale: 1.03 }} src={sampleimg4} alt="JEE Coaching Hinjewadi" className="img-fluid rounded-4 shadow-lg mx-auto d-block" style={{ width: "85%" }} />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Subjects + Batches Section — Left: Subjects Offered at Hinjewadi Branch, Right: Course Duration & Batches */}
      <section className="jee-gradient-section py-5 text-white">
        <div className="container">
          <motion.h4 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">
            Subjects Offered at Hinjewadi Branch
            <span className="highlight-text text-warning">&nbsp;&&nbsp;</span>
            Course Duration & Batches
          </motion.h4>

          <br />

          <div className="row g-4">
            <div className="col-lg-6">
              <h4 className="highlight-text text-warning fw-bold mb-4 text-centerr">Subjects Offered at Hinjewadi Branch</h4>
              {subjects.map((sub, i) => (
                <div key={i} className="jee-subject-box mb-4 p-3 pb-4 pt-4 rounded-4 bg-white bg-opacity-10 backdrop-blur-md border border-light border-opacity-25">
                  <h5 className="fw-semibold">{sub.title}</h5>
                  <p className="small mb-0">{sub.desc}</p>
                </div>
              ))}
            </div>

            <div className="col-lg-6">
              <h4 className="highlight-text text-warning fw-bold mb-4 text-centerr">Course Duration & Batches</h4>
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

      {/* Methodology Section — exact list from Word file */}
      <section className="jee-method py-5 bg-light">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-12 text-center text-lg-start">
              <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">
                Our Teaching <span className="highlight-text text-primary">Methodology</span>
              </motion.h3>

              <div className="row g-4 justify-content-center">
                {[
                  "Daily lectures with assignments and topic-based practice",
                  "One-to-one doubt-clearing sessions",
                  "Weekly chapter tests & full-length mock exams",
                  "Parent–teacher meetings for performance analysis"
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

      {/* Key Highlights — verbatim list */}
      <section className="jee-highlights py-5 text-white">
        <div className="container text-center">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
            Key Highlights of <span className="highlight-text text-warning">Hinjewadi Branch</span>
          </motion.h3>

          <div className="row justify-content-center g-4">
            {[
              "Limited batch size for personalized focus",
              "Updated IIT-JEE study material, question banks & test series",
              "Workshops on time-saving strategies, exam hacks & problem-solving",
              "Regular performance tracking and parent communication",
              "Recognized as a top JEE coaching institute in Hinjewadi, Pune"
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
                Our Track Record of <span className="highlight-text text-warning">Success</span>
              </motion.h3>
              <p className="lead text-light">
                ASQUARE Academy has consistently produced IIT-JEE achievers and top scorers. The Hinjewadi branch continues this legacy with student-focused learning, expert faculty, and result-oriented coaching.
              </p>
            </div>

            <div className="col-lg-4 text-center">
              <motion.img whileHover={{ scale: 1.05 }} src={sampleimg6} alt="Success Stories" className="img-fluid rounded-4 shadow-lg mx-auto d-block" style={{ width: "80%" }} />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* FAQs — exact questions and answers from Word file (see filecite) */}
      <section className="jee-faq py-5">
        <div className="container">
          <div className="text-center mb-5">
            <div className="d-inline-block bg-primary bg-opacity-10 text-primary fw-bold rounded-pill px-3 py-1 mb-3">
              <BadgeQuestionMark /> FAQs
            </div>

            <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">
              FAQs – JEE Coaching in <span className="highlight-text text-primary">Hinjewadi</span> 
            </motion.h3>
          </div>

          <div className="row justify-content-center">
            <div className="col-12 col-md-6 mb-4 mb-md-0 ">
              <FAQAccordion faqs={faqs.slice(0, Math.ceil(faqs.length / 2))} accordionId="hinFaqLeft" />
            </div>

            <div className="col-12 col-md-6">
              <FAQAccordion faqs={faqs.slice(Math.ceil(faqs.length / 2))} accordionId="hinFaqRight" />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Final CTA — verbatim enrollment section */}
      <section id="enroll" className="jee-enroll-section py-5 text-center text-white">
        <div className="container">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
            Enroll Today at <span className="highlight-text text-warning">ASQUARE Academy</span> Hinjewadi
          </motion.h3>

          <p className="lead mb-4">
            Boost your IIT-JEE preparation with ASQUARE Academy’s expert coaching in Hinjewadi, Pune. With qualified teachers, structured study plans, and consistent success records, we are your trusted partner for JEE, CET & NEET coaching.
          </p>

          <p><MapPin className="text-warning" /> Serving students from Hinjewadi, Wakad, Baner, Pimpri-Chinchwad, Tathawade, and surrounding Pune areas.</p>

               <a className="btn btn-lg btn-warning fw-bold mt-3 px-5 py-3 rounded-pill shadow-lg">
                   <Link
                     to={'/'}
                     className="nav-item nav-item-list text-white"
       
                   >
                     ⚡ Admissions Open – Enroll now!  
       
       
                     &nbsp;<p className="text-warning">Limited seats available.</p>
                   </Link>
                 </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default IITJEEHinjewadi;
