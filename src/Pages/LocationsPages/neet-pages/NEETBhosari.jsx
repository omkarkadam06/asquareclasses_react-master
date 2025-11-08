import React, { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import locationBGImage from "../../../Assets/locationPageImages/neet/NEET slider PC.jpeg";
import MobileBGImage from "../../../Assets/locationPageImages/neet/NEET slider mobile.jpeg";
import image1 from "../../../Assets/locationPageImages/neet/NEET Page 17.jpeg";
import image2 from "../../../Assets/locationPageImages/neet/NEET Page 7.jpeg";
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

function NEETBhosari() {
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
    title: "Specialized Faculty",
    description: "Expert mentors in Physics, Chemistry, and Biology dedicated to your NEET journey.",
  },
  {
    Icon: BookOpen,
    title: "In-depth Syllabus Coverage",
    description: "NCERT-first approach enriched with intensive NEET-level training.",
  },
  {
    Icon: Target,
    title: "Small Batch Sizes",
    description: "Personalized attention, better doubt resolution, and an enhanced learning environment.",
  },
  {
    Icon: BarChart,
    title: "Frequent Evaluations",
    description: "Weekly tests, full-length mock exams, and detailed performance tracking.",
  },
  {
    Icon: Calendar,
    title: "Flexible Delivery Modes",
    description: "Classroom-based and online NEET coaching available.",
  },
  {
    Icon: Users,
    title: "Continuous Support",
    description: "Helps you balance NEET prep alongside school and other exams.",
  },
];

  const subjectsCovered = [
  {
    title: "Physics",
    desc: "Core concept building with intensive numerical problem-solving.",
  },
  {
    title: "Chemistry",
    desc: "Thorough instruction in Physical, Organic, and Inorganic Chemistry.",
  },
  {
    title: "Biology",
    desc: "NCERT-aligned content, rich in diagrams and high-yield topics.",
  },
];

  const programDurations = [
  {
    icon: Clock,
    title: "2-Year Program (Class 11 → 12)",
    desc: "Ideal for building strong foundations and NEET readiness over time.",
  },
  {
    icon: Target,
    title: "1-Year Target Course (Class 12)",
    desc: "Fast-paced curriculum focused on exam preparation and mock test series.",
  },
  {
    icon: School,
    title: "Crash Course",
    desc: "2–3 month high-intensity sprint with PYQs, strategies, and extensive practice.",
  },
  {
    icon: CalendarSync,
    title: "Repeater/Dropper Batch",
    desc: "One-year revision-focused course for aspirants preparing to improve their scores.",
  },
];

  const methodologySteps = [
  {
    Icon: Lightbulb,
    title: "Interactive Sessions",
    description: "Interactive classroom sessions for clarity in concepts.",
  },
  {
    Icon: BookOpen,
    title: "Practice",
    description: "Chapter-wise practice assignments, quizzes, and DPPs.",
  },
  {
    Icon: BarChart,
    title: "Assess",
    description: "Regular mock tests and thorough analysis.",
  },
  {
    Icon: MessageCircle,
    title: "Doubt-Clearing",
    description: "Personalized doubt-clearing sessions and one-on-one mentoring.",
  },
  {
    Icon: Calendar,
    title: "Performance Tracking",
    description: "Monthly performance tracking with feedback and improvement plans.",
  },
];

  const faqData = [
  {
    q: "Who can join NEET coaching at ASQUARE?",
    a: "Students currently in Class XI, Class XII, or repeat-year aspirants are all welcome.",
  },
  {
    q: "Which subjects are included?",
    a: "Complete NEET (UG) syllabus — Physics, Chemistry, and Biology.",
  },
  {
    q: "Are mock exams part of the program?",
    a: "Yes — chapter-wise assessments, regular part tests, and full-length mock exams with analytics are all included.",
  },
  {
    q: "What batch formats are offered?",
    a: "We offer 2-year integrated, 1-year target, 2–3 month crash, and 1-year repeater/dropper options.",
  },
  {
    q: "How large are the coaching batches?",
    a: "Batches remain small to provide effective learning and quicker doubt resolution.",
  },
  {
    q: "Do parents receive regular updates?",
    a: "Yes — detailed reports and periodic parent-teacher meetings are part of our process.",
  },
  {
    q: "Where is ASQUARE Academy – Bhosari located?",
    a: "Exact timings and detailed location information are provided during counselling sessions and admissions.",
  },
];

