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
import image1 from "../../Assets/locationPageImages/mht-cet/MH-CET page 2.jpeg";
import image2 from "../../Assets/locationPageImages/mht-cet/MH-CET page 4.jpeg";
import location from "../../Assets/locationPageImages/mht-cet/location.png";
import personalized from "../../Assets/locationPageImages/mht-cet/personalized.png";
import qualified from "../../Assets/locationPageImages/mht-cet/qualified.png";
import updated from "../../Assets/locationPageImages/mht-cet/updated.png";
import weekly_chapter from "../../Assets/locationPageImages/mht-cet/weekly_chapter.png";

const Reviews = React.lazy(() =>
  import("../../Components/Reviews/Reviews.jsx")
);

function MHTHadapsar() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  return (
    <>
      <Helmet>
        <title>
          Best MHT-CET Coaching Classes in Hadapsar Pune | ASQUARE Academy
        </title>
        <meta
          name="title"
          content="Best MHT-CET Coaching Classes in Hadapsar Pune | ASQUARE Academy"
        />
        <meta
          name="description"
          content="Join the Best MHT-CET Coaching in Hadapsar Pune at ASQUARE Academy. Expert faculty, mock tests, and flexible batches for Engineering &amp; Pharmacy aspirants."
        />
        <meta
          name="keywords"
          content="MHT-CET Coaching in Hadapsar Pune, Best MHT-CET Classes in Hadapsar, Top CET Coaching Institute Hadapsar, MHT-CET Preparation in Hadapsar, ASQUARE Academy Hadapsar, MHT-CET Coaching near Magarpatta, CET Classes near Sasane Nagar, Engineering CET Coaching Hadapsar Pune, Pharmacy CET Coaching Hadapsar Pune, Top CET Institute in East Pune, MHT-CET Coaching near Handewadi, CET Classes near Mohammadwadi, Best CET Coaching near Amanora Park Town, MHT-CET Classes in Kalepadal"
        />
        <script type="application/ld+json">{`
        {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-hadapsar-pune",
      "url": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-hadapsar-pune",
      "name": "Best MHT-CET Coaching Classes in Hadapsar Pune | ASQUARE Academy",
      "description": "Join the Best MHT-CET Coaching in Hadapsar Pune at ASQUARE Academy. Expert faculty, mock tests, and flexible batches for Engineering & Pharmacy aspirants.",
      "inLanguage": "en",
      "publisher": {
        "@type": "Organization",
        "name": "ASQUARE Academy",
        "url": "https://www.asquareclasses.com/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
          "width": 250,
          "height": 70
        }
      },
      "breadcrumb": {
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
            "name": "Courses",
            "item": "https://www.asquareclasses.com/courses/"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "MHT-CET Coaching Classes in Hadapsar Pune",
            "item": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-hadapsar-pune"
          }
        ]
      }
    },
    {
      "@type": "EducationalOrganization",
      "name": "ASQUARE Academy",
      "url": "https://www.asquareclasses.com/",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "description": "ASQUARE Academy offers expert coaching for MHT-CET, IIT JEE, and NEET in Hadapsar Pune. Learn from top faculty with structured programs and consistent results.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Hadapsar, Pune, Maharashtra",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411028",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9156004396",
        "contactType": "Customer Support",
        "availableLanguage": ["English", "Hindi", "Marathi"]
      },
      "sameAs": [
        "https://www.facebook.com/asquareclasses/",
        "https://www.instagram.com/asquareclasses/"
      ]
    },
    {
      "@type": "LocalBusiness",
      "name": "ASQUARE Academy - MHT-CET Coaching in Hadapsar Pune",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-hadapsar-pune",
      "url": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-hadapsar-pune",
      "telephone": "+91-9156004396",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Hadapsar, Pune, Maharashtra",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411028",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "18.5006",
        "longitude": "73.9347"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "08:00",
          "closes": "20:00"
        }
      ],
      "sameAs": [
        "https://www.facebook.com/asquareclasses/",
        "https://www.instagram.com/asquareclasses/"
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can join MHT-CET coaching at ASQUARE Hadapsar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students from Class XI, Class XII, and drop-year aspirants preparing for Engineering or Pharmacy entrance exams can join MHT-CET coaching at ASQUARE Hadapsar."
          }
        },
        {
          "@type": "Question",
          "name": "What subjects are covered in the program?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Subjects include Physics, Chemistry, and Mathematics for Engineering aspirants, and Biology for Pharmacy aspirants."
          }
        },
        {
          "@type": "Question",
          "name": "Are mock tests and practice sessions included?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — weekly topic tests and full-length MHT-CET mock exams are part of every course to strengthen preparation."
          }
        },
        {
          "@type": "Question",
          "name": "What batch options are available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer 2-year, 1-year, crash course, and repeater batches to suit different student needs."
          }
        },
        {
          "@type": "Question",
          "name": "How is student performance tracked?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Performance is tracked through weekly tests, PTMs, and personalized mentor progress reports."
          }
        },
        {
          "@type": "Question",
          "name": "Which nearby areas are covered by the Hadapsar branch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students from Sasane Nagar, Magarpatta City, Handewadi, Kalepadal, Mohammadwadi, Amanora Park Town, and Mundhwa attend regularly at our Hadapsar branch."
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
                Crack MHT-CET with Expert Guidance at <span className="common_title_span">ASQUARE Academy,</span> Hadapsar.
              </h1>
              <p>
                Looking for the{" "}
                <strong>best MHT-CET coaching classes in Hadapsar, Pune?</strong>{" "}
                At <strong>ASQUARE Academy </strong> we help students prepare effectively for <strong>Engineering (PCM)</strong> and{" "}
                <strong>Pharmacy (PCB)</strong> streams through conceptual clarity, practice-oriented learning, and performance tracking.
              </p>
              <p>
                Our Hadapsar branch attracts students from {" "}
                <strong>
                  Sasane Nagar, Magarpatta City, Handewadi, Kalepadal, Mohammadwadi, Amanora Park Town, and Mundhwa, {" "}
                </strong>
                making it the preferred destination for <strong>CET coaching in East Pune.</strong>
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
                ASQUARE Academy for MHT-CET in Hadapsar?
              </h2>
              <ul className="common_ul">
                <li>
                  <span>
                    <strong>Expert Faculty:</strong> Experienced teachers specializing in Physics, Chemistry, Maths &amp; Biology.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Comprehensive Curriculum:</strong> Based on the latest <strong>MHT-CET exam pattern and syllabus.</strong>
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Small Batch Sizes:</strong> Personalized mentoring and focused attention for every student.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Regular Mock Tests:</strong> Evaluate performance, speed, and accuracy weekly.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Integrated Learning: </strong> Simultaneous preparation for <strong>Board Exams + MHT-CET.</strong>
                  </span>
                </li>
              </ul>
              <p>
                ASQUARE ensures every student develops the right balance of theory, application, and test readiness for CET success.
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
                ASQUARE Academy, Hadapsar:
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
                    Dedicated faculty for each subject.
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={updated} alt="" />
                <div className="grid_content">
                  <h6 className="grid_item_title">
                    Personalized mentorship in small batches.
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={weekly_chapter} alt="" />
                <div className="grid_content">
                  <h6 className="grid_item_title">
                    Weekly progress evaluation and feedback.
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={personalized} alt="" />
                <div className="grid_content">
                  <h6 className="grid_item_title">
                    CET-specific mock test and performance tracking system.
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
                      Sasane Nagar, Magarpatta City, Handewadi, Kalepadal, Mohammadwadi, Amanora Park Town, and Mundhwa.
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
              Students from
              <strong> ASQUARE Academy Hadapsar </strong>consistently rank among top MHT-CET scorers and secure admissions into reputed institutes like
              <strong> COEP Pune, MIT-WPU, DY Patil College, VIT Pune, and Sinhgad Institute of Technology. </strong>
              <p className="pt-3">
                Our consistent track record comes from our commitment to academic excellence and strong mentoring.
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
                Our systematic approach guarantees steady academic progress and real exam confidence.
              </p>
              <a href="/">
                <button class="button mt-3">Know More</button>
              </a>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Concept-Focused Learning:</h6>
                <span>Strong conceptual base with simplified explanations.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">
                  Daily Practice Papers (DPPs):
                </h6>
                <span>Regular exercises for concept retention.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">
                  Weekly Mock Tests:
                </h6>
                <span>Evaluate understanding and track individual progress.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Interactive Doubt-Solving:</h6>
                <span>Ensures complete clarity of difficult topics.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">
                  Parent-Teacher Meetings (PTMs):
                </h6>
                <span>Continuous updates on performance and development.</span>
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
                MHT-CET Coaching Institute in Hadapsar, Pune{" "}
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
                      Who can join MHT-CET coaching at ASQUARE Hadapsar?
                    </button>
                  </h2>
                  <div
                    id="collapse1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionLeft"
                  >
                    <div className="accordion-body">
                      Students from Class XI, Class XII, and drop-year aspirants preparing for Engineering or Pharmacy entrance exams.
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
                      What subjects are covered in the program?
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
                      Are mock tests and practice sessions included?
                    </button>
                  </h2>
                  <div
                    id="collapse3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionLeft"
                  >
                    <div className="accordion-body">
                      Yes — weekly topic tests and full-length MHT-CET mock exams are part of every course.
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
                      We offer {" "}
                      <strong>
                        2-year, 1-year, crash course,
                      </strong>{" "}
                      and
                      <strong> repeater batches</strong>
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
                      Which nearby areas are covered by the Hadapsar branch?
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
                       Sasane Nagar, Magarpatta City, Handewadi, Kalepadal, Mohammadwadi, Amanora Park Town, and Mundhwa
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
                      How is student performance tracked?
                    </button>
                  </h2>
                  <div
                    id="collapse5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionRight"
                  >
                    <div className="accordion-body">
                     Through weekly tests, PTMs, and personalized mentor reports.
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
              The <strong>MHT-CET (Maharashtra Common Entrance Test)</strong> is the key entrance exam for admission into{" "}
              <strong>
                Engineering, Pharmacy, and Allied Health Science
              </strong>{" "}
              programs across Maharashtra.
            </p>
            <p>
              At <strong>ASQUARE Academy Hadapsar,</strong>
              we combine classroom teaching, regular assessments, and analytical test discussions to build students' confidence.
            </p>
            <p>
              Students from{" "}
              <strong>
                Sasane Nagar, Magarpatta City, and Mohammadwadi
              </strong>{" "}
              choose ASQUARE for its proven success record and top-tier mentorship.
            </p>
            <h4 className="common_title" style={{ color: "#05479b" }}>
              <strong>Subjects Covered</strong>
            </h4>
            <ul className="common_ul">
              <li className='mb-4'>
                <span>
                  <strong>Physics:</strong> Conceptual clarity through interactive teaching and problem-solving.
                </span>
              </li>
              <li className='mb-4'>
                <span>
                  <strong>Chemistry:</strong> In-depth coverage of Physical, Organic, and Inorganic Chemistry with CET-focused MCQs.
                </span>
              </li>
              <li className='mb-4'>
                <span>
                  <strong>Mathematics / Biology: </strong>
                  Separate programs for
                  <strong> PCM (Engineering) and PCB (Pharmacy)</strong>{" "}
                  streams with topic-wise practice sheets and assignments.
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
                  Foundation to advanced-level preparation.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    1-Year Target Batch (Class XII + CET):
                  </strong>{" "}
                  Fast-track program for focused CET success.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    Crash Course (2-3 Months):
                  </strong>{" "}
                   Short-term program for revision, mock tests, and quick results.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    Repeater / Dropper Batch:
                  </strong>{" "}
                  One-year full preparation for CET retakers.
                </span>
              </li>
            </ul>
            <p>
              Each batch includes {" "}
              <strong>
                weekly topic tests, mock CET exams, and mentor feedback
              </strong>{" "}
              for ongoing improvement.
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
                ASQUARE Academy — Hadapsar, Pune
                </span>
              </h5>
              <p>
                Join <strong>ASQUARE Academy, </strong> the <strong>Best MHT-CET Coaching Institute in Hadapsar, Pune, </strong> 
                and prepare under expert guidance with structured lessons and mock tests.
              </p>
              <p>
                Our focused approach helps students achieve top CET scores and secure admission to the best colleges in Maharashtra.
              </p>
              <p>
                Serving students from
                <strong>
                  {" "}
                  Hadapsar, Sasane Nagar, Magarpatta City, Handewadi, Kalepadal, Mohammadwadi, Amanora Park Town, and Mundhwa.
                </strong>
              </p>
              <h4>Admissions Open - Enroll Today and Start Your MHT-CET Success Journey with ASQUARE!</h4>
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

export default MHTHadapsar;
