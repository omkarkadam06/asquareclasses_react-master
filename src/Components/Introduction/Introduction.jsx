import React, { useState } from 'react';
// import './Youtube.css';
import './Introduction.css';
import { useInView } from 'react-intersection-observer';
import Slider from "react-slick";


function Youtube() {

    const [viewRef, inView] = useInView({
        triggerOnce: true // Trigger only once
    });

    const [viewRef1, inView1] = useInView({
        triggerOnce: true // Trigger only once
    });
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
      };

    return (
        <div className="introduction youtube_section">
            <div ref={viewRef} className={`section ${inView ? 'title_aaa' : ''}`}>
                <span className="block_aaa"></span>
                <h3>
                    Introduction<span></span>
                </h3>
            </div>
            <p className="subtitle">
                Unlock Your Potential with ASQUARE Institute's Inspirational Journey
            </p>
            <div className="container">
                <div className="row">
                    <div className="a">
                        <div className="youtub">
                        <Slider {...settings}>
                                <div className='slick-item'>
                                <iframe width="100%" height="315" src="https://www.youtube.com/embed/fM-zZ8jshDM?si=Ck8abpW40uN5dJL7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                </div>

                                <div className='slick-item'>
                                <iframe width="100%" height="315" src="https://www.youtube.com/embed/fM-zZ8jshDM?si=Ck8abpW40uN5dJL7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                </div>

                                <div className='slick-item'>
                                <iframe width="100%" height="315" src="https://www.youtube.com/embed/fM-zZ8jshDM?si=Ck8abpW40uN5dJL7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                </div>

                                <div className='slick-item'>
                                <iframe width="100%" height="315" src="https://www.youtube.com/embed/fM-zZ8jshDM?si=Ck8abpW40uN5dJL7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                </div>

                                <div className='slick-item'>
                                <iframe width="100%" height="315" src="https://www.youtube.com/embed/fM-zZ8jshDM?si=Ck8abpW40uN5dJL7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                </div>
                               
                            </Slider>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Youtube;
