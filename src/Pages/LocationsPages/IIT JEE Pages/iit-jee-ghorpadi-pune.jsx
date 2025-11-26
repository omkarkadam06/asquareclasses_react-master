// src/pages/LocationsPages/iit-jee/IITJEEGhorpadi.jsx
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

import sampleimg1 from "../../../Assets/SampleImages/Banners/Banners (1).jpeg";
import sampleimg11 from "../../../Assets/SampleImages/Banners/Banners (2).jpeg";
import sampleimg2 from "../../../Assets/SampleImages/MobBanners/MobBanner6.jpeg";
import sampleimg22 from "../../../Assets/SampleImages/MobBanners/MobBanner7.jpeg";

import sampleimg3 from "../../../Assets/SampleImages/AsquarePics/AsquarePics (9).jpeg";
import sampleimg4 from "../../../Assets/SampleImages/AsquarePics/AsquarePics (2).jpeg";
import sampleimg6 from "../../../Assets/SampleImages/AsquarePics/AsquarePics (4).jpeg";

import Form from "../../../Components/Form2/Form2.jsx";
const Reviews = React.lazy(() => import("../../../Components/Reviews/Reviews.jsx"));

/**
 * IIT JEE - Ghorpadi Page
 * File generated using content from submitted word file.
 *
 * Note: Local uploaded doc path (for backend/tooling use):
 * /mnt/data/Best IIT JEE Coaching Classes in Ghorpadi.docx
 * (This local path will be transformed to a URL by your tooling.)
 */

