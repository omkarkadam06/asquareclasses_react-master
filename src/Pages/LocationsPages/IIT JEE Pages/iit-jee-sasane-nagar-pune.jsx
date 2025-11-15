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

function IITJEESasaneNagar() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const whyChoose = [
    { Icon: Users, title: "Expert Faculty ", desc: "Highly qualified mentors for Physics, Chemistry, and Mathematics." },
    { Icon: BookOpen, title: "Comprehensive Coverage", desc: "NCERT-based foundation with advanced problem-solving for JEE Mains & Advanced." },
    { Icon: Target, title: "Small Batch Sizes", desc: "Personalized attention to ensure concept clarity and doubt resolution." },
    { Icon: BarChart, title: "Regular Testing", desc: "Weekly quizzes, mock tests, and performance reviews for exam readiness." },
    { Icon: Lightbulb, title: "Flexible Learning", desc: "Options for both classroom and online coaching." },
        { Icon: Lightbulb, title: "Mentorship Support", desc: "Balancing JEE preparation with Class XI & XII academics." },
  ];

  const subjects = [
    { title: "Physics", desc: "Conceptual clarity with real-world applications" },
    { title: "Chemistry", desc: "Thorough learning of Physical, Organic & Inorganic Chemistry" },
    { title: "Mathematics", desc: "Rigorous practice in Algebra, Trigonometry, Geometry, Calculus & Probability" },
  ];

  const batches = [
    { title: "•	2-Year Integrated Program (Class 11 → 12)", desc: "Comprehensive XI + XII + JEE preparation." },
    { title: "•	1-Year Target Program (Class 12)", desc: "XII + JEE fast-track training." },
    { title: "•	Dropper/Repeater Batch", desc: "Quick revision & mock test practice." },
    { title: "•	Crash Course (2–3 Months)", desc: "One-year specialized JEE coaching program." },
  ];

  const faqs = [{ q: " Q1: Do you provide coaching for both JEE Mains and JEE Advanced?", a: "Yes, ASQUARE Academy offers comprehensive IIT JEE coaching classes in Sasane Nagar Pune for both JEE Main and Advanced with complete coverage of Physics, Chemistry, and Mathematics. " },
     { q: " Q2: Are small batches available at ASQUARE Sasane Nagar?", a: "Absolutely! We maintain small batches to provide personalized guidance, regular interaction, and focused mentoring for every student. " },
      { q: "Q3: Do you offer dropper or repeater batches? ", a: "Yes, ASQUARE Academy provides dropper/repeater batches for students targeting JEE success after Class XII, ensuring dedicated exam-oriented preparation. " },
      { q: "Q4: What is the teaching approach at ASQUARE Academy? ", a: "Our expert faculty emphasizes concept clarity, regular mock tests, and strategic problem-solving to help students perform confidently in JEE. " },
      { q: " Q5: Are mock tests and assessments conducted regularly?", a: "Yes, students undergo weekly unit tests and full-length mock exams to assess progress and strengthen JEE preparation effectively. " },
      { q: "Q6: What types of courses are offered at the Sasane Nagar branch? ", a: "We offer 2-year, 1-year, crash, and repeater courses, covering the entire JEE syllabus systematically with focused learning modules. " },
      { q: "Q7: Can students from nearby areas join the Sasane Nagar branch? ", a: "Yes, students from Sasane Nagar, Hadapsar, Fatima Nagar, Magarpatta, and Wanwadi can conveniently attend our coaching programs. " },
      { q: "Q8: Why choose ASQUARE Academy for IIT JEE in Sasane Nagar Pune? ", a: "ASQUARE Academy is the best IIT JEE coaching in Sasane Nagar Pune, known for its expert mentors, small batch sizes, and proven results in JEE Advanced preparation. " },
        ];

  return (
    <>
      <Helmet>
        <title>Best IIT JEE Coaching Classes in Sasane Nagar Pune | ASQUARE Academy</title>
             <meta
          name="title"
          content="Best IIT JEE Coaching Classes in Sasane Nagar Pune | ASQUARE Academy"
        />
        <meta
          name="description"
          content="JJoin ASQUARE Academy for top IIT JEE coaching classes in Sasane Nagar Pune. Expert faculty, small batches, mock tests, and structured JEE Main & Advanced preparation for Class XI, XII, and droppers."
        />

        <meta name="keywords" content="IIT JEE coaching classes in sasane nagar pune,
Best IIT JEE Coaching in sasane nagar pune,
Top JEE Mains Coaching Classes sasane nagar pune,
IIT JEE Advanced Preparation sasane nagar pune,
JEE Advanced coaching classes in sasane nagar pune,
IIT JEE Classes in sasane nagar pune,
Best IIT JEE Classes in sasane nagar pune,
Top IIT JEE Classes in sasane nagar pune,

" />
<script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-sasane-nagar-pune#localbusiness",
      "name": "ASQUARE Academy - IIT JEE Coaching in Sasane Nagar Pune",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-sasane-nagar-pune",
      "telephone": "9766118877",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Sasane Nagar",
        "addressRegion": "Pune",
        "addressCountry": "India"
      },
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune"
      ],
      "description": "ASQUARE Academy offers the best IIT JEE coaching classes in Sasane Nagar Pune with expert mentors, small batch sizes, and focused JEE Main & Advanced preparation."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-sasane-nagar-pune#webpage",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-sasane-nagar-pune",
      "name": "IIT JEE Coaching Classes in Sasane Nagar Pune | ASQUARE Academy",
      "description": "Enroll at ASQUARE Academy for top-rated IIT JEE coaching classes in Sasane Nagar Pune with mock tests, small batches, and expert faculty for JEE Main & Advanced."
    },
    {
      "@type": "EducationalOrganization",
      "name": "ASQUARE Academy",
      "url": "https://www.asquareclasses.com/",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Sasane Nagar",
        "addressRegion": "Pune",
        "addressCountry": "India"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you provide coaching for both JEE Mains and JEE Advanced?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, ASQUARE Academy offers comprehensive IIT JEE coaching classes in Sasane Nagar Pune for both JEE Main and Advanced with complete coverage of Physics, Chemistry, and Mathematics."
          }
        },
        {
          "@type": "Question",
          "name": "Are small batches available at ASQUARE Sasane Nagar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely! We maintain small batches to provide personalized guidance, regular interaction, and focused mentoring for every student."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer dropper or repeater batches?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, ASQUARE Academy provides dropper/repeater batches for students targeting JEE success after Class XII, ensuring dedicated exam-oriented preparation."
          }
        },
        {
          "@type": "Question",
          "name": "What is the teaching approach at ASQUARE Academy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our expert faculty emphasizes concept clarity, regular mock tests, and strategic problem-solving to help students perform confidently in JEE."
          }
        },
        {
          "@type": "Question",
          "name": "Are mock tests and assessments conducted regularly?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, students undergo weekly unit tests and full-length mock exams to assess progress and strengthen JEE preparation effectively."
          }
        },
        {
          "@type": "Question",
          "name": "What types of courses are offered at the Sasane Nagar branch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer 2-year, 1-year, crash, and repeater courses, covering the entire JEE syllabus systematically with focused learning modules."
          }
        },
        {
          "@type": "Question",
          "name": "Can students from nearby areas join the Sasane Nagar branch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, students from Sasane Nagar, Hadapsar, Fatima Nagar, Magarpatta, and Wanwadi can conveniently attend our coaching programs."
          }
        },
        {
          "@type": "Question",
          "name": "Why choose ASQUARE Academy for IIT JEE in Sasane Nagar Pune?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE Academy is the best IIT JEE coaching in Sasane Nagar Pune, known for its expert mentors, small batch sizes, and proven results in JEE Advanced preparation."
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
          "name": "IIT JEE Coaching",
          "item": "https://www.asquareclasses.com/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "IIT JEE Coaching Classes in Sasane Nagar Pune",
          "item": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-sasane-nagar-pune"
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
               Crack JEE Mains & Advanced with   {" "}
                <span className="highlight-text text-warning">
                 ASQUARE Academy  
                </span>{" "}
                – Sasane Nagar 
              </motion.h1>
<p>A Trusted Coaching Destination for Engineering Aspirants in Camp, Pune</p>
              {/* Full text for desktop */}
              <p className="lead d-none d-md-block">
     Preparing for IIT JEE requires clarity, consistency, and expert guidance. At ASQUARE Academy, we provide the most trusted IIT JEE coaching classes in Sasane Nagar, Pune, designed to help students strengthen their concepts, master problem-solving, and perform with confidence in the toughest engineering entrance exams.
              </p>
               <p className="lead d-none d-md-block">
     Recognized among the Best IIT JEE Coaching in Sasane Nagar, we specialize in both JEE Mains and IIT JEE Advanced Preparation in Sasane Nagar, delivering results through structured learning, regular assessments, and personalized mentorship. Students from Sasane Nagar and nearby areas like Hadapsar, Magarpatta, Mundhwa, Fatima Nagar, and Ghorpadi already trust ASQUARE for their IIT JEE success.
              </p>

              {/* Short text for mobile */}
              <p className="lead d-block d-md-none">
                     Preparing for IIT JEE requires clarity, consistency, and expert guidance. At ASQUARE Academy, we provide the most trusted IIT JEE coaching classes in Sasane Nagar, Pune, designed to help students strengthen their concepts, master problem-solving, and perform with confidence in the toughest engineering entrance exams. 
              </p>
                 <p className="lead d-block d-md-none">
                     Recognized among the Best IIT JEE Coaching in Sasane Nagar, we specialize in both JEE Mains and IIT JEE Advanced Preparation in Sasane Nagar, delivering results through structured learning, regular assessments, and personalized mentorship. Students from Sasane Nagar and nearby areas like Hadapsar, Magarpatta, Mundhwa, Fatima Nagar, and Ghorpadi already trust ASQUARE for their IIT JEE success. 
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
          <span className="text-primary">ASQUARE Academy</span> for  IIT JEE in Sasane Nagar? </motion.h1>

          <div className="row g-4 justify-center" style={{ justifyContent: "center" }}> {whyChoose.map((item, i) => (<div key={i} className="col-lg-4 col-md-6">
            <motion.div whileHover={{ scale: 1.05 }} className="jee-feature-card shadow-lg rounded-4 p-4 h-100" > <item.Icon size={40} className="mb-3 text-warning" /> <h5 className="fw-bold mb-2">{item.title}</h5> <p className="text-muted">{item.desc}</p>
            </motion.div> </div>))}
          </div>
        </div>
      </section>
      <hr></hr>

      {/* Program Description */}
      {/* <section className="jee-programs py-5 bg-light">
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
      <hr></hr> */}

      {/* Subjects + Batches Section */}
      <section className="jee-gradient-section py-5 text-white">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="fw-bold display-6 mb-3 text-center"
          >
            Programs Offered at 
            <span className="highlight-text text-warning">
              &nbsp;ASQUARE – Sasane Nagar&nbsp;
            </span>
            {/* Batch Options */}
          </motion.h1>
          <br></br>

          <div className="row g-4">
            {/* <div className="col-lg-6">
              <h4 className="highlight-text text-warning fw-bold mb-4 text-centerr">Subjects We Cover</h4>
              {subjects.map((sub, i) => (<div key={i} className="jee-subject-box mb-4 p-3 pb-4 pt-4  rounded-4 bg-white bg-opacity-10 backdrop-blur-md border border-light border-opacity-25">
                <h5 className="fw-semibold">{sub.title}</h5>
                <p className="small mb-0">{sub.desc}</p> </div>))}
            </div> */}
            <div className="col-lg-12">
              <h4 className="highlight-text text-warning fw-bold mb-4 text-centerr">Programs Offered </h4>
              {batches.map((b, i) => (<div key={i} className="jee-subject-box mb-3 p-3 rounded-4 bg-white bg-opacity-10 backdrop-blur-md border border-light border-opacity-25">
                <h5 className="fw-semibold">{b.title}</h5>
                {/* <p className="small mb-0">{b.desc}</p> */}
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
              >Teaching Methodology at  <span className="text-primary">ASQUARE</span> </motion.h1>



              <div className="row g-4 justify-content-center">
                {["Learn", "Practice", "Assess", "Revise"].map((step, i) => (
                  <div key={i} className="col-lg-3 col-6">
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="method-card p-4 bg-white rounded-4 shadow-sm h-100 text-center"
                    >
                      {/* <Lightbulb size={36} className="text-primary mb-3" /> */}
                      <h6 className="fw-bold">{step}</h6>
                      {/* <p className="text-muted small mb-0">
                        {step === "Learn"
                          ? "•	Daily lectures with structured assignments"
                          : step === "Practice"
                            ? "•	One-to-one doubt-clearing support"
                            : step === "Assess"
                              ? "•	Weekly subject tests & full-length mock exams"
                              : "•	Parent–teacher meetings for regular progress tracking"}
                      </p> */}
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
              &nbsp;ASQUARE – Sasane Nagar &nbsp;
            </span>
            Branch
          </motion.h1>

          <div className="row justify-content-center g-4">
            {[
              "• Updated JEE study material (digital + print)",
              "• Regular doubt-clearing sessions with faculty",
              "• Performance analytics via online test series",
              "• Workshops on accuracy, time management & exam strategy",
                "• Consistently ranked among the Best IIT JEE Classes in Sasane Nagar and trusted by aspirants across Pune",
            ].map((text, i) => {
              const highlightedText = text.includes("Best IIT JEE Classes in Sasane Nagar and trusted by aspirants across Pune")
                ? text.replace(
                  "Best IIT JEE Classes in Sasane Nagar and trusted by aspirants across Pune",
                  '<b className="bld">Best IIT JEE Classes in Sasane Nagar and trusted by aspirants across Pune</b>'
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
           Results That Define 
                <span className="highlight-text text-warning">
                  &nbsp;Our Success &nbsp;
                </span>

              </motion.h1>
              <p className="lead text-light">
      ASQUARE Academy students from Sasane Nagar and nearby areas have consistently achieved high ranks in JEE Mains & Advanced, securing admissions to IITs, NITs, and top engineering institutes. This makes us one of the Top IIT JEE Classes in Sasane Nagar, Pune.
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
              &nbsp;ASQUARE Academy Sasane Nagar&nbsp;
            </span>

          </motion.h1>
          <p className="lead mb-4">
     If you’re looking for the Best IIT JEE Coaching in Sasane Nagar, Pune, your search ends here. With expert guidance, structured programs, and a proven success record, ASQUARE Academy is the trusted name for JEE preparation.
          </p>
          <p><MapPin className="text-warning" />Convenient for students from  <b className="bld">Sasane Nagar, Hadapsar, Magarpatta, Mundhwa, Fatima Nagar, and Ghorpadi.</b></p>
          <a className="btn btn-lg btn-warning fw-bold mt-3 px-5 py-3 rounded-pill shadow-lg">
            <Link
              to={'/'}
              className="nav-item nav-item-list text-white"

            >
              ⚡ Admissions Open – Limited Seats! Enroll Now  


              {/* &nbsp;<p className="text-warning">Contact us today to secure your admission.</p> */}
            </Link>
          </a>
        </div>
      </section>



      <Footer />
    </>
  );
}

export default IITJEESasaneNagar;
