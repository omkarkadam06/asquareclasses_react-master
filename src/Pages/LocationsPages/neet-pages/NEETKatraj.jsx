import React, { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import locationBGImage from "../../../Assets/locationPageImages/neet/NEET slider PC3.jpeg";
import MobileBGImage from "../../../Assets/locationPageImages/neet/NEET slider mobile3.jpeg";
import image1 from "../../../Assets/locationPageImages/neet/NEET Page 22.jpeg";
import image2 from "../../../Assets/locationPageImages/neet/NEET Page 1.jpeg";
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
  Star,
  TrendingUp
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

function NEETKatraj() {
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
    title: "Expert Faculty",
    description: "Specialists in Physics, Chemistry, and Biology with proven NEET coaching experience.",
  },
  {
    Icon: BookOpen,
    title: "NCERT-Rooted + NEET-Ready Curriculum",
    description: "Build strong fundamentals while mastering competitive-level problem-solving.",
  },
  {
    Icon: Target,
    title: "Small Batch Strength",
    description: "Focused learning with quick doubt-solving.",
  },
  {
    Icon: BarChart,
    title: "Continuous Assessment",
    description: "Weekly practice tests, chapter assessments, and full-length mock exams.",
  },
  {
    Icon: Calendar,
    title: "Flexible Modes",
    description: "Classroom and online learning formats available.",
  },
  {
    Icon: Users,
    title: "Holistic Mentoring",
    description: "Helping students balance NEET preparation with board exam success.",
  },
];

  const subjectsCovered = [
  {
    title: "Physics",
    desc: "Core conceptual clarity with problem-solving drills.",
  },
  {
    title: "Chemistry",
    desc: "Detailed coverage of Physical, Organic, and Inorganic Chemistry.",
  },
  {
    title: "Biology",
    desc: "NCERT-based syllabus with diagrams, scoring chapters, and applied examples.",
  },
];

  const programDurations = [
  {
    icon: Clock,
    title: "2-Year Integrated Course (Class 11 → 12)",
    desc: "Build a strong academic foundation and NEET readiness over two years.",
  },
  {
    icon: Target,
    title: "1-Year Target Course (Class 12)",
    desc: "Fast-track prep with extensive tests and revisions.",
  },
  {
    icon: School,
    title: "Crash Course (2–3 Months)",
    desc: "Last-phase training with PYQs and strategy sessions.",
  },
  {
    icon: CalendarSync,
    title: "Dropper/Repeater Batch",
    desc: "Tailored one-year course for repeat aspirants with complete test coverage.",
  },
];

  const methodologySteps = [
  {
    Icon: Lightbulb,
    title: "Concept-based interactive classroom lectures",
    description: "Engaging lessons designed to enhance conceptual understanding.",
  },
  {
    Icon: BookOpen,
    title: "Daily Practice Papers (DPPs) and structured assignments",
    description: "Regular practice to strengthen concepts and problem-solving skills.",
  },
  {
    Icon: BarChart,
    title: "Frequent chapter tests and full-length mocks with detailed analysis",
    description: "Regular assessments and analytics to measure and improve performance.",
  },
  {
    Icon: MessageCircle,
    title: "One-on-one doubt resolution sessions with faculty",
    description: "Personalized guidance from subject experts for effective doubt clearance.",
  },
  {
    Icon: Calendar,
    title: "Parent-teacher progress reviews and mentoring",
    description: "Regular meetings to discuss performance and guide continuous improvement.",
  },
];

  const faqData = [
  {
    q: "Who can join NEET coaching at ASQUARE Katraj?",
    a: "Class XI, Class XII, and drop-year aspirants can join our NEET coaching classes in Katraj Pune. ASQUARE Academy offers structured programs that make us the best NEET coaching in Katraj Pune for all levels of learners.",
  },
  {
    q: "What subjects are covered in the NEET course?",
    a: "Our top NEET classes in Katraj Pune cover the complete NEET syllabus, including Physics, Chemistry, and Biology. The course ensures strong fundamentals and thorough NEET Advanced Preparation in Katraj Pune.",
  },
  {
    q: "Are mock tests provided during the course?",
    a: "Yes, students get weekly assessments, chapter-wise tests, and full-length NEET-style mocks at our best NEET coaching in Katraj Pune, helping them master exam strategies and improve scores.",
  },
  {
    q: "What batches are available at ASQUARE Katraj?",
    a: "We offer 2-year, 1-year, crash, and dropper/repeater batches under our top NEET coaching classes in Katraj Pune, catering to different preparation stages and student needs.",
  },
  {
    q: "How large are the student batches?",
    a: "At ASQUARE Academy’s NEET classes in Katraj Pune, we maintain small batch sizes for focused learning and personal attention, making us one of the best NEET classes in Katraj Pune.",
  },
  {
    q: "Do parents receive performance updates?",
    a: "Yes, through detailed reports and PTMs, parents stay informed about progress at our NEET coaching classes in Katraj Pune, ensuring transparency and consistent growth.",
  },
  {
    q: "Is online NEET coaching available at ASQUARE?",
    a: "Yes, our best NEET coaching in Katraj Pune offers both classroom and online options, giving students flexibility to study from anywhere with expert guidance.",
  },
  {
    q: "Why choose ASQUARE Academy for NEET coaching in Katraj?",
    a: "ASQUARE Academy is among the top NEET coaching classes in Katraj Pune, known for expert faculty, advanced teaching methods, and proven NEET Advanced Preparation in Katraj Pune.",
  },
];

