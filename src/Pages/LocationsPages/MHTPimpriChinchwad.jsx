
import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import Loading from "../Loading.jsx";
import MobileForm from "../../Components/Mobileform/MobileForm.jsx";
import "../locationspage.css";
import locationBGImage from "../../Assets/locationPageImages/mht-cet/desktop-bg-img.jpeg";
import MobileBGImage from "../../Assets/locationPageImages/mht-cet/mobile-bg-image.jpeg";
import MethodologyBg from "../../Assets/locationPageImages/teaching-methodology.jpeg";
import image1 from "../../Assets/locationPageImages/image1.jpg";
import image2 from "../../Assets/locationPageImages/image2.jpg";
import location from "../../Assets/locationPageImages/mht-cet/location.png";
import personalized from "../../Assets/locationPageImages/mht-cet/personalized.png";
import qualified from "../../Assets/locationPageImages/mht-cet/qualified.png";
import updated from "../../Assets/locationPageImages/mht-cet/updated.png";
import weekly_chapter from "../../Assets/locationPageImages/mht-cet/weekly_chapter.png";

const Reviews = React.lazy(() =>
  import("../../Components/Reviews/Reviews.jsx")
);

function MHTPimpriChinchwad() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  return (
    <>
      <Helmet>
        <title>
         MHT-CET Coaching in Pimpri Chinchwad | Best CET Classes – ASQUARE Academy Pune
        </title>
        <meta
          name="title"
          content="MHT-CET Coaching in Pimpri Chinchwad | Best CET Classes – ASQUARE Academy Pune"
        />
        <meta
          name="description"
          content="Join ASQUARE Academy for the best MHT-CET coaching in Pimpri Chinchwad. Expert faculty, small batches, regular tests & proven results for Engineering & Pharmacy aspirants."
        />
        <meta
          name="keywords"
          content="MHT-CET Coaching in pimpri chinchwad,Best MHT-CET Classes in pimpri chinchwad,Top CET Coaching Institute pimpri chinchwad,MHT-CET Preparation in pimpri chinchwad,Best MHT-CET Coaching in pimpri chinchwad,ASQUARE Academy pimpri chinchwad,"
        />
        <script type="application/ld+json">{`
        {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-pimpri-chinchwad-pune#localbusiness",
      "name": "ASQUARE Academy Pimpri Chinchwad",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "url": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-pimpri-chinchwad-pune",
      "telephone": "9766118877",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Pimpri Chinchwad, Pune, Maharashtra",
        "addressLocality": "Pimpri Chinchwad",
        "addressRegion": "Maharashtra",
        "postalCode": "411018",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune"
      ],
      "description": "ASQUARE Academy offers the best MHT-CET coaching in Pimpri Chinchwad Pune with expert faculty, small batches, mock tests, and result-oriented training for Engineering & Pharmacy aspirants."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-pimpri-chinchwad-pune#webpage",
      "url": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-pimpri-chinchwad-pune",
      "name": "MHT-CET Coaching in Pimpri Chinchwad | Best CET Classes – ASQUARE Academy Pune",
      "description": "Join ASQUARE Academy for the best MHT-CET coaching in Pimpri Chinchwad. Expert faculty, small batches, and mock tests for Engineering & Pharmacy students.",
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
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-pimpri-chinchwad-pune#faq",
      "itemListElement": [
        {
          "@type": "Question",
          "name": "Who can join MHT-CET coaching at ASQUARE Academy Pimpri Chinchwad?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students from Class XI, XII, or drop-year aspirants preparing for Engineering or Pharmacy can join our MHT-CET programs."
          }
        },
        {
          "@type": "Question",
          "name": "Which subjects are included in the MHT-CET course?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We cover Physics, Chemistry, Mathematics (PCM) for Engineering and Biology (PCB) for Pharmacy aspirants."
          }
        },
        {
          "@type": "Question",
          "name": "Are mock tests and chapter tests conducted regularly?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we conduct weekly topic-wise and full-length mock CET tests to track and improve student performance."
          }
        },
        {
          "@type": "Question",
          "name": "Does ASQUARE Academy offer small batches for personal attention?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, our small batches ensure focused learning and one-on-one doubt-solving for every student."
          }
        },
        {
          "@type": "Question",
          "name": "What are the available MHT-CET course options at ASQUARE Pimpri Chinchwad?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer 2-year integrated, 1-year target, crash, and dropper batches to suit every student's preparation plan."
          }
        },
        {
          "@type": "Question",
          "name": "Which nearby locations do students come from?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students from Pimpri, Chinchwad, Nigdi, Akurdi, Ravet, and Pimple Saudagar regularly attend our academy."
          }
        },
        {
          "@type": "Question",
          "name": "Is online MHT-CET coaching available at ASQUARE Pimpri Chinchwad?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, both offline and online MHT-CET coaching options are available with interactive live sessions."
          }
        },
        {
          "@type": "Question",
          "name": "How does ASQUARE track student progress during CET preparation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We use regular tests, performance reports, and personal mentorship to help students improve effectively."
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
          "name": "MHT-CET Coaching in Pimpri Chinchwad",
          "item": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-pimpri-chinchwad-pune"
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
              <img className="common_image" src={image1} alt="ASQUARE Pimpri Chinchwad" />
            </div>
            <div className="col-lg-6 col-md-12 order-1 order-lg-2">
              <h1 className="common_title">
                Achieve CET Success with{" "}
                <span className="common_title_span">ASQUARE Academy,</span>{" "}
                Pimpri Chinchwad
              </h1>
              <p>
                Looking for the  {" "}<strong> best MHT-CET coaching classes in Pimpri Chinchwad Pune? </strong> At
                <strong> ASQUARE Academy Pimpri Chinchwad, </strong> we provide expert-led programs for  {" "}
                <strong> Engineering (PCM) and Pharmacy (PCB)  </strong> 
                aspirants, combining conceptual clarity, rigorous testing, and personalized mentoring.<br />
                Our Pimpri Chinchwad centre is ideal for students from{" "}
                 <strong>
                    Pimpri, Chinchwad, Nigdi, Akurdi, Ravet, Pimple Saudagar, and Rahatani{" "}
                </strong>
                making it a top choice for <strong> MHT-CET coaching in Pimpri Chinchwad. </strong>
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
                ASQUARE Academy for MHT-CET Coaching in Pimpri Chinchwad?
              </h2>
              <ul className="common_ul">
                <li>
                  <strong>Experienced Faculty:</strong> Subject experts for Physics, Chemistry, Maths, and Biology.
                </li>
                <li>
                  <strong>Latest CET Curriculum :</strong> Covers updated syllabus aligned with the MHT-CET exam pattern.
                </li>
                <li>
                  <strong>Focused Learning:</strong> Small batches ensure one-on-one attention and concept mastery.
                </li>
                <li>
                  <strong>Regular Tests: </strong> Topic-wise tests and full-length mock exams for consistent progress.
                </li>
                <li>
                  <strong>Integrated Study:</strong> Balanced approach for Class XI–XII board and CET preparation.
                </li>
              </ul>
              <p>
                ASQUARE Academy Pimpri Chinchwad empowers students to perform confidently and achieve top CET ranks.
              </p>
            </div>
            <div className="col-lg-6 col-md-12 img-col order-1 order-lg-2">
              <img className="common_image" src={image2} alt="Pimpri Chinchwad classes" />
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
                ASQUARE Academy Pimpri Chinchwad
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
                  Highly qualified and result-oriented faculty.
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={updated} alt="" />
                <h6 className="grid_item_title">
                  Small batch sizes for better focus and attention.
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={weekly_chapter} alt="" />
                <h6 className="grid_item_title">
                  Comprehensive CET study materials (printed and digital).
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={personalized} alt="" />
                <h6 className="grid_item_title">
                  Weekly and monthly mock tests for progress evaluation.
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={location} alt="" />
                <h6 className="grid_item_title">
                 Convenient for students from <strong> Pimpri, Chinchwad, Nigdi, Akurdi, Ravet, and Pimple Saudagar. </strong>
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
                ASQUARE Academy Pimpri Chinchwad 
            </strong>
            {" "}consistently achieve excellent ranks in{" "}
            <strong>
                COEP Pune, MIT-WPU, DY Patil College, VIT Pune, and Sinhgad College of Engineering.
            </strong>
          </p>
          <p>
            Our focus on structured learning, regular assessments, and expert mentorship drives these results every year.
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
                 This proven methodology ensures structured preparation and competitive readiness.
                </strong>{" "}
              </p>
              <a href="/">
                <button className="button mt-3">Know More</button>
              </a>
            </div>
            <div className="col-lg-6">
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Daily Practice Papers (DPPs):</h6>
                <span>Reinforces classroom learning and speed accuracy.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Weekly Assessments:</h6>
                <span>Evaluate progress and identify weak areas.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Doubt-Solving Sessions:</h6>
                <span>One-on-one discussions for better clarity.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Parent–Teacher Meetings (PTMs):</h6>
                <span>Regular updates on academic performance.</span>
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
                MHT-CET Coaching Institute in Pimpri Chinchwad {" "}
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
                     Who can join MHT-CET coaching at ASQUARE Academy Pimpri Chinchwad?
                    </button>
                  </h2>
                  <div
                    id="collapse1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionLeft"
                  >
                    <div className="accordion-body">
                      Students from Class XI, XII, or those taking a drop year for Engineering or Pharmacy preparation can enroll.
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
                      Which subjects are included in the MHT-CET course?
                    </button>
                  </h2>
                  <div
                    id="collapse2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionLeft"
                  >
                    <div className="accordion-body">
                      We cover Physics, Chemistry, Mathematics (PCM) for Engineering and Biology (PCB) for Pharmacy students.
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
                       Are mock tests and chapter tests conducted regularly?
                    </button>
                  </h2>
                  <div
                    id="collapse3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionLeft"
                  >
                    <div className="accordion-body">
                      Yes, we conduct weekly topic-wise and full-length mock CET tests to measure and enhance student performance.
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
                    Does ASQUARE Academy offer small batches for personal attention?
                    </button>
                  </h2>
                  <div
                    id="collapse7"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionLeft"
                  >
                    <div className="accordion-body">
                      Yes, our small batch system ensures one-on-one interaction and effective doubt-solving for every student.
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
                     What are the available MHT-CET course options at ASQUARE Pimpri Chinchwad?
                    </button>
                  </h2>
                  <div
                    id="collapse7"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionRight"
                  >
                    <div className="accordion-body">
                      We offer 2-year integrated, 1-year target, crash, and dropper batches to suit different preparation needs.
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
                     Is online MHT-CET coaching available at ASQUARE Pimpri Chinchwad?
                    </button>
                  </h2>
                  <div
                    id="collapse4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionRight"
                  >
                    <div className="accordion-body">
                    Yes, we provide both offline and online MHT-CET coaching with live interactive sessions.
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
                     Which nearby locations do students come from?
                    </button>
                  </h2>
                  <div
                    id="collapse5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionRight"
                  >
                    <div className="accordion-body">
                      Students from <strong> Pimpri, Chinchwad, Nigdi, Akurdi, Ravet, and Pimple Saudagar </strong>frequently attend our classes.
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
              The <strong>MHT-CET (Maharashtra Common Entrance Test)</strong>  is crucial for students aspiring for  <strong> Engineering, Pharmacy, and Allied Health courses.</strong>
            </p> 
            <p>
                At <strong>  ASQUARE Academy Pimpri Chinchwad, </strong> we follow a systematic approach emphasizing concept clarity, analytical skills, and time efficiency — essential for CET success.
            </p>
            <p>Our students come from <strong>Pimpri, Chinchwad, Nigdi, Akurdi, Ravet, and Pimple Saudagar, </strong>making our centre one of the most trusted MHT-CET institutes in Pune.</p>
            <h4 className="common_title" style={{ color: "#05479b" }}>
              <strong>Subjects Covered</strong>
            </h4>
            <ul className="common_ul">
              <li className="mb-4">
                <span>
                  <strong>Physics:</strong> Build a strong foundation with conceptual understanding and numerical problem-solving.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong>Chemistry:</strong> Comprehensive learning of Physical, Organic, and Inorganic Chemistry with CET-based MCQs.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong>Mathematics / Biology: </strong>
                  Specialized modules for PCM (Engineering) and PCB (Pharmacy) with daily assignments and DPPs.
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
                Dual focus on board syllabus and CET preparation.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    1-Year Target Batch (Class XII + CET):
                  </strong>{" "}
                  Intensive problem-solving and concept-building sessions.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    Crash Course (2-3 Months):
                  </strong>{" "}
                  Quick revision program with focused test series.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    Repeater / Dropper Batch:
                  </strong>{" "}
                  One-year program for CET reattempt students.
                </span>
              </li>
            </ul>
            <p>
             All batches include <strong> weekly tests, mentor feedback, and performance tracking for steady improvement.</strong>
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
                ASQUARE Academy Best MHT-CET Coaching Classes in Pimpri Chinchwad Pune
            </span>
          </h5>
          <p>
            Start your CET journey with {" "}
            <strong> ASQUARE Academy Pimpri Chinchwad, </strong>{" "}
            where expert faculty, advanced study materials, and strategic testing ensure success. <br />
            Join the{" "}
            <strong>
                Best MHT-CET Coaching Institute in Pimpri Chinchwad, 
            </strong>
            {" "}and take the next step toward your dream college.
          </p>
          <p>
            Serving students from{" "}
            <strong> Pimpri, Chinchwad, Nigdi, Akurdi, Ravet, Pimple Saudagar, and Rahatani. </strong>
          </p>
          <h4>
            <strong>
              Admissions Open – Enroll Today and Excel with ASQUARE Academy Pimpri Chinchwad!
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

export default MHTPimpriChinchwad;
