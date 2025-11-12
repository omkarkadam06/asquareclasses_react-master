
import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import Loading from "../Loading.jsx";
import MobileForm from "../../Components/Mobileform/MobileForm.jsx";
import "../locationspage.css";
import locationBGImage from "../../Assets/locationPageImages/mht-cet/mhcet-desktop-bg8.0.jpeg";
import MobileBGImage from "../../Assets/locationPageImages/mht-cet/mhcet-mobile-bg8.0.jpeg";
import MethodologyBg from "../../Assets/locationPageImages/teaching-methodology.jpeg";
import image1 from "../../Assets/locationPageImages/mht-cet/MH-CET page 24.jpeg";
import image2 from "../../Assets/locationPageImages/mht-cet/MH-CET page 4.jpeg";
import location from "../../Assets/locationPageImages/mht-cet/location.png";
import personalized from "../../Assets/locationPageImages/mht-cet/personalized.png";
import qualified from "../../Assets/locationPageImages/mht-cet/qualified.png";
import updated from "../../Assets/locationPageImages/mht-cet/updated.png";
import weekly_chapter from "../../Assets/locationPageImages/mht-cet/weekly_chapter.png";

const Reviews = React.lazy(() =>
  import("../../Components/Reviews/Reviews.jsx")
);

function MHTKondhwa() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  return (
    <>
      <Helmet>
        <title>
         Best MHT-CET Coaching in Kondhwa Pune | ASQUARE Academy
        </title>
        <meta
          name="title"
          content="Best MHT-CET Coaching in Kondhwa Pune | ASQUARE Academy"
        />
        <meta
          name="description"
          content="Join ASQUARE Academy for top MHT-CET Coaching in Kondhwa Pune. Expert faculty, full syllabus coverage, and regular mock tests for CET aspirants."
        />
        <meta
          name="keywords"
          content="MHT-CET Coaching in Kondhwa Pune,Best MHT-CET Classes in Kondhwa,Top CET Coaching Institute Kondhwa,MHT-CET Preparation in Kondhwa,ASQUARE Academy Kondhwa,"
        />
        <script type="application/ld+json">{`
        {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-kondhwa-pune#localbusiness",
      "name": "ASQUARE Academy - MHT-CET Coaching in Kondhwa Pune",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "url": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-kondhwa-pune",
      "telephone": "9766118877",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Kondhwa",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411048",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune"
      ],
      "description": "Best MHT-CET Coaching in Kondhwa Pune by ASQUARE Academy. Specialized preparation for Engineering and Pharmacy CET with experienced mentors and mock exams."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-kondhwa-pune#webpage",
      "url": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-kondhwa-pune",
      "name": "MHT-CET Coaching Classes in Kondhwa Pune | ASQUARE Academy",
      "description": "Enroll in ASQUARE Academy’s MHT-CET Coaching in Kondhwa Pune. Covering Physics, Chemistry, Maths & Biology for Engineering and Pharmacy aspirants.",
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
      "@type": "EducationalOccupationalProgram",
      "name": "MHT-CET Coaching Program in Kondhwa Pune",
      "educationalCredentialAwarded": "CET Preparation Certificate",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "ASQUARE Academy",
        "url": "https://www.asquareclasses.com/"
      },
      "hasCourse": [
        {
          "@type": "Course",
          "name": "MHT-CET Physics, Chemistry & Mathematics",
          "description": "Comprehensive CET preparation covering PCM for Engineering aspirants."
        },
        {
          "@type": "Course",
          "name": "MHT-CET Biology for Pharmacy",
          "description": "Detailed CET Biology course designed for Pharmacy aspirants."
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can join MHT-CET coaching at ASQUARE Kondhwa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students in Class XI, XII, and droppers preparing for Engineering or Pharmacy CET can join our MHT-CET batches."
          }
        },
        {
          "@type": "Question",
          "name": "What subjects are covered in the MHT-CET program?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We cover Physics, Chemistry, Mathematics, and Biology as per CET syllabus."
          }
        },
        {
          "@type": "Question",
          "name": "Do you conduct regular mock tests?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we conduct weekly topic tests and full-length CET mock exams for continuous assessment."
          }
        },
        {
          "@type": "Question",
          "name": "What batch options are available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer 2-year integrated, 1-year target, crash course, and dropper batches at Kondhwa."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide online CET coaching?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, both online and offline MHT-CET coaching options are available at ASQUARE Kondhwa."
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
          "name": "MHT-CET Coaching",
          "item": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-pune"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "MHT-CET Coaching in Kondhwa Pune",
          "item": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-kondhwa-pune"
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
              <img className="common_image" src={image1} alt="ASQUARE Kondhwa" />
            </div>
            <div className="col-lg-6 col-md-12 order-1 order-lg-2">
              <h1 className="common_title">
                Crack MHT-CET with Expert Guidance at{" "}
                <span className="common_title_span">ASQUARE Academy,</span>{" "}
                Kondhwa
              </h1>
              <p>
                Looking for the {" "}<strong> best MHT-CET coaching classes in Kondhwa, Pune? </strong> At
                <strong> ASQUARE Academy – Kondhwa,  </strong> we specialize in training students for{" "}
                <strong> Engineering (PCM) and Pharmacy (PCB) </strong>
                streams with a perfect combination of conceptual learning, exam strategy, and practice-oriented teaching.<br />
                Our Kondhwa centre is conveniently accessible for students from
                 <strong>
                    {" "}Undri, NIBM Road, Wanowrie, Mohammed Wadi, Fatima Nagar, Pisoli, and Lulla Nagar,
                </strong>
                {" "}making it one of the top choices for <strong> MHT-CET coaching in South Pune. </strong>
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
                ASQUARE Academy for MHT-CET Coaching in Kondhwa?
              </h2>
              <ul className="common_ul">
                <li>
                  <strong>Expert Faculty:</strong> Experienced subject mentors for Physics, Chemistry, Maths & Biology.
                </li>
                <li>
                  <strong>Latest Syllabus Coverage :</strong> Fully aligned with the MHT-CET exam pattern.
                </li>
                <li>
                  <strong>Small Batches:</strong> Personalized focus and one-on-one mentoring.
                </li>
                <li>
                  <strong>Regular Testing & Analysis: </strong> Weekly topic tests and mock CET exams.
                </li>
                <li>
                  <strong>Integrated Learning Approach:</strong> Combined preparation for Board Exams + CET.
                </li>
              </ul>
              <p>
                At ASQUARE, our focus is on building a strong academic foundation while enhancing exam speed, accuracy, and problem-solving confidence.
              </p>
            </div>
            <div className="col-lg-6 col-md-12 img-col order-1 order-lg-2">
              <img className="common_image" src={image2} alt="Kondhwa classes" />
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
                ASQUARE Academy Kondhwa
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
                  Qualified and experienced CET teaching faculty.
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={updated} alt="" />
                <h6 className="grid_item_title">
                  Well-designed study material for MHT-CET success.
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={weekly_chapter} alt="" />
                <h6 className="grid_item_title">
                  Focus on accuracy, time management, and conceptual clarity.
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={personalized} alt="" />
                <h6 className="grid_item_title">
                  Small batch size for individual mentoring.
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={location} alt="" />
                <h6 className="grid_item_title">
                 Convenient for students from <strong> Undri, NIBM Road, Wanowrie, Mohammed Wadi, Fatima Nagar, Pisoli, and Lulla Nagar. </strong>
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
           Students from{" "}
            <strong>
                ASQUARE Academy Kondhwa 
            </strong>
            {" "}have consistently achieved top MHT-CET ranks, earning admissions into prestigious colleges such as <strong> MHT-CET ranks, </strong> gaining admission into top institutes like
            <strong> COEP Pune, MIT-WPU, DY Patil College, VIT Pune, and Sinhgad Institute of Technology. </strong>
          </p>
          <p>
            Our success rate reflects our commitment to <strong> dedication to quality teaching and personalized mentoring. </strong>
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
                 This systematic teaching approach ensures concept clarity, confidence, and consistent results.
                </strong>{" "}
              </p>
              <a href="/">
                <button className="button mt-3">Know More</button>
              </a>
            </div>
            <div className="col-lg-6">
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Concept-Building Lectures:</h6>
                <span>Interactive concept-based sessions for better understanding.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Daily Practice Papers (DPPs):</h6>
                <span>Daily Practice Papers (DPPs) and topic-based worksheets.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Weekly tests and mock CET exams:</h6>
                <span>Weekly and Monthly Mock CET Tests for continuous assessment.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Individual doubt-clearing sessions:</h6>
                <span>Individual doubt-solving sessions for personalized support.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Parent–Teacher Meetings (PTMs):</h6>
                <span>Parent–Teacher Meetings (PTMs) for regular progress updates.</span>
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
                MHT-CET Coaching Institute in Kondhwa {" "}
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
                     Who can join MHT-CET coaching at ASQUARE Kondhwa?
                    </button>
                  </h2>
                  <div
                    id="collapse1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionLeft"
                  >
                    <div className="accordion-body">
                      Students from Class XI, XII, and drop-year aspirants preparing for Engineering or Pharmacy CET.
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
                      Which subjects are covered?
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
                       Are mock tests conducted regularly?
                    </button>
                  </h2>
                  <div
                    id="collapse3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionLeft"
                  >
                    <div className="accordion-body">
                      Yes—weekly chapter tests and comprehensive full-length mock exams are a key part of the program.
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
                      data-bs-target="#collapse4"
                      aria-expanded="false"
                      aria-controls="collapse4"
                    >
                     Do you provide online CET classes?
                    </button>
                  </h2>
                  <div
                    id="collapse4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionRight"
                  >
                    <div className="accordion-body">
                      Yes — both offline and online MHT-CET coaching options are available.
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
                    What batch options are available?
                    </button>
                  </h2>
                  <div
                    id="collapse7"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionLeft"
                  >
                    <div className="accordion-body">
                      2-Year Integrated, 1-Year Target, Crash Course, and Repeater/Dropper Batch.
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
                       Which nearby areas are covered by ASQUARE Kondhwa?
                    </button>
                  </h2>
                  <div
                    id="collapse5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionRight"
                  >
                    <div className="accordion-body">
                      Students from <strong>  Undri, NIBM Road, Wanowrie, Mohammed Wadi, Fatima Nagar, Pisoli, and Lulla Nagar  </strong> attend regularly.
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
              The <strong>MHT-CET (Maharashtra Common Entrance Test)</strong> is an important gateway for  <strong> Engineering, Pharmacy, and Allied Science </strong>
              programs in Maharashtra.
            </p> 
            <p>
                At <strong> ASQUARE Academy Kondhwa, </strong>we offer structured courses and a result-oriented study plan that helps
            </p>
            <p>
                Students from <strong>  Undri, NIBM, and Mohammed Wadi </strong> achieve top ranks through continuous evaluation and guided learning.
            </p>
            <h4 className="common_title" style={{ color: "#05479b" }}>
              <strong>Subjects Covered</strong>
            </h4>
            <ul className="common_ul">
              <li className="mb-4">
                <span>
                  <strong>Physics:</strong> Concept-building, formula applications, and numerical problem-solving.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong>Chemistry:</strong> In-depth coverage of Physical, Organic, and Inorganic chemistry with CET-based question practice.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong>Mathematics / Biology: </strong>
                  Stream-specific learning for PCM (Engineering) and PCB (Pharmacy) students with daily assignments and topic-wise tests.
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
                 Comprehensive board + CET coverage.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    1-Year Target Batch (Class XII + CET):
                  </strong>{" "}
                 Intensive preparation with regular assessments.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    Crash Course (2-3 Months):
                  </strong>{" "}
                   Short-term revision program with mock CETs.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    Repeater / Dropper Batch:
                  </strong>{" "}
                  Full one-year course for CET reattempts.
                </span>
              </li>
            </ul>
            <p>
             All batches include <strong> mock exams, mentor support, and performance tracking </strong>
            </p>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="contact_section mb-5">
        <div className="container text-center">
          <h5 className="common_title">
            Join {" "}
            <span className="common_title_span">
                ASQUARE Academy Kondhwa Today
            </span>
          </h5>
          <p>
            Join {" "}
            <strong> ASQUARE Academy Kondhwa, </strong>{" "}
            the {" "}
            <strong> Best MHT-CET Coaching Institute in Kondhwa, Pune, </strong>
            and give your CET preparation a strategic edge with expert faculty, structured study plans, and regular practice tests.<br/>
            Our proven teaching methods help students achieve their target CET score and secure admission to top colleges.
          </p>
          <p>
              Serving students from{" "}
            <strong> Kondhwa, Undri, NIBM Road, Wanowrie, Mohammed Wadi, Fatima Nagar, Pisoli, and Lulla Nagar. </strong>
          </p>
          <h4>
            <strong>
              Admissions Open – Enroll Now at ASQUARE Academy for MHT-CET Coaching in South Pune!
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

export default MHTKondhwa;
