
import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import Loading from "../Loading.jsx";
import MobileForm from "../../Components/Mobileform/MobileForm.jsx";
import "../locationspage.css";
import locationBGImage from "../../Assets/locationPageImages/mht-cet/mhcet-desktop-bg7.0.jpeg";
import MobileBGImage from "../../Assets/locationPageImages/mht-cet/mhcet-mobile-bg7.0.jpeg";
import MethodologyBg from "../../Assets/locationPageImages/teaching-methodology.jpeg";
import image1 from "../../Assets/locationPageImages/mht-cet/MH-CET page 25.jpeg";
import image2 from "../../Assets/locationPageImages/mht-cet/MH-CET page 3.jpeg";
import location from "../../Assets/locationPageImages/mht-cet/location.png";
import personalized from "../../Assets/locationPageImages/mht-cet/personalized.png";
import qualified from "../../Assets/locationPageImages/mht-cet/qualified.png";
import updated from "../../Assets/locationPageImages/mht-cet/updated.png";
import weekly_chapter from "../../Assets/locationPageImages/mht-cet/weekly_chapter.png";

const Reviews = React.lazy(() =>
  import("../../Components/Reviews/Reviews.jsx")
);

function MHTSadashiv() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  return (
    <>
      <Helmet>
        <title>
         Best MHT-CET Coaching Classes in Sadashiv Peth Pune | ASQUARE Academy
        </title>
        <meta
          name="title"
          content="Best MHT-CET Coaching Classes in Sadashiv Peth Pune | ASQUARE Academy"
        />
        <meta
          name="description"
          content="Join ASQUARE Academy for top MHT-CET Coaching Classes in Sadashiv Peth Pune. Expert faculty, PCM & PCB courses, regular mock tests & online/offline batches."
        />
        <meta
          name="keywords"
          content="MHT-CET Coaching in Sadashiv Peth Pune,Best MHT-CET Classes in Sadashiv Peth,Top CET Coaching Institute Sadashiv Peth,MHT-CET Preparation in Sadashiv Peth,ASQUARE Academy Sadashiv Peth,"
        />
        <script type="application/ld+json">{`
        {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "name": "ASQUARE Academy - MHT-CET Coaching Classes in Sadashiv Peth Pune",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-sadashiv-peth-pune",
      "url": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-sadashiv-peth-pune",
      "telephone": "9766118877",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Sadashiv Peth",
        "addressRegion": "Pune",
        "addressCountry": "India"
      },
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune"
      ],
      "description": "ASQUARE Academy offers the best MHT-CET Coaching Classes in Sadashiv Peth Pune for Class XI, XII & droppers. Covering Physics, Chemistry, Mathematics & Biology with regular mock tests and flexible batch options."
    },
    {
      "@type": "WebPage",
      "name": "MHT-CET Coaching Classes in Sadashiv Peth Pune | ASQUARE Academy",
      "url": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-sadashiv-peth-pune",
      "description": "Join ASQUARE Academy for the best MHT-CET Coaching Classes in Sadashiv Peth Pune. Expert teachers, mock tests & online/offline learning options."
    },
    {
      "@type": "EducationalOrganization",
      "name": "ASQUARE Academy",
      "url": "https://www.asquareclasses.com/",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune"
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can join MHT-CET coaching at ASQUARE Sadashiv Peth?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students from Class XI, XII, and drop-year aspirants preparing for Engineering or Pharmacy CET can join ASQUARE Sadashiv Peth."
          }
        },
        {
          "@type": "Question",
          "name": "What subjects are covered?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Physics, Chemistry, Mathematics (for PCM) and Biology (for PCB) are covered in the MHT-CET Coaching Classes."
          }
        },
        {
          "@type": "Question",
          "name": "Are mock tests conducted regularly?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, weekly topic-wise and full-length CET mock exams are conducted for better exam preparation."
          }
        },
        {
          "@type": "Question",
          "name": "What batch options are available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer 2-year, 1-year, crash course, and dropper batches for MHT-CET preparation."
          }
        },
        {
          "@type": "Question",
          "name": "Which nearby areas are covered by ASQUARE Sadashiv Peth?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students from Shaniwar Peth, Deccan Gymkhana, Swargate, Parvati, Sarasbaug, Narayan Peth, and Bajirao Road attend regularly."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide online MHT-CET coaching?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, both offline and online CET classes are available for flexible learning."
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
          "item": "https://www.asquareclasses.com/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "MHT-CET Coaching Classes in Sadashiv Peth Pune",
          "item": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-sadashiv-peth-pune"
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
              <img className="common_image" src={image1} alt="ASQUARE Sadashiv Peth" />
            </div>
            <div className="col-lg-6 col-md-12 order-1 order-lg-2">
              <h1 className="common_title">
                Crack MHT-CET with Expert Coaching at{" "}
                <span className="common_title_span">ASQUARE Academy,</span>{" "}
                Sadashiv Peth
              </h1>
              <p>
                Looking for the {" "}<strong> best MHT-CET coaching classes in Sadashiv Peth, Pune? </strong> At
                <strong> ASQUARE Academy – Sadashiv Peth,  </strong> we help students achieve success in{" "}
                <strong> Engineering (PCM) and Pharmacy (PCB) </strong>
                streams with expert mentorship, conceptual learning, and result-driven test practice.<br />
                Our Sadashiv Peth branch is conveniently located for students from
                 <strong>
                    {" "}Shaniwar Peth, Deccan Gymkhana, Swargate, Parvati, Sarasbaug, Narayan Peth, and Bajirao Road,
                </strong>
                {" "}making it one of the most preferred destinations for <strong> MHT-CET coaching in Central Pune. </strong>
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
                ASQUARE Academy for MHT-CET Coaching in Sadashiv Peth?
              </h2>
              <ul className="common_ul">
                <li>
                  <strong>Expert Faculty:</strong> Experienced mentors for Physics, Chemistry, Maths, and Biology.
                </li>
                <li>
                  <strong>Updated Syllabus:</strong> Covers the complete MHT-CET pattern and Board integration.
                </li>
                <li>
                  <strong>Small Batches:</strong> Individual attention and one-on-one guidance.
                </li>
                <li>
                  <strong>Regular Mock Tests: </strong> Weekly topic-wise tests and full-length CET practice exams.
                </li>
                <li>
                  <strong>Integrated Preparation:</strong> Balanced approach for Board Exams + CET success.
                </li>
              </ul>
              <p>
                At ASQUARE, we ensure that students develop conceptual clarity, exam speed, and confidence for competitive success.
              </p>
            </div>
            <div className="col-lg-6 col-md-12 img-col order-1 order-lg-2">
              <img className="common_image" src={image2} alt="Sadashiv Peth classes" />
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
                ASQUARE Academy Sadashiv Peth
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
                  Expert and approachable faculty team.
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={updated} alt="" />
                <h6 className="grid_item_title">
                  Well-structured study materials and notes.
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={weekly_chapter} alt="" />
                <h6 className="grid_item_title">
                  Regular testing and progress evaluation.
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={personalized} alt="" />
                <h6 className="grid_item_title">
                  Small batch size for personalized learning.
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={location} alt="" />
                <h6 className="grid_item_title">
                 Ideal for students from <strong> Shaniwar Peth, Deccan Gymkhana, Swargate, Parvati, Sarasbaug, Narayan Peth, and Bajirao Road. </strong>
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
                ASQUARE Academy Sadashiv Peth 
            </strong>
            {" "}consistently achieve top ranks in <strong> MHT-CET ranks, </strong> securing admission into top institutes like
            <strong> COEP Pune, MIT-WPU, DY Patil College, VIT Pune, and Sinhgad Institute of Technology.</strong>
          </p>
          <p>
            Our results reflect our commitment to <strong> concept clarity, expert teaching, and continuous testing. </strong>
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
                 This approach ensures clarity, confidence, and consistent performance in MHT-CET.
                </strong>{" "}
              </p>
              <a href="/">
                <button className="button mt-3">Know More</button>
              </a>
            </div>
            <div className="col-lg-6">
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Concept-Building Lectures:</h6>
                <span>Interactive and concept-based classroom teaching.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Daily Practice Papers (DPPs):</h6>
                <span>Daily Practice Papers (DPPs)  and problem-solving exercises.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Weekly tests and mock CET exams:</h6>
                <span>Weekly and full-length CET mock tests to assess progress.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Personal doubt-solving sessions:</h6>
                <span>Personal doubt-solving sessions and academic mentoring.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Parent–Teacher Meetings (PTMs):</h6>
                <span>Regular Parent–Teacher Meetings (PTMs) for transparency and performance review.</span>
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
                MHT-CET Coaching Institute in Sadashiv Peth {" "}
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
                     Who can join MHT-CET coaching at ASQUARE Sadashiv Peth?
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
                       Which nearby areas are covered by ASQUARE Sadashiv Peth?
                    </button>
                  </h2>
                  <div
                    id="collapse5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionRight"
                  >
                    <div className="accordion-body">
                      Students from <strong> Shaniwar Peth, Deccan Gymkhana, Swargate, Parvati, Sarasbaug, Narayan Peth, and Bajirao Road  </strong> attend regularly.
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
              The <strong>MHT-CET (Maharashtra Common Entrance Test)</strong> is a key entrance exam for admission into  <strong> Engineering, Pharmacy, and Allied Science </strong>
              courses in Maharashtra.
            </p> 
            <p>
                At <strong> ASQUARE Academy Sadashiv Peth, </strong>we provide a structured CET preparation program designed to help
            </p>
            <p>
                Students from <strong> Swargate, Deccan, and Narayan Peth </strong> strengthen concepts, practice rigorously, and achieve higher scores.
            </p>
            <h4 className="common_title" style={{ color: "#05479b" }}>
              <strong>Subjects Covered</strong>
            </h4>
            <ul className="common_ul">
              <li className="mb-4">
                <span>
                  <strong>Physics:</strong> Core concepts with numerical applications and problem-solving drills.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong>Chemistry:</strong> Complete preparation in Physical, Organic, and Inorganic chemistry with topic-wise question practice.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong>Mathematics / Biology: </strong>
                  Separate tracks for PCM (Engineering) and PCB (Pharmacy) students with DPPs, assignments, and CET-level tests.
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
                 Foundation and advanced CET preparation.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    1-Year Target Batch (Class XII + CET):
                  </strong>{" "}
                 Intensive, exam-oriented batch.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    Crash Course (2-3 Months):
                  </strong>{" "}
                   Compact revision program before the CET exam.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    Repeater / Dropper Batch:
                  </strong>{" "}
                  One-year dedicated program for CET reattempts.
                </span>
              </li>
            </ul>
            <p>
             All batches include <strong> mock tests, mentor feedback, and performance tracking </strong>
             for consistent improvement.
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
                ASQUARE Academy Sadashiv Peth Pune
            </span>
          </h5>
          <p>
            Join {" "}
            <strong> ASQUARE Academy Sadashiv Peth, </strong>{" "}
            the {" "}
            <strong> Best MHT-CET Coaching Institute in Sadashiv Peth, Pune, </strong>
            and begin your journey toward CET success with structured preparation, small batches, and expert mentors.<br/>
            With consistent practice and personal attention, ASQUARE ensures you achieve your CET goals confidently.
          </p>
          <p>
             Serving students from{" "}
            <strong> Sadashiv Peth, Shaniwar Peth, Deccan Gymkhana, Swargate, Parvati, Sarasbaug, Narayan Peth, and Bajirao Road. </strong>
          </p>
          <h4>
            <strong>
              Admissions Open – Enroll Now at ASQUARE Academy for Expert MHT-CET Coaching in Central Pune!
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

export default MHTSadashiv;
