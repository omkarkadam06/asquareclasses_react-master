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

function ICSEChinchwad(){
    const canonicalUrl = window.location.origin + window.location.pathname;
    return(
        <>
        <Helmet>
            <title>ICSE Tuition Classes in Pimpri Chinchwad – 8th, 9th & 10th | Asquare Academy</title>
            <meta name="title" content="ICSE Tuition Classes in Pimpri Chinchwad – 8th, 9th & 10th | Asquare Academy" />
            <meta name="description" content="ICSE tuition classes for 8th, 9th & 10th in Pimpri Chinchwad at Asquare Academy. Expert teachers, small batches & focused coaching for exam success." />
            <meta name="keywords" content="ICSE tuition classes in Pune, Best ICSE coaching in Pune, ICSE tuition for Class 8 in Pune, ICSE tuition for Class 9 in Pune, ICSE tuition for Class 10 in Pune, ICSE board classes in Pune, Top ICSE coaching institute Pune, Expert ICSE teachers Pune, ICSE board exam preparation Pune, ICSE coaching with regular tests Pune, Affordable ICSE coaching in Pune, ICSE study material Pune, ICSE tuition in Camp Pune, ICSE coaching in Viman Nagar, ICSE classes in Hadapsar, ICSE tuition Koregaon Park Pune, ICSE coaching in Kothrud. ICSE tuition in Baner, ICSE classes in Pimple Saudagar, ICSE coaching in Pimpri, ICSE tuition in Nigdi, ICSE coaching in Chinchwad" />
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
                        <h2 className="common_title"><span className='common_title_span'>Best ICSE Board</span> Tuition Classes in Chinchwad for 8th, 9th & 10th Students</h2>
                        <p>
                            The ICSE syllabus is detailed, concept-driven, and demands strong subject clarity. For students in Classes 8th, 9th, and 10th, handling the wide range of subjects often becomes difficult without structured guidance.
                        </p>
                        <p>
                            At <strong>ASQUARE Academy Chinchwad,</strong> we provide specialised <strong>ICSE board tuition classes</strong> that help students strengthen their fundamentals, develop exam confidence, and achieve outstanding results. 
                            With expert subject teachers, small batch sizes, detailed study resources, and regular tests, we ensure each student receives personalised support.
                        </p>
                        <p>
                            Our Chinchwad branch is easily accessible to students from <strong>Pimpri, Nigdi, Pimple Saudagar, Akurdi, Ravet, Moshi, Bhosari, Sahu Nagar, PCMC, Spine City, and Indrayani Nagar,</strong> making it a top choice for ICSE families in the region
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section className="leftright_section padd_bottom">
            <div className="container">
                <div className="row row_reve align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12 order-2 order-lg-1">
                        <h3 className="common_title"><span className='common_title_span'>Why Choose</span> ASQUARE Academy for ICSE Coaching in Chinchwad?</h3>
                        <p>
                            We design our coaching programs to perfectly align with ICSE board requirements. Our focus remains on <strong>concept clarity, practice-based learning, and consistent performance tracking.</strong>
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
                        <h2 className="common_title text-center"><span className='common_title_span'>Key Benefits</span> of Joining Academy Chinchwad:</h2>
                    </div>
                </div>    
                <div className="row grid_row">   
                    <div className="col-lg-3 col-md-4 col-sm-12">
                        <div className="grid_item">
                            <img className="grid_img" src={icon1} alt="" />
                            <div className="grid_content">
                            <h6 className="grid_item_title">Experienced ICSE Faculty </h6>
                            <p>
                                Subject experts for Maths, Physics, Chemistry, Biology, English, and HCG (History, Civics & Geography).
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
                                Personalised attention for every student.
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
                                Notes, worksheets, and ICSE-style practice papers.
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
                                Weekly and monthly tests to track growth.
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12">
                        <div className="grid_item">
                            <img className="grid_img" src={icon1} alt="" />
                            <div className="grid_content">
                            <h6 className="grid_item_title">Dedicated Doubt-Solving </h6>
                            <p>
                                Additional support for tough topics.
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
                                Students consistently perform well in ICSE boards.
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12">
                        <div className="grid_item">
                            <img className="grid_img" src={icon1} alt="" />
                            <div className="grid_content">
                            <h6 className="grid_item_title">Convenient Location </h6>
                            <p>
                                Easy access for students from Chinchwad, Pimpri, Nigdi, Pimple Saudagar, Akurdi, Ravet, Moshi, and Bhosari.
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
                        <h2 className="common_title"><span className='common_title_span'>ICSE Tuition </span> for Class 8 in Pune Chinchwad – Building the Right Foundation</h2>
                        <p>
                            Class 8 is where students step into more detailed ICSE subjects. Our <strong>ICSE tuition for Class 8th in Chinchwad</strong> ensures strong foundations with concept clarity and regular assignments.
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
                            Parents prefer us for the Best 8th ICSE classes in Chinchwad, Pimpri, and Nigdi, as we prepare students early for higher academic challenges.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section className="leftright_section padd_bottom">
            <div className="container">
                <div className="row row_reve align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12 order-2 order-lg-1">
                        <h5 className="common_title"><span className='common_title_span'>ICSE Tuition</span> for Class 9 in Chinchwad – Strengthening Core Knowledge</h5>
                        <p>
                            Class 9 acts as the foundation year for ICSE boards. Our <strong>ICSE tuition for Class 9th in Chinchwad</strong> covers all subjects in detail with a balanced focus on concept-building and exam readiness.
                        </p>
                        <p>
                            <strong>Highlights include:</strong>
                        </p>
                        <ul className="common_ul">
                            <li><span>Syllabus completion across Maths, Physics, Chemistry & Biology</span></li>
                            <li><span>English grammar, comprehension & writing practice</span></li>
                            <li><span>History, Civics & Geography with map-based exercises</span></li>
                            <li><span>Computer Applications & Second Language</span></li>
                            <li><span>Weekly tests with personalised feedback</span></li>
                        </ul>
                        <p>
                            This structured approach makes ASQUARE the preferred choice for the <strong>Best 9th ICSE classes in Chinchwad, Pimple Saudagar, and Akurdi.</strong>
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
                        <h2 className="common_title"><span className='common_title_span'>ICSE Tuition </span> for Class 10 in Chinchwad – Focused Board Exam Preparation</h2>
                        <p>
                            Class 10 is the most crucial year in school academics. At <strong>ASQUARE Academy Chinchwad, our ICSE tuition for Class 10th</strong> is entirely result-oriented and exam-focused.
                        </p>
                        <p>
                            <strong>Highlights include:</strong>
                        </p>
                        <ul className="common_ul">
                            <li><span>Detailed syllabus coverage for all core ICSE subjects</span></li>
                            <li><span>Mock board exams & past paper solving</span></li>
                            <li><span>Time-management and answer-writing skills</span></li>
                            <li><span>Subject-specific scoring strategies</span></li>
                            <li><span>Doubt-solving and regular revisions</span></li>
                        </ul>
                        <p>
                            That’s why we are highly recommended for the <strong>Best 10th ICSE classes in Chinchwad, Ravet, Moshi, and Bhosari.</strong>
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
                        <h5 className="common_title title-light"><span className='common_title_span'>Our</span> Teaching Methodology</h5>
                        <p className='para_light'>At ASQUARE Academy Chinchwad, we use a <strong>student-focused methodology:</strong></p>
                        <a href="/"><button class="button mt-3">Know More</button></a>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="methodoloy_itembox">
                            <h6 className="methodology_title">Interactive Teaching </h6>
                            <span>Concept explanation with real-life applications.</span>
                        </div>
                        <div className="methodoloy_itembox">
                            <h6 className="methodology_title">Practice-Oriented Learning </h6>
                            <span>Worksheets and test papers based on ICSE patterns.</span>
                        </div>
                        <div className="methodoloy_itembox">
                            <h6 className="methodology_title">Performance Tracking </h6>
                            <span>Weekly/monthly tests with progress reviews.</span>
                        </div>
                        <div className="methodoloy_itembox">
                            <h6 className="methodology_title">Parent Involvement </h6>
                            <span>Regular updates and performance reports.</span>
                        </div>
                        <div className="methodoloy_itembox">
                            <h6 className="methodology_title">Mentorship</h6>
                            <span>Extra motivation and exam guidance for stress-free preparation.</span>
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
                        <h5 className="common_title">Frequently Asked Questions <span className='common_title_span'>(FAQs)</span></h5>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div class="accordion accordion-flush" id="accordionFlushExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    Do you provide ICSE tuition for Class 8 in Chinchwad?
                                </button>
                                </h2>
                                <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    Yes, we offer ICSE tuition for Class 8th in Chinchwad, covering Maths, Science, HCG, English, and Second Language.
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
                                    Yes. Physics, Chemistry, and Biology are taught individually to ensure better understanding.
                                </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    Which subjects do you cover for Class 9 ICSE coaching?
                                </button>
                                </h2>
                                <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    We cover Maths, Physics, Chemistry, Biology, English, HCG, Computer Applications, and Second Languages.
                                </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                    How do you prepare students for Class 10 ICSE board exams?
                                </button>
                                </h2>
                                <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    We provide mock board exams, past-year paper solving, revision sessions, and answer-writing practice.
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
                                   Which areas do you serve near Chinchwad?
                                </button>
                                </h2>
                                <div id="flush-collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        Our ICSE classes are accessible to students from Pimpri, Nigdi, Pimple Saudagar, Akurdi, Ravet, Moshi, Bhosari, Sahu Nagar, Spine City & Indrayani Nagar.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                                   Do you offer online ICSE tuition?
                                </button>
                                </h2>
                                <div id="flush-collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    Yes. Both online and offline ICSE tuition are available for Classes 8, 9 & 10.
                                </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                                    Can parents track student progress?
                                </button>
                                </h2>
                                <div id="flush-collapseSeven" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    Yes. We share performance reports and regular updates with parents.
                                </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
                                    Do you provide demo classes?
                                </button>
                                </h2>
                                <div id="flush-collapseEight" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    Yes. Free demo classes are available at our Chinchwad centre.
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
                    <h5 className="common_title color_blue">Enrol with ASQUARE Academy Chinchwad Today</h5>
                    <p>If you’re searching for:</p>
                    <ul className="common_ul">
                        <li><span>Best 8th ICSE classes in Chinchwad, Pimpri & Nigdi</span></li>
                        <li><span>Best 9th ICSE classes in Chinchwad, Pimple Saudagar & Akurdi</span></li>
                        <li><span>Best 10th ICSE classes in Chinchwad, Ravet, Moshi & Bhosari</span></li>
                        <li><span>ICSE tuition for Class 8th, 9th & 10th in Chinchwad</span></li>
                    </ul>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-right padd">
                    <h5 className="common_title title-light">Then ASQUARE Academy Chinchwad is your trusted partner in ICSE academic success.</h5>
                    <p className='para_light'>Visit our Chinchwad centre today, easily accessible from Pimpri, Nigdi, Pimple Saudagar, Akurdi, Ravet, Moshi, Bhosari, Sahu Nagar, Spine City & Indrayani Nagar.</p>
                    <p className='para_light'>Call now to book your free demo class and enquire about admissions and fees.</p>
                    <a href="/"><button class="button mt-3">Know More</button></a>
                </div>
            </div>
        </section>
        <Footer />
        </>
    )
}

export default ICSEChinchwad