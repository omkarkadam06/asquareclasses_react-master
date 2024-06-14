import React, { useState, useEffect } from 'react';
import './Hero.css';
import '../style.css';
import Form from '../Form2/Form2';
import hero_img from '../Assets/home page illustrator_1.png';
import poster_1_a from '../Assets/Asquare Banner All Size/Laptop_1440x500/Banner 3 - Laptop.png';
import poster_1_c from '../Assets/Asquare Banner All Size/Tab_1024x520/Tab Banner (3).jpg';
import poster_1_d from '../Assets/Asquare Banner All Size/Mobile_495x480/1.jpg';
import poster_2_a from '../Assets/Asquare Banner All Size/Laptop_1440x500/Banner 2 - Laptop.png';
import poster_2_c from '../Assets/Asquare Banner All Size/Tab_1024x520/Tab Banner (2).png';
import poster_2_d from '../Assets/Asquare Banner All Size/Mobile_495x480/4.jpg';
import poster_3_a from '../Assets/Asquare Banner All Size/Laptop_1440x500/Banner 5 - Laptop.png';
import poster_3_c from '../Assets/Asquare Banner All Size/Tab_1024x520/Tab Banner (2).jpg';
import poster_3_d from '../Assets/Asquare Banner All Size/Mobile_495x480/2.jpg';
import Counter from './Counter';
import Count_Data from './Count_Data';
import { Link } from 'react-router-dom';

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 4;

  //
  const scrollToTop = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 1200000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + totalSlides) % totalSlides);
  };

  const getSlideStyle = () => {
    return {
      transform: `translateX(-${currentSlide * 100}%)`
    };
  };

  return (
    <>
      <div className="hero_container hero_container_homepg">
        <div
          className={
            currentSlide === 0 ? 'slider active h_c_1' : 'slider h_c_1'
          }
        >
          <img
            src={poster_2_a}
            alt="img"
            className="poster poster_2_1_h"
            decoding="async"
          />
          <img
            src={poster_2_a}
            alt="img"
            className="poster poster_2_2_h"
            decoding="async"
          />
          <img
            src={poster_2_c}
            alt="img"
            className="poster poster_2_3_h"
            decoding="async"
          />
          <img
            src={poster_2_d}
            alt="img"
            className="poster poster_2_4_h"
            decoding="async"
          />
          <div className="header_form">
            <Form />
          </div>
        </div>
        <div
          className={
            currentSlide === 1 ? 'slider active h_c_2' : 'slider h_c_2'
          }
        >
          <div className="hero_container_p1 i_fl_cont">
            <h1 className="hero_heading">
              Kota <span style={{ color: 'red' }}>अब</span>{' '}
              &#160;&#160;&#160;&#160;
              <span style={{ color: 'red' }}>Pune</span> में !
            </h1>
            <p className="hero_container_subtitle">
              Inviting the brightest to learn from the best : Driven by
              IIT'ians, NIT'ians and Dr's.
            </p>
            <Link to={'/course'} onClick={scrollToTop}>
              <button className="hero_button">Courses</button>
            </Link>
            <div className="hero_counter flex-centre-bet">
              {Count_Data.map(Counter)}
            </div>
          </div>
          <div className="hero_container_p2">
            <img src={hero_img} alt="img" />
          </div>
        </div>
        <div
          className={
            currentSlide === 2 ? 'slider active h_c_1' : 'slider h_c_1'
          }
        >
          <img src={poster_1_a} alt="img" className="poster poster_2_1_h" />
          <img src={poster_1_a} alt="img" className="poster poster_2_2_h" />
          <img src={poster_1_c} alt="img" className="poster poster_2_3_h" />
          <img src={poster_1_d} alt="img" className="poster poster_2_4_h" />
          <div className="header_form">
            <Form />
          </div>
        </div>
        <div
          className={
            currentSlide === 3 ? 'slider active h_c_1' : 'slider h_c_1'
          }
        >
          <img src={poster_3_a} alt="img" className="poster poster_2_1_h" />
          <img src={poster_3_a} alt="img" className="poster poster_2_2_h" />
          <img src={poster_3_c} alt="img" className="poster poster_2_3_h" />
          <img src={poster_3_d} alt="img" className="poster poster_2_4_h" />
          <div className="header_form">
            <Form />
          </div>
        </div>
        <button
          className="prev-button arrow_btn_h arrow_btn"
          onClick={prevSlide}
        >
          &#10094;
        </button>
        <button
          className="next-button arrow_btn_h arrow_btn"
          onClick={nextSlide}
        >
          &#10095;
        </button>
      </div>
    </>
  );
}

export default Hero;
