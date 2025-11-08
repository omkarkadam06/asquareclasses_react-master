import React, { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import locationBGImage from "../../../Assets/locationPageImages/neet/NEET slider PC1.jpeg";
import MobileBGImage from "../../../Assets/locationPageImages/neet/NEET slider mobile1.jpeg";
import image1 from "../../../Assets/locationPageImages/neet/NEET Page 18.jpeg";
import image2 from "../../../Assets/locationPageImages/neet/NEET page 6.jpeg";
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

function NEETDehuroad() {
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
      title: "Expert Mentors",
      description:
        "Highly experienced teachers for Physics, Chemistry, and Biology.",
    },
    {
      Icon: BookOpen,
      title: "NCERT-Focused with NEET Depth",
      description:
        "Strong foundational clarity backed with advanced exam-level practice.",
    },
    {
      Icon: Target,
      title: "Personalized Learning",
      description:
        "Small batch sizes ensuring attention and interactive sessions.",
    },
    {
      Icon: BarChart,
      title: "Performance Tracking",
      description: "Weekly tests, monthly mocks, and performance analytics.",
    },
    {
      Icon: Calendar,
      title: "Learning Options",
      description: "Both classroom and online batches available.",
    },
    {
      Icon: Users,
      title: "Balanced Support",
      description: "Helping students excel in NEET while managing board exams.",
    },
  ];

  const subjectsCovered = [
    {
      title: "Physics",
      desc: "In-depth concepts with problem-solving focus.",
    },
    {
      title: "Chemistry",
      desc: "Complete coverage of Physical, Organic, and Inorganic Chemistry.",
    },
    {
      title: "Biology",
      desc: "NCERT line-by-line learning with diagrams, scoring chapters, and applied knowledge.",
    },
  ];

  const programDurations = [
    {
      icon: Clock,
      title: "2-Year Integrated Course (Class 11 → 12)",
      desc: "Foundation building with advanced preparation for Class XI–XII.",
    },
    {
      icon: Target,
      title: "1-Year Target Course (Class 12)",
      desc: "Accelerated prep with rapid syllabus coverage and test-based learning.",
    },
    {
      icon: School,
      title: "Crash Course (2–3 Months)",
      desc: "Intensive final-phase training with PYQs and strategy drills.",
    },
    {
      icon: CalendarSync,
      title: "Dropper/Repeater Batch",
      desc: "Year-long program for repeat aspirants with customized guidance and full test series.",
    },
  ];

  const methodologySteps = [
    {
      Icon: Lightbulb,
      title: "Interactive Lectures",
      description: "Interactive classroom lectures for conceptual clarity.",
    },
    {
      Icon: BookOpen,
      title: "Practice",
      description: "Daily Practice Papers (DPPs) and structured assignments.",
    },
    {
      Icon: BarChart,
      title: "Assess",
      description: "Regular chapter-wise tests and mock exams.",
    },
    {
      Icon: MessageCircle,
      title: "Doubt-Solving",
      description: "Dedicated doubt-clearing sessions.",
    },
    {
      Icon: Calendar,
      title: "Performance Reviews",
      description: "Parent–student review meetings for progress analysis.",
    },
  ];

  const faqData = [
    {
      q: "Who can join NEET coaching at ASQUARE Dehu Road?",
      a: "Students in Class XI, Class XII, and drop-year aspirants.",
    },
    {
      q: "What subjects are covered?",
      a: "Full NEET syllabus: Physics, Chemistry, and Biology.",
    },
    {
      q: "Are mock tests included?",
      a: "Yes, weekly quizzes, chapter tests, and full-length mock exams.",
    },
    {
      q: "What batches are offered?",
      a: "2-year, 1-year, crash, and dropper/repeater batches.",
    },
    {
      q: "How large are the batches?",
      a: "Batches are kept small for better focus and attention.",
    },
    {
      q: "Do parents receive progress reports?",
      a: "Yes, via PTMs and structured performance updates.",
    },
    {
      q: "Is online coaching available?",
      a: "Yes, both classroom and online modes are offered.",
    },
  ];

  const gridFeatures = [
    {
      Icon: Users,
      title: "Small batch sizes for individualized learning",
      colorClass: "bg-gradient-blue",
    },
    {
      Icon: BookOpen,
      title: "NEET-focused updated study material (printed + digital)",
      colorClass: "bg-gradient-purple",
    },
    {
      Icon: Target,
      title: "Printed and digital study material",
      colorClass: "bg-gradient-green",
    },
    {
      Icon: Award,
      title: "Regular PTMs and detailed progress reports",
      colorClass: "bg-gradient-pink",
    },
    {
      Icon: ChartSpline,
      title: "Special workshops on exam strategy, accuracy, and mindset",
      colorClass: "bg-gradient-orange",
    },
    {
      Icon: TrendingUp,
      title:
        "Trusted as one of the leading NEET coaching centres in Dehu Road, Alandi, and PCMC region",
      colorClass: "bg-gradient-red",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Best NEET Coaching Classes in Dehu Road Pune | ASQUARE Academy NEET
          Preparation
        </title>
        <meta
          name="title"
          content="Best NEET Coaching Classes in Dehu Road Pune | ASQUARE Academy NEET Preparation"
        />
        <meta
          name="description"
          content="Join ASQUARE Academy for top NEET coaching classes in Dehu Road Pune. Expert mentors, small batches, mock tests & online learning for XI, XII & droppers."
        />
        <meta
          name="keywords"
          content="NEET coaching classes in dehu road Best NEET Coaching in dehu road Top NEET Coaching Classes dehu road NEET Advanced Preparation dehu road NEET Classes in dehu road Best NEET Classes in dehu road Top NEET Classes in dehu road"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{`
        {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-in-dehu-road-pune#localbusiness",
      "name": "ASQUARE Academy - NEET Coaching Classes in Dehu Road Pune",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "url": "https://www.asquareclasses.com/neet-coaching-classes-institute-in-dehu-road-pune",
      "telephone": "+919766118877",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Dehu Road",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "412101",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune"
      ],
      "description": "ASQUARE Academy offers the best NEET coaching classes in Dehu Road Pune. Expert faculty, small batches, mock tests & online/offline learning for XI, XII & droppers."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-in-dehu-road-pune#webpage",
      "url": "https://www.asquareclasses.com/neet-coaching-classes-institute-in-dehu-road-pune",
      "name": "Best NEET Coaching Classes in Dehu Road Pune | ASQUARE Academy",
      "description": "Enroll at ASQUARE Academy for NEET coaching in Dehu Road Pune. Small batches, experienced faculty & complete syllabus coverage for Physics, Chemistry, and Biology.",
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
      "url": "https://www.asquareclasses.com/",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune"
      ],
      "department": {
        "@type": "EducationalOccupationalProgram",
        "name": "NEET Coaching Program in Dehu Road Pune",
        "educationalCredentialAwarded": "NEET Entrance Preparation",
        "programPrerequisites": "For students of Class XI, XII & droppers",
        "hasCourse": [
          {
            "@type": "Course",
            "name": "NEET Physics Coaching",
            "description": "Comprehensive NEET Physics classes with conceptual clarity and numerical problem-solving."
          },
          {
            "@type": "Course",
            "name": "NEET Chemistry Coaching",
            "description": "Complete NEET Chemistry course covering Organic, Inorganic, and Physical Chemistry with tests."
          },
          {
            "@type": "Course",
            "name": "NEET Biology Coaching",
            "description": "Detailed Biology preparation focusing on NCERT concepts and advanced-level MCQs."
          }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can join NEET coaching at ASQUARE Dehu Road?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students in Class XI, Class XII, and drop-year NEET aspirants can join the program."
          }
        },
        {
          "@type": "Question",
          "name": "What subjects are covered?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Full NEET syllabus: Physics, Chemistry, and Biology."
          }
        },
        {
          "@type": "Question",
          "name": "Are mock tests included?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, weekly quizzes, chapter-wise tests, and full-length mock exams are conducted."
          }
        },
        {
          "@type": "Question",
          "name": "What batches are offered?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer 2-year, 1-year, crash, and dropper/repeater batches for NEET preparation."
          }
        },
        {
          "@type": "Question",
          "name": "How large are the batches?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Batch sizes are small to ensure individual focus and better teacher–student interaction."
          }
        },
        {
          "@type": "Question",
          "name": "Do parents receive progress reports?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, parents receive structured progress reports and updates through regular PTMs."
          }
        },
        {
          "@type": "Question",
          "name": "Is online coaching available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, students can choose from classroom or online learning modes as per convenience."
          }
        }
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
          "name": "Courses",
          "item": "https://www.asquareclasses.com/courses/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "NEET Coaching Classes in Dehu Road Pune"
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
                Excel in NEET with{" "}
                <span className="gradient-text-yellow d-inline-block">
                  ASQUARE Academy, Dehu Road
                </span>
              </h1>
              <p className="fs-5 text-white mb-3 lh">
                Looking for the best
                <strong> NEET coaching classes in Dehu Road, Pune? </strong>
                At <strong> ASQUARE Academy, </strong>
                we provide structured NEET UG preparation designed to strengthen
                concepts, sharpen exam strategies, and deliver results.{" "}
                <strong>
                  {" "}
                  Best NEET Coaching Institutes in Dehu Road,{" "}
                </strong>{" "}
                ASQUARE combines NCERT-focused learning, conceptual clarity, and
                exam-based practice to help students achieve top NEET ranks.
              </p>
              <div className="hero-location-info d-flex align-items-start gap-3">
                <MapPin
                  size={24}
                  color="#FFCB03"
                  className="flex-shrink-0 mt-1"
                />
                <span className="text-white">
                  Students from
                  <strong> Dehu Road, Alandi, Moshi, Bhosari, Nigdi </strong>
                  and nearby areas choose us for our expert faculty, proven
                  success, and personalized mentoring.
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
                Best NEET Coaching in Dehu Road?
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
            <span> ASQUARE Academy Dehu Road</span>
          </h2>

          {/* Description */}
          <div className="mx-auto mb-5">
            <p className="lead text-secondary mb-3">
              The<strong> NEET course at ASQUARE Academy, Dehu Road, </strong>
              provides a step-by-step approach to mastering NEET concepts. Our
              expert faculty ensures that every student understands the theory,
              practices problem-solving, and applies knowledge effectively under
              exam conditions.
            </p>

            <p className="d-flex flex-wrap justify-content-center align-items-center gap-2 text-dark">
              <MapPin className="text-primary" size={26} />
              <span>
                Students from
                <strong> Dehu Road, Alandi, Moshi, Bhosari, Nigdi </strong>
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
              Course Details (NEET UG) - Top NEET Coaching Classes in Dehu Road
            </h3>

            <p className="fs-5">
              <strong>NEET UG</strong> is India’s national entrance test for{" "}
              <strong>
                MBBS, BDS, BAMS, BHMS, and allied medical programs.
              </strong>
              At <strong> ASQUARE Academy Dehu Road,</strong>
              our curriculum focuses on building a solid conceptual base while
              ensuring complete exam readiness through mock tests and
              performance tracking.
            </p>
            <p className="fs-5">
              Our consistent results make ASQUARE one of the{" "}
              <strong>
                {" "}
                Top NEET Coaching Institutes in Dehu Road Pune and PCMC.{" "}
              </strong>
            </p>
            <h4 className="fw-bold text-primary-emphasis mt-5 fs-3">
              Subjects Covered in NEET Classes at Dehu Road
            </h4>

            <div className="mt-4">
              {subjectsCovered.map((subject, i) => (
                <SubjectCard key={i} {...subject} />
              ))}
            </div>

            <p className="fs-5">
              Our <strong> NEET Coaching in Dehu Road Pune </strong>ensures
              holistic preparation and exam-oriented accuracy.
            </p>
          </div>

          {/* Right Column - Blue */}
          <div className="col-lg-6 p-5 p-lg-5 text-white lg-b-bg-b">
            <h5 className="fw-bold text-warning mb-4 fs-1">
              Program Duration and Batch Options — NEET Preparation in Dehu Road
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
              Best NEET Coaching in Dehu Road,
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
              our students have consistently achieved top ranks in NEET, earning
              admission to premier colleges such as{" "}
              <strong className="text-primary">
                {" "}AIIMS, BJMC, AFMC, and DY Patil Medical College Pune.{" "}
              </strong>
              Our disciplined approach, expert teaching, and consistent mock
              testing make us the
              <strong>
                {" "}
                Top NEET Coaching Centre in Dehu Road Pune and PCMC.{" "}
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
                <strong>
                  Best NEET Training Institutes in Dehu Road PCMC.
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
              Top NEET Coaching Institutes in Dehu Road.
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
            Enroll Now at <span> ASQUARE Academy – Dehu Road Today </span>
          </h2>

          {/* Description */}
          <div className="mx-auto mb-5">
            <p className="lead text-secondary mb-3">
              Begin your journey with the{" "}
              <strong> Best NEET Coaching Classes in Dehu Road, Pune, </strong>
              With expert faculty, structured programs, and consistent results,
              ASQUARE Academy is your trusted companion to medical success.
            </p>

            <p className="d-flex flex-wrap justify-content-center align-items-center gap-2 text-dark">
              <MapPin className="text-primary" size={22} />
              <span>
                Accessible from{" "}
                <strong>
                  {" "}
                  Dehu Road, Alandi, Moshi, Bhosari, Nigdi, and nearby areas.
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

export default NEETDehuroad;
