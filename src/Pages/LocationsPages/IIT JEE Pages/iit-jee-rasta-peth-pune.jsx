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

import sampleimg1 from "../../../Assets/SampleImages/Banners/Banners (4).jpeg";
import sampleimg11 from "../../../Assets/SampleImages/Banners/Banners (5).jpeg";
import sampleimg2 from "../../../Assets/SampleImages/MobBanners/MobBanner8.jpeg";
import sampleimg22 from "../../../Assets/SampleImages/MobBanners/MobBanner9.jpeg";
import sampleimg3 from "../../../Assets/SampleImages/AsquarePics/AsquarePics (15).jpeg";
import sampleimg4 from "../../../Assets/SampleImages/AsquarePics/AsquarePics (2).jpeg";
import sampleimg5 from "../../../Assets/SampleImages/sampleimg5.jpeg";
import sampleimg6 from "../../../Assets/SampleImages/sampleimg6.jpeg";
import sampleimg7 from "../../../Assets/SampleImages/sampleimg7.jpeg";
import Form from "../../../Components/Form2/Form2.jsx";

const Reviews = React.lazy(() => import("../../../Components/Reviews/Reviews.jsx"));

function IITJEERastaPeth() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const whyChoose = [
    { Icon: Users, title: "Experienced Faculty", desc: "Expert educators specializing in Physics, Chemistry, and Mathematics." },
    { Icon: BookOpen, title: "In-Depth Curriculum", desc: "A perfect blend of NCERT concepts and advanced-level problem-solving." },
    { Icon: Target, title: "Focused Batches", desc: "Small group sizes for maximum personal attention." },
    { Icon: BarChart, title: "Performance Monitoring", desc: "Regular quizzes, test analysis, and improvement tracking." },
    { Icon: Lightbulb, title: "Hybrid Learning", desc: "Flexible options for both offline and online coaching." },
      { Icon: Lightbulb, title: "Academic Mentorship", desc: "Helping students maintain a balance between board exams and JEE goals." },
  ];

  const subjects = [
    { title: "Physics", desc: "Concept clarity with real-world applications & numericals" },
    { title: "Chemistry", desc: "Detailed study of Physical, Organic & Inorganic Chemistry" },
    { title: "Mathematics", desc: "Extensive practice in Algebra, Calculus, Trigonometry, Geometry & Probability" },
  ];

  const batches = [
    { title: "2-Year Integrated Course ", desc: "(for Class 11 students)" },
    { title: "1-Year Target Course ", desc: "(for Class 12 students)" },
    { title: "Dropper/Repeater Program", desc: "Fast revision & exam readiness" },
    { title: "Short-Term Crash Course ", desc: "(2–3 months intensive training)" },
  ];

  const faqs = [
    {
      q: "Q1: Does ASQUARE Academy train students for both JEE Mains and JEE Advanced exams?",
      a: "Yes—ASQUARE offers complete preparation for both exams with structured modules, problem-solving sessions, and regular mock tests.",
    },
    {
      q: "Q2: Are individual doubt-solving sessions available?",
      a: "Yes, dedicated doubt-clearing sessions are conducted daily to help students strengthen their concepts and improve accuracy.",
    },
    {
      q: "Q3: Do you conduct special classes for dropper students?",
      a: "Absolutely. Our dropper batches include intensive practice, advanced-level questions, and focused revision strategies.",
    },
    {
      q: "Q4: How is the teaching approach different from other institutes?",
      a: "ASQUARE follows a concept-driven methodology, small batch sizes, weekly assessments, and personalized mentoring for each student.",
    },
    {
      q: "Q5: Can students from Camp and Kasba Peth join the Rasta Peth branch?",
      a: "Yes—students from Camp, Kasba Peth, Shaniwar Peth, Sadashiv Peth, and nearby areas conveniently join our Rasta Peth center.",
    },
    {
      q: "Q6: Do you offer IIT JEE Advanced Preparation in Rasta Peth Pune?",
      a: "Yes—our Advanced-focused batches include in-depth concepts, challenging problem sets, and full-length JEE mock exams.",
    },
    {
      q: "Q7: Is study material provided for JEE preparation?",
      a: "Yes—students receive updated study notes, practice sheets, and chapter-wise question banks for both Mains and Advanced.",
    },
    {
      q: "Q8: Are flexible batch timings available for school-going students?",
      a: "Yes—morning, evening, and weekend batches are available to suit different schedules.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>IIT JEE Coaching Classes & Institute in Rasta Peth Pune | ASQUARE Academy</title>
        <meta name="title" content="IIT JEE Coaching Classes & Institute in Rasta Peth Pune | ASQUARE Academy" />
        <meta
          name="description"
          content="ASQUARE Academy offers top IIT JEE coaching classes & institute programs in Rasta Peth Pune with expert faculty, small batches, mock tests & advanced JEE preparation."
        />
        <meta
          name="keywords"
          content="IIT JEE coaching classes in Rasta Peth pune, Best IIT JEE Coaching in Rasta Peth pune, Top JEE Mains Coaching Classes Rasta Peth pune, IIT JEE Advanced Preparation Rasta Peth pune, IIT JEE Classes in Rasta Peth pune"
        />

        <script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@graph": [

    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-Institute-rasta-peth-pune#localbusiness",
      "name": "ASQUARE Academy - IIT JEE Coaching Classes & Institute Rasta Peth Pune",
      "description": "ASQUARE Academy offers IIT JEE coaching classes and institute programs in Rasta Peth Pune with expert teachers, structured modules, mock tests, and personalised guidance.",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-Institute-rasta-peth-pune",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "telephone": "9766118877",
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune/"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Rasta Peth",
        "addressRegion": "Pune",
        "addressCountry": "India"
      }
    },

    {
      "@type": "EducationalOrganization",
      "name": "ASQUARE Academy",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-Institute-rasta-peth-pune",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "description": "Leading IIT JEE coaching classes & institute in Rasta Peth Pune offering JEE Mains & Advanced preparation, doubt-solving, dropper batches, and structured study materials."
    },

    {
      "@type": "WebPage",
      "name": "IIT JEE Coaching Classes & Institute in Rasta Peth Pune",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-Institute-rasta-peth-pune",
      "description": "Best IIT JEE coaching classes & institute in Rasta Peth Pune with expert mentors, small batches, mock tests, personalised coaching, and full JEE Mains & Advanced preparation."
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
          "name": "IIT JEE Coaching Classes & Institute Rasta Peth Pune",
          "item": "https://www.asquareclasses.com/iit-jee-coaching-classes-Institute-rasta-peth-pune"
        }
      ]
    },

    {
      "@type": "FAQPage",
      "mainEntity": [

        {
          "@type": "Question",
          "name": "Does ASQUARE Academy train students for both JEE Mains and JEE Advanced exams?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes—ASQUARE offers complete preparation for both exams with structured modules, problem-solving sessions, and regular mock tests."
          }
        },

        {
          "@type": "Question",
          "name": "Are individual doubt-solving sessions available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, daily doubt-clearing sessions help students strengthen concepts and improve accuracy."
          }
        },

        {
          "@type": "Question",
          "name": "Do you conduct special classes for dropper students?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes—exclusive dropper batches include advanced-level practice, revision strategies, and intensive problem-solving."
          }
        },

        {
          "@type": "Question",
          "name": "How is the teaching approach different from other institutes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE follows a concept-driven approach, small batch sizes, weekly assessments, and personalised mentoring."
          }
        },

        {
          "@type": "Question",
          "name": "Can students from Camp and Kasba Peth join the Rasta Peth branch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes—students from Camp, Kasba Peth, Shaniwar Peth, Sadashiv Peth, and nearby locations conveniently join our Rasta Peth centre."
          }
        },

        {
          "@type": "Question",
          "name": "Do you offer IIT JEE Advanced Preparation in Rasta Peth Pune?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes—Advanced-focused batches include challenging problem sets, in-depth concepts, and full-length JEE mock exams."
          }
        },

        {
          "@type": "Question",
          "name": "Is study material provided for JEE preparation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes—updated study notes, practice sheets, and chapter-wise question banks are provided for both Mains and Advanced."
          }
        },

        {
          "@type": "Question",
          "name": "Are flexible batch timings available for school-going students?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes—morning, evening, and weekend batches are offered for students with different schedules."
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
            <div className="col-12 col-lg-8 col-md-12 text-center text-md-start">
              <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
                Achieve Your IIT JEE Goals with{" "}
                <span className="highlight-text text-warning">
                  ASQUARE Academy
                </span>{" "}
                Rasta Peth
              </motion.h1>
              {/* <motion.h2>Trusted Coaching for Engineering Aspirants in Rasta Peth</motion.h2> */}

              <p className="lead d-none d-md-block">
                Cracking the IIT JEE exam takes determination, a clear strategy, and the right mentors. At <b className="bld">ASQUARE Academy</b>, we offer one of the most result-oriented IIT JEE coaching programs in <b className="bld">Rasta Peth, Pune</b>. Our mission is to help students build a strong conceptual foundation, sharpen their analytical thinking, and develop exam-ready confidence. Counted among the leading IIT JEE institutes in Rasta Peth, ASQUARE Academy provides dedicated coaching for both JEE Mains and Advanced, ensuring every student receives comprehensive guidance.  Learners from Rasta Peth, Camp, Pune Station, Kasba Peth, Budhwar Peth, and Shaniwar Peth rely on ASQUARE to turn their engineering dreams into reality.
              </p>

              <p className="lead d-block d-md-none">
                              Cracking the IIT JEE exam takes determination, a clear strategy, and the right mentors. At <b className="bld">ASQUARE Academy</b>, we offer one of the most result-oriented IIT JEE coaching programs in <b className="bld">Rasta Peth, Pune</b>. Our mission is to help students build a strong conceptual foundation, sharpen their analytical thinking, and develop exam-ready confidence. Counted among the leading IIT JEE institutes in Rasta Peth, ASQUARE Academy provides dedicated coaching for both JEE Mains and Advanced, ensuring every student receives comprehensive guidance.  Learners from Rasta Peth, Camp, Pune Station, Kasba Peth, Budhwar Peth, and Shaniwar Peth rely on ASQUARE to turn their engineering dreams into reality.
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
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">
            Why Choose <span className="text-primary">ASQUARE Academy</span> for IIT JEE Preparation in Rasta Peth?
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
              <motion.h4 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-centerr">
                Programs Offered at <span className="text-primary">ASQUARE – Rasta Peth</span>
              </motion.h4>

               {batches.map((b, i) => (
                <div key={i} className="jee-subject-box mb-3 p-3 rounded-4 bg-white bg-opacity-10 backdrop-blur-md border border-light border-opacity-25">
                  <h5 className="fw-semibold">{b.title}</h5>
                  <p className="small mb-0">{b.desc}</p>
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

 

      {/* Methodology Section */}
      <section className="jee-method py-5 bg-light">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-12 text-center text-lg-start">
              <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">
                ASQUARE Teaching <span className="text-primary">Philosophy</span>
              </motion.h3>

              <div className="row g-4 justify-content-center">
                {["Concept → Application → Evaluation → Revision", "Practice", "Assess", "Revise"].map((step, i) => (
                  <div key={i} className="col-lg-3 col-6">
                    <motion.div whileHover={{ y: -5 }} className="method-card p-4 bg-white rounded-4 shadow-sm h-100 text-center">
                      <p className="text-muted small mb-0">
                        {i === 0
                          ? "Concept →   "
                          : i === 1
                          ? "Application →"
                          : i === 2
                          ? "Evaluation →"
                          : "Revision "}
                      </p>

                     
                    </motion.div>
                    
                  </div>
                ))}
                 <p className="text-muted small mb-0">We believe in a progressive learning cycle that ensures deep understanding, consistent practice, and confident performance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* New Highlights Section */}
      <section className="jee-highlights py-5 text-white">
        <div className="container text-center">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
            Highlights of
            <span className="highlight-text text-warning">&nbsp;Rasta Peth&nbsp;</span>
            Branch
          </motion.h3>

          <div className="row justify-content-center g-4">
            {[
              "•	Latest and well-structured JEE study material (digital + printed)",
              "•	Doubt-clearing sessions after every major topic",
              "•	Smart performance analytics and personalized feedback",
              "•	Workshops focused on accuracy, speed, and strategy",
              "•	Widely recognized as one of the Top IIT JEE Coaching Centers in Rasta Peth",
            ].map((text, i) => {
              return (
                <motion.div key={i} className="col-md-5 col-lg-4 col-6" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                  <div className="highlight-card shadow-lg rounded-4 p-4 bg-white bg-opacity-10 backdrop-blur-md border border-light border-opacity-25">
                    <div className="icon-circle mx-auto mb-3">
                      <h2>🎓</h2>
                    </div>
                    <p className="fw-semibold text-light">{text}</p>
                  </div>
                </motion.div>
              );
            })}
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
               Our Students’ 
                <span className="highlight-text text-warning">&nbsp;Achieveme&nbsp;</span>
              </motion.h3>
              <p className="lead text-light">
               Students from Rasta Peth and nearby areas have delivered outstanding results in JEE Mains and Advanced, earning seats in IITs, NITs, and top engineering colleges across India. The consistent success of our batches makes ASQUARE a trusted name for IIT JEE preparation in Pune.
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
          <motion.h2 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
            Join ASQUARE Academy
            <span className="highlight-text text-warning">&nbsp;Rasta Peth Today&nbsp;</span>
          </motion.h2>
          <p className="lead mb-4">
            Searching for the top IIT JEE coaching in Rasta Peth, Pune? Your search ends here! ASQUARE Academy offers structured programs, expert mentoring, and a proven track record of success.
          </p>
          <p>
            <MapPin className="text-warning" /> Easily accessible to students from  <b className="bld">Rasta Peth, Camp, Pune Station, Kasba Peth, Budhwar Peth, and Shaniwar Peth.</b>
          </p>
          <a className="btn btn-lg btn-warning fw-bold mt-3 px-5 py-3 rounded-pill shadow-lg">
            <Link to={"/"} className="nav-item nav-item-list text-white">
              ⚡ Admissions Open – Book Your Seat Now!
              &nbsp;
              {/* <p className="text-warning">Limited seats available.</p> */}
            </Link>
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default IITJEERastaPeth;
