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

import sampleimg1 from "../../../Assets/SampleImages/Banners/Banners (1).jpeg";
import sampleimg11 from "../../../Assets/SampleImages/Banners/Banners (2).jpeg";
import sampleimg2 from "../../../Assets/SampleImages/MobBanners/MobBanner4.jpeg";
import sampleimg22 from "../../../Assets/SampleImages/MobBanners/MobBanner5.jpeg";

import sampleimg3 from "../../../Assets/SampleImages/AsquarePics/AsquarePics (9).jpeg";
import sampleimg4 from "../../../Assets/SampleImages/AsquarePics/AsquarePics (2).jpeg";
import sampleimg6 from "../../../Assets/SampleImages/AsquarePics/AsquarePics (4).jpeg";

import Form from "../../../Components/Form2/Form2.jsx";

const Reviews = React.lazy(() => import("../../../Components/Reviews/Reviews.jsx"));

function IITJEEDholePatil() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Why choose — kept concise; content focus in page copy (from uploaded file)
  const whyChoose = [
    {
      Icon: Users,
      title: "Experienced Faculty",
      desc: "Expert educators specializing in Physics, Chemistry, and Mathematics.",
    },
    {
      Icon: BookOpen,
      title: "In-Depth Curriculum",
      desc: "A perfect blend of NCERT concepts and advanced-level problem-solving.",
    },
    {
      Icon: Target,
      title: "Focused Batches",
      desc: "Small group sizes for maximum personal attention.",
    },
    {
      Icon: BarChart,
      title: "Performance Monitoring",
      desc: "Regular quizzes, test analysis, and improvement tracking.",
    },
    {
      Icon: Lightbulb,
      title: "Hybrid Learning",
      desc: "Flexible options for both offline and online coaching.",
    },
  ];

  const subjects = [
    {
      title: "Physics",
      desc: "Strong conceptual treatment with problem-solving practice.",
    },
    {
      title: "Chemistry",
      desc: "Theory + PYQ practice across Physical, Organic & Inorganic topics.",
    },
    {
      title: "Mathematics",
      desc: "Advanced problem solving in Algebra, Calculus, Geometry & more.",
    },
  ];

  const batches = [
    { title: "2-Year Integrated Course (for Class 11 students)", desc: "" },
    { title: "1-Year Target Course (for Class 12 students)", desc: "" },
    { title: "Dropper/Repeater Program", desc: "" },
    { title: "Short-Term Crash Course (2–3 months intensive training)", desc: "" },
  ];

  // FAQs from the Dhole Patil content — exact content used
  const faqs = [
    {
      q: "Q1: Does ASQUARE Academy provide coaching for both JEE Mains and JEE Advanced exams?",
      a: "Yes—ASQUARE offers integrated programs covering the full syllabus, exam strategy, and problem-solving for both JEE Mains and Advanced.",
    },
    {
      q: "Q2: Are individual doubt-solving sessions available for students in Dhole Patil Road?",
      a: "Yes, students get dedicated doubt-clearing hours, personal mentoring, and after-class academic support.",
    },
    {
      q: "Q3: Do you conduct special classes for dropper or repeater students?",
      a: "Absolutely! We have exclusive dropper batches focusing on concept revision, practice intensity, and exam-oriented preparation.",
    },
    {
      q: "Q4: How is ASQUARE’s teaching approach better than other IIT JEE institutes in Dhole Patil Pune?",
      a: "Our method includes concept-based learning, small batches, weekly analysis, detailed feedback, and structured revision cycles.",
    },
    {
      q: "Q5: Can students from Bund Garden, Pune Station, or Koregaon Park join the Dhole Patil branch?",
      a: "Yes—many students from Bund Garden, Pune Station, Sangamwadi, Koregaon Park, and nearby areas attend our IIT JEE classes.",
    },
    {
      q: "Q6: Do you offer mock tests for IIT JEE Advanced Preparation in Dhole Patil Pune?",
      a: "Yes, full-length mock tests, chapter-wise assessments, and performance reports are conducted regularly.",
    },
    {
      q: "Q7: Are there separate batches for Class XI and Class XII students?",
      a: "Yes, ASQUARE provides dedicated batches for Class XI, Class XII, foundation courses, and year-long JEE preparation programs.",
    },
    {
      q: "Q8: What makes ASQUARE one of the Best IIT JEE Coaching Institutes in Dhole Patil Pune?",
      a: "Expert faculty, structured study materials, continuous evaluation, personalised attention, and proven results make ASQUARE a top choice.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>IIT JEE Coaching Classes & Institute in Dhole Patil Pune | ASQUARE</title>

        <meta
          name="title"
          content="IIT JEE Coaching Classes & Institute in Dhole Patil Pune | ASQUARE"
        />
        <meta
          name="description"
          content="ASQUARE Academy offers top IIT JEE coaching classes & institute in Dhole Patil Pune with expert faculty, JEE Mains & Advanced prep, mock tests, and personalised mentoring."
        />
        <meta
          name="keywords"
          content="IIT JEE coaching classes in Dhole Patil pune, Best IIT JEE Coaching in Dhole Patil pune, Top JEE Mains Coaching Classes Dhole Patil pune, IIT JEE Advanced Preparation Dhole Patil pune, JEE Advanced coaching classes in Dhole Patil pune, IIT JEE Classes in Dhole Patil pune, Best IIT JEE Classes in Dhole Patil pune, Top IIT JEE Classes in Dhole Patil pune"
        />

        {/* JSON-LD Schema — using uploaded file path as requested */}
        <script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "name": "ASQUARE Academy - IIT JEE Coaching Classes & Institute Dhole Patil Pune",
      "image": "/mnt/data/Best IIT JEE Coaching Classes in Bund Garden.docx",
      "url": "/mnt/data/Best IIT JEE Coaching Classes in Bund Garden.docx",
      "telephone": "9766118877",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dhole Patil Road",
        "addressRegion": "Pune",
        "addressCountry": "India"
      },
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune/"
      ],
      "description": "ASQUARE Academy provides top IIT JEE coaching classes and institute in Dhole Patil Pune with expert faculty, structured courses, JEE Mains & Advanced prep."
    },
    {
      "@type": "WebPage",
      "name": "IIT JEE Coaching Classes & Institute in Dhole Patil Pune | ASQUARE",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-Institute-dhole-patil-pune",
      "description": "Best IIT JEE coaching classes & institute in Dhole Patil Pune offering JEE Mains and Advanced preparation, mock tests, doubt-solving, and personalised mentoring."
    },
    {
      "@type": "EducationalOrganization",
      "name": "ASQUARE Academy",
      "url": "https://www.asquareclasses.com/",
      "logo": "/mnt/data/Best IIT JEE Coaching Classes in Bund Garden.docx",
      "description": "Leading IIT JEE coaching institute in Dhole Patil Pune offering structured programs, expert guidance, and comprehensive JEE preparation."
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does ASQUARE Academy provide coaching for both JEE Mains and JEE Advanced exams?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes—ASQUARE offers integrated programs covering the full syllabus, exam strategy, and problem-solving for both JEE Mains and Advanced."
          }
        },
        {
          "@type": "Question",
          "name": "Are individual doubt-solving sessions available for students in Dhole Patil Road?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, students get dedicated doubt-clearing hours, personal mentoring, and after-class academic support."
          }
        },
        {
          "@type": "Question",
          "name": "Do you conduct special classes for dropper or repeater students?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely! We have exclusive dropper batches focusing on concept revision, practice intensity, and exam-oriented preparation."
          }
        },
        {
          "@type": "Question",
          "name": "How is ASQUARE’s teaching approach better than other IIT JEE institutes in Dhole Patil Pune?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our method includes concept-based learning, small batches, weekly analysis, detailed feedback, and structured revision cycles."
          }
        },
        {
          "@type": "Question",
          "name": "Can students from Bund Garden, Pune Station, or Koregaon Park join the Dhole Patil branch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes—many students from Bund Garden, Pune Station, Sangamwadi, Koregaon Park, and nearby areas attend our IIT JEE classes."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer mock tests for IIT JEE Advanced Preparation in Dhole Patil Pune?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, full-length mock tests, chapter-wise assessments, and performance reports are conducted regularly."
          }
        },
        {
          "@type": "Question",
          "name": "Are there separate batches for Class XI and Class XII students?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, dedicated batches for Class XI, Class XII, foundation programs, and year-long JEE courses are available."
          }
        },
        {
          "@type": "Question",
          "name": "What makes ASQUARE one of the Best IIT JEE Coaching Institutes in Dhole Patil Pune?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Expert faculty, structured materials, personalised attention, continuous evaluation, and strong results make ASQUARE a top choice."
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
          "item": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "IIT JEE Coaching Classes Dhole Patil Pune",
          "item": "https://www.asquareclasses.com/iit-jee-coaching-classes-Institute-dhole-patil-pune"
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
              {[sampleimg2, sampleimg22, sampleimg2].map((img, i) => (
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
            <div className="col-12 col-lg-8 col-md-12 text-center text-md-start">
              <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
                Achieve Your IIT JEE Goals with ASQUARE Academy – <span className="highlight-text text-warning">Dhole Patil</span>
              </motion.h1>

              <motion.h2>Cracking the IIT JEE exam takes determination, a clear strategy, and the right mentors.</motion.h2>

              <p className="lead d-none d-md-block">
                At ASQUARE Academy, we offer one of the most result-oriented IIT JEE coaching programs in Dhole Patil, Pune. Our mission is to help students build a strong conceptual foundation, sharpen their analytical thinking, and develop exam-ready confidence. Counted among the leading IIT JEE institutes in Dhole Patil, ASQUARE Academy provides dedicated coaching for both JEE Mains and Advanced, ensuring every student receives comprehensive guidance. Learners from Dhole Patil, Bund Garden, Sangamwadi, Camp, Pune Station, and Koregaon Park rely on ASQUARE to turn their engineering dreams into reality.
              </p>

              <p className="lead d-block d-md-none">
                At ASQUARE Academy, we offer one of the most result-oriented IIT JEE coaching programs in Dhole Patil, Pune. Our mission is to help students build a strong conceptual foundation and develop exam-ready confidence.
              </p>

              <a className="btn btn-warning btn-lg rounded-pill mt-3 shadow-lg">
                <Link to={'/'} className="nav-item nav-item-list text-warning">🚀 Enroll Now</Link>
              </a>
            </div>

            <div className="col-12 col-lg-4 col-md-12 mt-5 mt-md-0 text-center">
              <img src={sampleimg3} alt="ASQUARE Academy Dhole Patil" className="img-fluid mx-auto fade-in imgsiz" style={{ objectFit: "contain", opacity: 0.95, borderRadius: "10px" }} />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Why Choose */}
      <section className="jee-why py-5">
        <div className="container">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">
            <span className="highlight-text text-primary">Why Choose ASQUARE Academy</span> for IIT JEE Preparation in Dhole Patil?
          </motion.h3>

          <div className="row g-4 justify-content-center" style={{ justifyContent: "center" }}>
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
                Programs Offered at ASQUARE – <span className="highlight-text text-primary">Dhole Patil</span>
              </motion.h4>

              <p className="lead text-secondary">
                {/* Program list appears below as boxes */}
              </p>
              <div className="row">
                {batches.map((b, i) => (
                  <div key={i} className="col-md-6 mb-3">
                    <div className="jee-subject-box p-3 rounded-4 bg-white shadow-sm h-100">
                      <h5 className="fw-semibold">{b.title}</h5>
                      {b.desc && <p className="small mb-0">{b.desc}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-4 text-center order-1">
              <motion.img whileHover={{ scale: 1.03 }} src={sampleimg4} alt="Programs" className="img-fluid rounded-4 shadow-lg mx-auto d-block" style={{ width: "85%" }} />
            </div>
          </div>
        </div>
      </section>

      <hr />



      <hr />

      {/* Teaching Philosophy & Methodology */}
      <section className="jee-method py-5 bg-light">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-12 text-center text-lg-start">
              <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">
                ASQUARE Teaching <span className="text-primary">Philosophy</span>
              </motion.h3>

              <p className="lead mb-4 text-center">Concept → Application → Evaluation → Revision</p>
              <p className="text-muted small mb-4 text-center">
                We believe in a progressive learning cycle that ensures deep understanding, consistent practice, and confident performance.
              </p>

              <div className="row g-4 justify-content-center">
                {["Learn", "Practice", "Assess", "Revise"].map((step, i) => (
                  <div key={i} className="col-lg-3 col-6">
                    <motion.div whileHover={{ y: -5 }} className="method-card p-4 bg-white rounded-4 shadow-sm h-100 text-center">
                      <p className="text-muted small mb-0">
                        {step === "Learn"
                          ? "• Daily topic-wise lectures with assignments"
                          : step === "Practice"
                          ? "• One-to-one doubt-clearing sessions"
                          : step === "Assess"
                          ? "• Weekly chapter tests & full-length mock exams"
                          : "• Parent–teacher meetings for performance tracking"}
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
            Highlights of <span className="highlight-text text-warning">&nbsp;Dhole Patil&nbsp;</span> Branch
          </motion.h3>

          <div className="row justify-content-center g-4">
            {[
              "• Latest and well-structured JEE study material (digital + printed)",
              "• Doubt-clearing sessions after every major topic",
              "• Smart performance analytics and personalized feedback",
              "• Workshops focused on accuracy, speed, and strategy",
              "• Widely recognized as one of the Top IIT JEE Coaching Centers in Dhole Patil",
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

      {/* Students Achievements / Results */}
      <section className="jee-results py-5 text-white">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-8 text-center text-lg-start">
              <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
                Our Students’ <span className="highlight-text text-warning">&nbsp;Achievements&nbsp;</span>
              </motion.h3>

              <p className="lead text-light">
                Students from Dhole Patil and nearby areas have delivered outstanding results in JEE Mains and Advanced, earning seats in IITs, NITs, and top engineering colleges across India. The consistent success of our batches makes ASQUARE a trusted name for IIT JEE preparation in Pune.
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
              <FAQAccordion faqs={faqs.slice(0, Math.ceil(faqs.length / 2))} accordionId="dholeFaqLeft" />
            </div>

            <div className="col-12 col-md-6">
              <FAQAccordion faqs={faqs.slice(Math.ceil(faqs.length / 2))} accordionId="dholeFaqRight" />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Final CTA */}
      <section id="enroll" className="jee-enroll-section py-5 text-center text-white">
        <div className="container">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
            Join ASQUARE Academy <span className="highlight-text text-warning">&nbsp;Dhole Patil Today&nbsp;</span>
          </motion.h3>

          <p className="lead mb-4">
            Searching for the top IIT JEE coaching in Dhole Patil, Pune? Your search ends here! ASQUARE Academy offers structured programs, expert mentoring, and a proven track record of success.
          </p>

          <p><MapPin className="text-warning" /> Easily accessible to students from Dhole Patil, Bund Garden, Sangamwadi, Camp, Pune Station, and Koregaon Park.</p>

          <a className="btn btn-lg btn-warning fw-bold mt-3 px-5 py-3 rounded-pill shadow-lg">
            <Link to={'/'} className="nav-item nav-item-list text-white">
              ⚡ Admissions Open – Book Your Seat Now!
              {/* <span className="d-block text-warning small">Limited seats available.</span> */}
            </Link>
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default IITJEEDholePatil;
