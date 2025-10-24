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

function CBSESaudagar(){
    const canonicalUrl = window.location.origin + window.location.pathname;
    return(
        <>
        <Helmet>
            <title>Best CBSE Coaching Classes in Pimple Saudagar for 8th, 9th &amp; 10th Students | ASQUARE Academy</title>
            <meta name="title" content="Best CBSE Coaching Classes in Pimple Saudagar for 8th, 9th &amp; 10th Students | ASQUARE Academy" />
            <meta name="description" content="Looking for CBSE tuition in Pimple Saudagar? ASQUARE Academy provides expert coaching for Classes 8th, 9th &amp; 10th with small batches &amp; regular tests. Serving Wakad, Sangvi, Rahatni, Pimple Gurav, Kasarwadi, Aundh, Baner &amp; nearby PCMC areas." />
            <meta name="keywords" content="cbse tuition classes in pimple saudagar pune, best cbse coaching in pimple saudagar, cbse classes for 8th 9th 10th in pimple saudagar, cbse tuition center pimple saudagar, top cbse institute in pimple saudagar, cbse coaching for class 8 in pimple saudagar, cbse coaching for class 9 in pimple saudagar, cbse coaching for class 10 in pimple saudagar, cbse board tuition in pimple saudagar, tuition for cbse students pimple saudagar, cbse tuition in rahatani, cbse coaching in wakad, cbse classes in kalewadi, cbse tuition in vishal nagar, cbse coaching in sangvi, cbse tuition in hinjewadi, cbse tuition pcmc" />
            <script type="application/ld+json">{`
            {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.asquareclasses.com/cbse-tuition-pimple-saudagar-pune-8th-9th-10th/",
  "url": "https://www.asquareclasses.com/cbse-tuition-pimple-saudagar-pune-8th-9th-10th/",
  "name": "CBSE Coaching & Tuition Classes in Pimple Saudagar Pune – 8th | 9th | 10th",
  "description": "Join the best CBSE coaching in Pimple Saudagar, Pune for Class 8, 9 & 10. A-Square Classes offers expert tutors, regular tests, and complete board exam preparation.",
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
        "name": "CBSE Coaching & Tuition Classes in Pimple Saudagar Pune",
        "item": "https://www.asquareclasses.com/cbse-tuition-pimple-saudagar-pune-8th-9th-10th/"
      }
    ]
  },
  "mainEntity": {
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you provide CBSE tuition for Class 8th in Pimple Saudagar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide the best 8th CBSE classes in Pimple Saudagar focusing on fundamentals in all major subjects."
        }
      },
      {
        "@type": "Question",
        "name": "Why choose ASQUARE Academy for Class 9 tuition in Pimple Saudagar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our CBSE tuition for Class 9th in Pimple Saudagar ensures complete syllabus coverage, assignments, and tests for strong academic growth."
        }
      },
      {
        "@type": "Question",
        "name": "How do you prepare Class 10 students for board exams?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide full syllabus coverage, mock exams, and previous year question paper practice in our Class 10 CBSE tuition in Pimple Saudagar."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide study material?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We provide updated CBSE notes, worksheets, and exam-focused practice material."
        }
      },
      {
        "@type": "Question",
        "name": "How do you track student progress?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We conduct weekly chapter tests, monthly reviews, and share progress reports with parents."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide online CBSE classes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide both online and offline coaching for 8th, 9th & 10th students."
        }
      },
      {
        "@type": "Question",
        "name": "Which subjects are covered?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We teach Mathematics, Science, English & Social Science for all three classes."
        }
      },
      {
        "@type": "Question",
        "name": "Which nearby areas do you serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve students from Rahatni, Wakad, Sangvi (Old & New), Pimple Gurav, Kasarwadi, Aundh, Baner, Balewadi, Hinjewadi, Thergaon, and other nearby PCMC areas."
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
                        <h1 className="common_title"><span className='common_title_span'>Trusted CBSE Coaching Institute </span>Pimple Saudagar for 8th, 9th & 10th.</h1>
                        <p>
                            At <strong>ASQUARE Academy Pimple Saudagar,</strong> we provide the <strong>best CBSE tuition for Class 8th, 9th & 10th</strong> with a strong focus on concept clarity, exam-oriented preparation, and overall confidence building. 
                            Our expert faculty, small batch sizes, and structured teaching methodology ensure students achieve success in both school and board exams.
                        </p>
                        <p>
                            Parents across PCMC consider ASQUARE Academy the <strong>best CBSE coaching in Pimple Saudagar</strong> because of our personalized approach, consistent results, and trusted academic support.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section className="grid_section padd_bottom">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="common_title text-center">What Makes <span className='common_title_span'>ASQUARE the Best CBSE </span>Coaching in Pimple Saudagar?</h2>
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
                            <h6 className="grid_item_title">Comprehensive Study Material </h6>
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

        <section className="leftright_section padd">
            <div className="container">
                <div className='row'>
                <div className="col-lg-6 col-md-12 col-sm-12 img-col order-2 order-lg-1">
                    <img className='common_image' src={image2} alt="" />
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 order-1 order-lg-2">
                    <h3 className="common_title"><span className='common_title_span'>Our CBSE</span> Foundation Courses in Pimple Saudagar</h3>
                    <h6 className="common_subtitle">Best 8th CBSE Classes in Pimple Saudagar</h6>
                    <p>
                        Our <strong>CBSE tuition for Class 8th in Pimple Saudagar </strong> is designed to build strong fundamentals in Maths, Science, and English. With interactive learning and practice-based teaching, students develop the confidence to progress smoothly to higher classes.
                    </p>
                    <ul className="common_ul">
                        <li><span>Focus on core fundamentals</span></li>
                        <li><span>Worksheets & assignments for extra practice</span></li>
                        <li><span>Concept-based teaching methods</span></li>
                    </ul>
                </div>
                </div>
            </div>
        </section>

        <section className="leftright_section padd_bottom">
            <div className="container">
                <div className="row row_reve align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12 order-2 order-lg-1">
                        <h4 className="common_title"><span className='common_title_span'>Best 9th CBSE</span> Classes in Pimple Saudagar</h4>
                        <p>
                            Class 9 is a crucial stage where students transition to advanced learning. Our CBSE tuition for Class 9th in Pimple Saudagar ensures syllabus completion, practice tests, and concept mastery to prepare students for Class 10.
                        </p>
                        <ul className="common_ul">
                            <li><span>Full NCERT syllabus with notes</span></li>
                            <li><span>Regular tests & performance reviews</span></li>
                            <li><span>Individual support for weak areas</span></li>
                        </ul>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 img-col order-1 order-lg-2">
                        <img className='common_image' src={image3} alt="" />
                    </div>
                </div>
            </div>
        </section>

        <section className="leftright_section padd_bottom">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12 img-col order-2 order-lg-1">
                        <img className='common_image' src={image4} alt="" />
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 order-1 order-lg-2">
                        <h5 className="common_title"><span className='common_title_span'>Best 10th</span> CBSE Classes in Pimple Saudagar</h5>
                        <p>
                           Board exams demand discipline and planning. Our CBSE tuition for Class 10th in Pimple Saudagar offers structured syllabus coverage, mock tests, and strategy sessions to maximize board exam performance.
                        </p>
                        <ul className="common_ul">
                            <li><span>Complete syllabus coverage with notes</span></li>
                            <li><span>Mock tests & past year paper practice</span></li>
                            <li><span>Exam tips & time management guidance</span></li>
                        </ul>
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
                        <p className='para_light'>We follow a systematic 4-step process:</p>
                        <p className='para_light'>This ensures students stay confident and perform consistently in their academics.</p>
                        <a href="/"><button class="button mt-3">Know More</button></a>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="methodoloy_itembox">
                            <h6 className="methodology_title">Learn</h6>
                            <span>Concept clarity through structured teaching</span>
                        </div>
                        <div className="methodoloy_itembox">
                            <h6 className="methodology_title">Practice</h6>
                            <span>Assignments and worksheets for daily learning</span>
                        </div>
                        <div className="methodoloy_itembox">
                            <h6 className="methodology_title">Assess</h6>
                            <span>Weekly tests & monthly exams for evaluation</span>
                        </div>
                        <div className="methodoloy_itembox">
                            <h6 className="methodology_title">Revise</h6>
                            <span>Regular doubt-solving & revision sessions</span>
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
                        <h6 className="common_title"><span className='common_title_span'>Conveniently Located</span> for Students Across Pimple Saudagar</h6>
                        <p>
                            Our Pimple Saudagar center is easily accessible to students from <strong>Rahatni, Wakad, Sangvi (Old & New), Pimple Gurav, Kasarwadi, Aundh, Baner, Balewadi, Hinjewadi, Thergaon, and other nearby PCMC areas.</strong> 
                            Parents from these locations trust ASQUARE Academy as the best CBSE coaching in Pimple Saudagar due to our result-oriented approach and expert faculty.
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
                                    ASQUARE Academy helped me prepare for my Class 10 CBSE boards with confidence. The mock tests were extremely useful.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="stories_content">
                            <h5 className="name">Class 9 Student</h5>
                            <div className="content">
                                <p>
                                    Best 9th CBSE coaching in Pimple Saudagar. Teachers explained concepts clearly and gave us detailed assignments.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="stories_content">
                            <h5 className="name">Parent of Class 8 Student</h5>
                            <div className="content">
                                <p>
                                    My child improved in Science and Maths after joining Class 8 tuition at ASQUARE Pimple Saudagar.
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
                                    Do you provide CBSE tuition for Class 8th in Pimple Saudagar?
                                </button>
                                </h2>
                                <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                   Yes, we provide the best 8th CBSE classes in Pimple Saudagar focusing on fundamentals in all major subjects.
                                </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    Why choose ASQUARE Academy for Class 9 tuition in Pimple Saudagar?
                                </button>
                                </h2>
                                <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    Our CBSE tuition for Class 9th in Pimple Saudagar ensures complete syllabus coverage, assignments, and tests for strong academic growth.
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
                                    We provide full syllabus coverage, mock exams, and previous year question paper practice in our Class 10 CBSE tuition in Pimple Saudagar.
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
                                    Yes. We provide updated CBSE notes, worksheets, and exam-focused practice material.
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
                                   How do you track student progress?
                                </button>
                                </h2>
                                <div id="flush-collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        We conduct weekly chapter tests, monthly reviews, and share progress reports with parents.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                                   Do you provide online CBSE classes?
                                </button>
                                </h2>
                                <div id="flush-collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    Yes, we provide both online and offline coaching for 8th, 9th & 10th students.
                                </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                                    Which subjects are covered?
                                </button>
                                </h2>
                                <div id="flush-collapseSeven" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    We teach Mathematics, Science, English & Social Science for all three classes.
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
                                    We serve students from Rahatni, Wakad, Sangvi (Old & New), Pimple Gurav, Kasarwadi, Aundh, Baner, Balewadi, Hinjewadi, Thergaon, and other nearby PCMC areas.
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
                            If you are looking for the best CBSE tuition for Class 8th, 9th & 10th in Pimple Saudagar, ASQUARE Academy is the right choice. 
                            With small batches, experienced teachers, and proven results, we help students achieve academic success.
                        </p>
                        <p>
                            Parents from Pimple Saudagar, Rahatni, Wakad, Sangvi (Old & New), Pimple Gurav, Kasarwadi, Aundh, Baner, Balewadi, Hinjewadi, Thergaon, and nearby PCMC areas trust ASQUARE Academy for consistent improvement and success.
                        </p>
                        <p>
                            Enroll today at ASQUARE Academy Pimple Saudagar – Limited seats available. Book your free demo class now!
                        </p>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 img-col order-1 order-lg-1">
                        <img className='common_image join_img' src={image7} alt="" />
                    </div>
                </div>
            </div>
        </section>
        <Footer />
        </>
    )
}

export default CBSESaudagar