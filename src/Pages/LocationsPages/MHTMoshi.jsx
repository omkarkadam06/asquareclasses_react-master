import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import Loading from "../Loading.jsx";
import MobileForm from "../../Components/Mobileform/MobileForm.jsx";
import "../locationspage.css";
import locationBGImage from '../../Assets/Asqare Banner - JEE, NEET, Foundation CET/CET banner/mh-cet slider.jpeg';
import MobileBGImage from "../../Assets/Asqare Banner - JEE, NEET, Foundation CET/CET banner/mh-cet slider mob.jpeg";
import MethodologyBg from "../../Assets/locationPageImages/teaching-methodology.jpeg";
import image1 from "../../Assets/locationPageImages/mht-cet/MH-CET page 3.jpeg";
import image2 from "../../Assets/locationPageImages/mht-cet/MH-CET page 6.jpeg";
import location from "../../Assets/locationPageImages/mht-cet/location.png";
import personalized from "../../Assets/locationPageImages/mht-cet/personalized.png";
import qualified from "../../Assets/locationPageImages/mht-cet/qualified.png";
import updated from "../../Assets/locationPageImages/mht-cet/updated.png";
import weekly_chapter from "../../Assets/locationPageImages/mht-cet/weekly_chapter.png";

const Reviews = React.lazy(() =>
  import("../../Components/Reviews/Reviews.jsx")
);

