
import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import Loading from "../Loading.jsx";
import MobileForm from "../../Components/Mobileform/MobileForm.jsx";
import "../locationspage.css";
import locationBGImage from "../../Assets/locationPageImages/mht-cet/mhcet-desktop-bg5.0.jpeg";
import MobileBGImage from "../../Assets/locationPageImages/mht-cet/mhcet-mobile-bg5.0.jpeg";
import MethodologyBg from "../../Assets/locationPageImages/teaching-methodology.jpeg";
import image1 from "../../Assets/locationPageImages/mht-cet/MH-CET page 7.jpeg";
import image2 from "../../Assets/locationPageImages/mht-cet/MH-CET page 14.jpeg";
import location from "../../Assets/locationPageImages/mht-cet/location.png";
import personalized from "../../Assets/locationPageImages/mht-cet/personalized.png";
import qualified from "../../Assets/locationPageImages/mht-cet/qualified.png";
import updated from "../../Assets/locationPageImages/mht-cet/updated.png";
import weekly_chapter from "../../Assets/locationPageImages/mht-cet/weekly_chapter.png";

const Reviews = React.lazy(() =>
  import("../../Components/Reviews/Reviews.jsx")
);

function MHTFatimaNagar() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  return (
    <>
      <Helmet>
        <title>
         Best MHT-CET Coaching Classes in Fatima Nagar Pune | ASQUARE Academy Fatima Nagar
        </title>
        <meta
          name="title"
          content="Best MHT-CET Coaching Classes in Fatima Nagar Pune | ASQUARE Academy Fatima Nagar"
        />
        <meta
          name="description"
          content="Join ASQUARE Academy Fatima Nagar for top MHT-CET coaching in Pune. Expert faculty, mock tests & personalized mentoring for Engineering & Pharmacy aspirants."
        />
        <meta
          name="keywords"
          content="MHT-CET Coaching in Fatima Nagar pune,Best MHT-CET Classes in Fatima Nagar pune,Top CET Coaching Institute Fatima Nagar pune,MHT-CET Preparation in Fatima Nagar pune,Best MHT-CET Coaching in Fatima Nagar pune,ASQUARE Academy Fatima Nagar pune"
        />
        <script type="application/ld+json">{`
        {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-fatima-nagar-pune#localbusiness",
      "name": "ASQUARE Academy Fatima Nagar",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "url": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-fatima-nagar-pune",
      "telephone": "9766118877",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Fatima Nagar",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411040",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune/"
      ],
      "priceRange": "₹₹",
      "description": "ASQUARE Academy Fatima Nagar offers expert-led MHT-CET coaching in Pune for Engineering and Pharmacy aspirants with concept-based learning and mock tests."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-fatima-nagar-pune#webpage",
      "url": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-fatima-nagar-pune",
      "name": "MHT-CET Coaching in Fatima Nagar Pune | ASQUARE Academy Fatima Nagar",
      "description": "Join ASQUARE Academy Fatima Nagar for the best MHT-CET coaching in Pune. Comprehensive CET preparation for Engineering (PCM) and Pharmacy (PCB) students.",
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
      "name": "ASQUARE Academy Fatima Nagar",
      "url": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-fatima-nagar-pune",
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune/"
      ],
      "department": "MHT-CET Coaching Division",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Fatima Nagar",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411040",
        "addressCountry": "IN"
      },
      "telephone": "9766118877"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can join MHT-CET coaching at ASQUARE Academy Fatima Nagar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students from Class XI, XII, or those repeating the year can enroll in ASQUARE Academy Fatima Nagar for focused MHT-CET coaching."
          }
        },
        {
          "@type": "Question",
          "name": "Which subjects are covered in MHT-CET preparation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE Academy Fatima Nagar covers Physics, Chemistry, and Mathematics for Engineering aspirants, and Biology for Pharmacy aspirants."
          }
        },
        {
          "@type": "Question",
          "name": "Do you conduct mock tests and practice sessions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we hold weekly chapter tests and full-length CET mock exams to help students evaluate progress and improve performance."
          }
        },
        {
          "@type": "Question",
          "name": "What are the available course options?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Courses include 2-Year Integrated, 1-Year Intensive, Crash Course, and Repeaters batches for all levels of MHT-CET preparation."
          }
        },
        {
          "@type": "Question",
          "name": "Is the Fatima Nagar branch easily accessible?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, the ASQUARE Fatima Nagar branch is conveniently located for students from Wanowrie, Kondhwa, Camp, Hadapsar, and NIBM Road."
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
          "name": "MHT-CET Coaching in Fatima Nagar Pune",
          "item": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-fatima-nagar-pune"
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
              <img className="common_image" src={image1} alt="ASQUARE Fatima Nagar" />
            </div>
            <div className="col-lg-6 col-md-12 order-1 order-lg-2">
              <h1 className="common_title">
                Build Your Future with Expert Guidance {" "}
                <span className="common_title_span">ASQUARE Academy,</span>{" "}
                Fatima Nagar
              </h1>
              <p>
                Looking for the {" "}<strong> best MHT-CET coaching classes in Fatima Nagar, Pune ? </strong> At
                <strong> ASQUARE Academy – Fatima Nagar,  </strong> center delivers targeted, structured CET preparation led by experienced faculty. We're conveniently accessible for students from{" "}
                 <strong>
                     Fatima Nagar, Hadapsar, Mundhwa, Kalyani Nagar, Camp (Pune Cantonment), Wanowrie, Undri, Magarpatta City,
                </strong>
                {" "}and surrounding localities. We combine expert coaching, mock tests, and personalized support to help aspirants succeed in
                <strong> Engineering and Pharmacy entrance exams. </strong>
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
                ASQUARE Academy for MHT-CET Coaching in Fatima Nagar?
              </h2>
              <ul className="common_ul">
                <li>
                  <strong>Expert CET Faculty :</strong> Instructors experienced in MHT-CET, JEE, and NEET methodologies.
                </li>
                <li>
                  <strong>Full Syllabus Coverage :</strong> Physics, Chemistry, and Mathematics/Biology aligned with the MHT-CET pattern.
                </li>
                <li>
                  <strong>Personalized Coaching:</strong>  Small class sizes ensure focused learning and quick doubt resolution.
                </li>
                <li>
                  <strong>Regular Mock Tests & Feedback: </strong> Weekly tests paired with comprehensive performance analysis.
                </li>
                <li>
                  <strong>Career Guidance & Motivation Sessions:</strong> Strategies to build confidence and enhance exam readiness.
                </li>
              </ul>
              <p>
                ASQUARE’s result-oriented approach helps students strengthen their basics, improve accuracy, and perform confidently in competitive exams.
              </p>
            </div>
            <div className="col-lg-6 col-md-12 img-col order-1 order-lg-2">
              <img className="common_image" src={image2} alt="Fatima Nagar classes" />
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
                ASQUARE Academy Fatima Nagar
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
                  Small batch sizes for individualized learning.
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={updated} alt="" />
                <h6 className="grid_item_title">
                  Updated CET-aligned study materials.
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={weekly_chapter} alt="" />
                <h6 className="grid_item_title">
                  Strategic time-management and exam preparation workshops.
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={personalized} alt="" />
                <h6 className="grid_item_title">
                  Parent–teacher meetings for academic tracking.s
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={location} alt="" />
                <h6 className="grid_item_title">
                 Strategically located for <strong> Fatima Nagar, Mundhwa, Kalyani Nagar, Camp, Wanowrie, Undri, Hadapsar, and Magarpatta City </strong>
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
                ASQUARE Academy Fatima Nagar 
            </strong>
            {" "}has a proven record of CET success, with students from the catchment area entering prestigious engineering and pharmacy programs—earning our centre the reputation of the
            {" "} <strong> best MHT-CET coaching in Fatima Nagar and surrounding regions. </strong>
          </p>
          <p>
            Our center is widely recognized as the <strong> best MHT-CET coaching institute in Fatima Nagar and nearby PCMC corridors.</strong>
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
                 This proven learning framework ensures strong fundamentals, consistent practice, and exam confidence.
                </strong>{" "}
              </p>
              <a href="/">
                <button className="button mt-3">Know More</button>
              </a>
            </div>
            <div className="col-lg-6">
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Concept-Building Lectures:</h6>
                <span>Daily lectures with focus on core concept clarity.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Assignments & Practice:</h6>
                <span>Structured chapter-wise assignments.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Mock Tests:</h6>
                <span>One-on-one doubt-resolving sessions.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Progress Reports:</h6>
                <span>Topic-specific and full-length mock tests.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Extra Activites:</h6>
                <span>Parent–student performance reviews.</span>
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
                MHT-CET Coaching Institute in Fatima Nagar {" "}
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
                      Who can enroll in MHT-CET coaching at ASQUARE Academy Fatima Nagar?
                    </button>
                  </h2>
                  <div
                    id="collapse1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionLeft"
                  >
                    <div className="accordion-body">
                     Students of Class XI, XII, and droppers from Fatima Nagar, Mundhwa, Kalyani Nagar, Camp, Wanowrie, Undri, Hadapsar, and Magarpatta City.
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
                      Physics, Chemistry, Mathematics (PCM), and Biology (PCB) catered to the student’s stream.
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
                       Are mock tests provided?
                    </button>
                  </h2>
                  <div
                    id="collapse3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionLeft"
                  >
                    <div className="accordion-body">
                      Yes—weekly chapter tests and full-length mock exams are integral to the curriculum.
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
                     Are classes kept small for better learning?
                    </button>
                  </h2>
                  <div
                    id="collapse7"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionRight"
                  >
                    <div className="accordion-body">
                      Definitely—limited batch sizes ensure personalized focus and doubt resolution.
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
                     Are parents updated on student progress?
                    </button>
                  </h2>
                  <div
                    id="collapse4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionRight"
                  >
                    <div className="accordion-body">
                    Yes—PTMs and performance reports are shared regularly.
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
                      Where is the institute located?
                    </button>
                  </h2>
                  <div
                    id="collapse5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionRight"
                  >
                    <div className="accordion-body">
                        <strong> ASQUARE Academy Fatima Nagar, Pune </strong>
                      easily accessible from Fatima Nagar, Mundhwa, Kalyani Nagar, Camp, Wanowrie, Undri, Hadapsar, and Magarpatta City. Additional branches include
                      <strong> Vishrantwadi, Wakad, Chinchwad, Pimple Saudagar, Kasarwadi, Bhosari, Nigdi, Ravet, Alandi, and Chakan.</strong>
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
              The <strong>MHT-CET (Maharashtra Common Entrance Test)</strong> serves as a key pathway for entry into  <strong> Engineering, Pharmacy, and Allied Health Science admissions.</strong>
              Given the intense competition, structured coaching at the right centre becomes a game-changer.
            </p> 
            <p>
                At <strong>  ASQUARE Academy Fatima Nagar, </strong> our CET training is designed to improve conceptual clarity, speed, accuracy, and preparedness through consistent practice and strategic guidance.
            </p>
            <p>
                Our CET coaching in Fatima Nagar is designed to strengthen conceptual understanding, improve accuracy and speed, and ensure comprehensive exam preparation.
            </p>
            <h4 className="common_title" style={{ color: "#05479b" }}>
              <strong>Subjects Covered</strong>
            </h4>
            <ul className="common_ul">
              <li className="mb-4">
                <span>
                  <strong>Physics:</strong>  Conceptual grounding with rigorous numerical drills.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong>Chemistry:</strong> Focused coverage of Physical, Organic, and Inorganic branches.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong>Mathematics / Biology: </strong>
                  PCM for engineering applicants and PCB for pharmacy aspirants.
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
                 Blends board syllabus with CET-focused learning.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    1-Year Target Batch (Class XII + CET):
                  </strong>{" "}
                 Intensive CET preparation along with Class XII content.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    Crash Course (2-3 Months):
                  </strong>{" "}
                   2–3 months of high-intensity CET preparation.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    Repeater / Dropper Batch:
                  </strong>{" "}
                  1-year dedicated strategy for improving CET scores post-Class XII
                </span>
              </li>
            </ul>
            <p>
             Each course includes <strong> weekly tests, mentor sessions, and personalized performance analysis.</strong>
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
                ASQUARE Academy Fatima Nagar Today
            </span>
          </h5>
          <p>
            Embark on your MHT-CET journey with the most trusted coaching centre close to home. With expert mentors, disciplined learning, and proven results, {" "}
            <strong> ASQUARE Academy Fatima Nagar, </strong>{" "}
            in Fatima Nagar stands out as your partner in exam success.
          </p>
          <p>
            Ideal for students from{" "}
            <strong> Fatima Nagar, Mundhwa, Kalyani Nagar, Camp, Wanowrie, Undri, Hadapsar, and Magarpatta City. </strong>
          </p>
          <h4>
            <strong>
              Limited seats — enroll now!
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

export default MHTFatimaNagar;
