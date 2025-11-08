import React, { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import locationBGImage from "../../../Assets/locationPageImages/neet/NEET slider PC3.jpeg";
import MobileBGImage from "../../../Assets/locationPageImages/neet/NEET slider mobile3.jpeg";
import image1 from "../../../Assets/locationPageImages/neet/NEET Page 5.jpeg";
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

function NEETHadapsar() {
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
        "Physics, Chemistry, and Biology specialists with years of experience.",
    },
    {
      Icon: BookOpen,
      title: "Structured Learning",
      description: "From NCERT basics to advanced NEET-level practice.",
    },
    {
      Icon: Target,
      title: "Small Batches",
      description: "Individual attention and dedicated doubt-solving.",
    },
    {
      Icon: BarChart,
      title: "Regular Testing",
      description:
        "Weekly part tests, NEET mock exams, and detailed performance analysis.",
    },
    {
      Icon: Calendar,
      title: "Flexible Batches",
      description:
        "Classroom + online NEET classes in Hadapsar with weekday and weekend options.",
    },
    {
      Icon: School,
      title: "Parent-Student Connect",
      description: "PTMs and progress updates ensure transparency.",
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
      description: "Conceptual lectures with NCERT focus.",
    },
    {
      Icon: BookOpen,
      title: "Practice",
      description: "Assignments, DPPs, and doubt-solving.",
    },
    {
      Icon: BarChart,
      title: "Assess",
      description: "Weekly tests and full-length NEET mocks.",
    },
    {
      Icon: MessageCircle,
      title: "Revise",
      description: "Crash revision before exams.",
    },
  ];

  const faqData = [
    {
      q: "Which is the Best NEET Coaching in Hadapsar?",
      a: "ASQUARE Academy is among the Best NEET Classes in Hadapsar due to its expert faculty, structured programs, and consistent results.",
    },
    {
      q: "Do you offer Top NEET Coaching Classes Hadapsar for beginners?",
      a: "Yes. Our foundation-friendly programs are designed for first-time aspirants with NCERT focus and regular practice.",
    },
    {
      q: "How do you provide NEET Advanced Preparation Hadapsar?",
      a: "We conduct special revision classes, All India Test Series, and intensive problem-solving workshops.",
    },
    {
      q: "Are weekend NEET Classes in Hadapsar available?",
      a: "Yes. We provide both weekday and weekend batch options in classroom & online formats.",
    },
    {
      q: "Do you provide scholarships?",
      a: "Yes. Students can apply for merit and need-based scholarships through the ASQUARE Scholarship Test.",
    },
  ];

  const gridFeatures = [
    {
      Icon: Users,
      title: "Comprehensive printed + digital study material.",
      colorClass: "bg-gradient-blue",
    },
    {
      Icon: BookOpen,
      title: "Dedicated doubt-clearing sessions.",
      colorClass: "bg-gradient-purple",
    },
    {
      Icon: TrendingUp,
      title: "Regular PTMs and performance tracking.",
      colorClass: "bg-gradient-green",
    },
    {
      Icon: ChartSpline,
      title: "Online test series with detailed analytics.",
      colorClass: "bg-gradient-orange",
    },
    {
      Icon: CalendarSync,
      title: "Parental feedback and progress reports",
      colorClass: "bg-gradient-red",
    },
    {
      Icon: ChartSpline,
      title: "Online & offline practice test series",
      colorClass: "bg-gradient-teal",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Best NEET Coaching Classes in Hadapsar | ASQUARE Academy Pune
        </title>
        <meta
          name="title"
          content="Best NEET Coaching Classes in Hadapsar | ASQUARE Academy Pune"
        />
        <meta
          name="description"
          content="oin the Best NEET Coaching in Hadapsar at ASQUARE Academy. Expert faculty, NCERT-based study plans, weekend batches, and scholarship options available."
        />
        <meta
          name="keywords"
          content="NEET Coaching in Hadapsar, Best NEET Classes in Hadapsar, Top NEET Coaching Institute Hadapsar, NEET Preparation in Hadapsar, ASQUARE Academy Hadapsar,"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{`
        {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-in-hadapsar-pune/",
      "url": "https://www.asquareclasses.com/neet-coaching-classes-institute-in-hadapsar-pune/",
      "name": "Best NEET Coaching Classes in Hadapsar | ASQUARE Academy Pune",
      "description": "Join the Best NEET Coaching in Hadapsar at ASQUARE Academy. Expert faculty, NCERT-based study plans, weekend batches, and scholarship options available.",
      "inLanguage": "en",
      "publisher": {
        "@type": "Organization",
        "name": "ASQUARE Academy",
        "url": "https://www.asquareclasses.com/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
          "width": 250,
          "height": 70
        }
      },
      "breadcrumb": {
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
            "name": "NEET Coaching Classes in Hadapsar",
            "item": "https://www.asquareclasses.com/neet-coaching-classes-institute-in-hadapsar-pune/"
          }
        ]
      }
    },
    {
      "@type": "EducationalOrganization",
      "name": "ASQUARE Academy",
      "url": "https://www.asquareclasses.com/",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "description": "ASQUARE Academy offers expert-led NEET, IIT JEE, and MHT-CET coaching in Pune. Learn from experienced faculty with a strong focus on conceptual clarity and results.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Hadapsar, Pune, Maharashtra",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411028",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9156004396",
        "contactType": "Customer Support",
        "availableLanguage": ["English", "Hindi", "Marathi"]
      },
      "sameAs": [
        "https://www.facebook.com/asquareclasses/",
        "https://www.instagram.com/asquareclasses/"
      ]
    },
    {
      "@type": "LocalBusiness",
      "name": "ASQUARE Academy - NEET Coaching in Hadapsar",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-in-hadapsar-pune/",
      "url": "https://www.asquareclasses.com/neet-coaching-classes-institute-in-hadapsar-pune/",
      "telephone": "+91-9156004396",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Hadapsar, Pune, Maharashtra",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411028",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 18.5006,
        "longitude": 73.9347
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "08:00",
          "closes": "20:00"
        }
      ],
      "sameAs": [
        "https://www.facebook.com/asquareclasses/",
        "https://www.instagram.com/asquareclasses/"
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Which is the Best NEET Coaching in Hadapsar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE Academy is among the Best NEET Classes in Hadapsar due to its expert faculty, structured programs, and consistent results."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer Top NEET Coaching Classes in Hadapsar for beginners?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Our foundation-friendly programs are designed for first-time aspirants with NCERT focus and regular practice sessions."
          }
        },
        {
          "@type": "Question",
          "name": "How do you provide NEET Advanced Preparation in Hadapsar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We conduct special revision classes, All India Test Series, and intensive problem-solving workshops for advanced NEET preparation."
          }
        },
        {
          "@type": "Question",
          "name": "Are weekend NEET Classes in Hadapsar available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We provide both weekday and weekend batch options in classroom and online modes for flexible learning."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide scholarships at ASQUARE Academy Hadapsar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Students can apply for merit and need-based scholarships through the ASQUARE Scholarship Test conducted annually."
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
                  ASQUARE Academy,
                </span>
                Hadapsar, Pune
              </h1>
              <p className="fs-5 text-white mb-3 lh">
                ASQUARE Academy offers expert-led{" "}
                <strong>NEET coaching classes in Hadapsar, </strong>
                with structured learning, small batches, and personalized
                mentoring. Recognized as one of the
                <strong> Best NEET Coaching in Hadapsar. </strong> our programs
                combine NCERT mastery, advanced problem-solving, and intensive
                test practice to help students secure admission in top medical
                colleges. Whether you’re starting early or need focused{" "}
                <strong> NEET Advanced Preparation in Hadapsar.</strong> ASQUARE
                provides the right guidance.
              </p>
              <div className="hero-location-info d-flex align-items-start gap-3">
                <MapPin
                  size={24}
                  color="#FFCB03"
                  className="flex-shrink-0 mt-1"
                />
                <span className="text-white">
                  <strong>Our Hadapsar branch serves students from:</strong>{" "}
                  Magarpatta City, Amanora, Sasane Nagar, Mohammadwadi, Kondhwa,
                  Wanowrie, Kalepadal, Handewadi, Kharadi, Fatima Nagar,
                  Mundhwa, and nearby areas.{" "}
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
                — Best NEET Coaching in Hadapsar, Pune
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
                  ASQUARE is trusted by students across Pune as one of the Top
                  NEET Coaching Classes Hadapsar.
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
            <span>ASQUARE Academy - Hadapsar</span>
          </h2>

          {/* Description */}
          <div className="mx-auto mb-5">
            <p className="lead text-secondary mb-3">
              The <strong> NEET course at ASQUARE Academy, Hadapsar, </strong>{" "}
              is designed to help students master each subject step by step. We
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
                  Magarpatta City, Amanora, Sasane Nagar, Mohammadwadi, Kondhwa,
                  Wanowrie, Kalepadal, Handewadi, Kharadi, Fatima Nagar,
                  Mundhwa, and nearby areas.
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
              Course Details (NEET UG) - Top NEET Coaching Classes in Hadapsar
            </h3>

            <p className="fs-5">
              <strong>NEET UG</strong> is the gateway to top medical colleges
              across India offering{" "}
              <strong>MBBS, BDS, BAMS, BHMS, and BPT</strong> programs.
            </p>
            <p className="fs-5">
              At <strong>ASQUARE Academy Hadapsar,</strong> our scientifically
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
              Subjects Covered in NEET Classes at Hadapsar, Pune
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
              Program Duration and Batch Options — NEET Preparation in Hadapsar,
              Pune
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
              Best NEET Coaching in Hadapsar, Pune
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
                <strong> Top NEET Coaching Institutes in Hadapsar.</strong>
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
                  the best NEET training institute in Hadapsar and PCMC.
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
              Top NEET Coaching Institutes in Hadapsar (PCMC).
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
            Enroll Now at <span>ASQUARE Academy - Hadapsar, Pune</span>
          </h2>

          {/* Description */}
          <div className="mx-auto mb-5">
            <p className="lead text-secondary mb-3">
              If you’re searching for the{" "}
              <strong> Top NEET Coaching Classes in Hadapsar, </strong> the look
              no further than
              <strong>ASQUARE Academy. </strong>
              With experienced teachers, structured test planning, and
              consistent student success, we’re the trusted name for
              <strong> NEET preparation in PCMC Pune.</strong>
            </p>

            <p className="d-flex flex-wrap justify-content-center align-items-center gap-2 text-dark">
              <MapPin className="text-primary" size={22} />
              <span>
                Convenient from{" "}
                <strong>
                  Magarpatta City, Amanora, Sasane Nagar, Mohammadwadi, Kondhwa,
                  Wanowrie, Kalepadal, Handewadi, Kharadi, Fatima Nagar,
                  Mundhwa, and nearby areas.
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

export default NEETHadapsar;
