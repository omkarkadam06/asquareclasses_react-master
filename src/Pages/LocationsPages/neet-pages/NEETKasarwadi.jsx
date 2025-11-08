import React, { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import locationBGImage from "../../../Assets/locationPageImages/neet/NEET slider PC4.jpeg";
import MobileBGImage from "../../../Assets/locationPageImages/neet/NEET slider mobile4.jpeg";
import image1 from "../../../Assets/locationPageImages/neet/NEET Page 14.jpeg";
import image2 from "../../../Assets/locationPageImages/neet/NEET Page 10.jpeg";
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

function NEETKasarwadi() {
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
    description: "Experienced mentors specializing in Physics, Chemistry, and Biology.",
  },
  {
    Icon: BookOpen,
    title: "NCERT-Aligned Learning",
    description: "Strong conceptual foundation with NEET-specific problem-solving strategies.",
  },
  {
    Icon: Target,
    title: "Small Batch Format",
    description: "Ensures individual attention and effective doubt clearance.",
  },
  {
    Icon: BarChart,
    title: "Regular Evaluations",
    description: "Weekly tests, monthly mocks, and sophisticated performance tracking.",
  },
  {
    Icon: Calendar,
    title: "Flexible Delivery",
    description: "Classroom and online formats available for all students.",
  },
  {
    Icon: Users,
    title: "Holistic Mentorship",
    description: "Supports NEET prep alongside board exam preparation.",
  },
];

  const subjectsCovered = [
  {
    title: "Physics",
    desc: "Concept-building combined with structured numerical practice.",
  },
  {
    title: "Chemistry",
    desc: "Thorough coverage of Physical, Organic, and Inorganic branches.",
  },
  {
    title: "Biology",
    desc: "NCERT-complete content, supportive diagrams, and scoring strategies.",
  },
];

  const programDurations = [
  {
    icon: Clock,
    title: "2-Year Integrated Program (Class 11 → 12)",
    desc: "Foundation-building + advanced NEET training.",
  },
  {
    icon: Target,
    title: "1-Year Target Program (Class 12)",
    desc: "Fast-paced revision with mock series and topic focus.",
  },
  {
    icon: School,
    title: "Crash Course",
    desc: "2–3 months of intensive preparation with PYQs and exam-focused drills.",
  },
  {
    icon: CalendarSync,
    title: "Dropper/Repeater Batch",
    desc: "One-year coaching for repeat aspirants, featuring personalized mentorship.",
  },
];

  const methodologySteps = [
  {
    Icon: Lightbulb,
    title: "Interactive Learning",
    description: "Interactive, concept-rich lectures for strong understanding.",
  },
  {
    Icon: BookOpen,
    title: "Practice",
    description: "Daily Practice Papers (DPPs) and structured assignments.",
  },
  {
    Icon: BarChart,
    title: "Assessment",
    description: "Frequent chapter-wise and full-length mock tests with analytics.",
  },
  {
    Icon: MessageCircle,
    title: "Doubt Resolution",
    description: "Individual doubt resolution sessions with expert faculty.",
  },
  {
    Icon: Calendar,
    title: "Progress Tracking",
    description: "Progress tracking with updates for students and parents.",
  },
];

  const faqData = [
  {
    q: "Who can join NEET coaching at ASQUARE?",
    a: "Students in Class XI, Class XII, and repeat-year NEET aspirants.",
  },
  {
    q: "Which subjects are covered?",
    a: "Complete NEET (UG) syllabus: Physics, Chemistry, and Biology.",
  },
  {
    q: "Do you offer mock test series?",
    a: "Yes—chapter-wise tests, weekly part-tests, and full-length mocks with feedback.",
  },
  {
    q: "What course durations are available?",
    a: "2-year integrated, 1-year target, 2–3 month crash, and 1-year repeater/dropper programs.",
  },
  {
    q: "How big are the batches?",
    a: "Small batches ensure personalized coaching and active doubt resolution.",
  },
  {
    q: "Do parents get progress updates?",
    a: "Yes—via performance reports and scheduled parent–teacher meetings.",
  },
  {
    q: "Is online coaching an option?",
    a: "Absolutely—choose between classroom and online formats.",
  },
];

