import React, { useEffect, useState, Suspense } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Users,
  BookOpen,
  Target,
  BarChart,
  Lightbulb,
  MapPin,
  BadgeQuestionMark,
  Star,
  Trophy,
  Rocket,
} from "lucide-react";
import Navbar from "../../../Components/Navbar/Navbar.jsx";
import Header from "../../../Components/Header/Header.jsx";
import MobileForm from "../../../Components/Mobileform/MobileForm.jsx";
import Footer from "../../../Components/Footer/Footer.jsx";
import FAQAccordion from "../../LocationsPages/neet-pages/components/FAQAccordion.jsx";
import "../../../App.css";
import "./iit-jee.css";
import Loading from "../../Loading.jsx";
// import sampleimg1 from '../../../Assets/SampleImages/sampleimg1.jpeg';
// import sampleimg2 from "../../../Assets/SampleImages/sampleimg2.jpeg";

import sampleimg1 from "../../../Assets/SampleImages/Banners/Banners (5).jpeg";
import sampleimg11 from "../../../Assets/SampleImages/Banners/Banners (2).jpeg";
import sampleimg2 from '../../../Assets/SampleImages/MobBanners/MobBanner1.jpeg';
import sampleimg22 from'../../../Assets/SampleImages/MobBanners/MobBanner2.jpeg';

import sampleimg3 from "../../../Assets/SampleImages/AsquarePics/AsquarePics (9).jpeg"; //9,15
import sampleimg4 from "../../../Assets/SampleImages/AsquarePics/AsquarePics (2).jpeg"; //2,17
import sampleimg5 from "../../../Assets/SampleImages/sampleimg5.jpeg";
import sampleimg6 from "../../../Assets/SampleImages/AsquarePics/AsquarePics (4).jpeg"; //4,8,13,16
import sampleimg7 from "../../../Assets/SampleImages/sampleimg7.jpeg";
// import Swal from "sweetalert2";
import Form from "../../../Components/Form2/Form2.jsx";

const Reviews = React.lazy(() => import("../../../Components/Reviews/Reviews.jsx"));

