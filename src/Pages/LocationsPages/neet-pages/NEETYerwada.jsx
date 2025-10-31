import React, { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import locationBGImage from "../../../Assets/locationPageImages/neet/NEET slider PC1.jpeg";
import MobileBGImage from "../../../Assets/locationPageImages/neet/NEET slider mobile1.jpeg";
import image1 from "../../../Assets/locationPageImages/neet/NEET Page 15.jpeg";
import image2 from "../../../Assets/locationPageImages/neet/NEET Page 1.jpeg";
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

function NEETYerwada() {
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
        "Highly qualified subject specialists for Physics, Chemistry, and Biology.",
    },
    {
      Icon: BookOpen,
      title: "Concept-Based Learning",
      description:
        "NCERT-aligned teaching combined with advanced NEET-level problem solving.",
    },
    {
      Icon: Target,
      title: "Small Batches",
      description: "Personalized doubt-solving and individual focus.",
    },
    {
      Icon: BarChart,
      title: "Regular Assessments",
      description:
        "Weekly tests, mock exams, and detailed performance analysis.",
    },
    {
      Icon: Calendar,
      title: "Flexible Learning",
      description:
        "Classroom + online coaching with weekday and weekend batch options.",
    },
    {
      Icon: School,
      title: "Personal Mentorship",
      description: "Guidance for balancing NEET preparation and board exams.",
    },
  ];

  const subjectsCovered = [
    {
      title: "Physics for NEET",
      desc: "Core concepts + numerical problem-solving strategies.",
    },
    {
      title: "Chemistry for NEET",
      desc: "Physical, Organic, and Inorganic Chemistry taught in depth.",
    },
    {
      title: "Biology for NEET",
      desc: "Line-by-line NCERT coverage with focus on diagrams and high-yield topics.",
    },
  ];

  const programDurations = [
    {
      icon: Clock,
      title: "2-Year Integrated Program (Class 11 → 12):",
      desc: "Balanced foundation with NEET + board exam coverage.",
    },
    {
      icon: Target,
      title: "1-Year Target Program (Class 12):",
      desc: "Class 12 syllabus with Class 11 recap + intensive test practice.",
    },
    {
      icon: CalendarSync,
      title: "Dropper/Repeater Batch:",
      desc: "Special program for repeaters with full-length tests, analysis, and focused revision.",
    },
    {
      icon: School,
      title: "Crash Course:",
      desc: "Short-term intensive revision with PYQs, formulas, and exam strategies.",
    },
  ];

  const methodologySteps = [
    {
      Icon: Lightbulb,
      title: "Learn",
      description: "Interactive lectures & concept clarity.",
    },
    {
      Icon: BookOpen,
      title: "Practice",
      description: "Worksheets, DPPs & assignments.",
    },
    {
      Icon: BarChart,
      title: "Assess",
      description: "Weekly tests & full-length mocks.",
    },
    {
      Icon: MessageCircle,
      title: "Revise",
      description: "Chapter-wise crash sessions & strategy workshops.",
    },
  ];

  const faqData = [
    {
      q: "Which is the best NEET coaching in Yerwada?",
      a: "ASQUARE Academy is widely recognized as the best NEET coaching in Yerwada, offering expert guidance, structured courses, and personalized mentorship.",
    },
    {
      q: "Do you provide crash courses?",
      a: "Yes, we conduct short-term crash courses with focused revision modules, practice tests, and intensive preparation for quick improvement.",
    },
    {
      q: "Is there a dropper batch available?",
      a: "Yes, we offer a dedicated repeater/dropper batch with personalized mentoring and targeted strategies to help repeaters improve their NEET scores.",
    },
    {
      q: "Can I attend weekend classes?",
      a: "Yes, weekend batches are available to accommodate students with school or other commitments, ensuring flexible learning schedules.",
    },
    {
      q: "Do you offer online NEET coaching?",
      a: "Yes, students can choose classroom or online coaching, with live interactive sessions, recorded lectures, and doubt-clearing support.",
    },
    {
      q: "What subjects are covered in the NEET coaching program?",
      a: "Our program covers Physics, Chemistry, and Biology, focusing on NCERT concepts, practice problems, and NEET-style question patterns.",
    },
    {
      q: "How are students’ progress and performance tracked?",
      a: "We monitor students through weekly tests, mock exams, and performance reports, providing individual feedback for continuous improvement.",
    },
    {
      q: "What study material is provided for NEET preparation?",
      a: "Students receive comprehensive study notes, practice sheets, and full-length mock tests designed according to the NEET exam pattern.",
    },
  ];

  const gridFeatures = [
    {
      Icon: BookOpen,
      title: "Comprehensive study material (print + digital)",
      colorClass: "bg-gradient-blue",
    },
    {
      Icon: Users,
      title: "Structured doubt-clearing support",
      colorClass: "bg-gradient-purple",
    },
    {
      Icon: ChartSpline,
      title: "Regular parent–teacher meetings",
      colorClass: "bg-gradient-green",
    },
    {
      Icon: BarChart,
      title: "In-depth test analytics via online test platform",
      colorClass: "bg-gradient-orange",
    },
    {
      Icon: Award,
      title: "Confidence-building & time-management workshops",
      colorClass: "bg-gradient-red",
    },
    {
      Icon: MapPin,
      title:
        "Proven results across Yerwada, Pune Camp, Koregaon Park, Kalyani Nagar, Bund Garden, Vishrantwadi, Lohegaon, and Viman Nagar.",
      colorClass: "bg-gradient-pink",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Best NEET Coaching & Classes in Yerwada Pune | Top NEET Institute
        </title>
        <meta
          name="title"
          content="Best NEET Coaching & Classes in Yerwada Pune | Top NEET Institute"
        />
        <meta
          name="description"
          content="Join the best NEET Coaching & Classes in Yerwada Pune. Expert faculty, crash courses, mock tests & flexible batches for top results. ASQUARE Academy."
        />
        <meta
          name="keywords"
          content="NEET coaching classes in yerwada pune Best NEET Coaching in yerwada Pune Top NEET Coaching Classes yerwada Pune NEET Advanced Preparation yerwada Pune NEET Classes in yerwada Pune Best NEET Classes in yerwada Pune Top NEET Classes in yerwada Pune"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{`
        {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-yerwada-pune#organization",
      "name": "ASQUARE Academy",
      "url": "https://www.asquareclasses.com/neet-coaching-classes-institute-yerwada-pune",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "telephone": "+91-9766118877",
      "sameAs": [
        "https://www.facebook.com/asquareclasses",
        "https://www.instagram.com/asquareclasses"
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Yerwada",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411006",
        "addressCountry": "IN"
      },
      "description": "Best NEET Coaching & Classes in Yerwada Pune with expert guidance, crash courses, mock tests, and mentorship. ASQUARE Academy.",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9766118877",
        "contactType": "Customer Service",
        "areaServed": "IN"
      }
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-yerwada-pune#localbusiness",
      "name": "Best NEET Coaching & Classes in Yerwada Pune - ASQUARE Academy",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "telephone": "+91-9766118877",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Yerwada",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411006",
        "addressCountry": "IN"
      },
      "openingHours": "Mo-Sa 09:00-19:00",
      "url": "https://www.asquareclasses.com/neet-coaching-classes-institute-yerwada-pune",
      "description": "Best NEET Coaching & Classes in Yerwada Pune with small batches, crash courses, mock tests, and personalized mentorship. ASQUARE Academy."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-yerwada-pune#webpage",
      "url": "https://www.asquareclasses.com/neet-coaching-classes-institute-yerwada-pune",
      "name": "Best NEET Coaching & Classes in Yerwada Pune",
      "description": "Join the best NEET Coaching & Classes in Yerwada Pune. Expert faculty, crash courses, mock tests & flexible batches for top results. ASQUARE Academy.",
      "breadcrumb": {
        "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-yerwada-pune#breadcrumbs"
      },
      "publisher": {
        "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-yerwada-pune#organization"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-yerwada-pune#breadcrumbs",
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
          "name": "Best NEET Coaching & Classes in Yerwada Pune",
          "item": "https://www.asquareclasses.com/neet-coaching-classes-institute-yerwada-pune"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-yerwada-pune#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Which is the best NEET coaching in Yerwada?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE Academy is widely recognized as the best NEET coaching in Yerwada, offering expert guidance, structured courses, and personalized mentorship."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide crash courses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we conduct short-term crash courses with focused revision modules, practice tests, and intensive preparation for quick improvement."
          }
        },
        {
          "@type": "Question",
          "name": "Is there a dropper batch available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we offer a dedicated repeater/dropper batch with personalized mentoring and targeted strategies to help repeaters improve their NEET scores."
          }
        },
        {
          "@type": "Question",
          "name": "Can I attend weekend classes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, weekend batches are available to accommodate students with school or other commitments, ensuring flexible learning schedules."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer online NEET coaching?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, students can choose classroom or online coaching, with live interactive sessions, recorded lectures, and doubt-clearing support."
          }
        },
        {
          "@type": "Question",
          "name": "What subjects are covered in the NEET coaching program?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our program covers Physics, Chemistry, and Biology, focusing on NCERT concepts, practice problems, and NEET-style question patterns."
          }
        },
        {
          "@type": "Question",
          "name": "How are students’ progress and performance tracked?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We monitor students through weekly tests, mock exams, and performance reports, providing individual feedback for continuous improvement."
          }
        },
        {
          "@type": "Question",
          "name": "What study material is provided for NEET preparation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students receive comprehensive study notes, practice sheets, and full-length mock tests designed according to the NEET exam pattern."
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
                  Join ASQUARE Academy Yerwada for Top NEET Coaching & Expert
                  Mentorship
                </span>
              </h1>
              <p className="fs-5 text-white mb-3 lh">
                Preparing for NEET UG requires the right mix of expert teaching,
                regular practice, and strong mentoring. At
                <strong> ASQUARE Academy, </strong>
                we provide focused
                <strong> NEET coaching classes in Yerwada, Pune, </strong>
                designed to build confidence, improve accuracy, and ensure
                success in one of India’s toughest medical entrance exams. With
                our proven methodology, we are ranked among the
                <strong> best NEET coaching institutes in Pune. </strong>
              </p>
              <div className="hero-location-info d-flex align-items-start gap-3">
                <MapPin
                  size={24}
                  color="#FFCB03"
                  className="flex-shrink-0 mt-1"
                />
                <span className="text-white">
                  <strong>we help students from:</strong> Yerwada, Pune Camp,
                  Koregaon Park, Kalyani Nagar, Bund Garden, Vishrantwadi,
                  Lohegaon, and Viman Nagar.
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
                for NEET Preparation in Yerwada, Pune
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
              ASQUARE Academy - Yerwada, Pune - Structured for Success
            </span>
          </h2>

          {/* Description */}
          <div className="mx-auto mb-5">
            <p className="lead text-secondary mb-3">
              <strong> NEET (UG) </strong> is India’s single-level medical
              entrance exam for MBBS, BDS, BAMS, BHMS, and other allied
              programs. With lakhs of aspirants competing, choosing the right
              <strong> NEET coaching classes in Yerwada, Pune </strong> is
              essential.
            </p>

            <p className="d-flex flex-wrap justify-content-center align-items-center gap-2 text-dark">
              <MapPin className="text-primary" size={26} />
              <span>
                At <strong>ASQUARE Academy – Yerwada, </strong>
                our programs help students strengthen fundamentals, practice
                regularly, and perform at their best in the final exam.
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
              Course Details (NEET UG) - Top NEET Coaching Classes in Yerwada
            </h3>

            <p className="fs-5">
              <strong>NEET UG</strong> is the gateway to top medical colleges
              across India offering{" "}
              <strong>MBBS, BDS, BAMS, BHMS, and other allied courses.</strong>
            </p>
            <p className="fs-5">
              At <strong>ASQUARE Academy Yerwada,</strong> our NEET programs are
              designed to build strong fundamentals, improve speed and accuracy,
              and ensure exam readiness through sustained practice and
              analytics.
            </p>
            <p className="fs-5">
              We are among the{" "}
              <strong>Top NEET Coaching Institutes in Yerwada Pune, </strong>
              known for high student success and experienced faculty.
            </p>

            <h4 className="fw-bold text-primary-emphasis mt-5 fs-3">
              Subjects Covered in NEET Classes at Yerwada
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
              Program Duration and Batch Options — NEET Preparation in Yerwada
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
              Best NEET Coaching in Yerwada, Pune
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
              ASQUARE Academy’s NEET Success – Proven Track Record
            </h4>
          </div>
          <div className="results-box-gradient">
            <p className="fs-5 text-dark mb-3 text-center">
              Our students from{" "}
              <strong className="text-primary">
                ASQUARE Academy – Yerwada{" "}
              </strong>
              have consistently achieved admissions in{" "}
              <strong>
                AIIMS, government medical colleges, and reputed private
                institutes.
              </strong>
              With strong academic mentoring, ASQUARE is trusted as one of the{" "}
              <strong>top NEET coaching classes in Yerwada and Pune.</strong>
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
                  the best NEET training institute in Yerwada and PCMC.
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
              Top NEET Coaching Institutes in Yerwada.
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
            Join{" "}
            <span>
              ASQUARE Academy –The Best NEET Coaching Classes in Yerwada, Pune
            </span>
          </h2>

          {/* Description */}
          <div className="mx-auto mb-5">
            <p className="lead text-secondary mb-3">
              If you’re looking for{" "}
              <strong> NEET coaching classes in Yerwada, Pune, </strong>
              ASQUARE Academy is your destination for success. With expert
              guidance, structured courses, and proven results, we ensure
              aspirants achieve their medical career dreams.
            </p>

            <p className="d-flex flex-wrap justify-content-center align-items-center gap-2 text-dark">
              <MapPin className="text-primary" size={22} />
              <span>
                Convenient for students from{" "}
                <strong>
                  Yerwada, Pune Camp, Koregaon Park, Kalyani Nagar, Bund Garden,
                  Vishrantwadi, Lohegaon, and Viman Nagar.
                </strong>
              </span>
            </p>
          </div>

          {/* Subheading */}
          <h4 className="fw-bold text-primary mb-4">
            Admissions Open – Enroll Today! Give your NEET preparation the
            winning edge with ASQUARE Academy.
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

export default NEETYerwada;
