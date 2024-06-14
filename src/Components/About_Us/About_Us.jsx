import React from 'react';
import './About_Us.css';
import '../style.css';
import { useInView } from 'react-intersection-observer';
import Form from '../Form2/Form2';
import { Link } from 'react-router-dom';

function About_Us() {
  //
  const [viewRef, inView] = useInView({
    triggerOnce: true // Trigger only once
  });

  //
  const scrollToTop = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <div className="a_u_conatiner">
      <div className="a_u_conatiner_left">
        <div
          ref={viewRef}
          className={`section ${inView ? 'title_aaa about_us_title' : ''}`}
        >
          <span className="block_aaa"></span>
          <h3>
            About Us<span></span>
          </h3>
        </div>
        <p className="subtitle">Our Journey, Mission, and Values</p>
        <p className="t2">
          Discover our institute's inspiring journey, unwavering mission, and
          the core values that drive our commitment to excellence in education.
        </p>
        <Link to={'/faculty'} onClick={scrollToTop}>
          <button className="button">Faculty</button>
        </Link>
      </div>
      <div className="a_u_conatiner_right">
        <Form />
      </div>
    </div>
  );
}

export default About_Us;
