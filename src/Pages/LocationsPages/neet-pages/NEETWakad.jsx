import React, { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import locationBGImage from "../../../Assets/locationPageImages/neet/NEET slider PC1.jpeg";
import MobileBGImage from "../../../Assets/locationPageImages/neet/NEET slider mobile1.jpeg";
import image1 from "../../../Assets/locationPageImages/neet/NEET Page 18.jpeg";
import image2 from "../../../Assets/locationPageImages/neet/NEET Page 14.jpeg";
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

function NEETWakad() {
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
      "Experienced mentors for Physics, Chemistry & Biology with proven NEET success.",
  },
  {
    Icon: BookOpen,
    title: "Structured Curriculum",
    description:
      "NCERT-based syllabus with advanced NEET problem-solving sessions.",
  },
  {
    Icon: Target,
    title: "Small Batch Size",
    description:
      "Ensures one-on-one interaction and focused guidance.",
  },
  {
    Icon: BarChart,
    title: "Regular Assessments",
    description:
      "Weekly topic tests and full-length NEET mock exams.",
  },
  {
    Icon: Calendar,
    title: "Flexible Learning",
    description:
      "Classroom and Online NEET Coaching in Wakad Pune available.",
  },
  {
    Icon: Users,
    title: "Integrated Study Plan",
    description:
      "Balances school boards and NEET syllabus preparation effectively.",
  },
];

  const subjectsCovered = [
  {
    title: "Physics",
    desc: "Strengthen conceptual understanding and numerical-solving techniques.",
  },
  {
    title: "Chemistry",
    desc: "Complete Physical, Organic, and Inorganic coverage with practical examples.",
  },
  {
    title: "Biology",
    desc: "In-depth NCERT-based teaching with topic-wise revision, diagrams, and previous year NEET questions.",
  },
];

  const programDurations = [
  {
    icon: Clock,
    title: "2-Year Integrated Program (Class 11 → 12)",
    desc: "Foundation-to-advanced course covering both board and NEET syllabus.",
  },
  {
    icon: Target,
    title: "1-Year Target Batch (Class 12)",
    desc: "Intensive NEET-focused course with mock exams and test analysis.",
  },
  {
    icon: CalendarSync,
    title: "Dropper/Repeater Batch",
    desc: "One-year full-syllabus NEET batch with detailed practice sessions.",
  },
  {
    icon: School,
    title: "Crash Course",
    desc: "2–3 month short-term program for NEET revision and PYQ practice.",
  },
];

  const methodologySteps = [
  {
    Icon: Lightbulb,
    title: "Learn",
    description: "Interactive concept-based classroom sessions.",
  },
  {
    Icon: BookOpen,
    title: "Practice",
    description: "Daily problem-solving, DPPs, and test assignments.",
  },
  {
    Icon: BarChart,
    title: "Assess",
    description: "Weekly chapter tests and full-syllabus mock exams.",
  },
  {
    Icon: MessageCircle,
    title: "Revise",
    description: "Topic-wise revisions, error analysis, and focused NEET drills.",
  },
];

  const faqData = [
  {
    q: "Do you offer advanced NEET batches in Wakad?",
    a: "Yes, ASQUARE Academy conducts advanced NEET coaching classes in Wakad Pune with mock exams, detailed analysis, and expert mentoring to strengthen conceptual clarity and exam strategy.",
  },
  {
    q: "Are small batches available for better learning?",
    a: "Absolutely! Our best NEET coaching in Wakad Pune maintains small batches to ensure personalized guidance, one-on-one doubt-solving, and improved student performance.",
  },
  {
    q: "Can students from nearby areas join?",
    a: "Yes, students from Hinjewadi, Kalewadi, Thergaon, Dange Chowk, Pimple Saudagar, and Tathawade regularly join top NEET coaching classes in Wakad Pune for quality preparation.",
  },
  {
    q: "Is online NEET coaching available?",
    a: "Yes, ASQUARE Academy offers both classroom and online NEET classes in Wakad Pune, making it flexible for students to learn from home or at the institute.",
  },
  {
    q: "How do you evaluate student performance?",
    a: "Regular weekly tests, full-length mock exams, and personalized feedback help NEET students in Wakad Pune track progress and improve consistently.",
  },
  {
    q: "What subjects are covered in NEET preparation?",
    a: "Our NEET advanced preparation in Wakad Pune includes Physics, Chemistry, and Biology, taught by experienced faculty with a focus on conceptual understanding.",
  },
  {
    q: "What course durations are available?",
    a: "ASQUARE Academy offers 2-year integrated, 1-year target, and crash courses for NEET classes in Wakad Pune, catering to both school students and droppers.",
  },
  {
    q: "Why choose ASQUARE for NEET coaching in Wakad?",
    a: "With expert faculty, small batches, and dedicated mock test series, ASQUARE is recognized among the top NEET classes in Wakad Pune for serious aspirants.",
  },
];

