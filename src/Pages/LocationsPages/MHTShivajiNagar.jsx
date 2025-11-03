import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import Loading from "../Loading.jsx";
import MobileForm from "../../Components/Mobileform/MobileForm.jsx";
import "../locationspage.css";
import locationBGImage from "../../Assets/locationPageImages/mht-cet/mhtcet-desktop-bg4.0.jpeg";
import MobileBGImage from "../../Assets/locationPageImages/mht-cet/mhtcet-mobile-bg4.0.jpeg";
import MethodologyBg from "../../Assets/locationPageImages/teaching-methodology.jpeg";
import image1 from "../../Assets/locationPageImages/mht-cet/MH-CET page 15.jpeg";
import image2 from "../../Assets/locationPageImages/mht-cet/MH-CET page 19.jpeg";
import location from "../../Assets/locationPageImages/mht-cet/location.png";
import personalized from "../../Assets/locationPageImages/mht-cet/personalized.png";
import qualified from "../../Assets/locationPageImages/mht-cet/qualified.png";
import updated from "../../Assets/locationPageImages/mht-cet/updated.png";
import weekly_chapter from "../../Assets/locationPageImages/mht-cet/weekly_chapter.png";

const Reviews = React.lazy(() =>
  import("../../Components/Reviews/Reviews.jsx")
);

