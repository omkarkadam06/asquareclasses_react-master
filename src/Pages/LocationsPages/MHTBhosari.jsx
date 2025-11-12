import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import Loading from "../Loading.jsx";
import MobileForm from "../../Components/Mobileform/MobileForm.jsx";
import "../locationspage.css";
import locationBGImage from "../../Assets/Asqare Banner - JEE, NEET, Foundation CET/CET banner/mh-cet slider.jpeg";
import MobileBGImage from "../../Assets/Asqare Banner - JEE, NEET, Foundation CET/CET banner/mh-cet slider mob.jpeg";
import MethodologyBg from "../../Assets/locationPageImages/teaching-methodology.jpeg";
import image1 from "../../Assets/locationPageImages/mht-cet/MH-CET page 7.jpeg";
import image2 from "../../Assets/locationPageImages/mht-cet/MH-CET page 1.jpeg";
import location from "../../Assets/locationPageImages/mht-cet/location.png";
import personalized from "../../Assets/locationPageImages/mht-cet/personalized.png";
import qualified from "../../Assets/locationPageImages/mht-cet/qualified.png";
import updated from "../../Assets/locationPageImages/mht-cet/updated.png";
import weekly_chapter from "../../Assets/locationPageImages/mht-cet/weekly_chapter.png";

const Reviews = React.lazy(() =>
  import("../../Components/Reviews/Reviews.jsx")
);