function IITJEEAkurdi() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // FAQs from the Word file (exact wording)
  const faqs = [
    {
      q: "Q1: Who can join ASQUARE Academy Akurdi?",
      a: "Students of Class XI, XII, and XII pass-outs preparing for IIT JEE coaching classes in Akurdi, including JEE Main & Advanced aspirants.",
    },
    {
      q: "Q2: What subjects are taught at ASQUARE Academy?",
      a: "We offer complete PCM (Physics, Chemistry & Mathematics) coaching for JEE Advanced preparation in Akurdi.",
    },
    {
      q: "Q3: Do you conduct mock exams for JEE?",
      a: "Yes, we conduct weekly practice tests and full-length mock exams to support the Top JEE Mains Coaching Classes in Akurdi.",
    },
    {
      q: "Q4: What course options are available for IIT JEE aspirants?",
      a: "We offer 2-Year Integrated Programs, 1-Year Courses, Crash Courses, and Dropper Batches for students seeking the Best IIT JEE Coaching in Akurdi.",
    },
    {
      q: "Q5: What is the batch size at ASQUARE Academy?",
      a: "We maintain small, focused batches to ensure personalized learning at our Top IIT JEE Classes in Akurdi.",
    },
    {
      q: "Q6: Do parents receive performance updates?",
      a: "Yes, parents receive regular performance reports, attendance updates, and PTMs to track student progress.",
    },
    {
      q: "Q7: Which areas does the Akurdi branch serve?",
      a: "Our center is accessible from Akurdi, Nigdi, Chinchwad, Pimpri, Ravet, and nearby PCMC areas, making us a preferred choice for JEE Advanced coaching classes.",
    },
    {
      q: "Q8: Why choose ASQUARE Academy for IIT JEE preparation?",
      a: "We provide expert faculty, structured study plans, doubt-solving sessions, and consistent results—making us one of the Best IIT JEE Classes in Akurdi.",
    },
  ];

  // For "Why Choose" list we can reuse icons but keep content faithful to Word file
  const whyChoose = [
    {
      Icon: Users,
      title: "Expert Educators",
      desc: "Experienced faculty in IIT-JEE, MHT-CET & NEET coaching.",
    },
    {
      Icon: BookOpen,
      title: "Comprehensive Syllabus",
      desc: "Physics, Chemistry & Mathematics taught per updated exam guidelines.",
    },
    {
      Icon: Target,
      title: "Personal Attention",
      desc: "Small batch sizes for doubt-solving and focused learning.",
    },
    {
      Icon: BarChart,
      title: "Regular Assessments",
      desc: "Weekly chapter tests, mock exams & detailed feedback.",
    },
    {
      Icon: Lightbulb,
      title: "Motivational Support",
      desc: "Counseling & exam strategy sessions to boost confidence.",
    },
  ];

  const subjects = [
    {
      title: "Physics",
      desc: "Conceptual clarity with numerical problem-solving",
    },
    {
      title: "Chemistry",
      desc: "In-depth learning of Physical, Organic & Inorganic Chemistry",
    },
    {
      title: "Mathematics",
      desc: "Advanced practice in Algebra, Calculus, Trigonometry, Geometry & Probability",
    },
  ];

  const batches = [
    {
      title: "2-Year Foundation Course (10th → 12th Moving Students)",
      desc: "Covers Board syllabus + JEE prep.",
    },
    {
      title: "1-Year Intensive Course (11th → 12th Moving Students)",
      desc: "Fast-paced JEE prep with Class XII.",
    },
    {
      title: "Crash Course (2–3 Months)",
      desc: "Quick revision and mock test series.",
    },
    {
      title: "Repeater/Dropper Batch (XII Pass-outs)",
      desc: "One-year focused JEE training for repeaters.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Best IIT JEE Coaching Classes in Akurdi | JEE Main & Advanced Institute</title>
        <meta name="title" content="Best IIT JEE Coaching Classes in Akurdi | JEE Main & Advanced Institute" />
        <meta
          name="description"
          content="Get the Best IIT JEE Coaching in Akurdi with expert faculty, PCM coaching, mock tests & structured JEE Main & Advanced preparation at ASQUARE Academy Akurdi."
        />
        <meta
          name="keywords"
          content={`IIT JEE coaching classes in akudi,
Best IIT JEE Coaching in akudi,
Top JEE Mains Coaching Classes akudi,
IIT JEE Advanced Preparation akudi,
JEE Advanced coaching classes in akudi,
IIT JEE Classes in akudi,
Best IIT JEE Classes in akudi,
Top IIT JEE Classes in akudi,
`}
        />
        {/* Schema from Word file (updated URL to use 'akurdi' as confirmed) */}
        <script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-akudi-pune#localbusiness",
      "name": "ASQUARE Academy Akurdi - IIT JEE Coaching",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-akudi-pune",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "telephone": "9766118877",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Akurdi, Pune",
        "addressLocality": "Akurdi",
        "addressRegion": "Maharashtra",
        "postalCode": "411035",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune"
      ],
      "description": "Best IIT JEE Coaching Classes in Akurdi offering JEE Main & Advanced preparation with expert faculty, PCM classes, mock tests and structured study plans."
    },

    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-akudi-pune#webpage",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-akudi-pune",
      "name": "IIT JEE Coaching Classes in Akurdi",
      "description": "Top IIT JEE Coaching Institute in Akurdi for JEE Main & Advanced preparation, offering PCM coaching, mock tests, small batches & expert faculty."
    },

    {
      "@type": "EducationalOrganization",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-akudi-pune#educational",
      "name": "ASQUARE Academy Akurdi",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-akudi-pune",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "description": "Best IIT JEE Classes in Akurdi with complete PCM coaching, mock tests & structured programs for JEE Main and JEE Advanced preparation.",
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune"
      ]
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-akudi-pune#breadcrumb",
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
          "name": "IIT JEE Coaching",
          "item": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-akudi-pune"
        }
      ]
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-akudi-pune#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can join ASQUARE Academy Akurdi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students of Class XI, XII, and XII pass-outs preparing for IIT JEE coaching classes in Akurdi, including JEE Main & Advanced aspirants."
          }
        },
        {
          "@type": "Question",
          "name": "What subjects are taught at ASQUARE Academy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer complete PCM coaching—Physics, Chemistry & Mathematics—for JEE Advanced preparation in Akurdi."
          }
        },
        {
          "@type": "Question",
          "name": "Do you conduct mock exams for JEE?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we conduct weekly practice tests and full-length mock exams to support the Top JEE Mains Coaching Classes in Akurdi."
          }
        },
        {
          "@type": "Question",
          "name": "What course options are available for IIT JEE aspirants?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer 2-Year Integrated Programs, 1-Year Courses, Crash Courses, and Dropper Batches for students seeking the Best IIT JEE Coaching in Akurdi."
          }
        },
        {
          "@type": "Question",
          "name": "What is the batch size at ASQUARE Academy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We maintain small, focused batches to ensure personalized learning at our Top IIT JEE Classes in Akurdi."
          }
        },
        {
          "@type": "Question",
          "name": "Do parents receive performance updates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, parents receive regular performance reports, attendance updates, and PTMs to track student progress."
          }
        },
        {
          "@type": "Question",
          "name": "Which areas does the Akurdi branch serve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our center is accessible from Akurdi, Nigdi, Chinchwad, Pimpri, Ravet, and nearby PCMC areas, making us a preferred choice for JEE Advanced coaching classes."
          }
        },
        {
          "@type": "Question",
          "name": "Why choose ASQUARE Academy for IIT JEE preparation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We provide expert faculty, structured study plans, doubt-solving sessions, and consistent results—making us one of the Best IIT JEE Classes in Akurdi."
          }
        }
      ]
    }
  ]
}

