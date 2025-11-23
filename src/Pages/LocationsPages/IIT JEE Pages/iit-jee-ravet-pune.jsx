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
import sampleimg2 from '../../../Assets/SampleImages/MobBanners/MobBanner8.jpeg';
import sampleimg22 from'../../../Assets/SampleImages/MobBanners/MobBanner9.jpeg';
import sampleimg1 from '../../../Assets/SampleImages/Banners/Banners (7).jpeg';
import sampleimg11 from '../../../Assets/SampleImages/Banners/Banners (8).jpeg';
import sampleimg3 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (15).jpeg';
import sampleimg4 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (17).jpeg';
import sampleimg5 from '../../../Assets/SampleImages/sampleimg5.jpeg';
import sampleimg6 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (16).jpeg';
import Form from '../../../Components/Form2/Form2.jsx';

const Reviews = React.lazy(() => import("../../../Components/Reviews/Reviews.jsx"));

function IITJEERavet() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Ravet content arrays
  const whyChoose = [
    { Icon: Users, title: "Qualified Faculty", desc: "Experts in IIT-JEE, CET & NEET coaching." },
    { Icon: BookOpen, title: "Complete PCM Syllabus", desc: "Physics, Chemistry & Mathematics aligned with latest exam updates." },
    { Icon: Target, title: "Personal Attention", desc: "Small batches for doubt-solving and better interaction." },
    { Icon: BarChart, title: "Assessment System", desc: "Weekly unit tests, assignments & mock exams." },
    { Icon: Lightbulb, title: "Motivation & Guidance", desc: "Career counseling, time management & stress-relief sessions." },
  ];

  const subjects = [
    { title: "Physics", desc: "Concept clarity with numerical applications" },
    { title: "Chemistry", desc: "Physical, Organic & Inorganic Chemistry explained thoroughly" },
    { title: "Mathematics", desc: "Advanced practice in Algebra, Calculus, Trigonometry, Geometry & Probability" },
  ];

  const batches = [
    { title: "2-Year Foundation Program (10th → 12th Moving Students)", desc: "Board + JEE integrated preparation." },
    { title: "1-Year Intensive Course (11th → 12th Moving Students)", desc: "Fast-track XII + JEE program." },
    { title: "Crash Course (2–3 Months)", desc: "Quick revision & test-focused learning." },
    { title: "Dropper/Repeater Batch (XII Pass-outs)", desc: "One-year JEE coaching for repeaters." },
  ];

  const faqs = [
    { q: "Q1: Who can join ASQUARE Academy Ravet?", a: "Class XI, XII students and XII pass-outs preparing for JEE Main & Advanced." },
    { q: "Q2: What subjects are included?", a: "Physics, Chemistry, and Mathematics (PCM)." },
    { q: "Q3: Do you conduct mock exams?", a: "Yes, weekly unit tests and full-length mock exams are conducted." },
    { q: "Q4: What courses are available?", a: "We offer 2-Year, 1-Year, Crash Courses & Dropper Batches." },
    { q: "Q5: How many students are there in a batch?", a: "We maintain small batch sizes for individual mentoring." },
    { q: "Q6: Do parents get regular updates?", a: "Yes, through PTMs and progress reports." },
    { q: "Q7: Which areas does the Ravet branch serve?", a: "Easily accessible from Ravet, Punawale, Tathawade, Nigdi, Akurdi, Hinjewadi, and nearby PCMC localities." },
  ];

  return (
    <>
      <Helmet>
        <title>Best IIT JEE Coaching Classes in Ravet Pune | ASQUARE Academy</title>
        <meta name="title" content="Best IIT JEE Coaching Classes in Ravet Pune | ASQUARE Academy" />
        <meta name="description" content="Join ASQUARE Academy – Best IIT JEE Coaching Classes in Ravet Pune for JEE Main & Advanced with expert faculty, small batches, tests & personalized mentoring." />
        <meta name="keywords" content="IIT JEE coaching classes in ravet pune, Best IIT JEE Coaching in ravet pune, Top JEE Mains Coaching Classes ravet pune, IIT JEE Advanced Preparation ravet pune, JEE Advanced coaching classes in ravet pune, IIT JEE Classes in ravet pune, Best IIT JEE Classes in ravet pune, Top IIT JEE Classes in ravet pune" />

        <script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-ravet-pune/#localbusiness",
      "name": "ASQUARE Academy Ravet",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-ravet-pune",
      "telephone": "9766118877",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ravet",
        "addressRegion": "Pune",
        "addressCountry": "India"
      },
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune/"
      ],
      "description": "ASQUARE Academy Ravet offers the Best IIT JEE Coaching Classes in Pune with expert faculty, mock exams, small batches & personalized learning support."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-ravet-pune/#webpage",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-ravet-pune",
      "name": "Best IIT JEE Coaching Classes in Ravet Pune | ASQUARE Academy",
      "description": "ASQUARE Academy Ravet provides top IIT JEE Coaching Classes in Ravet Pune with focused PCM subjects, JEE Mains & Advanced prep, tests & expert mentoring."
    },
    {
      "@type": "EducationalOrganization",
      "name": "ASQUARE Academy",
      "url": "https://www.asquareclasses.com/",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "9766118877",
        "contactType": "Customer Support",
        "areaServed": "IN"
      },
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune/"
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-ravet-pune/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can join ASQUARE Academy Ravet?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Class XI, XII students and XII pass-outs preparing for JEE Main & Advanced."
          }
        },
        {
          "@type": "Question",
          "name": "What subjects are included?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Physics, Chemistry, and Mathematics (PCM) are taught by expert faculty."
          }
        },
        {
          "@type": "Question",
          "name": "Do you conduct mock exams?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, weekly unit tests and full-length mock exams are conducted."
          }
        },
        {
          "@type": "Question",
          "name": "What courses are available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer 2-Year, 1-Year, Crash Courses & Dropper Batches for IIT JEE preparation."
          }
        },
        {
          "@type": "Question",
          "name": "How many students are there in a batch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We maintain small batch sizes for individual mentoring and better focus."
          }
        },
        {
          "@type": "Question",
          "name": "Do parents get regular updates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, parents receive regular progress reports and PTM updates."
          }
        },
        {
          "@type": "Question",
          "name": "Which areas does the Ravet branch serve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our Ravet branch serves students from Ravet, Punawale, Tathawade, Nigdi, Akurdi, Hinjewadi, and nearby PCMC localities."
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
          "name": "IIT JEE Coaching Classes",
          "item": "https://www.asquareclasses.com/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Ravet Pune",
          "item": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-ravet-pune"
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
                Achieve JEE Main & Advanced Success with <span className="highlight-text text-warning">ASQUARE Academy Ravet</span>
              </motion.h1>

              <motion.h2>Reliable Coaching for Engineering Aspirants in Ravet</motion.h2>

              {/* Full text for desktop */}
              <p className="lead d-none d-md-block">
                Looking for IIT-JEE coaching classes in Ravet, Pune? At <b className="bld">ASQUARE Academy,</b> we provide systematic learning, practice-based preparation, and individual guidance to help students achieve their engineering dreams. Our Ravet branch prepares aspirants for admission into IITs, NITs, IIITs, and other top engineering colleges. With experienced teachers, structured study plans, and rigorous test practice, students are trained to excel in JEE Main & Advanced.
              </p>

              {/* Short text for mobile */}
              <p className="lead d-block d-md-none">
                Looking for IIT-JEE coaching classes in Ravet, Pune? At <b className="bld">ASQUARE Academy,</b> we provide systematic learning, practice-based preparation, and individual guidance to help students achieve their engineering dreams. Our Ravet branch prepares aspirants for admission into IITs, NITs, IIITs, and other top engineering colleges. With experienced teachers, structured study plans, and rigorous test practice, students are trained to excel in JEE Main & Advanced.
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
            Why <span className="text-primary">ASQUARE Academy in Ravet</span>?
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
                Our JEE Coaching <span className="text-primary">Programs</span>
              </motion.h4>

              <p className="lead text-secondary">
                The Joint Entrance Examination (JEE) is one of the most competitive entrance tests in India. At ASQUARE Academy Ravet, our programs are designed to strengthen concepts, sharpen problem-solving skills, and improve accuracy for both JEE Main & Advanced.
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
            Subjects We Teach
            <span className="highlight-text text-warning">&nbsp;&&nbsp;</span>
            Course Duration & Batch Options
          </motion.h4>
          <br />

          <div className="row g-4">
            <div className="col-lg-6">
              <h4 className="highlight-text text-warning fw-bold mb-4 text-centerr">Subjects We Teach</h4>
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
                  "Daily lectures with structured assignments",
                  "One-to-one doubt-clearing sessions",
                  "Weekly practice tests & full-length mock exams",
                  "Parent–teacher meetings for student progress updates"
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

      {/* Key Features Section */}
      <section className="jee-highlights py-5 text-white">
        <div className="container text-center">
          <motion.h3
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="fw-bold display-6 mb-3"
          >
            Key Features of <span className="highlight-text text-warning">&nbsp;Ravet Branch&nbsp;</span>
          </motion.h3>

          <div className="row justify-content-center g-4">
            {[
              "Limited batch size for focused attention",
              "Updated IIT-JEE study modules, notes & question banks",
              "Workshops on exam hacks, problem-solving & time management",
              "Continuous performance reviews with parent updates",
              "Recognized as a leading JEE coaching institute in Ravet, Pune"
            ].map((text, i) => (
              <motion.div key={i} className="col-md-5 col-lg-4 col-6" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <div className="highlight-card shadow-lg rounded-4 p-4 bg-white bg-opacity-10 backdrop-blur-md border border-light border-opacity-25">
                  <div className="icon-circle mx-auto mb-3"><h2>🏆</h2></div>
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
                Results That <span className="highlight-text text-warning">&nbsp;Inspire&nbsp;</span>
              </motion.h3>
              <p className="lead text-light">
                ASQUARE Academy has a proven record of producing IIT-JEE toppers and engineering achievers. The Ravet branch adds to this success by offering dedicated coaching, expert mentoring, and result-oriented learning.
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
            Join <span className="highlight-text text-warning">&nbsp;ASQUARE Academy Ravet&nbsp;</span>Today
          </motion.h3>
          <p className="lead mb-4">
            Take your IIT-JEE preparation to the next level with ASQUARE Academy’s expert coaching in Ravet, Pune. With skilled faculty, structured programs, and a strong track record, we are your trusted choice for JEE, CET & NEET coaching.
          </p>
          <p><MapPin className="text-warning" /> Serving students from <b className="bld">Ravet, Punawale, Tathawade, Nigdi, Akurdi, Hinjewadi, and nearby PCMC areas.</b></p>
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

export default IITJEERavet;
