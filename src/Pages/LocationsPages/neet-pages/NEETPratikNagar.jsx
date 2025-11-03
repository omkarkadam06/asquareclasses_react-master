import React, { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import locationBGImage from "../../../Assets/locationPageImages/neet/NEET slider PC3.jpeg";
import MobileBGImage from "../../../Assets/locationPageImages/neet/NEET slider mobile3.jpeg";
import image1 from "../../../Assets/locationPageImages/neet/NEET Page 13.jpeg";
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

function NEETPratikNagar() {
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
      description: "Specialized trainers for Physics, Chemistry, and Biology.",
    },
    {
      Icon: BookOpen,
      title: "Concept-Focused Learning",
      description:
        "NCERT-centric teaching enhanced with NEET-level problem-solving.",
    },
    {
      Icon: Target,
      title: "Small Batch Sizes",
      description: "Personalized attention and fast doubt resolution.",
    },
    {
      Icon: BarChart,
      title: "Regular Evaluations",
      description: "Weekly tests, mock exams, and performance tracking.",
    },
    {
      Icon: Calendar,
      title: "Flexible Learning",
      description: "Classroom and online modes available.",
    },
    {
      Icon: School,
      title: "Continuous Support",
      description: "Guidance for balancing NEET prep with board exams.",
    },
  ];

  const subjectsCovered = [
    {
      title: "Physics",
      desc: "Strong conceptual approach with precise problem-solving strategies.",
    },
    {
      title: "Chemistry",
      desc: "Comprehensive coverage across Physical, Organic, and Inorganic Chemistry.",
    },
    {
      title: "Biology",
      desc: "Detailed NCERT-based teaching with diagrammatic and high-yield topic focus.",
    },
  ];

  const programDurations = [
    {
      icon: Clock,
      title: "2-Year Integrated Program (Class 11 → 12):",
      desc: "Long-term NEET preparation with stepped learning and regular assessments.",
    },
    {
      icon: Target,
      title: "1-Year Target Course (Class 12):",
      desc: "Focused NEET prep with Class 11 refresh and intensive mock practices.",
    },
    {
      icon: CalendarSync,
      title: "Dropper / Repeater Batch:",
      desc: "Tailored for repeat aspirants with full-length tests and personalized mentoring.",
    },
    {
      icon: School,
      title: "Crash Course:",
      desc: "High-impact short-term review with PYQs, strategy notes, and mock sessions.",
    },
  ];

  const methodologySteps = [
    {
      Icon: Lightbulb,
      title: "Learn",
      description: "Engaging lectures crafted for clarity and depth.",
    },
    {
      Icon: BookOpen,
      title: "Practice",
      description: "Daily DPPs and chapter-wise assignments.",
    },
    {
      Icon: BarChart,
      title: "Assess",
      description: "Weekly topic tests and full-length mock exams.",
    },
    {
      Icon: MessageCircle,
      title: "Revise",
      description: "Targeted revision and exam drills before NEET.",
    },
  ];

  const faqData = [
    {
      q: "Who is eligible for NEET coaching here?",
      a: "Students in Classes XI, XII, and drop-year NEET aspirants.",
    },
    {
      q: "Do you offer crash courses?",
      a: "Yes, short-term intensive programs are available with mock tests.",
    },
    {
      q: "Are there batches for repeaters?",
      a: "Yes, dedicated repeater batches with focused strategies and test series.",
    },
    {
      q: "Can students opt for online coaching?",
      a: "Yes, both online and classroom modes are offered.",
    },
    {
      q: "How is performance tracked?",
      a: "Through weekly tests, mocks, and parent–teacher interaction sessions.",
    },
  ];

  const gridFeatures = [
    {
      Icon: BookOpen,
      title: "Printed & digital NEET-specific study materials",
      colorClass: "bg-gradient-blue",
    },
    {
      Icon: Users,
      title: "Structured doubt-clearing sessions",
      colorClass: "bg-gradient-purple",
    },
    {
      Icon: ChartSpline,
      title: "Regular parent-teacher performance reviews",
      colorClass: "bg-gradient-green",
    },
    {
      Icon: BarChart,
      title: "Advanced analytics via online test platforms",
      colorClass: "bg-gradient-orange",
    },
    {
      Icon: TrendingUp,
      title: "Online test platform with detailed analytics",
      colorClass: "bg-gradient-teal",
    },
    {
      Icon: Award,
      title: "Workshops on accuracy, timing, and exam mindset",
      colorClass: "bg-gradient-red",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Best NEET Coaching Classes in Pratik Nagar Pune | ASQUARE Academy
        </title>
        <meta
          name="title"
          content="Best NEET Coaching Classes in Pratik Nagar Pune | ASQUARE Academy"
        />
        <meta
          name="description"
          content="Join ASQUARE Academy for the best NEET coaching classes in Pratik Nagar Pune. Expert mentors, advanced preparation modules, and focused test practice."
        />
        <meta
          name="keywords"
          content="NEET coaching classes in pratik nagar pune Best NEET Coaching in aundh Pune Top NEET Coaching Classes pratik nagar pune Pune NEET Advanced Preparation pratik nagar pune Pune NEET Classes in pratik nagar pune Pune Best NEET Classes in pratik nagar pune Pune Top NEET Classes in pratik nagar pune Pune"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{`
        {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-pratik-nagar-pune/",
      "name": "ASQUARE Academy - NEET Coaching Classes in Pratik Nagar Pune",
      "url": "https://www.asquareclasses.com/neet-coaching-classes-pratik-nagar-pune/",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "description": "ASQUARE Academy offers the best NEET Coaching in Pratik Nagar Pune with advanced preparation modules, expert faculty, and small batches for focused learning.",
      "telephone": "9766118866",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Pratik Nagar, Pune, Maharashtra",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411014",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.facebook.com/asquareclasses",
        "https://www.instagram.com/asquareclasses"
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
          "name": "NEET Coaching Classes in Pune",
          "item": "https://www.asquareclasses.com/neet-coaching-classes-pune/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "NEET Coaching Classes in Pratik Nagar Pune",
          "item": "https://www.asquareclasses.com/neet-coaching-classes-pratik-nagar-pune/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who is eligible for NEET coaching here?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students in Classes XI, XII, or drop-year aspirants can enroll in ASQUARE Academy’s NEET coaching classes in Pratik Nagar Pune."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer crash courses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, short-term intensive NEET crash courses with mock tests and rapid revisions are available."
          }
        },
        {
          "@type": "Question",
          "name": "Are there batches for repeaters?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we offer exclusive NEET repeater batches with focused preparation and frequent assessments."
          }
        },
        {
          "@type": "Question",
          "name": "Can students opt for online coaching?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, both classroom and online NEET coaching classes in Pratik Nagar Pune are available."
          }
        },
        {
          "@type": "Question",
          "name": "How is performance tracked?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Student performance is tracked through weekly tests, mock exams, and parent–teacher interactions."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide study materials?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, students receive comprehensive NEET study materials, topic notes, and question banks."
          }
        },
        {
          "@type": "Question",
          "name": "Are doubt-clearing sessions available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, regular doubt-clearing sessions are conducted to ensure conceptual clarity for all students."
          }
        },
        {
          "@type": "Question",
          "name": "What makes ASQUARE Academy different?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE Academy offers expert mentorship, small batches, and proven NEET preparation strategies for top results."
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
                Join ASQUARE Academy –{" "}
                <span className="gradient-text-yellow d-inline-block">
                  Top NEET Coaching Institute in Pratik Nagar, Pune for Success
                </span>
              </h1>
              <p className="fs-5 text-white mb-3 lh">
                Cracking NEET UG requires a strong foundation, focused
                strategies, and consistent training. At
                <strong> ASQUARE Academy,</strong>
                our
                <strong> NEET coaching classes in Pratik Nagar, Pune </strong>
                are designed to equip students with conceptual clarity,
                strategic practice, and expert mentorship. Recognized as one of
                the
                <strong> best NEET coaching institutes in Pune, </strong>
                ASQUARE delivers excellence in every module.
              </p>
              <div className="hero-location-info d-flex align-items-start gap-3">
                <MapPin
                  size={24}
                  color="#FFCB03"
                  className="flex-shrink-0 mt-1"
                />
                <span className="text-white">
                  <strong>we help students from:</strong> Pratik Nagar, JS Group
                  Chowk, Bhat Nagar, Phulenagar, Yerwada Village, Commerzone IT
                  Park, Alandi Road, Shastri Nagar Chowk, Nawanagar, and
                  surrounding communities.
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
                for NEET Preparation in Pratik Nagar, Pune
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
              ASQUARE Academy - Pratik Nagar, Pune - Structured for Success
            </span>
          </h2>

          {/* Description */}
          <div className="mx-auto mb-5">
            <p className="lead text-secondary mb-3">
              <strong> NEET (UG) </strong> is the national medical entrance exam
              for MBBS, BDS, BAMS, BHMS, and related courses. With it being
              highly competitive, choosing the right
              <strong> NEET coaching in Pratik Nagar </strong> can make a
              significant difference. At{" "}
              <strong>ASQUARE Academy – Pratik Nagar</strong>, we offer
              structured coaching that blends concept clarity, test confidence,
              and performance mentoring.
            </p>

            <p className="d-flex flex-wrap justify-content-center align-items-center gap-2 text-dark">
              <MapPin className="text-primary" size={26} />
              <span>
                At <strong>ASQUARE Academy – Pratik Nagar, </strong>
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
              Course Details (NEET UG) - Top NEET Coaching Classes in Pratik
              Nagar
            </h3>

            <p className="fs-5">
              <strong>NEET UG</strong> is the gateway to top medical colleges
              across India offering{" "}
              <strong>MBBS, BDS, BAMS, BHMS, and other allied courses.</strong>
            </p>
            <p className="fs-5">
              At <strong>ASQUARE Academy Pratik Nagar,</strong> our NEET
              programs are designed to build strong fundamentals, improve speed
              and accuracy, and ensure exam readiness through sustained practice
              and analytics.
            </p>
            <p className="fs-5">
              We are among the{" "}
              <strong>
                Top NEET Coaching Institutes in Pratik Nagar Pune,{" "}
              </strong>
              known for high student success and experienced faculty.
            </p>

            <h4 className="fw-bold text-primary-emphasis mt-5 fs-3">
              Subjects Covered in NEET Classes at Pratik Nagar
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
              Program Duration and Batch Options — NEET Preparation in Pratik
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
              Best NEET Coaching in Pratik Nagar, Pune
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
                ASQUARE Academy – Pratik Nagar{" "}
              </strong>
              consistently secure admissions in{" "}
              <strong>
                AIIMS, government medical colleges, and leading private
                institutions.
              </strong>
              Our outcome-driven coaching approach makes us one of Pune’s{" "}
              <strong>top NEET coaching centers.</strong>
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
                  the best NEET training institute in Pratik Nagar and PCMC.
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
              Top NEET Coaching Institutes in Pratik Nagar.
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
              For <strong> NEET coaching classes in Pratik Nagar, Pune </strong>
              ASQUARE Academy is the trusted partner. With expert teaching,
              structured methodology, and a proven success record, we empower
              your journey toward a medical career.
            </p>

            <p className="d-flex flex-wrap justify-content-center align-items-center gap-2 text-dark">
              <MapPin className="text-primary" size={22} />
              <span>
                Convenient for students from{" "}
                <strong>
                  {" "}Pratik Nagar, JS Group Chowk, Bhat Nagar, Phulenagar, Yerwada
                  Village, Commerzone IT Park, Alandi Road, Shastri Nagar Chowk,
                  Nawanagar, and surrounding communities.
                </strong>
              </span>
            </p>
          </div>

          {/* Subheading */}
          <h4 className="fw-bold text-primary mb-4">
            Enroll Now! Limited seats available — get the ASQUARE advantage in
            your NEET preparation.
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

export default NEETPratikNagar;
