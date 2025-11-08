import React, { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import locationBGImage from "../../../Assets/locationPageImages/neet/NEET slider PC2.jpeg";
import MobileBGImage from "../../../Assets/locationPageImages/neet/NEET slider mobile2.jpeg";
import image1 from "../../../Assets/locationPageImages/neet/NEET Page 16.jpeg";
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

function NEETDighi() {
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
    title: "Specialized Faculty",
    description: "Expert mentors for Physics, Chemistry, and Biology.",
  },
  {
    Icon: BookOpen,
    title: "Deep Syllabus Coverage",
    description: "NCERT-focused teaching coupled with advanced NEET-level training.",
  },
  {
    Icon: Target,
    title: "Small Class Size",
    description: "Ensures individualized attention and effective doubt-clearing.",
  },
  {
    Icon: BarChart,
    title: "Frequent Evaluations",
    description: "Weekly practice tests, full-length mocks, and performance analytics.",
  },
  {
    Icon: Calendar,
    title: "Flexible Delivery",
    description: "Available in both classroom and online formats.",
  },
  {
    Icon: Users,
    title: "Continuous Support",
    description: "Ongoing mentorship to balance NEET prep and board exams.",
  },
];

  const subjectsCovered = [
  {
    title: "Physics",
    desc: "Emphasis on core understanding and structured problem-solving.",
  },
  {
    title: "Chemistry",
    desc: "Comprehensive coverage of Physical, Organic, and Inorganic Chemistry.",
  },
  {
    title: "Biology",
    desc: "In-depth NCERT alignment with diagrammatic and high-scoring topic analysis.",
  },
];

  const programDurations = [
  {
    icon: Clock,
    title: "2-Year Integrated Course (Class 11 → 12)",
    desc: "Build NEET readiness with foundational and advanced coverage across two years.",
  },
  {
    icon: Target,
    title: "1-Year Target Course (Class 12)",
    desc: "Focus on rapid syllabus revision and mock-based learning for immediate results.",
  },
  {
    icon: CalendarSync,
    title: "Dropper/Repeater Batch",
    desc: "Designed for repeat aspirants with full-length tests, deep revision, and personalized analysis.",
  },
  {
    icon: School,
    title: "Crash Course",
    desc: "High-impact final push with PYQs, exam strategies, and focused topic revision.",
  },
];

  const methodologySteps = [
  {
    Icon: Lightbulb,
    title: "Learn",
    description: "Interactive, concept-driven classroom lectures.",
  },
  {
    Icon: BookOpen,
    title: "Practice",
    description: "Structured assignments, DPPs, and quizzes.",
  },
  {
    Icon: BarChart,
    title: "Assess",
    description: "Regular chapter tests and mock examinations.",
  },
  {
    Icon: ChartSpline,
    title: "Revise",
    description: "Targeted revision sessions and strategic exam prep.",
  },
];

  const faqData = [
  {
    q: "Who should join NEET coaching here?",
    a: "Ideal for students in Classes XI, XII, and drop-year NEET aspirants.",
  },
  {
    q: "Are crash courses available?",
    a: "Yes—short, intensive crash programs with mock testing are offered.",
  },
  {
    q: "Do you offer repeater/dropper batches?",
    a: "Absolutely—tailored programs focused on concept clarity and testing for repeaters.",
  },
  {
    q: "Is there an online learning option?",
    a: "Yes—students can choose from classroom or online batches.",
  },
  {
    q: "How is performance tracked?",
    a: "Via weekly tests, monthly mocks, and structured parent–teacher reviews.",
  },
  {
    q: "Which subjects are covered?",
    a: "Complete NEET syllabus: Physics, Chemistry, and Biology.",
  },
];

