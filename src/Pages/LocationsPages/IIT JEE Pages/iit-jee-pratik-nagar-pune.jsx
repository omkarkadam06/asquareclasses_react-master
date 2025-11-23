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
import sampleimg2 from '../../../Assets/SampleImages/MobBanners/MobBanner9.jpeg';
import sampleimg22 from'../../../Assets/SampleImages/MobBanners/MobBanner1.jpeg';
// import sampleimg2 from "../../../Assets/SampleImages/sampleimg2.jpeg";
import sampleimg1 from "../../../Assets/SampleImages/Banners/Banners (8).jpeg";
import sampleimg11 from "../../../Assets/SampleImages/Banners/Banners (2).jpeg";

import sampleimg3 from "../../../Assets/SampleImages/AsquarePics/AsquarePics (9).jpeg";
import sampleimg4 from "../../../Assets/SampleImages/AsquarePics/AsquarePics (2).jpeg";
import sampleimg6 from "../../../Assets/SampleImages/AsquarePics/AsquarePics (4).jpeg";

import Form from "../../../Components/Form2/Form2.jsx";

const Reviews = React.lazy(() => import("../../../Components/Reviews/Reviews.jsx"));

function IITJEEPratikNagar() {
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
      title: "Expert Mentors ",
      desc: "– Trained faculty with years of experience in IIT-JEE, NEET & CET coaching.",
    },
    {
      Icon: BookOpen,
      title: "Updated Curriculum ",
      desc: "– Comprehensive coverage of Physics, Chemistry & Mathematics based on the latest exam trends.",
    },
    {
      Icon: Target,
      title: "Small Batch Sizes ",
      desc: "– Personalized mentoring and doubt-solving sessions.",
    },
    {
      Icon: BarChart,
      title: "Test-Oriented Approach ",
      desc: "– Weekly assessments and full-length mock exams to sharpen exam strategy.",
    },
    {
      Icon: Lightbulb,
      title: "Career Guidance & Motivation ",
      desc: "– Continuous support to help students stay focused and confident.",
    },
  ];

  const subjects = [
    {
      title: "Physics",
      desc: "Strengthening fundamentals with application-based problem solving",
    },
    {
      title: "Chemistry",
      desc: "Physical, Organic & Inorganic topics with deep conceptual clarity",
    },
    {
      title: "Mathematics",
      desc: "Rigorous practice in Algebra, Geometry, Calculus, Probability & Trigonometry",
    },
  ];

  const batches = [
    {
      title:
        "2-Year Integrated Course (10th → 12th Moving Students): JEE + Board exam preparation for XI & XII.",
      desc: "",
    },
    {
      title:
        "1-Year Intensive Course (11th → 12th Moving Students): JEE-focused learning with Class XII syllabus.",
      desc: "",
    },
    {
      title: "Crash Course (2–3 Months): Fast-track revision with test series and practice sessions.",
      desc: "",
    },
    {
      title:
        "Repeater/Dropper Batch (XII Pass-outs): Dedicated one-year JEE preparation for repeaters.",
      desc: "",
    },
  ];

  const faqs = [
    {
      q: "FAQ 1: Who can join IIT JEE coaching classes in Pratik Nagar?",
      a: "Students of Class XI, XII, and drop-year aspirants can enroll in our IIT JEE coaching classes in Pratik Nagar. The program is designed for those preparing for JEE Main and JEE Advanced with structured learning and expert guidance.",
    },
    {
      q: "FAQ 2: What subjects are covered in the Best IIT JEE Coaching in Pratik Nagar?",
      a: "The Best IIT JEE Coaching in Pratik Nagar offers complete PCM (Physics, Chemistry & Mathematics) training. Each topic is taught with conceptual clarity, problem-solving practice, and JEE-focused techniques for strong exam readiness.",
    },
    {
      q: "FAQ 3: Do you conduct mock exams at the Top JEE Mains Coaching Classes in Pratik Nagar?",
      a: "Yes, our Top JEE Mains Coaching Classes in Pratik Nagar conduct weekly tests, topic-wise quizzes, and full-length JEE mock exams. These assessments help students track progress, improve speed, and build exam confidence.",
    },
    {
      q: "FAQ 4: What courses are available for IIT JEE Advanced Preparation in Pratik Nagar?",
      a: "We offer 2-Year, 1-Year, Crash Courses, and Dropper Batches for IIT JEE Advanced Preparation in Pratik Nagar. Each course is structured to meet different student needs with focused study plans and personalized mentoring.",
    },
    {
      q: "FAQ 5: How many students study per batch in IIT JEE Classes in Pratik Nagar?",
      a: "Our IIT JEE Classes in Pratik Nagar follow a small-batch model to ensure personalized attention. This helps faculty track each student’s learning curve and provide dedicated support for better results.",
    },
    {
      q: "FAQ 6: Do parents receive updates from the Best IIT JEE Classes in Pratik Nagar?",
      a: "Yes, the Best IIT JEE Classes in Pratik Nagar share regular progress reports and conduct PTMs. Parents stay updated on attendance, test performance, strengths, and areas that need improvement.",
    },
    {
      q: "FAQ 7: Which areas do the Top IIT JEE Classes in Pratik Nagar serve?",
      a: "Our Top IIT JEE Classes in Pratik Nagar are conveniently accessible from Pratik Nagar, Tingre Nagar, Dhanori, Yerwada, Lohegaon, and nearby Pune localities, making it easy for students across the area to attend.",
    },
    {
      q: "FAQ 8: Why choose the Best IIT JEE Coaching in Pratik Nagar for your preparation?",
      a: "The Best IIT JEE Coaching in Pratik Nagar offers expert faculty, advanced study material, mock tests, and doubt-solving support. Students receive complete guidance for both JEE Main & Advanced in a focused learning environment.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Best IIT JEE Coaching Classes & Institute in Pratik Nagar | ASQUARE</title>
        <meta
          name="title"
          content="Best IIT JEE Coaching Classes & Institute in Pratik Nagar | ASQUARE"
        />
        <meta
          name="description"
          content="Top IIT JEE Coaching Classes & Institute in Pratik Nagar for JEE Main & Advanced. Expert faculty, mock tests, small batches & structured coaching at ASQUARE Academy Pune."
        />
        <meta
          name="keywords"
          content="IIT JEE coaching classes in Pratik Nagar, Best IIT JEE Coaching in Pratik Nagar, Top JEE Mains Coaching Classes Pratik Nagar, IIT JEE Advanced Preparation Pratik Nagar, JEE Advanced coaching classes in Pratik Nagar, IIT JEE Classes in Pratik Nagar, Best IIT JEE Classes in Pratik Nagar, Top IIT JEE Classes in Pratik Nagar"
        />
        <script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-pratik-nagar-pune#localbusiness",
      "name": "ASQUARE Academy - IIT JEE Coaching Pratik Nagar",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-pratik-nagar-pune",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "telephone": "9766118877",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Pratik Nagar",
        "addressRegion": "Pune",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune"
      ],
      "description": "Best IIT JEE Coaching Classes & Institute in Pratik Nagar Pune offering JEE Main & Advanced preparation with expert faculty, mock tests, and personalized learning."
    },
    {
      "@type": "EducationalOrganization",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-pratik-nagar-pune#eduorg",
      "name": "ASQUARE Academy",
      "url": "https://www.asquareclasses.com/",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "description": "Top coaching institute for IIT JEE, NEET, and competitive exams across Pune.",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "9766118877",
        "contactType": "customer service"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-pratik-nagar-pune#webpage",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-pratik-nagar-pune",
      "name": "IIT JEE Coaching Classes & Institute in Pratik Nagar Pune | ASQUARE Academy",
      "primaryImageOfPage": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "description": "Top IIT JEE Coaching Classes in Pratik Nagar with JEE Main & Advanced preparation, mock tests, expert faculty, and personalized academic support."
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-pratik-nagar-pune#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can join IIT JEE coaching classes in Pratik Nagar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students of Class XI, XII, and drop-year batches can enroll in our IIT JEE coaching classes in Pratik Nagar for JEE Main and JEE Advanced preparation."
          }
        },
        {
          "@type": "Question",
          "name": "What subjects are covered in the Best IIT JEE Coaching in Pratik Nagar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Physics, Chemistry, and Mathematics (PCM) are taught with conceptual clarity, problem-solving strategies, and JEE-focused learning."
          }
        },
        {
          "@type": "Question",
          "name": "Do you conduct mock exams at the Top JEE Mains Coaching Classes in Pratik Nagar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, weekly tests, chapter-wise quizzes, and full-length JEE mock exams are conducted to assess progress and exam readiness."
          }
        },
        {
          "@type": "Question",
          "name": "What courses are available for IIT JEE Advanced Preparation in Pratik Nagar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer 2-Year, 1-Year, Crash Courses, and Dropper Batches designed for comprehensive and focused IIT JEE preparation."
          }
        },
        {
          "@type": "Question",
          "name": "How many students study per batch in IIT JEE Classes in Pratik Nagar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We follow a small-batch learning model to ensure personalized focus, effective doubt-solving, and consistent performance monitoring."
          }
        },
        {
          "@type": "Question",
          "name": "Do parents receive updates from the Best IIT JEE Classes in Pratik Nagar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, parents receive regular progress reports, PTMs, and detailed performance updates to track their child's academic growth."
          }
        },
        {
          "@type": "Question",
          "name": "Which areas do the Top IIT JEE Classes in Pratik Nagar serve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We serve Pratik Nagar, Tingre Nagar, Dhanori, Yerwada, Lohegaon, and surrounding Pune areas for convenient IIT JEE coaching access."
          }
        },
        {
          "@type": "Question",
          "name": "Why choose the Best IIT JEE Coaching in Pratik Nagar for your preparation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Expert faculty, advanced study material, mock tests, structured learning, and personalized mentoring make us the best IIT JEE coaching in Pratik Nagar."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-pratik-nagar-pune#breadcrumbs",
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
          "item": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-pune"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Pratik Nagar",
          "item": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-pratik-nagar-pune"
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
                Master JEE Main & Advanced with{" "}
                <span className="highlight-text text-warning">ASQUARE Academy Pratik Nagar</span>
              </motion.h1>

              <motion.h2>Achieve Your IIT Dream with Expert Coaching in Pratik Nagar</motion.h2>

              <p className="lead d-none d-md-block">
                Looking for top IIT-JEE coaching in Pratik Nagar, Pune? At ASQUARE Academy, we provide strategic learning modules, exam-focused preparation, and concept-driven teaching. With proven results and personalized attention, our Pratik Nagar branch is the ideal choice for aspirants targeting IITs, NITs, IIITs, and leading engineering institutes in India.
              </p>

              <p className="lead d-block d-md-none">
                Looking for top IIT-JEE coaching in Pratik Nagar, Pune? At ASQUARE Academy, we provide strategic learning modules, exam-focused preparation, and concept-driven teaching.
              </p>

              <a className="btn btn-warning btn-lg rounded-pill mt-3 shadow-lg">
                <Link to={'/'} className="nav-item nav-item-list text-warning">🚀 Enroll Now</Link>
              </a>
            </div>

            {/* Right Side: Transparent Image */}
            <div className="col-12 col-lg-4 col-md-12 mt-5 mt-md-0 text-center">
              <img src={sampleimg3} alt="ASQUARE Academy" className="img-fluid mx-auto fade-in imgsiz" style={{ objectFit: "contain", opacity: 0.95, borderRadius: "10px" }} />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Why Choose */}
      <section className="jee-why py-5 ">
        <div className="container">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">
            Why <span className="text-primary">ASQUARE Academy</span> in Pratik Nagar?
          </motion.h3>

          <div className="row g-4 justify-center" style={{ justifyContent: "center" }}>
            {whyChoose.map((item, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <motion.div whileHover={{ scale: 1.05 }} className="jee-feature-card shadow-lg rounded-4 p-4 h-100">
                  <item.Icon size={40} className="mb-3 text-warning" />
                  <h5 className="fw-bold mb-2">{item.title}</h5>
                  {item.desc && <p className="text-muted">{item.desc}</p>}
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
                Our JEE Coaching Programs
              </motion.h4>

              <p className="lead text-secondary">
                The Joint Entrance Examination (JEE) requires both conceptual mastery and smart exam techniques. At ASQUARE Academy Pratik Nagar, our programs are designed to strengthen fundamentals, improve speed & accuracy, and build exam confidence for both JEE Main & Advanced.
              </p>
            </div>
            <div className="col-lg-4 text-center order-1">
              <motion.img whileHover={{ scale: 1.03 }} src={sampleimg4} alt="JEE Coaching" className="img-fluid rounded-4 shadow-lg mx-auto d-block" style={{ width: "85%" }} />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Subjects + Batches Section */}
      <section className="jee-gradient-section py-5 text-white">
        <div className="container">
          <motion.h4 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">
            Subjects Taught
            <span className="highlight-text text-warning"> &nbsp;&&nbsp; </span>
            Course Options
          </motion.h4>
          <br />

          <div className="row g-4">
            <div className="col-lg-6">
              <h4 className="highlight-text text-warning fw-bold mb-4 text-centerr">Subjects Offered</h4>
              {subjects.map((sub, i) => (
                <div key={i} className="jee-subject-box mb-4 p-3 pb-4 pt-4 rounded-4 bg-white bg-opacity-10 backdrop-blur-md border border-light border-opacity-25">
                  <h5 className="fw-semibold">{sub.title}</h5>
                  <p className="small mb-0">{sub.desc}</p>
                </div>
              ))}
            </div>
            <div className="col-lg-6">
              <h4 className="highlight-text text-warning fw-bold mb-4 text-centerr">Batch Options & Duration</h4>
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

      {/* Methodology Section */}
      <section className="jee-method py-5 bg-light">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-12 text-center text-lg-start">
              <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">
                Teaching <span className="text-primary">Methodology</span>
              </motion.h3>

              <div className="row g-4 justify-content-center">
                {[
                  "Daily lectures with focused assignments",
                  "One-on-one doubt resolution",
                  "Weekly practice tests & mock exams",
                  "Parent–teacher meetings for performance updates",
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

      {/* Highlights */}
      <section className="jee-highlights py-5 text-white">
        <div className="container text-center">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
            Highlights of <span className="highlight-text text-warning">Pratik Nagar</span> Branch
          </motion.h3>

          <div className="row justify-content-center g-4">
            {[
              "• Limited student intake for personalized learning",
              "• Expert-designed IIT-JEE study material",
              "• Progress tracking with parent involvement",
              "• Special workshops on time management & exam strategy",
              "• Reliable IIT-JEE coaching in Pratik Nagar, Pune",
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

      {/* Results Section */}
      <section className="jee-results py-5 text-white">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-8 text-center text-lg-start">
              <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
                Results That <span className="highlight-text text-warning">Prove Our Excellence</span>
              </motion.h3>
              <p className="lead text-light">
                ASQUARE Academy has consistently delivered top ranks and IIT admissions. Our Pratik Nagar branch continues this legacy with student-first teaching, structured learning, and result-oriented coaching.
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
            Join ASQUARE Academy <span className="highlight-text text-warning">Pratik Nagar Today</span>
          </motion.h3>

          <p className="lead mb-4">
            Take your next step towards IIT success with ASQUARE Academy in Pratik Nagar, Pune. With expert faculty, well-structured courses, and proven results, we’re your trusted choice for JEE, CET & NEET coaching.
          </p>

          <p><MapPin className="text-warning" /> Serving students from <b className="bld">Pratik Nagar, Tingre Nagar, Dhanori, Yerwada, Lohegaon, and nearby Pune localities.</b></p>

          <a className="btn btn-lg btn-warning fw-bold mt-3 px-5 py-3 rounded-pill shadow-lg">
            <Link to={'/'} className="nav-item nav-item-list text-white">
              ⚡ Admissions open – Limited seats available!
              <p className="text-warning">Call today to reserve your seat.</p>
            </Link>
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default IITJEEPratikNagar;
