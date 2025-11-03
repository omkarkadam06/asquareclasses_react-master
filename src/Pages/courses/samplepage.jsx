import React, { useEffect, useState, Suspense } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
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


const Reviews = React.lazy(() => import("../../Components/Reviews/Reviews.jsx"));

function Samplepage() {
  const canonicalUrl = window.location.origin + window.location.pathname;
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 992);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
const handleEnrollClick = () => {
  Swal.fire({
    title: "🚀 Enroll Now – ASQUARE Academy",
    html: `
      <form id="enrollForm" class="text-start">
        <div class="mb-3">
          <label class="form-label fw-semibold">Full Name</label>
          <input type="text" id="swalName" class="form-control" placeholder="Enter your name" required />
        </div>
        <div class="mb-3">
          <label class="form-label fw-semibold">Phone Number</label>
          <input type="tel" id="swalPhone" class="form-control" placeholder="Enter your phone number" required />
        </div>
        <div class="mb-3">
          <label class="form-label fw-semibold">Select Course</label>
          <select id="swalCourse" class="form-select">
            <option value="">-- Select --</option>
            <option>JEE 2-Year Program</option>
            <option>JEE 1-Year Program</option>
            <option>Crash Course</option>
            <option>Repeater Batch</option>
          </select>
        </div>
      </form>
    `,
    showCancelButton: true,
    confirmButtonText: "Submit",
    cancelButtonText: "Cancel",
    confirmButtonColor: "#facc15",
    focusConfirm: false,
    preConfirm: () => {
      const name = document.getElementById("swalName").value;
      const phone = document.getElementById("swalPhone").value;
      const course = document.getElementById("swalCourse").value;

      if (!name || !phone || !course) {
        Swal.showValidationMessage("⚠️ Please fill all fields before submitting.");
        return false;
      }

      return { name, phone, course };
    },
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "✅ Enrolled Successfully!",
        text: `Thank you, ${result.value.name}! Our team will contact you shortly regarding the ${result.value.course}.`,
        icon: "success",
        confirmButtonColor: "#3085d6",
      });
    }
  });
};

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

    const faqs = [{ q: "Who can join ASQUARE Academy Pune?", a: "Students of Class XI, XII, and XII pass-outs preparing for JEE Main & Advanced can join. Our programs are tailored for different learning levels to ensure every student gets the right guidance and pace for success." }, { q: "What subjects are covered in the course?", a: "We provide complete coaching for Physics, Chemistry, and Mathematics (PCM) as per the latest JEE syllabus. Each subject is taught by domain experts who emphasize both theory and application." }, { q: "Are mock tests conducted regularly?", a: "Yes. Weekly tests and full-length JEE mock exams are conducted to evaluate progress, improve time management, and identify weak areas." }, { q: "What are the different course options available?", a: "We offer 2-Year Foundation, 1-Year Advanced, Crash Courses, and Repeater Batches." }, { q: "How big are the batches at ASQUARE Academy Pune?", a: "Our batches are intentionally small to ensure personalized attention for every student." }, { q: "Do parents get regular performance updates?", a: "Absolutely. We conduct monthly progress meetings and share performance reports with parents." }, { q: "Which areas does the Pune branch serve?", a: "Our Pune center is easily accessible from Kothrud, Aundh, Wakad, Baner, Hinjewadi, and nearby localities, making it a convenient choice for students across the city." },];

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

{/* Hero Section */} <section className="jee-hero-section text-white d-flex align-items-center"> <div className="container text-center py-5"> <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold display-5 mb-3" > Crack JEE Main & Advanced with{" "} <span className="highlight-text">ASQUARE Academy</span> </motion.h1> {/* Full text for desktop */}
<p className="lead mx-auto w-75 d-none d-md-block">
  Looking for IIT JEE coaching classes in Pune that deliver real results?
  ASQUARE Academy offers expert-led programs designed to build strong fundamentals,
  sharpen problem-solving skills, and prepare students for JEE Main and Advanced success.
  With structured learning plans, small batches, and personalized mentoring,
  our Pune center helps aspiring engineers achieve their IIT dreams with confidence.