`}</script>

        <link rel="canonical" href={canonicalUrl} />
      </Helmet>

      <Navbar />
      <Header />

      {/* Full-width Slider with Overlaid Form */}
      <section className="jee-full-slider-section position-relative">
        {/* Responsive Bootstrap Carousel (renders one carousel based on isDesktop) */}
        {isDesktop ? (
          <div id="jeeFullCarouselDesktop" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {[sampleimg1, sampleimg11].map((img, i) => (
                <div key={i} className={`carousel-item ${i === 0 ? "active" : ""}`}>
                  <img src={img} className="d-block w-100 carousel-image" alt={`Slide ${i + 1}`} />
                  <div className="carousel-overlay" />
                </div>
              ))}
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#jeeFullCarouselDesktop" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" />
            </button>

            <button className="carousel-control-next" type="button" data-bs-target="#jeeFullCarouselDesktop" data-bs-slide="next">
              <span className="carousel-control-next-icon" />
            </button>
          </div>
        ) : (
          /* Mobile carousel */
          <div id="jeeFullCarouselMobile" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {[sampleimg2, sampleimg22].map((img, i) => (
                <div
                  key={i}
                  className={`carousel-item ${i === 0 ? "active" : ""}`}
                  style={{
                    height: "400px", // slightly shorter on mobile
                    backgroundImage: `url(${img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="carousel-overlay" />
                </div>
              ))}
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#jeeFullCarouselMobile" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" />
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#jeeFullCarouselMobile" data-bs-slide="next">
              <span className="carousel-control-next-icon" />
            </button>
          </div>
        )}

        {/* Form Over Slider */}
        <div className="jee-slider-form-box">
          <div className="jee-enquiry-form rounded-4 ">
            <MobileForm />
            <Form />
          </div>
        </div>
      </section>

      <hr />

      {/* Hero Section */}
      <section className="jee-hero-section text-white d-flex align-items-center bg-transparent">
        <div className="container py-5">
          <div className="row align-items-center">
            {/* Left Side: Text */}
            <div className="col-12 col-lg-8 col-md-12 text-center text-md-start">
              <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
                Excel in JEE Main & Advanced with{" "}
                <span className="highlight-text text-warning">ASQUARE Academy Akurdi</span>
              </motion.h1>

              <motion.h2 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                Trusted Coaching for Future Engineers in Akurdi
              </motion.h2>

              {/* Intro paragraph (exact from Word file) */}
              <p className="lead d-none d-md-block">
                Looking for IIT-JEE coaching classes in Akurdi, Pune? At ASQUARE Academy, we deliver concept-based learning, personalized guidance, and result-oriented preparation. Our Akurdi branch helps students build a strong foundation for IITs, NITs, IIITs, and India’s top engineering colleges. With structured study plans and exam-focused strategies, we prepare aspirants to perform their best in JEE Main & Advanced.
              </p>

              <p className="lead d-block d-md-none">
                Looking for IIT-JEE coaching classes in Akurdi, Pune? At ASQUARE Academy, we deliver concept-based learning, personalized guidance, and result-oriented preparation. Our Akurdi branch helps students build a strong foundation for IITs, NITs, IIITs, and India’s top engineering colleges. With structured study plans and exam-focused strategies, we prepare aspirants to perform their best in JEE Main & Advanced.
              </p>

              <a className="btn btn-warning btn-lg rounded-pill mt-3 shadow-lg">
                <Link to={"/"} className="nav-item nav-item-list text-warning">
                  🚀 Enroll Now
                </Link>
              </a>
            </div>

            {/* Right Side: Transparent Image */}
            <div className="col-12 col-lg-4 col-md-12 mt-5 mt-md-0 text-center">
              <img
                src={sampleimg3}
                alt="ASQUARE Academy"
                className="img-fluid mx-auto fade-in imgsiz"
                style={{
                  objectFit: "contain",
                  opacity: 0.95,
                  borderRadius: "10px",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Why Choose */}
      <section className="jee-why py-5 ">
        <div className="container">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">
            Why Choose <span className="highlight-text text-primary">ASQUARE Academy</span> in Akurdi?
          </motion.h3>

          <div className="row g-4 justify-center" style={{ justifyContent: "center" }}>
            {whyChoose.map((item, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <motion.div whileHover={{ scale: 1.05 }} className="jee-feature-card shadow-lg rounded-4 p-4 h-100">
                  <item.Icon size={40} className="mb-3 text-warning" />
                  <h5 className="fw-bold mb-2">{item.title}</h5>
                  <p className="text-muted">{item.desc}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr />

      {/* Programs Section */}
      <section className="jee-programs py-5 bg-light">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-8 text-center text-lg-start order-2">
              <motion.h4 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-centerr">
                Our <span className="highlight-text text-primary">JEE Coaching Programs</span>
              </motion.h4>

              <p className="lead text-secondary">
                The Joint Entrance Examination (JEE) is a highly competitive exam that demands clarity, speed, and accuracy. At ASQUARE Academy Akurdi, we emphasize fundamentals, practice-based learning, and exam-readiness to prepare students for both JEE Main & Advanced.
              </p>
            </div>

            <div className="col-lg-4 text-center order-1">
              <motion.img whileHover={{ scale: 1.03 }} src={sampleimg4} alt="JEE Coaching" className="img-fluid rounded-4 shadow-lg mx-auto d-block" style={{ width: "85%" }} />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Subjects + Batches Section */}
      <section className="jee-gradient-section py-5 text-white">
        <div className="container">
          <motion.h4 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">
            Subjects We Cover
            <span className="highlight-text text-warning">&nbsp;&&nbsp;</span>
            Duration & Batch Options
          </motion.h4>
          <br />

          <div className="row g-4">
            <div className="col-lg-6">
              <h4 className="highlight-text text-warning fw-bold mb-4 text-centerr">Subjects We Cover</h4>
              {subjects.map((sub, i) => (
                <div key={i} className="jee-subject-box mb-4 p-3 pb-4 pt-4  rounded-4 bg-white bg-opacity-10 backdrop-blur-md border border-light border-opacity-25">
                  <h5 className="fw-semibold">{sub.title}</h5>
                  <p className="small mb-0">{sub.desc}</p>
                </div>
              ))}
            </div>

            <div className="col-lg-6">
              <h4 className="highlight-text text-warning fw-bold mb-4 text-centerr">Course Duration & Batch Options</h4>
              {batches.map((b, i) => (
                <div key={i} className="jee-subject-box mb-3 p-3 rounded-4 bg-white bg-opacity-10 backdrop-blur-md border border-light border-opacity-25">
                  <h5 className="fw-semibold">{b.title}</h5>
                  <p className="small mb-0">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Teaching Methodology */}
      <section className="jee-method py-5 bg-light">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-12 text-center text-lg-start">
              <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">
                Teaching <span className="text-primary">Methodology</span>
              </motion.h3>

              <div className="row g-4 justify-content-center">
                {[
                  "Daily interactive lectures with assignments",
                  "One-to-one doubt-solving support",
                  "Weekly topic tests & full-length mock exams",
                  "Parent–teacher meetings for performance updates",
                ].map((step, i) => (
                  <div key={i} className="col-lg-3 col-6">
                    <motion.div whileHover={{ y: -5 }} className="method-card p-4 bg-white rounded-4 shadow-sm h-100 text-center">
                      <p className="text-muted small mb-0">{step}</p>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Key Highlights Section */}
      <section className="jee-highlights py-5 text-white">
        <div className="container text-center">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
            Key Highlights of
            <span className="highlight-text text-warning">&nbsp;Akurdi&nbsp;</span>
            Branch
          </motion.h3>

          <div className="row justify-content-center g-4">
            {[
              "•\tLimited batch size for individual focus",
              "•\tUpdated JEE notes, study modules & question banks",
              "•\tWorkshops on time management & exam strategies",
              "•\tRegular progress tracking & parent updates",
              "•\tRecognized as a leading IIT-JEE coaching center in Akurdi, Pune",
            ].map((text, i) => {
              const highlightedText = text.includes("leading IIT-JEE coaching center in Akurdi, Pune")
                ? text.replace("leading IIT-JEE coaching center in Akurdi, Pune", '<b className="bld">leading IIT-JEE coaching center in Akurdi, Pune</b>')
                : text;

              return (
                <motion.div key={i} className="col-md-5 col-lg-4 col-6" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                  <div className="highlight-card shadow-lg rounded-4 p-4 bg-white bg-opacity-10 backdrop-blur-md border border-light border-opacity-25">
                    <div className="icon-circle mx-auto mb-3">
                      <h2>🎓</h2>
                    </div>
                    <p className="fw-semibold text-light " dangerouslySetInnerHTML={{ __html: highlightedText }}></p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <hr />

      <Suspense fallback={<Loading />}>
        <Reviews />
      </Suspense>

      <hr />

      {/* Results Section */}
      <section className="jee-results py-5 text-white">
        <div className="container">
          <div className="row align-items-center g-5">
            {/* Text Section */}
            <div className="col-lg-8 text-center text-lg-start">
              <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
                Results That Prove Our <span className="highlight-text text-warning">Success</span> 
              </motion.h3>
              <p className="lead text-light">
                ASQUARE Academy has consistently produced IIT-JEE toppers and engineering achievers. The Akurdi branch continues this tradition with quality teaching, structured learning, and strong academic guidance.
              </p>
            </div>

            {/* Image Section */}
            <div className="col-lg-4 text-center">
              <motion.img whileHover={{ scale: 1.05 }} src={sampleimg6} alt="Success Stories" className="img-fluid rounded-4 shadow-lg mx-auto d-block" style={{ width: "80%" }} />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* FAQs */}
      <section className="jee-faq py-5">
        <div className="container">
          <div className="text-center mb-5">
            <div className="d-inline-block bg-primary bg-opacity-10 text-primary fw-bold rounded-pill px-3 py-1 mb-3">
              <BadgeQuestionMark /> FAQs
            </div>

            <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">
              Frequently Asked Questions <span className="text-primary">(FAQ)</span>
            </motion.h3>
          </div>

          <div className="row justify-content-center">
            {/* Left Column */}
            <div className="col-12 col-md-6 mb-4 mb-md-0 ">
              <FAQAccordion faqs={faqs.slice(0, Math.ceil(faqs.length / 2))} accordionId="jeeFaqLeft" />
            </div>

            {/* Right Column */}
            <div className="col-12 col-md-6">
              <FAQAccordion faqs={faqs.slice(Math.ceil(faqs.length / 2))} accordionId="jeeFaqRight" />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Final CTA */}
      <section id="enroll" className="jee-enroll-section py-5 text-center text-white">
        <div className="container">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
            Join <span className="highlight-text text-warning">ASQUARE Academy</span> Akurdi Today
          </motion.h3>

          <p className="lead mb-4">
            Achieve your IIT dream with ASQUARE Academy’s JEE coaching in Akurdi, Pune. With expert faculty, advanced study resources, and proven results, we are your reliable partner for IIT-JEE, CET & NEET coaching.
          </p>

          <p>
            <MapPin className="text-warning" /> Best for students from Akurdi, Nigdi, Chinchwad, Pimpri, Ravet, and nearby PCMC regions.
          </p>

          <a className="btn btn-lg btn-warning fw-bold mt-3 px-5 py-3 rounded-pill shadow-lg">
            <Link to={"/"} className="nav-item nav-item-list text-white">
              ⚡ Admissions Open – Limited seats available! Call today to reserve your spot.
            </Link>
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default IITJEEAkurdi;
