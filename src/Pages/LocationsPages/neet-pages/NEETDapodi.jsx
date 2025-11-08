import React, { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import locationBGImage from "../../../Assets/locationPageImages/neet/NEET slider PC6.jpeg";
import MobileBGImage from "../../../Assets/locationPageImages/neet/NEET slider mobile6.jpeg";
import image1 from "../../../Assets/locationPageImages/neet/NEET Page 16.jpeg";
import image2 from "../../../Assets/locationPageImages/neet/NEET Page 12.jpeg";
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

function NEETDapodi() {
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
        "Highly qualified teachers for Physics, Chemistry, and Biology.",
    },
    {
      Icon: BookOpen,
      title: "Complete NEET Syllabus Coverage",
      description: "NCERT-based with advanced NEET problem-solving focus.",
    },
    {
      Icon: Target,
      title: "Small Batch Size",
      description: "Personalized coaching and doubt-clearing support.",
    },
    {
      Icon: BarChart,
      title: "Regular Tests & Analysis",
      description:
        "Weekly chapter tests, mock exams, and detailed feedback reports.",
    },
    {
      Icon: Calendar,
      title: "Flexible Learning Options",
      description: "Classroom coaching and online batches available.",
    },
    {
      Icon: Users,
      title: "Mentorship & Support",
      description: "Guidance for both NEET success and board exam preparation.",
    },
  ];

  const subjectsCovered = [
    {
      title: "Physics",
      desc: "Concept-driven learning with numerical problem-solving.",
    },
    {
      title: "Chemistry",
      desc: "Detailed focus on Physical, Organic, and Inorganic Chemistry.",
    },
    {
      title: "Biology",
      desc: "NCERT line-by-line coverage with diagram-based learning and topic analysis.",
    },
  ];

  const programDurations = [
    {
      icon: Clock,
      title: "2-Year Integrated Program (Class 11 → 12)",
      desc: "Build a strong base with concept clarity and test practice.",
    },
    {
      icon: Target,
      title: "1-Year Target Program (Class 12)",
      desc: "Quick revision with exam-focused tests and strategy building.",
    },
    {
      icon: School,
      title: "Crash Course (2–3 Months)",
      desc: "Final sprint with PYQs, mock exams, and targeted revision.",
    },
    {
      icon: CalendarSync,
      title: "Dropper/Repeater Batch",
      desc: "One-year intensive program for repeat aspirants with personalized mentoring.",
    },
  ];

  const methodologySteps = [
    {
      Icon: Lightbulb,
      title: "Interactive Learning",
      description: "Daily interactive classroom lectures.",
    },
    {
      Icon: BookOpen,
      title: "Practice",
      description: "Structured assignments and Daily Practice Papers (DPPs).",
    },
    {
      Icon: BarChart,
      title: "Assessment",
      description: "Chapter-wise tests, unit tests, and full mock exams.",
    },
    {
      Icon: MessageCircle,
      title: "Doubt Resolution",
      description: "One-on-one doubt-solving support.",
    },
    {
      Icon: Calendar,
      title: "Progress Tracking",
      description: "Parent–student performance reviews and improvement plans.",
    },
  ];

  const faqData = [
    {
      q: "Who can join NEET coaching at ASQUARE Dapodi?",
      a: "Students in Class XI, Class XII, or drop-year NEET aspirants.",
    },
    {
      q: "Which subjects are included?",
      a: "Physics, Chemistry, and Biology (full NEET syllabus).",
    },
    {
      q: "Do you conduct mock tests?",
      a: "Yes—weekly, monthly, and full-length NEET pattern mocks are provided.",
    },
    {
      q: "What batches are available?",
      a: "2-year, 1-year, crash courses, and dropper/repeater programs.",
    },
    {
      q: "How big are the batches?",
      a: "We keep batches small for better teacher–student interaction.",
    },
    {
      q: "Do parents receive updates?",
      a: "Yes, through regular progress reports and PTMs.",
    },
    {
      q: "Is online NEET coaching available?",
      a: "Yes, students can opt for classroom or online mode.",
    },
  ];

  const gridFeatures = [
    {
      Icon: Users,
      title: "Small batches for focused learning",
      colorClass: "bg-gradient-blue",
    },
    {
      Icon: BookOpen,
      title:
        "Updated study material (digital + printed) aligned with NEET syllabus",
      colorClass: "bg-gradient-purple",
    },
    {
      Icon: Calendar,
      title: "Regular parent-teacher interactions for performance tracking",
      colorClass: "bg-gradient-green",
    },
    {
      Icon: BarChart,
      title: "Advanced performance analytics and digital progress tracking",
      colorClass: "bg-gradient-teal",
    },
    {
      Icon: Award,
      title: "Special workshops on exam mindset, time management, and accuracy",
      colorClass: "bg-gradient-orange",
    },
    {
      Icon: TrendingUp,
      title: "Trusted NEET coaching centre in Dapodi, Kasarwadi, and PCMC",
      colorClass: "bg-gradient-red",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Best NEET Coaching Classes in Dapodi Pune | ASQUARE Academy
        </title>
        <meta
          name="title"
          content="Best NEET Coaching Classes in Dapodi Pune | ASQUARE Academy"
        />
        <meta
          name="description"
          content="Join ASQUARE Academy for top NEET coaching classes in Dapodi Pune. Expert faculty, small batches, and online options for Class XI, XII, and drop-year aspirants."
        />
        <meta
          name="keywords"
          content="NEET coaching classes in dapodi pune Best NEET Coaching in dapodi Pune Top NEET Coaching Classes dapodi pune NEET Advanced Preparation dapodi pune NEET Classes in dapodi pune Best NEET Classes in dapodi pune Top NEET Classes in dapodi pune"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{`
        {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-dapodi-pune#localbusiness",
      "name": "ASQUARE Academy Dapodi",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "url": "https://www.asquareclasses.com/neet-coaching-classes-institute-dapodi-pune",
      "telephone": "+919766118877",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dapodi",
        "addressRegion": "Pune, Maharashtra",
        "addressCountry": "India"
      },
      "priceRange": "$$",
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune"
      ],
      "description": "ASQUARE Academy offers the best NEET coaching classes in Dapodi Pune for Class XI, XII, and drop-year aspirants with expert faculty and mock test series."
    },
    {
      "@type": "EducationalOrganization",
      "@id": "https://www.asquareclasses.com/#organization",
      "name": "ASQUARE Academy",
      "url": "https://www.asquareclasses.com/",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+919766118877",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi", "Marathi"]
      },
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune"
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-dapodi-pune#webpage",
      "url": "https://www.asquareclasses.com/neet-coaching-classes-institute-dapodi-pune",
      "name": "Best NEET Coaching Classes in Dapodi Pune | ASQUARE Academy",
      "description": "Join ASQUARE Academy’s NEET coaching in Dapodi Pune with expert faculty, small batches, and personalized test preparation for Class XI, XII, and droppers.",
      "publisher": {
        "@id": "https://www.asquareclasses.com/#organization"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-dapodi-pune#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can join NEET coaching at ASQUARE Dapodi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students in Class XI, Class XII, or drop-year NEET aspirants can join ASQUARE Academy Dapodi."
          }
        },
        {
          "@type": "Question",
          "name": "Which subjects are included?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE Academy covers the complete NEET syllabus: Physics, Chemistry, and Biology."
          }
        },
        {
          "@type": "Question",
          "name": "Do you conduct mock tests?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes—weekly, monthly, and full-length NEET pattern mock tests are conducted regularly."
          }
        },
        {
          "@type": "Question",
          "name": "What batches are available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer 2-year, 1-year, crash courses, and dropper/repeater programs for NEET aspirants."
          }
        },
        {
          "@type": "Question",
          "name": "How big are the batches?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE keeps batch sizes small to ensure personalized attention and better teacher–student interaction."
          }
        },
        {
          "@type": "Question",
          "name": "Do parents receive updates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, regular progress reports and PTMs are held to keep parents informed about student performance."
          }
        },
        {
          "@type": "Question",
          "name": "Is online NEET coaching available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, ASQUARE Academy offers both classroom and online NEET coaching options."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-dapodi-pune#breadcrumb",
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
          "name": "NEET Coaching Classes in Dapodi Pune",
          "item": "https://www.asquareclasses.com/neet-coaching-classes-institute-dapodi-pune"
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
                Build a Strong Medical Future with{" "}
                <span className="gradient-text-yellow d-inline-block">
                  ASQUARE Academy – Dapodi
                </span>
              </h1>
              <p className="fs-5 text-white mb-3 lh">
                Searching for the{" "}
                <strong> best NEET coaching classes in Dapodi, Pune? </strong>{" "}
                At
                <strong> ASQUARE Academy, </strong>
                we specialize in structured NEET UG preparation that combines
                concept clarity, practice, and performance tracking. Recognized
                as a trusted
                <strong> NEET coaching classes Dapodi and PCMC </strong> are
                tailored to build your strengths, sharpen your strategy, and
                ensure top-tier performance. Recognized as one of the{" "}
                <strong> best NEET coaching institutes in Pune, </strong>we
                offer structured programs, personalized mentorship, and proven
                results.
              </p>
              <div className="hero-location-info d-flex align-items-start gap-3">
                <MapPin
                  size={24}
                  color="#FFCB03"
                  className="flex-shrink-0 mt-1"
                />
                <span className="text-white">
                  we help students from
                  <strong>
                    {" "}
                    Dapodi, Kasarwadi, Sangvi, Pimple Gurav, Bopkhel, and Khadki{" "}
                  </strong>
                  achieve their medical dreams with expert guidance and proven
                  results.
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
                Best NEET Coaching in Dapodi?
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
                  Our holistic approach ensures that students gain strong
                  subject mastery, accuracy, and exam confidence.
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
            <span> ASQUARE Academy Dapodi</span>
          </h2>

          {/* Description */}
          <div className="mx-auto mb-5">
            <p className="lead text-secondary mb-3">
              The<strong> NEET course at ASQUARE Academy, Dapodi, </strong>
              provides a step-by-step approach to mastering NEET concepts. Our
              expert faculty ensures that every student understands the theory,
              practices problem-solving, and applies knowledge effectively under
              exam conditions.
            </p>

            <p className="d-flex flex-wrap justify-content-center align-items-center gap-2 text-dark">
              <MapPin className="text-primary" size={26} />
              <span>
                Students from
                <strong>
                  {" "}
                  Dapodi, Kasarwadi, Sangvi, Pimple Gurav, Bopkhel, and Khadki,{" "}
                </strong>
                benefit from our consistent test schedule, personalized
                mentoring, and comprehensive NEET syllabus coverage.{" "}
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
              Course Details (NEET UG) - Top NEET Coaching Classes in Dapodi
            </h3>

            <p className="fs-5">
              <strong>NEET UG</strong> is India’s national entrance test for{" "}
              <strong>
                MBBS, BDS, BAMS, BHMS, and allied medical courses.
              </strong>
              At <strong> ASQUARE Academy Dapodi,</strong>
              our curriculum focuses on building a solid conceptual base while
              ensuring complete exam readiness through mock tests and
              performance tracking.
            </p>
            <p className="fs-5">
              Our consistent results make ASQUARE one of the{" "}
              <strong> NEET coaching classes in Dapodi </strong>
            </p>
            <h4 className="fw-bold text-primary-emphasis mt-5 fs-3">
              Subjects Covered in NEET Classes at Dapodi
            </h4>

            <div className="mt-4">
              {subjectsCovered.map((subject, i) => (
                <SubjectCard key={i} {...subject} />
              ))}
            </div>

            <p className="fs-5">
              Our <strong> NEET Coaching in Dapodi Pune </strong>ensures
              holistic preparation and exam-oriented accuracy.
            </p>
          </div>

          {/* Right Column - Blue */}
          <div className="col-lg-6 p-5 p-lg-5 text-white lg-b-bg-b">
            <h5 className="fw-bold text-warning mb-4 fs-1">
              Program Duration and Batch Options — NEET Preparation in Dapodi
            </h5>

            <div className="d-flex flex-column gap-4">
              {programDurations.map((program, i) => (
                <ProgramCard key={i} {...program} />
              ))}
            </div>

            <div className="mt-5 p-4 rounded-4 border border-warning border-opacity-50 bg-brown">
              <p className="fs-5 mb-0">
                All batches are tailored to help students achieve the highest
                level of preparedness before NEET-UG.
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
              Best NEET Coaching in Dapodi,
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
              At <strong> ASQUARE Academy – Dapodi </strong>
              our students have consistently achieved top ranks in NEET, earning
              admission to premier colleges such as{" "}
              <strong className="text-primary">
                {" "}AIIMS, state medical colleges, and prestigious private
                institutions.{" "}
              </strong>
              Our disciplined approach, expert teaching, and consistent mock
              testing make us the
              <strong> best NEET coaching classes in Pune. </strong>
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
                This unique four-step methodology has helped ASQUARE become one
                of the{" "}
                <strong>Best NEET Training Institutes in Dapodi PCMC.</strong>
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
              Top NEET Coaching Institutes in Dapodi.
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
            Enroll at <span> ASQUARE Academy – Dapodi Today</span>
          </h2>

          {/* Description */}
          <div className="mx-auto mb-5">
            <p className="lead text-secondary mb-3">
              Join the{" "}
              <strong> best NEET coaching classes in Dapodi, Pune </strong>
              with ASQUARE Academy. With expert teaching, structured study
              plans, and consistent results, we’re your partner in medical exam
              success.
            </p>

            <p className="d-flex flex-wrap justify-content-center align-items-center gap-2 text-dark">
              <MapPin className="text-primary" size={22} />
              <span>
                Conveniently accessible for students from{" "}
                <strong>
                  {" "}
                  Dapodi, Kasarwadi, Pimple Gurav, Sangvi, Bopkhel, Khadki, and
                  across the PCMC region.
                </strong>
              </span>
            </p>
          </div>

          {/* Subheading */}
          <h4 className="fw-bold text-primary mb-4">
            Limited seats – Enroll Now!
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

export default NEETDapodi;
