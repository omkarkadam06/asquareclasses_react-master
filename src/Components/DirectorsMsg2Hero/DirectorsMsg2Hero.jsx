import React from 'react';
import './DirectorsMsg2Hero.css';
import '../style.css';
import '../Hero/Hero2.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from '../Assets/slider/asquare-banner.webp'
import Form from '../Form2/Form2';

const DirectorHero2 = () => {

  return (
    <section className="Hero2">
        <div>
          <div className="bannerSlider inner-banner" style={{ backgroundImage: `url('${banner1}')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-8">
                  <div className="course-title d-flex">
                    <div className="course-name"><h4>Mr. Ajit Anupam</h4></div>
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
};

export default DirectorHero2;