function MHTMoshi() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  return (
    <>
      <Helmet>
        <title>
          MHT-CET Coaching Classes in Moshi Pune | Best CET Institute & Classes - ASQUARE Academy
        </title>
        <meta
          name="title"
          content="MHT-CET Coaching Classes in Moshi Pune | Best CET Institute & Classes - ASQUARE Academy"
        />
        <meta
          name="description"
          content="Join MHT-CET coaching classes in Moshi Pune for Engineering & Pharmacy aspirants. Expert faculty, weekly mock tests, structured programs, and flexible online/offline batches for XI, XII & droppers - ASQUARE Academy."
        />
        <meta
          name="keywords"
          content="MHT-CET Coaching in Moshi Pune, Best MHT-CET Classes in Moshi, Top CET Coaching Institute Moshi, MHT-CET Preparation in Moshi, ASQUARE Academy Moshi, MHT-CET Coaching near Alandi, CET Classes near Charholi, Engineering CET Coaching Moshi Pune, Pharmacy CET Coaching Moshi Pune, Top CET Institute in PCMC Pune, MHT-CET Classes near Chikhali, CET Coaching near Bhosari, Best CET Classes near Dudulgaon, MHT-CET Institute near Talwade, CET Classes near Spine City"
        />
        <script type="application/ld+json">{`
        {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-moshi-pune",
      "url": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-moshi-pune",
      "name": "MHT-CET Coaching in Moshi Pune | Best CET Classes & Institute – ASQUARE Academy",
      "description": "Join ASQUARE Academy for the Best MHT-CET Coaching in Moshi Pune. Expert faculty, weekly mock tests, and structured programs for Engineering & Pharmacy aspirants. Flexible batches for XI, XII & droppers.",
      "publisher": {
        "@type": "Organization",
        "name": "ASQUARE Academy",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png"
        }
      },
      "breadcrumb": {
        "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-moshi-pune#breadcrumb"
      },
      "inLanguage": "en"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-moshi-pune#breadcrumb",
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
          "name": "MHT-CET Coaching Moshi Pune",
          "item": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-moshi-pune"
        }
      ]
    },
    {
      "@type": "EducationalOrganization",
      "name": "ASQUARE Academy Moshi",
      "url": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-moshi-pune",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9766118877",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": "English"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Moshi",
        "addressRegion": "Pune",
        "addressCountry": "IN"
      },
      "description": "ASQUARE Academy offers expert MHT-CET coaching in Moshi Pune for Engineering and Pharmacy students. Includes mock tests, flexible batches, and online/offline options."
    },
    {
      "@type": "LocalBusiness",
      "name": "ASQUARE Academy - MHT-CET Coaching in Moshi Pune",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-moshi-pune",
      "url": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-moshi-pune",
      "telephone": "+91-9766118877",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Moshi, Pune, Maharashtra",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411035",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "18.6643",
        "longitude": "73.8178"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "08:00",
          "closes": "20:00"
        }
      ],
      "sameAs": [
        "https://www.facebook.com/asquareclasses/",
        "https://www.instagram.com/asquareclasses/"
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can join MHT-CET coaching at ASQUARE Moshi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students from Class XI, XII, or drop-year aspirants preparing for Engineering or Pharmacy can join ASQUARE Academy Moshi."
          }
        },
        {
          "@type": "Question",
          "name": "What subjects are taught in the MHT-CET course?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The course includes Physics, Chemistry, Mathematics (for PCM) and Biology (for PCB)."
          }
        },
        {
          "@type": "Question",
          "name": "Are mock tests conducted regularly?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — weekly chapter tests, CET mock exams, and detailed performance reviews are conducted at ASQUARE Moshi."
          }
        },
        {
          "@type": "Question",
          "name": "What batch options are available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer 2-year, 1-year, crash course, and repeater batches to match different student preparation goals."
          }
        },
        {
          "@type": "Question",
          "name": "Which nearby areas are covered by ASQUARE Moshi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students from Alandi, Charholi, Chikhali, Bhosari, Spine City, Dudulgaon, Dehu, and Talwade attend ASQUARE Moshi regularly."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer online CET classes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — ASQUARE Moshi offers both offline and online MHT-CET coaching programs for flexibility."
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
                Achieve CET Success with <span className="common_title_span">ASQUARE Academy,</span> Moshi (PCMC).
              </h1>
              <p>
                Looking for the{" "}
                <strong>best MHT-CET coaching classes in Moshi, Pune?</strong>{" "}
                At <strong>ASQUARE Academy Moshi,</strong> we offer expert-led programs for <strong>Engineering (PCM)</strong> and{" "}
                <strong>Pharmacy (PCB)</strong> aspirants designed to strengthen concepts, enhance problem-solving speed, and boost confidence.
              </p>
              <p>
                Our Moshi centre is conveniently located for students from {" "}
                <strong>
                  Alandi, Charholi, Chikhali, Bhosari, Spine City, Dudulgaon, Dehu, and Talwade, {" "}
                </strong>
                making it a top destination for <strong>MHT-CET coaching in PCMC Pune.</strong>
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
                ASQUARE Academy for MHT-CET in Moshi?
              </h2>
              <ul className="common_ul">
                <li>
                  <span>
                    <strong>Expert Faculty:</strong> Experienced subject specialists for Physics, Chemistry, Maths, and Biology.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Updated CET Curriculum:</strong> Based on the latest <strong>MHT-CET exam pattern </strong>with practical question practice.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Small Batches:</strong> Personalized learning and doubt-clearing support.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Regular Testing:</strong> Weekly topic-wise tests and full-length mock exams for consistent progress.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Integrated Board + CET Preparation: </strong> Balanced focus for Class XI-XII students.
                  </span>
                </li>
              </ul>
              <p>
                ASQUARE ensures every student develops the right academic foundation, test-taking strategy and confidence to excel in MHT-CET.
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
                <span className="common_title_span">Key Benefits</span> of
                Joining ASQUARE Academy, Moshi:
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
                    Result-driven faculty with years of experience.
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={updated} alt="" />
                <div className="grid_content">
                  <h6 className="grid_item_title">
                    Small batches for better focus and personal mentoring.
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={weekly_chapter} alt="" />
                <div className="grid_content">
                  <h6 className="grid_item_title">
                    Topic-wise assessments and complete CET syllabus coverage.
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={personalized} alt="" />
                <div className="grid_content">
                  <h6 className="grid_item_title">
                    Printed & digital CET study materials.
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={location} alt="" />
                <div className="grid_content">
                  <h6 className="grid_item_title">
                    Accessible for students from
                  </h6>
                  <p>
                    <strong>
                      Alandi, Charholi, Chikhali, Bhosari, Spine City, Dudulgaon, Dehu, and Talwade.
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
              <strong>ASQUARE Academy Moshi </strong> students have consistently achieved high ranks in<strong> MHT-CET, </strong>
              securing admission to prestigious colleges like
              {" "}
              <strong>
                COEP Pune, MIT-WPU, DY Patil College, VIT Pune, and Sinhgad College of Engineering.
              </strong>
              <p className="pt-3">
                Our success formula combines expert mentorship, structured learning, and continuous evaluation — ensuring top CET performance.
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
                This structured methodology ensures accuracy, consistency, and exam success.
              </p>
              <a href="/">
                <button class="button mt-3">Know More</button>
              </a>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Concept-Oriented Classes:</h6>
                <span>Focused sessions to build conceptual clarity.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">
                  Daily Practice Papers (DPPs):
                </h6>
                <span>Reinforce learning through regular exercises.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">
                  Weekly Mock Tests:
                </h6>
                <span>Evaluate performance and identify improvement areas.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Doubt-Solving Sessions:</h6>
                <span>Dedicated time for one-on-one query resolution.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">
                  Parent-Teacher Meetings (PTMs):
                </h6>
                <span>Regular progress reports and academic updates.</span>
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
                MHT-CET Coaching Institute in Moshi, Pune{" "}
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
                      Who can join MHT-CET coaching at ASQUARE Moshi?
                    </button>
                  </h2>
                  <div
                    id="collapse1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionLeft"
                  >
                    <div className="accordion-body">
                      Students from Class XI, XII, or drop-year aspirants preparing for Engineering or Pharmacy.
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
                      Yes — we conduct weekly chapter tests, CET mock exams, and performance reviews.
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
                      We offer  and repeater batches for flexible preparation.{" "}
                      <strong>
                        2-year, 1-year, crash course, 
                      </strong>and
                      <strong> repeater batches</strong>
                      for flexible preparation.
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
                      Which nearby areas are covered by ASQUARE Moshi?
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
                       Alandi, Charholi, Chikhali, Bhosari, Spine City, Dudulgaon, Dehu, and Talwade
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
                      Do you offer online CET classes?
                    </button>
                  </h2>
                  <div
                    id="collapse5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionRight"
                  >
                    <div className="accordion-body">
                     Yes — both <strong>offline and online MHT-CET coaching</strong> options are available.
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
              The <strong>MHT-CET (Maharashtra Common Entrance Test)</strong> is a key entrance exam for students aspiring to join{" "}
              <strong>
                Engineering, Pharmacy, and Allied Health Science
              </strong>{" "}
              courses in Maharashtra.
            </p>
            <p>
              At <strong>ASQUARE Academy Moshi,</strong> our systematic and exam-oriented approach helps students master every topic, improve analytical thinking, and strengthen time management skills.
            </p>
            <p>
              We attract students from{" "}
              <strong>
                Alandi, Chikhali, Bhosari, and Charholi,
              </strong>{" "}
              making our centre one of the most trusted <strong>CET institutes in North PCMC Pune.</strong>
            </p>
            <h4 className="common_title" style={{ color: "#05479b" }}>
              <strong>Subjects Covered</strong>
            </h4>
            <ul className="common_ul">
              <li className='mb-4'>
                <span>
                  <strong>Physics:</strong> Strengthen understanding through derivations, numericals, and conceptual practice.
                </span>
              </li>
              <li className='mb-4'>
                <span>
                  <strong>Chemistry:</strong> Complete coverage of Physical, Organic & Inorganic chemistry with CET-focused MCQs.
                </span>
              </li>
              <li className='mb-4'>
                <span>
                  <strong>Mathematics / Biology: </strong>
                  Stream-specific programs for
                  <strong> PCM (Engineering) and PCB (Pharmacy)</strong>{" "}
                  with daily assignments and DPPs.
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
                  Comprehensive foundation + CET-focused learning.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    1-Year Target Batch (Class XII + CET):
                  </strong>{" "}
                  Intensive revision and problem-solving program.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    Crash Course (2-3 Months):
                  </strong>{" "}
                   Compact course for final preparation before the exam.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    Repeater / Dropper Batch:
                  </strong>{" "}
                  One-year batch for CET reattempt students with advanced question practice.
                </span>
              </li>
            </ul>
            <p>
              Every program includes {" "}
              <strong>
                weekly tests, performance tracking, and personalized mentor guidance.
              </strong>{" "}
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
                ASQUARE Academy — Moshi, Pune (PCMC)
                </span>
              </h5>
              <p>
                Join <strong>ASQUARE Academy, </strong> the <strong>Best MHT-CET Coaching Institute in Moshi, Pune,</strong> 
                and begin your journey toward CET success.
              </p>
              <p>
                With experienced faculty, regular tests, and personal mentorship, ASQUARE helps you secure your dream college admission.
              </p>
              <p>
                Serving students from
                <strong>
                  {" "}
                  Moshi, Alandi, Charholi, Chikhali, Bhosari, Spine City, Dudulgaon, Dehu, and Talwade.
                </strong>
              </p>
              <h4>Admissions Open - Enroll Now and Excel with ASQUARE Academy!</h4>
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

export default MHTMoshi;
