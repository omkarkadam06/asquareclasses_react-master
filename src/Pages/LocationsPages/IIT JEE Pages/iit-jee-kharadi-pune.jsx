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

import sampleimg2 from '../../../Assets/SampleImages/MobBanners/MobBanner5.jpeg';
import sampleimg22 from '../../../Assets/SampleImages/MobBanners/MobBanner2.jpeg';
import sampleimg1 from '../../../Assets/SampleImages/Banners/Banners (8).jpeg';
import sampleimg11 from '../../../Assets/SampleImages/Banners/Banners (4).jpeg';

import sampleimg3 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (9).jpeg';
import sampleimg4 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (2).jpeg';
import sampleimg6 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (4).jpeg';

import Form from '../../../Components/Form2/Form2.jsx';

const Reviews = React.lazy(() => import("../../../Components/Reviews/Reviews.jsx"));

function IITJEEKharadi() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const whyChoose = [
    { Icon: Users, title: "Qualified Faculty Experts", desc: "Specialists in IIT-JEE, MHT-CET & NEET coaching." },
    { Icon: BookOpen, title: "Comprehensive PCM Coverage", desc: "Physics, Chemistry & Mathematics aligned with latest JEE syllabus." },
    { Icon: Target, title: "Focused Mentorship", desc: "Small batch sizes for effective doubt-solving." },
    { Icon: BarChart, title: "Assessment System", desc: "Weekly practice tests, assignments & full-length mock exams." },
    { Icon: Lightbulb, title: "Student Support & Guidance", desc: "Motivation, career counselling & stress-management sessions." },
  ];

  const subjects = [
    { title: "Physics", desc: "In-depth concepts with application-based learning and numerical practice." },
    { title: "Chemistry", desc: "Complete coverage of Physical, Organic & Inorganic chemistry with solved examples." },
    { title: "Mathematics", desc: "Advanced practice in Algebra, Trigonometry, Calculus, Geometry & Probability." },
  ];

  const batches = [
    { title: "2-Year Foundation Program (10th → 12th Moving Students)", desc: "XI + XII Boards + JEE integrated program." },
    { title: "1-Year Intensive Program (11th → 12th Moving Students)", desc: "XII + JEE fast-track coaching." },
    { title: "Crash Course (2–3 Months)", desc: "Quick revision & exam practice." },
    { title: "Dropper/Repeater Batch (XII Pass-outs)", desc: "One-year dedicated JEE preparation." },
  ];

  const faqs = [
    { q: "Q1: Who can join ASQUARE Academy Kharadi?", a: "Students of Class XI, XII, and XII pass-outs preparing for JEE Main & Advanced." },
    { q: "Q2: Which subjects are taught?", a: "Physics, Chemistry & Mathematics (PCM) with chapter-wise assignments and practice tests." },
    { q: "Q3: Do you conduct mock exams?", a: "Yes — weekly practice tests and full-length JEE mock exams are included to build exam temperament." },
    { q: "Q4: What courses are available?", a: "We offer 2-Year, 1-Year, Crash Courses & Dropper/Repeater Batches." },
    { q: "Q5: How many students are in a batch?", a: "We maintain small batch sizes to ensure personalized attention and faster doubt resolution." },
    { q: "Q6: Do parents receive performance updates?", a: "Yes — regular PTMs and detailed progress reports are shared with parents." },
    { q: "Q7: Which areas does the Kharadi branch serve?", a: "Convenient for students from Kharadi, Viman Nagar, Wagholi, Magarpatta, Hadapsar and nearby Pune localities." },
  ];

  return (
    <>
      <Helmet>
        <title>IIT JEE Coaching Classes Institute in Kharadi Pune | ASQUARE Academy</title>
        <meta name="title" content="IIT JEE Coaching Classes Institute in Kharadi Pune | ASQUARE Academy" />
        <meta
          name="description"
          content="Top IIT JEE coaching classes institute in Kharadi Pune for JEE Mains & Advanced. Small batches, expert PCM faculty, mock tests & result-focused training."
        />
        <meta
          name="keywords"
          content="IIT JEE coaching classes in Kharadi pune,
Best IIT JEE Coaching in Kharadi pune,
Top JEE Mains Coaching Classes Kharadi pune,
IIT JEE Advanced Preparation Kharadi pune,
JEE Advanced coaching classes in Kharadi pune,
IIT JEE Classes in Kharadi pune,
Best IIT JEE Classes in Kharadi pune,
Top IIT JEE Classes in Kharadi pune,
"
        />
        <script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-kharadi-pune#localbusiness",
      "name": "ASQUARE Academy - IIT JEE Coaching Classes Institute Kharadi Pune",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-kharadi-pune",
      "telephone": "+919766118877",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Kharadi",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411014",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune/"
      ],
      "description": "Best IIT JEE coaching classes in Kharadi Pune for JEE Mains & Advanced preparation with expert PCM faculty and mock tests."
    },
    {
      "@type": "EducationalOrganization",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-kharadi-pune#eduorg",
      "name": "ASQUARE Academy Kharadi",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-kharadi-pune",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "description": "Top IIT JEE Coaching Institute in Kharadi Pune offering JEE Mains coaching, JEE Advanced preparation, PCM classes, mock exams, and dropper batches."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-kharadi-pune#webpage",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-kharadi-pune",
      "name": "IIT JEE Coaching Classes Institute in Kharadi Pune",
      "description": "IIT JEE coaching classes in Kharadi Pune with expert PCM faculty, mock tests, small batches, and comprehensive JEE Mains & Advanced training."
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-kharadi-pune#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can join ASQUARE Academy Kharadi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students of Class XI, XII, and XII pass-outs preparing for JEE Main & Advanced."
          }
        },
        {
          "@type": "Question",
          "name": "Which subjects are taught?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Physics, Chemistry, and Mathematics (PCM)."
          }
        },
        {
          "@type": "Question",
          "name": "Do you conduct mock exams?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, weekly practice tests and full-length JEE mock exams are included."
          }
        },
        {
          "@type": "Question",
          "name": "What courses are available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer 2-Year, 1-Year, Crash Courses, and Dropper Batches."
          }
        },
        {
          "@type": "Question",
          "name": "How many students are in a batch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Small batch sizes are maintained for personalized attention."
          }
        },
        {
          "@type": "Question",
          "name": "Do parents receive performance updates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, through parent-teacher meetings and detailed progress reports."
          }
        },
        {
          "@type": "Question",
          "name": "Which areas does the Kharadi branch serve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We serve students from Kharadi, Viman Nagar, Wagholi, Magarpatta, Hadapsar, and nearby Pune areas."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-kharadi-pune#breadcrumbs",
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
          "item": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-kharadi-pune"
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
              {[sampleimg2, sampleimg22].map(
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

      <hr></hr>
      {/* Hero Section */}
      <section className="jee-hero-section text-white d-flex align-items-center bg-transparent">
        <div className="container py-5">
          <div className="row align-items-center">

            <div className="col-12 col-lg-8 col-md-12 text-center text-md-start">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="fw-bold display-6 mb-3"
              >
                Crack IIT-JEE with Expert Coaching at <span className="highlight-text text-warning">ASQUARE Academy Kharadi</span>
              </motion.h1>
   <motion.h2>Premier Destination for JEE Preparation in Kharadi</motion.h2>

              <p className="lead d-none d-md-block">
                Looking for IIT-JEE coaching classes in Kharadi, Pune? At ASQUARE Academy, we provide concept-based teaching, personalized mentoring, and exam-focused training to help students achieve success in JEE Main & Advanced. Our Kharadi branch focuses on developing strong subject foundations, speed and accuracy, and confidence-building strategies, preparing aspirants for IITs, NITs, IIITs, and top engineering colleges across India.
              </p>

              <p className="lead d-block d-md-none">
              Looking for IIT-JEE coaching classes in Kharadi, Pune? At ASQUARE Academy, we provide concept-based teaching, personalized mentoring, and exam-focused training to help students achieve success in JEE Main & Advanced. Our Kharadi branch focuses on developing strong subject foundations, speed and accuracy, and confidence-building strategies, preparing aspirants for IITs, NITs, IIITs, and top engineering colleges across India.
              </p>

              <a className="btn btn-warning btn-lg rounded-pill mt-3 shadow-lg">
                <Link
                  to={'/'}
                  className="nav-item nav-item-list text-warning"
                >
                  🚀 Enroll Now
                </Link>
              </a>
            </div>

            {/* Right Side: Image */}
            <div className="col-12 col-lg-4 col-md-12 mt-5 mt-md-0 text-center">
              <img
                src={sampleimg3}
                alt="ASQUARE Academy Kharadi"
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

      {/* Why Choose */} 
      <section className="jee-why py-5 ">
        <div className="container">
          <motion.h3
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="fw-bold display-6 mb-3 text-center"
          >Why <span className="text-primary">ASQUARE Academy</span> is Best for Students in Kharadi?</motion.h3>

          <div className="row g-4 justify-center" style={{ justifyContent: "center" }}>
            {whyChoose.map((item, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <motion.div whileHover={{ scale: 1.05 }} className="jee-feature-card shadow-lg rounded-4 p-4 h-100" >
                  <item.Icon size={40} className="mb-3 text-warning" />
                  <h5 className="fw-bold mb-2">{item.title}</h5>
                  <p className="text-muted">{item.desc}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <hr></hr>

      {/* Programs */}
      <section className="jee-programs py-5 bg-light">
        <div className="container">
          <div className="row align-items-center g-5">

            <div className="col-lg-8 text-center text-lg-start order-2">
              <motion.h4
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="fw-bold display-6 mb-3 text-centerr"
              >Courses Designed for <span className="text-primary">IIT-JEE Success</span> </motion.h4>

              <p className="lead text-secondary">
                The Joint Entrance Examination requires clear concepts, consistent practice and exam readiness. At ASQUARE Academy Kharadi, our programs are crafted to strengthen fundamentals, improve problem-solving and enhance exam strategies for both JEE Main & Advanced.
              </p>
            </div>
            <div className="col-lg-4 text-center  order-1">
              <motion.img
                whileHover={{ scale: 1.03 }}
                src={sampleimg4}
                alt="JEE Coaching Kharadi"
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
            Subjects Offered at Kharadi
            <span className="highlight-text text-warning">
              &nbsp;&&nbsp;
            </span>
            Course Options & Duration
          </motion.h4>
          <br />

          <div className="row g-4">
            <div className="col-lg-6">
              <h4 className="highlight-text text-warning fw-bold mb-4 text-centerr">Subjects Offered</h4>
              {subjects.map((sub, i) => (
                <div key={i} className="jee-subject-box mb-4 p-3 pb-4 pt-4  rounded-4 bg-white bg-opacity-10 backdrop-blur-md border border-light border-opacity-25">
                  <h5 className="fw-semibold">{sub.title}</h5>
                  <p className="small mb-0">{sub.desc}</p>
                </div>
              ))}
            </div>
            <div className="col-lg-6">
              <h4 className="highlight-text text-warning fw-bold mb-4 text-centerr">Course Options & Duration</h4>
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
      <hr></hr>

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
              >Teaching Methodology at <span className="text-primary">Kharadi</span> </motion.h3>

              <div className="row g-4 justify-content-center">
                {[
                  "Daily classroom lectures with topic-based assignments",
                  "One-to-one doubt-solving sessions",
                  "Weekly unit tests & full-length JEE mock exams",
                  "Parent–teacher meetings for consistent performance tracking"
                ].map((text, i) => (
                  <div key={i} className="col-lg-3 col-6">
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="method-card p-4 bg-white rounded-4 shadow-sm h-100 text-center"
                    >
                      <p className="text-muted small mb-0">{text}</p>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr></hr>

      {/* Key Features Section */}
      <section className="jee-highlights py-5 text-white">
        <div className="container text-center">
          <motion.h3
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="fw-bold display-6 mb-3"
          >
            Key Features of <span className="highlight-text text-warning">ASQUARE Kharadi</span>
          </motion.h3>

          <div className="row justify-content-center g-4">
            {[
              "Small batch size for personalised learning",
              "Updated IIT-JEE notes, test series & question banks",
              "Special workshops on time management & exam strategies",
              "Regular student progress monitoring with parent updates",
              "Recognized as a trusted IIT-JEE coaching institute in Kharadi"
            ].map((text, i) => (
              <motion.div key={i} className="col-md-5 col-lg-4 col-6" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <div className="highlight-card shadow-lg rounded-4 p-4 bg-white bg-opacity-10 backdrop-blur-md border border-light border-opacity-25">
                  <div className="icon-circle mx-auto mb-3"><h2>🎓</h2></div>
                  <p className="fw-semibold text-light ">{text}</p>
                </div>
              </motion.div>
            ))}
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
            <div className="col-lg-8 text-center text-lg-start">
              <motion.h3
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="fw-bold display-6 mb-3"
              >
                Results That <span className="highlight-text text-warning">Define Excellence</span>
              </motion.h3>
              <p className="lead text-light">
                ASQUARE Academy has consistently produced JEE Main & Advanced qualifiers and top rankers. The Kharadi branch continues this success by offering quality teaching, expert mentoring, and result-driven coaching.
              </p>
            </div>

            <div className="col-lg-4 text-center">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={sampleimg6}
                alt="Success Stories Kharadi"
                className="img-fluid rounded-4 shadow-lg mx-auto d-block"
                style={{ width: "80%" }}
              />
            </div>
          </div>
        </div>
      </section>

      <hr></hr>

      {/* FAQ */}
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
            <div className="col-12 col-md-6 mb-4 mb-md-0 ">
              <FAQAccordion
                faqs={faqs.slice(0, Math.ceil(faqs.length / 2))}
                accordionId="kharadiFaqLeft"
              />
            </div>

            <div className="col-12 col-md-6">
              <FAQAccordion
                faqs={faqs.slice(Math.ceil(faqs.length / 2))}
                accordionId="kharadiFaqRight"
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
           Join ASQUARE Academy <span className="highlight-text text-warning">Kharadi Today</span>
          </motion.h3>
          <p className="lead mb-4">
            Start your IIT-JEE journey with ASQUARE Academy’s expert coaching in Kharadi. With skilled faculty, modern resources, and a proven track record, we are your reliable choice for JEE, CET & NEET coaching.
          </p>
          <p><MapPin className="text-warning" /> <b className="bld">Serving students from Kharadi, Viman Nagar, Wagholi, Magarpatta, Hadapsar, and nearby Pune areas.</b></p>
          <a className="btn btn-lg btn-warning fw-bold mt-3 px-5 py-3 rounded-pill shadow-lg">
            <Link
              to={'/'}
              className="nav-item nav-item-list text-white"
            >
              ⚡ Admissions Open – Limited seats available! Contact us today to enroll.
            </Link>
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default IITJEEKharadi;
