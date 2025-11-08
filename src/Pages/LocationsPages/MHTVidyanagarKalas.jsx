import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import Loading from "../Loading.jsx";
import MobileForm from "../../Components/Mobileform/MobileForm.jsx";
import "../locationspage.css";
import locationBGImage from "../../Assets/locationPageImages/mht-cet/mhcet-desktop-bg7.0.jpeg"
import MobileBGImage from "../../Assets/locationPageImages/mht-cet/mhcet-mobile-bg7.0.jpeg";
import MethodologyBg from "../../Assets/locationPageImages/teaching-methodology.jpeg";
import image1 from "../../Assets/locationPageImages/mht-cet/MH-CET page 16.jpeg";
import image2 from "../../Assets/locationPageImages/mht-cet/MH-CET page 17.jpeg";
import location from "../../Assets/locationPageImages/mht-cet/location.png";
import personalized from "../../Assets/locationPageImages/mht-cet/personalized.png";
import qualified from "../../Assets/locationPageImages/mht-cet/qualified.png";
import updated from "../../Assets/locationPageImages/mht-cet/updated.png";
import weekly_chapter from "../../Assets/locationPageImages/mht-cet/weekly_chapter.png";

const Reviews = React.lazy(() =>
  import("../../Components/Reviews/Reviews.jsx")
);

