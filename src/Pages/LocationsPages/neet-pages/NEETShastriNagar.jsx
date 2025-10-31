import React, { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import locationBGImage from "../../../Assets/locationPageImages/neet/NEET slider PC6.jpeg";
import MobileBGImage from "../../../Assets/locationPageImages/neet/NEET slider mobile6.jpeg";
import image1 from "../../../Assets/locationPageImages/neet/NEET Page 10.jpeg";
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
  ChartSpline,
  BadgeQuestionMark,
  Award,
  TrendingUp
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

function NEETShastriNagar() {
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
    description: "Seasoned mentors specialize in Physics, Chemistry, and Biology.",
  },
  {
    Icon: BookOpen,
    title: "Strong Conceptual Foundation",
    description: "NCERT-aligned curriculum with advanced NEET-level training.",
  },
  {
    Icon: Target,
    title: "Small Batch Structure",
    description: "Ensures personalized attention and swift doubt clarification.",
  },
  {
    Icon: BarChart,
    title: "Consistent Assessments",
    description: "Weekly tests, mock exams, and comprehensive performance feedback.",
  },
  {
    Icon: Calendar,
    title: "Flexible Learning Structure",
    description: "Both offline and online batch options are available.",
  },
  {
    Icon: School,
    title: "Mentorship Support",
    description: "Guided preparation for both NEET and board exams.",
  },
];

const subjectsCovered = [
  {
    title: "Physics",
    desc: "Emphasis on core concepts and accuracy in numerical solving.",
  },
  {
    title: "Chemistry",
    desc: "Extensive coverage of Physical, Organic, and Inorganic Chemistry.",
  },
  {
    title: "Biology",
    desc: "Thorough NCERT-aligned coverage with diagrammatical and high-yield topics.",
  },
];

const programDurations = [
  {
    icon: Clock,
    title: "2-Year Integrated Program (Class 11–12):",
    desc: "Comprehensive preparation aligned to both NEET and board exams.",
  },
  {
    icon: Target,
    title: "1-Year Target Batch (Class 12):",
    desc: "Focused on Class 12 syllabus, with strategic Class 11 revision and mock series.",
  },
  {
    icon: CalendarSync,
    title: "Repeater/Dropper Batch:",
    desc: "Specialized for aspirants aiming to improve ranks with repeat preparation.",
  },
  {
    icon: School,
    title: "Crash Course:",
    desc: "Last-minute intense guidance with PYQs, formula revision, and mock-focused prep.",
  },
];

const methodologySteps = [
  {
    Icon: Lightbulb,
    title: "Learn",
    description: "Interactive lectures for deep understanding.",
  },
  {
    Icon: BookOpen,
    title: "Practice",
    description: "Regular DPPs and assignments for daily practice.",
  },
  {
    Icon: BarChart,
    title: "Assess",
    description: "Weekly chapter tests and full-length mocks for assessment.",
  },
  {
    Icon: MessageCircle,
    title: "Revise",
    description: "Targeted revision sessions and strategic exam guidance.",
  },
];

const faqData = [
  {
    q: "Who should join NEET coaching at ASQUARE?",
    a: "ASQUARE Academy’s NEET coaching is ideal for Class XI, XII, and drop-year students aiming to secure top ranks in NEET-UG with expert guidance and structured learning.",
  },
  {
    q: "Are there crash course programs?",
    a: "Yes—our short-term NEET crash courses focus on quick concept revision, intensive test practice, and exam-oriented preparation strategies.",
  },
  {
    q: "Do you have repeater batches?",
    a: "Yes—we offer dedicated repeater batches designed for NEET aspirants repeating the exam, with complete syllabus coverage and personalized mentoring.",
  },
  {
    q: "Is online coaching an option?",
    a: "Yes—students can choose between online or classroom coaching, ensuring flexible learning from anywhere without compromising on quality.",
  },
  {
    q: "How do you track progress?",
    a: "We conduct weekly tests, mock exams, and regular parent-teacher meetings to monitor student performance and suggest timely improvements.",
  },
  {
    q: "What study materials are provided?",
    a: "ASQUARE Academy provides updated study materials, topic-wise notes, and question banks aligned with the latest NEET syllabus and exam trends.",
  },
  {
    q: "Do you offer doubt-solving sessions?",
    a: "Yes—daily doubt-clearing sessions and one-on-one mentor interactions help students strengthen concepts and overcome learning gaps.",
  },
  {
    q: "What makes ASQUARE Academy the best for NEET coaching?",
    a: "Our expert faculty, proven teaching methods, personalized mentoring, and strong track record of NEET selections make us one of Pune’s top NEET institutes.",
  },
];