</p>

{/* Short text for mobile */}
<p className="lead mx-auto w-75 d-block d-md-none">
  Join Pune’s best IIT JEE coaching — ASQUARE Academy.  
  Expert mentors, small batches & complete JEE preparation for success.
</p> <a onClick={handleEnrollClick} className="btn btn-warning btn-lg rounded-pill mt-3 shadow-lg"> 🚀 Enroll Now </a> </div> </section>

      {/* Why Choose */} <section className="jee-why py-5 "> <div className="container"> <h2 className="section-title mb-5 text-center"> Why Choose <span className="text-primary">ASQUARE Academy Pune</span> for IIT JEE Preparation </h2> <div className="row g-4 justify-center" style={{ justifyContent: "center" }}> {whyChoose.map((item, i) => ( <div key={i} className="col-lg-4 col-md-6"> <motion.div whileHover={{ scale: 1.05 }} className="jee-feature-card shadow-lg rounded-4 p-4 h-100" > <item.Icon size={40} className="mb-3 text-warning" /> <h5 className="fw-bold mb-2">{item.title}</h5> <p className="text-muted">{item.desc}</p> </motion.div> </div> ))} </div> </div> </section>
{/* Subjects + Batches Section */} <section className="jee-gradient-section py-5 text-white"> <div className="container"> <h3 className="text-center mb-5 fw-bold">Subjects Covered & Batch Options</h3> <div className="row g-4"> <div className="col-lg-6"> <h4 className="text-warning mb-4">Subjects Covered</h4> {subjects.map((sub, i) => ( <div key={i} className="jee-subject-box mb-3 p-3 rounded-4 bg-dark bg-opacity-25"> <h5 className="fw-semibold">{sub.title}</h5> <p className="small mb-0">{sub.desc}</p> </div> ))} </div> <div className="col-lg-6"> <h4 className="text-warning mb-4">Course Duration & Batches</h4> {batches.map((b, i) => ( <div key={i} className="jee-subject-box mb-3 p-3 rounded-4 bg-dark bg-opacity-25"> <h5 className="fw-semibold">{b.title}</h5> <p className="small mb-0">{b.desc}</p> </div> ))} </div> </div> </div> </section>

{/* Methodology */} <section className="jee-method py-5 bg-light"> <div className="container text-center"> <h3 className="fw-bold mb-4">Effective Teaching Methodology for IIT JEE</h3> <p className="lead mb-5 text-secondary"> Our proven four-step learning system ensures conceptual clarity, constant practice, and exam readiness through personalized mentoring. </p> <div className="row g-4 justify-content-center"> {["Learn", "Practice", "Assess", "Revise"].map((step, i) => ( <div key={i} className="col-md-3"> <motion.div whileHover={{ y: -5 }} className="method-card p-4 bg-white rounded-4 shadow-sm h-100"> <Lightbulb size={36} className="text-primary mb-3" /> <h6 className="fw-bold">{step}</h6> <p className="text-muted small mb-0"> {step === "Learn" ? "Interactive daily lectures with conceptual clarity and practice assignments." : step === "Practice" ? "Regular topic tests, weekly reviews, and monthly full-length mock exams." : step === "Assess" ? "Individual mentoring sessions for performance improvement and doubt clearance." : "Parent–teacher meetings for detailed student progress discussions."} </p> </motion.div> </div> ))} </div> </div> </section>


