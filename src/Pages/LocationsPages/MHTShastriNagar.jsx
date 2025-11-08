import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import Loading from "../Loading.jsx";
import MobileForm from "../../Components/Mobileform/MobileForm.jsx";
import "../locationspage.css";
import locationBGImage from "../../Assets/locationPageImages/mht-cet/mhcet-desktop-bg6.0.jpeg";
import MobileBGImage from "../../Assets/locationPageImages/mht-cet/mhcet-mobile-bg6.0.jpeg";
import MethodologyBg from "../../Assets/locationPageImages/teaching-methodology.jpeg";
import image1 from "../../Assets/locationPageImages/mht-cet/MH-CET page 24.jpeg";
import image2 from "../../Assets/locationPageImages/mht-cet/MH-CET page 25.jpeg";
import location from "../../Assets/locationPageImages/mht-cet/location.png";
import personalized from "../../Assets/locationPageImages/mht-cet/personalized.png";
import qualified from "../../Assets/locationPageImages/mht-cet/qualified.png";
import updated from "../../Assets/locationPageImages/mht-cet/updated.png";
import weekly_chapter from "../../Assets/locationPageImages/mht-cet/weekly_chapter.png";

const Reviews = React.lazy(() =>
  import("../../Components/Reviews/Reviews.jsx")
);

