import React, { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import locationBGImage from "../../../Assets/locationPageImages/neet/NEET slider PC4.jpeg";
import MobileBGImage from "../../../Assets/locationPageImages/neet/NEET slider mobile4.jpeg";
import image1 from "../../../Assets/locationPageImages/neet/NEET Page 21.jpeg";
import image2 from "../../../Assets/locationPageImages/neet/NEET Page 2.jpeg";
import {
  BarChart,
  BookOpen,
  Calendar,
  CheckCircle,
  Clock,
  Lightbulb,
  MapPin,
  Target,
  Users,
  School,
  CalendarSync,
  BadgeQuestionMark,
  Award,
  TrendingUp,
  Star
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

function NEETFatima() {
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
    title: "Subject Specialists",
    description:
      "Separate, highly experienced faculty for Physics, Chemistry, and Biology.",
  },
  {
    Icon: BookOpen,
    title: "Smart Study Plans",
    description:
      "Curriculum designed around NCERT and NEET exam trends.",
  },
  {
    Icon: Target,
    title: "Individual Attention",
    description:
      "Small batch sizes with focused doubt-solving sessions.",
  },
  {
    Icon: BarChart,
    title: "Regular Testing System",
    description:
      "Weekly quizzes, monthly mocks, and performance reviews.",
  },
  {
    Icon: Calendar,
    title: "Updated Learning Resources",
    description:
      "Comprehensive study material in both print and digital format.",
  },
  {
    Icon: MapPin,
    title: "Convenient Location",
    description:
      "Easily accessible from Wanowrie, Camp, and NIBM for South Pune students.",
  },
];

  const subjectsCovered = [
  {
    title: "Physics",
    desc: "Core conceptual clarity with problem-solving drills.",
  },
  {
    title: "Chemistry",
    desc: "Detailed coverage of Physical, Organic, and Inorganic Chemistry.",
  },
  {
    title: "Biology",
    desc: "NCERT-based syllabus with diagrams, scoring chapters, and applied examples.",
  },
];

  const programDurations = [
  {
    icon: Clock,
    title: "2-Year Foundation & NEET Prep (Class 11 → 12)",
    desc: "Build a strong base and grow into exam-level preparation.",
  },
  {
    icon: Target,
    title: "1-Year NEET Target Program (Class 12)",
    desc: "Focused curriculum to cover the syllabus with tests and revisions.",
  },
  {
    icon: CalendarSync,
    title: "Dropper/Repeater Batch",
    desc: "One-year intensive program with continuous testing and one-on-one mentoring.",
  },
  {
    icon: School,
    title: "Crash Course (2–3 Months)",
    desc: "Rapid-fire revision with PYQs, mock drills, and last-minute strategies.",
  },
];

  const methodologySteps = [
  {
    Icon: Lightbulb,
    title: "Conceptual Learning",
    description: "Interactive classroom sessions to simplify complex topics.",
  },
  {
    Icon: BookOpen,
    title: "Practice-Driven Training",
    description: "Daily Practice Papers (DPPs) and structured assignments.",
  },
  {
    Icon: BarChart,
    title: "Performance Monitoring",
    description: "Frequent assessments with detailed feedback.",
  },
  {
    Icon: Award,
    title: "Exam Techniques",
    description: "Workshops on time management, speed building, and accuracy.",
  },
  {
    Icon: Users,
    title: "Mentorship Support",
    description: "Continuous motivation and guidance from faculty and mentors.",
  },
];

  const faqData = [
  {
    q: "Is ASQUARE Academy in Fatima Nagar suitable for beginners?",
    a: "Yes, we offer foundation-level and integrated courses starting from Class 11 to build strong fundamentals.",
  },
  {
    q: "How do you ensure students stay consistent?",
    a: "We conduct weekly tests, monthly reviews, and parent meetings to ensure accountability and steady progress.",
  },
  {
    q: "Are crash courses helpful for NEET preparation?",
    a: "Yes, crash courses are designed for last-minute revision and practice with mock exams and past-year questions.",
  },
  {
    q: "What makes the Fatima Nagar branch unique?",
    a: "Its location is convenient for students from Wanowrie, Camp, Hadapsar, and NIBM and the branch is known for small, focused batches.",
  },
  {
    q: "Does ASQUARE provide study material?",
    a: "Yes, updated NEET-focused study material is provided in both printed and digital formats.",
  },
];

const gridFeatures = [
  {
    Icon: Users,
    title: "Small batch sizes for personal focus",
    colorClass: "bg-gradient-blue",
  },
  {
    Icon: BookOpen,
    title: "Updated syllabus coverage with NEET pattern emphasis",
    colorClass: "bg-gradient-purple",
  },
  {
    Icon: Calendar,
    title: "Detailed progress reports for parents through PTMs",
    colorClass: "bg-gradient-green",
  },
  {
    Icon: Award,
    title: "Availability of both offline and online batches",
    colorClass: "bg-gradient-orange",
  },
  {
    Icon: TrendingUp,
    title: "A proven record of students securing admissions in AIIMS, government, and private medical colleges",
    colorClass: "bg-gradient-red",
  },
  {
    Icon: Star,
    title: "Expert faculty with years of NEET coaching experience",
    colorClass: "bg-gradient-teal",
  },
];

  return (
    <>
      <Helmet>
        <title>
          Best NEET Coaching Classes in Fatima Nagar Pune | ASQUARE Academy
        </title>
        <meta
          name="title"
          content="Best NEET Coaching Classes in Fatima Nagar Pune | ASQUARE Academy"
        />
        <meta
          name="description"
          content="Join ASQUARE Academy for top NEET coaching classes in Fatima Nagar Pune. Expert faculty, small batches & crash courses for strong NEET preparation."
        />
        <meta
          name="keywords"
          content="NEET coaching classes in Fatima Nagar pune Best NEET Coaching in Fatima Nagar pune Top NEET Coaching Classes Fatima Nagar pune NEET Advanced Preparation Fatima Nagar pune NEET Classes in Fatima Nagar pune Best NEET Classes in Fatima Nagar pune Top NEET Classes in Fatima Nagar pune"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{`
        {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-fatima-nagar-pune#localbusiness",
      "name": "ASQUARE Academy - NEET Coaching Classes in Fatima Nagar Pune",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "telephone": "9766118877",
      "url": "https://www.asquareclasses.com/neet-coaching-classes-institute-fatima-nagar-pune",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Fatima Nagar, Pune",
        "addressRegion": "Maharashtra",
        "addressCountry": "India"
      },
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune/"
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-institute-fatima-nagar-pune#webpage",
      "url": "https://www.asquareclasses.com/neet-coaching-classes-institute-fatima-nagar-pune",
      "name": "NEET Coaching Classes in Fatima Nagar Pune | ASQUARE Academy",
      "description": "ASQUARE Academy offers the best NEET coaching classes in Fatima Nagar Pune with small batches, expert faculty, and customized learning programs."
    },
    {
      "@type": "EducationalOrganization",
      "name": "ASQUARE Academy",
      "url": "https://www.asquareclasses.com",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune/"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "9766118877",
        "contactType": "Customer Service"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is ASQUARE Academy in Fatima Nagar suitable for beginners?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, ASQUARE Academy offers foundation-level and integrated NEET courses starting from Class 11 to build strong subject fundamentals."
          }
        },
        {
          "@type": "Question",
          "name": "How do you ensure students stay consistent?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We conduct weekly tests, monthly performance reviews, and parent–teacher meetings to ensure steady student progress and accountability."
          }
        },
        {
          "@type": "Question",
          "name": "Are crash courses helpful for NEET preparation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, our crash courses are ideal for last-minute revision and include full-length mock exams and practice with past-year questions."
          }
        },
        {
          "@type": "Question",
          "name": "What makes the Fatima Nagar branch unique?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The branch’s convenient location and small, focused batches make it a top choice for students from Wanowrie, Camp, Hadapsar, and NIBM."
          }
        },
        {
          "@type": "Question",
          "name": "Does ASQUARE provide study material?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, updated NEET-specific study material is provided in both printed and digital formats for comprehensive preparation."
          }
        }
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
          "name": "NEET Coaching Classes in Pune",
          "item": "https://www.asquareclasses.com/best-neet-coaching-classes-Institute-in-pune-maharashtra/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "NEET Coaching Classes in Fatima Nagar Pune",
          "item": "https://www.asquareclasses.com/neet-coaching-classes-institute-fatima-nagar-pune"
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
                Turn Your NEET Ambition into Success with {" "}
                <span className="gradient-text-yellow d-inline-block">
                  ASQUARE Academy
                </span>
              </h1>
              <p className="fs-5 text-white mb-3 lh">
                If you are looking for the  <strong> best NEET coaching in Fatima Nagar, Pune? </strong> At
                 <strong> ASQUARE Academy, </strong>
                 s your trusted partner. With years of experience in medical entrance coaching, we bring together expert faculty, proven strategies, and personalized attention. 
                <strong> Best NEET Coaching Institutes in Fatima Nagar, </strong> We don’t just teach; we mentor, motivate, and prepare you to clear NEET with confidence.
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
                    Fatima Nagar, Wanowrie, Camp, Hadapsar, NIBM Road, Kondhwa, Lullanagar, Salunke Vihar, and BT Kawade Roadh {" "}
                  </strong>
                    have already benefited from our structured programs.
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
                Best NEET Coaching in Fatima Nagar?
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
                  Our goal is to provide every aspirant with the right academic guidance, discipline, and support to achieve their NEET dream.
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
            <span> ASQUARE Academy Fatima Nagar</span>
          </h2>

          {/* Description */}
          <div className="mx-auto mb-5">
            <p className="lead text-secondary mb-3">
              The<strong> NEET course at ASQUARE Academy, Fatima Nagar, </strong>
              offers complete preparation through concept-based teaching, regular testing, and doubt-clearing sessions.<br/>
              Our approach ensures every student strengthens their basics, practices consistently, and gains confidence for NEET.
            </p>

            <p className="d-flex flex-wrap justify-content-center align-items-center gap-2 text-dark">
              <MapPin className="text-primary" size={26} />
              <span>
                Students from
                <strong>
                  {" "}
                    Fatima Nagar, Wanowrie, Camp, Hadapsar, NIBM Road, Kondhwa, Lullanagar, Salunke Vihar, and BT Kawade Road {" "}
                </strong>
                attend our classes for their proximity and the academy’s proven academic record in{" "}
                <strong> NEET coaching across PCMC & Pune. </strong>
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
              Course Details (NEET UG) - Top NEET Coaching Classes in Fatima Nagar
            </h3>

            <p className="fs-5">
              <strong>NEET UG</strong> is India’s national entrance test for{" "}
              <strong>
               MBBS, BDS, BAMS, BHMS, and allied fields.
              </strong>
              At <strong> NEET coaching centre in Fatima Nagar,</strong>
            our structured program combines clarity of concepts, extensive practice, and smart strategy to help students secure top ranks.
            </p>
            <p className="fs-5">
              Our structured programs and experienced faculty make ASQUARE one of the{" "}
              <strong> NEET coaching institute in Fatima Nagar </strong>
            </p>
            <h4 className="fw-bold text-primary-emphasis mt-5 fs-3">
              Subjects Covered in NEET Classes at Fatima Nagar
            </h4>

            <div className="mt-4">
              {subjectsCovered.map((subject, i) => (
                <SubjectCard key={i} {...subject} />
              ))}
            </div>

            <p className="fs-5">
              Each subject is taught with clarity, practical examples, and test-based evaluation to ensure top results.
            </p>
          </div>

          {/* Right Column - Blue */}
          <div className="col-lg-6 p-5 p-lg-5 text-white lg-b-bg-b">
            <h5 className="fw-bold text-warning mb-4 fs-1">
              Program Duration and Batch Options — NEET Preparation in Fatima Nagar
            </h5>

            <div className="d-flex flex-column gap-4">
              {programDurations.map((program, i) => (
                <ProgramCard key={i} {...program} />
              ))}
            </div>

            <div className="mt-5 p-4 rounded-4 border border-warning border-opacity-50 bg-brown">
              <p className="fs-5 mb-0">
                All batches are designed for structured learning, progressive assessment, and exam readiness.
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
              Best NEET Coaching in Fatima Nagar,
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
              At <strong> ASQUARE Academy – Fatima Nagar  </strong>
              has consistently delivered excellent NEET results, with students earning admission to {" "}
              <strong className="text-primary">
                AIIMS, state-run government medical colleges, and reputed private institutions. {" "}
              </strong>
              Our structured test system, performance reviews, and goal-oriented mentoring make ASQUARE the
              <strong> leading NEET institutes in Pune. </strong>
            </p>
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
                This 4-step methodology ensures that ASQUARE remains the {" "}
                <strong>
                  Top NEET Coaching Institute in Fatima Nagar and PCMC Pune.
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
              Top NEET Coaching Institutes in Fatima Nagar.
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
            Enroll Today at <span> ASQUARE Academy – Fatima Nagar </span>
          </h2>

          {/* Description */}
          <div className="mx-auto mb-5">
            <p className="lead text-secondary mb-3">
              Your dream of becoming a doctor begins with the right coaching. Join the {" "}
              <strong> top NEET coaching in Fatima Nagar, Pune  </strong>
             at ASQUARE Academy and prepare with expert mentors, structured programs, and a supportive learning environment.
             </p>

            <p className="d-flex flex-wrap justify-content-center align-items-center gap-2 text-dark">
              <MapPin className="text-primary" size={22} />
              <span>
                 Convenient for students from {" "}
                <strong>
                  {" "} Fatima Nagar, Wanowrie, Camp, Hadapsar, NIBM Road, Kondhwa, Lullanagar, Salunke Vihar and BT Kawade Road.
                </strong>
              </span>
            </p>
          </div>

          {/* Subheading */}
          <h4 className="fw-bold text-primary mb-4">
            Admissions Open – Limited Seats Available!
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

export default NEETFatima;
