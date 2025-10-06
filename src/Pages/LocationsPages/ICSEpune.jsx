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
import image1 from '../../Assets/locationPageImages/CISEPuneimage1.jpg';
import image2 from '../../Assets/locationPageImages/CISEPuneimage2.jpg';
import image3 from '../../Assets/locationPageImages/CISEPuneimage3.jpg';
import image4 from '../../Assets/locationPageImages/CISEPuneimage4.jpg';
import image5 from '../../Assets/locationPageImages/CISEPuneimage5.jpg';
import image7 from '../../Assets/locationPageImages/image7.jpg';
import icon1 from '../../Assets/locationPageImages/student.png';

const Reviews = React.lazy(() => import('../../Components/Reviews/Reviews.jsx'));

function ICSEPune(){
    return(
        <>
        <Helmet>
            <title>Best ICSE Tuition Classes 8th–10th in Pune | ASQUARE Academy</title>
            <meta name="description" content="Get the best ICSE tuition in Pune for Classes 8th, 9th & 10th with expert teachers, personalized guidance, and excellent academic results at ASQUARE Academy." />
            <meta name="keywords" content="Best 8th ICSE classes in pune, Best 10th ICSE classes in pune, Best 9th ICSE classes in pune, ICSE tution for class 10th in pune, ICSE tution for class 9th in pune, ICSE tution for class 8th in pune" />
            <script type="application/ld+json">{`
                {
                    "@context": "https://schema.org",
                    "@graph": [
                    {
                        "@type": "WebPage",
                        "@id": "https://www.asquareclasses.com/icse-tuition-classes-pune-8th-9th-10th/#webpage",
                        "url": "https://www.asquareclasses.com/icse-tuition-classes-pune-8th-9th-10th/",
                        "name": "ICSE Tuition Classes in Pune for 8th, 9th & 10th | ASQUARE Academy",
                        "description": "ASQUARE Academy offers expert ICSE tuition classes in Pune for 8th, 9th, and 10th students with subject-wise guidance, small batches, study material, and board exam preparation.",
                        "inLanguage": "en",
                        "isPartOf": {
                        "@id": "https://www.asquareclasses.com/#website"
                        },
                        "breadcrumb": {
                        "@id": "https://www.asquareclasses.com/icse-tuition-classes-pune-8th-9th-10th/#breadcrumbs"
                        },
                        "about": {
                        "@id": "https://www.asquareclasses.com/#organization"
                        },
                        "primaryImageOfPage": {
                        "@type": "ImageObject",
                        "url": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png"
                        },
                        "mainEntity": {
                        "@id": "https://www.asquareclasses.com/icse-tuition-classes-pune-8th-9th-10th/#faq"
                        }
                    },
                    {
                        "@type": "EducationalOrganization",
                        "@id": "https://www.asquareclasses.com/#organization",
                        "name": "ASQUARE Academy",
                        "url": "https://www.asquareclasses.com/",
                        "logo": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
                        "image": "https://www.asquareclasses.com/static/media/asquare-logo-new.a0947d5409b087e3562a.png",
                        "description": "ASQUARE Academy offers ICSE tuition classes in Pune for 8th, 9th, and 10th standards with expert faculty and personalized learning.",
                        "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "Your Street Address",
                        "addressLocality": "Pune",
                        "addressRegion": "Maharashtra",
                        "postalCode": "411018",
                        "addressCountry": "IN"
                        },
                        "contactPoint": [
                        {
                            "@type": "ContactPoint",
                            "telephone": "+91-9766118877",
                            "contactType": "customer support"
                        }
                        ],
                        "hasCourse": [
                        {
                            "@type": "Course",
                            "name": "ICSE 8th Tuition in Pune",
                            "description": "Expert coaching for ICSE Class 8 students in Pune covering all core subjects.",
                            "provider": {
                            "@type": "EducationalOrganization",
                            "name": "ASQUARE Academy"
                            }
                        },
                        {
                            "@type": "Course",
                            "name": "ICSE 9th Tuition in Pune",
                            "description": "Comprehensive tuition classes for ICSE Class 9 in Pune with subject-wise guidance.",
                            "provider": {
                            "@type": "EducationalOrganization",
                            "name": "ASQUARE Academy"
                            }
                        },
                        {
                            "@type": "Course",
                            "name": "ICSE 10th Tuition in Pune",
                            "description": "Board-focused ICSE Class 10 tuition in Pune with exam preparation strategies.",
                            "provider": {
                            "@type": "EducationalOrganization",
                            "name": "ASQUARE Academy"
                            }
                        }
                        ]
                    },
                    {
                        "@type": "BreadcrumbList",
                        "@id": "https://www.asquareclasses.com/icse-tuition-classes-pune-8th-9th-10th/#breadcrumbs",
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
                            "item": "https://www.asquareclasses.com/icse-tuition-classes-pune-8th-9th-10th/"
                        }
                        ]
                    },
                    {
                        "@type": "FAQPage",
                        "@id": "https://www.asquareclasses.com/icse-tuition-classes-pune-8th-9th-10th/#faq",
                        "mainEntity": [
                        {
                            "@type": "Question",
                            "name": "Do you provide ICSE tuition for Class 8 in Pune?",
                            "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. We offer specialised coaching for Class 8 covering all subjects including Maths, Science, HCG, English, and Second Languages."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Are Science subjects taught separately?",
                            "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Absolutely. Physics, Chemistry, and Biology are taught individually with application-based learning."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Which subjects are covered for Class 10?",
                            "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "We cover all core ICSE subjects: Maths, Physics, Chemistry, Biology, English (Language & Literature), HCG, Second Language, and Computer Applications."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Where are your branches located?",
                            "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Our ICSE coaching centres are located across Pune & PCMC — Camp, Koregaon Park, Viman Nagar, Hadapsar, Kothrud, Baner, Pimple Saudagar, Pimpri, Nigdi, and Chinchwad."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Do you offer online ICSE tuition classes?",
                            "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. We provide both online and offline coaching, making it convenient for students across Pune and PCMC."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "How large are the batches?",
                            "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "We maintain small batch sizes so that every student receives personalised attention."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Do you provide study material?",
                            "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Every student receives structured notes, worksheets, and ICSE-style practice papers."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "How do you prepare students for board exams?",
                            "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Preparation includes complete syllabus coverage, mock exams, regular revisions, answer-writing practice, and time-management strategies."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Can students attend demo classes before enrolling?",
                            "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Free demo classes are available at our branches to help students and parents experience our teaching quality."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "How can I enquire about fees and admission?",
                            "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "You can fill out the enquiry form on our website, call your nearest centre, or visit in person for detailed information."
                            }
                        }
                        ]
                    },
                    {
                        "@type": "WebSite",
                        "@id": "https://www.asquareclasses.com/#website",
                        "url": "https://www.asquareclasses.com/",
                        "name": "ASQUARE Academy",
                        "publisher": {
                        "@id": "https://www.asquareclasses.com/#organization"
                        }
                    }
                    ]
                }
                `}</script>

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
                        <h2 className="common_title"><span className='common_title_span'>Best ICSE Board</span> Tuition Classes in Pune & PCMC for 8th, 9th & 10th Students</h2>
                        <p>
                            Academic success in ICSE schools requires more than just classroom learning. The ICSE syllabus is vast, detail-oriented, 
                            and often demands a deeper level of understanding across multiple subjects. For students in Classes 8th, 9th, and 10th, this can be challenging without proper guidance.
                        </p>
                        <p>
                            At <strong>ASQUARE Academy,</strong> we provide specialised <strong>ICSE board tuition classes in Pune and PCMC</strong> designed to help students strengthen their fundamentals, build exam confidence, 
                            and achieve excellent results. With expert teachers, small batches, structured study materials, and regular tests, we ensure every student gets the support they need to excel both in school and in their board examinations.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section className="leftright_section padd_bottom">
            <div className="container">
                <div className="row row_reve align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <h3 className="common_title"><span className='common_title_span'>Why Choose</span> ASQUARE Academy for ICSE Coaching?</h3>
                        <p>
                            Our coaching programs are built to align with the ICSE syllabus and exam requirements. We understand that each student has unique learning needs, 
                            so our approach focuses on concept clarity, regular practice, and personalised attention.
                        </p>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 img-col">
                        <img className='common_image' src={image2} alt="" />
                    </div>
                </div>
            </div>
        </section>
        <section className="grid_section grid_section_bg padd">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="common_title text-center"><span className='common_title_span'>Key Benefits</span> of Joining ASQUARE Academy:</h2>
                    </div>
                </div>    
                <div className="row grid_row">   
                    <div className="col-lg-3 col-md-4 col-sm-12">
                        <div className="grid_item">
                            <img className="grid_img" src={icon1} alt="" />
                            <div className="grid_content">
                            <h6 className="grid_item_title">Dedicated Doubt-Solving Sessions </h6>
                            <p>
                                Extra support to clear difficult concepts.
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
                                Individual attention ensures every student’s doubts are addressed.
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12">
                        <div className="grid_item">
                            <img className="grid_img" src={icon1} alt="" />
                            <div className="grid_content">
                            <h6 className="grid_item_title">Structured Study Material</h6>
                            <p>
                                Detailed notes, worksheets, and ICSE-style practice papers.
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12">
                        <div className="grid_item">
                            <img className="grid_img" src={icon1} alt="" />
                            <div className="grid_content">
                            <h6 className="grid_item_title">Proven Results</h6>
                            <p>
                                Consistent track record of improved grades and strong board results.
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
                                Weekly and monthly tests to monitor progress and identify weaker areas.
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12">
                        <div className="grid_item">
                            <img className="grid_img" src={icon1} alt="" />
                            <div className="grid_content">
                            <h6 className="grid_item_title">Experienced ICSE Faculty </h6>
                            <p>
                                Teachers specialised in Maths, Physics, Chemistry, Biology, English, and HCG (History, Civics & Geography).
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12">
                        <div className="grid_item">
                            <img className="grid_img" src={icon1} alt="" />
                            <div className="grid_content">
                            <h6 className="grid_item_title">Convenient Locations </h6>
                            <p>
                                Centres across Camp, Koregaon Park, Viman Nagar, Hadapsar, Kothrud, Baner, Pimple Saudagar, Pimpri, Nigdi, and Chinchwad.
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
                    <div className="col-lg-6 col-md-12 col-sm-12 img-col">
                        <img className='common_image' src={image3} alt="" />
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <h2 className="common_title"><span className='common_title_span'>ICSE Tuition </span> for Class 8 in Pune – Building the Right Foundation</h2>
                        <p>
                            Class 8 is the stage where students transition into more complex subjects. Our <strong>ICSE Class 8 tuition in Pune</strong> ensures that students master their basics while developing problem-solving skills.
                        </p>
                        <p>
                            <strong>Subjects covered include:</strong>
                        </p>
                        <ul className="common_ul">
                            <li><span>Mathematics</span></li>
                            <li><span>Physics, Chemistry & Biology (separate teaching for clarity)</span></li>
                            <li><span>History, Civics & Geography</span></li>
                            <li><span>English Language & Literature</span></li>
                            <li><span>Second Language (Hindi, Marathi, Sanskrit, etc.)</span></li>
                        </ul>
                        <p>
                            We provide concept-based lessons, regular assignments, and personalised feedback. By building strong foundations, 
                            students become better prepared for the academic challenges of Class 9 and Class 10.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section className="leftright_section padd_bottom">
            <div className="container">
                <div className="row row_reve align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <h5 className="common_title"><span className='common_title_span'>ICSE Tuition</span> for Class 9 in Pune – Strengthening Core Knowledge</h5>
                        <p>
                            Class 9 plays a pivotal role in shaping board exam preparation. The syllabus is detailed, and students must learn to approach subjects with depth. 
                            Our <strong>ICSE Class 9 coaching in Pune</strong> includes:
                        </p>
                        <ul className="common_ul">
                            <li><span>Full syllabus coverage across Mathematics, Physics, Chemistry & Biology</span></li>
                            <li><span>English grammar, comprehension, and writing skills enhancement</span></li>
                            <li><span>History, Civics & Geography with map and source-based exercises</span></li>
                            <li><span>Second Language & Computer Applications (where applicable)</span></li>
                            <li><span>Weekly topic-wise tests and remedial sessions</span></li>
                        </ul>
                        <p>
                            With consistent guidance, students gain confidence in tackling complex topics, making Class 10 preparation smoother and more effective.
                        </p>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 img-col">
                        <img className='common_image' src={image4} alt="" />
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
                        <h2 className="common_title"><span className='common_title_span'>ICSE Tuition </span> for Class 10 in Pune – Focused Board Exam Preparation</h2>
                        <p>
                            Class 10 is the turning point in a student’s academic journey, where board exam results shape future opportunities. At ASQUARE Academy, our <strong>ICSE Class 10 tuition in Pune</strong> focuses on thorough preparation and result-oriented strategies.
                        </p>
                        <p>
                            <strong>Highlights include:</strong>
                        </p>
                        <ul className="common_ul">
                            <li><span>Comprehensive syllabus revision for Maths, Science, English, HCG & Second Language</span></li>
                            <li><span>Mock board exams and past-year paper practice</span></li>
                            <li><span>Answer-writing practice with emphasis on presentation and time management</span></li>
                            <li><span>Subject-specific tips for scoring higher marks</span></li>
                            <li><span>Regular revision cycles and personalised progress tracking</span></li>
                        </ul>
                        <p>
                            With systematic training, students develop exam readiness and perform at their best in ICSE board exams.
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
                        <p className='para_light'>At ASQUARE Academy, we believe effective learning is a blend of teaching, practice, and evaluation. Our methodology includes:</p>
                        <p className='para_light'>This structured approach ensures balanced academic growth and exam success.</p>
                        <a href="#"><button class="button mt-3">Know More</button></a>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="methodoloy_itembox">
                            <h6 className="methodology_title">Interactive Teaching </h6>
                            <span>Engaging explanations with real-life examples.</span>
                        </div>
                        <div className="methodoloy_itembox">
                            <h6 className="methodology_title">Practice-Oriented Learning </h6>
                            <span>Worksheets and ICSE-style questions for hands-on application.</span>
                        </div>
                        <div className="methodoloy_itembox">
                            <h6 className="methodology_title">Continuous Monitoring </h6>
                            <span>Regular tests with individual performance reviews.</span>
                        </div>
                        <div className="methodoloy_itembox">
                            <h6 className="methodology_title">Parental Updates </h6>
                            <span>Progress reports shared with parents to keep them informed.</span>
                        </div>
                        <div className="methodoloy_itembox">
                            <h6 className="methodology_title">Student Mentorship</h6>
                            <span>Motivational sessions to build confidence and reduce exam stress.</span>
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
                                    Do you provide ICSE tuition for Class 8 in Pune?
                                </button>
                                </h2>
                                <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    Yes. We offer specialised coaching for Class 8 covering all subjects including Maths, Science, HCG, English, and Second Languages.
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
                                    Absolutely. Physics, Chemistry, and Biology are taught individually with application-based learning.
                                </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    Which subjects are covered for Class 10?
                                </button>
                                </h2>
                                <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    We cover all core ICSE subjects: Maths, Physics, Chemistry, Biology, English (Language & Literature), HCG, Second Language, and Computer Applications.
                                </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                    Where are your branches located?
                                </button>
                                </h2>
                                <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    Our ICSE coaching centres are located across Pune & PCMC — Camp, Koregaon Park, Viman Nagar, Hadapsar, Kothrud, Baner, Pimple Saudagar, Pimpri, Nigdi, and Chinchwad.
                                </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNine" aria-expanded="false" aria-controls="flush-collapseNine">
                                    Do you offer online ICSE tuition classes?
                                </button>
                                </h2>
                                <div id="flush-collapseNine" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    Yes. We provide both online and offline coaching, making it convenient for students across Pune and PCMC.
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
                                   How large are the batches?
                                </button>
                                </h2>
                                <div id="flush-collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        We maintain small batch sizes so that every student receives personalised attention.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                                   Do you provide study material?
                                </button>
                                </h2>
                                <div id="flush-collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    Yes. Every student receives structured notes, worksheets, and ICSE-style practice papers.
                                </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                                    How do you prepare students for board exams?
                                </button>
                                </h2>
                                <div id="flush-collapseSeven" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    Preparation includes complete syllabus coverage, mock exams, regular revisions, answer-writing practice, and time-management strategies
                                </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
                                    Can students attend demo classes before enrolling?
                                </button>
                                </h2>
                                <div id="flush-collapseEight" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    Yes. Free demo classes are available at our branches to help students and parents experience our teaching quality.
                                </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTen" aria-expanded="false" aria-controls="flush-collapseTen">
                                    How can I enquire about fees and admission?
                                </button>
                                </h2>
                                <div id="flush-collapseTen" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    You can fill out the enquiry form on our website, call your nearest centre, or visit in person for detailed information.
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
                    <h5 className="common_title color_blue">Enrol with ASQUARE Academy Today</h5>
                    <p>If you’re looking for:</p>
                    <ul className="common_ul">
                        <li><span>CSE Class 8 tuition in Pune</span></li>
                        <li><span>ICSE Class 9 coaching in Pune</span></li>
                        <li><span>ICSE Class 10 board exam preparation in Pune</span></li>
                    </ul>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-right padd">
                    <h5 className="common_title title-light">ASQUARE Academy is your trusted partner in academic success.</h5>
                        <p className='para_light'>Visit us at branches across Camp, Koregaon Park, Viman Nagar, Hadapsar, Kothrud, Baner, Pimple Saudagar, Pimpri, Nigdi, and Chinchwad.</p>
                        <p className='para_light'>Call today to enquire about batch timings and fees.</p>
                        <a href="#"><button class="button mt-3">Know More</button></a>
                </div>
            </div>
        </section>
        <Footer />
        </>
    )
}

export default ICSEPune