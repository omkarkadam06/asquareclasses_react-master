import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../../Components/Navbar/Navbar.jsx';
import Header from '../../Components/Header/Header.jsx';
import Footer from '../../Components/Footer/Footer.jsx';
import Loading from '../Loading.jsx';
import MobileForm from '../../Components/Mobileform/MobileForm.jsx';
import '../locationspage.css';
import locationBGImage from '../../Assets/slider/ICSEsliderPC.jpeg';
import MobileBGImage from '../../Assets/slider/ICSEslidermobile.jpeg';
import MethodologyBg from '../../Assets/locationPageImages/methodologyBG1.jpg';
import image1 from '../../Assets/locationPageImages/CISEPuneimage1.jpg';
import image2 from '../../Assets/locationPageImages/CISEPuneimage2.jpg';
import image3 from '../../Assets/locationPageImages/CISEPuneimage3.jpg';
import image4 from '../../Assets/locationPageImages/CISEPuneimage4.jpg';
import image5 from '../../Assets/locationPageImages/CISEPuneimage5.jpg';
import icon1 from '../../Assets/locationPageImages/student.png';

const Reviews = React.lazy(() => import('../../Components/Reviews/Reviews.jsx'));

function ICSEMoshi(){
    const canonicalUrl = window.location.origin + window.location.pathname;
    return(
        <>
        <Helmet>
            <title>ICSE Tuition Classes in Moshi, Pune - 8th | 9th | 10th at Asquare Academy</title>
            <meta name="title" content="ICSE Tuition Classes in Moshi, Pune - 8th | 9th | 10th at Asquare Academy"/>
            <meta name="description" content="Join top ICSE tuition in Moshi (Pune) for 8th to 10th grades at Asquare Academy. Expert faculty, small batches, personalised attention &amp; proven board-exam preparations. Enrol today for academic excellence!" />
            {/* <meta name="keywords" content="ICSE tuition classes in Pune, Best ICSE coaching in Pune, ICSE tuition for Class 8 in Pune, ICSE tuition for Class 9 in Pune, ICSE tuition for Class 10 in Pune, ICSE board classes in Pune, Top ICSE coaching institute Pune, Expert ICSE teachers Pune, ICSE board exam preparation Pune, ICSE coaching with regular tests Pune, Affordable ICSE coaching in Pune, ICSE study material Pune, ICSE tuition in Camp Pune, ICSE coaching in Viman Nagar, ICSE classes in Hadapsar, ICSE tuition Koregaon Park Pune, ICSE coaching in Kothrud. ICSE tuition in Baner, ICSE classes in Pimple Saudagar, ICSE coaching in Pimpri, ICSE tuition in Nigdi, ICSE coaching in Chinchwad" /> */}
            <script type="application/ld+json">{`
            {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.asquareclasses.com/icse-tuition-classes-moshi-pune-8th-9th-10th",
  "url": "https://www.asquareclasses.com/icse-tuition-classes-moshi-pune-8th-9th-10th",
  "name": "ICSE Tuition Classes in Moshi Pune for 8th, 9th & 10th - A-Square Classes",
  "description": "Join top ICSE tuition in Moshi, Pune for 8th to 10th grades at A-Square Classes. Expert teachers, personalised attention & board exam preparation.",
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
        "name": "ICSE Tuition Classes",
        "item": "https://www.asquareclasses.com/icse-tuition-classes-moshi-pune-8th-9th-10th"
      }
    ]
  },
  "mainEntity": {
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you provide ICSE tuition for Class 8 in Moshi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Our ICSE tuition for Class 8th in Moshi covers Maths, Science, HCG, English, and Second Languages."
        }
      },
      {
        "@type": "Question",
        "name": "Are Science subjects taught separately?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We teach Physics, Chemistry & Biology separately for better clarity."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide ICSE tuition for Class 9 in Moshi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Our ICSE tuition for Class 9th in Moshi includes syllabus completion, tests, and revision."
        }
      },
      {
        "@type": "Question",
        "name": "How do you prepare Class 10 ICSE students for boards?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide mock exams, past-year paper solving, answer-writing practice & doubt-clearing sessions."
        }
      },
      {
        "@type": "Question",
        "name": "Which areas do you serve near Moshi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Students come to us from Bhosari, Charholi, Alandi, Chikhali, Talwade, Dighi & Chakan."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide online ICSE tuition?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Both online and offline ICSE coaching are available."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide demo classes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Free demo classes are available at our Moshi centre."
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
                        <h1 className="common_title"><span className='common_title_span'>Best ICSE Board</span> Tuition Classes in Moshi for 8th, 9th & 10th Students</h1>
                        <p>
                            The ICSE syllabus is comprehensive and requires in-depth subject knowledge. For Classes 8th, 9th, and 10th, students often need structured guidance to handle multiple subjects effectively.
                        </p>
                        <p>
                            At <strong>ASQUARE Academy Moshi,</strong> we provide specialised <strong>ICSE tuition classes</strong> that help students strengthen their fundamentals, develop exam confidence, and achieve excellent results. With experienced faculty, 
                            small batches, structured notes, and regular tests, we ensure students excel both in school and in board exams.
                        </p>
                        <p>
                            Our Moshi branch also caters to students from <strong>Bhosari, Charholi, Alandi, Chikhali, Talwade, Dighi, Spine Road & Chakan,</strong> making us a preferred ICSE coaching centre in the region.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section className="leftright_section padd_bottom">
            <div className="container">
                <div className="row row_reve align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12 order-2 order-lg-1">
                        <h2 className="common_title"><span className='common_title_span'>Why Choose</span> ASQUARE Academy for ICSE Coaching in Moshi?</h2>
                        <p>
                            We design our coaching programs to suit the ICSE curriculum and exam requirements. Our goal is to provide <strong>concept clarity, consistent practice, and personalised support.</strong>
                        </p>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 img-col order-1 order-lg-2">
                        <img className='common_image' src={image2} alt="" />
                    </div>
                </div>
            </div>
        </section>
        <section className="grid_section grid_section_bg padd">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="common_title text-center"><span className='common_title_span'>Key Benefits</span> of Joining ASQUARE Academy Moshi:</h3>
                    </div>
                </div>    
                <div className="row grid_row">   
                    <div className="col-lg-3 col-md-4 col-sm-12">
                        <div className="grid_item">
                            <img className="grid_img" src={icon1} alt="" />
                            <div className="grid_content">
                            <h6 className="grid_item_title">Experienced ICSE Faculty </h6>
                            <p>
                                Teachers for Maths, Physics, Chemistry, Biology, English & HCG (History, Civics & Geography).
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12">
                        <div className="grid_item">
                            <img className="grid_img" src={icon1} alt="" />
                            <div className="grid_content">
                            <h6 className="grid_item_title">Small Batch Sizes </h6>
                            <p>
                                Ensuring personal attention and effective doubt-solving.
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12">
                        <div className="grid_item">
                            <img className="grid_img" src={icon1} alt="" />
                            <div className="grid_content">
                            <h6 className="grid_item_title">Structured Study Material </h6>
                            <p>
                                Detailed notes, worksheets, and ICSE-style test papers.
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12">
                        <div className="grid_item">
                            <img className="grid_img" src={icon1} alt="" />
                            <div className="grid_content">
                            <h6 className="grid_item_title">Regular Assessments </h6>
                            <p>
                                Weekly & monthly tests with progress reviews.
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12">
                        <div className="grid_item">
                            <img className="grid_img" src={icon1} alt="" />
                            <div className="grid_content">
                            <h6 className="grid_item_title">Doubt-Solving Sessions  </h6>
                            <p>
                                Extra support for weaker topics.
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12">
                        <div className="grid_item">
                            <img className="grid_img" src={icon1} alt="" />
                            <div className="grid_content">
                            <h6 className="grid_item_title">Proven Results </h6>
                            <p>
                                Consistent record of high scores in ICSE exams.
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12">
                        <div className="grid_item">
                            <img className="grid_img" src={icon1} alt="" />
                            <div className="grid_content">
                            <h6 className="grid_item_title">Prime Location Advantage  </h6>
                            <p>
                               Convenient for students from Moshi, Bhosari, Charholi, Alandi, Talwade & nearby areas.
                            </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        <section className="leftright_section padd">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 img-col order-2 order-lg-1">
                        <img className='common_image' src={image3} alt="" />
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 order-1 order-lg-2">
                        <h4 className="common_title"><span className='common_title_span'>ICSE Tuition </span> for Class 8 in Moshi - Building Strong Fundamentals</h4>
                        <p>
                            Class 8 is the starting point for advanced ICSE preparation. Our <strong>ICSE tuition for Class 8th in Moshi</strong> focuses on developing clarity and confidence in every subject.
                        </p>
                        <p>
                            <strong>Subjects covered:</strong>
                        </p>
                        <ul className="common_ul">
                            <li><span>Mathematics</span></li>
                            <li><span>Physics, Chemistry & Biology (separate teaching)</span></li>
                            <li><span>History, Civics & Geography (HCG)</span></li>
                            <li><span>English Language & Literature</span></li>
                            <li><span>Second Language (Hindi, Marathi, Sanskrit, etc.)</span></li>
                        </ul>
                        <p>
                            Parents prefer ASQUARE Academy for the <strong>Best 8th ICSE classes in Moshi, Bhosari & Charholi,</strong> ensuring their child is prepared for higher grades.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section className="leftright_section padd_bottom">
            <div className="container">
                <div className="row row_reve align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12 order-2 order-lg-1">
                        <h5 className="common_title"><span className='common_title_span'>ICSE Tuition</span> for Class 9 in Moshi - Strengthening Core Knowledge</h5>
                        <p>
                            Class 9 is crucial for building the base for ICSE boards. Our <strong>ICSE tuition for Class 9th in Moshi</strong> ensures thorough coverage of the syllabus and exam readiness.
                        </p>
                        <p>
                            <strong>Highlights include:</strong>
                        </p>
                        <ul className="common_ul">
                            <li><span>Detailed coverage of Maths, Physics, Chemistry & Biology</span></li>
                            <li><span>English grammar, comprehension & writing improvement</span></li>
                            <li><span>History, Civics & Geography with map and source-based exercises</span></li>
                            <li><span>Computer Applications & Second Language</span></li>
                            <li><span>Weekly unit tests & feedback</span></li>
                        </ul>
                        <p>
                            That’s why we’re known for the <strong>Best 9th ICSE classes in Moshi, Alandi & Chikhali.</strong>
                        </p>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 img-col order-1 order-lg-2">
                        <img className='common_image' src={image4} alt="" />
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
                        <h6 className="common_title"><span className='common_title_span'>ICSE Tuition </span> for Class 10 in Moshi - Focused Board Exam Preparation</h6>
                        <p>
                            Class 10 marks the most important academic milestone. At <strong>ASQUARE Academy Moshi,</strong> our ICSE tuition for Class 10th is structured to achieve excellent board exam results.
                        </p>
                        <p>
                            <strong>Exam-Focused Preparation Includes:</strong>
                        </p>
                        <ul className="common_ul">
                            <li><span>Complete syllabus completion with revisions</span></li>
                            <li><span>Mock board exams & past paper practice</span></li>
                            <li><span>Time-management and answer-writing training</span></li>
                            <li><span>Scoring strategies & revision cycles</span></li>
                            <li><span>Doubt-clearing sessions with individual mentoring</span></li>
                        </ul>
                        <p>
                            We are trusted by parents for the <strong>Best 10th ICSE classes in Moshi, Talwade & Dighi,</strong> with students achieving top results year after year.
                        </p>
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
                        <p className='para_light'>At ASQUARE Academy Moshi, we follow a result-oriented teaching style:</p>
                        <a href="/"><button class="button mt-3">Know More</button></a>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="methodoloy_itembox">
                            <h6 className="methodology_title">Interactive Teaching </h6>
                            <span>Engaging classes with examples.</span>
                        </div>
                        <div className="methodoloy_itembox">
                            <h6 className="methodology_title">Practice-Driven Approach</h6>
                            <span>Worksheets & ICSE-style questions.</span>
                        </div>
                        <div className="methodoloy_itembox">
                            <h6 className="methodology_title">Regular Monitoring </h6>
                            <span>Unit tests and progress tracking.</span>
                        </div>
                        <div className="methodoloy_itembox">
                            <h6 className="methodology_title">Parent Involvement </h6>
                            <span>Feedback and performance reports shared with parents.</span>
                        </div>
                        <div className="methodoloy_itembox">
                            <h6 className="methodology_title">Student Motivation </h6>
                            <span>Guidance to reduce exam stress and boost confidence.</span>
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
                        <h5 className="common_title">ICSE Tuition in Moshi<span className='common_title_span'>(FAQs)</span></h5>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div class="accordion accordion-flush" id="accordionFlushExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    Do you provide ICSE tuition for Class 8 in Moshi?
                                </button>
                                </h2>
                                <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    Yes. Our ICSE tuition for Class 8th in Moshi covers Maths, Science, HCG, English, and Second Languages
                                </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    Are Science subjects taught separately?
                                </button>
                                </h2>
                                <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    Yes. We teach Physics, Chemistry & Biology separately for better clarity.
                                </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    Do you provide ICSE tuition for Class 9 in Moshi?
                                </button>
                                </h2>
                                <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    Yes. Our ICSE tuition for Class 9th in Moshi includes syllabus completion, tests, and revision.
                                </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                    How do you prepare Class 10 ICSE students for boards?
                                </button>
                                </h2>
                                <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    We provide mock exams, past-year paper solving, answer-writing practice & doubt-clearing sessions.
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
                                   Which areas do you serve near Moshi?
                                </button>
                                </h2>
                                <div id="flush-collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        Students come to us from Bhosari, Charholi, Alandi, Chikhali, Talwade, Dighi & Chakan.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                                   Do you provide online ICSE tuition?
                                </button>
                                </h2>
                                <div id="flush-collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    Yes. Both online and offline ICSE coaching are available.
                                </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                                    Do you provide demo classes?
                                </button>
                                </h2>
                                <div id="flush-collapseSeven" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    Yes. Free demo classes are available at our Moshi centre.
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
                <div className="col-lg-6 col-md-6 col-sm-12 col-left padd">
                    <h5 className="common_title color_blue">Enrol with ASQUARE Academy Moshi Today</h5>
                    <p>At ASQUARE Academy Moshi, we don’t just focus on syllabus completion—we build your child’s confidence, sharpen their skills, and prepare them to excel in ICSE exams.</p>
                    <p>If you’re searching for:</p>
                    <ul className="common_ul">
                        <li><span>Best 8th ICSE classes in Moshi, Bhosari & Charholi</span></li>
                        <li><span>Best 9th ICSE classes in Moshi, Alandi & Chikhali</span></li>
                        <li><span>Best 10th ICSE classes in Moshi, Talwade & Dighi</span></li>
                        <li><span>Result-oriented ICSE tuition for Class 8th, 9th & 10th in Moshi</span></li>
                    </ul>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-right padd">
                    <h5 className="common_title title-light">Then <strong>ASQUARE Academy Moshi</strong> is your trusted choice for ICSE academic success.</h5>
                    <p className='para_light'>Visit our Moshi centre, easily accessible from <strong>Bhosari, Charholi, Alandi, Chikhali, Talwade, Dighi & Chakan.</strong></p>
                    <p className='para_light'>Call today to book a free demo class and enquire about admissions & fees</p>
                    <a href="/"><button class="button mt-3">Know More</button></a>
                </div>
            </div>
        </section>
        <Footer />
        </>
    )
}

export default ICSEMoshi