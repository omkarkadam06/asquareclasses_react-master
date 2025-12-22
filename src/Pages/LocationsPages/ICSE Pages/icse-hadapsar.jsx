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
import sampleimg1 from "../../../Assets/SampleImages/ICSE/DeskSlider/ICSE slider PC.jpeg";
import sampleimg11 from "../../../Assets/SampleImages/ICSE/DeskSlider/ICSE slider PC 1.jpeg";
import sampleimg2 from "../../../Assets/SampleImages/ICSE/MobSlider/ICSE slider mobile.jpeg";
import sampleimg22 from "../../../Assets/SampleImages/ICSE/MobSlider/ICSE slider mobile 1.jpeg";

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
    "Hadapsar",
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
  location: "Hadapsar, Pune",

  hero: {
    h1: "Best ICSE Tuition Classes in Hadapsar, Pune for 8th, 9th & 10th Students",
    subtitle:
      "Academic Excellence with Expert ICSE Coaching in Hadapsar",
    description:
      "The ICSE syllabus is detailed, concept-heavy, and requires consistent practice. Students in Classes 8th, 9th & 10th often need additional guidance beyond school to achieve their best. That’s why ASQUARE Academy offers the best ICSE tuition classes in Hadapsar, Pune – combining expert faculty, small batches, and a structured approach to help students excel. \nOur Hadapsar branch is easily accessible for students from Magarpatta, Amanora, Sasane Nagar, Handewadi, Kalepadal & Mohammadwadi, making it a convenient choice for ICSE preparation.",
  
    },

  whyChoose: [
    {
      icon: Users,
      title: "Experienced ICSE Faculty",
      desc: "Subject specialists for Mathematics, Physics, Chemistry, Biology, English and HCG (History, Civics & Geography).",
    },
    {
      icon: BookOpen,
      title: "Small Batch Sizes",
      desc: "Individual attention to clear doubts and track progress.",
    },
    {
      icon: ClipboardCheck,
      title: "Structured Study Material ",
      desc: "Detailed notes, chapterwise worksheets and ICSE-style practice papers.",
    },
    {
      icon: School,
      title: "Regular Assessments ",
      desc: "Weekly topic tests and monthly cumulative reviews.",
    },
    {
  icon: HelpCircle,
  title: "Dedicated Doubt-Solving",
  desc: "Extra sessions and mentor clinics for weaker areas.",
},
{
  icon: GraduationCap,
  title: "Proven Results",
  desc: "Consistent improvement in school grades and board preparedness.",
},
{
  icon: MapPin,
  title: "Convenient Location",
  desc: "Accessible to students from Magarpatta, Amanora, Sasane Nagar, Handewadi, Kalepadal & Mohammadwadi.",
},

  ],

  classes: [
{
  title: "ICSE Tuition for Class 8 in Hadapsar – Building the Right Foundation",
  desc: `Class 8 introduces students to advanced ICSE concepts. Our program focuses on:

• Strengthening fundamentals in Mathematics & Science (Physics, Chemistry & Biology).
• Enhancing English language & literature skills.
• Building knowledge in History, Civics & Geography with maps & exercises.
• Regular practice assignments & tests to build confidence.`,
  img: image1,
},

    {
      title: "ICSE Tuition for Class 9 in Hadapsar – Strengthening Core Knowledge",
      desc:
        `Class 9 is a turning point for board preparation. Our ICSE coaching for Class 9 in Hadapsar includes:

•	Full coverage of Maths, Science & English.
•	Grammar, comprehension & structured writing practice.
•	HCG with source-based & map exercises.
•	Weekly tests & remedial classes to improve weak areas.`,
  img: image2,
    },
    {
      title: "ICSE Tuition for Class 10 in Hadapsar – Focused Board Exam Preparation",
      desc:
        `Class 10 results play a vital role in shaping a student’s academic journey. At ASQUARE Academy Hadapsar, \nour ICSE Class 10 tuition focuses on thorough exam preparation with:
Highlights include:

•	Comprehensive syllabus revision for Maths, Science, English, HCG & Second Language.
•	Mock board exams & past-year paper practice.
•	Answer-writing sessions with focus on presentation & time management.
•	Subject-specific tips & strategies for scoring higher.
•	Regular revision cycles with personalised progress tracking.
With this systematic approach, students enter the board exams fully prepared and confident.

`,
  img:image4,
    },
  ],

  methodology: [
    "Interactive Learning: Conceptual teaching with real-life examples.",
    "Practice-Oriented Approach: Worksheets, assignments & ICSE-style papers.",
    "Continuous Monitoring: Weekly & monthly tests with feedback.",
    "Doubt-Solving Support: Dedicated sessions for clarity in tough topics.",
    "Board-Focused Revision: Mock tests, crash courses & last-mile strategies."
  ],

 faqs: [
  {
    q: "Q1. Do you provide ICSE coaching for Class 8, 9 & 10 in Hadapsar?",
    a: "Yes. We offer specialised ICSE coaching for all three classes with expert subject teachers.",
  },
  {
    q: "Q2. Do you conduct mock board exams for Class 10?",
    a: "Absolutely. Mock exams, past-paper practice & answer-writing workshops are a core part of our Class 10 program.",
  },
  {
    q: "Q3. Are Science subjects taught separately?",
    a: "Yes. Physics, Chemistry & Biology are taught individually for better clarity.",
  },
  {
    q: "Q4. Do you offer online ICSE tuition for Hadapsar students?",
    a: "Yes. We provide both offline & live online ICSE coaching.",
  },
  {
    q: "Q5. Which nearby areas do you serve?",
    a: "Our Hadapsar branch is convenient for students from Magarpatta, Amanora, Sasane Nagar, Handewadi, Kalepadal & Mohammadwadi.",
  },
],

};

