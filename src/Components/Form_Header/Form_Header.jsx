import React from 'react';
import './Form_Header.css';
import '../style.css';
import form_icon from '../Assets/form-icon.png';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

function Form_Header() {
  //
  const [viewRef, inView] = useInView({
    triggerOnce: true // Trigger only once
  });

  //
  const scrollToTop = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <div className="form_header">
      <div className="f_h_left">
        <div ref={viewRef} className={`section ${inView ? 'title_aaa' : ''}`}>
          <span className="block_aaa"></span>
          <h3>
            Form<span></span>
          </h3>
        </div>
        <p className="subtitle f_h_subtitle">Reach Out to ASQUARE Institute</p>
        <p className="text f_h_text">
          We welcome your questions, inquiries, and feedback. Feel free to reach
          out to our dedicated team for assistance, information, or any
          assistance you may need
        </p>
        <Link to={'/about'} onClick={scrollToTop}>
          <button className="button">About Us</button>
        </Link>
      </div>
      <div className="f_h_right">
        <img src={form_icon} alt="img" />
      </div>
    </div>
  );
}

export default Form_Header;
