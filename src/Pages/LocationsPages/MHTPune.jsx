import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import Loading from "../Loading.jsx";
import MobileForm from "../../Components/Mobileform/MobileForm.jsx";
import "../locationspage.css";
import locationBGImage from "../../Assets/locationPageImages/mht-cet/mhcet-desktop-bg5.0.jpeg";
import MobileBGImage from "../../Assets/locationPageImages/mht-cet/mhcet-mobile-bg5.0.jpeg";
import MethodologyBg from "../../Assets/locationPageImages/teaching-methodology.jpeg";
import image1 from "../../Assets/locationPageImages/mht-cet/MH-CET page 16.jpeg";
import image2 from "../../Assets/locationPageImages/mht-cet/MH-CET page 15.jpeg";
import location from "../../Assets/locationPageImages/mht-cet/location.png";
import personalized from "../../Assets/locationPageImages/mht-cet/personalized.png";
import qualified from "../../Assets/locationPageImages/mht-cet/qualified.png";
import updated from "../../Assets/locationPageImages/mht-cet/updated.png";
import weekly_chapter from "../../Assets/locationPageImages/mht-cet/weekly_chapter.png";

const Reviews = React.lazy(() =>
  import("../../Components/Reviews/Reviews.jsx")
);

function MHTPune() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  return (
    <>
      <Helmet>
        <title>
         Best MHT-CET Coaching Classes in Pune | Top CET Institute – ASQUARE Academy
        </title>
        <meta
          name="title"
          content="Best MHT-CET Coaching Classes in Pune | Top CET Institute – ASQUARE Academy"
        />
        <meta
          name="description"
          content="Join ASQUARE Academy Pune for top MHT-CET Coaching Classes. Expert faculty, mock tests, small batches, and proven results for Engineering & Pharmacy aspirants."
        />
        <meta
          name="keywords"
          content="MHT-CET Coaching in Pune Pune,Best MHT-CET Classes in Pune, Top CET Coaching Institute Pune,MHT-CET Preparation in Pune,ASQUARE Academy Pune,Engineering CET Coaching Pune Pune,Pharmacy CET Coaching Pune,"
        />
        <script type="application/ld+json">{`
        {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "name": "ASQUARE Academy Pune",
      "url": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-pune",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "description": "ASQUARE Academy offers the best MHT-CET Coaching in Pune for Engineering (PCM) and Pharmacy (PCB) aspirants with expert faculty, mock tests, and integrated board preparation.",
      "telephone": "+91-9766118877",
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune/"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "addressCountry": "IN"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-pune",
      "url": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-pune",
      "name": "Best MHT-CET Coaching Classes in Pune | Top CET Institute – ASQUARE Academy",
      "description": "Enroll in the best MHT-CET Coaching Classes in Pune at ASQUARE Academy. Top mentors, small batches, mock tests, and results-driven CET preparation.",
      "publisher": {
        "@type": "Organization",
        "name": "ASQUARE Academy",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png"
        }
      }
    },
    {
      "@type": "LocalBusiness",
      "name": "ASQUARE Academy Pune",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "telephone": "+91-9766118877",
      "priceRange": "₹₹",
      "url": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-pune",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Wanowrie, Pune, Maharashtra",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411040",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune/"
      ],
      "openingHours": "Mo-Su 08:00-20:00"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can join the MHT-CET Coaching in Pune at ASQUARE Academy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students from Class XI, XII, or drop-year aspirants preparing for Engineering or Pharmacy can join ASQUARE Academy Pune."
          }
        },
        {
          "@type": "Question",
          "name": "What subjects are taught in the MHT-CET course?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE Academy covers Physics, Chemistry, Mathematics (PCM) for Engineering and Biology (PCB) for Pharmacy students."
          }
        },
        {
          "@type": "Question",
          "name": "Are mock tests and assessments included?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, weekly topic tests and full-length MHT-CET mock exams are part of every batch at ASQUARE Academy Pune."
          }
        },
        {
          "@type": "Question",
          "name": "What type of batches are offered?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE Academy offers 2-year integrated, 1-year target, crash course, and repeater batches for MHT-CET aspirants."
          }
        },
        {
          "@type": "Question",
          "name": "Does ASQUARE Academy offer online MHT-CET coaching?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, ASQUARE provides both online and offline MHT-CET classes for flexible learning options."
          }
        },
        {
          "@type": "Question",
          "name": "What makes ASQUARE Academy the best in Pune?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Expert mentors, small batches, regular mock tests, and consistent results make ASQUARE Academy Pune the best choice for MHT-CET coaching."
          }
        },
        {
          "@type": "Question",
          "name": "Which colleges do ASQUARE students get admitted to?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students from ASQUARE Academy Pune have secured admissions in top colleges like COEP Pune, MIT-WPU, DY Patil, and VIT Pune."
          }
        },
        {
          "@type": "Question",
          "name": "What is included in the MHT-CET Preparation program?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The program includes board integration, DPPs, mock exams, doubt sessions, and personalized mentor guidance."
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
          "name": "MHT-CET Coaching Classes",
          "item": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-pune"
        }
      ]
    }
  ]
}
        `}</script>
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>

      <Navbar />
      <Header />

      {/* Hero Section */}
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

      {/* Mobile Form */}
      <section className="Location_MobileForm">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <MobileForm />
            </div>
          </div>
        </div>
      </section>

      {/* Left Right Section 1 - Intro */}
      <section className="leftright_section padd">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 img-col order-2 order-lg-1">
              <img className="common_image" src={image1} alt="ASQUARE Pune" />
            </div>
            <div className="col-lg-6 col-md-12 order-1 order-lg-2">
              <h1 className="common_title">
                Crack MHT-CET with Expert Coaching at{" "}
                <span className="common_title_span">ASQUARE Academy,</span>{" "}
                Pune
              </h1>
              <p>
                At {" "}
                <strong> ASQUARE Academy, </strong> we guide students for both {" "}
                <strong> Engineering (PCM) and Pharmacy (PCB)  </strong> streams with a structured blend of conceptual learning, targeted practice, and expert mentoring. Known for its consistent results, ASQUARE Academy Pune helps aspirants achieve top ranks through focused <strong> MHT-CET preparation in Pune </strong> that combines strong fundamentals with practical exam strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Left Right Section 2 - Why Choose */}
      <section className="leftright_section padd_bottom">
        <div className="container">
          <div className="row row_reve align-items-center">
            <div className="col-lg-6 col-md-12 order-2 order-lg-1">
              <h2 className="common_title">
                <span className="common_title_span" style={{ color: "#003399" }}>
                  Why Choose
                </span>{" "}
                ASQUARE Academy for MHT-CET Coaching in Pune?
              </h2>
              <ul className="common_ul">
                <li>
                  <strong>Expert Faculty:</strong> Highly qualified mentors for Physics, Chemistry, Maths, and Biology.
                </li>
                <li>
                  <strong>Comprehensive Curriculum:</strong> Covers the entire CET syllabus aligned with the latest exam trends.
                </li>
                <li>
                  <strong>Small Batches:</strong> Ensures personal attention and interactive learning sessions.
                </li>
                <li>
                  <strong>Regular Mock Tests: </strong> Weekly analysis and progress tracking for every student.
                </li>
                <li>
                  <strong>Board + CET Integration:</strong> Balanced study plan for school and entrance exams.
                </li>
              </ul>
              <p>
                At ASQUARE Academy, we emphasize conceptual clarity and consistent performance improvement through daily practice and personalized feedback.
              </p>
            </div>
            <div className="col-lg-6 col-md-12 img-col order-1 order-lg-2">
              <img className="common_image" src={image2} alt="Pune classes" />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section
        className="grid_section grid_section_bg padd"
        style={{ background: "#ffcb0361" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="common_title">
                <span className="common_title_span">Key Features</span> of
                ASQUARE Academy Pune
              </h3>
            </div>
          </div>
          <div
            className="row grid_row text-center"
            style={{ color: "var(--primary-color)" }}
          >
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={qualified} alt="" />
                <h6 className="grid_item_title">
                  Experienced subject experts for all streams (PCM & PCB).
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={updated} alt="" />
                <h6 className="grid_item_title">
                  Limited batch sizes for focused mentoring.
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={weekly_chapter} alt="" />
                <h6 className="grid_item_title">
                  Updated study materials and practice sets.
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={personalized} alt="" />
                <h6 className="grid_item_title">
                  Mock tests based on real CET patterns.
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={location} alt="" />
                <h6 className="grid_item_title">
                 Easily accessible location for students across Pune.
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Results Section */}
      <section className="leftright_section padd_bottom mt-3">
        <div className="container">
          <h4 className="common_title">Results That Speak</h4>
          <p>
            Students trained at ASQUARE Academy Pune have consistently secured high CET ranks, gaining admissions to top colleges like {" "}
            <strong>
                COEP Pune, MIT-WPU, DY Patil College, and VIT Pune.
            </strong>
          </p>
          <p>
            Our success lies in concept clarity, continuous assessments, and one-on-one student support — the pillars of the <strong>Top CET Coaching Institute in Pune.</strong>
          </p>
          <p>
            At ASQUARE Academy, we focus on building a strong academic foundation that helps students succeed in both board and entrance exams.
          </p>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="methodology">
        <div className="methodology_BGimage">
          <img src={MethodologyBg} alt="methodology" />
        </div>
        <div className="container padd_bottom padd_top">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h4 className="common_title title-light">
                <span className="common_title_span">Our</span> Teaching
                Methodology
              </h4>
              <p className="para_light">
                <strong>
                  Our structured teaching approach ensures that every student builds accuracy, confidence, and exam discipline.
                </strong>{" "}
              </p>
              <a href="/">
                <button className="button mt-3">Know More</button>
              </a>
            </div>
            <div className="col-lg-6">
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Concept-Building Lectures:</h6>
                <span>Concept-based interactive sessions.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Assignments & Practice:</h6>
                <span>Daily Practice Papers (DPPs) and revision exercises.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Mock Tests:</h6>
                <span>Weekly mock exams with personalized analysis.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Progress Reports:</h6>
                <span>Dedicated doubt-clearing classes and progress meetings.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Extra Activites:</h6>
                <span>Regular parent-teacher feedback sessions.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Suspense fallback={<Loading />}>
        <Reviews />
      </Suspense>

      {/* FAQ Section */}
      <section className="faq_section padd_bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h5 className="common_title">
                MHT-CET Coaching Institute in Pune {" "}
                <span className="common_title_span">(FAQs)</span>
              </h5>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div class="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse1"
                      aria-expanded="false"
                      aria-controls="collapse1"
                    >
                     Who can join the MHT-CET Coaching in Pune at ASQUARE Academy?
                    </button>
                  </h2>
                  <div
                    id="collapse1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionLeft"
                  >
                    <div className="accordion-body">
                      Students from Class XI, XII, or drop-year aspirants preparing for Engineering or Pharmacy can enroll.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse2"
                      aria-expanded="false"
                      aria-controls="collapse2"
                    >
                      What subjects are taught in the MHT-CET course?
                    </button>
                  </h2>
                  <div
                    id="collapse2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionLeft"
                  >
                    <div className="accordion-body">
                      We cover Physics, Chemistry, Mathematics (PCM) for Engineering and Biology (PCB) for Pharmacy aspirants.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse3"
                      aria-expanded="false"
                      aria-controls="collapse3"
                    >
                       Are mock tests and assessments included?
                    </button>
                  </h2>
                  <div
                    id="collapse3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionLeft"
                  >
                    <div className="accordion-body">
                      Yes, weekly topic tests and full-length CET mock exams are conducted to track performance.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse7"
                      aria-expanded="false"
                      aria-controls="collapse7"
                    >
                    What type of batches are offered?
                    </button>
                  </h2>
                  <div
                    id="collapse7"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionLeft"
                  >
                    <div className="accordion-body">
                      We provide 2-year integrated, 1-year target, crash course, and repeater batches.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div class="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse7"
                      aria-expanded="false"
                      aria-controls="collapse7"
                    >
                     Does ASQUARE Academy offer online coaching?
                    </button>
                  </h2>
                  <div
                    id="collapse7"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionRight"
                  >
                    <div className="accordion-body">
                      Yes, both <strong> offline and online MHT-CET coaching options are available for flexibility.</strong>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse4"
                      aria-expanded="false"
                      aria-controls="collapse4"
                    >
                    How is the MHT-CET preparation structured?
                    </button>
                  </h2>
                  <div
                    id="collapse4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionRight"
                  >
                    <div className="accordion-body">
                        The program integrates board exam concepts with CET-oriented question practice and analysis.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse5"
                      aria-expanded="false"
                      aria-controls="collapse5"
                    >
                     What makes ASQUARE Academy the best choice in Pune?
                    </button>
                  </h2>
                  <div
                    id="collapse5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionRight"
                  >
                    <div className="accordion-body">
                      Expert faculty, customized batches, detailed study material, and proven results make ASQUARE the top choice.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse8"
                      aria-expanded="false"
                      aria-controls="collapse8"
                    >
                     Which colleges do your students get into?
                    </button>
                  </h2>
                  <div
                    id="collapse8"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionRight"
                  >
                    <div className="accordion-body">
                      Our students consistently secure admissions in <strong> COEP, MIT-WPU, DY Patil, VIT, and Sinhgad College, </strong> among others.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Course Overview Section */}
      <section className="enroll_section">
        <div className="row doubleBGColor align-">
          <div
            className="col-lg-6 col-md-6 col-sm-12 col-left padd"
            style={{ background: "rgb(255 203 3)1" }}
          >
            <h3 className="common_title" style={{ color: "#05479b" }}>
              <strong>Course Overview </strong>
            </h3>
            <p>
              The <strong>MHT-CET (Maharashtra Common Entrance Test)</strong> serves as a gateway to prestigious colleges in Maharashtra for Engineering, Pharmacy, and Allied Sciences. 
            </p> 
            <p>
               Our program helps students simplify complex concepts, develop analytical skills, and sharpen test-taking strategies. ASQUARE Academy Pune is a trusted name for <strong> CET coaching in Pune, </strong> helping students stay ahead with systematic preparation and result-oriented modules.
            </p>
            <p>Each subject is taught with attention to the exam’s pattern, helping students tackle both theory and application-based questions effectively.</p>
            <h4 className="common_title" style={{ color: "#05479b" }}>
              <strong>Subjects Covered</strong>
            </h4>
            <ul className="common_ul">
              <li className="mb-4">
                <span>
                  <strong>Physics:</strong> Conceptual clarity through topic-wise problem-solving and numerical drills.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong>Chemistry:</strong> In-depth study of Physical, Organic, and Inorganic Chemistry.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong>Mathematics / Biology: </strong>
                  Tailored learning paths for PCM and PCB with focused question practice.
                </span>
              </li>
            </ul>
          </div>
          <div
            className="col-lg-6 col-md-6 col-sm-12 col-right padd"
            style={{ color: "#ffff" }}
          >
            <h5 className="common_title title-light">
              Duration & Batch Options{" "}
            </h5>
            <ul className="common_ul">
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    2-Year Integrated Program (Class XI + XII + CET):
                  </strong>{" "}
                 Strong base for Board + CET success.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    1-Year Target Batch (Class XII + CET):
                  </strong>{" "}
                  Focused preparation with weekly tests and revision.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    Crash Course (2-3 Months):
                  </strong>{" "}
                  Short-term revision before the MHT-CET exam.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    Repeater / Dropper Batch:
                  </strong>{" "}
                  One-year dedicated training for CET retakers aiming for top ranks.
                </span>
              </li>
            </ul>
            <p>
             All batches include test evaluations, individual mentoring, and performance tracking to ensure steady progress.
            </p>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="contact_section mb-5">
        <div className="container text-center">
          <h5 className="common_title">
            Join{" "}
            <span className="common_title_span">
                ASQUARE Academy Pune Today
            </span>
          </h5>
          <p>
            Join {" "}
            <strong> ASQUARE Academy Pune, </strong>{" "}
            the {" "}
            <strong>
               Best MHT-CET Coaching Institute in Pune,
            </strong>
            and start your journey toward success. With a combination of expert guidance, structured learning, and consistent evaluation, ASQUARE empowers students to achieve their dream CET ranks.
          </p>
          <p>
                Serving students across Pune <strong>  including Shivajinagar, Kothrud, Viman Nagar, and Wanowrie.</strong>
            </p>
          <h4>
            <strong>
              Admissions Open – Limited Seats. Enroll now and secure your success!
            </strong>
          </h4>
          <div className="cta-button mt-3">
            <a href="/" className="btn">
              Join ASQUARE Academy
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default MHTPune;
