import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import Loading from "../Loading.jsx";
import MobileForm from "../../Components/Mobileform/MobileForm.jsx";
import "../locationspage.css";
import locationBGImage from "../../Assets/locationPageImages/mht-cet/mhcet-desktop-bg8.0.jpeg"
import MobileBGImage from "../../Assets/locationPageImages/mht-cet/mhcet-mobile-bg8.0.jpeg";
import MethodologyBg from "../../Assets/locationPageImages/teaching-methodology.jpeg";
import image1 from "../../Assets/locationPageImages/mht-cet/MH-CET page 18.jpeg";
import image2 from "../../Assets/locationPageImages/mht-cet/MH-CET page 19.jpeg";
import location from "../../Assets/locationPageImages/mht-cet/location.png";
import personalized from "../../Assets/locationPageImages/mht-cet/personalized.png";
import qualified from "../../Assets/locationPageImages/mht-cet/qualified.png";
import updated from "../../Assets/locationPageImages/mht-cet/updated.png";
import weekly_chapter from "../../Assets/locationPageImages/mht-cet/weekly_chapter.png";

const Reviews = React.lazy(() =>
  import("../../Components/Reviews/Reviews.jsx")
);

function MHTChandanNagar() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  return (
    <>
      <Helmet>
        <title>
          Best MHT-CET Coaching & Classes in Chandan Nagar Pune | ASQUARE Academy
        </title>
        <meta
          name="title"
          content="Best MHT-CET Coaching & Classes in Chandan Nagar Pune | ASQUARE Academy"
        />
        <meta
          name="description"
          content="Join top MHT-CET Coaching Classes in Chandan Nagar Pune for Engineering & Pharmacy. Expert faculty, mock tests & flexible batches. Enroll now at ASQUARE Academy."
        />
        <meta
          name="keywords"
          content="MHT-CET Coaching in Chandan Nagar Pune, Best MHT-CET Classes in Chandan Nagar, Top CET Coaching Institute Chandan Nagar, MHT-CET Preparation in Chandan Nagar, ASQUARE Academy Chandan Nagar, Engineering CET Coaching Chandan Nagar Pune, Pharmacy CET Coaching Chandan Nagar Pune,"
        />
        <script type="application/ld+json">{`
        {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-chandan-nagar-pune#localbusiness",
      "name": "MHT-CET Coaching & Classes in Chandan Nagar Pune | ASQUARE Academy",
      "url": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-chandan-nagar-pune",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "telephone": "+91-9922351375",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Chandan Nagar, Pune, Maharashtra",
        "addressLocality": "Pune",
        "addressRegion": "MH",
        "postalCode": "411014",
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
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-chandan-nagar-pune#webpage",
      "url": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-chandan-nagar-pune",
      "name": "MHT-CET Coaching & Classes in Chandan Nagar Pune | ASQUARE Academy",
      "description": "Join top MHT-CET Coaching Classes in Chandan Nagar Pune for Engineering & Pharmacy. Expert faculty, mock tests & flexible batches. Enroll now at ASQUARE Academy.",
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
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-chandan-nagar-pune#organization",
      "name": "ASQUARE Academy Chandan Nagar Pune",
      "url": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-chandan-nagar-pune",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9922351375",
        "contactType": "Customer Service"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Chandan Nagar, Pune, Maharashtra",
        "addressLocality": "Pune",
        "addressRegion": "MH",
        "postalCode": "411014",
        "addressCountry": "IN"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-chandan-nagar-pune#breadcrumb",
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
          "name": "Chandan Nagar",
          "item": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-chandan-nagar-pune"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-chandan-nagar-pune#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can join MHT-CET coaching at ASQUARE Chandan Nagar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students from Class XI, XII, or drop-year aspirants preparing for Engineering or Pharmacy CET can join."
          }
        },
        {
          "@type": "Question",
          "name": "What subjects are covered?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Physics, Chemistry, Mathematics (for PCM) and Biology (for PCB) are covered in the MHT-CET course."
          }
        },
        {
          "@type": "Question",
          "name": "Are mock tests conducted regularly?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, weekly topic tests and full-length CET mock exams are part of all batches."
          }
        },
        {
          "@type": "Question",
          "name": "What are the available batch options?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer 2-year, 1-year, crash course, and dropper batches for MHT-CET preparation."
          }
        },
        {
          "@type": "Question",
          "name": "Which nearby areas are covered by ASQUARE Chandan Nagar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students from Kharadi, Viman Nagar, Keshav Nagar, Mundhwa, Wagholi, Kalyani Nagar, and Lohegaon attend regularly."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer online MHT-CET coaching?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, both online and offline MHT-CET classes are available at ASQUARE Chandan Nagar."
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

      {/* Hero Image Desktop and Mobile */}
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

      {/* Hero MobileForm */}
      <section className="Location_MobileForm">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <MobileForm />
            </div>
          </div>
        </div>
      </section>

      {/* Left Right Section 1 */}
      <section className="leftright_section padd">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 img-col order-2 order-lg-1">
              <img className="common_image" src={image1} alt="" />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 order-1 order-lg-2">
              <h1 className="common_title">
                Crack MHT-CET with Expert Coaching at{" "}
                <span className="common_title_span">ASQUARE Academy ,</span>{" "}
                Chandan Nagar.
              </h1>
              <p>
                Looking for the{" "}
                <strong>Best MHT-CET coaching classes in Chandan Nagar, Pune?</strong>{" "}
                At <strong>ASQUARE Academy Chandan Nagar,</strong> we provide specialized coaching for{" "}
                <strong> Engineering (PCM)</strong> and{" "}
                <strong>Pharmacy (PCB)</strong> aspirants, blending conceptual clarity, structured learning, and mock test practice to ensure success.
              </p>
              <p>
                Our Chandan Nagar branch is ideally located and accessible for students from{" "}
                <strong>
                  Kharadi, Viman Nagar, Keshav Nagar, Mundhwa, Wagholi, Kalyani Nagar, and Lohegaon,{" "}
                </strong>
                making it one of the most preferred institutes for{" "}
                <strong>MHT-CET preparation in East Pune.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Left Right Section 2 */}
      <section className="leftright_section padd_bottom">
        <div className="container">
          <div className="row row_reve align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12 order-2 order-lg-1">
              <h2 className="common_title">
                <span
                  className="common_title_span"
                  style={{ color: "#003399" }}
                >
                  Why Choose
                </span>{" "}
                ASQUARE Academy for MHT-CET in Chandan Nagar?
              </h2>
              <ul className="common_ul">
                <li>
                  <span>
                    <strong>Experienced Faculty:</strong> Subject experts for Physics, Chemistry, Maths & Biology.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Comprehensive Syllabus:</strong> Updated course material based on the{" "}
                    <strong>latest MHT-CET exam pattern.</strong>
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Small Batch Size:</strong> Focused mentoring and personal attention to every student.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Regular Testing:</strong>{" "}
                    Weekly CET mock tests and chapter-wise assessments.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Integrated Study Plan:</strong> Dual preparation for
                    <strong> Board Exams + CET </strong>
                    for Class XI-XII students.
                  </span>
                </li>
              </ul>
              <p>
                ASQUARE Academy ensures concept clarity, strong fundamentals, and strategic practice to maximize student performance.
              </p>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 img-col order-1 order-lg-2">
              <img className="common_image" src={image2} alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits  */}
      <section
        className="grid_section grid_section_bg padd"
        style={{ background: "#ffcb0361" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="common_title text-center">
                <span className="common_title_span">Key Features</span> of
                ASQUARE Academy, Chandan Nagar:
              </h3>
            </div>
          </div>
          <div
            className="row grid_row"
            style={{ textAlign: "center", color: "var(--primary-color)" }}
          >
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={qualified} alt="" />
                <div className="grid_content">
                  <h6 className="grid_item_title">
                    Dedicated and experienced faculty.
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={updated} alt="" />
                <div className="grid_content">
                  <h6 className="grid_item_title">
                    Topic-wise assessments and doubt-solving sessions.
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={weekly_chapter} alt="" />
                <div className="grid_content">
                  <h6 className="grid_item_title">
                    CET-focused study materials and mock exams.
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={personalized} alt="" />
                <div className="grid_content">
                  <h6 className="grid_item_title">
                    Compact batch size for personalized learning.
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={location} alt="" />
                <div className="grid_content">
                  <h6 className="grid_item_title">
                    Convenient for students from
                  </h6>
                  <p>
                    <strong>
                      Kharadi, Viman Nagar, Keshav Nagar, Mundhwa, Wagholi, Kalyani Nagar, and Lohegaon.
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proven Results */}
      <section className="leftright_section padd_bottom mt-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <h4 className="common_title">Proven Results </h4>
              Students from
              <strong> ASQUARE Academy Chandan Nagar </strong> have consistently scored top ranks in
              <strong>
                {" "}
                COEP Pune, MIT-WPU, VIT Pune, DY Patil Institute, and Sinhgad College of Engineering.{" "}
              </strong>
              <p className="pt-3">
                Our teaching excellence, test strategy, and personalized mentoring make ASQUARE a top choice for CET aspirants in East Pune.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="methodology">
        <div className="methodology_BGimage">
          <img src={MethodologyBg} alt="" />
        </div>
        <div className="container padd_bottom padd_top">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <h4 className="common_title title-light">
                <span className="common_title_span">Our</span> Teaching
                Methodology
              </h4>
              <p className="para_light">
                This structured and student-focused approach ensures steady improvement and exam success.
              </p>
              <a href="/">
                <button class="button mt-3">Know More</button>
              </a>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">
                  Interactive Conceptual Lectures:
                </h6>
                <span>Interactive lectures for concept clarity and application.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">
                  Daily Practice Papers (DPPs):
                </h6>
                <span>Daily Practice Papers (DPPs) and topic-based worksheets.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">
                  Weekly & Monthly CET Tests:
                </h6>
                <span>Weekly topic tests and mock CETs for exam familiarity.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Doubt-Solving Sessions:</h6>
                <span>Personalized doubt-solving sessions with subject experts.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">
                  Parent-Teacher Meetings (PTMs):
                </h6>
                <span>Parent-Teacher Meetings (PTMs) for student progress tracking.</span>
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
                MHT-CET Coaching Institute in Chandan Nagar, Pune{" "}
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
                      Who can join MHT-CET coaching at ASQUARE Chandan Nagar?
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
                      Are mock tests conducted regularly?
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
                      Which nearby areas are covered by the Chandan Nagar branch?
                    </button>
                  </h2>
                  <div
                    id="collapse4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionRight"
                  >
                    <div className="accordion-body">
                      Students from{" "}
                      <strong>
                        Kharadi, Viman Nagar, Keshav Nagar, Mundhwa, Wagholi, Kalyani Nagar, and Lohegaon
                      </strong>{" "}
                      attend regularly.
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
              The <strong>MHT-CET (Maharashtra Common Entrance Test)</strong> is one of Maharashtra’s most competitive exams for admission to{" "}
              <strong>
                Engineering, Pharmacy, and Allied Science
              </strong>{" "}
              programs.
            </p>
            <p>
              At <strong>ASQUARE Academy Chandan Nagar,</strong> our curriculum is designed to help students from{" "}
               <strong>Kharadi, Viman Nagar, and Keshav Nagar</strong> understand concepts deeply and practice extensively for consistent performance improvement.
            </p>
            <h4 className="common_title" style={{ color: "#05479b" }}>
              <strong>Subjects Covered</strong>
            </h4>
            <ul className="common_ul">
              <li className="mb-4">
                <span>
                  <strong>Physics:</strong> Conceptual clarity and problem-solving practice through daily exercises.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong>Chemistry:</strong> Full coverage of Physical, Organic, and Inorganic chemistry with CET-based MCQs.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong>Mathematics / Biology: </strong>
                  Stream-specific modules for
                  <strong> PCM (Engineering) and PCB (Pharmacy)</strong> with topic-wise assignments and tests.
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
                  Comprehensive course for early preparation.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    1-Year Target Batch (Class XII + CET):
                  </strong>{" "}
                  Focused preparation with weekly tests and doubt sessions.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    Crash Course (2-3 Months):
                  </strong>{" "}
                  Short-term revision program before the exam.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    Repeater / Dropper Batch:
                  </strong>{" "}
                  One-year comprehensive program for CET reattempts.
                </span>
              </li>
            </ul>
            <p>
              Every batch includes{" "}
              <strong>
                weekly tests, mentor guidance, and detailed progress tracking.
              </strong>
            </p>
          </div>
        </div>
      </section>

      {/* Join ASQUARE Section */}
      <section className="contact_section mb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h5 className="common_title">
                Join{" "}
                <span className="common_title_span">
                  ASQUARE Academy — Chandan Nagar, Pune
                </span>
              </h5>
              <p>
                Join <strong>ASQUARE Academy, </strong> the{" "}
                <strong>
                  Best MHT-CET Coaching Institute in Chandan Nagar, Pune,{" "}
                </strong>
                and prepare for success with expert mentors, small batches, and proven strategies.
                <br />
                With structured learning and consistent evaluation, ASQUARE helps you reach your full potential in MHT-CET.
                <br />
                Serving students from
                <strong>
                  {" "}
                    Chandan Nagar, Kharadi, Viman Nagar, Keshav Nagar, Mundhwa, Wagholi, Kalyani Nagar, and Lohegaon.
                </strong>
              </p>
              <h4>
                Admissions Open – Enroll Now at ASQUARE Academy for Top-Quality MHT-CET Coaching in Pune!
              </h4>
              <div className="cta-button mt-3">
                <a href="/" className="btn">
                  {" "}
                  Join ASQUARE Academy
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default MHTChandanNagar;
