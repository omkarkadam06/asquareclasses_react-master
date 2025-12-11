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

import sampleimg1 from '../../../Assets/SampleImages/Banners/Banners (9).jpeg';
import sampleimg11 from '../../../Assets/SampleImages/Banners/Banners (2).jpeg';
import sampleimg2 from '../../../Assets/SampleImages/MobBanners/MobBanner9.jpeg';
import sampleimg22 from'../../../Assets/SampleImages/MobBanners/MobBanner6.jpeg';

import sampleimg3 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (9).jpeg';
import sampleimg4 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (2).jpeg';
import sampleimg6 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (4).jpeg';

import Form from '../../../Components/Form2/Form2.jsx';

const Reviews = React.lazy(() => import("../../../Components/Reviews/Reviews.jsx"));

function IITJEESomwarPeth() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const whyChoose = [
    { Icon: Users, title: "Expert Faculty", desc: "Highly qualified mentors for Physics, Chemistry & Mathematics with proven experience in JEE preparation." },
    { Icon: BookOpen, title: "Comprehensive Coverage", desc: "NCERT foundation + advanced problem-solving tailored for JEE Mains & Advanced." },
    { Icon: Target, title: "Small Batch Sizes", desc: "Personalized attention and focused doubt-solving to ensure concept clarity." },
    { Icon: BarChart, title: "Regular Testing", desc: "Weekly quizzes, chapter tests and full-length mocks with performance feedback." },
    { Icon: Lightbulb, title: "Flexible Learning", desc: "Options for both classroom and online coaching." },
      { Icon: Lightbulb, title: "Mentorship Support", desc: "Balancing JEE preparation with Class XI & XII academics." },
  ];

  const subjects = [
    { title: "Physics", desc: "Concept clarity with numerical practice and application-based problems." },
    { title: "Chemistry", desc: "Complete Physical, Organic & Inorganic coverage with strategy for PYQs." },
    { title: "Mathematics", desc: "Rigorous practice in Algebra, Calculus, Geometry, Trigonometry & Probability." },
  ];

  const batches = [
    { title: "2-Year Integrated Program (Class 11 → 12)", desc: "Board + JEE integrated curriculum for long-term mastery." },
    { title: "1-Year Target Program (Class 12)", desc: "Focused Class XII + JEE intensive training." },
    { title: "Dropper/Repeater Batch", desc: "One-year dedicated program for repeat aspirants with full test-series." },
    { title: "Crash Course (2–3 Months)", desc: "Revision-packed short program with PYQs & speed practice." },
  ];

  const faqs = [
    {
      q: "Do you provide coaching for both JEE Mains and JEE Advanced?",
      a: "Yes — ASQUARE Academy Somwar Peth offers complete coaching for both JEE Mains and JEE Advanced with structured modules and advanced problem-solving sessions."
    },
    {
      q: "Are small batches available at Somwar Peth?",
      a: "Yes — we maintain small batches to provide personalised attention and focused doubt-solving, ensuring better learning outcomes."
    },
    {
      q: "Do you offer dropper/repeater batches?",
      a: "Absolutely — dedicated dropper/repeater programs are available with intensive revision and a full-length mock test series."
    },
    {
      q: "What is the teaching approach at ASQUARE?",
      a: "Our approach is Learn → Practice → Assess → Revise with concept-first teaching, regular tests, doubt-clearing, and performance tracking."
    },
    {
      q: "Can students from nearby areas join the Somwar Peth branch?",
      a: "Yes — students from Rasta Peth, Guruwar Peth, Camp, Nana Peth, Bhavani Peth and surrounding areas regularly join our Somwar Peth centre."
    },
    {
      q: "Which subjects are covered in the IIT JEE program?",
      a: "Physics, Chemistry and Mathematics (PCM) are comprehensively covered by experienced faculty."
    },
    {
      q: "Do you conduct mock tests and practice sessions?",
      a: "Yes — chapter-wise tests, weekly topic tests and full-length mocks are an integral part of the curriculum."
    },
    {
      q: "Why choose ASQUARE for Somwar Peth?",
      a: "Expert faculty, small batches, updated study material and consistent results make ASQUARE one of the best IIT JEE coaching options in Somwar Peth."
    },
  ];

  return (
    <>
      <Helmet>
        <title>Best IIT JEE Coaching Classes in Somwar Peth Pune | ASQUARE Academy</title>
        <meta name="title" content="Best IIT JEE Coaching Classes in Somwar Peth Pune | ASQUARE Academy" />
        <meta name="description" content="Get the best IIT JEE coaching in Somwar Peth Pune with expert faculty, small batches, study material & test series. Join ASQUARE Academy for JEE Mains & Advanced preparation." />
        <meta name="keywords" content={`
IIT JEE coaching classes in Somwar Peth Pune,
Best IIT JEE Coaching in Somwar Peth Pune,
Top JEE Mains Coaching Classes Somwar Peth Pune,
IIT JEE Advanced Preparation Somwar Peth Pune,
JEE Advanced coaching classes in Somwar Peth Pune,
IIT JEE Classes in Somwar Peth Pune,
Best IIT JEE Classes in Somwar Peth Pune,
Top IIT JEE Classes in Somwar Peth Pune,
IIT JEE Institute coaching in Somwar Peth Pune,
IIT JEE Institute classes in Somwar Peth Pune,

`} />
        <script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-Institute-somwar-peth-pune#localbusiness",
      "name": "ASQUARE Academy - IIT JEE Coaching Somwar Peth Pune",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-Institute-somwar-peth-pune",
      "telephone": "+919766118877",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Somwar Peth",
        "addressRegion": "Pune",
        "addressCountry": "India",
        "postalCode": "411011",
        "streetAddress": "Somwar Peth, Pune"
      },
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune/"
      ],
      "description": "Best IIT JEE Coaching Classes in Somwar Peth Pune offering JEE Mains & JEE Advanced preparation with expert faculty and small batches."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-Institute-somwar-peth-pune#webpage",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-Institute-somwar-peth-pune",
      "name": "IIT JEE Coaching Classes in Somwar Peth Pune | ASQUARE Academy",
      "isPartOf": {
        "@id": "https://www.asquareclasses.com/#website"
      },
      "about": "IIT JEE coaching in Somwar Peth Pune for JEE Mains and JEE Advanced.",
      "primaryImageOfPage": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png"
    },
    {
      "@type": "EducationalOrganization",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-Institute-somwar-peth-pune#eduorg",
      "name": "ASQUARE Academy",
      "url": "https://www.asquareclasses.com/",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "description": "Top IIT JEE Classes in Somwar Peth Pune for JEE Mains & Advanced preparation.",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+919766118877",
        "contactType": "customer service"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-Institute-somwar-peth-pune#breadcrumb",
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
          "item": "https://www.asquareclasses.com/iit-jee-coaching-classes-Institute-somwar-peth-pune"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-Institute-somwar-peth-pune#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you provide coaching for both JEE Mains and JEE Advanced?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we offer complete coaching for both JEE Mains and JEE Advanced at our IIT JEE coaching classes in Somwar Peth Pune, including chapter-wise tests and advanced problem-solving sessions."
          }
        },
        {
          "@type": "Question",
          "name": "Are small batches available at ASQUARE Somwar Peth?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, ASQUARE maintains small batches at our Top IIT JEE Classes in Somwar Peth Pune to ensure personalised attention and stronger concept clarity."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer dropper or repeater batches?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we have dedicated dropper/repeater batches designed for focused preparation under our Best IIT JEE Coaching in Somwar Peth Pune."
          }
        },
        {
          "@type": "Question",
          "name": "What is the teaching approach at ASQUARE Academy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our approach includes conceptual explanation, daily practice sheets, mock tests, and regular doubt resolution to build strong fundamentals."
          }
        },
        {
          "@type": "Question",
          "name": "Can students from nearby areas join the Somwar Peth branch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, students from Camp, Shivajinagar, Swargate, Sadashiv Peth, and more can easily join our IIT JEE Classes in Somwar Peth Pune due to its central location."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide study material and test series?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, ASQUARE provides updated study material and a complete test series as part of our Top JEE Mains Coaching Classes in Somwar Peth Pune."
          }
        },
        {
          "@type": "Question",
          "name": "Is there guidance available for IIT JEE Advanced preparation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, students get advanced tests, doubt-clearing, and problem-solving sessions for IIT JEE Advanced Preparation Somwar Peth Pune."
          }
        },
        {
          "@type": "Question",
          "name": "Why choose ASQUARE for IIT JEE coaching in Somwar Peth?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE offers expert faculty, personalised teaching, small batches, and consistent results, making it one of the Best IIT JEE Classes in Somwar Peth Pune."
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
                Crack JEE Mains & Advanced with <span className="highlight-text text-warning">ASQUARE Academy – Somwar Peth</span>
              </motion.h1>

              <p className="lead d-none d-md-block">
              Preparing for IIT JEE requires clarity, consistency, and expert guidance. At ASQUARE Academy, we provide the most trusted IIT JEE coaching classes in Somwar Peth, Pune, designed to help students strengthen their concepts, master problem-solving, and perform confidently in the toughest engineering entrance exams.<br></br>Recognized among the Best IIT JEE Coaching in Somwar Peth, we specialize in both JEE Mains and IIT JEE Advanced Preparation in Somwar Peth, delivering results through structured learning, regular assessments, and personalized mentorship. Students from Somwar Peth and nearby areas like Rasta Peth, Guruwar Peth, Camp, Nana Peth, and Bhavani Peth already trust ASQUARE for their IIT JEE success.
              </p>

              <p className="lead d-block d-md-none">
               Preparing for IIT JEE requires clarity, consistency, and expert guidance. At ASQUARE Academy, we provide the most trusted IIT JEE coaching classes in Somwar Peth, Pune, designed to help students strengthen their concepts, master problem-solving, and perform confidently in the toughest engineering entrance exams. <br></br>Recognized among the Best IIT JEE Coaching in Somwar Peth, we specialize in both JEE Mains and IIT JEE Advanced Preparation in Somwar Peth, delivering results through structured learning, regular assessments, and personalized mentorship. Students from Somwar Peth and nearby areas like Rasta Peth, Guruwar Peth, Camp, Nana Peth, and Bhavani Peth already trust ASQUARE for their IIT JEE success.
              </p>

              <a className="btn btn-warning btn-lg rounded-pill mt-3 shadow-lg">
                <Link to={'/'} className="nav-item nav-item-list text-warning">🚀 Enroll Now</Link>
              </a>
            </div>

            <div className="col-12 col-lg-4 col-md-12 mt-5 mt-md-0 text-center">
              <img src={sampleimg3} alt="ASQUARE Academy Somwar Peth" className="img-fluid mx-auto fade-in imgsiz" style={{ objectFit: "contain", opacity: 0.95, borderRadius: "10px" }} />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Why Choose */}
      <section className="jee-why py-5">
        <div className="container">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">
            Why Choose <span className="text-primary">ASQUARE Academy</span> for IIT JEE in Somwar Peth?
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
                Programs Offered at <span className="text-primary">ASQUARE – Somwar Peth</span>
              </motion.h4>

              {/* <p className="lead text-secondary">
                Our JEE programs are structured to build concepts, develop exam strategy, and ensure steady progress through tests and mentor feedback. Choose from long-term foundation, one-year target, crash courses, or repeater programs.
              </p> */}
              •	2-Year Integrated Program (Class 11 → 12) <br></br>
