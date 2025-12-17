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

import sampleimg1 from "../../../Assets/SampleImages/Banners/Banners (5).jpeg";
import sampleimg11 from "../../../Assets/SampleImages/Banners/Banners (8).jpeg";
import sampleimg2 from "../../../Assets/SampleImages/MobBanners/MobBanner3.jpeg";
import sampleimg22 from "../../../Assets/SampleImages/MobBanners/MobBanner9.jpeg";

import image1 from "../../../Assets/SampleImages/AsquarePics/AsquarePics (5).jpeg";
import image2 from "../../../Assets/SampleImages/AsquarePics/AsquarePics (7).jpeg";
import image3 from "../../../Assets/SampleImages/AsquarePics/AsquarePics (8).jpeg";

const Reviews = React.lazy(() =>
  import("../../../Components/Reviews/Reviews.jsx")
);

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
  img:image3,
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
      <section className="py-5 bg-light">
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
      </section>

      {/* ================= WHY CHOOSE ================= */}
      <section className="py-5">
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
      </section>
{/* ================= CLASSES ================= */}
<section className="py-16 bg-primary text-white">
  <div className="container">
    <br></br>
    <h3 className="text-center fw-bold mb-1 text-3xl">
      ICSE Tuition for Class 8 in Hadapsar – Building the Right Foundation
    </h3>
    <p className="lead mb-5 text-center">
      Class 8 introduces students to advanced ICSE concepts. Our program focuses on:
    </p>

   <div className="row g-5">
  {icseContent.classes.map((c, i) => (
    <div key={i} className="col-12 d-flex justify-content-center">
      <motion.div
        whileHover={{ scale: 1.03 }}
        className={`bg-white text-dark rounded-4 shadow d-flex align-items-center flex-column flex-md-row ${i % 2 === 0 ? 'flex-md-row' : 'flex-md-row-reverse'} w-100`}
        style={{ overflow: 'hidden' }}
      >
        {/* Text Content */}
        <div className="p-4 flex-1"   style={{ minWidth: 'fit-content' }}>
          <GraduationCap className="text-primary mb-2" size={28} />
          <h5 className="mb-2">{c.title}</h5>
          <p className="small" style={{ whiteSpace: 'pre-line' }}>
            {c.desc}
          </p>
          <div className="d-flex">
            <div className="ms-auto">
           <Link to="/" className="btn btn-warning btn-lg rounded-pill"> Learn More </Link>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="">
          <img
            src={c.img} // common image or c.img
            alt={c.title}
            className="w-24 h-24 md:w-20 md:h-20 "
          />
        </div>
      </motion.div>
    </div>
  ))}
</div>

     <br></br>
  </div>
</section>
<hr></hr>

   {/* ================= METHODOLOGY ================= */}
<section className="py-16 bg-light">
  <div className="container">
    <br></br>
    <h4 className="fw-bold text-center mb-5 mt-4 text-primary">
      Our Teaching Methodology
    </h4>

    <div className="position-relative">
      {/* Vertical timeline line */}
      <div className="position-absolute top-0 start-50 translate-middle-x bg-primary" style={{ width: '4px', height: '100%' }}></div>

      <div className="row">
        {icseContent.methodology.map((m, i) => (
          <div
            key={i}
            className={`col-12 d-flex mb-3 ${
              i % 2 === 0 ? 'justify-content-end' : 'justify-content-start'
            }`}
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-4 shadow p-4 position-relative"
              style={{ maxWidth: '500px' }}
            >
              {/* Circle indicator */}
              <div className="position-absolute top-50 translate-middle-y  bg-primary rounded-circle" style={{ width: '20px', height: '20px', left: i % 2 === 0 ? '-10px' : 'unset', right: i % 2 !== 0 ? '-10px' : 'unset' }}></div>
              
              <p className="mb-0 text-dark fw-semibold">{m}</p>
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
<section className="py-5">
  <div className="container">
    <h4 className="fw-bold text-center mb-4">
      <HelpCircle /> FAQs
    </h4>

    <div className="row">
      <div className="col-md-6">
        <FAQAccordion faqs={icseContent.faqs.slice(0, Math.ceil(icseContent.faqs.length / 2))} />
      </div>

      <div className="col-md-6">
        <FAQAccordion faqs={icseContent.faqs.slice(Math.ceil(icseContent.faqs.length / 2))} />
      </div>
    </div>
  </div>
</section>


      {/* ================= CTA ================= */}
      <section className="py-5 text-center bg-primary text-white px-3">
        <h3 className="fw-bold mb-3">
          Enrol at ASQUARE Academy {icseContent.location} – Your Path to ICSE Success
        </h3>
        <p className="lead">
         Choosing the right coaching makes all the difference in ICSE preparation. At ASQUARE Academy Hadapsar, we combine expert teaching, personalised mentoring, and proven strategies to help students of Class 8th, 9th & 10th achieve top results.
        </p>
        <p className="lead">
            Whether your child needs to build a foundation in Class 8, strengthen knowledge in Class 9, or excel in Class 10 board exams, our tailored ICSE tuition programs ensure complete academic support.
        </p>
        <p>
          <MapPin /> Located in Hadapsar, we also serve students from  {icseContent.location}
        </p>
        <Link to="/" className="btn btn-warning btn-lg rounded-pill">
          Book Free Demo
        </Link> <br></br>
        🎯 Take the next step towards success – book a free demo class today and discover why ASQUARE is trusted by parents and students across Pune.
      </section>

      <Footer />
    </>
  );
}

export default ICSEHadapsar;
