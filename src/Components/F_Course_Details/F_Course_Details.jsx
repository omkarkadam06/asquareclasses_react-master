import React, { useState, useRef, useEffect } from 'react';
import './f_course_d.css';
import '../style.css';
import f_courses_data_api from '../Course_Details/Course_Details_Data';
import arrow_logo from '../Assets/arrow-logo-3.png';
import points_logo_1 from '../Assets/points-icon-3.png';
import points_logo_2 from '../Assets/points-icon-4.png';
import envi_1 from '../Assets/1.jpg';
import envi_3 from '../Assets/3.jpg';
import envi_4 from '../Assets/4.jpg';
import envi_5 from '../Assets/5.jpg';
import result_poster_1 from '../Assets/r-p-1.jpg';
import result_poster_2 from '../Assets/r-p-2.jpg';
import result_poster_3 from '../Assets/r-p-3.jpg';
import result_poster_4 from '../Assets/r-p-4.jpg';
import result_poster_5 from '../Assets/r-p-5.jpg';
import class_icon from '../Assets/class-icon.png';
import day_icon from '../Assets/day-icon.png';
import surprise_icon from '../Assets/surprise-logo.png';
import test_icon from '../Assets/test-icon.png';
import time_icon from '../Assets/time-icon.png';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

function F_Course_Details({ courseName, className }) {
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

  const getSlideStyle = () => {
    return {
      transform: `translateX(-${currentSlide * 100}%)`
    };
  };

  //
  let [b_click, set_b_click] = useState(false);

  console.log(courseName);

  function clicked_btn() {
    if (b_click == false) {
      set_b_click(true);
      if (courseName == 'foundation') {
        set_b_click(false);
      }
    } else {
      set_b_click(false);
    }
  }

  window.onscroll = function () {
    var header = document.querySelector('.sticky-div');

    // Check if the element exists
    if (header) {
      var sticky = header.offsetTop;

      if (window.pageYOffset > sticky) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    }
  };

  //
  const intoductionRef = useRef(null);
  const descriptionRef = useRef(null);
  const feesRef = useRef(null);
  const benifitsRef = useRef(null);
  const resultsRef = useRef(null);

  const div_series = [
    intoductionRef,
    descriptionRef,
    feesRef,
    benifitsRef,
    resultsRef
  ];

  // Function to scroll to the target div when the button is clicked
  const scrollToDiv = (id) => {
    const element = div_series[id - 1].current;

    // Calculate the position of the element relative to the top of the document
    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset;

    // Subtract 100px from the calculated position for the offset
    const offsetPosition = elementPosition - 200;

    // Scroll to the exact position with the offset
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  //
  const [viewRef, inView] = useInView({
    triggerOnce: true // Trigger only once
  });

  //
  let [btnClick1, setIndexClick1] = useState(courseName);
  let [btnClick2, setIndexClick2] = useState(className);
  let [btnClick3, setIndexClick3] = useState(1);

  const list_a = [
    { sub: 'Class 8th', id: 1, linkName: `8th` },
    { sub: 'Class 9th', id: 2, linkName: `9th` },
    { sub: 'Class 10th', id: 3, linkName: `10th` }
  ];

  const list2 = [
    {
      sub: 'Class 11th',
      id: 1,
      linkto: `/8th-foundation-regular-course-institutes-classes-in-pune`,
      linkName: `th11`
    },
    {
      sub: 'Class 12th',
      id: 2,
      linkto: `/9th-foundation-regular-course-institutes-classes-in-pune`,
      linkName: `th12`
    },
    {
      sub: '12th Pass',
      id: 3,
      linkto: `/9th-foundation-regular-course-institutes-classes-in-pune`,
      linkName: `th12_pass`
    }
  ];

  const list3 = [
    { sub: 'Introduction', id: 1 },
    { sub: 'Description', id: 2 },
    { sub: 'Fees Structure', id: 3 },
    { sub: 'Additional Benifits', id: 4 },
    { sub: 'Results', id: 5 }
  ];

  let [Course_Data, setCourseData] = useState(
    f_courses_data_api[btnClick1 - 1][btnClick2 - 1]
  );

  function click_function_1(id) {
    setIndexClick1(id);
    setCourseData(f_courses_data_api[id - 1][btnClick2 - 1]);
  }

  function click_function_2(id) {
    setIndexClick2(id);
    setCourseData(f_courses_data_api[btnClick1 - 1][id - 1]);
  }

  function scroll_down(id) {
    setIndexClick3(id);
    scrollToDiv(id);
  }

  //
  const downloadPdf = () => {
    const anchor = document.createElement('a');

    anchor.href = '../Assets/Asquare-Brochure-Admission.pdf';

    anchor.download = 'Asquare_Brochure.pdf';

    document.body.appendChild(anchor);
    anchor.click();

    document.body.removeChild(anchor);
  };

  return (
    <div className="course_details">
      <div className="cd_container">
        <div className="fcd_p1 cd_p1">
          <div ref={viewRef} className={`section ${inView ? 'title_aaa' : ''}`}>
            <span className="block_aaa"></span>
            <h3>
              Course<span></span>
            </h3>
          </div>
        </div>
        <div
          className="cd_p2"
          style={{ display: b_click ? 'block' : 'none' }}
        ></div>
        <div className="sticky-div_c_d cd_p3">
          <ul>
            {list3.map((data) => (
              <li
                key={data.id}
                onClick={() => scroll_down(data.id)}
                className={
                  data.id == btnClick3 ? 'cd_p3_tselect' : 'cd_p3_tnselect'
                }
              >
                {data.sub}
              </li>
            ))}
          </ul>
        </div>
        <div className="cd_p4">
          <div className="cd_intro" ref={intoductionRef}>
            <p className="cd_t1">{Course_Data.intro_h}</p>
            <p className="cd_t2">{Course_Data.intro_p}</p>
          </div>
          <div className="cd_divider" />
          <div className="cd_description" ref={descriptionRef}>
            <p className="cd_t1">{Course_Data.desc_h}</p>
            <p className="cd_t2">{Course_Data.desc_p1}</p>
            <div className="cd_p_box">
              <img src={points_logo_1} alt="icon" className="icn-1" />
              <p className="cd_t2">
                {' '}
                <span style={{ fontWeight: 600 }}>Phase 1 :-</span>
                {Course_Data.desc_p2}
              </p>
            </div>
            <div className="cd_p_box">
              <img src={points_logo_1} alt="icon" className="icn-1" />
              <p className="cd_t2">
                {' '}
                <span style={{ fontWeight: 600 }}>Phase 2</span>{' '}
                {Course_Data.desc_p3}
              </p>
            </div>
            <p className="cd_t2">{Course_Data.desc_p4}</p>
          </div>
          <div className="cd_divider" />
          <div className="cd_intro cd_why_asq">
            <p className="cd_t1">Why Choose ASQUARE?</p>
            <p className="cd_t2">
              ASQUARE's strength lies in our Pattern-Proof Mode. We prepare you
              to shine, regardless of any exam pattern changes. Our students
              don't just excel in JEE Main & Advanced; they also perform
              exceptionally well in XII Boards, MHCET, WBJEE, KCET, BITSAT, and
              more.
            </p>
          </div>
          <div className="cd_divider" />
          <div className="cd_teaching">
            <div className="cd_t_top">
              <p className="cd_t1">Teaching Methodologies</p>
              <img src={envi_4} alt="icon" className="icn-1" />
            </div>
            <div className="cd_t_bottom">
              <div className="cd_p_box">
                <img src={points_logo_2} alt="icon" className="icn-1" />
                <p className="cd_t2">{Course_Data.teach_p1}</p>
              </div>
              <div className="cd_p_box">
                <img src={points_logo_2} alt="icon" className="icn-1" />
                <p className="cd_t2">{Course_Data.teach_p2}</p>
              </div>
            </div>
          </div>
          <div className="cd_divider" />
          <div className="cd_envi">
            <p className="cd_t1">Class Students and Environment</p>
            <div>
              <img src={envi_1} alt="img" decoding="async" />
              <img src={envi_3} alt="img" decoding="async" />
              <img src={envi_4} alt="img" decoding="async" />
              <img src={envi_5} alt="img" decoding="async" />
            </div>
          </div>
          <div
            className="cd_divider"
            style={{ display: Course_Data.plan_p1 == '_' ? 'none' : 'flex' }}
          />
          <div
            className="cd_planner"
            style={{ display: Course_Data.plan_p1 == '_' ? 'none' : 'flex' }}
          >
            <p className="cd_t1">Course Planner</p>
            <div className="cd_p_container">
              <div className="cd_p_box">
                <img src={class_icon} alt="icon" className="icn-1" />
                <p className="cd_t2">{Course_Data.plan_p1}</p>
              </div>
              <div className="cd_p_box">
                <img src={time_icon} alt="icon" className="icn-1" />
                <p className="cd_t2">{Course_Data.plan_p2}</p>
              </div>
              <div className="cd_p_box">
                <img src={day_icon} alt="icon" className="icn-1" />
                <p className="cd_t2">{Course_Data.plan_p3}</p>
              </div>
              <div className="cd_p_box">
                <img src={test_icon} alt="icon" className="icn-1" />
                <p className="cd_t2">{Course_Data.plan_p4}</p>
              </div>
              <div className="cd_p_box">
                <img src={test_icon} alt="icon" className="icn-1" />
                <p className="cd_t2">{Course_Data.plan_p5}</p>
              </div>
            </div>
          </div>
          <div className="cd_divider" />
          <div className="cd_fee" ref={feesRef}>
            <p className="cd_t1">Course Fee</p>
            <p>{Course_Data.fee_p1}</p>
            <p>{Course_Data.fee_p2}</p>
            <button className="pay_now_btn_cd">Pay Now</button>
          </div>
          <div className="cd_divider" />
          <div className="cd_test">
            <p className="cd_t1">Curriculum Highlights/Spotlight:</p>
            <div className="cd_t_box">
              <div className="cd_p_box">
                <img src={points_logo_2} alt="icon" className="icn-1" />
                <p className="cd_t2">{Course_Data.test_p1}</p>
              </div>
              <div className="cd_p_box">
                <img src={points_logo_2} alt="icon" className="icn-1" />
                <p className="cd_t2">{Course_Data.test_p2}</p>
              </div>
              <div className="cd_p_box">
                <img src={points_logo_2} alt="icon" className="icn-1" />
                <p className="cd_t2">{Course_Data.test_p3}</p>
              </div>
              <div className="cd_p_box">
                <img src={points_logo_2} alt="icon" className="icn-1" />
                <p className="cd_t2">{Course_Data.test_p4}</p>
              </div>
              <div className="cd_p_box">
                <img src={points_logo_2} alt="icon" className="icn-1" />
                <p className="cd_t2">{Course_Data.test_p5}</p>
              </div>
              <div className="cd_p_box">
                <img src={points_logo_2} alt="icon" className="icn-1" />
                <p className="cd_t2">{Course_Data.test_p6}</p>
              </div>
            </div>
          </div>
          <div className="cd_divider" />
          <div className="cd_benifits" ref={benifitsRef}>
            <p className="cd_t1">Additional Benefits</p>
            <div className="cd_b_box">
              <div className="cd_b_container cd_p_box">
                <img src={surprise_icon} alt="icon" className="icn-1" />
                <p className="cd_t2">{Course_Data.bene_p1}</p>
              </div>
              <div className="cd_b_container cd_p_box">
                <img src={surprise_icon} alt="icon" className="icn-1" />
                <p className="cd_t2">{Course_Data.bene_p2}</p>
              </div>
              <div className="cd_b_container cd_p_box">
                <img src={surprise_icon} alt="icon" className="icn-1" />
                <p className="cd_t2">{Course_Data.bene_p3}</p>
              </div>
              <div className="cd_b_container cd_p_box">
                <img src={surprise_icon} alt="icon" className="icn-1" />
                <p className="cd_t2">{Course_Data.bene_p4}</p>
              </div>
            </div>
          </div>
          <div className="cd_divider" />
          <div className="cd_result" ref={resultsRef}>
            <p className="cd_t1">Results</p>
            {/* <img src={result_poster} alt="img"
              decoding="async"
             /> */}
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
                  className="c_d_poster r_r_img poster_2_1_h"
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
                  className="c_d_poster r_r_img poster_2_1_h"
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
                  className="c_d_poster r_r_img poster_1_1_h"
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
                  className="c_d_poster r_r_img poster_1_1_h"
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
                  className="c_d_poster r_r_img poster_1_1_h"
                />
              </div>
            </div>
          </div>
          <div className="cd_divider" />
          <div className="cd_planner">
            <p className="cd_t1">
              The Best Online Program For JEE Preparation:
            </p>
            <div className="cd_p_container">
              <div className="cd_p_box">
                <img src={class_icon} alt="icon" className="icn-1" />
                <p className="cd_t2">{Course_Data.online_program_1}</p>
              </div>
              <div className="cd_p_box">
                <img src={time_icon} alt="icon" className="icn-1" />
                <p className="cd_t2">{Course_Data.online_program_2}</p>
              </div>
              <div className="cd_p_box">
                <img src={day_icon} alt="icon" className="icn-1" />
                <p className="cd_t2">{Course_Data.online_program_3}</p>
              </div>
            </div>
          </div>
          <div className="cd_divider" />
          <div className="cd_outro cd_intro">
            <p className="cd_t2">{Course_Data.last_text}</p>
          </div>
          <div className="cd_divider" />
          <div className="btn_cd">
            <button className="pay_now_btn_cd" onClick={downloadPdf}>
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default F_Course_Details;
