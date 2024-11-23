import React from 'react';
import './Dm2.css';
import teacher_2 from '../Assets/teacher-img-2-svg.png';
import Director1 from '../Assets/Complete faculty/director 1.jpg'
import { useInView } from 'react-intersection-observer';



function Dm2() {
    const [viewRef, inView] = useInView({
        triggerOnce: true, // Trigger only once when element comes into view
    });
    const scrollToTop = () => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    };
    return (
        <React.Fragment>
            <section className="top-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 p-0">
                            <div className="top-poits">
                                <h4>
                                Founder and Director.
                                </h4>   
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 p-0">
                            <div className="top-poits" style={{background:'#e3cc33', color:'#05479b'}}>
                                <h4>
                                A Decade of Educational Excellence.
                                </h4>   
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 p-0">
                            <div className="top-poits">
                                <h4>
                                Dedicated to Your Success in JEE and NEET.
                                </h4>   
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="DMabout2 sec_pad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="dm2Img-Box">
                                <img src={Director1} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 px-4">
                            <div ref={viewRef} className={`section ${inView ? 'title_aaa about_us_title' : ''}`}>
                                <span className="block_aaa"></span>
                                <h3>
                                    About Us<span></span>
                                </h3>
                            </div>
                            <div className="about2-title">
                                <h2>Mr. Ajit Anupam: Architect of Success at ASQUARE Medical & IIT-JEE Academy</h2>
                                <p>
                                    Dear Future Achievers, Unlock your potential with ASQUARE Medical & IIT-JEE Academy in Pune, where I, AJIT ANUPAM, stand as a testament to the boundless possibilities within the grasp of every determined individual. In 2010, I began with a humble roof and a burning belief and today, we've built an educational empire known as ASQUARE Medical & IIT-JEE Academy. This journey has taught me that if I can, you most certainly can too; it's not just a play on words – 'impossible' whispers 'I'm possible.'
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-12 mt-5">
                            <p>
                            Dear students in Pune, seize this moment, pick up your pen and embark on your odyssey to excellence in ENGINEERING and MEDICAL fields with ASQUARE, located right here in Pune. It's more than an institution; it's a launchpad for your dreams.
                            "Education is the passport to the future; for tomorrow belongs to those who prepare for it today." Start your journey with ASQUARE Medical & IIT-JEE Academy, a renowned coaching institute in Pune and end it with a treasure trove of knowledge. With unwavering confidence and dedication, I personally ensure your success.
                            ASQUARE Medical & IIT-JEE Academy in the heart of Pune, is not just a coaching center; it's a community fostering growth, learning, and success. Our dedicated faculty and state-of-the-art facilities create an environment where dreams take flight. Whether you aspire to crack JEE (Main & Advance) NEET & MH-CET exams, ASQUARE Medical & IIT-JEE Academy is your partner in the journey to success.
                            </p>
                            <p>
                            Why ASQUARE Medical & IIT-JEE Academy in Pune ? Our proven success, expert faculty, personalized approach, cutting-edge resources, and focus on holistic development set us apart. ASQUARE consistently produces top achievers in JEE (Main & Advance) NEET & MH-CET, making it the go-to destination for quality education. Our experienced faculty provides the guidance needed to excel and our personalized approach ensures you receive the attention and support necessary to unleash your full potential.
                            </p>
                            <p>
                            ASQUARE Medical & IIT-JEE Academy provides access to cutting-edge resources and technology, giving you a competitive edge in your preparation for JEE (Main & Advance) NEET & MH-CET. Beyond academics, we focus on your overall development, encouraging not just academic success but also personal growth.
                            In conclusion, choose ASQUARE Medical & IIT-JEE Academy in Pune as your educational partner on the journey to success in JEE (Main & Advance) NEET & MH-CET. Be a part of a legacy where the impossible becomes 'I'm possible.' Start your educational odyssey with us today!
                            </p>
                            <p>
                                <strong>
                                    Here's to the extraordinary journey that lies ahead.
                                    With aspiration and anticipation,
                                    Mr. Ajit Anupam
                                </strong>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}
export default Dm2