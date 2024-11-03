import React from 'react';
import './Hero.css';
import '../style.css';
import '../Hero/Hero2.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from '../Assets/slider/asquare-banner.webp'
import Form from '../Form2/Form2';

const Hero2 = () => {  // Renamed to Hero2
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="Hero2">
      <Slider {...settings}>
        <div>
          <div className="bannerSlider" style={{ backgroundImage: `url('${banner1}')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="course-title d-flex">
                    <div className="course-name"><h4>JEE</h4></div>
                    <div className="course-name"><h4>NEET</h4></div>
                    <div className="course-name"><h4>CET</h4></div>
                  </div>
                  <div className="banner-titleSection">
                    <h1 className="banner-title">
                      <span className="clr-title">Start Early</span> and Stay Ahead To Compititon
                    </h1>
                  </div>
                </div>
                <div className="col-md-6">
                  <Form />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
        <div className="bannerSlider" style={{ backgroundImage: `url('${banner1}')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="course-title d-flex">
                    <div className="course-name"><h4>JEE</h4></div>
                    <div className="course-name"><h4>NEET</h4></div>
                    <div className="course-name"><h4>CET</h4></div>
                  </div>
                  <div className="banner-titleSection">
                    <h1 className="banner-title">
                      <span className="clr-title">Kota Now</span> in Pune
                    </h1>
                  </div>
                </div>
                <div className="col-md-6">
                  <Form />
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </Slider>
    </section>
  );
};

export default Hero2;