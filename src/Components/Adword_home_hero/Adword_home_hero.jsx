import React, { useState, useEffect } from 'react';
import './Adword_home_hero.css';
import '../style.css';
import Form from '../Form2a/Form2a';
import poster_1_a from '../Assets/Asquare Banner All Size/5.jpg';
import poster_1_b from '../Assets/Asquare Banner All Size/Laptop_1440x500/Banner 3 - Laptop.png';
import poster_1_c from '../Assets/Asquare Banner All Size/Tab_1024x520/Tab Banner (3).jpg';
import poster_1_d from '../Assets/Asquare Banner All Size/Mobile_495x480/1.jpg';

import poster_2_a from '../Assets/Asquare Banner All Size/4.jpg';
import poster_2_b from '../Assets/Asquare Banner All Size/Laptop_1440x500/Banner 5 - Laptop.png';
import poster_2_c from '../Assets/Asquare Banner All Size/Tab_1024x520/Tab Banner (2).jpg';
import poster_2_d from '../Assets/Asquare Banner All Size/Mobile_495x480/2.jpg';

import poster_3_a from '../Assets/Asqare Banner - JEE, NEET, Foundation CET/JEE Banners/Sankalp/Web.jpg';
import poster_3_b from '../Assets/Asqare Banner - JEE, NEET, Foundation CET/JEE Banners/Sankalp/Laptop.png';
import poster_3_c from '../Assets/Asqare Banner - JEE, NEET, Foundation CET/JEE Banners/Sankalp/tab.png';
import poster_3_d from '../Assets/Asqare Banner - JEE, NEET, Foundation CET/JEE Banners/Sankalp/mobile.png';

import poster_4_a from '../Assets/Asqare Banner - JEE, NEET, Foundation CET/NEET Banner/Sankalp/Web.jpg';
import poster_4_b from '../Assets/Asqare Banner - JEE, NEET, Foundation CET/NEET Banner/Sankalp/Laptop.jpg';
import poster_4_c from '../Assets/Asqare Banner - JEE, NEET, Foundation CET/NEET Banner/Sankalp/tab.png';
import poster_4_d from '../Assets/Asqare Banner - JEE, NEET, Foundation CET/NEET Banner/Sankalp/mobile.png';

import poster_5_a from '../Assets/Asqare Banner - JEE, NEET, Foundation CET/CET banner/Sankalp/Web.jpg';
import poster_5_b from '../Assets/Asqare Banner - JEE, NEET, Foundation CET/CET banner/Sankalp/Laptop.png';
import poster_5_c from '../Assets/Asqare Banner - JEE, NEET, Foundation CET/CET banner/Sankalp/tab.png';
import poster_5_d from '../Assets/Asqare Banner - JEE, NEET, Foundation CET/CET banner/Sankalp/mobile.png';

import poster_6_a from '../Assets/Asquare Banner All Size/2.jpg';
import poster_6_b from '../Assets/Asquare Banner All Size/Laptop_1440x500/Banner 2 - Laptop.png';
import poster_6_c from '../Assets/Asquare Banner All Size/Tab_1024x520/Tab Banner (2).png';
import poster_6_d from '../Assets/Asquare Banner All Size/Mobile_495x480/4.jpg';

function Adword_home_hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 6;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 12000);
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
    <div className="hero_container adword_home">
      <div
        className={currentSlide === 0 ? 'slider active h_c_1' : 'slider h_c_1'}
      >
        <img src={poster_2_a} alt="img" className="poster poster_2_1_h" />
        <img src={poster_2_b} alt="img" className="poster poster_2_2_h" />
        <img src={poster_2_c} alt="img" className="poster poster_2_3_h" />
        <img src={poster_2_d} alt="img" className="poster poster_2_4_h" />
        <div className="header_form">
          <Form />
        </div>
      </div>
      <div
        className={currentSlide === 1 ? 'slider active h_c_1' : 'slider h_c_1'}
      >
        <img src={poster_1_a} alt="img" className="poster poster_2_1_h" />
        <img src={poster_1_b} alt="img" className="poster poster_2_2_h" />
        <img src={poster_1_c} alt="img" className="poster poster_2_3_h" />
        <img src={poster_1_d} alt="img" className="poster poster_2_4_h" />
        <div className="header_form">
          <Form />
        </div>
      </div>
      <div
        className={currentSlide === 2 ? 'slider active h_c_1' : 'slider h_c_1'}
      >
        <img src={poster_3_a} alt="img" className="poster poster_2_1_h" />
        <img src={poster_3_b} alt="img" className="poster poster_2_2_h" />
        <img src={poster_3_c} alt="img" className="poster poster_2_3_h" />
        <img src={poster_3_d} alt="img" className="poster poster_2_4_h" />
        <div className="header_form">
          <Form />
        </div>
      </div>
      <div
        className={currentSlide === 3 ? 'slider active h_c_1' : 'slider h_c_1'}
      >
        <img src={poster_4_a} alt="img" className="poster poster_2_1_h" />
        <img src={poster_4_b} alt="img" className="poster poster_2_2_h" />
        <img src={poster_4_c} alt="img" className="poster poster_2_3_h" />
        <img src={poster_4_d} alt="img" className="poster poster_2_4_h" />
        <div className="header_form">
          <Form />
        </div>
      </div>
      <div
        className={currentSlide === 4 ? 'slider active h_c_1' : 'slider h_c_1'}
      >
        <img src={poster_5_a} alt="img" className="poster poster_2_1_h" />
        <img src={poster_5_b} alt="img" className="poster poster_2_2_h" />
        <img src={poster_5_c} alt="img" className="poster poster_2_3_h" />
        <img src={poster_5_d} alt="img" className="poster poster_2_4_h" />
        <div className="header_form">
          <Form />
        </div>
      </div>
      <div
        className={currentSlide === 5 ? 'slider active h_c_1' : 'slider h_c_1'}
      >
        <img src={poster_6_a} alt="img" className="poster poster_2_1_h" />
        <img src={poster_6_b} alt="img" className="poster poster_2_2_h" />
        <img src={poster_6_c} alt="img" className="poster poster_2_3_h" />
        <img src={poster_6_d} alt="img" className="poster poster_2_4_h" />
        <div className="header_form">
          <Form />
        </div>
      </div>
      <button className="prev-button arrow_btn" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="next-button arrow_btn" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
}

export default Adword_home_hero;
