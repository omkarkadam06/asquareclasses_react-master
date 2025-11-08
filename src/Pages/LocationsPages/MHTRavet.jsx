import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import Loading from "../Loading.jsx";
import MobileForm from "../../Components/Mobileform/MobileForm.jsx";
import "../locationspage.css";
import locationBGImage from "../../Assets/locationPageImages/mht-cet/mhcet-desktop-bg8.0.jpeg";
import MobileBGImage from "../../Assets/locationPageImages/mht-cet/mhcet-mobile-bg8.0.jpeg";
import MethodologyBg from "../../Assets/locationPageImages/teaching-methodology.jpeg";
import image1 from "../../Assets/locationPageImages/mht-cet/MH-CET page 5.jpeg";
import image2 from "../../Assets/locationPageImages/mht-cet/MH-CET page 9.jpeg";
import location from "../../Assets/locationPageImages/mht-cet/location.png";
import personalized from "../../Assets/locationPageImages/mht-cet/personalized.png";
import qualified from "../../Assets/locationPageImages/mht-cet/qualified.png";
import updated from "../../Assets/locationPageImages/mht-cet/updated.png";
import weekly_chapter from "../../Assets/locationPageImages/mht-cet/weekly_chapter.png";

const Reviews = React.lazy(() =>
  import("../../Components/Reviews/Reviews.jsx")
);

