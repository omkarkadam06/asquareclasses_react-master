
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
import image1 from "../../Assets/locationPageImages/mht-cet/MH-CET page 26.jpeg";
import image2 from "../../Assets/locationPageImages/mht-cet/MH-CET page 2.jpeg";
import location from "../../Assets/locationPageImages/mht-cet/location.png";
import personalized from "../../Assets/locationPageImages/mht-cet/personalized.png";
import qualified from "../../Assets/locationPageImages/mht-cet/qualified.png";
import updated from "../../Assets/locationPageImages/mht-cet/updated.png";
import weekly_chapter from "../../Assets/locationPageImages/mht-cet/weekly_chapter.png";

const Reviews = React.lazy(() =>
  import("../../Components/Reviews/Reviews.jsx")
);

function MHTSwargate() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  return (
    <>
      <Helmet>
        <title>
         Best MHT-CET Coaching Classes in Swargate, Pune | ASQUARE Academy
        </title>
        <meta
          name="title"
          content="Best MHT-CET Coaching Classes in Swargate, Pune | ASQUARE Academy"
        />
        <meta
          name="description"
          content="Join ASQUARE Academy, the leading institute for MHT-CET coaching in Swargate Pune. Expert mentors, small batches, and mock tests for students from Sadashiv Peth, Parvati, Bibvewadi, and Gultekdi."
        />
        <meta
          name="keywords"
          content="MHT-CET Coaching in Swargate Pune,Best MHT-CET Classes in Swargate,Top CET Coaching Institute Swargate,MHT-CET Preparation in Swargate,ASQUARE Academy Swargate,"
        />
        <script type="application/ld+json">{`
        {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-swargate-pune#localbusiness",
      "name": "ASQUARE Academy - MHT-CET Coaching in Swargate Pune",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "url": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-swargate-pune",
      "telephone": "9766118877",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Swargate",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411042",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune"
      ],
      "description": "Best MHT-CET Coaching in Swargate Pune by ASQUARE Academy. Physics, Chemistry, Maths & Biology coaching with mock tests and online/offline batch options."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-swargate-pune#webpage",
      "url": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-swargate-pune",
      "name": "MHT-CET Coaching Classes in Swargate Pune | ASQUARE Academy",
      "description": "ASQUARE Academy offers the best MHT-CET Coaching in Swargate Pune with expert faculty, full-length mock tests, and flexible online/offline CET courses.",
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
      "@type": "EducationalOccupationalProgram",
      "name": "MHT-CET Coaching Program in Swargate Pune",
      "educationalCredentialAwarded": "CET Preparation Certificate",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "ASQUARE Academy",
        "url": "https://www.asquareclasses.com/"
      },
      "hasCourse": [
        {
          "@type": "Course",
          "name": "MHT-CET Physics, Chemistry & Mathematics (PCM)",
          "description": "Comprehensive MHT-CET coaching for Engineering aspirants with expert faculty and weekly mock tests."
        },
        {
          "@type": "Course",
          "name": "MHT-CET Biology (PCB)",
          "description": "Specialized Biology CET coaching for Pharmacy students with topic-wise and full-length mock exams."
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can join MHT-CET coaching at ASQUARE Swargate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students from Class XI, XII, and droppers preparing for Engineering or Pharmacy CET can join ASQUARE Swargate."
          }
        },
        {
          "@type": "Question",
          "name": "What subjects are covered in the MHT-CET program?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We teach Physics, Chemistry, Mathematics (for PCM) and Biology (for PCB) as per CET syllabus."
          }
        },
        {
          "@type": "Question",
          "name": "Are mock tests conducted regularly?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, weekly topic tests and full-length CET mock exams are part of all courses."
          }
        },
        {
          "@type": "Question",
          "name": "What are the available batch options?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer 2-year, 1-year, crash course, and dropper batches for MHT-CET aspirants."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer online CET classes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, both offline and online MHT-CET coaching options are available at ASQUARE Academy Swargate."
          }
        },
        {
          "@type": "Question",
          "name": "Which nearby areas are covered by ASQUARE Swargate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We serve students from Sadashiv Peth, Parvati, Sarasbaug, Gultekdi, Pune Station, Tilak Road, and Bibvewadi."
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
          "item": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-pune"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "MHT-CET Coaching in Swargate Pune",
          "item": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-swargate-pune"
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
              <img className="common_image" src={image1} alt="ASQUARE Swargate" />
            </div>
            <div className="col-lg-6 col-md-12 order-1 order-lg-2">
              <h1 className="common_title">
                Crack MHT-CET with Expert Coaching at{" "}
                <span className="common_title_span">ASQUARE Academy,</span>{" "}
                Swargate
              </h1>
              <p>
                Looking for the {" "}<strong> best MHT-CET coaching classes in Swargate, Pune? </strong> At
                <strong> ASQUARE Academy – Swargate,  </strong> we provide specialized training for{" "}
                <strong> Engineering (PCM) and Pharmacy (PCB) </strong>
                aspirants through concept-based teaching, regular assessments, and personalized mentorship.<br />
                Our Swargate centre is conveniently located and easily accessible for students from
                 <strong>
                    {" "}Sadashiv Peth, Parvati, Sarasbaug, Gultekdi, Pune Station, Tilak Road, and Bibvewadi,
                </strong>
                {" "}making it a leading destination for <strong> MHT-CET coaching in Central Pune. </strong>
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
                ASQUARE Academy for MHT-CET Coaching in Swargate?
              </h2>
              <ul className="common_ul">
                <li>
                  <strong>Expert Faculty:</strong> Highly experienced teachers for Physics, Chemistry, Maths & Biology.
                </li>
                <li>
                  <strong>Comprehensive Course Structure :</strong> Fully aligned with the latest MHT-CET exam pattern.
                </li>
                <li>
                  <strong>Small Batches:</strong> Focused mentoring and one-on-one attention.
                </li>
                <li>
                  <strong>Regular Testing & Analysis: </strong> Weekly topic tests and mock CET exams.
                </li>
                <li>
                  <strong>Integrated Study Plan:</strong> Preparation for Board Exams + CET for XI & XII students.
                </li>
              </ul>
              <p>
                ASQUARE Academy ensures every student gains strong concepts, exam confidence, and scoring accuracy.
              </p>
            </div>
            <div className="col-lg-6 col-md-12 img-col order-1 order-lg-2">
              <img className="common_image" src={image2} alt="Swargate classes" />
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
                ASQUARE Academy Swargate
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
                  Expert faculty with years of CET coaching experience.
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={updated} alt="" />
                <h6 className="grid_item_title">
                  Comprehensive study material and test series.
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={weekly_chapter} alt="" />
                <h6 className="grid_item_title">
                  Small batch sizes for personalized focus.
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={personalized} alt="" />
                <h6 className="grid_item_title">
                  Weekly performance reviews and doubt sessions.
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={location} alt="" />
                <h6 className="grid_item_title">
                 Convenient for students from <strong> Sadashiv Peth, Parvati, Sarasbaug, Gultekdi, Pune Station, Tilak Road, and Bibvewadi. </strong>
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
                ASQUARE Academy Swargate 
            </strong>
            {" "}have consistently achieved top MHT-CET ranks, earning admissions into prestigious colleges such as <strong> MHT-CET ranks, </strong> gaining admission into top institutes like
            <strong> COEP Pune, MIT-WPU, DY Patil College, VIT Pune, and Sinhgad Institute of Technology.</strong>
          </p>
          <p>
            Our success rate reflects our commitment to <strong> concept clarity, regular testing, and dedicated mentorship. </strong>
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
                 Our methodology ensures conceptual clarity, exam readiness, and confidence for MHT-CET success.
                </strong>{" "}
              </p>
              <a href="/">
                <button className="button mt-3">Know More</button>
              </a>
            </div>
            <div className="col-lg-6">
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Concept-Building Lectures:</h6>
                <span>Concept-based, interactive classroom sessions.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Daily Practice Papers (DPPs):</h6>
                <span>Daily Practice Papers (DPPs) for skill development and retention.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Weekly tests and mock CET exams:</h6>
                <span>Weekly tests and mock CET exams for performance evaluation.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Individual doubt-clearing sessions:</h6>
                <span>Individual doubt-clearing sessions with faculty.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Parent–Teacher Meetings (PTMs):</h6>
                <span>Parent–Teacher Meetings (PTMs) for regular performance discussions.</span>
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
                MHT-CET Coaching Institute in Swargate {" "}
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
                     Who can join MHT-CET coaching at ASQUARE Swargate?
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
                       Which nearby areas are covered by ASQUARE Swargate?
                    </button>
                  </h2>
                  <div
                    id="collapse5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionRight"
                  >
                    <div className="accordion-body">
                      Students from <strong> Sadashiv Peth, Parvati, Sarasbaug, Gultekdi, Pune Station, Tilak Road, and Bibvewadi  </strong> attend regularly.
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
              colleges across Maharashtra.
            </p> 
            <p>
                At <strong> ASQUARE Academy Swargate, </strong>our structured courses and expert faculty help 
            </p>
            <p>
                Students from <strong> Sadashiv Peth, Parvati, and Bibvewadi </strong> master fundamentals, enhance problem-solving skills, and build exam discipline.
            </p>
            <h4 className="common_title" style={{ color: "#05479b" }}>
              <strong>Subjects Covered</strong>
            </h4>
            <ul className="common_ul">
              <li className="mb-4">
                <span>
                  <strong>Physics:</strong> Conceptual learning with a focus on numerical problem-solving.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong>Chemistry:</strong> Full coverage of Physical, Organic, and Inorganic chemistry with CET-style questions.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong>Mathematics / Biology: </strong>
                  Separate modules for PCM (Engineering) and PCB (Pharmacy) with DPPs and topic-wise assignments.
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
                 In-depth concept-building and CET preparation.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    1-Year Target Batch (Class XII + CET):
                  </strong>{" "}
                 Fast-paced course focused on CET exam success.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    Crash Course (2-3 Months):
                  </strong>{" "}
                   Short-term revision and mock test series.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    Repeater / Dropper Batch:
                  </strong>{" "}
                  One-year advanced preparation for CET reattempt aspirants.
                </span>
              </li>
            </ul>
            <p>
             All batches include <strong> mock exams, mentor support, and performance tracking </strong>
             to ensure consistent progress.
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
                ASQUARE Academy Swargate Today
            </span>
          </h5>
          <p>
            Join {" "}
            <strong> ASQUARE Academy Swargate, </strong>{" "}
            the {" "}
            <strong> Best MHT-CET Coaching Institute in Swargate, Pune, </strong>
            and prepare for success with expert teachers, small batches, and regular assessments.<br/>
            With personalized guidance and a proven strategy, ASQUARE helps you achieve your dream MHT-CET score.
          </p>
          <p>
             Serving students from{" "}
            <strong>  Swargate, Sadashiv Peth, Parvati, Sarasbaug, Gultekdi, Pune Station, Tilak Road, and Bibvewadi. </strong>
          </p>
          <h4>
            <strong>
              Admissions Open – Enroll Now at ASQUARE Academy for Top-Quality MHT-CET Coaching in Pune!
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

export default MHTSwargate;
