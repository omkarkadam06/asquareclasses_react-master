import React, { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import locationBGImage from "../../../Assets/locationPageImages/neet/NEET slider PC1.jpeg";
import MobileBGImage from "../../../Assets/locationPageImages/neet/NEET slider mobile1.jpeg";
import image1 from "../../../Assets/locationPageImages/neet/NEET Page 20.jpeg";
import image2 from "../../../Assets/locationPageImages/neet/NEET Page 21.jpeg";
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

function NEETVidyaNagar() {
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
      "Qualified and experienced mentors for all NEET subjects.",
  },
  {
    Icon: BookOpen,
    title: "Structured Program",
    description:
      "NEET-based curriculum aligned with NCERT concepts.",
  },
  {
    Icon: Target,
    title: "Small Batches",
    description:
      "Enables personal attention and doubt-solving.",
  },
  {
    Icon: BarChart,
    title: "Regular Evaluation",
    description:
      "Weekly topic tests, monthly mocks, and progress reviews.",
  },
  {
    Icon: Calendar,
    title: "Flexible Learning",
    description:
      "Both classroom and online NEET Classes in Vidyanagar Pune.",
  },
  {
    Icon: School,
    title: "Integrated Study",
    description:
      "Board + NEET synchronized preparation.",
  },
];

const subjectsCovered = [
  {
    title: "Physics",
    desc: "Conceptual learning with formula derivations and numericals.",
  },
  {
    title: "Chemistry",
    desc: "Complete Physical, Organic & Inorganic coverage.",
  },
  {
    title: "Biology",
    desc: "Thorough NCERT-based content with high-weightage topics and PYQs.",
  },
];

const programDurations = [
  {
    icon: Clock,
    title: "2-Year Integrated (Class 11 → 12):",
    desc: "Foundation-to-advanced course with dual focus on boards & NEET.",
  },
  {
    icon: Target,
    title: "1-Year Target (Class 12):",
    desc: "Intensive program for students appearing this year.",
  },
  {
    icon: CalendarSync,
    title: "Dropper/Repeater Batch:",
    desc: "One-year revision and full syllabus test batch.",
  },
  {
    icon: School,
    title: "Crash Course:",
    desc: "2–3 months short-term program for quick revision and practice.",
  },
];

const methodologySteps = [
  {
    Icon: Lightbulb,
    title: "Learn",
    description: "Engaging and interactive lectures by subject experts.",
  },
  {
    Icon: BookOpen,
    title: "Practice",
    description: "Daily worksheets and problem sets.",
  },
  {
    Icon: BarChart,
    title: "Assess",
    description: "Weekly & monthly NEET-level mock exams.",
  },
  {
    Icon: MessageCircle,
    title: "Revise",
    description: "Focused revision sessions and special topic drills.",
  },
];

const faqData = [
  {
    q: "Do you provide advanced NEET preparation in Vidyanagar?",
    a: "Yes—advanced mock tests, revision drills, and test analyses are part of the program.",
  },
  {
    q: "Are small batches available?",
    a: "Yes, every batch is small to ensure individual focus.",
  },
  {
    q: "Can students from nearby areas like Vishrantwadi or Kalas join?",
    a: "Definitely! Students from Vishrantwadi, Kalas, Airport Road, Dhanori, and Lohegaon attend regularly.",
  },
  {
    q: "Is online NEET coaching available?",
    a: "Yes—ASQUARE provides both classroom and online NEET Classes in Vidyanagar Pune.",
  },
  {
    q: "How do you monitor student progress?",
    a: "Through regular tests, analysis sessions, and parent feedback reports.",
  },
];

