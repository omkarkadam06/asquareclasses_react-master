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

import sampleimg1 from '../../../Assets/SampleImages/Banners/Banners (7).jpeg';
import sampleimg11 from '../../../Assets/SampleImages/Banners/Banners (2).jpeg';
import sampleimg2 from '../../../Assets/SampleImages/MobBanners/MobBanner8.jpeg';
import sampleimg22 from'../../../Assets/SampleImages/MobBanners/MobBanner2.jpeg';

import sampleimg3 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (9).jpeg';
import sampleimg4 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (2).jpeg';
import sampleimg6 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (4).jpeg';

import Form from "../../../Components/Form2/Form2.jsx";

const Reviews = React.lazy(() => import("../../../Components/Reviews/Reviews.jsx"));

function IITJEEManjari() {
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
      desc: "Subject specialists with deep expertise in Physics, Chemistry & Mathematics focused on JEE strategy.",
    },
    {
      Icon: BookOpen,
      title: "Structured Curriculum",
      desc: "From NCERT fundamentals to advanced-level JEE problem solving — a well-sequenced syllabus.",
    },
    {
      Icon: Target,
      title: "Individual Attention",
      desc: "Small batches in Manjari for better engagement, faster doubt resolution and focused mentoring.",
    },
    {
      Icon: BarChart,
      title: "Frequent Assessments",
      desc: "Weekly quizzes, full-length mock tests and detailed performance analysis to track progress.",
    },
    {
      Icon: Lightbulb,
      title: "Learning Flexibility",
      desc: "Classroom & live-online options with mentorship support to balance boards + JEE.",
    },
       {
      Icon: Lightbulb,
      title: "Balanced Mentorship",
      desc: "Helping students excel in both board exams and JEE preparation.",
    },
  ];

  const subjects = [
    {
      title: "Physics",
      desc: "Concept clarity + numerical practice to build accuracy under exam conditions.",
    },
    {
      title: "Chemistry",
      desc: "Complete coverage of Physical, Organic & Inorganic Chemistry with problem solving.",
    },
    {
      title: "Mathematics",
      desc: "Rigorous practice in Algebra, Calculus, Trigonometry, Geometry & Probability.",
    },
  ];

  const batches = [
    { title: "2-Year Integrated Course (Class 11 → 12)", desc: "Long-term program covering Board + JEE preparation." },
    { title: "1-Year Target Batch (Class 12)", desc: "Intensive Class XII + JEE focused course." },
    { title: "Repeater/Dropper Batch", desc: "One-year dedicated program for repeaters aiming for top ranks." },
    { title: "Crash Course (2–3 Months)", desc: "Short revision program with mock tests and practice sessions." },
  ];

  const faqs = [
    {
      q: "Q1: Does ASQUARE offer coaching for both JEE Mains and Advanced?",
      a: "Yes — ASQUARE Academy Manjari provides full coaching for both JEE Mains & JEE Advanced with structured modules and experienced faculty.",
    },
    {
      q: "Q2: Are small batches available for personalised guidance?",
      a: "Yes — we maintain small batch sizes at Manjari to ensure personal attention and faster doubt resolution.",
    },
    {
      q: "Q3: Do you run dropper/repeater batches?",
      a: "Yes — dedicated repeater/dropper batches are available with focused revision, tests and mentorship.",
    },
    {
      q: "Q4: What is the teaching approach at ASQUARE?",
      a: "We follow a concept → practice → test → revise cycle, backed by regular feedback and analytics.",
    },
    {
      q: "Q5: Can students from nearby areas join the Manjari centre?",
      a: "Absolutely — students from Hadapsar, Mundhwa, Keshav Nagar, Fursungi, Loni Kalbhor and nearby localities join Manjari centre.",
    },
    {
      q: "Q6: Which subjects are covered?",
      a: "Physics, Chemistry and Mathematics (PCM) with chapterwise practice and mock tests.",
    },
    {
      q: "Q7: Do you conduct regular mock tests?",
      a: "Yes — weekly tests and full-length mock exams are part of our curriculum to build exam temperament.",
    },
    {
      q: "Q8: Why choose ASQUARE in Manjari?",
      a: "Experienced faculty, small batches, personalised mentoring and proven results make ASQUARE a top choice in Manjari.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>IIT JEE Coaching Classes in Manjari | Best IIT JEE Institute – ASQUARE Academy</title>
        <meta name="title" content="IIT JEE Coaching Classes in Manjari | Best IIT JEE Institute – ASQUARE Academy" />
        <meta
          name="description"
          content="Join the best IIT JEE coaching classes in Manjari — expert faculty, small batches, mock tests & complete JEE Mains/Advanced preparation at ASQUARE Academy."
        />
        <meta
          name="keywords"
          content="IIT JEE coaching classes in Manjari,
Best IIT JEE Coaching in  Manjari,
Top JEE Mains Coaching Classes Manjari,
IIT JEE Advanced Preparation Manjari,
JEE Advanced coaching classes in Manjari,
IIT JEE Classes in Manjari,
Best IIT JEE Classes in Manjari,
Top IIT JEE Classes in Manjari,
IIT JEE Institute coaching in Manjari,
IIT JEE Institute classes in Manjari,
"
        />
        <script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-Institute-manjari-pune#localbusiness",
      "name": "ASQUARE Academy - IIT JEE Coaching Classes in Manjari",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "telephone": "9766118877",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-Institute-manjari-pune",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Manjari",
        "addressRegion": "Maharashtra",
        "addressCountry": "India"
      },
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune"
      ],
      "description": "Best IIT JEE coaching classes in Manjari with expert faculty, small batches & complete JEE Mains and Advanced preparation."
    },
    {
      "@type": "EducationalOrganization",
      "name": "ASQUARE Academy",
      "url": "https://www.asquareclasses.com/",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "description": "Top IIT JEE coaching institute in Manjari offering JEE Mains & Advanced preparation with expert mentors and personalised guidance."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-Institute-manjari-pune#webpage",
      "name": "IIT JEE Coaching Classes in Manjari | ASQUARE Academy",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-Institute-manjari-pune",
      "description": "Top IIT JEE Classes in Manjari offering JEE Mains & Advanced preparation with small batches, mock tests & expert coaching."
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
          "name": "IIT JEE Coaching Classes in Manjari"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does ASQUARE offer coaching for both JEE Mains and Advanced?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, ASQUARE Academy offers IIT JEE coaching for both JEE Mains and JEE Advanced with strong conceptual training and complete preparation."
          }
        },
        {
          "@type": "Question",
          "name": "Are small batches available for personalized guidance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, ASQUARE maintains small batches for better doubt-solving and focused attention, making it one of the best IIT JEE coaching classes in Manjari."
          }
        },
        {
          "@type": "Question",
          "name": "Do you conduct special batches for droppers or repeaters?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, dedicated dropper and repeater batches are available with intensive practice and mock exams."
          }
        },
        {
          "@type": "Question",
          "name": "What is the teaching approach used at ASQUARE?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE uses a concept-driven teaching approach with interactive lessons, weekly tests, mentoring, and exam-oriented strategies."
          }
        },
        {
          "@type": "Question",
          "name": "Can students from Hadapsar or Mundhwa join the Manjari center?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, students from nearby areas like Hadapsar and Mundhwa can easily join the Manjari center due to its accessible location."
          }
        },
        {
          "@type": "Question",
          "name": "Which subjects are covered in IIT JEE classes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE covers Physics, Chemistry, and Mathematics with expert mentors for strong conceptual clarity."
          }
        },
        {
          "@type": "Question",
          "name": "Do you conduct regular mock tests and practice sessions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, regular tests, chapter-wise practice, and full-length mock exams are part of the JEE preparation."
          }
        },
        {
          "@type": "Question",
          "name": "Why is ASQUARE considered the best IIT JEE institute in Manjari?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Expert faculty, small batches, personalised guidance, and strong results make ASQUARE the top IIT JEE coaching institute in Manjari."
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
                Excel in JEE Mains & Advanced with <span className="highlight-text text-warning">ASQUARE Academy – Manjari</span>
              </motion.h1>

              <p className="lead d-none d-md-block">
               Achieving success in IIT JEE requires focus, expert guidance, and a structured preparation plan. At ASQUARE Academy, we offer one of the most trusted IIT JEE coaching classes in Manjari, Pune, designed to help students strengthen their foundation, develop analytical thinking, and score high in JEE Mains & Advanced exams. <br></br>Recognized among the Top IIT JEE Coaching Institutes in Manjari, ASQUARE Academy combines academic excellence with personalized support. Students from Manjari and nearby areas like Hadapsar, Mundhwa, Keshav Nagar, Fursungi, and Loni Kalbhor have achieved outstanding results with our guidance and mentorship.
              </p>

              <p className="lead d-block d-md-none">
                   Achieving success in IIT JEE requires focus, expert guidance, and a structured preparation plan. At ASQUARE Academy, we offer one of the most trusted IIT JEE coaching classes in Manjari, Pune, designed to help students strengthen their foundation, develop analytical thinking, and score high in JEE Mains & Advanced exams. <br></br>Recognized among the Top IIT JEE Coaching Institutes in Manjari, ASQUARE Academy combines academic excellence with personalized support. Students from Manjari and nearby areas like Hadapsar, Mundhwa, Keshav Nagar, Fursungi, and Loni Kalbhor have achieved outstanding results with our guidance and mentorship.
              </p>

              <a className="btn btn-warning btn-lg rounded-pill mt-3 shadow-lg">
                <Link to={'/'} className="nav-item nav-item-list text-warning">🚀 Enroll Now</Link>
              </a>
            </div>

            <div className="col-12 col-lg-4 col-md-12 mt-5 mt-md-0 text-center">
              <img src={sampleimg3} alt="ASQUARE Academy Manjari" className="img-fluid mx-auto fade-in imgsiz" style={{ objectFit: "contain", opacity: 0.95, borderRadius: "10px" }} />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Why Choose */}
      <section className="jee-why py-5">
        <div className="container">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">
            Why Choose <span className="text-primary">ASQUARE Academy</span> for IIT JEE in Manjari?
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
                Programs Offered at <span className="text-primary">ASQUARE – Manjari</span>
              </motion.h4>

              <p className="lead text-secondary">
                Our Manjari programs combine concept clarity, systematic practice, and regular testing to prepare students for both JEE Mains and JEE Advanced.
              </p>

              {batches.map((b, i) => (
                <div key={i} className="jee-subject-box mb-3 p-3 rounded-4 bg-white bg-opacity-10 backdrop-blur-md border border-light border-opacity-25">
                  <h5 className="fw-semibold">{b.title}</h5>
                  {b.desc && <p className="small mb-0">{b.desc}</p>}
                </div>
              ))}
            </div>

            <div className="col-lg-4 text-center order-1">
              <motion.img whileHover={{ scale: 1.03 }} src={sampleimg4} alt="JEE Coaching Manjari" className="img-fluid rounded-4 shadow-lg mx-auto d-block" style={{ width: "85%" }} />
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
                Teaching <span className="text-primary">Approach</span>
              </motion.h3>

              <div className="row g-4 justify-content-center">
                {[
                  "Concept → ",
                  "Practice → ",
                  "Test → ",
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
            Key Features of <span className="highlight-text text-warning">Manjari</span>
          </motion.h3>

          <div className="row justify-content-center g-4">
            {[
              "Updated & detailed study material (printed + digital)",
              "Regular doubt-clearing sessions & interactive teaching",
              "Online testing platform with performance analytics",
              "Workshops on exam strategy, speed & accuracy",
              "Consistently rated among the Best IIT JEE Classes in Manjari and nearby regions",
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
                Results That <span className="highlight-text text-warning">Prove Our Commitment</span>
              </motion.h3>
              <p className="lead text-light">
                Students from Manjari and neighboring areas have consistently excelled in JEE Mains & Advanced, earning admissions into IITs, NITs, and top private engineering colleges. ASQUARE Academy’s result-driven teaching ensures every student moves closer to their dream of becoming an IITian.
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
              <FAQAccordion faqs={faqs.slice(0, Math.ceil(faqs.length / 2))} accordionId="manjariFaqLeft" />
            </div>
            <div className="col-12 col-md-6">
              <FAQAccordion faqs={faqs.slice(Math.ceil(faqs.length / 2))} accordionId="manjariFaqRight" />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Final CTA */}
      <section id="enroll" className="jee-enroll-section py-5 text-center text-white">
        <div className="container">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
            Join ASQUARE Academy <span className="highlight-text text-warning">Manjari Today</span>
          </motion.h3>

          <p className="lead mb-4">
           If you’re searching for the Best IIT JEE Coaching Classes in Manjari, Pune, ASQUARE Academy is the trusted choice. With expert mentors, well-designed courses, and a proven success record, we ensure every student is exam-ready and confident.
          </p>

          <p><MapPin className="text-warning" /> Serving students from <b className="bld">Manjari, Hadapsar, Mundhwa, Keshav Nagar, Fursungi, and Loni Kalbhor.</b></p>

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

export default IITJEEManjari;
