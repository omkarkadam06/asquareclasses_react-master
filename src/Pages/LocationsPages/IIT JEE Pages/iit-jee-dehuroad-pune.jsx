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
import Swal from "sweetalert2";
import Form from '../../../Components/Form2/Form2.jsx';

const Reviews = React.lazy(() => import("../../../Components/Reviews/Reviews.jsx"));

function IITJEEDehuroad() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const whyChoose = [
    { Icon: Users, title: "Experienced Faculty", desc: "Subject experts in IIT-JEE, NEET & CET coaching." },
    { Icon: BookOpen, title: "Complete Syllabus Coverage ", desc: "Physics, Chemistry & Mathematics as per the latest JEE Main & Advanced exam pattern." },
    { Icon: Target, title: "Personal Mentoring ", desc: "Small batch sizes for focused attention." },
    { Icon: BarChart, title: "Regular Tests & Reviews", desc: "Weekly assessments with performance tracking." },
    { Icon: Lightbulb, title: "Motivation & Guidance ", desc: "Career support and rank-improvement strategies." },
  ];

  const subjects = [
    { title: "Physics", desc: "Logical problem-solving with application-based teaching" },
    { title: "Chemistry", desc: "Detailed Physical, Organic & Inorganic coverage" },
    { title: "Mathematics", desc: "Intensive practice in Algebra, Calculus, Geometry & Probability." },
  ];

  const batches = [
    { title: "2-Year Foundation (10th → 12th)", desc: "Board + JEE preparation" },
    { title: "1-Year Intensive (11th → 12th) ", desc: "JEE crash-focused learning" },
    { title: "Crash Course (2–3 Months) ", desc: "Fast revision & exam readiness" },
    { title: "Dropper/Repeater Batch ", desc: "One-year program for XII pass-outs" },
  ];

  const faqs = [{ q: "Q1: Who can join ASQUARE Academy Dehu Road?", a: "Students of Class XI, XII, and XII pass-outs aiming for IIT JEE Main & Advanced can join. ASQUARE offers structured learning programs, making it one of the Best IIT JEE Coaching in Dehu Road Pune for dedicated engineering aspirants." },
     { q: "Q2: Which subjects are taught at ASQUARE Dehu Road?", a: "We provide in-depth coaching in Physics, Chemistry, and Mathematics (PCM). Each subject is taught by expert faculty to strengthen concepts and problem-solving techniques required for IIT JEE Advanced Preparation in Dehu Road Pune." },
      { q: "Q3: Do you provide mock exams and tests?", a: "Yes, weekly practice tests and full-length JEE mocks are part of the program." },
       { q: "Q4: What batch options are available for students?", a: "ASQUARE offers 2-Year, 1-Year, Crash Course, and Dropper Batches, catering to every preparation level. Each batch focuses on concept clarity, making us a top choice for IIT JEE Classes in Dehu Road Pune." },
        { q: "Q5: What’s the average batch size at ASQUARE Dehu Road?", a: "We maintain small batch sizes to ensure personal attention and one-on-one mentoring. This focused approach helps students perform better and makes us the Best IIT JEE Classes in Dehu Road Pune." },
         { q: "Q6: Do parents receive regular updates on student performance?", a: "Yes, parents get consistent feedback through Parent-Teacher Meetings (PTMs) and detailed progress reports. This transparency builds trust and makes our center stand out for IIT JEE Coaching Classes in Dehu Road Pune." },
          { q: "Q7: What makes ASQUARE the Best IIT JEE Coaching in Dehu Road Pune?", a: "Our highly qualified faculty, personalized study plans, and result-driven teaching make ASQUARE the Best IIT JEE Coaching in Dehu Road Pune. We focus on conceptual understanding and performance improvement at every step." },
      { q: "Q8: Which areas does the Dehu Road branch serve?", a: "The ASQUARE Dehu Road center is conveniently accessible from Talegaon, Nigdi, Ravet, Moshi, and nearby PCMC regions. It’s an ideal destination for students seeking Top IIT JEE Classes in Dehu Road Pune." },
        ];

  return (
    <>
      <Helmet>
        <title>Best IIT JEE Coaching Classes in Dehu Road Pune | ASQUARE Academy</title>
             <meta
          name="title"
          content="Best IIT JEE Coaching Classes in Dehu Road Pune | ASQUARE Academy"
        />
        <meta
          name="description"
          content="Join ASQUARE Academy Dehu Road for the Best IIT JEE Coaching Classes. Expert mentors, small batches & JEE-focused training for Main & Advanced success."
        />

        <meta name="keywords" content="IIT JEE coaching classes in dehu road pune,
Best IIT JEE Coaching in dehu road pune,
Top JEE Mains Coaching Classes dehu road pune,
IIT JEE Advanced Preparation dehu road pune,
JEE Advanced coaching classes in dehu road pune,
IIT JEE Classes in dehu road pune,
Best IIT JEE Classes in dehu road pune,
Top IIT JEE Classes in dehu road pune,


" />
<script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-institute-dehu-road-pune#organization",
      "name": "ASQUARE Academy Dehu Road",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-institute-dehu-road-pune",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "description": "ASQUARE Academy Dehu Road offers the Best IIT JEE Coaching Classes in Dehu Road Pune with expert faculty, mock tests, and personalized mentoring for JEE Main & Advanced.",
      "telephone": "+91-9766118877",
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune"
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Dehu Road, Pune, Maharashtra, India",
        "addressLocality": "Dehu Road",
        "addressRegion": "Maharashtra",
        "postalCode": "412101",
        "addressCountry": "IN"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-institute-dehu-road-pune#webpage",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-institute-dehu-road-pune",
      "name": "Best IIT JEE Coaching Classes in Dehu Road Pune | ASQUARE Academy",
      "description": "Join ASQUARE Academy Dehu Road for the Best IIT JEE Coaching Classes. Expert mentors, small batches & JEE-focused training for Main & Advanced success."
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-institute-dehu-road-pune#localbusiness",
      "name": "ASQUARE Academy Dehu Road",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "telephone": "+91-9766118877",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Dehu Road, Pune, Maharashtra, India",
        "addressLocality": "Dehu Road",
        "addressRegion": "Maharashtra",
        "postalCode": "412101",
        "addressCountry": "IN"
      },
      "url": "https://www.asquareclasses.com/iit-jee-coaching-institute-dehu-road-pune",
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune"
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-institute-dehu-road-pune#breadcrumb",
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
          "name": "Dehu Road Branch",
          "item": "https://www.asquareclasses.com/iit-jee-coaching-institute-dehu-road-pune"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-institute-dehu-road-pune#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can join ASQUARE Academy Dehu Road?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students of Class XI, XII, and XII pass-outs aiming for IIT JEE Main & Advanced can join. ASQUARE offers structured learning programs, making it one of the Best IIT JEE Coaching Classes in Dehu Road Pune."
          }
        },
        {
          "@type": "Question",
          "name": "Which subjects are taught at ASQUARE Dehu Road?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE Dehu Road provides in-depth coaching in Physics, Chemistry, and Mathematics (PCM) with expert mentors for strong JEE preparation."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide mock exams and tests?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, weekly topic tests and full-length JEE mock exams help students assess performance and build exam confidence."
          }
        },
        {
          "@type": "Question",
          "name": "What batch options are available for students?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "2-Year, 1-Year, Crash Course, and Dropper Batches are available, focusing on clarity and results for IIT JEE aspirants."
          }
        },
        {
          "@type": "Question",
          "name": "What’s the average batch size at ASQUARE Dehu Road?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We maintain small batch sizes for personalized mentoring, ensuring better student performance and progress."
          }
        },
        {
          "@type": "Question",
          "name": "Do parents receive regular updates on student performance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Parents get regular updates through PTMs and detailed progress reports, ensuring complete transparency."
          }
        },
        {
          "@type": "Question",
          "name": "What makes ASQUARE the Best IIT JEE Coaching in Dehu Road Pune?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE’s expert faculty, structured material, and result-driven approach make it the Best IIT JEE Coaching in Dehu Road Pune."
          }
        },
        {
          "@type": "Question",
          "name": "Which areas does the Dehu Road branch serve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The ASQUARE Dehu Road branch serves students from Talegaon, Nigdi, Ravet, Moshi, and nearby PCMC regions."
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
                Excel in JEE Main & Advanced with {" "}
                <span className="highlight-text text-warning">
                  ASQUARE Institute
                </span>{" "}
                Dehu Road
              </motion.h1>
<p>Transform Your Career with Expert JEE Coaching in Dehu Road</p>
              {/* Full text for desktop */}
              <p className="lead d-none d-md-block">
             Looking for the best IIT JEE institute in Dehu Road, Pune?<b className="bld">At ASQUARE Academy,</b>we provide students with strong fundamentals, advanced problem-solving skills, and proven exam techniques. Our structured courses and expert mentors prepare aspirants for  <b className="bld">IITs, NITs, IIITs, and top engineering colleges</b> across India. 
              </p>

              {/* Short text for mobile */}
              <p className="lead d-block d-md-none">
                                                 Looking for the best IIT JEE institute in Dehu Road, Pune?<b className="bld">At ASQUARE Academy,</b>we provide students with strong fundamentals, advanced problem-solving skills, and proven exam techniques. Our structured courses and expert mentors prepare aspirants for  <b className="bld">IITs, NITs, IIITs, and top engineering colleges</b> across India. 
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
        >Why ASQUARE is the {" "}
          <span className="text-primary">Best JEE Institute</span>  in Dehu Road?</motion.h1>

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
              >About Our <span className="text-primary">JEE</span> Coaching Programs </motion.h1>

              <p className="lead text-secondary">

               The <b className="bld">Joint Entrance Examination (JEE) </b>is among India’s most competitive exams. At our  <b className="bld">Dehu Road coaching center, </b>students learn through concept clarity, mock tests, and practice-driven methods that ensure high performance in both <b className="bld">JEE Main & Advanced.</b>
              
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
            Subjects We Cover
            <span className="highlight-text text-warning">
              &nbsp;&&nbsp;
            </span>
            Batch Options
          </motion.h1>
          <br></br>

          <div className="row g-4">
            <div className="col-lg-6">
              <h4 className="highlight-text text-warning fw-bold mb-4 text-centerr">We Teach</h4>
              {subjects.map((sub, i) => (<div key={i} className="jee-subject-box mb-4 p-3 pb-4 pt-4  rounded-4 bg-white bg-opacity-10 backdrop-blur-md border border-light border-opacity-25">
                <h5 className="fw-semibold">{sub.title}</h5>
                <p className="small mb-0">{sub.desc}</p> </div>))}
            </div>
            <div className="col-lg-6">
              <h4 className="highlight-text text-warning fw-bold mb-4 text-centerr">Course Options & Batches</h4>
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
              >Teaching Style at <span className="text-primary">ASQUARE Dehu Road</span> </motion.h1>



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
                          ? "Topic-wise lectures with assignments"
                          : step === "Practice"
                            ? "One-on-one doubt clearing sessions"
                            : step === "Assess"
                              ? "Weekly practice & mock exams"
                              : "Parent meetings for progress tracking"}
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
            Key Benefits of Joining 
            <span className="highlight-text text-warning">
              &nbsp;Our Dehu Road &nbsp;
            </span>
            Branch
          </motion.h1>

          <div className="row justify-content-center g-4">
            {[
              "•	Focused attention with limited students per batch",
              "•	Latest study material & practice sets",
              "•	Regular workshops on exam strategy & time management",
              "•	Trusted JEE institute in Dehu Road, Pune",
               
            ].map((text, i) => {
              const highlightedText = text.includes("Trusted")
                ? text.replace(
                  "Trusted",
                  '<b className="bld">Trusted</b>'
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
             Every year, <b className="bld">ASQUARE students excel in IIT-JEE, NITs, and other top engineering institutes.</b> With proven teaching strategies and strong mentoring, our Dehu Road branch delivers consistent results.
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
              &nbsp;Dehu Road Today &nbsp;
            </span>

          </motion.h1>
          <p className="lead mb-4">
          Start your IIT journey with the <b className="bld">the trusted JEE coaching institute in Dehu Road, Pune. </b>With expert faculty, structured programs, and proven success, ASQUARE Academy is your partner in cracking <b className="bld">JEE, CET & NEET.</b>
          </p>
          <p><MapPin className="text-warning" /> Ideal for students from <b className="bld">Dehu Road, Nigdi, Ravet, Talegaon, Moshi, and PCMC areas.</b></p>
          <a className="btn btn-lg btn-warning fw-bold mt-3 px-5 py-3 rounded-pill shadow-lg">
            <Link
              to={'/'}
              className="nav-item nav-item-list text-white"

            >
              ⚡ Admissions Open – Book your seat now! 


              &nbsp;
            </Link>
          </a>
        </div>
      </section>



      <Footer />
    </>
  );
}

export default IITJEEDehuroad;
