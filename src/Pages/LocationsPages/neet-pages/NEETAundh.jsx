import React, { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import locationBGImage from "../../../Assets/locationPageImages/neet/NEET slider PC.jpeg";
import MobileBGImage from "../../../Assets/locationPageImages/neet/NEET slider mobile.jpeg";
import image1 from "../../../Assets/locationPageImages/neet/NEET Page 13.jpeg";
import image2 from "../../../Assets/locationPageImages/neet/NEET Page 14.jpeg";
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

function NEETAundh() {
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
      title: "Expert NEET Faculty",
      description:
        "Experienced mentors for Physics, Chemistry, and Biology with years of NEET teaching expertise.",
    },
    {
      Icon: BookOpen,
      title: "NCERT-First Learning Strategy",
      description:
        "Builds strong conceptual clarity supported by advanced NEET-level question solving.",
    },
    {
      Icon: Target,
      title: "Small Batch Sizes",
      description:
        "Enables personal attention and efficient doubt resolution for every student.",
    },
    {
      Icon: BarChart,
      title: "Regular Evaluations",
      description:
        "Weekly and part-syllabus tests, mock exams, and performance reports for consistent improvement.",
    },
    {
      Icon: Calendar,
      title: "Flexible Learning Options",
      description:
        "Choose between classroom or online NEET coaching programs in Aundh.",
    },
    {
      Icon: School,
      title: "Holistic Mentorship Approach",
      description:
        "Balanced guidance for both NEET exam preparation and board examinations.",
    },
  ];

  const subjectsCovered = [
    {
      title: "Physics for NEET",
      desc: "Core concept-building and numerical problem-solving with detailed analysis.",
    },
    {
      title: "Chemistry for NEET",
      desc: "In-depth Physical, Organic, and Inorganic Chemistry taught with practical applications.",
    },
    {
      title: "Biology for NEET",
      desc: "NCERT-based, line-by-line coverage with diagram-focused teaching and revision drills.",
    },
  ];

  const programDurations = [
    {
      icon: Clock,
      title: "2-Year Integrated NEET Program (Class 11 → 12):",
      desc: "Comprehensive course combining board and NEET preparation with continuous assessment.",
    },
    {
      icon: Target,
      title: "1-Year Target NEET Program (Class 12):",
      desc: "Fast-track program for Class 12 students with complete syllabus coverage and frequent mock exams.",
    },
    {
      icon: CalendarSync,
      title: "Dropper/Repeater NEET Batch in Aundh:",
      desc: "Focused one-year program for repeat aspirants, emphasizing full-length mock tests and personalized mentorship.",
    },
    {
      icon: School,
      title: "Crash Course for NEET (2–3 Months):",
      desc: "Short-term revision batch covering PYQs, concise notes, and strategy sessions for quick preparation.",
    },
  ];

  const methodologySteps = [
    {
      Icon: Lightbulb,
      title: "Learn",
      description:
        "Concept-driven and interactive lectures by NEET specialists.",
    },
    {
      Icon: BookOpen,
      title: "Practice",
      description:
        "Daily Practice Papers (DPPs), structured homework, and problem-solving sessions.",
    },
    {
      Icon: BarChart,
      title: "Assess",
      description:
        "Regular chapter-wise assessments and comprehensive mock tests with feedback.",
    },
    {
      Icon: MessageCircle,
      title: "Revise",
      description:
        "One-on-one doubt-solving sessions and academic counseling. Periodic parent–student review meetings for detailed performance updates.",
    },
  ];

  const faqData = [
    {
      q: "Who can join NEET coaching classes at ASQUARE Academy Aundh?",
      a: "Students currently in Class 11, Class 12, or drop-year aspirants preparing for NEET (UG) can enroll in our courses.",
    },
    {
      q: "Which subjects are taught in ASQUARE Academy NEET coaching?",
      a: "All three NEET subjects — Physics, Chemistry, and Biology — are comprehensively covered by subject experts.",
    },
    {
      q: "Are mock tests and NEET practice exams included in the program?",
      a: "Yes, students regularly take weekly practice tests, chapter-wise assessments, and full-length mock exams to evaluate progress.",
    },
    {
      q: "What NEET course options are available at ASQUARE Aundh?",
      a: "We offer 2-year integrated, 1-year target, crash, and dropper/repeater NEET programs for all types of learners.",
    },
    {
      q: "How are parents informed about their child’s academic progress?",
      a: "Through regular progress reports, PTMs, and digital dashboards that track test scores and attendance.",
    },
    {
      q: "Does ASQUARE Academy provide online NEET coaching in Pune?",
      a: "Yes, students can choose between offline classroom sessions or online interactive NEET classes for flexible learning.",
    },
    {
      q: "What is the batch size for NEET coaching in Aundh?",
      a: "Each batch is limited in size to maintain personal attention, effective mentoring, and individual performance tracking.",
    },
    {
      q: "What makes ASQUARE Academy the best NEET coaching in Aundh, Pune?",
      a: "Our experienced faculty, small batches, smart teaching methods, and consistent NEET results make ASQUARE a trusted choice for medical aspirants.",
    },
  ];

  const gridFeatures = [
    {
      Icon: Users,
      title: "Limited batch size ensuring focused individual coaching",
      colorClass: "bg-gradient-blue",
    },
    {
      Icon: BookOpen,
      title:
        "Updated NEET-oriented study material in both digital and printed formats",
      colorClass: "bg-gradient-purple",
    },
    {
      Icon: ChartSpline,
      title:
        "Regular PTMs (Parent–Teacher Meetings) and personalized progress tracking",
      colorClass: "bg-gradient-green",
    },
    {
      Icon: BarChart,
      title:
        "Time management, accuracy, and exam-mindset workshops by expert mentors",
      colorClass: "bg-gradient-orange",
    },
    {
      Icon: Award,
      title:
        "Access to online test portal with detailed reports and ranks",
      colorClass: "bg-gradient-red",
    },
    {
      Icon: MapPin,
      title:
        "Proven results across Aundh, Baner, Pashan, Wakad, Sangvi, Balewadi, Pune University Road.",
      colorClass: "bg-gradient-pink",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          NEET Coaching Classes in Aundh Pune | Best NEET Classes – ASQUARE
          Academy
        </title>
        <meta
          name="title"
          content="NEET Coaching Classes in Aundh Pune | Best NEET Classes – ASQUARE Academy"
        />
        <meta
          name="description"
          content="Join the best NEET coaching classes in Aundh Pune with expert faculty, mock tests, crash courses, and personalized mentoring for success in NEET UG. ASQUARE Academy."
        />
        <meta
          name="keywords"
          content="NEET coaching classes in aundh pune Best NEET Coaching in aundh Pune Top NEET Coaching Classes aundh Pune NEET Advanced Preparation aundh Pune NEET Classes in aundh Pune Best NEET Classes in aundh Pune Top NEET Classes in aundh Pune"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{`
        {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-aundh-pune#localbusiness",
      "name": "ASQUARE Academy - NEET Coaching Classes in Aundh Pune",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "telephone": "+919766118877",
      "url": "https://www.asquareclasses.com/neet-coaching-classes-institute-aundh-pune",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Aundh, Pune",
        "addressLocality": "Aundh",
        "addressRegion": "Maharashtra",
        "postalCode": "411007",
        "addressCountry": "IN"
      },
      "openingHours": "Mo-Sa 08:00-20:00",
      "sameAs": [
        "https://www.facebook.com/asquareclasses",
        "https://www.instagram.com/asquareacademy"
      ]
    },
    {
      "@type": "EducationalOrganization",
      "name": "ASQUARE Academy",
      "url": "https://www.asquareclasses.com/",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "description": "ASQUARE Academy offers top NEET coaching classes in Aundh Pune with experienced faculty, advanced tests, and dropper batches."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-aundh-pune#webpage",
      "url": "https://www.asquareclasses.com/neet-coaching-classes-institute-aundh-pune",
      "name": "NEET Coaching Classes in Aundh Pune | Best NEET Classes – ASQUARE Academy",
      "description": "Enroll in ASQUARE Academy’s NEET coaching classes in Aundh Pune for personalized mentoring, mock tests, and expert faculty guidance."
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
          "name": "Aundh Pune",
          "item": "https://www.asquareclasses.com/neet-coaching-classes-institute-aundh-pune"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can join NEET coaching classes at ASQUARE Academy Aundh?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students currently in Class 11, Class 12, or drop-year aspirants preparing for NEET (UG) can enroll in our courses."
          }
        },
        {
          "@type": "Question",
          "name": "Which subjects are taught in ASQUARE Academy NEET coaching?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "All three NEET subjects — Physics, Chemistry, and Biology — are comprehensively covered by subject experts."
          }
        },
        {
          "@type": "Question",
          "name": "Are mock tests and NEET practice exams included in the program?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, students regularly take weekly practice tests, chapter-wise assessments, and full-length mock exams to evaluate progress."
          }
        },
        {
          "@type": "Question",
          "name": "What NEET course options are available at ASQUARE Aundh?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer 2-year integrated, 1-year target, crash, and dropper/repeater NEET programs for all types of learners."
          }
        },
        {
          "@type": "Question",
          "name": "How are parents informed about their child’s academic progress?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Through regular progress reports, PTMs, and digital dashboards that track test scores and attendance."
          }
        },
        {
          "@type": "Question",
          "name": "Does ASQUARE Academy provide online NEET coaching in Pune?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, students can choose between offline classroom sessions or online interactive NEET classes for flexible learning."
          }
        },
        {
          "@type": "Question",
          "name": "What is the batch size for NEET coaching in Aundh?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Each batch is limited in size to maintain personal attention, effective mentoring, and individual performance tracking."
          }
        },
        {
          "@type": "Question",
          "name": "What makes ASQUARE Academy the best NEET coaching in Aundh, Pune?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our experienced faculty, small batches, smart teaching methods, and consistent NEET results make ASQUARE a trusted choice for medical aspirants."
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
                Join the{" "}
                <span className="gradient-text-yellow d-inline-block">
                  Best NEET Coaching Classes in Aundh, Pune at ASQUARE Academy –
                  Your Gateway to Medical Success
                </span>
              </h1>
              <p className="fs-5 text-white mb-3 lh">
                Looking for the{" "}
                <strong> NEET coaching classes in Aundh, Pune? </strong>
                At <strong> ASQUARE Academy </strong>
                we specialize in structured, result-driven
                <strong> NEET UG preparation. </strong>
                With expert faculty, proven learning methods, and personalized
                mentoring,
              </p>
              <div className="hero-location-info d-flex align-items-start gap-3">
                <MapPin
                  size={24}
                  color="#FFCB03"
                  className="flex-shrink-0 mt-1"
                />
                <span className="text-white">
                  <strong>we help students from:</strong> Aundh, Baner, Pashan,
                  Wakad, Sangvi, Balewadi, and Pune University Road achieve top
                  ranks in NEET and fulfill their dream of becoming doctors.
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
                for NEET Preparation in Aundh, Pune
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
                  Our approach ensures conceptual clarity, regular practice, and
                  performance improvement for NEET success.
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
            NEET Course Overview at{" "}
            <span> ASQUARE Academy - Aundh, Pune - Structured for Success</span>
          </h2>

          {/* Description */}
          <div className="mx-auto mb-5">
            <p className="lead text-secondary mb-3">
              <strong> NEET (UG) </strong> is India’s national-level entrance
              exam for MBBS, BDS, BAMS, BHMS, and allied medical courses. At
              ASQUARE Academy Aundh, our goal is to simplify complex concepts
              through interactive teaching, rigorous testing, and smart exam
              strategies that help students achieve excellence.
            </p>

            <p className="d-flex flex-wrap justify-content-center align-items-center gap-2 text-dark">
              <MapPin className="text-primary" size={26} />
              <span>
                Students from <strong>Physics, Chemistry, and Biology </strong>
                in detail, with practice modules, test series, and personalized
                mentoring. Students from{" "}
                <strong>
                  Aundh, Baner, Pashan, Wakad, Sangvi, Balewadi, Pune University
                  Road.
                </strong>
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
              Course Details (NEET UG) - Top NEET Coaching Classes in Aundh
            </h3>

            <p className="fs-5">
              <strong>NEET UG</strong> is the gateway to top medical colleges
              across India offering{" "}
              <strong>MBBS, BDS, BAMS, BHMS, and other allied courses.</strong>
            </p>
            <p className="fs-5">
              At <strong>ASQUARE Academy Aundh,</strong> our NEET programs are
              designed to build strong fundamentals, improve speed and accuracy,
              and ensure exam readiness through sustained practice and
              analytics.
            </p>
            <p className="fs-5">
              We are among the{" "}
              <strong>Top NEET Coaching Institutes in Aundh Pune, </strong>
              known for high student success and experienced faculty.
            </p>

            <h4 className="fw-bold text-primary-emphasis mt-5 fs-3">
              Subjects Covered in NEET Classes at Aundh
            </h4>

            <div className="mt-4">
              {subjectsCovered.map((subject, i) => (
                <SubjectCard key={i} {...subject} />
              ))}
            </div>

            <p className="fs-5">
              Each subject is taught with attention to detail, practice
              reinforcement, and frequent evaluation.
            </p>
          </div>

          {/* Right Column - Blue */}
          <div className="col-lg-6 p-5 p-lg-5 text-white lg-b-bg-b">
            <h5 className="fw-bold text-warning mb-4 fs-1">
              Program Duration and Batch Options — NEET Preparation in Aundh
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
              Best NEET Coaching in Aundh, Pune
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
              ASQUARE Academy’s NEET Success – Proven Track Record
            </h4>
          </div>
          <div className="results-box-gradient">
            <p className="fs-5 text-dark mb-3 text-center">
              Students from{" "}
              <strong className="text-primary">ASQUARE Academy – Aundh </strong>
              have secured seats in <strong>AIIMS</strong>, top government
              medical colleges, and reputed private institutions. Our consistent
              performance and student success make us one of the{" "}
              <strong>top NEET coaching classes in Aundh and Pune.</strong>
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
                This unique four-step methodology has made ASQUARE{" "}
                <strong>
                  the best NEET training institute in Aundh and PCMC.
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
              Top NEET Coaching Institutes in Aundh.
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
            Enroll at{" "}
            <span>
              ASQUARE Academy –The Best NEET Coaching Classes in Aundh, Pune
            </span>
          </h2>

          {/* Description */}
          <div className="mx-auto mb-5">
            <p className="lead text-secondary mb-3">
              Begin your journey with{" "}
              <strong> Best NEET Coaching Classes in Aundh, Pune. </strong> Join
              <strong> NEET coaching in Aundh, Pune. </strong>
              With structured learning, expert guidance, and proven results, we
              ensure that every student is well-prepared to excel in NEET.
            </p>

            <p className="d-flex flex-wrap justify-content-center align-items-center gap-2 text-dark">
              <MapPin className="text-primary" size={22} />
              <span>
                Convenient from{" "}
                <strong>
                  Aundh, Baner, Pashan, Wakad, Sangvi, Balewadi, Pune University
                  Road, and nearby West Pune areas.
                </strong>
              </span>
            </p>
          </div>

          {/* Subheading */}
          <h4 className="fw-bold text-primary mb-4">
            Admissions Open – Limited Seats Available! Enroll Today and Take the
            First Step Toward Your Medical Career.
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

export default NEETAundh;
