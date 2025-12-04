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
import sampleimg11 from '../../../Assets/SampleImages/Banners/Banners (2).jpeg';
import sampleimg2 from '../../../Assets/SampleImages/MobBanners/MobBanner3.jpeg';
import sampleimg22 from'../../../Assets/SampleImages/MobBanners/MobBanner2.jpeg';

import sampleimg3 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (9).jpeg';
import sampleimg4 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (2).jpeg';
import sampleimg6 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (4).jpeg';

import Form from "../../../Components/Form2/Form2.jsx";

const Reviews = React.lazy(() => import("../../../Components/Reviews/Reviews.jsx"));

function IITJEEMGRoad() {
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
      desc: "Highly experienced mentors for Physics, Chemistry & Mathematics with proven results.",
    },
    {
      Icon: BookOpen,
      title: "Comprehensive Coverage",
      desc: "NCERT fundamentals reinforced with advanced problem-solving for JEE Mains & Advanced.",
    },
    {
      Icon: Target,
      title: "Small Batch Sizes",
      desc: "Personalised attention and fast doubt resolution through limited batch strength.",
    },
    {
      Icon: BarChart,
      title: "Regular Testing & Analysis",
      desc: "Weekly quizzes, mock exams and detailed performance reviews to track progress.",
    },
    {
      Icon: Lightbulb,
      title: "Flexible Learning",
      desc: "Classroom + online options plus mentorship for balancing boards with JEE prep.",
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
      desc: "Concept-driven teaching with intensive numerical practice for accuracy.",
    },
    {
      title: "Chemistry",
      desc: "Complete Physical, Organic & Inorganic coverage with solved examples and shortcuts.",
    },
    {
      title: "Mathematics",
      desc: "Rigorous practice in Algebra, Calculus, Geometry, Trigonometry & Probability.",
    },
  ];

  const batches = [
    { title: "2-Year Integrated Program (Class 11 → 12)", desc: "Builds strong fundamentals while integrating board & JEE preparation." },
    { title: "1-Year Target Program (Class 12)", desc: "Focused, fast-paced course aligned with Class XII & JEE syllabus." },
    { title: "Dropper/Repeater Batch", desc: "One-year dedicated program for XII pass-outs aiming for top ranks." },
    { title: "Crash Course (2–3 Months)", desc: "Last-mile revision with mock tests and strategy sessions." },
  ];

  const faqs = [
    {
      q: "Q1: Do you provide coaching for both JEE Mains and JEE Advanced?",
      a: "Yes — ASQUARE Academy offers complete coaching for both JEE Mains and JEE Advanced at our MG Road center with a structured curriculum and experienced faculty.",
    },
    {
      q: "Q2: Are small batches available?",
      a: "Yes — we keep batch sizes small to ensure personalised attention and effective doubt solving.",
    },
    {
      q: "Q3: Do you offer dropper/repeater batches?",
      a: "Yes — dedicated dropper/repeater batches are available, designed for intense revision and rank improvement.",
    },
    {
      q: "Q4: What is the teaching methodology?",
      a: "We follow a concept-first approach: Learn → Practice → Assess → Revise, with regular tests and personalised feedback.",
    },
    {
      q: "Q5: Can students from nearby areas join the MG Road branch?",
      a: "Absolutely — students from Camp, Sadhu Vaswani Chowk, Dhole Patil Road, Rasta Peth and Koregaon Park commonly enroll at the MG Road center.",
    },
    {
      q: "Q6: What subjects are covered?",
      a: "Physics, Chemistry and Mathematics are comprehensively covered with chapter-wise practice and revision.",
    },
    {
      q: "Q7: Do you conduct mock tests and performance tracking?",
      a: "Yes — weekly quizzes, chapter tests and full-length mock exams with analytics form a core part of the program.",
    },
    {
      q: "Q8: Why choose ASQUARE MG Road?",
      a: "Our experienced faculty, small batches, data-driven test series and consistent results make ASQUARE a trusted choice for IIT JEE preparation in MG Road.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>IIT JEE Coaching Classes in MG Road | Best JEE Mains & Advanced – ASQUARE Academy</title>
        <meta name="title" content="IIT JEE Coaching Classes in MG Road | Best JEE Mains & Advanced – ASQUARE Academy" />
        <meta
          name="description"
          content="Get the Best IIT JEE Coaching in MG Road with ASQUARE Academy. Small batches, expert faculty, mock tests & complete JEE Mains and Advanced preparation for top results."
        />
        <meta
          name="keywords"
          content="IIT JEE coaching classes in MG Road,
Best IIT JEE Coaching in  MG Road,
Top JEE Mains Coaching Classes MG Road,
IIT JEE Advanced Preparation MG Road,
JEE Advanced coaching classes in MG Road,
IIT JEE Classes in MG Road,
Best IIT JEE Classes in MG Road,
Top IIT JEE Classes in MG Road,
IIT JEE Institute coaching in MG Road,
IIT JEE Institute classes in MG Road,
"
        />
        <script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-Institute-mg-road-pune#localbusiness",
      "name": "ASQUARE Academy - IIT JEE Coaching Classes in MG Road",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "telephone": "9766118877",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-Institute-mg-road-pune",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "MG Road",
        "addressRegion": "Maharashtra",
        "addressCountry": "India"
      },
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune"
      ],
      "description": "Best IIT JEE coaching classes in MG Road offering JEE Mains & Advanced preparation with expert faculty, small batches & regular mock tests."
    },
    {
      "@type": "EducationalOrganization",
      "name": "ASQUARE Academy",
      "url": "https://www.asquareclasses.com/",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "description": "Top IIT JEE coaching institute in MG Road offering complete JEE Mains & Advanced preparation with personalised guidance."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-Institute-mg-road-pune#webpage",
      "name": "IIT JEE Coaching Classes in MG Road | ASQUARE Academy",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-Institute-mg-road-pune",
      "description": "Top IIT JEE Classes in MG Road offering JEE Mains & Advanced coaching with weekly tests, small batches & expert faculty."
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
          "name": "IIT JEE Coaching Classes in MG Road"
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
            "text": "Yes, ASQUARE Academy provides complete IIT JEE coaching in MG Road for both JEE Mains and JEE Advanced with structured study plans."
          }
        },
        {
          "@type": "Question",
          "name": "Are small batches available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, ASQUARE offers small batches for personalised attention and focused learning, making it one of the best IIT JEE coaching classes in MG Road."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer dropper/repeater batches?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, special dropper and repeater batches are conducted with intensive practice and regular mock tests."
          }
        },
        {
          "@type": "Question",
          "name": "What is the teaching approach at ASQUARE?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE follows a concept-based teaching approach with interactive classes, weekly tests, and doubt-solving sessions."
          }
        },
        {
          "@type": "Question",
          "name": "Can students from nearby areas join the MG Road branch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, students from nearby locations can easily join due to the accessible location and flexible batch timings."
          }
        },
        {
          "@type": "Question",
          "name": "What subjects are included in IIT JEE classes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Physics, Chemistry, and Mathematics are covered in-depth by expert faculty with focus on conceptual learning."
          }
        },
        {
          "@type": "Question",
          "name": "Do you conduct regular mock tests and practice sessions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, chapter-wise tests, mock exams, and performance tracking are conducted regularly to boost exam readiness."
          }
        },
        {
          "@type": "Question",
          "name": "Why is ASQUARE considered the best IIT JEE institute in MG Road?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Small batches, expert faculty, personalised mentoring, and consistent results make ASQUARE a leading IIT JEE institute in MG Road."
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
                Crack JEE Mains & Advanced with <span className="highlight-text text-warning">ASQUARE Academy – MG Road</span>
              </motion.h1>

              {/* <motion.h2>Trusted Coaching for Engineering Aspirants in MG Road</motion.h2> */}

              <p className="lead d-none d-md-block">
                Preparing for IIT JEE requires clarity, consistency, and expert guidance. At ASQUARE Academy, we provide the most trusted IIT JEE coaching classes in MG Road, Pune, designed to help students strengthen their concepts, master problem-solving, and perform confidently in the toughest engineering entrance exams. Recognized among the Best IIT JEE Coaching in MG Road, we specialise in both JEE Mains and JEE Advanced preparation with structured learning, regular assessments, and personalised mentorship. Students from Camp, Sadhu Vaswani Chowk, Dhole Patil Road, Rasta Peth, and Koregaon Park rely on ASQUARE for their IIT JEE success.
              </p>

              <p className="lead d-block d-md-none">
                Preparing for IIT JEE requires clarity, consistency, and expert guidance. At ASQUARE Academy MG Road we provide trusted coaching, mock tests and mentorship to help you crack JEE Mains & Advanced.
              </p>

              <a className="btn btn-warning btn-lg rounded-pill mt-3 shadow-lg">
                <Link to={'/'} className="nav-item nav-item-list text-warning">🚀 Enroll Now</Link>
              </a>
            </div>

            {/* Right Side: Image */}
            <div className="col-12 col-lg-4 col-md-12 mt-5 mt-md-0 text-center">
              <img src={sampleimg3} alt="ASQUARE Academy MG Road" className="img-fluid mx-auto fade-in imgsiz" style={{ objectFit: "contain", opacity: 0.95, borderRadius: "10px" }} />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Why Choose */}
      <section className="jee-why py-5">
        <div className="container">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">
            Why Choose <span className="text-primary">ASQUARE Academy</span> for IIT JEE in MG Road?
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
                Programs Offered at <span className="text-primary">ASQUARE – MG Road</span>
              </motion.h4>

              {batches.map((b, i) => (
                <div key={i} className="jee-subject-box mb-3 p-3 rounded-4 bg-white bg-opacity-10 backdrop-blur-md border border-light border-opacity-25">
                  <h5 className="fw-semibold">{b.title}</h5>
                  {b.desc && <p className="small mb-0">{b.desc}</p>}
                </div>
              ))}
            </div>

            <div className="col-lg-4 text-center order-1">
              <motion.img whileHover={{ scale: 1.03 }} src={sampleimg4} alt="JEE Coaching MG Road" className="img-fluid rounded-4 shadow-lg mx-auto d-block" style={{ width: "85%" }} />
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
            Key Features of <span className="highlight-text text-warning">MG Road</span>
          </motion.h3>

          <div className="row justify-content-center g-4">
            {[
              "Updated JEE study material (digital + print)",
              "Regular doubt-clearing sessions with faculty",
              "Performance analytics via online test series",
              "Workshops on accuracy, time management & exam strategy",
              "Consistently ranked among the Best IIT JEE Classes in MG Road and trusted by aspirants across Pune",
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
               ASQUARE Academy students from MG Road and nearby areas have consistently achieved high ranks in JEE Mains & Advanced, securing admissions to IITs, NITs, and top engineering institutes. This makes us one of the Top IIT JEE Classes in MG Road, Pune.
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
              <FAQAccordion faqs={faqs.slice(0, Math.ceil(faqs.length / 2))} accordionId="mgFaqLeft" />
            </div>
            <div className="col-12 col-md-6">
              <FAQAccordion faqs={faqs.slice(Math.ceil(faqs.length / 2))} accordionId="mgFaqRight" />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Final CTA */}
      <section id="enroll" className="jee-enroll-section py-5 text-center text-white">
        <div className="container">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
            Enroll Today at <span className="highlight-text text-warning">ASQUARE Academy – MG Road</span>
          </motion.h3>

          <p className="lead mb-4">
          If you’re looking for the Best IIT JEE Coaching in MG Road, Pune, your search ends here. With expert guidance, structured programs, and a proven success record, ASQUARE Academy is the trusted name for JEE preparation.
          </p>

          <p><MapPin className="text-warning" /> Convenient for students from <b className="bld">MG Road, Camp, Sadhu Vaswani Chowk, Dhole Patil Road, Rasta Peth, and Koregaon Park.</b></p>

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

export default IITJEEMGRoad;
