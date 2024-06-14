import React, { useState, useEffect } from 'react';
import './Result.css';
import '../style.css';
import points_icon_4 from '../Assets/points-icon-4.png';
import result_poster_1 from '../Assets/Asqare Banner - JEE, NEET, Foundation CET/JEE Banners/Result_JEE Adv.jpg';
import result_poster_2 from '../Assets/Asqare Banner - JEE, NEET, Foundation CET/JEE Banners/Result_JEE Main.jpg';
import result_poster_3 from '../Assets/Asqare Banner - JEE, NEET, Foundation CET/NEET Banner/Result_Neet Result 1.jpg';
import result_poster_4 from '../Assets/Asqare Banner - JEE, NEET, Foundation CET/CET banner/result.png';
import result_poster_5 from '../Assets/Asqare Banner - JEE, NEET, Foundation CET/NEET Banner/Result_Neet Result 2.jpg';
import { useInView } from 'react-intersection-observer';
import arrowlogo from '../Assets/arrow-logo-2.png';

function Result() {
  //
  const [viewRef, inView] = useInView({
    triggerOnce: true // Trigger only once
  });
  //
  const [viewRef1, inView1] = useInView({
    triggerOnce: true // Trigger only once
  });

  //
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 5;

  //
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + totalSlides) % totalSlides);
  };

  //
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

  return (
    <div className="result">
      <div
        ref={viewRef1}
        className={`result_left ${inView ? 'i_fl_cont' : 'o_fl_cont'}`}
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
          <div>
            <img src={points_icon_4} alt="logo" className="icn-1" />
            <p className="t2">Top-Scorers</p>
          </div>
          <div>
            <img src={points_icon_4} alt="logo" className="icn-1" />
            <p className="t2">Consistency</p>
          </div>
          <div>
            <img src={points_icon_4} alt="logo" className="icn-1" />
            <p className="t2">Successful JEE Mains results year after year</p>
          </div>
          <div>
            <img src={points_icon_4} alt="logo" className="icn-1" />
            <p className="t2">National Recognition</p>
          </div>
        </div>
      </div>
      {/* <div className="result_right">
        <img src={result_poster} alt="img" />
      </div> */}
      <div className="result_right">
        <div
          className={
            currentSlide === 0 ? 'slider active h_c_1' : 'slider h_c_1'
          }
        >
          <img
            src={result_poster_1}
            alt="img"
            decoding="async"
            className="r_r_img poster_2_1_h"
            style={{ cursor: 'pointer' }}
            onClick={() => handleClick(result_poster_1)}
          />
        </div>
        <div
          className={
            currentSlide === 1 ? 'slider active h_c_1' : 'slider h_c_1'
          }
        >
          <img
            src={result_poster_2}
            alt="img"
            decoding="async"
            className="r_r_img poster_1_1_h"
            style={{ cursor: 'pointer' }}
            onClick={() => handleClick(result_poster_2)}
          />
        </div>
        <div
          className={
            currentSlide === 2 ? 'slider active h_c_1' : 'slider h_c_1'
          }
        >
          <img
            src={result_poster_3}
            alt="img"
            decoding="async"
            className="r_r_img poster_1_1_h"
            style={{ cursor: 'pointer' }}
            onClick={() => handleClick(result_poster_3)}
          />
        </div>
        <div
          className={
            currentSlide === 3 ? 'slider active h_c_1' : 'slider h_c_1'
          }
        >
          <img
            src={result_poster_4}
            alt="img"
            decoding="async"
            className="r_r_img poster_1_1_h"
            style={{ cursor: 'pointer' }}
            onClick={() => handleClick(result_poster_4)}
          />
        </div>
        <div
          className={
            currentSlide === 4 ? 'slider active h_c_1' : 'slider h_c_1'
          }
        >
          <img
            src={result_poster_5}
            alt="img"
            decoding="async"
            className="r_r_img poster_1_1_h"
            style={{ cursor: 'pointer' }}
            onClick={() => handleClick(result_poster_5)}
          />
        </div>
        <div className="btns_div_result">
          <img
            src={arrowlogo}
            alt="icon"
            className="arrow_testi_di"
            onClick={prevSlide}
            style={{ transform: 'rotate(180deg)' }}
          />
          <img
            src={arrowlogo}
            alt="icon"
            className="arrow_testi_di"
            onClick={nextSlide}
          />
        </div>
      </div>
      {showImage && (
        <div className="image-modal">
          <div className="modal-content">
            <img src={selectedImage} alt="Selected" className="modal-image" />
            <button className="close-btn subtitle" onClick={handleClose}>
            &#10008;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Result;
