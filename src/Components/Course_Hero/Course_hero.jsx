import React, { useState, useEffect } from 'react';
import './Course_hero.css';
import '../style.css';
import Form from '../Form2/Form2';
import courses_data_api from './Course_hero_data.jsx';
import Course_counter from './Course_counter';
//import hero_img from '../Assets/teacher-img-2.png';
import icon_1 from '../Assets/icon-1.png';
import icon_2 from '../Assets/icon-2.png';
import icon_3 from '../Assets/icon-3.png';
import icon_4 from '../Assets/icon-4.png';
import icon_5 from '../Assets/icon-5.png';
import icon_6 from '../Assets/icon-6.png';
import icon_7 from '../Assets/icon-7.png';

// JEE 11th
import p_j_11_w from '../Assets/Asqare Banner - JEE, NEET, Foundation CET/JEE Banners/Sankalp/Web.jpg';
import p_j_11_l from '../Assets/Asqare Banner - JEE, NEET, Foundation CET/JEE Banners/Sankalp/Laptop.png';
import p_j_11_t from '../Assets/Asqare Banner - JEE, NEET, Foundation CET/JEE Banners/Sankalp/tab.png';
import p_j_11_m from '../Assets/Asqare Banner - JEE, NEET, Foundation CET/JEE Banners/Sankalp/mobile.png';

// JEE 12th
import p_j_12_w from '../Assets/Asqare Banner - JEE, NEET, Foundation CET/JEE Banners/Srijan/Web.jpg';
import p_j_12_l from '../Assets/Asqare Banner - JEE, NEET, Foundation CET/JEE Banners/Srijan/Laptop.png';
import p_j_12_t from '../Assets/Asqare Banner - JEE, NEET, Foundation CET/JEE Banners/Srijan/tab.png';
import p_j_12_m from '../Assets/Asqare Banner - JEE, NEET, Foundation CET/JEE Banners/Srijan/mobile.png';

// JEE 12th - pass
import p_j_12_p_w from '../Assets/Asqare Banner - JEE, NEET, Foundation CET/JEE Banners/Pratham/Web.jpg';
import p_j_12_p_l from '../Assets/Asqare Banner - JEE, NEET, Foundation CET/JEE Banners/Pratham/Laptop.png';
import p_j_12_p_t from '../Assets/Asqare Banner - JEE, NEET, Foundation CET/JEE Banners/Pratham/tab.png';
import p_j_12_p_m from '../Assets/Asqare Banner - JEE, NEET, Foundation CET/JEE Banners/Pratham/mobile.png';

// JEE Crash Course
import p_j_cc_w from '../Assets/Asqare Banner - JEE, NEET, Foundation CET/Crash Course/JEE/Web.jpg';
import p_j_cc_l from '../Assets/Asqare Banner - JEE, NEET, Foundation CET/Crash Course/JEE/Laptop.png';
import p_j_cc_t from '../Assets/Asqare Banner - JEE, NEET, Foundation CET/Crash Course/JEE/tab.png';
import p_j_cc_m from '../Assets/Asqare Banner - JEE, NEET, Foundation CET/Crash Course/JEE/mobile.png';

// NEET 11th
import p_n_11_w from '../Assets/Asqare Banner - JEE, NEET, Foundation CET/NEET Banner/Sankalp/Web.jpg';
import p_n_11_l from '../Assets/Asqare Banner - JEE, NEET, Foundation CET/NEET Banner/Sankalp/Laptop.jpg';
import p_n_11_t from '../Assets/Asqare Banner - JEE, NEET, Foundation CET/NEET Banner/Sankalp/tab.png';
import p_n_11_m from '../Assets/Asqare Banner - JEE, NEET, Foundation CET/NEET Banner/Sankalp/mobile.png';

// NEET 12th
import p_n_12_w from '../Assets/Asqare Banner - JEE, NEET, Foundation CET/NEET Banner/Srijan/Web.jpg';
import p_n_12_l from '../Assets/Asqare Banner - JEE, NEET, Foundation CET/NEET Banner/Srijan/Laptop.jpg';
import p_n_12_t from '../Assets/Asqare Banner - JEE, NEET, Foundation CET/NEET Banner/Srijan/tab.png';
import p_n_12_m from '../Assets/Asqare Banner - JEE, NEET, Foundation CET/NEET Banner/Srijan/mobile.png';

