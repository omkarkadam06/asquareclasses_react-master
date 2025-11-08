import React, { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import locationBGImage from "../../../Assets/locationPageImages/neet/NEET slider PC3.jpeg";
import MobileBGImage from "../../../Assets/locationPageImages/neet/NEET slider mobile3.jpeg";
import image1 from "../../../Assets/locationPageImages/neet/NEET Page 15.jpeg";
import image2 from "../../../Assets/locationPageImages/neet/NEET Page 9.jpeg";
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

function NEETChakan() {
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
    description: "Skilled educators delivering focused guidance across Physics, Chemistry, and Biology.",
  },
  {
    Icon: BookOpen,
    title: "NCERT-Strong Curriculum",
    description: "Built on NCERT essentials, enhanced with advanced NEET-level learning modules.",
  },
  {
    Icon: Target,
    title: "Personalized Learning Environment",
    description: "Small batch formats ensure thorough doubt clearance and sustained attention.",
  },
  {
    Icon: BarChart,
    title: "Regular Performance Tracking",
    description: "Weekly revision tests, full-length mock series, and analytical performance feedback.",
  },
  {
    Icon: Calendar,
    title: "Flexible Study Modes",
    description: "Choose between in-person classroom sessions or digital online coaching.",
  },
  {
    Icon: Users,
    title: "Holistic Support System",
    description: "Ongoing guidance for both NEET and board examination preparation.",
  },
];

  const subjectsCovered = [
  {
    title: "Physics",
    desc: "Strengthen foundational understanding with systematic numerical problem-solving practice.",
  },
  {
    title: "Chemistry",
    desc: "Comprehensive instruction in Physical, Organic, and Inorganic branches with NEET-specific focus.",
  },
  {
    title: "Biology",
    desc: "NCERT-aligned learning with in-depth diagrams, topic-level scoring strategies, and exam grip.",
  },
];

  const programDurations = [
  {
    icon: Clock,
    title: "2-Year Integrated Course (Class 11 → 12)",
    desc: "Build strong foundations and progress through advanced NEET topics.",
  },
  {
    icon: Target,
    title: "1-Year Target Course (Class 12)",
    desc: "Fast-track preparation packed with mock series and topic-wise revision.",
  },
  {
    icon: School,
    title: "Crash Course",
    desc: "2–3 month intensive preparation featuring previous-year questions (PYQs) and mock drills.",
  },
  {
    icon: CalendarSync,
    title: "Dropper/Repeater Batch",
    desc: "Year-long personalized coaching for repeat aspirants aiming to improve NEET performance.",
  },
];

  const methodologySteps = [
  {
    Icon: Lightbulb,
    title: "Learn",
    description: "Concept-driven interactive lectures for clarity and retention.",
  },
  {
    Icon: BookOpen,
    title: "Practice",
    description: "Daily Practice Problems (DPPs) and structured assignments for mastery.",
  },
  {
    Icon: BarChart,
    title: "Assess",
    description: "Chapter-wise assessments and full-length mock tests with analysis.",
  },
  {
    Icon: MessageCircle,
    title: "Doubt Resolution",
    description: "Individual doubt resolution with experienced mentors.",
  },
  {
    Icon: Calendar,
    title: "Performance Review",
    description: "Continuous performance review and parent feedback sessions.",
  },
];

  const faqData = [
  {
    q: "Who can enroll in NEET coaching at ASQUARE?",
    a: "Students in Class XI, Class XII, and dropper aspirants preparing for NEET UG.",
  },
  {
    q: "What subjects are taught for NEET preparation?",
    a: "Full syllabus coverage of Physics, Chemistry, and Biology.",
  },
  {
    q: "Are mock test series part of the coursework?",
    a: "Yes—includes chapter-wise tests, weekly part-tests, and full-length mock exams with performance insights.",
  },
  {
    q: "What course durations are available?",
    a: "We offer 2-year integrated, 1-year target, 2–3 month crash, and 1-year repeater/dropper programs.",
  },
  {
    q: "Do batches remain small?",
    a: "Yes—small sizes ensure personalized coaching and efficient doubt redressal.",
  },
  {
    q: "How are parents kept informed of progress?",
    a: "Through detailed performance reports and scheduled parent–teacher meetings.",
  },
  {
    q: "Are online coaching options available?",
    a: "Yes—students can choose between classroom and online modalities.",
  },
];

