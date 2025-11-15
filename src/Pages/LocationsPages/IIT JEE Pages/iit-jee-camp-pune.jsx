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

function IITJEECamp() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const whyChoose = [
    { Icon: Users, title: "Expert Teaching Staff ", desc: "Specialists in IIT-JEE, MHT-CET & NEET coaching." },
    { Icon: BookOpen, title: "Comprehensive PCM Coverage ", desc: "Physics, Chemistry & Mathematics taught per latest exam guidelines." },
    { Icon: Target, title: "Personalized Mentoring", desc: "Small batches for focused learning and guidance." },
    { Icon: BarChart, title: "Regular Assessments", desc: "Weekly unit tests, assignments & mock exams for self-evaluation." },
    { Icon: Lightbulb, title: "Motivation & Strategy Sessions", desc: "Career counseling and time management workshops" },
  ];

  const subjects = [
    { title: "Physics", desc: "Conceptual clarity with real-world applications" },
    { title: "Chemistry", desc: "Thorough learning of Physical, Organic & Inorganic Chemistry" },
    { title: "Mathematics", desc: "Rigorous practice in Algebra, Trigonometry, Geometry, Calculus & Probability" },
  ];

  const batches = [
    { title: "•	2-Year Foundation Program (10th → 12th Moving Students)", desc: "Comprehensive XI + XII + JEE preparation." },
    { title: "•	1-Year Advanced Program (11th → 12th Moving Students)", desc: "XII + JEE fast-track training." },
    { title: "•	Crash Course (2–3 Months)", desc: "Quick revision & mock test practice." },
    { title: "•	Repeater/Dropper Batch (XII Pass-outs)", desc: "One-year specialized JEE coaching program." },
  ];

  const faqs = [{ q: "Q1: Who can join ASQUARE Academy Camp?", a: "Students of Class XI, XII, and XII pass-outs preparing for JEE Main & Advanced." },
     { q: "Q2: Which subjects are covered?", a: "Physics, Chemistry & Mathematics (PCM)." },
      { q: "Q3: Do you conduct mock tests?", a: "Yes, weekly tests and full-length mock exams are part of the curriculum." },
       { q: "Q4: What course options are available?", a: "2-Year, 1-Year, Crash Courses & Dropper Batches." },
        { q: "Q5: How many students are in each batch?", a: "We keep batch sizes small for better attention." },
         { q: "Q6: Do parents receive updates?", a: "Yes, through progress reports and parent–teacher meetings." },
          { q: "Q7: Which areas does the Camp branch serve?", a: "Conveniently accessible from Camp, MG Road, Fatima Nagar, Hadapsar, Koregaon Park, and nearby Pune localities." },
      
        ];

  return (
    <>
      <Helmet>
        <title>Best IIT JEE Coaching Classes in Camp Pune | ASQUARE Academy</title>
             <meta
          name="title"
          content="Best IIT JEE Coaching Classes in Camp Pune | ASQUARE Academy"
        />
        <meta
          name="description"
          content="Join ASQUARE Academy for top IIT JEE coaching in Camp Pune. Expert PCM faculty, mock exams, small batches, and dropper courses for JEE Main & Advanced preparation."
        />

        <meta name="keywords" content="IIT JEE coaching classes in Camp,
Best IIT JEE Coaching in Camp,
Top JEE Mains Coaching Classes Camp,
IIT JEE Advanced Preparation Camp,
JEE Advanced coaching classes in Camp,
IIT JEE Classes in Camp,
Best IIT JEE Classes in Camp,
Top IIT JEE Classes in Camp,


" />
<script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-camp-pune#organization",
      "name": "ASQUARE Academy",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-camp-pune",
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
        "addressLocality": "Camp",
        "addressRegion": "Pune",
        "addressCountry": "IN"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-camp-pune#webpage",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-camp-pune",
      "name": "Best IIT JEE Coaching Classes in Camp Pune | ASQUARE Academy",
      "description": "ASQUARE Academy offers the best IIT JEE coaching classes in Camp Pune with expert faculty, small batches, and structured mock exams for JEE Main & Advanced."
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
          "name": "IIT JEE Coaching Pune",
          "item": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-in-pune-maharashtra/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Camp Pune",
          "item": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-camp-pune"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can join ASQUARE Academy Camp?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students of Class XI, XII, and XII pass-outs preparing for JEE Main & Advanced."
          }
        },
        {
          "@type": "Question",
          "name": "Which subjects are covered?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Physics, Chemistry & Mathematics (PCM) are covered in detail for strong JEE concepts."
          }
        },
        {
          "@type": "Question",
          "name": "Do you conduct mock tests?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, weekly tests and full-length mock exams are included for consistent evaluation."
          }
        },
        {
          "@type": "Question",
          "name": "What course options are available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer 2-Year, 1-Year, Crash Courses & Dropper Batches for IIT JEE aspirants."
          }
        },
        {
          "@type": "Question",
          "name": "How many students are in each batch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Small batch sizes are maintained for personalized attention and effective learning."
          }
        },
        {
          "@type": "Question",
          "name": "Do parents receive updates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, parents receive performance updates through reports and PTMs."
          }
        },
        {
          "@type": "Question",
          "name": "Which areas does the Camp branch serve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students from Camp, MG Road, Fatima Nagar, Hadapsar, and Koregaon Park benefit from our coaching."
          }
        }
      ]
    },
    {
      "@type": "LocalBusiness",
      "name": "ASQUARE Academy - IIT JEE Coaching Camp Pune",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "telephone": "+91-9766118877",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-camp-pune",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Camp",
        "addressRegion": "Pune",
        "addressCountry": "IN"
      }
    }
  ]




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
                 ASQUARE Academy  
                </span>{" "}
                Camp
              </motion.h1>
