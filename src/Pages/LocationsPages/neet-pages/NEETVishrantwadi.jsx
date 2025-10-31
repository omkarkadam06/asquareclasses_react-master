import React, { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import locationBGImage from "../../../Assets/locationPageImages/neet/NEET slider PC6.jpeg";
import MobileBGImage from "../../../Assets/locationPageImages/neet/NEET slider mobile6.jpeg";
import image1 from "../../../Assets/locationPageImages/neet/NEET Page 11.jpeg";
import image2 from "../../../Assets/locationPageImages/neet/NEET Page 12.jpeg";
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

function NEETVishrantwadi() {
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
      "Highly experienced mentors for Physics, Chemistry, and Biology.",
  },
  {
    Icon: BookOpen,
    title: "Comprehensive Curriculum",
    description:
      "NEET-focused, NCERT-based syllabus with in-depth concept coverage.",
  },
  {
    Icon: Target,
    title: "Small Batches",
    description:
      "Individualized attention and personal mentorship.",
  },
  {
    Icon: BarChart,
    title: "Regular Testing",
    description:
      "Weekly topic tests and monthly full-length mock exams.",
  },
  {
    Icon: Calendar,
    title: "Flexible Learning",
    description:
      "Both offline and Online NEET Classes in Vishrantwadi Pune available.",
  },
  {
    Icon: School,
    title: "Integrated Study Plan",
    description:
      "Balanced approach for school academics and NEET syllabus.",
  },
];

  const subjectsCovered = [
  {
    title: "Physics",
    desc: "Conceptual explanations with numerical problem-solving techniques.",
  },
  {
    title: "Chemistry",
    desc: "Complete coverage of Physical, Organic, and Inorganic Chemistry with NEET-level questions.",
  },
  {
    title: "Biology",
    desc: "Detailed NCERT-based teaching with emphasis on high-weightage topics and diagrams.",
  },
];

  const programDurations = [
  {
    icon: Clock,
    title: "2-Year Integrated Program (Class 11 → 12):",
    desc: "Foundation-to-NEET course covering both school and competitive syllabus.",
  },
  {
    icon: Target,
    title: "1-Year Target Batch (Class 12):",
    desc: "Intensive NEET-focused program with regular tests and feedback.",
  },
  {
    icon: CalendarSync,
    title: "Dropper/Repeater Batch:",
    desc: "One-year comprehensive program for NEET repeaters with performance tracking.",
  },
  {
    icon: School,
    title: "Crash Course:",
    desc: "Short 2–3 month NEET revision batch with mock tests and past-year question practice.",
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
    q: "Do you offer advanced NEET coaching in Vishrantwadi?",
    a: "Yes—ASQUARE offers advanced NEET batches with detailed test analysis and revision modules.",
  },
  {
    q: "Are small batches available for better learning?",
    a: "Yes, small batches ensure focused attention and improved results.",
  },
  {
    q: "Can students from nearby areas like Dhanori or Lohegaon join?",
    a: "Absolutely! Students from Dhanori, Tingre Nagar, Lohegaon, Kalas, and Yerawada attend regularly.",
  },
  {
    q: "Is online NEET coaching available?",
    a: "Yes—ASQUARE provides both classroom and Online NEET Classes in Vishrantwadi Pune.",
  },
  {
    q: "How do you track student progress?",
    a: "Through weekly tests, performance analytics, and personalized mentor feedback.",
  },
];

  const gridFeatures = [
  {
    Icon: Award,
    title: "Expert faculty with years of NEET teaching experience",
    colorClass: "bg-gradient-blue",
  },
  {
    Icon: Users,
    title: "Small batch sizes for personal focus",
    colorClass: "bg-gradient-purple",
  },
  {
    Icon: ChartSpline,
    title: "Regular performance reports & parent meetings",
    colorClass: "bg-gradient-green",
  },
  {
    Icon: BookOpen,
    title: "Comprehensive printed & digital study material",
    colorClass: "bg-gradient-orange",
  },
  {
    Icon: BarChart,
    title: "Weekly & monthly tests for progressive assessment",
    colorClass: "bg-gradient-red",
  },
  {
    Icon: CalendarSync,
    title: "Offline + Online NEET learning modes",
    colorClass: "bg-gradient-teal",
  },
  {
    Icon: MapPin,
    subtitle: "Convenient for students from",
    extraText:
      "Dhanori, Tingre Nagar, Lohegaon, Kalas, Yerawada, Viman Nagar, and Airport Road",
    colorClass: "bg-gradient-pink",
  },
];

  return (
    <>
      <Helmet>
        <title>
          NEET Coaching & Classes in Vishrantwadi Pune | Best NEET Preparation
        </title>
        <meta
          name="title"
          content="NEET Coaching & Classes in Vishrantwadi Pune | Best NEET Preparation"
        />
        <meta
          name="description"
          content="Join the best NEET Coaching & Classes in Vishrantwadi Pune. Expert faculty, mock tests & personalized mentorship for NEET success. ASQUARE Academy."
        />
        <meta
          name="keywords"
          content="NEET Coaching in Vishrantwadi Pune, Best NEET Classes in Vishrantwadi, Top NEET Coaching Institute Vishrantwadi, NEET Coaching Centre in Vishrantwadi, NEET Preparation in Vishrantwadi, ASQUARE Academy Vishrantwadi."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{`
        {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "EducationalOrganization"],
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-Institute-vishrantwadi-pune/#localbusiness",
      "name": "ASQUARE Academy - NEET Coaching Classes in Vishrantwadi Pune",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "url": "https://www.asquareclasses.com/neet-coaching-classes-Institute-vishrantwadi-pune",
      "telephone": "9766118866",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Vishrantwadi",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411015",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "18.5787",
        "longitude": "73.8772"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "08:00",
          "closes": "20:00"
        }
      ],
      "sameAs": [
        "https://www.facebook.com/asquareclasses",
        "https://www.instagram.com/asquareacademy",
        "https://www.asquareclasses.com/"
      ],
      "description": "ASQUARE Academy offers the best NEET coaching classes in Vishrantwadi Pune with expert faculty, small batches, personalized mentoring, and both online & offline sessions for top medical entrance results."
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-Institute-vishrantwadi-pune/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you offer advanced NEET coaching in Vishrantwadi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes—ASQUARE offers advanced NEET batches with detailed test analysis and revision modules."
          }
        },
        {
          "@type": "Question",
          "name": "Are small batches available for better learning?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, small batches ensure focused attention and improved results."
          }
        },
        {
          "@type": "Question",
          "name": "Can students from nearby areas like Dhanori or Lohegaon join?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely! Students from Dhanori, Tingre Nagar, Lohegaon, Kalas, and Yerawada attend regularly."
          }
        },
        {
          "@type": "Question",
          "name": "Is online NEET coaching available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes—ASQUARE provides both classroom and Online NEET Classes in Vishrantwadi Pune."
          }
        },
        {
          "@type": "Question",
          "name": "How do you track student progress?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Through weekly tests, performance analytics, and personalized mentor feedback."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-Institute-vishrantwadi-pune/#breadcrumb",
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
          "item": "https://www.asquareclasses.com/neet-coaching-classes-Institute-vishrantwadi-pune"
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
                  Excel in NEET with Expert Guidance at ASQUARE Academy, Vishrantwadi
                </span>
              </h1>
              <p className="fs-5 text-white mb-3 lh">
                Searching for reliable <strong> NEET coaching classes in Vishrantwadi, Pune? </strong>
                At{" "}
                <strong>
                  {" "}
                  ASQUARE Academy{" "}
                </strong>
                we empower NEET aspirants with a perfect blend of conceptual learning, expert mentoring, and regular testing. Recognized as one of the
                <strong> Best NEET Coaching Institutes in Vishrantwadi, </strong>
                 our programs focus on building strong NCERT foundations and exam-oriented accuracy for NEET-UG.
              </p>
              <div className="hero-location-info d-flex align-items-start gap-3">
                <MapPin
                  size={24}
                  color="#FFCB03"
                  className="flex-shrink-0 mt-1"
                />
                <span className="text-white">
                  <strong>Our Vishrantwadi branch caters to students from:</strong>{" "}
                  Dhanori, Tingre Nagar, Lohegaon, Kalas, Yerawada, Viman Nagar, Alandi Road, and Airport Road.
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
                — Best NEET Coaching in Vishrantwadi, Pune
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
                  Our approach ensures conceptual clarity, regular practice, and performance improvement for NEET success.
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
            <span> ASQUARE Academy - Vishrantwadi</span>
          </h2>

          {/* Description */}
          <div className="mx-auto mb-5">
            <p className="lead text-secondary mb-3">
              The <strong> NEET course at ASQUARE Academy, Vishrantwadi, </strong> covers the complete NEET syllabus with detailed classroom teaching, test-based evaluation, and revision modules.
              Our course helps students strengthen concepts, develop problem-solving skills, and gain exam confidence.
            </p>

            <p className="d-flex flex-wrap justify-content-center align-items-center gap-2 text-dark">
              <MapPin className="text-primary" size={26} />
              <span>
                Students from{" "}
                <strong>Physics, Chemistry, and Biology </strong>
                in detail, with practice modules, test series, and personalized
                mentoring. Students from{" "}
                <strong>
                  Dhanori, Lohegaon, and Tingre Nagar.
                </strong>
                {" "}attend our NEET batches due to the centre’s proximity and track record of academic excellence in
                <strong> medical entrance coaching in Pune.</strong>
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
              Course Details (NEET UG) - Top NEET Coaching Classes in Vishrantwadi
            </h3>

            <p className="fs-5">
              <strong>NEET UG</strong> is the gateway to top medical colleges
              across India offering{" "}
              <strong>
                MBBS, BDS, BAMS, BHMS, and other allied courses.
              </strong>
            </p>
            <p className="fs-5">
              At <strong>ASQUARE Academy Vishrantwadi,</strong> our NEET programs are
              designed to build strong fundamentals, improve speed and accuracy,
              and ensure exam readiness through sustained practice and
              analytics.
            </p>
            <p className="fs-5">
              We are among the {" "}
              <strong>Top NEET Coaching Institutes in Vishrantwadi Pune, </strong> 
              known for high student success and experienced faculty.
            </p>

            <h4 className="fw-bold text-primary-emphasis mt-5 fs-3">
              Subjects Covered in NEET Classes at Vishrantwadi
            </h4>

            <div className="mt-4">
              {subjectsCovered.map((subject, i) => (
                <SubjectCard key={i} {...subject} />
              ))}
            </div>

            <p className="fs-5">
              Each subject is taught with attention to detail, practice reinforcement, and frequent evaluation.
            </p>
          </div>

          {/* Right Column - Blue */}
          <div className="col-lg-6 p-5 p-lg-5 text-white lg-b-bg-b">
            <h5 className="fw-bold text-warning mb-4 fs-1">
              Program Duration and Batch Options — NEET Preparation in Vishrantwadi
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
              Best NEET Coaching in Vishrantwadi, Pune
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
              At{" "}
              <strong className="text-primary">ASQUARE Academy, </strong>
              our students consistently achieve top NEET results and secure admissions in India’s leading medical colleges like
              <strong className="text-primary"> AIIMS, BJMC, AFMC, and DY Patil Medical College Pune. </strong>
              Our academic excellence, strong mentoring, and disciplined testing system make ASQUARE the 
              <strong> Top NEET Coaching Centre in Vishrantwadi Pune.</strong>
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
                  the best NEET training institute in Vishrantwadi and PCMC.
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
              Top NEET Coaching Institutes in Vishrantwadi.
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
              ASQUARE Academy –The Best NEET Coaching Classes in Vishrantwadi, Pune
            </span>
          </h2>

          {/* Description */}
          <div className="mx-auto mb-5">
            <p className="lead text-secondary mb-3">
              If you’re searching for the{" "}
              <strong> Best NEET Coaching Classes in Vishrantwadi, Pune. </strong> Join
              <strong> ASQUARE Academy </strong>
              today. With experienced faculty, test-based learning, and result-oriented programs, your NEET success starts here.
            </p>

            <p className="d-flex flex-wrap justify-content-center align-items-center gap-2 text-dark">
              <MapPin className="text-primary" size={22} />
              <span>
                Convenient from{" "}
                <strong>
                  Dhanori, Tingre Nagar, Lohegaon, Kalas, Yerawada, Airport Road, Alandi Road, and Viman Nagar.
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

export default NEETVishrantwadi;
