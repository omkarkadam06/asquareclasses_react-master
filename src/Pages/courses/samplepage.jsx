import React, { useEffect, useState, Suspense } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
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
import Navbar from "../../Components/Navbar/Navbar.jsx";
import Header from "../../Components/Header/Header.jsx";
import MobileForm from "../../Components/Mobileform/MobileForm.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import FAQAccordion from "../LocationsPages/neet-pages/components/FAQAccordion.jsx";
import "../../App.css";
import "./samplecss.css";
import Loading from "../Loading.jsx";
import sampleimg1 from '../../Assets/SampleImages/sampleimg1.jpeg';
import sampleimg2 from '../../Assets/SampleImages/sampleimg2.jpeg';
import sampleimg3 from '../../Assets/SampleImages/sampleimg3.jpeg';
import sampleimg4 from '../../Assets/SampleImages/sampleimg4.jpeg';
import sampleimg5 from '../../Assets/SampleImages/sampleimg5.jpeg';
import sampleimg6 from '../../Assets/SampleImages/sampleimg6.jpeg';
import sampleimg7 from '../../Assets/SampleImages/sampleimg7.jpeg';
import Swal from "sweetalert2";
import Form from '../../Components/Form2/Form2.jsx';

const Reviews = React.lazy(() => import("../../Components/Reviews/Reviews.jsx"));

