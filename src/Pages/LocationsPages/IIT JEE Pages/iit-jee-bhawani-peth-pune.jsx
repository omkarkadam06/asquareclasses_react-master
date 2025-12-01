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

import sampleimg1 from '../../../Assets/SampleImages/Banners/Banners (3).jpeg';
import sampleimg11 from '../../../Assets/SampleImages/Banners/Banners (8).jpeg';
import sampleimg2 from '../../../Assets/SampleImages/MobBanners/MobBanner8.jpeg';
import sampleimg22 from'../../../Assets/SampleImages/MobBanners/MobBanner2.jpeg';

import sampleimg3 from "../../../Assets/SampleImages/AsquarePics/AsquarePics (9).jpeg";
import sampleimg4 from "../../../Assets/SampleImages/AsquarePics/AsquarePics (2).jpeg";
import sampleimg6 from "../../../Assets/SampleImages/AsquarePics/AsquarePics (4).jpeg";

import Form from "../../../Components/Form2/Form2.jsx";

const Reviews = React.lazy(() => import("../../../Components/Reviews/Reviews.jsx"));

function IITJEEBhawaniPeth() {
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
      desc: "Flexible offline/online options with academic mentorship for boards + JEE balance.",
    },
        {
      Icon: Lightbulb,
      title: "Academic Mentorship",
      desc: "Helping students maintain a balance between board exams and JEE goals.",
    },
  ];

  const subjects = [
    {
      title: "Physics",
      desc: "Extensive coaching in Physics to build conceptual clarity and application skills.",
    },
    {
      title: "Chemistry",
      desc: "In-depth coverage of Physical, Organic & Inorganic Chemistry with solved examples.",
    },
    {
      title: "Mathematics",
      desc: "Rigorous practice in Algebra, Geometry, Calculus, Probability & advanced problem solving.",
    },
  ];

  const batches = [
    { title: "2-Year Integrated Course (for Class 11 students)", desc: "" },
    { title: "1-Year Target Course (for Class 12 students)", desc: "" },
    { title: "Dropper/Repeater Program", desc: "" },
    { title: "Short-Term Crash Course (2–3 months intensive training)", desc: "" },
  ];

  const faqs = [
    {
      q: "Q1: Does ASQUARE Academy train students for both JEE Mains and Advanced exams?",
      a: "Yes, ASQUARE provides complete coaching for both JEE Mains and JEE Advanced with structured modules and expert faculty. It is widely recognized as the Best IIT JEE Coaching in Bhawani-Peth-Pune.",
    },
    {
      q: "Q2: Are individual doubt-solving sessions available?",
      a: "Absolutely. Students get dedicated one-on-one doubt-clearing support for deeper concept understanding, making ASQUARE one of the Top IIT JEE Classes in Bhawani-Peth-Pune.",
    },
    {
      q: "Q3: Do you conduct special classes for dropper students?",
      a: "Yes, ASQUARE runs focused dropper/repeater batches designed for targeted IIT JEE Advanced Preparation in Bhawani-Peth-Pune, helping students strengthen weak areas and improve rank potential.",
    },
    {
      q: "Q4: How is the teaching approach different from other institutes?",
      a: "The academy uses a concept-driven approach with regular tests, practice sheets, and in-depth analysis. This modern methodology places ASQUARE among the Top JEE Mains Coaching Classes in Bhawani-Peth-Pune.",
    },
    {
      q: "Q5: Are mock tests conducted regularly?",
      a: "Yes, weekly mock tests and full-length JEE simulations are part of the curriculum, supporting strong performance in JEE Advanced coaching classes in Bhawani-Peth-Pune.",
    },
    {
      q: "Q6: What subjects are covered in the IIT JEE curriculum?",
      a: "Students receive extensive coaching in Physics, Chemistry, and Mathematics, making the center a trusted name for IIT JEE Classes in Bhawani-Peth-Pune.",
    },
    {
      q: "Q7: Do you provide study material and revision notes?",
      a: "Yes, all students get updated study material, revision sheets, and solved examples. This academic support contributes to ASQUARE being the Best IIT JEE Classes in Bhawani-Peth-Pune.",
    },
    {
      q: "Q8: Can students from nearby locations like Rasta Peth and Guruwar Peth join the Bhawani Peth branch?",
      a: "Definitely. The Bhawani Peth center is easily accessible from Rasta Peth, Guruwar Peth, and nearby areas, making it ideal for students seeking IIT JEE coaching classes in Bhawani-Peth-Pune.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>IIT JEE Coaching Classes Institute in Bhawani Peth Pune | ASQUARE</title>
        <meta
          name="title"
          content="IIT JEE Coaching Classes Institute in Bhawani Peth Pune | ASQUARE"
        />
        <meta
          name="description"
          content="Join the Best IIT JEE Coaching Classes in Bhawani Peth Pune with expert faculty, PCM training, mock tests & doubt-solving. Top JEE Mains & Advanced preparation institute."
        />
        <meta
          name="keywords"
          content="IIT JEE coaching classes in bhawani-peth-pune,
Best IIT JEE Coaching in bhawani-peth-pune,
Top JEE Mains Coaching Classes bhawani-peth-pune,
IIT JEE Advanced Preparation bhawani-peth-pune,
JEE Advanced coaching classes in bhawani-peth-pune,
IIT JEE Classes in bhawani-peth-pune,
Best IIT JEE Classes in bhawani-peth-pune,
Top IIT JEE Classes in bhawani-peth-pune,
"
        />
        <script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-bhawani-peth-pune#localbusiness",
      "name": "ASQUARE Academy - IIT JEE Coaching Classes in Bhawani Peth Pune",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-bhawani-peth-pune",
      "telephone": "+919766118877",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Bhawani Peth",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411042",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune/"
      ],
      "description": "Best IIT JEE Coaching Classes in Bhawani Peth Pune for JEE Mains & Advanced with expert faculty, mock exams, PCM coaching, and individual doubt-solving."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-bhawani-peth-pune#webpage",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-bhawani-peth-pune",
      "name": "IIT JEE Coaching Classes Institute in Bhawani Peth Pune",
      "description": "Top IIT JEE Classes in Bhawani Peth Pune offering JEE Mains & Advanced preparation, mock tests, PCM coaching & personalized mentoring.",
      "publisher": {
        "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-bhawani-peth-pune#localbusiness"
      }
    },
    {
      "@type": "EducationalOrganization",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-bhawani_peth-pune#educational",
      "name": "ASQUARE Academy",
      "url": "https://www.asquareclasses.com/",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "description": "Leading institute offering IIT JEE Coaching Classes in Bhawani Peth Pune including JEE Mains and Advanced preparation."
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-bhawani-peth-pune#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does ASQUARE Academy train students for both JEE Mains and Advanced exams?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, ASQUARE provides complete coaching for both JEE Mains and JEE Advanced, making it the Best IIT JEE Coaching in Bhawani-Peth-Pune."
          }
        },
        {
          "@type": "Question",
          "name": "Are individual doubt-solving sessions available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, one-on-one doubt-clearing sessions are available, making ASQUARE among the Top IIT JEE Classes in Bhawani-Peth-Pune."
          }
        },
        {
          "@type": "Question",
          "name": "Do you conduct special classes for dropper students?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, dedicated dropper/repeater batches are available for focused IIT JEE Advanced Preparation in Bhawani-Peth-Pune."
          }
        },
        {
          "@type": "Question",
          "name": "How is the teaching approach different from other institutes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE uses a concept-driven approach with mock tests, practice sheets, and in-depth analysis, ranking it among Top JEE Mains Coaching Classes in Bhawani-Peth-Pune."
          }
        },
        {
          "@type": "Question",
          "name": "Are mock tests conducted regularly?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, weekly mock tests and JEE simulations help students excel in JEE Advanced coaching classes in Bhawani-Peth-Pune."
          }
        },
        {
          "@type": "Question",
          "name": "What subjects are covered in the IIT JEE curriculum?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students are trained in Physics, Chemistry, and Mathematics, making ASQUARE a trusted center for IIT JEE Classes in Bhawani-Peth-Pune."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide study material and revision notes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, updated study material, revision sheets, and solved examples are provided, supporting ASQUARE as the Best IIT JEE Classes in Bhawani-Peth-Pune."
          }
        },
        {
          "@type": "Question",
          "name": "Can students from nearby locations like Rasta Peth and Guruwar Peth join?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, the Bhawani Peth center is easily accessible from Rasta Peth and Guruwar Peth for students seeking IIT JEE Coaching Classes in Bhawani-Peth-Pune."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-bhawani-peth-pune#breadcrumbs",
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
          "item": "https://www.asquareclasses.com/jee-coaching-classes"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Bhawani Peth Pune"
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
                Achieve Your IIT JEE Goals with{" "}
                <span className="highlight-text text-warning">ASQUARE Academy – Bhawani Peth</span>
              </motion.h1>

              {/* <motion.h2>Why Choose ASQUARE Academy for IIT JEE Preparation in Bhawani Peth?</motion.h2> */}

              <p className="lead d-none d-md-block">
                Cracking the IIT JEE exam takes determination, a clear strategy, and the right mentors. At ASQUARE Academy, we offer one of the most result-oriented IIT JEE coaching programs in Bhawani Peth, Pune. Our mission is to help students build a strong conceptual foundation, sharpen their analytical thinking, and develop exam-ready confidence. Counted among the leading IIT JEE institutes in Bhawani Peth, ASQUARE Academy provides dedicated coaching for both JEE Mains and Advanced, ensuring every student receives comprehensive guidance. <br></br>
             Counted among the leading IIT JEE institutes in Bhawani Peth, ASQUARE Academy provides dedicated coaching for both JEE Mains and Advanced, ensuring every student receives comprehensive guidance. Learners from Bhawani Peth, Rasta Peth, Guruwar Peth, Shukrawar Peth, Lohiyanagar, and Camp rely on ASQUARE to turn their engineering dreams into reality.
              </p>

              <p className="lead d-block d-md-none">
                              Cracking the IIT JEE exam takes determination, a clear strategy, and the right mentors. At ASQUARE Academy, we offer one of the most result-oriented IIT JEE coaching programs in Bhawani Peth, Pune. Our mission is to help students build a strong conceptual foundation, sharpen their analytical thinking, and develop exam-ready confidence. Counted among the leading IIT JEE institutes in Bhawani Peth, ASQUARE Academy provides dedicated coaching for both JEE Mains and Advanced, ensuring every student receives comprehensive guidance. <br></br>
             Counted among the leading IIT JEE institutes in Bhawani Peth, ASQUARE Academy provides dedicated coaching for both JEE Mains and Advanced, ensuring every student receives comprehensive guidance. Learners from Bhawani Peth, Rasta Peth, Guruwar Peth, Shukrawar Peth, Lohiyanagar, and Camp rely on ASQUARE to turn their engineering dreams into reality.
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
            Why Choose  <span className="text-primary">ASQUARE Academy</span> for IIT JEE Preparation in Bhawani Peth?
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
                Programs Offered at <span className="text-primary">ASQUARE – Bhawani Peth</span>
              </motion.h4>

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
                ASQUARE Teaching Philosophy
              </motion.h3>

              <div className="row g-4 justify-content-center">
                {[
                  "Concept → ",
                  "Application →",
                  "Evaluation →",
                  "Revision",
                ].map((step, i) => (
                  <div key={i} className="col-lg-3 col-6">
                    <motion.div whileHover={{ y: -5 }} className="method-card p-4 bg-white rounded-4 shadow-sm h-100 text-center">
                      <p className="text-muted small mb-0">{step}</p>
                    </motion.div>
                  </div>
                ))}
              </div> <br></br>
             <p className="lead d-none d-md-block">We believe in a progressive learning cycle that ensures deep understanding, consistent practice, and confident performance.</p>
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Highlights */}
      <section className="jee-highlights py-5 text-white">
        <div className="container text-center">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
            Key Highlights of <span className="highlight-text text-warning">Bhawani Peth</span>
          </motion.h3>

          <div className="row justify-content-center g-4">
            {[
              "• Latest and well-structured JEE study material (digital + printed)",
              "• Doubt-clearing sessions after every major topic",
              "• Smart performance analytics and personalized feedback",
              "• Workshops focused on accuracy, speed, and strategy",
              "• Widely recognized as one of the Top IIT JEE Coaching Centers in Bhawani Peth",
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
                Our Students’ <span className="highlight-text text-warning">Achievements</span>
              </motion.h3>
              <p className="lead text-light">
                Students from Bhawani Peth and nearby areas have delivered outstanding results in JEE Mains and Advanced, earning seats in IITs, NITs, and top engineering colleges across India. The consistent success of our batches makes ASQUARE a trusted name for IIT JEE preparation in Pune.
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
            Join ASQUARE Academy <span className="highlight-text text-warning">Bhawani Peth Today</span>
          </motion.h3>

          <p className="lead mb-4">
            Searching for the top IIT JEE coaching in Bhawani Peth, Pune? Your search ends here! ASQUARE Academy offers structured programs, expert mentoring, and a proven track record of success.
          </p>

          <p><MapPin className="text-warning" /> Easily accessible to students from <b className="bld">Bhawani Peth, Rasta Peth, Guruwar Peth, Shukrawar Peth, Lohiyanagar, and Camp.</b></p>

          <a className="btn btn-lg btn-warning fw-bold mt-3 px-5 py-3 rounded-pill shadow-lg">
            <Link to={'/'} className="nav-item nav-item-list text-white">
              ⚡ Admissions Open – Book Your Seat Now!
              {/* <p className="text-warning">Limited seats available!</p> */}
            </Link>
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default IITJEEBhawaniPeth;
