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

import sampleimg1 from '../../../Assets/SampleImages/Banners/Banners (6).jpeg';
import sampleimg11 from '../../../Assets/SampleImages/Banners/Banners (1).jpeg';
import sampleimg2 from '../../../Assets/SampleImages/MobBanners/MobBanner9.jpeg';
import sampleimg22 from'../../../Assets/SampleImages/MobBanners/MobBanner2.jpeg';

import sampleimg3 from "../../../Assets/SampleImages/AsquarePics/AsquarePics (9).jpeg";
import sampleimg4 from "../../../Assets/SampleImages/AsquarePics/AsquarePics (2).jpeg";
import sampleimg6 from "../../../Assets/SampleImages/AsquarePics/AsquarePics (4).jpeg";

import Form from "../../../Components/Form2/Form2.jsx";

const Reviews = React.lazy(() => import("../../../Components/Reviews/Reviews.jsx"));

function IITJEEKhadki() {
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
      desc: "Specialists in IIT-JEE, CET & NEET coaching with proven track record.",
    },
    {
      Icon: BookOpen,
      title: "Full PCM Syllabus",
      desc: "Physics, Chemistry & Mathematics aligned to the latest JEE structure.",
    },
    {
      Icon: Target,
      title: "Focused Guidance",
      desc: "Small batches at Khadki for personalised doubt-solving and mentoring.",
    },
    {
      Icon: BarChart,
      title: "Exam Practice & Analysis",
      desc: "Weekly tests, mock exams and detailed performance reviews.",
    },
    {
      Icon: Lightbulb,
      title: "Motivational Support",
      desc: "Confidence-building sessions, career guidance and stress-management.",
    },
  ];

  const subjects = [
    {
      title: "Physics",
      desc: "Strong theory base combined with numerical problem-solving practice.",
    },
    {
      title: "Chemistry",
      desc: "Complete coverage of Physical, Organic & Inorganic Chemistry.",
    },
    {
      title: "Mathematics",
      desc: "Intensive practice in Algebra, Calculus, Geometry, Probability & Trigonometry.",
    },
  ];

  const batches = [
    {
      title:
        "2-Year Integrated Course (10th → 12th Moving Students)",
      desc:
        "Board syllabus + JEE integrated program to build concepts from XI onwards.",
    },
    {
      title:
        "1-Year Intensive Course (11th → 12th Moving Students)",
      desc:
        "Fast-track JEE training synchronized with Class XII syllabus.",
    },
    {
      title: "Crash Course (2–3 Months)",
      desc: "Quick revision plus mock exam practice for last-mile preparation.",
    },
    {
      title:
        "Dropper/Repeater Batch (XII Pass-outs)",
      desc:
        "Dedicated one-year focused program for repeaters aiming for top ranks.",
    },
  ];

  const faqs = [
    {
      q: "Q1: Who can join ASQUARE Academy Khadki?",
      a: "Class XI, Class XII students and XII pass-outs preparing for JEE Main & Advanced.",
    },
    {
      q: "Q2: Which subjects are taught at Khadki?",
      a: "Physics, Chemistry & Mathematics (PCM) with chapter-wise practice and tests.",
    },
    {
      q: "Q3: Do you conduct mock exams?",
      a: "Yes — weekly practice tests and full-length JEE mock exams are included.",
    },
    {
      q: "Q4: What courses are available?",
      a: "We offer 2-Year, 1-Year, Crash Courses, and Dropper/Repeater batches.",
    },
    {
      q: "Q5: What is the batch size?",
      a: "We maintain small batch sizes to provide personalised mentoring and fast doubt resolution.",
    },
    {
      q: "Q6: Do parents receive progress updates?",
      a: "Yes — regular reports and parent–teacher meetings keep parents informed.",
    },
    {
      q: "Q7: Which areas does the Khadki branch serve?",
      a: "Convenient for students from Khadki, Camp, Shivajinagar, Yerwada, Bund Garden, and central Pune localities.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>IIT JEE Coaching Classes Institute in Khadki Pune | ASQUARE Academy</title>
        <meta name="title" content="IIT JEE Coaching Classes Institute in Khadki Pune | ASQUARE Academy" />
        <meta
          name="description"
          content="Join the best IIT JEE Coaching Classes Institute in Khadki Pune. Expert faculty, JEE Mains & Advanced preparation, mock tests, PCM guidance & top-rank focused training."
        />
        <meta
          name="keywords"
          content="IIT JEE coaching classes in khadki pune,
Best IIT JEE Coaching in khadki pune,
Top JEE Mains Coaching Classes khadki pune,
IIT JEE Advanced Preparation khadki pune,
JEE Advanced coaching classes in khadki pune,
IIT JEE Classes in khadki pune,
Best IIT JEE Classes in khadki pune,
Top IIT JEE Classes in khadki pune,
"
        />
        <script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "ASQUARE Academy - IIT JEE Coaching Classes Institute",
  "url": "https://www.asquareclasses.com/",
  "description": "ASQUARE Academy provides the best IIT JEE coaching classes in Khadki Pune, including JEE Mains coaching, JEE Advanced preparation, expert PCM faculty, mock tests, and top results.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Khadki",
    "addressLocality": "Pune",
    "addressRegion": "Maharashtra",
    "postalCode": "411003",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-XXXXXXXXXX",
    "contactType": "customer service"
  },
  "sameAs": [
    "https://www.facebook.com/asquareclasses",
    "https://www.instagram.com/asquareclasses"
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
                Ace JEE Main & Advanced with <span className="highlight-text text-warning">ASQUARE Academy Khadki</span>
              </motion.h1>

              <motion.h2>Advanced Coaching for Engineering Aspirants in Khadki</motion.h2>

              <p className="lead d-none d-md-block">
               Looking for IIT-JEE coaching classes in Khadki, Pune? At ASQUARE Academy, we focus on concept-based learning, exam strategy, and smart time management to help students crack competitive exams. Our Khadki branch guides aspirants preparing for IITs, NITs, IIITs, and top engineering universities with structured programs, expert mentoring, and consistent practice.
              </p>

              <p className="lead d-block d-md-none">
Looking for IIT-JEE coaching classes in Khadki, Pune? At ASQUARE Academy, we focus on concept-based learning, exam strategy, and smart time management to help students crack competitive exams. Our Khadki branch guides aspirants preparing for IITs, NITs, IIITs, and top engineering universities with structured programs, expert mentoring, and consistent practice.
              </p>

              <a className="btn btn-warning btn-lg rounded-pill mt-3 shadow-lg">
                <Link to={'/'} className="nav-item nav-item-list text-warning">🚀 Enroll Now</Link>
              </a>
            </div>

            <div className="col-12 col-lg-4 col-md-12 mt-5 mt-md-0 text-center">
              <img src={sampleimg3} alt="ASQUARE Academy Khadki" className="img-fluid mx-auto fade-in imgsiz" style={{ objectFit: "contain", opacity: 0.95, borderRadius: "10px" }} />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Why Choose */}
      <section className="jee-why py-5">
        <div className="container">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">
            Why <span className="text-primary">ASQUARE Academy</span> is the Right Choice in Khadki?
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
                Our JEE Coaching Programs
              </motion.h4>

              <p className="lead text-secondary">
                The Joint Entrance Examination demands clarity, discipline and regular practice. At ASQUARE Academy Khadki, our programs strengthen fundamentals, improve accuracy, and build exam confidence for both JEE Main & Advanced.
              </p>

         
            </div>

            <div className="col-lg-4 text-center order-1">
              <motion.img whileHover={{ scale: 1.03 }} src={sampleimg4} alt="Khadki JEE Coaching" className="img-fluid rounded-4 shadow-lg mx-auto d-block" style={{ width: "85%" }} />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Subjects + Course Options */}
      <section className="jee-gradient-section py-5 text-white">
        <div className="container">
          <motion.h4 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">
            Subjects Covered <span className="highlight-text text-warning"> &nbsp;&&nbsp; </span> Duration & Batch Options
          </motion.h4>

          <div className="row g-4">
            <div className="col-lg-6">
              <h4 className="highlight-text text-warning fw-bold mb-4 text-centerr">Subjects</h4>
              {subjects.map((sub, i) => (
                <div key={i} className="jee-subject-box mb-4 p-3 pb-4 pt-4 rounded-4 bg-white bg-opacity-10 backdrop-blur-md border border-light border-opacity-25">
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
                {[
                  "Daily lectures with topic-based assignments",
                  "One-to-one doubt-solving sessions",
                  "Weekly unit tests & full-length mock exams",
                  "Parent–teacher meetings for progress updates",
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
            Key Features of <span className="highlight-text text-warning">Khadki Branch</span>
          </motion.h3>

          <div className="row justify-content-center g-4">
            {[
              "Personalized mentoring with limited batch strength",
              "Updated JEE notes, test series & question banks",
              "Workshops on time management & exam strategies",
              "Regular performance reviews & parent updates",
              "Recognized as a trusted JEE coaching institute in Khadki, Pune",
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
                Results <span className="highlight-text text-warning">That Matter</span>
              </motion.h3>
              <p className="lead text-light">
                ASQUARE Academy has consistently produced IIT-JEE rankers and engineering toppers. The Khadki branch continues this legacy with systematic training, quality mentoring, and proven results.
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
              <FAQAccordion faqs={faqs.slice(0, Math.ceil(faqs.length / 2))} accordionId="khadkiFaqLeft" />
            </div>
            <div className="col-12 col-md-6">
              <FAQAccordion faqs={faqs.slice(Math.ceil(faqs.length / 2))} accordionId="khadkiFaqRight" />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Final CTA */}
      <section id="enroll" className="jee-enroll-section py-5 text-center text-white">
        <div className="container">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
            Join ASQUARE Academy <span className="highlight-text text-warning">Khadki Today</span>
          </motion.h3>

          <p className="lead mb-4">
            Take the first step toward your IIT dream with ASQUARE Academy’s JEE coaching in Khadki, Pune. With expert teachers, modern resources, and consistent results, we are your reliable partner for JEE, NEET & CET preparation.
          </p>

          <p><MapPin className="text-warning" /> Serving students from <b className="bld">Khadki, Camp, Shivajinagar, Yerwada, Bund Garden, and central Pune localities.</b></p>

          <a className="btn btn-lg btn-warning fw-bold mt-3 px-5 py-3 rounded-pill shadow-lg">
            <Link to={'/'} className="nav-item nav-item-list text-white">
              ⚡ Admissions Open – Limited seats available! <br></br>Contact us to secure your spot.
            </Link>
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default IITJEEKhadki;
