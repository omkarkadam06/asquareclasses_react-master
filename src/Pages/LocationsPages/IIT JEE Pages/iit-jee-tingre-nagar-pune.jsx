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
// import sampleimg2 from "../../../Assets/SampleImages/sampleimg2.jpeg";
import sampleimg2 from '../../../Assets/SampleImages/MobBanners/MobBanner1.jpeg';
import sampleimg22 from'../../../Assets/SampleImages/MobBanners/MobBanner2.jpeg';
import sampleimg1 from "../../../Assets/SampleImages/Banners/Banners (9).jpeg";
import sampleimg11 from "../../../Assets/SampleImages/Banners/Banners (1).jpeg";
import sampleimg3 from "../../../Assets/SampleImages/AsquarePics/AsquarePics (9).jpeg";
import sampleimg4 from "../../../Assets/SampleImages/AsquarePics/AsquarePics (2).jpeg";
import sampleimg6 from "../../../Assets/SampleImages/AsquarePics/AsquarePics (4).jpeg";
import Form from "../../../Components/Form2/Form2.jsx";

const Reviews = React.lazy(() => import("../../../Components/Reviews/Reviews.jsx"));

function IITJEETingreNagar() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const whyChoose = [
    { Icon: Users, title: "Expert Faculty", desc: "Highly qualified teachers for JEE, CET & NEET coaching." },
    { Icon: BookOpen, title: "Complete Syllabus Coverage", desc: "Physics, Chemistry & Mathematics as per latest JEE pattern." },
    { Icon: Target, title: "Personalized Mentoring", desc: "Small batches with one-to-one doubt-solving." },
    { Icon: BarChart, title: "Regular Assessments", desc: "Weekly mock tests & detailed performance analysis." },
    { Icon: Lightbulb, title: "Career Guidance", desc: "Motivation sessions & proven exam strategies." },
  ];

  const subjects = [
    { title: "Physics", desc: "Conceptual clarity, numerical problem solving & applications" },
    { title: "Chemistry", desc: "Physical, Organic & Inorganic with a problem-solving approach" },
    { title: "Mathematics", desc: "Algebra, Calculus, Geometry, Trigonometry & Probability practice" },
  ];

  const batches = [
    { title: "2-Year Course (10th → 12th Moving Students)", desc: "Integrated program for Class XI & XII (Board + JEE)." },
    { title: "1-Year Course (11th → 12th Moving Students)", desc: "Comprehensive JEE preparation with Class XII syllabus." },
    { title: "Crash Course (2–3 Months)", desc: "Fast-paced revision & exam-focused preparation." },
    { title: "Repeater/Dropper Batch (XII Pass-outs)", desc: "One-year intensive JEE training for repeaters." },
  ];

  const faqs = [
    { q: "Q1: Who can join IIT-JEE coaching at ASQUARE Academy Tingre Nagar?", a: "Students of Class XI, XII, and XII pass-outs preparing for JEE Main & Advanced." },
    { q: "Q2: What subjects are taught?", a: "Physics, Chemistry, and Mathematics (PCM)." },
    { q: "Q3: Do you provide mock tests?", a: "Yes, weekly chapter tests and full-length JEE mock exams are conducted." },
    { q: "Q4: What courses are offered?", a: "2-Year Courses, 1-Year Courses, Crash Courses, and Dropper Batches." },
    { q: "Q5: How many students are in each batch?", a: "We maintain small batch sizes for personal guidance." },
    { q: "Q6: Do parents get updates?", a: "Yes, we share progress reports and conduct regular parent–teacher meetings." },
    { q: "Q7: Where is the institute located?", a: "Our Tingre Nagar branch is easily accessible from Tingre Nagar, Vishrantwadi, Dighi, Lohegaon, Yerwada, and nearby Pune areas." },
  ];

  return (
    <>
      <Helmet>
        <title>Best IIT JEE Coaching Classes & Institute in Tingre Nagar Pune | ASQUARE</title>
        <meta
          name="title"
          content="Best IIT JEE Coaching Classes & Institute in Tingre Nagar Pune | ASQUARE"
        />
        <meta
          name="description"
          content="Top IIT JEE coaching classes in Tingre Nagar for JEE Main & Advanced. ASQUARE Academy offers PCM coaching, expert faculty, mock tests, small batches, and structured preparation for better results."
        />
        <meta name="keywords" content="IIT JEE coaching classes in Tingre Nagar, Best IIT JEE Coaching in Tingre Nagar, Top JEE Mains Coaching Classes Tingre Nagar, IIT JEE Advanced Preparation Tingre Nagar, JEE Advanced coaching classes in Tingre Nagar, IIT JEE Classes in Tingre Nagar, Best IIT JEE Classes in Tingre Nagar, Top IIT JEE Classes in Tingre Nagar" />
        <script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@graph": [

    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-tingre-nagar-pune#localbusiness",
      "name": "ASQUARE Academy - IIT JEE Coaching Classes Tingre Nagar",
      "description": "Top IIT JEE coaching classes in Tingre Nagar offering JEE Main and Advanced preparation with expert faculty, PCM coaching, mock tests and small batches.",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-tingre-nagar-pune",
      "telephone": "9766118877",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Tingre Nagar",
        "addressRegion": "Pune",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune/"
      ]
    },

    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-tingre-nagar-pune#webpage",
      "name": "IIT JEE Coaching Classes & Institute in Tingre Nagar Pune",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-tingre-nagar-pune",
      "description": "Best IIT JEE Coaching Classes & Institute in Tingre Nagar Pune with PCM training, mock tests, structured courses and dedicated study support."
    },

    {
      "@type": "EducationalOrganization",
      "name": "ASQUARE Academy",
      "url": "https://www.asquareclasses.com/",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune/"
      ]
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
          "name": "IIT JEE Coaching Pune",
          "item": "https://www.asquareclasses.com/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "IIT JEE Coaching Classes in Tingre Nagar"
        }
      ]
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-tingre-nagar-pune#faq",
      "mainEntity": [

        {
          "@type": "Question",
          "name": "Who can join IIT-JEE coaching at ASQUARE Academy Tingre Nagar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students of Class XI, XII, and XII pass-outs preparing for JEE Main and JEE Advanced can join the IIT-JEE coaching at ASQUARE Academy Tingre Nagar."
          }
        },

        {
          "@type": "Question",
          "name": "What subjects are taught?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We teach PCM – Physics, Chemistry, and Mathematics with concept clarity and JEE-focused problem-solving practice."
          }
        },

        {
          "@type": "Question",
          "name": "Do you provide mock tests?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, weekly chapter tests and full-length JEE mock exams are conducted to assess performance and improve exam readiness."
          }
        },

        {
          "@type": "Question",
          "name": "What courses are offered?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer 2-Year Courses, 1-Year Courses, Crash Courses, and Dropper Batches for JEE Main and Advanced preparation."
          }
        },

        {
          "@type": "Question",
          "name": "How many students are in each batch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We maintain small batch sizes to ensure personalized guidance, doubt-solving, and individual attention."
          }
        },

        {
          "@type": "Question",
          "name": "Do parents get updates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we share performance reports and conduct regular parent–teacher meetings to update parents about student progress."
          }
        },

        {
          "@type": "Question",
          "name": "Where is the institute located?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our Tingre Nagar branch is easily accessible from Tingre Nagar, Vishrantwadi, Dighi, Lohegaon, Yerwada, and nearby Pune areas."
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
              {[sampleimg2, sampleimg2, sampleimg2].map((img, i) => (
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
                Crack JEE Main & Advanced with Top IIT-JEE Coaching in Tingre Nagar, Pune
              </motion.h1>

              <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="h4 mb-3">
                <span className="highlight-text text-warning">Build Your Future with Expert Guidance at ASQUARE Academy Tingre Nagar</span>
              </motion.h2>

              <p className="lead d-none d-md-block">
                Looking for the best IIT-JEE coaching classes in Tingre Nagar, Pune? At ASQUARE Academy, we provide structured JEE preparation with a strong focus on concept clarity, time management, and exam strategies. Our expert mentoring and consistent results make us a trusted choice for students aiming at IITs, NITs, IIITs, and top engineering colleges in India.
              </p>

              <p className="lead d-block d-md-none">
                Looking for the best IIT-JEE coaching classes in Tingre Nagar, Pune? At ASQUARE Academy, we provide structured JEE preparation with a strong focus on concept clarity, time management, and exam strategies. Our expert mentoring and consistent results make us a trusted choice for students aiming at IITs, NITs, IIITs, and top engineering colleges in India.
              </p>

              <a className="btn btn-warning btn-lg rounded-pill mt-3 shadow-lg">
                <Link to={'/'} className="nav-item nav-item-list text-warning">
                  🚀 Enroll Now
                </Link>
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
            Why Choose <span className="highlight-text text-primary">ASQUARE Academy</span> for IIT-JEE in Tingre Nagar?
          </motion.h3>

          <div className="row g-4 justify-content-center">
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
                Our <span className="highlight-text text-primary">JEE Coaching Programs</span>
              </motion.h4>

              <p className="lead text-secondary">
                The Joint Entrance Examination (JEE) is the pathway to India’s top engineering institutes including IITs and NITs. Choosing the right IIT-JEE coaching in Tingre Nagar, Pune ensures a systematic approach, conceptual clarity, and consistent performance.
                At ASQUARE Academy Tingre Nagar, our coaching programs emphasize strong fundamentals, practice-oriented learning, and regular evaluation to help students excel in both JEE Main & Advanced.
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
            Subjects Covered <span className="highlight-text text-warning">&nbsp;&&nbsp;</span> Duration & Batches
          </motion.h4>

          <div className="row g-4">
            <div className="col-lg-6">
              <h4 className="highlight-text text-warning fw-bold mb-4 text-centerr">Subjects Covered</h4>
              {subjects.map((sub, i) => (
                <div key={i} className="jee-subject-box mb-4 p-3 pb-4 pt-4 rounded-4 bg-white bg-opacity-10 backdrop-blur-md border border-light border-opacity-25">
                  <h5 className="fw-semibold">{sub.title}</h5>
                  <p className="small mb-0">{sub.desc}</p>
                </div>
              ))}
            </div>

            <div className="col-lg-6">
              <h4 className="highlight-text text-warning fw-bold mb-4 text-centerr">Course Duration & Batches</h4>
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
                {["Daily topic-wise lectures & assignments", "One-to-one doubt-solving sessions", "Weekly tests & full-length mock exams", "Progress tracking & parent–teacher reviews"].map((txt, i) => (
                  <div key={i} className="col-lg-3 col-6">
                    <motion.div whileHover={{ y: -5 }} className="method-card p-4 bg-white rounded-4 shadow-sm h-100 text-center">
                      <p className="text-muted small mb-0">{txt}</p>
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
            Key Features at <span className="highlight-text text-warning">Tingre Nagar Branch</span>
          </motion.h3>

          <div className="row justify-content-center g-4">
            {[
              "• Limited batch size with individual attention",
              "• Updated IIT-JEE study material curated by experts",
              "• Parent–teacher meetings & progress monitoring",
              "• Workshops on time management & exam strategies",
              "• Trusted IIT-JEE coaching in Tingre Nagar, Pune",
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
                Results That <span className="text-warning">Speak</span> 
              </motion.h3>
              <p className="lead text-light">
                ASQUARE Academy has a strong record of students securing admissions in IITs, NITs, and leading engineering colleges. Our Tingre Nagar IIT-JEE coaching is known for consistent performance and student success.
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
              <FAQAccordion faqs={faqs.slice(0, Math.ceil(faqs.length / 2))} accordionId="tingreFaqLeft" />
            </div>
            <div className="col-12 col-md-6">
              <FAQAccordion faqs={faqs.slice(Math.ceil(faqs.length / 2))} accordionId="tingreFaqRight" />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Final CTA */}
      <section id="enroll" className="jee-enroll-section py-5 text-center text-white">
        <div className="container">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
            Join  <span className="text-warning">ASQUARE Academy</span> Tingre Nagar Today
          </motion.h3>

          <p className="lead mb-4">
            Take the first step toward success with IIT-JEE coaching in Tingre Nagar, Pune. With experienced faculty, structured courses, and proven results, ASQUARE Academy is your trusted partner for JEE, CET & NEET coaching.
          </p>

          <p><MapPin className="text-warning" /> Best for students from Tingre Nagar, Vishrantwadi, Lohegaon, Dighi, Yerwada, and surrounding Pune areas.</p>

          <a className="btn btn-lg btn-warning fw-bold mt-3 px-5 py-3 rounded-pill shadow-lg">
            <Link to={'/'} className="nav-item nav-item-list text-white">
              ⚡ Admissions open – Limited seats available!
            </Link>
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default IITJEETingreNagar;
