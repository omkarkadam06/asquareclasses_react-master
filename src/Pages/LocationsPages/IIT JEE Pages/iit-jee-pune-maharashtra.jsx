import React, { useEffect, useState, Suspense } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Users,
  BookOpen,
  Target,
  BarChart,
  Lightbulb,
  MapPin,
  BadgeQuestionMark,
  Star,
  Trophy,
  Rocket,
} from "lucide-react";
import Navbar from "../../../Components/Navbar/Navbar.jsx";
import Header from "../../../Components/Header/Header.jsx";
import MobileForm from "../../../Components/Mobileform/MobileForm.jsx";
import Footer from "../../../Components/Footer/Footer.jsx";
import FAQAccordion from "../../LocationsPages/neet-pages/components/FAQAccordion.jsx";
import "../../../App.css";
import "./iit-jee.css";
import Loading from "../../Loading.jsx";
import sampleimg1 from "../../../Assets/SampleImages/sampleimg1.jpeg";
// import sampleimg2 from "../../../Assets/SampleImages/sampleimg2.jpeg";
import sampleimg2 from '../../../Assets/SampleImages/MobBanners/MobBanner2.jpeg';
import sampleimg22 from'../../../Assets/SampleImages/MobBanners/MobBanner3.jpeg';
import sampleimg3 from "../../../Assets/SampleImages/sampleimg3.jpeg";
import sampleimg4 from "../../../Assets/SampleImages/sampleimg4.jpeg";
import sampleimg5 from "../../../Assets/SampleImages/sampleimg5.jpeg";
import sampleimg6 from "../../../Assets/SampleImages/sampleimg6.jpeg";
import sampleimg7 from "../../../Assets/SampleImages/sampleimg7.jpeg";
// import Swal from "sweetalert2";
import Form from "../../../Components/Form2/Form2.jsx";

const Reviews = React.lazy(() => import("../../../Components/Reviews/Reviews.jsx"));

