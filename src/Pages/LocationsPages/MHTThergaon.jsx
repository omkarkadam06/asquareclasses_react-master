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
import image1 from "../../Assets/locationPageImages/mht-cet/MH-CET page 11.jpeg";
import image2 from "../../Assets/locationPageImages/mht-cet/MH-CET page 24.jpeg";
import location from "../../Assets/locationPageImages/mht-cet/location.png";
import personalized from "../../Assets/locationPageImages/mht-cet/personalized.png";
import qualified from "../../Assets/locationPageImages/mht-cet/qualified.png";
import updated from "../../Assets/locationPageImages/mht-cet/updated.png";
import weekly_chapter from "../../Assets/locationPageImages/mht-cet/weekly_chapter.png";

const Reviews = React.lazy(() =>
  import("../../Components/Reviews/Reviews.jsx")
);

function MHTThergaon() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  return (
    <>
      <Helmet>
        <title>
         Best MHT-CET Coaching Classes in Thergaon Pune | ASQUARE Academy
        </title>
        <meta
          name="title"
          content="Best MHT-CET Coaching Classes in Thergaon Pune | ASQUARE Academy"
        />
        <meta
          name="description"
          content="Join the Best MHT-CET Coaching Classes in Thergaon Pune at ASQUARE Academy. Expert faculty, mock tests & small batches for Engineering and Pharmacy CET preparation."
        />
        <meta
          name="keywords"
          content="MHT-CET Coaching in Thergaon Pune, Best MHT-CET Classes in Thergaon,Top CET Coaching Institute Thergaon, MHT-CET Preparation in Thergaon,ASQUARE Academy Thergaon,Engineering CET Coaching Thergaon Pune,Pharmacy CET Coaching Thergaon Pune"
        />
        <script type="application/ld+json">{`
        {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "EducationalOrganization"],
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-thergaon-pune/#localbusiness",
      "name": "ASQUARE Academy - MHT-CET Coaching Classes in Thergaon Pune",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "url": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-thergaon-pune/",
      "telephone": "+919766118877",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Thergaon",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411033",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune/"
      ],
      "description": "ASQUARE Academy offers top MHT-CET Coaching Classes in Thergaon Pune with expert mentors, mock tests, and focused small batches for Engineering and Pharmacy CET aspirants."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-thergaon-pune/#webpage",
      "url": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-thergaon-pune/",
      "name": "Best MHT-CET Coaching Classes in Thergaon Pune | ASQUARE Academy",
      "description": "Enroll in ASQUARE Academy’s MHT-CET Coaching Classes in Thergaon Pune for expert faculty, comprehensive tests, and focused batches for Engineering and Pharmacy CET success.",
      "inLanguage": "en"
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-thergaon-pune/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can join MHT-CET coaching at ASQUARE Academy Thergaon?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students of Class XI, XII, and XII pass-outs preparing for CET can join ASQUARE Academy Thergaon."
          }
        },
        {
          "@type": "Question",
          "name": "What subjects are taught?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We cover Physics, Chemistry, and Mathematics (PCM) for engineering aspirants, and Physics, Chemistry, and Biology (PCB) for pharmacy aspirants."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide mock tests?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, weekly chapter tests and full-length CET mock exams are part of the program to track progress and build exam confidence."
          }
        },
        {
          "@type": "Question",
          "name": "What courses are offered?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer 2-Year Courses (10th–12th), 1-Year Courses (11th–12th), Crash Courses (2–3 months), and Dropper Batches (1 year)."
          }
        },
        {
          "@type": "Question",
          "name": "How many students are there in each batch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We maintain small batch sizes to ensure personalized attention and effective student guidance."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide updates to parents?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, performance reports and regular meetings are held to keep parents informed about their child’s academic progress."
          }
        },
        {
          "@type": "Question",
          "name": "Where is the institute located?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our Thergaon branch is located in PCMC Pune, easily accessible from Kalewadi, Wakad, Pimpri, Chinchwad, and Pimple Saudagar."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-thergaon-pune/#breadcrumb",
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
          "name": "MHT-CET Coaching Classes",
          "item": "https://www.asquareclasses.com/mht-cet-coaching-classes-pune/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Thergaon Pune",
          "item": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-thergaon-pune/"
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
              <img className="common_image" src={image1} alt="ASQUARE Thergaon" />
            </div>
            <div className="col-lg-6 col-md-12 order-1 order-lg-2">
              <h1 className="common_title">
                Build Your Future with Expert Guidance at{" "}
                <span className="common_title_span">ASQUARE Academy,</span>{" "}
                Thergaon
              </h1>
              <p>
                Looking for the best {" "}
                <strong>MHT-CET coaching classes in Thergaon, Pune (PCMC)?</strong> At ASQUARE Academy, we provide structured preparation with a strong focus on {" "}
                <strong> concept clarity, time management, and exam strategies. </strong> Our reputation as a leading CET institute in PCMC comes from years of top results, personalized mentoring, and expert faculty support that help students secure admission into top engineering and pharmacy colleges in Maharashtra.
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
                ASQUARE Academy for MHT-CET in Thergaon?
              </h2>
              <ul className="common_ul">
                <li>
                  <strong>Expert Faculty:</strong> Highly qualified teachers with experience in CET, JEE, and NEET coaching.
                </li>
                <li>
                  <strong>Complete Syllabus Coverage:</strong> Physics, Chemistry, and Mathematics/Biology as per the latest MHT-CET exam pattern.
                </li>
                <li>
                  <strong>Personalized Mentoring:</strong> Small batch sizes at our Thergaon branch with dedicated doubt-solving.
                </li>
                <li>
                  <strong>Weekly Mock Tests & Analysis :</strong> Performance tracking with regular progress updates.
                </li>
                <li>
                  <strong>Career Guidance & Motivation:</strong> Boosting exam confidence with proven strategies.
                </li>
              </ul>
            </div>
            <div className="col-lg-6 col-md-12 img-col order-1 order-lg-2">
              <img className="common_image" src={image2} alt="Thergaon classes" />
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
                ASQUARE Academy Thergaon
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
                  Limited batch size with personal attention.
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={updated} alt="" />
                <h6 className="grid_item_title">
                  Updated CET study material prepared by experts.
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={weekly_chapter} alt="" />
                <h6 className="grid_item_title">
                  Parent–teacher meetings & progress updates.
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={personalized} alt="" />
                <h6 className="grid_item_title">
                  Workshops on exam techniques & time management.
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={location} alt="" />
                <h6 className="grid_item_title">
                  Trusted MHT-CET coaching in <strong> Thergaon, Kalewadi, Wakad, Pimpri, Chinchwad & Pimple Saudagar.</strong>
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
            ASQUARE Academy has produced excellent CET results year after year, with students securing admissions in top engineering and pharmacy colleges.
          </p>
          <p>
            Our Thergaon MHT-CET coaching is trusted by students across PCMC for consistent success.
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
                <span>Daily lectures with topic-wise assignments.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Assignments & Practice:</h6>
                <span>One-to-one doubt-solving sessions.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Mock Tests:</h6>
                <span>Weekly topic tests & full-length mock exams.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Progress Reports:</h6>
                <span>Topic-wise & full-length mock tests.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Extra Activites:</h6>
                <span>Performance reviews shared with parents.</span>
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
                MHT-CET Coaching Institute in Thergaon {" "}
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
                     Who can join MHT-CET coaching at ASQUARE Academy Thergaon?
                    </button>
                  </h2>
                  <div
                    id="collapse1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionLeft"
                  >
                    <div className="accordion-body">
                      Students of Class XI, XII, and XII pass-outs preparing for CET can join.
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
                      We cover Physics, Chemistry, and Mathematics (PCM) for engineering aspirants, and Physics, Chemistry, and Biology (PCB) for pharmacy aspirants.
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
                      Do you provide mock tests?
                    </button>
                  </h2>
                  <div
                    id="collapse3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionLeft"
                  >
                    <div className="accordion-body">
                      Yes, weekly chapter tests and full-length CET mock exams are part of the program.
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
                      We offer <strong>2-Year Courses (10th → 12th), 1-Year Courses (11th → 12th), Crash Courses (2–3 months), and Dropper Batches (1 year).</strong>
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
                    Where is the institute located?
                    </button>
                  </h2>
                  <div
                    id="collapse4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionRight"
                  >
                    <div className="accordion-body">
                        Our Thergaon branch is located in PCMC Pune, easily accessible from{" "}
                      <strong>
                         Kalewadi, Wakad, Pimpri, Chinchwad and Pimple Saudagar.
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
                      Do you provide updates to parents?
                    </button>
                  </h2>
                  <div
                    id="collapse5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionRight"
                  >
                    <div className="accordion-body">
                      Yes, performance reports and regular meetings keep parents informed.
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
              The <strong>MHT-CET (Maharashtra Common Entrance Test)</strong> is the gateway for students aiming for 
              <strong> Engineering, Pharmacy, and Professional Courses </strong>
              in Maharashtra. Choosing the right MHT-CET institute in Thergaon, PCMC ensures systematic preparation and better results.
             </p> 
            <p>
               At ASQUARE Academy Thergaon, our coaching program builds strong fundamentals, improves accuracy, and provides regular test practice to help students achieve their goals.
            </p>
            <h4 className="common_title" style={{ color: "#05479b" }}>
              <strong>Subjects Covered</strong>
            </h4>
            <ul className="common_ul">
              <li className="mb-4">
                <span>
                  <strong>Physics:</strong> Conceptual clarity, numericals & application-based learning.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong>Chemistry:</strong>  Physical, Organic, and Inorganic Chemistry with problem-solving focus
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong>Mathematics / Biology: </strong>
                  Rigorous practice for PCM or PCB students.
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
                 Board + CET integrated program for Class XI & XII
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    1-Year Target Batch (Class XII + CET):
                  </strong>{" "}
                  Comprehensive CET coaching with Class XII syllabus.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    Crash Course (2-3 Months):
                  </strong>{" "}
                  2–3 months intensive revision & exam-oriented practice.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    Repeater / Dropper Batch:
                  </strong>{" "}
                  1-year dedicated CET training for XII pass-outs.
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
                ASQUARE Academy Thergaon Today
            </span>
          </h5>
          <p>
            Take the first step towards success with{" "}
            <strong>MHT-CET coaching in Thergaon, PCMC Pune.</strong>{" "}
            With experienced faculty, structured study plans, and proven results, ASQUARE Academy is your trusted partner for CET, JEE, and NEET coaching.{" "}
            <strong>
              Best for students from Thergaon, Kalewadi, Wakad, Pimpri, Chinchwad & Pimple Saudagar.
            </strong>
          </p>
          <h4>
            <strong>
              Admissions open – Limited seats available! Call today to book your seat.
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

export default MHTThergaon;
