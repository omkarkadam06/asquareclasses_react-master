
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
import image1 from "../../Assets/locationPageImages/mht-cet/MH-CET page 19.jpeg";
import image2 from "../../Assets/locationPageImages/mht-cet/MH-CET page 9.jpeg";
import location from "../../Assets/locationPageImages/mht-cet/location.png";
import personalized from "../../Assets/locationPageImages/mht-cet/personalized.png";
import qualified from "../../Assets/locationPageImages/mht-cet/qualified.png";
import updated from "../../Assets/locationPageImages/mht-cet/updated.png";
import weekly_chapter from "../../Assets/locationPageImages/mht-cet/weekly_chapter.png";

const Reviews = React.lazy(() =>
  import("../../Components/Reviews/Reviews.jsx")
);

function MHTSalunkeVihar() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  return (
    <>
      <Helmet>
        <title>
         Best MHT-CET Coaching Classes in Salunke Vihar, Pune | ASQUARE Academy
        </title>
        <meta
          name="title"
          content="Best MHT-CET Coaching Classes in Salunke Vihar, Pune | ASQUARE Academy"
        />
        <meta
          name="description"
          content="Join ASQUARE Academy Salunke Vihar for the best MHT-CET coaching in Pune. Expert faculty, mock tests, and PCM/PCB classes for XI, XII, and CET repeaters."
        />
        <meta
          name="keywords"
          content="MHT-CET Coaching in Salunke Vihar Pune,Best MHT-CET Classes in Salunke Vihar,Top CET Coaching Institute Salunke Vihar,MHT-CET Preparation in Salunke Vihar,ASQUARE Academy Salunke Vihar,"
        />
        <script type="application/ld+json">{`
        {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-salunke-vihar-pune#localbusiness",
      "name": "ASQUARE Academy - MHT-CET Coaching in Salunke Vihar Pune",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "url": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-salunke-vihar-pune",
      "telephone": "+91-9766118877",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Salunke Vihar, Pune",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411040",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 18.4786,
        "longitude": 73.9017
      },
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune"
      ],
      "description": "ASQUARE Academy in Salunke Vihar Pune offers expert-led MHT-CET coaching with PCM/PCB classes, weekly mock tests, and personalized mentoring."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-salunke-vihar-pune#webpage",
      "url": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-salunke-vihar-pune",
      "name": "MHT-CET Coaching in Salunke Vihar Pune - ASQUARE Academy",
      "description": "Enroll at ASQUARE Academy Salunke Vihar Pune for top-quality MHT-CET coaching. Learn from expert faculty, attempt mock tests, and excel in PCM/PCB subjects."
    },
    {
      "@type": "EducationalOrganization",
      "@id": "https://www.asquareclasses.com/#organization",
      "name": "ASQUARE Academy",
      "url": "https://www.asquareclasses.com/",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune"
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-salunke-vihar-pune#breadcrumbs",
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
          "item": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-pune/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Salunke Vihar Pune"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-salunke-vihar-pune#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can join MHT-CET coaching at ASQUARE Salunke Vihar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students from Class XI, XII, and drop-year aspirants preparing for Engineering or Pharmacy CET can join ASQUARE Academy Salunke Vihar Pune."
          }
        },
        {
          "@type": "Question",
          "name": "What subjects are taught at ASQUARE Academy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The MHT-CET course covers Physics, Chemistry, and Mathematics for PCM students and Biology for PCB students."
          }
        },
        {
          "@type": "Question",
          "name": "Are mock tests conducted regularly?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, weekly topic-wise and full-length MHT-CET mock tests are a regular part of our structured learning program."
          }
        },
        {
          "@type": "Question",
          "name": "What batch options are available at ASQUARE?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer 2-year integrated, 1-year target, crash course, and dropper batches for MHT-CET aspirants."
          }
        },
        {
          "@type": "Question",
          "name": "Which nearby areas are covered by ASQUARE Salunke Vihar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students from Wanowrie, Kondhwa, NIBM Road, Mohammadwadi, Fatima Nagar, Undri, and Lulla Nagar attend regularly."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide online MHT-CET classes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, ASQUARE Academy offers both offline and online MHT-CET coaching options for flexible learning."
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
              <img className="common_image" src={image1} alt="ASQUARE Salunke Vihar" />
            </div>
            <div className="col-lg-6 col-md-12 order-1 order-lg-2">
              <h1 className="common_title">
                Crack MHT-CET with Expert Coaching at{" "}
                <span className="common_title_span">ASQUARE Academy,</span>{" "}
                Salunke Vihar
              </h1>
              <p>
                Searching for the {" "}<strong> best MHT-CET coaching classes in Salunke Vihar, Pune? </strong> At
                <strong> ASQUARE Academy – Salunke Vihar,  </strong> we specialize in preparing students for {" "}
                <strong> Engineering (PCM) and Pharmacy (PCB) </strong>
                streams through a result-oriented combination of conceptual learning, mock testing, and personalized mentorship.<br />
                Our Salunke Vihar centre is conveniently accessible for students from
                 <strong>
                    {" "} Wanowrie, Kondhwa, NIBM Road, Mohammadwadi, Fatima Nagar, Undri, and Lulla Nagar
                </strong>
                {" "}making it one of the most trusted options for <strong> MHT-CET coaching in South Pune. </strong>
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
                ASQUARE Academy for MHT-CET Coaching in Salunke Vihar?
              </h2>
              <ul className="common_ul">
                <li>
                  <strong>Expert Faculty:</strong> Highly qualified and experienced mentors for all subjects.
                </li>
                <li>
                  <strong>Updated Syllabus :</strong> Follows the latest MHT-CET exam pattern and question trends.
                </li>
                <li>
                  <strong>Small Batch Size:</strong> Focused attention and individual performance tracking.
                </li>
                <li>
                  <strong>Regular Testing: </strong> Weekly mock tests and full-length CET exams for accuracy.
                </li>
                <li>
                  <strong>Integrated Preparation:</strong> Combined training for Board Exams + CET for Class XI & XII.
                </li>
              </ul>
              <p>
                ASQUARE focuses on strengthening fundamental concepts while building test-taking strategies for top performance in CET.
              </p>
            </div>
            <div className="col-lg-6 col-md-12 img-col order-1 order-lg-2">
              <img className="common_image" src={image2} alt="Salunke Vihar classes" />
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
                ASQUARE Academy Salunke Vihar
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
                  Well-qualified and approachable faculty members.
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={updated} alt="" />
                <h6 className="grid_item_title">
                  Systematic and CET-focused study material.
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={weekly_chapter} alt="" />
                <h6 className="grid_item_title">
                  Small batches for personalized attention.
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={personalized} alt="" />
                <h6 className="grid_item_title">
                  Regular mock tests with performance analysis.
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={location} alt="" />
                <h6 className="grid_item_title">
                 Conveniently located for students from <strong> Wanowrie, Kondhwa, NIBM Road, Mohammadwadi, Fatima Nagar, Undri, and Lulla Nagar. </strong>
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
                ASQUARE Academy Salunke Vihar 
            </strong>
            {" "}have consistently scored top ranks in MHT-CET ranks, earning admissions into prestigious colleges such as <strong> MHT-CET ranks, </strong> gaining admission into top institutes like
            <strong> COEP Pune, MIT-WPU, DY Patil College, VIT Pune, and Sinhgad College of Engineering. </strong>
          </p>
          <p>
            Our results highlight ASQUARE’s commitment to <strong> concept mastery, exam discipline, and consistent practice. </strong>
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
                 This structured and student-centric approach ensures top-notch CET performance.
                </strong>{" "}
              </p>
              <a href="/">
                <button className="button mt-3">Know More</button>
              </a>
            </div>
            <div className="col-lg-6">
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Concept-Building Lectures:</h6>
                <span>Interactive classroom sessions for conceptual clarity.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Daily Practice Papers (DPPs):</h6>
                <span>Daily Practice Papers (DPPs) for consistent topic reinforcement.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Weekly tests and mock CET exams:</h6>
                <span>Weekly and monthly CET mock tests to improve speed and accuracy.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Individual doubt-clearing sessions:</h6>
                <span>Doubt-solving sessions with faculty for personal attention.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Parent–Teacher Meetings (PTMs):</h6>
                <span>Regular Parent–Teacher Meetings (PTMs) to review academic progress.</span>
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
                MHT-CET Coaching Institute in Salunke Vihar {" "}
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
                     Who can join MHT-CET coaching at ASQUARE Salunke Vihar?
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
                       Which nearby areas are covered by ASQUARE Salunke Vihar?
                    </button>
                  </h2>
                  <div
                    id="collapse5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionRight"
                  >
                    <div className="accordion-body">
                      Students from <strong>  Wanowrie, Kondhwa, NIBM Road, Mohammadwadi, Fatima Nagar, Undri, and Lulla Nagar </strong> attend regularly.
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
              The <strong>MHT-CET (Maharashtra Common Entrance Test)</strong> is a crucial exam for admission into   <strong> Engineering, Pharmacy, and Allied Science </strong>
              programs in Maharashtra.
            </p> 
            <p>
                At <strong> ASQUARE Academy Salunke Vihar, </strong>we offer structured courses and a result-oriented study plan that helps
            </p>
            <p>
                Students from <strong>  Wanowrie, Kondhwa, and NIBM   </strong> prepare effectively through structured lessons, constant practice, and expert guidance that ensures complete conceptual understanding.
            </p>
            <h4 className="common_title" style={{ color: "#05479b" }}>
              <strong>Subjects Covered</strong>
            </h4>
            <ul className="common_ul">
              <li className="mb-4">
                <span>
                  <strong>Physics:</strong> In-depth conceptual training and problem-solving practice.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong>Chemistry:</strong> Detailed study of Physical, Organic, and Inorganic chemistry with CET-based question sets.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong>Mathematics / Biology: </strong>
                  Stream-specific sessions for PCM (Engineering) and PCB (Pharmacy) students, with DPPs, quizzes, and topic tests.
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
                 Ideal for early preparation and strong foundation-building.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    1-Year Target Batch (Class XII + CET):
                  </strong>{" "}
                Intensive program focusing on key CET topics and mock exams.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    Crash Course (2-3 Months):
                  </strong>{" "}
                   Compact revision course with full-length test series.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    Repeater / Dropper Batch:
                  </strong>{" "}
                  One-year dedicated course for CET reattempts with mentor support.
                </span>
              </li>
            </ul>
            <p>
             All batches include <strong> regular performance tracking, detailed feedback, and progress reports. </strong>
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
                ASQUARE Academy Salunke Vihar Pune
            </span>
          </h5>
          <p>
            Join {" "}
            <strong> ASQUARE Academy Salunke Vihar, </strong>{" "}
            the {" "}
            <strong> Best MHT-CET Coaching Institute in Salunke Vihar, Pune, </strong>
            and prepare to achieve your dream CET score with expert teachers and structured study plans.<br/>
            With small batches, regular tests, and personalized attention, ASQUARE helps you turn your potential into performance.
          </p>
          <p>
              Serving students from{" "}
            <strong> Salunke Vihar, Wanowrie, Kondhwa, NIBM Road, Mohammadwadi, Fatima Nagar, Undri, and Lulla Nagar. </strong>
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

export default MHTSalunkeVihar;