const gridFeatures = [
  {
    Icon: Users,
    title: "Limited-size batches for tailored teaching",
    colorClass: "bg-gradient-blue",
  },
  {
    Icon: BookOpen,
    title: "Updated, dual-mode study materials (printed and digital)",
    colorClass: "bg-gradient-purple",
  },
  {
    Icon: Calendar,
    title: "Parent–teacher meetings for transparent tracking of progress",
    colorClass: "bg-gradient-green",
  },
  {
    Icon: Award,
    title: "Workshops focused on time management, accuracy, and exam psychology",
    colorClass: "bg-gradient-orange",
  },
  {
    Icon: TrendingUp,
    title: "Recognised as one of the leading NEET coaching centers in Chakan, Talegaon, and PCMC",
    colorClass: "bg-gradient-red",
  },
  {
    Icon: BarChart,
    title: "Performance analytics and progress tracking via online test platform",
    colorClass: "bg-gradient-teal",
  },
];

  return (
    <>
      <Helmet>
        <title>
          Best NEET Coaching Classes in Chakan Pune | Top NEET Preparation – ASQUARE Academy
        </title>
        <meta
          name="title"
          content="Best NEET Coaching Classes in Chakan Pune | Top NEET Preparation – ASQUARE Academy"
        />
        <meta
          name="description"
          content="Join ASQUARE Academy for top NEET Coaching Classes in Chakan Pune. Expert mentors, mock tests & small batches for NEET aspirants aiming for medical success."
        />
        <meta
          name="keywords"
          content="NEET coaching classes in chakan pune Best NEET Coaching in chakan pune Top NEET Coaching Classes chakan pune NEET Advanced Preparation chakan pune NEET Classes in chakan pune Best NEET Classes in chakan pune Top NEET Classes in chakan pune"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{`
        {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-chakan-pune/#localbusiness",
      "name": "ASQUARE Academy - NEET Coaching Chakan Pune",
      "description": "ASQUARE Academy provides the best NEET Coaching Classes in Chakan Pune with expert faculty, mock tests, and personalized mentoring for medical aspirants.",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "telephone": "+91-9766118877",
      "url": "https://www.asquareclasses.com/neet-coaching-classes-institute-chakan-pune/",
      "priceRange": "₹₹",
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Chakan, Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "410501",
        "addressCountry": "IN"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-chakan-pune/#webpage",
      "url": "https://www.asquareclasses.com/neet-coaching-classes-institute-chakan-pune/",
      "name": "NEET Coaching Classes in Chakan Pune – ASQUARE Academy",
      "description": "Join ASQUARE Academy for expert NEET coaching in Chakan Pune. Structured syllabus, mock tests, and experienced faculty for top NEET preparation.",
      "inLanguage": "en-IN"
    },
    {
      "@type": "EducationalOrganization",
      "name": "ASQUARE Academy",
      "url": "https://www.asquareclasses.com/",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9766118877",
        "contactType": "Admissions",
        "areaServed": "IN"
      },
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune"
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
          "name": "NEET Coaching Classes in Chakan Pune",
          "item": "https://www.asquareclasses.com/neet-coaching-classes-institute-chakan-pune/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can enroll in NEET coaching at ASQUARE?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students in Class XI, Class XII, and dropper aspirants preparing for NEET UG can enroll at ASQUARE Academy Chakan."
          }
        },
        {
          "@type": "Question",
          "name": "What subjects are taught for NEET preparation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our NEET coaching covers the complete syllabus of Physics, Chemistry, and Biology."
          }
        },
        {
          "@type": "Question",
          "name": "Are mock test series part of the coursework?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, mock series include chapter-wise tests, weekly part-tests, and full-length NEET simulations with performance analysis."
          }
        },
        {
          "@type": "Question",
          "name": "What course durations are available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE offers 2-year integrated, 1-year target, crash (2–3 month), and repeater/dropper NEET programs."
          }
        },
        {
          "@type": "Question",
          "name": "Do batches remain small?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we maintain small batch sizes for focused learning and quick doubt resolution."
          }
        },
        {
          "@type": "Question",
          "name": "How are parents kept informed of progress?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Parents receive detailed progress reports and are invited for scheduled PTMs at ASQUARE Chakan."
          }
        },
        {
          "@type": "Question",
          "name": "Are online coaching options available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, students can opt for flexible online or classroom NEET coaching at ASQUARE Academy Chakan Pune."
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
                Crack NEET with {" "}
                <span className="gradient-text-yellow d-inline-block">
                ASQUARE Academy – Best NEET Coaching & Advanced Classes in Chakan Pune
                </span>
              </h1>
              <p className="fs-5 text-white mb-3 lh">
                Searching for the <strong> best NEET coaching classes in Chakan, Pune? </strong> At
                 <strong> ASQUARE Academy, </strong>
                 we specialize in providing structured NEET UG preparation with clarity, consistency, and confidence.
                 <strong> NEET coaching classes in Chakan, Pune </strong> are tailored to build your strengths, sharpen your strategy, and ensure top-tier performance. Recognized as one of the <strong> best NEET coaching institutes in Pune, </strong>we offer structured programs, personalized mentorship, and proven results.
              </p>
              <div className="hero-location-info d-flex align-items-start gap-3">
                <MapPin
                  size={24}
                  color="#FFCB03"
                  className="flex-shrink-0 mt-1"
                />
                <span className="text-white">
                  Trusted by students across
                  <strong>
                    {" "}
                     Chakan, Talegaon, Hinjewadi, Ranjangaon, Pimpri, Wakad, and surrounding areas,{" "}
                  </strong>
                  we combine expert teaching, mock-driven practice, and personal mentoring to help you earn your medical seat.
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
                Best NEET Coaching in Chakan?
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
                  Our holistic approach ensures that students gain strong subject mastery, accuracy, and exam confidence.
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
            <span> ASQUARE Academy Chakan</span>
          </h2>

          {/* Description */}
          <div className="mx-auto mb-5">
            <p className="lead text-secondary mb-3">
              The<strong> NEET course at ASQUARE Academy, Chakan, </strong>
              provides a step-by-step approach to mastering NEET concepts. Our expert faculty ensures that every student understands the theory, practices problem-solving, and applies knowledge effectively under exam conditions.
            </p>

            <p className="d-flex flex-wrap justify-content-center align-items-center gap-2 text-dark">
              <MapPin className="text-primary" size={26} />
              <span>
                Students from
                <strong>
                  {" "}
                  Chakan, Talegaon, Hinjewadi, Ranjangaon, Wakad, Pimpri, and the broader Pimpri-Chinchwad (PCMC) region. {" "}
                </strong>
                benefit from our consistent test schedule, personalized mentoring, and comprehensive NEET syllabus coverage.{" "}
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
              Course Details (NEET UG) - Top NEET Coaching Classes in Chakan
            </h3>

            <p className="fs-5">
              <strong>NEET UG</strong> is India’s national entrance test for{" "}
              <strong>
                MBBS, BDS, BAMS, BHMS, and allied medical programs.
              </strong>
              At <strong> ASQUARE Academy Chakan,</strong>
             our curriculum focuses on building a solid conceptual base while ensuring complete exam readiness through mock tests and performance tracking.
            </p>
            <p className="fs-5">
              Our consistent results make ASQUARE one of the{" "}
              <strong> Top NEET Coaching Institutes in Chakan Pune and PCMC. </strong>
            </p>
            <h4 className="fw-bold text-primary-emphasis mt-5 fs-3">
              Subjects Covered in NEET Classes at Chakan
            </h4>

            <div className="mt-4">
              {subjectsCovered.map((subject, i) => (
                <SubjectCard key={i} {...subject} />
              ))}
            </div>

            <p className="fs-5">
              Our <strong> NEET Coaching in Chakan Pune </strong>ensures holistic preparation and exam-oriented accuracy.
            </p>
          </div>

          {/* Right Column - Blue */}
          <div className="col-lg-6 p-5 p-lg-5 text-white lg-b-bg-b">
            <h5 className="fw-bold text-warning mb-4 fs-1">
              Program Duration and Batch Options — NEET Preparation in Chakan
            </h5>

            <div className="d-flex flex-column gap-4">
              {programDurations.map((program, i) => (
                <ProgramCard key={i} {...program} />
              ))}
            </div>

            <div className="mt-5 p-4 rounded-4 border border-warning border-opacity-50 bg-brown">
              <p className="fs-5 mb-0">
                All batches are tailored to help students achieve the highest level of preparedness before NEET-UG.
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
              Best NEET Coaching in Chakan,
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
              our students have consistently achieved top ranks in NEET, earning admission to premier colleges such as {" "}
              <strong className="text-primary">
                AIIMS, state medical colleges, and prestigious private institutions.{" "}
              </strong>
              Our disciplined approach, expert teaching, and consistent mock testing make us the
              <strong> premier NEET institutes in Chakan and nearby Pune regions. </strong>
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
                This unique four-step methodology has helped ASQUARE become one of the {" "}
                <strong>
                  Best NEET Training Institutes in Chakan PCMC.
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
              Top NEET Coaching Institutes in Chakan.
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
            Begin Your NEET Journey with <span>  ASQUARE Academy – Chakan </span>
          </h2>

          {/* Description */}
          <div className="mx-auto mb-5">
            <p className="lead text-secondary mb-3">
              If you're seeking the best {" "}
              <strong> NEET coaching classes in Chakan, Pune, </strong>
             ASQUARE Academy offers the perfect blend of effective instruction, strategic practice, and measurable outcomes.
            </p>

            <p className="d-flex flex-wrap justify-content-center align-items-center gap-2 text-dark">
              <MapPin className="text-primary" size={22} />
              <span>
                Easily accessible from {" "}
                <strong>
                  {" "}Chakan, Talegaon, Hinjewadi, Ranjangaon, Wakad, Pimpri, and the broader Pimpri-Chinchwad (PCMC) region.
                </strong>
              </span>
            </p>
          </div>

          {/* Subheading */}
          <h4 className="fw-bold text-primary mb-4">
             Enroll Now — Spaces are Limited!
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

export default NEETChakan;
