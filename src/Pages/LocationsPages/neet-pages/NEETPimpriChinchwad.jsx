import React, { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import locationBGImage from "../../../Assets/locationPageImages/neet/NEET slider PC.jpeg";
import MobileBGImage from "../../../Assets/locationPageImages/neet/NEET slider mobile.jpeg";
import image1 from "../../../Assets/locationPageImages/neet/NEET Page 9.jpeg";
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

function NEETPimpriChinchwad() {
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
    description: "Experienced mentors for Physics, Chemistry, and Biology.",
  },
  {
    Icon: BookOpen,
    title: "Concept-Based Teaching",
    description: "Strong NCERT foundation with advanced NEET-level practice.",
  },
  {
    Icon: Target,
    title: "Small Batch Sizes",
    description: "Focused learning with individual attention.",
  },
  {
    Icon: BarChart,
    title: "Regular Assessments",
    description: "Weekly unit tests, mock exams, and detailed progress reports.",
  },
  {
    Icon: Calendar,
    title: "Flexible Learning Modes",
    description: "Classroom & online options with weekday/weekend batches.",
  },
  {
    Icon: School,
    title: "Mentorship",
    description: "Academic guidance and motivational support for aspirants.",
  },
];

const subjectsCovered = [
  {
    title: "Physics",
    desc: "Strengthening conceptual clarity and numerical accuracy.",
  },
  {
    title: "Chemistry",
    desc: "In-depth learning of Physical, Organic, and Inorganic Chemistry.",
  },
  {
    title: "Biology",
    desc: "NCERT-based preparation with detailed diagrams and topic-wise notes.",
  },
];

const programDurations = [
  {
    icon: Clock,
    title: "2-Year Integrated Program (Class 11):",
    desc: "Foundation course for NEET + Boards.",
  },
  {
    icon: Target,
    title: "1-Year Target Program (Class 12):",
    desc: "Fast-paced course with focused revisions and tests.",
  },
  {
    icon: CalendarSync,
    title: "Dropper/Repeater Batch:",
    desc: "Personalized mentoring and detailed error analysis.",
  },
  {
    icon: School,
    title: "Crash Course:",
    desc: "Intensive short-term module with PYQs and mock exams.",
  },
];

const methodologySteps = [
  {
    Icon: Lightbulb,
    title: "Learn",
    description: "Interactive lectures for concept clarity.",
  },
  {
    Icon: BookOpen,
    title: "Practice",
    description: "Daily practice sessions.",
  },
  {
    Icon: BarChart,
    title: "Assess",
    description: "Weekly assessments for evaluation.",
  },
  {
    Icon: MessageCircle,
    title: "Revise",
    description: "Focused revision for long-term retention and exam success.",
  },
];

const faqData = [
  {
    q: "Which is the best NEET coaching in Pimpri Chinchwad Pune?",
    a: "ASQUARE Academy is among the most reputed institutes offering structured preparation, expert faculty, and consistent results for NEET aspirants.",
  },
  {
    q: "Do you have Dropper or Repeater batches?",
    a: "Yes, we offer specialized repeater batches with daily tests, mock exams, and personalized mentoring for better performance.",
  },
  {
    q: "Are weekend batches available for NEET coaching?",
    a: "Yes, we provide both weekday and weekend batches to help students balance school studies with NEET preparation.",
  },
  {
    q: "Do you conduct crash courses for NEET?",
    a: "Yes, our short-term crash courses cover key concepts, PYQs, and mock tests for quick and effective revision.",
  },
  {
    q: "What subjects are covered in the NEET coaching program?",
    a: "We cover Physics, Chemistry, and Biology comprehensively with emphasis on NCERT-based concepts and exam-focused problem-solving.",
  },
  {
    q: "Do you provide online coaching options?",
    a: "Yes, we offer both classroom and live online sessions, ensuring flexible learning for students from all locations.",
  },
  {
    q: "Are scholarships available at ASQUARE Academy?",
    a: "Yes, we provide scholarships based on merit through the ASQUARE Scholarship Test, helping deserving students pursue NEET coaching affordably.",
  },
  {
    q: "What makes ASQUARE different from other coaching centers?",
    a: "Our small batch sizes, dedicated faculty, continuous testing, and personal mentorship make ASQUARE a top choice for NEET aspirants in Pimpri Chinchwad.",
  },
];

