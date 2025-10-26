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
import image1 from "../../Assets/locationPageImages/mht-cet/MH-CET page 14.jpeg";
import image2 from "../../Assets/locationPageImages/mht-cet/MH-CET page 15.jpeg";
import location from "../../Assets/locationPageImages/mht-cet/location.png";
import personalized from "../../Assets/locationPageImages/mht-cet/personalized.png";
import qualified from "../../Assets/locationPageImages/mht-cet/qualified.png";
import updated from "../../Assets/locationPageImages/mht-cet/updated.png";
import weekly_chapter from "../../Assets/locationPageImages/mht-cet/weekly_chapter.png";

const Reviews = React.lazy(() =>
  import("../../Components/Reviews/Reviews.jsx")
);

function MHTWanowrie() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  return (
    <>
      <Helmet>
        <title>
          MHT-CET Coaching in Wanowrie Pune | Best CET Classes - ASQUARE Academy
        </title>
        <meta
          name="title"
          content="MHT-CET Coaching in Wanowrie Pune | Best CET Classes - ASQUARE Academy"
        />
        <meta
          name="description"
          content="Join top MHT-CET Coaching Classes in Wanowrie Pune for Engineering &amp; Pharmacy aspirants. Expert faculty, mock tests &amp; online options at ASQUARE Academy."
        />
        <meta
          name="keywords"
          content="MHT-CET Coaching in Wanowrie Pune, Best MHT-CET Classes in Wanowrie, Top CET Coaching Institute Wanowrie, MHT-CET Preparation in Wanowrie, ASQUARE Academy Wanowrie, MHT-CET Coaching near Kondhwa, CET Classes near Fatima Nagar, Engineering CET Coaching Wanowrie Pune, Pharmacy CET Coaching Wanowrie Pune, Top CET Institute in South Pune, MHT-CET Classes near NIBM, Best CET Coaching near Camp Pune, CET Coaching near Lullanagar, MHT-CET Coaching near Salunke Vihar, CET Institute near Market Yard"
        />
        <script type="application/ld+json">{`
        {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-wanowrie-pune#localbusiness",
      "name": "ASQUARE Academy Wanowrie",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "url": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-wanowrie-pune",
      "telephone": "9922351375",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Wanowrie, Pune, Maharashtra",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411040",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "18.4900",
        "longitude": "73.9000"
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
      "description": "ASQUARE Academy provides MHT-CET coaching and classes in Wanowrie Pune for Engineering and Pharmacy aspirants."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-wanowrie-pune#webpage",
      "url": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-wanowrie-pune",
      "name": "MHT-CET Coaching Classes in Wanowrie Pune | ASQUARE Academy",
      "description": "Best MHT-CET Coaching Classes in Wanowrie Pune for Engineering & Pharmacy students. Expert faculty, mock tests & online learning options at ASQUARE Academy."
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
          "name": "Wanowrie Pune"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can join MHT-CET coaching at ASQUARE Wanowrie?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students from Class XI, XII, or drop-year aspirants targeting Engineering or Pharmacy can join MHT-CET coaching at ASQUARE Wanowrie."
          }
        },
        {
          "@type": "Question",
          "name": "What subjects are covered in the CET course?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We cover Physics, Chemistry, Mathematics (for PCM), and Biology (for PCB) in our comprehensive CET course."
          }
        },
        {
          "@type": "Question",
          "name": "Are mock tests conducted regularly?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — weekly topic tests and full-length CET mock exams are part of every batch to strengthen exam readiness."
          }
        },
        {
          "@type": "Question",
          "name": "What batch options are available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE Wanowrie offers 2-year integrated, 1-year target, crash course, and dropper batches for MHT-CET preparation."
          }
        },
        {
          "@type": "Question",
          "name": "Which nearby areas are covered by the Wanowrie branch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students from Fatima Nagar, Kondhwa, Camp, NIBM Road, Lullanagar, Salunke Vihar, and Market Yard attend classes regularly."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer online MHT-CET coaching?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — ASQUARE Academy offers both offline and online MHT-CET coaching for flexible learning."
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
                Wanowrie.
              </h1>
              <p>
                Are you searching for the{" "}
                <strong>Best MHT-CET coaching classes in Wanowrie, Pune?</strong>{" "}
                At <strong>ASQUARE Academy Wanowrie, </strong> we prepare students for
                <strong> Engineering (PCM)</strong> and{" "}
                <strong>Pharmacy (PCB)</strong> streams with a perfect blend of
                <strong>concept-based learning, regular practice tests, and expert mentoring.</strong>
              </p>
              <p>
                Our Wanowrie branch is easily accessible for students from{" "}
                <strong>
                  Fatima Nagar, Kondhwa, Camp, NIBM Road, Lullanagar, Salunke Vihar, and Market Yard,,{" "}
                </strong>
                making it one of the top destinations for{" "}
                <strong>MHT-CET coaching in South Pune. </strong>
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
                ASQUARE Academy for MHT-CET in Wanowrie?
              </h2>
              <ul className="common_ul">
                <li>
                  <span>
                    <strong>Experienced Faculty:</strong> Expert mentors for Physics, Chemistry, Maths, and Biology.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Updated Curriculum:</strong> Covers the entire{" "}
                    <strong>MHT-CET syllabus.</strong> with the latest pattern.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Small Batches:</strong> Personalized attention and interactive learning sessions.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Regular Mock Tests:</strong>{" "}
                    Weekly analysis and progress tracking for every student.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Integrated Preparation:</strong> Covers both
                    <strong> Board Exams + MHT-CET syllabus</strong> effectively.
                  </span>
                </li>
              </ul>
              <p>
                ASQUARE Academy’s structured learning and constant evaluation help students perform with confidence in every section of the CET exam.
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
                ASQUARE Academy, Wanowrie:
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
                    Subject-wise expert faculty with years of experience.
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={updated} alt="" />
                <div className="grid_content">
                  <h6 className="grid_item_title">
                    Customized batch size for individual mentoring.
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={weekly_chapter} alt="" />
                <div className="grid_content">
                  <h6 className="grid_item_title">
                    MHT-CET-focused study material and question banks.
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={personalized} alt="" />
                <div className="grid_content">
                  <h6 className="grid_item_title">
                    Regular mock tests and analysis reports.
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
                      Fatima Nagar, Kondhwa, Camp, NIBM Road, Lullanagar, Salunke Vihar, and Market Yard.
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
              <strong> ASQUARE Academy Wanowrie </strong> have consistently secured top ranks in <strong> MHT-CET, </strong>
              gaining admission into leading colleges such as
              <strong>
                {" "}
                COEP Pune, MIT-WPU, DY Patil College, VIT Pune, and Sinhgad Institute of Technology.{" "}
              </strong>
              <p className="pt-3">
                Our success comes from <strong> concept clarity, continuous evaluation, and personalized mentoring </strong>
                - the ASQUARE advantage.
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
                Our approach ensures conceptual strength, exam discipline, and consistent improvement.
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
                <span>Concept-oriented classes for complete understanding.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">
                  Daily Practice Papers (DPPs):
                </h6>
                <span>Daily Practice Papers (DPPs) for revision and accuracy.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">
                  Weekly &amp; Monthly CET Tests:
                </h6>
                <span>Weekly tests and mock exams to assess progress.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Doubt-Solving Sessions:</h6>
                <span>Regular doubt-solving sessions and feedback.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">
                  Parent-Teacher Meetings (PTMs):
                </h6>
                <span>Parent–Teacher Meetings (PTMs) for progress updates.</span>
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
                MHT-CET Coaching Institute in Wanowrie, Pune{" "}
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
                      Who can join MHT-CET coaching at ASQUARE Wanowrie?
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
                      Are mock tests conducted regularly?
                    </button>
                  </h2>
                  <div
                    id="collapse3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionLeft"
                  >
                    <div className="accordion-body">
                      Yes — weekly topic tests and full-length CET mock exams are part of every batch.
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
                      Which nearby areas are covered by the Wanowrie branch?
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
                        Fatima Nagar, Kondhwa, Camp, NIBM Road, Lullanagar, Salunke Vihar, and Market Yard
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
                      Yes, we offer both <strong>online</strong> and{" "}
                      <strong>offline CET coaching options</strong> for
                      flexible learning.
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
              The <strong>MHT-CET (Maharashtra Common Entrance Test)</strong> is a crucial exam for students aspiring to enter top{" "}
              <strong>
                Engineering, Pharmacy, and Allied Science colleges
              </strong>{" "}
              in Maharashtra.
            </p>
            <p>
              At <strong>ASQUARE Academy Wanowrie,</strong> our goal is to simplify complex concepts, strengthen problem-solving skills, and enhance exam strategies.
               <strong>Fatima Nagar, Kondhwa, and NIBM</strong> trust ASQUARE for its focused, result-oriented <strong>CET coaching in South Pune.</strong>
            </p>
            <h4 className="common_title" style={{ color: "#05479b" }}>
              <strong>Subjects Covered</strong>
            </h4>
            <ul className="common_ul">
              <li className="mb-4">
                <span>
                  <strong>Physics:</strong> Deep understanding of core principles with numerical and application-based questions.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong>Chemistry:</strong> Topic-wise coverage of Physical, Organic, and Inorganic Chemistry.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong>Mathematics / Biology: </strong>
                  Specialized modules for
                  <strong> PCM (Engineering) and PCB (Pharmacy)</strong> with daily practice sheets and tests.
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
                  Board + CET preparation for strong foundation.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    1-Year Target Batch (Class XII + CET):
                  </strong>{" "}
                  Intensive training focused on MHT-CET pattern and practice.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    Crash Course (2-3 Months):
                  </strong>{" "}
                  Short-term revision batch before the exam.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    Repeater / Dropper Batch:
                  </strong>{" "}
                  One-year comprehensive program for CET retakers.
                </span>
              </li>
            </ul>
            <p>
              Each course includes{" "}
              <strong>
                weekly mock tests, performance tracking, and one-on-one mentor guidance.
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
                  ASQUARE Academy — Wanowrie, Pune
                </span>
              </h5>
              <p>
                Join <strong>ASQUARE Academy, </strong> the{" "}
                <strong>
                  Best MHT-CET Coaching Institute in Wanowrie, Pune,{" "}
                </strong>
                and prepare with top mentors, structured batches, and result-focused strategies.
                <br />
                With consistent practice, guidance, and testing, you can achieve your dream CET rank.
                <br />
                Serving students from
                <strong>
                  {" "}
                  Wanowrie, Fatima Nagar, Kondhwa, Camp, NIBM Road, Lullanagar, Salunke Vihar, and Market Yard.
                </strong>
              </p>
              <h4>
                Admissions Open - Enroll Now at ASQUARE Academy and Start Your MHT-CET Success Journey!
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

export default MHTWanowrie;
