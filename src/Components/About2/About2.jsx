import React from 'react';
import './about2.css';
import about_1 from '../Assets/teacher-img-2-a.png';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

function About2() { // Capitalized component name
    // Setting up viewRef and inView for visibility detection
    const [viewRef, inView] = useInView({
        triggerOnce: true, // Trigger only once when element comes into view
    });

    const scrollToTop = () => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    };

    return (
        <section className="about-2 sec_pad">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="about2-imgBox">
                            <img src={about_1} alt="Teacher" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div ref={viewRef} className={`section ${inView ? 'title_aaa about_us_title' : ''}`}>
                            <span className="block_aaa"></span>
                            <h3>
                                About Us<span></span>
                            </h3>
                        </div>
                        <div className="about2-title">
                            <h2>Discover Our Inspiring Educational Journey</h2>
                        </div>
                        <p>
                            Offering a range of courses across our chain of global learning centres, each having unique features and properties, enabling us to meet our students miscellaneous demands.
                        </p>
                        <Link to='/about-us/' onClick={scrollToTop}>
                            <button className="button">Know More</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About2;
