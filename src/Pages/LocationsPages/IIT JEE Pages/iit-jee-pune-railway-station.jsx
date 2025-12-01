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
import sampleimg11 from '../../../Assets/SampleImages/Banners/Banners (6).jpeg';
import sampleimg2 from '../../../Assets/SampleImages/MobBanners/MobBanner3.jpeg';
import sampleimg22 from'../../../Assets/SampleImages/MobBanners/MobBanner7.jpeg';

import sampleimg3 from "../../../Assets/SampleImages/AsquarePics/AsquarePics (9).jpeg";
import sampleimg4 from "../../../Assets/SampleImages/AsquarePics/AsquarePics (2).jpeg";
import sampleimg6 from "../../../Assets/SampleImages/AsquarePics/AsquarePics (4).jpeg";

import Form from "../../../Components/Form2/Form2.jsx";

const Reviews = React.lazy(() => import("../../../Components/Reviews/Reviews.jsx"));

function IITJEEPuneRailwayStation() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const whyChoose = [
    { Icon: Users, title: "Expert Faculty", desc: "Experienced mentors for Physics, Chemistry, and Mathematics." },
    { Icon: BookOpen, title: "Comprehensive Curriculum", desc: "Covers NCERT fundamentals with advanced problem-solving for JEE Mains & Advanced." },
    { Icon: Target, title: "Small Batch Strength", desc: "Ensures personalized attention and effective doubt-solving." },
    { Icon: BarChart, title: "Regular Assessments", desc: "Weekly tests, mock exams, and detailed performance analysis." },
    { Icon: Lightbulb, title: "Flexible Options", desc: "Choose from classroom or online learning modes." },
    { Icon: Lightbulb, title: "Continuous Mentorship", desc: "Academic balance between school curriculum and JEE preparation." },
  ];

  const subjects = [
    { title: "Physics", desc: "Deep concept-building with numerical & application-based practice." },
    { title: "Chemistry", desc: "Physical, Organic & Inorganic topics with problem-solving emphasis." },
    { title: "Mathematics", desc: "Rigorous training in Algebra, Calculus, Geometry, Probability & more." },
  ];

  const batches = [
    { title: "2-Year Integrated Program (Class 11 → 12)", desc: "" },
    { title: "1-Year Target Program (Class 12)", desc: "" },
    { title: "Dropper/Repeater Batch", desc: "" },
    { title: "Crash Course (2–3 Months)", desc: "" },
  ];

  const faqs = [
    {
      q: "Q1: Does ASQUARE provide training for both JEE Mains and JEE Advanced?",
      a: "Yes, ASQUARE offers complete guidance for JEE Mains and JEE Advanced, helping students build strong fundamentals. It is known for the Best IIT JEE Coaching in Railway-Station Pune with structured learning modules.",
    },
    {
      q: "Q2: Are small and focused batches available for better learning?",
      a: "Absolutely. ASQUARE maintains small, focused batches to ensure personalized attention. Many students prefer it as one of the Top IIT JEE Classes in Railway-Station Pune for individualized mentoring.",
    },
    {
      q: "Q3: Do you conduct dropper/repeater courses?",
      a: "Yes, ASQUARE conducts dedicated dropper and repeater batches designed to strengthen problem-solving and exam-oriented strategies. These are ideal for students seeking IIT JEE Advanced Preparation in Railway-Station Pune.",
    },
    {
      q: "Q4: What is ASQUARE’s teaching methodology?",
      a: "The academy follows a concept-oriented teaching approach with regular tests and in-depth doubt solving. This methodology makes it one of the Top JEE Mains Coaching Classes in Railway-Station Pune.",
    },
    {
      q: "Q5: Are regular mock tests included in the course?",
      a: "Yes, weekly and monthly mock tests are conducted to help students improve speed and accuracy. These tests support effective performance in JEE Advanced coaching classes in Railway-Station Pune.",
    },
    {
      q: "Q6: What subjects are covered in the IIT JEE program?",
      a: "ASQUARE covers Physics, Chemistry, and Mathematics thoroughly with chapter-wise assessments, making it a preferred choice for IIT JEE Classes in Railway-Station Pune.",
    },
    {
      q: "Q7: Do you provide study material and revision modules?",
      a: "Yes, students receive updated study material and revision notes for every chapter. This resource support is why ASQUARE is considered among the Best IIT JEE Classes in Railway-Station Pune.",
    },
    {
      q: "Q8: Can students from nearby areas like Camp or Bund Garden join this center?",
      a: "Definitely. Students from Camp, Bund Garden, and nearby areas can easily attend ASQUARE due to convenient connectivity to the IIT JEE coaching classes in Railway-Station Pune location.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>IIT JEE Coaching Classes Institute in Railway-Station Pune | ASQUARE</title>
        <meta name="title" content="IIT JEE Coaching Classes Institute in Railway-Station Pune | ASQUARE" />
        <meta name="description" content="Best IIT JEE coaching classes institute in Railway-Station Pune for JEE Mains & Advanced. Expert PCM faculty, small batches, mock tests & complete exam preparation." />
        <meta name="keywords" content="IIT JEE coaching classes in railway-station pune,
Best IIT JEE Coaching in railway-station pune,
Top JEE Mains Coaching Classes railway-station pune,
IIT JEE Advanced Preparation railway-station pune,
JEE Advanced coaching classes in railway-station pune,
IIT JEE Classes in railway-station pune,
Best IIT JEE Classes in railway-station pune,
Top IIT JEE Classes in railway-station pune,
" />
        <script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-pune-railway-station#localbusiness",
      "name": "ASQUARE Academy - IIT JEE Coaching Classes Institute Railway-Station Pune",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-pune-railway-station",
      "telephone": "+919766118877",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Railway-Station Area",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411001",
        "addressCountry": "IN"
      },
      "description": "Best IIT JEE Coaching Classes Institute in Railway-Station Pune for JEE Mains & Advanced preparation with expert PCM faculty, mock tests, and small batches.",
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune/"
      ]
    },
    {
      "@type": "EducationalOrganization",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-pune-railway-station#eduorg",
      "name": "ASQUARE Academy Railway-Station Pune",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-pune-railway-station",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "description": "Top IIT JEE Coaching Classes Institute in Railway-Station Pune offering JEE Mains coaching, JEE Advanced preparation, dropper batches, mock tests, and PCM classes."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-pune-railway-station#webpage",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-pune-railway-station",
      "name": "IIT JEE Coaching Classes Institute in Railway-Station Pune",
      "description": "IIT JEE coaching classes in Railway-Station Pune with structured learning modules, small batches, full JEE Mains & Advanced training, and expert PCM faculty."
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-pune-railway-station#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does ASQUARE provide training for both JEE Mains and JEE Advanced?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, ASQUARE provides full training for both JEE Mains and JEE Advanced with strong conceptual teaching modules."
          }
        },
        {
          "@type": "Question",
          "name": "Are small and focused batches available for better learning?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, small and focused batches ensure personalized attention, making ASQUARE one of the top IIT JEE classes in Railway-Station Pune."
          }
        },
        {
          "@type": "Question",
          "name": "Do you conduct dropper/repeater courses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, ASQUARE offers dropper and repeater batches focusing on strong fundamentals and exam-oriented preparation."
          }
        },
        {
          "@type": "Question",
          "name": "What is ASQUARE’s teaching methodology?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE follows a concept-based teaching approach with regular tests and detailed doubt-solving sessions."
          }
        },
        {
          "@type": "Question",
          "name": "Are regular mock tests included in the course?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, weekly and monthly mock tests are conducted to improve speed, accuracy, and exam performance."
          }
        },
        {
          "@type": "Question",
          "name": "What subjects are covered in the IIT JEE program?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The IIT JEE program covers Physics, Chemistry, and Mathematics with chapter-wise tests and deep conceptual teaching."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide study material and revision modules?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, ASQUARE provides updated study material, revision notes, and structured modules."
          }
        },
        {
          "@type": "Question",
          "name": "Can students from Camp or Bund Garden join this center?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, students from Camp, Bund Garden, and nearby locations can easily reach the Railway-Station Pune center due to excellent connectivity."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-pune-railway-station#breadcrumbs",
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
          "name": "IIT JEE Coaching Railway-Station Pune",
          "item": "https://www.asquareclasses.com/iit-jee-coaching-classes-pune-railway-station"
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
                Crack JEE Mains & Advanced with{" "}
                <span className="highlight-text text-warning">ASQUARE Academy – Pune Railway Station</span>
              </motion.h1>

              {/* <motion.h2>Why Choose ASQUARE Academy for IIT JEE near Pune Railway Station?</motion.h2> */}

              <p className="lead d-none d-md-block">
                Preparing for IIT JEE requires clarity, consistency, and expert guidance. At ASQUARE Academy, we offer the most trusted IIT JEE coaching classes near Pune Railway Station, designed to help students build strong concepts, improve accuracy, and perform with confidence in both JEE Mains and Advanced exams. Recognized among the Best IIT JEE Coaching in Pune Railway Station, our programs focus on conceptual learning, regular assessments, and one-on-one mentorship. Students from Pune Railway Station and nearby areas like Camp, Bund Garden, Dhole Patil Road, Koregaon Park, and Sadhu Vaswani Chowk have achieved exceptional results with ASQUARE Academy.
              </p>

              <p className="lead d-block d-md-none">
                Preparing for IIT JEE requires clarity, consistency, and expert guidance. At ASQUARE Academy, we offer trusted IIT JEE coaching near Pune Railway Station with conceptual learning, assessments and one-on-one mentorship.
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
            Why Choose <span className="text-primary">ASQUARE Academy</span> for IIT JEE near Pune Railway Station?
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
                Programs Offered at <span className="text-primary">ASQUARE – Pune Railway Station</span>
              </motion.h4>

              <p className="lead text-secondary">
                Our programs focus on conceptual clarity, exam practice and regular assessments so students perform confidently in both JEE Mains & Advanced.
              </p>

              {batches.map((b, i) => (
                <div key={i} className="jee-subject-box mb-3 p-3 rounded-4 bg-white bg-opacity-10 backdrop-blur-md border border-light border-opacity-25">
                  <h5 className="fw-semibold">{b.title}</h5>
                  {b.desc && <p className="small mb-0">{b.desc}</p>}
                </div>
              ))}
            </div>

            <div className="col-lg-4 text-center order-1">
              <motion.img whileHover={{ scale: 1.03 }} src={sampleimg4} alt="JEE Coaching" className="img-fluid rounded-4 shadow-lg mx-auto d-block" style={{ width: "85%" }} />
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
                {["Learn → ", "Practice → ", "Assess → ", "Revise"].map((step, i) => (
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
            Key Features of <span className="highlight-text text-warning">Pune Railway Station</span> Branch
          </motion.h3>

          <div className="row justify-content-center g-4">
            {[
              "Updated study material (digital + print) based on latest JEE trends",
              "Interactive doubt-clearing sessions with expert faculty",
              "Online test series with performance tracking",
              "Strategy workshops on accuracy, time management & exam mindset",
              "Ranked among the Top IIT JEE Classes near Pune Railway Station"
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
                Results That <span className="highlight-text text-warning">Define Our Success</span>
              </motion.h3>
              <p className="lead text-light">
                Students from Pune Railway Station and nearby areas have consistently excelled in JEE Mains & Advanced, securing admissions to IITs, NITs, and top engineering colleges. Their success reflects ASQUARE Academy’s consistent academic excellence and proven teaching model.
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
            Enroll Today at <span className="highlight-text text-warning">ASQUARE Academy – Pune Railway Station</span>
          </motion.h3>

          <p className="lead mb-4">
            If you’re looking for the Best IIT JEE Coaching near Pune Railway Station, your search ends here. With expert faculty, structured study plans, and consistent results, ASQUARE Academy ensures every student achieves their IIT dream.
          </p>

          <p><MapPin className="text-warning" /> Convenient for students from <b className="bld">Pune Railway Station, Camp, Bund Garden, Dhole Patil Road, Koregaon Park, and Sadhu Vaswani Chowk.</b></p>

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

export default IITJEEPuneRailwayStation;
