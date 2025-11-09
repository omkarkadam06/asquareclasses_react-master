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

function IITJEEVishrantwadi() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const whyChoose = [
    { Icon: Users, title: "Expert Teachers", desc: "Experienced faculty in IIT-JEE, CET & NEET coaching." },
    { Icon: BookOpen, title: "Comprehensive PCM Syllabus", desc: "Physics, Chemistry & Mathematics covered as per latest exam guidelines." },
    { Icon: Target, title: "Focused Mentorship", desc: "Small batch sizes for one-on-one attention and guidance." },
    { Icon: BarChart, title: "Regular Practice Tests", desc: "Weekly assignments, chapter tests & mock exams." },
    { Icon: Lightbulb, title: "Motivation & Career Guidance", desc: "Counseling sessions, time management tips & exam strategies." },
  ];

  const subjects = [
    { title: "Physics", desc: "Strong fundamentals with practical applications & numerical problem-solving." },
    { title: "Chemistry", desc: "Detailed coverage of Physical, Organic & Inorganic Chemistry." },
    { title: "Mathematics", desc: "Advanced practice in Algebra, Trigonometry, Geometry, Calculus & Probability." },
  ];

  const batches = [
    { title: "2-Year Foundation Program (10th → 12th Moving Students)", desc: "Boards + JEE integrated coaching." },
    { title: "1-Year Intensive Course (11th → 12th Moving Students)", desc: "Fast-paced XII + JEE preparation." },
    { title: "Crash Course (2–3 Months)", desc: "Quick revision & exam-oriented test practice." },
    { title: "Dropper/Repeater Batch (XII Pass-outs)", desc: "One-year focused JEE program for repeaters." },
  ];

  const faqs = [{ q: "Q1: Who can join ASQUARE Academy Vishrantwadi?", a: "Students of Class XI, XII, and XII pass-outs preparing for JEE Main & Advanced." },
     { q: "Q2: Which subjects are taught?", a: "Physics, Chemistry, and Mathematics (PCM)." },
      { q: "Q3: Are mock tests included?", a: "Yes, weekly practice tests and full-length JEE mocks are part of the program." },
       { q: "Q4: What courses are available?", a: "2-Year, 1-Year, Crash Courses & Dropper Batches." },
        { q: "Q5: How many students per batch?", a: "We maintain small batches for personal mentoring." },
         { q: "Q6: Do parents receive progress updates?", a: "Yes, through performance reports and PTMs." },
          { q: "Q7: Which areas does the Vishrantwadi branch serve?", a: "Conveniently accessible from Vishrantwadi, Tingre Nagar, Lohegaon, Dighi, Yerwada, and nearby Pune localities." },
     ];

  return (
    <>
      <Helmet>
        <title>Best IIT JEE Coaching Classes in Vishrantwadi Pune | ASQUARE Academy</title>
             <meta
          name="title"
          content="Best IIT JEE Coaching Classes in Vishrantwadi Pune | ASQUARE Academy"
        />
        <meta
          name="description"
          content="Join the Best IIT JEE Coaching Classes in Vishrantwadi Pune with expert faculty, mock tests & personal guidance for JEE Main & Advanced success at ASQUARE Academy."
        />

        <meta name="keywords" content="IIT JEE coaching classes in vishrantwadi,
Best IIT JEE Coaching in vishrantwadi,
Top JEE Mains Coaching Classes vishrantwadi,
IIT JEE Advanced Preparation vishrantwadi,
JEE Advanced coaching classes in vishrantwadi,
IIT JEE Classes in vishrantwadi,
Best IIT JEE Classes in vishrantwadi,
Top IIT JEE Classes in vishrantwadi,

" />
<script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-vishrantwadi-pune#localbusiness",
      "name": "ASQUARE Academy",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-vishrantwadi-pune",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "telephone": "9766118877",
      "priceRange": "₹₹",
      "description": "ASQUARE Academy offers the Best IIT JEE Coaching Classes in Vishrantwadi Pune for JEE Main and Advanced aspirants with expert guidance and mock tests.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Vishrantwadi, Pune, Maharashtra",
        "addressLocality": "Pune",
        "addressRegion": "MH",
        "postalCode": "411015",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune/"
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-vishrantwadi-pune#webpage",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-vishrantwadi-pune",
      "name": "IIT JEE Coaching Classes in Vishrantwadi Pune | ASQUARE Academy",
      "description": "Enroll in the Best IIT JEE Coaching Classes in Vishrantwadi Pune with structured courses, mock tests, and expert guidance for JEE Mains & Advanced.",
      "inLanguage": "en-IN",
      "isPartOf": {
        "@id": "https://www.asquareclasses.com/#website"
      }
    },
    {
      "@type": "EducationalOrganization",
      "name": "ASQUARE Academy",
      "url": "https://www.asquareclasses.com/",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune/"
      ],
      "description": "ASQUARE Academy in Vishrantwadi Pune offers IIT JEE Classes with expert faculty, small batches, and consistent performance tracking."
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
          "item": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-vishrantwadi-pune"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can join ASQUARE Academy Vishrantwadi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students of Class XI, XII, and XII pass-outs preparing for JEE Main & Advanced can join our IIT JEE Classes in Vishrantwadi Pune."
          }
        },
        {
          "@type": "Question",
          "name": "Which subjects are taught?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE Academy Vishrantwadi covers Physics, Chemistry, and Mathematics (PCM) for JEE aspirants."
          }
        },
        {
          "@type": "Question",
          "name": "Are mock tests included?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, weekly practice tests and full-length JEE mock exams are conducted regularly."
          }
        },
        {
          "@type": "Question",
          "name": "What courses are available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer 2-Year, 1-Year, Crash Courses, and Dropper Batches for IIT JEE preparation."
          }
        },
        {
          "@type": "Question",
          "name": "How many students per batch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We maintain small batch sizes to ensure personalized mentoring and guidance."
          }
        },
        {
          "@type": "Question",
          "name": "Do parents receive progress updates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, parents receive detailed performance reports and can attend PTMs regularly."
          }
        },
        {
          "@type": "Question",
          "name": "Which areas does the Vishrantwadi branch serve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Vishrantwadi branch serves students from Tingre Nagar, Lohegaon, Dighi, Yerwada, and nearby Pune areas."
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
                Crack JEE Main & Advanced with {" "}
                <span className="highlight-text text-warning">
                  ASQUARE Academy
                </span>{" "}
                Vishrantwadi
              </motion.h1>
<p>Dedicated Coaching for Future Engineers in Vishrantwadi</p>
              {/* Full text for desktop */}
              <p className="lead d-none d-md-block">
               Looking for <b className="bld">IIT-JEE coaching classes in Vishrantwadi, Pune?</b> At  <b className="bld">ASQUARE Academy, </b> we provide  <b className="bld">concept-focused teaching, systematic study plans, and exam-oriented practice sessions</b> to help students achieve their engineering dreams. Our Vishrantwadi branch is a trusted destination for aspirants targeting <b className="bld">IITs, NITs, IIITs, and India’s leading engineering colleges. </b>With  <b className="bld">personalized mentoring, doubt-solving support, and advanced learning resources, </b>we ensure students are well-prepared for <b className="bld">JEE Main & Advanced.</b> 
              </p>

              {/* Short text for mobile */}
              <p className="lead d-block d-md-none">
                                     Looking for <b className="bld">IIT-JEE coaching classes in Vishrantwadi, Pune?</b> At  <b className="bld">ASQUARE Academy, </b> we provide  <b className="bld">concept-focused teaching, systematic study plans, and exam-oriented practice sessions</b> to help students achieve their engineering dreams. Our Vishrantwadi branch is a trusted destination for aspirants targeting <b className="bld">IITs, NITs, IIITs, and India’s leading engineering colleges. </b>With  <b className="bld">personalized mentoring, doubt-solving support, and advanced learning resources, </b>we ensure students are well-prepared for <b className="bld">JEE Main & Advanced.</b> 
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
          <span className="text-primary">ASQUARE Academy in</span>  Vishrantwadi</motion.h1>

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
              >Our  <span className="text-primary">JEE</span> Coaching Programs </motion.h1>

              <p className="lead text-secondary">
                The <b className="bld">Joint Entrance Examination (JEE)</b> is a challenging exam that demands <b className="bld">clarity, speed, and consistent practice.</b> At ASQUARE Academy Vishrantwadi, our courses focus on  <b className="bld">strengthening basics, improving accuracy, and boosting exam confidence,</b> covering both <b className="bld">JEE Main & Advanced.</b>
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
              <h4 className="highlight-text text-warning fw-bold mb-4 text-centerr">We Teach</h4>
              {subjects.map((sub, i) => (<div key={i} className="jee-subject-box mb-4 p-3 pb-4 pt-4  rounded-4 bg-white bg-opacity-10 backdrop-blur-md border border-light border-opacity-25">
                <h5 className="fw-semibold">{sub.title}</h5>
                <p className="small mb-0">{sub.desc}</p> </div>))}
            </div>
            <div className="col-lg-6">
              <h4 className="highlight-text text-warning fw-bold mb-4 text-centerr">Course Options & Duration</h4>
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
              >Our Teaching <span className="text-primary">Methodology</span> </motion.h1>



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
                          ? "Daily lectures with topic-wise assignments"
                          : step === "Practice"
                            ? "One-to-one doubt-solving sessions"
                            : step === "Assess"
                              ? "Weekly unit tests & full-length mock exams"
                              : "Parent–teacher meetings for performance analysis"}
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
              &nbsp;Vishrantwadi&nbsp;
            </span>
            Branch
          </motion.h1>

          <div className="row justify-content-center g-4">
            {[
              "Limited batch strength for individual focus",
              "Updated IIT-JEE study notes, question banks & practice modules",
              "Workshops on exam hacks, shortcut techniques & time-saving strategies",
              "Continuous feedback system with parent updates",
                "Recognized as a trusted IIT-JEE coaching institute in Vishrantwadi, Pune",
            ].map((text, i) => {
              const highlightedText = text.includes("trusted IIT-JEE coaching institute in Vishrantwadi, Pune")
                ? text.replace(
                  "trusted IIT-JEE coaching institute in Vishrantwadi, Pune",
                  '<b className="bld">trusted IIT-JEE coaching institute in Vishrantwadi, Pune</b>'
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
                Results That 
                <span className="highlight-text text-warning">
                  &nbsp;Prove Our Success &nbsp;
                </span>

              </motion.h1>
              <p className="lead text-light">
              ASQUARE Academy has a strong record of producing  <b className="bld">JEE toppers and high scorers.</b> The <b className="bld">Vishrantwadi branch</b> adds to this legacy with <b className="bld">result-oriented coaching, student-centric learning, and consistent success stories.</b>
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
              &nbsp;Vishrantwadi Today &nbsp;
            </span>

          </motion.h1>
          <p className="lead mb-4">
            Start your IIT-JEE preparation with <b className="bld">ASQUARE Academy’s expert coaching in Vishrantwadi, Pune.</b> With <b className="bld">experienced faculty, updated study material, and proven results</b>, we are your trusted partner for <b className="bld">JEE, CET & NEET coaching.</b>
          </p>
          <p><MapPin className="text-warning" /> Serving students from<b className="bld">Vishrantwadi, Tingre Nagar, Lohegaon, Dighi, Yerwada, and nearby areas in Pune.</b>.</p>
          <a className="btn btn-lg btn-warning fw-bold mt-3 px-5 py-3 rounded-pill shadow-lg">
            <Link
              to={'/'}
              className="nav-item nav-item-list text-white"

            >
              ⚡ Admissions Open – Limited seats available!  


              &nbsp;<p className="text-warning">Contact us today to secure your spot.</p>
            </Link>
          </a>
        </div>
      </section>



      <Footer />
    </>
  );
}

export default IITJEEVishrantwadi;
