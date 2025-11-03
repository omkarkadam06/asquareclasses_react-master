import React from 'react';
import '../style.css';
import './Courses_pg_hero.css';
import { useInView } from 'react-intersection-observer';
import Form from '../Form2/Form2';

function About_Us() {
  //
  const [viewRef, inView] = useInView({
    triggerOnce: true // Trigger only once
  });

  return (
    <div className="a_u_conatiner s_p_hero">
      <div className="a_u_conatiner_left">
        <div
          ref={viewRef}
          className={`section ${inView ? 'title_aaa about_us_title' : ''}`}
        >
          <span className="block_aaa"></span>
          <h3>
            Courses<span></span>
          </h3>
        </div>
        <p className="subtitle">Our Journey, Mission, and Values</p>
        <p className="t2">
          Discover our institute's inspiring journey, unwavering mission, and
          the core values that drive our commitment to excellence in education.
        </p>
      </div>
      <div className="a_u_conatiner_right">
        <Form />
      </div>
    </div>
  );
}

export default About_Us;