const gridFeatures = [
  {
    Icon: Users,
    title: "Small batches for focused teaching",
    colorClass: "bg-gradient-blue",
  },
  {
    Icon: BookOpen,
    title: "Updated, dual-format study materials (printed + digital)",
    colorClass: "bg-gradient-purple",
  },
  {
    Icon: Calendar,
    title: "Regular parent-teacher meetings and performance tracking",
    colorClass: "bg-gradient-green",
  },
  {
    Icon: Award,
    title: "Workshops on speed, accuracy, and exam mindset",
    colorClass: "bg-gradient-orange",
  },
  {
    Icon: TrendingUp,
    title: "Known across NEET coaching hubs in Kasarwadi, Pimpri-Chinchwad (PCMC), and central Pune for consistent excellence",
    colorClass: "bg-gradient-red",
  },
  {
    Icon: BarChart,
    title: "Advanced performance analytics and digital progress tracking",
    colorClass: "bg-gradient-teal",
  },
  {
    Icon: Lightbulb,
    title: "Comprehensive student mentorship program for academic and emotional support",
    colorClass: "bg-gradient-pink",
  },
];

  return (
    <>
      <Helmet>
        <title>
          Best NEET Coaching Classes in Kasarwadi Pune | Top NEET Preparation – ASQUARE Academy
        </title>
        <meta
          name="title"
          content="Best NEET Coaching Classes in Kasarwadi Pune | Top NEET Preparation – ASQUARE Academy"
        />
        <meta
          name="description"
          content="Join ASQUARE Academy for expert NEET Coaching Classes in Kasarwadi Pune. Small batches, mock tests & personalized guidance for medical entrance success."
        />
        <meta
          name="keywords"
          content="NEET coaching classes in Kasarwadi pune Best NEET Coaching in Kasarwadi pune Top NEET Coaching Classes Kasarwadi pune NEET Advanced Preparation Kasarwadi pune NEET Classes in Kasarwadi pune Best NEET Classes in Kasarwadi pune Top NEET Classes in Kasarwadi pune"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{`
        {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-kasarwadi-pune/#localbusiness",
      "name": "ASQUARE Academy - NEET Coaching Kasarwadi Pune",
      "description": "ASQUARE Academy offers the best NEET Coaching Classes in Kasarwadi Pune with expert faculty, small batches, and structured mock test programs for NEET aspirants.",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "telephone": "+91-9766118877",
      "url": "https://www.asquareclasses.com/neet-coaching-classes-institute-kasarwadi-pune/",
      "priceRange": "₹₹",
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kasarwadi, Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411034",
        "addressCountry": "IN"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-kasarwadi-pune/#webpage",
      "url": "https://www.asquareclasses.com/neet-coaching-classes-institute-kasarwadi-pune/",
      "name": "NEET Coaching Classes in Kasarwadi Pune – ASQUARE Academy",
      "description": "Join ASQUARE Academy for top NEET Coaching in Kasarwadi Pune. Focused learning, expert mentors, and structured tests for medical entrance preparation.",
      "inLanguage": "en-IN"
    },
    {
      "@type": "EducationalOrganization",
      "name": "ASQUARE Academy",
      "url": "https://www.asquareclasses.com/",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9766118877",
        "contactType": "Admissions",
        "areaServed": "IN"
      },
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune"
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
          "name": "NEET Coaching Classes in Kasarwadi Pune",
          "item": "https://www.asquareclasses.com/neet-coaching-classes-institute-kasarwadi-pune/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can join NEET coaching at ASQUARE?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students in Class XI, Class XII, and repeat-year NEET aspirants can join our NEET coaching programs at ASQUARE Kasarwadi Pune."
          }
        },
        {
          "@type": "Question",
          "name": "Which subjects are covered?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our NEET classes cover the complete NEET (UG) syllabus, including Physics, Chemistry, and Biology."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer mock test series?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we provide chapter-wise tests, weekly part-tests, and full-length mock exams with performance feedback."
          }
        },
        {
          "@type": "Question",
          "name": "What course durations are available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer 2-year integrated, 1-year target, crash (2–3 month), and repeater/dropper NEET programs."
          }
        },
        {
          "@type": "Question",
          "name": "How big are the batches?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Small batch sizes ensure personalized attention, individual mentoring, and effective doubt-solving."
          }
        },
        {
          "@type": "Question",
          "name": "Do parents get progress updates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, regular performance reports and parent–teacher meetings are conducted to track student progress."
          }
        },
        {
          "@type": "Question",
          "name": "Is online coaching an option?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely! Students can choose between classroom and online NEET coaching modes as per their convenience."
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
                Empower Your NEET Journey with {" "}
                <span className="gradient-text-yellow d-inline-block">
                ASQUARE Academy
                </span>
              </h1>
              <p className="fs-5 text-white mb-3 lh">
                Looking for the <strong> best NEET coaching classes in Kasarwadi, Pune? </strong> At
                 <strong> ASQUARE Academy, </strong>
                we deliver focused NEET UG preparation that blends clarity, consistency, and strategy.
                 <strong> NEET coaching classes in Kasarwadi, Pune </strong> are tailored to build your strengths, sharpen your strategy, and ensure top-tier performance. Recognized as one of the <strong> best NEET coaching institutes in Pune, </strong>we offer structured programs, personalized mentorship, and proven results.
              </p>
              <div className="hero-location-info d-flex align-items-start gap-3">
                <MapPin
                  size={24}
                  color="#FFCB03"
                  className="flex-shrink-0 mt-1"
                />
                <span className="text-white">
                  Trusted by students from
                  <strong>
                    {" "}
                     Kasarwadi, Pimple Gurav, Pimple Saudagar, Sangvi, Rahatani, Wakad, and Hinjawadi,{" "}
                  </strong>
                  we offer expert coaching, mock-driven practice, and personalized mentorship to help you secure a medical seat.
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
                Best NEET Coaching in Kasarwadi?
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
                  Our holistic approach ensures that students gain strong subject mastery, accuracy, and exam confidence.
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
            <span> ASQUARE Academy Kasarwadi</span>
          </h2>

          {/* Description */}
          <div className="mx-auto mb-5">
            <p className="lead text-secondary mb-3">
              The<strong> NEET course at ASQUARE Academy, Kasarwadi, </strong>
              provides a step-by-step approach to mastering NEET concepts. Our expert faculty ensures that every student understands the theory, practices problem-solving, and applies knowledge effectively under exam conditions.
            </p>

            <p className="d-flex flex-wrap justify-content-center align-items-center gap-2 text-dark">
              <MapPin className="text-primary" size={26} />
              <span>
                Students from
                <strong>
                  {" "}
                  Kasarwadi, Pimple Gurav, Pimple Saudagar, Sangvi, Rahatani, Wakad, Hinjawadi, and across PCMC.{" "}
                </strong>
                benefit from our consistent test schedule, personalized mentoring, and comprehensive NEET syllabus coverage.{" "}
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
              Course Details (NEET UG) - Top NEET Coaching Classes in Kasarwadi
            </h3>

            <p className="fs-5">
              <strong>NEET UG</strong> is India’s national entrance test for{" "}
              <strong>
                MBBS, BDS, BAMS, BHMS, and allied medical programs.
              </strong>
              At <strong> ASQUARE Academy Kasarwadi,</strong>
             our curriculum focuses on building a solid conceptual base while ensuring complete exam readiness through mock tests and performance tracking.
            </p>
            <p className="fs-5">
              Our consistent results make ASQUARE one of the{" "}
              <strong> Top NEET Coaching Institutes in Kasarwadi Pune and PCMC. </strong>
            </p>
            <h4 className="fw-bold text-primary-emphasis mt-5 fs-3">
              Subjects Covered in NEET Classes at Kasarwadi
            </h4>

            <div className="mt-4">
              {subjectsCovered.map((subject, i) => (
                <SubjectCard key={i} {...subject} />
              ))}
            </div>

            <p className="fs-5">
              Our <strong> NEET Coaching in Kasarwadi Pune </strong>ensures holistic preparation and exam-oriented accuracy.
            </p>
          </div>

          {/* Right Column - Blue */}
          <div className="col-lg-6 p-5 p-lg-5 text-white lg-b-bg-b">
            <h5 className="fw-bold text-warning mb-4 fs-1">
              Program Duration and Batch Options — NEET Preparation in Kasarwadi
            </h5>

            <div className="d-flex flex-column gap-4">
              {programDurations.map((program, i) => (
                <ProgramCard key={i} {...program} />
              ))}
            </div>

            <div className="mt-5 p-4 rounded-4 border border-warning border-opacity-50 bg-brown">
              <p className="fs-5 mb-0">
                All batches are tailored to help students achieve the highest level of preparedness before NEET-UG.
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
              Best NEET Coaching in Kasarwadi,
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
              At <strong> ASQUARE Academy </strong>
              our students have consistently achieved top ranks in NEET, earning admission to premier colleges such as {" "}
              <strong className="text-primary">
                AIIMS, state medical colleges, and prestigious private institutions.{" "}
              </strong>
              Our disciplined approach, expert teaching, and consistent mock testing make us the
              <strong> leading NEET coaching centres in Kasarwadi and the wider PCMC region. </strong>
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
                This unique four-step methodology has helped ASQUARE become one of the {" "}
                <strong>
                  Best NEET Training Institutes in Kasarwadi PCMC.
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
              Top NEET Coaching Institutes in Kasarwadi.
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
            Join <span>  ASQUARE Academy – Kasarwadi Today</span>
          </h2>

          {/* Description */}
          <div className="mx-auto mb-5">
            <p className="lead text-secondary mb-3">
              Start your journey with the {" "}
              <strong> NEET coaching classes in Kasarwadi, Pune, </strong>
             With expert faculty, structured learning plans, and consistent support, ASQUARE Academy is your partner in NEET success.
            </p>

            <p className="d-flex flex-wrap justify-content-center align-items-center gap-2 text-dark">
              <MapPin className="text-primary" size={22} />
              <span>
                Conveniently located and accessible for students from {" "}
                <strong>
                  {" "}Kasarwadi, Pimple Gurav, Pimple Saudagar, Sangvi, Rahatani, Wakad, Hinjawadi, and across PCMC.
                </strong>
              </span>
            </p>
          </div>

          {/* Subheading */}
          <h4 className="fw-bold text-primary mb-4">
             Enroll Now – Limited Seats Available!
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

export default NEETKasarwadi;
