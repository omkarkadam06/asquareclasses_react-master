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
} from "lucide-react";
import Navbar from "../../../Components/Navbar/Navbar.jsx";
import Header from "../../../Components/Header/Header.jsx";
import MobileForm from "../../../Components/Mobileform/MobileForm.jsx";
import Footer from "../../../Components/Footer/Footer.jsx";
import FAQAccordion from "../../LocationsPages/neet-pages/components/FAQAccordion.jsx";
import "../../../App.css";
import "./iit-jee.css";
import Loading from "../../Loading.jsx";

import sampleimg1 from '../../../Assets/SampleImages/Banners/Banners (7).jpeg';
import sampleimg11 from '../../../Assets/SampleImages/Banners/Banners (1).jpeg';
import sampleimg2 from '../../../Assets/SampleImages/MobBanners/MobBanner7.jpeg';
import sampleimg22 from'../../../Assets/SampleImages/MobBanners/MobBanner1.jpeg';

import sampleimg3 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (9).jpeg';
import sampleimg4 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (2).jpeg';
import sampleimg6 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (4).jpeg';

import Form from '../../../Components/Form2/Form2.jsx';
const Reviews = React.lazy(() => import("../../../Components/Reviews/Reviews.jsx"));

function IITJEELohegaon() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const whyChoose = [
    { Icon: Users, title: "Experienced Mentors", desc: "Faculty with deep expertise in JEE, CET & NEET preparation." },
    { Icon: BookOpen, title: "Comprehensive Coverage", desc: "Full JEE Main & Advanced syllabus in Physics, Chemistry & Mathematics." },
    { Icon: Target, title: "Focused Guidance", desc: "Limited batch strength for effective interaction and personal attention." },
    { Icon: BarChart, title: "Regular Assessments", desc: "Weekly practice tests, analysis, and performance tracking." },
    { Icon: Lightbulb, title: "Motivational Support", desc: "Career-oriented mentoring to build exam confidence." },
  ];

  const subjects = [
    { title: "Physics", desc: "Conceptual understanding, numerical problem-solving & application-based learning" },
    { title: "Chemistry", desc: "In-depth learning of Physical, Organic & Inorganic Chemistry with practice drills" },
    { title: "Mathematics", desc: "Advanced practice in Algebra, Calculus, Coordinate Geometry, Probability & Trigonometry" },
  ];

  const batches = [
    { title: "2-Year Program (10th → 12th)", desc: "Foundation + JEE Main & Advanced with XI & XII Board prep" },
    { title: "1-Year Program (11th → 12th)", desc: "Focused JEE training alongside Class XII syllabus" },
    { title: "Crash Course", desc: "Short-term intensive revision with problem-solving practice" },
    { title: "Dropper/Repeater Batch", desc: "1-year specialized coaching for Class XII pass-outs" },
  ];

  const faqs = [
    { q: "Who can join IIT-JEE training at ASQUARE Academy Lohegaon?", a: "Class XI, XII, and XII pass-outs preparing for JEE Main & Advanced can enroll." },
    { q: "Which subjects are taught?", a: "Physics, Chemistry & Mathematics (PCM) aligned with the JEE syllabus." },
    { q: "Are there regular tests?", a: "Yes, chapter-wise assessments and full-length JEE mock tests are included." },
    { q: "What courses are available?", a: "We offer 2-Year Programs, 1-Year Programs, Crash Courses & Dropper Batches." },
    { q: "What is the batch size?", a: "We maintain limited students per batch for better focus." },
    { q: "Do parents get updates?", a: "Yes, parents receive progress reports & periodic parent–teacher interactions." },
    { q: "Where is the institute located?", a: "Our Lohegaon center is easily accessible from Dhanori, Viman Nagar, Alandi, Vishrantwadi, Yerwada, and Tingre Nagar." },
  ];

  return (
    <>
      <Helmet>
        <title>Best IIT JEE Coaching Classes in Lohegaon Pune | ASQUARE Academy</title>
        <meta name="title" content="Best IIT JEE Coaching Classes in Lohegaon Pune | ASQUARE Academy" />
        <meta name="description" content="ASQUARE Academy offers top IIT JEE coaching in Lohegaon Pune with expert faculty, PCM training, mock tests, and structured programs for JEE Main & Advanced aspirants." />
        <meta name="keywords" content="IIT JEE coaching classes in lohegaon Pune,
Best IIT JEE Coaching in lohegaon Pune,
Top JEE Mains Coaching Classes lohegaon Pune,
IIT JEE Advanced Preparation lohegaon Pune,
JEE Advanced coaching classes in lohegaon Pune,
IIT JEE Classes in lohegaon Pune,
Best IIT JEE Classes in lohegaon Pune,
Top IIT JEE Classes in lohegaon Pune,
IIT JEE Institute coaching in lohegaon Pune,
IIT JEE Institute classes in lohegaon Pune,
" />

        <script type="application/ld+json">{`
{
"@context": "https://schema.org",
"@graph": [
{
"@type": "LocalBusiness",
"@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-lohegaon-pune#localbusiness",
"name": "ASQUARE Academy - IIT JEE Coaching in Lohegaon Pune",
"url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-lohegaon-pune",
"logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
"image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
"telephone": "+91-9766118877",
"address": {
"@type": "PostalAddress",
"streetAddress": "Lohegaon",
"addressLocality": "Pune",
"addressRegion": "Maharashtra",
"postalCode": "411047",
"addressCountry": "IN"
},
"sameAs": [
"https://www.instagram.com/asquarepune",
"https://www.facebook.com/asquarepune/"
],
"description": "Best IIT JEE Coaching Classes in Lohegaon Pune offering expert training for JEE Main & Advanced with PCM faculty, mock tests, & structured learning programs."
},

{
"@type": "WebPage",
"@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-lohegaon-pune#webpage",
"url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-lohegaon-pune",
"name": "Best IIT JEE Coaching Classes in Lohegaon Pune | ASQUARE Academy",
"description": "Top IIT JEE Classes in Lohegaon Pune with expert faculty for JEE Main & Advanced.",
"breadcrumb": {
  "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-lohegaon-pune#breadcrumb"
}
},

{
"@type": "EducationalOrganization",
"@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-lohegaon-pune#educational",
"name": "ASQUARE Academy Lohegaon",
"url": "https://www.asquareclasses.com/",
"logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
"sameAs": [
"https://www.instagram.com/asquarepune",
"https://www.facebook.com/asquarepune/"
],
"description": "Leading IIT JEE training institute in Lohegaon Pune offering JEE Main & Advanced programs."
},

{
"@type": "BreadcrumbList",
"@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-lohegaon-pune#breadcrumb",
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
"item": "https://www.asquareclasses.com/"
},
{
"@type": "ListItem",
"position": 3,
"name": "Lohegaon Pune",
"item": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-lohegaon-pune"
}
]
},

{
"@type": "FAQPage",
"@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-lohegaon-pune#faq",
"mainEntity": [
{
"@type": "Question",
"name": "Who can join IIT-JEE training at ASQUARE Academy Lohegaon?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Students of Class XI, XII, and XII pass-outs preparing for JEE Main & Advanced can enroll."
}
},
{
"@type": "Question",
"name": "Which subjects are taught?",
"acceptedAnswer": {
"@type": "Answer",
"text": "The subjects taught include Physics, Chemistry, and Mathematics (PCM) aligned with the JEE syllabus."
}
},
{
"@type": "Question",
"name": "Are there regular tests?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Yes, ASQUARE Academy conducts chapter-wise assessments and full-length JEE mock tests."
}
},
{
"@type": "Question",
"name": "What courses are available?",
"acceptedAnswer": {
"@type": "Answer",
"text": "We offer 2-Year Programs, 1-Year Programs, Crash Courses, and Dropper Batches."
}
},
{
"@type": "Question",
"name": "What is the batch size?",
"acceptedAnswer": {
"@type": "Answer",
"text": "We maintain limited students per batch to ensure better attention and conceptual focus."
}
},
{
"@type": "Question",
"name": "Do parents get updates?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Yes, parents receive progress reports and regular parent–teacher meeting updates."
}
},
{
"@type": "Question",
"name": "Where is the institute located?",
"acceptedAnswer": {
"@type": "Answer",
"text": "ASQUARE Academy Lohegaon is easily accessible from Dhanori, Viman Nagar, Alandi, Vishrantwadi, Yerwada, and Tingre Nagar."
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
                Master JEE Main & Advanced with <span className="highlight-text text-warning">the Best IIT-JEE Training in Lohegaon, Pune</span>
              </motion.h1>
              <motion.h2>Shape Your Future with Professional Coaching at Lohegaon</motion.h2>

              <p className="lead d-none d-md-block">
               Searching for a top JEE preparation institute in Lohegaon, Pune? At ASQUARE Academy, we offer a structured approach that emphasizes concept mastery, problem-solving ability, speed, accuracy, and exam techniques. Our reputation as a trusted IIT entrance coaching center in Pune is built on consistent success stories, dedicated mentoring, and highly skilled faculty who help students secure admissions into IITs, NITs, IIITs, and other reputed engineering institutes across India.
              </p>

              <p className="lead d-block d-md-none">
Searching for a top JEE preparation institute in Lohegaon, Pune? At ASQUARE Academy, we offer a structured approach that emphasizes concept mastery, problem-solving ability, speed, accuracy, and exam techniques. Our reputation as a trusted IIT entrance coaching center in Pune is built on consistent success stories, dedicated mentoring, and highly skilled faculty who help students secure admissions into IITs, NITs, IIITs, and other reputed engineering institutes across India.
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

      {/* Why Choose */}
      <section className="jee-why py-5 ">
        <div className="container">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">
            Why Choose <span className="text-primary">ASQUARE Academy</span> in Lohegaon?
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
                Course <span className="text-primary">Details</span>
              </motion.h4>

              <p className="lead text-secondary">
              The Joint Entrance Examination (JEE) is India’s most challenging engineering entrance, opening doors to IITs, NITs, IIITs, and other renowned engineering colleges. Selecting the right JEE training institute in Lohegaon, Pune ensures organized learning and steady progress. <br></br> At ASQUARE Academy Lohegaon, our courses focus on developing core concepts, increasing speed with accuracy, and boosting performance through mock test series and daily practice problem sheets.
              </p>
            </div>
            <div className="col-lg-4 text-center order-1">
              <motion.img whileHover={{ scale: 1.03 }} src={sampleimg4} alt="JEE Coaching" className="img-fluid rounded-4 shadow-lg mx-auto d-block" style={{ width: "85%" }} />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Subjects + Batches Section */}
      <section className="jee-gradient-section py-5 text-white">
        <div className="container">
          <motion.h4 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">
            Subjects We Teach <span className="highlight-text text-warning">&nbsp;&&nbsp;</span> Programs & Batches
          </motion.h4>
          <br />

          <div className="row g-4">
            <div className="col-lg-6">
              <h4 className="highlight-text text-warning fw-bold mb-4 text-centerr">Subjects Taught</h4>
              {subjects.map((sub, i) => (
                <div key={i} className="jee-subject-box mb-4 p-3 pb-4 pt-4 rounded-4 bg-white bg-opacity-10 backdrop-blur-md border border-light border-opacity-25">
                  <h5 className="fw-semibold">{sub.title}</h5>
                  <p className="small mb-0">{sub.desc}</p>
                </div>
              ))}
            </div>
            <div className="col-lg-6">
              <h4 className="highlight-text text-warning fw-bold mb-4 text-centerr">Programs & Batches</h4>
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
              <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">
                Teaching <span className="text-primary">Approach</span>
              </motion.h3>

              <div className="row g-4 justify-content-center">
                {["Interactive lessons", "Doubt-solving", "Regular tests", "Parent updates"].map((text, i) => (
                  <div key={i} className="col-lg-3 col-6">
                    <motion.div whileHover={{ y: -5 }} className="method-card p-4 bg-white rounded-4 shadow-sm h-100 text-center">
                      <p className="text-muted small mb-0">
                        {text === "Interactive lessons"
                          ? "• Interactive classroom sessions with assignments"
                          : text === "Doubt-solving"
                            ? "• Individual doubt-solving support"
                            : text === "Regular tests"
                              ? "• Weekly unit tests & full-length JEE mock exams"
                              : "• Parent updates with progress reports"}
                      </p>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Highlights Section */}
      <section className="jee-highlights py-5 text-white">
        <div className="container text-center">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
            Highlights of <span className="highlight-text text-warning">Lohegaon Branch</span>
          </motion.h3>

          <div className="row justify-content-center g-4">
            {[
              "Small batch size for individual mentoring",
              "Updated JEE study materials designed by experts",
              "Regular reviews & performance enhancement sessions",
              "Workshops on advanced problem-solving & test strategies",
              "Recognized as a trusted IIT-JEE academy in Lohegaon, Pune",
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

      {/* Results Section */}
      <section className="jee-results py-5 text-white">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-8 text-center text-lg-start">
              <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
                Proven <span className="highlight-text text-warning">Results</span>
              </motion.h3>
              <p className="lead text-light">
                ASQUARE Academy Lohegaon has delivered outstanding JEE results, enabling students to secure admissions into top IITs, NITs & engineering institutes in India. Our systematic approach ensures consistent performance year after year.
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
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
            Join <span className="highlight-text text-warning">ASQUARE Academy Lohegaon</span> Today
          </motion.h3>
          <p className="lead mb-4">
          Get ahead in your JEE preparation with specialized IIT-JEE training in Lohegaon, Pune. With expert teachers, structured courses, and a proven track record, ASQUARE Academy is your trusted partner for JEE, CET, and NEET preparation.
          </p>
          <p><MapPin className="text-warning" /> <b className="bld">Serving students from Lohegaon, Dhanori, Viman Nagar, Tingre Nagar, Vishrantwadi, Yerwada & Alandi.</b></p>
          <a className="btn btn-lg btn-warning fw-bold mt-3 px-5 py-3 rounded-pill shadow-lg">
            <Link to={'/'} className="nav-item nav-item-list text-white">
              ⚡ Admissions Open – Secure Your Seat Now!
            </Link>
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default IITJEELohegaon;
