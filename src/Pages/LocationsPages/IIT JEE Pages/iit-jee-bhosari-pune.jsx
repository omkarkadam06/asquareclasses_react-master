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

function IITJEEBhosari() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const whyChoose = [
    { Icon: Users, title: "Expert Faculty Members ", desc: "Specialists in IIT-JEE, CET & NEET coaching." },
    { Icon: BookOpen, title: "Comprehensive PCM Coverage ", desc: "Physics, Chemistry & Mathematics taught as per latest exam updates." },
    { Icon: Target, title: "Personalized Mentors", desc: "Small batches at Bhosari branch for individual guidance" },
    { Icon: BarChart, title: "Exam-Oriented Practice ", desc: "Weekly unit tests, mock exams & performance reviews." },
    { Icon: Lightbulb, title: "Career Support", desc: "Motivation sessions, counseling & study planning for long-term success." },
  ];

  const subjects = [
    { title: "Physics", desc: "Theory with real-life applications & numerical problem-solving" },
    { title: "Chemistry", desc: "Strong focus on Physical, Organic & Inorganic Chemistry" },
    { title: "Mathematics", desc: "Advanced practice in Algebra, Geometry, Calculus, Trigonometry & Probability" },
  ];

  const batches = [
    { title: "•	2-Year Foundation Program (10th → 12th Moving Students)", desc: "Board + JEE preparation" },
    { title: "•	1-Year Intensive Program (11th → 12th Moving Students)", desc: "JEE crash-focused learning" },
    { title: "•	Crash Course (2–3 Months)", desc: "Fast revision & exam readiness" },
    { title: "•	Repeater/Dropper Batch (XII Pass-outs)", desc: "One-year program for XII pass-outs" },
  ];

  const faqs = [{ q: "Q1: Who can join ASQUARE Academy Bhosari?", a: "Students of Class XI, XII, and XII pass-outs preparing for JEE Main & Advanced can enroll. ASQUARE is recognized among the Best IIT JEE Coaching in Bhosari Pune, helping aspirants build strong fundamentals for top engineering exams." },
     { q: "Q2: What subjects are included in the IIT JEE course?", a: "The curriculum covers Physics, Chemistry, and Mathematics (PCM) in depth. Each subject is taught by experienced mentors to enhance conceptual clarity and analytical skills for IIT JEE Advanced Preparation in Bhosari Pune." },
      { q: "Q3: Are mock exams conducted regularly?", a: "Yes, we conduct weekly chapter tests, full-length mock exams, and performance analyses to help students evaluate their progress. These features make ASQUARE one of the Top JEE Mains Coaching Classes in Bhosari Pune." },
       { q: "Q4: What course options are available at ASQUARE Bhosari?", a: "We offer 2-Year, 1-Year, Crash Courses, and Dropper Batches, designed to match every student’s preparation stage. Each course provides comprehensive training for IIT JEE Classes in Bhosari Pune." },
        { q: "Q5: What is the batch size at ASQUARE Bhosari?", a: "Our small batch sizes ensure personalized attention, one-on-one mentoring, and focused doubt-solving sessions. This approach makes ASQUARE the Best IIT JEE Classes in Bhosari Pune for serious aspirants." },
         { q: "Q6: Do parents receive regular updates on student performance?", a: "Yes, parents receive progress reports, test scores, and updates through regular Parent-Teacher Meetings (PTMs), ensuring transparency at every stage of preparation for IIT JEE Coaching Classes in Bhosari Pune." },
          { q: "Q7: What makes ASQUARE the Best IIT JEE Coaching in Bhosari Pune", a: "Our expert faculty, structured study materials, and result-oriented teaching methods make us the Best IIT JEE Coaching in Bhosari Pune. We focus on building confidence and consistency through regular practice and mentorship." },
      { q: "Q8: Which areas does the Bhosari branch serve?", a: "ASQUARE Academy Bhosari is easily accessible from Moshi, Chakan, Talawade, Dighi, Alandi, and nearby PCMC localities. It’s a top choice for students seeking Top IIT JEE Classes in Bhosari Pune." },
        ];

  return (
    <>
      <Helmet>
        <title>Best IIT JEE Coaching Classes in Bhosari Pune | ASQUARE Academy</title>
             <meta
          name="title"
          content="Best IIT JEE Coaching Classes in Bhosari Pune | ASQUARE Academy"
        />
        <meta
          name="description"
          content="Join ASQUARE Academy for the Best IIT JEE Coaching Classes in Bhosari Pune. Expert faculty, small batches, and mock tests for JEE Main & Advanced success."
        />

        <meta name="keywords" content="IIT JEE coaching classes in bhosari pune,
Best IIT JEE Coaching in bhosari pune,
Top JEE Mains Coaching Classes bhosari pune,
IIT JEE Advanced Preparation bhosari pune,
JEE Advanced coaching classes in bhosari pune,
IIT JEE Classes in bhosari pune,
Best IIT JEE Classes in bhosari pune,
Top IIT JEE Classes in bhosari pune,


" />
<script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-bhosari-pune#localbusiness",
      "name": "ASQUARE Academy Bhosari",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "telephone": "+91-9766118877",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-bhosari-pune",
      "priceRange": "$$",
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune"
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Bhosari, Pune",
        "addressLocality": "Bhosari",
        "addressRegion": "Maharashtra",
        "postalCode": "411039",
        "addressCountry": "IN"
      },
      "description": "ASQUARE Academy offers the Best IIT JEE Coaching Classes in Bhosari Pune with expert mentors, small batches, and focused JEE Main & Advanced preparation.",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "275"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Rohit Deshmukh"
          },
          "datePublished": "2025-09-10",
          "reviewBody": "ASQUARE Academy Bhosari provides the best IIT JEE coaching in Pune. The faculty is highly knowledgeable and supportive.",
          "name": "Highly Recommended for JEE Aspirants!",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Sneha Patil"
          },
          "datePublished": "2025-07-22",
          "reviewBody": "Mock tests and doubt sessions really helped me improve my JEE score. Highly organized and professional coaching.",
          "name": "Excellent JEE Coaching Classes!",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          }
        }
      ]
    },
    {
      "@type": "EducationalOrganization",
      "name": "ASQUARE Academy Bhosari",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-bhosari-pune",
      "description": "IIT JEE Coaching Classes in Bhosari Pune by ASQUARE Academy – focused on Physics, Chemistry & Mathematics with regular tests and mock exams."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-bhosari-pune#webpage",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-bhosari-pune",
      "name": "Best IIT JEE Coaching Classes in Bhosari Pune | ASQUARE Academy",
      "description": "Enroll in the Best IIT JEE Coaching Classes in Bhosari Pune. ASQUARE Academy provides structured programs for JEE Main & Advanced preparation."
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
          "name": "IIT JEE Coaching Bhosari",
          "item": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-bhosari-pune"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can join ASQUARE Academy Bhosari?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students of Class XI, XII, and XII pass-outs preparing for JEE Main & Advanced can enroll at ASQUARE Academy Bhosari Pune."
          }
        },
        {
          "@type": "Question",
          "name": "What subjects are included in the IIT JEE course?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The IIT JEE course includes Physics, Chemistry, and Mathematics (PCM) taught by expert mentors to enhance conceptual clarity."
          }
        },
        {
          "@type": "Question",
          "name": "Are mock exams conducted regularly?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, ASQUARE conducts weekly chapter tests and full-length mock exams for consistent assessment."
          }
        },
        {
          "@type": "Question",
          "name": "What course options are available at ASQUARE Bhosari?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE offers 2-Year, 1-Year, Crash, and Dropper batches for IIT JEE preparation in Bhosari Pune."
          }
        },
        {
          "@type": "Question",
          "name": "What makes ASQUARE the Best IIT JEE Coaching in Bhosari Pune?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Expert faculty, structured study materials, and personalized mentoring make ASQUARE the top IIT JEE coaching in Bhosari Pune."
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
               Get Ahead in JEE Main & Advanced with  {" "}
                <span className="highlight-text text-warning">
                 ASQUARE Academy
                </span>{" "}
                Bhosari
              </motion.h1>
<p>Trusted Coaching for Engineering Aspirants in Bhosari</p>
              {/* Full text for desktop */}
              <p className="lead d-none d-md-block">
            Looking for <b className="bld">IIT-JEE coaching classes in Bhosari, Pune? </b>At <b className="bld">ASQUARE Academy,</b> we focus on<b className="bld">conceptual learning, practice-based training, and result-driven strategies </b>to help students achieve their engineering goals. Our Bhosari branch prepares aspirants to secure admissions in  <b className="bld">IITs, NITs, IIITs, and other top engineering colleges in India. </b>With  <b className="bld">structured study modules, dedicated faculty, and advanced practice tests, </b>students are guided to perform confidently in <b className="bld">JEE Main & Advanced.</b>
              </p>

              {/* Short text for mobile */}
              <p className="lead d-block d-md-none">
                                       Looking for <b className="bld">IIT-JEE coaching classes in Bhosari, Pune? </b>At <b className="bld">ASQUARE Academy,</b> we focus on<b className="bld">conceptual learning, practice-based training, and result-driven strategies </b>to help students achieve their engineering goals. Our Bhosari branch prepares aspirants to secure admissions in  <b className="bld">IITs, NITs, IIITs, and other top engineering colleges in India. </b>With  <b className="bld">structured study modules, dedicated faculty, and advanced practice tests, </b>students are guided to perform confidently in <b className="bld">JEE Main & Advanced.</b>
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
          <span className="text-primary">ASQUARE Academy</span> in Bhosari? </motion.h1>

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
              >Our <span className="text-primary">IIT-JEE </span> Programs </motion.h1>

              <p className="lead text-secondary">

           The <b className="bld">Joint Entrance Examination (JEE) </b> requires strong fundamentals and consistent practice. At ASQUARE Academy Bhosari, our programs are designed to  <b className="bld">strengthen concepts, improve problem-solving, and boost exam performance</b> for both <b className="bld">JEE Main & Advanced </b> aspirants. 
              
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
            Subjects We Teach
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
              >Teaching <span className="text-primary">Methodology</span> </motion.h1>



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
                          ? "•	Daily topic-wise lectures with assignments"
                          : step === "Practice"
                            ? "•	One-to-one doubt-clearing sessions"
                            : step === "Assess"
                              ? "•	Weekly chapter tests & full-length mock exams"
                              : "•	Parent–teacher meetings for performance tracking"}
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
            Key Highlights of  
            <span className="highlight-text text-warning">
              &nbsp;Bhosari &nbsp;
            </span>
            Branch
          </motion.h1>

          <div className="row justify-content-center g-4">
            {[
              "•	Small batch size for focused mentoring",
              "•	Updated IIT-JEE notes, study material & question banks",
              "•	Workshops on time management, exam hacks & problem-solving",
              "•	Regular student progress reports & parent communication",
                "•	Recognized as a leading IIT-JEE coaching institute in Bhosari, Pune",
            ].map((text, i) => {
              const highlightedText = text.includes("leading IIT-JEE coaching institute in Bhosari, Pune")
                ? text.replace(
                  "leading IIT-JEE coaching institute in Bhosari, Pune",
                  '<b className="bld">leading IIT-JEE coaching institute in Bhosari, Pune</b>'
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
                Proven Track
                <span className="highlight-text text-warning">
                  &nbsp;Record &nbsp;
                </span>

              </motion.h1>
              <p className="lead text-light">
         ASQUARE Academy has consistently delivered <b className="bld">IIT-JEE toppers and engineering achievers </b>across Pune. The <b className="bld">Bhosari branch </b>continues this success with <b className="bld">quality teaching, personalized guidance, and a results-driven approach.</b>
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
           Join ASQUARE Academy 
            <span className="highlight-text text-warning">
              &nbsp;Bhosari Today &nbsp;
            </span>

          </motion.h1>
          <p className="lead mb-4">
       Build your path to success with <b className="bld">ASQUARE Academy’s IIT-JEE coaching in Bhosari, Pune. </b>With  <b className="bld">skilled faculty, updated study resources, and consistent results, </b>we are your trusted choice for  <b className="bld">JEE, CET & NEET coaching.</b> 
          </p>
          <p><MapPin className="text-warning" />Serving students from <b className="bld">Bhosari, Moshi, Chakan, Talawade, Dighi, Alandi, and nearby PCMC regions.</b></p>
          <a className="btn btn-lg btn-warning fw-bold mt-3 px-5 py-3 rounded-pill shadow-lg">
            <Link
              to={'/'}
              className="nav-item nav-item-list text-white"

            >
              ⚡ Admissions Open – Enroll now!  


              &nbsp;<p className="text-warning">Limited seats available.</p>
            </Link>
          </a>
        </div>
      </section>



      <Footer />
    </>
  );
}

export default IITJEEBhosari;
