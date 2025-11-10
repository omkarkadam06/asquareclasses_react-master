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
import image1 from "../../Assets/locationPageImages/mht-cet/MH-CET page 2.jpeg";
import image2 from "../../Assets/locationPageImages/mht-cet/MH-CET page 3.jpeg";
import location from "../../Assets/locationPageImages/mht-cet/location.png";
import personalized from "../../Assets/locationPageImages/mht-cet/personalized.png";
import qualified from "../../Assets/locationPageImages/mht-cet/qualified.png";
import updated from "../../Assets/locationPageImages/mht-cet/updated.png";
import weekly_chapter from "../../Assets/locationPageImages/mht-cet/weekly_chapter.png";

const Reviews = React.lazy(() =>
  import("../../Components/Reviews/Reviews.jsx")
);

function MHTTingreNagar() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  return (
    <>
      <Helmet>
        <title>
          MHT-CET Coaching in Tingre Nagar Pune | ASQUARE Academy
        </title>
        <meta
          name="title"
          content="MHT-CET Coaching Classes in Tingre Nagar Pune | ASQUARE Academy"
        />
        <meta
          name="description"
          content="Get the best MHT-CET coaching in Tingre Nagar, Pune with expert guidance, small batches, and full syllabus coverage at ASQUARE Academy near Vishrantwadi & Dhanori."
        />
        <meta
          name="keywords"
          content="MHT-CET Coaching in Tingre Nagar Pune,Best MHT-CET Classes in Tingre Nagar,Top CET Coaching Institute Tingre Nagar,MHT-CET Preparation in Tingre Nagar,ASQUARE Academy Tingre Nagar,MHT-CET Coaching near Vishrantwadi,CET Classes near Dhanori,Engineering CET Coaching Tingre Nagar Pune,Pharmacy CET Coaching Tingre Nagar Pune,Top CET Institute in North Pune"
        />
        <script type="application/ld+json">{`
          {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-tingre-nagar-pune",
      "url": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-tingre-nagar-pune",
      "name": "MHT-CET Coaching Classes Institute in Tingre Nagar Pune | ASQUARE Academy",
      "description": "Join MHT-CET Coaching Classes in Tingre Nagar Pune for Engineering and Pharmacy aspirants. Expert faculty, mock tests, and small batches for personalized mentoring.",
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
        "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-tingre-nagar-pune#breadcrumb"
      },
      "mainEntity": {
        "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-tingre-nagar-pune#faq"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-tingre-nagar-pune#breadcrumb",
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
          "name": "MHT-CET Coaching Classes in Tingre Nagar Pune",
          "item": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-tingre-nagar-pune"
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
        "streetAddress": "Tingre Nagar, Pune, Maharashtra",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411015",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-XXXXXXXXXX",
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
      "@id": "https://www.asquareclasses.com/mht-cet-coaching-classes-institute-in-tingre-nagar-pune#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can join MHT-CET coaching at ASQUARE Tingre Nagar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students from Class XI, Class XII, or drop-year aspirants preparing for Engineering or Pharmacy entrance exams can join MHT-CET coaching at ASQUARE Tingre Nagar."
          }
        },
        {
          "@type": "Question",
          "name": "What subjects are included?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The program includes Physics, Chemistry, and Mathematics for PCM students, and Biology for PCB students."
          }
        },
        {
          "@type": "Question",
          "name": "Are mock tests and assessments included?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, weekly chapter tests, full-length CET mock exams, and detailed result analysis are part of the MHT-CET program."
          }
        },
        {
          "@type": "Question",
          "name": "What batch options are available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ASQUARE Tingre Nagar offers 2-year integrated, 1-year target, crash course, and repeater batches for MHT-CET coaching."
          }
        },
        {
          "@type": "Question",
          "name": "How do parents track student progress?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Parents receive detailed progress reports and can attend regular parent–teacher meetings to stay updated on student performance."
          }
        },
        {
          "@type": "Question",
          "name": "Which nearby areas does ASQUARE Tingre Nagar serve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students from Vishrantwadi, Dhanori, Lohegaon, Yerawada, Airport Road, Khadki, and Viman Nagar attend ASQUARE Tingre Nagar for MHT-CET coaching."
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
                Excel in <span className="common_title_span">MHT-CET</span> with Expert Guidance
                from ASQUARE Academy, Tingre Nagar
              </h1>
              <p>
                Searching for the most result-driven{" "}
                <strong>MHT-CET coaching classes in Tingre Nagar, Pune? </strong>
                At <strong>ASQUARE Academy Tingre Nagar,</strong> we specialize in
                preparing students for <strong>Engineering (PCM) </strong>and{" "}
                <strong>Pharmacy (PCB)</strong>streams with focused conceptual
                teaching, personalized mentoring, and consistent testing.
              </p>
              <p>
                Our centre at Tingre Nagar is easily accessible for students from {" "}
                <strong>
                  Vishrantwadi, Dhanori, Lohegaon, Yerawada, Airport Road, Khadki, and Viman Nagar{" "}
                </strong>
                — making it one of the most preferred destinations for {" "}
                <strong>MHT-CET coaching institutes in North-East Pune.</strong>
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
                ASQUARE Academy for MHT-CET in Tingre Nagar ?
              </h2>
              <p>
                Our teaching approach ensures concept clarity, accuracy, and time management — the three keys to cracking MHT-CET successfully.
              </p>
              <ul className="common_ul">
                <li>
                  <span>
                    <strong>Expert Faculty:</strong> Subject experts in Physics, Chemistry, Maths, and Biology with years of CET experience.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Structured Curriculum:</strong> Based on the latest MHT-CET pattern, focusing on conceptual clarity.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Small Batch size:</strong> Personal guidance and doubt-solving for every student.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Mock Tests & Analysis:</strong> Weekly chapter tests and full-length CET mock exams.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Dual Learning Advantage: </strong> Integrated preparation for both <strong>Boards + CET exam.</strong>
                  </span>
                </li>
              </ul>
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
                Joining ASQUARE Academy, Tingre Nagar:
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
                    Small batches ensuring personal focus
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={updated} alt="" />
                <div className="grid_content">
                  <h6 className="grid_item_title">
                    Updated CET-based syllabus and study resources
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={personalized} alt="" />
                <div className="grid_content">
                  <h6 className="grid_item_title">
                    Regular mock tests and exam simulations
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={weekly_chapter} alt="" />
                <div className="grid_content">
                  <h6 className="grid_item_title">
                    Performance analytics with rank tracking
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_item">
                <img className="grid_img" src={location} alt="" />
                <div className="grid_content">
                  <h6 className="grid_item_title">
                    Expert mentorship and motivational sessions
                  </h6>
                  <p>
                    Easy access for students from
                    <strong>
                      Vishrantwadi, Dhanori, Lohegaon, Yerawada, Airport Road, Khadki, and Viman Nagar
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="leftright_section padd_bottom mt-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <h4 className="common_title">Proven Results </h4>
              Students of {" "}
              <strong>ASQUARE Academy Tingre Nagar</strong> have consistently excelled in 
              {" "}
              <strong>
                MHT-CET,
              </strong>
              {" "}gaining admission into reputed colleges such as {" "}
              <strong>COEP Pune, MIT-WPU, DY Patil Institute, VIT Pune, and Sinhgad College of Engineering.</strong>
              <p>
                Our consistent record reflects the academy's commitment to <strong>concept-based learning, regular assessments, and personalized coaching.</strong>
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
                Our structured methodology ensures steady academic growth and CET readiness.
              </p>
              <a href="/">
                <button class="button mt-3">Know More</button>
              </a>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Interactive Classes</h6>
                <span>Daily topic-wise lectures emphasizing conceptual clarity.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">
                  Daily Practice Papers (DPPs)
                </h6>
                <span>Enhance accuracy through consistent problem-solving.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">
                  Weekly & Monthly Tests:
                </h6>
                <span>Evaluate performance and identify improvement areas.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">Doubt-solving sessions</h6>
                <span>One-on-one support for conceptual clarity.</span>
              </div>
              <div className="methodoloy_itembox">
                <h6 className="methodology_title">
                  Parental Updates {" "}
                </h6>
                <span>Regular PTMs and performance reports to track progress.</span>
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
                MHT-CET Coaching Institute in Tingre Nagar, Pune{" "}
                <span className="common_title_span">(FAQs)</span>
              </h5>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="accordion accordion-flush" id="accordionFlushLeft">
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
                      Who can join MHT-CET coaching at ASQUARE Tingre Nagar?
                    </button>
                  </h2>
                  <div
                    id="collapse1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionLeft"
                  >
                    <div className="accordion-body">
                      Students from Class XI, Class XII, or drop-year aspirants preparing for Engineering or Pharmacy entrance exams.
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
                      What subjects are included?
                    </button>
                  </h2>
                  <div
                    id="collapse2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionLeft"
                  >
                    <div className="accordion-body">
                      Physics, Chemistry, Mathematics (for PCM) and Biology (for PCB).
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
                      Yes — weekly chapter tests, full-length CET mock exams, and result analysis are part of the program.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="accordion accordion-flush" id="accordionFlushRight">
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
                      How do parents track student progress?
                    </button>
                  </h2>
                  <div
                    id="collapse5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionRight"
                  >
                    <div className="accordion-body">
                     We provide progress reports and conduct regular parent-teacher meetings.
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
                      Which nearby areas does ASQUARE Tingre Nagar serve ?
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
                        Vishrantwadi, Dhanori, Lohegaon, Yerawada, Airport Road, Khadki, and Viman Nagar
                      </strong>{" "}
                      attend our centre.
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
              The <strong>MHT-CET (Maharashtra Common Entrance Test)</strong> is
              the gateway to top colleges for{" "}
              <strong>
                Engineering, Pharmacy, and Allied Health Science
              </strong>{" "}
              courses in Maharashtra.
            </p>
            <p>
              At <strong>ASQUARE Academy Tingre Nagar,</strong> our curriculum combines {" "}
              <strong>in-depth conceptual learning, practical applications, and performance evaluation</strong>{" "}
              through regular tests and assessments.
            </p>
            <p>
              We help students from{" "}
              <strong>
                Vishrantwadi, Lohegaon, Dhanori, Yerawada, and Viman Nagar
              </strong>{" "}
              achieve their best through consistent mentoring and structured study plans.
            </p>
            <h4 className="common_title" style={{ color: "#05479b" }}>
              <strong>Subjects Covered</strong>
            </h4>
            <ul className="common_ul">
              <li className='mb-4'>
                <span>
                  <strong>Physics:</strong> Strengthen fundamentals with numericals, derivations, and real-world problem-solving.
                </span>
              </li>
              <li className='mb-4'>
                <span>
                  <strong>Chemistry:</strong> Complete coverage of Physical, Organic, and Inorganic chemistry with CET-oriented questions.
                </span>
              </li>
              <li className='mb-4'>
                <span>
                  <strong>Mathematics / Biology:</strong> Separate study plans
                  for <strong>PCM (Engineering) and PCB (Pharmacy)</strong>{" "}
                  with chapter-wise assignments and revision tests.
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
            <p>
              All programs include{" "}
              <strong>
                weekly testing, progress tracking, and one-on-one mentor support.
              </strong>
            </p>
            <ul className="common_ul">
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    2-Year Integrated Program (Class XI + XII + CET):
                  </strong>{" "}
                  Complete board + CET preparation for a strong foundation.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    1-Year Target Batch (Class XII + CET):
                  </strong>{" "}
                  Focused NEET-style coverage with weekly mock exams.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    Crash Course (2-3 Months):
                  </strong>{" "}
                  Fast-paced batch for revision and practice before the exam.
                </span>
              </li>
              <li className="mb-4">
                <span>
                  <strong className="fs-5 text-yellow">
                    Repeater / Dropper Batch:
                  </strong>{" "}
                  A full one-year course designed for students retaking MHT-CET.
                </span>
              </li>
            </ul>
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
                  ASQUARE Academy - Tingre Nagar, Pune
                </span>
              </h5>
              <p>
                Join <strong>ASQUARE Academy,</strong> the{" "}
                <strong>Best MHT-CET Coaching Institute in Tingre Nagar, Pune</strong>
                and begin your journey toward success.
              </p>
              <p>
                With experienced mentors, structured learning, and continuous performance analysis, you can confidently aim for top CET ranks.
              </p>
              <p>
                Serving students from
                <strong>
                  {" "}
                 Tingre Nagar, Vishrantwadi, Dhanori, Lohegaon, Yerawada, Airport Road, Khadki, and Viman Nagar.
                </strong>
              </p>
              <h4>Admissions Open - Enroll Now and Boost Your MHT-CET Preparation!</h4>
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

export default MHTTingreNagar;