•	1-Year Target Program (Class 12)<br></br>
•	Dropper/Repeater Batch<br></br>
•	Crash Course (2–3 Months)<br></br>

            </div>

            <div className="col-lg-4 text-center order-1">
              <motion.img whileHover={{ scale: 1.03 }} src={sampleimg4} alt="Somwar Peth JEE Coaching" className="img-fluid rounded-4 shadow-lg mx-auto d-block" style={{ width: "85%" }} />
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
                {["Learn →", "Practice →", "Assess →", "Revise"].map((text, i) => (
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
            Key Features of <span className="highlight-text text-warning">Somwar Peth</span>
          </motion.h3>

          <div className="row justify-content-center g-4">
            {[
              "Updated JEE study material (digital + print)",
              "Regular doubt-clearing sessions with faculty",
              "Performance analytics via online test series",
              "Workshops on accuracy, time management & exam strategy",
              "Consistently ranked among the Best IIT JEE Classes in Somwar Peth and trusted by aspirants across Pune"
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
               ASQUARE Academy students from Somwar Peth and nearby areas have consistently achieved high ranks in JEE Mains & Advanced, securing admissions to IITs, NITs, and top engineering institutes. This makes us one of the Top IIT JEE Classes in Somwar Peth, Pune.
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
              <FAQAccordion faqs={faqs.slice(0, Math.ceil(faqs.length / 2))} accordionId="somwarFaqLeft" />
            </div>
            <div className="col-12 col-md-6">
              <FAQAccordion faqs={faqs.slice(Math.ceil(faqs.length / 2))} accordionId="somwarFaqRight" />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Final CTA */}
      <section id="enroll" className="jee-enroll-section py-5 text-center text-white">
        <div className="container">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
            Join ASQUARE Academy <span className="highlight-text text-warning">Somwar Peth Today</span>
          </motion.h3>

          <p className="lead mb-4">
           If you’re looking for the Best IIT JEE Coaching in Somwar Peth, Pune, your search ends here. With expert guidance, structured programs, and a proven success record, ASQUARE Academy is the trusted name for JEE preparation.
          </p>

          <p><MapPin className="text-warning" /> Convenient for students from  <b className="bld">Somwar Peth, Rasta Peth, Guruwar Peth, Camp, Nana Peth, and Bhavani Peth.</b></p>

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

export default IITJEESomwarPeth;
