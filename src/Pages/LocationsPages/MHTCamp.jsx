import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import Loading from "../Loading.jsx";
import MobileForm from "../../Components/Mobileform/MobileForm.jsx";
import "../locationspage.css";
import locationBGImage from "../../Assets/locationPageImages/mht-cet/mhcet-desktop-bg2.0.jpeg";
import MobileBGImage from "../../Assets/locationPageImages/mht-cet/mhtcet-mobile-bg2.0.jpeg";
import MethodologyBg from "../../Assets/locationPageImages/teaching-methodology.jpeg";
import image1 from "../../Assets/locationPageImages/mht-cet/MH-CET page 20.jpeg";
import image2 from "../../Assets/locationPageImages/mht-cet/MH-CET page 21.jpeg";
import location from "../../Assets/locationPageImages/mht-cet/location.png";
import personalized from "../../Assets/locationPageImages/mht-cet/personalized.png";
import qualified from "../../Assets/locationPageImages/mht-cet/qualified.png";
import updated from "../../Assets/locationPageImages/mht-cet/updated.png";
import weekly_chapter from "../../Assets/locationPageImages/mht-cet/weekly_chapter.png";

const Reviews = React.lazy(() =>
  import("../../Components/Reviews/Reviews.jsx")
);

function MHTCamp() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  return (
    <>
      <Helmet>
        <title>
          MHT-CET Coaching & Classes in Pune Camp Area | ASQUARE Academy
        </title>
        <meta
          name="title"
          content="MHT-CET Coaching & Classes in Pune Camp Area | ASQUARE Academy"
        />
        <meta
          name="description"
          content="Join top MHT-CET Coaching Classes in Pune Camp Area. Expert faculty, mock tests & small batches for Engineering & Pharmacy aspirants. ASQUARE Academy Pune."
        />
        <meta
          name="keywords"
          content="MHT-CET Coaching in Chandan Nagar Pune, Best MHT-CET Classes in Chandan Nagar, Top CET Coaching Institute Chandan Nagar, MHT-CET Preparation in Chandan Nagar, ASQUARE Academy Chandan Nagar, Engineering CET Coaching Chandan Nagar Pune, Pharmacy CET Coaching Chandan Nagar Pune,"
        />
        <script type="application/ld+json">{`
        {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-pune-camp-area#localbusiness",
      "name": "MHT-CET Coaching & Classes in Pune Camp Area | ASQUARE Academy",
      "url": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-pune-camp-area",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "telephone": "+91-9766118877",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Pune Camp Area, Pune, Maharashtra",
        "addressLocality": "Pune",
        "addressRegion": "MH",
        "postalCode": "411001",
        "addressCountry": "IN"
      },
      "priceRange": "₹₹",
      "openingHours": "Mo-Su 08:00-20:00",
      "sameAs": [
        "https://www.asquareclasses.com/",
        "https://www.facebook.com/AsquareAcademyPune"
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-pune-camp-area#webpage",
      "url": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-pune-camp-area",
      "name": "MHT-CET Coaching & Classes in Pune Camp Area | ASQUARE Academy",
      "description": "Join top MHT-CET Coaching Classes in Pune Camp Area. Expert faculty, mock tests & small batches for Engineering & Pharmacy aspirants. ASQUARE Academy Pune.",
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
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-pune-camp-area#organization",
      "name": "ASQUARE Academy Pune Camp Area",
      "url": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-pune-camp-area",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9766118877",
        "contactType": "Customer Service"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Pune Camp Area, Pune, Maharashtra",
        "addressLocality": "Pune",
        "addressRegion": "MH",
        "postalCode": "411001",
        "addressCountry": "IN"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-pune-camp-area#breadcrumb",
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
          "name": "MHT-CET Coaching Pune",
          "item": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-pune"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Pune Camp Area",
          "item": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-pune-camp-area"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-pune-camp-area#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can enroll at ASQUARE Camp?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students in Class XI, XII, and repeat-year aspirants from Camp and nearby areas can enroll at ASQUARE Camp."
          }
        },
        {
          "@type": "Question",
          "name": "Which subjects are offered?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer Physics, Chemistry, Mathematics (for Engineering) and Biology (for Pharmacy)."
          }
        },
        {
          "@type": "Question",
          "name": "Do mock tests form part of the curriculum?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes—weekly chapter tests and full-length CET mock exams are included in the curriculum."
          }
        },
        {
          "@type": "Question",
          "name": "What batch types are available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE offers 2-Year Integrated, 1-Year Targeted, Crash Course, and Repeater/Dropper programs."
          }
        },
        {
          "@type": "Question",
          "name": "Are batch sizes kept small?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, batch sizes are kept small for enhanced focus and individualized mentoring."
          }
        },
        {
          "@type": "Question",
          "name": "Do parents receive performance updates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, parents receive regular performance updates through PTMs and progress reports."
          }
        },
        {
          "@type": "Question",
          "name": "Which neighborhoods does this center conveniently serve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE Camp center is easily accessible from Pune Camp, Swargate, Fatima Nagar, Koregaon Park, and Mangalwar Peth."
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

      {/* Hero Image Section */}
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

      {/* Hero MobileForm */}
      <section className="Location_MobileForm">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <MobileForm />
            </div>
          </div>
        </div>
      </section>

      {/* Left Right Section 1 - Hero Content */}
      <section className="leftright_section padd">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 img-col order-2 order-lg-1">
              <img className="common_image" src={image1} alt="" />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 order-1 order-lg-2">
              <h1 className="common_title">
                Excel in MHT-CET with Expert Coaching at{" "}
                <span className="common_title_span">ASQUARE Academy,</span>{" "}
                Pune Camp Area.
              </h1>
              <p>
                Looking for the{" "}
                <strong>best MHT-CET coaching in Pune Camp Area?</strong> At{" "}
                <strong>ASQUARE Academy – Camp,</strong> we offer expert-led
                coaching focusing on strong foundations, consistent mock
                practice, and performance-driven mentoring. Strategically
                located, our center also serves students from{" "}
                <strong>
                  Swargate, Fatima Nagar, Koregaon Park, and Mangalwar Peth,
                </strong>{" "}
                offering a prime learning environment in the heart of the city.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Left Right Section 2 - Why Choose */}
      <section className="leftright_section padd_bottom">
        <div className="container">
          <div className="row row_reve align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12 order-2 order-lg-1">
              <h2 className="common_title">
                <span className="common_title_span" style={{ color: "#003399" }}>
                  Why Choose
                </span>{" "}
                ASQUARE Academy in Pune Camp Area?
              </h2>
              <ul className="common_ul">
                <li>
                  <span>
                    <strong>Expert Faculty:</strong> Specializing in Physics,
                    Chemistry, Mathematics & Biology.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Comprehensive MHT-CET Coverage:</strong> Aligned with
                    the latest syllabus and exam trends.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Small Batch Sizes:</strong> Personalized attention
                    and effective learning.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Regular Mock Tests:</strong> Detailed performance
                    analysis to build confidence.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Convenient Location:</strong> Serving students from{" "}
                    <strong>
                      Camp, Swargate, Fatima Nagar, Koregaon Park &
                      Mangalwar Peth.
                    </strong>
                  </span>
                </li>
              </ul>
              <p>
                ASQUARE Academy ensures a structured, result-oriented approach,
                empowering every student to achieve their best in CET.
              </p>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 img-col order-1 order-lg-2">
              <img className="common_image" src={image2} alt="" />
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
            <div className="col-md-12">
              <h3 className="common_title text-center">
                <span className="common_title_span">Key Features</span> ASQUARE
                Academy, Pune Camp
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
                    Limited batch sizes for focused teaching.
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={updated} alt="" />
                <div className="grid_content">
                  <h6 className="grid_item_title">
                    Updated CET-aligned study materials.
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={weekly_chapter} alt="" />
                <div className="grid_content">
                  <h6 className="grid_item_title">
                    Regular PTMs and progress tracking.
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={personalized} alt="" />
                <div className="grid_content">
                  <h6 className="grid_item_title">
                    Strategy workshops to enhance exam performance.
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={location} alt="" />
                <div className="grid_content">
                  <h6 className="grid_item_title">
                    Ideal for students from Camp, Swargate, Fatima Nagar,
                    Koregaon Park & Mangalwar Peth.
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Results */}
      <section className="leftright_section padd_bottom mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <h4 className="common_title">Results That Deliver Excellence</h4>
              <p>
                Students at <strong>ASQUARE Academy – Camp Area</strong>{" "}
                consistently achieve top-tier CET scores and secure admissions in
                leading engineering and pharmacy colleges across the region.
              </p>
              <p>
                Our performance-centric approach and structured curriculum
                ensure strong results year after year.
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
                <strong>
                  Daily interactive lectures, weekly chapter tests, and mock
                  CETs
                </strong>{" "}
                ensure conceptual clarity, exam readiness, and confidence.
              </p>
              <a href="/">
                <button className="button mt-3">Know More</button>
              </a>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">
                  Daily Interactive Lectures:
                </h6>
                <span>
                  Concept-based sessions supported with practice worksheets.
                </span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Weekly CET Tests:</h6>
                <span>
                  Chapter-wise and full-length CET mock exams for practice.
                </span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">
                  Personalized Doubt Sessions:
                </h6>
                <span>One-on-one clarification with expert faculty.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">
                  Parent–Teacher Meetings (PTMs):
                </h6>
                <span>
                  Periodic updates on student progress and performance reports.
                </span>
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
                MHT-CET Coaching in Pune Camp Area{" "}
                <span className="common_title_span">(FAQs)</span>
              </h5>
            </div>

            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="accordion accordion-flush" id="accordionLeft">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse1"
                    >
                      Who can enroll at ASQUARE Camp Area?
                    </button>
                  </h2>
                  <div
                    id="collapse1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionLeft"
                  >
                    <div className="accordion-body">
                      Students in Class XI, XII, and repeat-year aspirants from
                      Camp and nearby areas.
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
                    >
                      Which subjects are offered?
                    </button>
                  </h2>
                  <div
                    id="collapse2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionLeft"
                  >
                    <div className="accordion-body">
                      Physics, Chemistry, Mathematics (Engineering), and Biology
                      (Pharmacy).
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
                    >
                      Do mock tests form part of the curriculum?
                    </button>
                  </h2>
                  <div
                    id="collapse3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionLeft"
                  >
                    <div className="accordion-body">
                      Yes — weekly chapter tests and full-length CET mock exams
                      are included.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="accordion accordion-flush" id="accordionRight">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse4"
                    >
                      What batch types are available?
                    </button>
                  </h2>
                  <div
                    id="collapse4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionRight"
                  >
                    <div className="accordion-body">
                      <strong>
                        2-Year Integrated, 1-Year Target, Crash Course,
                      </strong>{" "}
                      and <strong>Repeater/Dropper</strong> programs.
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
                    >
                      Are batch sizes kept small?
                    </button>
                  </h2>
                  <div
                    id="collapse5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionRight"
                  >
                    <div className="accordion-body">
                      Yes — for enhanced focus and individualized mentoring.
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
                    >
                      Do parents receive performance updates?
                    </button>
                  </h2>
                  <div
                    id="collapse6"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionRight"
                  >
                    <div className="accordion-body">
                      Yes — through periodic PTMs and progress reports.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join ASQUARE Section */}
      <section className="contact_section mb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h5 className="common_title">
                Enroll Today at{" "}
                <span className="common_title_span">
                  ASQUARE Academy — Camp Area
                </span>
              </h5>
              <p>
                Elevate your CET preparation with expert instruction,
                concentrated learning, and proven results. Join{" "}
                <strong>ASQUARE Academy – Camp Area</strong> and pave your path
                to success!<br />
                <strong>
                  Ideal for students from Camp, Swargate, Fatima Nagar, Koregaon
                  Park & Mangalwar Peth.
                </strong>
              </p>
              <h4>
                Admissions Open – Limited Seats Available. Secure your place
                today!
              </h4>
              <div className="cta-button mt-3">
                <a href="/" className="btn">
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

export default MHTCamp;