function MHTShivajiNagar() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  return (
    <>
      <Helmet>
        <title>
         Best MHT-CET Coaching Classes in Shivaji Nagar Pune | ASQUARE Academy
        </title>
        <meta
          name="title"
          content="Best MHT-CET Coaching Classes in Shivaji Nagar Pune | ASQUARE Academy"
        />
        <meta
          name="description"
          content="Join the Best MHT-CET Coaching Classes in Shivaji Nagar Pune at ASQUARE Academy. Expert faculty, small batches & mock tests for Engineering and Pharmacy CET preparation."
        />
        <meta
          name="keywords"
          content="MHT-CET Coaching in shivaji nagar Pune,Best MHT-CET Classes in shivaji nagar, Top CET Coaching Institute shivaji nagar,MHT-CET Preparation in shivaji nagar,ASQUARE Academy shivaji nagar,Engineering CET Coaching shivaji nagar Pune,Pharmacy CET Coaching shivaji nagar Pune,"
        />
        <script type="application/ld+json">{`
        {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "EducationalOrganization"],
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-shivaji-nagar-pune/#localbusiness",
      "name": "ASQUARE Academy - MHT-CET Coaching Classes in Shivaji Nagar Pune",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "url": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-shivaji-nagar-pune/",
      "telephone": "+919766118877",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Shivaji Nagar",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411005",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune/"
      ],
      "description": "ASQUARE Academy offers the Best MHT-CET Coaching Classes in Shivaji Nagar Pune with expert mentors, mock tests, and small batch learning for Engineering and Pharmacy aspirants."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-shivaji-nagar-pune/#webpage",
      "url": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-shivaji-nagar-pune/",
      "name": "Best MHT-CET Coaching Classes in Shivaji Nagar Pune | ASQUARE Academy",
      "description": "Join ASQUARE Academy’s MHT-CET Coaching Classes in Shivaji Nagar Pune for top-quality CET preparation in Physics, Chemistry, Maths, and Biology with regular mock tests.",
      "inLanguage": "en"
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-shivaji-nagar-pune/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can join MHT-CET coaching at ASQUARE Academy, Shivaji Nagar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Class XI, XII, and dropper aspirants from Shivaji Nagar and nearby areas can join."
          }
        },
        {
          "@type": "Question",
          "name": "What subjects are taught?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We cover Physics, Chemistry, Mathematics for Engineering and Biology for Pharmacy students."
          }
        },
        {
          "@type": "Question",
          "name": "Are mock tests included?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes – weekly tests, chapter-wise assessments, and full-length CET mock exams are part of the course."
          }
        },
        {
          "@type": "Question",
          "name": "What are the course options?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer 2-Year Integrated, 1-Year Target, Crash Course, and Dropper Batches."
          }
        },
        {
          "@type": "Question",
          "name": "Do you keep batches small?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes – to ensure personalized attention and mentoring for every student."
          }
        },
        {
          "@type": "Question",
          "name": "Do parents get updates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes – we provide PTMs and detailed student performance reports regularly."
          }
        },
        {
          "@type": "Question",
          "name": "Which areas does this branch serve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students from Shivaji Nagar, JM Road, FC Road, Deccan Gymkhana, and Model Colony can easily access this branch."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-shivaji-nagar-pune/#breadcrumb",
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
          "name": "Shivaji Nagar Pune",
          "item": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-shivaji-nagar-pune/"
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
              <img className="common_image" src={image1} alt="ASQUARE Shivaji Nagar, Pune" />
            </div>
            <div className="col-lg-6 col-md-12 order-1 order-lg-2">
              <h1 className="common_title">
                Excel in MHT-CET Exams with Expert Coaching at{" "}
                <span className="common_title_span">ASQUARE Academy,</span>{" "}
                Shivaji Nagar, Pune
              </h1>
              <p>
                Looking for the best {" "}
                <strong> best MHT-CET coaching in Shivaji Nagar, Pune? </strong> At ASQUARE Academy, we provide expert-led coaching designed to help students achieve top ranks in Maharashtra’s most competitive entrance exam. With a convenient location in Shivaji Nagar {" "}
                our center also serves aspirants from <strong> JM Road, FC Road, Deccan Gymkhana, and Model Colony </strong> who want the finest CET preparation close to home.
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
                ASQUARE Academy for MHT-CET in Shivaji Nagar?  & Nearby Areas ?
              </h2>
              <ul className="common_ul">
                <li>
                  <strong>Expert Teachers:</strong> or Physics, Chemistry, Mathematics & Biology.
                </li>
                <li>
                  <strong>Complete CET Syllabus Coverage:</strong> based on the latest exam trends.
                </li>
                <li>
                  <strong>Focused Learning:</strong> with small batch sizes.
                </li>
                <li>
                  <strong>Regular Tests & Mock Exams: </strong> to track progress and build exam confidence.
                </li>
                <li>
                  <strong>Trusted by Students from:</strong> Shivaji Nagar, JM Road, FC Road, Deccan & Model Colony.
                </li>
              </ul>
            </div>
            <div className="col-lg-6 col-md-12 img-col order-1 order-lg-2">
              <img className="common_image" src={image2} alt="Shivaji Nagar classes" />
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
                ASQUARE Academy Shivaji Nagar
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
                  Limited batch sizes for personalized attention.
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={updated} alt="" />
                <h6 className="grid_item_title">
                  CET-focused study material (print + digital)
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={weekly_chapter} alt="" />
                <h6 className="grid_item_title">
                  Frequent PTMs and progress reports.
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={personalized} alt="" />
                <h6 className="grid_item_title">
                  Exam strategy workshops for speed and accuracy.
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={location} alt="" />
                <h6 className="grid_item_title">
                  Strategic location for students from  <strong>Shivaji Nagar, JM Road, FC Road, Deccan Gymkhana & Model Colony.</strong>
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
            Year after year, ASQUARE Academy students from <strong> Shivaji Nagar, Deccan, JM Road, and FC Road </strong>
            secure top CET scores and admissions into leading engineering and pharmacy colleges in Maharashtra.
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
                <span>Daily concept-oriented lectures with assignments.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Assignments & Practice:</h6>
                <span>Weekly tests and full-length CET mock exams.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Mock Tests:</h6>
                <span>Doubt-solving sessions for deeper clarity.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Progress Reports:</h6>
                <span>Regular parent–student progress discussions.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Extra Activites:</h6>
                <span>Special sessions on time management & accuracy improvement.</span>
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
                MHT-CET Coaching Institute in Shivaji Nagar {" "}
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
                     Who can join MHT-CET coaching at ASQUARE Academy, Shivaji Nagar?
                    </button>
                  </h2>
                  <div
                    id="collapse1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionLeft"
                  >
                    <div className="accordion-body">
                      Class XI, XII, and dropper aspirants from Shivaji Nagar and nearby areas.
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
                      Are mock tests included?
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
                     What are the course options?
                    </button>
                  </h2>
                  <div
                    id="collapse7"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionRight"
                  >
                    <div className="accordion-body">
                      We offer <strong> 2-Year Integrated, 1-Year Target, Crash Course & Dropper Batches.</strong>
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
                    Which areas does this branch serve?
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
                         Shivaji Nagar, JM Road, FC Road, Deccan Gymkhana & Model Colony.
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
                      Do you keep batches small?
                    </button>
                  </h2>
                  <div
                    id="collapse5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionRight"
                  >
                    <div className="accordion-body">
                      Yes – to ensure individual focus and mentoring.
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
              in Maharashtra. Choosing the right MHT-CET institute in Shivaji Nagar, PCMC ensures systematic preparation and better results.
             </p> 
            <p>
               At ASQUARE Academy Shivaji Nagar, our coaching program builds strong fundamentals, improves accuracy, and provides regular test practice to help students achieve their goals.
            </p>
            <h4 className="common_title" style={{ color: "#05479b" }}>
              <strong>Subjects Covered</strong>
            </h4>
            <ul className="common_ul">
              <li className="mb-4">
                <span>
                  <strong>Physics:</strong> Core concepts with extensive numerical practice.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong>Chemistry:</strong> CET-focused Physical, Organic & Inorganic problem-solving.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong>Mathematics / Biology: </strong>
                  Intensive PCM (Engineering) & PCB (Pharmacy) preparation
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
                 Ideal for students from Shivaji Nagar & Deccan
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    1-Year Target Batch (Class XII + CET):
                  </strong>{" "}
                  Popular among JM Road & FC Road aspirants.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    Crash Course (2-3 Months):
                  </strong>{" "}
                  Quick, high-impact revision for last-minute CET prep.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    Repeater / Dropper Batch:
                  </strong>{" "}
                  Dedicated year-long program for XII pass-outs.
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
                ASQUARE Academy Shivaji Nagar Today
            </span>
          </h5>
          <p>
            Prepare for CET with the{" "}
            <strong> Top coaching institute in Shivaji Nagar, Pune.</strong>{" "}
            With expert faculty, personalized mentoring, and proven success, ASQUARE Academy is your trusted partner for CET success.{" "}
            <strong>
               Serving students from Shivaji Nagar, JM Road, FC Road, Deccan Gymkhana & Model Colony.
            </strong>
          </p>
          <h4>
            <strong>
              Admissions Open – Limited Seats. Enroll now and secure your success!
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

export default MHTShivajiNagar;
