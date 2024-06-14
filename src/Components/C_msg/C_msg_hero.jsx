import React from 'react';
import '../style.css';
import { useInView } from 'react-intersection-observer';
import Form from '../Form2/Form2';
import { Link } from 'react-router-dom';

function C_msg_hero() {
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
            Mrs. Arpita Bharti<span></span>
          </h3>
        </div>
        <p className="subtitle">Dream, Learn, Achieve</p>
        <p className="t2">
          Embark on success with ASQUARE Medical & IIT-JEE Academy in Pune. Let
          your hard work be the jet fuel propelling you towards academic
          achievement. ASQUARE is not just an institute; it's a dream, a synonym
          for success. Join us on a transformative journey, where dreams take
          flight and success becomes a reality. Enroll today for an
          extraordinary academic experience. - Mrs. Arpita Bharti'
        </p>
      </div>
      <div className="a_u_conatiner_right">
        <Form />
      </div>
    </div>
  );
}

export default C_msg_hero;
