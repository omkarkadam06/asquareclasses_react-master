import React, { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import locationBGImage from "../../../Assets/locationPageImages/neet/NEET slider PC4.jpeg";
import MobileBGImage from "../../../Assets/locationPageImages/neet/NEET slider mobile4.jpeg";
import image1 from "../../../Assets/locationPageImages/neet/NEET Page 7.jpeg";
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

function NEETAkurdi() {
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
    title: "Expert Faculty for NEET in Akurdi",
    description:
      "Highly qualified teachers with years of experience in NEET coaching.",
  },
  {
    Icon: BookOpen,
    title: "Comprehensive Syllabus Coverage",
    description:
      "Physics, Chemistry, and Biology taught with NCERT-first approach and advanced problem solving.",
  },
  {
    Icon: Target,
    title: "Personalized Attention",
    description:
      "Small batch sizes with dedicated doubt-solving sessions.",
  },
  {
    Icon: BarChart,
    title: "Regular Tests & Analysis",
    description:
      "Weekly part tests, full-length mocks, and detailed performance reports.",
  },
  {
    Icon: Calendar,
    title: "Motivational & Career Guidance",
    description:
      "Counselling, time-management workshops, and exam mindset training.",
  },
];

  const subjectsCovered = [
  {
    title: "Physics",
    desc: "Strengthen conceptual problem-solving through real-time practice sessions.",
  },
  {
    title: "Chemistry",
    desc: "Balanced focus on Physical, Organic, and Inorganic chemistry with NEET-level applications.",
  },
  {
    title: "Biology",
    desc: "Complete NCERT-based preparation emphasizing important chapters, diagrams, and previous-year NEET questions.",
  },
];

  const programDurations = [
    {
      icon: Clock,
      title: "2-Year Integrated Program (Class 11 → 12):",
      desc: "Foundation-to-advanced program covering NEET + Board syllabus.",
    },
    {
      icon: Target,
      title: "1-Year Target Program (Class 12):",
      desc: "Intensive NEET course with full syllabus coverage and testing.",
    },
    {
      icon: CalendarSync,
      title: "Dropper/Repeater Batch:",
      desc: "One-year course focused on NEET test analysis and accuracy improvement.",
    },
    {
      icon: School,
      title: "Crash Course:",
      desc: "2–3 month short-term NEET-focused revision program.",
    },
  ];

  const methodologySteps = [
  {
    Icon: Lightbulb,
    title: "Learn",
    description: "Conceptual lectures with NCERT focus.",
  },
  {
    Icon: BookOpen,
    title: "Practice",
    description: "Assignments, DPPs, and doubt-solving.",
  },
  {
    Icon: BarChart,
    title: "Assess",
    description: "Weekly tests and full-length NEET mocks.",
  },
  {
    Icon: MessageCircle,
    title: "Revise",
    description: "Crash revision before exams.",
  },
];
  
  const faqData = [
  {
    q: "Do you offer advanced NEET preparation batches in Akurdi?",
    a: "Yes, we have advanced batches with mock tests, detailed analysis, and concept strengthening sessions.",
  },
  {
    q: "Are small batches available for personalized attention?",
    a: "Yes, every batch has limited strength to ensure individual focus.",
  },
  {
    q: "Can students from nearby areas like Nigdi or Chinchwad join?",
    a: "Absolutely! Students from Nigdi, Pradhikaran, Chinchwad, and Bhakti Shakti Chowk attend regularly.",
  },
  {
    q: "Do you offer online NEET coaching in Akurdi?",
    a: "Yes—ASQUARE offers both offline and Online NEET Classes in Akurdi Pune.",
  },
  {
    q: "How do you track student progress?",
    a: "Through weekly topic tests, detailed mock exam analysis, and mentor feedback reports.",
  },
];

  const gridFeatures = [
    {
      Icon: Award,
      title: "Expert faculty with years of NEET teaching experience",
      colorClass: "bg-gradient-blue",
    },
    {
      Icon: Users,
      title: "Printed and digital study resources",
      colorClass: "bg-gradient-purple",
    },
    {
      Icon: BookOpen,
      title: "Weekly, monthly, and full-syllabus mock tests",
      colorClass: "bg-gradient-green",
    },
    {
      Icon: TrendingUp,
      title: "Personal guidance and doubt-clearing sessions",
      colorClass: "bg-gradient-orange",
    },
    {
      Icon: CalendarSync,
      title: "Parental feedback and progress reports",
      colorClass: "bg-gradient-red",
    },
    {
      Icon: ChartSpline,
      title: "Online & offline practice test series",
      colorClass: "bg-gradient-teal",
    },
    {
      Icon: MapPin,
      subtitle: "Easily accessible from",
      extraText:
        "Akurdi Gaothan, Pradhikaran, Walhekarwadi, Bhakti Shakti Chowk, Sector 26, Nigdi, and Chinchwad",
      colorClass: "bg-gradient-pink",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Best NEET Coaching Classes in Akurdi, Pune | ASQUARE Academy
        </title>
        <meta
          name="title"
          content="Best NEET Coaching Classes in Akurdi, Pune | ASQUARE Academy"
        />
        <meta
          name="description"
          content="Join ASQUARE Academy, the leading institute for NEET coaching in Akurdi Pune. Expert mentors, mock tests, and small batches for students from Pradhikaran, Nigdi, and Bhakti Shakti Chowk."
        />
        <meta
          name="keywords"
          content="NEET Coaching in Akurdi Pune, Best NEET Classes in Akurdi, Top NEET Coaching Institute Akurdi, NEET Coaching Centre in Akurdi, NEET Preparation in Akurdi, ASQUARE Academy Akurdi, NEET Coaching near Bhakti Shakti Chowk, NEET Classes near Nigdi, Medical Entrance Coaching Akurdi Pune, Top NEET Institute in PCMC"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{`
        {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-in-akudi-pune/#organization",
      "name": "ASQUARE Academy",
      "url": "https://www.asquareclasses.com/neet-coaching-classes-institute-in-akudi-pune",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "telephone": "+91-9766118877",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Akurdi",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411035",
        "addressCountry": "IN"
      },
      "description": "Top NEET Coaching & Classes in Akurdi Pune with expert faculty, small batches, and mock tests for NEET UG aspirants. ASQUARE Academy.",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9766118877",
        "contactType": "Customer Service",
        "areaServed": "IN"
      }
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-in-akudi-pune/#localbusiness",
      "name": "Best NEET Coaching & Classes in Akurdi Pune - ASQUARE Academy",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "telephone": "+91-9766118877",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Akurdi",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411035",
        "addressCountry": "IN"
      },
      "openingHours": "Mo-Sa 09:00-19:00",
      "url": "https://www.asquareclasses.com/neet-coaching-classes-institute-in-akudi-pune",
      "description": "Best NEET Coaching Classes in Akurdi Pune for Class 11, 12 & droppers with mock tests, crash courses & expert mentoring. ASQUARE Academy."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-in-akudi-pune/#webpage",
      "url": "https://www.asquareclasses.com/neet-coaching-classes-institute-in-akudi-pune",
      "name": "Best NEET Coaching & Classes in Akurdi Pune",
      "description": "Join the best NEET coaching classes in Akurdi Pune with expert faculty, small batches & regular tests for top NEET preparation. ASQUARE Academy.",
      "breadcrumb": {
        "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-in-akudi-pune/#breadcrumbs"
      },
      "publisher": {
        "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-in-akudi-pune/#organization"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-in-akudi-pune/#breadcrumbs",
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
          "name": "NEET Coaching Classes in Akurdi Pune",
          "item": "https://www.asquareclasses.com/neet-coaching-classes-institute-in-akudi-pune"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-in-akudi-pune/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can join NEET coaching at ASQUARE Academy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Any student in Class XI, Class XII, or a drop-year student preparing for NEET UG can join our NEET coaching program at ASQUARE Academy Akurdi."
          }
        },
        {
          "@type": "Question",
          "name": "What subjects are covered for NEET?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We cover Physics, Chemistry, and Biology in detail as per the NEET UG syllabus."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide mock tests and practice papers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — regular chapter-wise tests, part tests, and full-length NEET mock exams are conducted with detailed performance analysis."
          }
        },
        {
          "@type": "Question",
          "name": "What is the course duration?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer multiple NEET coaching options: 2-year integrated, 1-year target, crash courses (2–3 months), and repeater/dropper batches."
          }
        },
        {
          "@type": "Question",
          "name": "How big are the batches?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our batches are kept small to ensure personalized attention, interactive sessions, and quick doubt resolution."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide progress reports to parents?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — we provide detailed student performance reports and conduct regular parent-teacher meetings for feedback and progress tracking."
          }
        },
        {
          "@type": "Question",
          "name": "Where is the institute located?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE Academy is located in Akurdi, Pune. Exact address and batch timings are shared during counselling sessions."
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
                Crack NEET with Expert Mentorship at{" "}
                <span className="gradient-text-yellow d-inline-block">
                  ASQUARE Academy, Akurdi
                </span>
              </h1>
              <p className="fs-5 text-white mb-3 lh">
                Looking for the{" "}
                <strong>Best NEET coaching classes in Akurdi, Pune?</strong>
                At ASQUARE Academy, we empower NEET aspirants with conceptual clarity, consistent practice, and personalized guidance. Known among the
                <strong> Top NEET Coaching Institutes in Akurdi </strong>{" "}
                combine NCERT-based learning, interactive teaching, and regular testing to ensure every student performs at their best in NEET-UG.
              </p>
              <div className="hero-location-info d-flex align-items-start gap-3">
                <MapPin
                  size={24}
                  color="#FFCB03"
                  className="flex-shrink-0 mt-1"
                />
                <span className="text-white">
                  <strong>Our Akurdi branch caters to students from:</strong> Akurdi Gaothan, Walhekarwadi, Bhakti Shakti Chowk, Pradhikaran, Sector 26, Nigdi, and Chinchwad,{" "}
                  destination for NEET preparation in PCMC Pune.
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
                — Best NEET Coaching in Akurdi, Pune
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
                  ASQUARE is trusted by students across Pune as one of the Top NEET Coaching Classes Akurdi.
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
            <span>ASQUARE Academy - Akurdi</span>
          </h2>

          {/* Description */}
          <div className="mx-auto mb-5">
            <p className="lead text-secondary mb-3">
              The <strong> NEET course at ASQUARE Academy, Akurdi </strong> provides complete conceptual learning and continuous evaluation.{" "}
              <strong>
                {" "}
                concept clarity, test consistency, and exam temperament,{" "}
              </strong>
              ensuring students perform confidently in the actual NEET exam.
            </p>

            <p className="d-flex flex-wrap justify-content-center align-items-center gap-2 text-dark">
              <MapPin className="text-primary" size={26} />
              <span>
                Our curriculum covers{" "}
                <strong>Physics, Chemistry, and Biology </strong>
                in detail, with practice modules, test series, and personalized
                mentoring. Students from{" "}
                <strong>
                  Akurdi Gaothan, Pradhikaran, and Walhekarwadi 
                </strong>{" "}
                attend our regular batches, along with aspirants from {" "}
                <strong>Nigdi, Chinchwad, and Bhakti Shakti Chowk,</strong>
                who choose ASQUARE for its proven academic excellence and expert faculty.
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
              Course Details (NEET UG) - Top NEET Coaching Classes in Akurdi
            </h3>

            <p className="fs-5">
              <strong>NEET UG</strong> is the gateway to top medical colleges
              across India offering{" "}
              <strong>MBBS, BDS, BAMS, BHMS, and other medical programs.</strong>
            </p>
            <p className="fs-5">
              At <strong>ASQUARE Academy Akurdi,</strong> our NEET programs are designed to build strong fundamentals, improve speed and accuracy, and ensure exam readiness through sustained practice and analytics.
            </p>
            <p className="fs-5">
              We combine conceptual teaching with consistent{" "}
              <strong>mock test series</strong> and performance reviews —
              positioning ASQUARE as{" "}
              <strong> Top NEET Coaching Institute in Akurdi and PCMC Pune.</strong>
            </p>

            <h4 className="fw-bold text-primary-emphasis mt-5 fs-3">
              Subjects Covered in NEET Classes at Akurdi, Pune
            </h4>

            <div className="mt-4">
              {subjectsCovered.map((subject, i) => (
                <SubjectCard key={i} {...subject} />
              ))}
            </div>

            <p className="fs-5">
              Each subject is taught with step-by-step conceptual explanation, practice, and assessment.
            </p>
          </div>

          {/* Right Column - Blue */}
          <div className="col-lg-6 p-5 p-lg-5 text-white lg-b-bg-b">
            <h5 className="fw-bold text-warning mb-4 fs-1">
              Program Duration and Batch Options — NEET Preparation in Akurdi, Pune
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
              Best NEET Coaching in Akurdi, Pune
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
              ASQUARE Academy's NEET Success - Proven Track Record{" "}
            </h4>
          </div>
          <div className="results-box-gradient">
            <p className="fs-5 text-dark mb-3 text-center">
              At <strong className="text-primary">ASQUARE Academy,</strong> we
              take pride in our consistent NEET results. Our students have
              secured admissions to India’s premier medical colleges such as
              <strong className="text-primary">
                {" "}
                 AIIMS, BJMC, AFMC, and DY Patil Medical College Pune.
              </strong>
            </p>
            <div className="d-flex align-items-center justify-content-center gap-2 text-primary">
              <CheckCircle size={24} />
              <p className="fs-5 fw-semibold mb-0">
                Our unique combination of mentorship, structured learning, and
                regular testing makes us one of the
                <strong>
                  {" "}
                  Top NEET Coaching Centre in Akurdi Pune.
                </strong>
              </p>
            </div>
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
                  the best NEET training institute in Akurdi and PCMC.
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
              Top NEET Coaching Institutes in Akurdi (PCMC).
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
            Enroll Now at <span>ASQUARE Academy - Akurdi, Pune</span>
          </h2>

          {/* Description */}
          <div className="mx-auto mb-5">
            <p className="lead text-secondary mb-3">
              If you’re searching for the{" "}
              <strong> Best NEET Coaching Classes in Akurdi, Pune, </strong> the{" "}
              look no further than
              <strong> ASQUARE Academy. </strong>
              With experienced teachers, structured test planning, and
              consistent student success, we’re the trusted name for
              <strong> NEET preparation in PCMC Pune.</strong>
            </p>

            <p className="d-flex flex-wrap justify-content-center align-items-center gap-2 text-dark">
              <MapPin className="text-primary" size={22} />
              <span>
                Convenient from{" "}
                <strong>
                 Akurdi Gaothan, Pradhikaran, Walhekarwadi, Bhakti Shakti Chowk, Sector 26, Nigdi and Chinchwad.
                </strong>
              </span>
            </p>
          </div>

          {/* Subheading */}
          <h4 className="fw-bold text-primary mb-4">
            Admissions Open — Limited Seats!
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

export default NEETAkurdi;
