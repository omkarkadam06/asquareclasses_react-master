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
  BadgeQuestionMark
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
import sampleimg2 from "../../../Assets/SampleImages/MobBanners/MobBanner8.jpeg";
import sampleimg22 from "../../../Assets/SampleImages/MobBanners/MobBanner2.jpeg";

import sampleimg3 from "../../../Assets/SampleImages/AsquarePics/AsquarePics (9).jpeg";
import sampleimg4 from "../../../Assets/SampleImages/AsquarePics/AsquarePics (2).jpeg";
import sampleimg6 from "../../../Assets/SampleImages/AsquarePics/AsquarePics (4).jpeg";

import Form from "../../../Components/Form2/Form2.jsx";
const Reviews = React.lazy(() =>
  import("../../../Components/Reviews/Reviews.jsx")
);

function IITJEESwargate() {
  const canonicalUrl = window.location.origin + window.location.pathname;

  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const whyChoose = [
    { Icon: Users, title: "Experienced Faculty", desc: "Expert educators specializing in Physics, Chemistry, and Mathematics." },
    { Icon: BookOpen, title: "In-Depth Curriculum", desc: "A perfect blend of NCERT concepts and advanced-level problem-solving." },
    { Icon: Target, title: "Focused Batches", desc: "Small group sizes for maximum personal attention." },
    { Icon: BarChart, title: "Performance Monitoring", desc: "Regular quizzes, test analysis, and improvement tracking." },
    { Icon: Lightbulb, title: "Academic Mentorship", desc: "Helping students balance board exams with IIT JEE goals." },
     { Icon: Lightbulb, title: "Hybrid Learning", desc: "Flexible options for both offline and online coaching" },
  ];

  const subjects = [
    { title: "Physics", desc: "Concept-based learning with numerical and analytical problem-solving." },
    { title: "Chemistry", desc: "Comprehensive learning in Organic, Physical & Inorganic Chemistry." },
    { title: "Mathematics", desc: "Advanced practice in Algebra, Calculus, Geometry & Trigonometry." },
  ];

  const batches = [
    { title: "2-Year Integrated Course (Class 11)", desc: "Strong foundation + JEE preparation." },
    { title: "1-Year Target Course (Class 12)", desc: "Concept strengthening + intensive test practice." },
    { title: "Dropper / Repeater Program", desc: "Focused preparation with advanced problem sets." },
    { title: "Short-Term Crash Course", desc: "2–3 months intensive revision program." },
  ];

  const faqs = [
    { q: "Q1: Does ASQUARE Academy train students for both JEE Mains and JEE Advanced exams?", a: "Yes—ASQUARE provides structured coaching for both JEE Mains and Advanced, including concept sessions, problem-solving, and regular tests." },
    { q: "Q2: Are individual doubt-solving sessions available?", a: "Absolutely. Dedicated doubt-clearing sessions help students strengthen weak areas." },
    { q: "Q3: Do you conduct special classes for dropper students?", a: "Yes—dropper batches include intensive practice modules and full-length mock exams." },
    { q: "Q4: How is the teaching approach different from other institutes?", a: "We focus on concept clarity, small batches, personalized mentoring, and weekly assessments." },
    { q: "Q5: Can students from Bibvewadi and Gultekdi join the Swargate branch?", a: "Yes—students from Bibvewadi, Gultekdi, Mukund Nagar, Dhankawadi, and Market Yard easily join our Swargate center." },
    { q: "Q6: Do you provide IIT JEE Advanced Preparation in Swargate Pune?", a: "Yes—advanced-focused batches include high-level questions, test series, and detailed performance tracking." },
    { q: "Q7: Are flexible class timings available for school students?", a: "Yes—morning, evening, and weekend batches are available." },
    { q: "Q8: Do you provide complete study material for JEE Mains and Advanced?", a: "Yes—students receive updated study notes, question banks, and practice modules." },
  ];

  return (
    <>
      <Helmet>
        <title>IIT JEE Coaching Classes & Institute in Swargate Pune | ASQUARE Academy</title>

        <meta
          name="description"
          content="Top IIT JEE Coaching Classes & Institute in Swargate Pune for JEE Mains & Advanced. Expert faculty, doubt-solving, study material & advanced preparation at ASQUARE Academy."
        />

        <meta
          name="keywords"
          content="IIT JEE coaching classes in Swargate pune, Best IIT JEE Coaching in Swargate pune, Top JEE Mains Coaching Classes Swargate pune, IIT JEE Advanced Preparation Swargate pune, JEE Advanced coaching classes in Swargate pune, IIT JEE Classes in Swargate pune, Best IIT JEE Classes in Swargate pune, Top IIT JEE Classes in Swargate pune, IIT JEE coaching Institute Swargate pune"
        />

        {/* SCHEMA BLOCKS — EXACTLY AS YOU PROVIDED */}

        <script type="application/ld+json">{`
{
"@context": "https://schema.org",
"@type": "LocalBusiness",
"name": "ASQUARE Academy - IIT JEE Coaching Classes & Institute Swargate Pune",
"url": "https://www.asquareclasses.com/iit-jee-coaching-classes-Institute-swargate-pune",
"logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
"image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
"telephone": "+919766118877",
"address": {
"@type": "PostalAddress",
"streetAddress": "Swargate",
"addressLocality": "Pune",
"addressRegion": "Maharashtra",
"postalCode": "411042",
"addressCountry": "IN"
},
"sameAs": [
"https://www.instagram.com/asquarepune",
"https://www.facebook.com/asquarepune/"
],
"description": "IIT JEE Coaching Classes & Institute in Swargate Pune offering JEE Mains & Advanced preparation, study material, small batches & personalised mentoring."
}
</script>

<script type="application/ld+json">
{
"@context": "https://schema.org",
"@type": "WebPage",
"name": "IIT JEE Coaching Classes & Institute in Swargate Pune",
"url": "https://www.asquareclasses.com/iit-jee-coaching-classes-Institute-swargate-pune",
"description": "Best IIT JEE Coaching Classes & Institute in Swargate Pune for JEE Mains & Advanced with expert faculty, study modules, mentorship & test series."
}
</script>

<script type="application/ld+json">
{
"@context": "https://schema.org",
"@type": "EducationalOrganization",
"name": "ASQUARE Academy",
"url": "https://www.asquareclasses.com/iit-jee-coaching-classes-Institute-swargate-pune",
"logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
"description": "Top IIT JEE Coaching Classes & Institute in Swargate Pune offering JEE Main & Advanced preparation with doubt clearing & mock test series."
}
</script>

<script type="application/ld+json">
{
"@context": "https://schema.org",
"@type": "FAQPage",
"mainEntity": [
{
"@type": "Question",
"name": "Does ASQUARE Academy train students for both JEE Mains and JEE Advanced exams?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Yes, ASQUARE Academy provides structured coaching for both JEE Mains and JEE Advanced with concept sessions, problem solving, and regular tests."
}
},
{
"@type": "Question",
"name": "Are individual doubt-solving sessions available?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Yes, dedicated doubt-clearing sessions are available to strengthen weak areas and enhance performance."
}
},
{
"@type": "Question",
"name": "Do you conduct special classes for dropper students?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Yes, special dropper batches include intensive practice, advanced problems, mock tests, and performance analysis."
}
},
{
"@type": "Question",
"name": "How is the teaching approach different from other institutes?",
"acceptedAnswer": {
"@type": "Answer",
"text": "ASQUARE Academy focuses on concept clarity, small batches, personalised mentoring, weekly tests, and result-driven learning."
}
},
{
"@type": "Question",
"name": "Can students from Bibvewadi and Gultekdi join the Swargate branch?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Yes, students from Bibvewadi, Gultekdi, Dhankawadi, Mukund Nagar, and Market Yard easily join the Swargate center."
}
},
{
"@type": "Question",
"name": "Do you provide IIT JEE Advanced Preparation in Swargate Pune?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Yes, advanced-level batches include high-difficulty questions, test series, and detailed performance reports."
}
},
{
"@type": "Question",
"name": "Are flexible class timings available for school students?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Yes, morning, evening, and weekend batches are available to suit school schedules."
}
},
{
"@type": "Question",
"name": "Do you provide complete study material for JEE Mains and Advanced?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Yes, students receive updated study notes, question banks, and practice modules aligned with the latest exam pattern."
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
"name": "IIT JEE Coaching Classes & Institute Swargate Pune",
"item": "https://www.asquareclasses.com/iit-jee-coaching-classes-Institute-swargate-pune"
}
]
}

`}</script>

        <link rel="canonical" href={canonicalUrl} />
      </Helmet>

      <Navbar />
      <Header />

      {/* SLIDER SECTION */}
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
                    backgroundPosition: "center"
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
            
            {/* LEFT TEXT */}
            <div className="col-12 col-lg-8 text-center text-md-start">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="fw-bold display-6 mb-3"
              >
                Achieve Your IIT JEE Goals with{" "}
                <span className="text-warning">ASQUARE Academy – Swargate</span>
              </motion.h1>

              <p className="lead d-none d-md-block">
                Cracking the IIT JEE exam takes determination, a clear strategy, and the right mentors. 
                At <b className="bld">ASQUARE Academy</b>, we offer one of the most result-oriented IIT JEE coaching programs 
                in <b className="bld">Swargate, Pune</b>. Our mission is to help students build a strong conceptual foundation, 
                sharpen their analytical thinking, and develop exam-ready confidence.
                Learners from Swargate, Bibvewadi, Parvati, Gultekdi, Dhankawadi, and Sarasbaug trust ASQUARE 
                to turn their engineering dreams into reality.
              </p>

              <p className="lead d-block d-md-none">
                Cracking IIT JEE requires strategy + expert guidance. ASQUARE Academy Swargate helps students 
                build strong concepts, analytical skills & exam confidence — guiding aspirants from Swargate, 
                Bibvewadi, Parvati, Gultekdi & nearby areas.
              </p>

              <a className="btn btn-warning btn-lg rounded-pill mt-3 shadow-lg">
                <Link to="/" className="nav-item nav-item-list text-white">
                  🚀 Enroll Now
                </Link>
              </a>
            </div>

            {/* RIGHT IMAGE */}
            <div className="col-12 col-lg-4 text-center mt-5 mt-md-0">
              <img
                src={sampleimg3}
                alt="ASQUARE Academy Swargate"
                className="img-fluid mx-auto fade-in imgsiz"
                style={{ objectFit: "contain", opacity: 0.95, borderRadius: "10px" }}
              />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* WHY CHOOSE SECTION */}
      <section className="jee-why py-5">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="fw-bold display-6 mb-4 text-center"
          >
            Why Choose <span className="text-primary">ASQUARE Academy</span> for IIT JEE Preparation in Swargate?
          </motion.h2>

          <div className="row g-4 justify-center">
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

      {/* PROGRAMS SECTION */}
      <section className="jee-programs py-5 bg-light">
        <div className="container">
          <div className="row align-items-center g-5">

            {/* LEFT IMAGE */}
            <div className="col-lg-4 text-center order-1">
              <motion.img
                whileHover={{ scale: 1.03 }}
                src={sampleimg4}
                alt="IIT JEE Coaching Swargate"
                className="img-fluid rounded-4 shadow-lg mx-auto d-block"
                style={{ width: "85%" }}
              />
            </div>

            {/* RIGHT TEXT */}
            <div className="col-lg-8 text-center text-lg-start order-2">
              <motion.h3
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="fw-bold display-6 mb-4"
              >
                Programs Offered at <span className="text-primary">ASQUARE – Swargate</span>
              </motion.h3>

                {batches.map((b, i) => (
                <div key={i} className="jee-subject-box p-4 rounded-4  bg-opacity-10 border border-light border-opacity-25">
                  <h5 className="fw-semibold">{b.title}</h5>
                  <p className="small mb-0">{b.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

   

      <hr />

      {/* TEACHING METHODOLOGY */}
      <section className="jee-method py-5 bg-light">
        <div className="container">

          <motion.h3
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="fw-bold display-6 text-center mb-4"
          >
            ASQUARE Teaching <span className="text-primary">Philosophy</span>
          </motion.h3>

          <h5 className="text-center mb-4">
            Concept → Application → Evaluation → Revision
          </h5>

          <div className="row g-4 justify-content-center text-center">

            {[
              "• Concept-based learning with expert-led lectures.",
              "• Dedicated doubt-solving sessions for all students.",
              "• Weekly tests, mock exams & detailed analysis.",
              "• Continuous revision & systematic performance improvement."
            ].map((msg, i) => (
              <div key={i} className="col-lg-3 col-6">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="method-card p-4 bg-white rounded-4 shadow-sm h-100"
                >
                  <p className="text-muted small mb-0">{msg}</p>
                </motion.div>
              </div>
            ))}

          </div>

        </div>
      </section>

      <hr />

      {/* HIGHLIGHTS */}
      <section className="jee-highlights py-5 text-white">
        <div className="container text-center">

          <motion.h3
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="fw-bold display-6 mb-4"
          >
            Highlights of <span className="text-warning">ASQUARE Academy – Swargate</span>
          </motion.h3>

          <div className="row justify-content-center g-4">

            {[
              "• Latest and well-structured JEE study material (digital + printed)",
              "• Doubt-clearing sessions after every major topic",
              "• Smart performance analytics and personalized feedback",
              "• Workshops focused on accuracy, speed, and strategy",
              "• Widely recognized as one of the Top IIT JEE Coaching Centers in Swargate"
            ].map((line, i) => (
              <motion.div
                key={i}
                className="col-md-5 col-lg-4 col-6"
                whileHover={{ scale: 1.05 }}
              >
                <div className="highlight-card shadow-lg rounded-4 p-4 bg-white bg-opacity-10 border border-light border-opacity-25">
                  <p className="fw-semibold text-light">{line}</p>
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

      {/* RESULTS SECTION */}
      <section className="jee-results py-5 text-white">
        <div className="container">
          <div className="row align-items-center g-5">

            {/* TEXT */}
            <div className="col-lg-8 text-center text-lg-start">
              <motion.h3
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="fw-bold display-6 mb-3"
              >
                Our Students’ <span className="text-warning">Achievements</span>
              </motion.h3>

              <p className="lead text-light">
                Students from Swargate and nearby areas have delivered outstanding 
                results in <b className="bld">JEE Mains and Advanced</b>.
                Many have secured seats in <b className="bld">IITs, NITs, and top engineering colleges</b> across India.
                ASQUARE Academy Swargate continues to maintain a proven track record of excellence.
              </p>
            </div>

            {/* IMAGE */}
            <div className="col-lg-4 text-center">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={sampleimg6}
                alt="Success Stories"
                className="img-fluid rounded-4 shadow-lg mx-auto d-block"
                style={{ width: "80%" }}
              />
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

            <motion.h3
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="fw-bold display-6 mb-3 text-center"
            >Frequently Asked Questions  <span className="text-primary">(FAQ)</span> </motion.h3>
          </div>

          <div className="row justify-content-center">
            {/* Left Column */}
            <div className="col-12 col-md-6 mb-4 mb-md-0 ">
              <FAQAccordion
                faqs={faqs.slice(0, Math.ceil(faqs.length / 2))}
                accordionId="jeeFaqLeft"
              />
            </div>

            {/* Right Column */}
            <div className="col-12 col-md-6">
              <FAQAccordion
                faqs={faqs.slice(Math.ceil(faqs.length / 2))}
                accordionId="jeeFaqRight"
              />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* FINAL CTA SECTION */}
      <section className="jee-cta-section text-center py-5">
        <div className="container">

          <motion.h3
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="fw-bold display-6 mb-4"
          >
           Join ASQUARE Academy 
            <span className="text-warning"> – Swargate Today</span>
          </motion.h3>

          <p className="lead mb-4">
           Searching for the top IIT JEE coaching in Swargate, Pune? Your search ends here! ASQUARE Academy offers structured programs, expert mentoring, and a proven track record of success.
          </p>
                    <p><MapPin className="text-warning" />Easily accessible to students from  <b className="bld">Swargate, Bibvewadi, Parvati, Gultekdi, Dhankawadi, and Sarasbaug.</b></p>
          <a className="btn btn-primary btn-lg rounded-pill px-5 py-3 shadow-lg">
            <Link to="/" className="text-white nav-item nav-item-list">
              ⚡ Admissions Open – Book Your Seat Now!
            </Link>
          </a>

        </div>
      </section>

      <hr />

    </>
  );
}

export default IITJEESwargate;

