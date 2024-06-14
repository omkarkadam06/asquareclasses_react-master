import React from 'react';
import './About.css';
import '../style.css';
import about_1 from '../Assets/teacher-img-2-a.png';
import about_2 from '../Assets/s-1a.png';
import point_icon_3 from '../Assets/point-icon-3.png';
import points_icon_4 from '../Assets/points-icon-4.png';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

function About() {
  //
  const [viewRef, inView] = useInView({
    triggerOnce: true // Trigger only once
  });
  //
  const [viewRef1, inView1] = useInView({
    triggerOnce: true // Trigger only once
  });
  const scrollToTop = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <div
      ref={viewRef1}
      className={`about_us flex-centre-bet ${
        inView1 ? 'i_v_about_us' : 'n_v_about_us'
      }`}
    >
      <div className="about_us_p1">
        <img src={about_1} className="about_us_img_1"></img>
        <div className="about_us_p1_details">
          <div>
            <img src={point_icon_3} className="icn-1"></img>
            <p className="t2">14 years of excellence</p>
          </div>
          <div>
            <img src={point_icon_3} className="icn-1"></img>
            <p className="t2">Best results in pune</p>
          </div>
        </div>
      </div>
      <div className="about_us_p2">
        <div
          ref={viewRef}
          className={`section ${inView ? 'title_aaa about_us_title' : ''}`}
        >
          <span className="block_aaa"></span>
          <h3>
            About Us<span></span>
          </h3>
        </div>
        <p className="subtitle about_subtitle">
          Discover Our Inspiring Educational Journey
        </p>
        <div>
          <div>
            <img src={points_icon_4} className="icn-1"></img>
            <p className="t2 about_t2">Driven by IIT'ians, NIT'ians and Dr's</p>
          </div>
          <div>
            <img src={points_icon_4} className="icn-1"></img>
            <p className="t2 about_t2">Inspiring Lifelong Learning Journeys</p>
          </div>
          <div>
            <img src={points_icon_4} className="icn-1"></img>
            <p className="t2 about_t2">Commitment to Academic Excellence</p>
          </div>
        </div>
        <Link to={'/about-us/'} onClick={scrollToTop}>
          <button className="button">Know More</button>
        </Link>
      </div>
      <div className="about_us_p3">
        <img src={about_2}></img>
      </div>
    </div>
  );
}

export default About;
