import React, { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import locationBGImage from "../../../Assets/locationPageImages/neet/NEET slider PC4.jpeg";
import MobileBGImage from "../../../Assets/locationPageImages/neet/NEET slider mobile4.jpeg";
import image1 from "../../../Assets/locationPageImages/neet/NEET Page 12.jpeg";
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

function NEETTingreNagar() {
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
      title: "Highly Experienced Faculty",
      description:
        "Specialized instructors for Physics, Chemistry, and Biology.",
    },
    {
      Icon: BookOpen,
      title: "Concept-Driven Curriculum",
      description:
        "NCERT-aligned teaching enhanced with NEET-level problem-solving.",
    },
    {
      Icon: Target,
      title: "Small Batch Sizes",
      description: "Ensures focused attention and efficient doubt resolution.",
    },
    {
      Icon: BarChart,
      title: "Systematic Performance Tracking",
      description: "Weekly tests, full-length mocks, and result analytics.",
    },
    {
      Icon: Calendar,
      title: "Flexible Learning Options",
      description: "Classroom and online instruction formats available.",
    },
    {
      Icon: School,
      title: "Dedicated Mentoring",
      description:
        "Support for managing NEET and board exam preparation simultaneously.",
    },
  ];

  const subjectsCovered = [
    {
      title: "Physics",
      desc: "Core concepts reinforced with extensive numerical practice.",
    },
    {
      title: "Chemistry",
      desc: "Thorough coverage of Physical, Organic, and Inorganic Chemistry.",
    },
    {
      title: "Biology",
      desc: "Line-by-line NCERT-based teaching focusing on diagrams and high-yield topics.",
    },
  ];

  const programDurations = [
    {
      icon: Clock,
      title: "2-Year Integrated Program (Class 11 → 12):",
      desc: "Build strong foundations with NEET + board exam-focused preparation over two years.",
    },
    {
      icon: Target,
      title: "1-Year Target Course (Class 12):",
      desc: "Rapid syllabus coverage with targeted mock tests and Class 11 revision.",
    },
    {
      icon: CalendarSync,
      title: "Dropper/Repeater Batch:",
      desc: "Dedicated for repeat aspirants; includes full-length tests, error analysis, and intensive mentoring.",
    },
    {
      icon: School,
      title: "Crash Course:",
      desc: "Short-term, high-impact revision with PYQ discussions and exam strategy drills.",
    },
  ];

  const methodologySteps = [
    {
      Icon: Lightbulb,
      title: "Learn",
      description: "Engaging classroom lectures for solid concept clarity.",
    },
    {
      Icon: BookOpen,
      title: "Practice",
      description: "Daily assignments, DPPs, and class quizzes.",
    },
    {
      Icon: BarChart,
      title: "Assess",
      description: "Regular weekly tests and full-length mock exams.",
    },
    {
      Icon: MessageCircle,
      title: "Revise",
      description: "Subject-wise and final revision strategies before exams.",
    },
  ];

  const faqData = [
    {
      q: "Who can enroll in NEET coaching at ASQUARE Academy?",
      a: "Students from Class XI, XII, or those taking a drop year can join our NEET coaching. The batches are designed to match every student’s learning level and preparation goal.",
    },
    {
      q: "Are crash courses available for NEET?",
      a: "Yes, ASQUARE Academy offers short-term crash courses that include intensive revision, mock tests, and concept reinforcement for last-minute preparation.",
    },
    {
      q: "Do you have special batches for repeaters?",
      a: "Yes, we conduct exclusive repeater batches with personalized mentoring and performance tracking to help students improve scores in their next NEET attempt.",
    },
    {
      q: "Are online NEET classes available?",
      a: "Absolutely. Students can attend both online and offline sessions with live interactive lectures, recorded lessons, and online doubt-solving support.",
    },
    {
      q: "How do you monitor student performance?",
      a: "Regular mock tests, progress reports, and one-on-one feedback sessions ensure students stay on track and continuously improve their scores.",
    },
    {
      q: "What teaching methods are used in NEET classes?",
      a: "Our expert faculty combines concept-based learning, doubt-solving sessions, and problem practice to strengthen students’ understanding and accuracy.",
    },
    {
      q: "Do you provide study materials for NEET preparation?",
      a: "Yes, students receive updated NEET-focused study materials, question banks, and previous years’ papers designed by subject experts.",
    },
    {
      q: "Is there counseling or guidance for students?",
      a: "Yes, we provide academic counseling, motivation sessions, and career guidance to help students stay confident and focused throughout their NEET journey.",
    },
  ];

  const gridFeatures = [
    {
      Icon: BookOpen,
      title: "Up-to-date printed & digital study materials tailored to NEET.",
      colorClass: "bg-gradient-blue",
    },
    {
      Icon: Users,
      title: "Personalized doubt-clearing sessions.",
      colorClass: "bg-gradient-purple",
    },
    {
      Icon: ChartSpline,
      title: "Monthly progress tracking with parent–teacher meetings.",
      colorClass: "bg-gradient-green",
    },
    {
      Icon: BarChart,
      title: "Advanced analytics through an online test-taking platform.",
      colorClass: "bg-gradient-orange",
    },
    {
      Icon: TrendingUp,
      title: "Online test platform with detailed analytics",
      colorClass: "bg-gradient-teal",
    },
    {
      Icon: Award,
      title: "Workshops on mindset, accuracy, and time management.",
      colorClass: "bg-gradient-red",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Top NEET Coaching Classes in Tingre Nagar Pune | ASQUARE</title>
        <meta
          name="title"
          content="Top NEET Coaching Classes in Tingre Nagar Pune | ASQUARE"
        />
        <meta
          name="description"
          content="Join ASQUARE Academy for the best NEET coaching in Tingre Nagar Pune. Expert faculty, advanced preparation, and personalized mentoring for NEET success."
        />
        <meta
          name="keywords"
          content="NEET coaching classes in Tingre Nagar Pune, Best NEET Coaching in Tingre Nagar Pune, Top NEET Coaching Classes Tingre Nagar Pune, NEET Advanced Preparation Tingre Nagar Pune, Best NEET Classes in Vishrantwadi Pune, Top NEET Classes in Yerwada Pune, NEET Coaching near Viman Nagar, NEET Classes near Kharadi"
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
      "url": "https://www.asquareclasses.com/neet-coaching-classes-institute-tingre-nagar-pune",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "description": "ASQUARE Academy offers the best NEET coaching classes in Tingre Nagar Pune with expert guidance, mock tests, and advanced preparation modules.",
      "telephone": "+91-9766118877",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Tingre Nagar, Pune, Maharashtra",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411032",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.facebook.com/asquareclasses",
        "https://www.instagram.com/asquareacademy"
      ]
    },
    {
      "@type": "LocalBusiness",
      "name": "ASQUARE Academy - NEET Coaching in Tingre Nagar Pune",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "url": "https://www.asquareclasses.com/neet-coaching-classes-institute-tingre-nagar-pune",
      "telephone": "+91-9766118877",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Tingre Nagar, Pune, Maharashtra",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411032",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "18.5748",
        "longitude": "73.8860"
      },
      "openingHours": "Mo-Sa 08:00-20:00",
      "sameAs": [
        "https://www.asquareclasses.com/"
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
          "name": "NEET Coaching",
          "item": "https://www.asquareclasses.com/neet-coaching-classes-institute-in-pune/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "NEET Coaching Classes in Tingre Nagar Pune",
          "item": "https://www.asquareclasses.com/neet-coaching-classes-institute-tingre-nagar-pune"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can enroll in NEET coaching at ASQUARE Academy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students from Class XI, XII, or those taking a drop year can join our NEET coaching. The batches are designed to match every student’s learning level and preparation goal."
          }
        },
        {
          "@type": "Question",
          "name": "Are crash courses available for NEET?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, ASQUARE Academy offers short-term crash courses that include intensive revision, mock tests, and concept reinforcement for last-minute preparation."
          }
        },
        {
          "@type": "Question",
          "name": "Do you have special batches for repeaters?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we conduct exclusive repeater batches with personalized mentoring and performance tracking to help students improve scores in their next NEET attempt."
          }
        },
        {
          "@type": "Question",
          "name": "Are online NEET classes available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. Students can attend both online and offline sessions with live interactive lectures, recorded lessons, and online doubt-solving support."
          }
        },
        {
          "@type": "Question",
          "name": "How do you monitor student performance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Regular mock tests, progress reports, and one-on-one feedback sessions ensure students stay on track and continuously improve their scores."
          }
        },
        {
          "@type": "Question",
          "name": "What teaching methods are used in NEET classes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our expert faculty combines concept-based learning, doubt-solving sessions, and problem practice to strengthen students’ understanding and accuracy."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide study materials for NEET preparation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, students receive updated NEET-focused study materials, question banks, and previous years’ papers designed by subject experts."
          }
        },
        {
          "@type": "Question",
          "name": "Is there counseling or guidance for students?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we provide academic counseling, motivation sessions, and career guidance to help students stay confident and focused throughout their NEET journey."
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
                Build Your{" "}
                <span className="gradient-text-yellow d-inline-block">
                  NEET Success Path at ASQUARE Academy—Tingre Nagar
                </span>
              </h1>
              <p className="fs-5 text-white mb-3 lh">
                Achieving top ranks in NEET UG demands a solid strategy, clear
                fundamentals, and relentless practice. At
                <strong> ASQUARE Academy,</strong>
                our
                <strong> NEET coaching classes in Tingre Nagar, Pune </strong>
                located in Tingre Nagar, Pune, our
                <strong> NEET coaching classes </strong>
                are designed to enhance conceptual understanding, sharpen
                exam-taking skills, and provide robust mentorship. Recognized as
                one of the{" "}
                <strong>best NEET coaching institutes in Pune,</strong> ASQUARE
                combines structured training, personalized support, and proven
                success records.
              </p>
              <div className="hero-location-info d-flex align-items-start gap-3">
                <MapPin
                  size={24}
                  color="#FFCB03"
                  className="flex-shrink-0 mt-1"
                />
                <span className="text-white">
                  <strong>we help students from:</strong> Tingre Nagar,
                  Vishrantwadi, Yerwada, Hadapsar, Viman Nagar, Kharadi, and
                  surrounding areas.
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
                for NEET Preparation in Tingre Nagar, Pune
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
            <span>
              {" "}
              ASQUARE Academy - Tingre Nagar, Pune - Structured for Success
            </span>
          </h2>

          {/* Description */}
          <div className="mx-auto mb-5">
            <p className="lead text-secondary mb-3">
              <strong> NEET (UG) </strong> is the premier medical entrance test
              for admissions in MBBS, BDS, BAMS, BHMS, and related disciplines.
              In today’s highly competitive landscape, structured coaching is
              vital. At
              <strong> ASQUARE Academy – Tingre Nagar, </strong> our programs
              provide comprehensive conceptual grounding, strategic preparation,
              and confidence-building through continuous evaluation and
              feedback.
            </p>

            <p className="d-flex flex-wrap justify-content-center align-items-center gap-2 text-dark">
              <MapPin className="text-primary" size={26} />
              <span>
                At <strong>ASQUARE Academy – Tingre Nagar, </strong>
                our NEET programs are designed to build strong fundamentals,
                improve speed & accuracy, and ensure exam readiness through
                sustained practice and analytics.
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
              Course Details (NEET UG) - Top NEET Coaching Classes in Tingre
              Nagar
            </h3>

            <p className="fs-5">
              <strong>NEET UG</strong> is the gateway to top medical colleges
              across India offering{" "}
              <strong>MBBS, BDS, BAMS, BHMS, and other allied courses.</strong>
            </p>
            <p className="fs-5">
              At <strong>ASQUARE Academy Tingre Nagar,</strong> our NEET
              programs are designed to build strong fundamentals, improve speed
              and accuracy, and ensure exam readiness through sustained practice
              and analytics.
            </p>
            <p className="fs-5">
              We are among the{" "}
              <strong>
                Top NEET Coaching Institutes in Tingre Nagar Pune,{" "}
              </strong>
              known for high student success and experienced faculty.
            </p>

            <h4 className="fw-bold text-primary-emphasis mt-5 fs-3">
              Subjects Covered in NEET Classes at Tingre Nagar
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
              Program Duration and Batch Options — NEET Preparation in Tingre
              Nagar
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
              Best NEET Coaching in Tingre Nagar, Pune
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
              ASQUARE Academy’s NEET Success – Results That Speak
            </h4>
          </div>
          <div className="results-box-gradient">
            <p className="fs-5 text-dark mb-3 text-center">
              Students from{" "}
              <strong className="text-primary">
                ASQUARE Academy – Tingre Nagar{" "}
              </strong>
              consistently achieve top NEET scores, securing seats in
              <strong>
                {" "}AIIMS, government medical colleges, and renowned private
                institutions.
              </strong>
              Our reputation for excellence makes us one of the leading{" "}
              <strong>NEET coaching centers in Pune.</strong>
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
                  the best NEET training institute in Tingre Nagar and PCMC.
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
              Top NEET Coaching Institutes in Tingre Nagar.
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
              If you’re searching for{" "}
              <strong> NEET coaching classes in Tingre Nagar, Pune </strong>
              ASQUARE Academy is your partner in success. Backed by top-tier
              instructors, targeted curriculum, and proven results, we empower
              your medical aspirations.
            </p>

            <p className="d-flex flex-wrap justify-content-center align-items-center gap-2 text-dark">
              <MapPin className="text-primary" size={22} />
              <span>
                Convenient for students from{" "}
                <strong>
                  {" "}Tingre Nagar, Vishrantwadi, Yerwada, Hadapsar, Viman Nagar,
                  Kharadi, and surrounding areas.
                </strong>
              </span>
            </p>
          </div>

          {/* Subheading */}
          <h4 className="fw-bold text-primary mb-4">
            Admissions Open Now — Limited Seats!Start your NEET journey with
            ASQUARE Academy today.
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

export default NEETTingreNagar;
