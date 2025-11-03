import React from 'react';
import '../History/History.css';
import '../style.css';
import history_illustrator from '../Assets/home page illustrator_3.png';
import { useInView } from 'react-intersection-observer';

function About_para() {
  //
  const [viewRef, inView] = useInView({
    triggerOnce: true // Trigger only once
  });
  return (
    <div className="history">
      <div
        ref={viewRef}
        className={`section ${inView ? 'title_aaa about_us_title' : ''}`}
      >
        <span className="block_aaa"></span>
        <h3>
          Asquare Institute<span></span>
        </h3>
      </div>
      <p className="subtitle">A Legacy of Educational Excellence</p>
      <div className="h_content">
        <p className="paragraph">
          Welcome to ASQUARE Classes, Pune's premier coaching institute for
          IIT-JEE, JEE (Main & Advance) Pre-Medical, NEET-UG, CET and career
          foundation. Known for stellar results, we focus on building a robust
          knowledge foundation and fostering Determination, Integrity, and
          Holistic Learning. ASQUARE is not just an institution but a dedicated
          family committed to students' success. With highly qualified faculties
          and state-of-the-art facilities, we provide a transformative learning
          experience. Join us at ASQUARE for a celebrated journey where dreams
          find unity and success is the destination.
          <br />
          At ASQUARE in Pune, our unwavering commitment is to cultivate the
          perfect blend of INTELLIGENCE + CHARACTER in our aspirants, as we
          believe this is the true essence of education. We are dedicated to
          extracting the best from each individual, empowering them to secure
          their life's ambitions, and, most importantly, delivering the miracle
          of success, all while emphasizing that this success lies within their
          own hands. ASQUARE has evolved to become the very synonym of success,
          and we welcome you to join us on this transformative journey toward
          personal and academic excellence.
        </p>
        <img src={history_illustrator} alt="img" />
      </div>
    </div>
  );
}

export default About_para;
