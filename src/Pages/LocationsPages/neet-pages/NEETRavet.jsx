import React, { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import locationBGImage from "../../../Assets/locationPageImages/neet/NEET slider PC5.jpeg";
import MobileBGImage from "../../../Assets/locationPageImages/neet/NEET slider mobile5.jpeg";
import image1 from "../../../Assets/locationPageImages/neet/NEET Page 15.jpeg";
import image2 from "../../../Assets/locationPageImages/neet/NEET Page 11.jpeg";
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

function NEETRavet() {
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
        "Experienced mentors for Physics, Chemistry, and Biology committed to helping you succeed.",
    },
    {
      Icon: BookOpen,
      title: "NCERT-Based but NEET-Focused Approach",
      description:
        "Strong foundational learning complemented by NEET-specific problem-solving strategies.",
    },
    {
      Icon: Target,
      title: "Small Batch Structure",
      description:
        "Individual attention, effective doubt resolution, and enhanced learning.",
    },
    {
      Icon: BarChart,
      title: "Consistent Evaluation",
      description:
        "Weekly tests, monthly mock exams, and detailed performance analytics.",
    },
    {
      Icon: Calendar,
      title: "Flexible Learning Modes",
      description:
        "Both classroom and online coaching options available for all students.",
    },
    {
      Icon: Users,
      title: "Holistic Exam & Academic Guidance",
      description: "Balancing NEET preparation with board exam readiness.",
    },
  ];

  const subjectsCovered = [
    {
      title: "Physics",
      desc: "Concept-driven lessons paired with rigorous numerical practice.",
    },
    {
      title: "Chemistry",
      desc: "Comprehensive sessions covering Physical, Organic, and Inorganic domains.",
    },
    {
      title: "Biology",
      desc: "NCERT-aligned education, diagram-rich content, and scoring techniques for high-impact topics.",
    },
  ];

  const programDurations = [
    {
      icon: Clock,
      title: "2-Year Integrated (Class 11 → 12)",
      desc: "Build foundational strength and master NEET concepts through a two-year timeline.",
    },
    {
      icon: Target,
      title: "1-Year Target (Class 12)",
      desc: "Intensive revision with mock tests and focused NEET strategy.",
    },
    {
      icon: School,
      title: "Crash Course (2–3 Months)",
      desc: "Rev up your preparation with condensed review and PYQ drills.",
    },
    {
      icon: CalendarSync,
      title: "Dropper/Repeater Batch",
      desc: "Personalized 1-year guidance for aspirants aiming to improve their NEET results decisively.",
    },
  ];

  const methodologySteps = [
    {
      Icon: Lightbulb,
      title: "Interactive Learning",
      description:
        "Interactive classroom lectures for concept clarity and retention.",
    },
    {
      Icon: BookOpen,
      title: "Practice",
      description:
        "Daily Practice Problems (DPPs) and structured assignments for mastery.",
    },
    {
      Icon: BarChart,
      title: "Assessment",
      description:
        "Systematic chapter-wise and full mock test evaluations with analytics.",
    },
    {
      Icon: MessageCircle,
      title: "Doubt Resolution",
      description: "Personalized doubt resolution by experienced faculty.",
    },
    {
      Icon: Calendar,
      title: "Progress Tracking",
      description:
        "Regular performance reviews and parent–student feedback sessions.",
    },
  ];

  const faqData = [
    {
      q: "Who can join NEET coaching at ASQUARE Ravet?",
      a: "Students in Class XI, Class XII, and drop-year aspirants preparing for NEET UG.",
    },
    {
      q: "What NEET subjects are covered?",
      a: "Comprehensive coverage of Physics, Chemistry, and Biology as per the NEET syllabus.",
    },
    {
      q: "Are mock tests included in the program?",
      a: "Yes—chapter-wise assessments, weekly part-tests, and full-length mocks with performance feedback.",
    },
    {
      q: "What course formats are offered?",
      a: "We provide 2-year integrated, 1-year target, 2–3 month crash, and 1-year repeater/dropper programs.",
    },
    {
      q: "What is the batch size?",
      a: "Batches are intentionally kept small for personalized instruction and rapid doubt-solving.",
    },
    {
      q: "Will parents receive performance updates?",
      a: "Yes—via detailed reports and parent–teacher meetings.",
    },
    {
      q: "Are online classes available?",
      a: "Absolutely—students can opt for classroom or online preparation depending on their convenience.",
    },
  ];

  const gridFeatures = [
    {
      Icon: Users,
      title: "Small batch sizes for maximum focus and engagement",
      colorClass: "bg-gradient-blue",
    },
    {
      Icon: BookOpen,
      title:
        "Updated study materials in both printed and digital formats aligned with NEET syllabus",
      colorClass: "bg-gradient-purple",
    },
    {
      Icon: Calendar,
      title:
        "Periodic parent–teacher meetings ensuring transparent progress tracking",
      colorClass: "bg-gradient-green",
    },
    {
      Icon: BarChart,
      title: "Advanced performance analytics and digital progress tracking",
      colorClass: "bg-gradient-teal",
    },
    {
      Icon: Award,
      title:
        "Workshops targeting time management, exam mindset, and accuracy skills",
      colorClass: "bg-gradient-orange",
    },
    {
      Icon: TrendingUp,
      title:
        "Recognized as one of the leading NEET coaching centers in Ravet, Dehu Road, and PCMC, with consistently strong student results",
      colorClass: "bg-gradient-red",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Best NEET Coaching Classes in Ravet Pune | ASQUARE Academy
        </title>
        <meta
          name="title"
          content="Best NEET Coaching Classes in Ravet Pune | ASQUARE Academy"
        />
        <meta
          name="description"
          content="Join ASQUARE Academy – Best NEET Coaching Classes in Ravet Pune for Class 11–12 & Dropper Students. Expert faculty, Biology focus, tests & personalized guidance."
        />
        <meta
          name="keywords"
          content="NEET coaching classes in ravet pune Best NEET Coaching in ravet Pune Top NEET Coaching Classes ravet pune NEET Advanced Preparation ravet pune NEET Classes in ravet pune Best NEET Classes in ravet pune Top NEET Classes in ravet pune"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{`
        {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-ravet-pune/#localbusiness",
      "name": "ASQUARE Academy Ravet",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "url": "https://www.asquareclasses.com/neet-coaching-classes-institute-ravet-pune",
      "telephone": "9766118877",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ravet",
        "addressRegion": "Pune",
        "addressCountry": "India"
      },
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune/"
      ],
      "description": "ASQUARE Academy offers the Best NEET Coaching Classes in Ravet Pune for Class XI, XII & Dropper students with Biology, Physics & Chemistry training and mock tests."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-ravet-pune/#webpage",
      "url": "https://www.asquareclasses.com/neet-coaching-classes-institute-ravet-pune",
      "name": "Best NEET Coaching Classes in Ravet Pune | ASQUARE Academy",
      "description": "ASQUARE Academy Ravet provides top NEET Coaching Classes in Pune covering Physics, Chemistry, and Biology with mock exams, doubt sessions, and small batches."
    },
    {
      "@type": "EducationalOrganization",
      "name": "ASQUARE Academy",
      "url": "https://www.asquareclasses.com/",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "9766118877",
        "contactType": "Customer Support",
        "areaServed": "IN"
      },
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune/"
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-ravet-pune/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can join NEET coaching at ASQUARE Ravet?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students in Class XI, Class XII, and drop-year aspirants preparing for NEET UG can join."
          }
        },
        {
          "@type": "Question",
          "name": "What NEET subjects are covered?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The NEET course includes Physics, Chemistry, and Biology as per the NEET syllabus."
          }
        },
        {
          "@type": "Question",
          "name": "Are mock tests included in the program?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, chapter-wise assessments, weekly part-tests, and full-length mock exams are conducted."
          }
        },
        {
          "@type": "Question",
          "name": "What course formats are offered?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer 2-year integrated, 1-year target, crash, and dropper/repeater programs."
          }
        },
        {
          "@type": "Question",
          "name": "What is the batch size?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Small batches ensure personalized guidance, focused learning, and quick doubt resolution."
          }
        },
        {
          "@type": "Question",
          "name": "Will parents receive performance updates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, parents receive detailed progress reports and updates through PTMs."
          }
        },
        {
          "@type": "Question",
          "name": "Are online classes available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, students can choose between classroom or online NEET preparation at ASQUARE Academy."
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
          "name": "NEET Coaching Classes",
          "item": "https://www.asquareclasses.com/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Ravet Pune",
          "item": "https://www.asquareclasses.com/neet-coaching-classes-institute-ravet-pune"
        }
      ]
    }
  ]
}     `}</script>
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
                Unlock NEET Success with{" "}
                <span className="gradient-text-yellow d-inline-block">
                  ASQUARE Academy – Ravet Center
                </span>
              </h1>
              <p className="fs-5 text-white mb-3 lh">
                Looking for the{" "}
                <strong> best NEET coaching classes in Ravet, Pune? </strong> At
                <strong> ASQUARE Academy, </strong>
                we deliver focused, result-driven NEET UG preparation tailored
                for your success.
                <strong> NEET coaching classes in Ravet, Pune </strong> are
                tailored to build your strengths, sharpen your strategy, and
                ensure top-tier performance. Recognized as one of the{" "}
                <strong> best NEET coaching institutes in Pune, </strong>we
                offer structured programs, personalized mentorship, and proven
                results.
              </p>
              <div className="hero-location-info d-flex align-items-start gap-3">
                <MapPin
                  size={24}
                  color="#FFCB03"
                  className="flex-shrink-0 mt-1"
                />
                <span className="text-white">
                  Trusted by aspirants across
                  <strong>
                    {" "}
                    Ravet, Dehu Road Cantonment, Pimple Saudagar, Wakad,
                    Hinjewadi, Talegaon, and the wider PCMC region,{" "}
                  </strong>
                  our institute combines expert faculty, structured curriculum,
                  and consistent performance tracking to help you stand out in
                  NEET.
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
                Best NEET Coaching in Ravet?
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
            <span> ASQUARE Academy Ravet</span>
          </h2>

          {/* Description */}
          <div className="mx-auto mb-5">
            <p className="lead text-secondary mb-3">
              The<strong> NEET course at ASQUARE Academy, Ravet, </strong>
              provides a step-by-step approach to mastering NEET concepts. Our
              expert faculty ensures that every student understands the theory,
              practices problem-solving, and applies knowledge effectively under
              exam conditions.
            </p>

            <p className="d-flex flex-wrap justify-content-center align-items-center gap-2 text-dark">
              <MapPin className="text-primary" size={26} />
              <span>
                Students from
                <strong>
                  {" "}
                  Ravet, Dehu Road Cantonment, Pimple Saudagar, Wakad,
                  Hinjewadi, Talegaon, and the wider PCMC region,{" "}
                </strong>
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
              Course Details (NEET UG) - Top NEET Coaching Classes in Ravet
            </h3>

            <p className="fs-5">
              <strong>NEET UG</strong> is India’s national entrance test for{" "}
              <strong>
                MBBS, BDS, BAMS, BHMS, and allied medical programs.
              </strong>
              At <strong> ASQUARE Academy Ravet,</strong>
              our curriculum focuses on building a solid conceptual base while
              ensuring complete exam readiness through mock tests and
              performance tracking.
            </p>
            <p className="fs-5">
              Our consistent results make ASQUARE one of the{" "}
              <strong>
                {" "}
                Top NEET Coaching Institutes in Ravet Pune and PCMC.{" "}
              </strong>
            </p>
            <h4 className="fw-bold text-primary-emphasis mt-5 fs-3">
              Subjects Covered in NEET Classes at Ravet
            </h4>

            <div className="mt-4">
              {subjectsCovered.map((subject, i) => (
                <SubjectCard key={i} {...subject} />
              ))}
            </div>

            <p className="fs-5">
              Our <strong> NEET Coaching in Ravet Pune </strong>ensures holistic
              preparation and exam-oriented accuracy.
            </p>
          </div>

          {/* Right Column - Blue */}
          <div className="col-lg-6 p-5 p-lg-5 text-white lg-b-bg-b">
            <h5 className="fw-bold text-warning mb-4 fs-1">
              Program Duration and Batch Options — NEET Preparation in Ravet
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
              Best NEET Coaching in Ravet,
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
                {" "}AIIMS, state medical colleges, and prestigious private
                institutions.{" "}
              </strong>
              Our disciplined approach, expert teaching, and consistent mock
              testing make us the
              <strong>
                {" "}
                top NEET coaching institutes in Ravet and the broader
                Pimpri–Chinchwad region.{" "}
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
                <strong>Best NEET Training Institutes in Ravet PCMC.</strong>
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
              Top NEET Coaching Institutes in Ravet.
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
            Enroll at <span> ASQUARE Academy – Ravet Today</span>
          </h2>

          {/* Description */}
          <div className="mx-auto mb-5">
            <p className="lead text-secondary mb-3">
              Join the{" "}
              <strong> best NEET coaching classes in Ravet, Pune </strong>
              with ASQUARE Academy. With expert teaching, strategic preparation,
              and proven results, we are your stepping stone to medical success.
            </p>

            <p className="d-flex flex-wrap justify-content-center align-items-center gap-2 text-dark">
              <MapPin className="text-primary" size={22} />
              <span>
                Conveniently accessible from{" "}
                <strong>
                  {" "}
                  Ravet, Dehu Road Cantonment, Pimple Saudagar, Wakad,
                  Hinjewadi, Talegaon, and across PCMC.
                </strong>
              </span>
            </p>
          </div>

          {/* Subheading */}
          <h4 className="fw-bold text-primary mb-4">
            Limited seats available—secure your spot now!
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

export default NEETRavet;
