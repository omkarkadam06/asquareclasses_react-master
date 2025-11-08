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
import image1 from "../../Assets/locationPageImages/mht-cet/MH-CET page 12.jpeg";
import image2 from "../../Assets/locationPageImages/mht-cet/MH-CET page 18.jpeg";
import location from "../../Assets/locationPageImages/mht-cet/location.png";
import personalized from "../../Assets/locationPageImages/mht-cet/personalized.png";
import qualified from "../../Assets/locationPageImages/mht-cet/qualified.png";
import updated from "../../Assets/locationPageImages/mht-cet/updated.png";
import weekly_chapter from "../../Assets/locationPageImages/mht-cet/weekly_chapter.png";

const Reviews = React.lazy(() =>
  import("../../Components/Reviews/Reviews.jsx")
);

function MHTWagholi() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  return (
    <>
      <Helmet>
        <title>
         MHT-CET Coaching Classes in Wagholi Pune | Best CET Classes – ASQUARE Academy
        </title>
        <meta
          name="title"
          content="MHT-CET Coaching Classes in Wagholi Pune | Best CET Classes – ASQUARE Academy"
        />
        <meta
          name="description"
          content="Join the Best MHT-CET Coaching Classes in Wagholi Pune at ASQUARE Academy. Expert faculty, mock tests & focused batches for CET preparation and top results."
        />
        <meta
          name="keywords"
          content="MHT-CET Coaching in wagholi Pune,Best MHT-CET Classes in wagholi,Top CET Coaching Institute wagholi,MHT-CET Preparation in wagholi,ASQUARE Academy wagholi"
        />
        <script type="application/ld+json">{`
        {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "name": "ASQUARE Academy Wagholi",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-wagholi-pune",
      "url": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-wagholi-pune",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Wagholi, Pune, Maharashtra",
        "addressLocality": "Wagholi",
        "addressRegion": "Maharashtra",
        "postalCode": "412207",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "18.5806",
        "longitude": "73.9869"
      },
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune"
      ],
      "openingHours": "Mo-Su 08:00-20:00",
      "description": "ASQUARE Academy Wagholi offers expert MHT-CET Coaching Classes in Pune for Class XI, XII, and repeater students with mock tests, focused batches, and result-driven programs."
    },
    {
      "@type": "WebPage",
      "name": "MHT-CET Coaching Classes in Wagholi Pune | ASQUARE Academy",
      "url": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-wagholi-pune",
      "description": "Enroll in the Best MHT-CET Coaching Classes in Wagholi Pune. ASQUARE Academy offers expert guidance, mock tests & focused preparation for CET aspirants."
    },
    {
      "@type": "EducationalOrganization",
      "name": "ASQUARE Academy Wagholi",
      "url": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-wagholi-pune",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune"
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Wagholi, Pune, Maharashtra",
        "addressLocality": "Wagholi",
        "addressRegion": "Maharashtra",
        "postalCode": "412207",
        "addressCountry": "IN"
      },
      "description": "ASQUARE Academy Wagholi provides expert MHT-CET Coaching Classes with well-structured study plans, small batches, and personalized performance tracking."
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can join MHT-CET coaching at ASQUARE Wagholi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students in Class XI, XII, and repeat-year aspirants from Wagholi, Kharadi, Viman Nagar, Lohegaon & Dhanori can join."
          }
        },
        {
          "@type": "Question",
          "name": "What subjects are taught?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Physics, Chemistry, Mathematics for Engineering aspirants and Biology for Pharmacy students are taught."
          }
        },
        {
          "@type": "Question",
          "name": "Are mock tests included?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, weekly chapter tests, unit tests, and full-length CET mock exams are conducted."
          }
        },
        {
          "@type": "Question",
          "name": "What courses are offered?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Courses include 2-Year Integrated, 1-Year Target, Crash Course & Dropper/Repeater Batches."
          }
        },
        {
          "@type": "Question",
          "name": "Are batches small?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, ASQUARE Academy keeps batch sizes limited for focused learning and better attention."
          }
        },
        {
          "@type": "Question",
          "name": "Do parents get updates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, parents receive regular updates through PTMs and detailed progress reports."
          }
        },
        {
          "@type": "Question",
          "name": "Which nearby areas does this branch serve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students from Wagholi, Kharadi, Viman Nagar, Lohegaon & Dhanori regularly join our MHT-CET Coaching Classes."
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
          "name": "MHT-CET Coaching Classes in Pune",
          "item": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-pune/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "MHT-CET Coaching Classes in Wagholi Pune",
          "item": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-wagholi-pune"
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
              <img className="common_image" src={image1} alt="ASQUARE Wagholi" />
            </div>
            <div className="col-lg-6 col-md-12 order-1 order-lg-2">
              <h1 className="common_title">
                Excel in MHT-CET with{" "}
                <span className="common_title_span">ASQUARE Academy,</span>{" "}
                 Wagholi, Kharadi & Viman Nagar
              </h1>
              <p>
                Looking for the  {" "}<strong>best MHT-CET coaching in Wagholi, Pune? </strong> At
                <strong> ASQUARE Academy, </strong> we provide expert guidance with a focus on {" "}
                <strong> concept clarity, regular mock tests, and personalized attention.  </strong> 
                Our Wagholi branch is also a preferred choice for students from <strong>
                    Kharadi, Viman Nagar, Lohegaon, and Dhanori,
                </strong>
                {" "}thanks to its convenient location and excellent academic results.
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
                ASQUARE Academy for MHT-CET Coaching in Wagholi?
              </h2>
              <ul className="common_ul">
                <li>
                  <strong>Expert Faculty:</strong> Highly qualified mentors for Physics, Chemistry, Maths, and Biology.
                </li>
                <li>
                  <strong>Comprehensive CET Syllabus Coverage :</strong> Covers the entire CET syllabus aligned with the latest exam trends.
                </li>
                <li>
                  <strong>Small Batches:</strong> Ensures personal attention and interactive learning sessions.
                </li>
                <li>
                  <strong>Regular Mock Tests: </strong> Weekly analysis and progress tracking for every student.
                </li>
                <li>
                  <strong>Board + CET Integration:</strong> Balanced study plan for school and entrance exams.
                </li>
              </ul>
              <p>
                At ASQUARE Academy, we emphasize conceptual clarity and consistent performance improvement through daily practice and personalized feedback.
              </p>
            </div>
            <div className="col-lg-6 col-md-12 img-col order-1 order-lg-2">
              <img className="common_image" src={image2} alt="Wagholi classes" />
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
                ASQUARE Academy Wagholi
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
                  Experienced subject experts for all streams (PCM & PCB).
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={updated} alt="" />
                <h6 className="grid_item_title">
                  Limited batch sizes for focused mentoring.
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={weekly_chapter} alt="" />
                <h6 className="grid_item_title">
                  Updated study materials and practice sets.
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={personalized} alt="" />
                <h6 className="grid_item_title">
                  Mock tests based on real CET patterns.
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={location} alt="" />
                <h6 className="grid_item_title">
                 Strategically located for students from <strong> Wagholi, Kharadi, Viman Nagar, Lohegaon & Dhanori. </strong>
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
            Students trained at ASQUARE Academy Wagholi have consistently secured high CET ranks, gaining admissions to top colleges like {" "}
            <strong>
                COEP Pune, MIT-WPU, DY Patil College, and VIT Pune.
            </strong>
          </p>
          <p>
            ASQUARE Academy has consistently produced excellent MHT-CET results, with students from  <strong> Wagholi, Kharadi, Lohegaon, Dhanori, and Viman Nagar.</strong>
            {" "}securing admissions in Maharashtra’s top engineering and pharmacy colleges.
          </p>
          <p>
            At ASQUARE Academy, we focus on building a strong academic foundation that helps students succeed in both board and entrance exams.
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
                  Our structured teaching approach ensures that every student builds accuracy, confidence, and exam discipline.
                </strong>{" "}
              </p>
              <a href="/">
                <button className="button mt-3">Know More</button>
              </a>
            </div>
            <div className="col-lg-6">
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Concept-Building Lectures:</h6>
                <span>Daily interactive lectures with assignments.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Assignments & Practice:</h6>
                <span>Weekly chapter tests & full-length CET mocks.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Mock Tests:</h6>
                <span>One-on-one doubt-clearing sessions.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Progress Reports:</h6>
                <span>Parent–student meetings for progress tracking.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Extra Activites:</h6>
                <span>Workshops on exam strategy, accuracy & speed.</span>
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
                MHT-CET Coaching Institute in Wagholi {" "}
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
                     Who can join MHT-CET coaching at ASQUARE Wagholi?
                    </button>
                  </h2>
                  <div
                    id="collapse1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionLeft"
                  >
                    <div className="accordion-body">
                      Students in Class XI, XII, and repeat-year aspirants from Wagholi, Kharadi, Viman Nagar, Lohegaon & Dhanori.
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
                      Physics, Chemistry, Mathematics (Engineering) & Biology (Pharmacy).
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
                       Are mock tests and assessments included?
                    </button>
                  </h2>
                  <div
                    id="collapse3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionLeft"
                  >
                    <div className="accordion-body">
                      Yes, weekly topic tests and full-length CET mock exams are conducted to track performance.
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
                    What courses are offered?
                    </button>
                  </h2>
                  <div
                    id="collapse7"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionLeft"
                  >
                    <div className="accordion-body">
                      We provide 2-year integrated, 1-year target, crash course, and repeater batches.
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
                     Are batches small?
                    </button>
                  </h2>
                  <div
                    id="collapse7"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionRight"
                  >
                    <div className="accordion-body">
                      Yes – we keep batch sizes limited for focused learning.
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
                     Do parents get updates?
                    </button>
                  </h2>
                  <div
                    id="collapse4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionRight"
                  >
                    <div className="accordion-body">
                    Yes – through PTMs and detailed progress reports.
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
                     Which nearby areas does this branch serve?
                    </button>
                  </h2>
                  <div
                    id="collapse5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionRight"
                  >
                    <div className="accordion-body">
                      Students from <strong> Wagholi, Kharadi, Viman Nagar, Lohegaon & Dhanori </strong>regularly join our CET programs.
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
              The <strong>MHT-CET (Maharashtra Common Entrance Test)</strong> serves as a gateway to prestigious colleges in Maharashtra for Engineering, Pharmacy, and Allied Sciences. 
            </p> 
            <p>
               Our program helps students simplify complex concepts, develop analytical skills, and sharpen test-taking strategies. ASQUARE Academy Wagholi is a trusted name for <strong> CET coaching in Wagholi, </strong> helping students stay ahead with systematic preparation and result-oriented modules.
            </p>
            <p>Each subject is taught with attention to the exam’s pattern, helping students tackle both theory and application-based questions effectively.</p>
            <h4 className="common_title" style={{ color: "#05479b" }}>
              <strong>Subjects Covered</strong>
            </h4>
            <ul className="common_ul">
              <li className="mb-4">
                <span>
                  <strong>Physics:</strong> Strong fundamentals with problem-solving drills.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong>Chemistry:</strong> In-depth study of Physical, Organic, and Inorganic Chemistry.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong>Mathematics / Biology: </strong>
                  Rigorous PCM training for Engineering & PCB for Pharmacy aspirants.
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
                Popular among students from Wagholi, Kharadi & Viman Nagar
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    1-Year Target Batch (Class XII + CET):
                  </strong>{" "}
                  Intensive training for XII board + CET
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    Crash Course (2-3 Months):
                  </strong>{" "}
                  Preferred by students from Lohegaon & Dhanori for last-minute prep.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    Repeater / Dropper Batch:
                  </strong>{" "}
                  Year-long targeted preparation for XII pass-outs.
                </span>
              </li>
            </ul>
            <p>
             All batches include test evaluations, individual mentoring, and performance tracking to ensure steady progress.
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
                ASQUARE Academy Wagholi Today
            </span>
          </h5>
          <p>
            Join {" "}
            <strong> ASQUARE Academy Wagholi, </strong>{" "}
            Boost your CET preparation with the {" "}
            <strong>
                top MHT-CET coaching in Wagholi, Kharadi, Viman Nagar, Lohegaon & Dhanori.
            </strong>
            {" "}With expert faculty, rigorous practice, and proven success, ASQUARE Academy is your trusted choice.
          </p>
          <h4>
            <strong>
              Admissions Open – Limited Seats! Enroll today at ASQUARE Academy – Wagholi.
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

export default MHTWagholi;