const gridFeatures = [
  {
    Icon: BookOpen,
    title: "Updated printed & digital materials aligned with NEET.",
    colorClass: "bg-gradient-blue",
  },
  {
    Icon: Users,
    title: "Structured doubt-clearing sessions.",
    colorClass: "bg-gradient-purple",
  },
  {
    Icon: ChartSpline,
    title: "Progress tracking through weekly reports and PTMs.",
    colorClass: "bg-gradient-green",
  },
  {
    Icon: BarChart,
    title: "Advanced analytics via online test dashboards.",
    colorClass: "bg-gradient-orange",
  },
  {
    Icon: TrendingUp,
    title: "Online test platform with detailed analytics",
    colorClass: "bg-gradient-teal",
  },
  {
    Icon: Award,
    title: "Time-management and exam mindset workshops for aspirants.",
    colorClass: "bg-gradient-red",
  },
];

  return (
    <>
      <Helmet>
        <title>
          Best NEET Coaching Classes in Shastri Nagar Pune | ASQUARE
        </title>
        <meta
          name="title"
          content="Best NEET Coaching Classes in Shastri Nagar Pune | ASQUARE"
        />
        <meta
          name="description"
          content="Join ASQUARE Academy for top NEET coaching in Shastri Nagar, Pune. Expert faculty, crash courses, repeater batches & online options for NEET aspirants."
        />
        <meta
          name="keywords"
          content="NEET coaching classes in shastri nagar pune Best NEET Coaching in shastri nagar pune Top NEET Coaching Classes shastri nagar pune NEET Advanced Preparation shastri nagar pune NEET Classes in shastri nagar pune Best NEET Classes in shastri nagar pune Top NEET Classes in shastri nagar pune"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{`
        {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "EducationalOrganization"],
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-shastri-nagar-pune",
      "name": "ASQUARE Academy - NEET Coaching Classes in Shastri Nagar Pune",
      "description": "ASQUARE Academy offers the best NEET coaching in Shastri Nagar, Pune, with expert faculty, crash courses, and repeater batches for Class XI, XII, and drop-year aspirants.",
      "url": "https://www.asquareclasses.com/neet-coaching-classes-institute-shastri-nagar-pune",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "telephone": "+91-9766118877",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Shastri Nagar",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411006",
        "addressCountry": "IN"
      },
      "openingHours": [
        "Mo-Su 08:00-20:00"
      ],
      "sameAs": [
        "https://www.facebook.com/AsquareClasses",
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
          "name": "NEET Coaching",
          "item": "https://www.asquareclasses.com/neet-coaching/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "NEET Coaching Classes in Shastri Nagar Pune",
          "item": "https://www.asquareclasses.com/neet-coaching-classes-institute-shastri-nagar-pune"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who should join NEET coaching at ASQUARE?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE Academy’s NEET coaching is ideal for Class XI, XII, and drop-year students aiming to secure top ranks in NEET-UG with expert guidance and structured learning."
          }
        },
        {
          "@type": "Question",
          "name": "Are there crash course programs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes—our short-term NEET crash courses focus on quick concept revision, intensive test practice, and exam-oriented preparation strategies."
          }
        },
        {
          "@type": "Question",
          "name": "Do you have repeater batches?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes—we offer dedicated repeater batches designed for NEET aspirants repeating the exam, with complete syllabus coverage and personalized mentoring."
          }
        },
        {
          "@type": "Question",
          "name": "Is online coaching an option?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes—students can choose between online or classroom coaching, ensuring flexible learning from anywhere without compromising on quality."
          }
        },
        {
          "@type": "Question",
          "name": "How do you track progress?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We conduct weekly tests, mock exams, and regular parent-teacher meetings to monitor student performance and suggest timely improvements."
          }
        },
        {
          "@type": "Question",
          "name": "What study materials are provided?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE Academy provides updated study materials, topic-wise notes, and question banks aligned with the latest NEET syllabus and exam trends."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer doubt-solving sessions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes—daily doubt-clearing sessions and one-on-one mentor interactions help students strengthen concepts and overcome learning gaps."
          }
        },
        {
          "@type": "Question",
          "name": "What makes ASQUARE Academy the best for NEET coaching?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our expert faculty, proven teaching methods, personalized mentoring, and strong track record of NEET selections make us one of Pune’s top NEET institutes."
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
                Shape Your NEET Success with  {" "}
                <span className="gradient-text-yellow d-inline-block">
                  ASQUARE Academy, Shastri Nagar
                </span>
              </h1>
              <p className="fs-5 text-white mb-3 lh">
                Cracking NEET UG requires more than dedication—it demands expert guidance, personalized strategy, and consistent practice. At
                <strong> ASQUARE Academy, our NEET coaching classes in Shastri Nagar, Pune </strong>
                 are designed to help you master core concepts, enhance exam skills, and achieve admission into prestigious medical colleges. ASQUARE is recognized as one of the
                <strong> ASQUARE Academy, </strong>
                we prepare medical aspirants with conceptual clarity, personalized mentoring, and regular testing to ensure top NEET scores. Recognized among the
                <strong> best NEET coaching institutes in Pune,  </strong>
                known for its structured pedagogy and proven student outcomes.
              </p>
              <div className="hero-location-info d-flex align-items-start gap-3">
                <MapPin
                  size={24}
                  color="#FFCB03"
                  className="flex-shrink-0 mt-1"
                />
                <span className="text-white">
                  <strong>Our Shastri Nagar branch conveniently serves students from:</strong> Shastri Nagar, Yerawada, Kalyani Nagar, Nagpur Chawl, Nagar Road, and nearby areas.
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
                Best NEET Coaching in Shastri Nagar
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
                  Our systematic learning approach ensures deep understanding, consistency, and confidence-building — key ingredients for NEET success.
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
              ASQUARE Academy - Shastri Nagar
            </span>
          </h2>

          {/* Description */}
          <div className="mx-auto mb-5">
            <p className="lead text-secondary mb-3">
              <strong> NEET (UG) </strong> is the entrance exam for MBBS, BDS, BAMS, BHMS, and related medical programs. With increasing competition, structured preparation is essential. At
              <strong> ASQUARE Academy – Shastri Nagar </strong> we focus on conceptual clarity, strategic learning, and confidence-building through rigorous evaluation.
            </p>

            <p className="d-flex flex-wrap justify-content-center align-items-center gap-2 text-dark">
              <MapPin className="text-primary" size={26} />
              <span>
                We also attract students from <strong> Shastri Nagar, Yerawada, Kalyani Nagar, Nagpur Chawl, Nagar Road, </strong>
               who prefer ASQUARE for its academic rigor and accessible Pune location.
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
              Course Details (NEET UG) - Top NEET Coaching Classes in Shastri Nagar
            </h3>

            <p className="fs-5">
              <strong>NEET UG</strong> is India’s gateway exam for{" "}
              <strong>MBBS, BDS, BAMS, BHMS, and BPT</strong>
              At <strong>At ASQUARE Academy Shastri Nagar,</strong>
              At ASQUARE Academy Shastri Nagar, our NEET training emphasizes accuracy, concept retention, and speed management through a structured curriculum and consistent testing.
            </p>
            <p className="fs-5">
              We’re recognized among the <strong> Top NEET Coaching Institutes in Shastri Nagar Pune </strong> serving students from
              <strong>Chinchwad East, Chinchwad West, Udyognagar, and Pradhikaran.</strong>
            </p>
            <p className="fs-5">
              We are among the{" "}
              <strong>Top NEET Coaching Institutes in Shastri Nagar Pune, </strong>
              known for high student success and experienced faculty.
            </p>

            <h4 className="fw-bold text-primary-emphasis mt-5 fs-3">
              Subjects Covered in NEET Classes at Shastri Nagar
            </h4>

            <div className="mt-4">
              {subjectsCovered.map((subject, i) => (
                <SubjectCard key={i} {...subject} />
              ))}
            </div>

            <p className="fs-5">
              Each batch includes test analysis, feedback, and mentor guidance for continuous improvement.
            </p>
          </div>

          {/* Right Column - Blue */}
          <div className="col-lg-6 p-5 p-lg-5 text-white lg-b-bg-b">
            <h5 className="fw-bold text-warning mb-4 fs-1">
              Program Duration and Batch Options — NEET Preparation in Shastri Nagar
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
              Best NEET Coaching in Shastri Nagar, Pune
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
              Students from {" "}<strong>ASQUARE Academy – Shastri Nagar </strong>
              consistently gain admission to
              <strong className="text-primary">
                {" "}AIIMS, state medical colleges, and top private institutions.{" "}
              </strong>
              With remarkable teaching methods, we stand among the
              <strong> top NEET coaching classes in Pune.</strong>
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
                This 4-step system makes ASQUARE the{" "}
                <strong>
                  most preferred NEET training institute in Shastri Nagar and PCMC.
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
              Top NEET Coaching Institutes in Shastri Nagar.
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
              ASQUARE Academy – Shastri Nagar Pune
            </span>
          </h2>

          {/* Description */}
          <div className="mx-auto mb-5">
            <p className="lead text-secondary mb-3">
              If you’re looking for premier {" "}
              <strong> NEET coaching classes in Shastri Nagar, Pune </strong>
              ASQUARE Academy offers expert teaching, structured planning, and consistent support to help you reach your medical goals.
            </p>

            <p className="d-flex flex-wrap justify-content-center align-items-center gap-2 text-dark">
              <MapPin className="text-primary" size={22} />
              <span>
                 Accessible to students from {" "}
                <strong>
                   Shastri Nagar, Yerawada, Kalyani Nagar, Nagpur Chawl, Nagar Road, and nearby areas.
                </strong>
              </span>
            </p>
          </div>

          {/* Subheading */}
          <h4 className="fw-bold text-primary mb-4">
            Admissions Open – Enroll Now! Take the first step toward NEET success with ASQUARE.
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

export default NEETShastriNagar;
