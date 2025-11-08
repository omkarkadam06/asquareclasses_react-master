import React, { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import locationBGImage from "../../../Assets/locationPageImages/neet/NEET slider PC.jpeg";
import MobileBGImage from "../../../Assets/locationPageImages/neet/NEET slider mobile.jpeg";
import image1 from "../../../Assets/locationPageImages/neet/NEET Page 1.jpeg";
import image2 from "../../../Assets/locationPageImages/neet/NEET Page 2.jpeg";
import {
  Award,
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

function NEETPimpri() {
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
      title: "Experienced Faculty",
      description:
        "Expert mentors specializing in Physics, Chemistry, and Biology.",
    },
    {
      Icon: BookOpen,
      title: "Structured NEET Curriculum",
      description:
        "Comprehensive, NCERT-based syllabus with exam-focused coverage.",
    },
    {
      Icon: Target,
      title: "Small Batches for Personalized Learning",
      description:
        "Each student gets individual attention and doubt-solving sessions.",
    },
    {
      Icon: BarChart,
      title: "Regular Assessments",
      description:
        "Weekly and monthly mock exams simulate NEET-level difficulty.",
    },
    {
      Icon: Calendar,
      title: "Hybrid Learning",
      description:
        "Both classroom and online NEET classes in Pimpri are available.",
    },
    {
      Icon: School,
      title: "Board + NEET Integration",
      description:
        "Designed to balance school curriculum and NEET preparation seamlessly.",
    },
  ];

  const subjectsCovered = [
    {
      title: "Physics",
      desc: "Conceptual clarity through derivations, problem-solving, and practical application.",
    },
    {
      title: "Chemistry",
      desc: "In-depth understanding of Physical, Organic, and Inorganic Chemistry with NCERT focus.",
    },
    {
      title: "Biology",
      desc: "Detailed coverage of NCERT-based chapters and NEET-level question practice.",
    },
  ];

    const programDurations = [
    {
      icon: Clock,
      title: "2-Year Integrated Program (Class 11 → 12):",
      desc: "Foundation-to-advanced course integrating school and NEET preparation.",
    },
    {
      icon: Target,
      title: "1-Year Target Program (Class 12):",
      desc: "Fast-paced NEET course with mock tests and regular analysis.",
    },
    {
      icon: CalendarSync,
      title: "Dropper/Repeater Batch:",
      desc: "Intensive one-year course for NEET droppers with detailed test series.",
    },
    {
      icon: School,
      title: "Crash Course:",
      desc: "2–3 months of quick revision, PYQs, and mock test practice.",
    },
  ];

  const methodologySteps = [
    {
      Icon: Lightbulb,
      title: "Learn",
      description:
        "Interactive classroom sessions for clear conceptual understanding.",
    },
    {
      Icon: BookOpen,
      title: "Practice",
      description:
        "Topic-wise DPPs (Daily Practice Papers) and test sheets for continuous improvement.",
    },
    {
      Icon: BarChart,
      title: "Assess",
      description:
        "Regular mock tests to measure progress and enhance exam skills.",
    },
    {
      Icon: MessageCircle,
      title: "Revise",
      description:
        "Dedicated revision classes and personalized improvement plans.",
    },
  ];
  
  const faqData = [
    {
      q: "Does ASQUARE provide advanced NEET coaching in Pimpri?",
      a: "Yes — ASQUARE offers special batches for advanced NEET preparation with mock tests, test analysis, and strategy sessions.",
    },
    {
      q: "Are small batches available for better guidance?",
      a: "Yes, every batch is limited in size for personalized mentoring.",
    },
    {
      q: "Can students from nearby areas like Chinchwad or Bhosari join?",
      a: "Absolutely! Students from Chinchwad, Bhosari, Kasarwadi, Pimple Gurav, and Dapodi join regularly.",
    },
    {
      q: "Do you offer online NEET classes?",
      a: "Yes — students can choose between classroom and online NEET coaching in Pimpri Pune as per convenience.",
    },
    {
      q: "How do you track student performance?",
      a: "We track through weekly topic tests, full-length mocks, and detailed performance reports shared with parents.",
    },
  ];

  const gridFeatures = [
    {
      Icon: Award,
      title: "Experienced faculty from reputed institutions",
      colorClass: "bg-gradient-blue",
    },
    {
      Icon: Users,
      title: "Comprehensive printed & digital study materials",
      colorClass: "bg-gradient-purple",
    },
    {
      Icon: BookOpen,
      title: "Doubt-solving and one-on-one mentoring sessions",
      colorClass: "bg-gradient-green",
    },
    {
      Icon: TrendingUp,
      title: "Regular parent-teacher meetings and performance tracking",
      colorClass: "bg-gradient-orange",
    },
    {
      Icon: CalendarSync,
      title: "Workshops on time management and accuracy",
      colorClass: "bg-gradient-red",
    },
    {
      Icon: ChartSpline,
      title: "Online test platform with detailed analytics",
      colorClass: "bg-gradient-teal",
    },
    {
      Icon: MapPin,
      subtitle: "Convenient access for students from",
      extraText:
        "Sant Tukaram Nagar, Nehrunagar, Kharalwadi, Pimpri Colony, and Morwadi.",
      colorClass: "bg-gradient-pink",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Best NEET Coaching in Pimpri Pune | ASQUARE Academy
        </title>
        <meta
          name="title"
          content="Best NEET Coaching in Pimpri Pune | ASQUARE Academy"
        />
        <meta
          name="description"
          content="Join ASQUARE Academy for the best NEET coaching in Pimpri Pune. Expert faculty, small batches, and advanced preparation with tests and online options."
        />
        <meta
          name="keywords"
          content="NEET Coaching in Pimpri Pune,Best NEET Classes in Pimpri,Top NEET Coaching Institute Pimpri,NEET Preparation in Pimpri,ASQUARE Academy Pimpri,NEET Coaching near Sant Tukaram Nagar,NEET Classes near Nehrunagar,Best NEET Institute in Kharalwadi Pimpri,Medical Entrance Coaching Pimpri Pune,Top NEET Institute in PCMC"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{`
        {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-pimpri-pune",
      "name": "ASQUARE Academy - NEET Coaching in Pimpri Pune",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "telephone": "+91-9766118877",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Pimpri",
        "addressRegion": "Pune",
        "addressCountry": "India"
      },
      "url": "https://www.asquareclasses.com/neet-coaching-classes-institute-pimpri-pune",
      "priceRange": "₹₹",
      "openingHours": "Mo-Sa 09:00-20:00",
      "sameAs": [
        "https://www.facebook.com/asquareacademy",
        "https://www.instagram.com/asquareacademy"
      ],
      "description": "ASQUARE Academy provides the best NEET coaching in Pimpri Pune with expert mentors, advanced preparation modules, and personalized small-batch learning."
    },
    {
      "@type": "EducationalOrganization",
      "name": "ASQUARE Academy",
      "url": "https://www.asquareclasses.com/",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "description": "ASQUARE Academy offers NEET coaching in Pimpri Pune with small batches, mock tests, and online learning options for students aiming for medical success.",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9766118877",
        "contactType": "Customer Service"
      },
      "sameAs": [
        "https://www.facebook.com/asquareacademy",
        "https://www.instagram.com/asquareacademy"
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
          "name": "NEET Coaching in Pimpri Pune",
          "item": "https://www.asquareclasses.com/neet-coaching-classes-institute-pimpri-pune"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does ASQUARE provide advanced NEET coaching in Pimpri?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes—ASQUARE offers special batches for advanced NEET preparation with mock tests, test analysis, and strategy sessions."
          }
        },
        {
          "@type": "Question",
          "name": "Are small batches available for better guidance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, every batch is limited in size for personalized mentoring and focused learning."
          }
        },
        {
          "@type": "Question",
          "name": "Can students from nearby areas like Chinchwad or Bhosari join?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely! Students from Chinchwad, Bhosari, Kasarwadi, Pimple Gurav, and Dapodi join regularly for NEET preparation at ASQUARE Academy Pimpri."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer online NEET classes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes—students can choose between classroom and online NEET coaching in Pimpri Pune as per their convenience."
          }
        },
        {
          "@type": "Question",
          "name": "How do you track student performance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We track student progress through weekly topic tests, full-length mocks, and detailed performance reports shared with parents."
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
                Crack NEET with Expert Mentorship at{" "}
                <span className="gradient-text-yellow d-inline-block">
                  ASQUARE Academy
                </span>
                , Pimpri
              </h1>
              <p className="fs-5 text-white mb-3 lh">
                Looking for result-oriented{" "}
                <strong>NEET coaching classes in Pimpri, Pune? </strong>
                At ASQUARE Academy, we prepare NEET aspirants to achieve top
                ranks through conceptual clarity, individual mentorship, and
                exam-based practice. Recognized as one of the
                <strong> Best NEET Coaching Institutes in Pimpri, </strong>{" "}
                ASQUARE blends{" "}
                <strong>
                  {" "}
                  NCERT-focused teaching, strategic test preparation,
                </strong>{" "}
                and
                <strong> personal attention </strong>to help students excel in
                NEET-UG.
              </p>
              <div className="hero-location-info d-flex align-items-start gap-3">
                <MapPin
                  size={24}
                  color="#FFCB03"
                  className="flex-shrink-0 mt-1"
                />
                <span className="text-white">
                  <strong>Our Pimpri branch serves students from:</strong> Sant
                  Tukaram Nagar, Nehrunagar, Kharalwadi, Pimpri Colony, Morwadi,
                  MIDC Pimpri and Fugewadi, as well as nearby areas like{" "}
                  <strong>
                    Chinchwad, Bhosari, Kasarwadi, and Pimple Gurav —
                  </strong>
                  making it a hub for
                  <strong>NEET preparation in PCMC Pune.</strong>
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
                — Best NEET Coaching in Pimpri
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
                  Our goal is to create strong conceptual understanding and
                  competitive confidence, helping students crack NEET with high
                  accuracy and speed.
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
            <span>ASQUARE Academy - Pimpri</span>
          </h2>

          {/* Description */}
          <div className="mx-auto mb-5">
            <p className="lead text-secondary mb-3">
              The <strong> NEET course at ASQUARE Academy, Pimpri, </strong> is
              designed to help students master each subject step by step. We
              emphasize{" "}
              <strong>
                {" "}
                concept clarity, test consistency, and exam temperament,{" "}
              </strong>
              ensuring students perform confidently in the actual NEET exam.
            </p>

            <p className="d-flex flex-wrap justify-content-center align-items-center gap-2 text-dark">
              <MapPin className="text-primary" size={26} />
              <span>
                Our curriculum covers{" "}
                <strong>Physics, Chemistry, and Biology </strong>
                in detail, with practice modules, test series, and personalized
                mentoring. Students from{" "}
                <strong>
                  Nehrunagar, Sant Tukaram Nagar, and Kharalwadi
                </strong>{" "}
                benefit from our experienced faculty and competitive test
                environment.
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
              Course Details (NEET UG) - Top NEET Coaching Classes in Pimpri
            </h3>

            <p className="fs-5">
              <strong>NEET UG</strong> is the gateway to top medical colleges
              across India offering{" "}
              <strong>MBBS, BDS, BAMS, BHMS, and BPT</strong> programs.
            </p>
            <p className="fs-5">
              At <strong>ASQUARE Academy Pimpri,</strong> our scientifically
              structured teaching plan, regular performance evaluations, and
              one-on-one mentoring ensure complete readiness for the NEET-UG
              exam.
            </p>
            <p className="fs-5">
              We combine conceptual teaching with consistent{" "}
              <strong>mock test series</strong> and performance reviews —
              positioning ASQUARE as{" "}
              <strong>a top NEET coaching institute in PCMC Pune.</strong>
            </p>

            <h4 className="fw-bold text-primary-emphasis mt-5 fs-3">
              Subjects Covered in NEET Classes at Pimpri
            </h4>

            <div className="mt-4">
              {subjectsCovered.map((subject, i) => (
                <SubjectCard key={i} {...subject} />
              ))}
            </div>

            <p className="fs-5">
              Our balanced subject-wise approach ensures conceptual mastery and
              time-bound performance improvement.
            </p>
          </div>

          {/* Right Column - Blue */}
          <div className="col-lg-6 p-5 p-lg-5 text-white lg-b-bg-b">
            <h5 className="fw-bold text-warning mb-4 fs-1">
              Program Duration and Batch Options — NEET Preparation Pimpri
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
              Best NEET Coaching in Pimpri, Pune
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
              ASQUARE Academy's NEET Success - Proven Track Record{" "}
            </h4>
          </div>
          <div className="results-box-gradient">
            <p className="fs-5 text-dark mb-3 text-center">
              At <strong className="text-primary">ASQUARE Academy,</strong> we
              take pride in our consistent NEET results. Our students have
              secured admissions to India’s premier medical colleges such as
              <strong className="text-primary">
                {" "}
                AIIMS, BJ Medical College, AFMC, and DY Patil Medical College
                Pune.
              </strong>
            </p>
            <div className="d-flex align-items-center justify-content-center gap-2 text-primary">
              <CheckCircle size={24} />
              <p className="fs-5 fw-semibold mb-0">
                Our unique combination of mentorship, structured learning, and
                regular testing makes us one of the
                <strong>
                  {" "}
                  Top NEET Coaching Institutes in Pimpri-Chinchwad (PCMC).
                </strong>
              </p>
            </div>
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
                  the best NEET training institute in Pimpri and PCMC.
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
              Top NEET Coaching Institutes in Pimpri-Chinchwad (PCMC).
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
            Enroll Now at <span>ASQUARE Academy - Pimpri Pune</span>
          </h2>

          {/* Description */}
          <div className="mx-auto mb-5">
            <p className="lead text-secondary mb-3">
              If you’re searching for the{" "}
              <strong> Top NEET Coaching Classes in Pimpri, Pune,</strong>, the{" "}
              look no further than
              <strong>ASQUARE Academy.</strong>
              With experienced teachers, structured test planning, and
              consistent student success, we’re the trusted name for
              <strong> NEET preparation in PCMC Pune.</strong>
            </p>

            <p className="d-flex flex-wrap justify-content-center align-items-center gap-2 text-dark">
              <MapPin className="text-primary" size={22} />
              <span>
                Convenient from{" "}
                <strong>
                  Sant Tukaram Nagar, Nehrunagar, Kharalwadi, Morwadi, Fugewadi,
                  MIDC Pimpri, Pimpri Colony, Chinchwad, and Bhosari.
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

export default NEETPimpri;
