import React from 'react';
import '../style.css';
import { useInView } from 'react-intersection-observer';
import Form from '../Form2/Form2';
import { Link } from 'react-router-dom';

function Faculty_hero() {
  //
  const scrollToTop = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  //
  const [viewRef, inView] = useInView({
    triggerOnce: true // Trigger only once
  });

  return (
    <div className="a_u_conatiner">
      <div className="a_u_conatiner_left">
        <div
          ref={viewRef}
          className={`section ${inView ? 'title_aaa about_us_title' : ''}`}
        >
          <span className="block_aaa"></span>
          <h3>
            Faculty<span></span>
          </h3>
        </div>
        <p className="subtitle">Our Journey, Mission, and Values</p>
        <p className="t2">
          Discover our institute's inspiring journey, unwavering mission, and
          the core values that drive our commitment to excellence in education.
        </p>
        <Link to={'/course'} onClick={scrollToTop}>
          <button className="button">Courses</button>
        </Link>
      </div>
      <div className="a_u_conatiner_right">
        <Form />
      </div>
    </div>
  );
}

export default Faculty_hero;
