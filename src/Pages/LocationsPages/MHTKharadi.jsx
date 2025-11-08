import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import Loading from "../Loading.jsx";
import MobileForm from "../../Components/Mobileform/MobileForm.jsx";
import "../locationspage.css";
import locationBGImage from "../../Assets/locationPageImages/mht-cet/mhcet-desktop-bg5.0.jpeg"
import MobileBGImage from "../../Assets/locationPageImages/mht-cet/mhcet-mobile-bg5.0.jpeg";
import MethodologyBg from "../../Assets/locationPageImages/teaching-methodology.jpeg";
import image1 from "../../Assets/locationPageImages/mht-cet/MH-CET page 12.jpeg";
import image2 from "../../Assets/locationPageImages/mht-cet/MH-CET page 13.jpeg";
import location from "../../Assets/locationPageImages/mht-cet/location.png";
import personalized from "../../Assets/locationPageImages/mht-cet/personalized.png";
import qualified from "../../Assets/locationPageImages/mht-cet/qualified.png";
import updated from "../../Assets/locationPageImages/mht-cet/updated.png";
import weekly_chapter from "../../Assets/locationPageImages/mht-cet/weekly_chapter.png";

const Reviews = React.lazy(() =>
  import("../../Components/Reviews/Reviews.jsx")
);

