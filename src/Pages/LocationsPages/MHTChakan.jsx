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
import image1 from "../../Assets/locationPageImages/mht-cet/MH-CET page 3.jpeg";
import image2 from "../../Assets/locationPageImages/mht-cet/MH-CET page 4.jpeg";
import location from "../../Assets/locationPageImages/mht-cet/location.png";
import personalized from "../../Assets/locationPageImages/mht-cet/personalized.png";
import qualified from "../../Assets/locationPageImages/mht-cet/qualified.png";
import updated from "../../Assets/locationPageImages/mht-cet/updated.png";
import weekly_chapter from "../../Assets/locationPageImages/mht-cet/weekly_chapter.png";

const Reviews = React.lazy(() =>
  import("../../Components/Reviews/Reviews.jsx")
);

function MHTChakan() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  return (
    <>
      <Helmet>
        <title>
          MHT-CET Coaching & Classes in Chakan Pune | Best CET - ASQUARE Academy
        </title>
        <meta
          name="title"
          content="MHT-CET Coaching & Classes in Chakan Pune | Best CET - ASQUARE Academy"
        />
        <meta
          name="description"
          content="MHT-CET Coaching & Classes in Chakan Pune by ASQUARE Academy. Expert faculty, mock tests & flexible batches for Engineering & Pharmacy CET preparation."
        />
        <meta
          name="keywords"
          content="MHT-CET Coaching in Chakan Pune, Best MHT-CET Classes in Chakan, Top CET Coaching Institute Chakan, MHT-CET Preparation in Chakan, ASQUARE Academy Chakan, MHT-CET Coaching near Talegaon, CET Classes near Alandi, Engineering CET Coaching Chakan Pune, Pharmacy CET Coaching Chakan Pune, Top CET Institute in North Pune, MHT-CET Classes in Moshi, Best CET Coaching near Khed, CET Coaching near Mahalunge, MHT-CET Institute near Kurali, CET Classes near Markal"
        />
        <script type="application/ld+json">{`
        {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-chakan-pune",
      "url": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-chakan-pune",
      "name": "MHT-CET Coaching in Chakan Pune | Best CET Coaching Classes - ASQUARE Academy",
      "description": "Join the best MHT-CET Coaching Classes in Chakan Pune. Expert faculty, weekly mock tests, and flexible batches for Engineering & Pharmacy CET preparation. ASQUARE Academy.",
      "publisher": {
        "@id": "#asquareacademy"
      },
      "breadcrumb": {
        "@id": "#breadcrumb"
      },
      "about": {
        "@id": "#localbusiness"
      },
      "mainEntity": {
        "@id": "#faqpage"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "#breadcrumb",
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
          "name": "MHT-CET Coaching Classes in Chakan Pune",
          "item": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-chakan-pune"
        }
      ]
    },
    {
      "@type": "EducationalOrganization",
      "@id": "#asquareacademy",
      "name": "ASQUARE Academy Chakan",
      "url": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-chakan-pune",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png"
      },
      "description": "ASQUARE Academy Chakan offers expert-led MHT-CET coaching classes with advanced study material, weekly tests, and online/offline learning options.",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9766118877",
        "contactType": "Customer Service",
        "areaServed": "IN"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Chakan",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "410501",
        "addressCountry": "IN"
      }
    },
    {
      "@type": "LocalBusiness",
      "@id": "#localbusiness",
      "name": "ASQUARE Academy Chakan",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "url": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-chakan-pune",
      "telephone": "+91-9766118877",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Chakan",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "410501",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "18.7603",
        "longitude": "73.8651"
      },
      "openingHours": "Mo-Su 08:00-20:00",
      "sameAs": [
        "https://www.facebook.com/asquareacademy",
        "https://www.instagram.com/asquareacademy"
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "#faqpage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can join MHT-CET coaching at ASQUARE Chakan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students from Class XI, XII, and drop-year aspirants preparing for Engineering or Pharmacy can join ASQUARE Chakan."
          }
        },
        {
          "@type": "Question",
          "name": "Which subjects are covered in the MHT-CET course?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The MHT-CET course includes Physics, Chemistry, Mathematics (for PCM) and Biology (for PCB)."
          }
        },
        {
          "@type": "Question",
          "name": "Are mock tests part of the course?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — topic-wise and full-length mock exams are conducted every week to track student performance."
          }
        },
        {
          "@type": "Question",
          "name": "What batch options are available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE Chakan offers 2-year, 1-year, crash course, and dropper batches for flexible MHT-CET preparation."
          }
        },
        {
          "@type": "Question",
          "name": "Which nearby areas does ASQUARE Chakan serve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students from Talegaon, Moshi, Alandi, Mahalunge, Kurali, Khed, Bhose, Chimbali, and Markal attend regularly."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide online CET coaching?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — both offline and online MHT-CET classes are available for flexible learning at ASQUARE Chakan."
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
                Build Your CET Success with {" "}
                <span className="common_title_span">ASQUARE Academy ,</span>{" "}
                Chakan.
              </h1>
              <p>
                Are you looking for the{" "}
                <strong>Best MHT-CET coaching classes in Chakan, Pune?</strong>{" "}
                At <strong>ASQUARE Academy Chakan, </strong> we guide aspirants aiming for
                <strong> Engineering (PCM)</strong> and{" "}
                <strong>Pharmacy (PCB)</strong> careers through a structured, result-focused approach that blends{" "}
                <strong>concept-based learning, regular mock tests, and personal mentoring.</strong>
              </p>
              <p>
                Our Chakan centre is conveniently located and easily accessible for students from{" "}
                <strong>
                  Talegaon, Moshi, Alandi, Mahalunge, Kurali, Khed, Bhose, Chimbali, and Markal,{" "}
                </strong>
                making it a preferred destination for{" "}
                <strong>MHT-CET preparation in North Pune and PCMC.</strong>
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
                ASQUARE Academy for MHT-CET in Chakan?
              </h2>
              <ul className="common_ul">
                <li>
                  <span>
                    <strong>Expert Faculty:</strong> Subject specialists for Physics, Chemistry, Maths, and Biology.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Complete CET Syllabus Coverage:</strong> Aligned with the latest MHT-CET exam pattern.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Small Batch Size:</strong> Ensures individual attention and interactive learning.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Weekly Tests & Performance Analysis:</strong> Identify strengths and areas for improvement.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Board + CET Integrated Learning:</strong> Helps students excel in both academics and entrance exams.
                  </span>
                </li>
              </ul>
              <p>
                At ASQUARE, we focus on<strong> concept clarity, consistent practice, and exam-smart preparation,</strong> helping students achieve their target CET scores confidently.
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
                ASQUARE Academy, Chakan:
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
                    Experienced mentors and CET-focused study modules.
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={updated} alt="" />
                <div className="grid_content">
                  <h6 className="grid_item_title">
                    Conceptual clarity with step-by-step guidance.
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={weekly_chapter} alt="" />
                <div className="grid_content">
                  <h6 className="grid_item_title">
                    Regular mock tests and feedback sessions.
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={personalized} alt="" />
                <div className="grid_content">
                  <h6 className="grid_item_title">
                    Compact batch sizes for better focus.
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={location} alt="" />
                <div className="grid_content">
                  <h6 className="grid_item_title">
                    Ideal for students from
                  </h6>
                  <p>
                    <strong>
                      Talegaon, Moshi, Alandi, Mahalunge, Kurali, Khed, Bhose, Chimbali, and Markal.
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
              Students of
              <strong> ASQUARE Academy Chakan </strong> consistently perform among the top scorers in<strong> MHT-CET, </strong>
              securing admission to leading colleges such as
              <strong>
                {" "}
                COEP Pune, MIT-WPU, DY Patil Institute, VIT Pune, and Sinhgad College of Engineering.{" "}
              </strong>
              <p className="pt-3">
                Our teaching approach, mock test strategy, and personal mentorship ensure every student reaches their true potential.
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
                Our structured learning system ensures steady improvement, accuracy, and exam readiness.
              </p>
              <a href="/">
                <button class="button mt-3">Know More</button>
              </a>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Concept-Focused Learning:</h6>
                <span>Concept-based lectures with practical applications.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">
                  Daily Practice Papers (DPPs):
                </h6>
                <span>
                  Daily Practice Papers (DPPs) and worksheets for reinforcement.
                </span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Weekly Mock Tests:</h6>
                <span>Weekly topic tests and full-length CET mock exams.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">
                  Interactive Doubt-Solving:
                </h6>
                <span>One-on-one mentoring and regular doubt-clearing sessions.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">
                  Parent-Teacher Meetings (PTMs):
                </h6>
                <span>
                  Parent-Teacher Meetings (PTMs) for progress updates and academic feedback.
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
                MHT-CET Coaching Institute in Chakan, Pune{" "}
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
                      Who can join MHT-CET coaching at ASQUARE Chakan?
                    </button>
                  </h2>
                  <div
                    id="collapse1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionLeft"
                  >
                    <div className="accordion-body">
                      Students from Class XI, XII, and drop-year aspirants preparing for Engineering or Pharmacy.
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
                      Which subjects are covered in the MHT-CET course?
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
                      Are mock tests part of the course?
                    </button>
                  </h2>
                  <div
                    id="collapse3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionLeft"
                  >
                    <div className="accordion-body">
                      Yes — topic-wise and full-length mock exams are conducted every week.
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
                      We offer <strong>2-year, 1-year, crash course,</strong>{" "}
                      and <strong> dropper batches.</strong> for flexible preparation.
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
                      Which nearby areas does ASQUARE Chakan serve?
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
                        Talegaon, Moshi, Alandi, Mahalunge, Kurali, Khed, Bhose, Chimbali, and Markal
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
                      Do you provide online CET coaching?
                    </button>
                  </h2>
                  <div
                    id="collapse5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionRight"
                  >
                    <div className="accordion-body">
                      Yes — both <strong>online</strong> and <strong>offline MHT-CET classes</strong> are available .
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
              The <strong>MHT-CET (Maharashtra Common Entrance Test)</strong> is one of the most competitive exams for admission to {" "}
              <strong>Engineering, Pharmacy, and Allied Science Programs</strong>{" "}
              across Maharashtra.
            </p>
            <p>
              At <strong>ASQUARE Academy Chakan, </strong>
              we offer well-structured courses, experienced mentors, and frequent mock tests that prepare students to perform efficiently under exam pressure.
            </p>
            <p>
                Our batches attract students from <strong>Talegaon, Alandi, Moshi, and Khed,</strong> making ASQUARE a trusted choice for <strong>CET coaching in North Pune.</strong>
            </p>
            <h4 className="common_title" style={{ color: "#05479b" }}>
              <strong>Subjects Covered</strong>
            </h4>
            <ul className="common_ul">
              <li className="mb-4">
                <span>
                  <strong>Physics:</strong> Strengthen conceptual understanding through problem-solving and numerical analysis.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong>Chemistry:</strong> Topic-wise coverage of Physical, Organic, and Inorganic chemistry with extensive MCQ practice.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong>Mathematics / Biology: </strong>
                  Stream-specific learning for
                  <strong> PCM (Engineering) and PCB (Pharmacy)</strong> students, including daily assignments and revisions.
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
                  Comprehensive foundation + advanced CET prep.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    1-Year Target Batch (Class XII + CET):
                  </strong>{" "}
                  Focused and time-efficient MHT-CET preparation.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    Crash Course (2-3 Months):
                  </strong>{" "}
                  High-intensity short-term program for revision and test strategy.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    Repeater / Dropper Batch:
                  </strong>{" "}
                  One-year course for CET repeaters focusing on advanced question practice.
                </span>
              </li>
            </ul>
            <p>
              Each program includes{" "}
              <strong>
                weekly chapter tests, performance tracking, and doubt-solving sessions
              </strong>{" "}
              for consistent progress.
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
                  ASQUARE Academy — Chakan, Pune
                </span>
              </h5>
              <p>
                Join <strong>ASQUARE Academy, </strong> the{" "}
                <strong>
                  Best MHT-CET Coaching Institute in Chakan, Pune.{" "}
                </strong>
                And start your preparation with expert mentors, personalized batches, and strategic mock tests.
               Get ready to score high and secure admission into Maharashtra's top Engineering and Pharmacy colleges.
              <br/>
                Serving students from
                <strong>
                  {" "}
                  Chakan, Talegaon, Moshi, Alandi, Mahalunge, Kurali, Khed, Bhose, Chimbali, and Markal.
                </strong>
              </p>
              <h4>
                Admissions Open - Enroll Today at ASQUARE Academy for MHT-CET Success!
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

export default MHTChakan;
