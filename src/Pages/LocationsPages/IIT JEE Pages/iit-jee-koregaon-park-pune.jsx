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

import sampleimg1 from '../../../Assets/SampleImages/Banners/Banners (2).jpeg';
import sampleimg11 from '../../../Assets/SampleImages/Banners/Banners (4).jpeg';
import sampleimg2 from '../../../Assets/SampleImages/MobBanners/MobBanner7.jpeg';
import sampleimg22 from'../../../Assets/SampleImages/MobBanners/MobBanner6.jpeg';

import sampleimg3 from "../../../Assets/SampleImages/AsquarePics/AsquarePics (9).jpeg";
import sampleimg4 from "../../../Assets/SampleImages/AsquarePics/AsquarePics (2).jpeg";
import sampleimg6 from "../../../Assets/SampleImages/AsquarePics/AsquarePics (4).jpeg";

import Form from "../../../Components/Form2/Form2.jsx";

const Reviews = React.lazy(() => import("../../../Components/Reviews/Reviews.jsx"));

function IITJEEKoregaonPark() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Using content verbatim from your provided Koregaon Park copy
  const whyChoose = [
    {
      Icon: Users,
      title: "Expert Mentors ",
      desc: "– Experienced faculty in Physics, Chemistry & Mathematics.",
    },
    {
      Icon: BookOpen,
      title: "Comprehensive Curriculum ",
      desc: "– Updated as per JEE Main & Advanced exam patterns.",
    },
    {
      Icon: Target,
      title: "Personalized Focus ",
      desc: "– Small batch sizes for doubt-solving and mentoring.",
    },
    {
      Icon: BarChart,
      title: "Regular Mock Exams ",
      desc: "– Weekly assessments with detailed performance feedback.",
    },
    {
      Icon: Lightbulb,
      title: "Guidance Beyond Academics ",
      desc: "– Career counseling & confidence-building sessions.",
    },
  ];

  const subjects = [
    {
      title: "Physics",
      desc: "Problem-solving with concept clarity & applications",
    },
    {
      title: "Chemistry",
      desc: "Thorough preparation of Physical, Organic & Inorganic topics",
    },
    {
      title: "Mathematics",
      desc: "Advanced practice in Algebra, Geometry, Calculus & Probability",
    },
  ];

  const batches = [
    {
      title: "2-Year Foundation (10th → 12th) – Integrated Boards + JEE preparation",
      desc: "",
    },
    {
      title: "1-Year Intensive (11th → 12th) – Quick-paced JEE + XII program",
      desc: "",
    },
    {
      title: "Crash Course (2–3 Months) – Fast-track revision & test practice",
      desc: "",
    },
    {
      title: "Dropper / Repeater Batch – Focused one-year JEE program for XII pass-outs",
      desc: "",
    },
  ];

  const faqs = [
    {
      q: "Q1: Who can join ASQUARE Koregaon Park?",
      a: "👉 Class XI, XII students & XII pass-outs preparing for JEE Main & Advanced.",
    },
    {
      q: "Q2: What subjects are taught?",
      a: "👉 Physics, Chemistry & Mathematics.",
    },
    {
      q: "Q3: Do you conduct mock exams?",
      a: "👉 Yes, weekly and full-length mock tests are part of all programs.",
    },
    {
      q: "Q4: What course options are available?",
      a: "👉 2-Year, 1-Year, Crash Course & Dropper batches.",
    },
    {
      q: "Q5: How many students are in a batch?",
      a: "👉 Small batch sizes for focused attention.",
    },
    {
      q: "Q6: Do parents receive updates?",
      a: "👉 Yes, through PTMs and progress reports.",
    },
    {
      q: "Q7: Which areas are covered by this branch?",
      a: "👉 Convenient for students from Koregaon Park, Kalyani Nagar, Bund Garden, Camp, Yerwada, and nearby Pune localities.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>IIT JEE Coaching Classes & Institute in Koregaon Park Pune | ASQUARE Academy</title>

        <meta
          name="title"
          content="IIT JEE Coaching Classes & Institute in Koregaon Park Pune | ASQUARE Academy"
        />
        <meta
          name="description"
          content="Best IIT JEE Coaching Classes & Institute in Koregaon Park Pune for JEE Main & Advanced. Small batches, PCM coaching, mock tests & expert mentoring at ASQUARE Academy."
        />
        <meta
          name="keywords"
          content="IIT JEE coaching classes in Koregaon Park pune, Best IIT JEE Coaching in Koregaon Park pune, Top JEE Mains Coaching Classes Koregaon Park pune, IIT JEE Advanced Preparation Koregaon Parkpune, JEE Advanced coaching classes in Koregaon Park pune, IIT JEE Classes in Koregaon Park pune, Best IIT JEE Classes in Koregaon Park pune, Top IIT JEE Classes in Koregaon Park pune, IIT JEE coaching Institute Koregaon Park pune"
        />

        <script type="application/ld+json">{`
{
"@context": "https://schema.org",
"@type": "LocalBusiness",
"name": "ASQUARE Academy - IIT JEE Coaching Classes & Institute Koregaon Park Pune",
"url": "https://www.asquareclasses.com/iit-jee-coaching-institute-in-koregaon-park-pune",
"logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
"image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
"telephone": "+919766118877",
"address": {
"@type": "PostalAddress",
"streetAddress": "Koregaon Park",
"addressLocality": "Pune",
"addressRegion": "Maharashtra",
"postalCode": "411001",
"addressCountry": "IN"
},
"sameAs": [
"https://www.instagram.com/asquarepune",
"https://www.facebook.com/asquarepune/"
],
"description": "IIT JEE Coaching Classes & Institute in Koregaon Park Pune offering JEE Mains & Advanced coaching, PCM modules, mock tests, and personalised mentoring."
}
</script>

<script type="application/ld+json">
{
"@context": "https://schema.org",
"@type": "WebPage",
"name": "IIT JEE Coaching Classes & Institute in Koregaon Park Pune",
"url": "https://www.asquareclasses.com/iit-jee-coaching-institute-in-koregaon-park-pune",
"description": "Top IIT JEE Coaching Classes & Institute in Koregaon Park Pune for JEE Main & Advanced preparation with PCM coaching, mock tests, and expert guidance."
}
</script>

<script type="application/ld+json">
{
"@context": "https://schema.org",
"@type": "EducationalOrganization",
"name": "ASQUARE Academy",
"url": "https://www.asquareclasses.com/iit-jee-coaching-institute-in-koregaon-park-pune",
"logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
"description": "Best IIT JEE Coaching Institute in Koregaon Park Pune with small batches, weekly tests, PCM coaching, and dedicated mentoring."
}
</script>

<script type="application/ld+json">
{
"@context": "https://schema.org",
"@type": "FAQPage",
"mainEntity": [
{
"@type": "Question",
"name": "Who can join ASQUARE Koregaon Park?",
"acceptedAnswer": {"@type": "Answer","text": "Students of Class XI, XII and XII pass-outs preparing for JEE Main and JEE Advanced can join."}
},
{
"@type": "Question",
"name": "What subjects are taught?",
"acceptedAnswer": {"@type": "Answer","text": "The IIT JEE coaching includes Physics, Chemistry, and Mathematics."}
},
{
"@type": "Question",
"name": "Do you conduct mock exams?",
"acceptedAnswer": {"@type": "Answer","text": "Yes, weekly tests and full-length mock exams are conducted for all students."}
},
{
"@type": "Question",
"name": "What course options are available?",
"acceptedAnswer": {"@type": "Answer","text": "We offer 2-Year, 1-Year, Crash Course, and Dropper batches."}
},
{
"@type": "Question",
"name": "How many students are in a batch?",
"acceptedAnswer": {"@type": "Answer","text": "Batches are kept small to ensure focused attention and personalised mentoring."}
},
{
"@type": "Question",
"name": "Do parents receive updates?",
"acceptedAnswer": {"@type": "Answer","text": "Parents receive regular progress reports, performance updates, and PTM feedback."}
},
{
"@type": "Question",
"name": "Which areas are covered by this branch?",
"acceptedAnswer": {"@type": "Answer","text": "Students from Koregaon Park, Kalyani Nagar, Bund Garden, Camp, Yerwada, and nearby localities join our IIT JEE classes."}
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
"name": "IIT JEE Coaching Classes & Institute in Koregaon Park Pune",
"item": "https://www.asquareclasses.com/iit-jee-coaching-institute-in-koregaon-park-pune"
}
]
}

`}</script>

        <script type="application/ld+json">{`
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
"name": "IIT JEE Coaching Classes & Institute in Koregaon Park Pune",
"item": "https://www.asquareclasses.com/iit-jee-coaching-institute-in-koregaon-park-pune"
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
          <div className="jee-enquiry-form rounded-4 ">
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
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="fw-bold display-6 mb-3"
              >
                Excel in JEE Main & Advanced with <span className="highlight-text text-warning">ASQUARE Institute Koregaon Park</span>
              </motion.h1>

              <motion.h2>Reach Your IIT Goals with Expert JEE Coaching in Koregaon Park</motion.h2>

              <p className="lead d-none d-md-block">
                Searching for the best IIT JEE institute in Koregaon Park, Pune? At ASQUARE Academy, we provide structured learning, rigorous practice, and strategic mentoring. Our programs are designed to help students gain admission into IITs, NITs, IIITs, and other top engineering colleges.
              </p>

              <p className="lead d-block d-md-none">
                Searching for the best IIT JEE institute in Koregaon Park, Pune? At ASQUARE Academy, we provide structured learning, rigorous practice, and strategic mentoring.
              </p>

              <a className="btn btn-warning btn-lg rounded-pill mt-3 shadow-lg">
                <Link to={'/'} className="nav-item nav-item-list text-warning">🚀 Enroll Now</Link>
              </a>
            </div>

            {/* Right Side: Transparent Image */}
            <div className="col-12 col-lg-4 col-md-12 mt-5 mt-md-0 text-center">
              <img
                src={sampleimg3}
                alt="ASQUARE Academy"
                className="img-fluid mx-auto fade-in imgsiz"
                style={{
                  objectFit: "contain",
                  opacity: 0.95,
                  borderRadius: "10px",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Why Choose */}
      <section className="jee-why py-5 ">
        <div className="container">
          <motion.h3
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="fw-bold display-6 mb-3 text-center"
          >
            Why <span className="text-primary">ASQUARE</span> is the Best JEE Institute in Koregaon Park?
          </motion.h3>

          <div className="row g-4 justify-center" style={{ justifyContent: "center" }}>
            {whyChoose.map((item, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <motion.div whileHover={{ scale: 1.05 }} className="jee-feature-card shadow-lg rounded-4 p-4 h-100">
                  <item.Icon size={40} className="mb-3 text-warning" />
                  <h5 className="fw-bold mb-2">{item.title}</h5>
                  {item.desc && <p className="text-muted">{item.desc}</p>}
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
              <motion.h4
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="fw-bold display-6 mb-3 text-centerr"
              >
                About Our JEE Coaching Programs
              </motion.h4>

              <p className="lead text-secondary">
                The Joint Entrance Examination (JEE) requires strong fundamentals, analytical skills, and time management. At our Koregaon Park branch, we blend concept-based teaching, rigorous test practice, and exam techniques to ensure student success.
              </p>
            </div>

            <div className="col-lg-4 text-center order-1">
              <motion.img
                whileHover={{ scale: 1.03 }}
                src={sampleimg4}
                alt="JEE Coaching"
                className="img-fluid rounded-4 shadow-lg mx-auto d-block"
                style={{ width: "85%" }}
              />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Subjects + Batches */}
      <section className="jee-gradient-section py-5 text-white">
        <div className="container">
          <motion.h4
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="fw-bold display-6 mb-3 text-center"
          >
            Subjects We Cover
            <span className="highlight-text text-warning"> &nbsp;&&nbsp; </span>
            Course Options & Batches
          </motion.h4>

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
              <motion.h3
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="fw-bold display-6 mb-3 text-center"
              >
                Teaching Style at <span className="text-primary">ASQUARE Koregaon Park</span>
              </motion.h3>

              <div className="row g-4 justify-content-center">
                {["Daily interactive lectures with assignments", "One-to-one doubt-solving sessions", "Weekly mock exams & test analysis", "PTMs for parents to track student progress"].map((step, i) => (
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
          <motion.h3
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="fw-bold display-6 mb-3"
          >
            Key Benefits of Joining Our <span className="highlight-text text-warning">Koregaon Park</span> Branch
          </motion.h3>

          <div className="row justify-content-center g-4">
            {[
              "• Individual attention with small batches",
              "• Latest IIT-JEE study resources & practice sets",
              "• Special workshops on exam strategy & time management",
              "• Trusted institute for JEE coaching in Koregaon Park, Pune",
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
              <motion.h3
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="fw-bold display-6 mb-3"
              >
                Success & <span className="highlight-text text-warning">Results</span>
              </motion.h3>
              <p className="lead text-light">
                Every year, ASQUARE students secure top ranks in IIT-JEE, NITs, and other engineering entrances. With focused teaching and proven methods, the Koregaon Park branch continues this tradition of excellence.
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

            <motion.h3
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="fw-bold display-6 mb-3 text-center"
            >
              Frequently Asked Questions <span className="text-primary">(FAQ)</span>
            </motion.h3>
          </div>

          <div className="row justify-content-center">
            <div className="col-12 col-md-6 mb-4 mb-md-0 ">
              <FAQAccordion faqs={faqs.slice(0, Math.ceil(faqs.length / 2))} accordionId="kpFaqLeft" />
            </div>

            <div className="col-12 col-md-6">
              <FAQAccordion faqs={faqs.slice(Math.ceil(faqs.length / 2))} accordionId="kpFaqRight" />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Final CTA */}
      <section id="enroll" className="jee-enroll-section py-5 text-center text-white">
        <div className="container">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
            Enroll at ASQUARE Academy Koregaon Park Today
          </motion.h3>

          <p className="lead mb-4">
            Start your IIT JEE preparation with ASQUARE Academy, Koregaon Park, Pune. With expert mentors, structured programs, and a record of success, we are your trusted choice for JEE, CET & NEET coaching.
          </p>

          <p><MapPin className="text-warning" /> <b className="bld">📍 Ideal for students from Koregaon Park, Kalyani Nagar, Yerwada, Bund Garden, Camp, and nearby Pune areas.</b></p>

          <a className="btn btn-lg btn-warning fw-bold mt-3 px-5 py-3 rounded-pill shadow-lg">
            <Link to={'/'} className="nav-item nav-item-list text-white">
              ⚡ Admissions Open – Join Today!
              <p className="text-warning">Limited seats available.</p>
            </Link>
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default IITJEEKoregaonPark;
