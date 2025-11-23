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
import sampleimg2 from '../../../Assets/SampleImages/MobBanners/MobBanner8.jpeg';
import sampleimg22 from'../../../Assets/SampleImages/MobBanners/MobBanner9.jpeg';
// import sampleimg2 from "../../../Assets/SampleImages/sampleimg2.jpeg";
import sampleimg1 from "../../../Assets/SampleImages/Banners/Banners (9).jpeg";
import sampleimg11 from "../../../Assets/SampleImages/Banners/Banners (4).jpeg";
import sampleimg3 from "../../../Assets/SampleImages/AsquarePics/AsquarePics (9).jpeg";
import sampleimg4 from "../../../Assets/SampleImages/AsquarePics/AsquarePics (2).jpeg";
import sampleimg6 from "../../../Assets/SampleImages/AsquarePics/AsquarePics (4).jpeg";

import Form from "../../../Components/Form2/Form2.jsx";

const Reviews = React.lazy(() => import("../../../Components/Reviews/Reviews.jsx"));

function IITJEEDapodi() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // kept icons same as other location pages
  const whyChoose = [
    {
      Icon: Users,
      title: "Experienced Teachers",
      desc: "Specialists in IIT-JEE, CET & NEET coaching.",
    },
    {
      Icon: BookOpen,
      title: "Complete PCM Coverage",
      desc: "Physics, Chemistry & Mathematics as per latest JEE guidelines.",
    },
    {
      Icon: Target,
      title: "Focused Mentoring",
      desc: "Small batches for one-on-one attention and doubt-solving.",
    },
    {
      Icon: BarChart,
      title: "Regular Assessments",
      desc: "Weekly practice tests, assignments & mock exams.",
    },
    {
      Icon: Lightbulb,
      title: "Confidence Building",
      desc: "Motivation sessions, counseling & strategy guidance.",
    },
  ];

  const subjects = [
    {
      title: "Physics",
      desc: "Concept clarity with application-based learning",
    },
    {
      title: "Chemistry",
      desc: "Comprehensive coverage of Physical, Organic & Inorganic Chemistry",
    },
    {
      title: "Mathematics",
      desc: "Advanced practice in Algebra, Calculus, Trigonometry, Geometry & Probability",
    },
  ];

  const batches = [
    {
      title:
        "2-Year Foundation Program (10th → 12th Moving Students): Covers XI + XII Boards + JEE prep.",
      desc: "",
    },
    {
      title:
        "1-Year Advanced Course (11th → 12th Moving Students): Intensive XII + JEE program.",
      desc: "",
    },
    {
      title: "Crash Course (2–3 Months): Quick revision with problem-solving & test practice.",
      desc: "",
    },
    {
      title:
        "Dropper/Repeater Batch (XII Pass-outs): One-year dedicated JEE coaching for repeaters.",
      desc: "",
    },
  ];

  const faqs = [
    {
      q: "FAQ 1: Who can join IIT JEE coaching classes in Dapodi?",
      a: "Students of Class XI, XII, and droppers preparing for JEE Main & Advanced can enroll in our IIT JEE coaching classes in Dapodi. The program is designed to strengthen concepts and improve performance through structured learning.",
    },
    {
      q: "FAQ 2: What subjects are covered in the Best IIT JEE Coaching in Dapodi?",
      a: "The Best IIT JEE Coaching in Dapodi offers complete PCM (Physics, Chemistry & Mathematics) training. Each subject is taught with JEE-oriented strategies, problem-solving methods, and conceptual clarity.",
    },
    {
      q: "FAQ 3: Are mock tests conducted at the Top JEE Mains Coaching Classes in Dapodi?",
      a: "Yes, our Top JEE Mains Coaching Classes in Dapodi include weekly tests, chapter-wise quizzes, and full-length JEE mock exams. These help students analyze progress, boost accuracy, and prepare for real exam pressure.",
    },
    {
      q: "FAQ 4: What course options are available for IIT JEE Advanced Preparation in Dapodi?",
      a: "We offer 2-Year, 1-Year, Crash Courses, and Dropper Batches for IIT JEE Advanced Preparation in Dapodi. Each course includes focused mentoring, comprehensive study material, and regular assessments.",
    },
    {
      q: "FAQ 5: How many students are enrolled per batch in IIT JEE Classes in Dapodi?",
      a: "Our IIT JEE Classes in Dapodi maintain small batch sizes to ensure personalized attention. This allows faculty to guide each student effectively and strengthen their understanding.",
    },
    {
      q: "FAQ 6: Do parents receive updates from the Best IIT JEE Classes in Dapodi?",
      a: "Yes, parents are informed through regular PTMs and detailed performance reports at the Best IIT JEE Classes in Dapodi. These updates help maintain transparency and track student progress closely.",
    },
    {
      q: "FAQ 7: Which areas are served by the Top IIT JEE Classes in Dapodi?",
      a: "Our Top JEE Classes in Dapodi serve students from Dapodi, Kasarwadi, Khadki, Bhosari, Pimple Gurav, and nearby PCMC areas. The location is easily accessible for daily coaching.",
    },
    {
      q: "FAQ 8: Why choose the Best IIT JEE Coaching in Dapodi?",
      a: "The Best IIT JEE Coaching in Dapodi provides expert faculty, mock exams, personalized mentoring, and a JEE-focused curriculum. Students receive complete support for both JEE Main and Advanced success.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Best IIT JEE Coaching Classes & Institute in Dapodi Pune | ASQUARE
          Academy
        </title>

        <meta
          name="title"
          content="Best IIT JEE Coaching Classes & Institute in Dapodi Pune | ASQUARE Academy"
        />
        <meta
          name="description"
          content="Top IIT JEE coaching classes in Dapodi for JEE Main & Advanced. ASQUARE Academy offers expert faculty, PCM coaching, mock tests, small batches, and structured guidance for confident exam preparation."
        />
        <meta
          name="keywords"
          content={`IIT JEE coaching classes in Dapodi, Best IIT JEE Coaching in Dapodi, Top JEE Mains Coaching Classes Dapodi, IIT JEE Advanced Preparation Dapodi, JEE Advanced coaching classes in Dapodi, IIT JEE Classes in Dapodi, Best IIT JEE Classes in Dapodi, Top IIT JEE Classes in Dapodi`}
        />

        <script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@graph": [

    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-dapodi-pune#localbusiness",
      "name": "ASQUARE Academy - IIT JEE Coaching Classes Dapodi",
      "description": "Top IIT JEE coaching classes in Dapodi offering JEE Main and Advanced preparation with expert faculty, PCM coaching, mock tests and small batches.",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-dapodi-pune",
      "telephone": "9766118877",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dapodi",
        "addressRegion": "Pune",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune"
      ]
    },

    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-dapodi-pune#webpage",
      "name": "IIT JEE Coaching Classes & Institute in Dapodi Pune",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-dapodi-pune",
      "description": "Best IIT JEE Coaching Classes & Institute in Dapodi Pune with PCM training, mock tests, structured learning and dedicated mentoring."
    },

    {
      "@type": "EducationalOrganization",
      "name": "ASQUARE Academy",
      "url": "https://www.asquareclasses.com/",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune"
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
          "name": "IIT JEE Coaching Pune",
          "item": "https://www.asquareclasses.com/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "IIT JEE Coaching Classes in Dapodi"
        }
      ]
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-dapodi-pune#faq",
      "mainEntity": [

        {
          "@type": "Question",
          "name": "Who can join IIT JEE coaching classes in Dapodi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students of Class XI, XII, and droppers preparing for JEE Main & Advanced can join our IIT JEE coaching classes in Dapodi with structured learning support."
          }
        },

        {
          "@type": "Question",
          "name": "What subjects are covered in the Best IIT JEE Coaching in Dapodi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Best IIT JEE Coaching in Dapodi covers complete PCM (Physics, Chemistry & Mathematics) with concept clarity and JEE-focused problem-solving."
          }
        },

        {
          "@type": "Question",
          "name": "Are mock tests conducted at the Top JEE Mains Coaching Classes in Dapodi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, weekly tests, quizzes, and full-length JEE mock exams are conducted at the Top JEE Mains Coaching Classes in Dapodi."
          }
        },

        {
          "@type": "Question",
          "name": "What course options are available for IIT JEE Advanced Preparation in Dapodi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer 2-Year, 1-Year, Crash Courses and Dropper Batches for IIT JEE Advanced Preparation in Dapodi."
          }
        },

        {
          "@type": "Question",
          "name": "How many students are enrolled per batch in IIT JEE Classes in Dapodi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our IIT JEE Classes in Dapodi maintain small batch sizes for personalized attention and improved performance."
          }
        },

        {
          "@type": "Question",
          "name": "Do parents receive updates from the Best IIT JEE Classes in Dapodi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, parents receive performance reports and PTMs from the Best IIT JEE Classes in Dapodi to track student progress."
          }
        },

        {
          "@type": "Question",
          "name": "Which areas are served by the Top IIT JEE Classes in Dapodi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our Top IIT JEE Classes in Dapodi serve Dapodi, Kasarwadi, Khadki, Bhosari, Pimple Gurav, and nearby PCMC locations."
          }
        },

        {
          "@type": "Question",
          "name": "Why choose the Best IIT JEE Coaching in Dapodi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Best IIT JEE Coaching in Dapodi offers expert faculty, mock exams, personalized mentoring, and a JEE-focused curriculum for strong results."
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

      {/* Slider + Form */}
      <section className="jee-full-slider-section position-relative">
        {isDesktop ? (
          <div
            id="jeeFullCarouselDesktop"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {[sampleimg1, sampleimg11].map((img, i) => (
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
              ))}
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
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="fw-bold display-6 mb-3"
              >
                Crack JEE Main & Advanced with{" "}
                <span className="highlight-text text-warning">
                  ASQUARE Academy Dapodi
                </span>
              </motion.h1>

              <motion.h2>Trusted Coaching for Engineering Aspirants in Dapodi</motion.h2>

              <p className="lead d-none d-md-block">
                Looking for IIT-JEE coaching classes in Dapodi, Pune? At ASQUARE
                Academy, we provide conceptual learning, structured programs, and
                exam-focused preparation to help students succeed. Our Dapodi
                branch is designed for aspirants targeting IITs, NITs, IIITs,
                and India’s best engineering colleges. With personalized
                guidance, regular practice, and dedicated faculty, we ensure
                students are well-prepared for JEE Main & Advanced.
              </p>

              <p className="lead d-block d-md-none">
                Looking for IIT-JEE coaching classes in Dapodi, Pune? At ASQUARE
                Academy, we provide conceptual learning, structured programs, and
                exam-focused preparation to help students succeed. Our Dapodi
                branch is designed for aspirants targeting IITs, NITs, IIITs,
                and India’s best engineering colleges. With personalized
                guidance, regular practice, and dedicated faculty, we ensure
                students are well-prepared for JEE Main & Advanced.
              </p>

              <a className="btn btn-warning btn-lg rounded-pill mt-3 shadow-lg">
                <Link to={"/"} className="nav-item nav-item-list text-warning">
                  🚀 Enroll Now
                </Link>
              </a>
            </div>

            <div className="col-12 col-lg-4 col-md-12 mt-5 mt-md-0 text-center">
              <img
                src={sampleimg3}
                alt="ASQUARE Academy Dapodi"
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
      <section className="jee-why py-5">
        <div className="container">
          <motion.h3
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="fw-bold display-6 mb-3 text-center"
          >
            Why Choose <span className="text-primary">ASQUARE Academy</span> in
            Dapodi?
          </motion.h3>

          <div
            className="row g-4 justify-center"
            style={{ justifyContent: "center" }}
          >
            {whyChoose.map((item, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="jee-feature-card shadow-lg rounded-4 p-4 h-100"
                >
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
              <motion.h4
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="fw-bold display-6 mb-3 text-centerr"
              >
                Our <span className="text-primary">JEE Coaching Programs</span>
              </motion.h4>

              <p className="lead text-secondary">
                The Joint Entrance Examination (JEE) requires thorough subject
                knowledge and practice. At ASQUARE Academy Dapodi, our courses
                focus on strengthening fundamentals, improving accuracy, and
                enhancing time management skills to prepare students for both
                JEE Main & Advanced.
              </p>
            </div>

            <div className="col-lg-4 text-center order-1">
              <motion.img
                whileHover={{ scale: 1.03 }}
                src={sampleimg4}
                alt="JEE Coaching Dapodi"
                className="img-fluid rounded-4 shadow-lg mx-auto d-block"
                style={{ width: "85%" }}
              />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Subjects + Batches */}
      <section className="jee-gradient-section py-5 text-white">
        <div className="container">
          <motion.h4
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="fw-bold display-6 mb-3 text-center"
          >
            Subjects We Teach
            <span className="highlight-text text-warning">&nbsp;&&nbsp;</span>
            Course Options
          </motion.h4>

          <div className="row g-4">
            <div className="col-lg-6">
              <h4 className="highlight-text text-warning fw-bold mb-4 text-centerr">
                Subjects We Teach
              </h4>
              {subjects.map((sub, i) => (
                <div
                  key={i}
                  className="jee-subject-box mb-4 p-3 pb-4 pt-4  rounded-4 bg-white bg-opacity-10 backdrop-blur-md border border-light border-opacity-25"
                >
                  <h5 className="fw-semibold">{sub.title}</h5>
                  <p className="small mb-0">{sub.desc}</p>
                </div>
              ))}
            </div>

            <div className="col-lg-6">
              <h4 className="highlight-text text-warning fw-bold mb-4 text-centerr">
                Course Duration & Batch Options
              </h4>
              {batches.map((b, i) => (
                <div
                  key={i}
                  className="jee-subject-box mb-3 p-3 rounded-4 bg-white bg-opacity-10 backdrop-blur-md border border-light border-opacity-25"
                >
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
              <motion.h3
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="fw-bold display-6 mb-3 text-center"
              >
                Teaching <span className="text-primary">Methodology</span>
              </motion.h3>

              <div className="row g-4 justify-content-center">
                {["Learn", "Practice", "Assess", "Revise"].map((step, i) => (
                  <div key={i} className="col-lg-3 col-6">
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="method-card p-4 bg-white rounded-4 shadow-sm h-100 text-center"
                    >
                      <p className="text-muted small mb-0">
                        {step === "Learn"
                          ? "•\tInteractive daily lectures with assignments"
                          : step === "Practice"
                          ? "•\tOne-to-one doubt-solving support"
                          : step === "Assess"
                          ? "•\tWeekly unit tests & full-length mock exams"
                          : "•\tParent–teacher meetings for progress updates"}
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
          <motion.h3
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="fw-bold display-6 mb-3"
          >
            Key Features of Dapodi Branch
          </motion.h3>

          <div className="row justify-content-center g-4">
            {[
              "•\tLimited batch size for better student interaction",
              "•\tUpdated IIT-JEE study modules, test papers & practice banks",
              "•\tWorkshops on exam techniques, speed-solving & time management",
              "•\tRegular performance reports & parent updates",
              "•\tRecognized as a leading IIT-JEE coaching institute in Dapodi, Pune",
            ].map((text, i) => (
              <motion.div
                key={i}
                className="col-md-5 col-lg-4 col-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="highlight-card shadow-lg rounded-4 p-4 bg-white bg-opacity-10 backdrop-blur-md border border-light border-opacity-25">
                  <div className="icon-circle mx-auto mb-3">
                    <h2>🎓</h2>
                  </div>
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

      {/* Results */}
      <section className="jee-results py-5 text-white">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-8 text-center text-lg-start">
              <motion.h3
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="fw-bold display-6 mb-3"
              >
                Strong <span className="highlight-text text-warning">Results</span>
              </motion.h3>
              <p className="lead text-light">
                ASQUARE Academy has produced IIT-JEE achievers and top
                performers across Pune. The Dapodi branch carries forward this
                success with structured coaching, expert mentoring, and
                results-focused preparation.
              </p>
            </div>

            <div className="col-lg-4 text-center">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={sampleimg6}
                alt="Success Stories Dapodi"
                className="img-fluid rounded-4 shadow-lg mx-auto d-block"
                style={{ width: "80%" }}
              />
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

            <motion.h3
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="fw-bold display-6 mb-3 text-center"
            >
              Frequently Asked Questions <span className="text-primary">(FAQ)</span>
            </motion.h3>
          </div>

          <div className="row justify-content-center">
            <div className="col-12 col-md-6 mb-4 mb-md-0">
              <FAQAccordion
                faqs={faqs.slice(0, Math.ceil(faqs.length / 2))}
                accordionId="dapodiFaqLeft"
              />
            </div>

            <div className="col-12 col-md-6">
              <FAQAccordion
                faqs={faqs.slice(Math.ceil(faqs.length / 2))}
                accordionId="dapodiFaqRight"
              />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Final CTA */}
      <section id="enroll" className="jee-enroll-section py-5 text-center text-white">
        <div className="container">
          <motion.h3
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="fw-bold display-6 mb-3"
          >
            Join ASQUARE Academy
            <span className="highlight-text text-warning">&nbsp;Dapodi Today&nbsp;</span>
          </motion.h3>

          <p className="lead mb-4">
            Prepare for your engineering dream with ASQUARE Academy’s IIT-JEE
            coaching in Dapodi, Pune. With experienced faculty, advanced
            resources, and consistent results, we are your trusted partner for
            JEE, CET & NEET coaching.
          </p>

          <p>
            <MapPin className="text-warning" />
            Serving students from <b className="bld">Dapodi, Kasarwadi, Bhosari, Khadki, Pimple Gurav, and nearby PCMC regions.</b>
          </p>

          <a className="btn btn-lg btn-warning fw-bold mt-3 px-5 py-3 rounded-pill shadow-lg">
            <Link to={"/"} className="nav-item nav-item-list text-white">
              ⚡ Admissions Open – Enroll now!
              <span className="d-block text-warning small">Limited seats available!</span>
            </Link>
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default IITJEEDapodi;
