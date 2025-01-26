import React, { useState, useEffect } from 'react';
import './Result.css';
import '../style.css';
import points_icon_4 from '../Assets/points-icon-4.png';
import result_poster_1 from '../Assets/results/result1.jpeg';
import result_poster_2 from '../Assets/results/result2.jpeg';
import result_poster_3 from '../Assets/results/result3.jpeg';
import result_poster_4 from '../Assets/results/result4.jpeg';
import result_poster_5 from '../Assets/results/result5.jpeg';
import result_poster_6 from '../Assets/results/result6.jpeg';
import { useInView } from 'react-intersection-observer';
import arrowlogo from '../Assets/arrow-logo-2.png';

function Result() {
  const [viewRef, inView] = useInView({ triggerOnce: true });
  const [viewRef1, inView1] = useInView({ triggerOnce: true });

  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 6;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentSlide((currentSlide + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide((currentSlide - 1 + totalSlides) % totalSlides);

  const [showImage, setShowImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleClick = (img) => {
    setShowImage(true);
    setSelectedImage(img);
  };

  const handleClose = () => {
    setShowImage(false);
    setSelectedImage('');
  };

  const posters = [
    result_poster_1,
    result_poster_2,
    result_poster_3,
    result_poster_4,
    result_poster_5,
    result_poster_6,
  ];

  return (
    <div className="result">
      <div
        ref={viewRef1}
        className={`result_left ${inView1 ? 'i_fl_cont' : 'o_fl_cont'}`}
      >
        <div ref={viewRef} className={`section ${inView ? 'title_aaa' : ''}`}>
          <span className="block_aaa"></span>
          <h3>
            Result<span></span>
          </h3>
        </div>
        <p className="subtitle result_subtitle">
          Our Students' Exceptional Results and Success Stories
        </p>
        <div className="result_points">
          {['Top-Scorers', 'Consistency', 'Successful JEE Mains results year after year', 'National Recognition'].map((point, index) => (
            <div key={index}>
              <img src={points_icon_4} alt="logo" className="icn-1" />
              <p className="t2">{point}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="result_right">
        {posters.map((poster, index) => (
          <div
            key={index}
            className={`slider h_c_1 ${currentSlide === index ? 'active' : ''}`}
          >
            <img
              src={poster}
              alt={`Result Poster ${index + 1}`}
              decoding="async"
              className="r_r_img poster_1_1_h"
              style={{ cursor: 'pointer' }}
              onClick={() => handleClick(poster)}
            />
          </div>
        ))}
        <div className="btns_div_result">
          <img
            src={arrowlogo}
            alt="Previous Slide"
            className="arrow_testi_di"
            onClick={prevSlide}
            style={{ transform: 'rotate(180deg)' }}
          />
          <img
            src={arrowlogo}
            alt="Next Slide"
            className="arrow_testi_di"
            onClick={nextSlide}
          />
        </div>
      </div>

      {showImage && (
        <div className="image-modal">
          <div className="modal-content">
            <img src={selectedImage} alt="Selected" className="modal-image" />
            <button
              className="close-btn subtitle"
              onClick={handleClose}
              aria-label="Close Image Modal"
            >
              &#10008;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Result;
