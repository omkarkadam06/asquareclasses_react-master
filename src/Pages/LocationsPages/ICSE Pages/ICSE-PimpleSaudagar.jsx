


import React, { useEffect, useState, Suspense } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  BookOpen,
  Users,

  School,

    ClipboardCheck,   // Assessments
  HelpCircle,       // Doubt-Solving
  GraduationCap,    // Proven Results
  MapPin,           // Convenient Location
} from "lucide-react";

import Navbar from "../../../Components/Navbar/Navbar.jsx";
import Header from "../../../Components/Header/Header.jsx";
import MobileForm from "../../../Components/Mobileform/MobileForm.jsx";
import Footer from "../../../Components/Footer/Footer.jsx";
import FAQAccordion from "../../LocationsPages/neet-pages/components/FAQAccordion.jsx";
import Loading from "../../Loading.jsx";
import Form from "../../../Components/Form2/Form2.jsx";
import "./ICSE.css";

import sampleimg1 from "../../../Assets/SampleImages/ICSE/DeskSlider/ICSE slider PC 3.jpeg";
import sampleimg11 from "../../../Assets/SampleImages/ICSE/DeskSlider/ICSE slider PC 6.jpeg";

import sampleimg2 from "../../../Assets/SampleImages/ICSE/MobSlider/ICSE slider mobile 3.jpeg";
import sampleimg22 from "../../../Assets/SampleImages/ICSE/MobSlider/ICSE slider mobile 6.jpeg";

import image1 from "../../../Assets/SampleImages/ICSE/ICSE page 1.jpeg";
import image2 from "../../../Assets/SampleImages/ICSE/ICSE page 2.jpeg";
import image3 from "../../../Assets/SampleImages/ICSE/ICSE page 3.jpeg";
import image4 from "../../../Assets/SampleImages/ICSE/ICSE page 4.jpeg";

const Reviews = React.lazy(() =>
  import("../../../Components/Reviews/Reviews.jsx")
);

const highlightTitle = (text) => {
  const keywords = [
    "ICSE",
    "Class 8",
    "Class 9",
    "Class 10",
    "Pimple Saudagar",
    "Foundation",
    "Board",
    "Preparation"
  ];

  let updatedText = text;

  keywords.forEach((word) => {
    const regex = new RegExp(`(${word})`, "gi");
    updatedText = updatedText.replace(
      regex,
      `<span class="highlight-word">$1</span>`
    );
  });

  return updatedText;
};

/* =========================
   🔁 REUSABLE CONTENT BLOCK
   ========================= */
