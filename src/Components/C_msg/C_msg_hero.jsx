import React from 'react';
import '../style.css';
import { useInView } from 'react-intersection-observer';
import banner1 from '../Assets/slider/asquare-banner.webp'


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
    <section className="Hero2">
        <div>
          <div className="bannerSlider inner-banner" style={{ backgroundImage: `url('${banner1}')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-8">
                  <div className="course-title d-flex">
                    <div className="course-name"><h4>Mrs. Arpita Bharti</h4></div>
                  </div>
                  <div className="banner-titleSection">
                    <h1 className="banner-title">
                      <span className="clr-title">Dream,</span> Learn, Achieve
                    </h1>
                  </div>
                </div>
                <div className="col-md-4">
                  {/* <Form /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
        </div>
    </section>
  );
}

export default C_msg_hero;
