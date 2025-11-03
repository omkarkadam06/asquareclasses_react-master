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
import image1 from "../../Assets/locationPageImages/mht-cet/MH-CET page 11.jpeg";
import image2 from "../../Assets/locationPageImages/mht-cet/MH-CET page 21.jpeg";
import location from "../../Assets/locationPageImages/mht-cet/location.png";
import personalized from "../../Assets/locationPageImages/mht-cet/personalized.png";
import qualified from "../../Assets/locationPageImages/mht-cet/qualified.png";
import updated from "../../Assets/locationPageImages/mht-cet/updated.png";
import weekly_chapter from "../../Assets/locationPageImages/mht-cet/weekly_chapter.png";

const Reviews = React.lazy(() =>
  import("../../Components/Reviews/Reviews.jsx")
);

function MHTDholePatil() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  return (
    <>
      <Helmet>
        <title>
         Best MHT-CET Coaching Classes in Dhole Patil Road, Pune | ASQUARE Academy
        </title>
        <meta
          name="title"
          content="Best MHT-CET Coaching Classes in Dhole Patil Road, Pune | ASQUARE Academy"
        />
        <meta
          name="description"
          content="Join ASQUARE Academy, the leading institute for MHT-CET coaching in Dhole Patil Road Pune. Expert faculty, small batches, and mock tests for students from Koregaon Park, Bund Garden, Camp, and Yerawada."
        />
        <meta
          name="keywords"
          content="MHT-CET Coaching in Dhole Patil Road Pune,Best MHT-CET Classes in Dhole Patil Road,Top CET Coaching Institute Dhole Patil Road,MHT-CET Preparation in Dhole Patil Road,ASQUARE Academy Dhole Patil Road"
        />
        <script type="application/ld+json">{`
        {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-dhole-patil-road-pune#localbusiness",
      "name": "ASQUARE Academy Dhole Patil Road",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "url": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-dhole-patil-road-pune",
      "telephone": "9766118877",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Dhole Patil Road",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411001",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "18.5308",
        "longitude": "73.8763"
      },
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune"
      ],
      "openingHours": "Mo-Su 08:00-20:00",
      "description": "Best MHT-CET Coaching Classes in Dhole Patil Road Pune offering expert faculty, concept clarity, mock tests, and both PCM & PCB batches."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-dhole-patil-road-pune#webpage",
      "url": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-dhole-patil-road-pune",
      "name": "MHT-CET Coaching in Dhole Patil Road Pune | ASQUARE Academy",
      "description": "ASQUARE Academy offers top MHT-CET Coaching in Dhole Patil Road Pune with PCM & PCB batches, mock tests, and online/offline options.",
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
      "@id": "https://www.asquareclasses.com/#organization",
      "name": "ASQUARE Academy",
      "url": "https://www.asquareclasses.com/",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune"
      ],
      "description": "ASQUARE Academy provides top-quality coaching for MHT-CET, NEET, and IIT-JEE in Pune with expert faculty and personalized learning."
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-dhole-patil-road-pune#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can join MHT-CET coaching at ASQUARE Dhole Patil Road?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students from Class XI, XII, and droppers preparing for Engineering or Pharmacy CET can join our MHT-CET coaching program."
          }
        },
        {
          "@type": "Question",
          "name": "What subjects are covered?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We cover Physics, Chemistry, Mathematics (for PCM) and Biology (for PCB) as part of the MHT-CET curriculum."
          }
        },
        {
          "@type": "Question",
          "name": "Are mock tests conducted regularly?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — weekly topic tests and full-length CET mock exams are conducted to evaluate performance and boost readiness."
          }
        },
        {
          "@type": "Question",
          "name": "What batch options are available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE offers 2-year, 1-year, crash course, and dropper batches designed for different academic needs."
          }
        },
        {
          "@type": "Question",
          "name": "Which nearby areas are covered by ASQUARE Dhole Patil Road?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students from Koregaon Park, Bund Garden, Pune Railway Station, Sangamwadi, Camp, Kalyani Nagar, and Yerawada attend regularly."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide online MHT-CET classes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, ASQUARE Academy offers both online and offline MHT-CET coaching for the convenience of all students."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-dhole-patil-road-pune#breadcrumbs",
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
          "name": "MHT-CET Coaching in Dhole Patil Road Pune"
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
              <img className="common_image" src={image1} alt="ASQUARE Dhole Patil Road" />
            </div>
            <div className="col-lg-6 col-md-12 order-1 order-lg-2">
              <h1 className="common_title">
                Crack MHT-CET with Expert Guidance{" "}
                <span className="common_title_span">ASQUARE Academy,</span>{" "}
                Dhole Patil Road
              </h1>
              <p>
                Looking for the  {" "}<strong> best MHT-CET coaching classes in Dhole Patil Road, Pune? </strong> At
                <strong> ASQUARE Academy, </strong>we help students excel in {" "}
                <strong> Engineering (PCM) and Pharmacy (PCB)  </strong> 
                streams through a structured, concept-driven approach, expert mentorship, and consistent practice sessions.<br/>
                Our Dhole Patil Road centre is conveniently located for students from{" "}
                 <strong>
                    Koregaon Park, Bund Garden, Pune Railway Station, Sangamwadi, Camp, Kalyani Nagar, and Yerawada{" "}
                </strong>
                making it one of the most preferred institutes for <strong>MHT-CET coaching in Central Pune.</strong>
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
                ASQUARE Academy for MHT-CET Coaching in Dhole Patil Road?
              </h2>
              <ul className="common_ul">
                <li>
                  <strong>Experienced Faculty:</strong> Subject experts for Physics, Chemistry, Maths, and Biology.
                </li>
                <li>
                  <strong>Comprehensive Syllabus :</strong> Based on the <strong> latest MHT-CET exam pattern </strong>and syllabus.
                </li>
                <li>
                  <strong>Small Batches:</strong> Ensures personalized mentoring and focused learning.
                </li>
                <li>
                  <strong>Regular Mock Tests: </strong> Weekly topic-wise and full-length CET tests for consistent evaluation.
                </li>
                <li>
                  <strong>Integrated Preparation:</strong> Balanced learning for both Board Exams + CET.
                </li>
              </ul>
              <p>
                At ASQUARE, our goal is to develop conceptual clarity, exam strategy, and problem-solving accuracy — helping every student achieve success.
              </p>
            </div>
            <div className="col-lg-6 col-md-12 img-col order-1 order-lg-2">
              <img className="common_image" src={image2} alt="Dhole Patil Road classes" />
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
                ASQUARE Academy Dhole Patil Road
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
                  Expert mentors and dedicated faculty.
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
                  Small batches for personalized attention.
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={personalized} alt="" />
                <h6 className="grid_item_title">
                  CET-oriented notes and study material.
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={location} alt="" />
                <h6 className="grid_item_title">
                 Easily accessible for students from <strong>  Koregaon Park, Bund Garden, Pune Railway Station, Sangamwadi, Camp, Kalyani Nagar, and Yerawada. </strong>
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
                ASQUARE Academy Dhole Patil Road {" "}
            </strong>
            have consistently ranked among the top scorers in MHT-CET, securing admission in leading colleges like {" "}
            <strong>
                COEP Pune, MIT-WPU, VIT Pune, DY Patil College, and Sinhgad Institute of Technology.
            </strong>
          </p>
          <p>
            Our students’ success stands as a testament to our focus on  <strong> concept clarity, consistency, and expert mentorship.</strong>
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
                  Our teaching system ensures conceptual strength, regular evaluation, and complete CET exam readiness.
                </strong>{" "}
              </p>
              <a href="/">
                <button className="button mt-3">Know More</button>
              </a>
            </div>
            <div className="col-lg-6">
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Concept-Building Lectures:</h6>
                <span>Concept-based classroom teaching with practical examples.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Assignments & Practice:</h6>
                <span>Daily Practice Papers (DPPs) for reinforcement.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Mock Tests:</h6>
                <span>Weekly topic tests and mock CET exams for exam readiness.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Progress Reports:</h6>
                <span>Personalized doubt-solving sessions with faculty.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Extra Activites:</h6>
                <span>Regular Parent–Teacher Meetings (PTMs) for student progress tracking.</span>
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
                MHT-CET Coaching Institute in Dhole Patil Road {" "}
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
                     Who can join MHT-CET coaching at ASQUARE Dhole Patil Road?
                    </button>
                  </h2>
                  <div
                    id="collapse1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionLeft"
                  >
                    <div className="accordion-body">
                      Students from Class XI, XII, and droppers preparing for Engineering or Pharmacy CET.
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
                      What subjects are covered?
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
                      Students from <strong> Koregaon Park, Bund Garden, Pune Railway Station, Sangamwadi, Camp, Kalyani Nagar, and Yerawada </strong>attend regularly.
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
              The <strong>MHT-CET (Maharashtra Common Entrance Test)</strong>  is a state-level entrance exam for <strong> Engineering, Pharmacy, and Allied Health Science admissions.</strong>
            </p> 
            <p>
                At <strong>  ASQUARE Academy Dhole Patil Road, </strong> our CET programs combine theory, application, and exam-oriented problem-solving to help students from <strong>Koregaon Park, Bund Garden, and Camp </strong> perform at their best.
            </p>
            <p>Each subject is taught with attention to the exam’s pattern, helping students tackle both theory and application-based questions effectively.</p>
            <h4 className="common_title" style={{ color: "#05479b" }}>
              <strong>Subjects Covered</strong>
            </h4>
            <ul className="common_ul">
              <li className="mb-4">
                <span>
                  <strong>Physics:</strong> Conceptual clarity with derivations, numericals, and practice papers.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong>Chemistry:</strong> Comprehensive coverage of Physical, Organic, and Inorganic chemistry.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong>Mathematics / Biology: </strong>
                  Tailored modules for PCM (Engineering) and PCB (Pharmacy) streams, including assignments and MCQ practice.
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
                Strong foundation and advanced CET preparation.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    1-Year Target Batch (Class XII + CET):
                  </strong>{" "}
                  Intensive training focused on test performance.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    Crash Course (2-3 Months):
                  </strong>{" "}
                  Compact course for rapid revision and mock test practice.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    Repeater / Dropper Batch:
                  </strong>{" "}
                  One-year in-depth program for CET retakers.
                </span>
              </li>
            </ul>
            <p>
             All batches include <strong> weekly assessments, mentor feedback, and performance tracking.</strong>
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
                ASQUARE Academy Dhole Patil Road Today
            </span>
          </h5>
          <p>
            Join {" "}
            <strong> ASQUARE Academy Dhole Patil Road, </strong>{" "}
            Boost your CET preparation with the {" "}
            <strong>
                Best MHT-CET Coaching Institute in Dhole Patil Road, Pune,{" "}
            </strong>
            and prepare for success with expert faculty, small batches, and regular testing.
          </p>
          <p>
            With structured lessons and personal mentorship, ASQUARE helps you achieve your target CET score and career goals.
          </p>
          <p>
            Serving students from{" "}
            <strong>Dhole Patil Road, Koregaon Park, Bund Garden, Pune Railway Station, Sangamwadi, Camp, Kalyani Nagar, and Yerawada.</strong>
          </p>
          <h4>
            <strong>
              Admissions Open – Enroll Now at ASQUARE Academy for MHT-CET Coaching in Central Pune!
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

export default MHTDholePatil;
