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

import sampleimg1 from '../../../Assets/SampleImages/Banners/Banners (9).jpeg';
import sampleimg11 from '../../../Assets/SampleImages/Banners/Banners (3).jpeg';
import sampleimg2 from '../../../Assets/SampleImages/MobBanners/MobBanner6.jpeg';
import sampleimg22 from'../../../Assets/SampleImages/MobBanners/MobBanner1.jpeg';

import sampleimg3 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (9).jpeg';
import sampleimg4 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (2).jpeg';
import sampleimg6 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (4).jpeg';

import Form from "../../../Components/Form2/Form2.jsx";

const Reviews = React.lazy(() => import("../../../Components/Reviews/Reviews.jsx"));

function IITJEEShivajiNagar() {
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
      title: "Expert Faculty Panel",
      desc: "Professionals with experience in IIT-JEE, CET & NEET coaching providing concept-first teaching.",
    },
    {
      Icon: BookOpen,
      title: "Full PCM Syllabus Coverage ",
      desc: "Physics, Chemistry & Mathematics as per latest JEE exam guidelines.",
    },
    {
      Icon: Target,
      title: "Small Batches",
      desc: "Ensuring doubt-solving and focused attention.",
    },
    {
      Icon: BarChart,
      title: "Regular Testing Approac",
      desc: "Weekly practice assignments, unit tests & full mock exams.",
    },
    {
      Icon: Lightbulb,
      title: "Motivation & Guidance",
      desc: "Time management sessions, career counseling & student mentoring.",
    },
  ];

  const subjectsLeft = [ // Left column will be "Subjects We Teach" (Option B mapping)
    { title: "Physics", desc: "Strong foundation with real-life applications" },
    { title: "Chemistry", desc: "In-depth study of Physical, Organic & Inorganic Chemistry" },
    { title: "Mathematics", desc: "Practice-heavy sessions in Algebra, Geometry, Trigonometry, Calculus & Probability" },
  ];

  const batches = [
    { title: "2-Year Foundation (10th → 12th)", desc: "Integrated Boards + JEE coaching" },
    { title: "1-Year Intensive (11th → 12th)", desc: "Fast-paced JEE + XII prep" },
    { title: "Crash Course (2–3 Months)", desc: "Quick revision & exam readiness" },
    { title: "Dropper / Repeater Batch", desc: "Focused 1-year JEE program for XII pass-outs" },
  ];

  const faqs = [
    {
      q: "Q1: Who can join ASQUARE Academy Shivaji Nagar?",
      a: "Class XI, Class XII students and XII pass-outs targeting JEE Main & Advanced can enroll.",
    },
    {
      q: "Q2: What subjects are taught?",
      a: "Physics, Chemistry & Mathematics (PCM) with chapter-wise practice and mock tests.",
    },
    {
      q: "Q3: Are mock exams included?",
      a: "Yes — weekly tests and full-length JEE mock exams with performance analysis.",
    },
    {
      q: "Q4: What courses are available?",
      a: "2-Year Foundation, 1-Year Fast-Track, Crash Courses & Dropper/Repeater batches.",
    },
    {
      q: "Q5: How many students per batch?",
      a: "We maintain small batch sizes to ensure personalised guidance and quick doubt resolution.",
    },
    {
      q: "Q6: Do parents receive updates?",
      a: "Yes — regular PTMs and detailed progress reports keep parents informed.",
    },
    {
      q: "Q7: Which areas does the Shivaji Nagar branch serve?",
      a: "Convenient for students from Shivaji Nagar, FC Road, JM Road, Deccan and nearby Pune localities.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>IIT JEE Coaching Classes in Shivaji Nagar Pune | ASQUARE Academy</title>
        <meta name="title" content="IIT JEE Coaching Classes in Shivaji Nagar Pune | ASQUARE Academy" />
        <meta
          name="description"
          content="Get top IIT JEE coaching in Shivaji Nagar Pune with expert faculty, small batches, mock tests & PCM-focused training. Join ASQUARE Academy for JEE Main & Advanced success."
        />
        <meta
          name="keywords"
          content={`IIT JEE coaching classes in Shivaji Nagar Pune,
Best IIT JEE Coaching in  Shivaji Nagar Pune,
Top JEE Mains Coaching Classes Shivaji Nagar Pune,
IIT JEE Advanced Preparation Shivaji Nagar Pune,
JEE Advanced coaching classes in Shivaji Nagar Pune,
IIT JEE Classes in Shivaji Nagar Pune,
Best IIT JEE Classes in Shivaji Nagar Pune,
Top IIT JEE Classes in Shivaji Nagar Pune,
IIT JEE Institute coaching in Shivaji Nagar Pune,
IIT JEE Institute classes in Shivaji Nagar Pune,
`}
        />
        <script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-shivaji-nagar-pune#localbusiness",
      "name": "ASQUARE Academy - Shivaji Nagar",
      "description": "Top IIT JEE Coaching Classes in Shivaji Nagar Pune offering JEE Main & Advanced preparation with expert faculty, small batches, mock tests and PCM training.",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-shivaji-nagar-pune",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "telephone": "9766118877",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Shivaji Nagar",
        "addressRegion": "Maharashtra",
        "addressCountry": "IN"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-shivaji-nagar-pune#webpage",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-shivaji-nagar-pune",
      "name": "IIT JEE Coaching Classes in Shivaji Nagar Pune",
      "description": "Best IIT JEE Coaching in Shivaji Nagar Pune with small batches, PCM training, mock tests and expert faculty.",
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png"
      }
    },
    {
      "@type": "EducationalOrganization",
      "@id": "https://www.asquareclasses.com/#edu",
      "name": "ASQUARE Academy",
      "url": "https://www.asquareclasses.com",
      "description": "Leading IIT JEE and NEET coaching institute in Pune offering classroom programs, mock tests, and expert guidance."
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-shivaji-nagar-pune#breadcrumbs",
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
          "name": "Shivaji Nagar Pune"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-shivaji-nagar-pune#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can join ASQUARE Academy Shivaji Nagar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Class XI, XII students and XII pass-outs targeting JEE Main & Advanced can join."
          }
        },
        {
          "@type": "Question",
          "name": "What subjects are taught?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Physics, Chemistry & Mathematics (PCM) are taught."
          }
        },
        {
          "@type": "Question",
          "name": "Are mock exams included?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, weekly practice tests and full-length JEE mock exams are included."
          }
        },
        {
          "@type": "Question",
          "name": "What courses are available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "2-Year, 1-Year, Crash Courses & Dropper Batches are available."
          }
        },
        {
          "@type": "Question",
          "name": "How many students per batch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Small batch sizes are maintained for personalized guidance."
          }
        },
        {
          "@type": "Question",
          "name": "Do parents receive performance updates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, parents receive updates through PTMs and detailed reports."
          }
        },
        {
          "@type": "Question",
          "name": "Which areas does the Shivaji Nagar branch serve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It serves students from Shivaji Nagar, FC Road, JM Road, Deccan and nearby localities."
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

      {/* Slider with overlaid form */}
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
                Crack JEE Main & Advanced with <span className="highlight-text text-warning">ASQUARE Academy Shivaji Nagar</span>
              </motion.h1>

              <motion.h2>Leading Coaching Center for Engineering Aspirants in Shivaji Nagar</motion.h2>

              <p className="lead d-none d-md-block">
                Looking for IIT-JEE coaching classes in Shivaji Nagar, Pune? At ASQUARE Academy, we deliver concept-focused teaching, structured courses, and personalized guidance to prepare students for JEE Main & Advanced. Our Shivaji Nagar branch helps aspirants develop clarity of concepts, exam-oriented strategies, and problem-solving accuracy to achieve admissions into IITs, NITs, IIITs, and India’s premier engineering institutes.
              </p>

              <p className="lead d-block d-md-none">
                Looking for IIT-JEE coaching classes in Shivaji Nagar, Pune? At ASQUARE Academy, we deliver concept-focused teaching, structured courses, and personalized guidance to prepare students for JEE Main & Advanced.
              </p>

              <a className="btn btn-warning btn-lg rounded-pill mt-3 shadow-lg">
                <Link to={'/'} className="nav-item nav-item-list text-warning">🚀 Enroll Now</Link>
              </a>
            </div>

            <div className="col-12 col-lg-4 col-md-12 mt-5 mt-md-0 text-center">
              <img src={sampleimg3} alt="ASQUARE Academy Shivaji Nagar" className="img-fluid mx-auto fade-in imgsiz" style={{ objectFit: "contain", opacity: 0.95, borderRadius: "10px" }} />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Why Choose */}
      <section className="jee-why py-5">
        <div className="container">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">
            Why <span className="text-primary">ASQUARE Academy Shivaji Nagar</span>?
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
                Programs Designed for JEE Success
              </motion.h4>

              <p className="lead text-secondary">
                The Joint Entrance Examination (JEE) requires dedication, clarity, and consistent practice. At ASQUARE Academy Shivaji Nagar, our programs aim to strengthen basics, enhance analytical skills, and boost exam readiness for both JEE Main & Advanced.
              </p>

           
            </div>

            <div className="col-lg-4 text-center order-1">
              <motion.img whileHover={{ scale: 1.03 }} src={sampleimg4} alt="Shivaji Nagar JEE Coaching" className="img-fluid rounded-4 shadow-lg mx-auto d-block" style={{ width: "85%" }} />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Subjects + Batches Section */}
      <section className="jee-gradient-section py-5 text-white">
        <div className="container">
          <motion.h4 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">
            Subjects We Teach
            <span className="highlight-text text-warning">&nbsp;&&nbsp;</span>
            Batches
          </motion.h4>

          <br />

          <div className="row g-4">
            {/* LEFT: Subjects We Teach (Option B mapping) */}
            <div className="col-lg-6">
              <h4 className="highlight-text text-warning fw-bold mb-4 text-centerr">Subjects We Teach</h4>
              {subjectsLeft.map((sub, i) => (
                <div key={i} className="jee-subject-box mb-4 p-3 pb-4 pt-4 rounded-4 bg-white bg-opacity-10 backdrop-blur-md border border-light border-opacity-25">
                  <h5 className="fw-semibold">{sub.title}</h5>
                  <p className="small mb-0">{sub.desc}</p>
                </div>
              ))}
            </div>

            {/* RIGHT: Subjects We Cover (Option B mapping) */}
            <div className="col-lg-6">
              <h4 className="highlight-text text-warning fw-bold mb-4 text-centerr">Course Options & Batches</h4>

              {/* Use the batches area to list course options & batches (verbatim from docx) */}
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

      {/* Subjects + Methodology */}
      <section className="jee-method py-5 bg-light">
        <div className="container">
          <div className="row g-4">
  

            <div className="col-lg-12">
              <motion.h4 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-centerr">
                Teaching Approach at Shivaji Nagar
              </motion.h4>

              <div className="row g-4 justify-content-center">
                {[
                  "Daily interactive lectures with structured assignments",
                  "One-to-one doubt-solving support",
                  "Weekly unit tests & full-length mock exams",
                  "Parent–teacher meetings with detailed progress tracking",
                ].map((text, i) => (
                  <div key={i} className="col-lg-6 col-12">
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
            Key Features of <span className="highlight-text text-warning">ASQUARE Academy Shivaji Nagar</span>
          </motion.h3>

          <div className="row justify-content-center g-4">
            {[
              "Limited batch size for focused learning",
              "Updated IIT-JEE notes, study modules & test papers",
              "Workshops on exam hacks, problem-solving skills & time management",
              "Regular performance updates shared with parents",
              "Recognized as a top IIT-JEE coaching institute in Shivaji Nagar, Pune",
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
                Proven <span className="highlight-text text-warning">Track Record</span>
              </motion.h3>
              <p className="lead text-light">
                ASQUARE Academy has successfully produced JEE Main & Advanced achievers. The Shivaji Nagar branch continues this success with experienced mentors, structured preparation, and results-oriented coaching.
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
              <FAQAccordion faqs={faqs.slice(0, Math.ceil(faqs.length / 2))} accordionId="shivajiFaqLeft" />
            </div>
            <div className="col-12 col-md-6">
              <FAQAccordion faqs={faqs.slice(Math.ceil(faqs.length / 2))} accordionId="shivajiFaqRight" />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Final CTA */}
      <section id="enroll" className="jee-enroll-section py-5 text-center text-white">
        <div className="container">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
            Enroll Now at <span className="highlight-text text-warning">ASQUARE Academy Shivaji Nagar</span>
          </motion.h3>

          <p className="lead mb-4">
           Boost your engineering preparation with ASQUARE Academy’s IIT-JEE coaching in Shivaji Nagar, Pune. With expert faculty, proven methodology, and updated resources, we are your reliable choice for JEE, CET & NEET coaching.
          </p>

          <p><MapPin className="text-warning" /> Serving students from <b className="bld">Shivaji Nagar, FC Road, JM Road, Deccan, and surrounding Pune areas.</b></p>

          <a className="btn btn-lg btn-warning fw-bold mt-3 px-5 py-3 rounded-pill shadow-lg">
            <Link to={'/'} className="nav-item nav-item-list text-white">
              ⚡ Admissions Open – Limited seats available! Contact us today to enroll.
            </Link>
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default IITJEEShivajiNagar;
