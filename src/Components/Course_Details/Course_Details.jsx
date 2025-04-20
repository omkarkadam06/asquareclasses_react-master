import React, { useState, useRef, useEffect } from 'react';
import './Course_Details.css';
import '../style.css';
import courses_data_api from './Course_Details_Data';
import points_logo_1 from '../Assets/points-icon-3.png';
import points_logo_2 from '../Assets/points-icon-4.png';
import envi_4 from '../Assets/courseImg-1.jpg';
import class_icon from '../Assets/class-icon.png';
import day_icon from '../Assets/day-icon.png';
import surprise_icon from '../Assets/surprise-logo.png';
import test_icon from '../Assets/test-icon.png';
import time_icon from '../Assets/time-icon.png';
import { useInView } from 'react-intersection-observer';
import arrowlogo from '../Assets/arrow-logo-2.png';
import Course_hero from '../Course_Hero/Course_hero';
import MobileForm from '../../Components/Mobileform/MobileForm.jsx';


function Course_Details({ courseName, className }) {
  const handleDownload = () => {
    // Replace 'https://example.com/your/document.docx' with the actual absolute URL to your .docx file
    const absoluteFilePath =
      'https://drive.google.com/file/d/1kxt8Ber4OTuH2Ok9zcFKQxxowf1G-N5Y/view?usp=drive_link';

    // Create an anchor element
    const a = document.createElement('a');
    a.href = absoluteFilePath;
    a.download = 'your_document_name.docx'; // Set the desired file name

    // Append the anchor to the body
    document.body.appendChild(a);

    // Programmatically trigger a click event on the anchor
    a.click();

    // Remove the anchor from the body
    document.body.removeChild(a);
  };

  //
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 6;

  //
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1)% totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + totalSlides)% totalSlides);
  };

  const getSlideStyle = () => {
    return {
      transform: `translateX(-${currentSlide * 100}%)`
    };
  };

  //

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
  // const benifitsRef = useRef(null);
  const courseplannerRef = useRef(null);
  const resultsRef = useRef(null);

  const div_series = [
    intoductionRef,
    descriptionRef,
    feesRef,
    // benifitsRef,
    courseplannerRef,
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
    { sub: 'Class 11th', id: 1, linkName: `11th` },
    { sub: 'Class 12th', id: 2, linkName: `12th` },
    { sub: '12th Pass', id: 3, linkName: `12th-pass` },
    { sub: 'Crash Course', id: 4, linkName: `crash-course` }
  ];

  const list3 = [
    { sub: 'Introduction', id: 1 },
    { sub: 'Description', id: 2 },
    { sub: 'Fees Structure', id: 3 },
    { sub: 'Course Planner', id: 4 },
    { sub: 'Results', id: 5 },
  ];

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
    <>
      <Course_hero courseName={courseName} className={className} />
      <MobileForm />
      <div className="course_details">
        <div className="cd_container">
          <div className="cd_p1 course-tableBg">
            <div
              ref={viewRef}
              className={`section ${inView ? 'title_aaa' : ''}`}
            >
              <span className="block_aaa"></span>
              <h3 className='course_detailTitle'>
                Course Detail
              </h3>
            </div>
          </div>
          <div className="sticky-div_c_d cd_p3 stickyContent-bar">
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
          <div className="cd_p4 course-mainTable">
            <div className="cd_intro course_contentBG" ref={intoductionRef}>
              <p className="cd_t1 course_conten_title">
                {
                  courses_data_api[courseName - 1][className - 1]
                    .introduction_heading
                }
              </p>
              <p className="cd_t2">
                {
                  courses_data_api[courseName - 1][className - 1]
                    .introduction_paragraph
                }
              </p>
            </div>
            <div className="cd_divider" />
            <div className="cd_description course_contentBG" ref={descriptionRef}>
              <p className="cd_t1 course_conten_title">
                {
                  courses_data_api[courseName - 1][className - 1]
                    .course_description_heading
                }
              </p>
              <p className="cd_t2">
                {
                  courses_data_api[courseName - 1][className - 1]
                    .course_description_paragraph_1
                }
              </p>
              <div
                className="cd_p_box"
                style={{
                  display:
                    courses_data_api[courseName - 1][className - 1]
                      .course_description_paragraph_phase1 == '__'
                      ? 'none'
                      : 'flex'
                }}
              >
                <img src={points_logo_1} alt="icon" className="icn-1" />
                <p className="cd_t2">
                  {' '}
                  <span style={{ fontWeight: 600 }}>Phase 1 :-</span>
                  {
                    courses_data_api[courseName - 1][className - 1]
                      .course_description_paragraph_phase1
                  }
                </p>
              </div>
              <div
                className="cd_p_box"
                style={{
                  display:
                    courses_data_api[courseName - 1][className - 1]
                      .course_description_paragraph_phase2 == '__'
                      ? 'none'
                      : 'flex'
                }}
              >
                <img src={points_logo_1} alt="icon" className="icn-1" />
                <p className="cd_t2">
                  {' '}
                  <span style={{ fontWeight: 600 }}>Phase 2 :-</span>{' '}
                  {
                    courses_data_api[courseName - 1][className - 1]
                      .course_description_paragraph_phase2
                  }
                </p>
              </div>
              <p className="cd_t2">
                {
                  courses_data_api[courseName - 1][className - 1]
                    .course_description_paragraph_2
                }
              </p>
            </div>
            <div className="cd_divider" />
            <div className="cd_intro cd_why_asq course_contentBG">
              <p className="cd_t1 course_conten_title">
                {
                  courses_data_api[courseName - 1][className - 1]
                    .why_asquare_heading
                }
              </p>
              <p className="cd_t2">
                {
                  courses_data_api[courseName - 1][className - 1]
                    .why_asquare_paragraph
                }
              </p>
            </div>
            <div className="cd_divider" />
            <div className="cd_intro Adm-Prep course_contentBG">
              <p className="cd_t1 course_conten_title">
                {
                  courses_data_api[courseName - 1][className - 1]
                    .Adm_Pre_heading
                }
              </p>
              <p className="cd_t2">
                {
                  courses_data_api[courseName - 1][className - 1]
                    .Adm_Pre_paragraph
                }
              </p>
            </div>
            <div className="cd_divider" />
            <div className="cd_teaching course_contentBG">
              <div className="cd_t_top methodology-box">
                <p className="cd_t1">
                  {
                    courses_data_api[courseName - 1][className - 1]
                      .teaching_methologies_heading
                  }
                </p>
                <img src={envi_4} alt="icon" className="icn-1 methodology-img" />
              </div>
              <div className="cd_t_bottom">
                <div className="cd_p_box">
                  <img src={points_logo_2} alt="icon" className="icn-1" />
                  <p className="cd_t2">
                    {
                      courses_data_api[courseName - 1][className - 1]
                        .teaching_methologies_point_1
                    }
                  </p>
                </div>
                <div className="cd_p_box">
                  <img src={points_logo_2} alt="icon" className="icn-1" />
                  <p className="cd_t2">
                    {
                      courses_data_api[courseName - 1][className - 1]
                        .teaching_methologies_point_2
                    }
                  </p>
                </div>
              </div>
            </div>
            <div className="cd_divider" />
            <div className="cd_envi course_contentBG">
              <p className="cd_t1 course_conten_title">Class Students and Environment</p>
              <div>
                <img
                  src={courses_data_api[courseName - 1][className - 1].image_1}
                  alt="img"
                  onClick={() =>
                    handleClick(
                      courses_data_api[courseName - 1][className - 1].image_1
                    )
                  }
                />
                <img
                  src={courses_data_api[courseName - 1][className - 1].image_2}
                  alt="img"
                  onClick={() =>
                    handleClick(
                      courses_data_api[courseName - 1][className - 1].image_2
                    )
                  }
                />
                <img
                  src={courses_data_api[courseName - 1][className - 1].image_3}
                  alt="img"
                  onClick={() =>
                    handleClick(
                      courses_data_api[courseName - 1][className - 1].image_3
                    )
                  }
                />
                <img
                  src={courses_data_api[courseName - 1][className - 1].image_4}
                  alt="img"
                  onClick={() =>
                    handleClick(
                      courses_data_api[courseName - 1][className - 1].image_4
                    )
                  }
                />
              </div>
              {showImage && (
                <div className="image-modal">
                  <div className="modal-content">
                    <img
                      src={selectedImage}
                      alt="Selected"
                      className="modal-image"
                    />
                    <button
                      className="close-btn subtitle"
                      onClick={handleClose}
                    >
                      &#10008;
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div className="cd_divider" />
            <div className="cd_test course_contentBG">
              <p className="cd_t1 course_conten_title">
                {
                  courses_data_api[courseName - 1][className - 1]
                    .curriculum_highlights_heading
                }
              </p>
              <div className="cd_t_box">
                <div className="cd_p_box programme-list">
                  {/* <img src={points_logo_2} alt="icon" className="icn-1" /> */}
                  <ul>
                    <li className="cd_t2">
                    {
                      courses_data_api[courseName - 1][className - 1]
                        .curriculum_highlights_point_1
                    }
                    </li>
                    <li className="cd_t2">
                    {
                      courses_data_api[courseName - 1][className - 1]
                        .curriculum_highlights_point_2
                    }
                    </li>
                  </ul>
                 
                </div>
                <div className="cd_p_box programme-list">
                  {/* <img src={points_logo_2} alt="icon" className="icn-1" /> */}
                  <ul>
                    <li className="cd_t2">
                    {
                      courses_data_api[courseName - 1][className - 1]
                        .curriculum_highlights_point_3
                    }
                    </li>
                    <li className="cd_t2">
                    {
                      courses_data_api[courseName - 1][className - 1]
                        .curriculum_highlights_point_4
                    }
                    </li>
                  </ul>
                </div>
                <div className="cd_p_box programme-list">
                  {/* <img src={points_logo_2} alt="icon" className="icn-1" /> */}
                  <ul>
                    <li className="cd_t2">
                    {
                      courses_data_api[courseName - 1][className - 1]
                        .curriculum_highlights_point_5
                    }
                    </li>
                    <li className="cd_t2">
                    {
                      courses_data_api[courseName - 1][className - 1]
                        .curriculum_highlights_point_6
                    }
                    </li>
                  </ul>
                  
                </div>
                <div className="cd_p_box programme-list">
                  {/* <img src={points_logo_2} alt="icon" className="icn-1" /> */}
                  <ul>
                    <li className="cd_t2">
                    {
                      courses_data_api[courseName - 1][className - 1]
                        .curriculum_highlights_point_7
                    }
                    </li>
                    <li className="cd_t2">
                    {
                      courses_data_api[courseName - 1][className - 1]
                        .curriculum_highlights_point_8
                    }
                    </li>
                  </ul>
                </div>
                <div className="cd_p_box programme-list">
                  {/* <img src={points_logo_2} alt="icon" className="icn-1" /> */}
                  <ul>
                    <li className="cd_t2">
                    {
                      courses_data_api[courseName - 1][className - 1]
                        .curriculum_highlights_point_9
                    }
                    </li>
                    <li className="cd_t2">
                    {
                      courses_data_api[courseName - 1][className - 1]
                        .curriculum_highlights_point_10
                    }
                    </li>
                  </ul>
                </div>
                <div className="cd_p_box programme-list">
                  {/* <img src={points_logo_2} alt="icon" className="icn-1" /> */}
                  <ul>
                    <li className="cd_t2">
                    {
                      courses_data_api[courseName - 1][className - 1]
                        .curriculum_highlights_point_11
                    }
                    </li>
                    <li className="cd_t2">
                    {
                      courses_data_api[courseName - 1][className - 1]
                        .curriculum_highlights_point_12
                    }
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="cd_divider" />
            <div className="cd_planner course_contentBG ref={courseplannerRef}">
              <p className="cd_t1 course_conten_title">
                {
                  courses_data_api[courseName - 1][className - 1]
                    .course_planner_heading
                }
              </p>
              <div
                className="cd_p_container"
                style={{
                  display: 'flex',
                  flexDirection: courseName - 1 == 3 ? 'row' : 'column',
                  flexWrap: 'wrap',
                  justifyContent: 'center'
                }}
              >
                <div className="cd_p_box">
                  <img src={class_icon} alt="icon" className="icn-1" />
                  <p className="cd_t2">
                    {
                      courses_data_api[courseName - 1][className - 1]
                        .course_planner_point_1
                    }
                  </p>
                </div>
                <div className="cd_p_box">
                  <img src={time_icon} alt="icon" className="icn-1" />
                  <p className="cd_t2">
                    {
                      courses_data_api[courseName - 1][className - 1]
                        .course_planner_point_2
                    }
                  </p>
                </div>
                <div className="cd_p_box">
                  <img src={day_icon} alt="icon" className="icn-1" />
                  <p className="cd_t2">
                    {
                      courses_data_api[courseName - 1][className - 1]
                        .course_planner_point_3
                    }
                  </p>
                </div>
                <div className="cd_p_box">
                  <img src={test_icon} alt="icon" className="icn-1" />
                  <p className="cd_t2">
                    {
                      courses_data_api[courseName - 1][className - 1]
                        .course_planner_point_4
                    }
                  </p>
                </div>
                <div className="cd_p_box">
                  <img src={test_icon} alt="icon" className="icn-1" />
                  <p className="cd_t2">
                    {
                      courses_data_api[courseName - 1][className - 1]
                        .course_planner_point_5
                    }
                  </p>
                </div>
              </div>
            </div>
            <div
              className="cd_divider"
              style={{
                display:
                  courses_data_api[courseName - 1][className - 1]
                    .table_heading == '__'
                    ? 'none'
                    : 'flex'
              }}
            />
            <div
              className="cd_result"
              ref={resultsRef}
              style={{
                display:
                  courses_data_api[courseName - 1][className - 1]
                    .table_heading == '__'
                    ? 'none'
                    : 'flex'
              }}
            >
              <p className="cd_t1">
                {courses_data_api[courseName - 1][className - 1].table_heading}
              </p>
              <div className="slider active h_c_1">
                <img
                  src={
                    courses_data_api[courseName - 1][className - 1].table_img
                  }
                  alt="img"
                  className="c_d_poster r_r_img poster_2_1_h"
                  onClick={() =>
                    handleClick(
                      courses_data_api[courseName - 1][className - 1].table_img
                    )
                  }
                  style={{
                    width: '100%',
                    cursor: 'pointer',
                    height: 'fit-content'
                  }}
                />
              </div>
            </div>
            <div className="cd_divider" />
            <div className="cd_fee bg_color" ref={feesRef}>
              <p className="cd_t1">
                {
                  courses_data_api[courseName - 1][className - 1]
                    .course_fee_heading
                }
              </p>
              <p>
                {
                  courses_data_api[courseName - 1][className - 1]
                    .course_fee_point_1
                }
              </p>
              <p style={{ display: 'flex', flexDirection: 'column' }}>
                {
                  courses_data_api[courseName - 1][className - 1]
                    .course_fee_point_2
                }
                <span className="cd_fee_p_span">(Gst Excluded)</span>
              </p>
              <button className="pay_now_btn_cd">Pay Now</button>
            </div>
            <div className="cd_divider" />
            
            <div className="cd_result"
             ref={resultsRef}
             >
              <p className="cd_t1">
                {courses_data_api[courseName - 1][className - 1].result_heading}
              </p>
              {/* <img src={result_poster} alt="img" /> */}
              <div
                className="result_right"
                style={{ display: 'flex', flexDirection: 'column', gap: '2vw' }}
              >
                <div
                  className={
                    currentSlide === 0 ? 'slider active h_c_1' : 'slider h_c_1'
                  }
                >
                  <img
                    src={
                      courses_data_api[courseName - 1][className - 1]
                        .result_poster_1
                    }
                    alt="img"
                    className="c_d_poster r_r_img poster_2_1_h"
                    onClick={() =>
                      handleClick(
                        courses_data_api[courseName - 1][className - 1]
                          .result_poster_1
                      )
                    }
                    style={{ cursor: 'pointer' }}
                  />
                </div>
                <div
                  className={
                    currentSlide === 1 ? 'slider active h_c_1' : 'slider h_c_1'
                  }
                >
                  <img
                    src={
                      courses_data_api[courseName - 1][className - 1]
                        .result_poster_2
                    }
                    alt="img"
                    className="c_d_poster r_r_img poster_2_1_h"
                    onClick={() =>
                      handleClick(
                        courses_data_api[courseName - 1][className - 1]
                          .result_poster_2
                      )
                    }
                  />
                </div>
                <div
                  className={
                    currentSlide === 2 ? 'slider active h_c_1' : 'slider h_c_1'
                  }
                >
                  <img
                    src={
                      courses_data_api[courseName - 1][className - 1]
                        .result_poster_3
                    }
                    alt="img"
                    className="c_d_poster r_r_img poster_2_1_h"
                    onClick={() =>
                      handleClick(
                        courses_data_api[courseName - 1][className - 1]
                          .result_poster_3
                      )
                    }
                  />
                </div>
                <div
                  className={
                    currentSlide === 3 ? 'slider active h_c_1' : 'slider h_c_1'
                  }
                >
                  <img
                    src={
                      courses_data_api[courseName - 1][className - 1]
                        .result_poster_4
                    }
                    alt="img"
                    className="c_d_poster r_r_img poster_2_1_h"
                    onClick={() =>
                      handleClick(
                        courses_data_api[courseName - 1][className - 1]
                          .result_poster_4
                      )
                    }
                  />
                </div>
                <div
                  className={
                    currentSlide === 4 ? 'slider active h_c_1' : 'slider h_c_1'
                  }
                >
                  <img
                    src={
                      courses_data_api[courseName - 1][className - 1]
                        .result_poster_5
                    }
                    alt="img"
                    className="c_d_poster r_r_img poster_2_1_h"
                    onClick={() =>
                      handleClick(
                        courses_data_api[courseName - 1][className - 1]
                          .result_poster_5
                      )
                    }
                  />
                </div>
                <div
                  className={
                    currentSlide === 5 ? 'slider active h_c_1' : 'slider h_c_1'
                  }
                >
                  <img
                    src={
                      courses_data_api[courseName - 1][className - 1]
                        .result_poster_6
                    }
                    alt="img"
                    className="c_d_poster r_r_img poster_2_1_h"
                    onClick={() =>
                      handleClick(
                        courses_data_api[courseName - 1][className - 1]
                          .result_poster_6
                      )
                    }
                  />
                </div>
                
                <div>
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
            </div>
            <div className="cd_divider" />
            <div className="cd_benifits" 
            // ref={benifitsRef}
            >
              <p className="cd_t1">
                {
                  courses_data_api[courseName - 1][className - 1]
                    .additional_benifits_heading
                }
              </p>
              <div className="cd_b_box">
                <div className="cd_b_container cd_p_box">
                  <img src={surprise_icon} alt="icon" className="icn-1" />
                  <p className="cd_t2">
                    {
                      courses_data_api[courseName - 1][className - 1]
                        .additional_benifits_point_1
                    }
                  </p>
                </div>
                <div className="cd_b_container cd_p_box">
                  <img src={surprise_icon} alt="icon" className="icn-1" />
                  <p className="cd_t2">
                    {
                      courses_data_api[courseName - 1][className - 1]
                        .additional_benifits_point_2
                    }
                  </p>
                </div>
                <div className="cd_b_container cd_p_box">
                  <img src={surprise_icon} alt="icon" className="icn-1" />
                  <p className="cd_t2">
                    {
                      courses_data_api[courseName - 1][className - 1]
                        .additional_benifits_point_3
                    }
                  </p>
                </div>
                <div className="cd_b_container cd_p_box">
                  <img src={surprise_icon} alt="icon" className="icn-1" />
                  <p className="cd_t2">
                    {
                      courses_data_api[courseName - 1][className - 1]
                        .additional_benifits_point_4
                    }
                  </p>
                </div>
              </div>
            </div>
            {showImage && (
              <div className="image-modal">
                <div className="modal-content">
                  <img
                    src={selectedImage}
                    alt="Selected"
                    className="modal-image"
                  />
                  <button className="close-btn subtitle" onClick={handleClose}>
                    &#10008;
                  </button>
                </div>
              </div>
            )}
            <div
              className="cd_divider"
              style={{
                display:
                  courses_data_api[courseName - 1][className - 1]
                    .online_program_heading == '__'
                    ? 'none'
                    : 'block'
              }}
            />
            <div
              className="cd_planner"
              style={{
                display:
                  courses_data_api[courseName - 1][className - 1]
                    .online_program_heading == '__'
                    ? 'none'
                    : 'flex'
              }}
            >
              <p className="cd_t1">
                {
                  courses_data_api[courseName - 1][className - 1]
                    .online_program_heading
                }
              </p>
              <div className="cd_p_container">
                <div className="cd_p_box">
                  <img src={class_icon} alt="icon" className="icn-1" />
                  <p className="cd_t2">
                    {
                      courses_data_api[courseName - 1][className - 1]
                        .online_program_point_1
                    }
                  </p>
                </div>
                <div className="cd_p_box">
                  <img src={time_icon} alt="icon" className="icn-1" />
                  <p className="cd_t2">
                    {
                      courses_data_api[courseName - 1][className - 1]
                        .online_program_point_2
                    }
                  </p>
                </div>
                <div className="cd_p_box">
                  <img src={day_icon} alt="icon" className="icn-1" />
                  <p className="cd_t2">
                    {
                      courses_data_api[courseName - 1][className - 1]
                        .online_program_point_3
                    }
                  </p>
                </div>
              </div>
            </div>
            <div className="cd_divider" />
            <div className="cd_outro cd_intro">
              <p className="cd_t2">
                {courses_data_api[courseName - 1][className - 1].short_message}
              </p>
            </div>
            <div className="cd_divider" />
            <div className="btn_cd">
              <button className="pay_now_btn_cd" onClick={handleDownload}>
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Course_Details;
