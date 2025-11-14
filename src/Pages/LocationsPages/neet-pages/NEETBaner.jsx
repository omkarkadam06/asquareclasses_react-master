import React, { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import locationBGImage from "../../../Assets/locationPageImages/neet/NEET slider PC6.jpeg";
import MobileBGImage from "../../../Assets/locationPageImages/neet/NEET slider mobile6.jpeg";
import image1 from "../../../Assets/locationPageImages/neet/NEET Page 1.jpeg";
import image2 from "../../../Assets/locationPageImages/neet/NEET Page 9.jpeg";
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

function NEETBaner() {
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
    title: "Specialized NEET Faculty",
    description:
      "Instructors with deep subject knowledge in Physics, Chemistry, and Biology, focused on results.",
  },
  {
    Icon: BookOpen,
    title: "NCERT-Rooted Learning with NEET Edge",
    description:
      "Strong foundational concepts complemented by NEET-style exercises.",
  },
  {
    Icon: Target,
    title: "Focused Small Batches",
    description:
      "Personalized coaching and quicker doubt resolution.",
  },
  {
    Icon: BarChart,
    title: "Regular Evaluations",
    description:
      "Weekly tests, monthly mocks, and performance analytics to keep you on track.",
  },
  {
    Icon: Calendar,
    title: "Flexible Delivery",
    description:
      "Classroom and online batch options to suit individual learning preferences.",
  },
  {
    Icon: Users,
    title: "Comprehensive Mentorship",
    description:
      "Guidance tailored to balance NEET prep alongside board exams.",
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
    title: "2-Year Integrated Course (Class 11 → 12)",
    desc: "Progressive learning combining fundamentals and advanced NEET readiness.",
  },
  {
    icon: Target,
    title: "1-Year Target Course (Class 12)",
    desc: "Fast-paced preparation with extensive mock test exposure.",
  },
  {
    icon: School,
    title: "Crash Course (2–3 Months)",
    desc: "Intensive strategy-focused revision with PYQs and quick drills.",
  },
  {
    icon: CalendarSync,
    title: "Repeater/Dropper Batch",
    desc: "One-year dedicated plan with personalized attention and analysis for repeat aspirants.",
  },
];

  const methodologySteps = [
  {
    Icon: Lightbulb,
    title: "Interactive, Concept-Oriented Lectures",
    description: "Engaging sessions focused on conceptual clarity and understanding.",
  },
  {
    Icon: BookOpen,
    title: "Daily Practice Papers (DPPs) and Structured Assignments",
    description: "Consistent practice to strengthen problem-solving and retention.",
  },
  {
    Icon: BarChart,
    title: "Chapter-Wise Tests and Full-Length Mocks",
    description: "Includes detailed performance analytics to measure progress effectively.",
  },
  {
    Icon: MessageCircle,
    title: "Dedicated Doubt-Clearing Sessions",
    description: "Personalized faculty interaction to resolve academic challenges promptly.",
  },
  {
    Icon: Calendar,
    title: "Regular Progress Reviews and Parent–Student Interaction",
    description: "Frequent evaluations and meetings to ensure consistent academic growth.",
  },
];

  const faqData = [
  {
    q: "Who can enroll in NEET coaching?",
    a: "Students in Class XI, Class XII, and drop-year NEET aspirants are welcome.",
  },
  {
    q: "What subjects are included?",
    a: "Full NEET syllabus: Physics, Chemistry, and Biology.",
  },
  {
    q: "Are mock test series part of the program?",
    a: "Yes—weekly assessments, chapter tests, and full-length mocks with detailed analytics.",
  },
  {
    q: "What batches are offered?",
    a: "2-year integrated, 1-year target, crash, and dropper/repeater programs.",
  },
  {
    q: "How large are class batches?",
    a: "We maintain small batches to ensure focused learning and rapid doubt resolution.",
  },
  {
    q: "Are parents updated on performance?",
    a: "Yes—through performance reports and scheduled parent-teacher meetings.",
  },
  {
    q: "Is online coaching available?",
    a: "Absolutely—both classroom and online formats are offered to cater to convenience and flexibility.",
  },
];

