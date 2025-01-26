import React from 'react';
import './about2.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ReactPlayer from 'react-player';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import tickImg from '../Assets/home_page_images/check-mark.png';
import nextarrow from '../Assets/right-chevron.png'
import prevarrow from '../Assets/left-chevron.png'

function About2() {
    // Visibility detection using Intersection Observer
    const [viewRef, inView] = useInView({
        triggerOnce: true, // Trigger only once when the element comes into view
    });

    const scrollToTop = () => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    };

    // Custom Arrow components for the slider
    const NextArrow = ({ onClick }) => (
        <div className="custom-arrow next" onClick={onClick}>
          <img src={nextarrow} alt="" />
        </div>
    );

    const PrevArrow = ({ onClick }) => (
        <div className="custom-arrow prev" onClick={onClick}>
             <img src={nextarrow} alt="" />
        </div>
    );

    // Slider settings
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        autoplay: true, 
        autoplaySpeed: 2000,
    };

    return (
        <section className="about-2 sec_pad">
            <div className="container">
                <div className="row">
                    {/* Left Column - Slider */}
                    <div className="col-md-5">
                        <Slider {...sliderSettings}>
                            <div>
                                <ReactPlayer
                                    url="https://youtube.com/shorts/CceL7LG3pLw?si=s_3GDO6jmk44BY1d"
                                    controls
                                    width="100%"
                                    height={window.innerWidth < 768 ? '300px' : '500px'}
                                />
                            </div>
                            <div>
                                <ReactPlayer
                                    url="https://youtube.com/shorts/lmP-jvX30VE?si=h9_XqdVvHV8PJhyk"
                                    controls
                                    width="100%"
                                    height={window.innerWidth < 768 ? '300px' : '500px'}
                                />
                            </div>
                            <div>
                                <ReactPlayer
                                    url="https://youtube.com/shorts/YxW4nQdiM1U?si=mYSyacz1_Bc89QDb"
                                    controls
                                    width="100%"
                                    height={window.innerWidth < 768 ? '300px' : '500px'}
                                />
                            </div>
                            <div>
                                <ReactPlayer
                                    url="https://youtube.com/shorts/QpF3L6iJRss?si=0o5MAHGg7WliP50q"
                                    controls
                                    width="100%"
                                    height={window.innerWidth < 768 ? '300px' : '500px'}
                                />
                            </div>
                            <div>
                                <ReactPlayer
                                    url="https://youtube.com/shorts/hD7YWoVyPw8?si=3CnOOG2MtRSL8D3m"
                                    controls
                                    width="100%"
                                    height={window.innerWidth < 768 ? '300px' : '500px'}
                                />
                            </div>
                        </Slider>
                    </div>

                    <div className="col-md-1"></div>

                    {/* Right Column - About Content */}
                    <div className="col-md-6">
                        <div
                            ref={viewRef}
                            className={`section ${inView ? 'title_aaa about_us_title' : ''}`}
                        >
                            <span className="block_aaa"></span>
                            <h3>
                                About Us<span></span>
                            </h3>
                        </div>
                        <div className="about2-title">
                            <h2>Discover Our Inspiring Educational Journey</h2>
                        </div>
                        <p>
                            Offering a range of courses across our chain of global learning centres, each having unique features and properties, enabling us to meet our students' miscellaneous demands.
                        </p>
                        <div className="banner_bullets mt-3">
                            <ul className="p-0">
                                <li className="d-flex mb-3">
                                    <div className="tick_img">
                                        <img src={tickImg} alt="Checkmark icon" />
                                    </div>
                                    <span>Driven by IIT'ians, NIT'ians, and Dr's</span>
                                </li>
                                <li className="d-flex mb-3">
                                    <div className="tick_img">
                                        <img src={tickImg} alt="Checkmark icon" />
                                    </div>
                                    <span>Dedicated mentorship for all students</span>
                                </li>
                                <li className="d-flex mb-2">
                                    <div className="tick_img">
                                        <img src={tickImg} alt="Checkmark icon" />
                                    </div>
                                    <span>Unparalleled global learning resources</span>
                                </li>
                            </ul>
                        </div>
                        <div className="experice_box d-flex mt-4 mb-4">
                            <div className="exp_content exp-1">
                                <h5>15 years of excellence</h5>
                            </div>
                            <div className="exp_content exp-2">
                                <h5>Best results in Pune</h5>
                            </div>
                        </div>
                        <Link to="/about-us/" onClick={scrollToTop}>
                            <button className="button">Know More</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About2;