const gridFeatures = [
  {
    Icon: Users,
    title: "Small batch size ensures focused teaching",
    colorClass: "bg-gradient-blue",
  },
  {
    Icon: BookOpen,
    title: "Updated and dual-format study materials (printed & digital)",
    colorClass: "bg-gradient-purple",
  },
  {
    Icon: Award,
    title: "Parent–student performance reviews and regular PTMs",
    colorClass: "bg-gradient-green",
  },
  {
    Icon: ChartSpline,
    title: "Workshops on time management, accuracy, and test-taking strategies",
    colorClass: "bg-gradient-orange",
  },
  {
    Icon: TrendingUp,
    title: "A trusted name in NEET coaching in Bhosari, PCMC & Pune, known for consistent results",
    colorClass: "bg-gradient-red",
  },
  {
    Icon: BarChart,
    title: "Online support and digital resources for flexible learning",
    colorClass: "bg-gradient-pink",
  },
];

  return (
    <>
      <Helmet>
        <title>
          NEET Coaching Classes in Bhosari Pune | Best NEET Institute | ASQUARE Academy
        </title>
        <meta
          name="title"
          content="NEET Coaching Classes in Bhosari Pune | Best NEET Institute | ASQUARE Academy"
        />
        <meta
          name="description"
          content="Join ASQUARE Academy for the best NEET coaching classes in Bhosari Pune. Small batches, expert faculty, mock exams & advanced NEET preparation programs for all aspirants."
        />
        <meta
          name="keywords"
          content="NEET coaching classes in bhosari Best NEET Coaching in bhosari Top NEET Coaching Classes bhosari NEET Advanced Preparation bhosari NEET Classes in bhosari Best NEET Classes in bhosari Top NEET Classes in bhosari "
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{`
        {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-bhosari-pune/#localbusiness",
      "name": "ASQUARE Academy Bhosari Pune",
      "url": "https://www.asquareclasses.com/neet-coaching-classes-institute-bhosari-pune/",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "description": "ASQUARE Academy offers top NEET coaching classes in Bhosari Pune with small batches, expert mentors, and advanced NEET preparation programs.",
      "telephone": "9766118877",
      "priceRange": "₹₹",
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune"
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Bhosari, Pune, Maharashtra",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411039",
        "addressCountry": "IN"
      },
      "openingHours": "Mo-Su 08:00-20:00"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-bhosari-pune/#webpage",
      "url": "https://www.asquareclasses.com/neet-coaching-classes-institute-bhosari-pune/",
      "name": "NEET Coaching Classes in Bhosari Pune | ASQUARE Academy",
      "description": "Join ASQUARE Academy’s NEET coaching classes in Bhosari Pune for structured study plans, expert faculty, and advanced NEET preparation.",
      "inLanguage": "en-IN",
      "isPartOf": {
        "@id": "https://www.asquareclasses.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-bhosari-pune/#breadcrumb"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-bhosari-pune/#breadcrumb",
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
          "name": "NEET Coaching Bhosari",
          "item": "https://www.asquareclasses.com/neet-coaching-classes-institute-bhosari-pune/"
        }
      ]
    },
    {
      "@type": "EducationalOccupationalProgram",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-bhosari-pune/#educational",
      "name": "NEET Coaching Classes in Bhosari Pune",
      "provider": {
        "@type": "Organization",
        "name": "ASQUARE Academy",
        "sameAs": "https://www.asquareclasses.com/"
      },
      "educationalCredentialAwarded": "NEET Preparation Program",
      "timeToComplete": "P1Y",
      "hasCourse": {
        "@type": "Course",
        "name": "Comprehensive NEET Preparation",
        "description": "Covers Physics, Chemistry, and Biology with detailed tests, analytics, and personalized mentorship for NEET aspirants."
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-bhosari-pune/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can join NEET coaching at ASQUARE?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students currently in Class XI, Class XII, or repeat-year aspirants are all welcome."
          }
        },
        {
          "@type": "Question",
          "name": "Which subjects are included?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Complete NEET (UG) syllabus — Physics, Chemistry, and Biology."
          }
        },
        {
          "@type": "Question",
          "name": "Are mock exams part of the program?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — chapter-wise assessments, part tests, and full-length mock exams with analytics are included."
          }
        },
        {
          "@type": "Question",
          "name": "What batch formats are offered?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer 2-year integrated, 1-year target, 2–3 month crash, and 1-year repeater/dropper batches."
          }
        },
        {
          "@type": "Question",
          "name": "How large are the coaching batches?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Batches are small to ensure effective learning, better focus, and quicker doubt resolution."
          }
        },
        {
          "@type": "Question",
          "name": "Do parents receive regular updates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — detailed reports and periodic parent-teacher meetings keep parents informed about student progress."
          }
        },
        {
          "@type": "Question",
          "name": "Where is ASQUARE Academy – Bhosari located?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE Academy Bhosari is conveniently located in Pune; detailed address and timings are shared during counselling sessions."
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
                ASQUARE Academy, Best NEET Coaching & Advanced Preparation in Bhosari
                </span>
              </h1>
              <p className="fs-5 text-white mb-3 lh">
                Cracking NEET UG requires precision, robust fundamentals, and consistent practice.
                At <strong> ASQUARE Academy, </strong>
                our <strong> NEET coaching classes in Bhosari, Pune </strong>
                 are meticulously crafted to boost your concepts, sharpen strategies, and elevate performance. Widely recognized as one of the{" "}
                <strong> Best NEET Coaching Institutes in Bhosari, </strong>  we deliver structured learning, personalized mentorship, and proven results for every aspirant.
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
                     Bhosari, Akurdi, Nigdi, Chinchwad, Pimpri, Ravet, Pradhikaran, and across the PCMC (Pimpri-Chinchwad Municipal Corporation) region{" "}
                  </strong>
                  and nearby areas choose us for our expert faculty, proven success, and personalized mentoring.
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
                Best NEET Coaching in Bhosari?
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
            <span> ASQUARE Academy Bhosari</span>
          </h2>

          {/* Description */}
          <div className="mx-auto mb-5">
            <p className="lead text-secondary mb-3">
              The<strong> NEET course at ASQUARE Academy, Bhosari, </strong>
              provides a step-by-step approach to mastering NEET concepts. Our expert faculty ensures that every student understands the theory, practices problem-solving, and applies knowledge effectively under exam conditions.
            </p>

            <p className="d-flex flex-wrap justify-content-center align-items-center gap-2 text-dark">
              <MapPin className="text-primary" size={26} />
              <span>
                Students from
                <strong>
                  {" "}
                  Bhosari, Akurdi, Nigdi, Chinchwad, Pimpri, Ravet, Pradhikaran, and across the PCMC (Pimpri-Chinchwad Municipal Corporation) region{" "}
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
              Course Details (NEET UG) - Top NEET Coaching Classes in Bhosari
            </h3>

            <p className="fs-5">
              <strong>NEET UG</strong> is India’s national entrance test for{" "}
              <strong>
                MBBS, BDS, BAMS, BHMS, and allied medical programs.
              </strong>
              At <strong> ASQUARE Academy Bhosari,</strong>
             our curriculum focuses on building a solid conceptual base while ensuring complete exam readiness through mock tests and performance tracking.
            </p>
            <p className="fs-5">
              Our consistent results make ASQUARE one of the{" "}
              <strong> Top NEET Coaching Institutes in Bhosari Pune and PCMC. </strong>
            </p>
            <h4 className="fw-bold text-primary-emphasis mt-5 fs-3">
              Subjects Covered in NEET Classes at Bhosari
            </h4>

            <div className="mt-4">
              {subjectsCovered.map((subject, i) => (
                <SubjectCard key={i} {...subject} />
              ))}
            </div>

            <p className="fs-5">
              Our <strong> NEET Coaching in Bhosari Pune </strong>ensures holistic preparation and exam-oriented accuracy.
            </p>
          </div>

          {/* Right Column - Blue */}
          <div className="col-lg-6 p-5 p-lg-5 text-white lg-b-bg-b">
            <h5 className="fw-bold text-warning mb-4 fs-1">
              Program Duration and Batch Options — NEET Preparation in Bhosari
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
              Best NEET Coaching in Bhosari,
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
                AIIMS, BJMC, AFMC, and DY Patil Medical College Pune.{" "}
              </strong>
              Our disciplined approach, expert teaching, and consistent mock testing make us the
              <strong> Top NEET coaching centres in Bhosari and the entire PCMC area. </strong>
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
                  Best NEET Training Institutes in Bhosari PCMC.
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
              Top NEET Coaching Institutes in Bhosari.
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
            Join <span> ASQUARE Academy – Today </span>
          </h2>

          {/* Description */}
          <div className="mx-auto mb-5">
            <p className="lead text-secondary mb-3">
              Experience the {" "}
              <strong> best NEET coaching classes in Bhosari, Pune. </strong>
            With expert faculty, systematic planning, and continuous support, ASQUARE Academy is your dedicated partner in NEET success.
            </p>

            <p className="d-flex flex-wrap justify-content-center align-items-center gap-2 text-dark">
              <MapPin className="text-primary" size={22} />
              <span>
                Conveniently located for students from{" "}
                <strong>
                  {" "}Bhosari, Akurdi, Nigdi, Chinchwad, Pimpri, Ravet, Pradhikaran, and across the PCMC (Pimpri-Chinchwad Municipal Corporation) region.
                </strong>
              </span>
            </p>
          </div>

          {/* Subheading */}
          <h4 className="fw-bold text-primary mb-4">
             Enroll Now – Limited seats available!
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

export default NEETBhosari;