// NEET 12th - pass
import p_n_12_p_w from '../Assets/Asqare Banner - JEE, NEET, Foundation CET/NEET Banner/Pratham/Web.jpg';
import p_n_12_p_l from '../Assets/Asqare Banner - JEE, NEET, Foundation CET/NEET Banner/Pratham/Laptop.png';
import p_n_12_p_t from '../Assets/Asqare Banner - JEE, NEET, Foundation CET/NEET Banner/Pratham/tab.png';
import p_n_12_p_m from '../Assets/Asqare Banner - JEE, NEET, Foundation CET/NEET Banner/Pratham/mobile.png';

// NEET Crash Course
import p_n_cc_w from '../Assets/Asqare Banner - JEE, NEET, Foundation CET/Crash Course/NEET/Web.jpg';
import p_n_cc_l from '../Assets/Asqare Banner - JEE, NEET, Foundation CET/Crash Course/NEET/Laptop.jpg';
import p_n_cc_t from '../Assets/Asqare Banner - JEE, NEET, Foundation CET/Crash Course/NEET/tab.jpg';
import p_n_cc_m from '../Assets/Asqare Banner - JEE, NEET, Foundation CET/Crash Course/NEET/mobile.png';

// CET 11th
import p_c_11_w from '../Assets/Asqare Banner - JEE, NEET, Foundation CET/CET banner/Sankalp/Web.jpg';
import p_c_11_l from '../Assets/Asqare Banner - JEE, NEET, Foundation CET/CET banner/Sankalp/Laptop.png';
import p_c_11_t from '../Assets/Asqare Banner - JEE, NEET, Foundation CET/CET banner/Sankalp/tab.png';
import p_c_11_m from '../Assets/Asqare Banner - JEE, NEET, Foundation CET/CET banner/Sankalp/mobile.png';

// CET 12th
import p_c_12_w from '../Assets/Asqare Banner - JEE, NEET, Foundation CET/CET banner/Srijan/Web.jpg';
import p_c_12_l from '../Assets/Asqare Banner - JEE, NEET, Foundation CET/CET banner/Srijan/Laptop.png';
import p_c_12_t from '../Assets/Asqare Banner - JEE, NEET, Foundation CET/CET banner/Srijan/tab.png';
import p_c_12_m from '../Assets/Asqare Banner - JEE, NEET, Foundation CET/CET banner/Srijan/mobile.png';

// CET 12th - pass
import p_c_12_p_w from '../Assets/Asqare Banner - JEE, NEET, Foundation CET/CET banner/Pratham/Web.jpg';
import p_c_12_p_l from '../Assets/Asqare Banner - JEE, NEET, Foundation CET/CET banner/Pratham/Laptop.png';
import p_c_12_p_t from '../Assets/Asqare Banner - JEE, NEET, Foundation CET/CET banner/Pratham/tab.png';
import p_c_12_p_m from '../Assets/Asqare Banner - JEE, NEET, Foundation CET/CET banner/Pratham/mobile.png';

// CET Crash Course
import p_c_cc_w from '../Assets/Asqare Banner - JEE, NEET, Foundation CET/Crash Course/CET/Web.png';
import p_c_cc_l from '../Assets/Asqare Banner - JEE, NEET, Foundation CET/Crash Course/CET/Laptop.png';
import p_c_cc_t from '../Assets/Asqare Banner - JEE, NEET, Foundation CET/Crash Course/CET/tab.png';
import p_c_cc_m from '../Assets/Asqare Banner - JEE, NEET, Foundation CET/Crash Course/CET/mobile.png';

