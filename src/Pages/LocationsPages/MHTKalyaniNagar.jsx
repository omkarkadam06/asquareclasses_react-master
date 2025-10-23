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
import image1 from "../../Assets/locationPageImages/mht-cet/MH-CET page 6.jpeg";
import image2 from "../../Assets/locationPageImages/mht-cet/MH-CET page 7.jpeg";
import location from "../../Assets/locationPageImages/mht-cet/location.png";
import personalized from "../../Assets/locationPageImages/mht-cet/personalized.png";
import qualified from "../../Assets/locationPageImages/mht-cet/qualified.png";
import updated from "../../Assets/locationPageImages/mht-cet/updated.png";
import weekly_chapter from "../../Assets/locationPageImages/mht-cet/weekly_chapter.png";

const Reviews = React.lazy(() =>
  import("../../Components/Reviews/Reviews.jsx")
);

function MHTKalyaniNagar() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  return (
    <>
      <Helmet>
        <title>
          MHT-CET Coaching & Classes in Kalyani Nagar Pune | ASQUARE Academy
        </title>
        <meta
          name="title"
            content="MHT-CET Coaching & Classes in Kalyani Nagar Pune | ASQUARE Academy"
            />
        <meta
          name="description"
          content="Get the best MHT-CET coaching in Kalyani Nagar, Pune with expert mentors, focused preparation, and top results for engineering aspirants at ASQUARE Academy."
        />
        <meta
          name="keywords"
          content="MHT-CET Coaching in Kalyani Nagar Pune, Best MHT-CET Classes in Kalyani Nagar, Top CET Coaching Institute Kalyani Nagar, MHT-CET Preparation in Kalyani Nagar, ASQUARE Academy Kalyani Nagar, MHT-CET Coaching near Yerawada, CET Classes near Viman Nagar, Engineering CET Coaching Kalyani Nagar Pune, Pharmacy CET Coaching Kalyani Nagar Pune, Top CET Institute in East Pune"
        />
        <script type="application/ld+json">{`
          {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-kalyani-nagar-pune",
      "url": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-kalyani-nagar-pune",
      "name": "MHT-CET Coaching & Classes in Kalyani Nagar Pune | ASQUARE Academy",
      "description": "Get the best MHT-CET coaching in Kalyani Nagar, Pune with expert mentors, focused preparation, and top results for engineering aspirants at ASQUARE Academy.",
      "inLanguage": "en",
      "publisher": {
        "@type": "EducationalOrganization",
        "name": "ASQUARE Academy",
        "url": "https://www.asquareclasses.com"
      },
      "breadcrumb": {
        "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-kalyani-nagar-pune#breadcrumb"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-kalyani-nagar-pune#breadcrumb",
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
          "item": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-kalyani-nagar-pune"
        }
      ]
    },
    {
      "@type": "EducationalOrganization",
      "@id": "https://www.asquareclasses.com#organization",
      "name": "ASQUARE Academy",
      "url": "https://www.asquareclasses.com",
      "logo": " https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Kalyani Nagar",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411006",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.facebook.com/asquareacademy",
        "https://www.instagram.com/asquareacademy"
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can join MHT-CET coaching at ASQUARE Kalyani Nagar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students in Class XI, XII, and drop-year aspirants targeting Engineering or Pharmacy CET exams can join our MHT-CET coaching in Kalyani Nagar."
          }
        },
        {
          "@type": "Question",
          "name": "What subjects are covered in the course?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our course covers Physics, Chemistry, Mathematics (for Engineering), and Biology (for Pharmacy) with concept clarity and exam-oriented preparation."
          }
        },
        {
          "@type": "Question",
          "name": "Are mock tests part of the curriculum?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — regular topic tests and full-length CET mock exams are conducted for every batch to track performance and readiness."
          }
        },
        {
          "@type": "Question",
          "name": "What batch options are available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer 2-year, 1-year, crash course, and repeater batches at ASQUARE Academy Kalyani Nagar depending on student needs and goals."
          }
        },
        {
          "@type": "Question",
          "name": "How are parents updated about progress?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Parents receive regular updates through PTMs, performance analytics, and detailed progress reports for better academic tracking."
          }
        },
        {
          "@type": "Question",
          "name": "Which nearby areas are served by this branch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students from Viman Nagar, Yerawada, Koregaon Park, Kharadi, Mundhwa, Airport Road, and Nagar Road attend our Kalyani Nagar centre."
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
                Achieve Your CET Goals with <span className="common_title_span">ASQUARE Academy</span> Kalyani Nagar.
              </h1>
              <p>
                Searching for top-quality{" "}
                <strong>MHT-CET coaching classes in Kalyani Nagar, Pune?</strong>
                At <strong>ASQUARE Academy, </strong>we prepare students for success in <strong>Engineering (PCM) </strong>and{" "}
                <strong>Pharmacy (PCB)</strong>streams through expert faculty, NCERT-based content, and consistent test practice.
              </p>
              <p>
                Our Kalyani Nagar centre is strategically located near {" "}
                <strong>
                  Viman Nagar, Yerawada, Koregaon Park, Kharadi, Mundhwa, Airport Road, and Nagar Road, {" "}
                </strong>
                making it a preferred destination for <strong>MHT-CET aspirants in East Pune </strong>who want focused, result-oriented preparation.
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
                ASQUARE Academy for MHT-CET in Kalyani Nagar?
              </h2>
              <ul className="common_ul">
                <li>
                  <span>
                    <strong>Experienced Faculty:</strong> Domain experts for Physics, Chemistry, Maths & Biology.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Comprehensive Syllabus Coverage:</strong> Based on the latest CET exam structure.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Small Batches:</strong> Individual attention and personalized doubt-solving.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Mock Tests & Analysis:</strong> Regular tests with detailed performance reviews.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Integrated Learning: </strong> Balanced preparation for <strong>Boards Exams + MHT-CET preparation.</strong>
                  </span>
                </li>
              </ul>
              <p>
                At ASQUARE, every student receives the right blend of academic support and exam strategy training to perform confidently in the CET exam.
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
                Joining ASQUARE Academy, Kalyani Nagar:
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
                    CET-specific curriculum & updated study materials.
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={updated} alt="" />
                <div className="grid_content">
                  <h6 className="grid_item_title">
                    Small batch sizes for personal guidance.
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={weekly_chapter} alt="" />
                <div className="grid_content">
                  <h6 className="grid_item_title">
                    Regular assessments & rank analysis.
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={personalized} alt="" />
                <div className="grid_content">
                  <h6 className="grid_item_title">
                    Expert mentorship and academic counseling.
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={location} alt="" />
                <div className="grid_content">
                  <h6 className="grid_item_title">
                    Convenient access for students from
                  </h6>
                  <p>
                    <strong>
                      Viman Nagar, Yerawada, Koregaon Park, Kharadi, Mundhwa, Airport Road, and Nagar Road
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
              <strong>ASQUARE Academy Kalyani Nagar </strong> consistently delivers excellent MHT-CET results, with students securing admissions into Maharashtra's top colleges such as
              {" "}
              <strong>
                COEP Pune, MIT-WPU, DY Patil College, VIT Pune, and Sinhgad Institute of Technology.
              </strong>
              <p className="pt-3">
                Our success lies in strong conceptual teaching, strategic testing, and continuous mentor support.
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
                Our structured approach ensures systematic preparation, concept mastery, and improved test performance.
              </p>
              <a href="/">
                <button class="button mt-3">Know More</button>
              </a>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Interactive Classes</h6>
                <span>Concept-oriented lectures for clarity and retention.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">
                  Daily Practice Papers (DPPs)
                </h6>
                <span>Daily Practice Papers (DPPs) and homework sheets for consistency.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">
                  Weekly & Monthly Tests:
                </h6>
                <span>Weekly chapter tests and monthly mock CET exams.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Doubt-solving sessions</h6>
                <span>Personalized doubt-clearing and performance feedback sessions.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">
                  Parental Updates {" "}
                </h6>
                <span>Regular <strong>Parent-Teacher Meetings (PTMs)</strong> to share progress updates.</span>
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
                MHT-CET Coaching Institute in Kalyani Nagar, Pune{" "}
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
                      Who can join MHT-CET coaching at ASQUARE Kalyani Nagar?
                    </button>
                  </h2>
                  <div
                    id="collapse1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionLeft"
                  >
                    <div className="accordion-body">
                      Students in Class XI, XII, and drop-year aspirants targeting Engineering or Pharmacy CET exams.
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
                      What subjects are covered in the course?
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
                      Are mock tests part of the curriculum?
                    </button>
                  </h2>
                  <div
                    id="collapse3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionLeft"
                  >
                    <div className="accordion-body">
                      Yes — regular topic tests and full-length CET mock exams are conducted for every batch.
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
                      What batch options are available?
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
                        2-year, 1-year, crash course,
                      </strong>{" "}
                      and <strong>repeater batches.</strong>
                      depending on student needs.
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
                      How are parents updated about progress?
                    </button>
                  </h2>
                  <div
                    id="collapse5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionRight"
                  >
                    <div className="accordion-body">
                     Through PTMs, performance analytics, and detailed progress reports.
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
                      Which nearby areas are served by this branch?
                    </button>
                  </h2>
                  <div
                    id="collapse7"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionRight"
                  >
                    <div className="accordion-body">
                      Students from{" "}
                      <strong>
                        Viman Nagar, Yerawada, Koregaon Park, Kharadi, Mundhwa, Airport Road,
                      </strong>{" "} and <strong>Nagar Road </strong>
                       attend our Kalyani Nagar centre.
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
              The <strong>MHT-CET (Maharashtra Common Entrance Test)</strong> opens doors to top {" "}
              <strong>
                Engineering, Pharmacy, and Allied Science colleges
              </strong>{" "}
              in the state.
            </p>
            <p>
              At <strong>ASQUARE Academy Kalyani Nagar,</strong> our program combines{" "}
              <strong>conceptual understanding, numerical practice, and smart exam techniques,</strong>{" "}
              to ensure students perform at their best.
            </p>
            <p>
              We help students from{" "}
              <strong>
                Viman Nagar, Yerawada, Koregaon Park, Kharadi, and Mundhwa
              </strong>{" "}
              build a strong foundation and excel through structured learning and continuous evaluation.
            </p>
            <h4 className="common_title" style={{ color: "#05479b" }}>
              <strong>Subjects Covered</strong>
            </h4>
            <ul className="common_ul">
              <li className='mb-4'>
                <span>
                  <strong>Physics:</strong> Concept-based problem solving with numerical accuracy and speed practice.
                </span>
              </li>
              <li className='mb-4'>
                <span>
                  <strong>Chemistry:</strong> Thorough preparation of Physical, Organic & Inorganic chemistry with CET-pattern questions.
                </span>
              </li>
              <li className='mb-4'>
                <span>
                  <strong>Mathematics / Biology: </strong>
                  Separate tracks for
                  <strong> PCM (Engineering) and PCB (Pharmacy)</strong>{" "}
                  aspirants with regular tests and assignments.
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
                  Board + CET syllabus coverage with weekly evaluations.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    1-Year Target Batch (Class XII + CET):
                  </strong>{" "}
                  Focused concept revision and mock test series.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    Crash Course (2-3 Months):
                  </strong>{" "}
                  Intensive short-term program with past-year question practice.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    Repeater / Dropper Batch:
                  </strong>{" "}
                  One-year advanced batch for CET retakers aiming for high percentile scores.
                </span>
              </li>
            </ul>
            <p>
              All batches include{" "}
              <strong>
                weekly mock exams, progress tracking, and mentor reviews
              </strong>{" "}
              to ensure measurable growth.
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
                  ASQUARE Academy - Kalyani Nagar, Pune
                </span>
              </h5>
              <p>
                Join <strong>ASQUARE Academy, </strong> the <strong>Best MHT-CET Coaching Institute in Kalyani Nagar, Pune, </strong> and prepare with expert teachers, structured batches, and regular testing.
              </p>
              <p>
                Get ready to crack MHT-CET with confidence and secure admission in top engineering or pharmacy colleges.
              </p>
              <p>
                Serving students from
                <strong>
                  {" "}
                  Kalyani Nagar, Viman Nagar, Yerawada, Koregaon Park, Kharadi, Mundhwa, Airport Road, and Nagar Road.
                </strong>
              </p>
              <h4>Admissions Open - Enroll Now and Excel with ASQUARE!</h4>
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

export default MHTKalyaniNagar;