const gridFeatures = [
  {
    Icon: BookOpen,
    title: "Updated, dual-format study material (printed + digital)",
    colorClass: "bg-gradient-blue",
  },
  {
    Icon: MessageCircle,
    title: "Regular doubt-clearing sessions with expert faculty",
    colorClass: "bg-gradient-purple",
  },
  {
    Icon: Calendar,
    title: "Weekly progress updates and parent-teacher interactions",
    colorClass: "bg-gradient-green",
  },
  {
    Icon: BarChart,
    title: "Advanced analytics via the online test platform",
    colorClass: "bg-gradient-orange",
  },
  {
    Icon: Award,
    title: "Workshops on accuracy, time-management, and exam mindset",
    colorClass: "bg-gradient-red",
  },
  {
    Icon: Users,
    title: "Trusted NEET coaching with consistent results in Bhosari, PCMC & Pune",
    colorClass: "bg-gradient-teal",
  },
];

  return (
    <>
      <Helmet>
        <title>
          Best NEET Coaching Classes in Dighi, Pune | ASQUARE Academy NEET Preparation
        </title>
        <meta
          name="title"
          content="Best NEET Coaching Classes in Dighi, Pune | ASQUARE Academy NEET Preparation"
        />
        <meta
          name="description"
          content="Join ASQUARE Academy for top NEET coaching classes in Dighi, Pune. Expert faculty, mock tests & personalized study plans for XI, XII & drop-year aspirants."
        />
        <meta
          name="keywords"
          content="NEET coaching classes in Dighi, Pune Best NEET Coaching in Dighi, Pune Top NEET Coaching Classes Dighi, Pune NEET Advanced Preparation Dighi, Pune NEET Classes in Dighi, Pune Best NEET Classes in Dighi, Pune Top NEET Classes in Dighi, Pune"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{`
        {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-dighi-pune#localbusiness",
      "name": "ASQUARE Classes - NEET Coaching in Dighi Pune",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "url": "https://www.asquareclasses.com/neet-coaching-classes-institute-dighi-pune",
      "telephone": "9766118877",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dighi",
        "addressRegion": "Pune",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune"
      ],
      "description": "ASQUARE Classes offers top NEET Coaching in Dighi, Pune, with expert faculty, small batches, and regular mock tests for Classes XI, XII, and drop-year aspirants."
    },
    {
      "@type": "EducationalOrganization",
      "name": "ASQUARE Classes",
      "url": "https://www.asquareclasses.com/",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune"
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-dighi-pune#webpage",
      "url": "https://www.asquareclasses.com/neet-coaching-classes-institute-dighi-pune",
      "name": "NEET Coaching Classes in Dighi Pune | ASQUARE Academy",
      "description": "Join ASQUARE Classes for top NEET coaching in Dighi, Pune. Expert faculty, regular tests, online & offline batches for Classes XI, XII, and drop-year students.",
      "publisher": {
        "@type": "Organization",
        "name": "ASQUARE Classes",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png"
        }
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-dighi-pune#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who should join NEET coaching here?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ideal for students in Classes XI, XII, and drop-year NEET aspirants."
          }
        },
        {
          "@type": "Question",
          "name": "Are crash courses available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes—short, intensive crash programs with mock testing are offered."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer repeater/dropper batches?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely—tailored programs focused on concept clarity and testing for repeaters."
          }
        },
        {
          "@type": "Question",
          "name": "Is there an online learning option?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes—students can choose from classroom or online batches."
          }
        },
        {
          "@type": "Question",
          "name": "How is performance tracked?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Via weekly tests, monthly mocks, and structured parent–teacher reviews."
          }
        },
        {
          "@type": "Question",
          "name": "Which subjects are covered?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Complete NEET syllabus: Physics, Chemistry, and Biology."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-dighi-pune#breadcrumbs",
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
          "name": "NEET Coaching Classes in Dighi Pune",
          "item": "https://www.asquareclasses.com/neet-coaching-classes-institute-dighi-pune"
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
                Crack NEET with Expert Coaching at {" "}
                <span className="gradient-text-yellow d-inline-block">
                ASQUARE Academy – Top NEET Classes in Dighi
                </span>
              </h1>
              <p className="fs-5 text-white mb-3 lh">
                Cracking NEET UWG requires precision, strong fundamentals, and consistent practice. At
                 <strong> ASQUARE Academy, </strong>
                 our <strong> NEET coaching classes in Dighi, Pune </strong> are tailored to build your strengths, sharpen your strategy, and ensure top-tier performance. Recognized as one of the <strong> best NEET coaching institutes in Pune, </strong>we offer structured programs, personalized mentorship, and proven results.
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
                     Dighi, Bhosari, Wakad, Ravet, Pimpri, Chinchwad, Pimpri Colony, and Pimpri-Chinchwad area.{" "}
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
                Best NEET Coaching in Dighi?
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
            <span> ASQUARE Academy Dighi</span>
          </h2>

          {/* Description */}
          <div className="mx-auto mb-5">
            <p className="lead text-secondary mb-3">
              The<strong> NEET course at ASQUARE Academy, Dighi, </strong>
              provides a step-by-step approach to mastering NEET concepts. Our expert faculty ensures that every student understands the theory, practices problem-solving, and applies knowledge effectively under exam conditions.
            </p>

            <p className="d-flex flex-wrap justify-content-center align-items-center gap-2 text-dark">
              <MapPin className="text-primary" size={26} />
              <span>
                Students from
                <strong>
                  {" "}
                  Dighi, Bhosari, Wakad, Ravet, Pimpri, Chinchwad, Pimpri Colony, and Pimpri-Chinchwad area. {" "}
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
              Course Details (NEET UG) - Top NEET Coaching Classes in Dighi
            </h3>

            <p className="fs-5">
              <strong>NEET UG</strong> is India’s national entrance test for{" "}
              <strong>
                MBBS, BDS, BAMS, BHMS, and allied medical programs.
              </strong>
              At <strong> ASQUARE Academy Dighi,</strong>
             our curriculum focuses on building a solid conceptual base while ensuring complete exam readiness through mock tests and performance tracking.
            </p>
            <p className="fs-5">
              Our consistent results make ASQUARE one of the{" "}
              <strong> Top NEET Coaching Institutes in Dighi Pune and PCMC. </strong>
            </p>
            <h4 className="fw-bold text-primary-emphasis mt-5 fs-3">
              Subjects Covered in NEET Classes at Dighi
            </h4>

            <div className="mt-4">
              {subjectsCovered.map((subject, i) => (
                <SubjectCard key={i} {...subject} />
              ))}
            </div>

            <p className="fs-5">
              Our <strong> NEET Coaching in Dighi Pune </strong>ensures holistic preparation and exam-oriented accuracy.
            </p>
          </div>

          {/* Right Column - Blue */}
          <div className="col-lg-6 p-5 p-lg-5 text-white lg-b-bg-b">
            <h5 className="fw-bold text-warning mb-4 fs-1">
              Program Duration and Batch Options — NEET Preparation in Dighi
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
              Best NEET Coaching in Dighi,
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
              <strong> one of Pune's premier NEET coaching centres. </strong>
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
                  Best NEET Training Institutes in Dighi PCMC.
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
              Top NEET Coaching Institutes in Dighi.
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
            Join <span>  ASQUARE Academy Today </span>
          </h2>

          {/* Description */}
          <div className="mx-auto mb-5">
            <p className="lead text-secondary mb-3">
              If you're seeking the best {" "}
              <strong> NEET coaching classes in Dighi, Pune, </strong>
             your search ends here—ASQUARE Academy has everything you need. With expert teaching, structured guidance, and a strong track record, we’re your gateway to attaining a medical seat.
            </p>

            <p className="d-flex flex-wrap justify-content-center align-items-center gap-2 text-dark">
              <MapPin className="text-primary" size={22} />
              <span>
                Convenient for students from{" "}
                <strong>
                  {" "}Dighi, Bhosari, Wakad, Ravet, Pimpri, Chinchwad, Pimpri Colony, and Pimpri-Chinchwad area.
                </strong>
              </span>
            </p>
          </div>

          {/* Subheading */}
          <h4 className="fw-bold text-primary mb-4">
             Enroll Today! Limited seats available—start your NEET journey with ASQUARE Academy.
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

export default NEETDighi;