// Foundation 8th
import p_f_8_w from '../Assets/Asqare Banner - JEE, NEET, Foundation CET/Foundation/Sankalp/Web.png';
import p_f_8_l from '../Assets/Asqare Banner - JEE, NEET, Foundation CET/Foundation/Sankalp/Laptop.png';
import p_f_8_t from '../Assets/Asqare Banner - JEE, NEET, Foundation CET/Foundation/Sankalp/tab.png';
import p_f_8_m from '../Assets/Asqare Banner - JEE, NEET, Foundation CET/Foundation/Sankalp/mobile.png';

// Foundation 9th
import p_f_9_w from '../Assets/Asqare Banner - JEE, NEET, Foundation CET/Foundation/Srijan/Web.png';
import p_f_9_l from '../Assets/Asqare Banner - JEE, NEET, Foundation CET/Foundation/Srijan/Laptop.png';
import p_f_9_t from '../Assets/Asqare Banner - JEE, NEET, Foundation CET/Foundation/Srijan/tab.png';
import p_f_9_m from '../Assets/Asqare Banner - JEE, NEET, Foundation CET/Foundation/Srijan/mobile.png';

// Foundation 10th
import p_f_10_w from '../Assets/Asqare Banner - JEE, NEET, Foundation CET/Foundation/Pratham/Web.png';
import p_f_10_l from '../Assets/Asqare Banner - JEE, NEET, Foundation CET/Foundation/Pratham/Laptop.png';
import p_f_10_t from '../Assets/Asqare Banner - JEE, NEET, Foundation CET/Foundation/Pratham/tab.png';
import p_f_10_m from '../Assets/Asqare Banner - JEE, NEET, Foundation CET/Foundation/Pratham/mobile.png';

import img1 from '../Assets/home page illustrator_3.png';