const gridFeatures = [
  {
    Icon: Users,
    title: "Qualified faculty for Physics, Chemistry, and Biology",
    colorClass: "bg-gradient-blue",
  },
  {
    Icon: BookOpen,
    title: "Comprehensive printed & digital study materials",
    colorClass: "bg-gradient-purple",
  },
  {
    Icon: Calendar,
    title: "Weekly performance tests & result tracking",
    colorClass: "bg-gradient-green",
  },
  {
    Icon: MessageCircle,
    title: "Doubt-solving & personal mentorship",
    colorClass: "bg-gradient-orange",
  },
  {
    Icon: Award,
    title: "Parent-teacher meetings for progress updates",
    colorClass: "bg-gradient-red",
  },
  {
    Icon: BarChart,
    title: "Online & offline NEET test series with analytics",
    colorClass: "bg-gradient-pink",
  },
  {
    Icon: Target,
    title: "Convenient for students from Hinjewadi, Kalewadi, Thergaon, Dange Chowk, Jagtap Dairy, Vishal Nagar, and Pimple Saudagar",
    colorClass: "bg-gradient-teal",
  },
];

  return (
    <>
      <Helmet>
        <title>
          Best NEET Coaching Classes in Wakad Pune | ASQUARE Academy
        </title>
        <meta
          name="title"
          content="Best NEET Coaching Classes in Wakad Pune | ASQUARE Academy"
        />
        <meta
          name="description"
          content="ASQUARE Academy offers top NEET coaching classes in Wakad Pune with expert faculty, small batches, mock tests & online options for strong NEET preparation."
        />
        <meta
          name="keywords"
          content="NEET coaching classes in wakad pune Best NEET Coaching in wakad Pune Top NEET Coaching Classes wakad pune NEET Advanced Preparation wakad pune NEET Classes in wakad pune Best NEET Classes in wakad pune Top NEET Classes in wakad pune"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{`
        {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-wakad-pune#localbusiness",
      "name": "ASQUARE Academy Wakad",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "url": "https://www.asquareclasses.com/neet-coaching-classes-institute-wakad-pune",
      "telephone": "+919766118877",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Wakad",
        "addressRegion": "Pune, Maharashtra",
        "addressCountry": "India"
      },
      "priceRange": "$$",
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune"
      ],
      "description": "ASQUARE Academy offers the best NEET coaching classes in Wakad Pune with expert mentors, small batches, and online learning options."
    },
    {
      "@type": "EducationalOrganization",
      "@id": "https://www.asquareclasses.com/#organization",
      "name": "ASQUARE Academy",
      "url": "https://www.asquareclasses.com/",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+919766118877",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi", "Marathi"]
      },
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune"
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-wakad-pune#webpage",
      "url": "https://www.asquareclasses.com/neet-coaching-classes-institute-wakad-pune",
      "name": "Best NEET Coaching Classes in Wakad Pune | ASQUARE Academy",
      "description": "ASQUARE Academy offers top NEET coaching classes in Wakad Pune with experienced faculty, mock exams, personalized feedback, and online learning options.",
      "publisher": {
        "@id": "https://www.asquareclasses.com/#organization"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-wakad-pune#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you offer advanced NEET batches in Wakad?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, ASQUARE Academy conducts advanced NEET coaching classes in Wakad Pune with mock exams, analysis, and expert mentoring for better performance."
          }
        },
        {
          "@type": "Question",
          "name": "Are small batches available for better learning?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, ASQUARE Academy maintains small batches for personalized attention, doubt-solving, and improved student outcomes."
          }
        },
        {
          "@type": "Question",
          "name": "Can students from nearby areas join?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, students from Hinjewadi, Kalewadi, Thergaon, Dange Chowk, Pimple Saudagar, and Tathawade join NEET coaching at ASQUARE Wakad Pune."
          }
        },
        {
          "@type": "Question",
          "name": "Is online NEET coaching available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, ASQUARE Academy offers both classroom and online NEET classes in Wakad Pune."
          }
        },
        {
          "@type": "Question",
          "name": "How do you evaluate student performance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Regular weekly tests, full-length mock exams, and personalized feedback help students track and improve performance."
          }
        },
        {
          "@type": "Question",
          "name": "What subjects are covered in NEET preparation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "NEET preparation at ASQUARE Wakad Pune includes Physics, Chemistry, and Biology taught by expert faculty."
          }
        },
        {
          "@type": "Question",
          "name": "What course durations are available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE Academy offers 2-year integrated, 1-year target, and crash courses for NEET aspirants in Wakad Pune."
          }
        },
        {
          "@type": "Question",
          "name": "Why choose ASQUARE for NEET coaching in Wakad?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "With expert faculty, small batches, and regular mock tests, ASQUARE is among the top NEET coaching classes in Wakad Pune."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-wakad-pune#breadcrumb",
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
          "name": "NEET Coaching Classes in Wakad Pune",
          "item": "https://www.asquareclasses.com/neet-coaching-classes-institute-wakad-pune"
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
                Crack NEET with Expert Mentorship at {" "}
                <span className="gradient-text-yellow d-inline-block">
                ASQUARE Academy – Wakad
                </span>
              </h1>
              <p className="fs-5 text-white mb-3 lh">
                Looking for result-oriented <strong> NEET coaching in Wakad, Pune? </strong> At
                 <strong> ASQUARE Academy, </strong>
                we focus on strengthening NEET aspirants’ conceptual foundation,accuracy, and time management through structured programs and personalized mentoring.Counted among the
                 <strong> Best NEET Coaching Institutes in Wakad, </strong> our courses are designed to help students master NCERT concepts, practice systematically, and achieve top ranks in NEET-UG.
             </p>
              <div className="hero-location-info d-flex align-items-start gap-3">
                <MapPin
                  size={24}
                  color="#FFCB03"
                  className="flex-shrink-0 mt-1"
                />
                <span className="text-white">
                  Our Wakad centre attracts students from
                  <strong>
                    {" "}
                    Hinjewadi, Kalewadi, Thergaon, Dange Chowk, Jagtap Dairy, Vishal Nagar, Tathawade, and Pimple Saudagar, {" "}
                  </strong>
                   making it a preferred choice for NEET preparation in PCMC Pune.
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
                Best NEET Coaching in Wakad?
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
                  Our goal is to provide every aspirant with the right academic guidance, discipline, and support to achieve their NEET dream.
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
            <span> ASQUARE Academy Wakad</span>
          </h2>

          {/* Description */}
          <div className="mx-auto mb-5">
            <p className="lead text-secondary mb-3">
              The<strong> NEET course at ASQUARE Academy, Wakad, </strong>
              offers complete preparation through concept-based teaching, regular testing, and doubt-clearing sessions.<br/>
              Our approach ensures every student strengthens their basics, practices consistently, and gains confidence for NEET.
            </p>

            <p className="d-flex flex-wrap justify-content-center align-items-center gap-2 text-dark">
              <MapPin className="text-primary" size={26} />
              <span>
                Students from
                <strong>
                  {" "}
                  Hinjewadi, Thergaon, Dange Chowk, and Kalewadi {" "}
                </strong>
                attend our classes for their proximity and the academy’s proven academic record in{" "}
                <strong> NEET coaching across PCMC Pune. </strong>
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
              Course Details (NEET UG) - Top NEET Coaching Classes in Wakad
            </h3>

            <p className="fs-5">
              <strong>NEET UG</strong> is India’s national entrance test for{" "}
              <strong>
                MBBS, BDS, BAMS, BHMS, and allied health courses.
              </strong>
              At <strong> ASQUARE Academy Wakad,</strong>
             we follow a result-oriented teaching plan focusing on concept mastery, speed, and precision through consistent assessments and expert mentorship.
            </p>
            <p className="fs-5">
              Our structured programs and experienced faculty make ASQUARE one of the{" "}
              <strong> Top NEET Coaching Institutes in Wakad Pune. </strong>
            </p>
            <h4 className="fw-bold text-primary-emphasis mt-5 fs-3">
              Subjects Covered in NEET Classes at Wakad
            </h4>

            <div className="mt-4">
              {subjectsCovered.map((subject, i) => (
                <SubjectCard key={i} {...subject} />
              ))}
            </div>

            <p className="fs-5">
              Each subject is taught with clarity, practical examples, and test-based evaluation to ensure top results.
            </p>
          </div>

          {/* Right Column - Blue */}
          <div className="col-lg-6 p-5 p-lg-5 text-white lg-b-bg-b">
            <h5 className="fw-bold text-warning mb-4 fs-1">
              Program Duration and Batch Options — NEET Preparation in Wakad
            </h5>

            <div className="d-flex flex-column gap-4">
              {programDurations.map((program, i) => (
                <ProgramCard key={i} {...program} />
              ))}
            </div>

            <div className="mt-5 p-4 rounded-4 border border-warning border-opacity-50 bg-brown">
              <p className="fs-5 mb-0">
                All batches are designed for structured learning, progressive assessment, and exam readiness.
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
              Best NEET Coaching in Wakad,
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
              At <strong> ASQUARE Academy – Wakad  </strong>
              has consistently produced NEET toppers who secured admission into leading institutions such as {" "}
              <strong className="text-primary">
                AIIMS, BJMC, AFMC, and DY Patil Medical College Pune.{" "}
              </strong>
              Our structured test system, performance reviews, and goal-oriented mentoring make ASQUARE the
              <strong> Top NEET Coaching Centre in Wakad Pune. </strong>
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
                This 4-step methodology ensures that ASQUARE remains the {" "}
                <strong>
                  Top NEET Coaching Institute in Wakad and PCMC Pune.
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
              Top NEET Coaching Institutes in Wakad.
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
            Enroll Now at <span>  ASQUARE Academy – Wakad Pune</span>
          </h2>

          {/* Description */}
          <div className="mx-auto mb-5">
            <p className="lead text-secondary mb-3">
              If you’re looking for the{" "}
              <strong> Best NEET Coaching Classes in Wakad, Pune,  </strong>
             join ASQUARE Academy today. With experienced faculty, structured teaching, and consistent results, we help you turn your medical dream into reality.
             </p>

            <p className="d-flex flex-wrap justify-content-center align-items-center gap-2 text-dark">
              <MapPin className="text-primary" size={22} />
              <span>
                 Convenient from {" "}
                <strong>
                  {" "}Wakad, Hinjewadi, Kalewadi, Thergaon, Dange Chowk, Jagtap Dairy, Pimple Saudagar, and Vishal Nagar.
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

export default NEETWakad;