function IITJEEGhorpadi() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Content arrays (kept concise; main textual content below is from the submitted file)
  const whyChoose = [
    {
      Icon: Users,
      title: "Experienced Faculty",
      desc: "Expert educators specializing in Physics, Chemistry, and Mathematics.",
    },
    {
      Icon: BookOpen,
      title: "In-Depth Curriculum",
      desc: "A perfect blend of NCERT concepts and advanced-level problem-solving.",
    },
    { Icon: Target, title: "Focused Batches", desc: "Small group sizes for maximum personal attention." },
    {
      Icon: BarChart,
      title: "Performance Monitoring",
      desc: "Regular quizzes, test analysis, and improvement tracking.",
    },
    { Icon: Lightbulb, title: "Hybrid Learning", desc: "Flexible options for both offline and online coaching." },
{ Icon: Lightbulb, title: "Academic Mentorship", desc: "Helping students maintain a balance between board exams and JEE goals.." },

  ];

  const subjects = [
    { title: "Physics", desc: "Concept clarity + numerical practice" },
    { title: "Chemistry", desc: "Theory, reactions & problem solving" },
    { title: "Mathematics", desc: "Advanced problem practice across topics" },
  ];

  const batches = [
    { title: "2-Year Integrated Course (for Class 11 students)", desc: "" },
    { title: "1-Year Target Course (for Class 12 students)", desc: "" },
    { title: "Dropper/Repeater Program", desc: "" },
    { title: "Short-Term Crash Course (2–3 months intensive training)", desc: "" },
  ];

  const faqs = [
    {
      q: "Q1: Does ASQUARE Academy provide coaching for both JEE Mains and JEE Advanced exams?",
      a: "Yes—ASQUARE offers integrated courses that cover the complete JEE Mains and Advanced syllabus with rigorous practice.",
    },
    {
      q: "Q2: Are individual doubt-solving sessions available for students?",
      a: "Absolutely. Students get dedicated doubt-clearing sessions, personal mentorship, and after-class support.",
    },
    {
      q: "Q3: Do you conduct special batches for dropper or repeater students?",
      a: "Yes, ASQUARE runs exclusive dropper batches focused on intensive practice, revision, and exam-oriented preparation.",
    },
    {
      q: "Q4: How is ASQUARE’s teaching method different from other IIT JEE institutes?",
      a: "Our approach includes concept-driven learning, small batches, continuous testing, personalised monitoring, and structured revision plans.",
    },
    {
      q: "Q5: Can students from Koregaon Park and MG Road join the Ghorpadi branch?",
      a: "Yes—many students from Koregaon Park, MG Road, Camp, BT Kawade Road, and Fatima Nagar attend our IIT JEE classes in Ghorpadi.",
    },
    {
      q: "Q6: Do you provide IIT JEE Advanced Preparation in Ghorpadi Pune?",
      a: "Yes, advanced-level problem-solving sessions, mock tests, and detailed performance analysis are part of the program.",
    },
    {
      q: "Q7: Are weekend or evening batches available for convenience?",
      a: "Yes—ASQUARE offers flexible batch timings including evening and weekend batches for school-going students.",
    },
    {
      q: "Q8: Do you provide study materials for JEE Mains and Advanced preparation?",
      a: "Yes, students receive well-structured study materials, practice sheets, test modules, and previous-year question sets.",
    },
  ];

  // Local file path (as requested by developer instructions) - tooling will transform this to a URL
  const localDocPath = "/mnt/data/Best IIT JEE Coaching Classes in Ghorpadi.docx";

  return (
    <>
      <Helmet>
        <title>IIT JEE Coaching Classes & Institute in Ghorpadi Pune | ASQUARE Academy</title>
        <meta
          name="title"
          content="IIT JEE Coaching Classes & Institute in Ghorpadi Pune | ASQUARE Academy"
        />
        <meta
          name="description"
          content="ASQUARE Academy offers top IIT JEE coaching classes & institute programs in Ghorpadi Pune with expert faculty, small batches, doubt-solving & advanced preparation."
        />
        <meta
          name="keywords"
          content="IIT JEE coaching classes in Ghorpadi pune, Best IIT JEE Coaching in Ghorpadi pune, Top JEE Mains Coaching Classes Ghorpadi pune, IIT JEE Advanced Preparation Ghorpadi pune"
        />

        {/* JSON-LD Schema — url uses local doc path (to be transformed by backend/tooling) */}
        <script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@graph": [

    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-Institute-ghorpadi-pune#localbusiness",
      "name": "ASQUARE Academy - IIT JEE Coaching Classes & Institute Ghorpadi Pune",
      "description": "ASQUARE Academy provides top IIT JEE coaching classes & institute programs in Ghorpadi Pune with expert faculty, small batches, mock tests, and advanced preparation.",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-Institute-ghorpadi-pune",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "telephone": "9766118877",
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ghorpadi",
        "addressRegion": "Pune",
        "addressCountry": "India"
      }
    },

    {
      "@type": "EducationalOrganization",
      "name": "ASQUARE Academy",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-Institute-ghorpadi-pune",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "description": "Leading IIT JEE coaching classes & institute in Ghorpadi Pune offering JEE Mains & Advanced preparation, dropper batches, doubt-solving & study materials."
    },

    {
      "@type": "WebPage",
      "name": "IIT JEE Coaching Classes & Institute in Ghorpadi Pune",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-Institute-ghorpadi-pune",
      "description": "Top IIT JEE coaching classes & institute in Ghorpadi Pune with expert faculty, doubt-solving, mock tests, and advanced preparation for JEE Mains & Advanced."
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
          "item": "https://www.asquareclasses.com/iit-jee-coaching-classes"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "IIT JEE Coaching Classes & Institute Ghorpadi Pune",
          "item": "https://www.asquareclasses.com/iit-jee-coaching-classes-Institute-ghorpadi-pune"
        }
      ]
    },

    {
      "@type": "FAQPage",
      "mainEntity": [

        {
          "@type": "Question",
          "name": "Does ASQUARE Academy provide coaching for both JEE Mains and JEE Advanced exams?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes—ASQUARE offers integrated courses covering the complete JEE Mains and Advanced syllabus with rigorous practice."
          }
        },

        {
          "@type": "Question",
          "name": "Are individual doubt-solving sessions available for students?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, students get dedicated doubt-clearing sessions, personal mentorship, and after-class academic support."
          }
        },

        {
          "@type": "Question",
          "name": "Do you conduct special batches for dropper or repeater students?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, ASQUARE runs exclusive dropper batches focused on intensive practice, revision, and exam-oriented preparation."
          }
        },

        {
          "@type": "Question",
          "name": "How is ASQUARE’s teaching method different from other IIT JEE institutes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE follows concept-driven learning, small batches, continuous testing, personalised monitoring, and structured revision plans."
          }
        },

        {
          "@type": "Question",
          "name": "Can students from Koregaon Park and MG Road join the Ghorpadi branch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes—students from Koregaon Park, MG Road, Camp, BT Kawade Road, and Fatima Nagar attend our IIT JEE classes in Ghorpadi."
          }
        },

        {
          "@type": "Question",
          "name": "Do you provide IIT JEE Advanced Preparation in Ghorpadi Pune?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, advanced-level problem-solving sessions, mock tests, and detailed performance analysis are part of the program."
          }
        },

        {
          "@type": "Question",
          "name": "Are weekend or evening batches available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes—ASQUARE offers flexible batch timings including evening and weekend batches for school-going students."
          }
        },

        {
          "@type": "Question",
          "name": "Do you provide study materials for JEE Mains and Advanced?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, students receive structured study materials, practice sheets, test modules, and previous-year question sets."
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

      {/* Slider + Overlaid Form */}
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
              {[sampleimg2, sampleimg22, sampleimg2].map((img, i) => (
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

      {/* Hero / H1 */}
      <section className="jee-hero-section text-white d-flex align-items-center bg-transparent">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-12 col-lg-8 col-md-12 text-center text-md-start">
              <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
                Achieve Your IIT JEE Goals with ASQUARE Academy –{" "}
                <span className="highlight-text text-warning">Ghorpadi</span>
              </motion.h1>

              <motion.h2>Cracking the IIT JEE exam takes determination, a clear strategy, and the right mentors.</motion.h2>

              <p className="lead d-none d-md-block">
                At <b className="bld">ASQUARE Academy,</b> we offer one of the most result-oriented IIT JEE coaching programs in <b className="bld">Ghorpadi, Pune.</b> Our mission is to help students build a strong conceptual foundation, sharpen their analytical thinking, and develop exam-ready confidence. Counted among the leading IIT JEE institutes in Ghorpadi, ASQUARE Academy provides dedicated coaching for both JEE Mains and Advanced, ensuring every student receives comprehensive guidance. Learners from Ghorpadi, Koregaon Park, Camp, MG Road, Mundhwa, and Fatima Nagar rely on ASQUARE to turn their engineering dreams into reality.
              </p>

              <p className="lead d-block d-md-none">
                At <b className="bld">ASQUARE Academy</b> Ghorpadi — result-oriented IIT JEE coaching for Mains & Advanced. Serving nearby areas including Koregaon Park, Camp, MG Road, Mundhwa, and Fatima Nagar.
              </p>

              <Link to="/" className="btn btn-warning btn-lg rounded-pill mt-3 shadow-lg">
                🚀 Enroll Now
              </Link>
            </div>

            <div className="col-12 col-lg-4 col-md-12 mt-5 mt-md-0 text-center">
              <img src={sampleimg3} alt="ASQUARE Academy" className="img-fluid mx-auto fade-in imgsiz" style={{ objectFit: "contain", opacity: 0.95, borderRadius: "10px" }} />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Why Choose - H2 */}
      <section className="jee-why py-5">
        <div className="container">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">
            <span className="highlight-text text-primary">Why Choose ASQUARE Academy for IIT JEE Preparation in Ghorpadi?</span>
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

      {/* Programs Offered - H3 */}
      <section className="jee-programs py-5 bg-light">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-8 text-center text-lg-start order-2">
              <motion.h4 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-centerr">
                <span className="highlight-text text-warning">Programs Offered at ASQUARE – Ghorpadi</span>
              </motion.h4>

              <p className="lead text-secondary">
                {/* kept from file: Programs list below */}
                • 2-Year Integrated Course (for Class 11 students) <br />
                • 1-Year Target Course (for Class 12 students) <br />
                • Dropper/Repeater Program <br />
                • Short-Term Crash Course (2–3 months intensive training)
              </p>
            </div>

            <div className="col-lg-4 text-center order-1">
              <motion.img whileHover={{ scale: 1.03 }} src={sampleimg4} alt="Programs" className="img-fluid rounded-4 shadow-lg mx-auto d-block" style={{ width: "85%" }} />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Teaching Philosophy - H4 */}
      <section className="jee-gradient-section py-5 text-white">
        <div className="container">
          <motion.h4 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">
            <span className="highlight-text text-warning">ASQUARE Teaching Philosophy</span>
          </motion.h4>

          <div className="row g-4">
            <div className="col-12 text-center mb-3">
              <h5 className="fw-semibold">Concept → Application → Evaluation → Revision</h5>
              <p className="small mb-0">We believe in a progressive learning cycle that ensures deep understanding, consistent practice, and confident performance.</p>
            </div>

        

          </div>
        </div>
      </section>

      <hr />

      {/* Highlights - H4 */}
      <section className="jee-highlights py-5 text-white">
        <div className="container text-center">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
            <span className="highlight-text text-primary">Highlights of ASQUARE Academy – Ghorpadi</span>
          </motion.h3>

          <div className="row justify-content-center g-4">
            {[
              "Latest and well-structured JEE study material (digital + printed)",
              "Doubt-clearing sessions after every major topic",
              "Smart performance analytics and personalized feedback",
              "Workshops focused on accuracy, speed, and strategy",
              "Widely recognized as one of the Top IIT JEE Coaching Centers in Ghorpadi",
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

      {/* Achievements / Results */}
      <section className="jee-results py-5 text-white">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-8 text-center text-lg-start">
              <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
                Our Students’ <span className="highlight-text text-warning">Achievements</span>
              </motion.h3>
              <p className="lead text-light">
                Students from Ghorpadi and surrounding areas have delivered outstanding results in JEE Mains and Advanced, earning seats in IITs, NITs, and top engineering colleges across India. The consistent success of our batches makes ASQUARE a trusted name for IIT JEE preparation in Pune.
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
            Join ASQUARE Academy <span className="highlight-text text-warning">Ghorpadi Today</span>
          </motion.h3>

          <p className="lead mb-4">
            Searching for the top IIT JEE coaching in Ghorpadi, Pune? Your search ends here! ASQUARE Academy offers structured programs, expert mentoring, and a proven track record of success.
          </p>

          <p>
            <MapPin className="text-warning" /> Easily accessible to students from <b className="bld">Ghorpadi, Koregaon Park, Camp, MG Road, Mundhwa, and Fatima Nagar.</b>
          </p>

          <Link to="/" className="btn btn-lg btn-warning fw-bold mt-3 px-5 py-3 rounded-pill shadow-lg">
            ⚡ Admissions Open – Book Your Seat Now!
            {/* <div className="small text-warning mt-1">Limited seats available.</div> */}
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default IITJEEGhorpadi;
