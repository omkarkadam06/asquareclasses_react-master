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
import image1 from '../../Assets/locationPageImages/image1.jpg';
import image2 from '../../Assets/locationPageImages/image2.jpg';
import image3 from '../../Assets/locationPageImages/image3.jpg';
import image4 from '../../Assets/locationPageImages/image4.jpg';
import image5 from '../../Assets/locationPageImages/image5.jpg';
import image7 from '../../Assets/locationPageImages/image7.jpg';
import icon1 from '../../Assets/locationPageImages/student.png';

const Reviews = React.lazy(() => import('../../Components/Reviews/Reviews.jsx'));

function CbsepcmcPune(){
    return(
        <>
        <Helmet>
            <title>Best CBSE Coaching Classes in PCMC for 8th, 9th & 10th Students | ASQUARE Academy</title>
            <meta name="titel" content="Best CBSE Coaching Classes in PCMC for 8th, 9th & 10th Students | ASQUARE Academy" />
            <meta name="description" content="Looking for CBSE tuition in PCMC? ASQUARE Academy offers expert coaching for Classes 8th, 9th & 10th with small batches, study material & tests. Serving Pimpri, Chinchwad, Nigdi, Akurdi, Ravet, Pimple Saudagar, Moshi, Bhosari & nearby areas." />
            <meta name="keywords" content="cbse tuition classes in pcmc pune, best cbse coaching in pcmc, cbse classes for 8th 9th 10th in pcmc, cbse tuition center pcmc, top cbse institute in pcmc, cbse coaching for class 8 in pcmc, cbse coaching for class 9 in pcmc, cbse coaching for class 10 in pcmc, cbse board tuition in pcmc, tuition for cbse students pcmc, cbse tuition in pimpri, cbse coaching in chinchwad, cbse classes in nigdi, cbse tuition in pimple saudagar, cbse coaching in wakad, cbse classes in ravet, cbse tuition in moshi, cbse coaching in bhosari, cbse tuition in akurdi, small batch cbse tuition pcmc, cbse tuition with doubt-solving pcmc, best cbse tutors pcmc, regular test series cbse tuition pcmc, affordable cbse coaching pcmc" />
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
                        <h2 className="common_title"><span className='common_title_span'>Top CBSE Coaching in PCMC </span>- Expert Tuition for Class 8th, 9th & 10th</h2>
                        <p>
                            At <strong>ASQUARE Academy PCMC,</strong> we offer the <strong>best CBSE tuition for Class 8th, 9th & 10th</strong> to help students build strong academic foundations, perform better in school, 
                            and score higher in CBSE board exams. With expert faculty, small batch sizes, and structured teaching, we ensure personalized attention and consistent results.
                        </p>
                        <p>
                            Parents across Pimpri-Chinchwad trust ASQUARE Academy as the best <strong>CBSE coaching in PCMC</strong> due to our proven track record, student-focused approach, and quality teaching methods.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section className="grid_section padd_bottom">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="common_title text-center"><span className='common_title_span'>Why Choose</span> ASQUARE Academy PCMC?</h2>
                    </div>
                </div>    
                <div className="row grid_row">   
                    <div className="col-lg-3 col-md-4 col-sm-12">
                        <div className="grid_item">
                            <img className="grid_img" src={icon1} alt="" />
                            <div className="grid_content">
                            <h6 className="grid_item_title">Expert CBSE Faculty </h6>
                            <p>
                                Specialized teachers for Maths, Science, English & Social Science.
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
                                Individual focus for better learning outcomes.
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
                                Updated notes & worksheets aligned with CBSE syllabus.
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
                                Weekly and monthly exams for progress tracking.
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
                                Dedicated guidance for students who need extra help.
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
                                Consistent success stories from our students.
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
                                Regular feedback and performance discussions.
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
                        <h3 className="common_title"><span className='common_title_span'>Our CBSE</span> Foundation Courses in PCMC</h3>
                        <h6 className="common_subtitle">Best 8th CBSE Classes in PCMC</h6>
                        <p>
                            Our <strong>CBSE tuition for Class 8th in PCMC</strong> builds strong fundamentals in Maths, Science, and English, preparing students for higher classes.
                        </p>
                        <ul className="common_ul">
                            <li><span>Basics made simple with clear teaching</span></li>
                            <li><span>Worksheets & regular assignments</span></li>
                            <li><span>Interactive and engaging sessions</span></li>
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
                        <h4 className="common_title"><span className='common_title_span'>Best 9th CBSE</span> Classes in PCMC</h4>
                        <p>
                            Our <strong>CBSE tuition for Class 9th in PCMC</strong> ensures syllabus mastery with complete NCERT coverage, tests, and personal attention.
                        </p>
                        <ul className="common_ul">
                            <li><span>Detailed NCERT syllabus completion</span></li>
                            <li><span>Weekly & monthly assessments•	Weekly & monthly assessments</span></li>
                            <li><span>Special focus on analytical skills</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section className="leftright_section padd_bottom">
            <div className="container">
                <div className="row row_reve align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <h5 className="common_title"><span className='common_title_span'>Best 10th</span> CBSE Classes PCMC</h5>
                        <p>
                            Our<strong>CBSE tuition for Class 10th in PCMC </strong>prepares students for CBSE board exams through structured study, mock tests, and strategic preparation.
                        </p>
                        <ul className="common_ul">
                            <li><span>Syllabus completion with detailed notes</span></li>
                            <li><span>Mock exams & past paper practice</span></li>
                            <li><span>Exam strategies & time management</span></li>
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
                        <p className='para_light'>We follow a proven 4-step approach:</p>
                        <p className='para_light'>This approach ensures continuous academic growth and confidence in exams.</p>
                        <a href="#"><button class="button mt-3">Know More</button></a>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="methodoloy_itembox">
                            <h6 className="methodology_title">Learn</h6>
                            <span>Concept clarity through structured lessons</span>
                        </div>
                        <div className="methodoloy_itembox">
                            <h6 className="methodology_title">Practice</h6>
                            <span>Worksheets & assignments for reinforcement</span>
                        </div>
                        <div className="methodoloy_itembox">
                            <h6 className="methodology_title">Assess</h6>
                            <span>Weekly & monthly tests for tracking progress</span>
                        </div>
                        <div className="methodoloy_itembox">
                            <h6 className="methodology_title">Revise</h6>
                            <span>Regular doubt-solving and revision sessions</span>
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
                        <h5 className="common_title"><span className='common_title_span'>Conveniently Located</span> for Students Across PCMC</h5>
                        <p>
                            Our PCMC branches are easily accessible to students from Pimpri, Chinchwad, Nigdi, Akurdi, Ravet, Pimple Saudagar, Pimple Gurav, Sangvi (Old & New), Rahatani, Kasarwadi, Moshi, Bhosari, 
                            Spine Road, Talwade, Punawale, Hinjewadi, and Dehu Road. Parents from all these locations trust ASQUARE Academy as the best CBSE coaching institute in PCMC for consistent academic results.
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
                                    ASQUARE Academy in PCMC helped me prepare well for my Class 10 boards. The tests and revisions were excellent.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="stories_content">
                            <h5 className="name">Student (Class 9)</h5>
                            <div className="content">
                                <p>
                                    Best 9th CBSE coaching in PCMC. Teachers provided excellent notes and cleared all my doubts.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="stories_content">
                            <h5 className="name">Parent of Class 8 Student</h5>
                            <div className="content">
                                <p>
                                    My child improved significantly in Maths and Science after joining Class 8 tuition at ASQUARE PCMC.
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
                                    Do you provide CBSE tuition for Class 8th in PCMC?
                                </button>
                                </h2>
                                <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    Yes, we provide the best 8th CBSE classes in PCMC focusing on fundamentals and subject clarity.
                                </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    Why choose ASQUARE Academy for Class 9 tuition in PCMC?
                                </button>
                                </h2>
                                <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    Our CBSE tuition for Class 9th in PCMC ensures complete syllabus coverage, tests, and personal mentoring.
                                </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    How do you prepare Class 10 students for CBSE board exams?
                                </button>
                                </h2>
                                <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    We conduct mock tests, past year paper practice, and revisions in our Class 10 CBSE tuition in PCMC.
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
                                    Yes, updated notes and worksheets aligned with CBSE syllabus are given.
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
                                   Do you provide online coaching?
                                </button>
                                </h2>
                                <div id="flush-collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        Yes, both online and offline CBSE classes are available for Classes 8th, 9th & 10th in PCMC.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                                  Which subjects are taught?
                                </button>
                                </h2>
                                <div id="flush-collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    We teach Maths, Science, English & Social Science for all three classes.
                                </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                                    Which nearby areas do you serve?
                                </button>
                                </h2>
                                <div id="flush-collapseSeven" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    We serve students from Pimpri, Chinchwad, Nigdi, Akurdi, Ravet, Pimple Saudagar, Pimple Gurav, Sangvi, Rahatani, Kasarwadi, Moshi, Bhosari, Talwade, Punawale, Hinjewadi, Spine Road, and Dehu Road.
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
                        <h5 className="common_title">Join <span className='common_title_span'>Join ASQUARE</span> Academy Today</h5>
                        <p>
                            If you’re looking for the <strong>best CBSE tuition for Class 8th, 9th & 10th in PCMC,</strong> ASQUARE Academy is your trusted choice. With expert faculty, small batch sizes, and proven results, we help students succeed in academics and board exams.
                        </p>
                        <p>
                            Parents from Pimpri, Chinchwad, Nigdi, Akurdi, Ravet, Pimple Saudagar, Pimple Gurav, Sangvi, Rahatani, Bhosari, Moshi, and nearby PCMC areas choose ASQUARE Academy for their child’s academic success.
                        </p>
                        <p>
                            <strong>Enroll today at ASQUARE Academy PCMC – Limited seats available. Book your free demo class now!</strong>
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

export default CbsepcmcPune;