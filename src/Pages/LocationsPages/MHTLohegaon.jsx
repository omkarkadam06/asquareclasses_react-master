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
import image1 from "../../Assets/locationPageImages/mht-cet/MH-CET page 1.jpeg";
import image2 from "../../Assets/locationPageImages/mht-cet/MH-CET page 5.jpeg";
import location from "../../Assets/locationPageImages/mht-cet/location.png";
import personalized from "../../Assets/locationPageImages/mht-cet/personalized.png";
import qualified from "../../Assets/locationPageImages/mht-cet/qualified.png";
import updated from "../../Assets/locationPageImages/mht-cet/updated.png";
import weekly_chapter from "../../Assets/locationPageImages/mht-cet/weekly_chapter.png";

const Reviews = React.lazy(() =>
  import("../../Components/Reviews/Reviews.jsx")
);

function MHTLohegaon() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  return (
    <>
      <Helmet>
        <title>
          MHT-CET Coaching Classes in Lohegaon Pune | ASQUARE Academy
        </title>
        <meta
          name="title"
            content="MHT-CET Coaching Classes in Lohegaon Pune | ASQUARE Academy"
            />
        <meta
          name="description"
          content="Join the best MHT-CET coaching in Lohegaon, Pune with expert faculty, small batches, and complete syllabus coverage at ASQUARE Academy for engineering success."
        />
        <meta
          name="keywords"
          content="MHT-CET Coaching in Lohegaon Pune, Best MHT-CET Classes in Lohegaon, Top CET Coaching Institute Lohegaon, MHT-CET Preparation in Lohegaon, ASQUARE Academy Lohegaon, MHT-CET Coaching near Viman Nagar, CET Classes near Dhanori, Engineering CET Coaching Lohegaon Pune, Pharmacy CET Coaching Lohegaon Pune, Top CET Institute in East Pune"
        />
        <script type="application/ld+json">{`
          {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-lohegaon-pune",
      "url": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-lohegaon-pune",
      "name": "MHT-CET Coaching Classes Institute in Lohegaon Pune | ASQUARE Academy",
      "description": "Join top-rated MHT-CET Coaching Classes in Lohegaon Pune for Engineering and Pharmacy aspirants. Expert faculty, small batches, mock tests, and personalized mentoring.",
      "inLanguage": "en",
      "publisher": {
        "@type": "EducationalOrganization",
        "name": "ASQUARE Academy",
        "url": "https://www.asquareclasses.com"
      },
      "breadcrumb": {
        "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-lohegaon-pune#breadcrumb"
      },
      "mainEntity": {
        "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-lohegaon-pune#faq"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-lohegaon-pune#breadcrumb",
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
          "item": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-lohegaon-pune"
        }
      ]
    },
    {
      "@type": "EducationalOrganization",
      "@id": "https://www.asquareclasses.com#organization",
      "name": "ASQUARE Academy",
      "url": "https://www.asquareclasses.com",
      "logo": " https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Lohegaon, Pune, Maharashtra",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411047",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91- 9766118877",
        "contactType": "Customer Service",
        "areaServed": "IN",
        "availableLanguage": "English"
      },
      "sameAs": [
        "https://www.facebook.com/asquareclasses",
        "https://www.instagram.com/asquareclasses"
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-lohegaon-pune#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can join CET coaching at ASQUARE Lohegaon?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students from Class XI, Class XII, and drop-year aspirants aiming for Engineering or Pharmacy courses can join the CET coaching at ASQUARE Lohegaon."
          }
        },
        {
          "@type": "Question",
          "name": "Which subjects are included in the program?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The MHT-CET program includes Physics, Chemistry, Mathematics for Engineering aspirants, and Biology for Pharmacy aspirants."
          }
        },
        {
          "@type": "Question",
          "name": "Are mock tests conducted regularly?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, weekly chapter tests and full-length CET mock exams are conducted regularly, along with detailed feedback analysis."
          }
        },
        {
          "@type": "Question",
          "name": "What batch options are available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE Lohegaon offers 2-year integrated, 1-year target, crash course, and repeater batches for MHT-CET preparation."
          }
        },
        {
          "@type": "Question",
          "name": "How many students are there per batch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Each batch is kept small to ensure individual mentoring and focused academic attention for every student."
          }
        },
        {
          "@type": "Question",
          "name": "Do parents receive regular updates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, parents receive detailed progress reports, and Parent-Teacher Meetings (PTMs) are conducted periodically."
          }
        },
        {
          "@type": "Question",
          "name": "Which nearby areas are served by ASQUARE Lohegaon?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students from Dhanori, Tingre Nagar, Viman Nagar, Kharadi, Wagholi, and Vishrantwadi regularly attend ASQUARE Lohegaon."
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
                Begin Your Journey to <span className="common_title_span">CET</span> Success with ASQUARE Academy - Lohegaon
              </h1>
              <p>
                Looking for the most reliable{" "}
                <strong>MHT-CET coaching classes in Lohegaon, Pune ? </strong>
                At <strong>ASQUARE Academy - Lohegaon,</strong> we combine expert-led teaching, personalized mentoring, and exam-focused test series to help students excel in <strong>Engineering (PCM) </strong>and{" "}
                <strong>Pharmacy (PCB)</strong>streams.
              </p>
              <p>
                Conveniently located for students from {" "}
                <strong>
                  Dhanori, Tingre Nagar, Viman Nagar, Kharadi, Wagholi, and Vishrantwadi, {" "}
                </strong>
                our Lohegaon branch offers a structured and result-oriented learning environment designed for MHT-CET success.
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
                ASQUARE Academy for MHT-CET in Lohegaon ?
              </h2>
              <ul className="common_ul">
                <li>
                  <span>
                    <strong>Expert Faculty:</strong> Highly qualified and experienced teachers for Physics, Chemistry, Maths & Biology.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Comprehensive Syllabus Coverage:</strong> Updated as per the latest CET exam format.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Small Batches:</strong> Focused attention and one-on-one doubt-solving.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Regular Mock Tests & Performance Review:</strong> Build speed, accuracy, and confidence.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Dual-Focus Learning:</strong> Covers both <strong>Boards Exams + MHT-CET preparation.</strong> simultaneously.
                  </span>
                </li>
              </ul>
              <p>
                ASQUARE ensures that every student builds a strong conceptual base and develops effective exam strategies to achieve their dream score.
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
                Joining ASQUARE Academy, Lohegaon:
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
                    Limited batch size for personal attention.
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={updated} alt="" />
                <div className="grid_content">
                  <h6 className="grid_item_title">
                    CET-aligned printed & digital study material.
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={personalized} alt="" />
                <div className="grid_content">
                  <h6 className="grid_item_title">
                    Regular time-management and strategy workshops.
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={weekly_chapter} alt="" />
                <div className="grid_content">
                  <h6 className="grid_item_title">
                    Weekly performance evaluation and progress tracking.
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={location} alt="" />
                <div className="grid_content">
                  <h6 className="grid_item_title">
                    Expert mentorship and motivational sessions
                  </h6>
                  <p>
                    Ideal for students from{" "}
                    <strong>
                      Lohegaon, Dhanori, Tingre Nagar, Viman Nagar, Kharadi, Wagholi, and Vishrantwadi.
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
              Students from {" "}
              <strong>ASQUARE Academy Lohegaon</strong> have consistently achieved 
              {" "}
              <strong>
                top MHT-CET ranks,
              </strong>
              {" "}earning admissions to reputed colleges such as {" "}
              <strong>COEP Pune, MIT-WPU, VIT Pune, DY Patil College, and Sinhgad College of Engineering.</strong>
              <p className="pt-3">
                Our success is built on personalized mentoring, consistent testing, and exam-smart preparation techniques.
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
                This systematic and disciplined approach ensures every student performs confidently on exam day.
              </p>
              <a href="/">
                <button class="button mt-3">Know More</button>
              </a>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Interactive Classes</h6>
                <span>Daily interactive topic-based sessions with practical problem-solving.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">
                  Daily Practice Papers (DPPs)
                </h6>
                <span>DPPs (Daily Practice Papers) and chapter assignments for daily revision.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">
                  Weekly & Monthly Tests:
                </h6>
                <span>Weekly and full-length mock CET exams with detailed score analysis.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Doubt-solving sessions</h6>
                <span>Doubt-solving sessions and extra classes for difficult topics.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">
                  Parental Updates {" "}
                </h6>
                <span>Parent-teacher meetings (PTMs) to share performance feedback and progress updates.</span>
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
                MHT-CET Coaching Institute in Lohegaon, Pune{" "}
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
                      Who can join CET coaching at ASQUARE Lohegaon?
                    </button>
                  </h2>
                  <div
                    id="collapse1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionLeft"
                  >
                    <div className="accordion-body">
                      Students from Class XI, Class XII, and drop-year aspirants aiming for Engineering or Pharmacy courses.
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
                      Which subjects are included in the program?
                    </button>
                  </h2>
                  <div
                    id="collapse2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionLeft"
                  >
                    <div className="accordion-body">
                      Physics, Chemistry, Mathematics (for Engineering), and Biology (for Pharmacy).
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
                      Yes — weekly chapter tests and full-length CET mock exams with feedback analysis.
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
                      data-bs-target="#collapse4"
                      aria-expanded="false"
                      aria-controls="collapse4"
                    >
                      What batch options are available?
                    </button>
                  </h2>
                  <div
                    id="collapse4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionRight"
                  >
                    <div className="accordion-body">
                      We offer{" "}
                      <strong>
                        2-year integrated, 1-year target, crash course,
                      </strong>{" "}
                      and <strong>repeater batches.</strong>
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
                      How many students are there per batch?
                    </button>
                  </h2>
                  <div
                    id="collapse5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionRight"
                  >
                    <div className="accordion-body">
                     Each batch is small to ensure individual mentoring and focused attention.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse6"
                      aria-expanded="false"
                      aria-controls="collapse6"
                    >
                      How parents receive regular updates?
                    </button>
                  </h2>
                  <div
                    id="collapse6"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionRight"
                  >
                    <div className="accordion-body">
                      Yes — detailed progress reports and PTMs are conducted periodically.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
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
                      Which nearby areas are served by ASQUARE Lohegaon?
                    </button>
                  </h2>
                  <div
                    id="collapse7"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionRight"
                  >
                    <div className="accordion-body">
                      Students from{" "}
                      <strong>
                        Dhanori, Tingre Nagar, Viman Nagar, Kharadi, Wagholi, and Vishrantwadi
                      </strong>{" "}
                      regularly attend our Lohegaon branch.
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
              the gateway to top colleges for{" "}
              <strong>
                Engineering, Pharmacy, and Allied Science
              </strong>{" "}
              admissions in Maharashtra.
            </p>
            <p>
              At <strong>ASQUARE Academy Lohegaon,</strong> our structured and performance-driven program blends{" "}
              <strong>conceptual learning, exam strategies, and continuous testing,</strong>{" "}
              helping students gain confidence and consistency throughout their CET preparation.
            </p>
            <p>
              We help students from{" "}
              <strong>
                Vishrantwadi, Lohegaon, Dhanori, Yerawada, and Viman Nagar
              </strong>{" "}
              achieve their best through consistent mentoring and structured study plans.
            </p>
            <h4 className="common_title" style={{ color: "#05479b" }}>
              <strong>Subjects Covered</strong>
            </h4>
            <ul className="common_ul">
              <li className='mb-4'>
                <span>
                  <strong>Physics:</strong> Core concept lectures with extensive numerical practice and problem-solving.
                </span>
              </li>
              <li className='mb-4'>
                <span>
                  <strong>Chemistry:</strong> In-depth coverage of Physical, Organic, and Inorganic chemistry with MCQ-based drills.
                </span>
              </li>
              <li className='mb-4'>
                <span>
                  <strong>Mathematics / Biology:</strong>
                  Intensive practice modules for both
                  <strong>PCM (Engineering) and PCB (Pharmacy)</strong>{" "}
                  streams, supported by regular assignments and tests.
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
            <p>
              Each batch includes{" "}
              <strong>
                weekly mock tests, analysis reports, and mentor review sessions
              </strong>
              to monitor progress effectively.
            </p>
            <ul className="common_ul">
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    2-Year Integrated Program (Class XI + XII + CET):
                  </strong>{" "}
                  Builds a strong foundation with board + CET preparation.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    1-Year Target Batch (Class XII + CET):
                  </strong>{" "}
                  Focused learning with topic-wise tests and advanced mock exams.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    Crash Course (2-3 Months):
                  </strong>{" "}
                  Compact revision and practice program before the exam.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    Repeater / Dropper Batch:
                  </strong>{" "}
                  A one-year intensive course designed for CET retakers aiming for top ranks.
                </span>
              </li>
            </ul>
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
                  ASQUARE Academy - Lohegaon, Pune
                </span>
              </h5>
              <p>
                Get ready to achieve your goals with the <strong>Best MHT-CET Coaching in Lohegaon, Pune.</strong> Join{" "}
                <strong>ASQUARE Academy</strong>
                for structured learning, expert guidance, and proven results.
              </p>
              <p>
                Serving students from
                <strong>
                  {" "}
                 Lohegaon, Dhanori, Tingre Nagar, Viman Nagar, Kharadi, Wagholi, and Vishrantwadi.
                </strong>
              </p>
              <h4>Admissions Open - Limited Seats! Enroll Now for Expert CET Coaching.</h4>
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

export default MHTLohegaon;
