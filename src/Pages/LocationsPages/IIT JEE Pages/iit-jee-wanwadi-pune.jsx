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
// import sampleimg2 from '../../../Assets/SampleImages/sampleimg2.jpeg';
import sampleimg2 from '../../../Assets/SampleImages/MobBanners/MobBanner1.jpeg';
import sampleimg22 from'../../../Assets/SampleImages/MobBanners/MobBanner2.jpeg';
import sampleimg1 from '../../../Assets/SampleImages/Banners/Banners (2).jpeg';
import sampleimg11 from '../../../Assets/SampleImages/Banners/Banners (3).jpeg';
import sampleimg3 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (17).jpeg';
import sampleimg4 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (2).jpeg';
import sampleimg5 from '../../../Assets/SampleImages/sampleimg5.jpeg';
import sampleimg6 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (8).jpeg';
import sampleimg7 from '../../../Assets/SampleImages/sampleimg7.jpeg';
import Form from '../../../Components/Form2/Form2.jsx';

const Reviews = React.lazy(() => import("../../../Components/Reviews/Reviews.jsx"));

function IITJEEWanwadi() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Updated content arrays for Wanwadi
  const whyChoose = [
    { Icon: Users, title: "Highly Qualified Teachers", desc: "Experts in IIT-JEE, CET & NEET coaching." },
    { Icon: BookOpen, title: "Comprehensive PCM Coverage", desc: "Physics, Chemistry & Mathematics aligned with latest JEE syllabus." },
    { Icon: Target, title: "Student-Centric Mentoring", desc: "Small batch size ensures personalized learning." },
    { Icon: BarChart, title: "Performance Tracking", desc: "Weekly assignments, mock tests & progress reviews." },
    { Icon: Lightbulb, title: "Motivation & Career Guidance", desc: "Regular counseling sessions and study planning tips." },
  ];

  const subjects = [
    { title: "Physics", desc: "In-depth understanding with application-based problem solving" },
    { title: "Chemistry", desc: "Strong foundation in Physical, Organic & Inorganic Chemistry" },
    { title: "Mathematics", desc: "Intensive practice in Algebra, Geometry, Calculus, Probability & Trigonometry" },
  ];

  const batches = [
    { title: "2-Year Foundation Program (10th → 12th Moving Students)", desc: "Board + JEE integrated coaching." },
    { title: "1-Year Advanced Program (11th → 12th Moving Students)", desc: "XII + JEE intensive preparation." },
    { title: "Crash Course (2–3 Months)", desc: "Quick revision & problem-solving drills." },
    { title: "Dropper/Repeater Batch (XII Pass-outs)", desc: "One-year JEE-focused program for repeaters." },
  ];

  const faqs = [
    { q: "Q1: Who can join ASQUARE Academy Wanwadi?", a: "Students of Class XI, XII, and XII pass-outs who aim to crack JEE Main & Advanced can join our focused IIT JEE coaching program in Wanwadi Pune." },
    { q: "Q2: Which subjects are taught at ASQUARE Academy?", a: "We cover Physics, Chemistry, and Mathematics (PCM) comprehensively, aligned with the latest JEE syllabus and exam trends." },
    { q: "Q3: Does ASQUARE Academy provide mock exams?", a: "Yes, regular weekly tests and full-length mock exams are conducted to evaluate progress and strengthen exam strategies." },
    { q: "Q4: What types of courses are available?", a: "We offer 2-Year, 1-Year, Crash, and Dropper/Repeater batches, catering to different preparation stages and timelines." },
    { q: "Q5: How big are the batches at the Wanwadi branch?", a: "Our batches are kept small to ensure personalized mentoring, individual doubt-solving, and focused guidance for every student." },
    { q: "Q6: How do parents stay updated on student performance?", a: "Parents receive detailed progress reports and are invited to regular Parent-Teacher Meetings (PTMs) for performance tracking." },
    { q: "Q7: Which areas does the Wanwadi branch serve?", a: "The branch is easily accessible from Wanwadi, NIBM Road, Undri, Kondhwa, Camp, and nearby Pune localities, making it ideal for students across the region." },
    { q: "Q8: Why choose ASQUARE Academy for IIT JEE in Wanwadi Pune?", a: "ASQUARE Academy is known for expert faculty, small batch sizes, mock exams, and structured JEE Advanced preparation to help students achieve top ranks." },
  ];

  return (
    <>
      <Helmet>
        <title>Best IIT JEE Coaching Classes in Wanwadi Pune | ASQUARE Academy</title>
        <meta name="title" content="Best IIT JEE Coaching Classes in Wanwadi Pune | ASQUARE Academy" />
        <meta name="description" content="Join ASQUARE Academy for top IIT JEE coaching classes in Wanwadi Pune. Small batches, expert faculty & regular mock tests for JEE Main & Advanced preparation." />
        <meta name="keywords" content="IIT JEE coaching classes in wanwadi pune, Best IIT JEE Coaching in wanwadi pune, Top JEE Mains Coaching Classes wanwadi pune, IIT JEE Advanced Preparation wanwadi pune, JEE Advanced coaching classes in wanwadi pune, IIT JEE Classes in wanwadi pune, Best IIT JEE Classes in wanwadi pune, Top IIT JEE Classes in wanwadi pune" />

        <script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-wanwadi-pune#organization",
      "name": "ASQUARE Academy",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-wanwadi-pune",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9766118877",
        "contactType": "Customer Service",
        "areaServed": "IN"
      },
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune/"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Wanwadi",
        "addressRegion": "Pune",
        "addressCountry": "IN"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-wanwadi-pune#webpage",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-wanwadi-pune",
      "name": "Best IIT JEE Coaching Classes in Wanwadi Pune | ASQUARE Academy",
      "description": "ASQUARE Academy offers the best IIT JEE coaching in Wanwadi Pune with expert mentors, small batches, and regular mock exams for JEE Main & Advanced preparation."
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
          "name": "IIT JEE Coaching Pune",
          "item": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-pune-maharashtra/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Wanwadi Pune",
          "item": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-wanwadi-pune"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can join ASQUARE Academy Wanwadi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students of Class XI, XII, and pass-outs targeting JEE Main & Advanced can join our focused IIT JEE coaching program in Wanwadi Pune."
          }
        },
        {
          "@type": "Question",
          "name": "Which subjects are taught at ASQUARE Academy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Physics, Chemistry, and Mathematics (PCM) are taught thoroughly as per the latest JEE syllabus and exam trends."
          }
        },
        {
          "@type": "Question",
          "name": "Does ASQUARE Academy provide mock exams?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we conduct weekly tests and full-length mock exams to assess progress and enhance exam readiness."
          }
        },
        {
          "@type": "Question",
          "name": "What types of courses are available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer 2-Year, 1-Year, Crash, and Dropper batches designed for different JEE preparation stages."
          }
        },
        {
          "@type": "Question",
          "name": "How big are the batches at the Wanwadi branch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Batch sizes are small to ensure personalized mentoring, individual doubt-solving, and focused attention."
          }
        },
        {
          "@type": "Question",
          "name": "How do parents stay updated on student performance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Parents receive detailed progress reports and are invited to regular Parent-Teacher Meetings (PTMs)."
          }
        },
        {
          "@type": "Question",
          "name": "Which areas does the Wanwadi branch serve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students from Wanwadi, NIBM Road, Undri, Kondhwa, Camp, and nearby Pune localities attend our IIT JEE coaching."
          }
        },
        {
          "@type": "Question",
          "name": "Why choose ASQUARE Academy for IIT JEE in Wanwadi Pune?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "With expert faculty, structured mock exams, and personalized mentoring, ASQUARE Academy ranks among the top IIT JEE classes in Wanwadi Pune."
          }
        }
      ]
    },
    {
      "@type": "LocalBusiness",
      "name": "ASQUARE Academy - IIT JEE Coaching Wanwadi Pune",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "telephone": "+91-9766118877",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-wanwadi-pune",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Wanwadi",
        "addressRegion": "Pune",
        "addressCountry": "IN"
      }
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
          <div
            id="jeeFullCarouselDesktop"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {[sampleimg1, sampleimg11].map(
                (img, i) => (
                  <div
                    key={i}
                    className={`carousel-item ${i === 0 ? "active" : ""}`}
                  >
                    <img
                      src={img}
                      className="d-block w-100 carousel-image"
                      alt={`Slide ${i + 1}`}
                    />
                    <div className="carousel-overlay" />
                  </div>
                )
              )}
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#jeeFullCarouselDesktop"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" />
            </button>

            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#jeeFullCarouselDesktop"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" />
            </button>
          </div>

        ) : (
          <div
            id="jeeFullCarouselMobile"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {[sampleimg2, sampleimg2, sampleimg2, sampleimg2, sampleimg2].map(
                (img, i) => (
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
                )
              )}
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#jeeFullCarouselMobile"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" />
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#jeeFullCarouselMobile"
              data-bs-slide="next"
            >
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
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="fw-bold display-6 mb-3"
              >
                Master JEE Main & Advanced with <span className="highlight-text text-warning">ASQUARE Academy Wanwadi</span>
              </motion.h1>

              <motion.h2>Your Trusted Coaching Partner in Wanwadi for Engineering Success</motion.h2>

              {/* Full text for desktop */}
              <p className="lead d-none d-md-block">
                Looking for IIT-JEE coaching classes in Wanwadi, Pune? At <b className="bld">ASQUARE Academy,</b> we provide concept-driven teaching, structured programs, and personalized mentorship to help students prepare effectively for JEE Main & Advanced. Our Wanwadi branch focuses on building strong fundamentals, sharpening problem-solving skills, and boosting exam confidence for students aspiring to join IITs, NITs, IIITs, and India’s top engineering institutes.
              </p>

              {/* Short text for mobile */}
              <p className="lead d-block d-md-none">
                Looking for IIT-JEE coaching classes in Wanwadi, Pune? At <b className="bld">ASQUARE Academy,</b> we provide concept-driven teaching, structured programs, and personalized mentorship to help students prepare effectively for JEE Main & Advanced. Our Wanwadi branch focuses on building strong fundamentals, sharpening problem-solving skills, and boosting exam confidence for students aspiring to join IITs, NITs, IIITs, and India’s top engineering institutes.
              </p>

              <a className="btn btn-warning btn-lg rounded-pill mt-3 shadow-lg">
                <Link to={'/'} className="nav-item nav-item-list text-warning">
                  🚀 Enroll Now
                </Link>
              </a>
            </div>

            {/* Right Side: Transparent Image */}
            <div className="col-12 col-lg-4 col-md-12 mt-5 mt-md-0 text-center">
              <img
                src={sampleimg3}
                alt="ASQUARE Academy"
                className="img-fluid mx-auto fade-in imgsiz"
                style={{
                  objectFit: "contain",
                  opacity: 0.95,
                  borderRadius: "10px",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Why Choose */}
      <section className="jee-why py-5 ">
        <div className="container">
          <motion.h3
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="fw-bold display-6 mb-3 text-center"
          >
            Why Students Choose <span className="text-primary">ASQUARE Academy Wanwadi</span>
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
              <motion.h4
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="fw-bold display-6 mb-3 text-centerr"
              >
                Courses Tailored for <span className="text-primary">IIT-JEE Success</span>
              </motion.h4>

              <p className="lead text-secondary">
                The Joint Entrance Examination (JEE) requires concept clarity, consistency, and intensive practice. At ASQUARE Academy Wanwadi, our courses are designed to strengthen subject knowledge, improve accuracy, and enhance exam performance for both JEE Main & Advanced.
              </p>
            </div>
            <div className="col-lg-4 text-center  order-1">
              <motion.img
                whileHover={{ scale: 1.03 }}
                src={sampleimg4}
                alt="JEE Coaching"
                className="img-fluid rounded-4 shadow-lg mx-auto d-block"
                style={{ width: "85%" }}
              />
            </div>
          </div>
        </div>
      </section>
      <hr />

      {/* Subjects + Batches Section */}
      <section className="jee-gradient-section py-5 text-white">
        <div className="container">
          <motion.h4
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="fw-bold display-6 mb-3 text-center"
          >
            Subject-Wise Training
            <span className="highlight-text text-warning">&nbsp;&&nbsp;</span>
            Batch Options
          </motion.h4>
          <br />

          <div className="row g-4">
            <div className="col-lg-6">
              <h4 className="highlight-text text-warning fw-bold mb-4 text-centerr">Subject-Wise Training</h4>
              {subjects.map((sub, i) => (
                <div key={i} className="jee-subject-box mb-4 p-3 pb-4 pt-4  rounded-4 bg-white bg-opacity-10 backdrop-blur-md border border-light border-opacity-25">
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
              <motion.h3
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="fw-bold display-6 mb-3 text-center"
              >
                Teaching <span className="text-primary">Methodology</span>
              </motion.h3>

              <div className="row g-4 justify-content-center">
                {[
                  "Daily interactive classes with topic-wise assignments",
                  "Individualized doubt-solving sessions",
                  "Weekly chapter-wise tests & mock exams",
                  "Parent–teacher meetings for detailed performance reviews"
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

      {/* New Highlights Section */}
      <section className="jee-highlights py-5 text-white">
        <div className="container text-center">
          <motion.h3
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="fw-bold display-6 mb-3"
          >
            Key Benefits of Joining  
            <span className="highlight-text text-warning">&nbsp;ASQUARE Wanwadi&nbsp;</span>
          </motion.h3>

          <div className="row justify-content-center g-4">
            {[
              "Limited batch strength for personalized guidance",
              "Updated IIT-JEE study material, practice papers & test series",
              "Workshops on exam strategies, time management & problem-solving hacks",
              "Regular performance updates to parents",
              "Recognized as a reliable IIT-JEE coaching institute in Wanwadi, Pune"
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
                Strong Legacy of <span className="highlight-text text-warning">&nbsp;Results&nbsp;</span>
              </motion.h3>
              <p className="lead text-light">
                ASQUARE Academy has guided many JEE Main & Advanced toppers to success. The Wanwadi branch carries forward this legacy by providing student-focused learning, dedicated faculty, and consistent exam success.
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
              Frequently Asked Questions  <span className="text-primary">(FAQ)</span>
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
            Enroll Now at <span className="highlight-text text-warning">&nbsp;ASQUARE Academy Wanwadi&nbsp;</span>
          </motion.h3>
          <p className="lead mb-4">
            Prepare for your engineering dream with ASQUARE Academy’s IIT-JEE coaching in Wanwadi, Pune. With experienced faculty, structured study plans, and proven success, we are your reliable choice for JEE, CET & NEET coaching.
          </p>
          <p><MapPin className="text-warning" />Serving students from <b className="bld">Wanwadi, NIBM, Kondhwa, Undri, Camp, and surrounding Pune areas.</b></p>
          <a className="btn btn-lg btn-warning fw-bold mt-3 px-5 py-3 rounded-pill shadow-lg">
            <Link to={'/'} className="nav-item nav-item-list text-white">
              ⚡ Admissions Open – Limited seats available! Contact us today to reserve your seat.
            </Link>
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default IITJEEWanwadi;
