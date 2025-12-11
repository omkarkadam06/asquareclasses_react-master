


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
// import sampleimg1 from '../../../Assets/SampleImages/sampleimg1.jpeg';
// import sampleimg2 from '../../../Assets/SampleImages/sampleimg2.jpeg';

import sampleimg1 from '../../../Assets/SampleImages/Banners/Banners (8).jpeg';
import sampleimg11 from '../../../Assets/SampleImages/Banners/Banners (4).jpeg';
import sampleimg2 from '../../../Assets/SampleImages/MobBanners/MobBanner7.jpeg';
import sampleimg22 from'../../../Assets/SampleImages/MobBanners/MobBanner4.jpeg';

import sampleimg3 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (9).jpeg'; //9,15
import sampleimg4 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (2).jpeg'; //2,17
import sampleimg5 from '../../../Assets/SampleImages/sampleimg5.jpeg';
import sampleimg6 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (4).jpeg'; //4,8,13,16
import sampleimg7 from '../../../Assets/SampleImages/sampleimg7.jpeg';
// import Swal from "sweetalert2";
import Form from '../../../Components/Form2/Form2.jsx';

const Reviews = React.lazy(() => import("../../../Components/Reviews/Reviews.jsx"));

function  IITJEEKatraj() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const whyChoose = [
    { Icon: Users, title: "Qualified & Experienced Faculty  ", desc: "Experts in IIT-JEE, CET & NEET coaching." },
    { Icon: BookOpen, title: "Comprehensive PCM Curriculum  ", desc: "Physics, Chemistry & Mathematics aligned with latest JEE exam trends." },
    { Icon: Target, title: "Small Batch Size", desc: "Personalized attention and focused mentoring" },
    { Icon: BarChart, title: "Regular Testing System ", desc: "Weekly assignments, practice papers & mock exams." },
    { Icon: Lightbulb, title: "Motivation & Guidance", desc: "Career counseling, time management & study strategies." },
  ];

  const subjects = [
    { title: "Physics", desc: "Conceptual learning with application-based numericals" },
    { title: "Chemistry", desc: "Detailed focus on Physical, Organic & Inorganic Chemistry" },
    { title: "Mathematics", desc: "Rigorous practice in Algebra, Geometry, Trigonometry, Calculus & Probability" },
  ];

  const batches = [
    { title: "2-Year Foundation Program (10th → 12th Moving Students)", desc: "Covers XI + XII Boards + JEE syllabus." },
    { title: "1-Year Intensive Program (11th → 12th Moving Students)", desc: "XII Boards + JEE coaching." },
    { title: "Crash Course (2–3 Months)", desc: "Quick revision with exam drills" },
    { title: "Repeater/Dropper Batch (XII Pass-outs)", desc: "One-year exclusive JEE preparation." },
  ];

  const faqs = [{ q: "Q1: Who can join ASQUARE Academy Katraj?", a: "Class XI, XII students and XII pass-outs preparing for JEE Main & Advanced." },
     { q: "Q2: What subjects are covered?", a: "Physics, Chemistry & Mathematics (PCM)" },
      { q: "Q3: Do you conduct mock tests??", a: "Yes, weekly subject tests and full-length JEE mock exams are included." },
       { q: "Q4: What course options are offered?", a: "2-Year, 1-Year, Crash Courses & Dropper Batches." },
        { q: "Q5:How many students are in each batch?", a: "We maintain small batches for focused learning." },
         { q: "Q6: Do parents receive student updates?", a: " Yes, through PTMs and performance reports." },
          { q: "Q7: Which areas does the Katraj branch serve?", a: "Easily accessible from Katraj, Dhankawadi, Bibwewadi, Ambegaon, and nearby Pune localities." },
      ];

  return (
    <>
      <Helmet>
        <title>Best IIT JEE Coaching Classes in Katraj Pune | ASQUARE Academy</title>
             <meta
          name="title"
          content="Best IIT JEE Coaching Classes in Katraj Pune | ASQUARE Academy"
        />
        <meta
          name="description"
          content="Join ASQUARE Academy for the Best IIT JEE Coaching Classes in Katraj Pune. Expert faculty, small batches, and mock tests for JEE Main & Advanced success."
        />

        <meta name="keywords" content="IIT JEE coaching classes in katraj Pune
Best IIT JEE Coaching in katraj Pune
Top JEE Mains Coaching Classes katraj Pune
IIT JEE Advanced Preparation katraj Pune
JEE Advanced coaching classes in katraj Pune
IIT JEE Classes in katraj Pune
Best IIT JEE Classes in katraj Pune
Top IIT JEE Classes in katraj Pune
IIT JEE Institute coaching in katraj Pune
IIT JEE Institute classes in katraj Pune

" />
<script type="application/ld+json">{`
{
  
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-katraj-pune#edu",
      "name": "ASQUARE Academy - IIT JEE Coaching in Katraj Pune",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-katraj-pune",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "telephone": "+919766118877",
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune/"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Katraj",
        "addressRegion": "Pune",
        "addressCountry": "India"
      },
      "description": "ASQUARE Academy offers IIT JEE coaching in Katraj Pune with expert faculty, PCM-focused training, mock tests, and structured JEE Main & Advanced preparation."
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-katraj-pune#local",
      "name": "ASQUARE Academy Katraj",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-katraj-pune",
      "telephone": "+919766118877",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Katraj, Pune",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "addressCountry": "India"
      },
      "priceRange": "₹₹",
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune/"
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-katraj-pune#webpage",
      "name": "Best IIT JEE Coaching Classes in Katraj Pune | ASQUARE Academy",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-katraj-pune",
      "description": "Join the top IIT JEE coaching classes in Katraj Pune at ASQUARE Academy for JEE Mains and Advanced with expert PCM faculty, mock tests & small batches."
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-katraj-pune#breadcrumbs",
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
          "item": "https://www.asquareclasses.com/iit-jee-coaching-classes"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "IIT JEE Coaching in Katraj Pune",
          "item": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-katraj-pune"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-katraj-pune#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can join ASQUARE Academy Katraj?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Class XI, XII students and XII pass-outs preparing for JEE Main & Advanced can enroll."
          }
        },
        {
          "@type": "Question",
          "name": "What subjects are covered?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE Academy Katraj covers Physics, Chemistry and Mathematics (PCM) for IIT JEE."
          }
        },
        {
          "@type": "Question",
          "name": "Do you conduct mock tests?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, weekly subject tests and full-length JEE mock exams are included."
          }
        },
        {
          "@type": "Question",
          "name": "What course options are offered?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer 2-Year, 1-Year, Crash Courses and Dropper Batches designed for JEE success."
          }
        },
        {
          "@type": "Question",
          "name": "How many students are in each batch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We keep small batches to ensure focused learning and individual attention."
          }
        },
        {
          "@type": "Question",
          "name": "Do parents receive student updates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, parents receive detailed performance reports and PTM updates regularly."
          }
        },
        {
          "@type": "Question",
          "name": "Which areas does the Katraj branch serve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Katraj branch serves students from Katraj, Dhankawadi, Bibwewadi, Ambegaon and nearby Pune areas."
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
              {[sampleimg1, sampleimg11].map(
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
              {[sampleimg2, sampleimg22].map(
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
                Katraj
              </motion.h1>
   <motion.h2>Trusted Coaching for Engineering Aspirants in Katraj   </motion.h2>
              {/* Full text for desktop */}
              <p className="lead d-none d-md-block">
            Looking for <b className="bld">IIT-JEE coaching classes in Katraj, Pune? </b>At <b className="bld">ASQUARE Academy,</b> 
            we provide <b className="bld">result-oriented teaching, personalized mentoring, and structured learning programs </b>
            that prepare students for <b className="bld">JEE Main & Advanced. </b> Our Katraj branch helps students build 
             <b className="bld"> concept clarity, exam-smart strategies, and strong fundamentals </b>
             to succeed in <b className="bld">IITs, NITs, IIITs, and top engineering institutes across India.</b>
              </p>

              {/* Short text for mobile */}
              <p className="lead d-block d-md-none">
              Looking for <b className="bld">IIT-JEE coaching classes in Katraj, Pune? </b>At <b className="bld">ASQUARE Academy,</b> 
            we provide <b className="bld">result-oriented teaching, personalized mentoring, and structured learning programs </b>
            that prepare students for <b className="bld">JEE Main & Advanced. </b> Our Katraj branch helps students build 
             <b className="bld"> concept clarity, exam-smart strategies, and strong fundamentals </b>
             to succeed in <b className="bld">IITs, NITs, IIITs, and top engineering institutes across India.</b></p>

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
        <div className="container">           <motion.h3
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="fw-bold display-6 mb-3 text-center"
        >Why Choose{" "}
          <span className="text-primary">ASQUARE Academy</span> in Katraj   ? </motion.h3>

          <div className="row g-4 justify-center" style={{ justifyContent: "center" }}> {whyChoose.map((item, i) => (<div key={i} className="col-lg-4 col-md-6">
            <motion.div whileHover={{ scale: 1.05 }} className="jee-feature-card shadow-lg rounded-4 p-4 h-100" > <item.Icon size={40} className="mb-3 text-warning" /> 
            <h5 className="fw-bold mb-2">{item.title}</h5> <p className="text-muted">{item.desc}</p>
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
              <motion.h4
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="fw-bold display-6 mb-3 text-centerr"
              >Programs for <span className="text-primary">IIT-JEE </span> Preparation at Katraj </motion.h4>

              <p className="lead text-secondary">

           The <b className="bld">Joint Entrance Examination (JEE) </b> demands
             <b className="bld">strong fundamentals, consistent practice, and effective strategies.</b> 
             At ASQUARE Academy Katraj, our courses are designed to <b className="bld">enhance problem-solving skills, boost exam confidence, and strengthen subject knowledge </b> for both <b className="bld">JEE Main & Advanced. </b> 
              
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
          <motion.h4
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
          </motion.h4>
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
              <motion.h3
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="fw-bold display-6 mb-3 text-center"
              >Teaching Approach at  <span className="text-primary">Katraj Branch</span> </motion.h3>


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
                          ? "•  Daily classroom lectures with structured assignments"
                          : step === "Practice"
                            ? "•  One-to-one doubt-solving sessions"
                            : step === "Assess"
                              ? "•  Weekly unit tests & full-length JEE mock exams"
                              : "•  Parent–teacher meetings with regular performance updates"}
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
          <motion.h3
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="fw-bold display-6 mb-3"
          >
            Key Highlights of ASQUARE Academy 
            <span className="highlight-text text-warning">
              &nbsp;Katraj &nbsp;
            </span>
            
          </motion.h3>

          <div className="row justify-content-center g-4">
            {[
              "•  Limited batch strength for better learning outcomes",
              "•  Updated JEE notes, study material & test series",
              "•  Workshops on exam strategies, time-saving techniques & problem-solving hacks",
              "•  Continuous progress tracking with parent updates",
                "• Recognized as a leading IIT-JEE coaching institute in Katraj, Pune",
            ].map((text, i) => {
              const highlightedText = text.includes("leading IIT-JEE coaching institute in Katraj, Pune")
                ? text.replace(
                  "leading IIT-JEE coaching institute in Katraj, Pune",
                  '<b className="bld">leading IIT-JEE coaching institute in Katraj, Pune</b>'
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

              <motion.h3
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="fw-bold display-6 mb-3"
              >
                Results That Inspire 
                <span className="highlight-text text-warning">
                  &nbsp;Confidence &nbsp;
                </span>

              </motion.h3>
              <p className="lead text-light">
              ASQUARE Academy has helped many students achieve<b className="bld">Top ranks in JEE Main & Advanced </b>. The <b className="bld">Katraj branch </b>continues this legacy with <b className="bld">expert teaching, structured preparation, and result-driven mentoring.</b>
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
      <hr></hr>

      {/* Final CTA */}
      <section id="enroll" className="jee-enroll-section py-5 text-center text-white">
        <div className="container">

          <motion.h3
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="fw-bold display-6 mb-3"
          >
           Join ASQUARE Academy 
            <span className="highlight-text text-warning">
              &nbsp; Katraj Today &nbsp;
            </span>

          </motion.h3>
          <p className="lead mb-4">
          Start your IIT-JEE journey with  <b className="bld">ASQUARE Academy’s coaching in Katraj,Pune. </b>With  <b className="bld">skilled faculty, updated study resources, and consistent results, </b>we are your trusted choice for  <b className="bld">JEE, CET & NEET coaching.</b> 
          </p>
          <p><MapPin className="text-warning" />Serving students from <b className="bld">Katraj, Dhankawadi, Bibwewadi, Ambegaon, and nearby areas of Pune.</b></p>
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

export default IITJEEKatraj;


