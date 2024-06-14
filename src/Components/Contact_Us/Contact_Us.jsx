import React from 'react';
import './Contact_Us.css';
import '../style.css';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import Form from '../Form2/Form2';

function Contact_Us() {
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
          Contact Us<span></span>
          </h3>
        </div>
        <p className="subtitle">Reach Out to ASQUARE Institute</p>
        <p className="t2">
        We welcome your questions, inquiries, and feedback. Feel free to reach out to our dedicated team for assistance, information, or any assistance you may need.
        </p>
        <Link to={'/about-us/'} onClick={scrollToTop}>
          <button className="button">About Us</button>
        </Link>
      </div>
      <div className="a_u_conatiner_right">
        <Form />
      </div>
    </div>
    // <div className="contact_us">
    //   <div className="a_u_left">
    //     <div ref={viewRef} className={`section ${inView ? 'title_aaa' : ''}`}>
    //       <span className="block_aaa"></span>
    //       <h3>
    //         Contact Us<span></span>
    //       </h3>
    //     </div>
    //     <p className="subtitle a_u_subtitle">Reach Out to ASQUARE Institute</p>
    //     <p className="text a_u_text">
    //       We welcome your questions, inquiries, and feedback. Feel free to reach
    //       out to our dedicated team for assistance, information, or any
    //       assistance you may need
    //     </p>
    //     <button className="button">Enquiry Form</button>
    //   </div>
    //   <div className="a_u_right">
    //     <img src={a_u_hero_img} alt="img" />
    //   </div>
    // </div>
  );
}

export default Contact_Us;
