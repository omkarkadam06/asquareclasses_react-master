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
import sampleimg2 from '../../../Assets/SampleImages/MobBanners/MobBanner1.jpeg';
import sampleimg22 from'../../../Assets/SampleImages/MobBanners/MobBanner2.jpeg';
import sampleimg1 from '../../../Assets/SampleImages/Banners/Banners (3).jpeg';
import sampleimg11 from '../../../Assets/SampleImages/Banners/Banners (4).jpeg';
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

function IITJEENigdi() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const whyChoose = [
    { Icon: Users, title: "Expert Faculty Team", desc: "Highly qualified teachers for IIT-JEE, CET & NEET coaching." },
    { Icon: BookOpen, title: "Full PCM Curriculum", desc: "Physics, Chemistry & Mathematics covered with updated JEE patterns." },
    { Icon: Target, title: "Focused Mentorship", desc: "Small batch sizes for personalized attention and faster progress." },
    { Icon: BarChart, title: "Strong Testing System", desc: "Weekly quizzes, mock exams & detailed performance reviews." },
    { Icon: Lightbulb, title: "Motivation & Guidance", desc: "Study planning, doubt-clearing, and stress management sessions." },
  ];

  const subjects = [
    { title: "Physics", desc: "Deep conceptual understanding with problem-solving applications" },
    { title: "Chemistry", desc: "Complete coverage of Physical, Organic & Inorganic Chemistry" },
    { title: "Mathematics", desc: "Advanced practice in Algebra, Calculus, Trigonometry, Geometry & Probability" },
  ];

  const batches = [
    { title: "2-Year Foundation Program (10th → 12th Moving Students)", desc: "Covers Board syllabus + JEE prep." },
    { title: "1-Year Advanced Course (11th → 12th Moving Students)", desc: "Intensive training for Class XII + JEE." },
    { title: "Crash Course (2–3 Months)", desc: "Quick revision program with practice sessions." },
    { title: "Repeater/Dropper Batch (XII Pass-outs)", desc: "Dedicated one-year JEE coaching for repeaters." },
  ];

  const faqs = [
    { q: "Q1: Who can join ASQUARE Academy Nigdi?", a: "Class XI, XII students and XII pass-outs preparing for JEE Main & Advanced." },
    { q: "Q2: What subjects are taught?", a: "Physics, Chemistry, and Mathematics (PCM)." },
    { q: "Q3: Are mock exams conducted?", a: "Yes, weekly unit tests and full-length JEE mock exams are part of the curriculum." },
    { q: "Q4: What courses are offered?", a: "2-Year, 1-Year, Crash Courses & Dropper Batches." },
    { q: "Q5: How big are the batches?", a: "We maintain small batches for personal guidance." },
    { q: "Q6: Do parents receive updates?", a: "Yes, regular reports and PTMs keep parents informed." },
    { q: "Q7: Which areas does the Nigdi branch serve?", a: "Easily accessible from Nigdi, Akurdi, Chinchwad, Pimpri, Ravet, and nearby PCMC areas." },
  ];

  return (
    <>
      <Helmet>
        <title>Best IIT JEE Coaching Classes in Nigdi Pune | ASQUARE Academy</title>
        <meta name="title" content="Best IIT JEE Coaching Classes in Nigdi Pune | ASQUARE Academy" />
        <meta name="description" content="Join ASQUARE Academy for the Best IIT JEE Coaching Classes in Nigdi. Expert faculty, small batches, mock tests & advanced preparation for JEE Main & Advanced." />
        <meta name="keywords" content={`IIT JEE coaching classes in nigdi,
Best IIT JEE Coaching in nigdi,
Top JEE Mains Coaching Classes nigdi,
IIT JEE Advanced Preparation nigdi,
JEE Advanced coaching classes in nigdi,
IIT JEE Classes in nigdi,
Best IIT JEE Classes in nigdi,
Top IIT JEE Classes in nigdi`} />

        <script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "ASQUARE Academy - IIT JEE Coaching Classes in Nigdi",
  "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
  "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-nigdi-pune",
  "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-nigdi-pune",
  "telephone": "9766118877",
  "priceRange": "₹₹",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Nigdi",
    "addressRegion": "Pune",
    "addressCountry": "India"
  },
  "sameAs": [
    "https://www.instagram.com/asquarepune",
    "https://www.facebook.com/asquarepune"
  ],
  "description": "ASQUARE Academy offers the Best IIT JEE Coaching Classes in Nigdi with expert faculty, small batches, mock tests, and advanced preparation for JEE Main & Advanced.",
  "department": [
    {
      "@type": "EducationalOrganization",
      "name": "ASQUARE Academy - IIT JEE Coaching Classes Nigdi",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-nigdi-pune",
      "course": [
        {
          "@type": "Course",
          "name": "IIT JEE Main and Advanced Preparation Nigdi",
          "description": "Comprehensive IIT JEE coaching for students of Class XI, XII & droppers including Physics, Chemistry & Mathematics with regular tests and mock exams."
        }
      ]
    }
  ],
  "hasPart": {
    "@type": "WebPage",
    "name": "IIT JEE Coaching Classes in Nigdi Pune",
    "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-nigdi-pune",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.asquareclasses.com/" },
        { "@type": "ListItem", "position": 2, "name": "IIT JEE Coaching", "item": "https://www.asquareclasses.com/iit-jee-coaching-classes" },
        { "@type": "ListItem", "position": 3, "name": "Nigdi Pune", "item": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-nigdi-pune" }
      ]
    }
  },
  "mainEntity": {
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who can join ASQUARE Academy Nigdi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Class XI, XII students and XII pass-outs preparing for JEE Main & Advanced can join ASQUARE Academy Nigdi."
        }
      },
      {
        "@type": "Question",
        "name": "What subjects are taught?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ASQUARE Academy covers Physics, Chemistry, and Mathematics for IIT JEE aspirants."
        }
      },
      {
        "@type": "Question",
        "name": "Are mock exams conducted?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, weekly unit tests and full-length JEE mock exams are conducted regularly."
        }
      },
      {
        "@type": "Question",
        "name": "What courses are offered?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ASQUARE offers 2-Year, 1-Year, Crash Courses & Dropper Batches for IIT JEE preparation."
        }
      },
      {
        "@type": "Question",
        "name": "How big are the batches?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Small batches are maintained for personalized guidance and focused attention."
        }
      },
      {
        "@type": "Question",
        "name": "Do parents receive updates?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, parents receive regular progress reports and updates through PTMs."
        }
      },
      {
        "@type": "Question",
        "name": "Which areas does the Nigdi branch serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Nigdi branch is easily accessible from Akurdi, Chinchwad, Pimpri, Ravet, and nearby PCMC areas."
        }
      }
    ]
  }
}

