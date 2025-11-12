import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import Loading from "../Loading.jsx";
import MobileForm from "../../Components/Mobileform/MobileForm.jsx";
import "../locationspage.css";
import locationBGImage from "../../Assets/Asqare Banner - JEE, NEET, Foundation CET/CET banner/mh-cet slider.jpeg";
import MobileBGImage from "../../Assets/Asqare Banner - JEE, NEET, Foundation CET/CET banner/mh-cet slider mob.jpeg";
import MethodologyBg from "../../Assets/locationPageImages/teaching-methodology.jpeg";
import image1 from "../../Assets/locationPageImages/mht-cet/MH-CET page 1.jpeg";
import image2 from "../../Assets/locationPageImages/mht-cet/MH-CET page 3.jpeg";
import location from "../../Assets/locationPageImages/mht-cet/location.png";
import personalized from "../../Assets/locationPageImages/mht-cet/personalized.png";
import qualified from "../../Assets/locationPageImages/mht-cet/qualified.png";
import updated from "../../Assets/locationPageImages/mht-cet/updated.png";
import weekly_chapter from "../../Assets/locationPageImages/mht-cet/weekly_chapter.png";

const Reviews = React.lazy(() =>
  import("../../Components/Reviews/Reviews.jsx")
);

function MHTNigdi() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  return (
    <>
      <Helmet>
        <title>
          MHT-CET Coaching in Nigdi Pune | Best CET Classes & Institute - ASQUARE Academy
        </title>
        <meta
          name="title"
          content="MHT-CET Coaching in Nigdi Pune | Best CET Classes & Institute - ASQUARE Academy"
        />
        <meta
          name="description"
          content="Join ASQUARE Academy for the Best MHT-CET Coaching in Nigdi Pune. Expert faculty, mock tests, and result-driven programs for Engineering & Pharmacy aspirants. Batches near Akurdi, Ravet, and Bhakti Shakti Chowk."
        />
        <meta
          name="keywords"
          content="MHT-CET Coaching in Nigdi Pune, Best MHT-CET Classes in Nigdi, Top CET Coaching Institute Nigdi, MHT-CET Preparation in Nigdi, ASQUARE Academy Nigdi, MHT-CET Coaching near Akurdi, CET Classes near Ravet, Engineering CET Coaching Nigdi Pune, Pharmacy CET Coaching Nigdi Pune, Top CET Institute in PCMC Pune, MHT-CET Classes in Pradhikaran, CET Coaching near Bhakti Shakti Chowk, Best CET Coaching near Walhekarwadi, MHT-CET Classes near Talwade, CET Coaching near Spine Road"
        />
        <script type="application/ld+json">{`
        {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-nigdi-pune",
      "url": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-nigdi-pune",
      "name": "MHT-CET Coaching in Nigdi Pune | Best CET Classes & Institute – ASQUARE Academy",
      "description": "Join ASQUARE Academy for the Best MHT-CET Coaching in Nigdi Pune. Expert faculty, mock tests, and result-driven programs for Engineering & Pharmacy aspirants. Batches near Akurdi, Ravet, and Bhakti Shakti Chowk.",
      "inLanguage": "en",
      "publisher": {
        "@type": "Organization",
        "name": "ASQUARE Academy",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png"
        }
      },
      "breadcrumb": {
        "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-nigdi-pune#breadcrumb"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-nigdi-pune#breadcrumb",
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
          "name": "MHT-CET Coaching",
          "item": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-nigdi-pune"
        }
      ]
    },
    {
      "@type": "EducationalOrganization",
      "name": "ASQUARE Academy Nigdi",
      "url": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-nigdi-pune",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "description": "ASQUARE Academy offers top-rated MHT-CET coaching in Nigdi Pune for Engineering and Pharmacy aspirants with mock tests, expert guidance, and flexible batch timings.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Nigdi",
        "addressRegion": "Pune",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9766118877",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": "English"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can join MHT-CET coaching at ASQUARE Nigdi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students in Class XI, XII, and droppers preparing for Engineering or Pharmacy entrance exams can join our MHT-CET coaching in Nigdi Pune."
          }
        },
        {
          "@type": "Question",
          "name": "What subjects are covered in the course?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our MHT-CET course covers Physics, Chemistry, Mathematics (for Engineering) and Biology (for Pharmacy)."
          }
        },
        {
          "@type": "Question",
          "name": "Are mock tests part of the curriculum?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — weekly topic tests and full-length CET mock exams are part of every program at ASQUARE Nigdi."
          }
        },
        {
          "@type": "Question",
          "name": "What batch options are available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer 2-year, 1-year, crash course, and repeater batches to suit different preparation needs."
          }
        },
        {
          "@type": "Question",
          "name": "Which nearby areas are served by ASQUARE Nigdi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students from Akurdi, Pradhikaran, Ravet, Bhakti Shakti Chowk, Walhekarwadi, Talwade, Spine Road, and Chinchwad attend our center."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide online MHT-CET classes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — ASQUARE Nigdi offers both online and offline MHT-CET coaching options for flexible learning."
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
      <section className="leftright_section padd">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 img-col order-2 order-lg-1">
              <img className="common_image" src={image1} alt="" />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 order-1 order-lg-2">
              <h1 className="common_title">
                Excel in MHT-CET with Expert Coaching at{" "}
                <span className="common_title_span">ASQUARE Academy ,</span>{" "}
                Nigdi.
              </h1>
              <p>
                Looking for the{" "}
                <strong>best MHT-CET coaching classes in Nigdi, Pune?</strong>{" "}
                At <strong>ASQUARE Academy Nigdi, </strong> we help students
                prepare for <strong>Engineering (PCM)</strong> and{" "}
                <strong>Pharmacy (PCB)</strong> streams through concept-based
                teaching, consistent assessments, and expert mentoring.
              </p>
              <p>
                Our Nigdi branch is ideally located for students from{" "}
                <strong>
                  Akurdi, Pradhikaran, Ravet, Bhakti Shakti Chowk, Walhekarwadi,
                  Spine Road, Talwade, and Chinchwad,{" "}
                </strong>
                offering result-oriented{" "}
                <strong>MHT-CET coaching in PCMC Pune.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
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
                ASQUARE Academy for MHT-CET in Nigdi?
              </h2>
              <ul className="common_ul">
                <li>
                  <span>
                    <strong>Experienced Faculty:</strong> Subject experts for
                    Physics, Chemistry, Maths, and Biology.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Exam-Focused Curriculum:</strong> Aligned with the
                    latest{" "}
                    <strong>MHT-CET exam pattern and marking scheme.</strong>
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Small Batches:</strong> Personal guidance and direct
                    interaction with mentors.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Regular Tests:</strong> Weekly chapter tests and
                    mock CET exams for real exam experience.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Board + CET Integrated Learning: </strong> Dual
                    focus for Class XI-XII students.
                  </span>
                </li>
              </ul>
              <p>
                At ASQUARE, we combine conceptual learning with regular practice
                to ensure every student achieves CET success confidently.
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
                ASQUARE Academy, Nigdi:
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
                    Experienced & result-driven faculty team.
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={updated} alt="" />
                <div className="grid_content">
                  <h6 className="grid_item_title">
                    CET-focused notes, assignments, and mock tests.
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={weekly_chapter} alt="" />
                <div className="grid_content">
                  <h6 className="grid_item_title">
                    Personalized mentoring and learning support.
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={personalized} alt="" />
                <div className="grid_content">
                  <h6 className="grid_item_title">
                    Regular tests and performance tracking.
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={location} alt="" />
                <div className="grid_content">
                  <h6 className="grid_item_title">
                    Easily accessible for students from
                  </h6>
                  <p>
                    <strong>
                      Akurdi, Pradhikaran, Ravet, Bhakti Shakti Chowk,
                      Walhekarwadi, Talwade, Spine Road, and Chinchwad.
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
              <strong> ASQUARE Academy Nigdi </strong>has produced top MHT-CET
              performers who have secured admissions in prestigious colleges
              such as
              <strong>
                {" "}
                COEP Pune, MIT-WPU, DY Patil College, VIT Pune, and Sinhgad
                Institute of Technology.{" "}
              </strong>
              <p className="pt-3">
                Our results are a reflection of our academic quality, expert
                mentorship, and dedication to each student's success.
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
                This proven system ensures continuous improvement and CET exam
                confidence.
              </p>
              <a href="/">
                <button class="button mt-3">Know More</button>
              </a>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Concept-Focused Learning:</h6>
                <span>Interactive lectures focusing on concept clarity.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">
                  Daily Practice Papers (DPPs):
                </h6>
                <span>
                  Daily Practice Papers (DPPs) and topic-based worksheets.
                </span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Weekly Mock Tests:</h6>
                <span>Weekly chapter tests and monthly CET mock exams.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">
                  Interactive Doubt-Solving:
                </h6>
                <span>Doubt-solving sessions for personal guidance.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">
                  Parent-Teacher Meetings (PTMs):
                </h6>
                <span>
                  Regular Parent-Teacher Meetings (PTMs) with performance
                  reports.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Suspense fallback={<Loading />}>
        <Reviews />
      </Suspense>

      <section className="faq_section padd_bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h5 className="common_title">
                MHT-CET Coaching Institute in Nigdi, Pune{" "}
                <span className="common_title_span">(FAQs)</span>
              </h5>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="accordion accordion-flush" id="accordionFlushLeft">
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
                      Who can join MHT-CET coaching at ASQUARE Nigdi?
                    </button>
                  </h2>
                  <div
                    id="collapse1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionLeft"
                  >
                    <div className="accordion-body">
                      Students in Class XI, XII, and droppers preparing for Engineering or Pharmacy entrance exams.
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
                      Physics, Chemistry, Mathematics (for Engineering) and Biology (for Pharmacy).
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
                      Are mock tests part of the curriculum?
                    </button>
                  </h2>
                  <div
                    id="collapse3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionLeft"
                  >
                    <div className="accordion-body">
                      Yes — weekly topic tests and full-length CET mock exams are included.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="accordion accordion-flush" id="accordionFlushRight">
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
                      What batch options are available?
                    </button>
                  </h2>
                  <div
                    id="collapse7"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionRight"
                  >
                    <div className="accordion-body">
                      We offer <strong>2-year, 1-year, crash course,</strong>{" "}
                      and
                      <strong> repeater batches</strong>
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
                      Which nearby areas are served by ASQUARE Nigdi?
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
                        Akurdi, Pradhikaran, Ravet, Bhakti Shakti Chowk, Walhekarwadi, Talwade, Spine Road, and Chinchwad
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
                      Do you provide online MHT-CET classes?
                    </button>
                  </h2>
                  <div
                    id="collapse5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionRight"
                  >
                    <div className="accordion-body">
                      Yes — both <strong>online</strong> and <strong>offline</strong> CET coaching options are available for flexibility.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
              The <strong>MHT-CET (Maharashtra Common Entrance Test)</strong> is
              a key exam for admission into{" "}
              <strong>Engineering, Pharmacy, and Allied Health Science</strong>{" "}
              colleges across Maharashtra.
            </p>
            <p>
              At <strong>ASQUARE Academy Nigdi, </strong>
              our structured program helps students master key concepts, improve
              accuracy, and develop exam temperament through continuous
              evaluation. We serve students from
              <strong> Akurdi, Ravet, Pradhikaran, and Chinchwad. </strong>
              providing the best academic ecosystem for
              <strong> CET preparation in PCMC.</strong>
            </p>
            <h4 className="common_title" style={{ color: "#05479b" }}>
              <strong>Subjects Covered</strong>
            </h4>
            <ul className="common_ul">
              <li className="mb-4">
                <span>
                  <strong>Physics:</strong> Core concept strengthening with
                  numerical applications.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong>Chemistry:</strong> In-depth coverage of Physical,
                  Organic & Inorganic chemistry with CET-based problem sets.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong>Mathematics / Biology: </strong>
                  Separate tracks for
                  <strong> PCM (Engineering) and PCB (Pharmacy)</strong> streams
                  with topic-wise assignments and practice sheets.
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
                  Board + CET coverage for complete foundation.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    1-Year Target Batch (Class XII + CET):
                  </strong>{" "}
                  Intensive program with weekly mock tests.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    Crash Course (2-3 Months):
                  </strong>{" "}
                  Quick revision and test practice before CET.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    Repeater / Dropper Batch:
                  </strong>{" "}
                  One-year full preparation for CET retakers aiming for higher
                  scores.
                </span>
              </li>
            </ul>
            <p>
              All batches include{" "}
              <strong>
                weekly mock tests, mentor feedback, and performance reviews
              </strong>{" "}
              for steady progress.
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
                  ASQUARE Academy — Nigdi, Pune
                </span>
              </h5>
              <p>
                Join <strong>ASQUARE Academy, </strong> the{" "}
                <strong>
                  Best MHT-CET Coaching Institute in Nigdi, Pune,{" "}
                </strong>
                and start your journey toward academic excellence.
              </p>
              <p>
               With expert faculty, small batches, and proven test strategies, ASQUARE prepares you for MHT-CET success.
              </p>
              <p>
                Serving students from
                <strong>
                  {" "}
                  Nigdi, Akurdi, Pradhikaran, Ravet, Bhakti Shakti Chowk, Walhekarwadi, Talwade, Spine Road, and Chinchwad.
                </strong>
              </p>
              <h4>
                Admissions Open - Enroll Now and Boost Your MHT-CET Preparation with ASQUARE!
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

export default MHTNigdi;