const gridFeatures = [
  {
    Icon: Users,
    title: "Small batch sizes for personalized learning",
    colorClass: "bg-gradient-blue",
  },
  {
    Icon: BookOpen,
    title: "Dual-format study materials (printed + digital) updated for NEET",
    colorClass: "bg-gradient-purple",
  },
  {
    Icon: Calendar,
    title: "Periodic parent-teacher meetings and progress tracking",
    colorClass: "bg-gradient-green",
  },
  {
    Icon: Award,
    title: "Workshops on time management, accuracy, and exam mindset",
    colorClass: "bg-gradient-orange",
  },
  {
    Icon: TrendingUp,
    title: "Recognized across Baner, Aundh, Balewadi, and West Pune for consistent results",
    colorClass: "bg-gradient-red",
  },
  {
    Icon: Star,
    title: "Expert NEET faculty with proven student success and mentorship excellence",
    colorClass: "bg-gradient-teal",
  },
];

  return (
    <>
      <Helmet>
        <title>
          Best NEET Coaching Classes in Baner Pune | ASQUARE Academy
        </title>
        <meta
          name="title"
          content="Best NEET Coaching Classes in Baner Pune | ASQUARE Academy"
        />
        <meta
          name="description"
          content="Join ASQUARE Academy for top NEET Coaching Classes in Baner Pune. Expert faculty, small batches, online & classroom courses, and weekly test series for success."
        />
        <meta
          name="keywords"
          content="NEET coaching classes in Baner pune Best NEET Coaching in Baner pune Top NEET Coaching Classes Baner pune NEET Advanced Preparation Baner pune NEET Classes in Baner pune Best NEET Classes in Baner pune Top NEET Classes in Baner pune"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{`
        {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-baner-pune",
  "url": "https://www.asquareclasses.com/neet-coaching-classes-institute-baner-pune",
  "name": "NEET Coaching Classes in Baner Pune | ASQUARE Academy",
  "description": "ASQUARE Academy offers the best NEET Coaching Classes in Baner Pune with expert teachers, online/offline batches, and complete syllabus coverage.",
  "publisher": {
    "@type": "Organization",
    "name": "ASQUARE Academy",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png"
    },
    "sameAs": [
      "https://www.instagram.com/asquarepune",
      "https://www.facebook.com/asquarepune/"
    ]
  },
  "mainEntity": [
    {
      "@type": "LocalBusiness",
      "name": "ASQUARE Academy - NEET Coaching Classes in Baner Pune",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "telephone": "+919766118877",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Baner",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411045",
        "addressCountry": "IN"
      },
      "priceRange": "₹₹",
      "openingHours": "Mo-Su 09:00-20:00",
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune/"
      ]
    },
    {
      "@type": "EducationalOrganization",
      "name": "ASQUARE Academy",
      "url": "https://www.asquareclasses.com/",
      "department": {
        "@type": "EducationalOccupationalProgram",
        "name": "NEET Coaching Program",
        "educationalCredentialAwarded": "NEET Preparation Certificate",
        "hasCourse": [
          {
            "@type": "Course",
            "name": "NEET 2-Year Integrated Course",
            "description": "Comprehensive 2-year integrated NEET preparation covering Physics, Chemistry, and Biology."
          },
          {
            "@type": "Course",
            "name": "1-Year Target Batch",
            "description": "Intensive NEET preparation for Class 12 and droppers."
          },
          {
            "@type": "Course",
            "name": "Crash Course",
            "description": "Short-term NEET crash course focused on revision and mock tests."
          }
        ]
      }
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
          "name": "NEET Coaching",
          "item": "https://www.asquareclasses.com/neet-coaching-classes/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "NEET Coaching Classes in Baner Pune",
          "item": "https://www.asquareclasses.com/neet-coaching-classes-institute-baner-pune"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can enroll in NEET coaching?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students in Class XI, Class XII, and drop-year NEET aspirants are welcome to join ASQUARE Academy."
          }
        },
        {
          "@type": "Question",
          "name": "What subjects are included?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The NEET course covers Physics, Chemistry, and Biology as per the official NEET syllabus."
          }
        },
        {
          "@type": "Question",
          "name": "Are mock test series part of the program?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, weekly assessments, chapter tests, and full-length mock exams with detailed analytics are included."
          }
        },
        {
          "@type": "Question",
          "name": "What batches are offered?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE Academy offers 2-year integrated, 1-year target, crash, and dropper/repeater programs."
          }
        },
        {
          "@type": "Question",
          "name": "How large are class batches?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We maintain small batches to ensure personal attention and faster doubt resolution."
          }
        },
        {
          "@type": "Question",
          "name": "Are parents updated on performance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, parents receive regular performance reports and are invited to parent-teacher meetings."
          }
        },
        {
          "@type": "Question",
          "name": "Is online coaching available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, ASQUARE Academy provides both classroom and online NEET coaching options for convenience."
          }
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
                Excel in NEET with  {" "}
                <span className="gradient-text-yellow d-inline-block">
                  ASQUARE Academy – Baner
                </span>
              </h1>
              <p className="fs-5 text-white mb-3 lh">
                Searching for the <strong> top NEET coaching classes in Baner, Pune? </strong> Look no further.
                 <strong> ASQUARE Academy, </strong>
                 brings you expert-led NEET UG preparation, combining conceptual clarity, systematic practice, and dedicated mentorship.
                <strong> Best NEET Coaching Institutes in Baner, </strong> our courses are designed to help students master NCERT concepts, practice systematically, and achieve top ranks in NEET-UG.
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
                    Baner, Aundh, Pashan, Balewadi, Wakad, Pimple Saudagar, and Pune University Road {" "}
                  </strong>
                   consistently rely on us for trusted guidance and stellar outcomes.
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
                Best NEET Coaching in Baner?
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
            <span> ASQUARE Academy Baner</span>
          </h2>

          {/* Description */}
          <div className="mx-auto mb-5">
            <p className="lead text-secondary mb-3">
              The<strong> NEET course at ASQUARE Academy, Baner, </strong>
              offers complete preparation through concept-based teaching, regular testing, and doubt-clearing sessions.<br/>
              Our approach ensures every student strengthens their basics, practices consistently, and gains confidence for NEET.
            </p>

            <p className="d-flex flex-wrap justify-content-center align-items-center gap-2 text-dark">
              <MapPin className="text-primary" size={26} />
              <span>
                Students from
                <strong>
                  {" "}
                   Baner, Aundh, Pashan, Balewadi, Wakad, Pimple Saudagar, and Pune University Road {" "}
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
              Course Details (NEET UG) - Top NEET Coaching Classes in Baner
            </h3>

            <p className="fs-5">
              <strong>NEET UG</strong> is India’s national entrance test for{" "}
              <strong>
                MBBS, BDS, BAMS, BHMS, and allied medical courses.
              </strong>
              At <strong> NEET coaching centre in Baner,</strong>
            should align with both academic rigor and smart exam strategy. At ASQUARE Academy, our programs are designed to build clarity, confidence, and success through consistent testing and support.
            </p>
            <p className="fs-5">
              Our structured programs and experienced faculty make ASQUARE one of the{" "}
              <strong> NEET coaching institute in Baner </strong>
            </p>
            <h4 className="fw-bold text-primary-emphasis mt-5 fs-3">
              Subjects Covered in NEET Classes at Baner
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
              Program Duration and Batch Options — NEET Preparation in Baner
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
              Best NEET Coaching in Baner,
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
              At <strong> ASQUARE Academy – Baner  </strong>
              has consistently delivered excellent NEET results, with students earning admission to {" "}
              <strong className="text-primary">
                AIIMS, prestigious government colleges, and renowned private institutions.{" "}
              </strong>
              Our structured test system, performance reviews, and goal-oriented mentoring make ASQUARE the
              <strong> most trusted NEET coaching centers in Baner and Western Pune. </strong>
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
                  Top NEET Coaching Institute in Baner and PCMC Pune.
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
              Top NEET Coaching Institutes in Baner.
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
            Enroll at <span> ASQUARE Academy – Baner Today </span>
          </h2>

          {/* Description */}
          <div className="mx-auto mb-5">
            <p className="lead text-secondary mb-3">
              Join the {" "}
              <strong> best NEET coaching in Baner, Pune  </strong>
             with ASQUARE Academy. With exceptional faculty, strategic instruction, and proven success, we’re your partner in acing the NEET exam.
             </p>

            <p className="d-flex flex-wrap justify-content-center align-items-center gap-2 text-dark">
              <MapPin className="text-primary" size={22} />
              <span>
                 Conveniently accessible for students from {" "}
                <strong>
                  {" "}Baner, Aundh, Pashan, Balewadi, Wakad, Pimple Saudagar, Pune University Road, and the wider Western Pune area.
                </strong>
              </span>
            </p>
          </div>

          {/* Subheading */}
          <h4 className="fw-bold text-primary mb-4">
            Limited seats available—Enroll Now!
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

export default NEETBaner;
