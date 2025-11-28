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

import sampleimg2 from "../../../Assets/SampleImages/MobBanners/MobBanner5.jpeg";
import sampleimg22 from "../../../Assets/SampleImages/MobBanners/MobBanner9.jpeg";
import sampleimg1 from "../../../Assets/SampleImages/Banners/Banners (8).jpeg";
import sampleimg11 from "../../../Assets/SampleImages/Banners/Banners (2).jpeg";

import sampleimg3 from "../../../Assets/SampleImages/AsquarePics/AsquarePics (9).jpeg";
import sampleimg4 from "../../../Assets/SampleImages/AsquarePics/AsquarePics (2).jpeg";
import sampleimg6 from "../../../Assets/SampleImages/AsquarePics/AsquarePics (4).jpeg";

import Form from "../../../Components/Form2/Form2.jsx";

const Reviews = React.lazy(() => import("../../../Components/Reviews/Reviews.jsx"));

function IITJEEShastriNagar() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const whyChoose = [
    { Icon: Users, title: "Experienced Faculty", desc: "Trainers with expertise in IIT-JEE, NEET & CET coaching." },
    { Icon: BookOpen, title: "Holistic Syllabus Coverage", desc: "PCM subjects taught as per updated JEE Main & Advanced exam format." },
    { Icon: Target, title: "Focused Attention", desc: "Limited batch sizes ensure personalized mentoring." },
    { Icon: BarChart, title: "Regular Mock Exams", desc: "Weekly assessments with in-depth performance reviews." },
    { Icon: Lightbulb, title: "Motivation & Career Support", desc: "Guidance for achieving top ranks with confidence." },
  ];

  const subjects = [
    { title: "Physics", desc: "Concept-based learning with problem-solving focus" },
    { title: "Chemistry", desc: "Thorough coverage of Physical, Organic & Inorganic topics" },
    { title: "Mathematics", desc: "Advanced practice in Algebra, Geometry, Calculus, and Probability" },
  ];

  const batches = [
    { title: "2-Year Foundation (10th → 12th Moving Students): Integrated coaching for XI & XII Boards + JEE.", desc: "" },
    { title: "1-Year Intensive (11th → 12th Moving Students): Quick-paced JEE prep with XII syllabus.", desc: "" },
    { title: "Crash Course (2–3 Months): Fast-track revision, practice & exam readiness.", desc: "" },
    { title: "Dropper/Repeater Batch: One-year focused JEE program for XII pass-outs.", desc: "" },
  ];

  const methodologyPoints = [
    "Daily topic-wise lectures with assignments",
    "One-to-one mentoring for doubts",
    "Weekly practice tests & mock exams",
    "Parent meetings for progress evaluation",
  ];

  const highlights = [
    "Individualized attention with limited students per batch",
    "Latest IIT-JEE study material & practice papers",
    "Workshops on exam strategy & time management",
    "Trusted engineering coaching in Shastri Nagar, Pune",
  ];

  const faqs = [
    { q: "Q1: Who can apply at ASQUARE Shastri Nagar?", a: "Students of Class XI, XII, and XII pass-outs preparing for JEE Main and JEE Advanced can enroll." },
    { q: "Q2: Which subjects are included in the IIT JEE coaching?", a: "The courses cover Physics, Chemistry, and Mathematics (PCM) with chapter-wise sessions and practice modules." },
    { q: "Q3: Are mock tests conducted regularly?", a: "Yes—students take weekly tests, topic-wise assessments, and full-length JEE mock exams to monitor progress." },
    { q: "Q4: What course options are available at the Shastri Nagar branch?", a: "We offer 2-Year, 1-Year, Crash Courses, and Dropper Batches tailored for different student needs." },
    { q: "Q5: What is the batch size for IIT JEE classes in Shastri Nagar Pune?", a: "We maintain small, focused batches to ensure personalized attention and better doubt resolution." },
    { q: "Q6: Do parents receive performance updates?", a: "Yes—parents get regular progress reports, test analysis, and updates through scheduled PTMs." },
    { q: "Q7: Which areas are served by the Shastri Nagar branch?", a: "Students from Shastri Nagar, Yerwada, Dhanori, Lohegaon, Tingre Nagar, Viman Nagar, and nearby areas attend our classes." },
    { q: "Q8: Do you provide IIT JEE Advanced Preparation in Shastri Nagar Pune?", a: "Yes—advanced aspirants receive special modules, high-level problem-solving sessions, and dedicated test series." },
  ];

  return (
    <>
      <Helmet>
        <title>IIT JEE Coaching Classes & Institute in Shastri Nagar Pune | ASQUARE Academy</title>
        <meta name="title" content="IIT JEE Coaching Classes & Institute in Shastri Nagar Pune | ASQUARE Academy" />
        <meta name="description" content="Top IIT JEE Coaching Classes & Institute in Shastri Nagar Pune for JEE Mains & Advanced. Small batches, PCM coaching, mock tests & expert mentoring at ASQUARE Academy." />
        <meta name="keywords" content={`IIT JEE coaching classes in Shastri Nagar pune, Best IIT JEE Coaching in Shastri Nagar pune, Top JEE Mains Coaching Classes Shastri Nagar pune, IIT JEE Advanced Preparation Shastri Nagar pune, JEE Advanced coaching classes in Shastri Nagar pune, IIT JEE Classes in Shastri Nagar pune, Best IIT JEE Classes in Shastri Nagar pune, Top IIT JEE Classes in Shastri Nagar pune, IIT JEE coaching Institute Shastri Nagar pune`} />

        <script type="application/ld+json">{`
{
"@context": "https://schema.org",
"@type": "LocalBusiness",
"name": "ASQUARE Academy - IIT JEE Coaching Classes & Institute Shastri Nagar Pune",
"url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-shastri-nagar-pune",
"logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
"image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
"telephone": "+919766118877",
"address": {
"@type": "PostalAddress",
"streetAddress": "Shastri Nagar",
"addressLocality": "Pune",
"addressRegion": "Maharashtra",
"postalCode": "411006",
"addressCountry": "IN"
},
"sameAs": [
"https://www.instagram.com/asquarepune",
"https://www.facebook.com/asquarepune/"
],
"description": "IIT JEE Coaching Classes & Institute in Shastri Nagar Pune offering JEE Mains & Advanced preparation, PCM coaching, doubt-solving & test series."
}
</script>

<script type="application/ld+json">
{
"@context": "https://schema.org",
"@type": "WebPage",
"name": "IIT JEE Coaching Classes & Institute in Shastri Nagar Pune",
"url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-shastri-nagar-pune",
"description": "Best IIT JEE Coaching Classes & Institute in Shastri Nagar Pune for JEE Main & Advanced with PCM subjects, small batches, mock tests, and expert faculty."
}
</script>

<script type="application/ld+json">
{
"@context": "https://schema.org",
"@type": "EducationalOrganization",
"name": "ASQUARE Academy",
"url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-shastri-nagar-pune",
"logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
"description": "Top IIT JEE Coaching Classes & Institute in Shastri Nagar Pune with tailored batches for JEE Main & Advanced aspirants."
}
</script>

<script type="application/ld+json">
{
"@context": "https://schema.org",
"@type": "FAQPage",
"mainEntity": [
{
"@type": "Question",
"name": "Who can apply at ASQUARE Shastri Nagar?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Students of Class XI, XII, and XII pass-outs preparing for JEE Main and JEE Advanced can enroll."
}
},
{
"@type": "Question",
"name": "Which subjects are included in the IIT JEE coaching?",
"acceptedAnswer": {
"@type": "Answer",
"text": "The coaching includes Physics, Chemistry, and Mathematics with chapter-wise learning and practice modules."
}
},
{
"@type": "Question",
"name": "Are mock tests conducted regularly?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Yes, students take weekly tests, topic-wise assessments, and full-length mock exams to track performance."
}
},
{
"@type": "Question",
"name": "What course options are available at the Shastri Nagar branch?",
"acceptedAnswer": {
"@type": "Answer",
"text": "ASQUARE offers 2-Year, 1-Year, Crash Courses, and Dropper Batches suitable for different JEE aspirants."
}
},
{
"@type": "Question",
"name": "What is the batch size for IIT JEE classes in Shastri Nagar Pune?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Small batch sizes are maintained to ensure personal attention and better doubt-solving."
}
},
{
"@type": "Question",
"name": "Do parents receive performance updates?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Yes, parents receive regular performance reports, test analysis, and updates via scheduled PTMs."
}
},
{
"@type": "Question",
"name": "Which areas are served by the Shastri Nagar branch?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Students from Shastri Nagar, Yerwada, Dhanori, Lohegaon, Tingre Nagar, Viman Nagar, and nearby areas attend our classes."
}
},
{
"@type": "Question",
"name": "Do you provide IIT JEE Advanced Preparation in Shastri Nagar Pune?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Yes, advanced aspirants get high-level problem-solving sessions, advanced modules, and dedicated test series."
}
}
]
}
</script>

<script type="application/ld+json">
{
"@context": "https://schema.org",
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
"item": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-pune"
},
{
"@type": "ListItem",
"position": 3,
"name": "IIT JEE Coaching Classes & Institute Shastri Nagar Pune",
"item": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-shastri-nagar-pune"
}
]
}

        `}</script>

        <link rel="canonical" href={canonicalUrl} />
      </Helmet>

      <Navbar />
      <Header />

      {/* Slider with form */}
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
                Excel in JEE Main & Advanced with <span className="highlight-text text-warning">ASQUARE Classes Shastri Nagar</span>
              </motion.h1>

              <motion.h2>Transform Your Career with Expert JEE Coaching in Shastri Nagar</motion.h2>

              <p className="lead d-none d-md-block">
                Searching for top-rated JEE training in Shastri Nagar, Pune? At ASQUARE Academy, we specialize in helping students build strong fundamentals, problem-solving skills, and exam techniques. Our structured courses and expert guidance prepare aspirants for IITs, NITs, IIITs, and leading engineering institutes across India.
              </p>

              <p className="lead d-block d-md-none">
                Searching for top-rated JEE training in Shastri Nagar, Pune? At ASQUARE Academy, we specialize in helping students build strong fundamentals, problem-solving skills, and exam techniques.
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
            What Makes <span className="text-primary">ASQUARE</span> the Best JEE Institute in Shastri Nagar?
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
                About Our <span className="text-primary">JEE Coaching Programs</span>
              </motion.h4>

              <p className="lead text-secondary">
                The Joint Entrance Examination (JEE) is one of India’s toughest engineering entrance exams. Our Shastri Nagar coaching center provides strategic learning modules, test practice, and concept-based teaching to help students secure top scores in JEE Main & Advanced.
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
            Subjects We Train You In
            <span className="highlight-text text-warning"> &nbsp;&&nbsp; </span>
            Course Duration & Batch Options
          </motion.h4>

          <div className="row g-4">
            <div className="col-lg-6">
              <h4 className="highlight-text text-warning fw-bold mb-4 text-centerr">Subjects We Train You In</h4>
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
                  {b.desc && <p className="small mb-0">{b.desc}</p>}
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
                Teaching <span className="text-primary">Style</span> at ASQUARE Shastri Nagar
              </motion.h3>

              <div className="row g-4 justify-content-center">
                {methodologyPoints.map((step, i) => (
                  <div key={i} className="col-lg-3 col-6">
                    <motion.div whileHover={{ y: -5 }} className="method-card p-4 bg-white rounded-4 shadow-sm h-100 text-center">
                      <p className="text-muted small mb-0">{step}</p>
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
            Key Benefits of Joining Our <span className="highlight-text text-warning">Shastri Nagar</span> Branch
          </motion.h3>

          <div className="row justify-content-center g-4">
            {highlights.map((text, i) => (
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
                Proven Success & <span className="highlight-text text-warning">Results</span>
              </motion.h3>
              <p className="lead text-light">
                Year after year, ASQUARE students have achieved success in IITs, NITs, and top engineering colleges. Our Shastri Nagar center continues to deliver consistent results through structured training and expert mentoring.
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
            Enroll at <span className="highlight-text text-warning">ASQUARE Academy Shastri Nagar</span> Today
          </motion.h3>

          <p className="lead mb-4">
            Start your journey towards IIT success with ASQUARE Academy in Shastri Nagar, Pune. With expert coaching, dedicated programs, and consistent results, we’re your reliable partner for JEE, CET & NEET preparation.
          </p>

          <p><MapPin className="text-warning" /> <b className="bld">Ideal for students from Shastri Nagar, Yerwada, Dhanori, Lohegaon, Tingre Nagar, and nearby areas.</b></p>

          <a className="btn btn-lg btn-warning fw-bold mt-3 px-5 py-3 rounded-pill shadow-lg">
            <Link to={'/'} className="nav-item nav-item-list text-white">
              ⚡ Admissions are open – Secure your seat today!
            </Link>
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default IITJEEShastriNagar;
