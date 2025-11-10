import React, { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import locationBGImage from "../../../Assets/locationPageImages/neet/NEET slider PC1.jpeg";
import MobileBGImage from "../../../Assets/locationPageImages/neet/NEET slider mobile1.jpeg";
import image1 from "../../../Assets/locationPageImages/neet/NEET Page 18.jpeg";
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

function NEETPimpleGurav() {
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
    title: "Specialist NEET Faculty",
    description:
      "Experienced instructors in Physics, Chemistry, and Biology committed to your success.",
  },
  {
    Icon: BookOpen,
    title: "Strong NCERT Foundation + NEET Strategy",
    description:
      "Clarify fundamentals and master competitive-level problem-solving.",
  },
  {
    Icon: Target,
    title: "Focused Learning with Small Batches",
    description:
      "Ensures personal attention, fast doubt resolution, and collaborative learning.",
  },
  {
    Icon: BarChart,
    title: "Consistent Progress Tracking",
    description:
      "Weekly tests, mock series, and performance analytics to chart your improvement.",
  },
  {
    Icon: Calendar,
    title: "Flexible Coaching Modes",
    description:
      "Classroom and online batches to suit your preference and convenience.",
  },
  {
    Icon: Users,
    title: "Holistic Academic Support",
    description:
      "Balancing NEET prep with board exams and exam mindset development.",
  },
];

  const subjectsCovered = [
  {
    title: "Physics",
    desc: "Strong theoretical grounding complemented by rigorous numerical practice.",
  },
  {
    title: "Chemistry",
    desc: "Extensive preparation across Physical, Organic, and Inorganic branches with NEET layers.",
  },
  {
    title: "Biology",
    desc: "NCERT-aligned content with emphasis on diagrammatic clarity, topic relevance, and scoring strategies.",
  },
];

  const programDurations = [
  {
    icon: Clock,
    title: "2-Year Integrated Course (Class 11 → 12)",
    desc: "Lay a strong foundation and scale up through steady progress.",
  },
  {
    icon: Target,
    title: "1-Year Target Course (Class 12)",
    desc: "Fast-tracked preparation featuring structured mocks and review sessions.",
  },
  {
    icon: School,
    title: "Crash Course (2–3 Months)",
    desc: "Focused, high-yield sessions with past year questions and concise revision.",
  },
  {
    icon: CalendarSync,
    title: "Repeater/Dropper Batch",
    desc: "Customized year-long preparation with full mock exposure and analytics support.",
  },
];

  const methodologySteps = [
  {
    Icon: Lightbulb,
    title: "Concept-Based Learning",
    description: "Compelling, concept-based classroom instruction.",
  },
  {
    Icon: BookOpen,
    title: "Practice & Assignments",
    description: "Daily Practice Problems (DPPs) and actionable assignments.",
  },
  {
    Icon: BarChart,
    title: "Testing & Analytics",
    description: "Chapter-wise tests, full-length mocks with detailed analytics.",
  },
  {
    Icon: MessageCircle,
    title: "Doubt Resolution",
    description: "One-on-one doubt sessions with faculty mentors.",
  },
  {
    Icon: Calendar,
    title: "Progress Tracking",
    description: "Performance tracking through regular parent-student reviews.",
  },
];

  const faqData = [
  {
    q: "Who can enroll in NEET coaching at ASQUARE Pimple Gurav?",
    a: "Open to students in Class XI, Class XII, and repeat-year aspirants.",
  },
  {
    q: "What subjects are covered?",
    a: "All NEET syllabus subjects—Physics, Chemistry, and Biology.",
  },
  {
    q: "Is mock testing included?",
    a: "Absolutely—weekly tests, chapter quizzes, and full-length NEET mocks with performance insights.",
  },
  {
    q: "What types of batches are available?",
    a: "We offer 2-year integrated, 1-year target, crash, and dropper/repeater programs.",
  },
  {
    q: "Are batches small?",
    a: "Yes—designed for personalized learning and prompt doubt resolution.",
  },
  {
    q: "Do parents get performance updates?",
    a: "Yes—via regular performance reports and parent–teacher interactions.",
  },
  {
    q: "Is online coaching an option?",
    a: "Certainly—students can choose between classroom or online modes.",
  },
];

