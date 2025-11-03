import React from 'react';
import './blog_header.css';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import img from '../../Assets/home page illustrator_2.png';

function BlogHeader() {
  const [viewRef1, inView1] = useInView({
    triggerOnce: true // Trigger only once
  });

  const scrollToTop = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <div className="a_u_conatiner">
      <div className="a_u_conatiner_left">
        <div
          ref={viewRef1}
          className={`section ${inView1 ? 'title_aaa about_us_title' : ''}`}
        >
          <span className="block_aaa"></span>
          <h3>
            Blog<span></span>
          </h3>
        </div>
        <p className="subtitle">Inspiring Excellence</p>
        <p className="t2">
          Explore insights, tips, and success stories on our blog, guiding you
          to academic excellence and beyond.
        </p>
      </div>
      <div className="a_u_conatiner_right a_u_conatiner_right_b_h">
        <img src={img} alt="img" />
      </div>
    </div>
  );
}

export default BlogHeader;
