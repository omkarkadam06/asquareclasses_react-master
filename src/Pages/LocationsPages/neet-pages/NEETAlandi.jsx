import React, { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import locationBGImage from "../../../Assets/locationPageImages/neet/NEET slider PC5.jpeg";
import MobileBGImage from "../../../Assets/locationPageImages/neet/NEET slider mobile5.jpeg";
import image1 from "../../../Assets/locationPageImages/neet/NEET Page 9.jpeg";
import image2 from "../../../Assets/locationPageImages/neet/NEET Page 10.jpeg";
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

function NEETAlandi() {
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
      title: "Expert NEET Faculty",
      description:
        "Highly qualified teachers for Physics, Chemistry, and Biology with years of NEET training experience.",
    },
    {
      Icon: BookOpen,
      title: "Focused Learning Approach",
      description:
        "NCERT-based foundation combined with advanced-level NEET problem-solving.",
    },
    {
      Icon: Target,
      title: "Small Batch Size",
      description:
        "Personalized attention for every student to ensure concept clarity and fast doubt resolution.",
    },
    {
      Icon: BarChart,
      title: "Regular NEET Tests & Analysis",
      description:
        "Weekly tests, full-length mocks, and detailed feedback to monitor progress.",
    },
    {
      Icon: Calendar,
      title: "Flexible Learning Modes",
      description:
        "Choose between classroom and online NEET coaching sessions.",
    },
    {
      Icon: School,
      title: "Dedicated Mentor Support",
      description:
        "Regular one-on-one mentorship for NEET and board exam success.",
    },
  ];

  const subjectsCovered = [
    {
      title: "Physics for NEET",
      desc: "Conceptual lectures with focus on problem-solving and numericals.",
    },
    {
      title: "Chemistry for NEET",
      desc: "Complete coverage of Organic, Inorganic, and Physical Chemistry topics.",
    },
    {
      title: "Biology for NEET",
      desc: "NCERT-based study plan emphasizing important diagrams and high-weightage topics.",
    },
  ];

  const programDurations = [
    {
      icon: Clock,
      title: "2-Year Integrated NEET Course (Class 11 → 12):",
      desc: "Comprehensive NEET + Board preparation designed for holistic academic growth.",
    },
    {
      icon: Target,
      title: "1-Year Target NEET Course (Class 12):",
      desc: "Fast-track syllabus coverage with Class 11 revision and intensive test practice.",
    },
    {
      icon: CalendarSync,
      title: "Dropper/Repeater NEET Batch in Alandi:",
      desc: "Exclusive batch focusing on detailed concept strengthening and full-length NEET mock series.",
    },
    {
      icon: School,
      title: "Crash Course for NEET in Alandi, Pune:",
      desc: "Short-term program for revision, previous year questions (PYQs), and rapid test practice.",
    },
  ];

  const methodologySteps = [
    {
      Icon: Lightbulb,
      title: "Learn",
      description:
        "Interactive and concept-driven lectures designed to simplify complex topics.",
    },
    {
      Icon: BookOpen,
      title: "Practice",
      description:
        "Daily practice problems (DPPs), assignments, and discussion sessions to boost accuracy.",
    },
    {
      Icon: BarChart,
      title: "Assess",
      description:
        "Regular part tests and NEET mock exams to track student understanding and improvement.",
    },
    {
      Icon: MessageCircle,
      title: "Revise",
      description:
        "Chapter-wise revision, crash modules, and last-minute strategies for maximum recall.",
    },
  ];

  const faqData = [
    {
      q: "Which is the best NEET coaching in Alandi, Pune?",
      a: "ASQUARE Academy is rated among the best NEET coaching classes in Alandi for its expert faculty, structured programs, and high success rate.",
    },
    {
      q: "Do you offer NEET crash courses in Alandi, Pune?",
      a: "Yes, we provide NEET crash courses with PYQs, mock tests, and quick revision modules for final preparation.",
    },
    {
      q: "Is there a NEET repeater batch available at ASQUARE Academy?",
      a: "Yes, ASQUARE offers a dedicated NEET dropper batch focusing on error correction, conceptual clarity, and intensive testing.",
    },
    {
      q: "Can students join weekend NEET coaching batches?",
      a: "Yes, both weekday and weekend NEET batches are available to suit students’ schedules.",
    },
    {
      q: "Do you provide online NEET coaching classes in Pune?",
      a: "Yes, students can choose from offline classroom NEET classes or online live sessions based on their preference.",
    },
    {
      q: "What study materials do NEET students receive at ASQUARE Academy?",
      a: "Students receive high-quality printed and digital notes, DPPs, topic-wise assignments, and mock tests curated by NEET experts.",
    },
    {
      q: "How are students’ performances tracked during NEET preparation?",
      a: "Performance is tracked through weekly assessments, online analytics, and parent-teacher interactions for continuous improvement.",
    },
    {
      q: "Is ASQUARE Academy suitable for NEET beginners in Alandi?",
      a: "Yes, ASQUARE Academy provides beginner-friendly programs with concept-based learning, step-by-step guidance, and NCERT-focused study material.",
    },
  ];

  const gridFeatures = [
    {
      Icon: BookOpen,
      title:
        "Comprehensive printed and digital study material curated by NEET experts",
      colorClass: "bg-gradient-blue",
    },
    {
      Icon: Users,
      title: "Regular doubt-solving and revision sessions",
      colorClass: "bg-gradient-purple",
    },
    {
      Icon: CalendarSync,
      title: "Parent–teacher meetings for performance updates",
      colorClass: "bg-gradient-green",
    },
    {
      Icon: ChartSpline,
      title: "Smart online test analytics and progress reports",
      colorClass: "bg-gradient-orange",
    },
    {
      Icon: TrendingUp,
      title:
        "Motivation and exam strategy workshops for stress-free preparation",
      colorClass: "bg-gradient-red",
    },
    {
      Icon: MapPin,
      subtitle: "Convenient access for students from",
      extraText:
        "Alandi, Dighi, Charholi, Bhosari, Moshi, Markal, Dudulgaon,",
      colorClass: "bg-gradient-pink",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          NEET Coaching Classes in Alandi Pune | Best NEET Classes – ASQUARE
          Academy
        </title>
        <meta
          name="title"
          content="NEET Coaching Classes in Alandi Pune | Best NEET Classes – ASQUARE Academy"
        />
        <meta
          name="description"
          content="Join the best NEET coaching classes in Alandi Pune with expert faculty, crash & dropper batches, mock tests, and personalized guidance at ASQUARE Academy."
        />
        <meta
          name="keywords"
          content="NEET coaching classes in Alandi pune Best NEET Coaching in Alandi Pune Top NEET Coaching Classes Alandi Pune NEET Advanced Preparation Alandi Pune NEET Classes in Alandi Pune Best NEET Classes in Alandi Pune Top NEET Classes in Alandi Pune"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{`
        {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-alandi-pune#localbusiness",
      "name": "ASQUARE Academy - NEET Coaching Classes in Alandi Pune",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "telephone": "+919766118877",
      "url": "https://www.asquareclasses.com/neet-coaching-classes-institute-alandi-pune",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Alandi, Pune",
        "addressLocality": "Alandi",
        "addressRegion": "Maharashtra",
        "postalCode": "412105",
        "addressCountry": "IN"
      },
      "openingHours": "Mo-Sa 08:00-20:00",
      "sameAs": [
        "https://www.facebook.com/asquareclasses",
        "https://www.instagram.com/asquareacademy"
      ]
    },
    {
      "@type": "EducationalOrganization",
      "name": "ASQUARE Academy",
      "url": "https://www.asquareclasses.com/",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "description": "ASQUARE Academy provides expert NEET coaching classes in Alandi Pune with top faculties, crash courses, and advanced test series."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-alandi-pune#webpage",
      "url": "https://www.asquareclasses.com/neet-coaching-classes-institute-alandi-pune",
      "name": "NEET Coaching Classes in Alandi Pune | Best NEET Classes – ASQUARE Academy",
      "description": "Join the best NEET coaching classes in Alandi Pune with expert faculty, crash & dropper batches, and weekly mock tests at ASQUARE Academy."
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
          "item": "https://www.asquareclasses.com/neet-coaching-classes/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Alandi Pune",
          "item": "https://www.asquareclasses.com/neet-coaching-classes-institute-alandi-pune"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Which is the best NEET coaching in Alandi, Pune?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE Academy is rated among the best NEET coaching classes in Alandi for its expert faculty, structured programs, and high success rate."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer NEET crash courses in Alandi, Pune?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we provide NEET crash courses with PYQs, mock tests, and quick revision modules for final preparation."
          }
        },
        {
          "@type": "Question",
          "name": "Is there a NEET repeater batch available at ASQUARE Academy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, ASQUARE offers a dedicated NEET dropper batch focusing on error correction, conceptual clarity, and intensive testing."
          }
        },
        {
          "@type": "Question",
          "name": "Can students join weekend NEET coaching batches?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, both weekday and weekend NEET batches are available to suit students’ schedules."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide online NEET coaching classes in Pune?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, students can choose from offline classroom NEET classes or online live sessions based on their preference."
          }
        },
        {
          "@type": "Question",
          "name": "What study materials do NEET students receive at ASQUARE Academy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students receive high-quality printed and digital notes, DPPs, topic-wise assignments, and mock tests curated by NEET experts."
          }
        },
        {
          "@type": "Question",
          "name": "How are students’ performances tracked during NEET preparation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Performance is tracked through weekly assessments, online analytics, and parent-teacher interactions for continuous improvement."
          }
        },
        {
          "@type": "Question",
          "name": "Is ASQUARE Academy suitable for NEET beginners in Alandi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely! We offer foundation courses for beginners focusing on building strong fundamentals and exam confidence."
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
                Join the{" "}
                <span className="gradient-text-yellow d-inline-block">
                  Best NEET Coaching Classes in Alandi, Pune and Prepare
                  Confidently with ASQUARE Academy
                </span>
              </h1>
              <p className="fs-5 text-white mb-3 lh">
                Preparing for <strong>NEET UG </strong>
                requires dedication, conceptual clarity, and the right
                mentorship. At{" "}
                <strong>
                  {" "}
                  ASQUARE Academy, our NEET coaching classes in Alandi, Pune{" "}
                </strong>{" "}
                help students achieve their medical dreams with a strategic and
                student-centric approach. With expert faculty, a structured
                syllabus, and proven results, ASQUARE is recognized among the
                <strong> top NEET coaching institutes in Pune.</strong>
              </p>
              <div className="hero-location-info d-flex align-items-start gap-3">
                <MapPin
                  size={24}
                  color="#FFCB03"
                  className="flex-shrink-0 mt-1"
                />
                <span className="text-white">
                  <strong>Our Alandi branch caters to students from:</strong>{" "}
                  Alandi, Dighi, Charholi, Bhosari, Moshi, Markal, Dudulgaon,{" "}
                  destination for NEET preparation in PCMC Pune.
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
                — Best NEET Coaching in Alandi, Pune
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
                  NEET Coaching Classes Alandi.
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
            Comprehensive NEET Course Details{" "}
            <span> ASQUARE Academy - Alandi</span>
          </h2>

          {/* Description */}
          <div className="mx-auto mb-5">
            <p className="lead text-secondary mb-3">
              The <strong> NEET (UG) </strong> entrance exam is one of India’s
              toughest and most competitive exams for aspiring doctors. At
              <strong> ASQUARE Academy, Alandi, </strong>
              our structured courses focus on conceptual understanding,
              analytical skills, and exam strategy, helping students achieve top
              ranks in NEET.
            </p>

            <p className="d-flex flex-wrap justify-content-center align-items-center gap-2 text-dark">
              <MapPin className="text-primary" size={26} />
              <span>
                Our curriculum covers{" "}
                <strong>Physics, Chemistry, and Biology </strong>
                in detail, with practice modules, test series, and personalized
                mentoring. Students from{" "}
                <strong>
                  Alandi, Dighi, Charholi, Bhosari, Moshi, Markal, Dudulgaon.
                </strong>
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
              Course Details (NEET UG) - Top NEET Coaching Classes in Alandi
            </h3>

            <p className="fs-5">
              <strong>NEET UG</strong> is the gateway to top medical colleges
              across India offering{" "}
              <strong>
                MBBS, BDS, BAMS, BHMS, and other medical programs.
              </strong>
            </p>
            <p className="fs-5">
              At <strong>ASQUARE Academy Alandi,</strong> our NEET programs are
              designed to build strong fundamentals, improve speed and accuracy,
              and ensure exam readiness through sustained practice and
              analytics.
            </p>
            <p className="fs-5">
              We combine conceptual teaching with consistent{" "}
              <strong>mock test series</strong> and performance reviews —
              positioning ASQUARE as{" "}
              <strong>
                {" "}
                Top NEET Coaching Institute in Alandi and PCMC Pune.
              </strong>
            </p>

            <h4 className="fw-bold text-primary-emphasis mt-5 fs-3">
              Subjects Covered in NEET Classes at Alandi, Pune
            </h4>

            <div className="mt-4">
              {subjectsCovered.map((subject, i) => (
                <SubjectCard key={i} {...subject} />
              ))}
            </div>

            <p className="fs-5">
              Each subject is taught with step-by-step conceptual explanation,
              practice, and assessment.
            </p>
          </div>

          {/* Right Column - Blue */}
          <div className="col-lg-6 p-5 p-lg-5 text-white lg-b-bg-b">
            <h5 className="fw-bold text-warning mb-4 fs-1">
              Program Duration and Batch Options — NEET Preparation in Alandi,
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
              Best NEET Coaching in Alandi, Pune
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
              Proven NEET Results and Success Stories from ASQUARE Academy
              Alandi
            </h4>
          </div>
          <div className="results-box-gradient">
            <p className="fs-5 text-dark mb-3 text-center">
              Our students have consistently achieved admissions in{" "}
              <strong className="text-primary"> AIIMS, </strong>
              government medical colleges, and top private institutes. With
              consistent results and student satisfaction,
              <strong className="text-primary"> ASQUARE Academy </strong>
              proudly stands among the
              <strong> best NEET coaching classes in Pune.</strong>
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
                  the best NEET training institute in Alandi and PCMC.
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
              Top NEET Coaching Institutes in Alandi (PCMC).
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
            Enroll at{" "}
            <span>
              ASQUARE Academy –The Best NEET Coaching Classes in Alandi, Pune
            </span>
          </h2>

          {/* Description */}
          <div className="mx-auto mb-5">
            <p className="lead text-secondary mb-3">
              If you’re searching for the{" "}
              <strong> Best NEET Coaching Classes in Alandi, Pune, </strong> is
              the perfect choice for expert guidance, structured learning, and
              consistent results.
              <strong> NEET preparation in PCMC Pune.</strong>
            </p>

            <p className="d-flex flex-wrap justify-content-center align-items-center gap-2 text-dark">
              <MapPin className="text-primary" size={22} />
              <span>
                Convenient from{" "}
                <strong>
                  Alandi, Dighi, Charholi, Bhosari, Moshi, Markal, Dudulgaon.
                </strong>
              </span>
            </p>
          </div>

          {/* Subheading */}
          <h4 className="fw-bold text-primary mb-4">
            Admissions Open – Enroll Now!
          </h4>
          <p>
            Start your NEET journey with ASQUARE Academy and give your medical
            career the confidence it deserves.
          </p>

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

export default NEETAlandi;