function MHTKharadi() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  return (
    <>
      <Helmet>
        <title>
          MHT-CET Coaching in Kharadi Pune | Best CET Classes - ASQUARE Academy
        </title>
        <meta
          name="title"
          content="MHT-CET Coaching in Kharadi Pune | Best CET Classes - ASQUARE Academy"
        />
        <meta
          name="description"
          content="Join top MHT-CET Coaching Classes in Kharadi Pune for Engineering & Pharmacy aspirants. Expert teachers, mock tests & online CET options at ASQUARE Academy."
        />
        <meta
          name="keywords"
          content="MHT-CET Coaching in Kharadi Pune, Best MHT-CET Classes in Kharadi, Top CET Coaching Institute Kharadi, MHT-CET Preparation in Kharadi, ASQUARE Academy Kharadi, MHT-CET Coaching near Wagholi, CET Classes near Kalyani Nagar, Engineering CET Coaching Kharadi Pune, Pharmacy CET Coaching Kharadi Pune, Top CET Institute in East Pune, MHT-CET Classes near Viman Nagar, CET Coaching near Chandan Nagar, Best CET Classes near Keshav Nagar, MHT-CET Classes near Mundhwa, CET Institute near Magarpatta City"
        />
        <script type="application/ld+json">{`
        {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-kharadi-pune#localbusiness",
      "name": "ASQUARE Academy Kharadi",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "url": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-kharadi-pune",
      "telephone": "9922351375",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Kharadi, Pune, Maharashtra",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411014",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "18.5515",
        "longitude": "73.9410"
      },
      "sameAs": [
        "https://www.asquareclasses.com/",
        "https://www.facebook.com/asquareacademy/",
        "https://www.instagram.com/asquareacademy/"
      ]
    },
    {
      "@type": "EducationalOrganization",
      "name": "ASQUARE Academy",
      "url": "https://www.asquareclasses.com/",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "description": "ASQUARE Academy offers MHT-CET coaching and classes in Kharadi Pune for Engineering and Pharmacy aspirants."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-kharadi-pune#webpage",
      "url": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-kharadi-pune",
      "name": "MHT-CET Coaching Classes in Kharadi Pune | ASQUARE Academy",
      "description": "Best MHT-CET Coaching Classes in Kharadi Pune for Engineering & Pharmacy students. Expert faculty, mock tests & online learning options at ASQUARE Academy."
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
          "item": "https://www.asquareclasses.com/mht-cet-coaching-classes/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Kharadi Pune"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can join MHT-CET coaching at ASQUARE Kharadi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students from Class XI, XII, and droppers targeting Engineering or Pharmacy can join MHT-CET coaching at ASQUARE Kharadi."
          }
        },
        {
          "@type": "Question",
          "name": "Which subjects are taught in the CET course?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We cover Physics, Chemistry, Mathematics (for PCM) and Biology (for PCB) in our MHT-CET course."
          }
        },
        {
          "@type": "Question",
          "name": "Are mock tests part of the course?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — regular topic-wise and full-length CET mock tests are conducted as part of the ASQUARE Kharadi course."
          }
        },
        {
          "@type": "Question",
          "name": "What are the available batch options?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer 2-year integrated, 1-year target, crash course, and repeater batches for MHT-CET aspirants."
          }
        },
        {
          "@type": "Question",
          "name": "Which nearby areas are served by ASQUARE Kharadi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students from Viman Nagar, Kalyani Nagar, Wagholi, Mundhwa, Chandan Nagar, Keshav Nagar, and Magarpatta City attend our Kharadi branch."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer online MHT-CET coaching?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — ASQUARE Academy offers both online and offline MHT-CET coaching for flexible and convenient learning."
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
                Crack MHT-CET with Expert Coaching at{" "}
                <span className="common_title_span">ASQUARE Academy ,</span>{" "}
                Kharadi.
              </h1>
              <p>
                Searching for the{" "}
                <strong>Best MHT-CET coaching classes in Kharadi, Pune?</strong>{" "}
                At <strong>ASQUARE Academy Kharadi, </strong> we help students master the
                <strong> Engineering (PCM)</strong> and{" "}
                <strong>Pharmacy (PCB)</strong> syllabi through expert teaching, personalized attention, and consistent test practice.
              </p>
              <p>
                Our Kharadi centre is conveniently located for students from{" "}
                <strong>
                  Viman Nagar, Kalyani Nagar, Wagholi, Mundhwa, Chandan Nagar, Keshav Nagar, and Magarpatta City,{" "}
                </strong>
                making it one of the most trusted destinations for{" "}
                <strong>MHT-CET coaching in East Pune. </strong>
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
                ASQUARE Academy for MHT-CET in Kharadi?
              </h2>
              <ul className="common_ul">
                <li>
                  <span>
                    <strong>Expert Faculty:</strong> Highly experienced teachers for Physics, Chemistry, Maths, and Biology.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Updated Curriculum:</strong> Based on the latest{" "}
                    <strong>MHT-CET pattern</strong> and exam trends.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Small Batches:</strong> Personalized focus and one-on-one doubt resolution.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Regular Tests & Feedback:</strong>{" "}
                    Weekly tests and mock CETs with performance analysis.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Dual Learning Approach:</strong> Integrated preparation for
                    <strong> Boards + MHT-CET exams.</strong>
                  </span>
                </li>
              </ul>
              <p>
                At ASQUARE, we emphasize <strong> concept clarity, speed-building, and exam-smart strategy </strong> to ensure top performance.
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
                ASQUARE Academy, Kharadi:
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
                    Highly experienced and approachable faculty.
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={updated} alt="" />
                <div className="grid_content">
                  <h6 className="grid_item_title">
                    CET-focused printed and digital study materials.
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={weekly_chapter} alt="" />
                <div className="grid_content">
                  <h6 className="grid_item_title">
                    Small, focused batches for individual guidance.
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={personalized} alt="" />
                <div className="grid_content">
                  <h6 className="grid_item_title">
                    Weekly evaluation and test discussions.
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
                      Viman Nagar, Kalyani Nagar, Wagholi, Mundhwa, Chandan Nagar, Keshav Nagar, and Magarpatta City.
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
              <strong> ASQUARE Academy Kharadi </strong> have consistently achieved excellent <strong> MHT-CET, </strong>
              scores and gained admission to top colleges such as
              <strong>
                {" "}
                COEP Pune, MIT-WPU, VIT Pune, DY Patil College, and Sinhgad Institute of Technology.{" "}
              </strong>
              <p className="pt-3">
                Our results highlight our commitment to <strong> conceptual learning, rigorous testing, and personalized mentorship. </strong>
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
                This structured approach builds conceptual strength and exam confidence in every student.
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
                <span>Concept-based lectures with problem-solving approach.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">
                  Daily Practice Papers (DPPs):
                </h6>
                <span>Daily Practice Papers (DPPs) for consistent learning and application.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">
                  Weekly & Monthly CET Tests:
                </h6>
                <span>Weekly tests and full-length CET mock exams for practice.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Doubt-Solving Sessions:</h6>
                <span>One-on-one doubt-solving sessions for each student.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">
                  Parent-Teacher Meetings (PTMs):
                </h6>
                <span>Parent–Teacher Meetings (PTMs) for academic performance discussions.</span>
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
                MHT-CET Coaching Institute in Kharadi, Pune{" "}
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
                      Who can join MHT-CET coaching at ASQUARE Kharadi?
                    </button>
                  </h2>
                  <div
                    id="collapse1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionLeft"
                  >
                    <div className="accordion-body">
                      Students from Class XI, XII, or drop-year aspirants targeting Engineering or Pharmacy.
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
                      What subjects are covered in the CET course?
                    </button>
                  </h2>
                  <div
                    id="collapse2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionLeft"
                  >
                    <div className="accordion-body">
                      Physics, Chemistry, Mathematics (for Engineering) and
                      Biology (for Pharmacy).
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
                      Are mock tests part of the course?
                    </button>
                  </h2>
                  <div
                    id="collapse3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionLeft"
                  >
                    <div className="accordion-body">
                      Yes — regular topic-wise and full-length CET mock tests are conducted.
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
                      Which nearby areas are covered by the Kharadi branch?
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
                        Viman Nagar, Kalyani Nagar, Wagholi, Mundhwa, Chandan Nagar, Keshav Nagar, and Magarpatta City
                      </strong>{" "}
                      attend our centre.
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
              The <strong>MHT-CET (Maharashtra Common Entrance Test)</strong> is the gateway for admission into{" "}
              <strong>
                Engineering, Pharmacy, and Allied Science programs
              </strong>{" "}
              across Maharashtra.
            </p>
            <p>
              At <strong>ASQUARE Academy Kharadi,</strong> our teaching combines classroom learning, concept-based problem-solving, and regular performance tracking to prepare students for exam excellence.
              <br />
              Students from{" "}
               <strong>Viman Nagar, Wagholi, and Kalyani Nagar</strong> prefer ASQUARE for its results, faculty expertise, and academic discipline.
            </p>
            <h4 className="common_title" style={{ color: "#05479b" }}>
              <strong>Subjects Covered</strong>
            </h4>
            <ul className="common_ul">
              <li className="mb-4">
                <span>
                  <strong>Physics:</strong> Conceptual and numerical mastery through detailed teaching and analysis.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong>Chemistry:</strong> Coverage of Physical, Organic, and Inorganic chemistry with exam-oriented MCQs.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong>Mathematics / Biology: </strong>
                  Tailored learning for
                  <strong> PCM (Engineering) and PCB (Pharmacy)</strong> students with topic-wise tests and assignments.
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
                  Comprehensive foundation and advanced CET preparation.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    1-Year Target Batch (Class XII + CET):
                  </strong>{" "}
                  Focused training with weekly mock tests and revision modules.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    Crash Course (2-3 Months):
                  </strong>{" "}
                  Short-term, high-intensity revision program.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    Repeater / Dropper Batch:
                  </strong>{" "}
                  One-year extensive course for CET reattempts.
                </span>
              </li>
            </ul>
            <p>
              Each course includes{" "}
              <strong>
                weekly topic tests, mentor sessions, and progress tracking
              </strong>{" "}
              to ensure consistent improvement.
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
                  ASQUARE Academy — Kharadi, Pune
                </span>
              </h5>
              <p>
                Join <strong>ASQUARE Academy, </strong> the{" "}
                <strong>
                  Best MHT-CET Coaching Institute in Kharadi, Pune,{" "}
                </strong>
                and get the right guidance to crack CET with confidence.
                <br />
                With personalized attention, concept-focused learning, and strategic test preparation, ASQUARE helps you achieve top CET ranks.
                <br />
                Serving students from
                <strong>
                  {" "}
                  Kharadi, Viman Nagar, Kalyani Nagar, Wagholi, Mundhwa, Chandan Nagar, Keshav Nagar, and Magarpatta City.
                </strong>
              </p>
              <h4>
                Admissions Open - Enroll Now for Expert MHT-CET Coaching at ASQUARE!
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

export default MHTKharadi;