function IITJEEPuneMaharashtra() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Content inserted EXACTLY as provided by the user
  const whyChoose = [
    {
      Icon: Users,
      title: "Expert Faculty",
      desc: "Highly experienced mentors specializing in IIT-JEE, NEET & CET subjects.",
    },
    {
      Icon: BookOpen,
      title: "Comprehensive PCM Coverage",
      desc: "Physics, Chemistry & Mathematics taught as per the updated JEE syllabus.",
    },
    {
      Icon: Target,
      title: "Personalized Learning",
      desc: "Small batches ensure doubt-solving, focused mentoring & interactive learning.",
    },
    {
      Icon: BarChart,
      title: "Weekly Tests & Mocks",
      desc: "Regular assessments, progress reports & mock tests for exam readiness.",
    },
    {
      Icon: Lightbulb,
      title: "Motivational Guidance",
      desc: "Career counseling, exam strategy & performance improvement sessions.",
    },
  ];

  const programsList = [
    "2-Year Foundation Course (Class 10 → 12): Integrated preparation for Boards + JEE.",
    "1-Year Advanced Course (Class 11 → 12): Intensive JEE-focused coaching with complete XII syllabus.",
    "Crash Course (2–3 Months): High-speed revision, intensive tests & strategy workshops.",
    "Dropper/Repeater Batch: Exclusive one-year program for XII pass-outs offering focused JEE Advanced coaching classes in Pune Maharashtra.",
  ];

  const subjects = [
    { title: "Physics", desc: "Strong fundamentals, numerical accuracy & conceptual applications." },
    { title: "Chemistry", desc: "Complete Physical, Organic & Inorganic Chemistry coverage." },
    { title: "Mathematics", desc: "Rigorous practice across Algebra, Calculus, Geometry & Trigonometry." },
  ];

  const methodology = [
    "Concept-based lectures with structured daily assignments",
    "Dedicated doubt-solving sessions with expert mentors",
    "Weekly topic-wise tests & full-length JEE mock exams",
    "Regular PTMs with detailed performance reports",
  ];

  const features = [
    "Limited batch size enabling personalized mentoring",
    "Updated JEE study material, revision notes & test series",
    "Workshops focused on speed, accuracy & exam strategies",
    "Strong track record of results & student success",
    "Trusted among the Best IIT JEE Classes in Pune Maharashtra",
  ];

  const faqs = [
    {
      q: "Q1: Who can join ASQUARE Academy Pune Maharashtra?",
      a: "Students of Class XI, XII & XII pass-outs preparing for JEE Main & Advanced.",
    },
    {
      q: "Q2: What subjects do you teach?",
      a: "We offer complete PCM coaching—Physics, Chemistry & Mathematics—as per the JEE syllabus.",
    },
    {
      q: "Q3: Do you offer JEE Advanced coaching classes in Pune Maharashtra?",
      a: "Yes, we provide structured IIT JEE Advanced Preparation in Pune Maharashtra with tests, advanced modules & mentor support.",
    },
    {
      q: "Q4: How are the batches structured?",
      a: "Batches are kept small to ensure personalized attention & close interaction with faculty.",
    },
    {
      q: "Q5: What makes ASQUARE one of the Best IIT JEE Classes in Pune Maharashtra?",
      a: "Our integrated learning approach, daily assignments, mock tests & mentor-led analysis.",
    },
    {
      q: "Q6: Are mock tests conducted regularly?",
      a: "Absolutely. Weekly tests & full-length mock exams help improve speed & accuracy.",
    },
    {
      q: "Q7: Which areas do you serve in Pune Maharashtra?",
      a: "Our centers are accessible from Pune, Pimpri, Chinchwad, Nigdi, Wakad, Akurdi, Ravet, Pimple Saudagar & nearby areas.",
    },
    {
      q: "Q8: How do parents monitor their child’s performance?",
      a: "Parents receive continuous performance updates and can attend parent–teacher meetings for detailed insights.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>IIT JEE Coaching Classes in Pune Maharashtra | Best JEE Mains & Advanced Institute</title>

        <meta
          name="title"
          content="IIT JEE Coaching Classes in Pune Maharashtra | Best JEE Mains & Advanced Institute"
        />
        <meta
          name="description"
          content="Get the Best IIT JEE Coaching in Pune Maharashtra with expert faculty, PCM training, mock tests & focused batches. Top JEE Mains & Advanced preparation for Class XI–XII students."
        />

        <meta
          name="keywords"
          content="IIT JEE coaching classes in Pune Maharashtra,
Best IIT JEE Coaching in  Pune Maharashtra,
Top JEE Mains Coaching Classes Pune Maharashtra,
IIT JEE Advanced Preparation Pune Maharashtra,
JEE Advanced coaching classes in Pune Maharashtra,
IIT JEE Classes in Pune Maharashtra,
Best IIT JEE Classes in Pune Maharashtra,
Top IIT JEE Classes in Pune Maharashtra,
"
        />

        <script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-pune-maharashtra#localbusiness",
      "name": "ASQUARE Academy - IIT JEE Coaching Pune Maharashtra",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-pune-maharashtra",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "description": "Best IIT JEE Coaching in Pune Maharashtra offering JEE Main & Advanced preparation with expert faculty, PCM coaching, mock tests & structured learning.",
      "telephone": "9766118877",
      "sameAs": [
        "https://www.instagram.com/asquarepune",
        "https://www.facebook.com/asquarepune"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "addressCountry": "India"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-pune-maharashtra#webpage",
      "url": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-pune-maharashtra",
      "name": "IIT JEE Coaching Classes in Pune Maharashtra",
      "description": "Top IIT JEE Mains & Advanced Coaching Classes in Pune Maharashtra with PCM coaching, mock exams, small batches & expert faculty guidance."
    },
    {
      "@type": "EducationalOrganization",
      "@id": "https://www.asquareclasses.com/#educationalorganization",
      "name": "ASQUARE Academy",
      "url": "https://www.asquareclasses.com/",
      "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
      "description": "Leading IIT JEE & NEET coaching institute offering concept-based teaching, structured modules & result-oriented training."
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-pune-maharashtra#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can join ASQUARE Academy Pune Maharashtra?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students of Class XI, XII and XII pass-outs preparing for JEE Main & Advanced can join our IIT JEE coaching in Pune Maharashtra."
          }
        },
        {
          "@type": "Question",
          "name": "What subjects do you teach?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We teach complete PCM—Physics, Chemistry and Mathematics—following the latest JEE syllabus."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer JEE Advanced coaching classes in Pune Maharashtra?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we offer structured IIT JEE Advanced Preparation in Pune Maharashtra with advanced modules, mock tests and mentor support."
          }
        },
        {
          "@type": "Question",
          "name": "How are the batches structured?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We maintain small, focused batches to ensure personalized attention and interactive learning."
          }
        },
        {
          "@type": "Question",
          "name": "What makes ASQUARE one of the Best IIT JEE Classes in Pune Maharashtra?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our teaching approach includes concept-building, daily assignments, mock exams and individual mentoring."
          }
        },
        {
          "@type": "Question",
          "name": "Are mock tests conducted regularly?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, weekly tests and full-length mock exams help students improve accuracy, speed and overall performance."
          }
        },
        {
          "@type": "Question",
          "name": "Which areas do you serve in Pune Maharashtra?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our coaching center is accessible from Pune, Pimpri, Chinchwad, Nigdi, Wakad, Akurdi, Ravet, Pimple Saudagar and nearby areas."
          }
        },
        {
          "@type": "Question",
          "name": "How do parents monitor their child’s performance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Parents receive regular performance reports, attendance updates and can attend PTMs for detailed insights."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-pune-maharashtra#breadcrumb",
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
          "name": "IIT JEE Coaching",
          "item": "https://www.asquareclasses.com/iit-jee-coaching"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "IIT JEE Coaching in Pune Maharashtra",
          "item": "https://www.asquareclasses.com/iit-jee-coaching-classes-institute-pune-maharashtra"
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

      {/* Full-width Slider with Overlaid Form */}
      <section className="jee-full-slider-section position-relative">
        {isDesktop ? (
          <div id="jeeFullCarouselDesktop" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {[sampleimg1, sampleimg1, sampleimg1].map((img, i) => (
                <div key={i} className={`carousel-item ${i === 0 ? "active" : ""}`}>
                  <img src={img} className="d-block w-100 carousel-image" alt={`Slide ${i + 1}`} />
                  <div className="carousel-overlay" />
                </div>
              ))}
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#jeeFullCarouselDesktop" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" />
            </button>

            <button className="carousel-control-next" type="button" data-bs-target="#jeeFullCarouselDesktop" data-bs-slide="next">
              <span className="carousel-control-next-icon" />
            </button>
          </div>
        ) : (
          <div id="jeeFullCarouselMobile" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {[sampleimg2, sampleimg2, sampleimg2].map((img, i) => (
                <div
                  key={i}
                  className={`carousel-item ${i === 0 ? "active" : ""}`}
                  style={{
                    height: "400px",
                    backgroundImage: `url(${img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="carousel-overlay" />
                </div>
              ))}
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#jeeFullCarouselMobile" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" />
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#jeeFullCarouselMobile" data-bs-slide="next">
              <span className="carousel-control-next-icon" />
            </button>
          </div>
        )}

        <div className="jee-slider-form-box">
          <div className="jee-enquiry-form rounded-4">
            <MobileForm />
            <Form />
          </div>
        </div>
      </section>

      <hr />

      {/* HERO SECTION */}
      <section className="jee-hero-section text-white d-flex align-items-center bg-transparent">
        <div className="container py-5">
          <div className="row align-items-center">
            {/* Left Side: Text */}
            <div className="col-12 col-lg-8 col-md-12 text-center text-md-start">
              <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
                Crack JEE Main &amp; Advanced with <span className="highlight-text text-warning">ASQUARE Academy Pune Maharashtra</span>
              </motion.h1>

              <motion.h2>Best IIT JEE Coaching in Pune Maharashtra for Engineering Aspirants</motion.h2>

              <p className="lead d-none d-md-block">
                Looking for IIT JEE Coaching Classes in Pune Maharashtra? ASQUARE Academy offers expert-led, result-driven programs tailored for JEE Main and Advanced aspirants. Our Pune Maharashtra centers focus on concept clarity, strategic learning, time management, and consistent practice—helping students secure top ranks in IITs, NITs, IIITs, and renowned engineering institutes across India. Known for personalized mentoring, small batches, and systematic assessments, ASQUARE Academy is widely recognized as the Top IIT JEE Classes in Pune Maharashtra.
              </p>

              <p className="lead d-block d-md-none">
                Looking for IIT JEE Coaching Classes in Pune Maharashtra? ASQUARE Academy offers expert-led, result-driven programs tailored for JEE Main and Advanced aspirants.
              </p>

              <a className="btn btn-warning btn-lg rounded-pill mt-3 shadow-lg">
                <Link to={"/"} className="nav-item nav-item-list text-warning">
                  🚀 Enroll Now
                </Link>
              </a>
            </div>

            {/* Right Side: Image */}
            <div className="col-12 col-lg-4 col-md-12 mt-5 mt-md-0 text-center">
              <img src={sampleimg3} alt="ASQUARE Academy Pune Maharashtra" className="img-fluid mx-auto fade-in imgsiz" style={{ objectFit: "contain", opacity: 0.95, borderRadius: "10px" }} />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* WHY CHOOSE */}
      <section className="jee-why py-5">
        <div className="container">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">
            Why Choose <span className="highlight-text text-primary">ASQUARE Academy in Pune Maharashtra?</span>
          </motion.h3>

          <div className="row g-4 justify-center" style={{ justifyContent: "center" }}>
            {whyChoose.map((item, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <motion.div whileHover={{ scale: 1.05 }} className="jee-feature-card shadow-lg rounded-4 p-4 h-100">
                  <item.Icon size={40} className="mb-3 text-warning" />
                  <h5 className="fw-bold mb-2">{item.title}</h5>
                  <p className="text-muted">{item.desc}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr />

      {/* PROGRAMS */}
      <section className="jee-programs py-5 bg-light">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-8 text-center text-lg-start order-2">
              <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-centerr">
                Our IIT JEE Coaching <span className="highlight-text text-primary">Programs</span> 
              </motion.h3>

              <p className="lead text-secondary">
                At ASQUARE Academy, we provide structured programs for JEE Main &amp; Advanced preparation in Pune Maharashtra, suitable for students at different academic levels:
              </p>

         
            </div>

            <div className="col-lg-4 text-center order-1">
              <motion.img whileHover={{ scale: 1.03 }} src={sampleimg4} alt="IIT JEE Programs Pune Maharashtra" className="img-fluid rounded-4 shadow-lg mx-auto d-block" style={{ width: "85%" }} />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* SUBJECTS + BATCHES */}
      <section className="jee-gradient-section py-5 text-white">
        <div className="container">
          <motion.h4 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">
            Subjects Covered
            <span className="highlight-text text-warning">&nbsp;&&nbsp;</span>
            Course Options
          </motion.h4>
          <br />

          <div className="row g-4">
            <div className="col-lg-6">
              <h4 className="highlight-text text-warning fw-bold mb-4 text-centerr">Subjects Covered</h4>
              {subjects.map((sub, i) => (
                <div key={i} className="jee-subject-box mb-4 p-3 pb-4 pt-4 rounded-4 bg-white bg-opacity-10 backdrop-blur-md border border-light border-opacity-25">
                  <h5 className="fw-semibold">{sub.title}</h5>
                  <p className="small mb-0">{sub.desc}</p>
                </div>
              ))}
            </div>

            <div className="col-lg-6">
              <h4 className="highlight-text text-warning fw-bold mb-4 text-centerr">Course Options &amp; Batches</h4>
              <div className="jee-subject-box mb-3 p-3 rounded-4 bg-white bg-opacity-10 backdrop-blur-md border border-light border-opacity-25">
                <h5 className="fw-semibold">2-Year Foundation Course (Class 10 → 12)</h5>
                <p className="small mb-0">Integrated preparation for Boards + JEE.</p>
              </div>
              <div className="jee-subject-box mb-3 p-3 rounded-4 bg-white bg-opacity-10 backdrop-blur-md border border-light border-opacity-25">
                <h5 className="fw-semibold">1-Year Advanced Course (Class 11 → 12)</h5>
                <p className="small mb-0">Intensive JEE-focused coaching with complete XII syllabus.</p>
              </div>
              <div className="jee-subject-box mb-3 p-3 rounded-4 bg-white bg-opacity-10 backdrop-blur-md border border-light border-opacity-25">
                <h5 className="fw-semibold">Crash Course (2–3 Months)</h5>
                <p className="small mb-0">High-speed revision, intensive tests & strategy workshops.</p>
              </div>
              <div className="jee-subject-box mb-3 p-3 rounded-4 bg-white bg-opacity-10 backdrop-blur-md border border-light border-opacity-25">
                <h5 className="fw-semibold">Dropper/Repeater Batch</h5>
                <p className="small mb-0">Exclusive one-year program for XII pass-outs offering focused JEE Advanced coaching classes in Pune Maharashtra.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* METHODOLOGY */}
      <section className="jee-method py-5 bg-light">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-12 text-center text-lg-start">
              <motion.h4 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">
                Our Teaching <span className="highlight-text text-primary">Methodology</span>
              </motion.h4>

              <div className="row g-4 justify-content-center">
                {methodology.map((m, i) => (
                  <div key={i} className="col-lg-4 col-md-6">
                    <motion.div whileHover={{ y: -5 }} className="method-card p-4 bg-white rounded-4 shadow-sm h-100 text-center">
                      <p className="text-muted small mb-0">{m}</p>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* FEATURES / HIGHLIGHTS */}
      <section className="jee-highlights py-5 text-white">
        <div className="container text-center">
          <motion.h4 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
            Key Features of <span className="highlight-text text-warning">ASQUARE Academy </span>Pune Maharashtra
          </motion.h4>

          <div className="row justify-content-center g-4">
            {features.map((text, i) => (
              <motion.div key={i} className="col-md-5 col-lg-4 col-6" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <div className="highlight-card shadow-lg rounded-4 p-4 bg-white bg-opacity-10 backdrop-blur-md border border-light border-opacity-25">
                  <div className="icon-circle mx-auto mb-3">
                    <h2>🎓</h2>
                  </div>
                  <p className="fw-semibold text-light ">{text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <hr />
      <Suspense fallback={<Loading />}>
        <Reviews />
      </Suspense>

      <hr />

      {/* RESULTS */}
      <section className="jee-results py-5 text-white">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-8 text-center text-lg-start">
              <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
                Results That <span className="highlight-text text-warning">Speak</span>
              </motion.h3>
              <p className="lead text-light">
                ASQUARE Academy consistently produces top performers in JEE Main and JEE Advanced. Students from our Pune Maharashtra centers have achieved excellent ranks due to expert guidance, systematic preparation, and a disciplined learning environment.
              </p>
            </div>

            <div className="col-lg-4 text-center">
              <motion.img whileHover={{ scale: 1.05 }} src={sampleimg6} alt="Results ASQUARE Pune Maharashtra" className="img-fluid rounded-4 shadow-lg mx-auto d-block" style={{ width: "80%" }} />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* FAQs */}
      <section className="jee-faq py-5">
        <div className="container">
          <div className="text-center mb-5">
            <div className="d-inline-block bg-primary bg-opacity-10 text-primary fw-bold rounded-pill px-3 py-1 mb-3">
              <BadgeQuestionMark /> FAQs
            </div>

            <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3 text-center">
              Frequently Asked Questions (FAQ)
            </motion.h3>
          </div>

          <div className="row justify-content-center">
            <div className="col-12 col-md-6 mb-4 mb-md-0">
              <FAQAccordion faqs={faqs.slice(0, Math.ceil(faqs.length / 2))} accordionId="puneMahaFaqLeft" />
            </div>

            <div className="col-12 col-md-6">
              <FAQAccordion faqs={faqs.slice(Math.ceil(faqs.length / 2))} accordionId="puneMahaFaqRight" />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* FINAL CTA */}
      <section id="enroll" className="jee-enroll-section py-5 text-center text-white">
        <div className="container">
          <motion.h3 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-6 mb-3">
            Join <span className="highlight-text text-warning">ASQUARE Academy</span> Pune Maharashtra Today
          </motion.h3>

          <p className="lead mb-4">
            Achieve your engineering dream with the Top JEE Mains Coaching Classes in Pune Maharashtra. With expert faculty, updated material & student-first teaching, ASQUARE Academy stands out as the Best IIT JEE Coaching in Pune Maharashtra.
          </p>

          <p>
            <MapPin className="text-warning" /> 📍 Serving students across Pune, PCMC & nearby regions.
          </p>

          <a className="btn btn-lg btn-warning fw-bold mt-3 px-5 py-3 rounded-pill shadow-lg">
            <Link to={"/"} className="nav-item nav-item-list text-white">
              ⚡ Admissions Open – Limited Seats Available! Contact us today to enroll.
            </Link>
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default IITJEEPuneMaharashtra;
