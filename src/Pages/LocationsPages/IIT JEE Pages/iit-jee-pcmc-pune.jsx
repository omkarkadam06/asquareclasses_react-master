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

function IITJEEPCMC() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const whyChoose = [
    { Icon: Users, title: "Expert Faculty", desc: "Experienced mentors specializing in IIT-JEE, NEET & CET subjects." },
    { Icon: BookOpen, title: "Complete PCM Coverage", desc: "Physics, Chemistry & Mathematics taught as per the latest JEE syllabus." },
    { Icon: Target, title: "Personalized Learning", desc: "Small batch sizes for one-on-one mentoring and focused attention." },
    { Icon: BarChart, title: "Weekly Tests & Mocks", desc: "Regular assessments, performance analysis & doubt-solving sessions." },
    { Icon: Lightbulb, title: "Motivational Guidance", desc: "Exam strategy, stress management, and career counseling sessions." },
  ];

  const subjects = [
    { title: "Physics", desc: "Core concepts, numerical problem-solving & application-based questions." },
    { title: "Chemistry", desc: "Thorough understanding of Physical, Organic & Inorganic Chemistry." },
    { title: "Mathematics", desc: "Extensive practice in Algebra, Calculus, Geometry, and Trigonometry." },
  ];

  const batches = [
    { title: "2-Year Foundation Course (Class 10 to 12)", desc: "Integrated preparation for XI–XII boards & JEE." },
    { title: "1-Year Advanced Course (Class 11 to 12)", desc: "Intensive coverage of Class XII and JEE syllabus." },
    { title: "Crash Course (2–3 Months)", desc: "High-speed revision, mock tests & exam strategy sessions." },
    { title: "Dropper/Repeater Batch", desc: "Exclusive one-year batch for Class XII pass-outs focusing on JEE Advanced coaching classes in Pimpri Chinchwad." },
  ];

  const faqs = [{ q: "Q1: Who can join ASQUARE Academy Pimpri Chinchwad?", a: "Students of Class XI, XII, and XII pass-outs preparing for JEE Main & Advanced can enroll in our courses." },
     { q: "Q2: What subjects are taught at ASQUARE Academy?", a: "We teach Physics, Chemistry, and Mathematics—covering the complete JEE syllabus in detail." },
      { q: "Q3: Do you provide JEE Advanced coaching classes in Pimpri Chinchwad?", a: "Yes, our programs include structured training for JEE Advanced preparation with mock tests and performance tracking." },
       { q: "Q4: How are batches structured for students?", a: "We maintain small batches to ensure personalized attention and better interaction with faculty members." },
        { q: "Q5: What is unique about ASQUARE’s IIT JEE Classes in Pimpri Chinchwad?", a: "Our center offers integrated study plans, daily assignments, and mentor-led progress analysis for consistent improvement." },
         { q: "Q6: Are mock tests conducted regularly?", a: "Yes, we conduct weekly practice tests and full-length JEE mock exams to build speed and accuracy." },
          { q: "Q7: Which areas does the Pimpri Chinchwad branch cover?", a: "Our branch is easily accessible from Pimpri, Chinchwad, Nigdi, Akurdi, Ravet, and Pimple Saudagar." },
           { q: "Q8: How can parents track their child’s progress?", a: "Parents receive regular performance reports and can attend PTMs for detailed feedback from teachers." },];

  return (
    <>
      <Helmet>
        <title>Best IIT JEE Coaching Classes in Pimpri Chinchwad | Top JEE Main & Advanced Institute</title>
             <meta
          name="title"
          content="Best IIT JEE Coaching Classes in Pimpri Chinchwad | Top JEE Main & Advanced Institute"
        />
        <meta
          name="description"
          content="Join the Best IIT JEE Coaching Classes in Pimpri Chinchwad for JEE Main & Advanced with expert mentors, mock tests, and small batches – ASQUARE Academy."
        />

        <meta name="keywords" content="IIT JEE coaching classes in pimpri chinchwad,
Best IIT JEE Coaching in pimpri chinchwad,
Top JEE Mains Coaching Classes pimpri chinchwad,
IIT JEE Advanced Preparation pimpri chinchwad,
JEE Advanced coaching classes in pimpri chinchwad,
IIT JEE Classes in pimpri chinchwad,
Best IIT JEE Classes in pimpri chinchwad,
Top IIT JEE Classes in pimpri chinchwad,



" />
<script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/#localbusiness",
      "name": "ASQUARE Academy",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-pimpri-chinchwad-pune",
      "telephone": "+919766118877",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Pimpri Chinchwad",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411018",
        "addressCountry": "IN"
      },
      "priceRange": "₹₹",
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune"
      ],
      "description": "ASQUARE Academy offers the Best IIT JEE Coaching Classes in Pimpri Chinchwad, Pune with expert faculty, small batches, mock tests, and personalized mentoring for JEE Main & Advanced."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-pimpri-chinchwad-pune/#webpage",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-pimpri-chinchwad-pune",
      "name": "Best IIT JEE Coaching Classes in Pimpri Chinchwad | ASQUARE Academy Pune",
      "description": "Top IIT JEE Coaching Classes in Pimpri Chinchwad for JEE Main & Advanced preparation with mock exams, personalized mentoring, and expert faculty – ASQUARE Academy.",
      "publisher": {
        "@type": "Organization",
        "name": "ASQUARE Academy",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png"
        }
      }
    },
    {
      "@type": "EducationalOrganization",
      "@id": "https://www.asquareclasses.com/#educationalorganization",
      "name": "ASQUARE Academy",
      "url": "https://www.asquareclasses.com/",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune"
      ],
      "description": "ASQUARE Academy provides IIT JEE and NEET coaching across Pune with expert mentors, mock exams, and individualized guidance for academic success."
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-pimpri-chinchwad-pune/#faqpage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can join ASQUARE Academy Pimpri Chinchwad?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students of Class XI, XII, and XII pass-outs preparing for JEE Main & Advanced can enroll in ASQUARE Academy Pimpri Chinchwad."
          }
        },
        {
          "@type": "Question",
          "name": "What subjects are taught at ASQUARE Academy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We teach Physics, Chemistry, and Mathematics—covering the entire JEE syllabus with concept clarity and strong problem-solving focus."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide JEE Advanced coaching classes in Pimpri Chinchwad?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, ASQUARE Academy offers dedicated JEE Advanced coaching in Pimpri Chinchwad with structured modules, mock exams, and mentor feedback."
          }
        },
        {
          "@type": "Question",
          "name": "How are batches structured for students?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We maintain small batches for personalized attention and focused guidance from our expert faculty members."
          }
        },
        {
          "@type": "Question",
          "name": "What is unique about ASQUARE’s IIT JEE Classes in Pimpri Chinchwad?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE Academy offers integrated study plans, daily assignments, and performance analysis for continuous improvement."
          }
        },
        {
          "@type": "Question",
          "name": "Are mock tests conducted regularly?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we conduct weekly practice tests and full-length mock exams to improve speed, accuracy, and exam confidence."
          }
        },
        {
          "@type": "Question",
          "name": "Which areas does the Pimpri Chinchwad branch cover?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our Pimpri Chinchwad branch serves students from Pimpri, Chinchwad, Nigdi, Akurdi, Ravet, and Pimple Saudagar."
          }
        },
        {
          "@type": "Question",
          "name": "How can parents track their child’s progress?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Parents receive detailed progress reports and can attend PTMs to get feedback from teachers about their child’s performance."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-pimpri-chinchwad-pune/#breadcrumb",
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
          "name": "IIT JEE Coaching in Pimpri Chinchwad",
          "item": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-pimpri-chinchwad-pune"
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
                Crack JEE Main & Advanced with  {" "}
                <span className="highlight-text text-warning">
                  ASQUARE Academy
                </span>{" "}
                Pimpri Chinchwad
              </motion.h1>
<p>Best IIT JEE Coaching in Pimpri Chinchwad for Engineering Aspirants</p>
              {/* Full text for desktop */}
              <p className="lead d-none d-md-block">
                Looking for <b className="bld">IIT JEE Coaching Classes in Pimpri Chinchwad</b>? ASQUARE Academy offers expert-led, result-oriented programs designed for <b className="bld">JEE Main and Advanced preparation.</b>Our  <b className="bld">Pimpri Chinchwad center</b>focuses on concept clarity, time management, and performance improvement—helping students secure top ranks in <b className="bld">IITs, NITs, IIITs, </b>and other leading engineering colleges across India. With small batches, personalized mentoring, and consistent assessments, ASQUARE is trusted as one of the <b className="bld">Top IIT JEE Classes in Pimpri Chinchwad.</b>
              </p>

              {/* Short text for mobile */}
              <p className="lead d-block d-md-none">
                            Looking for <b className="bld">IIT JEE Coaching Classes in Pimpri Chinchwad</b>? ASQUARE Academy offers expert-led, result-oriented programs designed for <b className="bld">JEE Main and Advanced preparation.</b>Our  <b className="bld">Pimpri Chinchwad center</b>focuses on concept clarity, time management, and performance improvement—helping students secure top ranks in <b className="bld">IITs, NITs, IIITs, </b>and other leading engineering colleges across India. With small batches, personalized mentoring, and consistent assessments, ASQUARE is trusted as one of the <b className="bld">Top IIT JEE Classes in Pimpri Chinchwad.</b>
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
          <span className="text-primary">ASQUARE Academy in</span>  Pimpri Chinchwad?</motion.h1>

          <div className="row g-4 justify-center" style={{ justifyContent: "center" }}> {whyChoose.map((item, i) => (<div key={i} className="col-lg-4 col-md-6">
            <motion.div whileHover={{ scale: 1.05 }} className="jee-feature-car2d shadow-lg rounded-4 p-4 h-100" > <item.Icon size={40} className="mb-3 text-warning" /> <h5 className="fw-bold mb-2">{item.title}</h5> <p className="text-muted">{item.desc}</p>
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
              >Our  <span className="text-primary">IIT JEE </span> Coaching Programs </motion.h1>

              <p className="lead text-secondary">
                At <b className="bld">ASQUARE Academy</b>, we offer structured programs for <b className="bld">JEE Main and Advanced preparation in Pimpri Chinchwad</b>, catering to students at different academic stages.
                
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
              <h4 className="highlight-text text-warning fw-bold mb-4 text-centerr">Subjects Covered</h4>
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
                          ? "Concept-based lectures with daily assignments."
                          : step === "Practice"
                            ? "Individual doubt-solving and mentor support."
                            : step === "Assess"
                              ? "Weekly topic-wise tests and full-length mock exams."
                              : "Regular parent–teacher meetings with performance updates."}
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
              &nbsp;ASQUARE Pimpri Chinchwad &nbsp;
            </span>
            Branch
          </motion.h1>

          <div className="row justify-content-center g-4">
            {[
              "Limited batch strength for individual mentoring.",
              "Updated IIT-JEE study material & test series.",
              "Workshops on speed, accuracy, and exam techniques.",
              "Consistent result record & high student satisfaction.",
                "Recognized among the Best IIT JEE Classes in Pimpri Chinchwad.",
            ].map((text, i) => {
              const highlightedText = text.includes("Best IIT JEE Classes in Pimpri Chinchwad")
                ? text.replace(
                  "Best IIT JEE Classes in Pimpri Chinchwad",
                  '<b className="bld">Best IIT JEE Classes in Pimpri Chinchwad</b>'
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
                  &nbsp;Speak &nbsp;
                </span>

              </motion.h1>
              <p className="lead text-light">
ASQUARE Academy continues to deliver outstanding results in <b className="bld">JEE Main & Advanced</b> every year. Our students from the <b className="bld">Pimpri Chinchwad center</b> have secured top ranks, thanks to expert faculty, disciplined preparation, and personalized mentoring.

              
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
              &nbsp;Pimpri Chinchwad Today &nbsp;
            </span>

          </motion.h1>
          <p className="lead mb-4">
            Achieve your engineering dreams with the <b className="bld">Top JEE Mains Coaching Classes in Pimpri Chinchwad</b>. With dedicated mentors, updated material, and a student-first approach, ASQUARE Academy stands out as the  <b className="bld">Best IIT JEE Coaching in Pimpri Chinchwad.</b>.
          </p>
          <p><MapPin className="text-warning" /> Serving students from  <b className="bld">Pimpri, Chinchwad, Nigdi, Akurdi, Ravet & Pimple Saudagar.</b>.</p>
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

export default IITJEEPCMC;
