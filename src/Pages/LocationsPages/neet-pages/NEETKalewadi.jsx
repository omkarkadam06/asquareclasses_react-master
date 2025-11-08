import React, { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import locationBGImage from "../../../Assets/locationPageImages/neet/NEET slider PC.jpeg";
import MobileBGImage from "../../../Assets/locationPageImages/neet/NEET slider mobile.jpeg";
import image1 from "../../../Assets/locationPageImages/neet/NEET Page 17.jpeg";
import image2 from "../../../Assets/locationPageImages/neet/NEET Page 13.jpeg";
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

function NEETKalewadi() {
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
      title: "Dedicated NEET Educators",
      description:
        "Skilled faculty in Physics, Chemistry, and Biology, passionate about your NEET journey.",
    },
    {
      Icon: BookOpen,
      title: "NCERT-Centric Teaching with NEET Precision",
      description:
        "Deep conceptual grounding paired with exam-ready problem-solving techniques.",
    },
    {
      Icon: Target,
      title: "Focused Learning Environment",
      description:
        "Small batch sizes ensure targeted attention and uncluttered doubt resolution.",
    },
    {
      Icon: BarChart,
      title: "Continuous Progress Evaluation",
      description:
        "Rigorous weekly tests, mock exams, and holistic performance analytics.",
    },
    {
      Icon: Calendar,
      title: "Flexible Learning Formats",
      description:
        "Comprehensive classroom-based and online coaching modes to fit modern learning styles.",
    },
    {
      Icon: Users,
      title: "Balanced Support System",
      description:
        "Expert guidance for excelling at NEET without compromising school board commitments.",
    },
  ];

  const subjectsCovered = [
    {
      title: "Physics",
      desc: "Clear explanation of core concepts with extensive problem-solving drills.",
    },
    {
      title: "Chemistry",
      desc: "Strong coverage across Physical, Organic, and Inorganic disciplines with NEET-smart methods.",
    },
    {
      title: "Biology",
      desc: "Comprehensive NCERT-aligned lessons, diagrammatic emphasis, and topic mastery techniques.",
    },
  ];

  const programDurations = [
    {
      icon: Clock,
      title: "2-Year Integrated (Class 11 → 12)",
      desc: "Build knowledge and exam readiness over two years with progressive learning.",
    },
    {
      icon: Target,
      title: "1-Year Target (Class 12)",
      desc: "Fast-paced, focused curriculum with mock-driven preparation.",
    },
    {
      icon: School,
      title: "Crash Course (2–3 Months)",
      desc: "Condensed, high-impact training with PYQs and mock-based drill practice.",
    },
    {
      icon: CalendarSync,
      title: "Dropper/Repeater Batch",
      desc: "Year-long, mentor-led revision and practice for aspirants retaking NEET.",
    },
  ];

  const methodologySteps = [
    {
      Icon: Lightbulb,
      title: "Conceptual Lecture Sessions",
      description:
        "Conceptual lecture sessions designed for immersive learning",
    },
    {
      Icon: BookOpen,
      title: "Practice & Revision",
      description:
        "Daily Practice Papers (DPPs) and well-structured revision material",
    },
    {
      Icon: BarChart,
      title: "Assessment & Analytics",
      description:
        "Chapter-wise tests, mock exams, and performance-driven analytics",
    },
    {
      Icon: MessageCircle,
      title: "Personalized Doubt Sessions",
      description: "Personalized doubt sessions for targeted problem-solving",
    },
    {
      Icon: Calendar,
      title: "Performance Tracking",
      description: "Regular reviews and PTMs to track and accelerate growth",
    },
  ];

  const faqData = [
    {
      q: "Who is eligible for NEET coaching here?",
      a: "Students in Class XI, Class XII, and repeat-year NEET aspirants are welcome.",
    },
    {
      q: "What subjects are taught?",
      a: "All NEET subjects—Physics, Chemistry, and Biology—are comprehensively covered.",
    },
    {
      q: "Are mock tests included?",
      a: "Yes — frequent chapter assessments, weekly tests, and full-length mock exams are part of our offering.",
    },
    {
      q: "What course options are available?",
      a: "2-year integrated, 1-year target, 2–3 month crash courses, and dropper/repeater batches.",
    },
    {
      q: "How large are the coaching groups?",
      a: "Batches remain small to ensure personalized mentorship and quick doubt resolution.",
    },
    {
      q: "How are parents kept updated?",
      a: "Through periodic progress reports and parent–teacher meetings.",
    },
    {
      q: "Is online instruction available?",
      a: "Yes, both classroom and online classes are offered to fit your preferences.",
    },
  ];

  const gridFeatures = [
    {
      Icon: Users,
      title: "Small batch sizes for attention-rich learning",
      colorClass: "bg-gradient-blue",
    },
    {
      Icon: BookOpen,
      title:
        "Dual-mode study materials, both printed and digital, updated for NEET relevance",
      colorClass: "bg-gradient-purple",
    },
    {
      Icon: Calendar,
      title: "Parent–teacher collaboration via regular performance sessions",
      colorClass: "bg-gradient-green",
    },
    {
      Icon: Award,
      title:
        "Workshops focusing on accuracy, speed, and an optimal test-taking mindset",
      colorClass: "bg-gradient-orange",
    },
    {
      Icon: BarChart,
      title: "Advanced performance analytics and digital progress tracking",
      colorClass: "bg-gradient-teal",
    },
    {
      Icon: TrendingUp,
      title:
        "Renowned across Kalewadi, Wakad, Sangvi, Aundh, and PCMC areas for consistent NEET outcomes",
      colorClass: "bg-gradient-red",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Best NEET Coaching Classes in Kalewadi Pune | ASQUARE Academy
        </title>
        <meta
          name="title"
          content="Best NEET Coaching Classes in Kalewadi Pune | ASQUARE Academy"
        />
        <meta
          name="description"
          content="Join ASQUARE Academy for the best NEET coaching classes in Kalewadi, Pune. Expert faculty, small batches, online & offline learning, regular mock tests, and focused preparation for Physics, Chemistry, and Biology."
        />
        <meta
          name="keywords"
          content="NEET coaching classes in kalewadi pune Best NEET Coaching in kalewadi Pune Top NEET Coaching Classes kalewadi pune NEET Advanced Preparation kalewadi pune NEET Classes in kalewadi pune Best NEET Classes in kalewadi pune Top NEET Classes in kalewadi pune"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{`
        {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "name": "ASQUARE Academy",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "url": "https://www.asquareclasses.com/neet-coaching-classes-institute-kalewadi-pune",
      "telephone": "9766118877",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kalewadi",
        "addressRegion": "Pune",
        "addressCountry": "India"
      },
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune"
      ],
      "description": "ASQUARE Academy offers the best NEET coaching classes in Kalewadi, Pune, with expert faculty, personalized mentoring, and both classroom and online learning options."
    },
    {
      "@type": "WebPage",
      "name": "NEET Coaching Classes in Kalewadi Pune | ASQUARE Academy",
      "url": "https://www.asquareclasses.com/neet-coaching-classes-institute-kalewadi-pune",
      "description": "Enroll at ASQUARE Academy for top NEET coaching in Kalewadi Pune with expert faculty and mock tests for comprehensive NEET preparation.",
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
      "@type": "EducationalOrganization",
      "name": "ASQUARE Academy",
      "url": "https://www.asquareclasses.com/neet-coaching-classes-institute-kalewadi-pune",
      "description": "ASQUARE Academy provides NEET coaching in Kalewadi Pune for Class XI, XII, and repeaters. Courses include Physics, Chemistry, and Biology with test series and doubt-solving.",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "9766118877",
        "contactType": "Customer Support",
        "areaServed": "IN"
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
          "name": "NEET Coaching Classes",
          "item": "https://www.asquareclasses.com/neet-coaching-classes/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Kalewadi Pune",
          "item": "https://www.asquareclasses.com/neet-coaching-classes-institute-kalewadi-pune"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who is eligible for NEET coaching here?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students in Class XI, Class XII, and repeat-year NEET aspirants are eligible to join ASQUARE Academy in Kalewadi Pune."
          }
        },
        {
          "@type": "Question",
          "name": "What subjects are taught?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE Academy covers all NEET subjects — Physics, Chemistry, and Biology."
          }
        },
        {
          "@type": "Question",
          "name": "Are mock tests included?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, the course includes chapter-wise tests, weekly assessments, and full-length NEET mock exams."
          }
        },
        {
          "@type": "Question",
          "name": "What course options are available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE Academy offers 2-year integrated, 1-year target, crash, and dropper batches for NEET aspirants."
          }
        },
        {
          "@type": "Question",
          "name": "How large are the coaching groups?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Small batch sizes ensure personalized attention and faster doubt resolution."
          }
        },
        {
          "@type": "Question",
          "name": "How are parents kept updated?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Parents receive regular performance updates and are invited to periodic parent–teacher meetings."
          }
        },
        {
          "@type": "Question",
          "name": "Is online instruction available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, ASQUARE Academy provides both online and classroom NEET coaching in Kalewadi Pune."
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
                Achieve NEET Excellence with{" "}
                <span className="gradient-text-yellow d-inline-block">
                  ASQUARE Academy – Kalewadi Branch
                </span>
              </h1>
              <p className="fs-5 text-white mb-3 lh">
                Looking for top-tier{" "}
                <strong> NEET coaching in Kalewadi, Pune? </strong> At
                <strong> ASQUARE Academy, </strong>
                we deliver a perfect blend of expertise, strategy, and
                personalized learning.
                <strong> NEET coaching classes Kalewadi and PCMC </strong> are
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
                  Students from
                  <strong>
                    {" "}
                    Kalewadi, Wakad, Sangvi, Pimple Saudagar, Aundh, Pimpri, and
                    surrounding PCMC neighborhoods{" "}
                  </strong>
                  rely on our proven structure and track record to turn their
                  medical ambitions into success stories.
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
                Best NEET Coaching in Kalewadi?
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
            <span> ASQUARE Academy Kalewadi</span>
          </h2>

          {/* Description */}
          <div className="mx-auto mb-5">
            <p className="lead text-secondary mb-3">
              The<strong> NEET course at ASQUARE Academy, Kalewadi, </strong>
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
                  Kalewadi, Wakad, Sangvi, Pimple Saudagar, Aundh, Pimpri, and
                  surrounding PCMC neighborhoods{" "}
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
              Course Details (NEET UG) - Top NEET Coaching Classes in Kalewadi
            </h3>

            <p className="fs-5">
              <strong>NEET UG</strong> is India’s national entrance test for{" "}
              <strong>
                MBBS, BDS, BAMS, BHMS, and allied medical courses.
              </strong>
              At <strong> ASQUARE Academy Kalewadi,</strong>
              our curriculum focuses on building a solid conceptual base while
              ensuring complete exam readiness through mock tests and
              performance tracking.
            </p>
            <p className="fs-5">
              Our consistent results make ASQUARE one of the{" "}
              <strong> NEET coaching classes in Kalewadi </strong>
            </p>
            <h4 className="fw-bold text-primary-emphasis mt-5 fs-3">
              Subjects Covered in NEET Classes at Kalewadi
            </h4>

            <div className="mt-4">
              {subjectsCovered.map((subject, i) => (
                <SubjectCard key={i} {...subject} />
              ))}
            </div>

            <p className="fs-5">
              Our <strong> NEET Coaching in Kalewadi Pune </strong>ensures
              holistic preparation and exam-oriented accuracy.
            </p>
          </div>

          {/* Right Column - Blue */}
          <div className="col-lg-6 p-5 p-lg-5 text-white lg-b-bg-b">
            <h5 className="fw-bold text-warning mb-4 fs-1">
              Program Duration and Batch Options — NEET Preparation in Kalewadi
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
              Best NEET Coaching in Kalewadi,
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
              At <strong> ASQUARE Academy – Kalewadi </strong>
              our students have consistently achieved top ranks in NEET, earning
              admission to premier colleges such as{" "}
              <strong className="text-primary">
                {" "}AIIMS, state medical colleges, and prestigious private
                institutions.{" "}
              </strong>
              Our disciplined approach, expert teaching, and consistent mock
              testing make us the
              <strong>
                {" "}
                most trusted NEET coaching centers in Kalewadi and the broader
                PCMC region.{" "}
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
                This unique four-step methodology has helped ASQUARE become one
                of the{" "}
                <strong>Best NEET Training Institutes in Kalewadi PCMC.</strong>
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
              Top NEET Coaching Institutes in Kalewadi.
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
            Enroll at <span> ASQUARE Academy – Kalewadi Pune</span>
          </h2>

          {/* Description */}
          <div className="mx-auto mb-5">
            <p className="lead text-secondary mb-3">
              If you’re looking for the{" "}
              <strong> Best NEET Coaching Classes in Kalewadi, Pune, </strong>
              join ASQUARE Academy today. With expert mentors, regular testing,
              and structured NEET training, success is within your reach.
            </p>

            <p className="d-flex flex-wrap justify-content-center align-items-center gap-2 text-dark">
              <MapPin className="text-primary" size={22} />
              <span>
                Conveniently accessible for students from{" "}
                <strong>
                  {" "}
                  Kalewadi, Rahatan, Pavana Nagar, Sai Chowk, Tapkir Nagar,
                  Dange Chowk, Pimpri, Wakad, and Thergaon.
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

export default NEETKalewadi;
