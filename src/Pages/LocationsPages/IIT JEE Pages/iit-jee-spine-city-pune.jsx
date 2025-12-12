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

import sampleimg1 from '../../../Assets/SampleImages/Banners/Banners (3).jpeg';
import sampleimg11 from '../../../Assets/SampleImages/Banners/Banners (9).jpeg';
import sampleimg2 from '../../../Assets/SampleImages/MobBanners/MobBanner3.jpeg';
import sampleimg22 from'../../../Assets/SampleImages/MobBanners/MobBanner9.jpeg';

import sampleimg3 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (9).jpeg';
import sampleimg4 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (2).jpeg';
import sampleimg6 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (4).jpeg';

import Form from '../../../Components/Form2/Form2.jsx';

const Reviews = React.lazy(() => import("../../../Components/Reviews/Reviews.jsx"));

function IITJEESpineCity() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const whyChoose = [
    { Icon: Users, title: "Highly Qualified Teachers", desc: "Experts in IIT-JEE, CET & NEET coaching." },
    { Icon: BookOpen, title: "Comprehensive PCM Coverage", desc: "Physics, Chemistry & Mathematics aligned with the latest JEE pattern." },
    { Icon: Target, title: "Student-Centric Mentoring", desc: "Small batches at Spine City branch for focused learning." },
    { Icon: BarChart, title: "Performance Tracking", desc: "Weekly assignments, mock tests & detailed progress reviews." },
    { Icon: Lightbulb, title: "Motivation & Guidance", desc: "Counseling and study-planning sessions for exam discipline." },
  ];

  const subjects = [
    { title: "Physics", desc: "Deep conceptual learning with application-focused problem solving" },
    { title: "Chemistry", desc: "Complete coverage of Physical, Organic & Inorganic Chemistry" },
    { title: "Mathematics", desc: "Extensive training across Algebra, Geometry, Calculus, Trigonometry & Probability" },
  ];

  const batches = [
    { title: "2-Year Foundation Program (10th → 12th Moving Students)", desc: "Integrated Board + JEE coaching." },
    { title: "1-Year Advanced Program (11th → 12th Moving Students)", desc: "Intensive Class XII + JEE preparation." },
    { title: "Crash Course (2–3 Months)", desc: "Quick revision and full problem-solving drills." },
    { title: "Dropper/Repeater Batch (XII Pass-outs)", desc: "One-year JEE-focused repeaters program." },
  ];

  const faqs = [
    { q: "Who can join ASQUARE Academy Spine City?", a: "Students of Class XI, XII, and XII pass-outs preparing for JEE Main & Advanced can enroll at ASQUARE Academy Spine City." },
    { q: "Which subjects are covered?", a: "We cover Physics, Chemistry & Mathematics (PCM), aligned with the newest JEE syllabus." },
    { q: "Do you conduct mock exams?", a: "Yes — weekly chapter-wise tests and full-length JEE mock exams are conducted regularly." },
    { q: "What course options are available?", a: "We offer 2-Year, 1-Year, Crash Courses & Dropper/Repeater batches tailored for varying preparation stages." },
    { q: "What is the batch size?", a: "We keep batch strength limited to provide personalized mentoring and effective doubt-solving." },
    { q: "Do parents receive progress updates?", a: "Yes — regular performance reports and parent–teacher meetings are part of our system." },
    { q: "Which areas does the Spine City branch serve?", a: "The Spine City branch is easily accessible from Spine City, Moshi, Charholi, Alandi, Chikhali, Pimpri-Chinchwad and nearby localities." },
  ];

  return (
    <>
      <Helmet>
        <title>Best IIT JEE Coaching in Spine City Pune | Top JEE Main & Advanced Classes</title>
        <meta name="title" content="Best IIT JEE Coaching in Spine City Pune | Top JEE Main & Advanced Classes" />
        <meta name="description" content="Get the best IIT JEE coaching in Spine City Pune with expert faculty, PCM coaching, mock tests & small batches. Join top JEE Main & Advanced classes for engineering success." />
        <meta name="keywords" content="IIT JEE coaching classes in spine city Pune,
Best IIT JEE Coaching in spine city Pune,
Top JEE Mains Coaching Classes spine city Pune,
IIT JEE Advanced Preparation spine city Pune,
JEE Advanced coaching classes in spine city Pune,
IIT JEE Classes in spine city Pune,
Best IIT JEE Classes in spine city Pune,
Top IIT JEE Classes in spine city Pune,
IIT JEE Institute coaching in spine city Pune,
IIT JEE Institute classes in spine city Pune,
" />
        <script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "ASQUARE Academy - Spine City",
  "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-spine-city-pune",
  "logo": "https://www.asquareclasses.com/wp-content/uploads/2023/05/Asquare-logo.png",
  "description": "ASQUARE Academy offers the best IIT JEE coaching classes in Spine City Pune with expert faculty, personalized guidance, JEE Main & Advanced preparation, PCM coaching, and structured learning programs.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Spine City, Pune",
    "addressLocality": "Spine City",
    "addressRegion": "Maharashtra",
    "postalCode": "412105",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-XXXXXXXXXX",
    "contactType": "customer service"
  },
  "sameAs": [
    "https://www.facebook.com/asquareacademy",
    "https://www.instagram.com/asquareacademy"
  ],
  "areaServed": [
    "Spine City",
    "Moshi",
    "Alandi",
    "Charholi",
    "Chikhali",
    "Pimpri-Chinchwad",
    "Pune"
  ],
  "department": [
    {
      "@type": "EducationalOrganization",
      "name": "IIT JEE Coaching in Spine City Pune",
      "description": "Top IIT JEE Coaching Classes in Spine City Pune offering JEE Main & Advanced preparation, PCM coaching, small batches & experienced faculty."
    },
    {
      "@type": "EducationalOrganization",
      "name": "JEE Advanced Coaching in Spine City Pune",
      "description": "Special coaching classes for JEE Advanced in Spine City with mock tests and personalized guidance."
    }
  ]
}

        `}</script>

        <link rel="canonical" href={canonicalUrl} />
      </Helmet>

      <Navbar />
      <Header />

      {/* Slider + Form */}
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
                <div key={i} className={`carousel-item ${i === 0 ? "active" : ""}`} style={{ height: "400px", backgroundImage: `url(${img})`, backgroundSize: "cover", backgroundPosition: "center" }}>
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

      {/* Hero */}
      <section className="jee-hero-section text-white d-flex align-items-center bg-transparent">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-12 col-lg-8 col-md-12 text-center text-md-start">
              <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
                Master JEE Main & Advanced with{" "}
                <span className="highlight-text text-warning">ASQUARE Academy</span>{" "}
                Spine City
              </motion.h1>
              <motion.h2>Your Trusted Coaching Partner in Spine City for Engineering Success</motion.h2>

              <p className="lead d-none d-md-block">
                Looking for <b className="bld">IIT-JEE coaching classes in Spine City, Pune?</b> At <b className="bld">ASQUARE Academy</b> we offer concept-driven teaching, structured programs, and personalized mentorship to help students prepare effectively for <b className="bld">JEE Main & Advanced</b>. Our Spine City branch focuses on strengthening fundamentals, enhancing problem-solving skills, and building exam confidence for aspirants aiming at IITs, NITs, IIITs and other top engineering institutes.
              </p>

              <p className="lead d-block d-md-none">
                Looking for <b className="bld">IIT-JEE coaching classes in Spine City, Pune?</b> At <b className="bld">ASQUARE Academy</b> we offer concept-driven teaching, structured programs, and personalized mentorship to help students prepare effectively for <b className="bld">JEE Main & Advanced</b>.
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
      <section className="jee-why py-5">
        <div className="container">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">
            Why Choose <span className="text-primary">ASQUARE Academy</span> in Spine City?
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
                Courses Tailored for <span className="text-primary">IIT-JEE</span> Success
              </motion.h4>

              <p className="lead text-secondary">
                Cracking the JEE Main & Advanced needs clarity, consistency, and rigorous practice. ASQUARE Academy Spine City offers courses designed to strengthen core concepts, improve accuracy, and upgrade exam performance for engineering aspirants.
              </p>
            </div>

            <div className="col-lg-4 text-center order-1">
              <motion.img whileHover={{ scale: 1.03 }} src={sampleimg4} alt="JEE Coaching" className="img-fluid rounded-4 shadow-lg mx-auto d-block" style={{ width: "85%" }} />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Subjects + Batches */}
      <section className="jee-gradient-section py-5 text-white">
        <div className="container">
          <motion.h4 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">
            Subject-Wise Training <span className="highlight-text text-warning">&nbsp;&&nbsp;</span> Available Courses & Duration
          </motion.h4>
          <br />

          <div className="row g-4">
            <div className="col-lg-6">
              <h4 className="highlight-text text-warning fw-bold mb-4 text-centerr">Subject-Wise Training</h4>
              {subjects.map((sub, i) => (
                <div key={i} className="jee-subject-box mb-4 p-3 pb-4 pt-4 rounded-4 bg-white bg-opacity-10 backdrop-blur-md border border-light border-opacity-25">
                  <h5 className="fw-semibold">{sub.title}</h5>
                  <p className="small mb-0">{sub.desc}</p>
                </div>
              ))}
            </div>

            <div className="col-lg-6">
              <h4 className="highlight-text text-warning fw-bold mb-4 text-centerr">Available Courses & Duration</h4>
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

      {/* Methodology */}
      <section className="jee-method py-5 bg-light">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-12 text-center text-lg-start">
              <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">
                Teaching <span className="text-primary">Methodology</span>
              </motion.h3>

              <div className="row g-4 justify-content-center">
                {["Learn", "Practice", "Assess", "Revise"].map((step, i) => (
                  <div key={i} className="col-lg-3 col-6">
                    <motion.div whileHover={{ y: -5 }} className="method-card p-4 bg-white rounded-4 shadow-sm h-100 text-center">
                      <p className="text-muted small mb-0">
                        {step === "Learn"
                          ? "• Daily interactive concept classes with topic-wise assignments"
                          : step === "Practice"
                            ? "• Individual doubt-solving and mentoring sessions"
                            : step === "Assess"
                              ? "• Weekly chapter-wise tests & full-length JEE mock exams"
                              : "• Regular parent–teacher meetings for performance insights"}
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

      {/* Highlights */}
      <section className="jee-highlights py-5 text-white">
        <div className="container text-center">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
            Key Benefits of Joining  
            <span className="highlight-text text-warning"> &nbsp;Spine City &nbsp;</span>
            Branch
          </motion.h3>

          <div className="row justify-content-center g-4">
            {[
              "• Limited batch strength for dedicated guidance",
              "• Latest IIT-JEE study material, question banks & practice tests",
              "• Strategy workshops on time management & exam techniques",
              "• Regular progress updates shared with parents",
              "• Known as one of the best IIT JEE coaching institutes in Spine City, Pune"
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
      <Suspense fallback={<Loading />}><Reviews /></Suspense>
      <hr />

      {/* Results */}
      <section className="jee-results py-5 text-white">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-8 text-center text-lg-start">
              <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
                Strong<span className="highlight-text text-warning"> Legacy of Results</span>
              </motion.h3>
              <p className="lead text-light">
                ASQUARE Academy has trained numerous JEE Main & Advanced achievers over the years. The Spine City center continues this legacy with expert faculty, a structured curriculum, and consistent academic success.
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
            <div className="d-inline-block bg-primary bg-opacity-10 text-primary fw-bold rounded-pill px-3 py-1 mb-3"><BadgeQuestionMark /> FAQs</div>

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
            Enroll at <span className="highlight-text text-warning">ASQUARE Academy Spine City</span>
          </motion.h3>

          <p className="lead mb-4">
           Take your engineering journey forward with ASQUARE Academy’s IIT-JEE coaching in Spine City, Pune. With dedicated faculty, structured study plans, and proven results, we are the trusted choice for IIT JEE coaching classes, JEE Advanced preparation, CET & NEET coaching in the region.
          </p>

          <p><MapPin className="text-warning" /> Serving students from <b className="bld">Spine City, Moshi, Charholi, Alandi, Chikhali & Pimpri-Chinchwad.</b></p>

          <a className="btn btn-lg btn-warning fw-bold mt-3 px-5 py-3 rounded-pill shadow-lg">
            <Link to={'/'} className="nav-item nav-item-list text-white">
              ⚡ Admissions Open – Enroll now!
              <span className="d-block text-warning small">Limited seats available.</span>
            </Link>
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default IITJEESpineCity;
