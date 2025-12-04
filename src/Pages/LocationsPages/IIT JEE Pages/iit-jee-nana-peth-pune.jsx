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

import sampleimg1 from '../../../Assets/SampleImages/Banners/Banners (1).jpeg';
import sampleimg11 from '../../../Assets/SampleImages/Banners/Banners (9).jpeg';
import sampleimg2 from '../../../Assets/SampleImages/MobBanners/MobBanner6.jpeg';
import sampleimg22 from'../../../Assets/SampleImages/MobBanners/MobBanner2.jpeg';

import sampleimg3 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (9).jpeg';
import sampleimg4 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (2).jpeg';
import sampleimg6 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (4).jpeg';

import Form from "../../../Components/Form2/Form2.jsx";

const Reviews = React.lazy(() => import("../../../Components/Reviews/Reviews.jsx"));

function IITJEENanaPeth() {
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
      desc: "Highly qualified mentors for Physics, Chemistry & Mathematics with proven track records.",
    },
    {
      Icon: BookOpen,
      title: "Comprehensive Coverage",
      desc: "NCERT foundation + advanced JEE problem-solving and concept building.",
    },
    {
      Icon: Target,
      title: "Small Batch Sizes",
      desc: "Personalized attention for faster progress and effective doubt resolution.",
    },
    {
      Icon: BarChart,
      title: "Regular Testing",
      desc: "Weekly quizzes, full-length mocks and actionable performance feedback.",
    },
    {
      Icon: Lightbulb,
      title: "Flexible Learning",
      desc: "Classroom & live-online options with mentorship support for boards + JEE balance.",
    },
       {
              Icon: Lightbulb,
              title: "Mentorship Support",
              desc: "Balancing JEE preparation with Class XI & XII academics",
            },
  ];

  const subjects = [
    {
      title: "Physics",
      desc: "Concept clarity plus numerical practice to build accuracy and speed.",
    },
    {
      title: "Chemistry",
      desc: "Complete Physical, Organic & Inorganic coverage with solved examples.",
    },
    {
      title: "Mathematics",
      desc: "Rigorous practice in Algebra, Calculus, Geometry, Probability & Trigonometry.",
    },
  ];

  const batches = [
    { title: "2-Year Integrated Program (Class 11 → 12)", desc: "Board + JEE integrated curriculum for long-term mastery." },
    { title: "1-Year Target Program (Class 12)", desc: "Intensive Class XII + JEE focused training." },
    { title: "Dropper/Repeater Batch", desc: "One-year focused program for XII pass-outs aiming for top ranks." },
    { title: "Crash Course (2–3 Months)", desc: "Revision-packed short program with mock tests." },
  ];

  const faqs = [
    {
      q: "Q1: Do you provide coaching for both JEE Mains and JEE Advanced?",
      a: "Yes — ASQUARE Academy provides complete coaching for both JEE Mains and JEE Advanced at the Nana Peth centre.",
    },
    {
      q: "Q2: Are small batches available?",
      a: "Yes — we maintain small batch sizes to ensure personalised attention and better doubt-solving.",
    },
    {
      q: "Q3: Do you offer dropper/repeater batches?",
      a: "Absolutely — dedicated dropper/repeater programs with intensive revision and regular mocks are available.",
    },
    {
      q: "Q4: What is the teaching approach at ASQUARE?",
      a: "We follow a concept-first approach: Learn → Practice → Assess → Revise, with continuous performance tracking.",
    },
    {
      q: "Q5: Can students from nearby areas join the Nana Peth branch?",
      a: "Yes — students from Bhavani Peth, Rasta Peth, Guruwar Peth, Camp, Sadashiv Peth and nearby localities commonly join our Nana Peth centre.",
    },
    {
      q: "Q6: Which subjects are taught?",
      a: "Physics, Chemistry and Mathematics (PCM) with chapter-wise practice and mock tests.",
    },
    {
      q: "Q7: Do you conduct regular tests and mock exams?",
      a: "Yes — weekly topic tests, chapter-wise practice and full-length mock exams are part of the curriculum.",
    },
    {
      q: "Q8: Why choose ASQUARE Nana Peth?",
      a: "Expert faculty, personalised mentoring, updated study material and consistent results make ASQUARE a trusted choice in Nana Peth.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>IIT JEE Coaching Classes & Institute in Nana Peth | ASQUARE Academy</title>
        <meta name="title" content="IIT JEE Coaching Classes & Institute in Nana Peth | ASQUARE Academy" />
        <meta
          name="description"
          content="Join ASQUARE Academy for top IIT JEE coaching in Nana Peth. Small batches, expert PCM faculty, mock tests & full JEE Mains/Advanced preparation."
        />
        <meta
          name="keywords"
          content={`IIT JEE coaching classes in nana peth,
Best IIT JEE Coaching in nana peth,
Top JEE Mains Coaching Classes nana peth,
IIT JEE Advanced Preparation nana peth,
JEE Advanced coaching classes in nana peth,
IIT JEE Classes in nana peth,
Best IIT JEE Classes in nana peth,
Top IIT JEE Classes in nana peth`}
        />

        <script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-Institute-nana-peth-pune#localbusiness",
      "name": "ASQUARE Academy - IIT JEE Coaching Classes in Nana Peth",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "telephone": "9766118877",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-Institute-nana-peth-pune",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Nana Peth",
        "addressRegion": "Maharashtra",
        "addressCountry": "India"
      },
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune"
      ],
      "description": "Best IIT JEE coaching classes in Nana Peth offering JEE Mains & Advanced preparation with expert faculty, small batches & regular mock tests."
    },
    {
      "@type": "EducationalOrganization",
      "name": "ASQUARE Academy",
      "url": "https://www.asquareclasses.com/",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "description": "Top IIT JEE coaching institute in Nana Peth providing personalised mentoring, concept-based learning and full exam preparation."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-Institute-nana-peth-pune#webpage",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-Institute-nana-peth-pune",
      "name": "IIT JEE Coaching Classes in Nana Peth | ASQUARE Academy",
      "description": "Top IIT JEE Classes in Nana Peth offering JEE Mains & Advanced modules with weekly tests, small batches & expert mentors."
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
          "name": "IIT JEE Coaching Classes in Nana Peth"
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
            "text": "Yes, ASQUARE Academy offers complete IIT JEE coaching in Nana Peth for both JEE Mains and JEE Advanced with structured learning modules."
          }
        },
        {
          "@type": "Question",
          "name": "Are small batches available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we maintain small batches for personalised guidance, making us one of the best IIT JEE coaching classes in Nana Peth."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer dropper/repeater batches?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, specialised dropper and repeater programs are conducted with rigorous practice, revision, and mock tests."
          }
        },
        {
          "@type": "Question",
          "name": "What is the teaching approach at ASQUARE?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our teaching approach includes concept-based sessions, weekly tests, doubt-clearing, performance tracking, and exam-focused strategies."
          }
        },
        {
          "@type": "Question",
          "name": "Can students from nearby areas join the Nana Peth branch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, students from nearby locations can easily join due to flexible batches and a supportive academic environment."
          }
        },
        {
          "@type": "Question",
          "name": "Which subjects are taught in your IIT JEE programs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We cover Physics, Chemistry, and Mathematics with expert faculty to build strong concepts and problem-solving ability."
          }
        },
        {
          "@type": "Question",
          "name": "Do you conduct regular tests and mock exams?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, chapter-wise tests, regular mock exams and detailed performance evaluations are conducted to boost student readiness."
          }
        },
        {
          "@type": "Question",
          "name": "Why is ASQUARE considered the best IIT JEE institute in Nana Peth?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Expert faculty, small batches, personalised support, and strong results make ASQUARE a leading IIT JEE institute in Nana Peth."
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
                Crack JEE Mains & Advanced with <span className="highlight-text text-warning">ASQUARE Academy – Nana Peth</span>
              </motion.h1>

              {/* <motion.h2>Trusted IIT-JEE Coaching for Serious Aspirants in Nana Peth</motion.h2> */}

              <p className="lead d-none d-md-block">
               Preparing for IIT JEE requires clarity, consistency, and expert guidance. At ASQUARE Academy, we provide the most trusted IIT JEE coaching classes in Nana Peth, Pune, designed to help students strengthen their concepts, master problem-solving, and perform confidently in the toughest engineering entrance exams.
Recognized among the Best IIT JEE Coaching in Nana Peth, we specialize in both JEE Mains and IIT JEE Advanced Preparation in Nana Peth, delivering results through structured learning, regular assessments, and personalized mentorship. Students from Nana Peth and nearby areas like Bhavani Peth, Rasta Peth, Guruwar Peth, Camp, and Sadashiv Peth already trust ASQUARE for their IIT JEE success.

              </p>

              <p className="lead d-block d-md-none">
             Preparing for IIT JEE requires clarity, consistency, and expert guidance. At ASQUARE Academy, we provide the most trusted IIT JEE coaching classes in Nana Peth, Pune, designed to help students strengthen their concepts, master problem-solving, and perform confidently in the toughest engineering entrance exams.
Recognized among the Best IIT JEE Coaching in Nana Peth, we specialize in both JEE Mains and IIT JEE Advanced Preparation in Nana Peth, delivering results through structured learning, regular assessments, and personalized mentorship. Students from Nana Peth and nearby areas like Bhavani Peth, Rasta Peth, Guruwar Peth, Camp, and Sadashiv Peth already trust ASQUARE for their IIT JEE success.


              </p>

              <a className="btn btn-warning btn-lg rounded-pill mt-3 shadow-lg">
                <Link to={'/'} className="nav-item nav-item-list text-warning">🚀 Enroll Now</Link>
              </a>
            </div>

            <div className="col-12 col-lg-4 col-md-12 mt-5 mt-md-0 text-center">
              <img src={sampleimg3} alt="ASQUARE Academy Nana Peth" className="img-fluid mx-auto fade-in imgsiz" style={{ objectFit: "contain", opacity: 0.95, borderRadius: "10px" }} />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Why Choose */}
      <section className="jee-why py-5">
        <div className="container">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">
            Why Choose <span className="text-primary">ASQUARE Academy</span> for IIT JEE in Nana Peth?
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
                Programs Offered at <span className="text-primary">ASQUARE – Nana Peth</span>
              </motion.h4>

              <p className="lead text-secondary">
                Our JEE programs are structured to build concepts, develop exam strategy, and ensure steady progress through tests and mentor feedback. Choose the track that fits your timeline — long-term foundation, intensive one-year, crash revisions, or repeater programs.
              </p>
            </div>

            <div className="col-lg-4 text-center order-1">
              <motion.img whileHover={{ scale: 1.03 }} src={sampleimg4} alt="Nana Peth JEE Coaching" className="img-fluid rounded-4 shadow-lg mx-auto d-block" style={{ width: "85%" }} />
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
            Key Features of <span className="highlight-text text-warning">Nana Peth</span>
          </motion.h3>

          <div className="row justify-content-center g-4">
            {[
              "Updated JEE study material (digital + print)",
              "Regular doubt-clearing sessions with faculty",
              "Performance analytics via online test series",
              "Workshops on accuracy, time management & exam strategy",
              "Consistently ranked among the Best IIT JEE Classes in Nana Peth and trusted by aspirants across Pune",
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
                ASQUARE Academy students from Nana Peth and surrounding areas have consistently achieved high ranks in JEE Mains & Advanced, securing seats in IITs, NITs and top engineering colleges — a testament to our proven teaching approach.
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
              <FAQAccordion faqs={faqs.slice(0, Math.ceil(faqs.length / 2))} accordionId="nanaPethFaqLeft" />
            </div>
            <div className="col-12 col-md-6">
              <FAQAccordion faqs={faqs.slice(Math.ceil(faqs.length / 2))} accordionId="nanaPethFaqRight" />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Final CTA */}
      <section id="enroll" className="jee-enroll-section py-5 text-center text-white">
        <div className="container">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
            Join ASQUARE Academy <span className="highlight-text text-warning">Nana Peth Today</span>
          </motion.h3>

          <p className="lead mb-4">
            Take the first step toward your IIT dream with ASQUARE Academy’s JEE coaching in Nana Peth — expert faculty, structured programs, and a strong track record of results.
          </p>

          <p><MapPin className="text-warning" /> Serving students from <b className="bld">Nana Peth, Bhavani Peth, Rasta Peth, Guruwar Peth, Camp, and Sadashiv Peth.</b></p>

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

export default IITJEENanaPeth;
