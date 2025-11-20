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

import sampleimg2 from "../../../Assets/SampleImages/sampleimg2.jpeg";
import sampleimg1 from "../../../Assets/SampleImages/Banners/Banners (3).jpeg";
import sampleimg11 from "../../../Assets/SampleImages/Banners/Banners (6).jpeg";

import sampleimg3 from "../../../Assets/SampleImages/AsquarePics/AsquarePics (9).jpeg";
import sampleimg4 from "../../../Assets/SampleImages/AsquarePics/AsquarePics (2).jpeg";
import sampleimg6 from "../../../Assets/SampleImages/AsquarePics/AsquarePics (4).jpeg";

import Form from "../../../Components/Form2/Form2.jsx";

const Reviews = React.lazy(() => import("../../../Components/Reviews/Reviews.jsx"));

function IITJEEPimpleSaudagar() {
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
      title: "Qualified Faculty Experts",
      desc: "Specialists in IIT-JEE, CET & NEET coaching.",
    },
    {
      Icon: BookOpen,
      title: "Complete PCM Syllabus",
      desc: "Physics, Chemistry & Mathematics covered as per latest JEE exam guidelines.",
    },
    {
      Icon: Target,
      title: "Small Batch Learning",
      desc: "More attention, better doubt-solving & focused guidance.",
    },
    {
      Icon: BarChart,
      title: "Rigorous Testing Approach",
      desc: "Weekly assignments, chapter tests & full-length mock exams.",
    },
    {
      Icon: Lightbulb,
      title: "Career & Motivation Support",
      desc: "Counseling, time management & study planning sessions.",
    },
  ];

  const subjects = [
    {
      title: "Physics",
      desc: "Strong fundamentals with problem-solving techniques",
    },
    {
      title: "Chemistry",
      desc: "Thorough coverage of Physical, Organic & Inorganic Chemistry",
    },
    {
      title: "Mathematics",
      desc: "Advanced practice in Algebra, Geometry, Calculus, Probability & Trigonometry",
    },
  ];

  const batches = [
    {
      title:
        "2-Year Foundation Program (10th → 12th Moving Students): XI + XII Boards + JEE integrated prep.",
      desc: "",
    },
    {
      title:
        "1-Year Intensive Program (11th → 12th Moving Students): XII Boards + JEE focused coaching.",
      desc: "",
    },
    {
      title: "Crash Course (2–3 Months): Quick revision with mock exams.",
      desc: "",
    },
    {
      title:
        "Repeater/Dropper Batch (XII Pass-outs): One-year advanced JEE coaching for repeaters.",
      desc: "",
    },
  ];

  const faqs = [
    {
      q: "FAQ 1: Who can join IIT JEE coaching classes in Pimple Saudagar?",
      a: "Students from Class XI, XII, and drop-year batches can join our IIT JEE coaching classes in Pimple Saudagar. The courses are designed for JEE Main and JEE Advanced aspirants aiming for top scores. We guide students across all academic levels with structured learning.",
    },
    {
      q: "FAQ 2: What subjects are covered in the Best IIT JEE Coaching in Pimple Saudagar?",
      a: "Our Best IIT JEE Coaching in Pimple Saudagar covers complete Physics, Chemistry, and Mathematics (PCM). The syllabus follows JEE Main & Advanced patterns, ensuring conceptual clarity with strong problem-solving abilities.",
    },
    {
      q: "FAQ 3: Are mock tests included in the Top JEE Mains Coaching Classes Pimple Saudagar?",
      a: "Yes, we conduct weekly tests, chapter-wise assessments, and full-length mock exams at our Top JEE Mains Coaching Classes in Pimple Saudagar. These tests help students track progress, strengthen accuracy, and improve speed for real exams.",
    },
    {
      q: "FAQ 4: What course options are available for IIT JEE Advanced Preparation in Pimple Saudagar?",
      a: "We offer 2-Year, 1-Year, Crash Courses, and Dropper Batches for IIT JEE Advanced Preparation in Pimple Saudagar. Each program is crafted to meet different learning needs with focused mentoring and regular evaluations.",
    },
    {
      q: "FAQ 5: How many students are enrolled per batch in IIT JEE Classes in Pimple Saudagar?",
      a: "Our IIT JEE Classes in Pimple Saudagar maintain small batch sizes to ensure personalized attention. Teachers closely track each student’s performance, helping them clarify doubts and improve steadily.",
    },
    {
      q: "FAQ 6: Do parents receive performance updates from the Best IIT JEE Classes in Pimple Saudagar?",
      a: "Yes, parents receive regular updates at our Best IIT JEE Classes in Pimple Saudagar through PTMs, detailed performance reports, and progress analysis. This ensures transparent communication and consistent academic monitoring.",
    },
    {
      q: "FAQ 7: Which areas are served by the Top IIT JEE Classes in Pimple Saudagar?",
      a: "Our Top IIT JEE Classes in Pimple Saudagar cater to students from Pimple Saudagar, Rahatani, Kalewadi, Wakad, Sangvi, and nearby PCMC regions. The location is easily accessible for daily coaching.",
    },
    {
      q: "FAQ 8: Why choose the Best IIT JEE Coaching in Pimple Saudagar for your preparation?",
      a: "The Best IIT JEE Coaching in Pimple Saudagar offers expert faculty, structured study modules, mock tests, and personalized mentoring. Students receive complete guidance for JEE Main & Advanced success in a focused learning environment.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Best IIT JEE Coaching Classes & Institute in Pimple Saudagar | ASQUARE</title>
        <meta
          name="title"
          content="Best IIT JEE Coaching Classes & Institute in Pimple Saudagar | ASQUARE"
        />
        <meta
          name="description"
          content="Top IIT JEE Coaching Classes & Institute in Pimple Saudagar for JEE Main & Advanced. Expert faculty, mock tests, small batches & structured coaching at ASQUARE Academy Pune."
        />
        <meta
          name="keywords"
          content="IIT JEE coaching classes in pimple saudagar, Best IIT JEE Coaching in pimple saudagar, Top JEE Mains Coaching Classes pimple saudagar, IIT JEE Advanced Preparation pimple saudagar, JEE Advanced coaching classes in pimple saudagar, IIT JEE Classes in pimple saudagar, Best IIT JEE Classes in pimple saudagar, Top IIT JEE Classes in pimple saudagar"
        />
        <script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-pimple-saudagar-pune#localbusiness",
      "name": "ASQUARE Academy - IIT JEE Coaching Pimple Saudagar",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-pimple-saudagar-pune",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "telephone": "9766118877",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Pimple Saudagar",
        "addressRegion": "Pune",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune"
      ],
      "description": "Best IIT JEE Coaching Classes & Institute in Pimple Saudagar Pune offering JEE Main & Advanced preparation with expert faculty, mock tests, and personalized learning."
    },
    {
      "@type": "EducationalOrganization",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-pimple-saudagar-pune#eduorg",
      "name": "ASQUARE Academy",
      "url": "https://www.asquareclasses.com/",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "description": "Leading coaching institute offering IIT JEE, NEET, and competitive exam preparation across Pune.",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "9766118877",
        "contactType": "customer service"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-pimple-saudagar-pune#webpage",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-pimple-saudagar-pune",
      "name": "IIT JEE Coaching Classes & Institute in Pimple Saudagar Pune | ASQUARE Academy",
      "primaryImageOfPage": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "description": "Top IIT JEE Coaching Classes in Pimple Saudagar with JEE Main & Advanced preparation, mock tests, expert faculty and structured learning programs."
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-pimple-saudagar-pune#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can join IIT JEE coaching classes in Pimple Saudagar?",
          "acceptedAnswer": { "@type": "Answer", "text": "Students from Class XI, XII, and drop-year batches preparing for JEE Main & Advanced can join our IIT JEE coaching classes in Pimple Saudagar." }
        },
        {
          "@type": "Question",
          "name": "What subjects are covered in the Best IIT JEE Coaching in Pimple Saudagar?",
          "acceptedAnswer": { "@type": "Answer", "text": "Physics, Chemistry, and Mathematics (PCM) are covered following JEE Main & Advanced patterns for conceptual clarity and strong problem-solving." }
        },
        {
          "@type": "Question",
          "name": "Are mock tests included in the Top JEE Mains Coaching Classes Pimple Saudagar?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes, chapter-wise tests, weekly assessments, and full-length mock exams are conducted to track progress and improve exam readiness." }
        },
        {
          "@type": "Question",
          "name": "What course options are available for IIT JEE Advanced Preparation in Pimple Saudagar?",
          "acceptedAnswer": { "@type": "Answer", "text": "2-Year, 1-Year, Crash Courses, and Dropper Batches are available with focused mentoring and personalized evaluation." }
        },
        {
          "@type": "Question",
          "name": "How many students are enrolled per batch in IIT JEE Classes in Pimple Saudagar?",
          "acceptedAnswer": { "@type": "Answer", "text": "Small batch sizes ensure personalized attention and consistent doubt-solving." }
        },
        {
          "@type": "Question",
          "name": "Do parents receive performance updates from the Best IIT JEE Classes in Pimple Saudagar?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes, parents receive regular reports, PTMs, and detailed performance tracking for transparent communication." }
        },
        {
          "@type": "Question",
          "name": "Which areas are served by the Top IIT JEE Classes in Pimple Saudagar?",
          "acceptedAnswer": { "@type": "Answer", "text": "We serve students from Pimple Saudagar, Rahatani, Kalewadi, Sangvi, Wakad, and nearby PCMC regions." }
        },
        {
          "@type": "Question",
          "name": "Why choose the Best IIT JEE Coaching in Pimple Saudagar?",
          "acceptedAnswer": { "@type": "Answer", "text": "We offer expert faculty, structured study modules, mock tests, personalized mentoring, and complete JEE Main & Advanced preparation." }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-pimple-saudagar-pune#breadcrumbs",
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
          "name": "Pimple Saudagar",
          "item": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-pimple-saudagar-pune"
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

      {/* Slider with form */}
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
                Excel in JEE Main & Advanced with{" "}
                <span className="highlight-text text-warning">ASQUARE Academy Pimple Saudagar</span>
              </motion.h1>

              <motion.h2>Premier Coaching Hub for Engineering Aspirants in Pimple Saudagar</motion.h2>

              <p className="lead d-none d-md-block">
                Looking for IIT-JEE coaching classes in Pimple Saudagar, Pune? At ASQUARE Academy, we provide structured courses, expert faculty, and exam-oriented training to prepare students for JEE Main & Advanced. Our Pimple Saudagar branch is dedicated to helping aspirants achieve admissions into IITs, NITs, IIITs, and India’s top engineering institutions through concept-based teaching, regular mock tests, and personalized mentoring.
              </p>

              <p className="lead d-block d-md-none">
                Looking for IIT-JEE coaching classes in Pimple Saudagar, Pune? At ASQUARE Academy, we provide structured courses, expert faculty, and exam-oriented training to prepare students for JEE Main & Advanced.
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

      {/* Why Join */}
      <section className="jee-why py-5">
        <div className="container">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">
            Why <span className="text-primary">ASQUARE Academy</span> in Pimple Saudagar?
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
                JEE Programs at <span className="text-primary">Pimple Saudagar</span> Branch
              </motion.h4>

              <p className="lead text-secondary">
                The Joint Entrance Examination (JEE) requires clarity, accuracy, and consistent practice. At ASQUARE Academy Pimple Saudagar, our programs focus on strengthening basics, sharpening problem-solving, and boosting exam confidence for both JEE Main & Advanced.
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
            Subjects Taught
            <span className="highlight-text text-warning"> &nbsp;&&nbsp; </span>
            Course Options
          </motion.h4>

          <div className="row g-4">
            <div className="col-lg-6">
              <h4 className="highlight-text text-warning fw-bold mb-4 text-centerr">Subjects Taught</h4>
              {subjects.map((sub, i) => (
                <div key={i} className="jee-subject-box mb-4 p-3 pb-4 pt-4 rounded-4 bg-white bg-opacity-10 backdrop-blur-md border border-light border-opacity-25">
                  <h5 className="fw-semibold">{sub.title}</h5>
                  <p className="small mb-0">{sub.desc}</p>
                </div>
              ))}
            </div>

            <div className="col-lg-6">
              <h4 className="highlight-text text-warning fw-bold mb-4 text-centerr">Course Options</h4>
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

      {/* Methodology */}
      <section className="jee-method py-5 bg-light">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-12 text-center text-lg-start">
              <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">
                Teaching <span className="text-primary">Methodology</span>
              </motion.h3>

              <div className="row g-4 justify-content-center">
                {["Daily lectures & assignment-driven learning", "One-to-one doubt-solving sessions", "Weekly unit tests & full-length mock exams", "Parent–teacher meetings with regular performance tracking"].map((step, i) => (
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
            Key Features of <span className="highlight-text text-warning">Pimple Saudagar</span> Branch
          </motion.h3>

          <div className="row justify-content-center g-4">
            {[
              "• Small batch strength for effective focus",
              "• Updated IIT-JEE study material, practice sets & test series",
              "• Workshops on exam shortcuts, time management & problem-solving hacks",
              "• Regular feedback and updates for parents",
              "• Recognized as a leading JEE coaching institute in Pimple Saudagar, Pune",
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
                Results That <span className="highlight-text text-warning">Inspire</span>
              </motion.h3>
              <p className="lead text-light">
                ASQUARE Academy has guided numerous students to crack JEE Main & Advanced with top ranks. The Pimple Saudagar branch continues this success by providing quality education, structured learning, and result-oriented training.
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
            Join ASQUARE Academy <span className="highlight-text text-warning">Pimple Saudagar Today</span>
          </motion.h3>

          <p className="lead mb-4">
            Begin your IIT-JEE journey with ASQUARE Academy’s expert coaching in Pimple Saudagar, Pune. With skilled teachers, modern resources, and consistent success, we are your trusted partner for JEE, CET & NEET coaching.
          </p>

          <p><MapPin className="text-warning" /> Serving students from <b className="bld">Pimple Saudagar, Rahatani, Kalewadi, Wakad, Sangvi, and nearby PCMC regions.</b></p>

          <a className="btn btn-lg btn-warning fw-bold mt-3 px-5 py-3 rounded-pill shadow-lg">
            <Link to={'/'} className="nav-item nav-item-list text-white">
              ⚡ Admissions Open – Enroll now!
              <p className="text-warning">Limited seats available.</p>
            </Link>
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default IITJEEPimpleSaudagar;
