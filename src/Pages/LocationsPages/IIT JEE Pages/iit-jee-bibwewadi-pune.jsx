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

import sampleimg1 from '../../../Assets/SampleImages/Banners/Banners (4).jpeg';
import sampleimg11 from '../../../Assets/SampleImages/Banners/Banners (8).jpeg';
import sampleimg2 from '../../../Assets/SampleImages/MobBanners/MobBanner9.jpeg';
import sampleimg22 from'../../../Assets/SampleImages/MobBanners/MobBanner2.jpeg';

import sampleimg3 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (9).jpeg';
import sampleimg4 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (2).jpeg';
import sampleimg6 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (4).jpeg';

import Form from "../../../Components/Form2/Form2.jsx";

const Reviews = React.lazy(() => import("../../../Components/Reviews/Reviews.jsx"));

function IITJEEBibwewadi() {
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
      desc: "Highly qualified mentors for Physics, Chemistry & Mathematics focused on JEE strategy.",
    },
    {
      Icon: BookOpen,
      title: "Comprehensive Coverage",
      desc: "NCERT fundamentals + advanced problem-solving tailored for JEE Mains & Advanced.",
    },
    {
      Icon: Target,
      title: "Small Batch Sizes",
      desc: "Personalised attention ensuring concept clarity and fast doubt resolution.",
    },
    {
      Icon: BarChart,
      title: "Regular Testing",
      desc: "Weekly quizzes, mock tests and performance reviews to track progress.",
    },
    {
      Icon: Lightbulb,
      title: "Flexible & Mentored Learning",
      desc: "Classroom & online options plus mentorship for balancing boards with JEE prep.",
    },
     {
      Icon: Lightbulb,
      title: "Mentorship Support",
      desc: "Balancing JEE preparation with Class XI & XII academics.",
    },
  ];

  const subjects = [
    {
      title: "Physics",
      desc: "Concept strengthening and numerical application practice for high accuracy.",
    },
    {
      title: "Chemistry",
      desc: "Physical, Organic & Inorganic topics taught with solved examples and tricks.",
    },
    {
      title: "Mathematics",
      desc: "Extensive practice in Algebra, Calculus, Geometry, Probability & Trigonometry.",
    },
  ];

  const batches = [
    { title: "2-Year Integrated Program (Class 11 → 12)", desc: "Long-term conceptual build-up + Board & JEE preparation." },
    { title: "1-Year Target Program (Class 12)", desc: "Intensive course focused on Class XII + JEE readiness." },
    { title: "Dropper/Repeater Batch", desc: "Dedicated one-year program for XII pass-outs aiming at top ranks." },
    { title: "Crash Course (2–3 Months)", desc: "Short-term revision program with mock tests and practice sessions." },
  ];

  const faqs = [
    {
      q: "Q1: Do you provide coaching for both JEE Mains and JEE Advanced?",
      a: "Yes — ASQUARE Academy offers full coaching for both JEE Mains and JEE Advanced with structured modules and experienced faculty at Bibwewadi.",
    },
    {
      q: "Q2: Are small batches available?",
      a: "Yes — we keep batch sizes small to ensure personalised attention and effective doubt solving.",
    },
    {
      q: "Q3: Do you offer dropper or repeater batches?",
      a: "Yes — dedicated dropper/repeater batches are available focusing on targeted practice and concept revision.",
    },
    {
      q: "Q4: What is the teaching approach at ASQUARE?",
      a: "We follow a concept-driven cycle: Learn → Practice → Assess → Revise, with regular tests and analysis.",
    },
    {
      q: "Q5: Can students from nearby areas join the Bibwewadi branch?",
      a: "Absolutely — students from Market Yard, Swargate, Dhankawadi, Katraj, Sahakar Nagar and nearby localities commonly enroll.",
    },
    {
      q: "Q6: What subjects are covered in your IIT JEE classes?",
      a: "Physics, Chemistry and Mathematics are comprehensively covered with focused practice and revision.",
    },
    {
      q: "Q7: Do you conduct mock tests and practice sessions?",
      a: "Yes — regular mock tests, practice papers, and revision sessions form an integral part of our program.",
    },
    {
      q: "Q8: What makes ASQUARE the best IIT JEE institute in Bibwewadi?",
      a: "Our expert faculty, personalised learning, updated material, and consistent results make ASQUARE a preferred IIT JEE coaching center in Bibwewadi.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>IIT JEE Coaching Classes in Bibwewadi | Best IIT JEE Institute – ASQUARE Academy</title>
        <meta name="title" content="IIT JEE Coaching Classes in Bibwewadi | Best IIT JEE Institute – ASQUARE Academy" />
        <meta
          name="description"
          content="ASQUARE Academy offers the best IIT JEE coaching classes in Bibwewadi with small batches, expert faculty, mock tests & full JEE Mains/Advanced preparation. Enrol today!"
        />
        <meta
          name="keywords"
          content="IIT JEE coaching classes in bibwewadi,
Best IIT JEE Coaching in  bibwewadi,
Top JEE Mains Coaching Classes bibwewadi,
IIT JEE Advanced Preparation bibwewadi,
JEE Advanced coaching classes in bibwewadi,
IIT JEE Classes in bibwewadi,
Best IIT JEE Classes in bibwewadi,
Top IIT JEE Classes in bibwewadi,
IIT JEE Institute coaching in bibwewadi,
IIT JEE Institute classes in bibwewadi,
"
        />
        <script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-Institute-bibwewadi-pune#localbusiness",
      "name": "ASQUARE Academy",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-Institute-bibwewadi-pune",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "telephone": "9766118877",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Bibwewadi",
        "addressLocality": "Bibwewadi",
        "addressRegion": "Maharashtra",
        "postalCode": "411037",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune"
      ],
      "description": "ASQUARE Academy offers top IIT JEE coaching classes in Bibwewadi with small batches, expert faculty and complete JEE Mains & Advanced preparation."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-Institute-bibwewadi-pune#webpage",
      "name": "IIT JEE Coaching Classes in Bibwewadi – ASQUARE Academy",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-Institute-bibwewadi-pune",
      "description": "Join the best IIT JEE coaching classes in Bibwewadi. ASQUARE Academy provides expert faculty, small batches, mock tests, doubt-solving and full JEE preparation.",
      "breadcrumb": {
        "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-Institute-bibwewadi-pune#breadcrumb"
      }
    },
    {
      "@type": "EducationalOrganization",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-Institute-bibwewadi-pune#educational",
      "name": "ASQUARE Academy",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-Institute-bibwewadi-pune",
      "description": "Best IIT JEE Classes in Bibwewadi offering JEE Mains and Advanced coaching with expert mentors and personalised learning."
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-Institute-bibwewadi-pune#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you provide coaching for both JEE Mains and JEE Advanced?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, ASQUARE Academy offers IIT JEE coaching classes in Bibwewadi for both JEE Mains and Advanced with a structured curriculum and expert faculty."
          }
        },
        {
          "@type": "Question",
          "name": "Are small batches available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we maintain small batches to ensure personalised attention, making ASQUARE Academy one of the best IIT JEE coaching centres in Bibwewadi."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer dropper or repeater batches?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, ASQUARE Academy provides dedicated dropper and repeater batches focused on concept mastery, exam strategies and targeted test practice."
          }
        },
        {
          "@type": "Question",
          "name": "What is the teaching approach at ASQUARE?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE Academy follows a concept-driven approach with regular tests, doubt-solving and performance tracking for complete IIT JEE preparation."
          }
        },
        {
          "@type": "Question",
          "name": "Can students from nearby areas join the Bibwewadi branch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, students from nearby areas can join our IIT JEE coaching classes in Bibwewadi with flexible batches and a supportive environment."
          }
        },
        {
          "@type": "Question",
          "name": "What subjects are covered in your IIT JEE classes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Physics, Chemistry and Mathematics are covered in all IIT JEE classes at ASQUARE Academy Bibwewadi."
          }
        },
        {
          "@type": "Question",
          "name": "Do you conduct mock tests and practice sessions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, regular mock tests, practice papers and revision sessions are included to help students excel in JEE Mains and Advanced."
          }
        },
        {
          "@type": "Question",
          "name": "What makes ASQUARE the best IIT JEE institute in Bibwewadi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Expert teachers, personalised learning, small batches and consistent results make ASQUARE Academy the best IIT JEE institute in Bibwewadi."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-Institute-bibwewadi-pune#breadcrumb",
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
          "name": "IIT JEE",
          "item": "https://www.asquareclasses.com/iit-jee-coaching"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "IIT JEE Coaching Classes in Bibwewadi"
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

        {/* Form Over Slider */}
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
            {/* Left Side: Text */}
            <div className="col-12 col-lg-8 col-md-12 text-center text-md-start">
              <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
                Crack JEE Mains & Advanced with <span className="highlight-text text-warning">ASQUARE Academy – Bibwewadi</span>
              </motion.h1>

              {/* <motion.h2>Trusted Coaching for Engineering Aspirants in Bibwewadi</motion.h2> */}

              <p className="lead d-none d-md-block">
                Preparing for IIT JEE requires clarity, consistency, and expert guidance. At ASQUARE Academy, we provide the most trusted IIT JEE coaching classes in Bibwewadi, Pune, designed to help students strengthen their concepts, master problem-solving, and perform confidently in the toughest engineering entrance exams. <br></br>Recognized among the Best IIT JEE Coaching in Bibwewadi, we specialize in both JEE Mains and IIT JEE Advanced Preparation in Bibwewadi, delivering results through structured learning, regular assessments, and personalized mentorship. Students from Bibwewadi and nearby areas like Market Yard, Swargate, Dhankawadi, Katraj, and Sahakar Nagar already trust ASQUARE for their IIT JEE success.
              </p>

              <p className="lead d-block d-md-none">
                Preparing for IIT JEE requires clarity, consistency, and expert guidance. At ASQUARE Academy, we provide the most trusted IIT JEE coaching classes in Bibwewadi, Pune, designed to help students strengthen their concepts, master problem-solving, and perform confidently in the toughest engineering entrance exams. <br></br>Recognized among the Best IIT JEE Coaching in Bibwewadi, we specialize in both JEE Mains and IIT JEE Advanced Preparation in Bibwewadi, delivering results through structured learning, regular assessments, and personalized mentorship. Students from Bibwewadi and nearby areas like Market Yard, Swargate, Dhankawadi, Katraj, and Sahakar Nagar already trust ASQUARE for their IIT JEE success.
              </p>

              <a className="btn btn-warning btn-lg rounded-pill mt-3 shadow-lg">
                <Link to={'/'} className="nav-item nav-item-list text-warning">🚀 Enroll Now</Link>
              </a>
            </div>

            {/* Right Side: Image */}
            <div className="col-12 col-lg-4 col-md-12 mt-5 mt-md-0 text-center">
              <img src={sampleimg3} alt="ASQUARE Academy Bibwewadi" className="img-fluid mx-auto fade-in imgsiz" style={{ objectFit: "contain", opacity: 0.95, borderRadius: "10px" }} />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Why Choose */}
      <section className="jee-why py-5">
        <div className="container">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">
            Why Choose <span className="text-primary">ASQUARE Academy</span> for IIT JEE in Bibwewadi?
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
                Programs Offered at <span className="text-primary">ASQUARE – Bibwewadi</span>
              </motion.h4>

              {batches.map((b, i) => (
                <div key={i} className="jee-subject-box mb-3 p-3 rounded-4 bg-white bg-opacity-10 backdrop-blur-md border border-light border-opacity-25">
                  <h5 className="fw-semibold">{b.title}</h5>
                  {b.desc && <p className="small mb-0">{b.desc}</p>}
                </div>
              ))}
            </div>

            <div className="col-lg-4 text-center order-1">
              <motion.img whileHover={{ scale: 1.03 }} src={sampleimg4} alt="JEE Coaching Bibwewadi" className="img-fluid rounded-4 shadow-lg mx-auto d-block" style={{ width: "85%" }} />
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
            Key Features of <span className="highlight-text text-warning">Bibwewadi</span>
          </motion.h3>

          <div className="row justify-content-center g-4">
            {[
              "Updated JEE study material (digital + print)",
              "Regular doubt-clearing sessions with faculty",
              "Performance analytics via online test series",
              "Workshops on accuracy, time management & exam strategy",
              "Consistently ranked among the Best IIT JEE Classes in Bibwewadi and trusted by aspirants across Pune",
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
               ASQUARE Academy students from Bibwewadi and nearby areas have consistently achieved high ranks in JEE Mains & Advanced, securing admissions to IITs, NITs, and top engineering institutes. This makes us one of the Top IIT JEE Classes in Bibwewadi, Pune.
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
              <FAQAccordion faqs={faqs.slice(0, Math.ceil(faqs.length / 2))} accordionId="bibwewadiFaqLeft" />
            </div>
            <div className="col-12 col-md-6">
              <FAQAccordion faqs={faqs.slice(Math.ceil(faqs.length / 2))} accordionId="bibwewadiFaqRight" />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Final CTA */}
      <section id="enroll" className="jee-enroll-section py-5 text-center text-white">
        <div className="container">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
            Enroll Today at <span className="highlight-text text-warning">ASQUARE Academy – Bibwewadi</span>
          </motion.h3>

          <p className="lead mb-4">
          If you’re looking for the Best IIT JEE Coaching in Bibwewadi, Pune, your search ends here. With expert guidance, structured programs, and a proven success record, ASQUARE Academy is the trusted name for JEE preparation.
          </p>

          <p><MapPin className="text-warning" /> Convenient for students from <b className="bld">Bibwewadi, Market Yard, Swargate, Dhankawadi, Katraj, and Sahakar Nagar.</b></p>

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

export default IITJEEBibwewadi;
