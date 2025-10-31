import React, { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import locationBGImage from "../../../Assets/locationPageImages/neet/NEET slider PC5.jpeg";
import MobileBGImage from "../../../Assets/locationPageImages/neet/NEET slider mobile5.jpeg";
import image1 from "../../../Assets/locationPageImages/neet/NEET Page 11.jpeg";
import image2 from "../../../Assets/locationPageImages/neet/NEET Page 5.jpeg";
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

function NEETChinchwad() {
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
      "NEET mentors with proven expertise in Physics, Chemistry & Biology.",
  },
  {
    Icon: BookOpen,
    title: "Structured Curriculum",
    description:
      "Complete NEET syllabus with NCERT alignment and advanced-level problem solving.",
  },
  {
    Icon: Target,
    title: "Small Batches",
    description:
      "Focused, personalized attention and doubt-solving.",
  },
  {
    Icon: BarChart,
    title: "Regular Tests",
    description:
      "Weekly chapter tests and monthly full-length mock exams.",
  },
  {
    Icon: Calendar,
    title: "Flexible Learning Options",
    description:
      "Classroom and Online NEET Classes in Chinchwad Pune available.",
  },
  {
    Icon: School,
    title: "Board + NEET Integrated Study",
    description:
      "Balanced schedule covering Class 11–12 syllabus and NEET concepts together.",
  },
];

  const subjectsCovered = [
  {
    title: "Physics",
    desc: "Strengthen fundamentals with conceptual learning and numerical practice.",
  },
  {
    title: "Chemistry",
    desc: "Master Physical, Organic & Inorganic concepts through daily problem solving.",
  },
  {
    title: "Biology",
    desc: "Deep NCERT-based coverage with diagram practice, topic tests, and previous year questions.",
  },
];

  const programDurations = [
  {
    icon: Clock,
    title: "2-Year Integrated Program (Class 11 → 12):",
    desc: "Foundation-to-NEET course covering school + competitive syllabus.",
  },
  {
    icon: Target,
    title: "1-Year Target Program (Class 12):",
    desc: "Intensive batch with mock tests, topic revisions, and regular evaluations.",
  },
  {
    icon: CalendarSync,
    title: "Dropper/Repeater Batch:",
    desc: "One-year result-driven course for NEET repeaters with detailed test series.",
  },
  {
    icon: School,
    title: "Crash Course:",
    desc: "2–3 month high-impact program with NEET-level practice and strategy sessions.",
  },
];

  const methodologySteps = [
  {
    Icon: Lightbulb,
    title: "Learn",
    description: "Conceptual classroom learning with visual and analytical teaching.",
  },
  {
    Icon: BookOpen,
    title: "Practice",
    description: "Topic-wise worksheets and DPPs to enhance accuracy.",
  },
  {
    Icon: BarChart,
    title: "Assess",
    description: "Regular mock exams and chapter-wise tests with analysis.",
  },
  {
    Icon: MessageCircle,
    title: "Revise",
    description: "Targeted revisions and one-on-one doubt-clearing before major exams.",
  },
];

  const faqData = [
  {
    q: "Do you offer advanced NEET batches in Chinchwad?",
    a: "Yes, ASQUARE Academy offers advanced NEET preparation programs with detailed mock tests, concept revision drills, and one-on-one mentor guidance to boost final scores.",
  },
  {
    q: "Are small batches available?",
    a: "Yes, we maintain small batch sizes to provide personalized attention, clear student doubts effectively, and ensure focused learning throughout the course.",
  },
  {
    q: "Can students from nearby areas join?",
    a: "Absolutely! Students from Pimpri, Akurdi, Nigdi, Thergaon, Ravet, and Kalewadi regularly join our NEET coaching batches in Chinchwad.",
  },
  {
    q: "Do you offer online NEET classes in Chinchwad?",
    a: "Yes—ASQUARE Academy provides both offline and online NEET coaching in Chinchwad Pune, allowing students to learn flexibly from anywhere.",
  },
  {
    q: "How do you track student progress?",
    a: "We conduct weekly tests, mock exams, and mentor-led performance evaluations to monitor progress and strengthen weak areas.",
  },
  {
    q: "What is the eligibility for NEET coaching?",
    a: "Students studying in Class XI, XII, or those taking a drop year can enroll in our NEET coaching programs designed to match their preparation level.",
  },
  {
    q: "Do you provide doubt-clearing sessions?",
    a: "Yes, regular doubt-solving sessions are held after every topic and test to ensure complete conceptual clarity and confidence among students.",
  },
  {
    q: "What study materials do you provide?",
    a: "ASQUARE Academy offers updated NEET study materials, practice papers, and topic-wise assignments prepared by experienced faculty.",
  },
];

