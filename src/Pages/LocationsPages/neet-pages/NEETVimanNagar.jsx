import React, { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import locationBGImage from "../../../Assets/locationPageImages/neet/NEET slider PC2.jpeg";
import MobileBGImage from "../../../Assets/locationPageImages/neet/NEET slider mobile2.jpeg";
import image1 from "../../../Assets/locationPageImages/neet/NEET Page 14.jpeg";
import image2 from "../../../Assets/locationPageImages/neet/NEET Page 2.jpeg";
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

function NEETVimanNagar() {
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
    title: "Expert Faculty for NEET in Viman Nagar",
    description:
      "Highly qualified teachers with years of experience in NEET coaching.",
  },
  {
    Icon: BookOpen,
    title: "Comprehensive Syllabus Coverage",
    description:
      "Physics, Chemistry, and Biology taught with NCERT-first approach and advanced problem solving.",
  },
  {
    Icon: Target,
    title: "Personalized Attention",
    description:
      "Small batch sizes with dedicated doubt-solving sessions.",
  },
  {
    Icon: BarChart,
    title: "Regular Tests & Analysis",
    description:
      "Weekly part tests, full-length mocks, and detailed performance reports.",
  },
  {
    Icon: Calendar,
    title: "Motivational & Career Guidance",
    description:
      "Counselling, time-management workshops, and exam mindset training.",
  },
];

  const subjectsCovered = [
  {
    title: "Physics",
    desc: "Conceptual clarity with rigorous numerical practice.",
  },
  {
    title: "Chemistry",
    desc: "Physical, Organic, and Inorganic Chemistry taught with application-based methods and NCERT emphasis.",
  },
  {
    title: "Biology",
    desc: "Line-by-line NCERT coverage, diagrams, and high-weightage topic drills.",
  },
];

  const programDurations = [
  {
    icon: Clock,
    title: "2-Year Course (10th → 12th Moving Students):",
    desc: "Foundation + NEET-focused training for Class 11 & 12 with concept-building and regular tests.",
  },
  {
    icon: Target,
    title: "1-Year Course (11th → 12th Moving Students):",
    desc: "Intensive Class 12 syllabus coverage with targeted NEET practice and mock series.",
  },
  {
    icon: School,
    title: "Crash Course:",
    desc: "2–3 months of intensive revision and problem practice — ideal for last-minute preparation.",
  },
  {
    icon: CalendarSync,
    title: "Repeater/Dropper Batch:",
    desc: "1-year dedicated program for students aiming to improve NEET performance after Class XII.",
  },
];

  const methodologySteps = [
  {
    Icon: Lightbulb,
    title: "Learn",
    description: "Daily lectures for strong concept formation.",
  },
  {
    Icon: BookOpen,
    title: "Practice",
    description: "Chapter-wise assignments and DPPs for practice.",
  },
  {
    Icon: MessageCircle,
    title: "Support",
    description: "One-to-one doubt-solving sessions and mentor support.",
  },
  {
    Icon: BarChart,
    title: "Assess",
    description: "Topic-wise & full-length mock tests with analytics.",
  },
  {
    Icon: Users,
    title: "Review",
    description: "Parent–student performance reviews and improvement plans.",
  },
];

  const faqData = [
  {
    q: "Who can join NEET coaching at ASQUARE Academy?",
    a: "Any student in Class XI, Class XII, or a drop-year student preparing for NEET UG can join.",
  },
  {
    q: "What subjects are covered for NEET?",
    a: "Physics, Chemistry, and Biology as per the NEET (UG) syllabus.",
  },
  {
    q: "Do you provide mock tests and practice papers?",
    a: "Yes — chapter-wise tests, regular part tests, and full-length NEET pattern mocks with detailed analysis.",
  },
  {
    q: "What is the course duration?",
    a: "We offer 2-year integrated, 1-year target, 2–3 month crash courses, and 1-year repeater/dropper programs.",
  },
  {
    q: "How big are the batches?",
    a: "Batches are intentionally small to ensure personalised attention and quick doubt resolution.",
  },
  {
    q: "Do you provide progress reports to parents?",
    a: "Yes — detailed performance reports and periodic PTMs are provided.",
  },
  {
    q: "Where is the institute located?",
    a: "ASQUARE Academy – Viman Nagar, Pune. (Exact address and batch timings are shared during counselling.)",
  },
];

  const gridFeatures = [
  {
    Icon: Users,
    title: "Limited batch size for personalised coaching",
    colorClass: "bg-gradient-blue",
  },
  {
    Icon: BookOpen,
    title: "Updated NEET-aligned study material (printed + digital)",
    colorClass: "bg-gradient-purple",
  },
  {
    Icon: ChartSpline,
    title: "Regular parent-teacher meetings and progress tracking",
    colorClass: "bg-gradient-green",
  },
  {
    Icon: BarChart,
    title: "Workshops on time management, accuracy and exam strategy",
    colorClass: "bg-gradient-orange",
  },
  {
    Icon: TrendingUp,
    title: "Online test platform with detailed analytics",
    colorClass: "bg-gradient-teal",
  },
  {
    Icon: Award,
    title: "Trusted NEET coaching in Viman Nagar & Pune with consistent results",
    colorClass: "bg-gradient-red",
  },
];

  return (
    <>
      <Helmet>
        <title>
          Best NEET Coaching Classes in Viman Nagar Pune | ASQUARE Academy
        </title>
        <meta
          name="title"
          content="Best NEET Coaching Classes in Viman Nagar Pune | ASQUARE Academy"
        />
        <meta
          name="description"
          content="Join ASQUARE Academy for top NEET Coaching Classes in Viman Nagar Pune. Small batches, expert faculty, mock tests & complete NEET syllabus coverage."
        />
        <meta
          name="keywords"
          content="NEET coaching classes in viman nagar pune Best NEET Coaching in viman nagar Pune Top NEET Coaching Classes viman nagar pune NEET Advanced Preparation viman nagar pune NEET Classes in viman nagar pune Best NEET Classes in viman nagar pune Top NEET Classes in viman nagar pune"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{`
        {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-viman-nagar-pune/#localbusiness",
      "name": "ASQUARE Academy - NEET Coaching Classes in Viman Nagar Pune",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "url": "https://www.asquareclasses.com/neet-coaching-classes-institute-viman-nagar-pune/",
      "telephone": "+919766118877",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Viman Nagar, Pune, Maharashtra",
        "addressLocality": "Viman Nagar",
        "addressRegion": "Maharashtra",
        "postalCode": "411014",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "18.5679",
        "longitude": "73.9143"
      },
      "openingHours": "Mo-Sa 08:00-20:00",
      "sameAs": [
        "https://www.facebook.com/asquareclasses/",
        "https://www.instagram.com/asquareclasses/"
      ],
      "description": "ASQUARE Academy offers the best NEET Coaching Classes in Viman Nagar Pune with expert teachers, mock tests, and complete syllabus coverage."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-viman-nagar-pune/#webpage",
      "url": "https://www.asquareclasses.com/neet-coaching-classes-institute-viman-nagar-pune/",
      "name": "Best NEET Coaching Classes in Viman Nagar Pune | ASQUARE Academy",
      "description": "ASQUARE Academy provides top NEET Coaching Classes in Viman Nagar Pune. Small batches, expert faculty, detailed mock tests & complete NEET syllabus coverage.",
      "inLanguage": "en-IN",
      "isPartOf": {
        "@id": "https://www.asquareclasses.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-viman-nagar-pune/#breadcrumb"
      }
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
        "contactType": "Customer Support",
        "areaServed": "IN"
      },
      "sameAs": [
        "https://www.facebook.com/asquareclasses/",
        "https://www.instagram.com/asquareclasses/"
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-viman-nagar-pune/#breadcrumb",
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
          "item": "https://www.asquareclasses.com/neet-coaching-classes-pune/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "NEET Coaching Classes in Viman Nagar Pune"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-viman-nagar-pune/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can join NEET coaching at ASQUARE Academy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Any student in Class XI, Class XII, or a drop-year student preparing for NEET UG can join ASQUARE Academy."
          }
        },
        {
          "@type": "Question",
          "name": "What subjects are covered for NEET?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Physics, Chemistry, and Biology are covered as per the official NEET (UG) syllabus."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide mock tests and practice papers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — we offer chapter-wise tests, part tests, and full-length NEET pattern mock exams with detailed performance analysis."
          }
        },
        {
          "@type": "Question",
          "name": "What is the course duration?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer 2-year integrated, 1-year target, 2–3 month crash courses, and 1-year repeater/dropper NEET programs."
          }
        },
        {
          "@type": "Question",
          "name": "How big are the batches?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Batches are intentionally small to ensure personalised attention, effective doubt-solving, and focused preparation."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide progress reports to parents?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — detailed student performance reports and periodic parent-teacher meetings (PTMs) are conducted."
          }
        },
        {
          "@type": "Question",
          "name": "Where is the institute located?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE Academy – Viman Nagar, Pune. Exact address and batch timings are provided during counselling."
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
                  Build Your Future with Expert Guidance at ASQUARE Academy
                </span>
              </h1>
              <p className="fs-5 text-white mb-3 lh">
                Looking for the best
                <strong> NEET coaching classes in Viman Nagar, Pune? </strong>
                At
                <strong> ASQUARE Academy, </strong>
                we specialise in structured NEET preparation with a proven track record. As a trusted NEET institute in Viman Nagar, we focus on concept clarity, exam strategies, regular test practice, and personal mentorship to help students secure admission into leading medical colleges across India.
                <strong> Best NEET coaching institutes in Viman Nagar. </strong>
              </p>
              <div className="hero-location-info d-flex align-items-start gap-3">
                <MapPin
                  size={24}
                  color="#FFCB03"
                  className="flex-shrink-0 mt-1"
                />
                <span className="text-white">
                  <strong>we help students from:</strong> Viman Nagar, Kalyani Nagar, Vadgaon Sheri, Lohegaon, Kharadi, Yerawada, Nagar Road, Kondhwa, Magarpatta City, and Hadapsar.
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
                for NEET Preparation in Viman Nagar, Pune
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
              ASQUARE Academy - Viman Nagar, Pune - Structured for Success
            </span>
          </h2>

          {/* Description */}
          <div className="mx-auto mb-5">
            <p className="lead text-secondary mb-3">
              <strong> NEET (UG) </strong> is India’s single-level medical
              entrance exam for MBBS, BDS, BAMS, BHMS, and other allied
              programs. With lakhs of aspirants competing, choosing the right
              <strong> NEET coaching classes in Viman Nagar, Pune </strong> is
              essential.
            </p>

            <p className="d-flex flex-wrap justify-content-center align-items-center gap-2 text-dark">
              <MapPin className="text-primary" size={26} />
              <span>
                At <strong>ASQUARE Academy – Viman Nagar, </strong>
               our NEET programs are designed to build strong fundamentals, improve speed & accuracy, and ensure exam readiness through sustained practice and analytics.
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
              Course Details (NEET UG) - Top NEET Coaching Classes in Viman Nagar
            </h3>

            <p className="fs-5">
              <strong>NEET UG</strong> is the gateway to top medical colleges
              across India offering{" "}
              <strong>MBBS, BDS, BAMS, BHMS, and other allied courses.</strong>
            </p>
            <p className="fs-5">
              At <strong>ASQUARE Academy Viman Nagar,</strong> our NEET programs are
              designed to build strong fundamentals, improve speed and accuracy,
              and ensure exam readiness through sustained practice and
              analytics.
            </p>
            <p className="fs-5">
              We are among the{" "}
              <strong>Top NEET Coaching Institutes in Viman Nagar Pune, </strong>
              known for high student success and experienced faculty.
            </p>

            <h4 className="fw-bold text-primary-emphasis mt-5 fs-3">
              Subjects Covered in NEET Classes at Viman Nagar
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
              Program Duration and Batch Options — NEET Preparation in Viman Nagar
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
              Best NEET Coaching in Viman Nagar, Pune
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
              ASQUARE Academy Viman Nagar has consistently delivered strong NEET results with students securing seats in{" "}
              <strong className="text-primary">
                ASQUARE Academy – Viman Nagar{" "}
              </strong>
              <strong>
                AIIMS, government medical colleges, and top private institutions.
              </strong>
              Parents and students recognise ASQUARE as one of the{" "}
              <strong>top NEET coaching classes in Pune.</strong>
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
                  the best NEET training institute in Viman Nagar and PCMC.
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
              Top NEET Coaching Institutes in Viman Nagar.
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
              ASQUARE Academy –The Best NEET Coaching Classes in Viman Nagar, Pune
            </span>
          </h2>

          {/* Description */}
          <div className="mx-auto mb-5">
            <p className="lead text-secondary mb-3">
              Get started with the {" "}
              <strong> best NEET coaching in Viman Nagar, Pune. </strong>
              With expert faculty, structured study plans, and proven results, ASQUARE Academy is your trusted choice for NEET preparation.
            </p>

            <p className="d-flex flex-wrap justify-content-center align-items-center gap-2 text-dark">
              <MapPin className="text-primary" size={22} />
              <span>
                 Conveniently located for students from{" "}
                <strong>
                  Viman Nagar, Kalyani Nagar, Vadgaon Sheri, Lohegaon, Kharadi, Yerawada, Nagar Road, Kondhwa, Magarpatta City, and Hadapsar.
                </strong>
              </span>
            </p>
          </div>

          {/* Subheading */}
          <h4 className="fw-bold text-primary mb-4">
            Limited seats available – Enroll today!
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

export default NEETVimanNagar;
