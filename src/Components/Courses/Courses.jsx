import React, { useState } from 'react';
import './Courses.css';
import '../style.css';
import { Course_Data, subjects_name } from './Courses_Data';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

function Courses() {
  const scrollToTop = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };
  //
  const [viewRef, inView] = useInView({
    triggerOnce: true // Trigger only once
  });
  //
  const [viewRef1, inView1] = useInView({
    triggerOnce: true // Trigger only once
  });

  //
  let [index, setIndex] = useState(0);

  function card(details_data) {
    return (
      <div className={`card {inView1 ? 'i_v_about_us' : 'n_v_about_us'}`}
        key={details_data.id}>
          <Link to={details_data.linkto}>
        <div className="imageboxscou">
          <img
            src={details_data.student_img}
            alt="img"
            className="card_img"
            decoding="async"
          />
          {/* <div className="clickherebtn">
            <h3>Click Here</h3>
          </div> */}
        </div>
        <div className="card_content">
          <div className="card_top">
            <div className="card_top_containers">
              <p className="t3">{details_data.status}</p>
            </div>
            <div className="card_top_containers">
              <p className="t3">{details_data.target_year}</p>
            </div>
            <div className="card_top_containers">
              <p className="t3">{details_data.class}</p>
            </div>
          </div>
          <div className="card_bottom">
            {/* <p className="t1">{details_data.heading}</p>
            <p className="t2">{details_data.sub_heading}</p> */}
            <Link to={details_data.linkto}>
              <button className="course_card_btn" onClick={scrollToTop}>
                Know More
              </button>
            </Link>
          </div>
        </div>
        </Link>
      </div>
    );
  }

  return (
    <div className="courses">
      <div className="courses_upper">
        <div ref={viewRef} className={`section ${inView ? 'title_aaa' : ''}`}>
          <span className="block_aaa"></span>
          <h3>
            Courses<span></span>
          </h3>
        </div>
        <p className="subtitle">
          Unlocking Opportunities with Comprehensive Course Offerings
        </p>
      </div>
      <div className="courses_cards">
          <div className="flex-centre-bet subject_list">
            {subjects_name.map((subject_data) => (
              <li
                key={subject_data.id}
                btn_index={subject_data.id}
                onClick={() => setIndex(subject_data.id - 1)}
                className={
                  index == subject_data.id - 1
                    ? 'subject_selected sub_btn'
                    : 'subject_not_selected sub_btn'
                }
              >
                {subject_data.subject}
              </li>
            ))}
          </div>
          <div
            ref={viewRef1}
            className={`card_container ${
              inView1 ? 'i_v_about_us' : 'n_v_about_us'
            }`}
          >
            {Course_Data[index].map(card)}
          </div>
      </div>
    </div>
  );
}

export default Courses;
