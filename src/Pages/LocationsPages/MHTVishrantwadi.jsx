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

function MHTVishrantwadi() {
  return (
    <>
      <Helmet>
        <title>
          Best MHT-CET Coaching Classes in Vishrantwadi Pune | ASQUARE Academy
        </title>
        <meta
          name="titel"
          content="MHT-CET Tuition Classes in Vishrantwadi, Pune | Asquare Academy"
        />
        <meta
          name="description"
          content="Get the best MHT-CET coaching classes in Vishrantwadi, Pune with expert faculty, small batches, and proven results for CET preparation at ASQUARE Academy."
        />
        <meta
          name="keywords"
          content="MHT-CET Coaching in Vishrantwadi Pune, Best MHT-CET Classes in Vishrantwadi, Top CET Coaching Institute Vishrantwadi, MHT-CET Preparation in Vishrantwadi, ASQUARE Academy Vishrantwadi, MHT-CET Coaching near Chinchwad, CET Classes near Bhosari, Engineering CET Coaching Vishrantwadi Pune, Pharmacy CET Coaching Vishrantwadi Pune, Top CET Institute in PCMC Pune, MHT-CET Classes in Nehrunagar Vishrantwadi, MHT-CET Coaching near Sant Tukaram Nagar, Best CET Classes near Vishrantwadi Colony"
        />
        <meta name="robots" content="noindex, nofollow" />
        <script type="application/ld+json">{`
                {
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                        "@type": "WebPage",
                        "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-in-vishrantwadi-pune/",
                        "url": "https://www.asquareclasses.com/mht-cet-coaching-classes-in-vishrantwadi-pune/",
                        "name": "MHT-CET Coaching Classes in Vishrantwadi Pune | ASQUARE Academy",
                        "description": "Join ASQUARE Academy for the best MHT-CET coaching classes in Vishrantwadi, Pune. We offer comprehensive courses for Class XI, XII, and droppers with expert faculty and regular mock tests.",
                        "inLanguage": "en",
                        "publisher": {
                            "@type": "EducationalOrganization",
                            "name": "ASQUARE Academy",
                            "url": "https://www.asquareclasses.com"
                        }
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
                            "name": "Courses",
                            "item": "https://www.asquareclasses.com/courses/"
                            },
                            {
                            "@type": "ListItem",
                            "position": 3,
                            "name": "MHT-CET Coaching Classes in Vishrantwadi Pune",
                            "item": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-vishrantwadi-pune"
                            }
                        ]
                        },
                        {
                        "@type": "EducationalOrganization",
                        "name": "ASQUARE Academy",
                        "url": "https://www.asquareclasses.com",
                        "logo": " https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
                        "description": "ASQUARE Academy offers professional coaching for MHT-CET, NEET, and JEE in Pune with expert faculty and personalized learning support.",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Shopper’s Orbit Mall, Alandi Road, Vishrantwadi",
                            "addressLocality": "Pune",
                            "addressRegion": "Maharashtra",
                            "postalCode": "411015",
                            "addressCountry": "IN"
                        },
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "telephone": "+91- 9766118866",
                            "contactType": "Customer Service",
                            "areaServed": "IN",
                            "availableLanguage": "English"
                        }
                        },
                        {
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                            "@type": "Question",
                            "name": "Who can join MHT-CET coaching at ASQUARE Academy?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Any student in Class XI, XII, or after XII preparing for CET can join."
                            }
                            },
                            {
                            "@type": "Question",
                            "name": "What subjects are covered in CET?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Physics, Chemistry, Mathematics (PCM) for engineering, and Physics, Chemistry, Biology (PCB) for pharmacy."
                            }
                            },
                            {
                            "@type": "Question",
                            "name": "Do you provide mock tests and practice papers?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, we provide regular CET mock tests, chapter-wise tests, and full-length exams."
                            }
                            },
                            {
                            "@type": "Question",
                            "name": "What is the course duration?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "We offer 1-year full-time courses, 2–3 month crash courses, and 1-year dropper batches."
                            }
                            },
                            {
                            "@type": "Question",
                            "name": "How big are the batches?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "We keep small batches to ensure personal guidance."
                            }
                            },
                            {
                            "@type": "Question",
                            "name": "Do you provide progress reports to parents?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, we share detailed reports regularly with parents."
                            }
                            },
                            {
                            "@type": "Question",
                            "name": "Where is the institute located?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Shopper’s Orbit Mall, Alandi Road, Vishrantwadi, Pune – 411015."
                            }
                            }
                        ]
                        }
                    ]
                    }
                `}</script>
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
                Excel in <span className="common_title_span">MHT-CET</span> with
                ASQUARE Academy - Top Coaching Classes in Vishrantwadi, Pune
              </h1>
              <p>
                Looking for the{" "}
                <strong>best MHT-CET coaching classes in Vishrantwadi, Pune? </strong>
                At <strong>ASQUARE Academy Vishrantwadi,</strong> we specialize in
                preparing students for <strong>Engineering (PCM) </strong>and{" "}
                <strong>Pharmacy (PCB)</strong>streams with focused conceptual
                learning, expert guidance, and continuous testing.
              </p>
              <p>
                Our Vishrantwadi branch is conveniently located and easily accessible
                for students from{" "}
                <strong>
                  Chinchwad, Bhosari, Kasarwadi, Pimple Gurav, Pimple Saudagar,
                  Nehrunagar, Sant Tukaram Nagar, and Pimpri Colony{" "}
                </strong>
                — making it one of the most trusted{" "}
                <strong>CET coaching institutes in PCMC Pune.</strong>
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
                ASQUARE Academy for MHT-CET in Vishrantwadi ?
              </h2>
              <ul className="common_ul">
                <li>
                  <span>
                    <strong>Expert Faculty:</strong> Highly qualified mentors
                    for Physics, Chemistry, Maths & Biology.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Complete CET Syllabus Coverage:</strong> Based on
                    the latest MHT-CET exam pattern and difficulty level.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Small Batches:</strong> Personalized attention and
                    one-on-one doubt solving.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Regular Mock Tests & Assessments:</strong> Improve
                    speed, accuracy, and time management.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Integrated Learning:</strong> Covers both Board
                    Exams + MHT-CET preparation seamlessly.
                  </span>
                </li>
              </ul>
              <p>
                At ASQUARE, we emphasize{" "}
                <strong>
                  concept clarity, strong fundamentals, and strategic practice,
                </strong>{" "}
                ensuring students are exam-ready and confident.
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
                Joining ASQUARE Academy, Vishrantwadi:
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
                    Qualified and approachable faculty team
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={updated} alt="" />
                <div className="grid_content">
                  <h6 className="grid_item_title">
                    Updated CET-based study materials (print & digital)
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={weekly_chapter} alt="" />
                <div className="grid_content">
                  <h6 className="grid_item_title">
                    Weekly chapter tests & rank-based analysis
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={personalized} alt="" />
                <div className="grid_content">
                  <h6 className="grid_item_title">
                    Personalized mentoring and feedback sessions
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={location} alt="" />
                <div className="grid_content">
                  <h6 className="grid_item_title">
                    Accessible for students from
                  </h6>
                  <p>
                    <strong>
                      Chinchwad, Bhosari, Kasarwadi, Pimple Gurav, Pimple
                      Saudagar, Nehrunagar, Sant Tukaram Nagar, MIDC Pimpri, and
                      Pimpri Colony
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* need to modify */}
      <section className="leftright_section padd_bottom mt-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <h4 className="common_title">Proven Results </h4>
              <strong>ASQUARE Academy Vishrantwadi</strong> has a history of producing
              top-performing students who have secured admission to prestigious
              colleges like.
              <strong>
                COEP Pune, MIT-WPU, VIT Pune, DY Patil College, and Sinhgad
                Institute of Technology.
              </strong>
              <p>
                Our success stems from expert guidance, strong test systems, and
                a structured learning environment that builds CET excellence.
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
                This structured teaching approach builds confidence, speed, and
                accuracy for competitive exams like MHT-CET
              </p>
              <a href="/">
                <button class="button mt-3">Know More</button>
              </a>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Concept-driven sessions</h6>
                <span>with real-world applications.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">
                  Daily Practice Papers (DPPs)
                </h6>
                <span>and homework for consistent problem-solving.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">
                  Weekly & Full-length CET Mock Tests
                </h6>
                <span>for exam simulation.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Doubt-solving sessions</h6>
                <span>and topic revision classes.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">
                  Parent–Teacher Meetings (PTMs){" "}
                </h6>
                <span>with performance updates.</span>
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
                MHT-CET Coaching Institute in Vishrantwadi, Pune{" "}
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
                      Who can join MHT-CET coaching at ASQUARE Vishrantwadi?
                    </button>
                  </h2>
                  <div
                    id="collapse1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionLeft"
                  >
                    <div className="accordion-body">
                      Students in Class XI, XII, and repeaters preparing for
                      Engineering or Pharmacy entrance exams.
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
                      Which subjects are taught?
                    </button>
                  </h2>
                  <div
                    id="collapse2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionLeft"
                  >
                    <div className="accordion-body">
                      Physics, Chemistry, Mathematics (for PCM) and Biology (for
                      PCB).
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
                      Yes — we conduct{" "}
                      <strong>
                        weekly tests, topic-wise quizzes, and full-length CET
                        mock exams.
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
                      Do you provide progress tracking and reports?
                    </button>
                  </h2>
                  <div
                    id="collapse5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionRight"
                  >
                    <div className="accordion-body">
                      Yes — with weekly analysis, feedback sessions, and PTMs
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
                      Which nearby areas are covered by ASQUARE Vishrantwadi?
                    </button>
                  </h2>
                  <div
                    id="collapse6"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionRight"
                  >
                    <div className="accordion-body">
                      Students from{" "}
                      <strong>
                        Chinchwad, Bhosari, Kasarwadi, Pimple Gurav, Pimple
                        Saudagar, Nehrunagar, Sant Tukaram Nagar, MIDC Pimpri,
                        and Pimpri Colony
                      </strong>{" "}
                      attend regularly.
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
            <h5 className="common_title" style={{ color: "#05479b" }}>
              <strong>Course Overview </strong>
            </h5>
            <p>
              The <strong>MHT-CET (Maharashtra Common Entrance Test)</strong> is
              the gateway to premier{" "}
              <strong>
                Engineering, Pharmacy, and Allied Science colleges
              </strong>{" "}
              in Maharashtra.
            </p>
            <p>
              At <strong>ASQUARE Academy Vishrantwadi,</strong> we focus on conceptual
              understanding, chapter-wise problem-solving, and exam-focused
              preparation.
            </p>
            <p>
              Students from{" "}
              <strong>
                Chinchwad, Bhosari, Pimple Saudagar, and Nehrunagar
              </strong>{" "}
              prefer ASQUARE for its{" "}
              <strong>result-oriented MHT-CET coaching in PCMC Pune.</strong>
            </p>
            <h5 className="common_title" style={{ color: "#05479b" }}>
              <strong>Subjects Covered</strong>
            </h5>
            <ul className="common_ul">
              <li className='mb-4'>
                <span>
                  <strong>Physics:</strong> Interactive sessions for
                  understanding concepts, solving numericals, and mastering
                  formulas.
                </span>
              </li>
              <li className='mb-4'>
                <span>
                  <strong>Chemistry:</strong> Comprehensive coverage of
                  Physical, Organic & Inorganic Chemistry with topic-wise
                  practice.
                </span>
              </li>
              <li className='mb-4'>
                <span>
                  <strong>Mathematics / Biology:</strong> Separate study plans
                  for <strong>PCM (Engineering) and PCB (Pharmacy)</strong>{" "}
                  streams with daily assignments and DPPs.
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
                  Foundation to advanced preparation covering both Boards + CET.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    1-Year Target Batch (Class XII + CET):
                  </strong>{" "}
                  Focused MHT-CET course with topic-wise practice and mock
                  exams.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    Crash Course (2-3 Months):
                  </strong>{" "}
                  Compact revision and test-based program before the CET exam.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    Repeater / Dropper Batch:
                  </strong>{" "}
                  One-year extensive course designed for CET re-attempt
                  students.
                </span>
              </li>
            </ul>
            <p>
              Each batch includes{" "}
              <strong>
                weekly mock tests, progress reports, and mentor support{" "}
              </strong>
              for performance tracking.
            </p>
          </div>
        </div>
      </section>
      {/* Join ASQUARE Section */}
      <section className="contact_section padd">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h5 className="common_title">
                Join{" "}
                <span className="common_title_span">
                  ASQUARE Academy - Vishrantwadi, Pune
                </span>
              </h5>
              <p>
                Join <strong>ASQUARE Academy,</strong> the{" "}
                <strong>Best MHT-CET Coaching Institute in Vishrantwadi, Pune</strong>
                , and take your preparation to the next level.
              </p>
              <p>
                With experienced mentors, structured batches, and consistent
                mock testing, ASQUARE ensures success in both Engineering and
                Pharmacy CET exams
              </p>
              <p>
                Serving students from
                <strong>
                  {" "}
                  Vishrantwadi, Pimpri, Chinchwad, Bhosari, Kasarwadi, Pimple Gurav, Pimple
                  Saudagar, Nehrunagar, Sant Tukaram Nagar, MIDC Pimpri, and
                  Pimpri Colony.
                </strong>
              </p>
              <div className="cta-button">
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

export default MHTVishrantwadi;
