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

function IITJEEMoshi() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const whyChoose = [
    { Icon: Users, title: "Experienced Faculty ", desc: "Subject experts for IIT-JEE, CET & NEET coaching." },
    { Icon: BookOpen, title: "Complete PCM Curriculum", desc: "Physics, Chemistry & Mathematics taught per latest exam guidelines." },
    { Icon: Target, title: "Personal Mentorship ", desc: "Small batches in Moshi branch for focused doubt-solving." },
    { Icon: BarChart, title: "Regular Practice Tests", desc: "Weekly assessments, mock exams & performance reviews." },
    { Icon: Lightbulb, title: "Motivation & Guidance ", desc: "Counseling sessions, study tips & exam strategies." },
  ];

  const subjects = [
    { title: "Physics", desc: "Concept clarity with real-world applications & numericals" },
    { title: "Chemistry", desc: "Detailed study of Physical, Organic & Inorganic Chemistry" },
    { title: "Mathematics", desc: "Extensive practice in Algebra, Calculus, Trigonometry, Geometry & Probability" },
  ];

  const batches = [
    { title: "2-Year Foundation Program (10th → 12th Moving Students)", desc: "Integrated Boards + JEE prep." },
    { title: "1-Year Advanced Program (11th → 12th Moving Students)", desc: "Intensive XII + JEE training." },
    { title: "Crash Course (2–3 Months)", desc: "Short-term revision with test practice." },
    { title: "Dropper/Repeater Batch (XII Pass-outs): ", desc: "One-year JEE program for repeaters." },
  ];

  const faqs = [{ q: "Q1: Who can join ASQUARE Academy Moshi?", a: "Students of Class XI, XII, and XII pass-outs who aim to crack IIT JEE Main & Advanced can join. ASQUARE Academy offers the Best IIT JEE Coaching in Moshi for serious aspirants preparing for top engineering colleges in India." },
     { q: "Q2: What subjects are covered in the IIT JEE course?", a: "We offer comprehensive coaching in Physics, Chemistry, and Mathematics (PCM). These subjects are taught by expert mentors to strengthen core concepts and problem-solving skills essential for IIT JEE Advanced Preparation in Moshi." },
      { q: "Q3: What types of courses are available?", a: "ASQUARE Academy Moshi provides 2-Year Integrated, 1-Year Regular, Crash Courses, and Dropper Batches designed for students at every stage. Whether you're in Class XI or a repeater, you’ll find the Top IIT JEE Classes in Moshi here." },
       { q: "Q4: Are mock tests and practice sessions included?", a: "Yes, weekly chapter-wise tests, JEE mock exams, and full-length practice papers are part of the program. These help students master time management and accuracy, making ASQUARE one of the Top JEE Mains Coaching Classes in Moshi." },
        { q: "Q5: How big are the batches at ASQUARE Moshi?", a: "We believe in small batch sizes to ensure individual attention and personalized mentoring. Each student receives focused support from our faculty, making us the Best IIT JEE Classes in Moshi for dedicated preparation." },
         { q: "Q6: How do parents stay informed about their child’s progress?", a: "Parents receive regular performance reports, updates through Parent-Teacher Meetings (PTMs), and direct communication from mentors. This transparency is a hallmark of our IIT JEE Coaching Classes in Moshi." },
          { q: "Q7: What makes ASQUARE Academy the Best IIT JEE Coaching in Moshi?", a: "Our structured study material, experienced faculty, and result-oriented methodology make us the Best IIT JEE Coaching in Moshi. We focus on concept clarity, exam strategy, and consistent practice to help students achieve top ranks." },
           { q: "Q8: Which areas does the Moshi branch cater to?", a: "The ASQUARE Moshi center is easily accessible from Bhosari, Chakan, Talawade, Charholi, and other PCMC localities. It’s a preferred destination for students looking for IIT JEE Classes in Moshi and nearby areas." },
     ];

  return (
    <>
      <Helmet>
        <title>Best IIT JEE Coaching Classes in Moshi | ASQUARE Academy Pune</title>
             <meta
          name="title"
          content="Best IIT JEE Coaching Classes in Moshi | ASQUARE Academy Pune"
        />
        <meta
          name="description"
          content="Join ASQUARE Academy Moshi for the Best IIT JEE Coaching Classes. Expert faculty, small batches, mock tests & structured courses for JEE Main & Advanced success."
        />

        <meta name="keywords" content="IIT JEE coaching classes in moshi ,
Best IIT JEE Coaching in moshi,
Top JEE Mains Coaching Classes moshi,
IIT JEE Advanced Preparation moshi,
JEE Advanced coaching classes in moshi,
IIT JEE Classes in moshi,
Best IIT JEE Classes in moshi,
Top IIT JEE Classes in moshi,


" />
<script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-moshi-pune#organization",
      "name": "ASQUARE Academy Moshi",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-moshi-pune",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "description": "ASQUARE Academy Moshi offers the Best IIT JEE Coaching Classes in Moshi for JEE Main & Advanced aspirants. Expert faculty, small batches, and result-oriented programs.",
      "telephone": "+91-9766118877",
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune"
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Moshi, Pune, Maharashtra, India",
        "addressLocality": "Moshi",
        "addressRegion": "Maharashtra",
        "postalCode": "412105",
        "addressCountry": "IN"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-moshi-pune#webpage",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-moshi-pune",
      "name": "Best IIT JEE Coaching Classes in Moshi | ASQUARE Academy Pune",
      "description": "Join ASQUARE Academy Moshi for the Best IIT JEE Coaching Classes. Expert faculty, small batches, mock tests & structured courses for JEE Main & Advanced success."
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-moshi-pune#localbusiness",
      "name": "ASQUARE Academy Moshi",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "telephone": "+91-9766118877",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Moshi, Pune, Maharashtra, India",
        "addressLocality": "Moshi",
        "addressRegion": "Maharashtra",
        "postalCode": "412105",
        "addressCountry": "IN"
      },
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-moshi-pune",
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune"
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-moshi-pune#breadcrumb",
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
          "name": "Moshi Branch",
          "item": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-moshi-pune"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-moshi-pune#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can join ASQUARE Academy Moshi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students of Class XI, XII, and XII pass-outs who aim to crack IIT JEE Main & Advanced can join. ASQUARE Academy offers the Best IIT JEE Coaching Classes in Moshi."
          }
        },
        {
          "@type": "Question",
          "name": "What subjects are covered in the IIT JEE course?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE Academy Moshi offers coaching in Physics, Chemistry, and Mathematics (PCM) taught by expert mentors for strong conceptual understanding."
          }
        },
        {
          "@type": "Question",
          "name": "What types of courses are available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "2-Year Integrated, 1-Year Regular, Crash Courses, and Dropper Batches are available at ASQUARE Academy Moshi."
          }
        },
        {
          "@type": "Question",
          "name": "Are mock tests and practice sessions included?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, ASQUARE Moshi includes weekly tests, mock exams, and full-length practice papers to help students improve accuracy and speed."
          }
        },
        {
          "@type": "Question",
          "name": "How big are the batches at ASQUARE Moshi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Small batch sizes ensure individual attention and personalized mentoring at ASQUARE Academy Moshi."
          }
        },
        {
          "@type": "Question",
          "name": "How do parents stay informed about their child’s progress?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Parents receive regular performance reports and updates through PTMs and direct mentor communication."
          }
        },
        {
          "@type": "Question",
          "name": "What makes ASQUARE Academy the Best IIT JEE Coaching Classes in Moshi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Structured study material, experienced faculty, and a results-driven methodology make ASQUARE the top IIT JEE Coaching Classes in Moshi."
          }
        },
        {
          "@type": "Question",
          "name": "Which areas does the Moshi branch cater to?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE Moshi caters to students from Bhosari, Chakan, Talawade, Charholi, and other nearby PCMC areas."
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
                Moshi
              </motion.h1>
<p>Specialized Coaching for Engineering Aspirants in Moshi</p>
              {/* Full text for desktop */}
              <p className="lead d-none d-md-block">
              Looking for <b className="bld">IIT-JEE coaching classes in Moshi, Pune? </b>At  <b className="bld">ASQUARE Academy, </b>we provide <b className="bld">systematic teaching, personalized mentoring, and result-driven preparation techniques. </b>Our Moshi branch helps aspirants aiming for <b className="bld">IITs, NITs, IIITs, and other top engineering institutes in India. </b> With <b className="bld">concept-based learning, structured assignments, and intensive practice sessions, </b>we prepare students for success in JEE Main & Advanced.
              </p>

              {/* Short text for mobile */}
              <p className="lead d-block d-md-none">
                                     Looking for <b className="bld">IIT-JEE coaching classes in Moshi, Pune? </b>At  <b className="bld">ASQUARE Academy, </b>we provide <b className="bld">systematic teaching, personalized mentoring, and result-driven preparation techniques. </b>Our Moshi branch helps aspirants aiming for <b className="bld">IITs, NITs, IIITs, and other top engineering institutes in India. </b> With <b className="bld">concept-based learning, structured assignments, and intensive practice sessions, </b>we prepare students for success in JEE Main & Advanced.
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
          <span className="text-primary">ASQUARE Academy in</span>  Moshi</motion.h1>

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
                The <b className="bld">Joint Entrance Examination (JEE)</b> requires clear fundamentals, rigorous practice, and smart strategies. At ASQUARE Academy Moshi, our courses are designed to  <b className="bld">strengthen concepts, improve accuracy, and enhance exam performance</b> for both <b className="bld">JEE Main & Advanced.</b> 
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
              <h4 className="highlight-text text-warning fw-bold mb-4 text-centerr">We Cover</h4>
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
                          ? "Interactive daily lectures with assignments"
                          : step === "Practice"
                            ? "One-to-one doubt-solving support"
                            : step === "Assess"
                              ? "Weekly unit tests & full-length mock exams"
                              : "Parent–teacher meetings for progress updates"}
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
              &nbsp;Moshi&nbsp;
            </span>
            Branch
          </motion.h1>

          <div className="row justify-content-center g-4">
            {[
              "Limited batch size for personalized mentoring",
              "Updated IIT-JEE notes, study material & practice sets",
              "Special workshops on exam hacks, time management & problem-solving",
              "Regular progress reports shared with parents",
                "Recognized as a trusted JEE coaching institute in Moshi, Pune",
            ].map((text, i) => {
              const highlightedText = text.includes("trusted JEE coaching institute in Moshi, Pune")
                ? text.replace(
                  "trusted JEE coaching institute in Moshi, Pune",
                  '<b className="bld">trusted JEE coaching institute in Moshi, Pune</b>'
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
                Proven
                <span className="highlight-text text-warning">
                  &nbsp;Success &nbsp;
                </span>

              </motion.h1>
              <p className="lead text-light">
              ASQUARE Academy has built a reputation for producing <b className="bld">JEE toppers and engineering high-rank achievers</b> The <b className="bld">Moshi branch</b> adds to this legacy with <b className="bld">focused training, expert guidance, and result-oriented coaching.</b>
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
              &nbsp;Moshi Today &nbsp;
            </span>

          </motion.h1>
          <p className="lead mb-4">
          Step into your IIT-JEE journey with <b className="bld">ASQUARE Academy’s expert coaching in Moshi, Pune.</b> With <b className="bld">dedicated faculty, updated resources, and consistent results,</b>we are your reliable choice for <b className="bld">JEE, CET & NEET coaching.</b>
          </p>
          <p><MapPin className="text-warning" /> Serving students from<b className="bld">Moshi, Bhosari, Chakan, Talawade, Charholi, and nearby PCMC regions</b>.</p>
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

export default IITJEEMoshi;
