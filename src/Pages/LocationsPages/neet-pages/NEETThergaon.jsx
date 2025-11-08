import React, { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import locationBGImage from "../../../Assets/locationPageImages/neet/NEET slider PC3.jpeg";
import MobileBGImage from "../../../Assets/locationPageImages/neet/NEET slider mobile3.jpeg";
import image1 from "../../../Assets/locationPageImages/neet/NEET Page 1.jpeg";
import image2 from "../../../Assets/locationPageImages/neet/NEET Page 22.jpeg";
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

function NEETThergaon() {
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
      "Experienced teachers specializing in NEET Physics, Chemistry, and Biology.",
  },
  {
    Icon: BookOpen,
    title: "Structured Curriculum",
    description:
      "NCERT-aligned syllabus with comprehensive NEET-level practice.",
  },
  {
    Icon: Target,
    title: "Small Batch Size",
    description:
      "Ensures individual attention and personal mentoring.",
  },
  {
    Icon: BarChart,
    title: "Regular Testing",
    description:
      "Weekly topic-wise tests and full-syllabus mock exams.",
  },
  {
    Icon: Calendar,
    title: "Flexible Learning Options",
    description:
      "Both offline and Online NEET Classes in Thergaon Pune.",
  },
  {
    Icon: School,
    title: "Integrated Study Approach",
    description:
      "Combined preparation for board exams and NEET syllabus.",
  },
];

const subjectsCovered = [
  {
    title: "Physics",
    desc: "Concept-driven teaching with numerical and application-based exercises.",
  },
  {
    title: "Chemistry",
    desc: "Systematic coverage of Physical, Organic, and Inorganic chemistry with NEET focus.",
  },
  {
    title: "Biology",
    desc: "In-depth NCERT-based lessons with diagrams, tests, and previous-year question practice.",
  },
];

const programDurations = [
  {
    icon: Clock,
    title: "2-Year Integrated (Class 11 → 12):",
    desc: "Comprehensive program covering board + NEET syllabus.",
  },
  {
    icon: Target,
    title: "1-Year Target Program (Class 12):",
    desc: "Fast-track course with complete syllabus coverage and testing.",
  },
  {
    icon: CalendarSync,
    title: "Dropper/Repeater Batch:",
    desc: "One-year batch focused on NEET revision and test improvement.",
  },
  {
    icon: School,
    title: "Crash Course:",
    desc: "2–3 month short-term program including NEET mock exams and concept revisions.",
  },
];

const methodologySteps = [
  {
    Icon: Lightbulb,
    title: "Learn",
    description: "Interactive and concept-based learning for better understanding.",
  },
  {
    Icon: BookOpen,
    title: "Practice",
    description: "Daily practice sheets, assignments, and DPPs to build consistency.",
  },
  {
    Icon: BarChart,
    title: "Assess",
    description: "Weekly mock tests with detailed performance analysis.",
  },
  {
    Icon: MessageCircle,
    title: "Revise",
    description: "Topic-based revision sessions and doubt-solving workshops.",
  },
];

const faqData = [
  {
    q: "Do you provide advanced NEET coaching in Thergaon?",
    a: "Yes, we have advanced-level batches with mock tests and concept revision for high performers.",
  },
  {
    q: "Are small batches available for better focus?",
    a: "Yes, every batch is limited in size to ensure individual attention.",
  },
  {
    q: "Can students from nearby areas like Wakad or Kalewadi join?",
    a: "Absolutely! Students from Wakad, Dange Chowk, Kalewadi, Pimple Saudagar, Tathawade, and Chinchwad attend regularly.",
  },
  {
    q: "Is online NEET coaching available?",
    a: "Yes—ASQUARE offers both offline and Online NEET Classes in Thergaon Pune.",
  },
  {
    q: "How do you track student progress?",
    a: "Through weekly tests, performance reports, and one-on-one mentor reviews.",
  },
];

