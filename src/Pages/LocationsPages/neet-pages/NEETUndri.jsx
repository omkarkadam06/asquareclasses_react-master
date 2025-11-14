import React, { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import locationBGImage from "../../../Assets/locationPageImages/neet/NEET slider PC4.jpeg";
import MobileBGImage from "../../../Assets/locationPageImages/neet/NEET slider mobile4.jpeg";
import image1 from "../../../Assets/locationPageImages/neet/NEET Page 21.jpeg";
import image2 from "../../../Assets/locationPageImages/neet/NEET Page 11.jpeg";
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

function NEETUndri() {
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
    title: "Dedicated Subject Experts",
    description:
      "Faculty for Physics, Chemistry, and Biology with years of NEET teaching experience.",
  },
  {
    Icon: BookOpen,
    title: "Structured Curriculum",
    description:
      "NCERT-based learning blended with NEET-level practice.",
  },
  {
    Icon: Target,
    title: "Small Batch Advantage",
    description:
      "Focused attention and faster doubt resolution.",
  },
  {
    Icon: BarChart,
    title: "Testing & Evaluation",
    description:
      "Weekly tests, mocks, and performance reports.",
  },
  {
    Icon: Calendar,
    title: "Flexible Learning",
    description:
      "Classroom and online batches available.",
  },
  {
    Icon: Users,
    title: "Balanced Preparation",
    description:
      "Support for both school boards and NEET exam success.",
  },
];

  const subjectsCovered = [
  {
    title: "Physics",
    desc: "Strong fundamentals reinforced through methodical practice.",
  },
  {
    title: "Chemistry",
    desc: "Comprehensive coverage across Physical, Organic, and Inorganic Chemistry with NEET-specific depth.",
  },
  {
    title: "Biology",
    desc: "NCERT-aligned content delivered with diagrammatic clarity and high-yield topic focus.",
  },
];

  const programDurations = [
  {
    icon: Clock,
    title: "2-Year Integrated Program (Class 11 → 12)",
    desc: "Build a strong foundation and prepare step-by-step for NEET.",
  },
  {
    icon: Target,
    title: "1-Year Target Course (Class 12)",
    desc: "Comprehensive coverage with intensive testing.",
  },
  {
    icon: CalendarSync,
    title: "Repeater/Dropper Batch",
    desc: "A one-year focused program with detailed practice and mentoring.",
  },
  {
    icon: School,
    title: "Crash Course (2–3 Months)",
    desc: "Final preparation with PYQs, revision, and strategy sessions.",
  },
];

  const methodologySteps = [
  {
    Icon: Lightbulb,
    title: "Concept-Driven Interactive Sessions",
    description: "Engaging lectures designed for better conceptual clarity and understanding.",
  },
  {
    Icon: BookOpen,
    title: "Daily Practice & Assignments",
    description: "Daily Practice Papers (DPPs) and assignments for consistent practice and reinforcement.",
  },
  {
    Icon: BarChart,
    title: "Regular Testing & Evaluation",
    description: "Unit tests and full-length mock exams to evaluate progress and readiness.",
  },
  {
    Icon: MessageCircle,
    title: "Doubt-Clearing Support",
    description: "Dedicated sessions with faculty for one-on-one doubt resolution.",
  },
  {
    Icon: Calendar,
    title: "Parent–Teacher Review Meetings",
    description: "Regular progress reviews to keep students and parents aligned on performance.",
  },
];

  const faqData = [
  {
    q: "Do you provide foundation-level coaching for Class 11 students?",
    a: "Yes, our 2-year integrated program is perfect for Class 11 students looking to begin early NEET preparation. It builds strong fundamentals through the best NEET coaching in Undri Pune.",
  },
  {
    q: "Can students from Mohammedwadi or Pisoli join the Undri branch?",
    a: "Absolutely. Many students from Mohammedwadi, Pisoli, and nearby areas enroll in our NEET coaching classes in Undri Pune for quality guidance and results.",
  },
  {
    q: "Are crash courses available before the NEET exam?",
    a: "Yes, we offer intensive crash courses focused on quick revision, PYQs, and full-length tests to enhance NEET Advanced Preparation in Undri Pune.",
  },
  {
    q: "How do you track student performance?",
    a: "Performance is monitored through weekly tests, mock exams, and detailed progress reports shared with parents at our top NEET coaching classes in Undri Pune.",
  },
  {
    q: "Do you offer online NEET coaching options?",
    a: "Yes, students can choose between classroom and online modes, making us one of the best NEET classes in Undri Pune for flexible learning.",
  },
  {
    q: "What subjects are covered in the NEET coaching program?",
    a: "Our NEET classes in Undri Pune cover Physics, Chemistry, and Biology with a focus on conceptual clarity and problem-solving skills.",
  },
  {
    q: "What makes ASQUARE Academy the top NEET coaching in Undri Pune?",
    a: "Our expert faculty, small batches, and result-oriented teaching methods make ASQUARE Academy one of the top NEET coaching classes in Undri Pune.",
  },
  {
    q: "Do you provide doubt-solving sessions for students?",
    a: "Yes, regular doubt-clearing sessions and one-on-one mentorship ensure that every student receives personalized attention at our best NEET classes in Undri Pune.",
  },
];