const gridFeatures = [
  {
    Icon: Users,
    title: "Expert faculty with years of NEET mentoring experience.",
    colorClass: "bg-gradient-blue",
  },
  {
    Icon: BookOpen,
    title: "Comprehensive study material (printed + digital).",
    colorClass: "bg-gradient-purple",
  },
  {
    Icon: Award,
    title: "Weekly progress tracking and PTMs.",
    colorClass: "bg-gradient-green",
  },
  {
    Icon: ChartSpline,
    title: "Speed, accuracy & exam strategy workshops.",
    colorClass: "bg-gradient-orange",
  },
  {
    Icon: BarChart,
    title: "Online mock tests with analytics.",
    colorClass: "bg-gradient-red",
  },
  {
    Icon: MapPin,
    title:
      "Convenient for students from Vishrantwadi, Kalas, Airport Road, Dhanori, and Lohegaon.",
    colorClass: "bg-gradient-teal",
  },
];

  return (
    <>
      <Helmet>
        <title>
          Best NEET Coaching Classes in Vidyanagar Pune | ASQUARE Academy
        </title>
        <meta
          name="title"
          content="Best NEET Coaching Classes in Vidyanagar Pune | ASQUARE Academy"
        />
        <meta
          name="description"
          content="Join the Best NEET Coaching Classes in Vidyanagar Pune at ASQUARE Academy. Small batches, advanced mock tests, online and classroom options help students achieve top NEET results under expert faculty guidance."
        />
        <meta
          name="keywords"
          content="NEET coaching classes in vidyanagar pune Best NEET Coaching in vidyanagar Pune Top NEET Coaching Classes vidyanagar pune NEET Advanced Preparation vidyanagar pune NEET Classes in vidyanagar pune  Best NEET Classes in vidyanagar pune Top NEET Classes in vidyanagar pune"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{`
        {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "EducationalOrganization"],
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-Institute-vidyanagar-pune/#localbusiness",
      "name": "ASQUARE Academy - NEET Coaching Classes in Vidyanagar Pune",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "url": "https://www.asquareclasses.com/neet-coaching-classes-Institute-vidyanagar-pune/",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Vidyanagar, Pune",
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
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-Institute-vidyanagar-pune/#webpage",
      "url": "https://www.asquareclasses.com/neet-coaching-classes-Institute-vidyanagar-pune/",
      "name": "NEET Coaching Classes in Vidyanagar Pune | ASQUARE Academy",
      "description": "ASQUARE Academy offers the Best NEET Coaching in Vidyanagar Pune with small batches, expert faculty, and mock test-based learning for top medical exam preparation."
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-Institute-vidyanagar-pune/#breadcrumbs",
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
          "item": "https://www.asquareclasses.com/neet-coaching-classes-pune"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "NEET Coaching Classes in Vidyanagar Pune",
          "item": "https://www.asquareclasses.com/neet-coaching-classes-Institute-vidyanagar-pune/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.asquareclasses.com/neet-coaching-classes-Institute-vidyanagar-pune/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you provide advanced NEET preparation in Vidyanagar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, ASQUARE Academy offers advanced mock tests, revision drills, and detailed performance analyses to ensure students excel in NEET exams."
          }
        },
        {
          "@type": "Question",
          "name": "Are small batches available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, each batch at ASQUARE Academy is small and focused to ensure individual attention and strong conceptual clarity for every student."
          }
        },
        {
          "@type": "Question",
          "name": "Can students from nearby areas like Vishrantwadi or Kalas join?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. Students from Vishrantwadi, Kalas, Airport Road, Dhanori, and Lohegaon regularly join NEET coaching at ASQUARE Academy Vidyanagar Pune."
          }
        },
        {
          "@type": "Question",
          "name": "Is online NEET coaching available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, ASQUARE Academy offers both classroom and online NEET coaching in Vidyanagar Pune for flexible and result-oriented learning."
          }
        },
        {
          "@type": "Question",
          "name": "How do you monitor student progress?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We conduct regular mock tests, provide detailed analysis sessions, and maintain parent feedback reports to track student progress effectively."
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
                Crack NEET with Expert Mentorship  {" "}
                <span className="gradient-text-yellow d-inline-block">
                  ASQUARE Academy, Vidyanagar
                </span>
              </h1>
              <p className="fs-5 text-white mb-3 lh">
                Searching for result-oriented 
                <strong> NEET coaching classes in Vidyanagar, Pune? </strong>
                At
                <strong> ASQUARE Academy, </strong>
                we train medical aspirants through conceptual teaching, regular assessments, and personalized mentoring. Recognized among the
                <strong> Best NEET Coaching in Vidyanagar, </strong>
                we help students master NEET concepts and improve accuracy through structured preparation and consistent feedback.
              </p>
              <div className="hero-location-info d-flex align-items-start gap-3">
                <MapPin
                  size={24}
                  color="#FFCB03"
                  className="flex-shrink-0 mt-1"
                />
                <span className="text-white">
                    Students from
                  <strong> Vishrantwadi, Kalas, Airport Road, Dhanori, Lohegaon, and Tingre Nagar  </strong> choose ASQUARE for its experienced mentors and proven NEET results.
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
                Best NEET Coaching in Vidyanagar?
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
            Comprehensive NEET Course Overview{" "}
            <span>
              {" "}
              ASQUARE Academy, Vidyanagar
            </span>
          </h2>

          {/* Description */}
          <div className="mx-auto mb-5">
            <p className="lead text-secondary mb-3">
              The<strong> NEET course at ASQUARE Academy, Vidyanagar, </strong> 
              is designed to develop clarity, accuracy, and confidence among NEET aspirants. Covering the complete NEET syllabus, our program includes structured lectures, daily assignments, and practice tests that help students perform at their best.
            </p>

            <p className="d-flex flex-wrap justify-content-center align-items-center gap-2 text-dark">
              <MapPin className="text-primary" size={26} />
              <span>
                We also attract students from <strong>  Vishrantwadi, Kalas, Airport Road, Dhanori, Lohegaon, and Tingre Nagar  </strong>
               who prefer ASQUARE for its academic rigor and accessible Vidyanagar location.
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
              Course Details (NEET UG) - Top NEET Coaching Classes in Vidyanagar
            </h3>

            <p className="fs-5">
              <strong>NEET UG</strong> is the national-level exam for medical courses like {" "}
              <strong>MBBS, BDS, BAMS, and BHMS.</strong>
              At <strong>At ASQUARE Academy Vidyanagar,</strong>
              our structured curriculum ensures conceptual clarity, rigorous practice, and effective strategy for consistent performance.
            </p>
            <p className="fs-5">
              We’re recognized among the <strong> Top NEET Coaching Institutes in Vidyanagar Pune </strong> serving students from
              <strong> Vishrantwadi, Kalas, Airport Road, Dhanori, Lohegaon, and Tingre Nagar </strong>
            </p>
            <p className="fs-5">
              We are among the{" "}
              <strong>Top NEET Coaching Institutes in Vidyanagar , </strong>
              known for high student success and experienced faculty.
            </p>

            <h4 className="fw-bold text-primary-emphasis mt-5 fs-3">
              Subjects Covered in NEET Classes at Vidyanagar
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
              Program Duration and Batch Options — NEET Preparation in Vidyanagar
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
              Best NEET Coaching in Vidyanagar,
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
              At ASQUARE Academy has a history of outstanding NEET results. Our students have secured admission into top medical institutes like {" "}
              <strong className="text-primary">
                AIIMS, BJMC, AFMC, and DY Patil Medical College Pune.{" "}
              </strong>
              Our focused mentorship, structured preparation, and consistent practice make ASQUARE the
              <strong>  Top NEET Coaching Institute in Vidyanagar Pune. </strong>
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
                  most preferred NEET training institute in Vidyanagar and Pune.
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
              Top NEET Coaching Institutes in Vidyanagar.
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
              ASQUARE Academy – Vidyanagar Pune
            </span>
          </h2>

          {/* Description */}
          <div className="mx-auto mb-5">
            <p className="lead text-secondary mb-3">
              If you’re looking for {" "}
              <strong> Top NEET Classes in Vidyanagar, Pune </strong>
              SQUARE Academy is your trusted partner for success. With expert teaching, structured courses, and consistent results, we help you secure your medical seat with confidence.
            </p>

            <p className="d-flex flex-wrap justify-content-center align-items-center gap-2 text-dark">
              <MapPin className="text-primary" size={22} />
              <span>
                Convenient from  {" "}
                <strong>
                  Vidyanagar, Vishrantwadi, Kalas, Airport Road, Dhanori, and Lohegaon.
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

export default NEETVidyaNagar;