{/* New Highlights Section */}
<section className="jee-highlights py-5 text-white">
  <div className="container text-center">
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fw-bold mb-5 text-uppercase tracking-wide"
    >
      ✨ Highlights of <span className="text-warning">ASQUARE Academy Pune</span> IIT JEE Coaching
    </motion.h2>

    <div className="row justify-content-center g-4">
      {[
        "Latest JEE notes, study materials & question banks.",
        "Workshops on shortcuts, accuracy, and time management.",
        "Regular progress reports and parent communication.",
        "Among the best IIT JEE coaching in Pune with consistent academic excellence.",
      ].map((text, i) => (
        <motion.div
          key={i}
          className="col-md-5 col-lg-4"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <div className="highlight-card shadow-lg rounded-4 p-4 bg-white bg-opacity-10 backdrop-blur-md border border-light border-opacity-25">
            <div className="icon-circle mx-auto mb-3">
            <h2>🎓</h2>
            </div>
            <p className="fw-semibold text-light">{text}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>


 {/* Program Description */}
<section className="jee-programs py-5 bg-light">
  <div className="container">
    <div className="row align-items-center g-5">
      <div className="col-lg-6 text-center">
        <motion.img
          whileHover={{ scale: 1.03 }}
          src={sampleimg4}
          alt="JEE Coaching"
          className="img-fluid rounded-4 shadow-lg mx-auto d-block"
          style={{ width: "80%" }}
        />
      </div>
      <div className="col-lg-6 text-center text-lg-start">
        <h3 className="fw-bold text-primary mb-3">
          IIT JEE Coaching Programs Offered at ASQUARE Academy Pune
        </h3>
        <p className="lead text-secondary">
          The Joint Entrance Examination (JEE) is one of India’s toughest entrance exams for engineering aspirants.
          At ASQUARE Academy Pune, our programs focus on conceptual clarity, speed, and accuracy—equipping students
          with the knowledge and discipline needed to excel in JEE Main & Advanced.
        </p>
      </div>
    </div>
  </div>
</section>


  {/* Results Section */}
<section className="jee-results py-5 text-white">
  <div className="container">
    <div className="row align-items-center g-5">
      {/* Text Section */}
      <div className="col-lg-6 order-2 order-lg-1 text-center text-lg-start">
        <h3 className="fw-bold text-white mb-3">
          Consistent JEE Results and Success Stories from ASQUARE Pune
        </h3>
        <p className="lead text-light">
          ASQUARE Academy has produced numerous IIT-JEE toppers and high-rank achievers every year.
          Our proven teaching methods, personal mentoring, and disciplined environment help students
          maximize their potential and secure admissions into IITs, NITs, and other top engineering colleges.
        </p>
      </div>

      {/* Image Section */}
      <div className="col-lg-6 order-1 order-lg-2 text-center">
        <motion.img
          whileHover={{ scale: 1.05 }}
          src={sampleimg2}
          alt="Success Stories"
          className="img-fluid rounded-4 shadow-lg mx-auto d-block"
          style={{ width: "80%" }}
        />
      </div>
    </div>
  </div>
</section>


    {/* Gallery Section */}
<section className="jee-gallery py-5 bg-light">
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
</section>


      {/* FAQs */}
      <section className="jee-faq py-5">
        <div className="container">
          <div className="text-center mb-5">
            <div className="d-inline-block bg-primary bg-opacity-10 text-primary fw-bold rounded-pill px-3 py-1 mb-3">
              <BadgeQuestionMark /> FAQs
            </div>
            <h3 className="fw-bold">FAQs About IIT JEE Coaching in Pune</h3>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-10">
              <FAQAccordion faqs={faqs} accordionId="jeeFaq" />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="enroll" className="jee-enroll-section py-5 text-center text-white">
        <div className="container">
          <h2 className="fw-bold mb-3">Enroll Today at ASQUARE Academy Pune for IIT JEE Coaching</h2>
          <p className="lead mb-4">
            Start your IIT JEE journey with the best IIT JEE coaching in Pune — ASQUARE Academy.
          </p>
          <p><MapPin className="text-warning" /> Serving students from Kothrud, Aundh, Wakad, Baner, Hinjewadi & nearby areas.</p>
          <a onClick={handleEnrollClick} className="btn btn-lg btn-warning fw-bold mt-3 px-5 py-3 rounded-pill shadow-lg">
            ⚡ Admissions Open – Enroll Now!
          </a>
        </div>
      </section>

      <Suspense fallback={<Loading />}>
        <Reviews />
      </Suspense>

      <Footer />
    </>
  );
}

export default Samplepage;
