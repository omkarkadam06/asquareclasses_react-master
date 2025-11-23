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
import sampleimg2 from '../../../Assets/SampleImages/MobBanners/MobBanner9.jpeg';
import sampleimg22 from'../../../Assets/SampleImages/MobBanners/MobBanner1.jpeg';

import sampleimg1 from '../../../Assets/SampleImages/Banners/Banners (1).jpeg';
import sampleimg11 from '../../../Assets/SampleImages/Banners/Banners (9).jpeg';
// import sampleimg2 from '../../../Assets/SampleImages/MobBanners/MobBanner (1).jpeg';
// import sampleimg22 from'../../../Assets/SampleImages/MobBanners/MobBanner (2).jpeg';


import sampleimg3 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (9).jpeg'; //9,15
import sampleimg4 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (2).jpeg'; //2,17
import sampleimg5 from '../../../Assets/SampleImages/sampleimg5.jpeg';
import sampleimg6 from '../../../Assets/SampleImages/AsquarePics/AsquarePics (4).jpeg'; //4,8,13,16
import sampleimg7 from '../../../Assets/SampleImages/sampleimg7.jpeg';
// import Swal from "sweetalert2";
import Form from '../../../Components/Form2/Form2.jsx';

const Reviews = React.lazy(() => import("../../../Components/Reviews/Reviews.jsx"));

function IITJEEKalas() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


const whyChoose = [
  { Icon: Users, title: "Expert Faculty", desc: "Qualified mentors for IIT-JEE, NEET & CET." },
  { Icon: BookOpen, title: "Comprehensive Syllabus", desc: "Physics, Chemistry & Mathematics as per the latest JEE exam format." },
  { Icon: Target, title: "Small Batch Strength", desc: "Personalized mentoring for each student." },
  { Icon: BarChart, title: "Mock Tests & Reviews", desc: "Weekly tests with detailed evaluation." },
  { Icon: Lightbulb, title: "Motivational Guidance", desc: "Career counseling & exam strategy sessions." },
];


 const subjects = [
  { title: "Physics", desc: "Conceptual understanding with problem-solving focus" },
  { title: "Chemistry", desc: "In-depth Physical, Organic & Inorganic training" },
  { title: "Mathematics", desc: "Extensive practice in Algebra, Calculus, Geometry & Probability" },
];


const batches = [
  { title: "2-Year Foundation (10th → 12th)", desc: "Boards + JEE coaching combined" },
  { title: "1-Year Intensive (11th → 12th)", desc: "Quick-paced JEE + XII program" },
  { title: "Crash Course (2–3 Months)", desc: "Fast-track exam revision & practice" },
  { title: "Dropper / Repeater Batch", desc: "One-year focused JEE prep for XII pass-outs" },
];


