import React, { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import locationBGImage from "../../../Assets/locationPageImages/neet/NEET slider PC.jpeg";
import MobileBGImage from "../../../Assets/locationPageImages/neet/NEET slider mobile.jpeg";
import image1 from "../../../Assets/locationPageImages/neet/NEET Page 18.jpeg";
import image2 from "../../../Assets/locationPageImages/neet/NEET Page 19.jpeg";
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

function NEETRahatani() {
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
      description: "Dedicated teachers for Physics, Chemistry, and Biology.",
    },
    {
      Icon: BookOpen,
      title: "Concept Clarity",
      description: "NCERT-focused teaching with advanced NEET modules.",
    },
    {
      Icon: Target,
      title: "Small Batch Strength",
      description: "Better focus, interaction, and doubt-clearing.",
    },
    {
      Icon: BarChart,
      title: "Continuous Evaluation",
      description: "Weekly tests, mocks, and detailed feedback.",
    },
    {
      Icon: Calendar,
      title: "Flexible Options",
      description: "Classroom + online NEET Classes in Rahatani available.",
    },
    {
      Icon: School,
      title: "Balanced Study Plans",
      description: "Support for both board exams and NEET.",
    },
  ];

  const subjectsCovered = [
    {
      title: "Physics",
      desc: "Clear explanation of concepts with intensive numerical drills.",
    },
    {
      title: "Chemistry",
      desc: "Thorough coverage of Physical, Organic, and Inorganic Chemistry.",
    },
    {
      title: "Biology",
      desc: "Detailed NCERT-based learning with diagrams and scoring tips.",
    },
  ];

  const programDurations = [
    {
      icon: Clock,
      title: "2-Year Integrated Program (Class 11th → 12th):",
      desc: "Foundation building with progressive NEET preparation.",
    },
    {
      icon: Target,
      title: "1-Year Target Course (Class 12th):",
      desc: "Comprehensive syllabus coverage and mock-based practice.",
    },
    {
      icon: CalendarSync,
      title: "Dropper/Repeater Batch:",
      desc: "One-year intensive for repeat aspirants with targeted guidance.",
    },
    {
      icon: School,
      title: "Crash Course (2–3 Months):",
      desc: "Fast-track NEET Advanced Preparation Rahatani with PYQs and strategy sessions.",
    },
  ];

  const methodologySteps = [
    {
      Icon: Lightbulb,
      title: "Learn",
      description: "Interactive, concept-driven classes.",
    },
    {
      Icon: BookOpen,
      title: "Practice",
      description: "DPPs, assignments, and structured exercises.",
    },
    {
      Icon: BarChart,
      title: "Assess",
      description: "Weekly tests and full-length mocks.",
    },
    {
      Icon: MessageCircle,
      title: "Revise",
      description: "Special revision modules for stronger retention.",
    },
  ];

  const faqData = [
    {
      q: "Do you provide NEET Advanced Preparation in Rahatani Pune?",
      a: "Yes, ASQUARE Academy offers advanced modules, high-yield topic sessions, and full-length mock exams designed for top NEET scorers in Rahatani Pune.",
    },
    {
      q: "What courses are available at ASQUARE Academy Rahatani?",
      a: "We provide 2-year, 1-year, crash, and dropper batches, covering the complete NEET syllabus for both beginners and repeaters aiming for top ranks.",
    },
    {
      q: "Are small batches available at ASQUARE Academy Rahatani Pune?",
      a: "Yes, our Best NEET Classes in Rahatani Pune maintain small batch sizes to ensure personal attention and focused learning for every student.",
    },
    {
      q: "Do you offer online NEET classes in Rahatani Pune?",
      a: "Yes, students can opt for classroom or online NEET classes in Rahatani Pune, making it convenient for those with flexible learning needs.",
    },
    {
      q: "Can students from nearby areas join NEET coaching in Rahatani?",
      a: "Yes, students from Pimple Saudagar, Wakad, Kalewadi, Pimpri, Chinchwad, and Hinjewadi regularly attend our Top NEET Coaching Classes in Rahatani Pune.",
    },
    {
      q: "What subjects are covered in NEET coaching classes in Rahatani Pune?",
      a: "Our NEET courses include Physics, Chemistry, and Biology, with in-depth conceptual learning and problem-solving sessions by expert faculty.",
    },
    {
      q: "How does ASQUARE Academy ensure NEET exam readiness?",
      a: "Through regular mock tests, personalized mentoring, and progress tracking, we prepare students for strong NEET performance and medical college admission.",
    },
    {
      q: "Why choose ASQUARE Academy for the Best NEET Coaching in Rahatani Pune?",
      a: "With expert faculty, small batches, detailed analysis, and result-driven preparation, ASQUARE Academy stands among the top NEET classes in Rahatani Pune.",
    },
  ];

  const gridFeatures = [
    {
      Icon: BookOpen,
      title: "Updated NEET material (digital + print).",
      colorClass: "bg-gradient-blue",
    },
    {
      Icon: MessageCircle,
      title: "Dedicated doubt-solving sessions.",
      colorClass: "bg-gradient-purple",
    },
    {
      Icon: Award,
      title: "Regular parent–teacher updates with progress tracking.",
      colorClass: "bg-gradient-green",
    },
    {
      Icon: ChartSpline,
      title: "Workshops on time management & accuracy.",
      colorClass: "bg-gradient-orange",
    },
    {
      Icon: TrendingUp,
      title: "Scholarship opportunities through ASQUARE Test",
      colorClass: "bg-gradient-red",
    },
    {
      Icon: MapPin,
      title: "Trusted by students across Rahatani, Wakad & Pimple Saudagar.",
      colorClass: "bg-gradient-teal",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Best NEET Coaching Classes in Rahatani Pune | ASQUARE Academy
        </title>
        <meta
          name="title"
          content="Best NEET Coaching Classes in Rahatani Pune | ASQUARE Academy"
        />
        <meta
          name="description"
          content="Join the Best NEET Coaching Classes in Rahatani Pune at ASQUARE Academy. Expert faculty, small batches, detailed mock tests, and personalized mentorship ensure top NEET preparation for students aiming for medical success."
        />
        <meta
          name="keywords"
          content="NEET coaching classes in rahatani pune Best NEET Coaching in rahatani Pune Top NEET Coaching Classes rahatani pune NEET Advanced Preparation rahatani pune NEET Classes in rahatani pune  Best NEET Classes in rahatani pune Top NEET Classes in rahatani pune"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{`
        {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "EducationalOrganization"],
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-Institute-rahatani-pune/#localbusiness",
      "name": "ASQUARE Academy - NEET Coaching Classes in Rahatani Pune",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "url": "https://www.asquareclasses.com/neet-coaching-classes-Institute-rahatani-pune/",
      "telephone": "+919766118877",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rahatani, Pune, Maharashtra, India",
        "addressLocality": "Rahatani",
        "addressRegion": "Maharashtra",
        "postalCode": "411017",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune"
      ],
      "description": "ASQUARE Academy offers the Best NEET Coaching Classes in Rahatani Pune with expert faculty, advanced preparation, small batches, and mock tests for NEET success."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-Institute-rahatani-pune/#webpage",
      "url": "https://www.asquareclasses.com/neet-coaching-classes-Institute-rahatani-pune/",
      "name": "Best NEET Coaching Classes in Rahatani Pune | ASQUARE Academy",
      "description": "Enroll at ASQUARE Academy for Top NEET Coaching Classes in Rahatani Pune. Get advanced NEET preparation, expert mentoring, and personalized guidance to achieve top ranks.",
      "inLanguage": "en-IN"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-Institute-rahatani-pune/#breadcrumb",
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
          "item": "https://www.asquareclasses.com/neet-coaching-classes-pune"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "NEET Coaching Classes in Rahatani Pune",
          "item": "https://www.asquareclasses.com/neet-coaching-classes-Institute-rahatani-pune/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-Institute-rahatani-pune/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you provide NEET Advanced Preparation in Rahatani Pune?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, ASQUARE Academy offers advanced modules, high-yield topic sessions, and full-length mock exams designed for top NEET scorers in Rahatani Pune."
          }
        },
        {
          "@type": "Question",
          "name": "What courses are available at ASQUARE Academy Rahatani?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We provide 2-year, 1-year, crash, and dropper batches, covering the complete NEET syllabus for both beginners and repeaters aiming for top ranks."
          }
        },
        {
          "@type": "Question",
          "name": "Are small batches available at ASQUARE Academy Rahatani Pune?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, our Best NEET Classes in Rahatani Pune maintain small batch sizes to ensure personal attention and focused learning for every student."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer online NEET classes in Rahatani Pune?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, students can opt for classroom or online NEET classes in Rahatani Pune, making it convenient for those with flexible learning needs."
          }
        },
        {
          "@type": "Question",
          "name": "Can students from nearby areas join NEET coaching in Rahatani?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, students from Pimple Saudagar, Wakad, Kalewadi, Pimpri, Chinchwad, and Hinjewadi regularly attend our Top NEET Coaching Classes in Rahatani Pune."
          }
        },
        {
          "@type": "Question",
          "name": "What subjects are covered in NEET coaching classes in Rahatani Pune?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our NEET courses include Physics, Chemistry, and Biology, with in-depth conceptual learning and problem-solving sessions by expert faculty."
          }
        },
        {
          "@type": "Question",
          "name": "How does ASQUARE Academy ensure NEET exam readiness?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Through regular mock tests, personalized mentoring, and progress tracking, we prepare students for strong NEET performance and medical college admission."
          }
        },
        {
          "@type": "Question",
          "name": "Why choose ASQUARE Academy for the Best NEET Coaching in Rahatani Pune?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "With expert faculty, small batches, detailed analysis, and result-driven preparation, ASQUARE Academy stands among the top NEET classes in Rahatani Pune."
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
                Crack NEET with{" "}
                <span className="gradient-text-yellow d-inline-block">
                  Academy – Top NEET Coaching Classes in Rahatani Pune for
                  Success
                </span>
              </h1>
              <p className="fs-5 text-white mb-3 lh">
                Looking for trusted
                <strong> NEET coaching classes in Rahatani? </strong>
                At
                <strong> ASQUARE Academy, </strong>
                we specialize in building strong fundamentals, enhancing
                problem-solving skills, and preparing aspirants for medical
                success. Known as the
                <strong> Best NEET Coaching in Rahatani, </strong>
                we provide structured programs, expert mentorship, and proven
                results for students targeting MBBS, BDS, BAMS, and allied
                medical fields.
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
                    Rahatani, Pimple Saudagar, Wakad, Kalewadi, Thergaon,
                    Pimpri, Chinchwad, and Hinjewadi{" "}
                  </strong>{" "}
                  prefer ASQUARE Academy for our personalized approach and
                  consistent track record.
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
                Best NEET Coaching in Rahatani?
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
                  Our systematic learning approach ensures deep understanding,
                  consistency, and confidence-building — key ingredients for
                  NEET success.
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
            Courses Offered <span> Top NEET Coaching Classes Rahatani</span>
          </h2>

          {/* Description */}
          <div className="mx-auto mb-5">
            <p className="lead text-secondary mb-3">
              The<strong> NEET course at ASQUARE Academy, Rahatani, </strong>{" "}
              provides in-depth coverage of the NEET syllabus with a focus on
              conceptual understanding and exam-oriented strategy. Students from
              <strong>
                {" "}
                Rahatani, Pimple Saudagar, Wakad, Kalewadi, Thergaon, Pimpri,
                Chinchwad, and Hinjewadi{" "}
              </strong>{" "}
              benefit from regular classes, assignments, DPPs (Daily Practice
              Papers), and weekly NEET mock tests.
            </p>

            <p className="d-flex flex-wrap justify-content-center align-items-center gap-2 text-dark">
              <MapPin className="text-primary" size={26} />
              <span>
                We also attract students from{" "}
                <strong>
                  {" "}
                  Rahatani, Pimple Saudagar, Wakad, Kalewadi, Thergaon, Pimpri,
                  Chinchwad, and Hinjewadi{" "}
                </strong>
                who prefer ASQUARE for its academic rigor and accessible PCMC
                location.
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
              Course Details (NEET UG) - Top NEET Coaching Classes in Rahatani
            </h3>

            <p className="fs-5">
              <strong>NEET UG</strong> is the national-level exam for medical
              courses like <strong>MBBS, BDS, BAMS, and BHMS.</strong>
              At <strong>At ASQUARE Academy Rahatani,</strong>
              our structured curriculum ensures conceptual clarity, rigorous
              practice, and effective strategy for consistent performance.
            </p>
            <p className="fs-5">
              We’re recognized among the{" "}
              <strong> Top NEET Coaching Institutes in Rahatani Pune </strong>{" "}
              serving students from
              <strong>
                {" "}
                Rahatani, Pimple Saudagar, Wakad, Kalewadi, Thergaon, Pimpri,
                Chinchwad, and Hinjewadi{" "}
              </strong>
            </p>
            <p className="fs-5">
              We are among the{" "}
              <strong>Top NEET Coaching Institutes in Rahatani PCMC, </strong>
              known for high student success and experienced faculty.
            </p>

            <h4 className="fw-bold text-primary-emphasis mt-5 fs-3">
              Subjects Covered in NEET Classes at Rahatani
            </h4>

            <div className="mt-4">
              {subjectsCovered.map((subject, i) => (
                <SubjectCard key={i} {...subject} />
              ))}
            </div>

            <p className="fs-5">
              Each batch includes test analysis, feedback, and mentor guidance
              for continuous improvement.
            </p>
          </div>

          {/* Right Column - Blue */}
          <div className="col-lg-6 p-5 p-lg-5 text-white lg-b-bg-b">
            <h5 className="fw-bold text-warning mb-4 fs-1">
              Program Duration and Batch Options — NEET Preparation in Rahatani
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
              Best NEET Coaching in Rahatani, PCMC
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
              ASQUARE Academy has a history of outstanding NEET results. Our
              students have secured admission into top medical institutes like
              <strong className="text-primary">
                {" "}AIIMS, BJMC, AFMC, DY Patil, and KEM Hospital.{" "}
              </strong>
              Our focused mentorship, structured preparation, and consistent
              practice make ASQUARE the
              <strong>
                {" "}
                most reliable NEET coaching institutes in Rahatani .
              </strong>
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
                  most preferred NEET training institute in Rahatani and Pune.
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
              Top NEET Coaching Institutes in Rahatani.
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
            Enroll Today at{" "}
            <span>ASQUARE Academy – Top NEET Coaching Classes Rahatani</span>
          </h2>

          {/* Description */}
          <div className="mx-auto mb-5">
            <p className="lead text-secondary mb-3">
              If you’re looking for{" "}
              <strong> Top NEET Classes in Rahatani, </strong>
              SQUARE Academy is your trusted partner for success. With expert
              teaching, structured courses, and consistent results, we help you
              secure your medical seat with confidence.
            </p>

            <p className="d-flex flex-wrap justify-content-center align-items-center gap-2 text-dark">
              <MapPin className="text-primary" size={22} />
              <span>
                Accessible from
                <strong>
                  {" "}Rahatani, Pimple Saudagar, Wakad, Kalewadi, Thergaon, Pimpri,
                  Chinchwad, and Hinjewadi.
                </strong>
              </span>
            </p>
          </div>

          {/* Subheading */}
          <h4 className="fw-bold text-primary mb-4">
            Admissions Open – Limited Seats! Join Today
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

export default NEETRahatani;