const gridFeatures = [
  {
    Icon: Users,
    title: "Small class size to ensure attention-rich learning",
    colorClass: "bg-gradient-blue",
  },
  {
    Icon: BookOpen,
    title: "Updated and NEET-aligned study materials (printed + digital)",
    colorClass: "bg-gradient-purple",
  },
  {
    Icon: Calendar,
    title: "Structured PTMs and progress feedback for parents",
    colorClass: "bg-gradient-green",
  },
  {
    Icon: Award,
    title: "Workshops on time efficiency, accuracy, and exam mindset",
    colorClass: "bg-gradient-orange",
  },
  {
    Icon: TrendingUp,
    title: "Recognized for NEET coaching excellence across Pimple Gurav, Aundh, Baner, and PCMC regions",
    colorClass: "bg-gradient-red",
  },
  {
    Icon: Star,
    title: "Expert NEET faculty guiding students through concept mastery and exam strategy",
    colorClass: "bg-gradient-teal",
  },
];


  return (
    <>
      <Helmet>
        <title>
          Best NEET Coaching Classes in Pimple Gurav Pune | ASQUARE Academy
        </title>
        <meta
          name="title"
          content="Best NEET Coaching Classes in Pimple Gurav Pune | ASQUARE Academy"
        />
        <meta
          name="description"
          content="Join ASQUARE Academy for the best NEET Coaching Classes in Pimple Gurav Pune. Expert mentors, mock tests, small batches, and online or classroom courses."
        />
        <meta
          name="keywords"
          content="NEET coaching classes in pimple gurav pune Best NEET Coaching in pimple gurav pune Top NEET Coaching Classes pimple gurav puneNEET Advanced Preparation pimple gurav pune NEET Classes in pimple gurav pune Best NEET Classes in pimple gurav pune Top NEET Classes in pimple gurav pune"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{`
        {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-pimple-gurav-pune",
  "url": "https://www.asquareclasses.com/neet-coaching-classes-institute-pimple-gurav-pune",
  "name": "NEET Coaching Classes in Pimple Gurav Pune | ASQUARE Academy",
  "description": "ASQUARE Academy offers the best NEET Coaching Classes in Pimple Gurav Pune with expert faculty, small batches, mock tests, and online/offline learning options.",
  "publisher": {
    "@type": "Organization",
    "name": "ASQUARE Academy",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png"
    },
    "sameAs": [
      "https://www.instagram.com/asquarepune",
      "https://www.facebook.com/asquarepune/"
    ]
  },
  "mainEntity": [
    {
      "@type": "LocalBusiness",
      "name": "ASQUARE Academy - NEET Coaching Classes in Pimple Gurav Pune",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "telephone": "+919766118877",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Pimple Gurav",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411061",
        "addressCountry": "IN"
      },
      "priceRange": "₹₹",
      "openingHours": "Mo-Su 09:00-20:00",
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune/"
      ]
    },
    {
      "@type": "EducationalOrganization",
      "name": "ASQUARE Academy",
      "url": "https://www.asquareclasses.com/",
      "department": {
        "@type": "EducationalOccupationalProgram",
        "name": "NEET Coaching Program",
        "educationalCredentialAwarded": "NEET Preparation Certificate",
        "hasCourse": [
          {
            "@type": "Course",
            "name": "NEET 2-Year Integrated Course",
            "description": "A comprehensive 2-year integrated NEET course covering Physics, Chemistry, and Biology for Class XI–XII students."
          },
          {
            "@type": "Course",
            "name": "1-Year Target Batch",
            "description": "Focused NEET preparation for Class XII students and repeaters aiming for top ranks."
          },
          {
            "@type": "Course",
            "name": "Crash Course",
            "description": "Short-term crash course designed for NEET revision and rapid test practice."
          },
          {
            "@type": "Course",
            "name": "Dropper/Reaper Program",
            "description": "Full-year NEET preparation batch designed for repeat-year aspirants."
          }
        ]
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
          "name": "NEET Coaching",
          "item": "https://www.asquareclasses.com/neet-coaching-classes/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "NEET Coaching Classes in Pimple Gurav Pune",
          "item": "https://www.asquareclasses.com/neet-coaching-classes-institute-pimple-gurav-pune"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can enroll in NEET coaching at ASQUARE Pimple Gurav?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Open to students in Class XI, Class XII, and repeat-year aspirants aiming for NEET success."
          }
        },
        {
          "@type": "Question",
          "name": "What subjects are covered?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The NEET syllabus includes Physics, Chemistry, and Biology with in-depth conceptual coverage."
          }
        },
        {
          "@type": "Question",
          "name": "Is mock testing included?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, weekly tests, chapter quizzes, and full-length NEET mocks with performance analytics are provided."
          }
        },
        {
          "@type": "Question",
          "name": "What types of batches are available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer 2-year integrated, 1-year target, crash, and dropper/repeater programs at ASQUARE Pimple Gurav."
          }
        },
        {
          "@type": "Question",
          "name": "Are batches small?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, small batches ensure personalized attention and efficient doubt-solving."
          }
        },
        {
          "@type": "Question",
          "name": "Do parents get performance updates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Parents receive regular reports and are invited for parent–teacher meetings for progress review."
          }
        },
        {
          "@type": "Question",
          "name": "Is online coaching an option?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Certainly, students can choose between flexible classroom or online NEET coaching modes."
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
                Achieve NEET Excellence with {" "}
                <span className="gradient-text-yellow d-inline-block">
                ASQUARE Academy – Pimple Gurav Center
                </span>
              </h1>
              <p className="fs-5 text-white mb-3 lh">
                Searching for the <strong> best NEET coaching in Pimple Gurav, Pune? </strong> At
                 <strong> ASQUARE Academy, </strong>
                we offer structured NEET UG preparation that blends expert educators, strategic practice, and personalized mentoring.
                 <strong> Best NEET Coaching Institutes in Pimple Gurav, </strong> our courses are designed to help students master NCERT concepts, practice systematically, and achieve top ranks in NEET-UG.
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
                    Pimple Gurav, Aundh, Baner, Balewadi, Wakad, Pimpri, and the PCMC region {" "}
                  </strong>
                   trust us to transform their medical aspirations into reality.
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
                Best NEET Coaching in Pimple Gurav?
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
            <span> ASQUARE Academy Pimple Gurav</span>
          </h2>

          {/* Description */}
          <div className="mx-auto mb-5">
            <p className="lead text-secondary mb-3">
              The<strong> NEET course at ASQUARE Academy, Pimple Gurav, </strong>
              offers complete preparation through concept-based teaching, regular testing, and doubt-clearing sessions.<br/>
              Our approach ensures every student strengthens their basics, practices consistently, and gains confidence for NEET.
            </p>

            <p className="d-flex flex-wrap justify-content-center align-items-center gap-2 text-dark">
              <MapPin className="text-primary" size={26} />
              <span>
                Students from
                <strong>
                  {" "}
                   Pimple Gurav, Aundh, Baner, Balewadi, Wakad, Pimpri, {" "}
                </strong>
                attend our classes for their proximity and the academy’s proven academic record in{" "}
                <strong> NEET coaching across PCMC Pune. </strong>
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
              Course Details (NEET UG) - Top NEET Coaching Classes in Pimple Gurav
            </h3>

            <p className="fs-5">
              <strong>NEET UG</strong> is India’s national entrance test for{" "}
              <strong>
                MBBS, BDS, BAMS, BHMS, and other allied medical courses.
              </strong>
              At <strong> ASQUARE Academy Pimple Gurav,</strong>
             we follow a result-oriented teaching plan focusing on concept mastery, speed, and precision through consistent assessments and expert mentorship.
            </p>
            <p className="fs-5">
              Our structured programs and experienced faculty make ASQUARE one of the{" "}
              <strong> Top NEET Coaching Institutes in Pimple Gurav Pune. </strong>
            </p>
            <h4 className="fw-bold text-primary-emphasis mt-5 fs-3">
              Subjects Covered in NEET Classes at Pimple Gurav
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
              Program Duration and Batch Options — NEET Preparation in Pimple Gurav
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
              Best NEET Coaching in Pimple Gurav,
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
              At <strong> ASQUARE Academy – Pimple Gurav  </strong>
              has consistently produced NEET toppers who secured admission into leading institutions such as {" "}
              <strong className="text-primary">
                AIIMS, BJMC, AFMC, and DY Patil Medical College Pune.{" "}
              </strong>
              Our structured test system, performance reviews, and goal-oriented mentoring make ASQUARE the
              <strong> trusted NEET institutes in Pune’s western neighborhoods. </strong>
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
                  Top NEET Coaching Institute in Pimple Gurav and PCMC Pune.
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
              Top NEET Coaching Institutes in Pimple Gurav.
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
            Enroll <span> ASQUARE Academy – Pimple Gurav Today </span>
          </h2>

          {/* Description */}
          <div className="mx-auto mb-5">
            <p className="lead text-secondary mb-3">
              Take the first step toward your medical career with the{" "}
              <strong> best NEET coaching in Pimple Gurav, Pune.  </strong>
             With expert teaching, strategic planning, and a supportive environment, ASQUARE Academy stands by your side for NEET success.
             </p>

            <p className="d-flex flex-wrap justify-content-center align-items-center gap-2 text-dark">
              <MapPin className="text-primary" size={22} />
              <span>
                 Easily accessible for students from {" "}
                <strong>
                  {" "}Pimple Gurav, Aundh, Baner, Balewadi, Wakad, and PCMC locations.
                </strong>
              </span>
            </p>
          </div>

          {/* Subheading */}
          <h4 className="fw-bold text-primary mb-4">
            Secure Your Seat Now — Limited Availability!
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

export default NEETPimpleGurav;