const faqs = [
  { q: "Q1: Who can join ASQUARE Kalas?", 
    a: "Class XI, XII students and XII pass-outs targeting JEE Main & Advanced can join our IIT JEE coaching classes in Kalas." 
  },
  { q: "Q2: What subjects are included in the IIT JEE program?", 
    a: "We offer Physics, Chemistry, and Mathematics (PCM) as part of structured IIT JEE Advanced preparation in Kalas." 
  },
  { q: "Q3: Do you conduct mock tests for JEE aspirants?", 
    a: "Yes, weekly tests and full-length mock exams are provided, supporting the standard of the Top JEE Mains Coaching Classes in Kalas." 
  },
  { q: "Q4: What course options are available at ASQUARE Kalas?", 
    a: "We offer 2-Year & 1-Year Programs, Crash Courses, and Dropper Batches—ideal for students seeking the Best IIT JEE Coaching in Kalas." 
  },
  { q: "Q5: How big are the batches at ASQUARE Kalas?", 
    a: "Our small, focused batches ensure better mentoring and personalized learning at our Top IIT JEE Classes in Kalas." 
  },
  { q: "Q6: Do parents receive performance or progress updates?", 
    a: "Yes, parents get regular performance reports and PTMs to track progress throughout the JEE preparation journey." 
  },
  { q: "Q7: Which areas are served by the Kalas branch?", 
    a: "Our center is convenient for students from Kalas, Vishrantwadi, Dighi, Alandi Road, Tingre Nagar, and nearby localities, making us a preferred choice for JEE Advanced coaching classes in Kalas." 
  },
  { q: "Q8: Why choose ASQUARE Academy for IIT JEE preparation?", 
    a: "Expert faculty, systematic study plans, mock exams, and focused learning environments rank us among the Best IIT JEE Classes in Kalas and Top IIT JEE Classes in Kalas." 
  },
];


  return (
    <>
      <Helmet>
        <title>Best IIT JEE Coaching Classes in Kalas | JEE Main & Advanced Institute</title>
             <meta
          name="title"
          content="Best IIT JEE Coaching Classes in Kalas | JEE Main & Advanced Institute"
        />
        <meta
          name="description"
          content="Join the Best IIT JEE Coaching in Kalas offering expert PCM coaching, mock tests, focused batches & structured JEE Main and JEE Advanced preparation at ASQUARE Kalas."
        />

        <meta name="keywords" content="IIT JEE coaching classes in kalas,
Best IIT JEE Coaching in kalas,
Top JEE Mains Coaching Classes kalas,
IIT JEE Advanced Preparation kalas,
JEE Advanced coaching classes in kalas,
IIT JEE Classes in kalas,
Best IIT JEE Classes in kalas,
Top IIT JEE Classes in kalas,



" />
<script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@graph": [

    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-institute-kalas-pune#localbusiness",
      "name": "ASQUARE Academy Kalas - IIT JEE Coaching",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-institute-kalas-pune",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "telephone": "9766118877",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Kalas, Pune",
        "addressLocality": "Kalas",
        "addressRegion": "Maharashtra",
        "postalCode": "411015",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune"
      ],
      "description": "Best IIT JEE Coaching Classes in Kalas providing PCM coaching, mock exams, doubt-solving and structured JEE Main & Advanced preparation."
    },

    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-institute-kalas-pune#webpage",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-institute-kalas-pune",
      "name": "IIT JEE Coaching Classes in Kalas",
      "description": "Top IIT JEE Coaching in Kalas with expert faculty, PCM classes, mock tests, small batches and systematic preparation for JEE Main and Advanced."
    },

    {
      "@type": "EducationalOrganization",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-institute-kalas-pune#educational",
      "name": "ASQUARE Academy Kalas",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-institute-kalas-pune",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "description": "Best IIT JEE Classes in Kalas offering Physics, Chemistry, Mathematics coaching with planned study modules, mock exams and focused learning.",
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune"
      ]
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-institute-kalas-pune#breadcrumb",
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
          "name": "IIT JEE Coaching Kalas",
          "item": "https://www.asquareclasses.com/iit-jee-coaching-institute-kalas-pune"
        }
      ]
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-institute-kalas-pune#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can join ASQUARE Kalas?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Class XI, XII students and XII pass-outs targeting JEE Main & Advanced can join our IIT JEE coaching classes in Kalas."
          }
        },
        {
          "@type": "Question",
          "name": "What subjects are included in the IIT JEE program?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer Physics, Chemistry, and Mathematics (PCM) as part of structured IIT JEE Advanced preparation in Kalas."
          }
        },
        {
          "@type": "Question",
          "name": "Do you conduct mock tests for JEE aspirants?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, weekly tests and full-length mock exams are provided, supporting the standard of the Top JEE Mains Coaching Classes in Kalas."
          }
        },
        {
          "@type": "Question",
          "name": "What course options are available at ASQUARE Kalas?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer 2-Year & 1-Year Programs, Crash Courses, and Dropper Batches—ideal for students seeking the Best IIT JEE Coaching in Kalas."
          }
        },
        {
          "@type": "Question",
          "name": "How big are the batches at ASQUARE Kalas?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our small, focused batches ensure better mentoring and personalized learning at our Top IIT JEE Classes in Kalas."
          }
        },
        {
          "@type": "Question",
          "name": "Do parents receive performance or progress updates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, parents get regular performance reports and PTMs to track progress throughout the JEE preparation journey."
          }
        },
        {
          "@type": "Question",
          "name": "Which areas are served by the Kalas branch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our center is convenient for students from Kalas, Vishrantwadi, Dighi, Alandi Road, Tingre Nagar, and nearby localities."
          }
        },
        {
          "@type": "Question",
          "name": "Why choose ASQUARE Academy for IIT JEE preparation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Expert faculty, systematic study plans, mock exams, and focused learning rank us among the Best IIT JEE Classes in Kalas."
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
               Excel in JEE Main & Advanced with   {" "}
                <span className="highlight-text text-warning">
                 ASQUARE Institute
                </span>{" "}
                Kalas
              </motion.h1>
   <motion.h2>Turn Your Ambition into Success with JEE Coaching in Kalas </motion.h2>
              {/* Full text for desktop */}
              <p className="lead d-none d-md-block">
          Looking for the top IIT JEE institute in Kalas, Pune? At ASQUARE Academy, we specialize in strengthening fundamentals, building speed, and mastering exam techniques. Our structured training ensures success in IITs, NITs, IIITs, and other premier engineering institutes.
              </p>

              {/* Short text for mobile */}
              <p className="lead d-block d-md-none">
                                     Looking for the top IIT JEE institute in Kalas, Pune? At ASQUARE Academy, we specialize in strengthening fundamentals, building speed, and mastering exam techniques. Our structured training ensures success in IITs, NITs, IIITs, and other premier engineering institutes.
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
        <div className="container">           <motion.h3
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="fw-bold display-6 mb-3 text-center"
        >Why {" "}
          <span className="text-primary">ASQUARE</span> is the Best JEE Institute in Kalas? </motion.h3>

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
              <motion.h4
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="fw-bold display-6 mb-3 text-centerr"
              >About Our <span className="text-primary">JEE Coaching </span> Programs </motion.h4>

              <p className="lead text-secondary">

          The Joint Entrance Examination (JEE) is one of the most competitive exams in India. Our Kalas branch provides structured classes, test-based learning, and practice-driven preparation to ensure success in JEE Main & Advanced.
              
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
            Subjects We Cover
            <span className="highlight-text text-warning">
              &nbsp;&&nbsp;
            </span>
            Batch Options
          </motion.h4>
          <br></br>

          <div className="row g-4">
            <div className="col-lg-6">
              <h4 className="highlight-text text-warning fw-bold mb-4 text-centerr">Subjects We Cover</h4>
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
              <motion.h3
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="fw-bold display-6 mb-3 text-center"
              >Teaching Style at  <span className="text-primary">ASQUARE Kalas</span> </motion.h3>



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
                          ? "Daily lectures with assignments"
                          : step === "Practice"
                            ? "Individual doubt-clearing sessions"
                            : step === "Assess"
                              ? "Weekly practice papers & mock exams"
                              : "Regular PTMs to update parents on progress"}
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
            Key Benefits of Joining Our 
            <span className="highlight-text text-warning">
              &nbsp;Kalas &nbsp;
            </span>
            Branch
          </motion.h3>

          <div className="row justify-content-center g-4">
            {[
              "Limited students per batch for personal attention",
              "Latest IIT-JEE study material & problem banks",
              "Workshops on exam strategy & time management",
              "Trusted JEE institute in Kalas, Pune",
               
            ].map((text, i) => {
              const highlightedText = text.includes("Trusted JEE institute")
                ? text.replace(
                  "Trusted JEE institute",
                  '<b className="bld">Trusted JEE institute</b>'
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
              Success & 
                <span className="highlight-text text-warning">
                  &nbsp;Results &nbsp;
                </span>

              </motion.h3>
              <p className="lead text-light">
        Every year, ASQUARE students achieve success in IITs, NITs, and leading engineering institutes. Our Kalas center maintains a legacy of excellence with strong academic outcomes.
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
            {/* <div className="d-inline-block bg-primary bg-opacity-10 text-primary fw-bold rounded-pill px-3 py-1 mb-3">
              <BadgeQuestionMark /> FAQs
            </div> */}

            <motion.h3
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="fw-bold display-6 mb-3 text-center"
            >FAQs – JEE Coaching in Kalas <span className="text-primary">(FAQ)</span> </motion.h3>
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
           Enroll at  ASQUARE Academy 
            <span className="highlight-text text-warning">
              &nbsp;Kalas Today &nbsp;
            </span>

          </motion.h3>
          <p className="lead mb-4">
       Boost your JEE preparation with ASQUARE Academy, Kalas, Pune. With expert guidance, structured learning, and proven success, we are your trusted choice for JEE, CET & NEET coaching.
          </p>
          <p><MapPin className="text-warning" />Ideal for students from  <b className="bld">Kalas, Vishrantwadi, Dighi, Tingre Nagar, Alandi Road, and nearby Pune areas.</b></p>
          <a className="btn btn-lg btn-warning fw-bold mt-3 px-5 py-3 rounded-pill shadow-lg">
            <Link
              to={'/'}
              className="nav-item nav-item-list text-white"

            >
              ⚡ Admissions Open – Secure your seat today!  


              &nbsp;
            </Link>
          </a>
        </div>
      </section>



      <Footer />
    </>
  );
}

export default IITJEEKalas;
