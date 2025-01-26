import React from 'react';
import './Youtube.css';
import { useInView } from 'react-intersection-observer';
import Slider from "react-slick";

function Youtube() {
  const [viewRef, inView] = useInView({ triggerOnce: true });

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  // Array of video URLs for reuse and scalability
  const videoLinks = [
    "https://www.youtube.com/embed/fM-zZ8jshDM",
    "https://www.youtube.com/embed/y8Wy8AUjKaw",
    "https://www.youtube.com/embed/x20uE4TKAUU",
    "https://www.youtube.com/embed/SxnWamBZ_Lg",
    "https://www.youtube.com/embed/hNhWE9OUlO0",
    "https://www.youtube.com/embed/_DVNmSOIbOo",
  ];

  return (
    <div className="introduction youtube_section">
      {/* Section Title */}
      <div ref={viewRef} className={`section ${inView ? 'title_aaa' : ''}`}>
        <span className="block_aaa"></span>
        <h3>
          Introduction<span></span>
        </h3>
      </div>
      <p className="subtitle">
        Unlock Your Potential with ASQUARE Institute's Inspirational Journey
      </p>

      {/* Video Slider */}
      <div className="container mt-4">
        <div className="row">
          <div className="youtub">
            <Slider {...settings}>
              {videoLinks.map((video, index) => (
                <div className="slick-item" key={index}>
                  <iframe
                    width="100%"
                    height="300"
                    src={video}
                    title={`YouTube video ${index + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Youtube;