function Samplepage() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 992);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const whyChoose = [
    { Icon: Users, title: "Expert Faculty", desc: "Highly qualified IIT-JEE mentors with years of successful teaching experience." },
    { Icon: BookOpen, title: "Structured Syllabus", desc: "Complete PCM coverage (Physics, Chemistry & Mathematics) as per the latest JEE guidelines." },
    { Icon: Target, title: "Small Batches", desc: "Limited students per class for focused learning and better doubt-solving." },
    { Icon: BarChart, title: "Regular Tests", desc: "Topic-wise quizzes, mock exams, and detailed performance analysis." },
    { Icon: Lightbulb, title: "Holistic Mentoring", desc: "Motivation, confidence-building, and exam strategy sessions to stay competitive." },
  ];

  const subjects = [
    { title: "Physics", desc: "Learn complex concepts through problem-based learning and real-world applications." },
    { title: "Chemistry", desc: "Deep understanding of Physical, Organic & Inorganic Chemistry through systematic study." },
    { title: "Mathematics", desc: "Master Algebra, Geometry, Calculus & Probability with daily practice and test drills." },
  ];

  const batches = [
    { title: "2-Year Integrated Program (Class 10 → 11)", desc: "Strong foundation covering both JEE and school syllabus." },
    { title: "1-Year Intensive Program (Class 11 → 12)", desc: "Fast-paced JEE preparation with advanced topic mastery." },
    { title: "Crash Course (2–3 Months)", desc: "Focused revision with mock tests and concept drills before exams." },
    { title: "Repeater Batch (XII Pass-outs)", desc: "One-year targeted preparation for students reappearing for JEE." },
  ];

    const faqs = [{ q: "Q1: Who can join ASQUARE Academy Pune?", a: "Students of Class XI, XII, and XII pass-outs preparing for JEE Main & Advanced can join. Our programs are tailored for different learning levels to ensure every student gets the right guidance and pace for success." }, { q: "Q2: What subjects are covered in the course?", a: "We provide complete coaching for Physics, Chemistry, and Mathematics (PCM) as per the latest JEE syllabus. Each subject is taught by domain experts who emphasize both theory and application." }, { q: "Q3: Are mock tests conducted regularly?", a: "Yes. Weekly tests and full-length JEE mock exams are conducted to evaluate progress, improve time management, and identify weak areas. Detailed reports help students track their performance over time." }, { q: "Q4: What are the different course options available?", a: "We offer 2-Year Foundation, 1-Year Advanced, Crash Courses, and Repeater Batches. Each program is designed to suit different academic needs and preparation stages." }, { q: "Q5: How big are the batches at ASQUARE Academy Pune?", a: "Our batches are intentionally small to ensure personalized attention for every student. This approach allows teachers to focus on individual learning needs and provide effective doubt-solving support." }, { q: "Q6: Do parents get regular performance updates?", a: "Absolutely. We conduct monthly progress meetings and share performance reports with parents. Regular communication ensures parents stay informed about their child’s academic growth." }, { q: "Q7: Which areas does the Pune branch serve?", a: "Our Pune center is easily accessible from Kothrud, Aundh, Wakad, Baner, Hinjewadi, and nearby localities, making it a convenient choice for students across the city." },];

  return (
    <>
      <Helmet>
        <title>Best IIT JEE Coaching Classes in Pune | JEE Main & Advanced Preparation</title>
        <meta
          name="description"
          content="Join the best IIT JEE coaching classes in Pune for expert guidance, mock tests, and complete JEE Main & Advanced preparation for Class XI–XII students at ASQUARE Academy."
        />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>

      <Navbar />
      <Header />
        
{/* Full-width Slider with Overlaid Form */}
<section className="jee-full-slider-section position-relative">
{/* Responsive Bootstrap Carousel (renders one carousel based on isDesktop) */}
{isDesktop ? (
  /* Desktop carousel */
  <div
    id="jeeFullCarouselDesktop"
    className="carousel slide"
    data-bs-ride="carousel"
  >
    <div className="carousel-inner">
      {[sampleimg1, sampleimg1, sampleimg1, sampleimg1, sampleimg1].map(
        (img, i) => (
          <div
            key={i}
            className={`carousel-item ${i === 0 ? "active" : ""}`}
            style={{
              height: "600px",
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="carousel-overlay" />
          </div>
        )
      )}
    </div>

    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#jeeFullCarouselDesktop"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" />
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#jeeFullCarouselDesktop"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" />
    </button>
  </div>
) : (
  /* Mobile carousel */
  <div
    id="jeeFullCarouselMobile"
    className="carousel slide"
    data-bs-ride="carousel"
  >
    <div className="carousel-inner">
      {[sampleimg2, sampleimg2, sampleimg2, sampleimg2, sampleimg2].map(
        (img, i) => (
          <div
            key={i}
            className={`carousel-item ${i === 0 ? "active" : ""}`}
            style={{
              height: "400px", // slightly shorter on mobile
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="carousel-overlay" />
          </div>
        )
      )}
    </div>

    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#jeeFullCarouselMobile"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" />
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#jeeFullCarouselMobile"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" />
    </button>
  </div>
)}


  {/* Form Over Slider */}
  <div className="jee-slider-form-box">
    <div className="jee-enquiry-form rounded-4 shadow-lg">
       <MobileForm />
        <Form />
    </div>
  </div>
</section>

<hr></hr>
{/* Hero Section */}
<section className="jee-hero-section text-white d-flex align-items-center bg-transparent">
  <div className="container py-5">
    <div className="row align-items-center">
      {/* Left Side: Text */}

      <div className="col-12 col-md-8 text-center text-md-start">
              <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="fw-bold display-6 mb-3"
        >
          Crack JEE Main & Advanced with{" "}
          <span className="highlight-text text-warning">
            ASQUARE Academy
          </span>{" "}
          - Best IIT JEE Coaching in Pune
        </motion.h1>

        {/* Full text for desktop */}
        <p className="lead d-none d-md-block">
          Looking for <b className="bld">IIT JEE coaching classes in Pune</b> that deliver real results? ASQUARE Academy offers expert-led programs designed to build strong fundamentals, sharpen problem-solving skills, and prepare students for <b className="bld">JEE Main and Advanced</b> success. With structured learning plans, small batches, and personalized mentoring, our Pune center helps aspiring engineers achieve their IIT dreams with confidence.
        </p>

        {/* Short text for mobile */}
        <p className="lead d-block d-md-none">
            Looking for <b className="bld">IIT JEE coaching classes in Pune</b> that deliver real results? ASQUARE Academy offers expert-led programs designed to build strong fundamentals, sharpen problem-solving skills, and prepare students for <b className="bld">JEE Main and Advanced</b> success. With structured learning plans, small batches, and personalized mentoring, our Pune center helps aspiring engineers achieve their IIT dreams with confidence.
        </p>

        <a
        
          className="btn btn-warning btn-lg rounded-pill mt-3 shadow-lg"
        >      <Link
                        to={'/'}
                        className="nav-item nav-item-list text-warning"
                       
                      >
                       🚀 Enroll Now
                      </Link>
          
        </a>
      </div>

      {/* Right Side: Transparent Image */}
      <div className="col-12 col-md-4 mt-5 mt-md-0 text-center">
        <img
          src={sampleimg3} // replace with your transparent PNG
          alt="ASQUARE Academy"
          className="img-fluid mx-auto fade-in imgsiz"
          style={{
          
            objectFit: "contain",
            opacity: 0.95,
             borderRadius: "10px",
          }}
        />
      </div>
    </div>
  </div>
</section>

<hr></hr>
  
      {/* Why Choose */} <section className="jee-why py-5 "> <div className="container">           <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fw-bold display-6 mb-3 text-center"
      >Why Choose <span className="text-primary">ASQUARE Academy Pune</span> for IIT JEE Preparation</motion.h1>
        <div className="row g-4 justify-center" style={{ justifyContent: "center" }}> {whyChoose.map((item, i) => (<div key={i} className="col-lg-4 col-md-6"> <motion.div whileHover={{ scale: 1.05 }} className="jee-feature-card shadow-lg rounded-4 p-4 h-100" > <item.Icon size={40} className="mb-3 text-warning" /> <h5 className="fw-bold mb-2">{item.title}</h5> <p className="text-muted">{item.desc}</p> </motion.div> </div>))} </div> </div> </section>
<hr></hr>
 {/* Program Description */}
<section className="jee-programs py-5 bg-light">
  <div className="container">
    <div className="row align-items-center g-5">

      <div className="col-lg-8 text-center text-lg-start">
        <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fw-bold display-6 mb-3 text-centerr"
      >IIT JEE Coaching Programs Offered at  <span className="text-primary">ASQUARE Academy Pune</span> </motion.h1>
       
        <p className="lead text-secondary">
          The <b className="bld">Joint Entrance Examination (JEE)</b> is one of India’s toughest entrance exams for engineering aspirants. At <b className="bld">ASQUARE Academy Pune</b>, our programs focus on conceptual clarity, speed, and accuracy—equipping students with the knowledge and discipline needed to excel in <b className="bld">JEE Main & Advanced</b>.
        </p>
      </div>
            <div className="col-lg-4 text-center">
        <motion.img
          whileHover={{ scale: 1.03 }}
          src={sampleimg4}
          alt="JEE Coaching"
          className="img-fluid rounded-4 shadow-lg mx-auto d-block"
          style={{ width: "85%" }}
        />
      </div>
    </div>
  </div>
</section>
<hr></hr>
{/* Subjects + Batches Section */} <section className="jee-gradient-section py-5 text-white"> <div className="container">
             <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="fw-bold display-6 mb-3 text-center"
        >
          Subjects Covered
          <span className="highlight-text text-warning">
            &nbsp;&&nbsp;
          </span>
          Batch Options
        </motion.h1>
        <br></br>

    <div className="row g-4"> <div className="col-lg-6"> <h4 className="highlight-text text-warning fw-bold mb-4 text-centerr">Subjects Covered in ASQUARE Academy’s JEE Coaching Classes</h4> {subjects.map((sub, i) => ( <div key={i} className="jee-subject-box mb-4 p-3 pb-3 rounded-4 bg-dark bg-opacity-25"> <h5 className="fw-semibold">{sub.title}</h5> <p className="small mb-0">{sub.desc}</p> </div> ))} </div> <div className="col-lg-6"> <h4 className="highlight-text text-warning fw-bold mb-4 text-centerr">Course Duration and Batch Options for IIT JEE Students</h4> {batches.map((b, i) => ( <div key={i} className="jee-subject-box mb-3 p-3 rounded-4 bg-dark bg-opacity-25"> <h5 className="fw-semibold">{b.title}</h5> <p className="small mb-0">{b.desc}</p> </div> ))} </div> </div> </div> </section>
<hr></hr>
{/* Methodology Section */}
<section className="jee-method py-5 bg-light">
  <div className="container">
    <div className="row align-items-center g-4">
   
             {/* Right Side - Image */}
      {/* <div className="col-lg-5 text-center">
        <motion.img
          whileHover={{ scale: 1.03 }}
          src={sampleimg5} // replace with your image
          alt="Teaching Methodology"
          className="img-fluid rounded-4 shadow-lg"
          style={{
            // maxHeight: "400px",
            borderRadius: "10px",
            objectFit: "cover",
          }}
        />
      </div> */}
      {/* Left Side - Text and Cards */}
      <div className="col-lg-12 text-center text-lg-start">
           <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fw-bold display-6 mb-3 text-center"
      >Effective Teaching Methodology for IIT JEE at <span className="text-primary">ASQUARE Academy</span> </motion.h1>
          
      

        <div className="row g-4 justify-content-center">
          {["Learn", "Practice", "Assess", "Revise"].map((step, i) => (
            <div key={i} className="col-lg-3 col-6">
              <motion.div
                whileHover={{ y: -5 }}
                className="method-card p-4 bg-white rounded-4 shadow-sm h-100 text-center"
              >
                {/* <Lightbulb size={36} className="text-primary mb-3" /> */}
                {/* <h6 className="fw-bold">{step}</h6> */}
                <p className="text-muted small mb-0">
                  {step === "Learn"
                    ? "Interactive daily lectures with conceptual clarity and practice assignments."
                    : step === "Practice"
                    ? "Regular topic tests, weekly reviews, and monthly full-length mock exams."
                    : step === "Assess"
                    ? "Individual mentoring sessions for performance improvement and doubt clearance."
                    : "Parent–teacher meetings for detailed student progress discussions."}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

 
    </div>
  </div>
</section>

<hr></hr>

{/* New Highlights Section */}
<section className="jee-highlights py-5 text-white">
  <div className="container text-center">
            <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="fw-bold display-6 mb-3"
        >
         Key Highlights of 
          <span className="highlight-text text-warning">
           &nbsp;ASQUARE Academy Pune &nbsp; 
          </span>
          IIT JEE Coaching
        </motion.h1>

<div className="row justify-content-center g-4">
  {[
    "Latest JEE notes, study materials & question banks.",
    "Workshops on shortcuts, accuracy, and time management.",
    "Regular progress reports and parent communication.",
    "Among the best IIT JEE coaching in Pune with consistent academic excellence.",
  ].map((text, i) => {
    const highlightedText = text.includes("best IIT JEE coaching in Pune")
      ? text.replace(
          "best IIT JEE coaching in Pune",
         '<b className="bld">best IIT JEE coaching in Pune</b>'
        )
      : text;

    return (
      <motion.div
        key={i}
        className="col-md-5 col-lg-3 col-6"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <div className="highlight-card shadow-lg rounded-4 p-4 bg-white bg-opacity-10 backdrop-blur-md border border-light border-opacity-25">
          <div className="icon-circle mx-auto mb-3">
            <h2>🎓</h2>
          </div>
          <p
            className="fw-semibold text-light "
            dangerouslySetInnerHTML={{ __html: highlightedText }}
          ></p>
        </div>
      </motion.div>
    );
  })}
</div>

  </div>
</section>


<hr></hr>
   <Suspense fallback={<Loading />}>
        <Reviews />
      </Suspense>


<hr></hr>

  {/* Results Section */}
<section className="jee-results py-5 text-white">
  <div className="container">
    <div className="row align-items-center g-5">
      {/* Text Section */}
      <div className="col-lg-8 text-center text-lg-start">
     
                <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="fw-bold display-6 mb-3"
        >
          Consistent JEE Results and Success Stories from 
          <span className="highlight-text text-warning">
           &nbsp;ASQUARE Pune &nbsp; 
          </span>
     
        </motion.h1>
        <p className="lead text-light">
          ASQUARE Academy has produced numerous IIT-JEE toppers and high-rank achievers every year. Our proven teaching methods, personal mentoring, and disciplined environment help students maximize their potential and secure admissions into IITs, NITs, and other top engineering colleges.
        </p>
      </div>

      {/* Image Section */}
      <div className="col-lg-4 text-center">
        <motion.img
          whileHover={{ scale: 1.05 }}
          src={sampleimg6}
          alt="Success Stories"
          className="img-fluid rounded-4 shadow-lg mx-auto d-block"
          style={{ width: "80%" }}
        />
      </div>
    </div>
  </div>
</section>

<hr></hr>
    {/* Gallery Section */}
{/* <section className="jee-gallery py-5 bg-light">
  <div className="container text-center">
    <h3 className="fw-bold mb-4 text-primary">ASQUARE Pune Moments</h3>
    <div className="row g-3">
      {[
        sampleimg1,
        sampleimg2,
        sampleimg3,
        sampleimg4,
        sampleimg5,
        sampleimg6,
      ].map((src, i) => (
        <div key={i} className="col-6 col-md-4 col-lg-2">
          <motion.img
            whileHover={{ scale: 1.05 }}
            src={src}
            alt={`Gallery ${i + 1}`}
            className="img-fluid rounded-4 shadow-sm gallery-img"
          />
        </div>
      ))}
    </div>
  </div>
</section> */}


{/* FAQs */}
<section className="jee-faq py-5">
  <div className="container">
    <div className="text-center mb-5">
      <div className="d-inline-block bg-primary bg-opacity-10 text-primary fw-bold rounded-pill px-3 py-1 mb-3">
        <BadgeQuestionMark /> FAQs
      </div>
      
        <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fw-bold display-6 mb-3 text-center"
      >FAQs About IIT JEE Coaching Classes at <span className="text-primary">ASQUARE Academy Pune</span> </motion.h1>
    </div>

    <div className="row justify-content-center">
      {/* Left Column */}
      <div className="col-12 col-md-6 mb-4 mb-md-0 ">
        <FAQAccordion
          faqs={faqs.slice(0, Math.ceil(faqs.length / 2))}
          accordionId="jeeFaqLeft"
        />
      </div>

      {/* Right Column */}
      <div className="col-12 col-md-6">
        <FAQAccordion
          faqs={faqs.slice(Math.ceil(faqs.length / 2))}
          accordionId="jeeFaqRight"
        />
      </div>
    </div>
  </div>
</section>
<hr></hr>

      {/* Final CTA */}
      <section id="enroll" className="jee-enroll-section py-5 text-center text-white">
        <div className="container">
     
               <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="fw-bold display-6 mb-3"
        >
          Enroll Today at ASQUARE Academy Pune for 
          <span className="highlight-text text-warning">
           &nbsp;IIT JEE Coaching &nbsp; 
          </span>
     
        </motion.h1>
          <p className="lead mb-4">
           Start your <b className="bld">IIT JEE journey</b> with the  <b className="bld">best IIT JEE coaching in Pune</b> — ASQUARE Academy. With expert mentors, structured programs, and a strong track record of results, we help you achieve your engineering aspirations.
          </p>
          <p><MapPin className="text-warning" /> Ideal for students from Kothrud, Aundh, Wakad, Baner, Hinjewadi & nearby areas.</p>
          <a className="btn btn-lg btn-warning fw-bold mt-3 px-5 py-3 rounded-pill shadow-lg">
                      <Link
                        to={'/'}
                        className="nav-item nav-item-list text-white"
                       
                      >
            ⚡ Admissions Open – Enroll Now!
        

                       &nbsp;<p className="text-warning">Limited Seats Available.</p>
                      </Link>
                        </a>
        </div>
      </section>

   

      <Footer />
    </>
  );
}

export default Samplepage;
