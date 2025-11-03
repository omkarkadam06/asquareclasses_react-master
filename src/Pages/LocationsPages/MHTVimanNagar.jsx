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
import image1 from "../../Assets/locationPageImages/mht-cet/MH-CET page 7.jpeg";
import image2 from "../../Assets/locationPageImages/mht-cet/MH-CET page 5.jpeg";
import location from "../../Assets/locationPageImages/mht-cet/location.png";
import personalized from "../../Assets/locationPageImages/mht-cet/personalized.png";
import qualified from "../../Assets/locationPageImages/mht-cet/qualified.png";
import updated from "../../Assets/locationPageImages/mht-cet/updated.png";
import weekly_chapter from "../../Assets/locationPageImages/mht-cet/weekly_chapter.png";

const Reviews = React.lazy(() =>
  import("../../Components/Reviews/Reviews.jsx")
);

function MHTVimanNagar() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  return (
    <>
      <Helmet>
        <title>
          MHT-CET Coaching and Classes in Viman Nagar Pune | ASQUARE Academy
        </title>
        <meta
          name="title"
            content="MHT-CET Coaching & Classes in Viman Nagar Pune | ASQUARE Academy"
            />
        <meta
          name="description"
          content="Join the best MHT-CET coaching and classes in Viman Nagar, Pune with expert faculty, personalized guidance, and full syllabus coverage at ASQUARE Academy near Kalyani Nagar."
        />
        <meta
          name="keywords"
          content="MHT-CET Coaching in Viman Nagar Pune,Best MHT-CET Classes in Viman Nagar,Top CET Coaching Institute Viman Nagar,MHT-CET Preparation in Viman Nagar,ASQUARE Academy Viman Nagar,MHT-CET Coaching near Kalyani Nagar,CET Classes near Yerawada,Engineering CET Coaching Viman Nagar Pune,Pharmacy CET Coaching Viman Nagar Pune,Top CET Institute in East Pune"
        />
        <script type="application/ld+json">{`
        {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-viman-nagar-pune",
      "url": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-viman-nagar-pune",
      "name": "MHT-CET Coaching Classes Institute in Viman Nagar Pune | ASQUARE Academy",
      "description": "Join MHT-CET Coaching Classes in Viman Nagar Pune for Engineering and Pharmacy aspirants. Expert faculty, small batches, mock tests, and personalized mentoring.",
      "inLanguage": "en",
      "publisher": {
        "@type": "EducationalOrganization",
        "name": "ASQUARE Academy",
        "url": "https://www.asquareclasses.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png"
        }
      },
      "breadcrumb": {
        "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-viman-nagar-pune#breadcrumb"
      },
      "mainEntity": {
        "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-viman-nagar-pune#faq"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-viman-nagar-pune#breadcrumb",
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
          "name": "MHT-CET Coaching Classes in Viman Nagar Pune",
          "item": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-viman-nagar-pune"
        }
      ]
    },
    {
      "@type": "EducationalOrganization",
      "@id": "https://www.asquareclasses.com#organization",
      "name": "ASQUARE Academy",
      "url": "https://www.asquareclasses.com",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Viman Nagar, Pune, Maharashtra",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411014",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91- 9766118877",
        "contactType": "Customer Service",
        "areaServed": "IN",
        "availableLanguage": "English"
      },
      "sameAs": [
        "https://www.facebook.com/asquareclasses",
        "https://www.instagram.com/asquareclasses"
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-viman-nagar-pune#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can enroll in MHT-CET coaching at ASQUARE Viman Nagar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students from Class XI, Class XII, and drop-year aspirants targeting Engineering or Pharmacy can enroll in MHT-CET coaching at ASQUARE Viman Nagar."
          }
        },
        {
          "@type": "Question",
          "name": "Which subjects are taught in the program?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The program includes Physics, Chemistry, Mathematics for Engineering aspirants, and Biology for Pharmacy aspirants."
          }
        },
        {
          "@type": "Question",
          "name": "Are mock tests included in all courses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, every batch includes topic tests, full-length mock exams, and post-test discussions for performance improvement."
          }
        },
        {
          "@type": "Question",
          "name": "What are the available batch options?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE Viman Nagar offers 2-year integrated, 1-year target, crash course, and repeater batches for MHT-CET preparation."
          }
        },
        {
          "@type": "Question",
          "name": "How large are the batches?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Each batch has limited students to ensure personal attention and proper doubt clearance."
          }
        },
        {
          "@type": "Question",
          "name": "Do parents receive student progress reports?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, parents receive monthly performance reviews and can attend Parent-Teacher Meetings (PTMs) to track progress."
          }
        },
        {
          "@type": "Question",
          "name": "Which nearby areas are served by the Viman Nagar branch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students from Kalyani Nagar, Yerawada, Dhanori, Tingre Nagar, Koregaon Park, Lohegaon, and Airport Road attend ASQUARE Viman Nagar."
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
                Crack MHT-CET with Expert Coaching at <span className="common_title_span">ASQUARE Academy,</span> Viman Nagar.
              </h1>
              <p>
                Looking for the most reliable{" "}
                <strong>MHT-CET coaching classes in Viman Nagar, Pune?</strong>{" "}
                At <strong>ASQUARE Academy, </strong>we specialize in helping students master both <strong>Engineering (PCM) </strong>and{" "}
                <strong>Pharmacy (PCB) </strong>streams through focused classroom teaching, daily practice, and personalized mentorship.
              </p>
              <p>
                Conveniently located in Viman Nagar, our centre is easily accessible for students from {" "}
                <strong>
                  Kalyani Nagar, Yerawada, Tingre Nagar, Dhanori, Koregaon Park, Lohegaon, and Airport Road, {" "}
                </strong>
                making it a preferred destination for <strong>MHT-CET aspirants in East Pune </strong>
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
                ASQUARE Academy MHT-CET in Viman Nagar?
              </h2>
              <ul className="common_ul">
                <li>
                  <span>
                    <strong>Experienced Faculty:</strong> Qualified subject experts in Physics, Chemistry, Maths, and Biology.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Complete Syllabus Coverage:</strong> Mapped with the latest <strong>CET exam pattern </strong>and difficulty level.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Small Batches:</strong> Personalized learning experience with focused mentoring.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Regular Testing:</strong> Weekly topic-wise assessments and full-length CET mock tests.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Board + CET Preparation: </strong> Integrated study plan for Class 11th & 12th along with MHT-CET.
                  </span>
                </li>
              </ul>
              <p>
                At ASQUARE, we emphasize <strong>concept clarity, accuracy, and speed —</strong> key factors that lead to top scores in MHT-CET.
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
                <span className="common_title_span">Key Benefits</span> of
                Joining ASQUARE Academy, Viman Nagar:
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
                    CET-focused study material and revision modules.
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={updated} alt="" />
                <div className="grid_content">
                  <h6 className="grid_item_title">
                    Experienced and approachable faculty.
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={weekly_chapter} alt="" />
                <div className="grid_content">
                  <h6 className="grid_item_title">
                    Regular test analysis and rank evaluation.
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={personalized} alt="" />
                <div className="grid_content">
                  <h6 className="grid_item_title">
                    Concept-building sessions and mock test discussions.
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
                      Kalyani Nagar, Yerawada, Dhanori, Tingre Nagar, Lohegaon, Koregaon Park, and Airport Road.
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
              <strong>ASQUARE Academy Viman Nagar </strong>  has a legacy of producing high-achieving MHT-CET students who have secured admissions into Maharashtra's top colleges such as
              {" "}
              <strong>
                COEP Pune, MIT-WPU, DY Patil College, VIT Pune, and Sinhgad Institute of Technology.
              </strong>
              <p className="pt-3">
                Our focus on conceptual mastery, testing consistency, and personal mentorship ensures student success year after year.
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
                Our structured methodology ensures academic excellence and consistent exam performance.
              </p>
              <a href="/">
                <button class="button mt-3">Know More</button>
              </a>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Interactive Lectures</h6>
                <span>Daily topic-based sessions for conceptual clarity.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">
                  Daily Practice Papers (DPPs)
                </h6>
                <span>Reinforce problem-solving and application skills.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">
                  Weekly & Monthly Tests:
                </h6>
                <span>Regular analysis and error-based revisions.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Personalized Mentorship</h6>
                <span>Dedicated doubt-solving and feedback sessions.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">
                  PTMs (Parent-Teacher Meetings)<br />
                </h6>
                <span>Regular updates and performance reports.</span>
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
                MHT-CET Coaching Institute in Viman Nagar, Pune{" "}
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
                      Who can enroll in MHT-CET coaching at ASQUARE Viman Nagar?
                    </button>
                  </h2>
                  <div
                    id="collapse1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionLeft"
                  >
                    <div className="accordion-body">
                      Students from Class XI, Class XII, and drop-year aspirants targeting Engineering or Pharmacy.
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
                      Which subjects are taught in the program?
                    </button>
                  </h2>
                  <div
                    id="collapse2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionLeft"
                  >
                    <div className="accordion-body">
                      Physics, Chemistry, Mathematics (for Engineering), and Biology (for Pharmacy).
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
                      Are mock tests included in all courses?
                    </button>
                  </h2>
                  <div
                    id="collapse3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionLeft"
                  >
                    <div className="accordion-body">
                      Yes — every batch includes topic tests, mock exams, and post-test discussions.
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
                      Which nearby areas are served by the Viman Nagar branch?
                    </button>
                  </h2>
                  <div
                    id="collapse7"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionRight"
                  >
                    <div className="accordion-body">
                      We cater to students from{" "}
                      <strong>
                        Kalyani Nagar, Yerawada, Dhanori, Tingre Nagar, Koregaon Park, Lohegaon, and Airport Road.
                      </strong>
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
                      data-bs-target="#collapse4"
                      aria-expanded="false"
                      aria-controls="collapse4"
                    >
                      What are the available batch options?
                    </button>
                  </h2>
                  <div
                    id="collapse4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionRight"
                  >
                    <div className="accordion-body">
                      We offer{" "}
                      <strong>
                        2-year integrated, 1-year target, crash course,
                      </strong>{" "}
                      and <strong>repeater batches.</strong>
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
                      How large are the batches?
                    </button>
                  </h2>
                  <div
                    id="collapse5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionRight"
                  >
                    <div className="accordion-body">
                     Each batch has limited students to ensure personal attention and doubt clearance.
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
                      aria-expanded="false"
                      aria-controls="collapse6"
                    >
                      Do parents receive student progress reports?
                    </button>
                  </h2>
                  <div
                    id="collapse6"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionRight"
                  >
                    <div className="accordion-body">
                      Yes — through monthly performance reviews and PTMs.
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
              The <strong>MHT-CET (Maharashtra Common Entrance Test)</strong> is a crucial entrance exam for students aspiring for{" "}
              <strong>
                Engineering, Pharmacy, and Allied Health Science
              </strong>{" "}
              courses
            </p>
            <p>
              At <strong>ASQUARE Academy Viman Nagar,</strong> our structured and exam-focused curriculum includes {" "}
              <strong>conceptual learning, smart problem-solving techniques, and continuous evaluation,</strong>{" "}
              to ensure complete readiness for CET.
            </p>
            <p>
              We also offer flexible learning options for students from{" "}
              <strong>
                Kalyani Nagar, Tingre Nagar, Dhanori, Yerawada, and Koregaon Park.
              </strong>{" "}
            </p>
            <h4 className="common_title" style={{ color: "#05479b" }}>
              <strong>Subjects Covered</strong>
            </h4>
            <ul className="common_ul">
              <li className='mb-4'>
                <span>
                  <strong>Physics:</strong> Strengthen conceptual fundamentals with numerical drills and analysis-based learning.
                </span>
              </li>
              <li className='mb-4'>
                <span>
                  <strong>Chemistry:</strong> Detailed understanding of Physical, Organic, and Inorganic chemistry with CET-style MCQs.
                </span>
              </li>
              <li className='mb-4'>
                <span>
                  <strong>Mathematics / Biology: </strong>
                  Topic-by-topic guidance for
                  <strong> PCM (Engineering) and PCB (Pharmacy)</strong>{" "}
                  students with regular assignments and DPPs.
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
                  Comprehensive program for board and CET readiness.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    1-Year Target Batch (Class XII + CET):
                  </strong>{" "}
                  Focused CET preparation with extensive test practice.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    Crash Course (2-3 Months):
                  </strong>{" "}
                   Intensive revision batch with past-year questions and mock tests.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    Repeater / Dropper Batch:
                  </strong>{" "}
                  One-year program designed for CET retakers aiming for top percentile ranks.
                </span>
              </li>
            </ul>
            <p>
              All programs include{" "}
              <strong>
                weekly tests, performance tracking, and one-on-one mentor discussions.
              </strong>{" "}
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
                  ASQUARE Academy - Viman Nagar, Pune
                </span>
              </h5>
              <p>
                Join <strong>ASQUARE Academy, </strong> the <strong>Best MHT-CET Coaching Institute in Viman Nagar, Pune, </strong> and prepare with expert guidance, mock tests, and result-oriented teaching.Let ASQUARE help you achieve your dream of securing admission to a top engineering or pharmacy college.
              </p>
              <p>
                Serving students from
                <strong>
                  {" "}
                  Viman Nagar, Kalyani Nagar, Yerawada, Dhanori, Tingre Nagar, Lohegaon, Koregaon Park, and Airport Road.
                </strong>
              </p>
              <h4>Admissions Open - Enroll Now for Expert MHT-CET Coaching!</h4>
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

export default MHTVimanNagar;
