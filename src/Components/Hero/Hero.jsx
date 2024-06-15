import React from 'react';
import './Hero.css';
import '../style.css';
import Form from '../Form2/Form2';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Counter from './Counter';
import Count_Data from './Count_Data';
import { Link } from 'react-router-dom';
import slider1 from '../Assets/slider1.jpg';
import slider2 from '../Assets/slider2.jpg';
import slider3 from '../Assets/slider3.jpg';

function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true
  };

  return (
    <section className="newslider">
      <div className="row g-0">
        <div className="col-md-8">
          <div className="newsliderslick">
            <Slider {...settings}>
              <div className="sliderdata">
                <img src={slider1} alt="Slider 1" />
              </div>
              <div className="sliderdata">
                <img src={slider2} alt="Slider 2" />
              </div>
              <div className="sliderdata">
                <img src={slider3} alt="Slider 3" />
              </div>
            </Slider>
          </div>
        </div>
        <div className="col-md-4">
          <Form/>
        </div>
      </div>
    </section>
  );
}

export default Hero;
