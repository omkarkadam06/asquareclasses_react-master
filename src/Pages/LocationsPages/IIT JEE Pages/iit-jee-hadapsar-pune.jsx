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

function IITJEEHadapsar() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const whyChoose = [
    { Icon: Users, title: "Expert Faculty", desc: "Experienced mentors for Physics, Chemistry, and Mathematics" },
    { Icon: BookOpen, title: "Concept-Oriented Learning", desc: "From NCERT basics to advanced problem-solving." },
    { Icon: Target, title: "Small Batches", desc: "Personal attention and dedicated doubt-solving." },
    { Icon: BarChart, title: "Regular Testing", desc: "Weekly tests, mock exams, and detailed performance analytics." },
    { Icon: Lightbulb, title: "Flexible Learning", desc: "Classroom + online IIT JEE Classes in Hadapsar with weekday and weekend batches." },
     { Icon: Lightbulb, title: "Advanced Focus", desc: "Special sessions for JEE Advanced coaching classes in Hadapsar." },
  ];

  const subjects = [
    { title: "Physics", desc: "In-depth conceptual learning, numericals & applications." },
    { title: "Chemistry", desc: "Thorough study of Physical, Organic & Inorganic Chemistry." },
    { title: "Mathematics", desc: "Rigorous practice in Algebra, Geometry, Calculus, Trigonometry & Probability." },
  ];

  const batches = [
    { title: "2-Year Integrated Program (Class 11th)", desc: "•	Builds a strong foundation for JEE, •	Covers school syllabus along with JEE Main & Advanced, •	Concept lectures, DPPs, and regular weekly tests" },
    { title: "1-Year Target Program (Class 12th)", desc: "•	Fast-track program with Class 11th revision, •	Intensive problem-solving and JEE-style mocks, •	High-weightage chapter coverage for JEE Main & Advanced." },
    { title: "Dropper / Repeater Program", desc: "•	Dedicated IIT JEE coaching classes in Hadapsar for repeaters, •	Comprehensive test series with error analysis, •	Mentorship and exam strategy sessions." },
    { title: "Crash Courses", desc: "•	Short-term exam-focused program, •	Formula sheets, revision notes, and PYQs, •	Time-management and strategy drills." },
  ];

  const faqs = [{ q: "1) Which is the Best IIT JEE Coaching in Hadapsar?", a: "ASQUARE Academy is among the Best IIT JEE Classes in Hadapsar due to our expert faculty, structured study plans, and strong results." }, { q: "2) Do you offer Top JEE Mains Coaching Classes Hadapsar?", a: "Yes. Our programs are designed to cover NCERT fundamentals with advanced JEE Main problem practice." }, { q: "3) How do you support IIT JEE Advanced Preparation in Hadapsar?", a: "We conduct specialized JEE Advanced coaching classes in Hadapsar with advanced problem sets, AITS, and error-analysis workshops." }, { q: "4) Are weekend IIT JEE Classes in Hadapsar available?", a: "Yes. We offer both weekday and weekend batches in classroom & online mode." }, { q: "5) Do you provide scholarships?", a: "Yes. Students can apply through the ASQUARE Scholarship Test for merit-based financial aid." },];

  return (
    <>
      <Helmet>
        <title>Best IIT JEE Coaching Classes in Hadapsar Pune | ASQUARE Academy</title>
             <meta
          name="title"
          content="Best IIT JEE Coaching Classes in Hadapsar Pune | ASQUARE Academy"
        />
        <meta
          name="description"
          content="Join ASQUARE Academy – Best IIT JEE Coaching Classes in Hadapsar Pune offering expert faculty, JEE Mains & Advanced preparation, tests & scholarships."
        />

        <meta name="keywords" content="IIT JEE coaching classes in hadapsar pune,
Best IIT JEE Coaching in hadapsar pune,
Top JEE Mains Coaching Classes hadapsar pune,
IIT JEE Advanced Preparation hadapsar pune,
JEE Advanced coaching classes in hadapsar pune,
IIT JEE Classes in hadapsar pune,
Best IIT JEE Classes in hadapsar pune,
Top IIT JEE Classes in hadapsar pune,



" />
<script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/IIT-JEE-coaching-classes-institute-hadapsar-pune/#localbusiness",
      "name": "ASQUARE Academy Hadapsar",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "url": "https://www.asquareclasses.com/IIT-JEE-coaching-classes-institute-hadapsar-pune/",
      "telephone": "9766118877",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Hadapsar",
        "addressRegion": "Pune",
        "addressCountry": "India"
      },
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune/"
      ],
      "description": "ASQUARE Academy Hadapsar offers the Best IIT JEE Coaching in Pune with expert faculty, JEE Mains & Advanced preparation, weekly tests, and scholarship programs."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/IIT-JEE-coaching-classes-institute-hadapsar-pune/#webpage",
      "url": "https://www.asquareclasses.com/IIT-JEE-coaching-classes-institute-hadapsar-pune/",
      "name": "Best IIT JEE Coaching Classes in Hadapsar Pune | ASQUARE Academy",
      "description": "Join ASQUARE Academy – the Best IIT JEE Coaching in Hadapsar Pune with structured study plans, expert mentors & scholarship opportunities."
    },
    {
      "@type": "EducationalOrganization",
      "name": "ASQUARE Academy",
      "url": "https://www.asquareclasses.com/",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "9766118877",
        "contactType": "Customer Support",
        "areaServed": "IN"
      },
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune/"
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.asquareclasses.com/IIT-JEE-coaching-classes-institute-hadapsar-pune/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Which is the Best IIT JEE Coaching in Hadapsar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE Academy is among the Best IIT JEE Classes in Hadapsar due to our expert faculty, structured study plans, and strong results."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer Top JEE Mains Coaching Classes Hadapsar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Our programs are designed to cover NCERT fundamentals with advanced JEE Main problem practice."
          }
        },
        {
          "@type": "Question",
          "name": "How do you support IIT JEE Advanced Preparation in Hadapsar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We conduct specialized JEE Advanced coaching classes in Hadapsar with advanced problem sets, AITS, and error-analysis workshops."
          }
        },
        {
          "@type": "Question",
          "name": "Are weekend IIT JEE Classes in Hadapsar available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We offer both weekday and weekend batches in classroom & online mode."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide scholarships?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Students can apply through the ASQUARE Scholarship Test for merit-based financial aid."
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
          "name": "IIT JEE Coaching Classes",
          "item": "https://www.asquareclasses.com/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Hadapsar Pune",
          "item": "https://www.asquareclasses.com/IIT-JEE-coaching-classes-institute-hadapsar-pune/"
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
                IIT JEE Preparation in Hadapsar Pune for {" "}
                <span className="highlight-text text-warning">
                  JEE Main and Advanced
                </span>{" "}
                Exam
              </motion.h1>
{/* <p>Premier Coaching Institute for Engineering Aspirants in Pimpri</p> */}
              {/* Full text for desktop */}
              <p className="lead d-none d-md-block">
               ASQUARE Academy offers expert-led <b className="bld">IIT JEE coaching classes in Hadapsar</b> , providing structured programs, personalized mentoring, and advanced test preparation. Recognized as one of the   <b className="bld">Best IIT JEE Coaching in Hadapsar</b> , we focus on strong conceptual learning, small batches, and rigorous testing to help students excel in both JEE Main and Advanced. Whether you are beginning your preparation or need specialized   <b className="bld">IIT JEE Advanced Preparation in Hadapsar</b> , ASQUARE is your trusted institute.
              </p>

              {/* Short text for mobile */}
              <p className="lead d-block d-md-none">
                                   ASQUARE Academy offers expert-led <b className="bld">IIT JEE coaching classes in Hadapsar</b> , providing structured programs, personalized mentoring, and advanced test preparation. Recognized as one of the   <b className="bld">Best IIT JEE Coaching in Hadapsar</b> , we focus on strong conceptual learning, small batches, and rigorous testing to help students excel in both JEE Main and Advanced. Whether you are beginning your preparation or need specialized   <b className="bld">IIT JEE Advanced Preparation in Hadapsar</b> , ASQUARE is your trusted institute.
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
          <span className="text-primary">ASQUARE Academy for </span>  IIT JEE Coaching in Hadapsar?</motion.h1>

          <div className="row g-4 justify-center" style={{ justifyContent: "center" }}> {whyChoose.map((item, i) => (<div key={i} className="col-lg-4 col-md-6">
            <motion.div whileHover={{ scale: 1.05 }} className="jee-feature-card shadow-lg rounded-4 p-4 h-100" > <item.Icon size={40} className="mb-3 text-warning" /> <h5 className="fw-bold mb-2">{item.title}</h5> <p className="text-muted">{item.desc}</p>
            </motion.div> </div>))}<p className="">ASQUARE Academy is consistently rated among the <b className="bld text-warning">Top JEE Mains Coaching Classes Hadapsar</b> for quality teaching and results.</p>
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
              >Our  <span className="text-primary">JEE</span> Preparation Programs </motion.h1>

              <p className="lead text-secondary">
                The <b className="bld">Joint Entrance Examination (JEE)</b> is one of the toughest engineering entrance tests. At ASQUARE Academy Hadapsar, our coaching programs are designed to <b className="bld">strengthen fundamentals, improve speed & accuracy, and develop exam strategies</b> so students can succeed in both <b className="bld">JEE Main & Advanced</b>.
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
            Programs 
            <span className="highlight-text text-warning">
              &nbsp;We Offer&nbsp;
            </span>
            
          </motion.h1>
          <br></br>

          <div className="row g-4">
            {/* <div className="col-lg-6">
              <h4 className="highlight-text text-warning fw-bold mb-4 text-centerr">Subjects Covered</h4>
              {subjects.map((sub, i) => (<div key={i} className="jee-subject-box mb-4 p-3 pb-4 pt-4  rounded-4 bg-white bg-opacity-10 backdrop-blur-md border border-light border-opacity-25">
                <h5 className="fw-semibold">{sub.title}</h5>
                <p className="small mb-0">{sub.desc}</p> </div>))}
            </div> */}
            <div className="col-lg-12">
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
                      <h6 className="fw-bold">{step}</h6>
                      <p className="text-muted small mb-0">
                        {step === "Learn"
                          ? "Interactive lectures for strong fundamentals."
                          : step === "Practice"
                            ? "DPPs, assignments, and advanced problem sets."
                            : step === "Assess"
                              ? "Weekly tests and full-length mock exams."
                              : "Regular crash revision before exams."}
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
            Key Benefits of
            <span className="highlight-text text-warning">
              &nbsp;Hadapsar &nbsp;
            </span>
            Branch 
          </motion.h1>

          <div className="row justify-content-center g-4">
            {[
              "Printed & digital study material.",
              "Dedicated doubt-clearing counters.",
              "Regular PTMs & performance updates.",
              "Online test series with All-India benchmarking.",
               
            ].map((text, i) => {
              const highlightedText = text.includes("trusted JEE coaching institute in Pimpri, Pune")
                ? text.replace(
                  "trusted JEE coaching institute in Pimpri, Pune",
                  '<b className="bld">trusted JEE coaching institute in Pimpri, Pune</b>'
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
               Student Success & 
                <span className="highlight-text text-warning">
                  &nbsp;Results &nbsp;
                </span>

              </motion.h1>
              <p className="lead text-light">
               ASQUARE Academy students consistently achieve top ranks in  <b className="bld">IITs, NITs, IIITs, and other premier engineering colleges</b>. Our proven methodology makes us one of the  <b className="bld">Best IIT JEE Classes in Hadapsar.</b> 
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
            Looking for the Best IIT JEE Classes in  
            <span className="highlight-text text-warning">
              &nbsp;Hadapsar? &nbsp;
            </span>

          </motion.h1>
          <p className="lead mb-4">
            Join  <b className="bld">ASQUARE Academy</b>. a trusted name in engineering coaching. Book a free counselling session or demo class today and prepare with one of the <b className="bld">Top IIT JEE Coaching Classes in Hadapsar.</b>
          </p>
          {/* <p><MapPin className="text-warning" /> Best for students from <b className="bld">Pimpri, Chinchwad, Nigdi, Akurdi, Kasarwadi, and PCMC areas</b>.</p> */}
          <a className="btn btn-lg btn-warning fw-bold mt-3 px-5 py-3 rounded-pill shadow-lg">
            <Link
              to={'/'}
              className="nav-item nav-item-list text-white"

            >
              ⚡ Admissions Open – Book your seat today! 


              &nbsp;<p className="text-warning">Limited slots available.</p>
            </Link>
          </a>
        </div>
      </section>



      <Footer />
    </>
  );
}

export default IITJEEHadapsar;
