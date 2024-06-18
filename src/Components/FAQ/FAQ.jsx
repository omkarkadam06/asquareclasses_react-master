import React, { useState } from 'react';
import Arrow from '../Assets/point-icon.png';
import Data from './Data';
import './FAQ.css';
import '../style.css';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

function FAQ() {
  //
  const [viewRef, inView] = useInView({
    triggerOnce: true // Trigger only once
  });

  // Initialize the first item as active (1)
  const [div_display, set_div_display] = useState([1, 0, 0, 0, 0]);

  function update_div(id) {
    const updated_div_display = div_display.map((value, index) =>
      index === id - 1 ? 1 - value : 0
    );

    // Update the state with the new array
    set_div_display(updated_div_display);
  }

  function questions(data, index) {
    return (
      <div key={index} onClick={() => update_div(data.id)}>
        <li className="t1 faq_que">{data.question}</li>
        <img src={Arrow} alt="icon" className="icn-1" />
        <p
          className="t2 answer"
          style={{ display: div_display[data.id - 1] === 1 ? 'block' : 'none' }}
        >
          {data.answer}
        </p>
      </div>
    );
  }

  return (
    <div className="faq">
      <div className="faq_left">
        <div ref={viewRef} className={`section ${inView ? 'title_aaa' : ''}`}>
          <span className="block_aaa"></span>
          <h3>
            Frequently Asked Questions<span></span>
          </h3>
        </div>
        <p className="subtitle faq_subtitle">
          Answers to Common Inquiries for a Smooth Experience with Us
        </p>
        <button className="button">
          <Link className="button" to={'/contact-information/'}>
            Contact Us
          </Link>
        </button>
      </div>
      <div className="faq_right">{Data.map(questions)}</div>
    </div>
  );
}

export default FAQ;
