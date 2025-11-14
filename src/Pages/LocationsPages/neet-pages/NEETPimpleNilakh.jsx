import React, { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import locationBGImage from "../../../Assets/locationPageImages/neet/NEET slider PC5.jpeg";
import MobileBGImage from "../../../Assets/locationPageImages/neet/NEET slider mobile5.jpeg";
import image1 from "../../../Assets/locationPageImages/neet/NEET Page 22.jpeg";
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

function NEETPimpleNilakh() {
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
    title: "Dedicated Faculty",
    description:
      "Experts in Physics, Chemistry, and Biology with years of NEET coaching experience.",
  },
  {
    Icon: BookOpen,
    title: "NCERT-Aligned + NEET Focused Learning",
    description:
      "Building strong fundamentals while preparing for competitive-level questions.",
  },
  {
    Icon: Target,
    title: "Small Batch Size",
    description:
      "Ensures personal attention and faster doubt resolution.",
  },
  {
    Icon: BarChart,
    title: "Regular Testing",
    description:
      "Weekly tests, monthly mocks, and detailed performance analytics.",
  },
  {
    Icon: Calendar,
    title: "Flexible Options",
    description:
      "Classroom and online batches available.",
  },
  {
    Icon: Users,
    title: "Comprehensive Mentorship",
    description:
      "Balancing NEET and board exam prep for holistic success.",
  },
];

  const subjectsCovered = [
  {
    title: "Physics",
    desc: "Core concept clarity with problem-solving drills.",
  },
  {
    title: "Chemistry",
    desc: "Complete coverage of Physical, Organic & Inorganic chemistry.",
  },
  {
    title: "Biology",
    desc: "NCERT-based line-by-line preparation with focus on diagrams and scoring chapters.",
  },
];

  const programDurations = [
  {
    icon: Clock,
    title: "2-Year Integrated Course (Class 11 → 12)",
    desc: "Build strong fundamentals with advanced coverage.",
  },
  {
    icon: Target,
    title: "1-Year Target Course (Class 12)",
    desc: "Intensive learning with rapid syllabus coverage and mock practice.",
  },
  {
    icon: School,
    title: "Crash Course (2–3 Months)",
    desc: "Focused revision program with PYQs and exam strategies.",
  },
  {
    icon: CalendarSync,
    title: "Dropper/Repeater Batch",
    desc: "Personalized one-year course with extensive testing and mentoring.",
  },
];

  const methodologySteps = [
  {
    Icon: Lightbulb,
    title: "Engaging Classroom Sessions",
    description: "Interactive sessions designed for deeper understanding and conceptual clarity.",
  },
  {
    Icon: BookOpen,
    title: "Daily Practice & Assignments",
    description: "Daily Practice Papers (DPPs) and structured assignments for consistent practice.",
  },
  {
    Icon: BarChart,
    title: "Frequent Testing & Mocks",
    description: "Chapter-wise tests and full-length mock exams to track progress and readiness.",
  },
  {
    Icon: MessageCircle,
    title: "Expert-Led Doubt-Solving",
    description: "Dedicated sessions with faculty to resolve doubts effectively.",
  },
  {
    Icon: Calendar,
    title: "Parent-Teacher Meetings",
    description: "Regular updates and reviews to keep parents informed of student performance.",
  },
];

  const faqData = [
  {
    q: "Who can join NEET coaching at ASQUARE Pimple Nilakh?",
    a: "Students in Class XI, XII, and repeat aspirants.",
  },
  {
    q: "What subjects are covered?",
    a: "Physics, Chemistry, and Biology (full NEET syllabus).",
  },
  {
    q: "Are there mock tests?",
    a: "Yes—weekly assessments, chapter tests, and full-length mocks with analytics.",
  },
  {
    q: "What types of batches are available?",
    a: "2-year, 1-year, crash, and dropper/repeater programs.",
  },
  {
    q: "Are batches small?",
    a: "Yes, designed for personalized attention and fast doubt clearance.",
  },
  {
    q: "Do parents receive progress reports?",
    a: "Yes, through structured reports and PTMs.",
  },
  {
    q: "Is online coaching available?",
    a: "Yes, students can choose from classroom or online modes.",
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
    title: "Updated study material (print + digital) designed for NEET",
    colorClass: "bg-gradient-purple",
  },
  {
    Icon: Calendar,
    title: "Periodic progress reports and PTMs",
    colorClass: "bg-gradient-green",
  },
  {
    Icon: Award,
    title: "Workshops on exam mindset, time management, and accuracy",
    colorClass: "bg-gradient-orange",
  },
  {
    Icon: TrendingUp,
    title: "Trusted across Pimple Nilakh, Wakad, Pimple Saudagar, Baner, Balewadi, Vishal Nagar, Sangvi, and Aundh",
    colorClass: "bg-gradient-red",
  },
  {
    Icon: Star,
    title: "Expert NEET faculty ensuring conceptual clarity and exam success",
    colorClass: "bg-gradient-teal",
  }
];

  return (
    <>
      <Helmet>
        <title>
          Best NEET Coaching Classes in Pimple Nilakh Pune | ASQUARE Academy
        </title>
        <meta
          name="title"
          content="Best NEET Coaching Classes in Pimple Nilakh Pune | ASQUARE Academy"
        />
        <meta
          name="description"
          content="Join ASQUARE Academy for top NEET coaching classes in Pimple Nilakh, Pune. Expert faculty, mock tests, and focused preparation for NEET success."
        />
        <meta
          name="keywords"
          content="NEET coaching classes in pimple nilakh pune Best NEET Coaching in pimple nilakh pune Top NEET Coaching Classes pimple nilakh pune NEET Advanced Preparation pimple nilakh pune NEET Classes in pimple nilakh pune Best NEET Classes in pimple nilakh pune Top NEET Classes in pimple nilakh pune"
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
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-pimple-nilakh-pune#localbusiness",
      "name": "ASQUARE Academy - NEET Coaching Classes in Pimple Nilakh Pune",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "url": "https://www.asquareclasses.com/neet-coaching-classes-institute-pimple-nilakh-pune",
      "telephone": "+91-9766118877",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Pimple Nilakh",
        "addressRegion": "Pune",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune/"
      ],
      "openingHours": "Mo-Su 08:00-20:00",
      "description": "ASQUARE Academy offers the best NEET coaching classes in Pimple Nilakh, Pune with expert mentors, mock tests, and personalized learning programs."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-pimple-nilakh-pune#webpage",
      "url": "https://www.asquareclasses.com/neet-coaching-classes-institute-pimple-nilakh-pune",
      "name": "NEET Coaching Classes in Pimple Nilakh Pune | ASQUARE Academy",
      "description": "Join ASQUARE Academy for top NEET coaching classes in Pimple Nilakh, Pune. Get expert guidance, small batches, mock tests, and complete syllabus coverage.",
      "publisher": {
        "@id": "https://www.asquareclasses.com/#organization"
      },
      "breadcrumb": {
        "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-pimple-nilakh-pune#breadcrumb"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-pimple-nilakh-pune#breadcrumb",
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
          "name": "Pimple Nilakh Pune"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-pimple-nilakh-pune#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can enroll in NEET coaching at ASQUARE Pimple Nilakh?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students in Class XI, Class XII, and repeat-year aspirants can enroll for NEET coaching at ASQUARE Academy, Pimple Nilakh."
          }
        },
        {
          "@type": "Question",
          "name": "What subjects are covered in the NEET course?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The NEET coaching covers Physics, Chemistry, and Biology as per the official NEET syllabus."
          }
        },
        {
          "@type": "Question",
          "name": "Are mock tests included in the NEET coaching?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, ASQUARE Academy conducts regular mock tests, weekly assessments, and full-length NEET-style exams for complete preparation."
          }
        },
        {
          "@type": "Question",
          "name": "What batch options are available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE offers 2-year integrated, 1-year target, crash, and dropper/repeater batches for NEET aspirants."
          }
        },
        {
          "@type": "Question",
          "name": "Are the batch sizes small for better learning?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, batches are kept small to ensure personalized attention and effective doubt-solving sessions."
          }
        },
        {
          "@type": "Question",
          "name": "How do parents receive updates about their child's progress?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Parents receive detailed performance reports and attend regular parent–teacher meetings."
          }
        },
        {
          "@type": "Question",
          "name": "Is online NEET coaching available at ASQUARE?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, students can choose between classroom and online NEET coaching formats at ASQUARE Academy."
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
                 ASQUARE Academy – Pimple Nilakh
                </span>
              </h1>
              <p className="fs-5 text-white mb-3 lh">
                Looking for the <strong> best NEET coaching in Pimple Nilakh, Pune, </strong> At
                 <strong> ASQUARE Academy, </strong>
                 we specialize in structured NEET UG preparation driven by expert faculty, focused practice, and personal mentorship.
                <strong> Best NEET Coaching Institutes in Pimple Nilakh, </strong> our courses are designed to help students master NCERT concepts, practice systematically, and achieve top ranks in NEET-UG.
             </p>
              <div className="hero-location-info d-flex align-items-start gap-3">
                <MapPin
                  size={24}
                  color="#FFCB03"
                  className="flex-shrink-0 mt-1"
                />
                <span className="text-white">
                 We are a trusted choice for students from
                  <strong>
                    {" "}
                    Pimple Nilakh, Wakad, Pimple Saudagar, Baner, Balewadi, Vishal Nagar, Sangvi, and Aundh  {" "}
                  </strong>
                   who aim to secure admission in top medical colleges.
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
                Best NEET Coaching in Pimple Nilakh?
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
            <span> ASQUARE Academy Pimple Nilakh</span>
          </h2>

          {/* Description */}
          <div className="mx-auto mb-5">
            <p className="lead text-secondary mb-3">
              The<strong> NEET course at ASQUARE Academy, Pimple Nilakh, </strong>
              offers complete preparation through concept-based teaching, regular testing, and doubt-clearing sessions.<br/>
              Our approach ensures every student strengthens their basics, practices consistently, and gains confidence for NEET.
            </p>

            <p className="d-flex flex-wrap justify-content-center align-items-center gap-2 text-dark">
              <MapPin className="text-primary" size={26} />
              <span>
                Students from
                <strong>
                  {" "}
                   Pimple Nilakh, Wakad, Pimple Saudagar, Baner, Balewadi, Vishal Nagar, Sangvi, and Aundh  {" "}
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
              Course Details (NEET UG) - Top NEET Coaching Classes in Pimple Nilakh
            </h3>

            <p className="fs-5">
              <strong>NEET UG</strong> is India’s national entrance test for{" "}
              <strong>
                MBBS, BDS, BAMS, BHMS, and other medical programs.
              </strong>
              At <strong> NEET coaching institute in Pimple Nilakh,</strong>
            should align with both academic rigor and smart exam strategy. At ASQUARE Academy, our programs are designed to build clarity, confidence, and success through consistent testing and support.
            </p>
            <p className="fs-5">
              Our structured programs and experienced faculty make ASQUARE one of the{" "}
              <strong> Top NEET Coaching Institutes in Pimple Nilakh Pune. </strong>
            </p>
            <h4 className="fw-bold text-primary-emphasis mt-5 fs-3">
              Subjects Covered in NEET Classes at Pimple Nilakh
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
              Program Duration and Batch Options — NEET Preparation in Pimple Nilakh
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
              Best NEET Coaching in Pimple Nilakh,
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
              At <strong> ASQUARE Academy – Pimple Nilakh  </strong>
              has consistently delivered excellent NEET results, with students earning admission to {" "}
              <strong className="text-primary">
                AIIMS, government, and leading private medical colleges{" "}
              </strong>
              Our structured test system, performance reviews, and goal-oriented mentoring make ASQUARE the
              <strong> most preferred NEET institutes in Western Pune. </strong>
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
                  Top NEET Coaching Institute in Pimple Nilakh and PCMC Pune.
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
              Top NEET Coaching Institutes in Pimple Nilakh.
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
            Join <span> ASQUARE Academy – Pimple Nilakh Today </span>
          </h2>

          {/* Description */}
          <div className="mx-auto mb-5">
            <p className="lead text-secondary mb-3">
              Take your first step toward NEET success with the{" "}
              <strong> best NEET coaching in Pimple Nilakh, Pune.  </strong>
             With expert teachers, structured learning, and a strong success record, ASQUARE Academy is your gateway to a medical career.
             </p>

            <p className="d-flex flex-wrap justify-content-center align-items-center gap-2 text-dark">
              <MapPin className="text-primary" size={22} />
              <span>
                 Accessible from {" "}
                <strong>
                  {" "}Pimple Nilakh, Wakad, Pimple Saudagar, Baner, Balewadi, Vishal Nagar, Sangvi, and Aundh.
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

export default NEETPimpleNilakh;
