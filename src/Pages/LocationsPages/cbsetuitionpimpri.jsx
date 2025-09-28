import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../../Components/Navbar/Navbar.jsx';
import Header from '../../Components/Header/Header.jsx';
import Footer from '../../Components/Footer/Footer.jsx';
import Loading from '../Loading.jsx';
import MobileForm from '../../Components/Mobileform/MobileForm.jsx';
import '../locationspage.css';
import locationBGImage from '../../Assets/locationPageImages/cbscbgbanner.jpg';
import MobileBGImage from '../../Assets/locationPageImages/location-mobileBG.jpg';
import MethodologyBg from '../../Assets/locationPageImages/methodologyBG1.jpg';
import image1 from '../../Assets/locationPageImages/image1.jpg';
import image2 from '../../Assets/locationPageImages/image2.jpg';
import image3 from '../../Assets/locationPageImages/image3.jpg';
import image4 from '../../Assets/locationPageImages/image4.jpg';
import image5 from '../../Assets/locationPageImages/image5.jpg';
import image7 from '../../Assets/locationPageImages/image7.jpg';
import icon1 from '../../Assets/locationPageImages/student.png';

const Reviews = React.lazy(() => import('../../Components/Reviews/Reviews.jsx'));

function Cbsetuitionpimpri(){
    return(
        <>
        <Helmet>
            <title>Best CBSE Coaching Classes in Pimpri-Chinchwad for 8th, 9th & 10th Students | ASQUARE Academy</title>
            <meta name="titel" content="Best CBSE Coaching Classes in Pimpri-Chinchwad for 8th, 9th & 10th Students | ASQUARE Academy" />
            <meta name="description" content="ASQUARE Academy offers the best CBSE tuition in Pimpri-Chinchwad for Classes 8th, 9th & 10th. Small batches, expert teachers, doubt-solving, and regular tests. Serving students from Nigdi, Pimple Saudagar, Wakad, Thergaon, Ravet, Moshi, Bhosari & Akurdi." />
            <meta name="keywords" content="CBSE tuition Pimpri Chinchwad, CBSE coaching Pimpri Chinchwad, CBSE classes 8th 9th 10th, Best CBSE tuition in Pune, ASQUARE Academy CBSE coaching, CBSE tuition Nigdi, CBSE coaching Pimple Saudagar, Tuition classes in Wakad, Best tuition in Thergaon, Ravet coaching classes, Moshi CBSE classes, Bhosari CBSE tuition, Akurdi tuition classes, Small batch tuition Pune, Doubt-solving classes CBSE, Regular test series CBSE, Expert CBSE teachers Pune, Personalized coaching CBSE, Best coaching for CBSE 8th 9th 10th in Pimpri Chinchwad, Top CBSE tuition classes near Wakad and Pimple Saudagar, CBSE coaching with regular tests and doubt clearing" />
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
                    <div className="col-lg-6 col-md-12 col-sm-12 img-col">
                        <img className='common_image' src={image1} alt="" />
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <h2 className="common_title"><span className='common_title_span'>Best CBSE Coaching Classes</span> in Pimpri-Chinchwad for 8th, 9th & 10th Std.</h2>
                        <p>
                            Finding the right coaching during school years is one of the most important decisions for parents. 
                            At <strong>ASQUARE Academy Pimpri-Chinchwad, we provide the best CBSE tuition for Class 8th, 9th & 10th</strong> to help 
                            students build a strong foundation and achieve excellent results in their academics.
                        </p>
                        <p>
                            Our focus is not only on preparing students for exams but also on making them confident learners who can apply concepts in real life. 
                            Parents choose ASQUARE Academy as the <strong>best 8th, 9th & 10th CBSE coaching in Pimpri-Chinchwad</strong> because of our expert faculty, personalized mentoring, and proven results.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section className="grid_section padd_bottom">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="common_title text-center"><span className='common_title_span'>Why Choose</span> ASQUARE Academy Pimpri-Chinchwad?</h2>
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
                            <h6 className="grid_item_title">Small Batch Size  </h6>
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
                            <h6 className="grid_item_title">Parent–Teacher Communication  </h6>
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
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <h3 className="common_title"><span className='common_title_span'>Our CBSE</span> Foundation Courses in Pimpri-Chinchwad</h3>
                        <h6 className="common_subtitle">Best 8th CBSE Classes in Pimpri-Chinchwad</h6>
                        <p>
                            Class 8 is the stepping stone towards higher education. Our <strong>CBSE tuition for Class 8th in Pimpri-Chinchwad</strong> focuses on strengthening 
                            the basics of Maths, Science, and English. With concept-based learning and interactive methods, we ensure students are ready for the challenges of higher grades.
                        </p>
                        <ul className="common_ul">
                            <li><span>Strong focus on fundamentals</span></li>
                            <li><span>Concept clarity through examples</span></li>
                            <li><span>Regular practice sessions for better retention</span></li>
                        </ul>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 img-col">
                        <img className='common_image' src={image2} alt="" />
                    </div>
                </div>
            </div>
        </section>

        <section className="leftright_section padd_bottom">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12 img-col">
                        <img className='common_image' src={image3} alt="" />
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <h4 className="common_title"><span className='common_title_span'>Best 9th CBSE</span> Classes in Pimpri-Chinchwad</h4>
                        <p>
                            Class 9 plays a vital role in preparing students for board exams. At ASQUARE, our <strong>CBSE tuition for Class 9th in Pimpri-Chinchwad</strong> helps 
                            students understand topics in-depth and build problem-solving skills. This gives them the confidence to tackle Class 10 with ease.
                        </p>
                        <ul className="common_ul">
                            <li><span>Detailed coverage of NCERT syllabus</span></li>
                            <li><span>Assignments and practice tests for every chapter</span></li>
                            <li><span>Special attention to weak areas through doubt-solving</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section className="leftright_section padd_bottom">
            <div className="container">
                <div className="row row_reve align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <h5 className="common_title"><span className='common_title_span'>Best 10th</span> CBSE Classes in Pimpri-Chinchwad</h5>
                        <p>
                            Class 10 is the most important stage of school life. Our <strong>CBSE tuition for Class 10th in Pimpri-Chinchwad</strong> prepares 
                            students thoroughly for board exams with complete syllabus coverage, frequent mock tests, and effective revision strategies.
                        </p>
                        <ul className="common_ul">
                            <li><span>Complete NCERT syllabus with notes</span></li>
                            <li><span>Mock exams and previous year paper practice</span></li>
                            <li><span>Exam techniques, time management & writing skills</span></li>
                        </ul>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 img-col">
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
                        <h5 className="common_title title-light"><span className='common_title_span'>Our</span> Teaching Methodology</h5>
                        <p className='para_light'>At ASQUARE Academy, we follow a 4-step learning cycle that ensures complete academic growth:</p>
                        <p className='para_light'>This systematic method ensures that every student builds confidence and improves performance in school and board exams.</p>
                        <a href="#"><button class="button mt-3">Know More</button></a>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="methodoloy_itembox">
                            <h6 className="methodology_title">Learn</h6>
                            <span>Concept-based classroom teaching by subject experts.</span>
                        </div>
                        <div className="methodoloy_itembox">
                            <h6 className="methodology_title">Practice</h6>
                            <span>Worksheets, assignments, and daily exercises.</span>
                        </div>
                        <div className="methodoloy_itembox">
                            <h6 className="methodology_title">Assess</h6>
                            <span>Weekly tests, monthly exams, and performance tracking.</span>
                        </div>
                        <div className="methodoloy_itembox">
                            <h6 className="methodology_title">Revise</h6>
                            <span>Special revision classes and doubt-solving sessions.</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="leftright_section padd">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 img-col">
                        <img className='common_image' src={image5} alt="" />
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <h5 className="common_title"><span className='common_title_span'>Conveniently Located</span> for Students Across Pimpri-Chinchwad</h5>
                        <p>
                            Our Pimpri-Chinchwad center is ideally located to serve students from nearby areas. Along with Pimpri and Chinchwad, many students join us from <strong>Nigdi, 
                            Pimple Saudagar, Wakad, Thergaon, Moshi, Ravet, Bhosari, Akurdi, Chikhali, Spine City, Alandi, Charoli, Talegaon, Sahunagar and Dighi.</strong> Parents from these areas 
                            trust ASQUARE Academy as the <strong>best CBSE coaching institute in PCMC</strong> because of our quality teaching, consistent results, and student-focused approach.
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
                            <h5 className="name">Student (Class 10)</h5>
                            <div className="content">
                                <p>
                                    ASQUARE Academy helped me a lot in my Class 10 preparation. The regular mock tests gave me confidence for my CBSE board exams.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="stories_content">
                            <h5 className="name">Student (Class 9)</h5>
                            <div className="content">
                                <p>
                                    Best 9th CBSE tuition in Pimpri-Chinchwad. The teachers explained concepts in detail and cleared all my doubts.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="stories_content">
                            <h5 className="name">Parent of Class 8 Student</h5>
                            <div className="content">
                                <p>
                                    My daughter improved her Maths and Science scores significantly after joining ASQUARE’s Class 8 CBSE coaching in Pimpri-Chinchwad.
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
                                    Do you provide CBSE tuition for Class 8th in Pimpri-Chinchwad?
                                </button>
                                </h2>
                                <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    Yes. At ASQUARE Academy, we offer the best 8th CBSE classes in Pimpri-Chinchwad, focusing on building strong fundamentals in Mathematics, Science, and English. 
                                    Our teaching approach ensures students gain clarity in concepts at an early stage, which prepares them for the challenges of higher classes.
                                </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    What makes ASQUARE Academy the best choice for Class 9th CBSE tuition in Pimpri-Chinchwad?
                                </button>
                                </h2>
                                <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    Our Class 9th CBSE tuition in Pimpri-Chinchwad is designed to provide in-depth learning with special emphasis on critical concepts, problem-solving, and logical reasoning. Along with syllabus coverage, 
                                    we conduct regular assignments, tests, and doubt-solving sessions. This systematic approach helps students gain confidence for Class 10th and beyond.
                                </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    How do you prepare Class 10th students in Pimpri-Chinchwad for CBSE board exams?
                                </button>
                                </h2>
                                <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    At ASQUARE Academy, our Class 10th CBSE tuition in Pimpri-Chinchwad ensures complete NCERT coverage, chapter-wise mock tests, and previous years’ paper practice. 
                                    We also provide guidance on exam writing techniques, time management strategies, and revision plans to help students perform exceptionally in their board exams.
                                </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                    Do you provide study material for students?
                                </button>
                                </h2>
                                <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    Yes. We provide updated study material, notes, and worksheets for all classes (8th, 9th & 10th). Our study resources are carefully designed by subject experts to make learning easy and effective. 
                                    They act as a handy tool for quick revisions before school exams and boards.
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
                                   How do you track student progress at ASQUARE Pimpri-Chinchwad?
                                </button>
                                </h2>
                                <div id="flush-collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">We follow a structured evaluation system that includes weekly chapter tests, monthly assessments, and detailed feedback reports. 
                                        Parents are regularly informed about their child’s progress, and special attention is given to areas that require improvement.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                                   Do you offer online CBSE tuition in Pimpri-Chinchwad?
                                </button>
                                </h2>
                                <div id="flush-collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    Yes. Along with classroom coaching, we also provide online CBSE tuition for Class 8th, 9th, and 10th in Pimpri-Chinchwad. 
                                    This ensures flexibility for students who prefer learning from home while maintaining the same quality as offline sessions.
                                </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                                    What subjects are covered in your CBSE tuition programs?
                                </button>
                                </h2>
                                <div id="flush-collapseSeven" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    We provide coaching for Mathematics, Science, English, and Social Science across Classes 8th, 9th, and 10th. 
                                    Each subject is taught by experienced faculty who specialize in CBSE curriculum and board exam preparation.
                                </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
                                    Which nearby areas of Pimpri-Chinchwad do you serve?
                                </button>
                                </h2>
                                <div id="flush-collapseEight" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    Our Pimpri-Chinchwad center is easily accessible for students from Nigdi, Pimple Saudagar, Wakad, Thergaon, Ravet, Moshi, Bhosari, Akurdi, Chikhali, and Spine City. 
                                    Many parents from these areas choose ASQUARE Academy for the best CBSE coaching classes in PCMC due to our results-driven teaching approach.
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
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <h5 className="common_title">Join <span className='common_title_span'>ASQUARE</span> Academy Today</h5>
                        <p>
                            If you are searching for the <strong>best CBSE tuition for Class 8th, 9th & 10th in Pimpri-Chinchwad,</strong> ASQUARE Academy is the right choice. 
                            With highly experienced teachers, small batches, and personalized attention, we ensure that every student achieves academic success and develops the confidence to perform well in board exams.
                        </p>
                        <p>
                            Parents across <strong>Pimpri, Chinchwad, Nigdi, Pimple Saudagar, Wakad, Ravet, Thergaon, Moshi, and Bhosari</strong> trust ASQUARE Academy for consistent results and quality teaching.
                        </p>
                        <p>
                            <strong>Enroll today at ASQUARE Academy Pimpri-Chinchwad – Limited seats available. Book your free demo class now!</strong>
                        </p>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 img-col">
                        <img className='common_image join_img' src={image7} alt="" />
                    </div>
                </div>
            </div>
        </section>
        <Footer />
        </>
    )
}

export default Cbsetuitionpimpri;