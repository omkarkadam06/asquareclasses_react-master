import React, { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import locationBGImage from "../../../Assets/locationPageImages/neet/NEET slider PC2.jpeg";
import MobileBGImage from "../../../Assets/locationPageImages/neet/NEET slider mobile2.jpeg";
import image1 from "../../../Assets/locationPageImages/neet/NEET Page 2.jpeg";
import image2 from "../../../Assets/locationPageImages/neet/NEET Page 15.jpeg";
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

function BestNEETPune() {
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
    description:
      "Industry experts and NEET mentors for Physics, Chemistry, and Biology.",
  },
  {
    Icon: BookOpen,
    title: "Structured Curriculum",
    description:
      "NCERT-based NEET syllabus with advanced-level question practice.",
  },
  {
    Icon: Target,
    title: "Personalized Learning",
    description:
      "Small batches for focused attention and individual progress tracking.",
  },
  {
    Icon: BarChart,
    title: "Regular Testing",
    description:
      "Weekly tests, monthly mocks, and chapter-wise assessments.",
  },
  {
    Icon: Calendar,
    title: "Flexible Learning Modes",
    description:
      "Classroom and online NEET Classes in Pune, Maharashtra.",
  },
  {
    Icon: School,
    title: "Board + NEET Integration",
    description:
      "Balanced schedule for both school boards and NEET exam preparation.",
  },
];

  const subjectsCovered = [
  {
    title: "Physics",
    desc: "Conceptual explanations with numerical problem-solving techniques.",
  },
  {
    title: "Chemistry",
    desc: "Complete Physical, Organic & Inorganic sections taught with NEET-level application.",
  },
  {
    title: "Biology",
    desc: "NCERT-based learning with emphasis on diagrams, terminologies, and previous year NEET questions.",
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
    description: "Conceptual teaching through interactive and visual sessions.",
  },
  {
    Icon: BookOpen,
    title: "Practice",
    description: "Daily assignments, worksheets, and DPPs for accuracy.",
  },
  {
    Icon: BarChart,
    title: "Assess",
    description: "Weekly and monthly mock tests with detailed evaluation.",
  },
  {
    Icon: MessageCircle,
    title: "Revise",
    description: "Targeted revision programs to strengthen weak topics before exams.",
  },
];

  const faqData = [
  {
    q: "What makes ASQUARE the best NEET coaching institute in Pune?",
    a: "Our expert faculty, small batches, structured testing, and strong results make ASQUARE one of the Top NEET Coaching Classes in Pune Maharashtra.",
  },
  {
    q: "Do you provide small batches for focused mentoring?",
    a: "Yes, all our batches are small to ensure personalized attention.",
  },
  {
    q: "Which nearby areas do students join from?",
    a: "Students join from Hadapsar, Viman Nagar, Kothrud, Camp, Kondhwa, Vishrantwadi, Pimpri, Chinchwad, Wanowrie and Undri.",
  },
  {
    q: "Do you offer online NEET classes in Pune?",
    a: "Yes—students can opt for classroom or Online NEET Coaching in Pune Maharashtra for convenience.",
  },
  {
    q: "How is student performance tracked?",
    a: "We use a detailed evaluation system with weekly tests, monthly mock exams, and feedback reports shared with parents.",
  },
];

  const gridFeatures = [
  {
    Icon: Users,
    title: "Experienced NEET mentors and subject experts",
    colorClass: "bg-gradient-blue",
  },
  {
    Icon: BookOpen,
    title: "Comprehensive printed and digital study material",
    colorClass: "bg-gradient-purple",
  },
  {
    Icon: ChartSpline,
    title: "Weekly performance tracking and PTMs",
    colorClass: "bg-gradient-green",
  },
  {
    Icon: BarChart,
    title: "Special sessions on exam strategies & speed management",
    colorClass: "bg-gradient-orange",
  },
  {
    Icon: Award,
    title: "Access to online test portal with detailed reports and ranks",
    colorClass: "bg-gradient-red",
  },
  {
    Icon: MapPin,
    title: "Proven results across Hadapsar, Viman Nagar, Camp, Kothrud, Pimpri-Chinchwad, and Kondhwa",
    colorClass: "bg-gradient-pink",
  },
];

  return (
    <>
      <Helmet>
        <title>
          Best NEET Coaching & Classes in Pune Maharashtra | Top NEET Institute
        </title>
        <meta
          name="title"
          content="Best NEET Coaching & Classes in Pune Maharashtra | Top NEET Institute"
        />
        <meta
          name="description"
          content="Join the best NEET Coaching & Classes in Pune Maharashtra. Small batches, expert faculty & mock tests for top results. ASQUARE Academy."
        />
        <meta
          name="keywords"
          content="NEET coaching classes in Pune Best NEET Coaching in Pune Top NEET Coaching Classes Pune NEET Advanced Preparation Pune NEET Classes in Pune Best NEET Classes in Pune Top NEET Classes in Pune"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{`
        {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": "https://www.asquareclasses.com/best-neet-coaching-classes-Institute-in-pune-maharashtra#organization",
      "name": "ASQUARE Academy",
      "url": "https://www.asquareclasses.com/best-neet-coaching-classes-Institute-in-pune-maharashtra",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "telephone": "+91-9766118877",
      "sameAs": [
        "https://www.facebook.com/asquareclasses",
        "https://www.instagram.com/asquareclasses"
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Pune",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411001",
        "addressCountry": "IN"
      },
      "description": "Best NEET Coaching & Classes in Pune Maharashtra with expert teachers, mock exams, and personalized mentorship. ASQUARE Academy.",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9766118877",
        "contactType": "Customer Service",
        "areaServed": "IN"
      }
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/best-neet-coaching-classes-Institute-in-pune-maharashtra#localbusiness",
      "name": "Best NEET Coaching & Classes in Pune Maharashtra - ASQUARE Academy",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "telephone": "+91-9766118877",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Pune",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411001",
        "addressCountry": "IN"
      },
      "openingHours": "Mo-Sa 09:00-19:00",
      "url": "https://www.asquareclasses.com/best-neet-coaching-classes-Institute-in-pune-maharashtra",
      "description": "Best NEET Coaching & Classes in Pune Maharashtra offering small batches, expert mentors, and mock exams for success. ASQUARE Academy."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/best-neet-coaching-classes-Institute-in-pune-maharashtra#webpage",
      "url": "https://www.asquareclasses.com/best-neet-coaching-classes-Institute-in-pune-maharashtra",
      "name": "Best NEET Coaching & Classes in Pune Maharashtra",
      "description": "Join the best NEET Coaching & Classes in Pune Maharashtra. Expert faculty, mock tests & flexible batches for top NEET results. ASQUARE Academy.",
      "breadcrumb": {
        "@id": "https://www.asquareclasses.com/best-neet-coaching-classes-Institute-in-pune-maharashtra#breadcrumbs"
      },
      "publisher": {
        "@id": "https://www.asquareclasses.com/best-neet-coaching-classes-Institute-in-pune-maharashtra#organization"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.asquareclasses.com/best-neet-coaching-classes-Institute-in-pune-maharashtra#breadcrumbs",
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
          "name": "Best NEET Coaching & Classes in Pune Maharashtra",
          "item": "https://www.asquareclasses.com/best-neet-coaching-classes-Institute-in-pune-maharashtra"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.asquareclasses.com/best-neet-coaching-classes-Institute-in-pune-maharashtra#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What makes ASQUARE the best NEET coaching institute in Pune?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our expert faculty, small batches, structured testing, and strong results make ASQUARE one of the Top NEET Coaching Classes in Pune Maharashtra."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide small batches for focused mentoring?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, all our batches are small to ensure personalized attention."
          }
        },
        {
          "@type": "Question",
          "name": "Which nearby areas do students join from?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students join from Hadapsar, Viman Nagar, Kothrud, Camp, Kondhwa, Vishrantwadi, Pimpri, Chinchwad, Wanowrie, and Undri."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer online NEET classes in Pune?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes—students can opt for classroom or Online NEET Coaching in Pune Maharashtra for convenience."
          }
        },
        {
          "@type": "Question",
          "name": "How is student performance tracked?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We use a detailed evaluation system with weekly tests, monthly mock exams, and feedback reports shared with parents."
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
                Crack{" "}
                <span className="gradient-text-yellow d-inline-block">
                   NEET with Expert Guidance at ASQUARE Academy, Pune
                </span>
              </h1>
              <p className="fs-5 text-white mb-3 lh">
                Looking for reliable 
                 <strong> NEET coaching classes in Pune, Maharashtra? At ASQUARE Academy, </strong>
                 we empower NEET aspirants to achieve top scores through expert faculty, personalized guidance and NCERT-based learning. As one of the
                <strong>
                  {" "}
                  Best NEET Coaching Institutes in Pune.
                </strong>
              </p>
              <div className="hero-location-info d-flex align-items-start gap-3">
                <MapPin
                  size={24}
                  color="#FFCB03"
                  className="flex-shrink-0 mt-1"
                />
                <span className="text-white">
                  <strong>ASQUARE has become a preferred choice for medical entrance preparation across</strong>{" "}
                  Hadapsar, Viman Nagar, Camp, Kothrud, Kondhwa, Pimpri-Chinchwad, Wanowrie and Undri.
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
                for NEET Preparation in Pune, Maharashtra?
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
                  ASQUARE is widely recognized as a Top NEET Coaching Institute in Pune, with proven success across major educational hubs like Hadapsar, Viman Nagar, Kothrud, Camp, and PCMC.
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
            <span> ASQUARE Academy Pune</span>
          </h2>

          {/* Description */}
          <div className="mx-auto mb-5">
            <p className="lead text-secondary mb-3">
            The <strong> NEET course at ASQUARE Academy, Pune </strong> is designed for aspirants who wish to master the NEET syllabus systematically. Our program covers all subjects 
            <strong> Physics, Chemistry, and Biology  </strong> with an emphasis on NCERT concepts, test-oriented learning, and performance-based feedback.
            </p>

            <p className="d-flex flex-wrap justify-content-center align-items-center gap-2 text-dark">
              <MapPin className="text-primary" size={26} />
              <span>
                Students from{" "}
                <strong>Kharadi, Hinjewadi, Baner, Undri, Kondhwa, Viman Nagar, Shivaji Nagar and Wanowrie </strong>
                also enroll in our programs for structured NEET training and result-driven preparation.
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
              Course Details (NEET UG) - Top NEET Coaching Classes in Pune
            </h3>

            <p className="fs-5">
              <strong>NEET UG</strong> is the national-level medical entrance examination for{" "}
              <strong>
                MBBS, BDS, BAMS, BHMS and BPT
              </strong>courses.
            </p>
            <p className="fs-5">
              Our <strong> NEET Coaching in Pune </strong>program ensures complete coverage of the syllabus, along with strategy-based preparation, time management practice, and smart question-solving techniques.
            </p>
            <p className="fs-5">
              ASQUARE’s proven track record makes it one of the {" "}
              <strong> Top NEET Training Institutes in Pune Maharashtra, </strong> 
              trusted by hundreds of students and parents every year.
            </p>

            <h4 className="fw-bold text-primary-emphasis mt-5 fs-3">
              Subjects Covered in NEET Classes in Pune
            </h4>

            <div className="mt-4">
              {subjectsCovered.map((subject, i) => (
                <SubjectCard key={i} {...subject} />
              ))}
            </div>

            <p className="fs-5">
              Our programs are popular among students from <strong>Hadapsar, Viman Nagar, Kothrud, Camp, Katraj and Chinchwad</strong>, making ASQUARE one of the Best NEET Classes near me for Pune residents.
            </p>
          </div>

          {/* Right Column - Blue */}
          <div className="col-lg-6 p-5 p-lg-5 text-white lg-b-bg-b">
            <h5 className="fw-bold text-warning mb-4 fs-1">
              Program Duration and Batch Options — NEET Preparation in Pune
            </h5>

            <div className="d-flex flex-column gap-4">
              {programDurations.map((program, i) => (
                <ProgramCard key={i} {...program} />
              ))}
            </div>

            <div className="mt-5 p-4 rounded-4 border border-warning border-opacity-50 bg-brown">
              <p className="fs-5 mb-0">
                Students from{" "}
                <strong className="text-warning">
                  Pimpri, Chinchwad, Kharadi, Katraj and Kondhwa
                </strong>{" "}
                also join our short-term and full-time NEET batches for focused training..
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
              Best NEET Coaching in Pune
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
              ASQUARE Academy’s NEET Success Stories
            </h4>
          </div>
          <div className="results-box-gradient">
            <p className="fs-5 text-dark mb-3 text-center">
              At{" "}
              <strong className="text-primary">ASQUARE Academy,</strong> students consistently secure admissions to top institutes like{" "}
              <strong> AIIMS, BJ Medical College, AFMC, and DY Patil Medical College Pune. </strong>
              Our personalized mentorship, disciplined mock test system, and goal-oriented study plan help students maximize their NEET scores and secure top ranks year after year.
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
                This teaching approach has helped ASQUARE become a {" "}
                <strong>
                  Top-Rated NEET Coaching Institute in Pune Maharashtra
                </strong>
                with consistent results.
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
              Top NEET Coaching Institutes in Pune.
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
            Enroll Now at {" "}
            <span>
              ASQUARE Academy – Pune, Maharashtra
            </span>
          </h2>

          {/* Description */}
          <div className="mx-auto mb-5">
            <p className="lead text-secondary mb-3">
              If you’re looking for{" "}
              <strong> Best NEET Coaching Classes in Pune, Maharashtra </strong>
              join ASQUARE Academy today. With experienced faculty, structured batches, and result-oriented guidance, we prepare every student to crack NEET with confidence.
            </p>

            <p className="d-flex flex-wrap justify-content-center align-items-center gap-2 text-dark">
              <MapPin className="text-primary" size={22} />
              <span>
                Convenient for students from{" "}
                <strong>
                  Hadapsar, Viman Nagar, Camp, Kothrud, Kondhwa, Vishrantwadi, Pimpri, Chinchwad, Wanowrie and Undri.
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

export default BestNEETPune;
