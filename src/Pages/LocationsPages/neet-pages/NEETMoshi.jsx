import React, { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import locationBGImage from "../../../Assets/locationPageImages/neet/NEET slider PC5.jpeg";
import MobileBGImage from "../../../Assets/locationPageImages/neet/NEET slider mobile5.jpeg";
import image1 from "../../../Assets/locationPageImages/neet/NEET Page 20.jpeg";
import image2 from "../../../Assets/locationPageImages/neet/NEET page 4.jpeg";
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

function NEETMoshi() {
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
      "Specialists in Physics, Chemistry, and Biology with years of NEET coaching experience.",
  },
  {
    Icon: BookOpen,
    title: "NCERT-Centric Approach",
    description:
      "Foundation built on NCERT with additional NEET-level problem-solving.",
  },
  {
    Icon: Target,
    title: "Personalized Learning",
    description:
      "Small batch sizes for focused attention and effective doubt-clearing.",
  },
  {
    Icon: BarChart,
    title: "Regular Assessments",
    description:
      "Weekly tests, monthly mocks, and performance analytics.",
  },
  {
    Icon: Calendar,
    title: "Flexible Learning Options",
    description:
      "Classroom and online batches available for all students.",
  },
  {
    Icon: Users, // You can choose a different icon if preferred
    title: "Continuous Mentorship",
    description:
      "Balanced preparation for both NEET and board exams.",
  },
];

  const subjectsCovered = [
  {
    title: "Physics",
    desc: "Core understanding with structured problem-solving practice.",
  },
  {
    title: "Chemistry",
    desc: "Detailed instruction across Physical, Organic, and Inorganic Chemistry.",
  },
  {
    title: "Biology",
    desc: "Complete NCERT coverage, diagrams, and scoring strategies.",
  },
];

  const programDurations = [
  {
    icon: Clock,
    title: "2-Year Integrated Program (Class 11 → 12):",
    desc: "Foundation + advanced NEET coverage.",
  },
  {
    icon: Target,
    title: "1-Year Target Program (Class 12):",
    desc: "Intensive Class 12 preparation with mocks.",
  },
  {
    icon: School,
    title: "Crash Course:",
    desc: "2–3 month revision program with PYQs and test-based learning.",
  },
  {
    icon: CalendarSync,
    title: "Dropper/Repeater Batch:",
    desc: "1-year in-depth program for repeat aspirants.",
  },
];

  const methodologySteps = [
  {
    Icon: Lightbulb,
    title: "Interactive Lectures",
    description: "Interactive lectures for clear concept building.",
  },
  {
    Icon: BookOpen,
    title: "Daily Practice Papers (DPPs)",
    description: "Daily Practice Papers (DPPs) and assignments.",
  },
  {
    Icon: BarChart,
    title: "Chapter-wise & Full-Length Tests",
    description: "Chapter-wise and full-length tests with analysis.",
  },
  {
    Icon: MessageCircle,
    title: "Doubt-Solving Sessions",
    description: "Dedicated doubt-solving sessions with mentors.",
  },
  {
    Icon: Calendar,
    title: "Performance Reviews",
    description: "Regular performance reviews and parent updates.",
  },
];

  const faqData = [
  {
    q: "Who should join NEET coaching here?",
    a: "Students in Class XI, Class XII, and drop-year aspirants.",
  },
  {
    q: "What subjects are covered?",
    a: "Physics, Chemistry, and Biology as per the NEET syllabus.",
  },
  {
    q: "Are mock tests provided?",
    a: "Yes, including chapter-wise, part tests, and full-length mocks.",
  },
  {
    q: "What course durations are available?",
    a: "2-year, 1-year, crash course (2–3 months), and dropper batches.",
  },
  {
    q: "How are parents updated?",
    a: "Through progress reports and regular PTMs.",
  },
  {
    q: "Are online classes offered?",
    a: "Yes, students can choose between classroom and online modes.",
  },
];