function MHTBhosari() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  return (
    <>
      <Helmet>
        <title>
          MHT-CET Coaching Classes in Bhosari Pune | Best CET Institute & Classes - ASQUARE Academy
        </title>
        <meta
          name="title"
          content="MHT-CET Coaching Classes in Bhosari Pune | Best CET Classes & Institute - ASQUARE Academy"
        />
        <meta
          name="description"
          content="Join ASQUARE Academy for the Best MHT-CET Coaching in Bhosari Pune. Expert faculty, mock tests, and result-driven programs for Engineering & Pharmacy aspirants. Batches near Akurdi, Ravet, and Bhakti Shakti Chowk."
        />
        <meta
          name="keywords"
          content="Join MHT-CET coaching classes in Bhosari Pune for Engineering & Pharmacy aspirants. Weekly mock tests, structured programs, and flexible online/offline batches for XI, XII & dropper students - ASQUARE Academy."
        />
        <script type="application/ld+json">{`
        {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-bhosari-pune",
      "url": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-bhosari-pune",
      "name": "MHT-CET Coaching Classes in Bhosari Pune | Best CET Institute & Classes – ASQUARE Academy",
      "description": "Join MHT-CET coaching classes in Bhosari Pune for Engineering & Pharmacy aspirants. Weekly mock tests, structured programs, and flexible online/offline batches for XI, XII & dropper students – ASQUARE Academy.",
      "inLanguage": "en",
      "publisher": {
        "@type": "Organization",
        "name": "ASQUARE Academy",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png"
        }
      },
      "breadcrumb": {
        "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-bhosari-pune#breadcrumb"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-bhosari-pune#breadcrumb",
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
          "name": "MHT-CET Coaching Classes Bhosari Pune",
          "item": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-bhosari-pune"
        }
      ]
    },
    {
      "@type": "EducationalOrganization",
      "name": "MHT-CET Coaching Classes Bhosari",
      "url": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-bhosari-pune",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "description": "MHT-CET coaching classes in Bhosari Pune provide mock tests, structured programs, and flexible online/offline batches for Engineering and Pharmacy aspirants.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bhosari",
        "addressRegion": "Pune",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9766118877",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": "English"
      }
    },
    {
      "@type": "LocalBusiness",
      "name": "MHT-CET Coaching Classes in Bhosari Pune",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-bhosari-pune",
      "url": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-bhosari-pune",
      "telephone": "+91-9766118877",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Bhosari, Pune, Maharashtra",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411039",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "18.6250",
        "longitude": "73.8000"
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
          "name": "Who can join MHT-CET coaching classes at Bhosari?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students from Class XI, XII, or dropper batches preparing for CET can join MHT-CET coaching classes at Bhosari."
          }
        },
        {
          "@type": "Question",
          "name": "What subjects are covered in the CET preparation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Physics, Chemistry, Mathematics (PCM) for engineering and Biology (PCB) for pharmacy aspirants are covered."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide mock tests and practice papers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, weekly mock tests, chapter-wise assignments, and full-length exams are included."
          }
        },
        {
          "@type": "Question",
          "name": "What batches are available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "2-Year Integrated, 1-Year Course, Crash Course, and Repeater/Dropper Batch are available."
          }
        },
        {
          "@type": "Question",
          "name": "Do parents get updates about student performance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, progress reports and parent-teacher meetings are conducted regularly."
          }
        },
        {
          "@type": "Question",
          "name": "Where is the Bhosari centre located?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE Academy Bhosari is easily accessible from Moshi, Chikhali, Talawade, Chakan, Alandi, Dighi, Pimpri, PCMC, and surrounding areas. Other branches include Vishrantwadi, Wakad, Pimple Saudagar, Kasarwadi, Chinchwad, Nigdi, Hadapsar, Alandi, and Pimple Nilakh."
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
                Build Your Future with Expert Guidance at{" "}
                <span className="common_title_span">ASQUARE Academy ,</span>{" "}
                Bhosari.
              </h1>
              <p>
                Looking for the{" "}
                <strong>best MHT-CET coaching classes in Bhosari, Pune (PCMC)?</strong>{" "}
                At <strong>ASQUARE Academy </strong>our Bhosari branch offers structured, result-driven MHT-CET training led by expert faculty. With personalized guidance, regular mock tests, and proven strategies.
              </p>
              <p>
                We prepare students from{" "}
                <strong>
                  Bhosari, Moshi, Chakan, Talawade, Alandi, Dighi, Charholi, Pimpri, Chikhali, and entire PCMC region{" "}
                </strong>
                for admission into top engineering and pharmacy colleges in Maharashtra.
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
                ASQUARE Academy for MHT-CET in Bhosari?
              </h2>
              <ul className="common_ul">
                <li>
                  <span>
                    <strong>Expert CET Faculty:</strong> Highly experienced mentors for CET, JEE, and NEET.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Complete CET Syllabus:</strong> Physics, Chemistry, and Mathematics/Biology taught per the latest MHT-CET exam pattern.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Personalized Learning:</strong> Small batches at our Bhosari centre for focused attention.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Weekly Mock Tests & Analysis:</strong> Regular assessments with detailed performance reviews.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Motivational & Career Guidance: </strong> Confidence-building workshops and exam strategies.
                  </span>
                </li>
              </ul>
              <p>
                At ASQUARE, we combine conceptual learning with regular practice
                to ensure every student achieves CET success confidently.
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
                ASQUARE Academy, Bhosari:
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
                    Limited batch size for personal mentoring.
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={updated} alt="" />
                <div className="grid_content">
                  <h6 className="grid_item_title">
                    Updated CET syllabus study material.
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={weekly_chapter} alt="" />
                <div className="grid_content">
                  <h6 className="grid_item_title">
                    Parent-teacher meetings for progress tracking.
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={personalized} alt="" />
                <div className="grid_content">
                  <h6 className="grid_item_title">
                    Time management & exam strategy workshops.
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
                      Bhosari, Moshi, Chikhali, Chakan, Talawade, Dighi, Alandi, Pimpri, and PCMC.
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
              <h4 className="common_title">Results That Speak </h4>
              <strong> ASQUARE Academy Bhosari </strong>has a strong track record of success, with students consistently securing seats in
              <strong>
                {" "}
                Top engineering and pharmacy colleges across Maharashtra.{" "}
              </strong>
              <p className="pt-3">
                This makes us one of the <strong>best MHT-CET coaching institutes in Bhosari, Moshi, and nearby PCMC areas.</strong>
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
              <a href="/">
                <button class="button mt-3">Know More</button>
              </a>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Concept-Focused Learning:</h6>
                <span>Daily lectures for strong concept-building.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">
                  Daily Practice Papers (DPPs):
                </h6>
                <span>
                  Chapter-wise assignments for rigorous practice.
                </span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Weekly Mock Tests:</h6>
                <span>Topic-wise and full-length mock tests.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">
                  Interactive Doubt-Solving:
                </h6>
                <span>One-to-one doubt-solving sessions.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">
                  Parent-Teacher Meetings (PTMs):
                </h6>
                <span>
                  Parent-teacher performance updates.
                </span>
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
                MHT-CET Coaching Institute in Bhosari{" "}
                <span className="common_title_span">(FAQs)</span>
              </h5>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="accordion accordion-flush" id="accordionFlushLeft">
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
                      Who can join MHT-CET coaching at ASQUARE Academy Bhosari?
                    </button>
                  </h2>
                  <div
                    id="collapse1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionLeft"
                  >
                    <div className="accordion-body">
                      Students from Class XI, XII, or dropper batches preparing for CET.
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
                      What subjects are covered in the CET preparation?
                    </button>
                  </h2>
                  <div
                    id="collapse2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionLeft"
                  >
                    <div className="accordion-body">
                      Physics, Chemistry, Mathematics (PCM) for engineering and Biology (PCB) for pharmacy aspirants.
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
                      Do you provide mock tests and practice papers?
                    </button>
                  </h2>
                  <div
                    id="collapse3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionLeft"
                  >
                    <div className="accordion-body">
                      Yes, weekly mock tests, chapter-wise assignments, and full-length exams are included.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="accordion accordion-flush" id="accordionFlushRight">
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
                      and
                      <strong> repeater batches.</strong>
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
                      Where is the Bhosari centre located?
                    </button>
                  </h2>
                  <div
                    id="collapse4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionRight"
                  >
                    <div className="accordion-body">
                      ASQUARE Academy Bhosari, easily accessible from {" "}
                      <strong>
                        Moshi, Chikhali, Talawade, Chakan, Alandi, Dighi, Pimpri, PCMC, and surrounding areas.
                      </strong>{" "}
                      Other branches include{" "}
                      <strong>
                        Vishrantwadi, Wakad, Pimple Saudagar, Kasarwadi, Chinchwad, Nigdi, Hadapsar, Alandi, and Pimple Nilakh.
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
                      Do parents get updates about student performance?
                    </button>
                  </h2>
                  <div
                    id="collapse5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionRight"
                  >
                    <div className="accordion-body">
                      Yes, progress reports and parent-teacher meetings are conducted regularly.
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
              The <strong>MHT-CET (Maharashtra Common Entrance Test)</strong> is the gateway to{" "}
              <strong>Engineering, Pharmacy, and professional courses in Maharashtra.</strong>{" "}
              With rising competition, joining a trusted
              <strong> MHT-CET coaching institute in Bhosari</strong> is essential.
            </p>
            <p>
              At <strong>ASQUARE Academy Bhosari, </strong>
              our CET program builds strong fundamentals, enhances problem-solving skills, and prepares students through consistent exam-oriented practice.
            </p>
            <h4 className="common_title" style={{ color: "#05479b" }}>
              <strong>Subjects Covered</strong>
            </h4>
            <ul className="common_ul">
              <li className="mb-4">
                <span>
                  <strong>Physics:</strong> Conceptual clarity with application-based numericals.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong>Chemistry:</strong> Physical, Organic & Inorganic Chemistry with practice-based sessions.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong>Mathematics / Biology: </strong>
                  PCM for engineering aspirants, PCB for pharmacy aspirants.
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
                  Boards + CET preparation for early starters.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    1-Year Target Batch (Class XII + CET):
                  </strong>{" "}
                  Comprehensive CET coaching aligned with Class XII.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    Crash Course (2-3 Months):
                  </strong>{" "}
                  2-3 months of intensive CET revision.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    Repeater / Dropper Batch:
                  </strong>{" "}
                  1-year focused CET coaching for repeaters
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
                 ASQUARE Academy Bhosari Today
                </span>
              </h5>
              <p>
                Take the first step towards success with the leading 
                <strong> MHT-CET coaching classes in Bhosari, Pune (PCMC). </strong> 
                With expert teachers, structured preparation, and proven results,{" "}
                <strong>
                  ASQUARE Academy{" "}
                </strong>
                is your trusted partner in CET success.
              </p>
              <h4>
                Limited seats available - Enrol now!
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

export default MHTBhosari;
