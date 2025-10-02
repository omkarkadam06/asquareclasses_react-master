import React, { useEffect, useState } from 'react';
import './Hero2.css';
import '../style.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from '../Assets/slider/newslider1.webp';
import banner2 from '../Assets/slider/newslider2.webp'
import banner3 from '../Assets/slider/newsliders3.webp';
import banner4 from '../Assets/slider/newslider4.webp';
import banner5 from '../../Assets/slider/newslider5.webp';
// import banner5 from '../Assets/slider/web-slider-5.webp';
import mobileBanner1 from '../Assets/slider/Asquar mobile-1.webp';
import mobileBanner2 from '../Assets/slider/Asquar mobile-2.webp';
import mobileBanner3 from '../Assets/slider/Asquar mobile-3.webp';
import mobileBanner4 from '../Assets/slider/Asquar mobile-4.webp';
import mobileBanner5 from '../Assets/slider/Asquar mobile-5.webp';
import mobileBanner6 from '../Assets/slider/Asquar mobile-4.jpg';
import mobileBanner7 from '../Assets/slider/Asquar mobile-5.jpg';
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
    { desktop: banner1, mobile: mobileBanner5},
    { desktop: banner2, mobile: mobileBanner4 },
    { desktop: banner3, mobile: mobileBanner2 },
    { desktop: banner4, mobile: mobileBanner1 },
    { desktop: banner5, mobile: mobileBanner3 },
    // { monile: mobileBanner6},
    // { monile: mobileBanner7},
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
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="sticky-form">
        <Form />
      </div>
    </section>
  );
};

export default Hero2;
