import React from 'react';
import '../style.css';
import { useInView } from 'react-intersection-observer';
import Form from '../Form2/Form2';
import { Link } from 'react-router-dom';

function D_msg_() {
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
            Mr. Ajit Anupam<span></span>
          </h3>
        </div>
        <p className="subtitle">Dream, Learn, Achieve</p>
        <p className="t2">
          Join Mr. Ajit Anupam at ASQUARE, Pune's educational powerhouse.
          Unleash your potential in engineering and medical fields with our
          proven success, expert faculty, and cutting-edge resources. Your
          journey to success begins here, where the impossible becomes 'I'm
          possible.'
        </p>
      </div>
      <div className="a_u_conatiner_right">
        <Form />
      </div>
    </div>
  );
}

export default D_msg_;
