
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
import image1 from "../../Assets/locationPageImages/mht-cet/MH-CET page 27.jpeg";
import image2 from "../../Assets/locationPageImages/mht-cet/MH-CET page 1.jpeg";
import location from "../../Assets/locationPageImages/mht-cet/location.png";
import personalized from "../../Assets/locationPageImages/mht-cet/personalized.png";
import qualified from "../../Assets/locationPageImages/mht-cet/qualified.png";
import updated from "../../Assets/locationPageImages/mht-cet/updated.png";
import weekly_chapter from "../../Assets/locationPageImages/mht-cet/weekly_chapter.png";

const Reviews = React.lazy(() =>
  import("../../Components/Reviews/Reviews.jsx")
);

function MHTUndri() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  return (
    <>
      <Helmet>
        <title>
         Best MHT-CET Coaching in Undri Pune | ASQUARE Academy
        </title>
        <meta
          name="title"
          content="Best MHT-CET Coaching in Undri Pune | ASQUARE Academy"
        />
        <meta
          name="description"
          content="Join ASQUARE Academy for top MHT-CET Coaching in Undri Pune. Expert teachers, mock tests, and complete CET preparation for Engineering & Pharmacy aspirants."
        />
        <meta
          name="keywords"
          content="MHT-CET Coaching in Undri Pune,Best MHT-CET Classes in Undri,Top CET Coaching Institute Undri,MHT-CET Preparation in Undri,ASQUARE Academy Undri,"
        />
        <script type="application/ld+json">{`
        {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-undri-pune#localbusiness",
      "name": "ASQUARE Academy - MHT-CET Coaching in Undri Pune",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "url": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-undri-pune",
      "telephone": "9766118877",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Undri",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411060",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune"
      ],
      "description": "Best MHT-CET Coaching in Undri Pune by ASQUARE Academy. Covering Physics, Chemistry, Maths & Biology with expert faculty, tests, and online/offline options."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-undri-pune#webpage",
      "url": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-undri-pune",
      "name": "MHT-CET Coaching Classes in Undri Pune | ASQUARE Academy",
      "description": "ASQUARE Academy offers expert-led MHT-CET Coaching in Undri Pune for PCM and PCB streams. Comprehensive syllabus coverage and mock exams for CET success.",
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
      "name": "MHT-CET Coaching Program in Undri Pune",
      "educationalCredentialAwarded": "CET Preparation Certificate",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "ASQUARE Academy",
        "url": "https://www.asquareclasses.com/"
      },
      "hasCourse": [
        {
          "@type": "Course",
          "name": "MHT-CET Physics, Chemistry & Mathematics (PCM)",
          "description": "Comprehensive CET coaching for Engineering aspirants covering Physics, Chemistry, and Mathematics."
        },
        {
          "@type": "Course",
          "name": "MHT-CET Biology (PCB)",
          "description": "Detailed Biology program for Pharmacy and PCB aspirants preparing for MHT-CET."
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can join MHT-CET coaching at ASQUARE Undri?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students from Class XI, XII, and drop-year aspirants preparing for Engineering or Pharmacy CET can join ASQUARE Undri."
          }
        },
        {
          "@type": "Question",
          "name": "What subjects are covered in the MHT-CET program?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We cover Physics, Chemistry, Mathematics (for PCM) and Biology (for PCB) as per CET syllabus."
          }
        },
        {
          "@type": "Question",
          "name": "Are mock tests conducted regularly?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we conduct weekly topic-wise and full-length mock tests for continuous CET preparation."
          }
        },
        {
          "@type": "Question",
          "name": "What batch options are available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer 2-year, 1-year, crash course, and dropper batches for MHT-CET aspirants in Undri."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide online CET classes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, both online and offline MHT-CET coaching classes are available at ASQUARE Academy Undri."
          }
        },
        {
          "@type": "Question",
          "name": "Which nearby areas are covered by ASQUARE Undri?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We serve students from Kondhwa, NIBM Road, Mohammed Wadi, Pisoli, Hadapsar, Wanowrie, and Handewadi."
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
          "name": "MHT-CET Coaching in Undri Pune",
          "item": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-undri-pune"
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
              <img className="common_image" src={image1} alt="ASQUARE Undri" />
            </div>
            <div className="col-lg-6 col-md-12 order-1 order-lg-2">
              <h1 className="common_title">
                Crack MHT-CET with Expert Coaching at{" "}
                <span className="common_title_span">ASQUARE Academy,</span>{" "}
                Undri
              </h1>
              <p>
                Searching for the {" "}<strong> best MHT-CET coaching classes in Undri, Pune? </strong> At
                <strong> ASQUARE Academy – Undri,  </strong> we help students excel in{" "}
                <strong> Engineering (PCM) and Pharmacy (PCB)  </strong>
                streams through structured classroom sessions, personalized mentoring, and consistent test practice.<br />
                Our Undri centre is easily accessible to students from
                 <strong>
                    {" "}Kondhwa, NIBM Road, Mohammed Wadi, Pisoli, Hadapsar, Wanowrie, and Handewadi
                </strong>
                {" "}making it one of the most preferred choices for <strong> MHT-CET coaching in South Pune. </strong>
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
                ASQUARE Academy for MHT-CET Coaching in Undri?
              </h2>
              <ul className="common_ul">
                <li>
                  <strong>Experienced Faculty:</strong> Expert mentors for Physics, Chemistry, Maths & Biology.
                </li>
                <li>
                  <strong>Comprehensive Syllabus :</strong> Based on the latest MHT-CET exam pattern.
                </li>
                <li>
                  <strong>Small Batches:</strong> Focused mentoring and one-on-one attention.
                </li>
                <li>
                  <strong>Regular Mock Tests: </strong> Weekly topic-wise and full-length CET tests.
                </li>
                <li>
                  <strong>Integrated Study Plan:</strong> Balanced preparation for Board Exams + CET.
                </li>
              </ul>
              <p>
                At ASQUARE, we ensure that every student gains clarity, speed, and confidence to crack MHT-CET effectively.
              </p>
            </div>
            <div className="col-lg-6 col-md-12 img-col order-1 order-lg-2">
              <img className="common_image" src={image2} alt="Undri classes" />
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
                ASQUARE Academy Undri
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
                  Qualified and experienced faculty team.
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={updated} alt="" />
                <h6 className="grid_item_title">
                  Comprehensive study material for CET.
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={weekly_chapter} alt="" />
                <h6 className="grid_item_title">
                  Small batches for individual focus.
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={personalized} alt="" />
                <h6 className="grid_item_title">
                  Weekly performance reviews and doubt sessions.
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={location} alt="" />
                <h6 className="grid_item_title">
                 Easily accessible for students from <strong> Kondhwa, NIBM Road, Mohammed Wadi, Pisoli, Hadapsar, Wanowrie, and Handewadi.</strong>
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
                ASQUARE Academy Undri 
            </strong>
            {" "}have consistently achieved excellent<strong> MHT-CET ranks, </strong> gaining admission into top institutes like
            <strong> COEP Pune, MIT-WPU, VIT Pune, DY Patil College, and Sinhgad College of Engineering.</strong>
          </p>
          <p>
            Our consistent results come from our emphasis on <strong> oncept clarity, rigorous practice, and personalized mentorship. </strong>
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
                 This effective methodology ensures conceptual strength, accuracy, and exam readiness.
                </strong>{" "}
              </p>
              <a href="/">
                <button className="button mt-3">Know More</button>
              </a>
            </div>
            <div className="col-lg-6">
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Concept-Building Lectures:</h6>
                <span>Concept-based learning with focus on fundamentals.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Daily Practice Papers (DPPs):</h6>
                <span>Daily Practice Papers (DPPs) for continuous reinforcement.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Weekly tests and mock CET exams:</h6>
                <span>Weekly tests and mock CET exams to monitor progress.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Doubt-solving sessions:</h6>
                <span>Doubt-solving sessions for personalized guidance.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Regular Parent–Teacher Meetings (PTMs):</h6>
                <span>Regular Parent–Teacher Meetings (PTMs) to share performance updates.</span>
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
                MHT-CET Coaching Institute in Undri {" "}
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
                     Who can join MHT-CET coaching at ASQUARE Undri?
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
                       Which nearby areas are covered by ASQUARE Undri?
                    </button>
                  </h2>
                  <div
                    id="collapse5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionRight"
                  >
                    <div className="accordion-body">
                      Students from <strong> Kondhwa, NIBM Road, Mohammed Wadi, Pisoli, Hadapsar, Wanowrie, and Handewadi </strong> attend regularly.
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
              The <strong>MHT-CET (Maharashtra Common Entrance Test)</strong> is a crucial entrance exam for schools of  <strong> Engineering, Pharmacy, and Allied Health Science admissions.</strong>
              programs in Maharashtra.
            </p> 
            <p>
                At <strong> ASQUARE Academy Undri, </strong>our curriculum is designed to simplify concepts, strengthen fundamentals, and build exam temperament.
            </p>
            <p>
                Students from <strong> Kondhwa, NIBM, and Mohammed Wadi </strong>choose ASQUARE for its proven results and personalized learning approach.
            </p>
            <h4 className="common_title" style={{ color: "#05479b" }}>
              <strong>Subjects Covered</strong>
            </h4>
            <ul className="common_ul">
              <li className="mb-4">
                <span>
                  <strong>Physics:</strong> In-depth conceptual learning and numerical problem-solving.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong>Chemistry:</strong> Topic-wise focus on Physical, Organic, and Inorganic chemistry with CET-based question practice.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong>Mathematics / Biology: </strong>
                  Stream-specific guidance for PCM (Engineering) and PCB (Pharmacy) aspirants with DPPs and topic tests.
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
                 Complete foundation and advanced preparation.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    1-Year Target Batch (Class XII + CET):
                  </strong>{" "}
                 Focused course for CET success.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    Crash Course (2-3 Months):
                  </strong>{" "}
                   Short-term high-intensity revision program.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    Repeater / Dropper Batch:
                  </strong>{" "}
                  One-year dedicated CET reattempt program.
                </span>
              </li>
            </ul>
            <p>
             All batches include <strong> mock tests, progress tracking, and personal mentor support </strong>
             to ensure improvement.
            </p>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="contact_section mb-5">
        <div className="container text-center">
          <h5 className="common_title">
            Enroll Today{" "}
            <span className="common_title_span">
                ASQUARE Academy Undri Today
            </span>
          </h5>
          <p>
            Join {" "}
            <strong> ASQUARE Academy Undri, </strong>{" "}
            the {" "}
            <strong> Best MHT-CET Coaching Institute in Undri, Pune, </strong>
            and prepare for success with expert mentors and structured guidance.<br/>
            With conceptual learning, regular testing, and personalized mentoring, ASQUARE helps you achieve your CET goals confidently.
          </p>
          <p>
            Serving students from{" "}
            <strong> Undri, Kondhwa, NIBM Road, Mohammed Wadi, Pisoli, Hadapsar, Wanowrie, and Handewadi. </strong>
          </p>
          <h4>
            <strong>
              Admissions Open – Enroll Now at ASQUARE Academy for Expert MHT-CET Coaching in South Pune!
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

export default MHTUndri;
