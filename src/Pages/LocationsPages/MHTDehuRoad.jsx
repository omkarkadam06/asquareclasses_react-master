import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import Loading from "../Loading.jsx";
import MobileForm from "../../Components/Mobileform/MobileForm.jsx";
import "../locationspage.css";
import locationBGImage from "../../Assets/locationPageImages/mht-cet/mhcet-desktop-bg6.0.jpeg"
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

function MHTDehuRoad() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  return (
    <>
      <Helmet>
        <title>
          MHT-CET Coaching Classes in Dehu Road Pune | Best CET Institute - ASQUARE Academy
        </title>
        <meta
          name="title"
          content="MHT-CET Coaching Classes in Dehu Road Pune | Best CET Institute - ASQUARE Academy"
        />
        <meta
          name="description"
          content="Join the best MHT-CET Coaching Classes in Dehu Road Pune for Engineering & Pharmacy aspirants. Expert faculty, mock tests & flexible batches at ASQUARE Academy."
        />
        <meta
          name="keywords"
          content="MHT-CET Coaching in Dehu Road Pune, Best MHT-CET Classes in Dehu Road, Top CET Coaching Institute Dehu Road, MHT-CET Preparation in Dehu Road, ASQUARE Academy Dehu Road, Engineering CET Coaching Dehu Road Pune,"
        />
        <script type="application/ld+json">{`
        {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-dehu-road-pune#localbusiness",
      "name": "ASQUARE Academy Dehu Road",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "url": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-dehu-road-pune",
      "telephone": "9922351375",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Dehu Road, Pune, Maharashtra",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "412101",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "18.6744",
        "longitude": "73.7630"
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
      "description": "ASQUARE Academy offers expert-led MHT-CET coaching in Dehu Road Pune for Engineering and Pharmacy aspirants with mock tests and personalized guidance."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-dehu-road-pune#webpage",
      "url": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-dehu-road-pune",
      "name": "MHT-CET Coaching Classes in Dehu Road Pune | ASQUARE Academy",
      "description": "Best MHT-CET Coaching Classes in Dehu Road Pune for Engineering & Pharmacy CET aspirants. Expert teachers, mock tests & online CET batches at ASQUARE Academy."
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
          "name": "Dehu Road Pune"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can join MHT-CET coaching at ASQUARE Dehu Road?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students in Class XI, XII, and drop-year aspirants preparing for Engineering or Pharmacy CET can join ASQUARE Dehu Road."
          }
        },
        {
          "@type": "Question",
          "name": "What subjects are covered in the course?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The MHT-CET course covers Physics, Chemistry, Mathematics (for PCM) and Biology (for PCB)."
          }
        },
        {
          "@type": "Question",
          "name": "Are mock tests part of the curriculum?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — topic tests, weekly evaluations, and full-length CET mock exams are conducted regularly at ASQUARE Dehu Road."
          }
        },
        {
          "@type": "Question",
          "name": "What batch options are available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer 2-year integrated, 1-year target, crash course, and dropper batches for MHT-CET preparation."
          }
        },
        {
          "@type": "Question",
          "name": "Which nearby areas are covered by ASQUARE Dehu Road?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students from Nigdi, Akurdi, Ravet, Talegaon, Mamurdi, Kiwale, Chikhali, and Moshi attend our Dehu Road branch regularly."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide online coaching?",
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
                Dehu Road.
              </h1>
              <p>
                Looking for the{" "}
                <strong>Best MHT-CET coaching classes in Dehu Road, Pune?</strong>{" "}
                At <strong>ASQUARE Academy Dehu Road, </strong> Looking for the
                <strong> Engineering (PCM)</strong> and{" "}
                <strong>Pharmacy (PCB)</strong> through structured lessons, continuous assessments, and personalized mentoring.
              </p>
              <p>
                Our Dehu Road centre is ideal for students from{" "}
                <strong>
                  Nigdi, Akurdi, Ravet, Talegaon, Mamurdi, Kiwale, Chikhali, and Moshi,{" "}
                </strong>
                making it one of the most preferred institutes for{" "}
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
                ASQUARE Academy for MHT-CET in Dehu Road?
              </h2>
              <ul className="common_ul">
                <li>
                  <span>
                    <strong>Expert Faculty:</strong> Qualified and experienced teachers for each subject.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Comprehensive Curriculum:</strong> Covers complete{" "}
                    <strong>MHT-CET syllabus</strong> based on the latest pattern.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Small Batch Size:</strong> Individual focus and regular doubt-solving sessions.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Regular Tests & Feedback:</strong>{" "}
                    Weekly mock tests with detailed performance reports.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Integrated Study Plan:</strong> Dual preparation for
                    <strong> Board Exams + CET </strong>
                    for Class XI-XII students.
                  </span>
                </li>
              </ul>
              <p>
                ASQUARE Academy ensures concept clarity, strong fundamentals, and strategic practice to maximize student performance.
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
                ASQUARE Academy, Dehu Road:
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
                    Experienced faculty and CET-specific guidance.
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={updated} alt="" />
                <div className="grid_content">
                  <h6 className="grid_item_title">
                    Personalized attention with small batch sizes.
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={weekly_chapter} alt="" />
                <div className="grid_content">
                  <h6 className="grid_item_title">
                    Updated study materials and regular mock tests.
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={personalized} alt="" />
                <div className="grid_content">
                  <h6 className="grid_item_title">
                    Excellent record of student success and rank improvement.
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
                      Nigdi, Akurdi, Ravet, Talegaon, Mamurdi, Kiwale, Chikhali, and Moshi.
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
              <strong> ASQUARE Academy Dehu Road </strong> have consistently achieved top MHT-CET ranks and secured admissions to leading colleges like 
              <strong>
                {" "}
                COEP Pune, MIT-WPU, VIT Pune, DY Patil Institute, and Sinhgad College of Engineering.{" "}
              </strong>
              <p className="pt-3">
                Our result-oriented preparation model and dedicated mentorship ensure every student reaches their full potential.
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
                This proven methodology ensures confidence, speed, and conceptual mastery — essential for
                excelling in competitive exams.<strong>MHT-CET.</strong>
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
                <span>Concept-based lectures for deeper understanding.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">
                  Daily Practice Papers (DPPs):
                </h6>
                <span>Daily Practice Papers (DPPs) to enhance accuracy and retention.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">
                  Weekly & Monthly CET Tests:
                </h6>
                <span>Weekly topic tests and mock CETs for exam familiarity.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Doubt-Solving Sessions:</h6>
                <span>Personalized doubt-solving sessions with subject experts.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">
                  Parent-Teacher Meetings (PTMs):
                </h6>
                <span>Parent-Teacher Meetings (PTMs) for student progress tracking.</span>
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
                MHT-CET Coaching Institute in Dehu Road, Pune{" "}
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
                      Who can join MHT-CET coaching at ASQUARE Dehu Road?
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
                      Which nearby areas are covered by the Dehu Road branch?
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
                        Nigdi, Akurdi, Ravet, Talegaon, Mamurdi, Kiwale, Chikhali, and Moshi
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
                Engineering, Pharmacy, and Allied Science
              </strong>{" "}
              programs.
            </p>
            <p>
              At <strong>ASQUARE Academy Dehu Road,</strong> our curriculum is designed to help students from{" "}
               <strong>Nigdi, Akurdi, and Ravet</strong> develop analytical thinking, accuracy, and confidence through regular classroom sessions, practice tests, and assessments.
            </p>
            <h4 className="common_title" style={{ color: "#05479b" }}>
              <strong>Subjects Covered</strong>
            </h4>
            <ul className="common_ul">
              <li className="mb-4">
                <span>
                  <strong>Physics:</strong> Concept-based approach with formula derivations, numericals, and applications.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong>Chemistry:</strong> Comprehensive preparation in Physical, Organic, and Inorganic chemistry with CET-style questions.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong>Mathematics / Biology: </strong>
                  Tailored learning for
                  <strong> PCM (Engineering) and PCB (Pharmacy)</strong> students with DPPs, tests, and topic assignments.
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
                  Complete Board + CET preparation.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    1-Year Target Batch (Class XII + CET):
                  </strong>{" "}
                  Focused preparation with weekly tests and doubt sessions.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    Crash Course (2-3 Months):
                  </strong>{" "}
                  Fast-paced batch for revision and practice before the exam.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    Repeater / Dropper Batch:
                  </strong>{" "}
                  One-year comprehensive program for CET reattempts.
                </span>
              </li>
            </ul>
            <p>
              Every course includes{" "}
              <strong>
                regular mock tests, performance reviews, and mentor interaction
              </strong>{" "}
              for consistent growth.
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
                  ASQUARE Academy — Dehu Road, Pune
                </span>
              </h5>
              <p>
                Join <strong>ASQUARE Academy, </strong> the{" "}
                <strong>
                  Best MHT-CET Coaching Institute in Dehu Road, Pune,{" "}
                </strong>
                and prepare under expert mentors who focus on your growth and results.
                <br />
                With interactive teaching, mock tests, and consistent mentorship, ASQUARE ensures complete CET preparation.
                <br />
                Serving students from
                <strong>
                  {" "}
                    Dehu Road, Nigdi, Akurdi, Ravet, Talegaon, Mamurdi, Kiwale, Chikhali, and Moshi.
                </strong>
              </p>
              <h4>
                Admissions Open – Enroll Now for Expert MHT-CET Coaching in PCMC Pune!
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

export default MHTDehuRoad;