`}</script>

        <link rel="canonical" href={canonicalUrl} />
      </Helmet>

      <Navbar />
      <Header />

      {/* Full-width Slider with Overlaid Form */}
      <section className="jee-full-slider-section position-relative">

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
                      height: "400px",
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

      <hr />
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
                Achieve JEE Main & Advanced Success with <span className="highlight-text text-warning">ASQUARE Academy Nigdi</span>
              </motion.h1>
   <motion.h2>Advanced Coaching for Future Engineers in Nigdi</motion.h2>
              {/* Full text for desktop */}
              <p className="lead d-none d-md-block">
                Searching for IIT-JEE coaching classes in Nigdi, Pune? At <b className="bld">ASQUARE Academy,</b> we offer concept-driven teaching, exam-focused study plans, and personalized mentoring. Our Nigdi branch is dedicated to preparing aspirants for IITs, NITs, IIITs, and India’s best engineering institutes. With structured learning and expert guidance, we help students perform confidently in JEE Main & Advanced.
              </p>

              {/* Short text for mobile */}
              <p className="lead d-block d-md-none">
                Searching for IIT-JEE coaching classes in Nigdi, Pune? At <b className="bld">ASQUARE Academy,</b> we offer concept-driven teaching, exam-focused study plans, and personalized mentoring. Our Nigdi branch is dedicated to preparing aspirants for IITs, NITs, IIITs, and India’s best engineering institutes. With structured learning and expert guidance, we help students perform confidently in JEE Main & Advanced.
              </p>

              <a className="btn btn-warning btn-lg rounded-pill mt-3 shadow-lg">
                <Link
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

      <hr />

      {/* Why Choose */} <section className="jee-why py-5 ">
        <div className="container">           <motion.h3
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="fw-bold display-6 mb-3 text-center"
        >Why Join <span className="text-primary">ASQUARE Academy in Nigdi?</span> </motion.h3>

          <div className="row g-4 justify-center" style={{ justifyContent: "center" }}> {whyChoose.map((item, i) => (<div key={i} className="col-lg-4 col-md-6">
            <motion.div whileHover={{ scale: 1.05 }} className="jee-feature-card shadow-lg rounded-4 p-4 h-100" > <item.Icon size={40} className="mb-3 text-warning" /> <h5 className="fw-bold mb-2">{item.title}</h5> <p className="text-muted">{item.desc}</p>
            </motion.div> </div>))}
          </div>
        </div>
      </section>
      <hr />

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
              >Our <span className="text-primary">IIT-JEE Courses in Nigdi</span> </motion.h4>

              <p className="lead text-secondary">
                The Joint Entrance Examination (JEE) requires consistent preparation, accuracy, and conceptual mastery. At ASQUARE Academy Nigdi, our courses are designed to strengthen basics, sharpen problem-solving skills, and boost exam strategies, covering both JEE Main & Advanced.
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
      <hr />

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
            Course Duration & Batch Options
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
              <h4 className="highlight-text text-warning fw-bold mb-4 text-centerr">Course Duration & Batch Options</h4>
              {batches.map((b, i) => (<div key={i} className="jee-subject-box mb-3 p-3 rounded-4 bg-white bg-opacity-10 backdrop-blur-md border border-light border-opacity-25">
                <h5 className="fw-semibold">{b.title}</h5>
                <p className="small mb-0">{b.desc}</p>
              </div>))}
            </div>
          </div>
        </div>
      </section>
      <hr />
      {/* Methodology Section */}
      <section className="jee-method py-5 bg-light">
        <div className="container">
          <div className="row align-items-center g-4">

            <div className="col-lg-12 text-center text-lg-start">
              <motion.h3
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="fw-bold display-6 mb-3 text-center"
              >Our <span className="text-primary">Teaching Approach</span> </motion.h3>

              <div className="row g-4 justify-content-center">
                {[
                  "Interactive daily lectures with assignments",
                  "One-to-one doubt-clearing sessions",
                  "Weekly unit tests & full-length mock exams",
                  "Parent–teacher meetings for performance tracking"
                ].map((text, i) => (
                  <div key={i} className="col-lg-3 col-6">
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="method-card p-4 bg-white rounded-4 shadow-sm h-100 text-center"
                    >
                      <p className="text-muted small mb-0">{text}</p>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>


          </div>
        </div>
      </section>

      <hr />

      {/* Key Features Section */}
      <section className="jee-highlights py-5 text-white">
        <div className="container text-center">
          <motion.h3
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="fw-bold display-6 mb-3"
          >
            Key Features of <span className="highlight-text text-warning">&nbsp;Nigdi Branch&nbsp;</span>
          </motion.h3>

          <div className="row justify-content-center g-4">
            {[
              "Small batches for individual attention",
              "Updated IIT-JEE study notes, question banks & practice modules",
              "Special workshops on exam hacks & time-saving strategies",
              "Regular progress reports & parent communication",
              "Recognized as a leading JEE coaching institute in Nigdi, Pune"
            ].map((text, i) => (
              <motion.div key={i} className="col-md-5 col-lg-4 col-6" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <div className="highlight-card shadow-lg rounded-4 p-4 bg-white bg-opacity-10 backdrop-blur-md border border-light border-opacity-25">
                  <div className="icon-circle mx-auto mb-3"><h2>🏆</h2></div>
                  <p className="fw-semibold text-light ">{text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <hr />
      <Suspense fallback={<Loading />}>
        <Reviews />
      </Suspense>

      <hr />

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
                Proven <span className="highlight-text text-warning">&nbsp;Results&nbsp;</span>
              </motion.h3>
              <p className="lead text-light">
                ASQUARE Academy has a legacy of producing IIT-JEE toppers and top-rank achievers. The Nigdi branch continues this success by offering focused training, strong mentoring, and result-driven programs.
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

      <hr />
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
      <hr />

      {/* Final CTA */}
      <section id="enroll" className="jee-enroll-section py-5 text-center text-white">
        <div className="container">

          <motion.h3
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="fw-bold display-6 mb-3"
          >
           Enroll at <span className="highlight-text text-warning">&nbsp;ASQUARE Academy Nigdi&nbsp;</span> Today
          </motion.h3>
          <p className="lead mb-4">
            Step closer to your IIT dream with ASQUARE Academy’s JEE coaching in Nigdi, Pune. With expert teachers, structured programs, and a proven success record, we are your trusted choice for IIT-JEE, CET & NEET coaching.
          </p>
          <p><MapPin className="text-warning" /> <b className="bld">Serving students from Nigdi, Akurdi, Chinchwad, Pimpri, Ravet, and surrounding PCMC regions.</b></p>
          <a className="btn btn-lg btn-warning fw-bold mt-3 px-5 py-3 rounded-pill shadow-lg">
            <Link
              to={'/'}
              className="nav-item nav-item-list text-white"

            >
              ⚡ Admissions Open – Limited seats available! Book your spot today.
            </Link>
          </a>
        </div>
      </section>



      <Footer />
    </>
  );
}

export default IITJEENigdi;
