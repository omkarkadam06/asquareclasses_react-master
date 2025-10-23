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
import image1 from "../../Assets/locationPageImages/mht-cet/MH-CET page 2.jpeg";
import image2 from "../../Assets/locationPageImages/mht-cet/MH-CET page 6.jpeg";
import location from "../../Assets/locationPageImages/mht-cet/location.png";
import personalized from "../../Assets/locationPageImages/mht-cet/personalized.png";
import qualified from "../../Assets/locationPageImages/mht-cet/qualified.png";
import updated from "../../Assets/locationPageImages/mht-cet/updated.png";
import weekly_chapter from "../../Assets/locationPageImages/mht-cet/weekly_chapter.png";

const Reviews = React.lazy(() =>
  import("../../Components/Reviews/Reviews.jsx")
);

function MHTChinchwad() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  return (
    <>
      <Helmet>
        <title>
          MHT-CET Coaching Classes in Chinchwad Pune | Best CET Institute - ASQUARE Academy
        </title>
        <meta
          name="title"
          content="MHT-CET Coaching in Chinchwad Pune | Best CET Classes &amp; Institute - ASQUARE Academy"
        />
        <meta
          name="description"
          content="Join the Best MHT-CET Coaching Classes in Chinchwad Pune for Engineering &amp; Pharmacy aspirants. Expert faculty, mock tests, structured study plans, and flexible batches for XI, XII &amp; repeaters at ASQUARE Academy."
        />
        <meta
          name="keywords"
          content="MHT-CET Coaching in Chinchwad Pune, Best MHT-CET Classes in Chinchwad, Top CET Coaching Institute Chinchwad, MHT-CET Preparation in Chinchwad, ASQUARE Academy Chinchwad, MHT-CET Coaching near Sahu Nagar, CET Classes near Akurdi, Engineering CET Coaching Chinchwad Pune, Pharmacy CET Coaching Chinchwad Pune, Top CET Institute in PCMC Pune, MHT-CET Classes in Walhekarwadi, CET Coaching near Indrayani Nagar, Best CET Coaching near Chinchwadgaon, MHT-CET Classes near Spine City"
        />
        <script type="application/ld+json">{`
        {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-chinchwad-pune",
      "url": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-chinchwad-pune",
      "name": "MHT-CET Coaching Classes in Chinchwad Pune | Best CET Institute – ASQUARE Academy",
      "description": "Join the Best MHT-CET Coaching Classes in Chinchwad Pune for Engineering & Pharmacy aspirants. Expert faculty, mock tests, structured study plans, and flexible batches for XI, XII & repeaters at ASQUARE Academy.",
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
        "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-chinchwad-pune#breadcrumb"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-chinchwad-pune#breadcrumb",
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
          "name": "MHT-CET Coaching Classes Chinchwad Pune",
          "item": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-chinchwad-pune"
        }
      ]
    },
    {
      "@type": "EducationalOrganization",
      "name": "MHT-CET Coaching Classes Chinchwad",
      "url": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-chinchwad-pune",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "description": "ASQUARE Academy offers expert-led MHT-CET coaching classes in Chinchwad Pune for Engineering and Pharmacy students with mock tests and flexible batches.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Chinchwad",
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
      "@type": "LocalBusiness",
      "name": "MHT-CET Coaching Classes in Chinchwad Pune",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-chinchwad-pune",
      "url": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-chinchwad-pune",
      "telephone": "+91-9766118877",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Chinchwad, Pune, Maharashtra",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411033",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "18.6284",
        "longitude": "73.7868"
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
          "name": "Who can join MHT-CET coaching at ASQUARE Chinchwad?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students in Class XI, XII, or drop-year aspirants targeting Engineering or Pharmacy CET can join ASQUARE Chinchwad."
          }
        },
        {
          "@type": "Question",
          "name": "What subjects are covered in the MHT-CET course?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Physics, Chemistry, Mathematics (for PCM) and Biology (for PCB) are taught at ASQUARE Chinchwad."
          }
        },
        {
          "@type": "Question",
          "name": "Are mock tests part of every batch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — topic-wise tests and full-length CET mock exams are conducted regularly for every batch."
          }
        },
        {
          "@type": "Question",
          "name": "What are the available batch options?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE Chinchwad offers 2-year integrated, 1-year target, crash course, and dropper/repeater batches."
          }
        },
        {
          "@type": "Question",
          "name": "Which nearby areas are covered by the Chinchwad centre?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students from Akurdi, Nigdi, Pimpri, Bhosari, Sahu Nagar, Pimple Saudagar, Indrayani Nagar, Walhekarwadi, Spine City, and Chinchwadgaon attend regularly."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer online CET coaching as well?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — both offline and online MHT-CET classes are available for flexible learning."
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
                Crack MHT-CET with Expert Coaching at {" "}
                <span className="common_title_span">ASQUARE Academy ,</span>{" "}
                Chinchwad.
              </h1>
              <p>
                Looking for the{" "}
                <strong>Best MHT-CET coaching classes in Chinchwad, Pune?</strong>{" "}
                At <strong>ASQUARE Academy Chinchwad, </strong> we help students excel in
                <strong> Engineering (PCM)</strong> and{" "}
                <strong>Pharmacy (PCB)</strong> streams through structured lessons, conceptual clarity, and rigorous mock testing.
              </p>
              <p>
                Our Chinchwad branch serves students from{" "}
                <strong>
                  Akurdi, Nigdi, Pimpri, Bhosari, Sahu Nagar, Pimple Saudagar, Indrayani Nagar, Walhekarwadi, Spine City, and Chinchwadgaon,{" "}
                </strong>
                making ASQUARE one of the most trusted names for{" "}
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
                ASQUARE Academy for MHT-CET in Chinchwad?
              </h2>
              <ul className="common_ul">
                <li>
                  <span>
                    <strong>Experienced Faculty:</strong> Subject experts for Physics, Chemistry, Maths &amp; Biology.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Updated Syllabus:</strong> Based on the latest MHT-CET exam format.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Personalized Learning:</strong> Small batches ensure focused attention.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Regular Mock Tests:</strong> Weekly and monthly tests to track improvement.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Integrated Preparation: </strong> Covers <strong>Class 11-12 Boards + MHT-CET syllabus</strong> efficiently.
                  </span>
                </li>
              </ul>
              <p>
                ASQUARE Academy's unique approach helps students strengthen concepts, master time management, and score high in CET.
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
                ASQUARE Academy, Chinchwad:
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
                    Expert mentors with years of CET teaching experience.
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={updated} alt="" />
                <div className="grid_content">
                  <h6 className="grid_item_title">
                    Small batches for focused learning.
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={weekly_chapter} alt="" />
                <div className="grid_content">
                  <h6 className="grid_item_title">
                    Comprehensive CET syllabus coverage.
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={personalized} alt="" />
                <div className="grid_content">
                  <h6 className="grid_item_title">
                    Result-driven strategy and mock test system.
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={location} alt="" />
                <div className="grid_content">
                  <h6 className="grid_item_title">
                    Ideal for students from
                  </h6>
                  <p>
                    <strong>
                      Akurdi, Nigdi, Pimpri, Bhosari, Sahu Nagar, Pimple Saudagar, Indrayani Nagar, Walhekarwadi, Spine City, and Chinchwadgaon.
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
              <strong> ASQUARE Academy Chinchwad </strong>has produced many top-ranking students who secured admission in leading institutions like
              <strong>
                {" "}
                COEP Pune, MIT-WPU, DY Patil College, VIT Pune, and Sinhgad
                Institute of Technology.{" "}
              </strong>
              <p className="pt-3">
                Our consistent results come from concept-based learning, personalized mentorship, and continuous testing — the ASQUARE formula for CET success.
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
                This systematic method ensures clarity, speed, and precision — the key to excelling in <strong>MHT-CET.</strong>
              </p>
              <a href="/">
                <button class="button mt-3">Know More</button>
              </a>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Concept-Focused Learning:</h6>
                <span>Interactive concept-based classroom sessions.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">
                  Daily Practice Papers (DPPs):
                </h6>
                <span>
                  Daily Practice Papers (DPPs) and topic assignments.
                </span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Weekly Mock Tests:</h6>
                <span>Weekly CET mock exams for real exam simulation.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">
                  Interactive Doubt-Solving:
                </h6>
                <span>Personalized doubt-solving sessions and revision support.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">
                  Parent-Teacher Meetings (PTMs):
                </h6>
                <span>
                  Regular Parent–Teacher Meetings (PTMs) and performance updates.
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
                MHT-CET Coaching Institute in Chinchwad, Pune{" "}
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
                      Who can join MHT-CET coaching at ASQUARE Chinchwad?
                    </button>
                  </h2>
                  <div
                    id="collapse1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionLeft"
                  >
                    <div className="accordion-body">
                      Students in Class XI, XII, or drop-year aspirants targeting Engineering or Pharmacy CET.
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
                      What subjects are covered in the MHT-CET course?
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
                      Are mock tests part of every batch?
                    </button>
                  </h2>
                  <div
                    id="collapse3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionLeft"
                  >
                    <div className="accordion-body">
                      Yes — topic-wise tests and full-length CET mock exams are included in all batches.
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
                      and
                      <strong> dropper/repeater batches.</strong>
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
                      Which nearby areas are covered by the Chinchwad centre?
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
                        Akurdi, Nigdi, Pimpri, Bhosari, Sahu Nagar, Pimple Saudagar, Indrayani Nagar, Walhekarwadi, Spine City, and Chinchwadgaon
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
                      Do you offer online CET coaching as well?
                    </button>
                  </h2>
                  <div
                    id="collapse5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionRight"
                  >
                    <div className="accordion-body">
                      Yes — both <strong>online</strong> and <strong>offline</strong> CET coaching options are available for flexible learning.
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
              The <strong>MHT-CET (Maharashtra Common Entrance Test)</strong> is a gateway for admission to top {" "}
              <strong>Engineering, Pharmacy, and Allied Science</strong>{" "}
              colleges in Maharashtra.
            </p>
            <p>
              At <strong>ASQUARE Academy Chinchwad, </strong>
              we emphasize conceptual understanding, accuracy, and speed through structured teaching and consistent testing.<br/>
              Students from
              <strong> Akurdi, Nigdi, Sahu Nagar, Pimpri, and Pimple Saudagar </strong>
              prefer ASQUARE for its proven track record in CET results.
            </p>
            <h4 className="common_title" style={{ color: "#05479b" }}>
              <strong>Subjects Covered</strong>
            </h4>
            <ul className="common_ul">
              <li className="mb-4">
                <span>
                  <strong>Physics:</strong> Concept-based teaching with numerical problem-solving practice.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong>Chemistry:</strong> Detailed coverage of Physical, Organic, and Inorganic topics with CET-level questions.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong>Mathematics / Biology: </strong>
                  Specialized programs for
                  <strong> PCM (Engineering) and PCB (Pharmacy)</strong> streams
                  streams with regular assignments and topic-wise tests.
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
                  Strong foundation and exam-oriented training.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    1-Year Target Batch (Class XII + CET):
                  </strong>{" "}
                  Comprehensive coverage with topic-wise and full-length mock tests.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    Crash Course (2-3 Months):
                  </strong>{" "}
                  Short-term batch for rapid revision and final test practice.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    Repeater / Dropper Batch:
                  </strong>{" "}
                  One-year program for CET reattempts with focused concept reinforcement.
                </span>
              </li>
            </ul>
            <p>
              Each batch includes{" "}
              <strong>
                weekly evaluations, progress tracking, and personal mentor feedback
              </strong>{" "}
              to ensure consistent performance.
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
                  ASQUARE Academy — Chinchwad, Pune
                </span>
              </h5>
              <p>
                Join <strong>ASQUARE Academy, </strong> the{" "}
                <strong>
                  Best MHT-CET Coaching Institute in Chinchwad, Pune.{" "}
                </strong>
                and begin your journey to success.
              </p>
              <p>
               With expert teachers, small batches, and consistent mock testing, ASQUARE ensures top performance in MHT-CET and other entrance exams.
              </p>
              <p>
                Serving students from
                <strong>
                  {" "}
                  Chinchwad, Akurdi, Nigdi, Pimpri, Bhosari, Sahu Nagar, Pimple Saudagar, Indrayani Nagar, Walhekarwadi, Spine City, and Chinchwadgaon.
                </strong>
              </p>
              <h4>
                Admissions Open – Enroll Now at ASQUARE Academy for MHT-CET Excellence!
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

export default MHTChinchwad;
