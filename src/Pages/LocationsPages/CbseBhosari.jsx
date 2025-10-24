import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../../Components/Navbar/Navbar.jsx';
import Header from '../../Components/Header/Header.jsx';
import Footer from '../../Components/Footer/Footer.jsx';
import Loading from '../Loading.jsx';
import MobileForm from '../../Components/Mobileform/MobileForm.jsx';
import '../locationspage.css';
import locationBGImage from '../../Assets/slider/CBSE-slider-pc.jpeg';
import MobileBGImage from '../../Assets/slider/CBSE-slider-mobile.jpeg';
import MethodologyBg from '../../Assets/locationPageImages/methodologyBG1.jpg';
import image1 from '../../Assets/locationPageImages/CISEPuneimage1.jpg';
import image2 from '../../Assets/locationPageImages/CISEPuneimage2.jpg';
import image3 from '../../Assets/locationPageImages/CISEPuneimage3.jpg';
import image4 from '../../Assets/locationPageImages/CISEPuneimage4.jpg';
import image5 from '../../Assets/locationPageImages/CISEPuneimage5.jpg';
import image7 from '../../Assets/locationPageImages/image7.jpg';
import icon1 from '../../Assets/locationPageImages/student.png';

const Reviews = React.lazy(() => import('../../Components/Reviews/Reviews.jsx'));