const gridFeatures = [
  {
    Icon: TrendingUp,
    title: "Highly qualified NEET faculty for all subjects.",
    colorClass: "bg-gradient-blue",
  },
  {
    Icon: BookOpen,
    title: "Complete printed and digital study material.",
    colorClass: "bg-gradient-purple",
  },
  {
    Icon: ChartSpline,
    title: "Weekly and monthly test performance analysis.",
    colorClass: "bg-gradient-green",
  },
  {
    Icon: Users,
    title: "Dedicated mentoring and doubt-clearing sessions.",
    colorClass: "bg-gradient-orange",
  },
  {
    Icon: Award,
    title: "Parental progress reports and PTMs.",
    colorClass: "bg-gradient-red",
  },
  {
    Icon: MapPin,
    title: "Flexible offline + online batch options accessible from Chinchwadgaon, Bijlinagar, Pradhikaran, Empire Estate, Udyognagar, and Kalbhor Nagar.",
    colorClass: "bg-gradient-teal",
  },
];

  return (
    <>
      <Helmet>
        <title>
          Best NEET Coaching Classes in Chinchwad Pune | ASQUARE Academy
        </title>
        <meta
          name="title"
          content="Best NEET Coaching Classes in Chinchwad Pune | ASQUARE Academy"
        />
        <meta
          name="description"
          content="Join ASQUARE Academy for the best NEET Coaching Classes in Chinchwad Pune. Small batches, expert faculty, mock tests & personal guidance for top NEET results."
        />
        <meta
          name="keywords"
          content="NEET Coaching in Chinchwad Pune,Best NEET Classes in Chinchwad,Top NEET Coaching Institute Chinchwad,NEET Coaching Centre in Chinchwad,NEET Preparation in Chinchwad,ASQUARE Academy Chinchwad,NEET Coaching near Chinchwadgaon,"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{`
        {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-chinchwad-pune/#localbusiness",
      "name": "ASQUARE Academy - NEET Coaching Classes in Chinchwad Pune",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "url": "https://www.asquareclasses.com/neet-coaching-classes-institute-chinchwad-pune/",
      "telephone": "+919766118877",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Chinchwad, Pune, Maharashtra",
        "addressLocality": "Chinchwad",
        "addressRegion": "Maharashtra",
        "postalCode": "411033",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "18.6298",
        "longitude": "73.7997"
      },
      "openingHours": "Mo-Sa 08:00-20:00",
      "sameAs": [
        "https://www.facebook.com/asquareclasses/",
        "https://www.instagram.com/asquareclasses/"
      ],
      "description": "ASQUARE Academy offers the best NEET Coaching Classes in Chinchwad Pune with small batches, expert teachers, mock tests, and personalized guidance."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-chinchwad-pune/#webpage",
      "url": "https://www.asquareclasses.com/neet-coaching-classes-institute-chinchwad-pune/",
      "name": "Best NEET Coaching Classes in Chinchwad Pune | ASQUARE Academy",
      "description": "ASQUARE Academy provides top NEET Coaching Classes in Chinchwad Pune. Enroll for small batches, detailed mock tests, and expert mentor guidance to boost your NEET score.",
      "inLanguage": "en-IN",
      "isPartOf": {
        "@id": "https://www.asquareclasses.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-chinchwad-pune/#breadcrumb"
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
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-chinchwad-pune/#breadcrumb",
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
          "name": "NEET Coaching Classes in Chinchwad Pune"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-chinchwad-pune/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you offer advanced NEET batches in Chinchwad?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, ASQUARE Academy offers advanced NEET preparation programs with detailed mock tests, concept revision drills, and one-on-one mentor guidance to boost final scores."
          }
        },
        {
          "@type": "Question",
          "name": "Are small batches available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we maintain small batch sizes to provide personalized attention, clear student doubts effectively, and ensure focused learning throughout the course."
          }
        },
        {
          "@type": "Question",
          "name": "Can students from nearby areas join?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely! Students from Pimpri, Akurdi, Nigdi, Thergaon, Ravet, and Kalewadi regularly join our NEET coaching batches in Chinchwad."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer online NEET classes in Chinchwad?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes—ASQUARE Academy provides both offline and online NEET Coaching Classes in Chinchwad Pune, allowing students to learn flexibly from anywhere."
          }
        },
        {
          "@type": "Question",
          "name": "How do you track student progress?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We conduct weekly tests, mock exams, and mentor-led performance evaluations to monitor progress and strengthen weak areas."
          }
        },
        {
          "@type": "Question",
          "name": "What is the eligibility for NEET coaching?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students studying in Class XI, XII, or those taking a drop year can enroll in our NEET coaching programs designed to match their preparation level."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide doubt-clearing sessions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, regular doubt-solving sessions are held after every topic and test to ensure complete conceptual clarity and confidence among students."
          }
        },
        {
          "@type": "Question",
          "name": "What study materials do you provide?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE Academy offers updated NEET study materials, practice papers, and topic-wise assignments prepared by experienced faculty."
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
                Crack NEET with Expert Mentorship at  {" "}
                <span className="gradient-text-yellow d-inline-block">
                  ASQUARE Academy, Chinchwad
                </span>
              </h1>
              <p className="fs-5 text-white mb-3 lh">
                Looking for the best
                <strong> NEET coaching classes in Chinchwad, Pune? </strong>
                At
                <strong> ASQUARE Academy, </strong>
                we prepare medical aspirants with conceptual clarity, personalized mentoring, and regular testing to ensure top NEET scores. Recognized among the
                <strong> Top NEET Coaching Institutes in Chinchwad,  </strong>
                ASQUARE provides structured teaching, NCERT-based learning, and a proven test system designed for competitive success.
              </p>
              <div className="hero-location-info d-flex align-items-start gap-3">
                <MapPin
                  size={24}
                  color="#FFCB03"
                  className="flex-shrink-0 mt-1"
                />
                <span className="text-white">
                  <strong>Our Chinchwad branch conveniently serves students from:</strong> Chinchwadgaon, Chinchwad Station, Bijlinagar, Empire Estate, Kalbhor Nagar, Pradhikaran, Udyognagar, and Aditya Birla Hospital Road,
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
                Best NEET Coaching in Chinchwad
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
              ASQUARE Academy - Chinchwad
            </span>
          </h2>

          {/* Description */}
          <div className="mx-auto mb-5">
            <p className="lead text-secondary mb-3">
              The<strong> NEET course at ASQUARE Academy, Chinchwad, </strong> provides in-depth coverage of the NEET syllabus with a focus on conceptual understanding and exam-oriented strategy.
              Students from<strong> Chinchwadgaon, Bijlinagar, Kalbhor Nagar, and Empire Estate </strong> benefit from regular classes, assignments, DPPs (Daily Practice Papers), and weekly NEET mock tests.
            </p>

            <p className="d-flex flex-wrap justify-content-center align-items-center gap-2 text-dark">
              <MapPin className="text-primary" size={26} />
              <span>
                We also attract students from <strong> Pimpri, Akurdi, Nigdi, and Thergaon, </strong>
               who prefer ASQUARE for its academic rigor and accessible PCMC location.
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
              Course Details (NEET UG) - Top NEET Coaching Classes in Chinchwad
            </h3>

            <p className="fs-5">
              <strong>NEET UG</strong> is India’s gateway exam for{" "}
              <strong>MBBS, BDS, BAMS, BHMS, and BPT</strong>
              At <strong>At ASQUARE Academy Chinchwad,</strong>
              At ASQUARE Academy Chinchwad, our NEET training emphasizes accuracy, concept retention, and speed management through a structured curriculum and consistent testing.
            </p>
            <p className="fs-5">
              We’re recognized among the <strong> Top NEET Coaching Institutes in Chinchwad Pune </strong> serving students from
              <strong>Chinchwad East, Chinchwad West, Udyognagar, and Pradhikaran.</strong>
            </p>
            <p className="fs-5">
              We are among the{" "}
              <strong>Top NEET Coaching Institutes in Chinchwad Pune, </strong>
              known for high student success and experienced faculty.
            </p>

            <h4 className="fw-bold text-primary-emphasis mt-5 fs-3">
              Subjects Covered in NEET Classes at Chinchwad
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
              Program Duration and Batch Options — NEET Preparation in Chinchwad
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
              Best NEET Coaching in Chinchwad, Pune
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
              ASQUARE Academy has a history of outstanding NEET results. Our students have secured admission into top medical institutes like {" "}
              <strong className="text-primary">
                AIIMS, BJMC, AFMC, DY Patil, and KEM Hospital.{" "}
              </strong>
              Our focused mentorship, structured preparation, and consistent practice make ASQUARE the
              <strong> Top NEET Coaching Centre in Chinchwad Pune.</strong>
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
                  most preferred NEET training institute in Chinchwad and PCMC.
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
              ASQUARE Academy – Chinchwad Pune
            </span>
          </h2>

          {/* Description */}
          <div className="mx-auto mb-5">
            <p className="lead text-secondary mb-3">
              If you’re looking for the {" "}
              <strong> Best NEET Coaching Classes in Chinchwad, Pune </strong>
              choose ASQUARE Academy — where expert teaching, focused mentoring, and consistent evaluation ensure your medical dream becomes reality.
            </p>

            <p className="d-flex flex-wrap justify-content-center align-items-center gap-2 text-dark">
              <MapPin className="text-primary" size={22} />
              <span>
                 Convenient from  {" "}
                <strong>
                  Chinchwadgaon, Chinchwad Station, Bijlinagar, Empire Estate, Aditya Birla Hospital Road, Kalbhor Nagar, Udyognagar, Pradhikaran, Akurdi, and Nigdi.
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

export default NEETChinchwad;
