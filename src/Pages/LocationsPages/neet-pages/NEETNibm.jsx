import React, { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import locationBGImage from "../../../Assets/locationPageImages/neet/NEET slider PC2.jpeg";
import MobileBGImage from "../../../Assets/locationPageImages/neet/NEET slider mobile2.jpeg";
import image1 from "../../../Assets/locationPageImages/neet/NEET page 4.jpeg";
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
  Users,
  School,
  CalendarSync,
  BadgeQuestionMark,
  Award,
  TrendingUp,
  Star
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

function NEETNibm() {
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
    description: "Subject experts in Physics, Chemistry, and Biology.",
  },
  {
    Icon: BookOpen,
    title: "NCERT-Centric Curriculum",
    description: "Strong foundation with NEET-level problem-solving skills.",
  },
  {
    Icon: Target,
    title: "Small Batch Sizes",
    description: "More personalized attention and effective doubt-solving.",
  },
  {
    Icon: BarChart,
    title: "Rigorous Testing",
    description: "Weekly quizzes, chapter tests, and full-length mock exams.",
  },
  {
    Icon: Calendar,
    title: "Flexible Learning",
    description: "Options for classroom-based or online NEET coaching.",
  },
  {
    Icon: Users,
    title: "Holistic Mentorship",
    description: "Supporting both NEET prep and board exam readiness.",
  },
];

  const subjectsCovered = [
  {
    title: "Physics",
    desc: "Concept clarity with regular numerical problem-solving.",
  },
  {
    title: "Chemistry",
    desc: "Detailed coverage of Physical, Organic, and Inorganic Chemistry.",
  },
  {
    title: "Biology",
    desc: "NCERT-based preparation with diagrams and scoring tips.",
  },
];

  const programDurations = [
  {
    icon: Clock,
    title: "2-Year Integrated Course (Class 11 → 12)",
    desc: "Comprehensive foundation building and advanced NEET readiness.",
  },
  {
    icon: Target,
    title: "1-Year Target Course (Class 12)",
    desc: "Rapid syllabus coverage and mock-based learning.",
  },
  {
    icon: School,
    title: "Crash Course (2–3 Months)",
    desc: "Final-phase revision with PYQs and exam strategy sessions.",
  },
  {
    icon: CalendarSync,
    title: "Repeater/Dropper Batch",
    desc: "Customized one-year program for repeat aspirants with mock tests and personal mentoring.",
  },
];

  const methodologySteps = [
  {
    Icon: Lightbulb,
    title: "Interactive, concept-focused classroom lectures",
    description: "Engaging sessions aimed at conceptual clarity and understanding.",
  },
  {
    Icon: BookOpen,
    title: "Daily Practice Papers (DPPs) and structured assignments",
    description: "Consistent practice to reinforce problem-solving and retention.",
  },
  {
    Icon: BarChart,
    title: "Regular assessments with full mock exams and analytics",
    description: "Frequent tests and performance analysis to track improvement.",
  },
  {
    Icon: MessageCircle,
    title: "Dedicated doubt-solving sessions with expert mentors",
    description: "Personalized faculty guidance to resolve academic queries effectively.",
  },
  {
    Icon: Calendar,
    title: "Parent–teacher reviews for performance updates",
    description: "Regular meetings to monitor progress and ensure accountability.",
  },
];

  const faqData = [
  {
    q: "Who can enroll in NEET coaching at ASQUARE NIBM?",
    a: "Students in Class XI, XII, and repeat aspirants.",
  },
  {
    q: "Which subjects are taught?",
    a: "Physics, Chemistry, and Biology as per NEET syllabus.",
  },
  {
    q: "Are mock tests part of the program?",
    a: "Yes—weekly, monthly, and full-length mock exams with detailed feedback.",
  },
  {
    q: "What batches are available?",
    a: "2-year, 1-year, crash, and dropper/repeater programs.",
  },
  {
    q: "How big are the batches?",
    a: "Batches are kept small for better attention.",
  },
  {
    q: "Do parents get performance updates?",
    a: "Yes, through regular reports and PTMs.",
  },
  {
    q: "Is online NEET coaching available?",
    a: "Yes—students can choose classroom or online mode.",
  },
];