function CBSEBhosari(){
    const canonicalUrl = window.location.origin + window.location.pathname;
    return(
        <>
        <Helmet>
            <title>CBSE Coaching &amp; Tuition Classes in Bhosari Pune - 8th | 9th | 10th</title>
            <meta name="title" content="CBSE Coaching &amp; Tuition Classes in Bhosari Pune - 8th | 9th | 10th" />
            <meta name="description" content="Join top CBSE coaching in Bhosari, Pune for Class 8, 9 &amp; 10. ASQUARE Academy offers expert tutors, small batches &amp; complete board exam preparation." />
            <meta name="keywords" content="cbse tuition classes in bhosari pune, best cbse coaching in bhosari, cbse classes for 8th 9th 10th in bhosari, cbse tuition center bhosari, top cbse institute in bhosari, cbse coaching for class 8 in bhosari, cbse coaching for class 9 in bhosari, cbse coaching for class 10 in bhosari, cbse board tuition in bhosari, tuition for cbse students bhosari, cbse tuition in pimpri, cbse coaching in chinchwad, cbse classes in nigdi, cbse tuition in moshi, cbse coaching in pimple gurav, cbse classes in kaspate wasti, cbse tuition in talwade, cbse coaching in spine city, cbse tuition in pcmc" />
            <script type="application/ld+json">{`
            {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.asquareclasses.com/cbse-tuition-bhosari-pune-8th-9th-10th/",
  "url": "https://www.asquareclasses.com/cbse-tuition-bhosari-pune-8th-9th-10th/",
  "name": "CBSE Coaching & Tuition Classes in Bhosari Pune – 8th | 9th | 10th",
  "description": "Join top CBSE coaching in Bhosari, Pune for Class 8, 9 & 10. A-Square Classes offers expert tutors, small batches & complete board exam preparation.",
  "breadcrumb": {
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
        "name": "CBSE Coaching & Tuition Classes in Bhosari Pune",
        "item": "https://www.asquareclasses.com/cbse-tuition-bhosari-pune-8th-9th-10th/"
      }
    ]
  },
  "mainEntity": {
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you provide CBSE tuition for Class 8th in Bhosari?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide the best 8th CBSE classes in Bhosari with a focus on building subject fundamentals."
        }
      },
      {
        "@type": "Question",
        "name": "Why choose ASQUARE Academy for Class 9 tuition in Bhosari?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our CBSE tuition for Class 9th in Bhosari ensures complete syllabus coverage with regular tests and assignments."
        }
      },
      {
        "@type": "Question",
        "name": "How do you prepare Class 10 students for board exams?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide NCERT syllabus coverage, mock exams, and past paper practice in our Class 10 CBSE tuition in Bhosari."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide study material?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Students receive updated notes, worksheets, and CBSE-aligned practice material."
        }
      },
      {
        "@type": "Question",
        "name": "How do you track progress?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We conduct weekly tests, monthly assessments, and share feedback with parents."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide online CBSE coaching?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer both online and offline CBSE classes for 8th, 9th & 10th in Bhosari."
        }
      },
      {
        "@type": "Question",
        "name": "Which subjects do you cover?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We teach Mathematics, Science, English & Social Science for Classes 8th, 9th & 10th."
        }
      },
      {
        "@type": "Question",
        "name": "Which nearby areas do you serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve students from Moshi, Spine City, Sahu Nagar, Alandi, Charholi, Chakan, Talwade, Dighi, and PCMC."
        }
      }
    ]
  }
}

            `}</script>
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href={canonicalUrl} />
        </Helmet>
        <Navbar />
        <Header />
        <section className='location_hero_section'>
            <div className="location_bgimage">
                <img src={locationBGImage} alt="" />
            </div>
            <div className="mobile_bgimage">
                <img src={MobileBGImage} alt="" />
            </div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-8 col-md-5 col-sm-12">
                        {/* <h1 className='location_hero_heading'>
                            ASQUARE Academy offers the best CBSE tuition in Pimpri-Chinchwad
                        </h1> */}
                    </div>
                    <div className="col-lg-4 col-md-7 col-sm-12">
                        <MobileForm />
                    </div>
                </div>
            </div>
        </section>
        <section className='Location_MobileForm'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12"><MobileForm /></div>
                </div>
            </div>
        </section>
        <section className="leftright_section padd">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 img-col order-2 order-lg-1">
                        <img className='common_image' src={image1} alt="" />
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 order-1 order-lg-2">
                        <h1 className="common_title"><span className='common_title_span'>Best CBSE Tuition </span> Classes in Bhosari, Pune for 8th, 9th & 10th Students.</h1>
                        <p>
                            At <strong>ASQUARE Academy Bhosari,</strong> we focus on shaping a student’s academic journey by offering the <strong>best CBSE tuition for Class 8th, 9th & 10th.</strong> 
                            With dedicated faculty, structured study plans, and regular assessments, we ensure students develop strong subject knowledge and perform confidently in both school and board exams.
                        </p>
                        <p>
                            Parents in Bhosari and nearby PCMC areas consider ASQUARE Academy the best CBSE coaching for 8th, 9th & 10th because of our personalized teaching methods, small batches, and consistent academic results.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section className="grid_section padd_bottom">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="common_title text-center"><span className='common_title_span'>Why Choose</span> ASQUARE Academy Bhosari?</h2>
                    </div>
                </div>    
                <div className="row grid_row">   
                    <div className="col-lg-3 col-md-4 col-sm-12">
                        <div className="grid_item">
                            <img className="grid_img" src={icon1} alt="" />
                            <div className="grid_content">
                            <h6 className="grid_item_title">Expert CBSE Faculty </h6>
                            <p>
                                Teachers specialized in Maths, Science, English & Social Science.
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12">
                        <div className="grid_item">
                            <img className="grid_img" src={icon1} alt="" />
                            <div className="grid_content">
                            <h6 className="grid_item_title">Small Batch Size </h6>
                            <p>
                                Ensures individual focus and better interaction.
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12">
                        <div className="grid_item">
                            <img className="grid_img" src={icon1} alt="" />
                            <div className="grid_content">
                            <h6 className="grid_item_title">Comprehensive Study Material  </h6>
                            <p>
                                Updated notes and worksheets aligned with CBSE syllabus.
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12">
                        <div className="grid_item">
                            <img className="grid_img" src={icon1} alt="" />
                            <div className="grid_content">
                            <h6 className="grid_item_title">Regular Tests & Assessments </h6>
                            <p>
                                Weekly and monthly exams to track progress.
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12">
                        <div className="grid_item">
                            <img className="grid_img" src={icon1} alt="" />
                            <div className="grid_content">
                            <h6 className="grid_item_title">Doubt-Solving Sessions </h6>
                            <p>
                                Extra support for students who need personal guidance.
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12">
                        <div className="grid_item">
                            <img className="grid_img" src={icon1} alt="" />
                            <div className="grid_content">
                            <h6 className="grid_item_title">Proven Academic Results </h6>
                            <p>
                               Consistent improvement in scores and confidence.
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12">
                        <div className="grid_item">
                            <img className="grid_img" src={icon1} alt="" />
                            <div className="grid_content">
                            <h6 className="grid_item_title">Parent–Teacher Communication </h6>
                            <p>
                                Regular updates and feedback sessions.
                            </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <section className="leftright_section padd_bottom">
            <div className="container">
                <div className="row row_reve align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12 order-2 order-lg-1">
                        <h3 className="common_title"><span className='common_title_span'>Our CBSE</span> Foundation Courses in Bhosari</h3>
                        <h6 className="common_subtitle">Best 8th CBSE Classes in Bhosari</h6>
                        <p>
                            Our <strong>CBSE tuition for Class 8th in Bhosari</strong> focuses on building strong fundamentals in all core subjects. With interactive teaching methods and practice-based sessions, students develop a solid foundation for higher classes.
                        </p>
                        <ul className="common_ul">
                            <li><span>Focus on fundamentals & basics</span></li>
                            <li><span>Worksheets and assignments for practice</span></li>
                            <li><span>Step-by-step learning approach</span></li>
                        </ul>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 img-col order-1 order-lg-2">
                        <img className='common_image' src={image2} alt="" />
                    </div>
                </div>
            </div>
        </section>

        <section className="leftright_section padd_bottom">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12 img-col order-2 order-lg-1">
                        <img className='common_image' src={image3} alt="" />
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 order-1 order-lg-2">
                        <h4 className="common_title"><span className='common_title_span'>Best 9th CBSE</span> Classes in Bhosari</h4>
                        <p>
                            Class 9 is the stepping stone to board exams. At ASQUARE, our <strong>CBSE tuition for Class 9th in Bhosari</strong> ensures syllabus mastery, regular tests, and concept clarity for improved performance.
                        </p>
                        <ul className="common_ul">
                            <li><span>NCERT syllabus completion with notes</span></li>
                            <li><span>Chapter-wise tests and assessments</span></li>
                            <li><span>Individual guidance for weak areas</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section className="leftright_section padd_bottom">
            <div className="container">
                <div className="row row_reve align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12 order-2 order-lg-1">
                        <h5 className="common_title"><span className='common_title_span'>Best 10th</span> CBSE Classes in Bhosari</h5>
                        <p>
                            Board exam success requires thorough preparation. <strong>Our CBSE tuition for Class 10th in Bhosari</strong> covers the syllabus completely, conducts frequent mock tests, and provides exam strategies to help students achieve high scores.
                        </p>
                        <ul className="common_ul">
                            <li><span>Complete syllabus with detailed notes</span></li>
                            <li><span>Mock tests and past paper practice</span></li>
                            <li><span>Exam-focused guidance and time management</span></li>
                        </ul>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 img-col order-1 order-lg-2">
                        <img className='common_image' src={image4} alt="" />
                    </div>
                </div>
            </div>
        </section>

        <section className="methodology">
            <div className="methodology_BGimage">
                <img src={MethodologyBg} alt="" />
            </div>
            <div className="container padd_bottom padd_top">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <h6 className="common_title title-light"><span className='common_title_span'>Our</span> Teaching Methodology</h6>
                        <p className='para_light'>We follow a 4-step system for academic growth:</p>
                        <p className='para_light'>This approach ensures students gain confidence and consistent improvement in their studies.</p>
                        <a href="/"><button class="button mt-3">Know More</button></a>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="methodoloy_itembox">
                            <h6 className="methodology_title">Learn</h6>
                            <span>Clear concept delivery in classroom sessions</span>
                        </div>
                        <div className="methodoloy_itembox">
                            <h6 className="methodology_title">Practice</h6>
                            <span>Worksheets and assignments for reinforcement</span>
                        </div>
                        <div className="methodoloy_itembox">
                            <h6 className="methodology_title">Assess</h6>
                            <span>Weekly tests and performance tracking</span>
                        </div>
                        <div className="methodoloy_itembox">
                            <h6 className="methodology_title">Revise</h6>
                            <span>Doubt-solving and revision for better retention</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="leftright_section padd">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 img-col order-2 order-lg-1">
                        <img className='common_image' src={image5} alt="" />
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 order-1 order-lg-2">
                        <h6 className="common_title"><span className='common_title_span'>Conveniently Located</span> for Students Across Bhosari</h6>
                        <p>
                            Our Bhosari center is easily accessible to students from <strong>Moshi, Spine City, Sahu Nagar, Alandi, Charholi, Chakan, Talwade, 
                            Dighi, and Pimpri-Chinchwad (PCMC)</strong>. Parents from these areas trust ASQUARE Academy as the <strong>best CBSE coaching in Bhosari</strong> because of our expert teachers and proven academic system.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <Suspense fallback={<Loading />}>
            <Reviews />
        </Suspense>
        

        <section className="success_stories">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 text-center">
                        <h5 class="common_title title-light"><span className='common_title_span'>Success</span> Stories from Students</h5>
                    </div>
                </div>
                <div className="row">
                    
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="stories_content">
                            <h5 className="name">Class 10 Student</h5>
                            <div className="content">
                                <p>
                                    ASQUARE Academy helped me prepare for Class 10 CBSE boards with confidence. The test series was very helpful.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="stories_content">
                            <h5 className="name">Class 9 Student</h5>
                            <div className="content">
                                <p>
                                    Best 9th CBSE coaching in Bhosari. Teachers gave personal attention and cleared all doubts patiently.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="stories_content">
                            <h5 className="name">Parent of Class 8 Student</h5>
                            <div className="content">
                                <p>
                                    My daughter improved her grades in Maths and Science after joining Class 8 tuition at ASQUARE Bhosari.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="faq_section padd_bottom">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h5 className="common_title">Frequently Asked Questions <span className='common_title_span'>(FAQs)</span></h5>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div class="accordion accordion-flush" id="accordionFlushExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    Do you provide CBSE tuition for Class 8th in Bhosari?
                                </button>
                                </h2>
                                <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    Yes, we provide the best 8th CBSE classes in Bhosari with a focus on building subject fundamentals.
                                </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    Why choose ASQUARE Academy for Class 9 tuition in Bhosari?
                                </button>
                                </h2>
                                <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    Our CBSE tuition for Class 9th in Bhosari ensures complete syllabus coverage with regular tests and assignments
                                </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    How do you prepare Class 10 students for board exams?
                                </button>
                                </h2>
                                <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    We provide NCERT syllabus coverage, mock exams, and past paper practice in our Class 10 CBSE tuition in Bhosari.
                                </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                    Do you provide study material?
                                </button>
                                </h2>
                                <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    Yes. Students receive updated notes, worksheets, and CBSE-aligned practice material.
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div class="accordion accordion-flush" id="accordionFlushExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                   How do you track progress?
                                </button>
                                </h2>
                                <div id="flush-collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">We follow a structured evaluation system that includes weekly chapter tests, monthly assessments, and detailed feedback reports. 
                                        We conduct weekly tests, monthly assessments, and share feedback with parents.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                                   Do you provide online CBSE coaching?
                                </button>
                                </h2>
                                <div id="flush-collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    Yes, we offer both online and offline CBSE classes for 8th, 9th & 10th in Bhosari.
                                </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                                    Which subjects do you cover?
                                </button>
                                </h2>
                                <div id="flush-collapseSeven" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    We teach Mathematics, Science, English & Social Science for Classes 8th, 9th & 10th.
                                </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
                                    Which nearby areas do you serve?
                                </button>
                                </h2>
                                <div id="flush-collapseEight" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    We serve students from Moshi, Spine City, Sahu Nagar, Alandi, Charholi, Chakan, Talwade, Dighi, and PCMC.
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        
                </div>
            </div>
        </section>
        <section className="leftright_section padd_bottom">
            <div className="container">
                <div className="row row_reve align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12 order-2 order-lg-1">
                        <h5 className="common_title">Join <span className='common_title_span'>ASQUARE</span> Academy Today</h5>
                        <p>
                            If you’re searching for the best CBSE tuition for Class 8th, 9th & 10th in Bhosari, ASQUARE Academy is your trusted partner for success. 
                            With expert teachers, small batches, and consistent results, we help students achieve academic excellence.
                        </p>
                        <p>
                            Parents from Bhosari, Moshi, Spine City, Sahu Nagar, Alandi, Charholi, Chakan, Talwade, and other PCMC areas choose ASQUARE Academy for quality education and proven results.
                        </p>
                        <p>
                            Enroll today at ASQUARE Academy Bhosari – Limited seats available. Book your free demo class now!
                        </p>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 img-col order-1 order-lg-2">
                        <img className='common_image join_img' src={image7} alt="" />
                    </div>
                </div>
            </div>
        </section>
        <Footer />
        </>
    )
}

export default CBSEBhosari