function Course_hero({ courseName, className }) {
  // Posters
  const posters_container = [
    [
      [p_j_11_w, p_j_11_l, p_j_11_t, p_j_11_m],
      [p_j_12_w, p_j_12_l, p_j_12_t, p_j_12_m],
      [p_j_12_p_w, p_j_12_p_l, p_j_12_p_t, p_j_12_p_m],
      [p_j_cc_w, p_j_cc_l, p_j_cc_t, p_j_cc_m]
    ],
    [
      [p_n_11_w, p_n_11_l, p_n_11_t, p_n_11_m],
      [p_n_12_w, p_n_12_l, p_n_12_t, p_n_12_m],
      [p_n_12_p_w, p_n_12_p_l, p_n_12_p_t, p_n_12_p_m],
      [p_n_cc_w, p_n_cc_l, p_n_cc_t, p_n_cc_m]
    ],
    [
      [p_c_11_w, p_c_11_l, p_c_11_t, p_c_11_m],
      [p_c_12_w, p_c_12_l, p_c_12_t, p_c_12_m],
      [p_c_12_p_w, p_c_12_p_l, p_c_12_p_t, p_c_12_p_m],
      [p_c_cc_w, p_c_cc_l, p_c_cc_t, p_c_cc_m]
    ],
    [
      [p_f_8_w, p_f_8_l, p_f_8_t, p_f_8_m],
      [p_f_9_w, p_f_9_l, p_f_9_t, p_f_9_m],
      [p_f_10_w, p_f_10_l, p_f_10_t, p_f_10_m]
    ]
  ];

  let poster_2_a = posters_container[courseName - 1][className - 1][0];
  let poster_2_b = posters_container[courseName - 1][className - 1][1];
  let poster_2_c = posters_container[courseName - 1][className - 1][2];
  let poster_2_d = posters_container[courseName - 1][className - 1][3];

  //
  let [qu, setQu] = useState(
    courses_data_api[courseName - 1][className - 1].qu
  );
  let [st, setSt] = useState(
    courses_data_api[courseName - 1][className - 1].mco
  );
  let [rat, setRat] = useState(
    courses_data_api[courseName - 1][className - 1].rat
  );
  let [br, setbr] = useState(
    courses_data_api[courseName - 1][className - 1].br
  );
  //
  const Count_Data_c_h = [
    // { id: 1, text: 'Qualified', maxCount: qu },
    // { id: 2, text: 'Students', maxCount: st },
    // { id: 3, text: 'Selection Rate', maxCount: rat },
    // { id: 4, text: 'Best Rank', maxCount: br }

    [
      // JEE
      {
        id: 1,
        text: 'Qualified',
        data: 1247
      },
      {
        id: 2,
        text: 'Students',
        data: 1531
      },
      {
        id: 3,
        text: 'Selection Rate',
        data: 81
      },
      {
        id: 4,
        text: 'Best Rank',
        data: 232
      }
    ],
    [
      // NEET
      { id: 1, text: 'Qualified', data: 1857 },
      { id: 2, text: 'Students', data: 2517 },
      { id: 3, text: 'Selection Rate', data: 74 },
      { id: 4, text: 'Highest Score', data: 670 }
    ],
    [
      // CET
      {
        id: 1,
        text: 'Qualified',
        data: 2708
      },
      { id: 2, text: 'Students', data: 2950 },
      { id: 3, text: 'Selection Rate', data: 92 },
      { id: 4, text: 'Highest Score', data: 99 }
    ],
    [
      // Foundation
      { id: 1, text: 'Qualified', data: 430 },
      { id: 2, text: 'Students', data: 860 },
      { id: 3, text: 'Selection Rate', data: 50 },
      { id: 4, text: 'Best Rank', data: 28 }
    ]
  ];

  let counter_d = Count_Data_c_h[courseName - 1];

  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 2;

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
    <>
      <div className="course_hero_container">
        <div
          className={
            currentSlide === 0
              ? 'slider_c_h active_c_h c_h_c'
              : 'slider_c_h c_h_c'
          }
        >
          <div className="c_h_container_left">
            <h1 className="c_h_heading">
              {courses_data_api[courseName - 1][className - 1].desc_h}
            </h1>
            <div className="c_h_counter">{counter_d.map(Course_counter)}</div>
            <div className="c_h_points">
              <div className="c_h_points_left">
                <div>
                  <img src={icon_1} alt="icon" className="icn-1" />
                  <p className="t2">Regular Assignment</p>
                </div>
                <div>
                  <img src={icon_2} alt="icon" className="icn-1" />
                  <p className="t2">Holistic Curriculum</p>
                </div>
                <div>
                  <img src={icon_4} alt="icon" className="icn-1" />
                  <p className="t2">Interactive Class</p>
                </div>
                <div>
                  <img src={icon_3} alt="icon" className="icn-1" />
                  <p className="t2">Dedicated Faculty</p>
                </div>
              </div>
              <div className="c_h_points_right">
                <p className="t2">Subjects Covered</p>
                <div>
                  <img src={icon_7} alt="icon" className="icn-1" />
                  <p className="t2">
                    {courses_data_api[courseName - 1][className - 1].sub_1}
                  </p>
                </div>
                <div>
                  <img src={icon_6} alt="icon" className="icn-1" />
                  <p className="t2">
                    {courses_data_api[courseName - 1][className - 1].sub_2}
                  </p>
                </div>
                <div>
                  <img src={icon_5} alt="icon" className="icn-1" />
                  <p className="t2">
                    {courses_data_api[courseName - 1][className - 1].sub_3}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="c_h_container_right">
            <img src={img1} alt="img" />
            <p>{courses_data_api[courseName - 1][className - 1].fee_p2}</p>
            <button>Pay Now</button>
          </div>
        </div>
        <div
          className={
            currentSlide === 1 ? 'slider_c_h active_c_h' : 'slider_c_h'
          }
        >
          <img src={poster_2_a} alt="img" className="poster poster_1_1_h" />
          <img src={poster_2_b} alt="img" className="poster poster_1_2_h" />
          <img src={poster_2_c} alt="img" className="poster poster_1_3_h" />
          <img src={poster_2_d} alt="img" className="poster poster_1_4_h" />
          <div className="header_form">
            <Form />
          </div>
        </div>
        <button
          className="prev-button-course arrow_btn_ch arrow_btn"
          onClick={prevSlide}
        >
          &#10094;
        </button>
        <button
          className="next-button-course arrow_btn_ch arrow_btn"
          onClick={nextSlide}
        >
          &#10095;
        </button>
      </div>
    </>
  );
}

export default Course_hero;