const gridFeatures = [
  {
    Icon: Users,
    title: "Small batches for individualized focus",
    colorClass: "bg-gradient-blue",
  },
  {
    Icon: BookOpen,
    title: "Updated NEET study material (printed + digital)",
    colorClass: "bg-gradient-purple",
  },
  {
    Icon: Award,
    title: "Parent-teacher meetings for progress tracking",
    colorClass: "bg-gradient-green",
  },
  {
    Icon: ChartSpline,
    title: "Workshops on time management, accuracy, and exam strategy",
    colorClass: "bg-gradient-orange",
  },
  {
    Icon: TrendingUp,
    title:
      "Trusted NEET coaching in Moshi, Spine Road, and across PCMC",
    colorClass: "bg-gradient-red",
  },
  {
    Icon: BarChart,
    title: "Online mock tests with detailed performance analytics",
    colorClass: "bg-gradient-pink",
  },
];

  return (
    <>
      <Helmet>
        <title>
          NEET Coaching Classes in Moshi Pune | Best NEET Institute | ASQUARE Academy
        </title>
        <meta
          name="title"
          content="NEET Coaching Classes in Moshi Pune | Best NEET Institute | ASQUARE Academy"
        />
        <meta
          name="description"
          content="Join ASQUARE Academy for the best NEET coaching classes in Moshi Pune. Expert faculty, mock exams, personalized mentoring & online/offline batches for NEET aspirants."
        />
        <meta
          name="keywords"
          content="NEET coaching classes in moshi Best NEET Coaching in moshi Top NEET Coaching Classes moshi NEET Advanced Preparation moshi NEET Classes in moshi Best NEET Classes in moshi Top NEET Classes in moshi"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{`
        {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-moshi-pune/#localbusiness",
      "name": "ASQUARE Academy Moshi Pune",
      "url": "https://www.asquareclasses.com/neet-coaching-classes-institute-moshi-pune/",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "description": "ASQUARE Academy offers the best NEET coaching classes in Moshi Pune with top faculty, mock exams, and personalized learning programs.",
      "telephone": "9766118877",
      "priceRange": "₹₹",
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune"
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Moshi, Pune, Maharashtra",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "412105",
        "addressCountry": "IN"
      },
      "openingHours": "Mo-Su 08:00-20:00"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-moshi-pune/#webpage",
      "url": "https://www.asquareclasses.com/neet-coaching-classes-institute-moshi-pune/",
      "name": "NEET Coaching Classes in Moshi Pune | ASQUARE Academy",
      "description": "Join ASQUARE Academy’s NEET coaching classes in Moshi Pune for small batches, mock tests, and expert mentorship for NEET preparation.",
      "inLanguage": "en-IN",
      "isPartOf": {
        "@id": "https://www.asquareclasses.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-moshi-pune/#breadcrumb"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-moshi-pune/#breadcrumb",
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
          "name": "NEET Coaching Moshi",
          "item": "https://www.asquareclasses.com/neet-coaching-classes-institute-moshi-pune/"
        }
      ]
    },
    {
      "@type": "EducationalOccupationalProgram",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-moshi-pune/#educational",
      "name": "NEET Coaching Classes in Moshi Pune",
      "provider": {
        "@type": "Organization",
        "name": "ASQUARE Academy",
        "sameAs": "https://www.asquareclasses.com/"
      },
      "educationalCredentialAwarded": "NEET Preparation Program",
      "timeToComplete": "P1Y",
      "hasCourse": {
        "@type": "Course",
        "name": "Comprehensive NEET Preparation",
        "description": "Covers Physics, Chemistry, and Biology with mock exams, analytics, and expert mentoring for NEET aspirants."
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-moshi-pune/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who should join NEET coaching here?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students in Class XI, Class XII, and drop-year aspirants should join ASQUARE’s NEET coaching in Moshi Pune."
          }
        },
        {
          "@type": "Question",
          "name": "What subjects are covered?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Physics, Chemistry, and Biology are covered as per the NEET syllabus."
          }
        },
        {
          "@type": "Question",
          "name": "Are mock tests provided?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we conduct chapter-wise, part tests, and full-length mock exams to track performance."
          }
        },
        {
          "@type": "Question",
          "name": "What course durations are available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer 2-year, 1-year, crash course (2–3 months), and dropper batches for NEET aspirants."
          }
        },
        {
          "@type": "Question",
          "name": "How are parents updated?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Parents receive performance reports and regular updates through PTMs."
          }
        },
        {
          "@type": "Question",
          "name": "Are online classes offered?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, students can choose between classroom and online modes for flexible NEET preparation."
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
                Build Your Medical Career with –{" "}
                <span className="gradient-text-yellow d-inline-block">
                ASQUARE Academy
                </span>
              </h1>
              <p className="fs-5 text-white mb-3 lh">
                Looking for the best
                <strong> NEET coaching classes in Moshi, Pune? </strong>
                At <strong> ASQUARE Academy, </strong>
                 we are dedicated to preparing students for NEET UG with precision and confidence. Recognized as a trusted{" "}
                <strong> Best NEET Coaching Institutes in Moshi, </strong> we emphasize concept clarity, regular practice, and personalized mentorship.
              </p>
              <div className="hero-location-info d-flex align-items-start gap-3">
                <MapPin
                  size={24}
                  color="#FFCB03"
                  className="flex-shrink-0 mt-1"
                />
                <span className="text-white">
                  Our Moshi centre is easily accessible to students from
                  <strong>
                    {" "}
                    Moshi, Spine City, Chikhali, Bhosari, Charholi, Alandi, and nearby areas{" "}
                  </strong>
                  choose ASQUARE for its proven results and expert faculty.
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
                Best NEET Coaching in Moshi?
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
                  Our method focuses on clarity, consistency, and confidence —
                  key pillars to crack NEET successfully.
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
            <span> ASQUARE Academy Moshi</span>
          </h2>

          {/* Description */}
          <div className="mx-auto mb-5">
            <p className="lead text-secondary mb-3">
              The<strong> NEET course at ASQUARE Academy, Moshi, </strong>
              offers complete academic support for NEET aspirants. It includes
              interactive classroom sessions, doubt-solving discussions, and
              rigorous mock test practice.
            </p>

            <p className="d-flex flex-wrap justify-content-center align-items-center gap-2 text-dark">
              <MapPin className="text-primary" size={26} />
              <span>
                Students from
                <strong>
                  {" "}
                  Moshi, Spine City, Chikhali, Bhosari, Charholi, Alandi {" "}
                </strong>
                prefer our institute for its convenient location, expert
                faculty, and structured test series — making it the most trusted{" "}
                <strong> NEET Coaching in Pune. </strong>
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
              Course Details (NEET UG) - Top NEET Coaching Classes in Moshi
            </h3>

            <p className="fs-5">
              <strong>NEET UG</strong> is the national-level exam for medical
              courses like{" "}
              <strong>
                MBBS, BDS, BAMS, BHMS, and allied programs.
              </strong>
              {" "}At <strong> ASQUARE Academy Moshi, </strong>
              we provide focused training with conceptual depth, problem-solving
              practice, and strategy-based mock tests.
            </p>
            <p className="fs-5">
              Our faculty’s experience and student success record make ASQUARE
              one of the{" "}
              <strong> Top NEET Coaching Institutes in Moshi Pune. </strong>
            </p>
            <p className="fs-5">
              We are among the{" "}
              <strong>Top NEET Coaching Institutes in Moshi, </strong>
              known for high student success and experienced faculty.
            </p>

            <h4 className="fw-bold text-primary-emphasis mt-5 fs-3">
              Subjects Covered in NEET Classes at Moshi
            </h4>

            <div className="mt-4">
              {subjectsCovered.map((subject, i) => (
                <SubjectCard key={i} {...subject} />
              ))}
            </div>

            <p className="fs-5">
              Each subject is taught with conceptual depth, interactive
              teaching, and consistent testing to ensure excellence.
            </p>
          </div>

          {/* Right Column - Blue */}
          <div className="col-lg-6 p-5 p-lg-5 text-white lg-b-bg-b">
            <h5 className="fw-bold text-warning mb-4 fs-1">
              Program Duration and Batch Options — NEET Preparation in Moshi
            </h5>

            <div className="d-flex flex-column gap-4">
              {programDurations.map((program, i) => (
                <ProgramCard key={i} {...program} />
              ))}
            </div>

            <div className="mt-5 p-4 rounded-4 border border-warning border-opacity-50 bg-brown">
              <p className="fs-5 mb-0">
                Each course is designed to provide{" "}
                <strong className="text-warning">
                  structured learning and continuous performance .
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
              Best NEET Coaching in Moshi,
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
              At <strong> ASQUARE Academy Moshi </strong>
              has consistently delivered strong <strong> NEET results, </strong>
              with selections in{" "}
              <strong className="text-primary">
                AIIMS, top government medical colleges, and renowned private institutions.{" "}
              </strong>
              Our student-first approach, expert mentors, and structured test
              strategy have made ASQUARE one of the
              <strong> top NEET coaching institutes in Moshi and Pimpri-Chinchwad. </strong>
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
                This tried-and-tested teaching model has helped ASQUARE become a{" "}
                <strong>
                  Top NEET Training Institute in Moshi and Pune.
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
              Top NEET Coaching Institutes in Moshi.
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
            Join <span>ASQUARE Academy Today</span>
          </h2>

          {/* Description */}
          <div className="mx-auto mb-5">
            <p className="lead text-secondary mb-3">
              Get started with the{" "}
              <strong> best NEET coaching classes in Moshi, Pune, </strong>
              With expert faculty, structured study plans, and a strong success
              record, <strong> ASQUARE Academy </strong>
              is your trusted choice for NEET preparation.
            </p>

            <p className="d-flex flex-wrap justify-content-center align-items-center gap-2 text-dark">
              <MapPin className="text-primary" size={22} />
              <span>
                Convenient for students from{" "}
                <strong>
                  {" "}Moshi, Spine City, Bhosari, Chikhali, Charholi, Alandi, Dehu Road, Nigdi, Talwade, and the Pimpri-Chinchwad (PCMC) region.
                </strong>
              </span>
            </p>
          </div>

          {/* Subheading */}
          <h4 className="fw-bold text-primary mb-4">
            Admissions Open – Limited Seats Available!
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

export default NEETMoshi;
