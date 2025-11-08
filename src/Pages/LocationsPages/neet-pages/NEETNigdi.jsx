import React, { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import locationBGImage from "../../../Assets/locationPageImages/neet/NEET slider PC6.jpeg";
import MobileBGImage from "../../../Assets/locationPageImages/neet/NEET slider mobile6.jpeg";
import image1 from "../../../Assets/locationPageImages/neet/NEET Page 19.jpeg";
import image2 from "../../../Assets/locationPageImages/neet/NEET Page 5.jpeg";
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

function NEETNigdi() {
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
      "Highly qualified mentors for Physics, Chemistry, and Biology.",
  },
  {
    Icon: BookOpen,
    title: "Comprehensive NEET Syllabus",
    description:
      "NCERT-based program with advanced-level NEET problem-solving.",
  },
  {
    Icon: Target,
    title: "Small Batches",
    description:
      "Focused attention and one-on-one mentoring.",
  },
  {
    Icon: BarChart,
    title: "Regular Testing",
    description:
      "Weekly topic tests and full-length NEET mock exams.",
  },
  {
    Icon: Calendar,
    title: "Flexible Learning Modes",
    description:
      "Classroom and online NEET coaching in Nigdi Pune available.",
  },
  {
    Icon: Users,
    title: "Board + NEET Integration",
    description:
      "Balanced schedule covering both school syllabus and NEET preparation.",
  },
];

  const subjectsCovered = [
  {
    title: "Physics",
    desc: "Conceptual understanding with in-depth numerical practice.",
  },
  {
    title: "Chemistry",
    desc: "Balanced coverage of Physical, Organic & Inorganic chemistry with NEET-level focus.",
  },
  {
    title: "Biology",
    desc: "Comprehensive NCERT-based learning with diagrams, short notes, and previous-year question practice.",
  },
];

  const programDurations = [
  {
    icon: Clock,
    title: "2-Year Integrated (Class 11 → 12):",
    desc: "Foundation to advanced course covering NEET + Board syllabus.",
  },
  {
    icon: Target,
    title: "1-Year Target (Class 12):",
    desc: "Intensive NEET-focused course with mock exams and analysis.",
  },
  {
    icon: CalendarSync,
    title: "Dropper/Repeater Batch:",
    desc: "One-year course for repeaters focusing on concept clarity and speed.",
  },
  {
    icon: School,
    title: "Crash Course:",
    desc: "2–3 month revision course covering PYQs and rapid mock tests.",
  },
];

  const methodologySteps = [
  {
    Icon: Lightbulb,
    title: "Learn",
    description: "Concept-based interactive classroom sessions.",
  },
  {
    Icon: BookOpen,
    title: "Practice",
    description: "Regular topic-wise assignments and DPPs.",
  },
  {
    Icon: BarChart,
    title: "Assess",
    description: "Weekly mock tests and progress tracking.",
  },
  {
    Icon: MessageCircle,
    title: "Revise",
    description: "Targeted revision sessions for high-weightage chapters.",
  },
];

  const faqData = [
  {
    q: "Do you offer advanced NEET batches in Nigdi?",
    a: "Yes—our advanced-level NEET batches include mock exams, detailed analysis, and revision tests.",
  },
  {
    q: "Are small batches available for focused learning?",
    a: "Yes, small batch sizes ensure personalized attention and mentoring.",
  },
  {
    q: "Can students from nearby areas join?",
    a: "Absolutely! Students from Chinchwad, Akurdi, Ravet, Talawade, Dehu Road, and Pimpri attend our Nigdi branch.",
  },
  {
    q: "Do you provide online NEET coaching?",
    a: "Yes—ASQUARE offers both offline and online NEET classes in Nigdi Pune.",
  },
  {
    q: "How do you evaluate student performance?",
    a: "We conduct weekly and monthly mock exams, with parent reports and mentor feedback sessions.",
  },
];