const icseContent = {
  location: "Pimple Saudagar, Pune",

  hero: {
    h1: "Best ICSE Tuition Classes in PimpleSaudagar, Pune for 8th, 9th & 10th Students",
    subtitle:
      "Academic Success with Expert ICSE Coaching in Pimple Saudagar",
    description:
     "The ICSE syllabus is detailed, analytical, and requires deep subject clarity. For students in Classes 8th, 9th, and 10th, balancing multiple subjects often becomes challenging without the right academic support.\n At ASQUARE Academy Pimple Saudagar, we provide structured ICSE board tuition classes that help students strengthen their foundation, gain exam confidence, and perform excellently in school and board exams. With subject experts, small batch sizes, customised study resources, and regular assessments, we ensure every student receives the personal attention they need. \n Our Pimple Saudagar centre is also easily accessible from Wakad, Rahatani, Hinjewadi, Kalewadi, Sangvi, Aundh, Vishal Nagar, Thergaon, Jagtap Dairy, and Kokane Chowk, making it a trusted choice for ICSE families in the area.",
  
    },

  whyChoose: [
    {
      icon: Users,
      title: "Experienced ICSE Faculty ",
      desc: "Teachers for Maths, Physics, Chemistry, Biology, English & HCG (History, Civics & Geography).",
    },
    {
      icon: BookOpen,
      title: "Small Batch Sizes",
      desc: "Limited students per batch for individual attention.",
    },
    {
      icon: ClipboardCheck,
      title: "Structured Study Material ",
      desc: "Notes, worksheets, and ICSE-style practice papers.",
    },
    {
      icon: School,
      title: "Regular Assessments ",
      desc: "Weekly & monthly tests with progress reports.",
    },
    {
  icon: HelpCircle,
  title: "Dedicated Doubt-Solving ",
  desc: "Extra sessions to help students master difficult topics.",
},
{
  icon: GraduationCap,
  title: "Proven Results ",
  desc: "Students consistently score higher in school and ICSE board exams.",
},
{
  icon: MapPin,
  title: "Prime Location Advantage ",
  desc: "Ideal for students from Pimple Saudagar, Wakad, Rahatani, Hinjewadi, Kalewadi, Sangvi & Aundh.",
},

  ],

  classes: [
{
  title: "ICSE Tuition for Class 8 in Pimple Saudagar – Building the Right Foundation",
  desc: `Class 8 is the stepping stone for advanced ICSE learning. Our ICSE tuition for Class 8th in Pimple Saudagar focuses on building strong fundamentals.
         Subject Covered:
     • Mathematics
     • Physics, Chemistry & Biology (taught separately)
     • History, Civics & Geography (HCG)
     • English Language & Literature
     • Second Language (Hindi, Marathi, Sanskrit, etc.)
     Parents recommend ASQUARE as the Best 8th ICSE classes in Pimple Saudagar, Wakad & Rahatani because of our clear teaching methods and consistent feedback.
 `,
  img: image1,
},

    {
      title: "ICSE Tuition for Class 9 in Pimple Saudagar – Strengthening Core Knowledge",
      desc:
        `
        Class 9 sets the stage for ICSE board exams. Our ICSE tuition for Class 9th in Pimple Saudagar ensures syllabus mastery with in-depth practice.
        Program Highlights: 
        • Full coverage of Maths, Physics, Chemistry & Biology
        • English writing, comprehension, and grammar
        • History, Civics & Geography with map and source-based questions
        • Computer Applications & Second Language
        • Weekly assessments with detailed feedback
        This makes us the first choice for the Best 9th ICSE classes in Pimple Saudagar, Sangvi & Aundh.
        `,
  img: image2,
    },

    {
      title: "ICSE Tuition for Class 10 in Pimple Saudagar – Focused Board Exam Preparation",
      desc:
        `
Class 10 is the defining year for ICSE students. Our ICSE tuition for Class 10th in Pimple Saudagar ensures thorough preparation for excellent board results.
Board Exam-Focused Training Includes:
    • Syllabus completion with revision cycles.
    • Mock board exams & past year paper solving
    • Answer-writing skills & time-management practice
    • Special focus on scoring strategies per subject
    • Doubt-solving sessions & individual mentoring
That’s why we are regarded as the Best 10th ICSE classes in Pimple Saudagar, Hinjewadi & Kalewadi.
`,
  img:image4,
    },
  ],

  methodology: [
    "Interactive Classes – Concept-based teaching with examples.",
    "Practice-Oriented Learning – Worksheets and ICSE-style test papers.",
    "Regular Monitoring – Unit tests and performance reviews.",
    "Parent Communication – Progress updates and counselling sessions.",
    "Motivational Support – Guidance to help students overcome exam stress."
  ],

 faqs: [
  {
    q: "Q1. Do you provide ICSE tuition for Class 8 in Pimple Saudagar?",
    a: "Yes. Our ICSE tuition for Class 8th in Pimple Saudagar covers all major ICSE subjects with assignments and regular tests.",
  },
  {
    q: "Q2.Which subjects are included in ICSE board coaching?",
    a: "We cover Maths, Physics, Chemistry, Biology, English, HCG, Computer Applications & Second Languages.",
  },
  {
    q: "Q3.Do you provide ICSE tuition for Class 9 in Pimple Saudagar?",
    a: "Yes. Our ICSE tuition for Class 9th in Pimple Saudagar includes complete syllabus coverage, worksheets, and weekly tests.",
  },
  {
    q: "Q4.  How do you prepare Class 10 ICSE students for board exam",
    a: "We conduct mock exams, answer-writing sessions, past-year paper solving & time management practice.",
  },
  {
    q: "Q5.  Which nearby areas does your centre serve??",
    a: "Our centre serves students from Pimple Saudagar, Wakad, Rahatani, Hinjewadi, Kalewadi, Sangvi, Aundh, Vishal Nagar, Thergaon, Jagtap Dairy & Kokane Chowk.",
  },
  {
    q: "Q6.  Do you provide online ICSE coaching?",
    a: "Yes. Both online and offline ICSE tuition options are available.",
  },
  {
    q: "Q7.  Do you provide study material?",
    a: "Yes. We provide notes, worksheets, and ICSE-style test papers.",
  },
  
  {
    q: "Q8. Are demo classes available?",
    a: "Yes. We offer free demo classes for students and parents.",
  },
  
  
  
],

};