const gridFeatures = [
  {
    Icon: Users,
    title: "Highly experienced NEET faculty.",
    colorClass: "bg-gradient-blue",
  },
  {
    Icon: BookOpen,
    title: "Comprehensive printed & digital material.",
    colorClass: "bg-gradient-purple",
  },
  {
    Icon: Award,
    title: "Regular parent-teacher meetings for progress review.",
    colorClass: "bg-gradient-green",
  },
  {
    Icon: MessageCircle,
    title: "Doubt-solving and personalized mentoring.",
    colorClass: "bg-gradient-orange",
  },
  {
    Icon: BarChart,
    title: "Performance tracking and rank analysis.",
    colorClass: "bg-gradient-red",
  },
//   {
//     Icon: ChartSpline,
//     title: "Online & offline test platform.",
//     colorClass: "bg-gradient-teal",
//   },
  {
    Icon: MapPin,
    title:
      "Easily accessible from Dange Chowk, Kalewadi, Wakad, Pimple Saudagar, Kate Wasti, and Tathawade.",
    colorClass: "bg-gradient-pink",
  },
];

  return (
    <>
      <Helmet>
        <title>
          Best NEET Coaching Classes in Thergaon Pune | ASQUARE Academy
        </title>
        <meta
          name="title"
          content="Best NEET Coaching Classes in Thergaon Pune | ASQUARE Academy"
        />
        <meta
          name="description"
          content="Join the Best NEET Coaching Classes in Thergaon Pune at ASQUARE Academy. Learn from expert faculty with personalized mentoring, small batches, and full NEET syllabus coverage to achieve top medical entrance results."
        />
        <meta
          name="keywords"
          content="NEET coaching classes in thergaon pune Best NEET Coaching in thergaon Pune Top NEET Coaching Classes thergaon pune NEET Advanced Preparation thergaon pune NEET Classes in thergaon pune Best NEET Classes in thergaon pune Top NEET Classes in thergaon pune"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{`
        {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "EducationalOrganization"],
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-Institute-thergaon-pune/#localbusiness",
      "name": "ASQUARE Academy - NEET Coaching Classes in Thergaon Pune",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "url": "https://www.asquareclasses.com/neet-coaching-classes-Institute-thergaon-pune/",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Thergaon, Pune",
        "addressRegion": "Maharashtra",
        "addressCountry": "India"
      },
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune/"
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-Institute-thergaon-pune/#webpage",
      "url": "https://www.asquareclasses.com/neet-coaching-classes-Institute-thergaon-pune/",
      "name": "NEET Coaching Classes in Thergaon Pune | ASQUARE Academy",
      "description": "Best NEET Coaching Classes in Thergaon Pune by ASQUARE Academy with expert faculty, small batches, and personalized NEET preparation for top results."
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-Institute-thergaon-pune/#breadcrumbs",
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
          "name": "NEET Coaching Classes in Thergaon Pune",
          "item": "https://www.asquareclasses.com/neet-coaching-classes-Institute-thergaon-pune/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-Institute-thergaon-pune/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can join NEET coaching at ASQUARE Academy Thergaon Pune?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students of Class XI, XII, and drop year aspirants preparing for NEET UG can join ASQUARE Academy for expert guidance and structured study programs in Thergaon Pune."
          }
        },
        {
          "@type": "Question",
          "name": "What subjects are covered in NEET classes at Thergaon Pune?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE Academy covers Physics, Chemistry, and Biology based on the NEET syllabus with conceptual learning and problem-solving sessions."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide mock tests for NEET aspirants?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, regular topic-wise tests, part tests, and full-length NEET mock exams are conducted to assess progress and boost preparation."
          }
        },
        {
          "@type": "Question",
          "name": "Are online NEET classes available in Thergaon Pune?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, ASQUARE Academy offers both classroom and online NEET coaching options for flexible learning and better performance."
          }
        },
        {
          "@type": "Question",
          "name": "Why choose ASQUARE Academy for NEET Coaching in Thergaon Pune?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "With expert mentors, small batches, personalized attention, and proven results, ASQUARE Academy stands among the top NEET Coaching Classes in Thergaon Pune."
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
                  ASQUARE Academy, Thergaon
                </span>
              </h1>
              <p className="fs-5 text-white mb-3 lh">
                Searching for the most reliable
                <strong> NEET coaching classes in Thergaon, Pune? </strong>
                At <strong> ASQUARE Academy, </strong>we focus on result-oriented NEET preparation through expert teaching, strong conceptual learning, and consistent test practice. As one of the <strong> Best NEET Coaching Institutes in Thergaon, </strong> we prepare students to excel in NEET-UG with confidence and accuracy.
              </p>
              <div className="hero-location-info d-flex align-items-start gap-3">
                <MapPin
                  size={24}
                  color="#FFCB03"
                  className="flex-shrink-0 mt-1"
                />
                <span className="text-white">
                   Our Thergaon centre is easily accessible to students from
                  <strong> Dange Chowk, Wakad, Kalewadi, Pimple Saudagar, Kate Wasti, Tathawade, and Chinchwad, </strong>
                  making ASQUARE a trusted choice for <strong> NEET preparation in PCMC Pune. </strong>

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
                Best NEET Coaching in Thergaon?
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
                  Our method focuses on clarity, consistency, and confidence — key pillars to crack NEET successfully.
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
            <span>
              {" "}
              ASQUARE Academy Thergaon
            </span>
          </h2>

          {/* Description */}
          <div className="mx-auto mb-5">
            <p className="lead text-secondary mb-3">
              The<strong> NEET course at ASQUARE Academy, Thergaon, </strong> 
              offers complete academic support for NEET aspirants. It includes interactive classroom sessions, doubt-solving discussions, and rigorous mock test practice.
            </p>

            <p className="d-flex flex-wrap justify-content-center align-items-center gap-2 text-dark">
              <MapPin className="text-primary" size={26} />
              <span>
                Students from<strong>  Dange Chowk, Kalewadi, Wakad, and Pimple Saudagar  </strong>
               prefer our institute for its convenient location, expert faculty, and structured test series — making it the most trusted <strong> NEET Coaching in PCMC Pune. </strong>
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
              Course Details (NEET UG) - Top NEET Coaching Classes in Thergaon
            </h3>

            <p className="fs-5">
              <strong>NEET UG</strong> is the national-level exam for medical courses like {" "}
              <strong>MBBS, BDS, BAMS, BHMS, and other health science programs.</strong>
              At <strong> ASQUARE Academy Thergaon,</strong>
              we provide focused training with conceptual depth, problem-solving practice, and strategy-based mock tests.
            </p>
            <p className="fs-5">
              Our faculty’s experience and student success record make ASQUARE one of the <strong> Top NEET Coaching Institutes in Thergaon Pune. </strong>
            </p>
            <p className="fs-5">
              We are among the{" "}
              <strong>Top NEET Coaching Institutes in Thergaon, </strong>
              known for high student success and experienced faculty.
            </p>

            <h4 className="fw-bold text-primary-emphasis mt-5 fs-3">
              Subjects Covered in NEET Classes at Thergaon
            </h4>

            <div className="mt-4">
              {subjectsCovered.map((subject, i) => (
                <SubjectCard key={i} {...subject} />
              ))}
            </div>

            <p className="fs-5">
              Each subject is taught with conceptual depth, interactive teaching, and consistent testing to ensure excellence.
            </p>
          </div>

          {/* Right Column - Blue */}
          <div className="col-lg-6 p-5 p-lg-5 text-white lg-b-bg-b">
            <h5 className="fw-bold text-warning mb-4 fs-1">
              Program Duration and Batch Options — NEET Preparation in Thergaon
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
              Best NEET Coaching in Thergaon,
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
                At <strong> ASQUARE Academy, </strong>
              our students consistently achieve top NEET ranks and secure admissions in leading colleges like{" "}
              <strong className="text-primary">
                 AIIMS, BJMC, AFMC, and DY Patil Medical College Pune.{" "}
              </strong>
             Our student-first approach, expert mentors, and structured test strategy have made ASQUARE one of the 
              <strong> Best NEET Coaching Centres in Thergaon Pune. </strong>
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
                  Top NEET Training Institute in Thergaon and PCMC Pune.
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
              Top NEET Coaching Institutes in Thergaon.
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
            Enroll Now at{" "}
            <span>
              ASQUARE Academy – Thergaon Pune
            </span>
          </h2>

          {/* Description */}
          <div className="mx-auto mb-5">
            <p className="lead text-secondary mb-3">
              If you’re looking for the {" "}
              <strong> Top NEET Coaching Classes in Thergaon, Pune, </strong>
              Join <strong> ASQUARE Academy </strong>
              today. With expert guidance, advanced test planning, and personalized learning, we help you achieve your NEET success dream.
            </p>

            <p className="d-flex flex-wrap justify-content-center align-items-center gap-2 text-dark">
              <MapPin className="text-primary" size={22} />
              <span>
               Convenient for students from {" "}
                <strong>
                  Thergaon, Dange Chowk, Kalewadi, Wakad, Pimple Saudagar, Kate Wasti, Tathawade, and Chinchwad.
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

export default NEETThergaon;