function MHTVidyanagarKalas() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  return (
    <>
      <Helmet>
        <title>
          MHT-CET Coaching Classes in Vidyanagar & Kalas Pune | ASQUARE Academy
        </title>
        <meta
          name="title"
          content="MHT-CET Coaching Classes in Vidyanagar & Kalas Pune | ASQUARE Academy"
        />
        <meta
          name="description"
          content="Join the best MHT-CET Coaching Classes in Vidyanagar & Kalas Pune for Engineering & Pharmacy. Expert faculty, mock tests, and flexible batches at ASQUARE Academy."
        />
        <meta
          name="keywords"
          content="MHT-CET Coaching in Vidyanagar Pune, MHT-CET Coaching in Kalas Pune, Best MHT-CET Classes in Vidyanagar, Top CET Coaching Institute Kalas, MHT-CET Preparation in Vidyanagar, ASQUARE Academy Vidyanagar Kalas,"
        />
        <script type="application/ld+json">{`
        {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-vidyanagar-kalas-pune",
      "url": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-vidyanagar-kalas-pune",
      "name": "MHT-CET Coaching Classes in Vidyanagar & Kalas Pune | ASQUARE Academy",
      "description": "Join the best MHT-CET Coaching Classes in Vidyanagar & Kalas Pune for Engineering & Pharmacy. Expert faculty, mock tests, and flexible batches at ASQUARE Academy.",
      "publisher": {
        "@type": "Organization",
        "name": "ASQUARE Academy",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png"
        }
      },
      "breadcrumb": {
        "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-vidyanagar-kalas-pune#breadcrumb"
      },
      "inLanguage": "en"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-vidyanagar-kalas-pune#breadcrumb",
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
          "name": "MHT-CET Coaching Vidyanagar & Kalas Pune",
          "item": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-vidyanagar-kalas-pune"
        }
      ]
    },
    {
      "@type": "EducationalOrganization",
      "@id": "https://www.asquareclasses.com/#EducationalOrganization",
      "name": "ASQUARE Academy Vidyanagar & Kalas",
      "url": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-vidyanagar-kalas-pune",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9922351375",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": "English"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Vidyanagar & Kalas",
        "addressRegion": "Pune",
        "addressCountry": "IN"
      },
      "description": "ASQUARE Academy offers expert MHT-CET coaching classes in Vidyanagar & Kalas Pune with mock tests, flexible batches, and top faculty for CET preparation."
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/#LocalBusiness",
      "name": "ASQUARE Academy Vidyanagar & Kalas",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "telephone": "+91-9922351375",
      "url": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-vidyanagar-kalas-pune",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Vidyanagar & Kalas",
        "addressRegion": "Pune",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.asquareclasses.com/"
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can join MHT-CET coaching at ASQUARE Vidyanagar & Kalas?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students from Class XI, XII, and drop-year aspirants preparing for Engineering or Pharmacy CET can join ASQUARE Vidyanagar & Kalas."
          }
        },
        {
          "@type": "Question",
          "name": "What subjects are covered?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Physics, Chemistry, Mathematics (for Engineering) and Biology (for Pharmacy) are covered in the MHT-CET program."
          }
        },
        {
          "@type": "Question",
          "name": "Are mock tests conducted regularly?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — weekly topic tests and full-length MHT-CET mock exams are conducted in every batch."
          }
        },
        {
          "@type": "Question",
          "name": "What are the available batch options?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer 2-year, 1-year, crash course, and dropper batches for students at different preparation stages."
          }
        },
        {
          "@type": "Question",
          "name": "Which nearby areas are covered by ASQUARE Vidyanagar & Kalas?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students from Vishrantwadi, Dighi, Lohegaon, Tingre Nagar, Airport Road, and Yerawada attend ASQUARE Vidyanagar & Kalas regularly."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide online MHT-CET coaching?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — both offline and online CET classes are available for flexible and convenient learning."
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
                Vidyanagar & Kalas.
              </h1>
              <p>
                Searching for the{" "}
                <strong>Best MHT-CET coaching classes in Vidyanagar & Kalas, Pune?</strong>{" "}
                At <strong>ASQUARE Academy Vidyanagar & Kalas, </strong> Looking for the
                <strong> Engineering (PCM)</strong> and{" "}
                <strong>Pharmacy (PCB)</strong> streams with a perfect balance of concept-based teaching, personalized attention, and performance-driven training.
              </p>
              <p>
                Our centre is easily accessible for students from{" "}
                <strong>
                  Vishrantwadi, Dighi, Lohegaon, Tingre Nagar, Airport Road, and Yerawada,{" "}
                </strong>
                making it one of the most preferred institutes for{" "}
                <strong>MHT-CET coaching in North-East Pune.</strong>
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
                ASQUARE Academy for MHT-CET in Vidyanagar & Kalas?
              </h2>
              <ul className="common_ul">
                <li>
                  <span>
                    <strong>Expert Faculty:</strong> Experienced teachers for Physics, Chemistry, Maths & Biology.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Complete CET Syllabus Coverage:</strong> Updated according to the latest{" "}
                    <strong>MHT-CET pattern.</strong>
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Small Batch Size:</strong> Ensures one-on-one focus and effective learning.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Regular Tests & Feedback:</strong>{" "}
                    Weekly tests and CET pattern exams for consistent performance tracking.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Integrated Study Plan:</strong> Combined preparation for
                    <strong> Board Exams + MHT-CET. </strong>
                  </span>
                </li>
              </ul>
              <p>
                At ASQUARE, we prioritize strong conceptual understanding, analytical problem-solving, and result-oriented preparation to help every student excel.
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
                ASQUARE Academy, Vidyanagar & Kalas:
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
                    Qualified and experienced CET faculty.
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={updated} alt="" />
                <div className="grid_content">
                  <h6 className="grid_item_title">
                    Well-structured study plan and topic-wise tests.
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={weekly_chapter} alt="" />
                <div className="grid_content">
                  <h6 className="grid_item_title">
                    Compact batch size for personal guidance.
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={personalized} alt="" />
                <div className="grid_content">
                  <h6 className="grid_item_title">
                    Regular performance evaluation and progress tracking.
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
                      Vishrantwadi, Dighi, Lohegaon, Tingre Nagar, Airport Road, and Yerawada.
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
              Students of
              <strong> ASQUARE Academy, Vidyanagar & Kalas </strong> have consistently achieved top MHT-CET ranks and secured admissions to leading colleges like 
              <strong>
                {" "}
                COEP Pune, MIT-WPU, DY Patil College, VIT Pune, and Sinhgad Institute of Technology.{" "}
              </strong>
              <p className="pt-3">
                Our student success stories are proof of our focus on quality teaching, strong mentorship, and dedicated preparation.
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
                Our methodology ensures students stay motivated, confident, and ready to face competitive challenges.
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
                <span>Conceptual teaching with exam-focused approach.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">
                  Daily Practice Papers (DPPs):
                </h6>
                <span>Daily Practice Papers (DPPs) for consistent problem-solving.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">
                  Weekly & Monthly CET Tests:
                </h6>
                <span>Weekly topic tests and mock CET exams for real-time assessment.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Doubt-Solving Sessions:</h6>
                <span>Personalized doubt-solving sessions with faculty members.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">
                  Parent-Teacher Meetings (PTMs):
                </h6>
                <span>Parent–Teacher Meetings (PTMs) for transparent progress updates.</span>
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
                MHT-CET Coaching Institute in Vidyanagar & Kalas, Pune{" "}
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
                      Who can join MHT-CET coaching at ASQUARE Vidyanagar & Kalas?
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
                      What subjects are covered in the CET course?
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
                      Are mock tests part of the curriculum?
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
                      Which nearby areas are covered by the Vidyanagar & Kalas branch?
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
                        Vishrantwadi, Dighi, Lohegaon, Tingre Nagar, Airport Road, and Yerawada
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
                Engineering, Pharmacy, and Health Science
              </strong>{" "}
              courses across Maharashtra.
            </p>
            <p>
              At <strong>ASQUARE Academy Vidyanagar & Kalas,</strong> our curriculum is designed to help students from{" "}
               <strong>Vishrantwadi, Dighi, and Lohegaon</strong> rely on ASQUARE for structured and result-driven CET coaching near Kalas.
            </p>
            <h4 className="common_title" style={{ color: "#05479b" }}>
              <strong>Subjects Covered</strong>
            </h4>
            <ul className="common_ul">
              <li className="mb-4">
                <span>
                  <strong>Physics:</strong> Strengthen fundamentals and problem-solving techniques.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong>Chemistry:</strong> Complete coverage of Physical, Organic, and Inorganic topics with CET-based question banks.
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
                  Ideal for early starters focusing on board and CET preparation.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    1-Year Target Batch (Class XII + CET):
                  </strong>{" "}
                  Focused course for students in Class XII.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    Crash Course (2-3 Months):
                  </strong>{" "}
                  Compact revision course before the CET exam.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    Repeater / Dropper Batch:
                  </strong>{" "}
                  One-year program for students retaking CET for better results.
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
      {/* Join ASQUARE Section */}
      <section className="contact_section mb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h5 className="common_title">
                Join{" "}
                <span className="common_title_span">
                  ASQUARE Academy — Vidyanagar & Kalas, Pune
                </span>
              </h5>
              <p>
                Join <strong>ASQUARE Academy, </strong> the{" "}
                <strong>
                  Best MHT-CET Coaching Institute in Vidyanagar & Kalas, Pune,{" "}
                </strong>
                and start your CET journey with expert mentors, strategic study plans, and consistent guidance.
                <br />
                With our focused preparation, you can achieve top ranks in the Maharashtra CET exam.
                <br />
                Serving students from
                <strong>
                  {" "}
                    Vidyanagar, Kalas, Vishrantwadi, Dighi, Lohegaon, Tingre Nagar, Airport Road, and Yerawada.
                </strong>
              </p>
              <h4>
                Admissions Open – Enroll Now at ASQUARE Academy and Prepare Smart for MHT-CET Success!
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
};
export default MHTVidyanagarKalas;