const gridFeatures = [
  {
    Icon: Users,
    title: "Small batches for personalized guidance",
    colorClass: "bg-gradient-blue",
  },
  {
    Icon: BookOpen,
    title: "Updated NEET-oriented study material (print + digital)",
    colorClass: "bg-gradient-purple",
  },
  {
    Icon: Calendar,
    title: "Parent–teacher meetings with structured progress reports",
    colorClass: "bg-gradient-green",
  },
  {
    Icon: Award,
    title: "Workshops on exam strategy, accuracy, and time management",
    colorClass: "bg-gradient-orange",
  },
  {
    Icon: Star,
    title: "Expert NEET faculty with proven student success",
    colorClass: "bg-gradient-teal",
  },
  {
    Icon: TrendingUp,
    title: "Recognized among the top NEET coaching centres in Katraj, Dhankawadi, Ambegaon, and South Pune",
    colorClass: "bg-gradient-red",
  },
];

  return (
    <>
      <Helmet>
        <title>
          Best NEET Coaching Classes in Katraj Pune | ASQUARE Academy
        </title>
        <meta
          name="title"
          content="Best NEET Coaching Classes in Katraj Pune | ASQUARE Academy"
        />
        <meta
          name="description"
          content="Join ASQUARE Academy for the best NEET coaching classes in Katraj Pune. Small batches, expert faculty, mock tests & online/offline NEET preparation."
        />
        <meta
          name="keywords"
          content="NEET coaching classes in katraj pune Best NEET Coaching in katraj pune Top NEET Coaching Classes katraj pune NEET Advanced Preparation katraj pune NEET Classes in katraj pune Best NEET Classes in katraj pune Top NEET Classes in katraj pune"
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
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-katraj-pune#localbusiness",
      "name": "ASQUARE Academy - NEET Coaching Classes in Katraj Pune",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "url": "https://www.asquareclasses.com/neet-coaching-classes-institute-katraj-pune",
      "telephone": "+91-9766118877",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Katraj",
        "addressRegion": "Pune",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune/"
      ],
      "openingHours": "Mo-Su 08:00-20:00",
      "description": "ASQUARE Academy offers the best NEET coaching classes in Katraj Pune with small batches, expert faculty, and mock tests for NEET success."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-katraj-pune#webpage",
      "url": "https://www.asquareclasses.com/neet-coaching-classes-institute-katraj-pune",
      "name": "NEET Coaching Classes in Katraj Pune | ASQUARE Academy",
      "description": "Join ASQUARE Academy for the best NEET coaching classes in Katraj Pune. Get mock tests, small batches, and personalized guidance for NEET preparation.",
      "publisher": {
        "@id": "https://www.asquareclasses.com/#organization"
      },
      "breadcrumb": {
        "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-katraj-pune#breadcrumb"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-katraj-pune#breadcrumb",
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
          "name": "Katraj Pune"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-katraj-pune#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can join NEET coaching at ASQUARE Katraj?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Class XI, XII, and drop-year aspirants can join NEET coaching classes in Katraj Pune at ASQUARE Academy, designed for all learner levels."
          }
        },
        {
          "@type": "Question",
          "name": "What subjects are covered in the NEET course?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The course covers Physics, Chemistry, and Biology comprehensively for strong fundamentals and advanced NEET preparation."
          }
        },
        {
          "@type": "Question",
          "name": "Are mock tests provided during the course?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, weekly assessments, chapter tests, and full-length NEET-style mocks help students strengthen exam strategies and performance."
          }
        },
        {
          "@type": "Question",
          "name": "What batches are available at ASQUARE Katraj?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer 2-year, 1-year, crash, and dropper/repeater batches for different preparation levels and timelines."
          }
        },
        {
          "@type": "Question",
          "name": "How large are the student batches?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Small batches ensure focused learning, personal attention, and effective doubt-solving sessions for every student."
          }
        },
        {
          "@type": "Question",
          "name": "Do parents receive performance updates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, parents receive regular progress reports and PTM updates for transparency and student monitoring."
          }
        },
        {
          "@type": "Question",
          "name": "Is online NEET coaching available at ASQUARE?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, both online and offline NEET coaching options are available for convenience and flexibility."
          }
        },
        {
          "@type": "Question",
          "name": "Why choose ASQUARE Academy for NEET coaching in Katraj?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE Academy is among the top NEET coaching classes in Katraj Pune, known for expert faculty, proven results, and advanced learning methods."
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
                Crack NEET with {" "}
                <span className="gradient-text-yellow d-inline-block">
                  ASQUARE Academy – Katraj Branch
                </span>
              </h1>
              <p className="fs-5 text-white mb-3 lh">
                Looking for the <strong> best NEET coaching in Katraj, Pune? </strong> At
                 <strong> ASQUARE Academy, </strong>
                 provides comprehensive NEET UG preparation through expert faculty, structured programs, and personalized mentoring. 
                <strong> Best NEET Coaching Institutes in Katraj, </strong> our courses are designed to help students master NCERT concepts, practice systematically, and achieve top ranks in NEET-UG.
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
                    Katraj, Dhankawadi, Ambegaon, Kondhwa, Bibwewadi, Balaji Nagar, Narhe, and Bharati Vidyapeeth {" "}
                  </strong>
                    trust us for effective NEET guidance and consistent results.
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
                Best NEET Coaching in Katraj?
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
            <span> ASQUARE Academy Katraj</span>
          </h2>

          {/* Description */}
          <div className="mx-auto mb-5">
            <p className="lead text-secondary mb-3">
              The<strong> NEET course at ASQUARE Academy, Katraj, </strong>
              offers complete preparation through concept-based teaching, regular testing, and doubt-clearing sessions.<br/>
              Our approach ensures every student strengthens their basics, practices consistently, and gains confidence for NEET.
            </p>

            <p className="d-flex flex-wrap justify-content-center align-items-center gap-2 text-dark">
              <MapPin className="text-primary" size={26} />
              <span>
                Students from
                <strong>
                  {" "}
                    Katraj, Dhankawadi, Ambegaon, Kondhwa, Bibwewadi, Balaji Nagar, Narhe, and Bharati Vidyapeeth {" "}
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
              Course Details (NEET UG) - Top NEET Coaching Classes in Katraj
            </h3>

            <p className="fs-5">
              <strong>NEET UG</strong> is India’s national entrance test for{" "}
              <strong>
               MBBS, BDS, BAMS, BHMS, and allied fields.
              </strong>
              At <strong> NEET coaching centre in Katraj,</strong>
            our structured program combines clarity of concepts, extensive practice, and smart strategy to help students secure top ranks.
            </p>
            <p className="fs-5">
              Our structured programs and experienced faculty make ASQUARE one of the{" "}
              <strong> NEET coaching institute in Katraj </strong>
            </p>
            <h4 className="fw-bold text-primary-emphasis mt-5 fs-3">
              Subjects Covered in NEET Classes at Katraj
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
              Program Duration and Batch Options — NEET Preparation in Katraj
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
              Best NEET Coaching in Katraj,
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
              At <strong> ASQUARE Academy – Katraj  </strong>
              has consistently delivered excellent NEET results, with students earning admission to {" "}
              <strong className="text-primary">
                AIIMS, state-run government medical colleges, and reputed private institutions. {" "}
              </strong>
              Our structured test system, performance reviews, and goal-oriented mentoring make ASQUARE the
              <strong> leading NEET institutes in Pune. </strong>
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
                  Top NEET Coaching Institute in Katraj and PCMC Pune.
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
              Top NEET Coaching Institutes in Katraj.
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
            Enroll <span> ASQUARE Academy – Katraj Today </span>
          </h2>

          {/* Description */}
          <div className="mx-auto mb-5">
            <p className="lead text-secondary mb-3">
              Start your NEET journey with the {" "}
              <strong> best NEET coaching in Katraj, Pune  </strong>
             With experienced faculty, a structured curriculum, and proven outcomes, ASQUARE Academy is your trusted partner for medical entrance success.
             </p>

            <p className="d-flex flex-wrap justify-content-center align-items-center gap-2 text-dark">
              <MapPin className="text-primary" size={22} />
              <span>
                 Accessible from {" "}
                <strong>
                  {" "} Katraj, Dhankawadi, Ambegaon, Kondhwa, Bibwewadi, Balaji Nagar, Narhe, and Bharati Vidyapeeth area.
                </strong>
              </span>
            </p>
          </div>

          {/* Subheading */}
          <h4 className="fw-bold text-primary mb-4">
            Admissions Open — Enroll Now!
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

export default NEETKatraj;
