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
import image1 from "../../Assets/locationPageImages/mht-cet/MH-CET page 22.jpeg";
import image2 from "../../Assets/locationPageImages/mht-cet/MH-CET page 23.jpeg";
import location from "../../Assets/locationPageImages/mht-cet/location.png";
import personalized from "../../Assets/locationPageImages/mht-cet/personalized.png";
import qualified from "../../Assets/locationPageImages/mht-cet/qualified.png";
import updated from "../../Assets/locationPageImages/mht-cet/updated.png";
import weekly_chapter from "../../Assets/locationPageImages/mht-cet/weekly_chapter.png";

const Reviews = React.lazy(() =>
  import("../../Components/Reviews/Reviews.jsx")
);

function MHTWakad() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  return (
    <>
      <Helmet>
        <title>
         MHT-CET Coaching & Classes in Wakad Pune | ASQUARE Academy
        </title>
        <meta
          name="title"
          content="MHT-CET Coaching & Classes in Wakad Pune | ASQUARE Academy"
        />
        <meta
          name="description"
          content="Join the best MHT-CET Coaching Classes in Wakad Pune for Engineering & Pharmacy. Small batches, mock tests & expert faculty. Enroll today at ASQUARE Academy."
        />
        <meta
          name="keywords"
          content="MHT-CET Coaching in Wakad Pune, Best MHT-CET Classes in Wakad Pune, Top CET Coaching Institute Wakad Pune, MHT-CET Preparation in Wakad Pune, ASQUARE Academy Wakad Pune, Engineering CET Coaching Wakad Pune, Pharmacy CET Coaching Wakad Pune,"
        />
        <script type="application/ld+json">{`
        {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-wakad-pune#localbusiness",
      "name": "MHT-CET Coaching & Classes in Wakad Pune | ASQUARE Academy",
      "url": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-wakad-pune",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "telephone": "+91-9766118866",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Wakad, Pune, Maharashtra",
        "addressLocality": "Pune",
        "addressRegion": "MH",
        "postalCode": "411057",
        "addressCountry": "IN"
      },
      "priceRange": "₹₹",
      "openingHours": "Mo-Su 08:00-20:00",
      "sameAs": [
        "https://www.asquareclasses.com/",
        "https://www.facebook.com/AsquareAcademyPune"
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-wakad-pune#webpage",
      "url": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-wakad-pune",
      "name": "MHT-CET Coaching & Classes in Wakad Pune | ASQUARE Academy",
      "description": "Join the best MHT-CET Coaching Classes in Wakad Pune for Engineering & Pharmacy. Small batches, mock tests & expert faculty. Enroll today at ASQUARE Academy.",
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
      "@type": "EducationalOrganization",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-wakad-pune#organization",
      "name": "ASQUARE Academy Wakad Pune",
      "url": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-wakad-pune",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9922351375",
        "contactType": "Customer Service"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Wakad, Pune, Maharashtra",
        "addressLocality": "Pune",
        "addressRegion": "MH",
        "postalCode": "411057",
        "addressCountry": "IN"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-wakad-pune#breadcrumb",
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
          "name": "MHT-CET Coaching Pune",
          "item": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-pune"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Wakad",
          "item": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-wakad-pune"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-wakad-pune#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can join MHT-CET coaching at ASQUARE Academy Wakad?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students currently in Class XI, XII, or CET repeaters after Class XII can join MHT-CET coaching at ASQUARE Wakad."
          }
        },
        {
          "@type": "Question",
          "name": "What subjects are covered?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We cover Physics, Chemistry, and Mathematics (PCM) or Physics, Chemistry, and Biology (PCB)."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide CET mock tests and practice papers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, regular mock tests, chapter-wise practice, and full-length CET exams are conducted for all students."
          }
        },
        {
          "@type": "Question",
          "name": "What is the course duration?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer 2-year, 1-year, crash course, and dropper batch programs for MHT-CET preparation."
          }
        },
        {
          "@type": "Question",
          "name": "How big are the batches?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Batch sizes are kept small for personalized learning and one-on-one doubt-solving."
          }
        },
        {
          "@type": "Question",
          "name": "Do parents get performance updates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we conduct parent-teacher meetings and share regular progress reports with parents."
          }
        },
        {
          "@type": "Question",
          "name": "Where is the institute located?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE Academy Wakad is located in Pune and easily accessible from Hinjewadi, Baner, Balewadi, Pimpri, Thergaon, Pimple Saudagar, and nearby PCMC areas."
          }
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
              <img className="common_image" src={image1} alt="ASQUARE Wakad" />
            </div>
            <div className="col-lg-6 col-md-12 order-1 order-lg-2">
              <h1 className="common_title">
                Build Your Future with Expert Guidance at{" "}
                <span className="common_title_span">ASQUARE Academy,</span>{" "}
                Wakad, Pune
              </h1>
              <p>
                Looking for the{" "}
                <strong>best MHT-CET coaching classes in Wakad, Pune?</strong> At{" "}
                <strong>ASQUARE Academy,</strong> we provide structured
                MHT-CET preparation in Wakad with proven results. As a leading
                CET institute near{" "}
                <strong>
                  Wakad, Hinjewadi, Baner, Balewadi, Pimpri-Chinchwad, and
                  Thergaon,
                </strong>{" "}
                we focus on concept clarity, problem-solving techniques, exam
                strategies, and consistent practice to help students achieve
                admission into top engineering and pharmacy colleges in
                Maharashtra.
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
                ASQUARE Academy for MHT-CET in Wakad?
              </h2>
              <ul className="common_ul">
                <li>
                  <strong>Expert Faculty:</strong> Highly experienced teachers
                  specializing in CET, JEE, and NEET coaching.
                </li>
                <li>
                  <strong>Complete Syllabus Coverage:</strong> Physics,
                  Chemistry, and Mathematics (PCM) or Biology (PCB) taught as
                  per the latest MHT-CET exam pattern.
                </li>
                <li>
                  <strong>Personalized Attention:</strong> Small batches with
                  one-to-one doubt-solving sessions.
                </li>
                <li>
                  <strong>Regular Mock Tests:</strong> Weekly CET tests with
                  detailed performance feedback.
                </li>
                <li>
                  <strong>Motivational & Career Guidance:</strong> Personality
                  development, exam strategy, and confidence-building sessions.
                </li>
              </ul>
            </div>
            <div className="col-lg-6 col-md-12 img-col order-1 order-lg-2">
              <img className="common_image" src={image2} alt="Wakad classes" />
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
                ASQUARE Academy Wakad
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
                  Limited batch size for personal guidance.
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={updated} alt="" />
                <h6 className="grid_item_title">
                  Updated study material as per latest CET syllabus.
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={weekly_chapter} alt="" />
                <h6 className="grid_item_title">
                  Parent-teacher meetings to track progress.
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={personalized} alt="" />
                <h6 className="grid_item_title">
                  Time management & exam strategy workshops.
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={location} alt="" />
                <h6 className="grid_item_title">
                  Trusted as the <strong>best MHT-CET coaching in Wakad, Hinjewadi, and PCMC</strong>
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
            <strong>ASQUARE Academy </strong> has a strong record of students from
            <strong> Wakad, Hinjewadi, Baner, Balewadi, Pimpri, Thergaon, and Pimple Saudagar </strong>
            securing top CET ranks and admissions to prestigious<strong> engineering and pharmacy colleges.</strong>
          </p>
          <p>
            Our success stories make us one of the
            <strong> top MHT-CET coaching institutes in Wakad and PCMC.</strong>
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
                  Daily lectures, chapter-wise assignments, mock tests, and
                  personalized doubt sessions
                </strong>{" "}
                ensure every student is exam-ready.
              </p>
              <a href="/">
                <button className="button mt-3">Know More</button>
              </a>
            </div>
            <div className="col-lg-6">
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Concept-Building Lectures:</h6>
                <span>Daily concept-building lectures by expert faculty.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Assignments & Practice:</h6>
                <span>Chapter-wise assignments for self-practice.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Mock Tests:</h6>
                <span>One-to-one doubt-clearing sessions.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Progress Reports:</h6>
                <span>Regular updates shared with parents.</span>
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
                MHT-CET Coaching Institute in Wakad {" "}
                <span className="common_title_span">(FAQs)</span>
              </h5>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="accordion custom-accordion" id="accordionLeft">
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
                      Who can join MHT-CET coaching at ASQUARE Wakad ?
                    </button>
                  </h2>
                  <div
                    id="collapse1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionLeft"
                  >
                    <div className="accordion-body">
                      Students in Class XI, XII, and drop-year aspirants preparing for Engineering or Pharmacy CET.
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
                      What subjects are covered ?
                    </button>
                  </h2>
                  <div
                    id="collapse2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionLeft"
                  >
                    <div className="accordion-body">
                      Physics, Chemistry, Mathematics (for PCM) and Biology (for PCB).
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
                      Do you provide CET mock tests and practice papers?
                    </button>
                  </h2>
                  <div
                    id="collapse3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionLeft"
                  >
                    <div className="accordion-body">
                      Yes — topic tests, weekly evaluations, and full-length CET mock exams are conducted regularly.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="accordion custom-accordion" id="accordionRight">
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
                     What are the available batch options?
                    </button>
                  </h2>
                  <div
                    id="collapse7"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionRight"
                  >
                    <div className="accordion-body">
                      We offer <strong>2-year, 1-year, crash course,</strong>{" "}
                      and <strong> dropper batches.</strong> for flexible
                      preparation.
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
                       Where is the institute located?
                    </button>
                  </h2>
                  <div
                    id="collapse4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionRight"
                  >
                    <div className="accordion-body">
                      Our{" "}<strong>ASQUARE Academy Wakad branch</strong> is located in Pune and is easily accessible from {" "}
                      <strong>
                        Hinjewadi, Baner, Balewadi, Pimpri, Thergaon, Pimple Saudagar, and nearby PCMC areas.

                      </strong>
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
                      Do you offer online MHT-CET coaching?
                    </button>
                  </h2>
                  <div
                    id="collapse5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionRight"
                  >
                    <div className="accordion-body">
                      Yes, both <strong>online</strong> and{" "}
                      <strong>offline CET coaching classes</strong> are available for flexible learning.
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
              The <strong>MHT-CET (Maharashtra Common Entrance Test)</strong> is the gateway to top{" "}
              <strong>
                Engineering and Pharmacy colleges in Maharashtra.
              </strong>{" "}
              With rising competition, joining the right<strong>MHT-CET classes in Wakad</strong>is essential to stay ahead.
            </p>
            <p>
              At <strong>ASQUARE Academy Wakad, </strong> our program is designed to{" "}
               <strong>strengthen fundamentals, sharpen problem-solving skills, and provide consistent exam practice</strong> so that students are fully prepared for the CET exam.
            </p>
            <h4 className="common_title" style={{ color: "#05479b" }}>
              <strong>Subjects Covered</strong>
            </h4>
            <ul className="common_ul">
              <li className="mb-4">
                <span>
                  <strong>Physics:</strong> Concept clarity, numericals, and application-based problem-solving.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong>Chemistry:</strong> Physical, Organic, and Inorganic chemistry with extensive practice.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong>Mathematics / Biology: </strong>
                  Separate modules for
                  <strong> PCM (Engineering) and PCB (Pharmacy)</strong> with daily assignments and chapter tests.
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
                  For Class 10th to 11th moving students.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    1-Year Target Batch (Class XII + CET):
                  </strong>{" "}
                  For Class 11th to 12th moving students.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    Full-Year Course (XI & XII students):
                  </strong>{" "}
                  Systematic preparation with school/college curriculum.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    Crash Course (2-3 Months):
                  </strong>{" "}
                  Intensive revision and CET-focused practice.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    Repeater / Dropper Batch:
                  </strong>{" "}
                  For Class 12th passed students aiming for improved CET results.
                </span>
              </li>
            </ul>
            <p>
              Every course includes{" "}
              <strong>
                weekly mock tests, mentor feedback, and individual performance tracking.
              </strong>
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
              ASQUARE Academy – Wakad, Pune
            </span>
          </h5>
          <p>
            Enroll now in the{" "}
            <strong>leading MHT-CET coaching classes in Wakad, Pune.</strong>{" "}
            With expert teachers, structured learning modules, and consistent
            results, ASQUARE Academy is the most trusted name for{" "}
            <strong>
              MHT-CET preparation in Wakad, Hinjewadi, Baner, Balewadi, Pimpri,
              and Thergaon.
            </strong>
          </p>
          <h4>
            <strong>
              📌 Limited seats available – Call today to secure your admission!
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

export default MHTWakad;
