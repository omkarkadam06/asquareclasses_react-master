import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import Loading from "../Loading.jsx";
import MobileForm from "../../Components/Mobileform/MobileForm.jsx";
import "../locationspage.css";
import locationBGImage from "../../Assets/locationPageImages/mht-cet/mhcet-desktop-bg7.0.jpeg";
import MobileBGImage from "../../Assets/locationPageImages/mht-cet/mhcet-mobile-bg6.0.jpeg";
import MethodologyBg from "../../Assets/locationPageImages/teaching-methodology.jpeg";
import image1 from "../../Assets/locationPageImages/mht-cet/MH-CET page 3.jpeg";
import image2 from "../../Assets/locationPageImages/mht-cet/MH-CET page 1.jpeg";
import location from "../../Assets/locationPageImages/mht-cet/location.png";
import personalized from "../../Assets/locationPageImages/mht-cet/personalized.png";
import qualified from "../../Assets/locationPageImages/mht-cet/qualified.png";
import updated from "../../Assets/locationPageImages/mht-cet/updated.png";
import weekly_chapter from "../../Assets/locationPageImages/mht-cet/weekly_chapter.png";

const Reviews = React.lazy(() =>
  import("../../Components/Reviews/Reviews.jsx")
);

function MHTSahunagar() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  return (
    <>
      <Helmet>
        <title>
         Best MHT-CET Coaching Classes in Sahunagar Pune | ASQUARE Academy
        </title>
        <meta
          name="title"
          content="Best MHT-CET Coaching Classes in Sahunagar Pune | ASQUARE Academy"
        />
        <meta
          name="description"
          content="Join the Best MHT-CET Coaching Classes in Sahunagar Pune at ASQUARE Academy. Expert teachers, focused study plans, and mock tests for Engineering & Pharmacy CET preparation."
        />
        <meta
          name="keywords"
          content="MHT-CET Coaching in sahunagar Pune, Best MHT-CET Classes in sahunagar, Top CET Coaching Institute sahunagar, MHT-CET Preparation in sahunagar, ASQUARE Academy sahunagar,Engineering CET Coaching sahunagar Pune,Pharmacy CET Coaching sahunagar Pune"
        />
        <script type="application/ld+json">{`
        {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "EducationalOrganization"],
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-sahunagar-pune/#localbusiness",
      "name": "ASQUARE Academy - MHT-CET Coaching Classes in Sahunagar Pune",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "url": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-sahunagar-pune/",
      "telephone": "+91-9766118877",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Sahunagar, Pune, Maharashtra",
        "addressLocality": "Sahunagar",
        "addressRegion": "Maharashtra",
        "postalCode": "411019",
        "addressCountry": "IN"
      },
      "description": "ASQUARE Academy in Sahunagar Pune provides top-quality MHT-CET Coaching Classes with small batches, experienced faculty, and regular mock tests for Engineering & Pharmacy aspirants.",
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune/"
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-sahunagar-pune/#webpage",
      "url": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-sahunagar-pune/",
      "name": "Best MHT-CET Coaching Classes in Sahunagar Pune | ASQUARE Academy",
      "description": "Join the Best MHT-CET Coaching Classes in Sahunagar Pune at ASQUARE Academy. Expert faculty, focused learning plans, and mock tests for Engineering and Pharmacy CET success."
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-sahunagar-pune/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can enroll at ASQUARE Academy Sahunagar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students in Classes XI, XII, and XII pass-outs preparing for MHT-CET can enroll at ASQUARE Academy Sahunagar."
          }
        },
        {
          "@type": "Question",
          "name": "What subjects are taught?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We teach Physics, Chemistry, and Mathematics (PCM) for Engineering aspirants, and Physics, Chemistry, and Biology (PCB) for Pharmacy aspirants."
          }
        },
        {
          "@type": "Question",
          "name": "Are mock tests part of the program?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, weekly topic tests and full-length mock exams with detailed performance analytics are conducted."
          }
        },
        {
          "@type": "Question",
          "name": "What course formats are offered?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer 2-Year Integrated Course, 1-Year Course, 2–3 Month Crash Course, and a 1-Year Repeater Batch for focused MHT-CET preparation."
          }
        },
        {
          "@type": "Question",
          "name": "How are batch sizes structured?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Small batch sizes ensure each student receives individual attention and consistent academic mentoring."
          }
        },
        {
          "@type": "Question",
          "name": "Do you share progress with parents?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, regular progress reports and parent meetings are conducted to keep families updated on student performance."
          }
        },
        {
          "@type": "Question",
          "name": "Where is your Sahunagar branch located and which areas are nearby?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our Sahunagar centre is conveniently accessible from nearby areas such as Chinchwad, Pimpri, Akurdi, Pimple Saudagar, Moshi, and Pimple Gurav."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-sahunagar-pune/#breadcrumb",
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
          "name": "MHT-CET Coaching Classes in Sahunagar Pune",
          "item": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-sahunagar-pune/"
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
              <img className="common_image" src={image1} alt="ASQUARE Sahunagar" />
            </div>
            <div className="col-lg-6 col-md-12 order-1 order-lg-2">
              <h1 className="common_title">
                Build Your Future with Expert Guidance{" "}
                <span className="common_title_span">ASQUARE Academy,</span>{" "}
                Sahunagar Pune
              </h1>
              <p>
                Looking for expert{" "}
                <strong>MHT-CET coaching in Sahunagar, Pune (PCMC)?</strong> At{" "}
                <strong>ASQUARE Academy — Sahunagar,</strong> we offer structured and exam-oriented preparation rooted in{" "}
                <strong>concept clarity, strategic problem-solving, and time-management techniques. </strong>
                Recognized for delivering top-tier results in PCMC, our faculty, mentorship, and performance-driven coaching empower students to secure admissions into premier engineering and pharmacy colleges across Maharashtra.
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
                ASQUARE Academy for MHT-CET in Sahunagar?
              </h2>
              <ul className="common_ul">
                <li>
                  <strong>Expert Faculty:</strong> Seasoned instructors experienced in CET, JEE, and NEET demand analysis.
                </li>
                <li>
                  <strong>Complete Syllabus Coverage:</strong>  Comprehensive coaching in Physics, Chemistry, and Mathematics/Biology following the updated CET format.
                </li>
                <li>
                  <strong>Personalized Mentoring:</strong> Small batch sizes at our Sahunagar branch, ensuring individual guidance.
                </li>
                <li>
                  <strong>Weekly Mock Tests & Analysis:</strong> Regular assessments with detailed performance feedback.
                </li>
                <li>
                  <strong>Career Guidance & Motivation:</strong> Strategies to build confidence and optimize exam performance.
                </li>
              </ul>
            </div>
            <div className="col-lg-6 col-md-12 img-col order-1 order-lg-2">
              <img className="common_image" src={image2} alt="Sahunagar classes" />
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
                ASQUARE Academy Sahunagar
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
                  Small batch sizes for personalized attention.
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={updated} alt="" />
                <h6 className="grid_item_title">
                  Up-to-date CET study materials created by experts.
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={weekly_chapter} alt="" />
                <h6 className="grid_item_title">
                  Parent–teacher meetings with performance insights.
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={personalized} alt="" />
                <h6 className="grid_item_title">
                  Workshops on exam strategy and time management.
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={location} alt="" />
                <h6 className="grid_item_title">
                  Premier CET coaching in <strong> Sahunagar, Chinchwad, Pimpri, Akurdi & Pimple Saudagar.</strong>
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
            Students trained at <strong> ASQUARE Academy -Sahunagar </strong>  consistently produces impressive CET results, with students gaining admission into leading engineering and pharmacy colleges.{" "}
            Our<strong> Sahunagar PCMC coaching center </strong>
            is known for its reliability, personalized mentorship, and proven success rates.
          </p>
          <p>
            Our success stories make us one of the
            <strong> top MHT-CET coaching institutes in Sahunagar and PCMC.</strong>
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
                  Daily lectures, chapter-wise assignments, mock tests, and
                  personalized doubt sessions
                </strong>{" "}
                ensure every student is exam-ready.
              </p>
              <a href="/">
                <button className="button mt-3">Know More</button>
              </a>
            </div>
            <div className="col-lg-6">
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Concept-Building Lectures:</h6>
                <span>Daily structured lectures paired with assignments</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Assignments & Practice:</h6>
                <span>One-on-one doubt-clearing sessions.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Mock Tests:</h6>
                <span>Weekly topic tests and full-length CET mock exams.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Progress Reports:</h6>
                <span>Performance tracking with reports shared with parents.</span>
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
                MHT-CET Coaching Institute in Sahunagar {" "}
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
                      Who can enroll at ASQUARE Academy Sahunagar?
                    </button>
                  </h2>
                  <div
                    id="collapse1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionLeft"
                  >
                    <div className="accordion-body">
                      Students in Classes XI, XII, and XII pass-outs preparing for MHT-CET can enroll.
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
                      What subjects are taught?
                    </button>
                  </h2>
                  <div
                    id="collapse2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionLeft"
                  >
                    <div className="accordion-body">
                      We cover Physics, Chemistry, and Mathematics (PCM) for Engineering aspirants, and Physics, Chemistry, and Biology (PCB) for Pharmacy aspirants.
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
                      Are mock tests part of the program?
                    </button>
                  </h2>
                  <div
                    id="collapse3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionLeft"
                  >
                    <div className="accordion-body">
                      Yes—weekly topic tests and full-length mock exams with performance analytics are provided.
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
                     What course formats are offered?
                    </button>
                  </h2>
                  <div
                    id="collapse7"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionRight"
                  >
                    <div className="accordion-body">
                      We offer <strong> 2-Year Integrated Course, 1-Year Course, Crash Course (2–3 months), and Repeater Batch (1 year).</strong>
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
                    Where is your Sahunagar branch located and which areas are nearby?
                    </button>
                  </h2>
                  <div
                    id="collapse4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionRight"
                  >
                    <div className="accordion-body">
                      Our Sahunagar centre is conveniently accessible from nearby areas such as{" "}
                      <strong>
                         Chinchwad, Pimpri, Akurdi, Pimple Saudagar, Moshi, and Pimple Gurav.
                      </strong>
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
                      Do you share progress with parents?
                    </button>
                  </h2>
                  <div
                    id="collapse5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionRight"
                  >
                    <div className="accordion-body">
                      Yes—regular performance reports and parent meetings are conducted to keep families informed.
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
              The <strong>MHT-CET (Maharashtra Common Entrance Test)</strong> is the gateway to top-tier
              <strong> Engineering, Pharmacy, and Professional Course </strong>
              admissions in Maharashtra. A well-located CET institute in <strong> Sahunagar PCMC </strong> supports systematic preparation, improved accuracy, and better outcomes.
             </p> 
            <p>
             we focus on building fundamentals, enhancing accuracy, and providing consistent test practice—equipping you to achieve your academic and career goals.
            </p>
            <h4 className="common_title" style={{ color: "#05479b" }}>
              <strong>Subjects Covered</strong>
            </h4>
            <ul className="common_ul">
              <li className="mb-4">
                <span>
                  <strong>Physics:</strong> Thorough conceptual clarity, numerical practice, and application-focused teaching.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong>Chemistry:</strong> Balanced training in Physical, Organic, and Inorganic Chemistry with problem-solving emphasis.

                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong>Mathematics / Biology: </strong>
                  Intensive practice suits both Engineering (PCM) and Pharmacy (PCB) students.
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
                  Combined Board and CET prep for Classes XI & XII.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    1-Year Target Batch (Class XII + CET):
                  </strong>{" "}
                  Focused CET training using Class XII syllabus.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    Crash Course (2-3 Months):
                  </strong>{" "}
                  2–3 months of intensive revision and exam practice.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    Repeater / Dropper Batch:
                  </strong>{" "}
                  1-year tailored CET coaching for XII pass-outs.
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

      {/* Join Section */}
      <section className="contact_section mb-5">
        <div className="container text-center">
          <h5 className="common_title">
            Join{" "}
            <span className="common_title_span">
              ASQUARE Academy – Sahunagar, Pune
            </span>
          </h5>
          <p>
            Elevate your MHT-CET preparation with expert coaching, proven strategies, and a focused learning environment. ASQUARE Academy in Sahunagar is your reliable launchpad for success in Engineering and Pharmacy entrance exams.{" "}
            <strong>
              Best suited for students from Sahunagar, Chinchwad, Pimpri, Akurdi, Pimple Saudagar, and Pimple Gurav.
            </strong>
          </p>
          <h4>
            <strong>
              Admissions are open—limited seats available! Enroll today to secure your spot.
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

export default MHTSahunagar;