<p>A Trusted Coaching Destination for Engineering Aspirants in Camp, Pune</p>
              {/* Full text for desktop */}
              <p className="lead d-none d-md-block">
       Preparing for <b className="bld">IIT JEE </b>demands the right direction, focused learning, and consistent support. At  <b className="bld">ASQUARE Academy, </b>we provide one of the most reliable  <b className="bld">IIT JEE coaching classes in Camp (Pune Cantonment)</b>to help students enhance their conceptual knowledge, strengthen problem-solving skills, and achieve top performance in both JEE Mains and Advanced exams. Recognized among the <b className="bld">Leading IIT JEE Coaching Institutes in Camp, </b>we focus on structured teaching, practical learning techniques, and individual mentorship. Many students from <b className="bld">Camp, MG Road, East Street, Bund Garden, Sadhu Vaswani Chowk, and Koregaon Park</b>have benefited from our expert guidance and achieved remarkable results.
              </p>

              {/* Short text for mobile */}
              <p className="lead d-block d-md-none">
                       Preparing for <b className="bld">IIT JEE </b>demands the right direction, focused learning, and consistent support. At  <b className="bld">ASQUARE Academy, </b>we provide one of the most reliable  <b className="bld">IIT JEE coaching classes in Camp (Pune Cantonment)</b>to help students enhance their conceptual knowledge, strengthen problem-solving skills, and achieve top performance in both JEE Mains and Advanced exams. Recognized among the <b className="bld">Leading IIT JEE Coaching Institutes in Camp, </b>we focus on structured teaching, practical learning techniques, and individual mentorship. Many students from <b className="bld">Camp, MG Road, East Street, Bund Garden, Sadhu Vaswani Chowk, and Koregaon Park</b>have benefited from our expert guidance and achieved remarkable results.
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
          <span className="text-primary">ASQUARE Academy</span> Camp? </motion.h1>

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
              >Programs <span className="text-primary">Tailored </span>for JEE Success </motion.h1>

              <p className="lead text-secondary">

           The <b className="bld">Joint Entrance Examination (JEE) </b> requires  <b className="bld">clarity, accuracy, and consistent practice. </b> At ASQUARE Academy Camp, our programs are structured to <b className="bld">strengthen fundamentals, enhance problem-solving skills, and build exam confidence </b> for both  <b className="bld">JEE Main & Advanced.</b>
              
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
              <h4 className="highlight-text text-warning fw-bold mb-4 text-centerr">Subjects We Cover</h4>
              {subjects.map((sub, i) => (<div key={i} className="jee-subject-box mb-4 p-3 pb-4 pt-4  rounded-4 bg-white bg-opacity-10 backdrop-blur-md border border-light border-opacity-25">
                <h5 className="fw-semibold">{sub.title}</h5>
                <p className="small mb-0">{sub.desc}</p> </div>))}
            </div>
            <div className="col-lg-6">
              <h4 className="highlight-text text-warning fw-bold mb-4 text-centerr">Course Duration & Options</h4>
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
              >Teaching Methodology at  <span className="text-primary">Camp Branch</span> </motion.h1>



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
                          ? "•	Daily lectures with structured assignments"
                          : step === "Practice"
                            ? "•	One-to-one doubt-clearing support"
                            : step === "Assess"
                              ? "•	Weekly subject tests & full-length mock exams"
                              : "•	Parent–teacher meetings for regular progress tracking"}
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
          Key Features of 
            <span className="highlight-text text-warning">
              &nbsp;ASQUARE Camp &nbsp;
            </span>
            Branch
          </motion.h1>

          <div className="row justify-content-center g-4">
            {[
              "•	Small batch strength for effective learning",
              "•	Updated JEE notes, study material & practice tests",
              "•	Workshops on exam techniques, time-saving strategies & smart problem-solving",
              "•	Consistent student performance monitoring and parent updates",
                "•	Recognized as a leading IIT-JEE coaching institute in Camp, Pune",
            ].map((text, i) => {
              const highlightedText = text.includes("leading IIT-JEE coaching institute in Camp, Pune")
                ? text.replace(
                  "leading IIT-JEE coaching institute in Camp, Pune",
                  '<b className="bld">leading IIT-JEE coaching institute in Camp, Pune</b>'
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
            Proven Track Record of 
                <span className="highlight-text text-warning">
                  &nbsp;Success &nbsp;
                </span>

              </motion.h1>
              <p className="lead text-light">
        ASQUARE Academy has consistently produced <b className="bld">JEE Main & Advanced achievers and top scorers. </b>The <b className="bld">Camp branch </b>builds on this success by providing  <b className="bld">dedicated coaching, expert faculty, and a results-driven approach.</b>
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
          Enroll Today at 
            <span className="highlight-text text-warning">
              &nbsp;ASQUARE Academy Camp&nbsp;
            </span>

          </motion.h1>
          <p className="lead mb-4">
      Achieve your engineering goals with <b className="bld">ASQUARE Academy’s expert IIT-JEE coaching in Camp, Pune.  </b>With <b className="bld">experienced teachers, updated resources, and consistent results,  </b>we are your reliable choice for <b className="bld">JEE, CET & NEET preparation.</b>
          </p>
          <p><MapPin className="text-warning" />Serving students from   <b className="bld">Camp, MG Road, Fatima Nagar, Hadapsar, Koregaon Park, and surrounding areas in Pune.</b></p>
          <a className="btn btn-lg btn-warning fw-bold mt-3 px-5 py-3 rounded-pill shadow-lg">
            <Link
              to={'/'}
              className="nav-item nav-item-list text-white"

            >
              ⚡ Admissions Open – Limited seats available!  


              &nbsp;<p className="text-warning">Contact us today to secure your admission.</p>
            </Link>
          </a>
        </div>
      </section>



      <Footer />
    </>
  );
}

export default IITJEECamp;
