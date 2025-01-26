import React, { useEffect, useState } from 'react';
import './Hero2.css';
import '../style.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from '../Assets/slider/web-slider-1.jpg';
import banner2 from '../Assets/slider/web-slider-2.jpg';
import banner3 from '../Assets/slider/web-slider-3.jpg';
import banner4 from '../Assets/slider/Asquar web slider-4-new.jpg';
import banner5 from '../Assets/slider/web-slider-5.jpg';
import mobileBanner1 from '../Assets/slider/Asquar mobile-1.jpg';
import mobileBanner2 from '../Assets/slider/Asquar mobile-2.jpg';
import mobileBanner3 from '../Assets/slider/Asquar mobile-3.jpg';
import mobileBanner4 from '../Assets/slider/Asquar mobile-4.jpg';
import mobileBanner5 from '../Assets/slider/Asquar mobile-5.jpg';
import Form from '../Form2/Form2';
import bannernextArrowIcon from '../Assets/banner-arrow2.png';

// Custom Arrow components for the slider
const NextArrow = ({ onClick }) => (
  <div className="custom-arrow next" onClick={onClick}>
    <img src={bannernextArrowIcon} alt="Next Slide" />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="custom-arrow prev" onClick={onClick}>
    <img src={bannernextArrowIcon} alt="Previous Slide" style={{ transform: 'rotate(180deg)' }} />
  </div>
);

const Hero2 = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Handle window resize to update mobile state
  useEffect(() => {
    const handleResize = () => {
      console.log("Window width:", window.innerWidth); // Debug log
      setIsMobile(window.innerWidth <= 768);
    };
  
    window.addEventListener('resize', handleResize);
    handleResize(); // Call on mount to initialize the state
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  // Banner data for desktop and mobile
  const banners = [
    { desktop: banner4, mobile: mobileBanner4 },
    { desktop: banner2, mobile: mobileBanner2 },
    { desktop: banner1, mobile: mobileBanner1 },
    { desktop: banner3, mobile: mobileBanner3 },
    { desktop: banner5, mobile: mobileBanner5 },
  ];

  return (
    <section className="Hero2">
      <Slider {...settings}>
        {banners.map((banner, index) => (
          <div key={index}>
            <div
              className="bannerSliders"
              style={{
                backgroundImage: `url('${isMobile ? banner.mobile : banner.desktop}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <div className="banner-titleSection">
                      {/* Add banner title or other content here */}
                    </div>
                  </div>
                  <div className="col-md-2"></div>
                  <div className="col-md-4 d-flex justify-content-end">
                    <Form />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Hero2;
