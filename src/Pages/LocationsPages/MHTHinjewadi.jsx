
import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import Loading from "../Loading.jsx";
import MobileForm from "../../Components/Mobileform/MobileForm.jsx";
import "../locationspage.css";
import locationBGImage from "../../Assets/locationPageImages/mht-cet/mhtcet-desktop-bg4.0.jpeg";
import MobileBGImage from "../../Assets/locationPageImages/mht-cet/mhtcet-mobile-bg4.0.jpeg";
import MethodologyBg from "../../Assets/locationPageImages/teaching-methodology.jpeg";
import image1 from "../../Assets/locationPageImages/mht-cet/MH-CET page 5.jpeg";
import image2 from "../../Assets/locationPageImages/mht-cet/MH-CET page 6.jpeg";
import location from "../../Assets/locationPageImages/mht-cet/location.png";
import personalized from "../../Assets/locationPageImages/mht-cet/personalized.png";
import qualified from "../../Assets/locationPageImages/mht-cet/qualified.png";
import updated from "../../Assets/locationPageImages/mht-cet/updated.png";
import weekly_chapter from "../../Assets/locationPageImages/mht-cet/weekly_chapter.png";

const Reviews = React.lazy(() =>
  import("../../Components/Reviews/Reviews.jsx")
);

function MHTHinjewadi() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  return (
    <>
      <Helmet>
        <title>
         Best MHT-CET Coaching Classes in Hinjewadi Pune | ASQUARE Academy Hinjewadi
        </title>
        <meta
          name="title"
          content="Best MHT-CET Coaching Classes in Hinjewadi Pune | ASQUARE Academy Hinjewadi"
        />
        <meta
          name="description"
          content="Join ASQUARE Academy Hinjewadi for expert MHT-CET coaching in Pune. Top classes for Engineering & Pharmacy aspirants with mock tests and personal mentoring."
        />
        <meta
          name="keywords"
          content="MHT-CET Coaching in hinjewadi,Best MHT-CET Classes in hinjewadi,Top CET Coaching Institute hinjewadi,MHT-CET Preparation in hinjewadi,Best MHT-CET Coaching in hinjewadi,ASQUARE Academy hinjewadi,"
        />
        <script type="application/ld+json">{`
        {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-hinjewadi-pune#localbusiness",
      "name": "ASQUARE Academy Hinjewadi",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "url": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-hinjewadi-pune",
      "telephone": "9766118877",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Hinjewadi",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411057",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune"
      ],
      "priceRange": "₹₹",
      "description": "ASQUARE Academy Hinjewadi offers the best MHT-CET coaching in Pune for Engineering and Pharmacy aspirants with expert faculty and regular mock tests."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-hinjewadi-pune#webpage",
      "url": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-hinjewadi-pune",
      "name": "MHT-CET Coaching in Hinjewadi Pune | ASQUARE Academy Hinjewadi",
      "description": "Join ASQUARE Academy Hinjewadi for the best MHT-CET coaching in Pune. Prepare for Engineering (PCM) & Pharmacy (PCB) with top educators and mock tests.",
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
      "@type": "EducationalOrganization",
      "name": "ASQUARE Academy Hinjewadi",
      "url": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-hinjewadi-pune",
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune"
      ],
      "department": "MHT-CET Coaching Division",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Hinjewadi",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411057",
        "addressCountry": "IN"
      },
      "telephone": "9766118877"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can join MHT-CET coaching at ASQUARE Academy Hinjewadi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students in XI, XII, or repeaters ready for focused CET preparation can enroll for MHT-CET coaching at ASQUARE Academy Hinjewadi."
          }
        },
        {
          "@type": "Question",
          "name": "Which subjects are taught?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Physics, Chemistry, and Mathematics (PCM) for engineering; Biology (PCB) for pharmacy students are covered in the MHT-CET course."
          }
        },
        {
          "@type": "Question",
          "name": "Are mock tests included?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, weekly chapter tests and comprehensive full-length mock exams are an integral part of the program for consistent performance evaluation."
          }
        },
        {
          "@type": "Question",
          "name": "What batch options are available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE Academy offers 2-Year Integrated, 1-Year Intensive, Crash Course, and Repeaters batches for flexible MHT-CET preparation."
          }
        },
        {
          "@type": "Question",
          "name": "Is the institute in a convenient location?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, the Hinjewadi branch is easily accessible from Baner, Wakad, Balewadi, Bavdhan, and Aundh, with multiple branches across Pune."
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
          "item": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-hinjewadi-pune"
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
              <img className="common_image" src={image1} alt="ASQUARE Hinjewadi" />
            </div>
            <div className="col-lg-6 col-md-12 order-1 order-lg-2">
              <h1 className="common_title">
                Build Your Future with Expert Guidance at{" "}
                <span className="common_title_span">ASQUARE Academy,</span>{" "}
                Hinjewadi
              </h1>
              <p>
                Looking for the {" "}<strong> best MHT-CET coaching classes in Hinjewadi, Pune (PCMC)? </strong> At
                <strong> ASQUARE Academy – Hinjewadi,  </strong>we deliver structured, high-impact CET coaching tailored for success. Our coaching programs are trusted by students from{" "}
                 <strong>
                    Hinjewadi Phase I & II, Baner, Wakad, Pimple Saudagar, Bavdhan, Balewadi, Wakad Chowk, and Aundh
                </strong>
                {" "}offering comprehensive support to secure admissions into top engineering and pharmacy colleges across Maharashtra.
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
                ASQUARE Academy for MHT-CET Coaching in Hinjewadi?
              </h2>
              <ul className="common_ul">
                <li>
                  <strong>Specialized CET Faculty :</strong> Instructors with advanced expertise in CET, JEE, and NEET preparation.
                </li>
                <li>
                  <strong>Complete CET Syllabus Coverage :</strong> Physics, Chemistry, and Mathematics/Biology aligned with the MHT-CET pattern.
                </li>
                <li>
                  <strong>Personalized Coaching:</strong>  Small class sizes ensure focused learning and quick doubt resolution.
                </li>
                <li>
                  <strong>Weekly Mock Tests with Analysis: </strong> Regular assessments to monitor performance and improvement.
                </li>
                <li>
                  <strong>Motivational & Strategy-Building Sessions:</strong> Dedicated workshops to boost readiness and confidence
                </li>
              </ul>
              <p>
                ASQUARE’s result-oriented approach helps students strengthen their basics, improve accuracy, and perform confidently in competitive exams.
              </p>
            </div>
            <div className="col-lg-6 col-md-12 img-col order-1 order-lg-2">
              <img className="common_image" src={image2} alt="Hinjewadi classes" />
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
                ASQUARE Academy Hinjewadi
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
                  Limited batch sizes enhancing personalized learning.
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={updated} alt="" />
                <h6 className="grid_item_title">
                  Updated CET-aligned study materials.
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={weekly_chapter} alt="" />
                <h6 className="grid_item_title">
                  Strategic time-management and exam preparation workshops.
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={personalized} alt="" />
                <h6 className="grid_item_title">
                  Exam-ready strategy sessions for precision and confidence.
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={location} alt="" />
                <h6 className="grid_item_title">
                 Centrally located for students from <strong> Hinjewadi, Baner, Wakad, Bavdhan, Balewadi, Pimple Saudagar, and Aundh. </strong>
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
                ASQUARE Academy Hinjewadi 
            </strong>
            {" "}consistently achieve high CET scores and secure placements in top engineering and pharmacy colleges across the state—thanks to our focused and results-driven approach.
          </p>
          <p>
            Our center is widely recognized as the <strong> best MHT-CET coaching institute in Hinjewadi and nearby PCMC corridors.</strong>
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
                 This proven learning framework ensures strong fundamentals, consistent practice, and exam confidence.
                </strong>{" "}
              </p>
              <a href="/">
                <button className="button mt-3">Know More</button>
              </a>
            </div>
            <div className="col-lg-6">
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Concept-Building Lectures:</h6>
                <span>Daily concept-building lectures with interactive engagement.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Assignments & Practice:</h6>
                <span>Chapter-wise assignments for reinforcement.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Mock Tests:</h6>
                <span>One-to-one doubt resolution sessions for personalized attention.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Progress Reports:</h6>
                <span>Topic-wise tests and full-length mock exams for comprehensive preparation.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Extra Activites:</h6>
                <span>Regular progress reviews with parents for performance tracking.</span>
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
                MHT-CET Coaching Institute in Hinjewadi {" "}
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
                     Who can join MHT-CET coaching at ASQUARE Academy Hinjewadi?
                    </button>
                  </h2>
                  <div
                    id="collapse1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionLeft"
                  >
                    <div className="accordion-body">
                      Students in XI, XII, or repeaters ready for focused CET preparation can enroll.
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
                      Which subjects are taught?
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
                       Are mock tests included?
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
                      data-bs-target="#collapse7"
                      aria-expanded="false"
                      aria-controls="collapse7"
                    >
                     Are the batches small?
                    </button>
                  </h2>
                  <div
                    id="collapse7"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionRight"
                  >
                    <div className="accordion-body">
                      Absolutely—designed for personalized attention and interaction.
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
                     Do parents get progress feedback?
                    </button>
                  </h2>
                  <div
                    id="collapse4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionRight"
                  >
                    <div className="accordion-body">
                    Yes—PTMs and performance reports are shared regularly.
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
                      Is the institute in a convenient location?
                    </button>
                  </h2>
                  <div
                    id="collapse5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionRight"
                  >
                    <div className="accordion-body">
                      Yes—easily accessible from <strong> Hinjewadi, Baner, Wakad, Balewadi, Bavdhan, and Aundh </strong> Additional branches available in
                      <strong> Vishrantwadi, Wakad, Pimple Saudagar, Chinchwad, Kasarwadi, Moshi, Bhosari, Alandi, and others. </strong>
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
            </p> 
            <p>
                With growing competition, competitive preparation at a reputable center like <strong>  ASQUARE Academy Hinjewadi, </strong> can make a significant difference.
            </p>
            <p>
                Our CET coaching in Hinjewadi is designed to strengthen conceptual understanding, improve accuracy and speed, and ensure comprehensive exam preparation.
            </p>
            <h4 className="common_title" style={{ color: "#05479b" }}>
              <strong>Subjects Covered</strong>
            </h4>
            <ul className="common_ul">
              <li className="mb-4">
                <span>
                  <strong>Physics:</strong> Strong conceptual focus with application-based problem-solving.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong>Chemistry:</strong> Coverage of Physical, Organic, and Inorganic Chemistry through analytical practice.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong>Mathematics / Biology: </strong>
                  Tailored training for PCM or PCB streams, depending on student requirements.
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
                 Board syllabus + CET preparation for foundational strength.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    1-Year Target Batch (Class XII + CET):
                  </strong>{" "}
                 Full CET training integrated with Class XII curriculum.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    Crash Course (2-3 Months):
                  </strong>{" "}
                   2–3 months of focused CET revision before exam season.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    Repeater / Dropper Batch:
                  </strong>{" "}
                  One-year dedicated program for CET re-attempt students.
                </span>
              </li>
            </ul>
            <p>
             Each course includes <strong> weekly tests, mentor sessions, and personalized performance analysis.</strong>
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
                ASQUARE Academy Hinjewadi Today
            </span>
          </h5>
          <p>
            Ready to ace MHT-CET? Join the most trusted coaching center in Hinjewadi, PCMC, for expert guidance, structured learning, and proven results. {" "}
            <strong> ASQUARE Academy Hinjewadi, </strong>{" "}
            and take your first step toward achieving your CET goals! {" "}
          </p>
          <p>
            Ideal for students from{" "}
            <strong> Hinjewadi, Baner, Wakad, Balewadi, Bavdhan, and Aundh. </strong>
          </p>
          <h4>
            <strong>
              Limited seats — enroll now!
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

export default MHTHinjewadi;