function ICSEHadapsar() {
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
          content="ICSE Tuition & Classes in Hadapsar Pune | 8th 9th 10th – ASQUARE Academy"
        />
        <meta
          name="description"
          content="Join the best ICSE Tuition Classes in Hadapsar Pune for 8th, 9th & 10th. Expert teachers, small batches & mock tests for strong board exam preparation."
        />

        <meta
          name="keywords"
  content="ICSE tuition classes in Hadapsar Pune,
Best ICSE Tuition in Hadapsar Pune,
ICSE coaching classes for 8th 9th 10th in Hadapsar,
ICSE Class 8 tuition Hadapsar Pune,
ICSE Class 9 tuition Hadapsar Pune,
ICSE Class 10 board exam coaching Hadapsar,
Top ICSE Coaching Classes in Hadapsar Pune,
ICSE Maths Science English tuition Hadapsar Pune,
Best ICSE coaching institute in Hadapsar Pune,
ICSE board preparation classes Hadapsar Pune"
        />

        <script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/icse-tuition-classes-hadapsar-pune-8th-9th-10th/#localbusiness",
      "name": "ASQUARE Academy - ICSE Tuition Classes Hadapsar Pune",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "telephone": "+91-9156004396",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Hadapsar, Pune, Maharashtra",
        "addressLocality": "Pune",
        "addressRegion": "MH",
        "postalCode": "411028",
        "addressCountry": "IN"
      },
      "url": "https://www.asquareclasses.com/icse-tuition-classes-hadapsar-pune-8th-9th-10th/",
      "priceRange": "₹₹",
      "description": "ASQUARE Academy provides ICSE tuition classes in Hadapsar Pune for Class 8th, 9th & 10th. Expert tutors, small batches, and mock tests for board preparation.",
      "sameAs": [
        "https://www.facebook.com/asquareclasses",
        "https://www.instagram.com/asquareclasses"
      ],
      "openingHours": "Mo-Sa 08:00-20:00"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/icse-tuition-classes-hadapsar-pune-8th-9th-10th/#webpage",
      "url": "https://www.asquareclasses.com/icse-tuition-classes-hadapsar-pune-8th-9th-10th/",
      "name": "ICSE Tuition Classes in Hadapsar Pune | ASQUARE Academy",
      "description": "Best ICSE coaching for Class 8th, 9th & 10th in Hadapsar Pune. Expert teachers, mock tests, small batches & personalized attention.",
      "breadcrumb": {
        "@id": "https://www.asquareclasses.com/icse-tuition-classes-hadapsar-pune-8th-9th-10th/#breadcrumb"
      },
      "about": {
        "@id": "https://www.asquareclasses.com/icse-tuition-classes-hadapsar-pune-8th-9th-10th/#localbusiness"
      },
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
      "@type": "BreadcrumbList",
      "@id": "https://www.asquareclasses.com/icse-tuition-classes-hadapsar-pune-8th-9th-10th/#breadcrumb",
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
          "name": "ICSE Tuition",
          "item": "https://www.asquareclasses.com/icse-tuition-pune/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "ICSE Tuition Classes in Hadapsar Pune"
        }
      ]
    },
    {
      "@type": "EducationalOrganization",
      "name": "ASQUARE Academy",
      "url": "https://www.asquareclasses.com/",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "sameAs": [
        "https://www.facebook.com/asquareclasses",
        "https://www.instagram.com/asquareclasses"
      ],
      "description": "ASQUARE Academy offers high-quality ICSE tuition classes in Hadapsar Pune for students of Classes 8th, 9th, and 10th."
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you provide ICSE tuition for Class 8 in Hadapsar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we offer ICSE tuition for Class 8th covering Maths, Science, English, HCG, and Second Languages."
          }
        },
        {
          "@type": "Question",
          "name": "Are Science subjects taught separately?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Physics, Chemistry, and Biology are handled individually by expert teachers."
          }
        },
        {
          "@type": "Question",
          "name": "Which subjects are covered for Class 9 ICSE coaching?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We cover Maths, Science, English, History, Civics, Geography, Second Language, and Computer Applications."
          }
        },
        {
          "@type": "Question",
          "name": "How do you prepare Class 10 students for ICSE board exams?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Through comprehensive revisions, mock exams, past paper solving, and answer-writing practice."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer online classes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We provide both online and offline ICSE coaching for Classes 8th, 9th, and 10th."
          }
        },
        {
          "@type": "Question",
          "name": "How large are your batches?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We maintain small batches to ensure individual attention and effective learning."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide study material?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Students receive detailed notes, worksheets, and ICSE-style test papers."
          }
        },
        {
          "@type": "Question",
          "name": "Can students attend demo classes before joining?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we offer Free Demo Classes for students and parents."
          }
        },
        {
          "@type": "Question",
          "name": "Which nearby areas do you serve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our Hadapsar branch caters to students from Magarpatta, Amanora Park Town, Handewadi, Keshav Nagar, Sasane Nagar, Manjari, and Fursungi."
          }
        },
        {
          "@type": "Question",
          "name": "How can I enquire about admission or fees?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can call our Hadapsar branch at +91-9156004396, fill out the enquiry form on our website, or visit the centre directly."
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
            alt="ICSE Tuition Classes in Hadapsar Pune"
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
          ⭐ Trusted ICSE Coaching in Hadapsar, Pune
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
          in Hadapsar, Pune
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
        Why Choose{" "}
        <span className="text-primary position-relative">
          ASQUARE Academy
          <span
            className="position-absolute start-0 bottom-0 w-100 bg-warning"
            style={{ height: "5px", zIndex: -1 }}
          ></span>
        </span>{" "}
        for ICSE Coaching?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="lead text-muted mx-auto"
        style={{ maxWidth: "850px" }}
      >
        Our ICSE coaching programs are carefully designed to match the board
        curriculum while addressing every student’s learning pace through
        conceptual clarity, consistent practice, and personalised mentoring.
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
        Our ICSE tuition programs are carefully structured to match each class’s
        academic needs — from strong foundation building to focused board exam
        preparation.
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
        Our structured ICSE teaching methodology ensures conceptual clarity,
        continuous improvement, and confident exam performance at every stage
        of learning.
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
      Enrol at{" "}
      <span className="position-relative text-warning">
        ASQUARE Academy {icseContent.location}
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
      Choosing the right coaching makes all the difference in ICSE preparation.
      At ASQUARE Academy Hadapsar, we combine expert teaching, personalised
      mentoring, and proven strategies to help students of Classes{" "}
      <strong>8th, 9th & 10th</strong> achieve outstanding academic results.
    </motion.p>

    {/* Supporting Text */}
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.35 }}
      viewport={{ once: true }}
      className="opacity-90 mb-4"
    >
      Whether your child needs to build a strong foundation in Class 8,
      strengthen core concepts in Class 9, or excel in Class 10 board exams,
      our structured ICSE tuition programs ensure complete academic support.
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
      Conveniently located in <strong>Hadapsar</strong>, serving students across
      nearby areas in Pune.
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
      🎯 Take the next step towards success — book a free demo class today and
      discover why ASQUARE is trusted by parents and students across Pune.
    </motion.p>

  </div>
</section>


      <Footer />
    </>
  );
}

export default ICSEHadapsar;
