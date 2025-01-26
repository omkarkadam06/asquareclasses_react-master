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
import banner1 from '../Assets/slider/asquare-banner.webp'

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
  const currentURL = window.location.pathname;
  return (
    <React.Fragment>
      <div className="course-hore-section">
      <div className="course_hero_container container banner-titleSection">
        <div className="row">
          <div className="col-md-7">
            <div className='course-name course-batch'>
              <h4>
            {courses_data_api[courseName - 1][className - 1].title}
              </h4>
            </div>
          <h1 className="banner-title courseBanner-title">
          {currentURL === '/iit-jee-coaching-classes-institute-in-vishrantwadi-pune' ? (
                'IIT JEE Coaching Classes Institute in Vishrantwadi Pune'
            ) : currentURL === '/iit-jee-coaching-classes-institute-in-yerwada-pune' ? (
                'IIT JEE Coaching Classes Institute in Yerwada Pune'
            ) : currentURL === '/iit-jee-coaching-classes-institute-in-dhanori-pune' ? (
                'IIT JEE Coaching Classes Institute in Dhanori Pune'
            ) : currentURL === '/iit-jee-coaching-classes-institute-in-lohegaon-pune' ? (
              'IIT JEE Coaching Classes Institute in Lohegaon Pune'
            )  : currentURL === '/iit-jee-coaching-classes-institute-in-dighi-pune' ? (
              'IIT JEE Coaching Classes Institute in Dighi Pune'
            ) : currentURL === '/iit-jee-coaching-classes-institute-in-alandi-pune' ? (
              'IIT JEE Coaching Classes Institute in Alandi Pune'
            ) : currentURL === '/iit-jee-coaching-classes-institute-in-khadki-pune' ? (
              'IIT JEE Coaching Classes Institute in Khadki Pune'
            ) : currentURL === '/iit-jee-coaching-classes-institute-in-tingre-nagar-pune' ? (
              'IIT JEE Coaching Classes Institute in Tingre Nagar Pune'
            ) : currentURL === '/iit-jee-coaching-classes-institute-in-shastri-nagar-pune' ? (
              'IIT JEE Coaching Classes Institute in Shastri Nagar Pune'
            ) : currentURL === '/iit-jee-coaching-classes-institute-in-pratik-nagar-pune' ? (
              'IIT JEE Coaching Classes Institute in Pratik Nagar Pune'
            ) : currentURL === '/iit-jee-coaching-classes-institute-in-viman-nagar-pune' ? (
              'IIT JEE Coaching Classes Institute in Viman Nagar Pune'
            ) : currentURL === '/iit-jee-coaching-classes-institute-in-kalyani-nagar-pune' ? (
              'IIT JEE Coaching Classes Institute in Kalyani Nagar Pune'
            ) : currentURL === '/iit-jee-coaching-classes-institute-in-wagholi-pune' ? (
              'IIT JEE Coaching Classes Institute in Wagholi Pune'
            ) : currentURL === '/iit-jee-coaching-classes-institute-in-pimpri-pune' ? (
              'IIT JEE Coaching Classes Institute in Pimpri Pune'
            ) : currentURL === '/iit-jee-coaching-classes-institute-in-chinchwad-pune' ? (
              'IIT JEE Coaching Classes Institute in Chinchwad Pune'
            ) : currentURL === '/iit-jee-coaching-classes-institute-in-pcmc-pune' ? (
              'IIT JEE Coaching Classes Institute in PCMC Pune'
            ) : currentURL === '/iit-jee-coaching-classes-institute-in-akudi-pune' ? (
              'IIT JEE Coaching Classes Institute in Akudi Pune'
            ) : currentURL === '/iit-jee-coaching-classes-institute-in-nigdi-pune' ? (
              'IIT JEE Coaching Classes Institute in Nigdi Pune'
            ) : currentURL === '/iit-jee-coaching-classes-institute-in-bhosari-pune' ? (
              'IIT JEE Coaching Classes Institute in Bhosari Pune'
            ) : currentURL === '/iit-jee-coaching-classes-institute-in-moshi-pune' ? (
              'IIT JEE Coaching Classes Institute in Moshi Pune'
            ) : currentURL === '/iit-jee-coaching-classes-institute-in-chakan-pune' ? (
              'IIT JEE Coaching Classes Institute in Chakan Pune'
            ) : currentURL === '/iit-jee-coaching-classes-institute-in-kasarwadi-pune' ? (
              'IIT JEE Coaching Classes Institute in Kasarwadi Pune'
            ) : currentURL === '/iit-jee-coaching-classes-institute-in-dapodi-pune' ? (
              'IIT JEE Coaching Classes Institute in Kasarwadi Pune'
            ) : currentURL === '/iit-jee-coaching-classes-institute-in-ravet-pune' ? (
              'IIT JEE Coaching Classes Institute in Ravet Pune'
            ) : currentURL === '/iit-jee-coaching-classes-institute-in-vishrantwadi-pune' ? (
              'IIT JEE Coaching Classes Institute in Vishrantwadi Pune'
            ) : currentURL === '/iit-jee-coaching-classes-institute-in-kalewadi-pune' ? (
              'IIT JEE Coaching Classes Institute in Kalewadi Pune'
            ) : currentURL === '/iit-jee-coaching-classes-institute-in-wakad-pune' ? (
              'IIT JEE Coaching Classes Institute in Wakad Pune'
            ) : currentURL === '/iit-jee-coaching-classes-institute-in-aundh-pune' ? (
              'IIT JEE Coaching Classes Institute in Aundh Pune'
            ) : currentURL === '/iit-jee-coaching-classes-institute-in-baner-pune' ? (
              'IIT JEE Coaching Classes Institute in Baner Pune'
            ) : currentURL === '/iit-jee-coaching-classes-institute-in-hinjewadi-pune' ? (
              'IIT JEE Coaching Classes Institute in Hinjewadi Pune'
            ) : currentURL === '/iit-jee-coaching-classes-institute-in-pimple-saudagar-pune' ? (
              'IIT JEE Coaching Classes Institute in Pimple Saudagar Pune'
            ) : currentURL === '/iit-jee-coaching-classes-institute-in-pimple-gurav-pune' ? (
              'IIT JEE Coaching Classes Institute in Pimple Gurav Pune'
            ) : currentURL === '/iit-jee-coaching-classes-institute-in-pimple-nilakh-pune' ? (
              <>
              IIT JEE Coaching Classes Institute in Pimple Nilakh Pune

            {/* NEET */}
            </>
            ) : currentURL === '/neet-coaching-classes-institute-in-vishrantwadi-pune' ? (
              'NEET Coaching Classes Institute in Vishrantwadi Pune'
            ) : currentURL === '/neet-coaching-classes-institute-in-yerwada-pune' ? (
              'NEET Coaching Classes Institute in Yerwada Pune'
            ) : currentURL === '/neet-coaching-classes-institute-in-dhanori-pune' ? (
              'NEET Coaching Classes Institute in Dhanori Pune'
            ) : currentURL === '/neet-coaching-classes-institute-in-lohegaon-pune' ? (
              'NEET Coaching Classes Institute in Lohegaon Pune'
            ) : currentURL === '/neet-coaching-classes-institute-in-dighi-pune' ? (
              'NEET Coaching Classes Institute in Dighi Pune'
            ) : currentURL === '/neet-coaching-classes-institute-in-alandi-pune' ? (
              'NEET Coaching Classes Institute in Alandi Pune'
            ) : currentURL === '/neet-coaching-classes-institute-in-khadki-pune' ? (
              'NEET Coaching Classes Institute in Khadki Pune'
            ) : currentURL === '/neet-coaching-classes-institute-in-tingre-nagar-pune' ? (
              'NEET Coaching Classes Institute in Tingre Nagar Pune'
            ) : currentURL === '/neet-coaching-classes-institute-in-shastri-nagar-pune' ? (
              'NEET Coaching Classes Institute in Shastri Nagar Pune'
            ) : currentURL === '/neet-coaching-classes-institute-in-pratik-nagar-pune' ? (
              'NEET Coaching Classes Institute in Pratik Nagar Pune'
            ) : currentURL === '/neet-coaching-classes-institute-in-viman-nagar-pune' ? (
              'NEET Coaching Classes Institute in Viman Nagar Pune'
            ) : currentURL === '/neet-coaching-classes-institute-in-kalyani-nagar-pune' ? (
              'NEET Coaching Classes Institute in Kalyani Nagar Pune'
            ) : currentURL === '/neet-coaching-classes-institute-in-wagholi-pune' ? (
              'NEET Coaching Classes Institute in Wagholi Pune'
            ) : currentURL === '/neet-coaching-classes-institute-in-pimpri-pune' ? (
              'NEET Coaching Classes Institute in Pimpri Pune'
            ) : currentURL === '/neet-coaching-classes-institute-in-chinchwad-pune' ? (
              'NEET Coaching Classes Institute in Chinchwad Pune'
            ) : currentURL === '/neet-coaching-classes-institute-in-pcmc-pune' ? (
              'NEET Coaching Classes Institute in PCMC Pune'
            ) : currentURL === '/neet-coaching-classes-institute-in-akudi-pune' ? (
              'NEET Coaching Classes Institute in Akudi Pune'
            ) : currentURL === '/neet-coaching-classes-institute-in-nigdi-pune' ? (
              'NEET Coaching Classes Institute in Nigdi Pune'
            ) : currentURL === '/neet-coaching-classes-institute-in-bhosari-pune' ? (
              'NEET Coaching Classes Institute in Bhosari Pune'
            ) : currentURL === '/neet-coaching-classes-institute-in-moshi-pune' ? (
              'NEET Coaching Classes Institute in Moshi Pune'
            ) : currentURL === '/neet-coaching-classes-institute-in-chakan-pune' ? (
              'NEET Coaching Classes Institute in Chakan Pune'
            ) : currentURL === '/neet-coaching-classes-institute-in-kasarwadi-pune' ? (
              'NEET Coaching Classes Institute in Kasarwadi Pune'
            ) : currentURL === '/neet-coaching-classes-institute-in-dapodi-pune' ? (
              'NEET Coaching Classes Institute in Dapodi Pune'
            ) : currentURL === '/neet-coaching-classes-institute-in-ravet-pune' ? (
              'NEET Coaching Classes Institute in Ravet Pune'
            ) : currentURL === '/neet-coaching-classes-institute-in-kalewadi-pune' ? (
              'NEET Coaching Classes Institute in Kalewadi Pune'
            ) : currentURL === '/neet-coaching-classes-institute-in-wakad-pune' ? (
              'NEET Coaching Classes Institute in Wakad Pune'
            ) : currentURL === '/neet-coaching-classes-institute-in-aundh-pune' ? (
              'NEET Coaching Classes Institute in Aundh Pune'
            ) : currentURL === '/neet-coaching-classes-institute-in-baner-pune' ? (
              'NEET Coaching Classes Institute in Baner Pune'
            ) : currentURL === '/neet-coaching-classes-institute-in-hinjewadi-pune' ? (
              'NEET Coaching Classes Institute in Hinjewadi Pune'
            ) : currentURL === '/neet-coaching-classes-institute-in-pimple-saudagar-pune' ? (
              'NEET Coaching Classes Institute in Pimple Saudagar Pune'
            ) : currentURL === '/neet-coaching-classes-institute-in-pimple-gurav-pune' ? (
              'NEET Coaching Classes Institute in Pimple Gurav Pune'
            ) : currentURL === '/neet-coaching-classes-institute-in-pimple-nilakh-pune' ? (
              <>
              NEET Coaching Classes Institute in Pimple Nilakh Pune


              {/* CET */}
              </>
            ) : currentURL === '/mht-cet-course-classes-institute-in-vishrantwadi-pune' ? (
              'MHT CET Course Classes Institute in Vishrantwadi Pune'
            ) : currentURL === '/mht-cet-course-classes-institute-in-yerwada-pune' ? (
              'MHT CET Course Classes Institute in Yerwada Pune'
            ) : currentURL === '/mht-cet-course-classes-institute-in-dhanori-pune' ? (
              'MHT CET Course Classes Institute in Dhanori Pune'
            ) : currentURL === '/mht-cet-course-classes-institute-in-lohegaon-pune' ? (
              'MHT CET Course Classes Institute in Lohegaon Pune'
            ) : currentURL === '/mht-cet-course-classes-institute-in-dighi-pune' ? (
              'MHT CET Course Classes Institute in Dighi Pune'
            ) : currentURL === '/mht-cet-course-classes-institute-in-alandi-pune' ? (
              'MHT CET Course Classes Institute in Alandi Pune'
            ) : currentURL === '/mht-cet-course-classes-institute-in-khadki-pune' ? (
              'MHT CET Course Classes Institute in Khadki Pune'
            ) : currentURL === '/mht-cet-course-classes-institute-in-tingre-nagar-pune' ? (
              'MHT CET Course Classes Institute in Tingre Nagar Pune'
            ) : currentURL === '/mht-cet-course-classes-institute-in-shastri-nagar-pune' ? (
              'MHT CET Course Classes Institute in Shastri Nagar Pune'
            ) : currentURL === '/mht-cet-course-classes-institute-in-pratik-nagar-pune' ? (
              'MHT CET Course Classes Institute in Pratik Nagar Pune'
            ) : currentURL === '/mht-cet-course-classes-institute-in-viman-nagar-pune' ? (
              'MHT CET Course Classes Institute in Viman Nagar Pune'
            ) : currentURL === '/mht-cet-course-classes-institute-in-kalyani-nagar-pune' ? (
              'MHT CET Course Classes Institute in Kalyani Nagar Pune'
            ) : currentURL === '/mht-cet-course-classes-institute-in-wagholi-pune' ? (
              'MHT CET Course Classes Institute in Wagholi Pune'
            ) : currentURL === '/mht-cet-course-classes-institute-in-pimpri-pune' ? (
              'MHT CET Course Classes Institute in Pimpri Pune'
            ) : currentURL === '/mht-cet-course-classes-institute-in-chinchwad-pune' ? (
              'MHT CET Course Classes Institute in Chinchwad Pune'
            ) : currentURL === '/mht-cet-course-classes-institute-in-pcmc-pune' ? (
              'MHT CET Course Classes Institute in PCMC Pune'
            ) : currentURL === '/mht-cet-course-classes-institute-in-akudi-pune' ? (
              'MHT CET Course Classes Institute in Akudi Pune'
            ) : currentURL === '/mht-cet-course-classes-institute-in-nigdi-pune' ? (
              'MHT CET Course Classes Institute in Nigdi Pune'
            ) : currentURL === '/mht-cet-course-classes-institute-in-bhosari-pune' ? (
              'MHT CET Course Classes Institute in Bhosari Pune'
            ) : currentURL === '/mht-cet-course-classes-institute-in-moshi-pune' ? (
              'MHT CET Course Classes Institute in Moshi Pune'
            ) : currentURL === '/mht-cet-course-classes-institute-in-chakan-pune' ? (
              'MHT CET Course Classes Institute in Chakan Pune'
            ) : currentURL === '/mht-cet-course-classes-institute-in-kasarwadi-pune' ? (
              'MHT CET Course Classes Institute in Kasarwadi Pune'
            ) : currentURL === '/mht-cet-course-classes-institute-in-dapodi-pune' ? (
              'MHT CET Course Classes Institute in Dapodi Pune'
            ) : currentURL === '/mht-cet-course-classes-institute-in-ravet-pune' ? (
              'MHT CET Course Classes Institute in Ravet Pune'
            ) : currentURL === '/mht-cet-course-classes-institute-in-kalewadi-pune' ? (
              'MHT CET Course Classes Institute in Kalewadi Pune'
            ) : currentURL === '/mht-cet-course-classes-institute-in-wakad-pune' ? (
              'MHT CET Course Classes Institute in Wakad Pune'
            ) : currentURL === '/mht-cet-course-classes-institute-in-aundh-pune' ? (
              'MHT CET Course Classes Institute in Aundh Pune'
            ) : currentURL === '/mht-cet-course-classes-institute-in-baner-pune' ? (
              'MHT CET Course Classes Institute in Baner Pune'
            ) : currentURL === '/mht-cet-course-classes-institute-in-hinjewadi-pune' ? (
              'MHT CET Course Classes Institute in Hinjewadi Pune'
            ) : currentURL === '/mht-cet-course-classes-institute-in-pimple-saudagar-pune' ? (
              'MHT CET Course Classes Institute in Pimple Saudagar Pune'
            ) : currentURL === '/mht-cet-course-classes-institute-in-pimple-gurav-pune' ? (
              'MHT CET Course Classes Institute in Pimple Gurav Pune'
            ) : currentURL === '/mht-cet-course-classes-institute-in-pimple-nilakh-pune' ? (
              <>
              MHT CET Course Classes Institute in Pimple Nilakh Pune


              {/* Foundations */}
              </>
            ) : currentURL === '/class-8th-9th-10th-coaching-Institutes-classes-in-vishrantwadi-pune' ? (
              'Class 8th, 9th, 10th Coaching Institutes-Classes in Vishrantwadi Pune'
            ) : currentURL === '/class-8th-9th-10th-coaching-Institutes-classes-in-yerwada-pune' ? (
              'Class 8th, 9th, 10th Coaching Institutes-Classes in Yerwada Pune'
            ) : currentURL === '/class-8th-9th-10th-coaching-Institutes-classes-in-dhanori-pune' ? (
              'Class 8th, 9th, 10th Coaching Institutes-Classes in Dhanori Pune'
            ) : currentURL === '/class-8th-9th-10th-coaching-Institutes-classes-in-lohegaon-pune' ? (
              'Class 8th, 9th, 10th Coaching Institutes-Classes in Lohegaon Pune'
            ) : currentURL === '/class-8th-9th-10th-coaching-Institutes-classes-in-dighi-pune' ? (
              'Class 8th, 9th, 10th Coaching Institutes-Classes in Dighi Pune'
            ) : currentURL === '/class-8th-9th-10th-coaching-Institutes-classes-in-alandi-pune' ? (
              'Class 8th, 9th, 10th Coaching Institutes-Classes in Alandi Pune'
            ) : currentURL === '/class-8th-9th-10th-coaching-Institutes-classes-in-khadki-pune' ? (
              'Class 8th, 9th, 10th Coaching Institutes-Classes in Khadki Pune'
            ) : currentURL === '/class-8th-9th-10th-coaching-Institutes-classes-in-tingre-nagar-pune' ? (
              'Class 8th, 9th, 10th Coaching Institutes-Classes in Tingre Nagar Pune'
            ) : currentURL === '/class-8th-9th-10th-coaching-Institutes-classes-in-shastri-nagar-pune' ? (
              'Class 8th, 9th, 10th Coaching Institutes-Classes in Shastri Nagar Pune'
            ) : currentURL === '/class-8th-9th-10th-coaching-Institutes-classes-in-pratik-nagar-pune' ? (
              'Class 8th, 9th, 10th Coaching Institutes-Classes in Pratik Nagar Pune'
            ) : currentURL === '/class-8th-9th-10th-coaching-Institutes-classes-in-viman-nagar-pune' ? (
              'Class 8th, 9th, 10th Coaching Institutes-Classes in Viman Nagar Pune'
            ) : currentURL === '/class-8th-9th-10th-coaching-Institutes-classes-in-kalyani-nagar-pune' ? (
              'Class 8th, 9th, 10th Coaching Institutes-Classes in Kalyani Nagar Pune'
            ) : currentURL === '/class-8th-9th-10th-coaching-Institutes-classes-in-wagholi-pune' ? (
              'Class 8th, 9th, 10th Coaching Institutes-Classes in Wagholi Pune'
            ) : currentURL === '/class-8th-9th-10th-coaching-Institutes-classes-in-pimpri-pune' ? (
              'Class 8th, 9th, 10th Coaching Institutes-Classes in Pimpri Pune'
            ) : currentURL === '/class-8th-9th-10th-coaching-Institutes-classes-in-chinchwad-pune' ? (
              'Class 8th, 9th, 10th Coaching Institutes-Classes in Chinchwad Pune'
            ) : currentURL === '/class-8th-9th-10th-coaching-Institutes-classes-in-pcmc-pune' ? (
              'Class 8th, 9th, 10th Coaching Institutes-Classes in PCMC Pune'
            ) : currentURL === '/class-8th-9th-10th-coaching-Institutes-classes-in-akudi-pune' ? (
              'Class 8th, 9th, 10th Coaching Institutes-Classes in Akudi Pune'
            ) : currentURL === '/class-8th-9th-10th-coaching-Institutes-classes-in-nigdi-pune' ? (
              'Class 8th, 9th, 10th Coaching Institutes-Classes in Nigdi Pune'
            ) : currentURL === '/class-8th-9th-10th-coaching-Institutes-classes-in-bhosari-pune' ? (
              'Class 8th, 9th, 10th Coaching Institutes-Classes in Bhosari Pune'
            ) : currentURL === '/class-8th-9th-10th-coaching-Institutes-classes-in-moshi-pune' ? (
              'Class 8th, 9th, 10th Coaching Institutes-Classes in Moshi Pune'
            ) : currentURL === '/class-8th-9th-10th-coaching-Institutes-classes-in-chakan-pune' ? (
              'Class 8th, 9th, 10th Coaching Institutes-Classes in Chakan Pune'
            ) : currentURL === '/class-8th-9th-10th-coaching-Institutes-classes-in-kasarwadi-pune' ? (
              'Class 8th, 9th, 10th Coaching Institutes-Classes in Kasarwadi Pune'
            ) : currentURL === '/class-8th-9th-10th-coaching-Institutes-classes-in-dapodi-pune' ? (
              'Class 8th, 9th, 10th Coaching Institutes-Classes in Dapodi Pune'
            ) : currentURL === '/class-8th-9th-10th-coaching-Institutes-classes-in-ravet-pune' ? (
              'Class 8th, 9th, 10th Coaching Institutes-Classes in Ravet Pune'
            ) : currentURL === '/class-8th-9th-10th-coaching-Institutes-classes-in-kalewadi-pune' ? (
              'Class 8th, 9th, 10th Coaching Institutes-Classes in Kalewadi Pune'
            ) : currentURL === '/class-8th-9th-10th-coaching-Institutes-classes-in-wakad-pune' ? (
              'Class 8th, 9th, 10th Coaching Institutes-Classes in Wakad Pune'
            ) : currentURL === '/class-8th-9th-10th-coaching-Institutes-classes-in-aundh-pune' ? (
              'Class 8th, 9th, 10th Coaching Institutes-Classes in Aundh Pune'
            ) : currentURL === '/class-8th-9th-10th-coaching-Institutes-classes-in-baner-pune' ? (
              'Class 8th, 9th, 10th Coaching Institutes-Classes in Baner Pune'
            ) : currentURL === '/class-8th-9th-10th-coaching-Institutes-classes-in-hinjewadi-pune' ? (
              'Class 8th, 9th, 10th Coaching Institutes-Classes in Hinjewadi Pune'
            ) : currentURL === '/class-8th-9th-10th-coaching-Institutes-classes-in-pimple-saudagar-pune' ? (
              'Class 8th, 9th, 10th Coaching Institutes-Classes in Pimple Saudagar Pune'
            ) : currentURL === '/class-8th-9th-10th-coaching-Institutes-classes-in-pimple-gurav-pune' ? (
              'Class 8th, 9th, 10th Coaching Institutes-Classes in Pimple Gurav Pune'
            ) : currentURL === '/class-8th-9th-10th-coaching-Institutes-classes-in-pimple-nilakh-pune' ? (
              'Class 8th, 9th, 10th Coaching Institutes-Classes in Pimple Nilakh Pune'
            ) : (
                courses_data_api[courseName - 1][className - 1].desc_h
            )}
            </h1>
            <div className="duration_box">
              <p>
              {courses_data_api[courseName - 1][className - 1].duration}
              </p>
            </div>
            {/* <div className="price-package">
          <img src={img1} alt="img" />
            <p>{courses_data_api[courseName - 1][className - 1].fee_p2}</p>
            <button>Pay Now</button>
            </div> */}
            <div className="c_h_counter">{counter_d.map(Course_counter)}</div>
            <div className="c_h_points points-2">
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
                  <p className="t2">One to One Interation</p>
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
          <div className="col-md-5 form-col">
            <Form />
          </div>
        </div>
      </div>
      </div>
    </React.Fragment>

  );
}

export default Course_hero;