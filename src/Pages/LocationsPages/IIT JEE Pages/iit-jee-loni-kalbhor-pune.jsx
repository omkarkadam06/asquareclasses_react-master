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

import sampleimg1 from '../../../Assets/SampleImages/Banners/Banners (8).jpeg';
import sampleimg11 from '../../../Assets/SampleImages/Banners/Banners (3).jpeg';
import sampleimg2 from '../../../Assets/SampleImages/MobBanners/MobBanner8.jpeg';
import sampleimg22 from'../../../Assets/SampleImages/MobBanners/MobBanner3.jpeg';

import sampleimg3 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (9).jpeg';
import sampleimg4 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (2).jpeg';
import sampleimg6 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (4).jpeg';

import Form from "../../../Components/Form2/Form2.jsx";

const Reviews = React.lazy(() => import("../../../Components/Reviews/Reviews.jsx"));

function IITJEELoniKalbhor() {
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
      title: "Flexible Learning",
      desc: "Options for both classroom and online coaching.",
    },
        {
      Icon: Lightbulb,
      title: "Mentorship Support",
      desc: "Balancing JEE preparation with Class XI & XII academics.",
    },
  ];

  const subjects = [
    { title: "Physics", desc: "Concept clarity, numerical practice and application-oriented problems." },
    { title: "Chemistry", desc: "Physical, Organic & Inorganic topics with solved examples and tricks." },
    { title: "Mathematics", desc: "Extensive practice in Algebra, Calculus, Geometry & Probability." },
  ];

  const batches = [
    { title: "2-Year Integrated Program (Class 11 → 12)", desc: "Long-term conceptual build-up + Board & JEE preparation." },
    { title: "1-Year Target Program (Class 12)", desc: "Intensive course focused on Class XII + JEE readiness." },
    { title: "Dropper/Repeater Batch", desc: "Dedicated one-year program for XII pass-outs aiming at top ranks." },
    { title: "Crash Course (2–3 Months)", desc: "Short-term revision program with mock tests and practice sessions." },
  ];

  const faqs = [
    { q: "Q1: Do you provide coaching for both JEE Mains and JEE Advanced?", a: "Yes — ASQUARE Academy offers comprehensive IIT JEE coaching classes in Loni Kalbhor covering both JEE Mains and JEE Advanced." },
    { q: "Q2: Are small batches available?", a: "Yes — we offer small batches to give every student personalised attention and focused mentoring." },
    { q: "Q3: Do you offer dropper/repeater batches?", a: "Yes — specialised dropper/repeater batches are available with intensive revision, advanced practice and regular tests." },
    { q: "Q4: What is the teaching approach at ASQUARE?", a: "We follow a concept-driven cycle: Learn → Practice → Assess → Revise, with frequent mock tests and doubt-solving sessions." },
    { q: "Q5: Can students from nearby areas join the Loni Kalbhor branch?", a: "Absolutely — students from Fursungi, Hadapsar, Manjari, Wadki and Uruli Devachi commonly enroll." },
    { q: "Q6: What subjects are covered?", a: "Physics, Chemistry and Mathematics are taught with emphasis on problem-solving and exam strategy." },
    { q: "Q7: Do you conduct mock tests and practice sessions?", a: "Yes — regular mock tests, chapter-wise practice and performance tracking are part of the curriculum." },
    { q: "Q8: Why choose ASQUARE Academy for Loni Kalbhor?", a: "Expert faculty, personalised batches, structured teaching and consistent results make ASQUARE a preferred IIT JEE coaching centre in Loni Kalbhor." },
  ];

  return (
    <>
      <Helmet>
        <title>IIT JEE Coaching Classes in Loni Kalbhor | Best IIT JEE Institute – ASQUARE Academy</title>
        <meta name="title" content="IIT JEE Coaching Classes in Loni Kalbhor | Best IIT JEE Institute – ASQUARE Academy" />
        <meta
          name="description"
          content="Join the best IIT JEE coaching classes in Loni Kalbhor with expert faculty, small batches, mock tests & complete JEE Mains/Advanced preparation at ASQUARE Academy."
        />
        <meta
          name="keywords"
          content="IIT JEE coaching classes in Loni Kalbhor,
Best IIT JEE Coaching in  Loni Kalbhor,
Top JEE Mains Coaching Classes Loni Kalbhor,
IIT JEE Advanced Preparation Loni Kalbhor,
JEE Advanced coaching classes in Loni Kalbhor,
IIT JEE Classes in Loni Kalbhor,
Best IIT JEE Classes in Loni Kalbhor,
Top IIT JEE Classes in Loni Kalbhor,
IIT JEE Institute coaching in Loni Kalbhor,
IIT JEE Institute classes in Loni Kalbhor,
"
        />
        <script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "name": "ASQUARE Academy",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-Institute-loni-kalbhor-pune",
      "telephone": "9766118877",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Loni Kalbhor",
        "addressLocality": "Pune",
        "postalCode": "412201",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune/"
      ],
      "description": "IIT JEE coaching classes in Loni Kalbhor offering JEE Mains & Advanced preparation with expert faculty, small batches, and regular mock tests."
    },
    {
      "@type": "WebPage",
      "name": "IIT JEE Coaching Classes in Loni Kalbhor",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-Institute-loni-kalbhor-pune",
      "description": "Best IIT JEE Coaching in Loni Kalbhor with structured learning, mock tests and expert faculty for JEE Mains & Advanced."
    },
    {
      "@type": "EducationalOrganization",
      "name": "ASQUARE Academy",
      "url": "https://www.asquareclasses.com/",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "9766118877",
        "contactType": "customer service"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you provide coaching for both JEE Mains and JEE Advanced?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, ASQUARE Academy offers complete IIT JEE coaching classes in Loni Kalbhor for both JEE Mains and JEE Advanced with a structured curriculum."
          }
        },
        {
          "@type": "Question",
          "name": "Are small batches available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, small batches are available for personalised attention, making ASQUARE one of the best IIT JEE coaching centres in Loni Kalbhor."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer dropper/repeater batches?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, dropper and repeater batches are offered with intensive practice, mock tests, and concept revision."
          }
        },
        {
          "@type": "Question",
          "name": "What is the teaching approach at ASQUARE?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our teaching approach includes concept-based sessions, doubt-solving, weekly tests, and personalised exam strategies."
          }
        },
        {
          "@type": "Question",
          "name": "Can students from nearby areas join the Loni Kalbhor branch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, students from nearby locations can easily join our IIT JEE coaching in Loni Kalbhor with flexible batch timings."
          }
        },
        {
          "@type": "Question",
          "name": "What subjects are covered in your IIT JEE classes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Physics, Chemistry, and Mathematics are covered with expert faculty focusing on concept clarity and problem-solving."
          }
        },
        {
          "@type": "Question",
          "name": "Do you conduct regular mock tests and practice sessions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, regular mock tests, chapter-wise practice and performance tracking are conducted throughout the course."
          }
        },
        {
          "@type": "Question",
          "name": "Why is ASQUARE Academy considered the best IIT JEE institute in Loni Kalbhor?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE Academy is known for expert faculty, small batches, personalised support and strong results, making it a top IIT JEE institute in Loni Kalbhor."
          }
        }
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
          "name": "IIT JEE Coaching",
          "item": "https://www.asquareclasses.com/iit-jee-coaching/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Loni Kalbhor",
          "item": "https://www.asquareclasses.com/iit-jee-coaching-classes-Institute-loni-kalbhor-pune"
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
                Advanced JEE Mains & IIT Prep at <span className="highlight-text text-warning">ASQUARE Academy – Loni Kalbhor</span>
              </motion.h1>

              {/* <motion.h2>Trusted IIT JEE Coaching for Loni Kalbhor Aspirants</motion.h2> */}

              <p className="lead d-none d-md-block">
                Preparing for IIT JEE requires clarity, consistency, and expert guidance. At ASQUARE Academy, we provide the most trusted IIT JEE coaching classes in Loni Kalbhor, Pune, designed to help students strengthen their concepts, master problem-solving, and perform with confidence in the toughest engineering entrance exams. Recognized among the Best IIT JEE Coaching in Loni Kalbhor, we specialize in both JEE Mains and IIT JEE Advanced Preparation through structured learning, regular assessments, and personalised mentorship. Students from Loni Kalbhor and nearby areas like Fursungi, Hadapsar, Manjari, Wadki, and Uruli Devachi trust ASQUARE for their IIT JEE success.
              </p>

              <p className="lead d-block d-md-none">
                Preparing for IIT JEE requires clarity, consistency, and expert guidance. At ASQUARE Academy Loni Kalbhor we help students strengthen concepts and master problem solving with structured programs and mentorship.
              </p>

              <a className="btn btn-warning btn-lg rounded-pill mt-3 shadow-lg">
                <Link to={'/'} className="nav-item nav-item-list text-warning">🚀 Enroll Now</Link>
              </a>
            </div>

            {/* Right Side: Image */}
            <div className="col-12 col-lg-4 col-md-12 mt-5 mt-md-0 text-center">
              <img src={sampleimg3} alt="ASQUARE Academy Loni Kalbhor" className="img-fluid mx-auto fade-in imgsiz" style={{ objectFit: "contain", opacity: 0.95, borderRadius: "10px" }} />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Why Choose */}
      <section className="jee-why py-5">
        <div className="container">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">
            Why Choose <span className="text-primary">ASQUARE Academy</span> for IIT JEE in Loni Kalbhor?
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
                Programs Offered at <span className="text-primary">ASQUARE – Loni Kalbhor</span>
              </motion.h4>

              {batches.map((b, i) => (
                <div key={i} className="jee-subject-box mb-3 p-3 rounded-4 bg-white bg-opacity-10 backdrop-blur-md border border-light border-opacity-25">
                  <h5 className="fw-semibold">{b.title}</h5>
                  {b.desc && <p className="small mb-0">{b.desc}</p>}
                </div>
              ))}
            </div>

            <div className="col-lg-4 text-center order-1">
              <motion.img whileHover={{ scale: 1.03 }} src={sampleimg4} alt="JEE Coaching Loni Kalbhor" className="img-fluid rounded-4 shadow-lg mx-auto d-block" style={{ width: "85%" }} />
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
            Key Features of <span className="highlight-text text-warning">Loni Kalbhor</span>
          </motion.h3>

          <div className="row justify-content-center g-4">
            {[
              "Updated JEE study material (digital + print)",
              "Regular doubt-clearing sessions with faculty",
              "Performance analytics via online test series",
              "Workshops on accuracy, time management & exam strategy",
              "Consistently ranked among the Best IIT JEE Classes in Loni Kalbhor and trusted by aspirants across Pune",
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
                ASQUARE Academy students from Loni Kalbhor and nearby areas have consistently achieved high ranks in JEE Mains & Advanced, securing admissions to IITs, NITs, and top engineering institutes.
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
              <FAQAccordion faqs={faqs.slice(0, Math.ceil(faqs.length / 2))} accordionId="loniFaqLeft" />
            </div>
            <div className="col-12 col-md-6">
              <FAQAccordion faqs={faqs.slice(Math.ceil(faqs.length / 2))} accordionId="loniFaqRight" />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Final CTA */}
      <section id="enroll" className="jee-enroll-section py-5 text-center text-white">
        <div className="container">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
            Enroll Today at <span className="highlight-text text-warning">ASQUARE Academy – Loni Kalbhor</span>
          </motion.h3>

          <p className="lead mb-4">
            If you’re looking for the Best IIT JEE Coaching in Loni Kalbhor, Pune, your search ends here. With expert guidance, structured programs, and a proven success record, ASQUARE Academy is the trusted name for JEE preparation.
          </p>

          <p><MapPin className="text-warning" /> Convenient for students from <b className="bld">Loni Kalbhor, Fursungi, Hadapsar, Manjari, Wadki, and Uruli Devachi.</b></p>

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

export default IITJEELoniKalbhor;
