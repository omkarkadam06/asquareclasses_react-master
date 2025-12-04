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
import sampleimg2 from '../../../Assets/SampleImages/MobBanners/MobBanner7.jpeg';
import sampleimg22 from'../../../Assets/SampleImages/MobBanners/MobBanner2.jpeg';

import sampleimg3 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (9).jpeg';
import sampleimg4 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (2).jpeg';
import sampleimg6 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (4).jpeg';

import Form from "../../../Components/Form2/Form2.jsx";

const Reviews = React.lazy(() => import("../../../Components/Reviews/Reviews.jsx"));

function IITJEESadhuVaswaniChowk() {
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
      title: "Expert Faculty",
      desc: "Highly qualified mentors for Physics, Chemistry & Mathematics with strong JEE track records.",
    },
    {
      Icon: BookOpen,
      title: "Comprehensive Coverage",
      desc: "NCERT fundamentals + advanced problem solving for JEE Mains & Advanced.",
    },
    {
      Icon: Target,
      title: "Small Batch Sizes",
      desc: "Personalized attention for concept clarity and faster doubt resolution.",
    },
    {
      Icon: BarChart,
      title: "Regular Testing",
      desc: "Weekly quizzes, full-length mock tests and performance analytics.",
    },
    {
      Icon: Lightbulb,
      title: "Flexible Learning",
      desc: "Classroom & online options with mentorship for balancing boards + JEE prep.",
    },
    {
      Icon: Lightbulb,
      title: "Mentorship Support",
      desc: "Career guidance, stress management and exam strategy sessions.",
    },
  ];

  const subjects = [
    {
      title: "Physics",
      desc: "Build conceptual clarity and accuracy with rigorous numerical practice.",
    },
    {
      title: "Chemistry",
      desc: "Complete coverage of Physical, Organic & Inorganic topics with problem solving.",
    },
    {
      title: "Mathematics",
      desc: "Extensive practice in Algebra, Calculus, Geometry, Probability & Trigonometry.",
    },
  ];

  const batches = [
    { title: "2-Year Integrated Program (Class 11 → 12)", desc: "Long-term foundation + board & JEE integrated syllabus." },
    { title: "1-Year Target Program (Class 12)", desc: "Intensive Class XII + JEE focused training." },
    { title: "Dropper/Repeater Batch", desc: "Dedicated one-year batch for XII pass-outs aiming for top ranks." },
    { title: "Crash Course (2–3 Months)", desc: "Fast-paced revision + mock tests for last-mile preparation." },
  ];

  const faqs = [
    {
      q: "Q1: Do you provide coaching for both JEE Mains and JEE Advanced?",
      a: "Yes — ASQUARE Academy Sadhu Vaswani Chowk provides structured coaching for both JEE Mains & Advanced with experienced faculty.",
    },
    {
      q: "Q2: Are small batches available?",
      a: "Yes — we maintain small batches to ensure personalised attention and effective doubt-solving.",
    },
    {
      q: "Q3: Do you offer dropper/repeater batches?",
      a: "Yes — dedicated dropper/repeater batches with intensive revision and frequent mocks are available.",
    },
    {
      q: "Q4: What is the teaching approach at ASQUARE?",
      a: "We follow a cycle: Learn → Practice → Assess → Revise, backed by regular tests and mentor feedback.",
    },
    {
      q: "Q5: Can students from nearby areas join this branch?",
      a: "Absolutely — students from Camp, Bund Garden, MG Road, Fatima Nagar, Koregaon Park and nearby areas enroll here.",
    },
    {
      q: "Q6: What subjects are covered?",
      a: "Physics, Chemistry and Mathematics (PCM) with focused practice, concept reinforcement and mock testing.",
    },
    {
      q: "Q7: Do you conduct mock tests and practice sessions?",
      a: "Yes — weekly quizzes, chapter-wise tests and full-length mock exams are part of the program.",
    },
    {
      q: "Q8: Why choose ASQUARE Sadhu Vaswani Chowk?",
      a: "Expert faculty, personalised batches, updated study material and consistent results make ASQUARE a trusted JEE centre in Central Pune.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>IIT JEE Coaching Classes in Sadhu Vaswani Chowk | ASQUARE Academy</title>
        <meta name="title" content="IIT JEE Coaching Classes in Sadhu Vaswani Chowk | ASQUARE Academy" />
        <meta
          name="description"
          content="ASQUARE Academy offers top IIT JEE coaching in Sadhu Vaswani Chowk — small batches, expert faculty, mock tests & full JEE Mains/Advanced preparation."
        />
        <meta
          name="keywords"
          content={`IIT JEE coaching classes in sadhu vaswani chowk,
Best IIT JEE Coaching in sadhu vaswani chowk,
Top JEE Mains Coaching Classes sadhu vaswani chowk,
IIT JEE Advanced Preparation sadhu vaswani chowk,
JEE Advanced coaching classes in sadhu vaswani chowk,
IIT JEE Classes in sadhu vaswani chowk,
Best IIT JEE Classes in sadhu vaswani chowk`}
        />

        <script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-Institute-sadhu-vaswani-chowk-pune#localbusiness",
      "name": "ASQUARE Academy - IIT JEE Coaching Sadhu Vaswani Chowk",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-Institute-sadhu-vaswani-chowk-pune",
      "telephone": "9766118877",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Sadhu Vaswani Chowk",
        "addressRegion": "Pune",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune"
      ],
      "description": "ASQUARE Academy provides the best IIT JEE Coaching Classes in Sadhu Vaswani Chowk with expert faculty, small batches, and full preparation for JEE Mains & Advanced."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-Institute-sadhu-vaswani-chowk-pune#webpage",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-Institute-sadhu-vaswani-chowk-pune",
      "name": "IIT JEE Coaching Classes in Sadhu Vaswani Chowk | ASQUARE Academy",
      "description": "Best IIT JEE Coaching in Sadhu Vaswani Chowk with small batches, expert faculty, and complete JEE Mains & Advanced preparation.",
      "inLanguage": "en"
    },
    {
      "@type": "EducationalOrganization",
      "name": "ASQUARE Academy",
      "url": "https://www.asquareclasses.com/",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "description": "Top IIT JEE Classes in Sadhu Vaswani Chowk offering advanced preparation for JEE Mains & Advanced with expert faculty and personalised mentoring."
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
          "name": "Sadhu Vaswani Chowk",
          "item": "https://www.asquareclasses.com/iit-jee-coaching-classes-Institute-sadhu-vaswani-chowk-pune"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you provide coaching for both JEE Mains and JEE Advanced?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, ASQUARE Academy offers complete IIT JEE coaching classes in Sadhu Vaswani Chowk for both JEE Mains and JEE Advanced with structured teaching and strong fundamentals."
          }
        },
        {
          "@type": "Question",
          "name": "Are small batches available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we maintain small batches to provide personalised attention and focused doubt-solving."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer dropper/repeater batches?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we provide dedicated dropper/repeater programs with intensive practice, revision, and regular mock tests."
          }
        },
        {
          "@type": "Question",
          "name": "What is the teaching approach at ASQUARE?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our approach is concept-based and exam-focused with interactive learning, weekly tests, and continuous evaluation."
          }
        },
        {
          "@type": "Question",
          "name": "Can students from nearby areas join the Sadhu Vaswani Chowk branch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, students from nearby areas can easily join due to convenient access and flexible batches."
          }
        },
        {
          "@type": "Question",
          "name": "What subjects are covered in your IIT JEE program?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Physics, Chemistry, and Mathematics are covered by highly experienced faculty."
          }
        },
        {
          "@type": "Question",
          "name": "Do you conduct regular mock tests?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we conduct mock tests, assessments, and chapter-wise evaluations to improve performance."
          }
        },
        {
          "@type": "Question",
          "name": "Why is ASQUARE considered the best IIT JEE institute in Sadhu Vaswani Chowk?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Expert faculty, personalised mentoring, small batches, and strong results make ASQUARE the top choice."
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
                Crack JEE Mains & Advanced with <span className="highlight-text text-warning">ASQUARE Academy – Sadhu Vaswani Chowk</span>
              </motion.h1>

              <p className="lead d-none d-md-block">
                Preparing for IIT JEE requires clarity, consistency, and expert guidance. At ASQUARE Academy, we provide the most trusted IIT JEE coaching classes in Sadhu Vaswani Chowk, Pune — structured programs, regular assessments and personalised mentorship to help students excel in JEE Mains & Advanced. Students from Camp, Bund Garden, MG Road, Fatima Nagar and Koregaon Park regularly enroll with us.
              </p>

              <p className="lead d-block d-md-none">
                Preparing for IIT JEE requires clarity, consistency, and expert guidance. At ASQUARE Academy, we provide trusted IIT JEE coaching in Sadhu Vaswani Chowk — structured programs, regular assessments and personalised mentorship to help students excel in JEE Mains & Advanced.
              </p>

              <a className="btn btn-warning btn-lg rounded-pill mt-3 shadow-lg">
                <Link to={'/'} className="nav-item nav-item-list text-warning">🚀 Enroll Now</Link>
              </a>
            </div>

            {/* Right Side: Image */}
            <div className="col-12 col-lg-4 col-md-12 mt-5 mt-md-0 text-center">
              <img src={sampleimg3} alt="ASQUARE Academy Sadhu Vaswani Chowk" className="img-fluid mx-auto fade-in imgsiz" style={{ objectFit: "contain", opacity: 0.95, borderRadius: "10px" }} />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Why Choose */}
      <section className="jee-why py-5">
        <div className="container">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">
            Why Choose <span className="text-primary">ASQUARE Academy</span> for IIT JEE in Sadhu Vaswani Chowk?
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
                Programs Offered at <span className="text-primary">ASQUARE – Sadhu Vaswani Chowk</span>
              </motion.h4>

              <p className="lead text-secondary">
                Our JEE programs are structured to build strong fundamentals, sharpen problem-solving skills and develop exam strategy. Pick from long-term integrated courses, one-year intensive tracks, crash revisions or dedicated repeater batches.
              </p>

              {batches.map((b, i) => (
                <div key={i} className="jee-subject-box mb-3 p-3 rounded-4 bg-white bg-opacity-10 backdrop-blur-md border border-light border-opacity-25">
                  <h5 className="fw-semibold">{b.title}</h5>
                  {b.desc && <p className="small mb-0">{b.desc}</p>}
                </div>
              ))}
            </div>

            <div className="col-lg-4 text-center order-1">
              <motion.img whileHover={{ scale: 1.03 }} src={sampleimg4} alt="Sadhu Vaswani Chowk JEE Coaching" className="img-fluid rounded-4 shadow-lg mx-auto d-block" style={{ width: "85%" }} />
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
                  "Learn → ",
                  "Practice → ",
                  "Assess → ",
                  "Revise",
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
            Key Features of <span className="highlight-text text-warning">Sadhu Vaswani Chowk</span>
          </motion.h3>

          <div className="row justify-content-center g-4">
            {[
              "Updated JEE study material (digital + print)",
              "Regular doubt-clearing sessions with faculty",
              "Performance analytics via online test series",
              "Workshops on accuracy, time management & exam strategy",
              "Trusted by aspirants across Central Pune for consistent results",
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
                Results That <span className="highlight-text text-warning">Define Our Success</span>
              </motion.h3>
              <p className="lead text-light">
                ASQUARE Academy students from Sadhu Vaswani Chowk and surrounding areas have consistently achieved high ranks in JEE Mains & Advanced, securing admissions to IITs, NITs and premier engineering institutes — a testament to our focused teaching approach.
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
              <FAQAccordion faqs={faqs.slice(0, Math.ceil(faqs.length / 2))} accordionId="sadhuFaqLeft" />
            </div>
            <div className="col-12 col-md-6">
              <FAQAccordion faqs={faqs.slice(Math.ceil(faqs.length / 2))} accordionId="sadhuFaqRight" />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Final CTA */}
      <section id="enroll" className="jee-enroll-section py-5 text-center text-white">
        <div className="container">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
            Enroll Today at <span className="highlight-text text-warning">ASQUARE Academy – Sadhu Vaswani Chowk</span>
          </motion.h3>

          <p className="lead mb-4">
            If you’re seeking best IIT JEE coaching in Sadhu Vaswani Chowk, ASQUARE Academy is your trusted choice — expert faculty, structured programs and measurable results.
          </p>

          <p><MapPin className="text-warning" /> Convenient for students from <b className="bld">Camp, Bund Garden, MG Road, Fatima Nagar, and Koregaon Park.</b></p>

          <a className="btn btn-lg btn-warning fw-bold mt-3 px-5 py-3 rounded-pill shadow-lg">
            <Link to={'/'} className="nav-item nav-item-list text-white">
              ⚡ Admissions Open – Limited Seats! Enroll Now.
            </Link>
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default IITJEESadhuVaswaniChowk;
