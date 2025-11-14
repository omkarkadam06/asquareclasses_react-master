import React, { useEffect, useState, Suspense } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
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
import sampleimg1 from '../../../Assets/SampleImages/sampleimg1.jpeg';
import sampleimg2 from '../../../Assets/SampleImages/sampleimg2.jpeg';
import sampleimg3 from '../../../Assets/SampleImages/sampleimg3.jpeg';
import sampleimg4 from '../../../Assets/SampleImages/sampleimg4.jpeg';
import sampleimg5 from '../../../Assets/SampleImages/sampleimg5.jpeg';
import sampleimg6 from '../../../Assets/SampleImages/sampleimg6.jpeg';
import sampleimg7 from '../../../Assets/SampleImages/sampleimg7.jpeg';
// import Swal from "sweetalert2";
import Form from '../../../Components/Form2/Form2.jsx';

const Reviews = React.lazy(() => import("../../../Components/Reviews/Reviews.jsx"));

function IITJEECharholi() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const whyChoose = [
    { Icon: Users, title: "Highly Skilled Faculty ", desc: "Experts in Physics, Chemistry & Mathematics with proven track records." },
    { Icon: BookOpen, title: "Up-to-date Curriculum", desc: "Aligns with the latest JEE Main & Advanced exam patterns." },
    { Icon: Target, title: "Small‐Batch & Personalized Mentoring", desc: "Ensures individual attention and doubt clearance." },
    { Icon: BarChart, title: "Frequent Tests & Performance Analysis ", desc: "Regular mock tests + evaluation to boost strengths & fix weaknesses." },
    { Icon: Lightbulb, title: "Strategic & Motivational Support ", desc: "Tips for exam strategy, time management, confidence building." },
  ];

  const subjects = [
    { title: "Physics", desc: "Concept clarity, derivations, application in problem solving" },
    { title: "Chemistry", desc: "Physical, Organic & Inorganic with extensive practice" },
    { title: "Mathematics", desc: "Core topics like Algebra, Calculus, Geometry, Trigonometry & Probability" },
  ];

  const batches = [
    { title: "•	2-Year Foundation (10 → 12)", desc: "For students starting early; covers Boards + JEE prep" },
    { title: "•	1-Year Intensive (11 → 12) ", desc: "For those starting in Class 11 or wanting crash focus" },
    { title: "•	Crash Course (2-3 Months)", desc: "Covers most crucial topics + past papers for exam readiness" },
    { title: "•	Dropper / Repeater Batch", desc: "For XII pass-outs aiming for a better rank next year" },
  ];

  const faqs = [{ q: "Q1. Who is this coaching for?", a: "Students in Class XI, XII, and pass-outs preparing for JEE Main & Advanced can join IIT JEE coaching classes in Charholi for complete exam preparation." },
     { q: "Q2. What subjects are taught?", a: "Our best IIT JEE coaching in Charholi covers Physics, Chemistry, and Mathematics (PCM) with concept clarity and problem-solving focus." },
      { q: "Q3. Do you conduct mock exams?", a: "Yes, ASQUARE Academy conducts regular tests and full-length mock exams as part of its top JEE Mains coaching classes in Charholi." },
       { q: "Q4. What batch durations are available?", a: "Students can enroll in 2-year, 1-year, crash, or repeater batches designed for IIT JEE Advanced preparation in Charholi." },
        { q: "Q5. How large are the batches?", a: "Our JEE Advanced coaching classes in Charholi maintain small to medium-sized groups to ensure focused mentoring and personal guidance." },
         { q: "Q6. How will parents stay informed?", a: "Parents receive regular performance updates and detailed progress reports from IIT JEE classes in Charholi to track their child’s growth." },
          { q: "Q7. Which nearby areas benefit from Charholi branch?", a: "Students from Charholi Phata, Moshi, Bhosari, and Alandi Road prefer best IIT JEE classes in Charholi for quality learning and guidance." },
      { q: "Q8. Why choose ASQUARE Academy for JEE Coaching?", a: "With expert faculty, mock exams, and strong conceptual training, ASQUARE ranks among the top IIT JEE classes in Charholi Pune." },
        ];

  return (
    <>
      <Helmet>
        <title>Best IIT JEE Coaching Classes in Charholi Pune | ASQUARE Academy</title>
             <meta
          name="title"
          content="Best IIT JEE Coaching Classes in Charholi Pune | ASQUARE Academy"
        />
        <meta
          name="description"
          content="Join ASQUARE Academy for top IIT JEE coaching classes in Charholi Pune. Expert faculty, mock exams & PCM guidance for JEE Main & Advanced preparation."
        />

        <meta name="keywords" content="IIT JEE coaching classes in charholi,
Best IIT JEE Coaching in charholi,
Top JEE Mains Coaching Classes charholi,
IIT JEE Advanced Preparation charholi,
JEE Advanced coaching classes in charholi,
IIT JEE Classes in charholi,
Best IIT JEE Classes in charholi,
Top IIT JEE Classes in charholi,


" />
<script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-institute-charholi-pune#organization",
      "name": "ASQUARE Academy",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-institute-charholi-pune",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9766118877",
        "contactType": "Customer Service",
        "areaServed": "IN"
      },
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune/"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Charholi",
        "addressRegion": "Pune",
        "addressCountry": "IN"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-institute-charholi-pune#webpage",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-institute-charholi-pune",
      "name": "Best IIT JEE Coaching Classes in Charholi Pune | ASQUARE Academy",
      "description": "ASQUARE Academy offers top IIT JEE coaching in Charholi Pune with expert faculty, mock exams, and PCM-focused learning for JEE Main & Advanced preparation."
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
          "item": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-pune-maharashtra/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Charholi",
          "item": "https://www.asquareclasses.com/iit-jee-coaching-institute-charholi-pune"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who is this coaching for?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students in Class XI, XII, and pass-outs preparing for JEE Main & Advanced can join IIT JEE coaching classes in Charholi for complete exam preparation."
          }
        },
        {
          "@type": "Question",
          "name": "What subjects are taught?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our best IIT JEE coaching in Charholi covers Physics, Chemistry, and Mathematics (PCM) with concept clarity and problem-solving focus."
          }
        },
        {
          "@type": "Question",
          "name": "Do you conduct mock exams?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, ASQUARE Academy conducts regular tests and full-length mock exams as part of its top JEE Mains coaching classes in Charholi."
          }
        },
        {
          "@type": "Question",
          "name": "What batch durations are available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students can enroll in 2-year, 1-year, crash, or repeater batches designed for IIT JEE Advanced preparation in Charholi."
          }
        },
        {
          "@type": "Question",
          "name": "How large are the batches?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our JEE Advanced coaching classes in Charholi maintain small to medium-sized groups to ensure focused mentoring and personal guidance."
          }
        },
        {
          "@type": "Question",
          "name": "How will parents stay informed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Parents receive regular performance updates and detailed progress reports from IIT JEE classes in Charholi to track their child’s growth."
          }
        },
        {
          "@type": "Question",
          "name": "Which nearby areas benefit from Charholi branch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students from Charholi Phata, Moshi, Bhosari, and Alandi Road prefer best IIT JEE classes in Charholi for quality learning and guidance."
          }
        },
        {
          "@type": "Question",
          "name": "Why choose ASQUARE Academy for JEE Coaching?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "With expert faculty, mock exams, and strong conceptual training, ASQUARE ranks among the top IIT JEE classes in Charholi Pune."
          }
        }
      ]
    },
    {
      "@type": "LocalBusiness",
      "name": "ASQUARE Academy - IIT JEE Coaching Charholi",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "telephone": "+91-9766118877",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-institute-charholi-pune",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Charholi",
        "addressRegion": "Pune",
        "addressCountry": "IN"
      }
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

        {/* Responsive Bootstrap Carousel (renders one carousel based on isDesktop) */}
        {isDesktop ? (
          <div
            id="jeeFullCarouselDesktop"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {[sampleimg1, sampleimg1, sampleimg1, sampleimg1, sampleimg1].map(
                (img, i) => (
                  <div
                    key={i}
                    className={`carousel-item ${i === 0 ? "active" : ""}`}
                  >
                    <img
                      src={img}
                      className="d-block w-100 carousel-image"
                      alt={`Slide ${i + 1}`}
                    />
                    <div className="carousel-overlay" />
                  </div>
                )
              )}
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#jeeFullCarouselDesktop"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" />
            </button>

            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#jeeFullCarouselDesktop"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" />
            </button>
          </div>

        ) : (
          /* Mobile carousel */
          <div
            id="jeeFullCarouselMobile"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {[sampleimg2, sampleimg2, sampleimg2, sampleimg2, sampleimg2].map(
                (img, i) => (
                  <div
                    key={i}
                    className={`carousel-item ${i === 0 ? "active" : ""}`}
                    style={{
                      height: "400px", // slightly shorter on mobile
                      backgroundImage: `url(${img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="carousel-overlay" />
                  </div>
                )
              )}
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#jeeFullCarouselMobile"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" />
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#jeeFullCarouselMobile"
              data-bs-slide="next"
            >
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

      <hr></hr>
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
               Excel in JEE Main & Advanced with  {" "}
                <span className="highlight-text text-warning">
                 ASQUARE Institute  
                </span>{" "}
                Charholi
              </motion.h1>
<p>Empower Your IIT JEE Aspirations with Top Coaching in Charholi</p>
              {/* Full text for desktop */}
              <p className="lead d-none d-md-block">
        Looking for a premier IIT JEE institute in  <b className="bld">Charholi, Pune?</b>At <b className="bld">ASQUARE Academy,</b>we equip students with clear concepts, effective exam technique, and relentless practice to help them gain admission in  <b className="bld">IITs, NITs, IIITs,</b>and top engineering colleges across India. 
              </p>

              {/* Short text for mobile */}
              <p className="lead d-block d-md-none">
                                               Looking for a premier IIT JEE institute in  <b className="bld">Charholi, Pune?</b>At <b className="bld">ASQUARE Academy,</b>we equip students with clear concepts, effective exam technique, and relentless practice to help them gain admission in  <b className="bld">IITs, NITs, IIITs,</b>and top engineering colleges across India. 
              </p>

              <a

                className="btn btn-warning btn-lg rounded-pill mt-3 shadow-lg"
              >      <Link
                to={'/'}
                className="nav-item nav-item-list text-warning"

              >
                  🚀 Enroll Now
                </Link>

              </a>
            </div>

            {/* Right Side: Transparent Image */}
            <div className="col-12 col-lg-4 col-md-12 mt-5 mt-md-0 text-center">
              <img
                src={sampleimg3} // replace with your transparent PNG
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

      <hr></hr>

      {/* Why Choose */} <section className="jee-why py-5 ">
        <div className="container">           <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="fw-bold display-6 mb-3 text-center"
        >Why Choose{" "}
          <span className="text-primary">ASQUARE Academy</span> as Your JEE Institute in Charholi? </motion.h1>

          <div className="row g-4 justify-center" style={{ justifyContent: "center" }}> {whyChoose.map((item, i) => (<div key={i} className="col-lg-4 col-md-6">
            <motion.div whileHover={{ scale: 1.05 }} className="jee-feature-card shadow-lg rounded-4 p-4 h-100" > <item.Icon size={40} className="mb-3 text-warning" /> <h5 className="fw-bold mb-2">{item.title}</h5> <p className="text-muted">{item.desc}</p>
            </motion.div> </div>))}
          </div>
        </div>
      </section>
      <hr></hr>

      {/* Program Description */}
      <section className="jee-programs py-5 bg-light">
        <div className="container">
          <div className="row align-items-center g-5">

            <div className="col-lg-8 text-center text-lg-start order-2">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="fw-bold display-6 mb-3 text-centerr"
              >Our <span className="text-primary">JEE </span>Coaching  Programs </motion.h1>

              <p className="lead text-secondary">

           The <b className="bld">Joint Entrance Examination (JEE) </b> demands deep conceptual understanding and speed. Our  <b className="bld">Charholi branch </b> offers a structured and rigorous preparation path for both <b className="bld">JEE Main & Advanced, </b> combining theory, problem‐solving, tests, and revision.
              
              </p>
            </div>
            <div className="col-lg-4 text-center  order-1">
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
      <hr></hr>

      {/* Subjects + Batches Section */}
      <section className="jee-gradient-section py-5 text-white">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="fw-bold display-6 mb-3 text-center"
          >
            Subjects Covered
            <span className="highlight-text text-warning">
              &nbsp;&&nbsp;
            </span>
            Batch Options
          </motion.h1>
          <br></br>

          <div className="row g-4">
            <div className="col-lg-6">
              <h4 className="highlight-text text-warning fw-bold mb-4 text-centerr">Subjects We Teach</h4>
              {subjects.map((sub, i) => (<div key={i} className="jee-subject-box mb-4 p-3 pb-4 pt-4  rounded-4 bg-white bg-opacity-10 backdrop-blur-md border border-light border-opacity-25">
                <h5 className="fw-semibold">{sub.title}</h5>
                <p className="small mb-0">{sub.desc}</p> </div>))}
            </div>
            <div className="col-lg-6">
              <h4 className="highlight-text text-warning fw-bold mb-4 text-centerr">Course Duration & Batch Options</h4>
              {batches.map((b, i) => (<div key={i} className="jee-subject-box mb-3 p-3 rounded-4 bg-white bg-opacity-10 backdrop-blur-md border border-light border-opacity-25">
                <h5 className="fw-semibold">{b.title}</h5>
                <p className="small mb-0">{b.desc}</p>
              </div>))}
            </div>
          </div>
        </div>
      </section>
      <hr></hr>
      {/* Methodology Section */}
      <section className="jee-method py-5 bg-light">
        <div className="container">
          <div className="row align-items-center g-4">

            {/* Right Side - Image */}
            {/* <div className="col-lg-5 text-center">
        <motion.img
          whileHover={{ scale: 1.03 }}
          src={sampleimg5} // replace with your image
          alt="Teaching Methodology"
          className="img-fluid rounded-4 shadow-lg"
          style={{
            // maxHeight: "400px",
            borderRadius: "10px",
            objectFit: "cover",
          }}
        />
      </div> */}
            {/* Left Side - Text and Cards */}
            <div className="col-lg-12 text-center text-lg-start">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="fw-bold display-6 mb-3 text-center"
              >Teaching Style at <span className="text-primary">ASQUARE Charholi</span> </motion.h1>



              <div className="row g-4 justify-content-center">
                {["Learn", "Practice", "Assess", "Revise"].map((step, i) => (
                  <div key={i} className="col-lg-3 col-6">
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="method-card p-4 bg-white rounded-4 shadow-sm h-100 text-center"
                    >
                      {/* <Lightbulb size={36} className="text-primary mb-3" /> */}
                      {/* <h6 className="fw-bold">{step}</h6> */}
                      <p className="text-muted small mb-0">
                        {step === "Learn"
                          ? "•	Topic‐wise lectures with hands‐on assignments after each topic"
                          : step === "Practice"
                            ? "•	One-to-one and group doubt‐clearing sessions"
                            : step === "Assess"
                              ? "•	Weekly practice sets + full‐length mock exams"
                              : "•	Regular feedback & parent-teacher meetings to monitor progress"}
                      </p>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>


          </div>
        </div>
      </section>

      <hr></hr>

      {/* New Highlights Section */}
      <section className="jee-highlights py-5 text-white">
        <div className="container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="fw-bold display-6 mb-3"
          >
           Major Benefits of
            <span className="highlight-text text-warning">
              &nbsp;Charholi &nbsp;
            </span>
            Branch
          </motion.h1>

          <div className="row justify-content-center g-4">
            {[
              "•	Personalized guidance due to smaller class sizes",
              "•	High-quality study materials & curated problem sets",
              "•	Orientation & workshop sessions on exam tactics & time management",
              "•	Strategic support for both board exams + competitive exam balance",
                "•	Local convenience for students in Charholi, Phata, Moshi, Bhosari, and nearby areas",
            ].map((text, i) => {
              const highlightedText = text.includes("Charholi")
                ? text.replace(
                  "Charholi",
                  '<b className="bld">Charholi</b>'
                )
                : text;

              return (
                <motion.div
                  key={i}
                  className="col-md-5 col-lg-4 col-6"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="highlight-card shadow-lg rounded-4 p-4 bg-white bg-opacity-10 backdrop-blur-md border border-light border-opacity-25">
                    <div className="icon-circle mx-auto mb-3">
                      <h2>🎓</h2>
                    </div>
                    <p
                      className="fw-semibold text-light "
                      dangerouslySetInnerHTML={{ __html: highlightedText }}
                    ></p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>


      <hr></hr>
      <Suspense fallback={<Loading />}>
        <Reviews />
      </Suspense>


      <hr></hr>

      {/* Results Section */}
      <section className="jee-results py-5 text-white">
        <div className="container">
          <div className="row align-items-center g-5">
            {/* Text Section */}
            <div className="col-lg-8 text-center text-lg-start">

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="fw-bold display-6 mb-3"
              >
             Success & 
                <span className="highlight-text text-warning">
                  &nbsp;Results &nbsp;
                </span>

              </motion.h1>
              <p className="lead text-light">
        ASQUARE students consistently achieve strong results in <b className="bld">JEE Main & Advanced. </b>At Charholi, with disciplined coaching and continuous assessment, students graduate with improved ranks, higher scores, and admission to prestigious institutes.
              </p>
            </div>

            {/* Image Section */}
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

      <hr></hr>
      {/* Gallery Section */}
      {/* <section className="jee-gallery py-5 bg-light">
  <div className="container text-center">
    <h3 className="fw-bold mb-4 text-primary">ASQUARE Pune Moments</h3>
    <div className="row g-3">
      {[
        sampleimg1,
        sampleimg2,
        sampleimg3,
        sampleimg4,
        sampleimg5,
        sampleimg6,
      ].map((src, i) => (
        <div key={i} className="col-6 col-md-4 col-lg-2">
          <motion.img
            whileHover={{ scale: 1.05 }}
            src={src}
            alt={`Gallery ${i + 1}`}
            className="img-fluid rounded-4 shadow-sm gallery-img"
          />
        </div>
      ))}
    </div>
  </div>
</section> */}


      {/* FAQs */}
      <section className="jee-faq py-5">
        <div className="container">
          <div className="text-center mb-5">
            <div className="d-inline-block bg-primary bg-opacity-10 text-primary fw-bold rounded-pill px-3 py-1 mb-3">
              <BadgeQuestionMark /> FAQs
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="fw-bold display-6 mb-3 text-center"
            >Frequently Asked Questions  <span className="text-primary">(FAQ)</span> </motion.h1>
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
      <hr></hr>

      {/* Final CTA */}
      <section id="enroll" className="jee-enroll-section py-5 text-center text-white">
        <div className="container">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="fw-bold display-6 mb-3"
          >
          Enroll at ASQUARE Academy 
            <span className="highlight-text text-warning">
              &nbsp;Charholi Today &nbsp;
            </span>

          </motion.h1>
          <p className="lead mb-4">
      Raise the bar with<b className="bld">ASQUARE Academy, Charholi, Pune. </b>With dedicated faculty, result-driven programs, and proven success, we’re here to help you crack   <b className="bld">JEE Main & Advanced, CET & NEET. </b>
          </p>
          <p><MapPin className="text-warning" />Ideal for students from  <b className="bld">Charholi, Moshi, Bhosari, Alandi Road,</b>and neighboring areas.</p>
          <a className="btn btn-lg btn-warning fw-bold mt-3 px-5 py-3 rounded-pill shadow-lg">
            <Link
              to={'/'}
              className="nav-item nav-item-list text-white"

            >
              ⚡ Admissions Open – Secure your seat now! 


              {/* &nbsp;<p className="text-warning">Limited seats available.</p> */}
            </Link>
          </a>
        </div>
      </section>



      <Footer />
    </>
  );
}

export default IITJEECharholi;