const gridFeatures = [
  {
    Icon: BookOpen,
    title: "Comprehensive printed and digital study materials",
    colorClass: "bg-gradient-blue",
  },
  {
    Icon: Users,
    title: "Regular doubt-solving sessions with expert faculty",
    colorClass: "bg-gradient-purple",
  },
  {
    Icon: ChartSpline,
    title: "Parent–teacher meetings for progress tracking",
    colorClass: "bg-gradient-green",
  },
  {
    Icon: BarChart,
    title: "Online test series with rank, analysis, and reports",
    colorClass: "bg-gradient-orange",
  },
  {
    Icon: Award,
    title: "Time management and exam-strategy workshops",
    colorClass: "bg-gradient-red",
  },
  {
    Icon: TrendingUp,
    title: "Scholarship opportunities through ASQUARE Test",
    colorClass: "bg-gradient-teal",
  },
];

  return (
    <>
      <Helmet>
        <title>
          Top NEET Coaching Classes in Pimpri Chinchwad Pune | ASQUARE
        </title>
        <meta
          name="title"
          content="Top NEET Coaching Classes in Pimpri Chinchwad Pune | ASQUARE"
        />
        <meta
          name="description"
          content="Enroll at ASQUARE Academy for top NEET coaching classes in Pimpri Chinchwad Pune. Get expert guidance, advanced preparation, and personalized NEET training."
        />
        <meta
          name="keywords"
          content="NEET coaching classes in pimpri chinchwad pune Best NEET Coaching in pimpri chinchwad Pune Top NEET Coaching Classes pimpri chinchwad Pune NEET Advanced Preparation pimpri chinchwad Pune NEET Classes in pimpri chinchwad Pune Best NEET Classes in pimpri chinchwad Pune Top NEET Classes in pimpri chinchwad Pune"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{`
        {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-in-pimpri-chinchwad-pune",
      "name": "ASQUARE Academy - NEET Coaching in Pimpri Chinchwad Pune",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "telephone": "+91-9766118877",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Pimpri Chinchwad",
        "addressRegion": "Pune",
        "addressCountry": "India"
      },
      "url": "https://www.asquareclasses.com/neet-coaching-classes-institute-in-pimpri-chinchwad-pune",
      "priceRange": "₹₹",
      "openingHours": "Mo-Sa 09:00-20:00",
      "sameAs": [
        "https://www.facebook.com/asquareacademy",
        "https://www.instagram.com/asquareacademy"
      ],
      "description": "ASQUARE Academy offers the best NEET coaching in Pimpri Chinchwad Pune with expert mentors, repeater batches, crash courses, and online options for NEET aspirants."
    },
    {
      "@type": "EducationalOrganization",
      "name": "ASQUARE Academy",
      "url": "https://www.asquareclasses.com/",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "description": "ASQUARE Academy provides NEET coaching in Pimpri Chinchwad Pune with comprehensive Physics, Chemistry, and Biology preparation for medical aspirants.",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9766118877",
        "contactType": "Customer Service"
      },
      "sameAs": [
        "https://www.facebook.com/asquareacademy",
        "https://www.instagram.com/asquareacademy"
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
          "name": "Courses",
          "item": "https://www.asquareclasses.com/courses/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "NEET Coaching in Pimpri Chinchwad Pune",
          "item": "https://www.asquareclasses.com/neet-coaching-classes-institute-in-pimpri-chinchwad-pune"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Which is the best NEET coaching in Pimpri Chinchwad Pune?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE Academy is among the most reputed institutes offering structured preparation, expert faculty, and consistent results for NEET aspirants."
          }
        },
        {
          "@type": "Question",
          "name": "Do you have Dropper or Repeater batches?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we offer specialized repeater batches with daily tests, mock exams, and personalized mentoring for better performance."
          }
        },
        {
          "@type": "Question",
          "name": "Are weekend batches available for NEET coaching?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we provide both weekday and weekend batches to help students balance school studies with NEET preparation."
          }
        },
        {
          "@type": "Question",
          "name": "Do you conduct crash courses for NEET?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, our short-term crash courses cover key concepts, PYQs, and mock tests for quick and effective revision."
          }
        },
        {
          "@type": "Question",
          "name": "What subjects are covered in the NEET coaching program?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We cover Physics, Chemistry, and Biology comprehensively with emphasis on NCERT-based concepts and exam-focused problem-solving."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide online coaching options?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we offer both classroom and live online sessions, ensuring flexible learning for students from all locations."
          }
        },
        {
          "@type": "Question",
          "name": "Are scholarships available at ASQUARE Academy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we provide scholarships based on merit through the ASQUARE Scholarship Test, helping deserving students pursue NEET coaching affordably."
          }
        },
        {
          "@type": "Question",
          "name": "What makes ASQUARE different from other coaching centers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our small batch sizes, dedicated faculty, continuous testing, and personal mentorship make ASQUARE a top choice for NEET aspirants in Pimpri Chinchwad."
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
                Crack NEET with Expert Guidance {" "}
                <span className="gradient-text-yellow d-inline-block">
                  ASQUARE Pimpri Chinchwad
                </span>
              </h1>
              <p className="fs-5 text-white mb-3 lh">
                Preparing for NEET UG requires structured learning, consistent practice, and expert mentorship. At
                <strong> ASQUARE Academy, </strong>
                 our dedicated
                <strong> NEET coaching classes in Pimpri Chinchwad Pune </strong>
                help students build strong concepts, improve accuracy, and excel in competitive exams. Recognized among the
                <strong> Best NEET Coaching in Pimpri Chinchwad Pune,  </strong>
                ASQUARE offers result-driven programs for every aspirant.
              </p>
              <div className="hero-location-info d-flex align-items-start gap-3">
                <MapPin
                  size={24}
                  color="#FFCB03"
                  className="flex-shrink-0 mt-1"
                />
                <span className="text-white">
                  <strong>Our Pimpri Chinchwad branch conveniently serves students from:</strong> Pimpri, Chinchwad, Nigdi, Akurdi, Pimple Saudagar, Wakad, Bhosari, Sangvi, Kalewadi, Rahatani, Thergaon, Moshi, Ravet, Dapodi, and nearby areas.
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
                Best NEET Coaching in  Pimpri Chinchwad
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
              ASQUARE Pimpri Chinchwad
            </span>
          </h2>

          {/* Description */}
          <div className="mx-auto mb-5">
            <p className="lead text-secondary mb-3">
              <strong> NEET (UG) </strong> India’s national entrance exam for aspiring doctors. With lakhs of students competing every year, a structured and focused approach is essential. At
              <strong> ASQUARE Academy – Pimpri Chinchwad, </strong> our programs emphasize conceptual understanding, analytical skills, and strategic exam preparation that ensure success in medical entrance exams.
            </p>

            <p className="d-flex flex-wrap justify-content-center align-items-center gap-2 text-dark">
              <MapPin className="text-primary" size={26} />
              <span>
               Easily accessible for students from <strong> Pimpri, Chinchwad, Nigdi, Akurdi, Pimple Saudagar, Wakad, Bhosari, Sangvi, Kalewadi, Rahatani, Thergaon, Moshi, Ravet, Dapodi, and nearby areas. </strong>
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
              Course Details (NEET UG) - Top NEET Coaching Classes in Pimpri Chinchwad
            </h3>

            <p className="fs-5">
              <strong>NEET UG</strong> is India’s gateway exam for{" "}
              <strong>MBBS, BDS, BAMS, BHMS, and BPT</strong>
              At <strong>At ASQUARE Academy Pimpri Chinchwad,</strong>
              At ASQUARE Academy Pimpri Chinchwad, our NEET training emphasizes accuracy, concept retention, and speed management through a structured curriculum and consistent testing.
            </p>
            <p className="fs-5">
              We’re recognized among the <strong> Top NEET Coaching Institutes in Pimpri Chinchwad </strong> serving students from
              <strong>Chinchwad East, Chinchwad West, Udyognagar, and Pradhikaran.</strong>
            </p>
            <p className="fs-5">
              We are among the{" "}
              <strong>Top NEET Coaching Institutes in Pimpri Chinchwad , </strong>
              known for high student success and experienced faculty.
            </p>

            <h4 className="fw-bold text-primary-emphasis mt-5 fs-3">
              Subjects Covered in NEET Classes at Pimpri Chinchwad
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
              Program Duration and Batch Options — NEET Preparation in Pimpri Chinchwad
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
              Best NEET Coaching in Chinchwad, PCMC
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
              ASQUARE Academy’s NEET Success – Student Achievements
            </h4>
          </div>
          <div className="results-box-gradient">
            <p className="fs-5 text-dark mb-3 text-center">
              Students from {" "}<strong>ASQUARE Academy – Pimpri Chinchwad </strong>
              have consistently achieved top ranks in 
              <strong className="text-primary">
                {" "}NEET, gaining admission to AIIMS, government medical colleges, and leading private institutions. {" "}
              </strong>
             Our proven results make us one of the
              <strong> Top NEET Coaching Classes Pimpri Chinchwad Pune </strong>
              trusted by students and parents alike.
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
                  most preferred NEET training institute in Pimpri Chinchwad .
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
              Top NEET Coaching Institutes in Chinchwad.
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
              ASQUARE Academy – Pimpri Chinchwad
            </span>
          </h2>

          {/* Description */}
          <div className="mx-auto mb-5">
            <p className="lead text-secondary mb-3">
              Looking for reliable {" "}
              <strong> NEET coaching classes in Pimpri Chinchwad Pune? </strong>Join
              <strong> ASQUARE Academy </strong>
              today! With expert guidance, structured programs, and personalized mentoring, we prepare you to crack NEET confidently and achieve your dream of becoming a doctor.
            </p>

            <p className="d-flex flex-wrap justify-content-center align-items-center gap-2 text-dark">
              <MapPin className="text-primary" size={22} />
              <span>
                 Easily accessible for students from {" "}
                <strong>
                   Pimpri, Chinchwad, Nigdi, Akurdi, Pimple Saudagar, Wakad, Bhosari, Sangvi, Kalewadi, Rahatani, Thergaon, Moshi, Ravet, Dapodi, and nearby areas.
                </strong>
              </span>
            </p>
          </div>

          {/* Subheading */}
          <h4 className="fw-bold text-primary mb-4">
            Admissions Open! Start your NEET journey with ASQUARE Academy – Pimpri Chinchwad.
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

export default NEETPimpriChinchwad;