const gridFeatures = [
  {
    Icon: Users,
    title: "Expert faculty for all NEET subjects",
    colorClass: "bg-gradient-blue",
  },
  {
    Icon: Users,
    title: "Small batch size ensuring personal focus",
    colorClass: "bg-gradient-purple",
  },
  {
    Icon: BookOpen,
    title: "Printed and digital study material",
    colorClass: "bg-gradient-green",
  },
  {
    Icon: Award,
    title: "Regular PTMs and student performance tracking",
    colorClass: "bg-gradient-orange",
  },
  {
    Icon: ChartSpline,
    title: "Exam strategy and time management sessions",
    colorClass: "bg-gradient-pink",
  },
  {
    Icon: BarChart,
    title: "Online testing platform with analytics and rank reports",
    colorClass: "bg-gradient-red",
  },
  {
    Icon: MapPin,
    title:
      "Convenient for students from Nigdi Pradhikaran, Yamunanagar, Sector 24, Akurdi, Spine Road, and Bhakti Shakti Chowk",
    colorClass: "bg-gradient-teal",
  },
];

  return (
    <>
      <Helmet>
        <title>
          NEET Coaching Classes in Nigdi Pune| ASQUARE Academy NEET Preparation
        </title>
        <meta
          name="title"
          content="NEET Coaching Classes in Nigdi Pune| ASQUARE Academy NEET Preparation"
        />
        <meta
          name="description"
          content="Join ASQUARE Academy for the best NEET coaching in Nigdi Pune. Expert faculty, mock tests & personalized mentoring for medical aspirants. Enroll today!"
        />
        <meta
          name="keywords"
          content="NEET coaching classes in nigdi Best NEET Coaching in nigdi Top NEET Coaching Classes nigdi NEET Advanced Preparation nigdi NEET Classes in nigdi Best NEET Classes in nigdi Top NEET Classes in nigdi"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{`
        {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-nigdi-pune/#localbusiness",
      "name": "ASQUARE Academy Nigdi Pune",
      "url": "https://www.asquareclasses.com/neet-coaching-classes-institute-nigdi-pune/",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "description": "ASQUARE Academy offers top NEET coaching classes in Nigdi Pune with small batches, expert faculty, and personalized mentoring.",
      "telephone": "9766118877",
      "priceRange": "₹₹",
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune"
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Nigdi, Pune, Maharashtra",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411044",
        "addressCountry": "IN"
      },
      "openingHours": "Mo-Su 08:00-20:00"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-nigdi-pune/#webpage",
      "url": "https://www.asquareclasses.com/neet-coaching-classes-institute-nigdi-pune/",
      "name": "NEET Coaching Classes in Nigdi Pune | ASQUARE Academy",
      "description": "Best NEET coaching classes in Nigdi Pune with advanced preparation, mock exams & expert mentors at ASQUARE Academy.",
      "inLanguage": "en-IN",
      "isPartOf": {
        "@id": "https://www.asquareclasses.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-nigdi-pune/#breadcrumb"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-nigdi-pune/#breadcrumb",
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
          "name": "NEET Coaching Nigdi",
          "item": "https://www.asquareclasses.com/neet-coaching-classes-institute-nigdi-pune/"
        }
      ]
    },
    {
      "@type": "EducationalOccupationalProgram",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-nigdi-pune/#educational",
      "name": "NEET Coaching Classes in Nigdi Pune",
      "provider": {
        "@type": "Organization",
        "name": "ASQUARE Academy",
        "sameAs": "https://www.asquareclasses.com/"
      },
      "educationalCredentialAwarded": "NEET Preparation Program",
      "timeToComplete": "P1Y",
      "hasCourse": {
        "@type": "Course",
        "name": "Advanced NEET Preparation",
        "description": "Comprehensive NEET preparation including syllabus coverage, mock tests, and personalized mentoring."
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-nigdi-pune/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you offer advanced NEET batches in Nigdi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes—our advanced-level NEET batches include mock exams, detailed analysis, and revision tests."
          }
        },
        {
          "@type": "Question",
          "name": "Are small batches available for focused learning?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, small batch sizes ensure personalized attention and mentoring."
          }
        },
        {
          "@type": "Question",
          "name": "Can students from nearby areas join?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely! Students from Chinchwad, Akurdi, Ravet, Talawade, Dehu Road, and Pimpri attend our Nigdi branch."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide online NEET coaching?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes—ASQUARE offers both offline and Online NEET Classes in Nigdi Pune."
          }
        },
        {
          "@type": "Question",
          "name": "How do you evaluate student performance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We conduct weekly and monthly mock exams, with parent reports and mentor feedback sessions."
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
                Crack NEET with Expert Mentorship at –{" "}
                <span className="gradient-text-yellow d-inline-block">
                ASQUARE Academy, Nigdi
                </span>
              </h1>
              <p className="fs-5 text-white mb-3 lh">
                Looking for the most trusted 
                <strong> NEET coaching classes in Nigdi, Pune? </strong>
                At <strong> ASQUARE Academy, </strong>
                 we specialize in guiding NEET aspirants toward success through expert teaching, consistent assessments, and personalized mentoring. Recognized among the {" "}
                <strong> Best NEET Coaching Institutes in Nigdi, </strong> ASQUARE combines NCERT-focused learning, conceptual clarity, and exam-based practice to help students achieve top NEET ranks.
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
                    Nigdi Pradhikaran, Yamunanagar, Sector 24, Akurdi, Bhakti Shakti Chowk, and Spine Road {" "}
                  </strong>
                  prefer ASQUARE for its high-quality teaching and strong academic outcomes. We also serve students from nearby areas like
                  <strong> Chinchwad, Pimpri, Ravet, Talawade, and Dehu Road, </strong>
                   making us one of the leading institutes for NEET preparation in PCMC Pune.
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
                Best NEET Coaching in Nigdi?
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
            <span> ASQUARE Academy Nigdi</span>
          </h2>

          {/* Description */}
          <div className="mx-auto mb-5">
            <p className="lead text-secondary mb-3">
              The<strong> NEET course at ASQUARE Academy, Nigdi, </strong>
              provides a step-by-step approach to mastering NEET concepts. Our expert faculty ensures that every student understands the theory, practices problem-solving, and applies knowledge effectively under exam conditions.
            </p>

            <p className="d-flex flex-wrap justify-content-center align-items-center gap-2 text-dark">
              <MapPin className="text-primary" size={26} />
              <span>
                Students from
                <strong>
                  {" "}
                  Nigdi Pradhikaran, Yamunanagar, and Akurdi {" "}
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
              Course Details (NEET UG) - Top NEET Coaching Classes in Nigdi
            </h3>

            <p className="fs-5">
              <strong>NEET UG</strong> is India’s national entrance test for{" "}
              <strong>
                MBBS, BDS, BAMS, BHMS, and allied medical programs.
              </strong>
              At <strong> ASQUARE Academy Nigdi,</strong>
             our curriculum focuses on building a solid conceptual base while ensuring complete exam readiness through mock tests and performance tracking.
            </p>
            <p className="fs-5">
              Our consistent results make ASQUARE one of the{" "}
              <strong> Top NEET Coaching Institutes in Nigdi Pune and PCMC. </strong>
            </p>
            <h4 className="fw-bold text-primary-emphasis mt-5 fs-3">
              Subjects Covered in NEET Classes at Nigdi
            </h4>

            <div className="mt-4">
              {subjectsCovered.map((subject, i) => (
                <SubjectCard key={i} {...subject} />
              ))}
            </div>

            <p className="fs-5">
              Our <strong> NEET Coaching in Nigdi Pune </strong>ensures holistic preparation and exam-oriented accuracy.
            </p>
          </div>

          {/* Right Column - Blue */}
          <div className="col-lg-6 p-5 p-lg-5 text-white lg-b-bg-b">
            <h5 className="fw-bold text-warning mb-4 fs-1">
              Program Duration and Batch Options — NEET Preparation in Nigdi
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
              Best NEET Coaching in Nigdi,
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
                AIIMS, BJMC, AFMC, and DY Patil Medical College Pune.{" "}
              </strong>
              Our disciplined approach, expert teaching, and consistent mock testing make us the
              <strong> Top NEET Coaching Centre in Nigdi Pune and PCMC. </strong>
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
                  Best NEET Training Institutes in Nigdi PCMC.
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
              Top NEET Coaching Institutes in Nigdi.
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
            Enroll Now at <span> ASQUARE Academy – Nigdi Pune </span>
          </h2>

          {/* Description */}
          <div className="mx-auto mb-5">
            <p className="lead text-secondary mb-3">
              If you’re searching for the {" "}
              <strong> Best NEET Coaching Classes in Nigdi, Pune, </strong>
              join ASQUARE Academy today. With expert faculty, small batches, and a proven test system, ASQUARE ensures every NEET aspirant performs at their best.
            </p>

            <p className="d-flex flex-wrap justify-content-center align-items-center gap-2 text-dark">
              <MapPin className="text-primary" size={22} />
              <span>
                Convenient for students from{" "}
                <strong>
                  {" "}Nigdi Pradhikaran, Yamunanagar, Sector 24, Akurdi, Spine Road, Bhakti Shakti Chowk, Ravet, and Talawade.
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

export default NEETNigdi;