function ICSEpimpleSaudagar() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* ================= SEO ================= */}
      <Helmet>
        <title>
          ICSE Tuition & Classes in {icseContent.location} | 8th 9th 10th – ASQUARE Academy
         
        </title>
            <meta
          name="title"
          content="Best ICSE Tuition Classes in Pimple Saudagar Pune | ASQUARE Academy"
        />
        <meta
          name="description"
          content="ICSE tuition for Class 8, 9 and 10 in Pimple Saudagar with expert teachers, small batches, and online & offline coaching at ASQUARE Academy."
        />

        <meta
          name="keywords"
  content="Best 8th ICSE classes in Pimple Saudagar
Best 9th ICSE classes in Pimple Saudagar
Best 10th ICSE classes in Pimple Saudagar
ICSE tuition for Class 8th in Pimple Saudagar
ICSE tuition for Class 9th in Pimple Saudagar
ICSE tuition for Class 10th in Pimple Saudagar
ICSE coaching in Pimple Saudagar
ICSE board classes in Pimple Saudagar"
        />

        <script type="application/ld+json">{`
{
    "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness","EducationalOrganization"],
      "@id": "https://www.asquareclasses.com/#asquareacademy",
      "name": "ASQUARE Academy",
      "url": "https://www.asquareclasses.com/icse-tuition-classes-pimple-saudagar-pune-8th-9th-10th/",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "telephone": "+91-9766118877",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Pimple Saudagar",
        "addressRegion": "Pune",
        "addressCountry": "IN"
      },
      "areaServed": [
        "Pimple Saudagar",
        "Wakad",
        "Rahatani",
        "Hinjewadi",
        "Kalewadi",
        "Sangvi",
        "Aundh",
        "Vishal Nagar",
        "Thergaon",
        "Jagtap Dairy",
        "Kokane Chowk"
      ],
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune/"
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/icse-tuition-classes-pimple-saudagar-pune-8th-9th-10th/#webpage",
      "url": "https://www.asquareclasses.com/icse-tuition-classes-pimple-saudagar-pune-8th-9th-10th/",
      "name": "Best ICSE Tuition Classes in Pimple Saudagar Pune",
      "description": "ICSE tuition for Class 8, 9 and 10 in Pimple Saudagar with experienced teachers, small batches, and online & offline coaching.",
      "isPartOf": {
        "@id": "https://www.asquareclasses.com/#asquareacademy"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.asquareclasses.com/icse-tuition-classes-pimple-saudagar-pune-8th-9th-10th/#breadcrumb",
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
          "name": "ICSE Tuition Classes Pimple Saudagar",
          "item": "https://www.asquareclasses.com/icse-tuition-classes-pimple-saudagar-pune-8th-9th-10th/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.asquareclasses.com/icse-tuition-classes-pimple-saudagar-pune-8th-9th-10th/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you provide ICSE tuition for Class 8 in Pimple Saudagar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Our ICSE tuition for Class 8 in Pimple Saudagar covers all major ICSE subjects with assignments and regular tests."
          }
        },
        {
          "@type": "Question",
          "name": "Which subjects are included in ICSE board coaching?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We cover Maths, Physics, Chemistry, Biology, English, HCG, Computer Applications and Second Languages."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide ICSE tuition for Class 9 in Pimple Saudagar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Our ICSE tuition for Class 9 in Pimple Saudagar includes complete syllabus coverage, worksheets, and weekly tests."
          }
        },
        {
          "@type": "Question",
          "name": "How do you prepare Class 10 ICSE students for board exams?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We conduct mock exams, answer-writing sessions, past-year paper solving and time management practice."
          }
        },
        {
          "@type": "Question",
          "name": "Which nearby areas does your centre serve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our centre serves students from Pimple Saudagar, Wakad, Rahatani, Hinjewadi, Kalewadi, Sangvi, Aundh, Vishal Nagar, Thergaon, Jagtap Dairy and Kokane Chowk."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide online ICSE coaching?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Both online and offline ICSE tuition options are available."
          }
        },
        {
          "@type": "Question",
          "name": "Are demo classes available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We offer free demo classes for students and parents."
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

      {/* ================= SLIDER + FORM (FIXED & WORKING) ================= */}
<section className="jee-full-slider-section position-relative">

  {/* DESKTOP SLIDER */}
  {isDesktop ? (
    <div
      id="icseDesktopCarousel"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
      data-bs-interval="3500"
    >
      <div className="carousel-inner">
        {[sampleimg1, sampleimg11].map((img, i) => (
          <div
            key={i}
            className={`carousel-item ${i === 0 ? "active" : ""}`}
          >
            <img
              src={img}
              className="d-block w-100"
              alt={`ICSE Banner ${i + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  ) : (

    /* MOBILE SLIDER */
    <div
      id="icseMobileCarousel"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
      data-bs-interval="3500"
    >
      <div className="carousel-inner">
        {[sampleimg2, sampleimg22].map((img, i) => (
          <div
            key={i}
            className={`carousel-item ${i === 0 ? "active" : ""}`}
          >
            <img
              src={img}
              className="d-block w-100"
              alt={`ICSE Mobile Banner ${i + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  )}

  {/* FORM OVER SLIDER */}
  <div className="jee-slider-form-box">
    <div className="jee-enquiry-form rounded-4">
      <MobileForm />
      <Form />
    </div>
  </div>

</section>

      {/* ================= HERO ================= */}
      {/* <section className="py-5 bg-light">
        <div className="container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="fw-bold mb-3"
          >
            {icseContent.hero.h1}
          </motion.h1>
          <h2 className="h5 text-primary mb-3">
            {icseContent.hero.subtitle}
          </h2>
          <p className="lead text-muted">
            {icseContent.hero.description}
          </p>
        </div>
      </section> */}

<hr></hr>
      {/* ================= ENHANCED HERO WITH IMAGE ================= */}
<section className="py-5 position-relative overflow-hidden bg-light">

  {/* Decorative background shapes */}
{/* Decorative background shapes */}
<div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden">
  <div className="decor-circle decor-primary"></div>
  <div className="decor-circle decor-warning"></div>
</div>

  <div className="container position-relative">
    <div className="row align-items-center g-5">
            {/* ================= RIGHT IMAGE ================= */}
      <div className="col-lg-6 text-center order-2 order-lg-1">

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="position-relative"
        >
          <img
            src={image3}
            alt="ICSE Tuition Classes in Shaunagar Pune"
            className="img-fluid rounded-4 shadow-lg"
          />

          {/* Floating highlight badge */}
          {/* <div className="position-absolute top-0 start-0 translate-middle bg-primary text-white px-3 py-2 rounded-pill shadow">
            ICSE 8–10
          </div> */}
        </motion.div>

      </div>

      {/* ================= LEFT CONTENT ================= */}
      <div className="col-lg-6 text-center text-lg-start order-1 order-lg-2">

        <motion.span
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="badge bg-warning text-dark px-4 py-2 rounded-pill mb-3 shadow-sm"
        >
          ⭐ Trusted ICSE Coaching in Pimple Saudagar, Pune
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="fw-bold display-6 mb-3"
        >
          Best{" "}
          <span className="text-primary position-relative">
            ICSE Tuition Classes
            <span
              className="position-absolute start-0 bottom-0 w-100 bg-warning"
              style={{ height: "6px", zIndex: -1 }}
            ></span>
          </span>{" "}
          in Pimple Saudagar, Pune
          <br />
          for <span className="text-primary">8th, 9th & 10th</span> Students
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="h5 text-primary fw-semibold mb-4"
        >
          {icseContent.hero.subtitle}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="lead text-muted mb-4"
          style={{ whiteSpace: "pre-line" }}
        >
          {icseContent.hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="d-flex flex-column flex-sm-row gap-3"
        >
          <Link
            to="/"
            className="btn btn-warning btn-lg rounded-pill px-5 shadow-sm"
          >
            🎓 Book Free Demo
          </Link>

          <a
            href="tel:+919156004396"
            className="btn btn-outline-primary btn-lg rounded-pill px-5"
          >
            📞 Call Now
          </a>
        </motion.div>
      </div>

    </div>
  </div>
</section>

      {/* ================= WHY CHOOSE ================= */}
      {/* <section className="py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">
            Why Choose ASQUARE Academy for ICSE Coaching in Hadapsar?
          </h2>
          <div className="row g-4 justify-content-center">
            <p className="lead text-center">Our programs align with the ICSE syllabus and exam pattern, and are designed to meet each student’s learning needs through clarity, practice and personalised attention.</p>
            {icseContent.whyChoose.map((item, i) => (
              <div key={i} className="col-md-6 col-lg-3 rounded-full">
                <motion.div
                  whileHover={{ y: -6 }}
                  className="p-4 bg-white shadow rounded-pill h-100 text-center"  
                >
                  <item.icon size={40} className="text-primary mb-3" />
                  <h5>{item.title}</h5>
                  <p className="text-muted small">{item.desc}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section> */}


<hr></hr>

{/* ================= ENHANCED WHY CHOOSE ================= */}
<section className="py-5 position-relative overflow-hidden bg-light">

  {/* Decorative background elements */}
<div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden">
  <div className="decor-circle decor-primary"></div>
  <div className="decor-circle decor-warning"></div>
</div>

  <div className="container position-relative">

    {/* Section Header */}
    <div className="text-center mb-5">

      <motion.span
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="badge bg-primary px-4 py-2 rounded-pill mb-3"
      >
        WHY ASQUARE ACADEMY
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="fw-bold mb-3"
      >
        Why Choose {" "}
        <span className="text-primary position-relative">
          ASQUARE Academy
          <span
            className="position-absolute start-0 bottom-0 w-100 bg-warning"
            style={{ height: "5px", zIndex: -1 }}
          ></span>
        </span>{" "}
        for ICSE Coaching in Pimple Saudagar
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="lead text-muted mx-auto"
        style={{ maxWidth: "850px" }}
      >
       We focus on concept clarity, consistent practice, and exam-oriented preparation tailored to the ICSE syllabus. Our proven methodology ensures academic growth and board exam readiness.
      </motion.p>

    </div>

    {/* Feature Cards */}
    <div className="row g-4 justify-content-center">
      {icseContent.whyChoose.map((item, i) => (
        <div key={i} className="col-md-6 col-lg-4 col-xl-3">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="h-100 p-4 rounded-4 shadow-sm bg-white text-center position-relative overflow-hidden"
          >
            {/* Top accent line */}
            <div
              className="position-absolute top-0 start-0 w-100 bg-primary"
              style={{ height: "4px" }}
            ></div>

            {/* Icon */}
            <div className="d-inline-flex align-items-center justify-content-center rounded-circle bg-primary bg-opacity-10 mb-3"
              style={{ width: 72, height: 72 }}
            >
              <item.icon size={36} className="text-primary" />
            </div>

            {/* Content */}
            <h5 className="fw-semibold mb-2">{item.title}</h5>
            <p className="text-muted small mb-0">
              {item.desc}
            </p>

            {/* Hover glow */}
            <div
              className="position-absolute inset-0 rounded-4"
              style={{
                boxShadow: "0 0 0 rgba(0,0,0,0)",
                transition: "box-shadow 0.3s ease"
              }}
            ></div>
          </motion.div>

        </div>
      ))}
    </div>

  </div>
</section>


<hr></hr>

{/* ================= ENHANCED CLASSES SECTION ================= */}
<section className="py-5 position-relative overflow-hidden bg-primary">

  {/* Background accents */}
<div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden">
  <div className="decor-circle  decor-primary2"></div>
  <div className="decor-circle decor-warning"></div>
</div>

  <div className="container position-relative text-white">

    {/* Section Header */}
    <div className="text-center mb-5">

      <motion.span
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="badge bg-warning text-dark px-4 py-2 rounded-pill mb-3"
      >
        ICSE PROGRAM STRUCTURE
      </motion.span>

      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="fw-bold mb-3"
      >
        Structured ICSE Tuition for{" "}
        <span className="position-relative text-warning">
          Classes 8, 9 & 10
          <span
            className="position-absolute start-0 bottom-0 w-100 bg-light"
            style={{ height: "4px", zIndex: -1 }}
          ></span>
        </span>
      </motion.h3>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="lead text-light opacity-90 mx-auto"
        style={{ maxWidth: "850px" }}
      >
        Every ICSE student learns differently. That’s why ASQUARE focuses on concept clarity, 
        regular practice, and personalized mentoring, aligned with the official ICSE syllabus and exam pattern.
      </motion.p>

    </div>

    {/* Class Cards */}
  {/* Class Cards */}
<div className="row g-5">
  {icseContent.classes.map((c, i) => (
    <div key={i} className="col-12">

      <motion.div
        initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
        className={`bg-white text-dark rounded-4 shadow-lg d-flex flex-column flex-lg-row ${
          i % 2 !== 0 ? "flex-lg-row-reverse" : ""
        }`}
      >

        {/* Image Section */}
        <div className="col-lg-4 d-flex align-items-center justify-content-center p-4 bg-light">
          <img
            src={c.img}
            alt={c.title}
            className="img-fluid"
            style={{
              maxHeight: "",
              width: "auto",
              objectFit: "contain",
            }}
          />
        </div>

        {/* Content Section */}
        <div className="p-4 p-lg-5 col-lg-8">

          <div className="d-flex align-items-center mb-3">
            <div
              className="d-flex align-items-center justify-content-center rounded-circle bg-primary bg-opacity-10 me-3"
              style={{ width: 56, height: 56 }}
            >
              <GraduationCap size={28} className="text-primary" />
            </div>

            {/* <h5 className="fw-bold mb-0">
              {c.title}
            </h5> */}

            <h5
  className="fw-bold mb-0"
  dangerouslySetInnerHTML={{ __html: highlightTitle(c.title) }}
></h5>

          </div>

          <p
            className="text-muted mb-4"
            style={{ whiteSpace: "pre-line" }}
          >
            {c.desc}
          </p>

          <div className="d-flex justify-content-end">
            <Link
              to="/"
              className="btn btn-warning btn-md rounded-pill px-5 shadow-sm"
            >
              Learn More
            </Link>
          </div>

        </div>

      </motion.div>

    </div>
  ))}
</div>

  </div>
</section>

<hr></hr>

 {/* ================= ENHANCED METHODOLOGY ================= */}
<section className="py-5 position-relative overflow-hidden bg-light">

  {/* Decorative background */}
<div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden">
  <div className="decor-circle decor-primary"></div>
  <div className="decor-circle decor-warning"></div>
</div>

  <div className="container position-relative">

    {/* Section Header */}
    <div className="text-center mb-5">

      <motion.span
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="badge bg-primary px-4 py-2 rounded-pill mb-3"
      >
        OUR APPROACH
      </motion.span>

      <motion.h4
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="fw-bold mb-3"
      >
        Our{" "}
        <span className="text-primary position-relative">
          Teaching Methodology
          <span
            className="position-absolute start-0 bottom-0 w-100 bg-warning"
            style={{ height: "4px", zIndex: -1 }}
          ></span>
        </span>
      </motion.h4>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="lead text-muted mx-auto"
        style={{ maxWidth: "850px" }}
      >
      At ASQUARE Academy Pimple Saudagar, we follow a student-friendly learning approach
          </motion.p>

    </div>

    {/* Timeline */}
    <div className="position-relative">

      {/* Vertical Line */}
      <div
        className="position-absolute top-0 start-50 translate-middle-x bg-primary opacity-25"
        style={{ width: "4px", height: "100%" }}
      ></div>

      <div className="row">
        {icseContent.methodology.map((m, i) => (
          <div
            key={i}
            className={`col-12 d-flex mb-4 ${
              i % 2 === 0 ? "justify-content-end" : "justify-content-start"
            }`}
          >

            <motion.div
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-4 shadow-lg p-4 position-relative"
              style={{ maxWidth: "520px" }}
            >

              {/* Step Number */}
              <div
                className="position-absolute top-50 translate-middle-y d-flex align-items-center justify-content-center rounded-circle bg-primary text-white fw-bold"
                style={{
                  width: 40,
                  height: 40,
                  left: i % 2 === 0 ? "-20px" : "unset",
                  right: i % 2 !== 0 ? "-20px" : "unset",
                }}
              >
                {i + 1}
              </div>

              {/* Content */}
              <p className="mb-0 text-dark fw-semibold">
                {m}
              </p>

            </motion.div>

          </div>
        ))}
      </div>
    </div>

  </div>
</section>

      {/* ================= REVIEWS (UNCHANGED) ================= */}
      <Suspense fallback={<Loading />}>
        <Reviews />
      </Suspense>

   {/* ================= FAQ ================= */}
{/* ================= ENHANCED FAQ ================= */}
<section className="py-5 position-relative overflow-hidden">

  {/* Background gradient */}
  <div
    className="position-absolute top-0 start-0 w-100 h-100"
    style={{
      background:
        "linear-gradient(180deg, #f8f9fa 0%, #eef3ff 60%, #ffffff 100%)",
      zIndex: -1,
    }}
  ></div>

  {/* Decorative shapes */}
<div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden">
  <div className="decor-circle decor-primary"></div>
  <div className="decor-circle decor-warning"></div>
</div>

  <div className="container position-relative">

    {/* Section Header */}
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-5"
    >
      <span className="badge bg-primary bg-opacity-10 text-primary px-4 py-2 rounded-pill mb-3 shadow-sm">
        NEED HELP?
      </span>

      <h4 className="fw-bold mb-2">
        <HelpCircle className="text-primary me-2" />
        Frequently Asked Questions
      </h4>

      <p className="text-muted lead mx-auto" style={{ maxWidth: "800px" }}>
        Here are answers to some of the most common questions parents and students
        ask about our ICSE coaching, teaching approach, and admission process.
      </p>
    </motion.div>

    {/* FAQ Content */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      viewport={{ once: true }}
      className="row g-4"
    >
      <div className="col-md-6">
        <div className="bg-white rounded-4 shadow-sm p-3 h-100">
          <FAQAccordion
            faqs={icseContent.faqs.slice(
              0,
              Math.ceil(icseContent.faqs.length / 2)
            )}
          />
        </div>
      </div>

      <div className="col-md-6">
        <div className="bg-white rounded-4 shadow-sm p-3 h-100">
          <FAQAccordion
            faqs={icseContent.faqs.slice(
              Math.ceil(icseContent.faqs.length / 2)
            )}
          />
        </div>
      </div>
    </motion.div>

    {/* Bottom CTA */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      viewport={{ once: true }}
      className="text-center mt-5"
    >
      <p className="mb-3 fw-semibold">
        Still have questions? We’re happy to help!
      </p>
      <Link to="/contact" className="btn btn-warning btn-lg rounded-pill px-5 shadow">
        📞 Talk to Our Counsellor
      </Link>
    </motion.div>

  </div>
</section>

{/* ================= ENHANCED CTA ================= */}
<section className="py-5 position-relative overflow-hidden">

  {/* Gradient background */}
  <div
    className="position-absolute top-0 start-0 w-100 h-100"
    style={{
      background:
        "linear-gradient(135deg, #0d6efd 0%, #084298 60%, #031633 100%)",
      zIndex: -1,
    }}
  ></div>

  {/* Decorative accents */}
<div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden">
  <div className="decor-circle decor-primary"></div>
  <div className="decor-circle decor-warning"></div>
</div>

  <div className="container position-relative text-center text-white">

    {/* Badge */}
    <motion.span
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="badge bg-warning text-dark px-4 py-2 rounded-pill mb-3 shadow"
    >
      ADMISSIONS OPEN
    </motion.span>

    {/* Title */}
    <motion.h3
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="fw-bold mb-3"
    >
      Enrol with  {" "}
      <span className="position-relative text-warning">
      ASQUARE Academy  {icseContent.location} Today
        <span
          className="position-absolute start-0 bottom-0 w-100 bg-white"
          style={{ height: "4px", zIndex: -1 }}
        ></span>
      </span>
      <br />
      Your Path to ICSE Success
    </motion.h3>

    {/* Subtitle */}
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      viewport={{ once: true }}
      className="lead mx-auto mb-4"
      style={{ maxWidth: "900px" }}
    >
      If you’re searching for: <br />
      1. Best 8th ICSE classes in Pimple Saudagar, Wakad & Rahatani <br />
      2. Best 9th ICSE classes in Pimple Saudagar, Sangvi & Aundh <br />
      3. Best 10th ICSE classes in Pimple Saudagar, Hinjewadi & Kalewadi <br />
      4. ICSE tuition for Class 8th, 9th & 10th in Pimple Saudagar <br />
      Then ASQUARE Academy Pimple Saudagar is your reliable partner for ICSE success.
       
    </motion.p>

    {/* Supporting Text */}
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.35 }}
      viewport={{ once: true }}
      className="opacity-90 mb-4"
    >
     
    </motion.p>

    {/* Location */}
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      viewport={{ once: true }}
      className="mb-4"
    >
      <MapPin size={18} className="me-1" />
      Visit our centre today, easily accessible from <strong>Wakad, Rahatani, Hinjewadi, Kalewadi, Sangvi, Aundh, Vishal Nagar, Thergaon, Jagtap Dairy & Kokane Chowk.</strong>
    </motion.p>

    {/* CTAs */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      viewport={{ once: true }}
      className="d-flex flex-column flex-sm-row justify-content-center gap-3"
    >
      <Link
        to="/"
        className="btn btn-warning btn-lg rounded-pill px-5 shadow fw-semibold"
      >
        🎓 Book Free Demo
      </Link>

      <a
        href="tel:+919156004396"
        className="btn btn-outline-light btn-lg rounded-pill px-5"
      >
        📞 Call Now
      </a>
    </motion.div>

    {/* Micro CTA */}
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.75 }}
      viewport={{ once: true }}
      className="mt-4 small opacity-90"
    >
     📞 Call now to book your free demo class and enquire about batch timings & fees.
    </motion.p>

  </div>
</section>

      <Footer />
    </>
  );
}

export default ICSEpimpleSaudagar;


