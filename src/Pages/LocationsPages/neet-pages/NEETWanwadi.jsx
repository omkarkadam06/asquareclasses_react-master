import React, { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import locationBGImage from "../../../Assets/locationPageImages/neet/NEET slider PC6.jpeg";
import MobileBGImage from "../../../Assets/locationPageImages/neet/NEET slider mobile6.jpeg";
import image1 from "../../../Assets/locationPageImages/neet/NEET Page 16.jpeg";
import image2 from "../../../Assets/locationPageImages/neet/NEET Page 17.jpeg";
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

function NEETWanwadi() {
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
        "Dedicated subject experts in Physics, Chemistry, and Biology.",
    },
    {
      Icon: BookOpen,
      title: "NCERT-First, NEET-Oriented Approach",
      description:
        "Build strong fundamentals and crack competitive-level questions.",
    },
    {
      Icon: Target,
      title: "Small Batch Learning",
      description:
        "Focused attention, doubt resolution, and interactive learning.",
    },
    {
      Icon: BarChart,
      title: "Regular Evaluations",
      description:
        "Weekly tests, part-syllabus mocks, and performance analytics.",
    },
    {
      Icon: Calendar,
      title: "Learning Flexibility",
      description: "Choose between classroom or online coaching.",
    },
    {
      Icon: School,
      title: "Complete Support System",
      description: "Balancing NEET prep and school boards effectively.",
    },
  ];

  const subjectsCovered = [
    {
      title: "Physics",
      desc: "Clear explanation of concepts with intensive numerical drills.",
    },
    {
      title: "Chemistry",
      desc: "Thorough coverage of Physical, Organic, and Inorganic Chemistry.",
    },
    {
      title: "Biology",
      desc: "Detailed NCERT-based learning with diagrams and scoring tips.",
    },
  ];

  const programDurations = [
    {
      icon: Clock,
      title: "2-Year Integrated Course (Class 11 → 12):",
      desc: "Complete foundation + advanced NEET training.",
    },
    {
      icon: Target,
      title: "1-Year Target Course (Class 12):",
      desc: "Focused course with revision and test-based learning.",
    },
    {
      icon: School,
      title: "Crash Course (2–3 Months):",
      desc: "Final-phase preparation with PYQs and strategy drills.",
    },
    {
      icon: CalendarSync,
      title: "Dropper/Repeater Batch:",
      desc: "One-year program for repeat aspirants with full-length tests and personalized guidance.",
    },
  ];

  const methodologySteps = [
    {
      Icon: Lightbulb,
      title: "Interactive Teaching",
      description: "Interactive classroom teaching for better understanding.",
    },
    {
      Icon: BookOpen,
      title: "Practice",
      description: "Daily Practice Papers (DPPs) and structured assignments.",
    },
    {
      Icon: BarChart,
      title: "Assess",
      description: "Regular tests and full-length mocks with analytics.",
    },
    {
      Icon: MessageCircle,
      title: "Doubt Resolution",
      description: "Doubt-clearing sessions with faculty mentors.",
    },
    {
      Icon: Users,
      title: "Progress Review",
      description: "Parent–student progress review meetings.",
    },
  ];

  const faqData = [
    {
      q: "Who can enroll in NEET coaching classes at ASQUARE Academy Wanwadi Pune?",
      a: "Students of Class XI, XII, and repeaters preparing for NEET-UG can join. ASQUARE Academy provides a structured curriculum for NEET advanced preparation in Wanwadi Pune.",
    },
    {
      q: "What subjects are covered in NEET classes in Wanwadi Pune?",
      a: "We teach Physics, Chemistry, and Biology, covering the full NEET syllabus with concept-based lessons and regular doubt-solving sessions by expert faculty.",
    },
    {
      q: "Are mock tests included in the NEET program?",
      a: "Yes, ASQUARE Academy conducts weekly, chapter-wise, and full-length NEET mock exams to help students assess progress and improve performance.",
    },
    {
      q: "What types of batches are available for NEET coaching in Wanwadi Pune?",
      a: "We offer 2-year, 1-year, crash, and repeater/dropper batches to suit every student’s learning pace and preparation needs.",
    },
    {
      q: "How big are the batches at ASQUARE Academy Wanwadi?",
      a: "We maintain small batches to ensure focused learning, personalized guidance, and effective one-on-one doubt clarification for every student.",
    },
    {
      q: "Do parents receive progress updates for their children?",
      a: "Yes, detailed performance reports and regular parent-teacher meetings (PTMs) keep parents informed about their child’s NEET preparation journey.",
    },
    {
      q: "Is online NEET coaching available in Wanwadi Pune?",
      a: "Yes, ASQUARE Academy offers both classroom and online NEET classes in Wanwadi Pune for flexible and effective preparation.",
    },
    {
      q: "Why is ASQUARE Academy the Best NEET Coaching in Wanwadi Pune?",
      a: "With expert mentors, consistent results, focused batches, and comprehensive study material, ASQUARE Academy ranks among the top NEET coaching classes in Wanwadi Pune.",
    },
  ];

  const gridFeatures = [
    {
      Icon: Users,
      title: "Small batches for personalized focus.",
      colorClass: "bg-gradient-blue",
    },
    {
      Icon: BookOpen,
      title: "Updated NEET study material (printed + digital).",
      colorClass: "bg-gradient-purple",
    },
    {
      Icon: Award,
      title: "Parent-teacher meetings and detailed progress tracking.",
      colorClass: "bg-gradient-green",
    },
    {
      Icon: ChartSpline,
      title: "Workshops on accuracy, time management, and exam strategy.",
      colorClass: "bg-gradient-orange",
    },
    {
      Icon: TrendingUp,
      title: "Scholarship opportunities through ASQUARE Test",
      colorClass: "bg-gradient-red",
    },
    {
      Icon: MapPin,
      title:
        "Trusted as one of the leading NEET coaching centres in Wanwadi, Fatima Nagar, NIBM Road, Kondhwa, and Camp.",
      colorClass: "bg-gradient-teal",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Best NEET Coaching Classes in Wanwadi Pune | ASQUARE Academy
        </title>
        <meta
          name="title"
          content="Best NEET Coaching Classes in Wanwadi Pune | ASQUARE Academy"
        />
        <meta
          name="description"
          content="Join ASQUARE Academy for top NEET coaching classes in Wanwadi Pune. Expert faculty, mock tests, small batches & result-driven NEET advanced preparation."
        />
        <meta
          name="keywords"
          content="NEET coaching classes in wanwadi pune Best NEET Coaching in wanwadi Pune Top NEET Coaching Classes wanwadi pune NEET Advanced Preparation wanwadi pune NEET Classes in wanwadi pune Best NEET Classes in wanwadi pune Top NEET Classes in wanwadi pune"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{`
        {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "EducationalOrganization"],
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-wanwadi-pune/#organization",
      "name": "ASQUARE Academy - NEET Coaching Classes in Wanwadi Pune",
      "url": "https://www.asquareclasses.com/neet-coaching-classes-institute-wanwadi-pune/",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "description": "ASQUARE Academy offers the best NEET coaching classes in Wanwadi Pune with expert faculty, mock tests, small batches, and advanced preparation programs.",
      "telephone": "+91-9766118877",
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Wanwadi",
        "addressRegion": "Pune",
        "addressCountry": "India"
      },
      "openingHours": "Mo-Su 08:00-20:00"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-wanwadi-pune/#webpage",
      "url": "https://www.asquareclasses.com/neet-coaching-classes-institute-wanwadi-pune/",
      "name": "Best NEET Coaching Classes in Wanwadi Pune | ASQUARE Academy",
      "description": "Enroll at ASQUARE Academy for NEET coaching in Wanwadi Pune. Small batches, expert faculty, mock tests, and proven NEET results for medical aspirants.",
      "publisher": {
        "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-wanwadi-pune/#organization"
      },
      "inLanguage": "en"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-wanwadi-pune/#breadcrumbs",
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
          "name": "NEET Coaching Classes in Wanwadi Pune",
          "item": "https://www.asquareclasses.com/neet-coaching-classes-institute-wanwadi-pune/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-wanwadi-pune/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can enroll in NEET coaching classes at ASQUARE Academy Wanwadi Pune?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students of Class XI, XII, and repeaters preparing for NEET-UG can join. ASQUARE Academy provides a structured curriculum for NEET advanced preparation in Wanwadi Pune."
          }
        },
        {
          "@type": "Question",
          "name": "What subjects are covered in NEET classes in Wanwadi Pune?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We teach Physics, Chemistry, and Biology, covering the full NEET syllabus with concept-based lessons and regular doubt-solving sessions by expert faculty."
          }
        },
        {
          "@type": "Question",
          "name": "Are mock tests included in the NEET program?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, ASQUARE Academy conducts weekly, chapter-wise, and full-length NEET mock exams to help students assess progress and improve performance."
          }
        },
        {
          "@type": "Question",
          "name": "What types of batches are available for NEET coaching in Wanwadi Pune?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer 2-year, 1-year, crash, and repeater/dropper batches to suit every student’s learning pace and preparation needs."
          }
        },
        {
          "@type": "Question",
          "name": "How big are the batches at ASQUARE Academy Wanwadi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We maintain small batches to ensure focused learning, personalized guidance, and effective one-on-one doubt clarification for every student."
          }
        },
        {
          "@type": "Question",
          "name": "Do parents receive progress updates for their children?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, detailed performance reports and regular parent-teacher meetings (PTMs) keep parents informed about their child’s NEET preparation journey."
          }
        },
        {
          "@type": "Question",
          "name": "Is online NEET coaching available in Wanwadi Pune?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, ASQUARE Academy offers both classroom and online NEET classes in Wanwadi Pune for flexible and effective preparation."
          }
        },
        {
          "@type": "Question",
          "name": "Why is ASQUARE Academy the Best NEET Coaching in Wanwadi Pune?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "With expert mentors, consistent results, focused batches, and comprehensive study material, ASQUARE Academy ranks among the top NEET coaching classes in Wanwadi Pune."
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
                Excel in NEET with{" "}
                <span className="gradient-text-yellow d-inline-block">
                  ASQUARE Academy - Top NEET Coaching Classes in Wanwadi Pune
                </span>
              </h1>
              <p className="fs-5 text-white mb-3 lh">
                Searching for the
                <strong> best NEET coaching in Wanwadi, Pune? </strong>
                At
                <strong> ASQUARE Academy, </strong>
                we offer comprehensive NEET UG preparation with expert teaching,
                structured practice, and continuous mentoring.
                <strong> Top NEET Coaching Institutes in Wanwadi, </strong>
                ASQUARE provides structured teaching, NCERT-based learning, and
                a proven test system designed for competitive success.
              </p>
              <div className="hero-location-info d-flex align-items-start gap-3">
                <MapPin
                  size={24}
                  color="#FFCB03"
                  className="flex-shrink-0 mt-1"
                />
                <span className="text-white">
                  <strong>We’re the trusted choice for students from:</strong>{" "}
                  Wanwadi, Fatima Nagar, NIBM Road, Kondhwa, Lullanagar, Camp,
                  Salunke Vihar, and Undri who want to secure admission in top
                  medical colleges.
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
                Best NEET Coaching in Wanwadi
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
            NEET Course Overview at <span> ASQUARE Academy - Wanwadi</span>
          </h2>

          {/* Description */}
          <div className="mx-auto mb-5">
            <p className="lead text-secondary mb-3">
              The<strong> NEET course at ASQUARE Academy, Wanwadi, </strong>{" "}
              provides in-depth coverage of the NEET syllabus with a focus on
              conceptual understanding and exam-oriented strategy. Students from
              <strong>
                {" "}
                Wanwadi, Fatima Nagar, NIBM Road, Kondhwa, and Camp{" "}
              </strong>{" "}
              benefit from regular classes, assignments, DPPs (Daily Practice
              Papers), and weekly NEET mock tests.
            </p>

            <p className="d-flex flex-wrap justify-content-center align-items-center gap-2 text-dark">
              <MapPin className="text-primary" size={26} />
              <span>
                We also attract students from{" "}
                <strong>
                  {" "}
                  Wanwadi, Fatima Nagar, NIBM Road, Kondhwa, and Camp,{" "}
                </strong>
                who prefer ASQUARE for its academic rigor and accessible PCMC
                location.
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
              Course Details (NEET UG) - Top NEET Coaching Classes in Wanwadi
            </h3>

            <p className="fs-5">
              <strong>NEET UG</strong> is the national-level exam for medical
              courses like <strong>MBBS, BDS, BAMS, and BHMS.</strong>
              At <strong>At ASQUARE Academy Wanwadi,</strong>
              our structured curriculum ensures conceptual clarity, rigorous
              practice, and effective strategy for consistent performance.
            </p>
            <p className="fs-5">
              We’re recognized among the{" "}
              <strong> Top NEET Coaching Institutes in Wanwadi Pune </strong>{" "}
              serving students from
              <strong>
                {" "}
                Wanwadi, Fatima Nagar, NIBM Road, Kondhwa, and Camp.
              </strong>
            </p>
            <p className="fs-5">
              We are among the{" "}
              <strong>Top NEET Coaching Institutes in Wanwadi Pune, </strong>
              known for high student success and experienced faculty.
            </p>

            <h4 className="fw-bold text-primary-emphasis mt-5 fs-3">
              Subjects Covered in NEET Classes at Wanwadi
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
              Program Duration and Batch Options — NEET Preparation in Wanwadi
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
              Best NEET Coaching in Wanwadi, Pune
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
              ASQUARE Academy’s NEET Success – Results That Speak
            </h4>
          </div>
          <div className="results-box-gradient">
            <p className="fs-5 text-dark mb-3 text-center">
              ASQUARE Academy has a history of outstanding NEET results. Our
              students have secured admission into top medical institutes like{" "}
              <strong className="text-primary">
                {" "}AIIMS, BJMC, AFMC, DY Patil, and KEM Hospital.{" "}
              </strong>
              Our focused mentorship, structured preparation, and consistent
              practice make ASQUARE the
              <strong>
                {" "}
                most reliable NEET coaching institutes in Wanwadi and South
                Pune.
              </strong>
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
                  most preferred NEET training institute in Wanwadi and PCMC.
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
              Top NEET Coaching Institutes in Wanwadi.
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
            Enroll at <span>ASQUARE Academy - Wanwadi Today</span>
          </h2>

          {/* Description */}
          <div className="mx-auto mb-5">
            <p className="lead text-secondary mb-3">
              Start your medical journey with the{" "}
              <strong> best NEET coaching in Wanwadi, Pune. </strong>
              With expert faculty, well-structured programs, and a proven
              success record, ASQUARE Academy is your partner in NEET
              excellence.
            </p>

            <p className="d-flex flex-wrap justify-content-center align-items-center gap-2 text-dark">
              <MapPin className="text-primary" size={22} />
              <span>
                Accessible from
                <strong>
                  {" "}Wanwadi, Fatima Nagar, NIBM Road, Kondhwa, Lullanagar, Salunke
                  Vihar, Camp, and Undri.
                </strong>
              </span>
            </p>
          </div>

          {/* Subheading */}
          <h4 className="fw-bold text-primary mb-4">
            Admissions Open — Limited Seats Available!
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

export default NEETWanwadi;
