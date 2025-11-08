import React, { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import locationBGImage from "../../../Assets/locationPageImages/neet/NEET slider PC2.jpeg";
import MobileBGImage from "../../../Assets/locationPageImages/neet/NEET slider mobile2.jpeg";
import image1 from "../../../Assets/locationPageImages/neet/NEET Page 21.jpeg";
import image2 from "../../../Assets/locationPageImages/neet/NEET Page 22.jpeg";
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
  TrendingUp,
  Users,
  School,
  CalendarSync,
  ChartSpline,
  BadgeQuestionMark,
  Award,
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

function NEETLohegaon() {
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
      description:
        "Specialized instructors for Physics, Chemistry, and Biology.",
    },
    {
      Icon: BookOpen,
      title: "Conceptual Clarity",
      description:
        "NCERT-based foundation with attention to advanced NEET-level queries.",
    },
    {
      Icon: Target,
      title: "Small Batches",
      description: "Maximum individual attention and faster doubt resolution.",
    },
    {
      Icon: BarChart,
      title: "Frequent Evaluations",
      description:
        "Weekly quizzes, mock exams, and detailed performance reviews.",
    },
    {
      Icon: Calendar,
      title: "Flexible Modes",
      description: "Accessible via both classroom and online learning.",
    },
    {
      Icon: School,
      title: "Dedicated Mentorship",
      description: "Guidance across NEET preparation and board exam alignment.",
    },
  ];

  const subjectsCovered = [
    {
      title: "Physics",
      desc: "Strong conceptual focus and problem-solving drills.",
    },
    {
      title: "Chemistry",
      desc: "Comprehensive coverage of Inorganic, Organic, and Physical Chemistry.",
    },
    {
      title: "Biology",
      desc: "Line-by-line NCERT coverage, exam-focused diagrams, and high-yield topics.",
    },
  ];

  const programDurations = [
    {
      icon: Clock,
      title: "2-Year Integrated Course (Class 11–12):",
      desc: "Sustains long-term preparation with concept building and NEET + board exam integration.",
    },
    {
      icon: Target,
      title: "1-Year Target Course (Class 12):",
      desc: "Condensed program featuring Class 11 revision, Class 12 topics, and NEET-style mocks.",
    },
    {
      icon: CalendarSync,
      title: "Dropper / Repeater Batch:",
      desc: "Focused preparation for repeat aspirants, featuring error correction, doubt resolution, and full mock series.",
    },
    {
      icon: School,
      title: "Crash Course:",
      desc: "Intensive final-phase coaching with PYQs, formula recaps, and exam readiness strategy.",
    },
  ];

  const methodologySteps = [
    {
      Icon: Lightbulb,
      title: "Interactive Learning",
      description: "Classroom lectures with active concept reinforcement.",
    },
    {
      Icon: BookOpen,
      title: "Daily Practice",
      description: "Assignments, DPPs, and quizzes for self-evaluation.",
    },
    {
      Icon: BarChart,
      title: "Mock Assessments",
      description: "Regular tests for tracking and improving performance.",
    },
    {
      Icon: MessageCircle,
      title: "Revision Strategy",
      description:
        "Targeted chapter-wise and final-session cram strategy meetings.",
    },
  ];

  const faqData = [
    {
      q: "Who is eligible for NEET coaching at ASQUARE Academy Lohegaon Pune?",
      a: "Students from Classes XI, XII, and repeaters aiming for NEET-UG can enroll. ASQUARE Academy offers structured programs designed for NEET advanced preparation in Lohegaon Pune.",
    },
    {
      q: "What subjects are taught in NEET coaching classes in Lohegaon Pune?",
      a: "Our NEET courses cover Physics, Chemistry, and Biology in detail, following the latest NEET syllabus with concept-based learning and regular practice sessions.",
    },
    {
      q: "Are crash courses available at ASQUARE Academy Lohegaon?",
      a: "Yes, we offer short-term crash courses focused on rapid revision, mock exams, and time management to boost final NEET performance.",
    },
    {
      q: "Do you provide a dropper batch for NEET aspirants?",
      a: "Yes, ASQUARE Academy runs a dedicated dropper program that strengthens conceptual understanding and helps repeaters achieve top NEET scores in Lohegaon Pune.",
    },
    {
      q: "Are online NEET classes available in Lohegaon Pune?",
      a: "Yes, students can choose from both classroom and online learning modes for flexible, result-oriented NEET preparation guided by expert faculty.",
    },
    {
      q: "How does ASQUARE Academy track student performance?",
      a: "We conduct regular tests, detailed analysis reports, and parent-teacher meetings to ensure every student progresses effectively toward NEET success.",
    },
    {
      q: "Why is ASQUARE Academy known as the Best NEET Coaching in Lohegaon Pune?",
      a: "Our small batches, personalized mentorship, expert faculty, and proven results make ASQUARE Academy one of the best NEET classes in Lohegaon Pune.",
    },
    {
      q: "Where is ASQUARE Academy located for NEET Classes in Lohegaon Pune?",
      a: "ASQUARE Academy – Top NEET Coaching Classes in Lohegaon Pune. The exact address and batch timings are shared during counselling sessions.",
    },
  ];

  const gridFeatures = [
    {
      Icon: BookOpen,
      title: "Printed and digital study material tailored for NEET.",
      colorClass: "bg-gradient-blue",
    },
    {
      Icon: Award,
      title: "Weekly parent-teacher meetings to monitor performance.",
      colorClass: "bg-gradient-purple",
    },
    {
      Icon: BarChart,
      title: "Detailed online test analytics for progress tracking.",
      colorClass: "bg-gradient-green",
    },
    {
      Icon: ChartSpline,
      title: "Time-management and exam strategy workshops.",
      colorClass: "bg-gradient-orange",
    },
    {
      Icon: TrendingUp,
      title: "Scholarship opportunities through ASQUARE Test",
      colorClass: "bg-gradient-red",
    },
    {
      Icon: MessageCircle,
      title: "Structured doubt resolution approach across batches.",
      colorClass: "bg-gradient-teal",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Best NEET Coaching Classes in Lohegaon Pune | ASQUARE Academy
        </title>
        <meta
          name="title"
          content="Best NEET Coaching Classes in Lohegaon Pune | ASQUARE Academy"
        />
        <meta
          name="description"
          content="Join ASQUARE Academy for top NEET coaching classes in Lohegaon Pune. Expert faculty, mock tests, crash & dropper batches for NEET advanced preparation."
        />
        <meta
          name="keywords"
          content="NEET coaching classes in lohegaon pune Best NEET Coaching in lohegaonPune Top NEET Coaching Classes lohegaon pune NEET Advanced Preparation lohegaon pune NEET Classes in lohegaon pune  Best NEET Classes in lohegaon pune Top NEET Classes in lohegaon pune"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{`
        {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "EducationalOrganization"],
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-lohegaon-pune/#organization",
      "name": "ASQUARE Academy - NEET Coaching Classes in Lohegaon Pune",
      "url": "https://www.asquareclasses.com/neet-coaching-classes-institute-lohegaon-pune/",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "description": "ASQUARE Academy offers the best NEET coaching classes in Lohegaon Pune with expert faculty, crash courses, dropper batches, and result-driven preparation.",
      "telephone": "+91-9766118877",
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Lohegaon",
        "addressRegion": "Pune",
        "addressCountry": "India"
      },
      "openingHours": "Mo-Su 08:00-20:00"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-lohegaon-pune/#webpage",
      "url": "https://www.asquareclasses.com/neet-coaching-classes-institute-lohegaon-pune/",
      "name": "Best NEET Coaching Classes in Lohegaon Pune | ASQUARE Academy",
      "description": "ASQUARE Academy provides expert-led NEET coaching in Lohegaon Pune. Enroll in classroom or online batches for structured, advanced NEET preparation.",
      "publisher": {
        "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-lohegaon-pune/#organization"
      },
      "inLanguage": "en"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-lohegaon-pune/#breadcrumbs",
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
          "item": "https://www.asquareclasses.com/neet-coaching-classes-pune"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "NEET Coaching Classes in Lohegaon Pune",
          "item": "https://www.asquareclasses.com/neet-coaching-classes-institute-lohegaon-pune/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-lohegaon-pune/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who is eligible for NEET coaching at ASQUARE Academy Lohegaon Pune?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students from Classes XI, XII, and repeaters aiming for NEET-UG can enroll. ASQUARE Academy offers structured programs designed for NEET advanced preparation in Lohegaon Pune."
          }
        },
        {
          "@type": "Question",
          "name": "What subjects are taught in NEET coaching classes in Lohegaon Pune?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our NEET courses cover Physics, Chemistry, and Biology in detail, following the latest NEET syllabus with concept-based learning and regular practice sessions."
          }
        },
        {
          "@type": "Question",
          "name": "Are crash courses available at ASQUARE Academy Lohegaon?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we offer short-term crash courses focused on rapid revision, mock exams, and time management to boost final NEET performance."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide a dropper batch for NEET aspirants?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, ASQUARE Academy runs a dedicated dropper program that strengthens conceptual understanding and helps repeaters achieve top NEET scores in Lohegaon Pune."
          }
        },
        {
          "@type": "Question",
          "name": "Are online NEET classes available in Lohegaon Pune?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, students can choose from both classroom and online learning modes for flexible, result-oriented NEET preparation guided by expert faculty."
          }
        },
        {
          "@type": "Question",
          "name": "How does ASQUARE Academy track student performance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We conduct regular tests, detailed analysis reports, and parent-teacher meetings to ensure every student progresses effectively toward NEET success."
          }
        },
        {
          "@type": "Question",
          "name": "Why is ASQUARE Academy known as the Best NEET Coaching in Lohegaon Pune?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our small batches, personalized mentorship, expert faculty, and proven results make ASQUARE Academy one of the best NEET classes in Lohegaon Pune."
          }
        },
        {
          "@type": "Question",
          "name": "Where is ASQUARE Academy located for NEET Classes in Lohegaon Pune?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE Academy – Top NEET Coaching Classes in Lohegaon Pune. The exact address and batch timings are shared during counselling sessions."
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
                Build Your Medical Career -{" "}
                <span className="gradient-text-yellow d-inline-block">
                  Best NEET Coaching Classes in Lohegaon Pune at ASQUARE Academy
                </span>
              </h1>
              <p className="fs-5 text-white mb-3 lh">
                Cracking NEET UG demands precision in concepts, relentless
                practice, and smart strategy. At
                <strong> ASQUARE Academy, </strong>
                located in Lohegaon, Pune, our
                <strong> NEET coaching classes </strong>
                are meticulously designed to equip students with the clarity,
                confidence, and competence they need to stay ahead in one of
                India's most competitive exams. Recognized as one of the
                <strong> best NEET coaching institutes in Pune, </strong> we
                deliver structured programs, expert guidance, and measurable
                results.
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
                    Lohegaon, Vadgaon Sheri, Kalyani Nagar, Yerawada, Viman
                    Nagar, Koregaon Park, Yerwada, and Nagar Road.{" "}
                  </strong>
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
                Best NEET Coaching in Lohegaon?
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
                  Our systematic learning approach ensures deep understanding,
                  consistency, and confidence-building — key ingredients for
                  NEET success.
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
            <span> ASQUARE Academy, Lohegaon</span>
          </h2>

          {/* Description */}
          <div className="mx-auto mb-5">
            <p className="lead text-secondary mb-3">
              The<strong> NEET course at ASQUARE Academy, Lohegaon, </strong>
              is designed to develop clarity, accuracy, and confidence among
              NEET aspirants. Covering the complete NEET syllabus, our program
              includes structured lectures, daily assignments, and practice
              tests that help students perform at their best.
            </p>

            <p className="d-flex flex-wrap justify-content-center align-items-center gap-2 text-dark">
              <MapPin className="text-primary" size={26} />
              <span>
                We also attract students from{" "}
                <strong>
                  {" "}
                  Vishrantwadi, Kalas, Airport Road, Dhanori, Lohegaon, and
                  Tingre Nagar{" "}
                </strong>
                who prefer ASQUARE for its academic rigor and accessible
                Lohegaon location.
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
              Course Details (NEET UG) - Top NEET Coaching Classes in Lohegaon
            </h3>

            <p className="fs-5">
              <strong>NEET UG</strong> is the national-level exam for medical
              courses like <strong>MBBS, BDS, BAMS, and BHMS.</strong>
              At <strong>At ASQUARE Academy Lohegaon,</strong>
              our structured curriculum ensures conceptual clarity, rigorous
              practice, and effective strategy for consistent performance.
            </p>
            <p className="fs-5">
              We’re recognized among the{" "}
              <strong> Top NEET Coaching Institutes in Lohegaon Pune </strong>{" "}
              serving students from
              <strong>
                {" "}
                Lohegaon, Vadgaon Sheri, Kalyani Nagar, Yerawada, Viman Nagar,
                Koregaon Park, Yerwada, and Nagar Road.{" "}
              </strong>
            </p>
            <p className="fs-5">
              We are among the{" "}
              <strong>Top NEET Coaching Institutes in Lohegaon, </strong>
              known for high student success and experienced faculty.
            </p>

            <h4 className="fw-bold text-primary-emphasis mt-5 fs-3">
              Subjects Covered in NEET Classes at Lohegaon
            </h4>

            <div className="mt-4">
              {subjectsCovered.map((subject, i) => (
                <SubjectCard key={i} {...subject} />
              ))}
            </div>

            <p className="fs-5">
              Each batch includes test analysis, feedback, and mentor guidance
              for continuous improvement.
            </p>
          </div>

          {/* Right Column - Blue */}
          <div className="col-lg-6 p-5 p-lg-5 text-white lg-b-bg-b">
            <h5 className="fw-bold text-warning mb-4 fs-1">
              Program Duration and Batch Options — NEET Preparation in Lohegaon
            </h5>

            <div className="d-flex flex-column gap-4">
              {programDurations.map((program, i) => (
                <ProgramCard key={i} {...program} />
              ))}
            </div>

            <div className="mt-5 p-4 rounded-4 border border-warning border-opacity-50 bg-brown">
              <p className="fs-5 mb-0">
                All batches are designed for{" "}
                <strong className="text-warning">
                  focused learning, consistent testing, and steady
                </strong>{" "}
                improvement.
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
              Best NEET Coaching in Lohegaon,
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
              Students coached at ASQUARE Academy – Lohegaon consistently earn
              selections in{" "}
              <strong className="text-primary">
                {" "}AIIMS, Government Medical Colleges, and reputed private
                institutions.{" "}
              </strong>
              Our student-first approach and consistent excellence have cemented
              us as one of the
              <strong> top NEET coaching classes in Pune. </strong>
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
                This 4-step system makes ASQUARE the{" "}
                <strong>
                  most preferred NEET training institute in Lohegaon and Pune.
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
              Top NEET Coaching Institutes in Lohegaon.
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
            Join <span>ASQUARE Academy – Today</span>
          </h2>

          {/* Description */}
          <div className="mx-auto mb-5">
            <p className="lead text-secondary mb-3">
              If you’re searching for the most trusted{" "}
              <strong> NEET coaching classes in Lohegaon, Pune, </strong>
              ASDQUARE Academy awaits to guide you on your journey to Med
              School.
            </p>

            <p className="d-flex flex-wrap justify-content-center align-items-center gap-2 text-dark">
              <MapPin className="text-primary" size={22} />
              <span>
                Convenient for students from{" "}
                <strong>
                  {" "}Lohegaon, Vadgaon Sheri, Kalyani Nagar, Yerawada, Viman Nagar,
                  Koregaon Park, Yerwada, and Nagar Road.
                </strong>
              </span>
            </p>
          </div>

          {/* Subheading */}
          <h4 className="fw-bold text-primary mb-4">
            Admissions Open — Enroll Today!
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

export default NEETLohegaon;
