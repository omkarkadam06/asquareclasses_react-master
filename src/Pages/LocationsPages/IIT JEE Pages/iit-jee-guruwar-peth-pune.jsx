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

import sampleimg2 from "../../../Assets/SampleImages/MobBanners/MobBanner9.jpeg";
import sampleimg22 from "../../../Assets/SampleImages/MobBanners/MobBanner1.jpeg";

import sampleimg3 from "../../../Assets/SampleImages/AsquarePics/AsquarePics (9).jpeg";
import sampleimg4 from "../../../Assets/SampleImages/AsquarePics/AsquarePics (2).jpeg";
import sampleimg6 from "../../../Assets/SampleImages/AsquarePics/AsquarePics (4).jpeg";

import Form from "../../../Components/Form2/Form2.jsx";

const Reviews = React.lazy(() =>
  import("../../../Components/Reviews/Reviews.jsx")
);

function IITJEEGuruwarPeth() {
  const canonicalUrl = window.location.origin + window.location.pathname;

  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* Why Choose Cards */
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
    {
      Icon: Target,
      title: "Focused Batches",
      desc: "Small group sizes for maximum personal attention.",
    },
    {
      Icon: BarChart,
      title: "Performance Monitoring",
      desc: "Regular quizzes, test analysis, and improvement tracking.",
    },
    {
      Icon: Lightbulb,
      title: "Hybrid Learning",
      desc: "Flexible options for both offline and online coaching.",
    },
        {
      Icon: Lightbulb,
      title: "Academic Mentorship",
      desc: "Helping students maintain a balance between board exams and JEE goals.",
    },
  ];

  /* Programs / Batches */
  const batches = [
    {
      title: "2-Year Integrated Course (for Class 11 students)",
      desc: "",
    },
    {
      title: "1-Year Target Course (for Class 12 students)",
      desc: "",
    },
    {
      title: "Dropper/Repeater Program",
      desc: "",
    },
    {
      title: "Short-Term Crash Course (2–3 months intensive training)",
      desc: "",
    },
  ];

  /* FAQs */
  const faqs = [
    {
      q: "Q1: Does ASQUARE Academy provide coaching for both JEE Mains and JEE Advanced exams?",
      a: "Yes—ASQUARE provides complete coaching for both JEE Mains and Advanced with a structured curriculum and regular assessments.",
    },
    {
      q: "Q2: Are individual doubt-solving sessions available?",
      a: "Absolutely. Students get personalized doubt-clearing sessions, one-on-one academic support, and dedicated mentor guidance.",
    },
    {
      q: "Q3: Do you conduct special classes for dropper or repeater students?",
      a: "Yes—special dropper batches with intensive practice, mock tests, and advanced revision sessions are available.",
    },
    {
      q: "Q4: How is your teaching approach different from other IIT JEE institutes?",
      a: "ASQUARE focuses on concept clarity, small batches, weekly tests, continuous tracking, and personalized study plans.",
    },
    {
      q: "Q5: Can students from Bhavani Peth and Rasta Peth join the Guruwar Peth branch?",
      a: "Yes—students from Bhavani Peth, Rasta Peth, Shaniwar Peth, Sadashiv Peth, and nearby areas join easily.",
    },
    {
      q: "Q6: Do you offer IIT JEE Advanced Preparation in Guruwar Peth Pune?",
      a: "Yes—advanced-level problem-solving sessions, full-length mock tests, and topic-wise question banks are included.",
    },
    {
      q: "Q7: Are evening or weekend batches available?",
      a: "Yes—ASQUARE offers weekend and evening batch options for school-going students.",
    },
    {
      q: "Q8: Do you provide study material for JEE Mains and JEE Advanced?",
      a: "Yes—students receive updated study modules, practice sheets, and previous-year questions.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          IIT JEE Coaching Classes & Institute in Guruwar Peth Pune | ASQUARE
        </title>

        <meta
          name="description"
          content="ASQUARE Academy offers top IIT JEE coaching classes & institute programs in Guruwar Peth Pune with expert faculty, small batches, doubt-solving & advanced preparation."
        />

        <meta
          name="keywords"
          content="IIT JEE coaching classes in Guruwar Peth pune, Best IIT JEE Coaching in Guruwar Peth pune, Top JEE Mains Coaching Classes Guruwar Peth pune, IIT JEE Advanced Preparation Guruwar Peth pune, JEE Advanced coaching classes in Guruwar Peth pune, IIT JEE Classes in Guruwar Peth pune, Best IIT JEE Classes in Guruwar Peth pune, Top IIT JEE Classes in Guruwar Peth pune, IIT JEE coaching Institute Guruwar Peth pune"
        />

        <link rel="canonical" href={canonicalUrl} />

        {/* Full Schema */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-Institute-guruwar-peth-pune#localbusiness",
      "name": "ASQUARE Academy - IIT JEE Coaching Classes & Institute Guruwar Peth Pune",
      "description": "ASQUARE Academy offers IIT JEE coaching classes & institute programs in Guruwar Peth Pune with expert faculty, structured study plans, mock tests, and personalised guidance.",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-Institute-guruwar-peth-pune",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "telephone": "9766118877",
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Guruwar Peth",
        "addressRegion": "Pune",
        "addressCountry": "India"
      }
    },

    {
      "@type": "EducationalOrganization",
      "name": "ASQUARE Academy",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-Institute-guruwar-peth-pune",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "description": "Leading IIT JEE coaching classes & institute in Guruwar Peth Pune providing JEE Mains & Advanced coaching, dropper batches, doubt-solving, and structured study materials."
    },

    {
      "@type": "WebPage",
      "name": "IIT JEE Coaching Classes & Institute in Guruwar Peth Pune",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-Institute-guruwar-peth-pune",
      "description": "Best IIT JEE coaching classes & institute in Guruwar Peth Pune with expert mentors, small batches, mock tests, and personalised preparation for JEE Mains & Advanced."
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
          "position": 3",
          "name": "IIT JEE Coaching Classes & Institute Guruwar Peth Pune",
          "item": "https://www.asquareclasses.com/iit-jee-coaching-classes-Institute-guruwar-peth-pune"
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
            "text": "Yes—ASQUARE provides complete coaching for both JEE Mains and Advanced with a structured curriculum and regular assessments."
          }
        },

        {
          "@type": "Question",
          "name": "Are individual doubt-solving sessions available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. Students get personalized doubt-clearing sessions, one-on-one support, and dedicated mentor guidance."
          }
        },

        {
          "@type": "Question",
          "name": "Do you conduct special classes for dropper or repeater students?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes—special dropper batches with intensive practice, mock tests, and advanced revision sessions are available."
          }
        },

        {
          "@type": "Question",
          "name": "How is your teaching approach different from other IIT JEE institutes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE focuses on concept clarity, small batches, weekly tests, continuous tracking, and personalized study plans."
          }
        },

        {
          "@type": "Question",
          "name": "Can students from Bhavani Peth and Rasta Peth join the Guruwar Peth branch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes—students from Bhavani Peth, Rasta Peth, Shaniwar Peth, Sadashiv Peth, and nearby areas join easily."
          }
        },

        {
          "@type": "Question",
          "name": "Do you offer IIT JEE Advanced Preparation in Guruwar Peth Pune?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes—advanced-level problem-solving sessions, full-length mock tests, and topic-wise question banks are included."
          }
        },

        {
          "@type": "Question",
          "name": "Are evening or weekend batches available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes—ASQUARE offers weekend and evening batch options for school-going students."
          }
        },

        {
          "@type": "Question",
          "name": "Do you provide study material for JEE Mains and JEE Advanced?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes—students receive updated study modules, practice sheets, previous-year questions, and topic-wise exercises."
          }
        }
      ]
    }
  ]
}
          `}
        </script>
      </Helmet>

      {/* Navbar + Header */}
      <Navbar />
      <Header />

      {/* Banner Slider */}
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
              {[sampleimg2, sampleimg22, sampleimg2, sampleimg22].map(
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

        {/* Slider Overform */}
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
            {/* Left */}
            <div className="col-12 col-lg-8 col-md-12 text-center text-md-start">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="fw-bold display-6 mb-3"
              >
                Achieve Your IIT JEE Goals with ASQUARE Academy –{" "}
                <span className="highlight-text text-warning">
                  Guruwar Peth
                </span>
              </motion.h1>

              <motion.h2>
                Cracking the IIT JEE exam takes determination, a clear strategy,
                and the right mentors.
              </motion.h2>

              <p className="lead d-none d-md-block">
                At ASQUARE Academy, we offer one of the most result-oriented IIT
                JEE coaching programs in Guruwar Peth, Pune. Our mission is to
                help students build a strong conceptual foundation, sharpen
                their analytical thinking, and develop exam-ready confidence.
                Counted among the leading IIT JEE institutes in Guruwar Peth,
                ASQUARE Academy provides dedicated coaching for both JEE Mains
                and Advanced, ensuring every student receives comprehensive
                guidance. Learners from Guruwar Peth, Budhwar Peth, Shukrawar
                Peth, Bhavani Peth, Rasta Peth, and Shaniwar Peth rely on
                ASQUARE to turn their engineering dreams into reality.
              </p>

              <p className="lead d-block d-md-none">
                At ASQUARE Academy, we offer one of the most result-oriented IIT
                JEE coaching programs in Guruwar Peth, Pune.
              </p>

              <a className="btn btn-warning btn-lg rounded-pill mt-3 shadow-lg">
                <Link to={"/"} className="nav-item nav-item-list text-warning">
                  🚀 Enroll Now
                </Link>
              </a>
            </div>

            {/* Right */}
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

      {/* WHY CHOOSE */}
      <section className="jee-why py-5">
        <div className="container">
          <motion.h3
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="fw-bold display-6 mb-3 text-center"
          >
            Why Choose{" "}
            <span className="highlight-text text-primary">
              ASQUARE Academy
            </span>{" "}
            for IIT JEE Preparation in Guruwar Peth
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

      {/* PROGRAMS */}
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
                Programs Offered at ASQUARE –{" "}
                <span className="highlight-text text-warning">
                  Guruwar Peth
                </span>
              </motion.h4>

              <p className="lead text-secondary">
                • 2-Year Integrated Course (for Class 11 students)
                <br />
                • 1-Year Target Course (for Class 12 students)
                <br />
                • Dropper/Repeater Program
                <br />
                • Short-Term Crash Course (2–3 months intensive training)
              </p>
            </div>

            <div className="col-lg-4 text-center order-1">
              <motion.img
                whileHover={{ scale: 1.03 }}
                src={sampleimg4}
                alt="Programs"
                className="img-fluid rounded-4 shadow-lg mx-auto d-block"
                style={{ width: "85%" }}
              />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Teaching Philosophy */}
      <section className="jee-gradient-section py-5 text-white">
        <div className="container">
          <motion.h4
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="fw-bold display-6 mb-3 text-center"
          >
            ASQUARE Teaching Philosophy
          </motion.h4>

          <div className="row g-4">
            <div className="col-lg-12">
              {/* <h4 className="highlight-text text-warning fw-bold mb-4 text-centerr">
                ASQUARE Teaching Philosophy
              </h4> */}

              <div className="jee-subject-box mb-4 p-3 pb-4 pt-4 rounded-4 bg-white bg-opacity-10 backdrop-blur-md border border-light border-opacity-25">
                <h5 className="fw-semibold">
                  Concept → Application → Evaluation → Revision
                </h5>
                <p className="small mb-0">
                  We believe in a progressive learning cycle that ensures deep
                  understanding, consistent practice, and confident performance.
                </p>
              </div>
            </div>

            {/* Batches */}
          
          </div>
        </div>
      </section>

      <hr />

      {/* Highlights */}
      <section className="jee-method py-5 bg-light">
        <div className="container">
          <motion.h3
            className="fw-bold display-6 mb-5 text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Highlights of{" "}
            <span className="text-primary">ASQUARE Academy – Guruwar Peth</span>
          </motion.h3>

          <div className="row g-4 justify-content-center">
            {[
              "• Latest and well-structured JEE study material (digital + printed)",
              "• Doubt-clearing sessions after every major topic",
              "• Smart performance analytics and personalized feedback",
              "• Workshops focused on accuracy, speed, and strategy",
              "• Widely recognized as one of the Top IIT JEE Coaching Centers in Guruwar Peth",
            ].map((t, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <div className="method-card p-4 bg-white rounded-4 shadow-sm h-100 text-center">
                  <p className="text-muted small mb-0">{t}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr />



      {/* Reviews */}
      <Suspense fallback={<Loading />}>
        <Reviews />
      </Suspense>

      <hr />

      {/* Results */}
      <section className="jee-results py-5 text-white">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-8">
              <h3 className="fw-bold display-6 mb-3">
                Our Students’ {" "}
                <span className="highlight-text text-warning">Achievements</span>
              </h3>

              <p className="lead text-light">
                Students from Guruwar Peth and nearby areas have delivered outstanding results in JEE Mains and Advanced, earning seats in IITs, NITs, and top engineering colleges across India. The consistent success of our batches makes ASQUARE a trusted name for IIT JEE preparation in Pune.
              </p>
            </div>

            <div className="col-lg-4 text-center">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={sampleimg6}
                alt="Success Stories"
                className="img-fluid rounded-4 shadow-lg"
                style={{ width: "80%" }}
              />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* FAQs */}
      <section className="jee-faq py-5">
        <div className="container">
          <div className="text-center mb-5">
            <div className="d-inline-block bg-primary bg-opacity-10 text-primary fw-bold rounded-pill px-3 py-1">
              <BadgeQuestionMark /> FAQs
            </div>
            <h3 className="fw-bold display-6 mt-3">
              Frequently Asked Questions <span className="text-primary">(FAQ)</span>
            </h3>
          </div>

          <div className="row justify-content-center">
            {/* Left */}
            <div className="col-12 col-md-6 mb-4">
              <FAQAccordion
                faqs={faqs.slice(0, Math.ceil(faqs.length / 2))}
                accordionId="jeeFaqLeft"
              />
            </div>

            {/* Right */}
            <div className="col-12 col-md-6">
              <FAQAccordion
                faqs={faqs.slice(Math.ceil(faqs.length / 2))}
                accordionId="jeeFaqRight"
              />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Final CTA */}
      <section id="enroll" className="jee-enroll-section py-5 text-center text-white">
        <div className="container">
          <h3 className="fw-bold display-6 mb-3">
            Join ASQUARE Academy{" "}
            <span className="highlight-text text-warning">Guruwar Peth Today</span>
          </h3>

          <p className="lead">
           Searching for the top IIT JEE coaching in Guruwar Peth, Pune? Your search ends here! ASQUARE Academy offers structured programs, expert mentoring, and a proven track record of success.
          </p>

          <p>
            <MapPin className="text-warning" /> Accessible from{" "}
            <b>Guruwar Peth, Budhwar Peth, Shukrawar Peth, Bhavani Peth, Rasta Peth, Shaniwar Peth.</b>
          </p>

          <a className="btn btn-warning btn-lg px-5 py-3 rounded-pill shadow-lg">
            <Link to={"/"} className="nav-item nav-item-list text-white fw-bold">
              ⚡ Admissions Open – Book Your Seat Now!
              {/* <span className="d-block text-warning">Limited Seats Available</span> */}
            </Link>
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default IITJEEGuruwarPeth;
