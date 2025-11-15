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

function IITJEEChinchwad() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const whyChoose = [
    { Icon: Users, title: "Expert Teaching Faculty", desc: "Experienced trainers for IIT-JEE, NEET & CET coaching." },
    { Icon: BookOpen, title: "Complete PCM Coverage", desc: "Physics, Chemistry & Mathematics taught as per updated exam trends." },
    { Icon: Target, title: "Personalized Guidance", desc: "Small batches for doubt-solving and individual support." },
    { Icon: BarChart, title: "Exam Simulation Practice", desc: "Weekly quizzes, unit tests & full-length mock exams." },
    { Icon: Lightbulb, title: "Career Support & Motivation", desc: "Counseling, study planning & confidence-boosting sessions." },
  ];

  const subjects = [
    { title: "Physics", desc: "Strengthening fundamentals with numerical applications." },
    { title: "Chemistry", desc: "Balanced focus on Physical, Organic & Inorganic Chemistry." },
    { title: "Mathematics", desc: "Rigorous practice in Algebra, Geometry, Calculus, Probability & Trigonometry." },
  ];

  const batches = [
    { title: "2-Year Foundation Program (10th → 12th Moving Students)", desc: "Covers XI & XII Boards + JEE." },
    { title: "1-Year Advanced Program (11th → 12th Moving Students)", desc: "Intensive JEE preparation with XII syllabus." },
    { title: "Crash Course (2–3 Months)", desc: "Short-term high-speed revision & exam practice." },
    { title: "Dropper/Repeater Batch (XII Pass-outs)", desc: "One-year dedicated JEE training for repeaters." },
  ];

  const faqs = [{ q: "Q1: Which is the Best IIT JEE Coaching in Chinchwad?", a: "ASQUARE Academy is known as the Best IIT JEE Coaching in Chinchwad, offering expert faculty, structured study plans, and proven success in JEE Main & Advanced exams." }, { q: "Q2: What subjects are covered in your IIT JEE Classes in Chinchwad?", a: "Our IIT JEE Classes in Chinchwad include comprehensive coaching in Physics, Chemistry, and Mathematics to build strong problem-solving skills." }, { q: "Q3: Do you provide mock tests and regular assessments?", a: "Yes, we conduct weekly tests, topic-wise quizzes, and full-length mock exams to strengthen preparation for JEE Main and Advanced." }, { q: "Q4: What makes ASQUARE the Top JEE Mains Coaching Classes in Chinchwad?", a: "Our Top JEE Mains Coaching Classes in Chinchwad feature interactive sessions, doubt-solving, and consistent performance tracking." }, { q: "Q5: Do you offer special batches for IIT JEE Advanced Preparation in Chinchwad?", a: "Yes, ASQUARE Academy provides exclusive IIT JEE Advanced Preparation in Chinchwad through intensive modules and mentor-led guidance." }, { q: "Q6: Are dropper batches available for JEE aspirants?", a: "We offer Dropper Batches at our JEE Advanced Coaching Classes in Chinchwad for students aiming to reattempt and improve their scores." }, { q: "Q7: What is the teaching approach at your Best IIT JEE Classes in Chinchwad?", a: "Our teaching combines concept clarity, test practice, and personalized mentoring, making us the Best IIT JEE Classes in Chinchwad." }, { q: "Q8: Which nearby areas can join your Top IIT JEE Classes in Chinchwad?", a: "Students from Pimpri, Nigdi, Akurdi, Ravet, and PCMC can easily access our Top IIT JEE Classes in Chinchwad for quality JEE coaching." },];

  return (
    <>
      <Helmet>
        <title>Best IIT JEE Coaching Classes in Chinchwad | Top JEE Main & Advanced Institute</title>
             <meta
          name="title"
          content="Best IIT JEE Coaching Classes in Chinchwad | Top JEE Main & Advanced Institute"
        />
        <meta
          name="description"
          content="Join the Best IIT JEE Coaching Classes in Chinchwad for JEE Main & Advanced preparation with expert mentors, mock tests, and result-driven guidance – ASQUARE Academy."
        />

        <meta name="keywords" content="IIT JEE coaching classes in chinchwad, 
Best IIT JEE Coaching in chinchwad,
Top JEE Mains Coaching Classes chinchwad,
IIT JEE Advanced Preparation chinchwad,
JEE Advanced coaching classes in chinchwad,
IIT JEE Classes in chinchwad,
Best IIT JEE Classes in chinchwad,
Top IIT JEE Classes in chinchwad,

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
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-chinchwad-pune",
      "telephone": "+919766118877",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Chinchwad",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411019",
        "addressCountry": "IN"
      },
      "priceRange": "₹₹",
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune"
      ],
      "description": "ASQUARE Academy offers the Best IIT JEE Coaching Classes in Chinchwad, Pune, providing expert faculty, personalized guidance, and proven success in JEE Main & Advanced."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-chinchwad-pune/#webpage",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-chinchwad-pune",
      "name": "Best IIT JEE Coaching Classes in Chinchwad | ASQUARE Academy Pune",
      "description": "Top IIT JEE Coaching Classes in Chinchwad offering structured preparation for JEE Main & Advanced with expert mentors and mock tests – ASQUARE Academy.",
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
      "description": "ASQUARE Academy provides IIT JEE and NEET coaching across Pune with result-oriented preparation, test practice, and expert mentoring."
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-chinchwad-pune/#faqpage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Which is the Best IIT JEE Coaching in Chinchwad?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE Academy is known as the Best IIT JEE Coaching in Chinchwad, offering expert faculty, structured study plans, and proven success in JEE Main & Advanced exams."
          }
        },
        {
          "@type": "Question",
          "name": "What subjects are covered in your IIT JEE Classes in Chinchwad?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our IIT JEE Classes in Chinchwad include Physics, Chemistry, and Mathematics to strengthen analytical and problem-solving skills."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide mock tests and regular assessments?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, ASQUARE Academy conducts weekly tests, topic-wise quizzes, and full-length mock exams for complete JEE Main & Advanced preparation."
          }
        },
        {
          "@type": "Question",
          "name": "What makes ASQUARE the Top JEE Mains Coaching Classes in Chinchwad?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our Top JEE Mains Coaching Classes in Chinchwad focus on interactive sessions, doubt-solving, and performance-based learning."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer special batches for IIT JEE Advanced Preparation in Chinchwad?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, ASQUARE Academy offers dedicated IIT JEE Advanced Preparation batches with advanced modules and mentor-led learning."
          }
        },
        {
          "@type": "Question",
          "name": "Are dropper batches available for JEE aspirants?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We provide Dropper Batches for JEE aspirants in Chinchwad who wish to improve scores through focused reattempt preparation."
          }
        },
        {
          "@type": "Question",
          "name": "What is the teaching approach at your Best IIT JEE Classes in Chinchwad?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our teaching combines conceptual clarity, rigorous testing, and personalized guidance, making us the Best IIT JEE Classes in Chinchwad."
          }
        },
        {
          "@type": "Question",
          "name": "Which nearby areas can join your Top IIT JEE Classes in Chinchwad?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students from Pimpri, Nigdi, Akurdi, Ravet, and PCMC can easily enroll in our Top IIT JEE Classes in Chinchwad for quality coaching."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-chinchwad-pune/#breadcrumb",
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
          "name": "IIT JEE Coaching in Chinchwad",
          "item": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-chinchwad-pune"
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
                Get Ahead in JEE Main & Advanced with {" "}
                <span className="highlight-text text-warning">
                  ASQUARE Academy
                </span>{" "}
                Chinchwad
              </motion.h1>
<p>Premier Coaching Institute for Engineering Aspirants in Chinchwad</p>
              {/* Full text for desktop */}
              <p className="lead d-none d-md-block">
                Looking for <b className="bld">IIT-JEE</b> classes <b className="bld">in Chinchwad, Pune</b>? At <b className="bld">ASQUARE Academy</b>, we specialize in <b className="bld">conceptual learning, exam-focused training, and personalized mentoring</b>. Our Chinchwad branch is a trusted hub for students aspiring for <b className="bld">IITs, NITs, IIITs, and India’s leading engineering colleges</b>. With <b className="bld">structured programs, expert guidance, and intensive practice sessions</b>, we help students achieve success in <b className="bld">JEE Main & Advanced</b>.
              </p>

              {/* Short text for mobile */}
              <p className="lead d-block d-md-none">
                            Looking for <b className="bld">IIT-JEE</b>IIT-JEE classes <b className="bld">in Chinchwad, Pune</b>? At <b className="bld">ASQUARE Academy</b>, we specialize in <b className="bld">conceptual learning, exam-focused training, and personalized mentoring</b>. Our Chinchwad branch is a trusted hub for students aspiring for <b className="bld">IITs, NITs, IIITs, and India’s leading engineering colleges</b>. With <b className="bld">structured programs, expert guidance, and intensive practice sessions</b>, we help students achieve success in <b className="bld">JEE Main & Advanced</b>.
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
          <span className="text-primary">ASQUARE Academy</span> Chinchwad</motion.h1>

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
              >Our  <span className="text-primary">IIT-JEE</span> Coaching Programs </motion.h1>

              <p className="lead text-secondary">
                The <b className="bld">Joint Entrance Examination (JEE)</b> is one of the toughest engineering entrance exams. At ASQUARE Academy Chinchwad, our coaching programs are designed to <b className="bld">build strong subject foundations, improve problem-solving skills, and strengthen exam strategies</b> for both <b className="bld">JEE Main & Advanced</b>.
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
              <h4 className="highlight-text text-warning fw-bold mb-4 text-centerr">Subjects We Teach</h4>
              {subjects.map((sub, i) => (<div key={i} className="jee-subject-box mb-4 p-3 pb-4 pt-4  rounded-4 bg-white bg-opacity-10 backdrop-blur-md border border-light border-opacity-25">
                <h5 className="fw-semibold">{sub.title}</h5>
                <p className="small mb-0">{sub.desc}</p> </div>))}
            </div>
            <div className="col-lg-6">
              <h4 className="highlight-text text-warning fw-bold mb-4 text-centerr">Course Duration & Batches</h4>
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
                          ? "Daily lectures with structured assignments."
                          : step === "Practice"
                            ? "One-on-one doubt-solving support."
                            : step === "Assess"
                              ? "Weekly practice tests & mock exams."
                              : "Parent–teacher meetings with performance analysis."}
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
              &nbsp;Chinchwad&nbsp;
            </span>
            Branch
          </motion.h1>

          <div className="row justify-content-center g-4">
            {[
              "Limited batch size for focused mentoring.",
              "Updated JEE notes, study modules & practice papers.",
              "Workshops on exam hacks, time management & smart strategies.",
              "Continuous progress tracking with parent involvement.",
                "Trusted as a leading JEE coaching institute in Chinchwad, Pune.",
            ].map((text, i) => {
              const highlightedText = text.includes("leading JEE coaching institute in Chinchwad, Pune")
                ? text.replace(
                  "leading JEE coaching institute in Chinchwad, Pune",
                  '<b className="bld">leading JEE coaching institute in Chinchwad, Pune</b>'
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
               ASQUARE Academy has built a reputation for producing <b className="bld">IIT-JEE rankers and engineering toppers</b>. The <b className="bld">Chinchwad branch</b> adds to this legacy by offering <b className="bld">student-focused coaching, expert guidance, and a result-driven environment.</b>
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
              &nbsp;Chinchwad Today &nbsp;
            </span>

          </motion.h1>
          <p className="lead mb-4">
            Step closer to your IIT dream with <b className="bld">ASQUARE Academy’s IIT-JEE coaching in Chinchwad, Pune</b>. With <b className="bld">expert faculty, structured resources, and consistent results</b>, we’re your trusted partner for <b className="bld">IIT-JEE, CET & NEET coaching</b>.
          </p>
          <p><MapPin className="text-warning" /> Ideal for students from <b className="bld">Chinchwad, Pimpri, Akurdi, Nigdi, Ravet, and nearby PCMC areas</b>.</p>
          <a className="btn btn-lg btn-warning fw-bold mt-3 px-5 py-3 rounded-pill shadow-lg">
            <Link
              to={'/'}
              className="nav-item nav-item-list text-white"

            >
              ⚡ Admissions Open – Limited seats available! 


              &nbsp;<p className="text-warning">Enroll today to secure your place.</p>
            </Link>
          </a>
        </div>
      </section>



      <Footer />
    </>
  );
}

export default IITJEEChinchwad;