function MHTShastriNagar() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  return (
    <>
      <Helmet>
        <title>
         Best MHT-CET Coaching Classes in Shastri Nagar Pune | ASQUARE Academy
        </title>
        <meta
          name="title"
          content="Best MHT-CET Coaching Classes in Shastri Nagar Pune | ASQUARE Academy"
        />
        <meta
          name="description"
          content="Join the Best MHT-CET Coaching Classes in Shastri Nagar Pune at ASQUARE Academy. Expert faculty, small batches, and mock tests for Engineering & Pharmacy CET preparation."
        />
        <meta
          name="keywords"
          content="MHT-CET Coaching in shastri nagarPune,
Best MHT-CET Classes in shastri nagar,
Top CET Coaching Institute shastri nagar,
MHT-CET Preparation in shastri nagar,
ASQUARE Academy shastri nagar,
Engineering CET Coaching shastri nagar Pune,
Pharmacy CET Coaching shastri nagar Pune,
"
        />
        <script type="application/ld+json">{`
        {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "EducationalOrganization"],
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-shastri-nagar-pune/#localbusiness",
      "name": "ASQUARE Academy - MHT-CET Coaching Classes in Shastri Nagar Pune",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "url": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-shastri-nagar-pune/",
      "telephone": "+91-9766118877",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Shastri Nagar, Pune, Maharashtra",
        "addressLocality": "Shastri Nagar",
        "addressRegion": "Maharashtra",
        "postalCode": "411006",
        "addressCountry": "IN"
      },
      "description": "ASQUARE Academy in Shastri Nagar Pune offers top MHT-CET Coaching Classes with expert guidance, small batches, and structured mock tests for Engineering and Pharmacy aspirants.",
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune/"
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-shastri-nagar-pune/#webpage",
      "url": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-shastri-nagar-pune/",
      "name": "Best MHT-CET Coaching Classes in Shastri Nagar Pune | ASQUARE Academy",
      "description": "Join the Best MHT-CET Coaching Classes in Shastri Nagar Pune at ASQUARE Academy. Expert faculty, small batches, and regular mock tests for Engineering & Pharmacy CET success."
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-shastri-nagar-pune/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can enroll at ASQUARE Shastri Nagar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students of Class XI, Class XII, and repeat-year aspirants aiming for MHT-CET can enroll at ASQUARE Academy Shastri Nagar."
          }
        },
        {
          "@type": "Question",
          "name": "What subjects are covered in the course?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Courses include Physics, Chemistry, and Mathematics for Engineering aspirants, and Biology for Pharmacy aspirants."
          }
        },
        {
          "@type": "Question",
          "name": "Are mock tests included in the teaching plan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, weekly chapter tests and full-length CET mock exams are conducted with detailed performance feedback."
          }
        },
        {
          "@type": "Question",
          "name": "What are the available batch types?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer 2-year integrated, 1-year target, crash course, and dropper/repeater batches to suit all CET aspirants."
          }
        },
        {
          "@type": "Question",
          "name": "Are batches small?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, small batch sizes ensure each student receives focused attention and effective learning support."
          }
        },
        {
          "@type": "Question",
          "name": "Do parents get performance updates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we conduct regular PTMs and share detailed progress reports via email and parent meetings."
          }
        },
        {
          "@type": "Question",
          "name": "Which nearby areas do you serve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our Shastri Nagar branch serves students from Kalyani Nagar, Ramwadi, Pratik Nagar, and Adarsh Nagar."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-shastri-nagar-pune/#breadcrumb",
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
          "name": "MHT-CET Coaching Classes in Shastri Nagar Pune",
          "item": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-shastri-nagar-pune/"
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
              <img className="common_image" src={image1} alt="ASQUARE Shastri Nagar" />
            </div>
            <div className="col-lg-6 col-md-12 order-1 order-lg-2">
              <h1 className="common_title">
                Excel in MHT-CET with{" "}
                <span className="common_title_span">ASQUARE Academy,</span>{" "}
                Shastri Nagar
              </h1>
              <p>
                Looking for expert{" "}
                <strong>MHT-CET coaching in Shastri Nagar, Pune?</strong> At{" "}
                <strong>ASQUARE Academy — Shastri Nagar,</strong> we offer concept-first training, MHT-CET–aligned tests, and focused mentoring. Strategically located with easy access from{" "}
                <strong>
                  Kalyani Nagar, Ramwadi, Pratik Nagar, and Adarsh Nagar, 
                </strong>{" "}
                our center is built to help students from eastern Pune succeed without long commutes.
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
                ASQUARE Academy for MHT-CET in Shastri Nagar?
              </h2>
              <ul className="common_ul">
                <li>
                  <strong>Experienced Faculty:</strong> for Physics, Chemistry, Mathematics & Biology.
                </li>
                <li>
                  <strong>Full MHT-CET Syllabus Coverage:</strong> with the latest exam pattern.
                </li>
                <li>
                  <strong>Small Batches:</strong> for personalized mentoring and focused learning.
                </li>
                <li>
                  <strong>Regular Mock Tests & Analysis:</strong> for speed, accuracy, and confidence.
                </li>
                <li>
                  <strong>Holistic Preparation:</strong> for both CET and board exams.
                </li>
              </ul>
            </div>
            <div className="col-lg-6 col-md-12 img-col order-1 order-lg-2">
              <img className="common_image" src={image2} alt="Shastri Nagar classes" />
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
                ASQUARE Academy Shastri Nagar
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
                  Limited batch sizes for high attention and quality learning.
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={updated} alt="" />
                <h6 className="grid_item_title">
                  Updated CET-aligned study resources (print & digital).
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={weekly_chapter} alt="" />
                <h6 className="grid_item_title">
                  Regular PTMs and progress reports.
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={personalized} alt="" />
                <h6 className="grid_item_title">
                  Time-management & strategy workshops for efficiency.
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={location} alt="" />
                <h6 className="grid_item_title">
                  Convenient access for students from <strong> Shastri Nagar, Kalyani Nagar, Ramwadi, Pratik Nagar, and Adarsh Nagar.</strong>
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
            Students trained at <strong> ASQUARE Academy -Shastri Nagar </strong> consistently deliver high MHT-CET scores and secure admissions into top engineering and pharmacy colleges in Maharashtra. Our structured, result-driven approach inspires strong outcomes.
            <strong> Convenient access for students from Shastri Nagar, Kalyani Nagar, Ramwadi, Pratik Nagar, and Adarsh Nagar. </strong>
            securing top CET ranks and admissions to prestigious<strong> engineering and pharmacy colleges.</strong>
          </p>
          <p>
            Our success stories make us one of the
            <strong> top MHT-CET coaching institutes in Shastri Nagar and PCMC.</strong>
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
                <span>Daily concept-driven lectures with workbook assignments</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Assignments & Practice:</h6>
                <span>Weekly chapter tests combined with full-length mocks.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Mock Tests:</h6>
                <span>One-to-one doubt-clearing sessions.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Progress Reports:</h6>
                <span>Parent-student performance reviews (PTMs).</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Extra Activites:</h6>
                <span>Workshops on speed, accuracy, and exam stress management strategies</span>
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
                MHT-CET Coaching Institute in Shastri Nagar {" "}
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
                      Who can enroll at ASQUARE Shastri Nagar?
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
                      What subjects are covered in the course?
                    </button>
                  </h2>
                  <div
                    id="collapse2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionLeft"
                  >
                    <div className="accordion-body">
                      Physics, Chemistry, Mathematics (for engineering), and Biology (for pharmacy).
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
                      Are mock tests included in the teaching plan?
                    </button>
                  </h2>
                  <div
                    id="collapse3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionLeft"
                  >
                    <div className="accordion-body">
                      Absolutely—students receive weekly chapter tests and full-length CET simulations with feedback.
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
                     What are the available batch types?
                    </button>
                  </h2>
                  <div
                    id="collapse7"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionRight"
                  >
                    <div className="accordion-body">
                      We offer <strong>2-year integrated, 1-year target, crash course, and dropper/repeater options.</strong>
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
                      Our{" "}<strong>ASQUARE Academy Shastri Nagar branch</strong> Easily accessible for students commuting from {" "}
                      <strong>
                         Shastri Nagar, Kalyani Nagar, Ramwadi, Pratik Nagar, and Adarsh Nagar.
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
                      Are batches small?
                    </button>
                  </h2>
                  <div
                    id="collapse5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionRight"
                  >
                    <div className="accordion-body">
                      Yes — batch sizes are kept limited to ensure concentrated attention and effective instruction.
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
              The <strong>MHT-CET (Maharashtra Common Entrance Test)</strong> paves the way to engineering, pharmacy, and related courses across Maharashtra. At the Shastri Nagar center, we offer a structured curriculum, driven by focused practice, and backed by performance analytics.
             </p> 
            <p>
              At <strong>ASQUARE Academy Shastri Nagar, </strong> our program is designed to{" "}
               <strong>strengthen fundamentals, sharpen problem-solving skills, and provide consistent exam practice</strong> so that students are fully prepared for the CET exam.
            </p>
            <h4 className="common_title" style={{ color: "#05479b" }}>
              <strong>Subjects Covered</strong>
            </h4>
            <ul className="common_ul">
              <li className="mb-4">
                <span>
                  <strong>Physics:</strong> Core concept clarity plus numerical practice.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong>Chemistry:</strong>  Physical, Organic & Inorganic sections aligned with CET format.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong>Mathematics / Biology: </strong>
                  Intensive subject-specific training for PCM (Engineering) or PCB (Pharmacy)
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
              ASQUARE Academy – Shastri Nagar, Pune
            </span>
          </h5>
          <p>
            Give your MHT-CET preparation the competitive edge it needs! Join{" "}
            <strong>leading MHT-CET coaching classes in Shastri Nagar, Pune.</strong>{" "}
            With expert teachers, structured learning modules, and consistent
            results, ASQUARE Academy is the most trusted name for{" "}
            <strong>
              MHT-CET preparation in  Shastri Nagar, Kalyani Nagar, Ramwadi, Pratik Nagar & Adarsh Nagar.
            </strong>
          </p>
          <h4>
            <strong>
              Enroll Now at ASQUARE Academy — Shastri Nagar
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

export default MHTShastriNagar;
