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

function IITJEEPimpri() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const whyChoose = [
    { Icon: Users, title: "Expert Mentors", desc: "Highly experienced teachers in IIT-JEE, CET & NEET coaching." },
    { Icon: BookOpen, title: "Complete PCM Syllabus", desc: "Physics, Chemistry & Mathematics taught as per the latest JEE exam guidelines." },
    { Icon: Target, title: "Focused Attention ", desc: "Small batch sizes ensure personalized doubt-solving and mentoring." },
    { Icon: BarChart, title: "Regular Test Practice ", desc: "Weekly quizzes, mock exams & performance analysis." },
    { Icon: Lightbulb, title: "Motivational Support ", desc: "Sessions on career guidance, exam strategies & confidence-building." },
  ];

  const subjects = [
    { title: "Physics", desc: "In-depth conceptual learning, numericals & applications." },
    { title: "Chemistry", desc: "Thorough study of Physical, Organic & Inorganic Chemistry." },
    { title: "Mathematics", desc: "Rigorous practice in Algebra, Geometry, Calculus, Trigonometry & Probability." },
  ];

  const batches = [
    { title: "2-Year Foundation Program (10th → 12th Moving Students)", desc: "Covers XI & XII Boards + JEE." },
    { title: "1-Year Advanced Program (11th → 12th Moving Students)", desc: "Intensive JEE preparation with XII syllabus." },
    { title: "Crash Course (2–3 Months)", desc: "Short-term revision & exam-oriented practice." },
    { title: "Dropper/Repeater Batch (XII Pass-outs)", desc: "Dedicated one-year training for repeaters targeting JEE." },
  ];

  const faqs = [{ q: "Q1: Who can join ASQUARE Academy Pimpri?", a: "Students of Class XI, XII, and XII pass-outs preparing for JEE Main & Advanced can join ASQUARE Academy, the Best IIT JEE Coaching in Pimpri." }, { q: "Q2: What subjects are covered in your IIT JEE Classes in Pimpri?", a: "Our IIT JEE Classes in Pimpri focus on Physics, Chemistry, and Mathematics (PCM) with expert faculty and concept-based teaching." }, { q: "Q3: Are mock exams part of the program?", a: "Yes, students get weekly tests, chapter-wise assessments, and JEE mock exams to strengthen accuracy and speed for both Mains and Advanced." }, { q: "Q4: What courses are offered at your institute?", a: "ASQUARE offers 2-Year, 1-Year, Crash Courses, and Dropper Batches to help students with focused IIT JEE Advanced Preparation in Pimpri." }, { q: "Q5: What makes ASQUARE the Top JEE Mains Coaching Classes in Pimpri?", a: "Our Top JEE Mains Coaching Classes in Pimpri provide small batches, personal guidance, and regular performance analysis to ensure success." }, { q: "Q6: Do parents receive performance updates?", a: "Yes, we share progress reports and conduct PTMs regularly so parents can stay informed about their child’s academic growth." }, { q: "Q7: How big are the batches at your Best IIT JEE Classes in Pimpri?", a: "We maintain small batch sizes for one-on-one mentoring, making ASQUARE Academy the Best IIT JEE Classes in Pimpri." }, { q: "Q8: Which areas does your Pimpri branch serve?", a: "Our Top IIT JEE Classes in Pimpri are easily accessible from Chinchwad, Akurdi, Nigdi, Kasarwadi, and nearby PCMC areas." },];

  return (
    <>
      <Helmet>
        <title>Best IIT JEE Coaching Classes in Pimpri | Top JEE Main & Advanced Institute – ASQUARE Academy</title>
             <meta
          name="title"
          content="Best IIT JEE Coaching Classes in Pimpri | Top JEE Main & Advanced Institute – ASQUARE Academy"
        />
        <meta
          name="description"
          content="Join the Best IIT JEE Coaching Classes in Pimpri for JEE Main & Advanced preparation with expert mentors, small batches, and mock exams – ASQUARE Academy."
        />

        <meta name="keywords" content="IIT JEE coaching classes in pimpri,
Best IIT JEE Coaching in pimpri,
Top JEE Mains Coaching Classes pimpri,
IIT JEE Advanced Preparation pimpri,
JEE Advanced coaching classes in pimpri,
IIT JEE Classes in pimpri,
Best IIT JEE Classes in pimpri,
Top IIT JEE Classes in pimpri,


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
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-pimpri-pune",
      "telephone": "+919766118877",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Pimpri",
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
      "description": "ASQUARE Academy offers the Best IIT JEE Coaching Classes in Pimpri, Pune with expert mentors, mock exams, and personalized JEE Main & Advanced preparation."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-pimpri-pune/#webpage",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-pimpri-pune",
      "name": "Best IIT JEE Coaching Classes in Pimpri | ASQUARE Academy Pune",
      "description": "Top IIT JEE Coaching Classes in Pimpri for JEE Main & Advanced with expert faculty, small batches, and focused preparation modules – ASQUARE Academy.",
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
      "description": "ASQUARE Academy provides IIT JEE and NEET coaching across Pune, helping students with structured study plans, expert mentorship, and mock assessments."
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-pimpri-pune/#faqpage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can join the IIT JEE Coaching in Pimpri?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students of Class XI, XII, and XII pass-outs preparing for JEE Main & Advanced can join ASQUARE Academy, the Best IIT JEE Coaching in Pimpri."
          }
        },
        {
          "@type": "Question",
          "name": "What subjects are covered in your IIT JEE Classes in Pimpri?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our IIT JEE Classes in Pimpri cover Physics, Chemistry, and Mathematics (PCM) with concept-based and problem-solving-oriented teaching."
          }
        },
        {
          "@type": "Question",
          "name": "Are mock exams part of the program?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, weekly tests, chapter-wise assessments, and JEE mock exams are conducted to improve speed and accuracy for JEE Mains & Advanced."
          }
        },
        {
          "@type": "Question",
          "name": "What courses are offered at your institute?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE Academy offers 2-Year, 1-Year, Crash Courses, and Dropper Batches designed for focused IIT JEE Advanced Preparation in Pimpri."
          }
        },
        {
          "@type": "Question",
          "name": "What makes ASQUARE the Top JEE Mains Coaching Classes in Pimpri?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our Top JEE Mains Coaching Classes in Pimpri offer small batches, personal mentoring, and consistent performance evaluation."
          }
        },
        {
          "@type": "Question",
          "name": "Do parents receive performance updates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, ASQUARE Academy provides progress reports and conducts PTMs regularly to keep parents informed of their child’s academic performance."
          }
        },
        {
          "@type": "Question",
          "name": "How big are the batches at your Best IIT JEE Classes in Pimpri?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We maintain small batch sizes for one-on-one mentoring and personal guidance, making ASQUARE Academy the Best IIT JEE Classes in Pimpri."
          }
        },
        {
          "@type": "Question",
          "name": "Which areas does your Pimpri branch serve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our Top IIT JEE Classes in Pimpri are easily accessible from Chinchwad, Akurdi, Nigdi, Kasarwadi, and nearby PCMC areas."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-pimpri-pune/#breadcrumb",
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
          "name": "IIT JEE Coaching in Pimpri",
          "item": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-pimpri-pune"
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
                Pimpri
              </motion.h1>
<p>Premier Coaching Institute for Engineering Aspirants in Pimpri</p>
              {/* Full text for desktop */}
              <p className="lead d-none d-md-block">
                Looking for <b className="bld">top IIT-JEE</b> classes <b className="bld">in Pimpri, Pune</b>? At <b className="bld">ASQUARE Academy</b>, we provide <b className="bld">structured study plans, concept-based learning, and exam-driven preparation techniques</b>. Our Pimpri branch is dedicated to guiding students who aspire to secure admissions in <b className="bld">IITs, NITs, IIITs, and India’s premier engineering colleges</b>. With <b className="bld">personalized mentoring and a proven academic system</b>, we prepare students to excel in <b className="bld">JEE Main & Advanced.</b>
              </p>

              {/* Short text for mobile */}
              <p className="lead d-block d-md-none">
                           Looking for <b className="bld">top IIT-JEE</b> classes <b className="bld">in Pimpri, Pune</b>? At <b className="bld">ASQUARE Academy</b>, we provide <b className="bld">structured study plans, concept-based learning, and exam-driven preparation techniques</b>. Our Pimpri branch is dedicated to guiding students who aspire to secure admissions in <b className="bld">IITs, NITs, IIITs, and India’s premier engineering colleges</b>. With <b className="bld">personalized mentoring and a proven academic system</b>, we prepare students to excel in <b className="bld">JEE Main & Advanced.</b>
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
          <span className="text-primary">ASQUARE Academy in</span>  Pimpri</motion.h1>

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
              >Our  <span className="text-primary">JEE</span> Preparation Programs </motion.h1>

              <p className="lead text-secondary">
                The <b className="bld">Joint Entrance Examination (JEE)</b> is one of the toughest engineering entrance tests. At ASQUARE Academy Pimpri, our coaching programs are designed to <b className="bld">strengthen fundamentals, improve speed & accuracy, and develop exam strategies</b> so students can succeed in both <b className="bld">JEE Main & Advanced</b>.
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
                          ? "Daily interactive sessions with assignments."
                          : step === "Practice"
                            ? "Personalized doubt-solving support."
                            : step === "Assess"
                              ? "Weekly topic tests & full-length mock exams."
                              : "Parent–teacher meetings & performance reviews."}
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
              &nbsp;Pimpri&nbsp;
            </span>
            Branch
          </motion.h1>

          <div className="row justify-content-center g-4">
            {[
              "Limited students per batch for better focus.",
              "Updated JEE notes, question banks & study material",
              "Workshops on exam shortcuts, time management & problem-solving.",
              "Regular progress tracking with parent updates.",
                "Known as a trusted JEE coaching institute in Pimpri, Pune.",
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
                Results That
                <span className="highlight-text text-warning">
                  &nbsp;Inspire &nbsp;
                </span>

              </motion.h1>
              <p className="lead text-light">
               ASQUARE Academy has consistently produced  <b className="bld">IIT-JEE achievers and top performers</b>. The <b className="bld">Pimpri branch</b> continues this record by providing <b className="bld">quality mentoring, result-oriented coaching, and strong academic support.</b>
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
              &nbsp;Pimpri Today &nbsp;
            </span>

          </motion.h1>
          <p className="lead mb-4">
            Start your IIT-JEE journey with <b className="bld">ASQUARE Academy’s expert coaching in Pimpri, Pune</b>. With <b className="bld">skilled faculty, updated resources, and consistent success rates</b>, we are your trusted partner for  <b className="bld">JEE, CET & NEET coaching</b>.
          </p>
          <p><MapPin className="text-warning" /> Best for students from <b className="bld">Pimpri, Chinchwad, Nigdi, Akurdi, Kasarwadi, and PCMC areas</b>.</p>
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

export default IITJEEPimpri;