function MHTRavet() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  return (
    <>
      <Helmet>
        <title>
         Best MHT-CET Coaching Classes in Ravet Pune | ASQUARE Academy
        </title>
        <meta
          name="title"
          content="Best MHT-CET Coaching Classes in Ravet Pune | ASQUARE Academy"
        />
        <meta
          name="description"
          content="Join the Best MHT-CET Coaching Classes in Ravet Pune at ASQUARE Academy. Expert teachers, personalized study plans, and regular mock tests for Engineering and Pharmacy CET success."
        />
        <meta
          name="keywords"
          content="MHT-CET Coaching in ravet Pune, Best MHT-CET Classes in ravet,Top CET Coaching Institute ravet, MHT-CET Preparation in ravet,ASQUARE Academy ravet,Engineering CET Coaching ravet Pune,Pharmacy CET Coaching ravet Pune"
        />
        <script type="application/ld+json">{`
        {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "EducationalOrganization"],
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-ravet-pune/#localbusiness",
      "name": "ASQUARE Academy - MHT-CET Coaching Classes in Ravet Pune",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "url": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-ravet-pune/",
      "telephone": "+91-9766118877",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Ravet, Pune, Maharashtra",
        "addressLocality": "Ravet",
        "addressRegion": "Maharashtra",
        "postalCode": "411044",
        "addressCountry": "IN"
      },
      "description": "ASQUARE Academy in Ravet Pune offers top MHT-CET Coaching Classes with expert faculty, focused guidance, and mock tests for Engineering and Pharmacy CET aspirants.",
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune/"
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-ravet-pune/#webpage",
      "url": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-ravet-pune/",
      "name": "Best MHT-CET Coaching Classes in Ravet Pune | ASQUARE Academy",
      "description": "Join the Best MHT-CET Coaching Classes in Ravet Pune at ASQUARE Academy. Expert guidance, focused study plans, and mock tests for Engineering and Pharmacy CET success."
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-ravet-pune/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can enroll at ASQUARE Academy Ravet?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students in Class XI, XII, or those repeating CET from Ravet and nearby areas like Wakad, Pimple Nilakh, and Punawale can enroll."
          }
        },
        {
          "@type": "Question",
          "name": "Which subjects are covered?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We cover Physics, Chemistry, and Mathematics for Engineering aspirants, and PCB subjects for Pharmacy students."
          }
        },
        {
          "@type": "Question",
          "name": "Are mock tests part of the course?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, regular chapter-wise and full-length CET mock tests are conducted to enhance student performance."
          }
        },
        {
          "@type": "Question",
          "name": "What courses are offered?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer 2-Year Integrated, 1-Year Core, Crash Course, and Repeaters programs tailored for MHT-CET preparation."
          }
        },
        {
          "@type": "Question",
          "name": "Is attention to students sufficient?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, small batch sizes ensure every student receives personalized attention and consistent guidance."
          }
        },
        {
          "@type": "Question",
          "name": "Are parents kept informed of progress?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, regular parent-teacher meetings and performance updates keep parents informed about student progress."
          }
        },
        {
          "@type": "Question",
          "name": "Where is the Ravet center located?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE Academy Ravet serves students from Ravet, Wakad, Pimple Nilakh, Punawale, Thergaon, Bavdhan, and Balewadi. We also have branches in Hadapsar, Vishrantwadi, Pimple Saudagar, Chinchwad, Kasarwadi, Nigdi, Alandi, and Moshi."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-ravet-pune/#breadcrumb",
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
          "name": "MHT-CET Coaching Classes in Ravet Pune",
          "item": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-ravet-pune/"
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
              <img className="common_image" src={image1} alt="ASQUARE Ravet" />
            </div>
            <div className="col-lg-6 col-md-12 order-1 order-lg-2">
              <h1 className="common_title">
                Build a Bright Future with Expert IIT-JEE & NEET Coaching at{" "}
                <span className="common_title_span">ASQUARE Academy,</span>{" "}
                Ravet
              </h1>
              <p>
                Looking for the{" "}
                <strong>best MHT-CET coaching classes in Ravet, Pune (PCMC)?</strong> At{" "}
                <strong>ASQUARE Academy — Ravet,</strong> our Ravet branch provides structured, focused coaching to help students excel in the{" "}
                <strong>MHT-CET exam for engineering and pharmacy admissions. </strong>
                We’re centrally located for students from {" "}
                <strong>
                  Ravet, Ravet Chowk, Wakad, Pimple Nilakh, Punawale, Thergaon, Bavdhan, and Balewadi, 
                </strong>{" "}
                making us a highly accessible choice for competitive exam preparation.
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
                ASQUARE Academy for MHT-CET in Ravet?
              </h2>
              <ul className="common_ul">
                <li>
                  <strong>Expert CET-Specialized Faculty:</strong> Trainers with proven success in CET, JEE, and NEET coaching.
                </li>
                <li>
                  <strong>Complete CET Syllabus Coverage:</strong> Physics, Chemistry, and Mathematics/Biology aligned to the latest exam pattern.
                </li>
                <li>
                  <strong>Personalized Attention in Small Batches:</strong> Ensuring quality learning and doubt resolution.
                </li>
                <li>
                  <strong>Regular Mock Tests & Performance Reviews:</strong> Weekly assessments with detailed insights.
                </li>
                <li>
                  <strong>Motivational Guidance & Adept Exam Strategy Workouts:</strong> Building readiness and confidence.
                </li>
              </ul>
            </div>
            <div className="col-lg-6 col-md-12 img-col order-1 order-lg-2">
              <img className="common_image" src={image2} alt="Ravet classes" />
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
                ASQUARE Academy Ravet
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
                  Small batch sizes for focused learning
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={updated} alt="" />
                <h6 className="grid_item_title">
                  Updated, CET-aligned study materials.
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={weekly_chapter} alt="" />
                <h6 className="grid_item_title">
                  Regular PTMs and progress reports.
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={personalized} alt="" />
                <h6 className="grid_item_title">
                  Time management & exam strategy workshops.
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={location} alt="" />
                <h6 className="grid_item_title">
                  Conveniently located for students from <strong> Ravet Chowk, Wakad, Pimple Nilakh, Punawale, Thergaon, Bavdhan, Balewadi.</strong>
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
            Students trained at <strong> ASQUARE Academy Ravet </strong> has a strong track record of MHT-CET success. Students from the Ravet region achieve top ranks and gain entry into prestigious engineering and pharmacy institutes—making us a trusted CET coaching choice in PCMC.
          </p>
          <p>
            Our success stories make us one of the
            <strong> top MHT-CET coaching institutes in Ravet and PCMC.</strong>
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
                <span>Daily lectures with concept clarity.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Assignments & Practice:</h6>
                <span>Chapter-wise assignments for practice.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Mock Tests:</h6>
                <span>Personalized doubt-clearing sessions.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Progress Reports:</h6>
                <span>Topic-wise & full-length mock tests.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Extra Activites:</h6>
                <span>Progress reports with parent–teacher sessions</span>
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
                MHT-CET Coaching Institute in Ravet {" "}
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
                     Who can enroll at ASQUARE Academy Ravet?
                    </button>
                  </h2>
                  <div
                    id="collapse1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionLeft"
                  >
                    <div className="accordion-body">
                      Students in Class XI, XII, or those repeating CET, from Ravet and surrounding areas like Wakad, Pimple Nilakh, and Punawale.
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
                      Physics, Chemistry, PCM for engineering, and PCB for pharmacy aspirants.
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
                      Yes—regular chapter-wise tests and full-length CET simulations.
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
                     What courses are offered?
                    </button>
                  </h2>
                  <div
                    id="collapse7"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionRight"
                  >
                    <div className="accordion-body">
                      We offer <strong>2-Year Integrated, 1-Year Core, Crash Course, and Repeaters.</strong>
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
                       Where is the Ravet center located?
                    </button>
                  </h2>
                  <div
                    id="collapse4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionRight"
                  >
                    <div className="accordion-body">
                      <strong>ASQUARE Academy Ravet,</strong> accessible from Ravet, Wakad, Pimple Nilakh, Punawale, Thergaon, Bavdhan, and Balewadi. We also have branches in {" "}
                      <strong>
                         Hadapsar, Vishrantwadi, Pimple Saudagar, Chinchwad, Kasarwadi, Nigdi, Alandi, and Moshi.
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
                      Are parents kept informed of progress?
                    </button>
                  </h2>
                  <div
                    id="collapse5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionRight"
                  >
                    <div className="accordion-body">
                      Yes—updates and parent-teacher meetings are routinely done.
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
              The <strong>MHT-CET (Maharashtra Common Entrance Test)</strong> is essential for entry into leading engineering and pharmacy colleges. Given the rise in competition.
             </p> 
            <p>
                students from
               <strong> Ravet, Wakad, Pimple Nilakh, and nearby localities trust ASQUARE Academy</strong> for top-notch coaching and support.
            </p>
            <h4 className="common_title" style={{ color: "#05479b" }}>
              <strong>Subjects Covered</strong>
            </h4>
            <ul className="common_ul">
              <li className="mb-4">
                <span>
                  <strong>Physics:</strong> Master concepts and numerical analysis.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong>Chemistry:</strong> In-depth coverage of Physical, Organic & Inorganic Chemistry.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong>Mathematics / Biology: </strong>
                  PCM for engineering students; PCB for pharmacy students.
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
                  Boards + MHT-CET preparation.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    1-Year Target Batch (Class XII + CET):
                  </strong>{" "}
                  Dedicated MHT-CET training through Class XII.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    Full-Year Course (XI & XII students):
                  </strong>{" "}
                  Systematic preparation with school/college curriculum.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    Crash Course (2-3 Months):
                  </strong>{" "}
                  Intensive 2–3 months of rapid preparation.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    Repeater / Dropper Batch:
                  </strong>{" "}
                  Full-year focused re-attempt program.
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
                ASQUARE Academy Ravet Today
            </span>
          </h5>
          <p>
            Start your MHT-CET preparation with Pune’s most trusted CET coaching center{" "}
            <strong>ASQUARE Academy Ravet.</strong>{" "}
            With expert faculty, structured learning, and a proven success record, we empower aspirants to achieve their dreams.{" "}
            <strong>
              MHT-CET preparation in  Ravet, Wakad, Pimple Nilakh, Punawale, Thergaon, Bavdhan, and Balewadi.
            </strong>
          </p>
          <h4>
            <strong>
              Limited seats—enroll now!
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

export default MHTRavet;