const gridFeatures = [
  {
    Icon: Users,
    title: "Small batch sizes for personalized mentoring",
    colorClass: "bg-gradient-blue",
  },
  {
    Icon: BookOpen,
    title: "Updated NEET study materials (digital + print)",
    colorClass: "bg-gradient-purple",
  },
  {
    Icon: Calendar,
    title: "Regular PTMs and progress updates",
    colorClass: "bg-gradient-green",
  },
  {
    Icon: Award,
    title: "Workshops on exam temperament, time management & accuracy",
    colorClass: "bg-gradient-orange",
  },
  {
    Icon: TrendingUp,
    title: "Trusted by students from Undri, NIBM Road, Mohammedwadi, Pisoli, Wanowrie, and Salunke Vihar",
    colorClass: "bg-gradient-red",
  },
  {
    Icon: Star,
    title: "Expert NEET faculty with a proven track record of student success",
    colorClass: "bg-gradient-teal",
  },
];

  return (
    <>
      <Helmet>
        <title>
          Best NEET Coaching Classes in Undri Pune | ASQUARE Academy
        </title>
        <meta
          name="title"
          content="Best NEET Coaching Classes in Undri Pune | ASQUARE Academy"
        />
        <meta
          name="description"
          content="Join ASQUARE Academy for top NEET coaching classes in Undri Pune. Expert faculty, small batches, mock tests & online/offline courses for NEET success."
        />
        <meta
          name="keywords"
          content="NEET coaching classes in undri pune Best NEET Coaching in undri pune Top NEET Coaching Classes undri pune NEET Advanced Preparation undri pune NEET Classes in undri pune Best NEET Classes in undri pune Top NEET Classes in undri pune"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{`
        {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": "https://www.asquareclasses.com/#organization",
      "name": "ASQUARE Academy",
      "url": "https://www.asquareclasses.com/",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune/"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9766118877",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": "English"
      }
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-undri-pune#localbusiness",
      "name": "ASQUARE Academy - NEET Coaching Classes in Undri Pune",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "url": "https://www.asquareclasses.com/neet-coaching-classes-institute-undri-pune",
      "telephone": "+91-9766118877",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Undri",
        "addressRegion": "Pune",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune/"
      ],
      "openingHours": "Mo-Su 08:00-20:00",
      "description": "ASQUARE Academy offers the best NEET coaching classes in Undri Pune with expert mentors, mock tests, crash courses, and flexible online learning."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-undri-pune#webpage",
      "url": "https://www.asquareclasses.com/neet-coaching-classes-institute-undri-pune",
      "name": "NEET Coaching Classes in Undri Pune | ASQUARE Academy",
      "description": "Join ASQUARE Academy for top NEET coaching classes in Undri Pune. Get expert faculty, mock tests, crash courses, and online/offline learning options.",
      "publisher": {
        "@id": "https://www.asquareclasses.com/#organization"
      },
      "breadcrumb": {
        "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-undri-pune#breadcrumb"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-undri-pune#breadcrumb",
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
          "item": "https://www.asquareclasses.com/neet-coaching-classes-institute-in-pune-maharashtra/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Undri Pune"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-undri-pune#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you provide foundation-level coaching for Class 11 students?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, our 2-year integrated program is ideal for Class 11 students beginning early NEET preparation, covering all subjects thoroughly."
          }
        },
        {
          "@type": "Question",
          "name": "Can students from Mohammedwadi or Pisoli join the Undri branch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, students from Mohammedwadi, Pisoli, and nearby areas join our NEET coaching in Undri Pune for quality preparation and results."
          }
        },
        {
          "@type": "Question",
          "name": "Are crash courses available before the NEET exam?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, ASQUARE offers focused NEET crash courses covering PYQs, revisions, and mock tests to enhance exam readiness."
          }
        },
        {
          "@type": "Question",
          "name": "How do you track student performance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Performance is tracked through weekly tests, full-length mocks, and detailed progress reports shared with parents."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer online NEET coaching options?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, students can choose between classroom and online coaching modes for flexible NEET preparation."
          }
        },
        {
          "@type": "Question",
          "name": "What subjects are covered in the NEET coaching program?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our NEET program covers Physics, Chemistry, and Biology with a strong focus on conceptual understanding and problem-solving."
          }
        },
        {
          "@type": "Question",
          "name": "What makes ASQUARE Academy the top NEET coaching in Undri Pune?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Expert faculty, small batches, regular mock tests, and a result-driven approach make ASQUARE Academy a top NEET institute in Undri Pune."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide doubt-solving sessions for students?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, personalized doubt-clearing sessions and one-on-one mentorship ensure students overcome challenges effectively."
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
                Crack NEET with Expert Guidance at  {" "}
                <span className="gradient-text-yellow d-inline-block">
                 ASQUARE Academy – Undri
                </span>
              </h1>
              <p className="fs-5 text-white mb-3 lh">
                If you’re looking for the <strong> best NEET coaching in Undri, Pune, </strong> At
                 <strong> ASQUARE Academy, </strong>
                is your trusted choice. Our NEET programs are designed to help students strengthen their concepts, sharpen exam strategies, and stay ahead of the competition.
                <strong> Best NEET Coaching Institutes in Undri, </strong> our courses are designed to help students master NCERT concepts, practice systematically, and achieve top ranks in NEET-UG.
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
                    Undri, NIBM Road, Mohammedwadi, Pisoli, Kondhwa, Wanowrie, Hadapsar, Salunke Vihar, and Handewadi  {" "}
                  </strong>
                   already rely on ASQUARE Academy for quality medical entrance coaching.
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
                Best NEET Coaching in Undri?
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
            <span> ASQUARE Academy Undri</span>
          </h2>

          {/* Description */}
          <div className="mx-auto mb-5">
            <p className="lead text-secondary mb-3">
              The<strong> NEET course at ASQUARE Academy, Undri, </strong>
              offers complete preparation through concept-based teaching, regular testing, and doubt-clearing sessions.<br/>
              Our approach ensures every student strengthens their basics, practices consistently, and gains confidence for NEET.
            </p>

            <p className="d-flex flex-wrap justify-content-center align-items-center gap-2 text-dark">
              <MapPin className="text-primary" size={26} />
              <span>
                Students from
                <strong>
                  {" "}
                   Undri, NIBM Road, Mohammedwadi, Pisoli, Kondhwa, Wanowrie, Hadapsar, Salunke Vihar, and Handewadi  {" "}
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
              Course Details (NEET UG) - Top NEET Coaching Classes in Undri
            </h3>

            <p className="fs-5">
              <strong>NEET UG</strong> is India’s national entrance test for{" "}
              <strong>
                MBBS, BDS, BAMS, and BHMS and other allied medical courses.
              </strong>
              At <strong> NEET coaching centre in Undri,</strong>
            should align with both academic rigor and smart exam strategy. At ASQUARE Academy, our programs are designed to build clarity, confidence, and success through consistent testing and support.
            </p>
            <p className="fs-5">
              Our structured programs and experienced faculty make ASQUARE one of the{" "}
              <strong> Top NEET Coaching Institutes in Undri Pune. </strong>
            </p>
            <h4 className="fw-bold text-primary-emphasis mt-5 fs-3">
              Subjects Covered in NEET Classes at Undri
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
              Program Duration and Batch Options — NEET Preparation in Undri
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
              Best NEET Coaching in Undri,
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
              At <strong> ASQUARE Academy – Undri  </strong>
              has consistently delivered excellent NEET results, with students earning admission to {" "}
              <strong className="text-primary">
                AIIMS, government medical colleges, and top private institutions.{" "}
              </strong>
              Our structured test system, performance reviews, and goal-oriented mentoring make ASQUARE the
              <strong> premier NEET coaching institutes in Undri </strong>
            </p>
            {/* <div className="d-flex align-items-center justify-content-center gap-2 text-primary">
              <CheckCircle size={24} />
              <p className="fs-5 fw-semibold mb-0">
                Our unique combination of mentorship, structured learning, and
                regular testing makes us one of the
                <strong>
                  {" "}
                  Top NEET Coaching Centre in Alandi Pune.
                </strong>
              </p>
            </div> */}
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
                  Top NEET Coaching Institute in Undri and PCMC Pune.
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
              Top NEET Coaching Institutes in Undri.
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
            Enroll <span> ASQUARE Academy – Undri Today </span>
          </h2>

          {/* Description */}
          <div className="mx-auto mb-5">
            <p className="lead text-secondary mb-3">
              Step closer to your dream medical college with the{" "}
              <strong> best NEET coaching in Undri, Pune.  </strong>
             With experienced mentors, structured study plans, and proven results, ASQUARE Academy is your trusted partner for NEET success.
             </p>

            <p className="d-flex flex-wrap justify-content-center align-items-center gap-2 text-dark">
              <MapPin className="text-primary" size={22} />
              <span>
                 Accessible from {" "}
                <strong>
                  {" "}Undri, NIBM Road, Mohammedwadi, Pisoli, Kondhwa, Wanowrie, Hadapsar, Salunke Vihar, and Handewadi.
                </strong>
              </span>
            </p>
          </div>

          {/* Subheading */}
          <h4 className="fw-bold text-primary mb-4">
            Admissions Open – Limited Seats Available!
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

export default NEETUndri;
