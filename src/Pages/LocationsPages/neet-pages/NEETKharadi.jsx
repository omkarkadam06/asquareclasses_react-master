import React, { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import locationBGImage from "../../../Assets/locationPageImages/neet/NEET slider PC.jpeg";
import MobileBGImage from "../../../Assets/locationPageImages/neet/NEET slider mobile.jpeg";
import image1 from "../../../Assets/locationPageImages/neet/NEET Page 2.jpeg";
import image2 from "../../../Assets/locationPageImages/neet/NEET Page 8.jpeg";
import {
  BarChart,
  BookOpen,
  Calendar,
  CheckCircle,
  Clock,
  Lightbulb,
  MapPin,
  MessageCircle,
  Target,
  Users,
  School,
  CalendarSync,
  BadgeQuestionMark,
  Award,
  TrendingUp,
  Star
} from "lucide-react";
import "./NEET-pages.css";
import Slider from "react-slick";
import Navbar from "../../../Components/Navbar/Navbar.jsx";
import Header from "../../../Components/Header/Header.jsx";
import MobileForm from "../../../Components/Mobileform/MobileForm.jsx";
import Loading from "../../Loading.jsx";
import Footer from "../../../Components/Footer/Footer.jsx";
import FeatureCard from "./components/FeatureCard.jsx";
import GridCard from "./components/GridCard.jsx";
import MethodologyCard from "./components/MethodologyCard.jsx";
import FAQAccordion from "./components/FAQAccordion.jsx";
import SubjectCard from "./components/SubjectCard.jsx";
import ProgramCard from "./components/ProgramCard.jsx";

const Reviews = React.lazy(() =>
  import("../../../Components/Reviews/Reviews.jsx")
);

function NEETKharadi() {
  const canonicalUrl = window.location.origin + window.location.pathname;

  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 992);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    rtl: true,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const whyCFeatures = [
  {
    Icon: Users,
    title: "Expert Mentors",
    description:
      "Highly experienced faculty for Physics, Chemistry, and Biology.",
  },
  {
    Icon: BookOpen,
    title: "Structured NEET Curriculum",
    description:
      "NCERT-based coverage with advanced exam-oriented training.",
  },
  {
    Icon: Target,
    title: "Personalized Attention",
    description:
      "Small batch sizes with one-on-one doubt resolution.",
  },
  {
    Icon: BarChart,
    title: "Performance Tracking",
    description:
      "Weekly tests, monthly mocks, and detailed performance reviews.",
  },
  {
    Icon: Calendar,
    title: "Flexible Learning",
    description:
      "Classroom and online programs available.",
  },
  {
    Icon: Users,
    title: "Balanced Guidance",
    description:
      "Preparation strategies that support both NEET and board exams.",
  },
];

  const subjectsCovered = [
  {
    title: "Physics",
    desc: "Concept-driven instruction paired with structured numerical practice.",
  },
  {
    title: "Chemistry",
    desc: "Complete coverage of Physical, Organic, and Inorganic Chemistry with NEET-level depth.",
  },
  {
    title: "Biology",
    desc: "NCERT-aligned content with emphasis on diagrams, scoring strategies, and high-yield areas.",
  },
];

  const programDurations = [
  {
    icon: Clock,
    title: "2-Year Integrated Program (Class 11 → 12)",
    desc: "Build a solid foundation and advanced exam readiness.",
  },
  {
    icon: Target,
    title: "1-Year NEET Target Program (Class 12)",
    desc: "Fast-track syllabus coverage with test-based learning.",
  },
  {
    icon: CalendarSync,
    title: "Dropper/Repeater Course",
    desc: "One-year intensive program with rigorous revision and test analysis.",
  },
  {
    icon: School,
    title: "Crash Course (2–3 Months)",
    desc: "High-impact revision, PYQs, and exam strategies.",
  },
];

  const methodologySteps = [
  {
    Icon: Lightbulb,
    title: "Interactive, concept-based classroom lectures",
    description: "Engaging sessions focused on conceptual clarity and understanding.",
  },
  {
    Icon: BookOpen,
    title: "Daily Practice Papers (DPPs) and structured assignments",
    description: "Consistent practice to strengthen problem-solving and retention.",
  },
  {
    Icon: BarChart,
    title: "Regular assessments with analytics for improvement",
    description: "Chapter-wise tests and full-length mocks to track progress effectively.",
  },
  {
    Icon: MessageCircle,
    title: "Faculty-led doubt-clearing sessions",
    description: "Personalized sessions to address and resolve academic doubts promptly.",
  },
  {
    Icon: Calendar,
    title: "Parent–teacher progress meetings for accountability",
    description: "Frequent meetings to ensure students stay on track and achieve growth.",
  },
];

  const faqData = [
  {
    q: "Is ASQUARE Kharadi suitable for beginners in Class 11?",
    a: "Yes, our 2-year integrated program is ideal for Class 11 students starting early with NEET coaching classes in Kharadi Pune. It builds strong fundamentals for NEET Advanced Preparation in Kharadi Pune.",
  },
  {
    q: "Do you provide evening or weekend batches?",
    a: "Yes, ASQUARE Academy offers flexible batch timings, including evening and weekend options, making us one of the best NEET coaching in Kharadi Pune for students managing school or college.",
  },
  {
    q: "Are crash courses offered at the Kharadi branch?",
    a: "Yes, we conduct intensive crash courses before exams for revision and test drills. These short-term programs are part of our top NEET coaching classes in Kharadi Pune.",
  },
  {
    q: "How do you support repeater students?",
    a: "Our dropper batch covers the complete NEET syllabus with frequent tests and personalized guidance, ensuring effective NEET Advanced Preparation in Kharadi Pune.",
  },
  {
    q: "Can students from Viman Nagar or Wagholi join the Kharadi branch?",
    a: "Absolutely. Many students from Viman Nagar, Wagholi, and nearby East Pune areas attend our best NEET classes in Kharadi Pune for expert mentoring and proven results.",
  },
  {
    q: "What subjects are taught in NEET classes at Kharadi?",
    a: "Our NEET classes in Kharadi Pune cover Physics, Chemistry, and Biology in-depth, helping students strengthen conceptual understanding and exam-solving accuracy.",
  },
  {
    q: "Do you offer online NEET coaching options?",
    a: "Yes, students can choose between classroom and online learning modes at ASQUARE, making us one of the top NEET classes in Kharadi Pune for flexible preparation.",
  },
  {
    q: "Why is ASQUARE considered the best NEET coaching in Kharadi Pune?",
    a: "With experienced faculty, small batches, regular testing, and consistent results, ASQUARE Academy is recognized among the best NEET coaching classes in Kharadi Pune.",
  },
];

const gridFeatures = [
  {
    Icon: Users,
    title: "Small batches for focused mentoring",
    colorClass: "bg-gradient-blue",
  },
  {
    Icon: BookOpen,
    title: "Comprehensive NEET study material (digital + print)",
    colorClass: "bg-gradient-purple",
  },
  {
    Icon: Calendar,
    title: "Regular updates to parents on student progress",
    colorClass: "bg-gradient-green",
  },
  {
    Icon: Award,
    title: "Workshops on accuracy, exam temperament, and time management",
    colorClass: "bg-gradient-orange",
  },
  {
    Icon: TrendingUp,
    title: "Recognized as one of the top NEET coaching institutes in Kharadi, Viman Nagar, Wagholi, and East Pune",
    colorClass: "bg-gradient-red",
  },
  {
    Icon: Star,
    title: "Expert NEET faculty with proven student success",
    colorClass: "bg-gradient-teal",
  },
];

  return (
    <>
      <Helmet>
        <title>
          Best NEET Coaching Classes in Kharadi Pune | ASQUARE Academy
        </title>
        <meta
          name="title"
          content="Best NEET Coaching Classes in Kharadi Pune | ASQUARE Academy"
        />
        <meta
          name="description"
          content="Join ASQUARE Academy for top NEET coaching classes in Kharadi Pune. Expert faculty, small batches & online/offline programs for NEET Advanced Preparation."
        />
        <meta
          name="keywords"
          content="NEET coaching classes in kharadi pune Best NEET Coaching in kharadi pune Top NEET Coaching Classes kharadi pune NEET Advanced Preparation kharadi pune NEET Classes in kharadi pune Best NEET Classes in kharadi Pune Top NEET Classes in kharadi pune"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{`
        {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-kharadi-pune#localbusiness",
      "name": "ASQUARE Academy - NEET Coaching Classes in Kharadi Pune",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "telephone": "9766118877",
      "url": "https://www.asquareclasses.com/neet-coaching-classes-institute-kharadi-pune",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kharadi, Pune",
        "addressRegion": "Maharashtra",
        "addressCountry": "India"
      },
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune/"
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-kharadi-pune#webpage",
      "url": "https://www.asquareclasses.com/neet-coaching-classes-institute-kharadi-pune",
      "name": "NEET Coaching Classes in Kharadi Pune | ASQUARE Academy",
      "description": "ASQUARE Academy offers the best NEET coaching classes in Kharadi Pune with expert faculty, flexible batches, and proven NEET preparation programs."
    },
    {
      "@type": "EducationalOrganization",
      "name": "ASQUARE Academy",
      "url": "https://www.asquareclasses.com",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune/"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "9766118877",
        "contactType": "Customer Service"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is ASQUARE Kharadi suitable for beginners in Class 11?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, the 2-year integrated program is ideal for Class 11 students beginning NEET preparation at ASQUARE Kharadi, building strong fundamentals for success."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide evening or weekend batches?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, ASQUARE Academy offers flexible batch timings, including evening and weekend classes for students managing school or college schedules."
          }
        },
        {
          "@type": "Question",
          "name": "Are crash courses offered at the Kharadi branch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, intensive crash courses are available before exams for revision and mock test practice as part of our top NEET coaching classes in Kharadi Pune."
          }
        },
        {
          "@type": "Question",
          "name": "How do you support repeater students?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE’s dropper batches cover the entire NEET syllabus with frequent tests and personalized guidance for effective NEET Advanced Preparation."
          }
        },
        {
          "@type": "Question",
          "name": "Can students from Viman Nagar or Wagholi join the Kharadi branch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, many students from Viman Nagar, Wagholi, and nearby areas choose our NEET classes in Kharadi Pune for expert mentoring and quality results."
          }
        },
        {
          "@type": "Question",
          "name": "What subjects are taught in NEET classes at Kharadi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our NEET coaching in Kharadi Pune covers Physics, Chemistry, and Biology thoroughly to strengthen conceptual understanding and exam performance."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer online NEET coaching options?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, both online and classroom coaching options are available, providing flexibility for students to prepare effectively from anywhere."
          }
        },
        {
          "@type": "Question",
          "name": "Why is ASQUARE considered the best NEET coaching in Kharadi Pune?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "With experienced faculty, small batches, regular mock tests, and proven results, ASQUARE Academy stands among the best NEET coaching institutes in Kharadi Pune."
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
          "name": "NEET Coaching Classes in Pune",
          "item": "https://www.asquareclasses.com/best-neet-coaching-classes-Institute-in-pune-maharashtra/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "NEET Coaching Classes in Kharadi Pune",
          "item": "https://www.asquareclasses.com/neet-coaching-classes-institute-kharadi-pune"
        }
      ]
    }
  ]
}

        `}</script>
      </Helmet>
      <Navbar />
      <Header />
      <section className="location_hero_section mht-pimpri-hero">
        <div className="location_bgimage">
          <img src={locationBGImage} alt="" />
        </div>
        <div className="mobile_bgimage">
          <img src={MobileBGImage} alt="" />
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-9 col-md-5 col-sm-12"></div>
            <div className="col-lg-3 col-md-7 col-sm-12">
              <MobileForm />
            </div>
          </div>
        </div>
      </section>
      <section className="Location_MobileForm">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <MobileForm />
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="hero-gradient-bg py-5">
        <div className="container py-5 hero-content-wrapper">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="hero-image-box">
                <img
                  src={image1}
                  alt="ASQUARE Academy Students"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
              <span className="custom-badge-yellow mb-3 d-inline-block">
                🎓 Premier Coaching Institute
              </span>
              <h1 className="hero-title-large mb-4">
                Achieve Your NEET Goals with {" "}
                <span className="gradient-text-yellow d-inline-block">
                  ASQUARE Academy – Kharadi
                </span>
              </h1>
              <p className="fs-5 text-white mb-3 lh">
                Are you searching for the <strong> best NEET coaching classes in Kharadi, Pune? </strong> Look no further.
                 <strong> ASQUARE Academy, </strong>
                 we specialize in guiding students to medical success through expert faculty, structured programs, and personalized mentoring. Our approach blends NCERT fundamentals with exam-focused strategies to help students secure top scores.
                <strong> Best NEET Coaching Institutes in Kharadi, </strong> our courses are designed to help students master NCERT concepts, practice systematically, and achieve top ranks in NEET-UG.
             </p>
              <div className="hero-location-info d-flex align-items-start gap-3">
                <MapPin
                  size={24}
                  color="#FFCB03"
                  className="flex-shrink-0 mt-1"
                />
                <span className="text-white">
                 Students from
                  <strong>
                    {" "}
                    Kharadi, Viman Nagar, Wagholi, Mundhwa, Chandan Nagar, Magarpatta, Hadapsar, Kalyani Nagar, and Yerawada {" "}
                  </strong>
                   already trust ASQUARE Academy for their NEET preparation.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="gradient-bg-light-blue py-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-6">
              <span className="custom-badge-purple mb-3 d-inline-block">
                ⭐ Why Choose Us
              </span>
              <h2 className="section-title-large mb-4">
                <span className="text-primary">Why Choose</span> ASQUARE Academy
                Best NEET Coaching in Kharadi?
              </h2>

              {isDesktop ? (
                <Slider {...settings}>
                  {whyCFeatures.map((item, index) => (
                    <div key={index}>
                      <FeatureCard {...item} />
                    </div>
                  ))}
                </Slider>
              ) : (
                <>
                  {whyCFeatures.map((item, index) => (
                    <FeatureCard key={index} {...item} className="mb-3" />
                  ))}
                </>
              )}

              <div className="highlight-box-gradient mt-4">
                <p className="text-white fw-semibold mb-0 d-flex align-items-center gap-3 fs-5 position-relative zi">
                  <CheckCircle
                    size={24}
                    color="#FFCB03"
                    className="flex-shrink-0"
                  />
                  Our goal is to provide every aspirant with the right academic guidance, discipline, and support to achieve their NEET dream.
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="hero-image-box">
                <img
                  src={image2}
                  alt="ASQUARE Academy Students"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="position-relative py-5 bg-gradient bg-lg-of">
        {/* Decorative background circles */}
        <div className="position-absolute top-0 start-0 translate-middle bg-primary opacity-25 rounded-circle blur-circle-primary"></div>

        <div className="position-absolute bottom-0 end-0 translate-middle bg-info opacity-25 rounded-circle blur-circle-info"></div>

        {/* Main content */}
        <div className="container position-relative text-center">
          {/* Tagline */}
          <div className="d-inline-block bg-success bg-opacity-10 text-success fw-semibold px-4 py-2 rounded-pill mb-4 shadow-sm">
            🚀 Course Overview
          </div>

          {/* Title */}
          <h2 className="fw-bold text-dark display-5 mb- enroll-now">
            Comprehensive NEET Course Overview{" "}
            <span> ASQUARE Academy Kharadi</span>
          </h2>

          {/* Description */}
          <div className="mx-auto mb-5">
            <p className="lead text-secondary mb-3">
              The<strong> NEET course at ASQUARE Academy, Kharadi, </strong>
              offers complete preparation through concept-based teaching, regular testing, and doubt-clearing sessions.<br/>
              Our approach ensures every student strengthens their basics, practices consistently, and gains confidence for NEET.
            </p>

            <p className="d-flex flex-wrap justify-content-center align-items-center gap-2 text-dark">
              <MapPin className="text-primary" size={26} />
              <span>
                Students from
                <strong>
                  {" "}
                    Kharadi, Viman Nagar, Wagholi, Mundhwa, Chandan Nagar, Magarpatta, Hadapsar, Kalyani Nagar, and Yerawada {" "}
                </strong>
                attend our classes for their proximity and the academy’s proven academic record in{" "}
                <strong> NEET coaching across PCMC & Pune. </strong>
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Course Details */}
      <section className="position-relative overflow-hidden">
        <div className="row g-0">
          {/* Left Column - Yellow */}
          <div className="col-lg-6 p-5 p-lg-5 lg-b-bg">
            <h3 className="fw-bold mb-4 text-primary-emphasis fs-1">
              Course Details (NEET UG) - Top NEET Coaching Classes in Kharadi
            </h3>

            <p className="fs-5">
              <strong>NEET UG</strong> is India’s national entrance test for{" "}
              <strong>
                MBBS, BDS, BAMS, BHMS, and allied medical courses.
              </strong>
              At <strong> NEET coaching centre in Kharadi,</strong>
            should align with both academic rigor and smart exam strategy. At ASQUARE Academy, our programs are designed to build clarity, confidence, and success through consistent testing and support.
            </p>
            <p className="fs-5">
              Our structured programs and experienced faculty make ASQUARE one of the{" "}
              <strong> NEET coaching institute in Kharadi </strong>
            </p>
            <h4 className="fw-bold text-primary-emphasis mt-5 fs-3">
              Subjects Covered in NEET Classes at Kharadi
            </h4>

            <div className="mt-4">
              {subjectsCovered.map((subject, i) => (
                <SubjectCard key={i} {...subject} />
              ))}
            </div>

            <p className="fs-5">
              Each subject is taught with clarity, practical examples, and test-based evaluation to ensure top results.
            </p>
          </div>

          {/* Right Column - Blue */}
          <div className="col-lg-6 p-5 p-lg-5 text-white lg-b-bg-b">
            <h5 className="fw-bold text-warning mb-4 fs-1">
              Program Duration and Batch Options — NEET Preparation in Kharadi
            </h5>

            <div className="d-flex flex-column gap-4">
              {programDurations.map((program, i) => (
                <ProgramCard key={i} {...program} />
              ))}
            </div>

            <div className="mt-5 p-4 rounded-4 border border-warning border-opacity-50 bg-brown">
              <p className="fs-5 mb-0">
                All batches are designed for structured learning, progressive assessment, and exam readiness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="grid-bg-yellow py-5">
        <div className="container py-5">
          <div className="text-center mb-5">
            <span className="custom-badge-yellow mb-3 d-inline-block">
              ✨ Our Strengths
            </span>
            <h3 className="section-title-large">
              <span className="text-primary-orange">Key Highlights</span> of
              Best NEET Coaching in Kharadi,
            </h3>
          </div>

          <div className="row g-4">
            {gridFeatures.map((item, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <GridCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proven Results */}
      <section className="py-5 bg-white">
        <div className="container py-4">
          <div className="text-center mb-4">
            <span className="custom-badge-green mb-3 d-inline-block">
              🏆 Success Stories
            </span>
            <h4 className="section-title-large mb-4">
              ASQUARE Academy’s NEET Results – Student Success
            </h4>
          </div>
          <div className="results-box-gradient">
            <p className="fs-5 text-dark mb-3 text-center">
              At <strong> ASQUARE Academy – Kharadi  </strong>
              has consistently delivered excellent NEET results, with students earning admission to {" "}
              <strong className="text-primary">
                AIIMS, prestigious government colleges, and renowned private institutions.{" "}
              </strong>
              Our structured test system, performance reviews, and goal-oriented mentoring make ASQUARE the
              <strong> most trusted NEET coaching centers in Kharadi and Western Pune. </strong>
            </p>
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="methodology-bg-blue py-5 position-relative">
        <div className="container py-5 position-relative zi">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="custom-badge-yellow mb-3 d-inline-block">
                📚 Our Approach
              </span>
              <h4 className="section-title-large text-white mb-4">
                <span className="gradient-text-yellow d-inline-block">Our</span>{" "}
                Innovative Teaching Methodology at ASQUARE Academy
              </h4>
              <p className="fs-5 text-white mb-4 lh op">
                This 4-step methodology ensures that ASQUARE remains the {" "}
                <strong>
                  Top NEET Coaching Institute in Kharadi and PCMC Pune.
                </strong>
              </p>
              <a
                href="/"
                className="btn btn-warning btn-lg rounded-pill px-5 py-3 fw-bold"
              >
                Know More →
              </a>
            </div>

            <div className="col-lg-6">
              {methodologySteps.map((step, index) => (
                <MethodologyCard key={index} {...step} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Suspense fallback={<Loading />}>
        <Reviews />
      </Suspense>

      {/* FAQ's */}
      <section className="py-5 bg-light">
        <div className="container">
          {/* Header */}
          <div className="text-center mb-5">
            <div className="d-inline-block bg-primary bg-opacity-10 text-primary fw-bold rounded-pill px-3 py-1 mb-3">
              <BadgeQuestionMark /> Got Questions?
            </div>
            <h2 className="fw-bold text-dark">
              Top NEET Coaching Institutes in Kharadi.
              <span className="text-gradient fw-bold">(FAQs)</span>
            </h2>
          </div>

          {/* Accordion */}
          <div className="row g-4 justify-content-center">
            <div className="col-md-10">
              <FAQAccordion faqs={faqData} accordionId="neetFaq" />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="position-relative py-5 bg-gradient bg-lg-of">
        {/* Decorative background circles */}
        <div className="position-absolute top-0 start-0 translate-middle bg-primary opacity-25 rounded-circle blur-circle-primary"></div>

        <div className="position-absolute bottom-0 end-0 translate-middle bg-info opacity-25 rounded-circle blur-circle-info"></div>

        {/* Main content */}
        <div className="container position-relative text-center">
          {/* Tagline */}
          <div className="d-inline-block bg-success bg-opacity-10 text-success fw-semibold px-4 py-2 rounded-pill mb-4 shadow-sm">
            🚀 Start Your Journey
          </div>

          {/* Title */}
          <h2 className="fw-bold text-dark display-5 mb- enroll-now">
            Join <span> ASQUARE Academy – Kharadi Today </span>
          </h2>

          {/* Description */}
          <div className="mx-auto mb-5">
            <p className="lead text-secondary mb-3">
              Get started with the {" "}
              <strong> best NEET coaching in Kharadi, Pune  </strong>
             and take a step closer to your dream of becoming a doctor. With expert teachers, structured programs, and proven success, ASQUARE Academy is your partner in achieving NEET success.
             </p>

            <p className="d-flex flex-wrap justify-content-center align-items-center gap-2 text-dark">
              <MapPin className="text-primary" size={22} />
              <span>
                 Accessible from {" "}
                <strong>
                  {" "} Kharadi, Viman Nagar, Wagholi, Mundhwa, Chandan Nagar, Magarpatta, Hadapsar, Kalyani Nagar, and Yerawada.
                </strong>
              </span>
            </p>
          </div>

          {/* Subheading */}
          <h4 className="fw-bold text-primary mb-4">
            Admissions Open – Book Your Seat Now!
          </h4>

          {/* CTA Button */}
          <a
            href="/"
            className="btn btn-lg fw-semibold text-white px-5 py-3 shadow-lg btn-gradient"
          >
            Join ASQUARE Academy →
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default NEETKharadi;