const gridFeatures = [
  {
    Icon: Users,
    title: "Small batch sizes for focused learning",
    colorClass: "bg-gradient-blue",
  },
  {
    Icon: BookOpen,
    title: "Updated NEET study materials in print + digital formats",
    colorClass: "bg-gradient-purple",
  },
  {
    Icon: Calendar,
    title: "Regular PTMs and performance updates for parents",
    colorClass: "bg-gradient-green",
  },
  {
    Icon: Award,
    title: "Workshops on time management, exam mindset, and accuracy",
    colorClass: "bg-gradient-orange",
  },
  {
    Icon: TrendingUp,
    title: "Recognized as one of the leading NEET coaching centres in NIBM, Kondhwa, Undri, Mohammedwadi, and South Pune",
    colorClass: "bg-gradient-red",
  },
  {
    Icon: Star,
    title: "Expert NEET faculty with proven student success",
    colorClass: "bg-gradient-teal",
  },
];

  return (
    <>
      <Helmet>
        <title>
          Best NEET Coaching Classes in NIBM Pune | ASQUARE Academy
        </title>
        <meta
          name="title"
          content="Best NEET Coaching Classes in NIBM Pune | ASQUARE Academy"
        />
        <meta
          name="description"
          content="Join ASQUARE Academy for the best NEET coaching classes in NIBM Pune. Expert faculty, small batches, mock tests & personalized preparation for NEET success."
        />
        <meta
          name="keywords"
          content="NEET coaching classes in nibm pune Best NEET Coaching in nibm pune Top NEET Coaching Classes nibm pune NEET Advanced Preparation nibm pune NEET Classes in nibm pune Best NEET Classes in nibm pune Top NEET Classes in nibm pune"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{`
        {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-nibm-pune#localbusiness",
      "name": "ASQUARE Academy - NEET Coaching Classes in NIBM Pune",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "telephone": "9766118877",
      "url": "https://www.asquareclasses.com/neet-coaching-classes-institute-nibm-pune",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "NIBM, Pune",
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
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-nibm-pune#webpage",
      "url": "https://www.asquareclasses.com/neet-coaching-classes-institute-nibm-pune",
      "name": "NEET Coaching Classes in NIBM Pune | ASQUARE Academy",
      "description": "ASQUARE Academy offers top NEET coaching classes in NIBM Pune with expert faculty, mock tests, and personalized attention for NEET aspirants."
    },
    {
      "@type": "EducationalOrganization",
      "name": "ASQUARE Academy",
      "url": "https://www.asquareclasses.com",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune/"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "9766118877",
        "contactType": "Customer Service"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can enroll in NEET coaching at ASQUARE NIBM?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students in Class XI, XII, and repeat aspirants can enroll in NEET coaching at ASQUARE NIBM Pune."
          }
        },
        {
          "@type": "Question",
          "name": "Which subjects are taught?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Physics, Chemistry, and Biology are taught as per the NEET syllabus."
          }
        },
        {
          "@type": "Question",
          "name": "Are mock tests part of the program?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes—weekly, monthly, and full-length mock exams are conducted with detailed feedback."
          }
        },
        {
          "@type": "Question",
          "name": "What batches are available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE NIBM offers 2-year, 1-year, crash, and dropper/repeater programs."
          }
        },
        {
          "@type": "Question",
          "name": "How big are the batches?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Batches are kept small for better individual attention and effective learning."
          }
        },
        {
          "@type": "Question",
          "name": "Do parents get performance updates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, parents receive regular performance reports and updates through PTMs."
          }
        },
        {
          "@type": "Question",
          "name": "Is online NEET coaching available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes—students can choose between classroom and online NEET coaching at ASQUARE NIBM Pune."
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
          "name": "NEET Coaching Classes in Pune",
          "item": "https://www.asquareclasses.com/best-neet-coaching-classes-Institute-in-pune-maharashtra/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "NEET Coaching Classes in NIBM Pune",
          "item": "https://www.asquareclasses.com/neet-coaching-classes-institute-nibm-pune"
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
                Achieve Your NEET Dream with {" "}
                <span className="gradient-text-yellow d-inline-block">
                  ASQUARE Academy – NIBM Branch
                </span>
              </h1>
              <p className="fs-5 text-white mb-3 lh">
                Searching for the <strong> best NEET coaching in NIBM, Pune? </strong> At
                 <strong> ASQUARE Academy, </strong>
                 provides focused NEET UG preparation designed for clarity, practice, and results. With our expert faculty, personalized mentoring, and proven track record
                <strong> Best NEET Coaching Institutes in NIBM, </strong> our courses are designed to help students master NCERT concepts, practice systematically, and achieve top ranks in NEET-UG.
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
                    NIBM Road, Kondhwa, Undri, Mohammedwadi, Wanowrie, Salunke Vihar, Fatima Nagar, and Camp {" "}
                  </strong>
                    trust ASQUARE Academy to achieve their medical aspirations.
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
                Best NEET Coaching in NIBM?
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
            <span> ASQUARE Academy NIBM</span>
          </h2>

          {/* Description */}
          <div className="mx-auto mb-5">
            <p className="lead text-secondary mb-3">
              The<strong> NEET course at ASQUARE Academy, NIBM, </strong>
              offers complete preparation through concept-based teaching, regular testing, and doubt-clearing sessions.<br/>
              Our approach ensures every student strengthens their basics, practices consistently, and gains confidence for NEET.
            </p>

            <p className="d-flex flex-wrap justify-content-center align-items-center gap-2 text-dark">
              <MapPin className="text-primary" size={26} />
              <span>
                Students from
                <strong>
                  {" "}
                    NIBM Road, Kondhwa, Undri, Mohammedwadi, Wanowrie, Salunke Vihar, Fatima Nagar, and Camp {" "}
                </strong>
                attend our classes for their proximity and the academy’s proven academic record in{" "}
                <strong> NEET coaching across PCMC & Pune. </strong>
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
              Course Details (NEET UG) - Top NEET Coaching Classes in NIBM
            </h3>

            <p className="fs-5">
              <strong>NEET UG</strong> is India’s national entrance test for{" "}
              <strong>
                MBBS, BDS, BAMS, and BHMS.
              </strong>
              At <strong> NEET coaching centre in NIBM,</strong>
            our structured program combines clarity of concepts, extensive practice, and smart strategy to help students secure top ranks.
            </p>
            <p className="fs-5">
              Our structured programs and experienced faculty make ASQUARE one of the{" "}
              <strong> NEET coaching institute in NIBM </strong>
            </p>
            <h4 className="fw-bold text-primary-emphasis mt-5 fs-3">
              Subjects Covered in NEET Classes at NIBM
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
              Program Duration and Batch Options — NEET Preparation in NIBM
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
              Best NEET Coaching in NIBM,
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
              At <strong> ASQUARE Academy – NIBM  </strong>
              has consistently delivered excellent NEET results, with students earning admission to {" "}
              <strong className="text-primary">
                AIIMS, prestigious government colleges, and renowned private institutions.{" "}
              </strong>
              Our structured test system, performance reviews, and goal-oriented mentoring make ASQUARE the
              <strong> most trusted NEET coaching institutes in South Pune. </strong>
            </p>
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
                  Top NEET Coaching Institute in NIBM and PCMC Pune.
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
              Top NEET Coaching Institutes in NIBM.
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
            Join <span> ASQUARE Academy – NIBM Today </span>
          </h2>

          {/* Description */}
          <div className="mx-auto mb-5">
            <p className="lead text-secondary mb-3">
              Start your journey with the {" "}
              <strong> best NEET coaching in NIBM, Pune  </strong>
             With expert teaching, structured study plans, and proven outcomes, ASQUARE Academy is your partner in success.
             </p>

            <p className="d-flex flex-wrap justify-content-center align-items-center gap-2 text-dark">
              <MapPin className="text-primary" size={22} />
              <span>
                 Accessible from {" "}
                <strong>
                  {" "} NIBM Road, Kondhwa, Undri, Mohammedwadi, Wanowrie, Salunke Vihar, Fatima Nagar, and Camp.
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

export default NEETNibm;
