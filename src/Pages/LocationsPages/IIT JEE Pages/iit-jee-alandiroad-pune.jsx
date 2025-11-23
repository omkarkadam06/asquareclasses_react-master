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
// import sampleimg1 from '../../../Assets/SampleImages/sampleimg1.jpeg';
// import sampleimg2 from '../../../Assets/SampleImages/sampleimg2.jpeg';

import sampleimg1 from '../../../Assets/SampleImages/Banners/Banners (7).jpeg';
import sampleimg11 from '../../../Assets/SampleImages/Banners/Banners (8).jpeg';
import sampleimg2 from '../../../Assets/SampleImages/MobBanners/MobBanner3.jpeg';
import sampleimg22 from'../../../Assets/SampleImages/MobBanners/MobBanner4.jpeg';


import sampleimg3 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (9).jpeg'; //9,15
import sampleimg4 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (2).jpeg'; //2,17
import sampleimg5 from '../../../Assets/SampleImages/sampleimg5.jpeg';
import sampleimg6 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (4).jpeg'; //4,8,13,16
import sampleimg7 from '../../../Assets/SampleImages/sampleimg7.jpeg';
// import Swal from "sweetalert2";
import Form from '../../../Components/Form2/Form2.jsx';

const Reviews = React.lazy(() => import("../../../Components/Reviews/Reviews.jsx"));

