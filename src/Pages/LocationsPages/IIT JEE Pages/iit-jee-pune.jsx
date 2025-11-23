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
import sampleimg1 from "../../../Assets/SampleImages/sampleimg1.jpeg";
// import sampleimg2 from "../../../Assets/SampleImages/sampleimg2.jpeg";
import sampleimg2 from '../../../Assets/SampleImages/MobBanners/MobBanner4.jpeg';
import sampleimg22 from'../../../Assets/SampleImages/MobBanners/MobBanner5.jpeg';
import sampleimg3 from "../../../Assets/SampleImages/sampleimg3.jpeg";
import sampleimg4 from "../../../Assets/SampleImages/sampleimg4.jpeg";
import sampleimg5 from "../../../Assets/SampleImages/sampleimg5.jpeg";
import sampleimg6 from "../../../Assets/SampleImages/sampleimg6.jpeg";
import sampleimg7 from "../../../Assets/SampleImages/sampleimg7.jpeg";
// import Swal from "sweetalert2";
import Form from "../../../Components/Form2/Form2.jsx";

const Reviews = React.lazy(() => import("../../../Components/Reviews/Reviews.jsx"));

function IITJEEPune() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Content taken EXACTLY from your provided Word file
  const whyChoose = [
    {
      Icon: Users,
      title: "Expert Teaching Faculty",
      desc:
        "Highly qualified teachers for IIT JEE Classes in Pune, NEET & CET with years of experience in competitive exam coaching.",
    },
    {
      Icon: BookOpen,
      title: "Full PCM Coverage",
      desc:
        "Physics, Chemistry & Mathematics taught with updated JEE patterns, making us the Best IIT JEE Classes in Pune.",
    },
    {
      Icon: Target,
      title: "Focused & Personalized Mentoring",
      desc:
        "Small batches, doubt-solving sessions, and individual guidance for all students.",
    },
    {
      Icon: BarChart,
      title: "Regular Tests & Mock Exams",
      desc:
        "Topic-wise quizzes, weekly tests, and complete exam simulations strengthen IIT JEE Advanced Preparation Pune.",
    },
    {
      Icon: Lightbulb,
      title: "Motivation & Career Counseling",
      desc:
        "Study planning, performance reviews, and regular parent–teacher interactions.",
    },
  ];

  const subjects = [
    { title: "Physics", desc: "Concepts + numerical mastery" },
    { title: "Chemistry", desc: "Physical, Organic & Inorganic" },
    {
      title: "Mathematics",
      desc: "Algebra, Calculus, Geometry, Probability & more",
    },
  ];

  const batches = [
    {
      title: "2-Year Foundation Program (After Class 10)",
      desc:
        "Covers Class XI + XII syllabus along with JEE Main & Advanced preparation.",
    },
    {
      title: "1-Year Target Program (Class 12 Moving)",
      desc: "Fast-track coaching with complete syllabus coverage and intensive practice.",
    },
    {
      title: "Crash Course (2–3 Months)",
      desc: "Quick revision modules, practice sheets & test series.",
    },
    {
      title: "Droppers Batch",
      desc: "Dedicated one-year preparation for repeaters at our JEE Advanced Coaching Classes in Pune.",
    },
  ];

  const faqs = [
    {
      q: "Q1: Which is the Best IIT JEE Coaching in Pune?",
      a:
        "ASQUARE Academy is widely recognized as the Best IIT JEE Coaching in Pune due to expert faculty, structured study methods & consistent results.",
    },
    {
      q: "Q2: What subjects are covered in your IIT JEE Classes in Pune?",
      a: "We offer complete PCM coaching—Physics, Chemistry & Mathematics.",
    },
    {
      q: "Q3: Do you conduct mock exams?",
      a:
        "Yes. Weekly tests and full-length mock exams help students excel in JEE Main & Advanced.",
    },
    {
      q: "Q4: Why are you considered the Top JEE Mains Coaching Classes Pune?",
      a:
        "Interactive classes, doubt-solving, personalized mentoring & performance tracking make us a top choice.",
    },
    {
      q: "Q5: Do you offer specialized IIT JEE Advanced Preparation in Pune?",
      a:
        "Yes. We provide targeted modules, advanced-level question practice & mentor-led guidance.",
    },
    {
      q: "Q6: Are dropper batches available?",
      a: "Yes. We offer exclusive batches at our JEE Advanced Coaching Classes in Pune.",
    },
    {
      q: "Q7: What makes ASQUARE the Best IIT JEE Classes in Pune?",
      a:
        "Our methodology blends strong concept-building, test-based learning & individual support.",
    },
    {
      q: "Q8: Which areas can join your Top IIT JEE Classes in Pune?",
      a:
        "Students from Pune, PCMC, Chinchwad, Pimpri, Nigdi, Wakad, Akurdi, Ravet & nearby areas.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Best IIT JEE Coaching Classes in Pune | JEE Main & Advanced Institute</title>

        <meta
          name="title"
          content="Best IIT JEE Coaching Classes in Pune | JEE Main & Advanced Institute"
        />
        <meta
          name="description"
          content="Join the Best IIT JEE Coaching in Pune offering expert PCM classes, mock tests, doubt-solving & structured JEE Main and Advanced preparation for top results."
        />

        <meta
          name="keywords"
          content="IIT JEE coaching classes in pune,
Best IIT JEE Coaching in pune,
Top JEE Mains Coaching Classes pune,
IIT JEE Advanced Preparation pune,
JEE Advanced coaching classes in pune,
IIT JEE Classes in pune,
Best IIT JEE Classes in pune,
Top IIT JEE Classes in pune,
"
        />

        <script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@graph": [

    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-pune#localbusiness",
      "name": "ASQUARE Academy Pune - IIT JEE Coaching",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-pune",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "telephone": "9766118877",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Pune, Maharashtra",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411001",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune"
      ],
      "description": "Best IIT JEE Coaching in Pune offering expert PCM coaching, mock exams, personalized mentoring, and structured JEE Main & Advanced preparation."
    },

    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-pune#webpage",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-pune",
      "name": "IIT JEE Coaching Classes in Pune",
      "description": "Top IIT JEE Coaching in Pune with Physics, Chemistry and Mathematics classes, weekly mock tests, dropper batches and advanced-level exam preparation."
    },

    {
      "@type": "EducationalOrganization",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-pune#educational",
      "name": "ASQUARE Academy Pune",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-pune",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "description": "Best IIT JEE Classes in Pune offering structured PCM coaching, mock tests, doubt-solving sessions and result-driven JEE Main & Advanced preparation.",
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune"
      ]
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-pune#breadcrumb",
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
          "item": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-pune"
        }
      ]
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-pune#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Which is the Best IIT JEE Coaching in Pune?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE Academy is widely recognized as the Best IIT JEE Coaching in Pune due to expert faculty, structured study plans and consistent results."
          }
        },
        {
          "@type": "Question",
          "name": "What subjects are covered in your IIT JEE Classes in Pune?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer complete PCM coaching—Physics, Chemistry and Mathematics, aligned with JEE Main & Advanced requirements."
          }
        },
        {
          "@type": "Question",
          "name": "Do you conduct mock exams?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, weekly tests and full-length mock exams help students improve speed, accuracy and problem-solving for JEE Main & Advanced."
          }
        },
        {
          "@type": "Question",
          "name": "Why are you considered the Top JEE Mains Coaching Classes Pune?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Interactive classes, doubt-solving sessions, personalized mentoring and detailed performance tracking make us a top choice."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer specialized IIT JEE Advanced Preparation in Pune?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we provide dedicated modules, advanced-level practice, and mentor-guided training for effective JEE Advanced preparation."
          }
        },
        {
          "@type": "Question",
          "name": "Are dropper batches available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, exclusive dropper batches are available at our JEE Advanced Coaching Classes in Pune."
          }
        },
        {
          "@type": "Question",
          "name": "What makes ASQUARE the Best IIT JEE Classes in Pune?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Strong concepts, regular tests, personalized guidance and structured learning methodologies make ASQUARE the Best IIT JEE Classes in Pune."
          }
        },
        {
          "@type": "Question",
          "name": "Which areas can join your Top IIT JEE Classes in Pune?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students from Pune, PCMC, Chinchwad, Pimpri, Nigdi, Wakad, Akurdi, Ravet and nearby areas join our IIT JEE Coaching Programs."
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
              {[sampleimg1, sampleimg1, sampleimg1].map((img, i) => (
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

      {/* HERO SECTION */}
      <section className="jee-hero-section text-white d-flex align-items-center bg-transparent">
        <div className="container py-5">
          <div className="row align-items-center">
            {/* Left Side: Text */}
            <div className="col-12 col-lg-8 col-md-12 text-center text-md-start">
              <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
                IIT JEE Coaching Classes in Pune – <span className="highlight-text text-warning">ASQUARE Academy Pune</span>
              </motion.h1>

              {/* <motion.h2>Why Choose <span className="highlight-text text-primary">ASQUARE Academy Pune?</span></motion.h2> */}

              <p className="lead d-none d-md-block">
                ASQUARE Academy offers one of the Best IIT JEE Coaching in Pune, helping aspirants build strong concepts, boost problem-solving skills, and prepare strategically for both JEE Main & Advanced. As one of the Top JEE Mains Coaching Classes Pune, we deliver exam-focused training, personalized mentoring, and structured learning modules for engineering aspirants targeting IITs, NITs, IIITs, and top engineering colleges in India.
              </p>

              <p className="lead d-block d-md-none">
                ASQUARE Academy offers one of the Best IIT JEE Coaching in Pune, helping aspirants build strong concepts, boost problem-solving skills, and prepare strategically for both JEE Main & Advanced.
              </p>

              <a className="btn btn-warning btn-lg rounded-pill mt-3 shadow-lg">
                <Link to={"/"} className="nav-item nav-item-list text-warning">
                  🚀 Enroll Now
                </Link>
              </a>
            </div>

            {/* Right Side: Image */}
            <div className="col-12 col-lg-4 col-md-12 mt-5 mt-md-0 text-center">
              <img src={sampleimg3} alt="ASQUARE Academy Pune" className="img-fluid mx-auto fade-in imgsiz" style={{ objectFit: "contain", opacity: 0.95, borderRadius: "10px" }} />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* WHY CHOOSE */}
      <section className="jee-why py-5">
        <div className="container">
          <motion.h2 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">
            Why Choose <span className="text-primary">ASQUARE Academy Pune?</span>
          </motion.h2>

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

      {/* PROGRAMS */}
      <section className="jee-programs py-5 bg-light">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-8 text-center text-lg-start order-2">
              <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-centerr">
                Our <span className="highlight-text text-primary">IIT-JEE</span> Coaching Programs
              </motion.h3>

              <p className="lead text-secondary">
                The Joint Entrance Examination is one of India’s toughest engineering entrance exams. ASQUARE Academy provides structured, result-oriented programs making us the Top IIT JEE Classes in Pune for JEE Main & Advanced aspirants.
              </p>

              <div className="mt-3">
                <div className="mb-2"><strong>✔ 2-Year Foundation Program (After Class 10)</strong><div>Covers Class XI + XII syllabus along with JEE Main & Advanced preparation.</div></div>
                <div className="mb-2"><strong>✔ 1-Year Target Program (Class 12 Moving)</strong><div>Fast-track coaching with complete syllabus coverage and intensive practice.</div></div>
                <div className="mb-2"><strong>✔ Crash Course (2–3 Months)</strong><div>Quick revision modules, practice sheets & test series.</div></div>
                <div className="mb-2"><strong>✔ Droppers Batch</strong><div>Dedicated one-year preparation for repeaters at our JEE Advanced Coaching Classes in Pune.</div></div>
              </div>
            </div>

            <div className="col-lg-4 text-center order-1">
              <motion.img whileHover={{ scale: 1.03 }} src={sampleimg4} alt="JEE Coaching Pune" className="img-fluid rounded-4 shadow-lg mx-auto d-block" style={{ width: "85%" }} />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* SUBJECTS + BATCHES */}
      <section className="jee-gradient-section py-5 text-white">
        <div className="container">
          <motion.h4 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">
            Subjects We Cover
            <span className="highlight-text text-warning">&nbsp;&&nbsp;</span>
            Batch Options
          </motion.h4>
          <br />

          <div className="row g-4">
            <div className="col-lg-6">
              <h4 className="highlight-text text-warning fw-bold mb-4 text-centerr">Subjects We Cover</h4>
              {subjects.map((sub, i) => (
                <div key={i} className="jee-subject-box mb-4 p-3 pb-4 pt-4 rounded-4 bg-white bg-opacity-10 backdrop-blur-md border border-light border-opacity-25">
                  <h5 className="fw-semibold">{sub.title}</h5>
                  <p className="small mb-0">{sub.desc}</p>
                </div>
              ))}
            </div>

            <div className="col-lg-6">
              <h4 className="highlight-text text-warning fw-bold mb-4 text-centerr">Course Options & Batches</h4>
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

      {/* METHODOLOGY */}
      <section className="jee-method py-5 bg-light">
        <div className="container">
          <div className="row align-items-center g-4">

            <div className="col-lg-12 text-center text-lg-start">
              <motion.h4 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">
                Our Teaching Methodology
              </motion.h4>

              <div className="row g-4 justify-content-center">
                {[
                  "Daily lectures + curated assignments",
                  "One-on-one doubt-solving sessions",
                  "Weekly tests, unit tests & full-length mock exams",
                  "Performance tracking & PTMs",
                  "Smart strategies for time management & accuracy",
                ].map((text, i) => (
                  <div key={i} className="col-lg-4 col-md-6">
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

      {/* HIGHLIGHTS */}
      <section className="jee-highlights py-5 text-white">
        <div className="container text-center">
          <motion.h4 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
            <span className="highlight-text text-warning">Key Highlights of ASQUARE Academy Pune</span>
          </motion.h4>

          <div className="row justify-content-center g-4">
            {[
              "Limited batch size for personalized mentoring",
              "Updated study material, revision notes & practice modules",
              "Workshops on exam hacks, shortcuts & smart strategies",
              "Strong performance tracking system",
              "Known as one of the Top JEE Mains Coaching Classes Pune",
              "Trusted by students across Pune & PCMC",
            ].map((text, i) => (
              <motion.div key={i} className="col-md-5 col-lg-4 col-6" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <div className="highlight-card shadow-lg rounded-4 p-4 bg-white bg-opacity-10 backdrop-blur-md border border-light border-opacity-25">
                  <div className="icon-circle mx-auto mb-3">
                    <h2>🎓</h2>
                  </div>
                  <p className="fw-semibold text-light ">{text}</p>
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

      {/* RESULTS */}
      <section className="jee-results py-5 text-white">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-8 text-center text-lg-start">
              <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
                Success &amp; <span className="highlight-text text-warning">Results</span>
              </motion.h3>
              <p className="lead text-light">
                ASQUARE Academy has a proven record of helping students crack IIT JEE, NIT, and other engineering entrances. Our Pune branch carries forward this legacy with consistent success.
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
              Frequently Asked Questions (FAQ)
            </motion.h3>
          </div>

          <div className="row justify-content-center">
            <div className="col-12 col-md-6 mb-4 mb-md-0">
              <FAQAccordion faqs={faqs.slice(0, Math.ceil(faqs.length / 2))} accordionId="puneFaqLeft" />
            </div>

            <div className="col-12 col-md-6">
              <FAQAccordion faqs={faqs.slice(Math.ceil(faqs.length / 2))} accordionId="puneFaqRight" />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* FINAL CTA */}
      <section id="enroll" className="jee-enroll-section py-5 text-center text-white">
        <div className="container">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
            Join ASQUARE Academy Pune Today
          </motion.h3>

          <p className="lead mb-4">
            Step confidently toward your engineering dream with ASQUARE Academy—your trusted coaching center for IIT JEE coaching classes in Pune, NEET & CET preparation.
          </p>

          <p>
            <MapPin className="text-warning" /> 📍 Ideal for students across Pune &amp; PCMC
          </p>

          <a className="btn btn-lg btn-warning fw-bold mt-3 px-5 py-3 rounded-pill shadow-lg">
            <Link to={"/"} className="nav-item nav-item-list text-white">
              ⚡ Admissions Open – Limited seats! Secure your enrollment today.
            </Link>
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default IITJEEPune;
