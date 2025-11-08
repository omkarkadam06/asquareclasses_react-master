import React, { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import locationBGImage from "../../../Assets/locationPageImages/neet/NEET slider PC4.jpeg";
import MobileBGImage from "../../../Assets/locationPageImages/neet/NEET slider mobile4.jpeg";
import image1 from "../../../Assets/locationPageImages/neet/NEET Page 21.jpeg";
import image2 from "../../../Assets/locationPageImages/neet/NEET Page 3.jpeg";
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

function NEETDhanori() {
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
      title: "Expert Faculty for NEET in Dhanori",
      description:
        "Experienced teachers for Physics, Chemistry, and Biology with strong mentoring backgrounds.",
    },
    {
      Icon: BookOpen,
      title: "Comprehensive Syllabus Coverage",
      description:
        "NCERT-first approach with advanced NEET-level problem solving.",
    },
    {
      Icon: Target,
      title: "Personalized Attention",
      description: "Small batch sizes with dedicated doubt-solving sessions.",
    },
    {
      Icon: BarChart,
      title: "Regular Tests & Analysis",
      description:
        "Weekly/fortnightly part tests, full-length mocks, and performance tracking.",
    },
    {
      Icon: Calendar,
      title: "Motivational & Career Guidance",
      description: "Counselling, strategy sessions, and exam mindset coaching.",
    },
  ];

  const subjectsCovered = [
    {
      title: "Physics",
      desc: "Conceptual clarity with numerical problem-solving and error-reduction drills.",
    },
    {
      title: "Chemistry",
      desc: "Physical, Organic, and Inorganic with NCERT emphasis and application-based learning.",
    },
    {
      title: "Biology",
      desc: "Line-by-line NCERT coverage, high-weightage topic focus, and diagram-based learning.",
    },
  ];

  const programDurations = [
    {
      icon: Clock,
      title: "2-Year Course (10th → 12th Moving Students):",
      desc: "Foundation + NEET-focused preparation for Class 11 & 12 with concept-building, DPPs, and regular tests.",
    },
    {
      icon: Target,
      title: "1-Year Course (11th → 12th Moving Students):",
      desc: "Structured Class 12 coverage with targeted revision of Class 11 and dedicated NEET test series.",
    },
    {
      icon: School,
      title: "Crash Course:",
      desc: "2–3 months of intensive revision with PYQs, summary notes, and daily mock practice.",
    },
    {
      icon: CalendarSync,
      title: "Repeater/Dropper Batch:",
      desc: "1-year focused program with concept reinforcement, error analysis, and full-length NEET test series.",
    },
  ];

  const methodologySteps = [
    {
      Icon: Lightbulb,
      title: "Daily Lectures",
      description: "Daily lectures for concept-building.",
    },
    {
      Icon: BookOpen,
      title: "Chapter-wise Practice",
      description: "Chapter-wise assignments for self-practice.",
    },
    {
      Icon: MessageCircle,
      title: "Doubt-Solving",
      description: "One-to-one doubt-solving sessions.",
    },
    {
      Icon: BarChart,
      title: "Mock Tests",
      description: "Topic-wise and full-length mock tests.",
    },
    {
      Icon: Calendar,
      title: "Performance Reviews",
      description: "Parent–student performance reviews.",
    },
  ];

  const faqData = [
    {
      q: "Who can join NEET coaching at ASQUARE Academy Dhanori Pune?",
      a: "Students of Class XI, XII, and XII pass-outs preparing for NEET-UG can join. ASQUARE Academy offers structured programs to help students build strong fundamentals in Physics, Chemistry, and Biology.",
    },
    {
      q: "What subjects are covered in NEET coaching classes in Dhanori Pune?",
      a: "We cover Physics, Chemistry, and Biology as per the NEET-UG syllabus, ensuring complete preparation under expert guidance from top faculty at ASQUARE Academy.",
    },
    {
      q: "Why is ASQUARE Academy known as the Best NEET Coaching in Dhanori Pune?",
      a: "Our personalized attention, regular mock tests, expert mentors, and excellent past results make ASQUARE Academy one of the best NEET coaching institutes in Dhanori Pune.",
    },
    {
      q: "Do you provide mock tests and practice papers?",
      a: "Yes, we conduct weekly chapter-wise tests, part tests, and full-length NEET mock exams to help students analyze performance and strengthen weak areas.",
    },
    {
      q: "What is the course duration for NEET classes in Dhanori Pune?",
      a: "ASQUARE Academy offers flexible course options – 2-year, 1-year, crash, and dropper batches – designed for effective NEET advanced preparation in Dhanori Pune.",
    },
    {
      q: "How big are the batches at ASQUARE Academy Dhanori?",
      a: "We maintain small, focused batches to ensure every student gets personal attention, better concept clarity, and quick doubt resolution.",
    },
    {
      q: "Do you provide progress reports to parents?",
      a: "Yes, detailed performance tracking and periodic parent-teacher meetings (PTMs) help monitor student progress throughout the NEET preparation journey.",
    },
    {
      q: "Where is ASQUARE Academy located in Dhanori Pune?",
      a: "ASQUARE Academy – Top NEET Classes in Dhanori Pune. Exact address, batch timings, and counselling details are shared during student registration.",
    },
  ];

  const gridFeatures = [
    {
      Icon: Users,
      title: "Limited batch size for personal attention",
      colorClass: "bg-gradient-blue",
    },
    {
      Icon: BookOpen,
      title: "Updated NEET study material (printed + digital)",
      colorClass: "bg-gradient-purple",
    },
    {
      Icon: Award,
      title: "Regular parent-teacher meetings",
      colorClass: "bg-gradient-green",
    },
    {
      Icon: ChartSpline,
      title: "Workshops on time management & exam strategies",
      colorClass: "bg-gradient-orange",
    },
    {
      Icon: BarChart,
      title: "Online mock tests with analytics.",
      colorClass: "bg-gradient-pink",
    },
    {
      Icon: TrendingUp,
      title:
        "Trusted medical entrance coaching in Dhanori & Pune with consistent results",
      colorClass: "bg-gradient-red",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Best NEET Coaching Classes in Dhanori Pune | ASQUARE Academy
        </title>
        <meta
          name="title"
          content="Best NEET Coaching Classes in Dhanori Pune | ASQUARE Academy"
        />
        <meta
          name="description"
          content="Join the best NEET coaching classes in Dhanori Pune at ASQUARE Academy. Expert faculty, mock tests, small batches & advanced NEET preparation programs."
        />
        <meta
          name="keywords"
          content="NEET coaching classes in dhanori pune Best NEET Coaching in dhanori Pune Top NEET Coaching Classes dhanori pune NEET Advanced Preparation dhanori pune NEET Classes in dhanori pune Best NEET Classes in dhanori pune Top NEET Classes in dhanori pune"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{`
        {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "EducationalOrganization"],
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-dhanori-pune/#organization",
      "name": "ASQUARE Academy - NEET Coaching Classes in Dhanori Pune",
      "url": "https://www.asquareclasses.com/neet-coaching-classes-institute-dhanori-pune/",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "description": "ASQUARE Academy offers the best NEET coaching classes in Dhanori Pune with expert faculty, mock tests, and personalized mentorship for Class XI, XII, and droppers.",
      "telephone": "+91-9766118877",
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dhanori",
        "addressRegion": "Pune",
        "addressCountry": "India"
      },
      "openingHours": "Mo-Su 08:00-20:00"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-dhanori-pune/#webpage",
      "url": "https://www.asquareclasses.com/neet-coaching-classes-institute-dhanori-pune/",
      "name": "Best NEET Coaching Classes in Dhanori Pune | ASQUARE Academy",
      "description": "Join ASQUARE Academy for top NEET coaching classes in Dhanori Pune. We provide expert mentorship, regular mock tests, and advanced preparation programs for NEET aspirants.",
      "publisher": {
        "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-dhanori-pune/#organization"
      },
      "inLanguage": "en"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-dhanori-pune/#breadcrumbs",
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
          "name": "NEET Coaching Classes in Dhanori Pune",
          "item": "https://www.asquareclasses.com/neet-coaching-classes-institute-dhanori-pune/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-dhanori-pune/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can join NEET coaching at ASQUARE Academy Dhanori Pune?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students of Class XI, XII, and XII pass-outs preparing for NEET-UG can join. ASQUARE Academy offers structured programs to build strong fundamentals in Physics, Chemistry, and Biology."
          }
        },
        {
          "@type": "Question",
          "name": "What subjects are covered in NEET coaching classes in Dhanori Pune?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We cover Physics, Chemistry, and Biology as per the NEET-UG syllabus, ensuring complete preparation under expert guidance from top faculty at ASQUARE Academy."
          }
        },
        {
          "@type": "Question",
          "name": "Why is ASQUARE Academy known as the Best NEET Coaching in Dhanori Pune?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our personalized attention, mock tests, expert mentors, and proven results make ASQUARE Academy one of the best NEET coaching institutes in Dhanori Pune."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide mock tests and practice papers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we conduct weekly chapter-wise tests, part tests, and full-length NEET mock exams to help students analyze performance and strengthen weak areas."
          }
        },
        {
          "@type": "Question",
          "name": "What is the course duration for NEET classes in Dhanori Pune?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE Academy offers flexible course options – 2-year, 1-year, crash, and dropper batches – designed for effective NEET advanced preparation in Dhanori Pune."
          }
        },
        {
          "@type": "Question",
          "name": "How big are the batches at ASQUARE Academy Dhanori?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We maintain small, focused batches to ensure every student gets personal attention, better concept clarity, and quick doubt resolution."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide progress reports to parents?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, detailed performance tracking and periodic parent-teacher meetings (PTMs) help monitor student progress throughout the NEET preparation journey."
          }
        },
        {
          "@type": "Question",
          "name": "Where is ASQUARE Academy located in Dhanori Pune?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE Academy – Top NEET Classes in Dhanori Pune. Exact address, batch timings, and counselling details are shared during student registration."
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
                Crack NEET with Expert Guidance –{" "}
                <span className="gradient-text-yellow d-inline-block">
                  Best NEET Coaching Classes in Dhanori Pune at ASQUARE Academy
                </span>
              </h1>
              <p className="fs-5 text-white mb-3 lh">
                Looking for the best
                <strong> NEET coaching classes in Dhanori, Pune? </strong>
                At <strong> ASQUARE Academy, </strong>
                we specialize in structured NEET preparation with a proven track
                record. As a trusted{" "}
                <strong> Best NEET Coaching Institutes in Dhanori, </strong> we
                focus on concept clarity, exam strategies, regular test
                practice, and personal mentorship to help students secure
                admission in top medical colleges.
              </p>
              <div className="hero-location-info d-flex align-items-start gap-3">
                <MapPin
                  size={24}
                  color="#FFCB03"
                  className="flex-shrink-0 mt-1"
                />
                <span className="text-white">
                  Our Dhanori centre is easily accessible to students from
                  <strong>
                    {" "}
                    Dhanori, Lohegaon, Tingre Nagar, Viman Nagar, Vishrantwadi,
                    Yerwada, Kalyani Nagar, Kharadi, Wagholi, Alandi Road,
                    Kalas, and Khadki.{" "}
                  </strong>
                  making ASQUARE a trusted choice for{" "}
                  <strong> NEET preparation in Pune. </strong>
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
                Best NEET Coaching in Dhanori?
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
            <span> ASQUARE Academy Dhanori</span>
          </h2>

          {/* Description */}
          <div className="mx-auto mb-5">
            <p className="lead text-secondary mb-3">
              The<strong> NEET course at ASQUARE Academy, Dhanori, </strong>
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
                  Dhanori, Lohegaon, Tingre Nagar, Viman Nagar, Vishrantwadi,
                  Yerwada, Kalyani Nagar, Kharadi, Wagholi, Alandi Road, Kalas,
                  and Khadki.{" "}
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
              Course Details (NEET UG) - Top NEET Coaching Classes in Dhanori
            </h3>

            <p className="fs-5">
              <strong>NEET UG</strong> is the national-level exam for medical
              courses like{" "}
              <strong>
                MBBS, BDS, BAMS, BHMS, and other medical programs.
              </strong>
              At <strong> ASQUARE Academy Dhanori,</strong>
              we provide focused training with conceptual depth, problem-solving
              practice, and strategy-based mock tests.
            </p>
            <p className="fs-5">
              Our faculty’s experience and student success record make ASQUARE
              one of the{" "}
              <strong> Top NEET Coaching Institutes in Dhanori Pune. </strong>
            </p>
            <p className="fs-5">
              We are among the{" "}
              <strong>Top NEET Coaching Institutes in Dhanori, </strong>
              known for high student success and experienced faculty.
            </p>

            <h4 className="fw-bold text-primary-emphasis mt-5 fs-3">
              Subjects Covered in NEET Classes at Dhanori
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
              Program Duration and Batch Options — NEET Preparation in Dhanori
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
              Best NEET Coaching in Dhanori,
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
              At <strong> ASQUARE Academy Dhanori </strong>
              has consistently delivered strong <strong> NEET results, </strong>
              with selections in{" "}
              <strong className="text-primary">
                AIIMS, Government Medical Colleges, and top private institutes.{" "}
              </strong>
              Our student-first approach, expert mentors, and structured test
              strategy have made ASQUARE one of the
              <strong> Best NEET Coaching Centres in Dhanori Pune. </strong>
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
                  Top NEET Training Institute in Dhanori and Pune.
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
              Top NEET Coaching Institutes in Dhanori.
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
              <strong> Top NEET Coaching Classes in Dhanori, Pune, </strong>
              With expert faculty, structured study plans, and a strong success
              record, <strong> ASQUARE Academy </strong>
              is your trusted choice for NEET preparation.
            </p>

            <p className="d-flex flex-wrap justify-content-center align-items-center gap-2 text-dark">
              <MapPin className="text-primary" size={22} />
              <span>
                Convenient for students from{" "}
                <strong>
                  {" "}Dhanori, Lohegaon, Tingre Nagar, Viman Nagar, Vishrantwadi,
                  Yerwada, Kalyani Nagar, Kharadi, Wagholi, Alandi Road, Kalas,
                  and Khadki.
                </strong>
              </span>
            </p>
          </div>

          {/* Subheading */}
          <h4 className="fw-bold text-primary mb-4">
            Limited seats available – Enroll today!
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

export default NEETDhanori;
