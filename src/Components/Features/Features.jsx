import React from 'react';
import './Features.css';
import '../style.css';
import flexible_icon from '../Assets/flexible.png';
import class_icon from '../Assets/class-icon.png';
import certificate_icon from '../Assets/certificate.png';
import access_icon from '../Assets/access.png';
import { useInView } from 'react-intersection-observer';

function Features() {
  //
  const [viewRef, inView] = useInView({
    triggerOnce: true // Trigger only once
  });
  //
  const [viewRef1, inView1] = useInView({
    triggerOnce: true // Trigger only once
  });
  return (
    <div
      ref={viewRef1}
      className={`f_container ${inView1 ? 'i_v_about_us' : 'n_v_about_us'}`}
    >
      <div className="f_header">
        <div ref={viewRef} className={`section ${inView ? 'title_aaa' : ''}`}>
          <span className="block_aaa"></span>
          <h3>
            Why Choose Asquare<span></span>
          </h3>
        </div>
        <p className="subtitle">
          Your Pathway to Excellence in Engineering and Medical Education
        </p>
        <p className="paragraph">
          At ASQUARE, we blend expert-led training in engineering and medical
          sciences with innovative teaching methods to unlock each student's
          potential. Our focused approach, combining rigorous academics with
          critical thinking, prepares students not just for exams, but for a
          successful future in their chosen fields.
        </p>
      </div>
      <div className="features">
        <div className="feature-item">
          <img src={flexible_icon} alt="icon" className="f_icn-1" />
          <h2 className="t1">Flexible</h2>
          <p className="t2 f_t2">
            Our flexible schedules ensure education aligns with your lifestyle,
            allowing for a seamless learning experience.
          </p>
        </div>
        <div className="feature-item">
          <img src={certificate_icon} alt="icon" className="f_icn-1" />
          <h2 className="t1">Certificate</h2>
          <p className="t2 f_t2">
            ASQUARE's commitment to excellence is certified by a decade of
            producing top achievers in NEET, JEE, MHT-CET, and board
            examinations.
          </p>
        </div>
        <div className="feature-item">
          <img src={class_icon} alt="icon" className="f_icn-1" />
          <h2 className="t1">Class</h2>
          <p className="t2 f_t2">
            Our classes, covering Physics, Chemistry, and Mathematics, are a
            testament to our holistic approach to education.
          </p>
        </div>
        <div className="feature-item">
          <img src={access_icon} alt="icon" className="f_icn-1" />
          <h2 className="t1">Access</h2>
          <p className="t2 f_t2">
            ASQUARE provides unparalleled access to knowledgeable faculty,
            state-of-the-art facilities, and a united family atmosphere.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
