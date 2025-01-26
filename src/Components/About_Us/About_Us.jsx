import React from 'react';
import './About_Us.css';
import '../style.css';
import { useInView } from 'react-intersection-observer';
import Form from '../Form2/Form2';
import { Link } from 'react-router-dom';
import banner1 from '../Assets/slider/asquare-banner.webp'

function About_Us() {
  //
  const [viewRef, inView] = useInView({
    triggerOnce: true // Trigger only once
  });

  //
  const scrollToTop = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <div className="a_u_conatiner inner-banner bannerSlider" style={{ backgroundImage: `url('${banner1}')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className="a_u_conatiner_left col-lg-8">
          <div className="course-title d-flex">
            <div className="course-name"><h4>About Us</h4></div>
          </div>
          <div className="banner-titleSection">
            <h1 className="banner-title">
              <span className="clr-title">Our Journey,</span> Mission, and Values
            </h1>
          </div>
        <p className="t2 text-white">
          Discover our institute's inspiring journey, unwavering mission, and
          the core values that drive our commitment to excellence in education.
        </p>
        <Link to={'/course'} onClick={scrollToTop}>
          <button className="button">Courses</button>
        </Link>
      </div>
      <div className="a_u_conatiner_right">
        {/* <Form /> */}
      </div>
    </div>
  );
}

export default About_Us;