function IITJEEAlandiRoad() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const whyChoose = [
    { Icon: Users, title: "Experienced Faculty", desc: "Subject experts with IIT-JEE & CET background." },
    { Icon: BookOpen, title: "Complete Syllabus Coverage", desc: "Physics, Chemistry & Mathematics as per JEE Main & Advanced format." },
    { Icon: Target, title: "Small Batch Size", desc: "More focus on individual students." },
    { Icon: BarChart, title: "Regular Mock Tests", desc: "Weekly assessments with performance tracking." },
    { Icon: Lightbulb, title: "Motivational Support", desc: "Career counseling & guidance for rank improvement." },
  ];

  const subjects = [
    { title: "Physics", desc: "Conceptual clarity with numerical application" },
    { title: "Chemistry", desc: "Physical, Organic & Inorganic with detailed learning" },
    { title: "Mathematics", desc: "Advanced problem-solving in Algebra, Geometry, Calculus & Probability" },
  ];

  const batches = [
    { title: "2-Year Foundation (10th → 12th)", desc: "Boards + JEE integrated program" },
    { title: "1-Year Intensive (11th → 12th)", desc: "Quick-paced JEE + XII coverage" },
    { title: "Crash Course (2–3 Months)", desc: "Rapid revision & problem practice" },
    { title: "Dropper / Repeater Batch", desc: "One-year focused JEE program for XII pass-outs" },
  ];

  const faqs = [
    { q: "Q1: Who can join ASQUARE Alandi Road?", a: "Class XI, XII students and XII pass-outs targeting JEE Main & Advanced can enroll in our IIT JEE coaching classes in Alandi." },
    { q: "Q2: What subjects are taught in the IIT JEE program?", a: "We cover Physics, Chemistry, and Mathematics (PCM) as part of structured IIT JEE Advanced preparation in Alandi." },
    { q: "Q3: Do you provide mock tests for JEE aspirants?", a: "Yes, weekly tests and full-length mock exams are included, making us one of the Top JEE Mains Coaching Classes in Alandi." },
    { q: "Q4: What course options are available at ASQUARE Alandi Road?", a: "We offer 2-Year, 1-Year, Crash Course, and Dropper Batches for students looking for the Best IIT JEE Coaching in Alandi." },
    { q: "Q5: What is the batch size at the Alandi branch?", a: "Small and focused batches ensure personalized guidance at our Top IIT JEE Classes in Alandi." },
    { q: "Q6: Do parents receive performance updates?", a: "Yes, parents receive regular progress reports and PTMs to stay informed about their child's preparation." },
    { q: "Q7: Which areas can easily access the Alandi Road branch?", a: "Students from Alandi Road, Vishrantwadi, Charholi, Dighi, Moshi, and nearby Pune areas can conveniently join our JEE Advanced coaching classes in Alandi." },
    { q: "Q8: Why choose ASQUARE Academy for IIT JEE preparation?", a: "Expert faculty, mock exams, strategic study plans, and consistent results make us one of the Best IIT JEE Classes in Alandi and Top IIT JEE Classes in Alandi." },
  ];

  return (
    <>
      <Helmet>
        <title>IIT JEE Coaching Classes in Alandi | Best JEE Main & Advanced Institute</title>
             <meta
          name="title"
          content="IIT JEE Coaching Classes in Alandi | Best JEE Main & Advanced Institute"
        />
        <meta
          name="description"
          content="Join the Best IIT JEE Coaching in Alandi for JEE Main & Advanced preparation. Expert faculty, PCM coaching, mock exams & small batches for strong results."
        />

        <meta name="keywords" content="IIT JEE coaching classes in alandi,
Best IIT JEE Coaching in  alandi,
Top JEE Mains Coaching Classes alandi,
IIT JEE Advanced Preparation alandi,
JEE Advanced coaching classes in alandi,
IIT JEE Classes in alandi,
Best IIT JEE Classes in alandi,
Top IIT JEE Classes in alandi,
" />

<script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-institute-alandi-road-pune#localbusiness",
      "name": "ASQUARE Academy - IIT JEE Coaching Alandi",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-institute-alandi-road-pune",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "description": "Top IIT JEE Coaching Classes in Alandi offering JEE Main & Advanced preparation with PCM coaching, mock tests, expert guidance and small batches.",
      "telephone": "9766118877",
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune/"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Alandi",
        "addressRegion": "Pune",
        "addressCountry": "India"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-institute-alandi-road-pune#webpage",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-institute-alandi-road-pune",
      "name": "IIT JEE Coaching Classes in Alandi",
      "description": "Best IIT JEE Classes in Alandi for JEE Main & Advanced with PCM coaching, structured modules, mock exams & expert faculty."
    },
    {
      "@type": "EducationalOrganization",
      "@id": "https://www.asquareclasses.com/#educationalorganization",
      "name": "ASQUARE Academy",
      "url": "https://www.asquareclasses.com/",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "description": "Leading IIT JEE & NEET coaching institute with structured learning, concept-building, mock tests and expert teaching."
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-institute-alandi-road-pune#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can join ASQUARE Alandi Road?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Class XI, XII students and XII pass-outs preparing for JEE Main & Advanced can enroll in our IIT JEE coaching classes in Alandi."
          }
        },
        {
          "@type": "Question",
          "name": "What subjects are taught in the IIT JEE program?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We cover Physics, Chemistry, and Mathematics (PCM) as part of structured IIT JEE Advanced preparation in Alandi."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide mock tests for JEE aspirants?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, weekly tests and full-length mock exams are included, making us one of the Top JEE Mains Coaching Classes in Alandi."
          }
        },
        {
          "@type": "Question",
          "name": "What course options are available at ASQUARE Alandi Road?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer 2-Year, 1-Year, Crash Course, and Dropper Batches for students looking for the Best IIT JEE Coaching in Alandi."
          }
        },
        {
          "@type": "Question",
          "name": "What is the batch size at the Alandi branch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Small and focused batches ensure personalized guidance at our Top IIT JEE Classes in Alandi."
          }
        },
        {
          "@type": "Question",
          "name": "Do parents receive performance updates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, parents receive regular progress reports and PTMs to stay informed about their child's preparation."
          }
        },
        {
          "@type": "Question",
          "name": "Which areas can easily access the Alandi Road branch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students from Alandi Road, Vishrantwadi, Charholi, Dighi, Moshi, and nearby Pune areas can join our JEE Advanced coaching classes in Alandi."
          }
        },
        {
          "@type": "Question",
          "name": "Why choose ASQUARE Academy for IIT JEE preparation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Expert faculty, mock exams, strategic study plans, and consistent results make us one of the Best IIT JEE Classes in Alandi."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-institute-alandi-road-pune#breadcrumb",
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
          "name": "IIT JEE Coaching in Alandi",
          "item": "https://www.asquareclasses.com/iit-jee-coaching-institute-alandi-road-pune"
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

        {/* Responsive Bootstrap Carousel (renders one carousel based on isDesktop) */}
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
          /* Mobile carousel */
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
                      height: "400px", // slightly shorter on mobile
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

      <hr></hr>
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
                Excel in JEE Main & Advanced with{" "}
                <span className="highlight-text text-warning">ASQUARE Institute</span>{" "}
                Alandi Road
              </motion.h1>
   <motion.h2>Crack JEE with Expert Coaching in Alandi Road</motion.h2>
              {/* Full text for desktop */}
              <p className="lead d-none d-md-block">
                Looking for the best IIT JEE institute in Alandi Road, Pune? At <b className="bld">ASQUARE Academy,</b> we focus on strong conceptual clarity, speed-building techniques, and exam strategies to help students secure seats in <b className="bld">IITs, NITs, IIITs,</b> and top engineering colleges.
              </p>

              {/* Short text for mobile */}
              <p className="lead d-block d-md-none">
                Looking for the best IIT JEE institute in Alandi Road, Pune? At <b className="bld">ASQUARE Academy,</b> we focus on strong conceptual clarity, speed-building techniques, and exam strategies to help students secure seats in top engineering colleges.
              </p>

              <a
                className="btn btn-warning btn-lg rounded-pill mt-3 shadow-lg"
              >      <Link
                to={'/'}
                className="nav-item nav-item-list text-warning"

              >
                  🚀 Enroll Now
                </Link>

              </a>
            </div>

            {/* Right Side: Transparent Image */}
            <div className="col-12 col-lg-4 col-md-12 mt-5 mt-md-0 text-center">
              <img
                src={sampleimg3} // replace with your transparent PNG
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

      <hr></hr>

      {/* Why Choose */} <section className="jee-why py-5 ">
        <div className="container">           <motion.h3
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="fw-bold display-6 mb-3 text-center"
        >Why ASQUARE is the Best JEE Institute in <span className="highlight-text text-primary">Alandi Road</span>?</motion.h3>

          <div className="row g-4 justify-center" style={{ justifyContent: "center" }}> {whyChoose.map((item, i) => (<div key={i} className="col-lg-4 col-md-6">
            <motion.div whileHover={{ scale: 1.05 }} className="jee-feature-card shadow-lg rounded-4 p-4 h-100" > <item.Icon size={40} className="mb-3 text-warning" /> <h5 className="fw-bold mb-2">{item.title}</h5> <p className="text-muted">{item.desc}</p>
            </motion.div> </div>))}
          </div>
        </div>
      </section>
      <hr></hr>

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
              >Our <span className="highlight-text text-primary">IIT JEE</span> Coaching Programs</motion.h4>

              <p className="lead text-secondary">

               The JEE exam is among the toughest in India. Our Alandi Road branch delivers structured coaching, practice modules, and exam-oriented sessions to ensure high performance in <b className="bld">JEE Main & Advanced.</b>
              
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
      <hr></hr>

      {/* Subjects + Batches Section */}
      <section className="jee-gradient-section py-5 text-white">
        <div className="container">
          <motion.h4
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="fw-bold display-6 mb-3 text-center"
          >
            Subjects We Cover
            <span className="highlight-text text-warning">
              &nbsp;&&nbsp;
            </span>
            Course Options & Batches
          </motion.h4>
          <br></br>

          <div className="row g-4">
            <div className="col-lg-6">
              <h4 className="highlight-text text-warning fw-bold mb-4 text-centerr">Subjects We Cover</h4>
              {subjects.map((sub, i) => (<div key={i} className="jee-subject-box mb-4 p-3 pb-4 pt-4  rounded-4 bg-white bg-opacity-10 backdrop-blur-md border border-light border-opacity-25">
                <h5 className="fw-semibold">{sub.title}</h5>
                <p className="small mb-0">{sub.desc}</p> </div>))}
            </div>
            <div className="col-lg-6">
              <h4 className="highlight-text text-warning fw-bold mb-4 text-centerr">Course Options & Batches</h4>
              {batches.map((b, i) => (<div key={i} className="jee-subject-box mb-3 p-3 rounded-4 bg-white bg-opacity-10 backdrop-blur-md border border-light border-opacity-25">
                <h5 className="fw-semibold">{b.title}</h5>
                <p className="small mb-0">{b.desc}</p>
              </div>))}
            </div>
          </div>
        </div>
      </section>
      <hr></hr>
      {/* Methodology Section */}
      <section className="jee-method py-5 bg-light">
        <div className="container">
          <div className="row align-items-center g-4">

            {/* Left Side - Text and Cards */}
            <div className="col-lg-12 text-center text-lg-start">
              <motion.h3
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="fw-bold display-6 mb-3 text-center"
              >Our <span className="highlight-text text-primary">Teaching Methodology</span> </motion.h3>

              <div className="row g-4 justify-content-center">
                {["Learn", "Practice", "Assess", "Revise"].map((step, i) => (
                  <div key={i} className="col-lg-3 col-6">
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="method-card p-4 bg-white rounded-4 shadow-sm h-100 text-center"
                    >
                      <p className="text-muted small mb-0">
                        {step === "Learn"
                          ? "Daily lectures & assignments"
                          : step === "Practice"
                            ? "One-to-one doubt-solving sessions"
                            : step === "Assess"
                              ? "Weekly practice sets & mock exams"
                              : "PTMs for parents with student progress updates"}
                      </p>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>


          </div>
        </div>
      </section>

      <hr></hr>

      {/* New Highlights Section */}
      <section className="jee-highlights py-5 text-white">
        <div className="container text-center">
          <motion.h3
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="fw-bold display-6 mb-3"
          >
            Key Benefits of Joining Our <span className="highlight-text text-warning">Alandi Road</span> Branch
          </motion.h3>

          <div className="row justify-content-center g-4">
            {[
              "Personalized attention with limited students per batch",
              "Comprehensive JEE study material & test series",
              "Workshops on exam strategy & time management",
              "Trusted JEE coaching in Alandi Road, Pune",
            ].map((text, i) => {
              return (
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
              );
            })}
          </div>

        </div>
      </section>


      <hr></hr>
      <Suspense fallback={<Loading />}>
        <Reviews />
      </Suspense>


      <hr></hr>

      {/* Results Section */}
      <section className="jee-results py-5 text-white">
        <div className="container">
          <div className="row align-items-center g-5">
            {/* Text Section */}
            <div className="col-lg-8 text-center text-lg-start">

              <motion.h3
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="fw-bold display-6 mb-3"
              >
                Success & <span className="highlight-text text-warning">Results</span>
              </motion.h3>
              <p className="lead text-light">
         ASQUARE Academy has a proven record of helping students crack IIT-JEE, NIT, and other engineering entrances. Our Alandi Road branch carries forward this legacy with consistent success.
              </p>
            </div>

            {/* Image Section */}
            <div className="col-lg-4 text-center">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={sampleimg6}
                alt="Success Stories"
                className="img-fluid rounded-4 shadow-lg mx-auto d-block"
                style={{ width: "80%" }}
              />
            </div>
          </div>
        </div>
      </section>

      <hr></hr>

      {/* FAQs */}
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
            >Frequently Asked Questions  <span className="text-primary">(FAQ)</span> </motion.h3>
          </div>

          <div className="row justify-content-center">
            {/* Left Column */}
            <div className="col-12 col-md-6 mb-4 mb-md-0 ">
              <FAQAccordion
                faqs={faqs.slice(0, Math.ceil(faqs.length / 2))}
                accordionId="jeeFaqLeft"
              />
            </div>

            {/* Right Column */}
            <div className="col-12 col-md-6">
              <FAQAccordion
                faqs={faqs.slice(Math.ceil(faqs.length / 2))}
                accordionId="jeeFaqRight"
              />
            </div>
          </div>
        </div>
      </section>
      <hr></hr>

      {/* Final CTA */}
      <section id="enroll" className="jee-enroll-section py-5 text-center text-white">
        <div className="container">

          <motion.h3
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="fw-bold display-6 mb-3"
          >
           Enroll at ASQUARE Academy <span className="highlight-text text-warning">Alandi Road</span> Today
          </motion.h3>
          <p className="lead mb-4">
       Get closer to your IIT dream with ASQUARE Academy, Alandi Road, Pune. With top-class faculty, structured learning, and result-oriented programs, we are your trusted choice for JEE, CET & NEET coaching.
          </p>
          <p><MapPin className="text-warning" />📍 Ideal for students from <b className="bld">Alandi Road, Charholi, Dighi, Vishrantwadi, Moshi, and surrounding areas.</b></p>
          <a className="btn btn-lg btn-warning fw-bold mt-3 px-5 py-3 rounded-pill shadow-lg">
            <Link
              to={'/'}
              className="nav-item nav-item-list text-white"

            >
              ⚡ Admissions Open – Book your seat today!
              &nbsp;<p className="text-warning mb-0">Limited seats available.</p>
            </Link>
          </a>
        </div>
      </section>



      <Footer />
    </>
  );
}

export default IITJEEAlandiRoad;
