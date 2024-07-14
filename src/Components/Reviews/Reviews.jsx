import React, { useState, useEffect } from 'react';
import './Reviews.css';
import { useInView } from 'react-intersection-observer';
import f_star from '../Assets/gold-star-icon.png';
import h_star from '../Assets/gold-half-star-icon.png';

const cardData = [
  {
    id: 1,
    title: 'Juli Kumari',
    content:
      'Its best place to study faculty r strict enough so that you complete your work on time and get better understanding...',
    img: 'https://lh3.googleusercontent.com/a/ACg8ocLY6DvWyQgbi5ZuVKmjZrNqeewdiLyf90Rr8GNwotem=w47-h47-p-rp-mo-ba4-br100',
    s1: 'https://maps.gstatic.com/consumer/images/icons/2x/ic_star_rate_14.png',
    s2: 'https://maps.gstatic.com/consumer/images/icons/2x/ic_star_rate_14.png',
    s3: 'https://maps.gstatic.com/consumer/images/icons/2x/ic_star_rate_14.png',
    s4: 'https://maps.gstatic.com/consumer/images/icons/2x/ic_star_rate_14.png',
    s5: 'https://maps.gstatic.com/consumer/images/icons/2x/ic_star_rate_14.png'
  },
  {
    id: 2,
    title: 'Kalyan Chakravarthy',
    content:
      'The efforts of AMIT & SANDEEP Sir are inexplicable. They are like Dhoni & Jadeja of Chennai super kings. They put all his blood and sweat into preparation of the students. They are Back Bone of ASQUARE, Their journey from rags to riches are really inspirational..',
    img: 'https://lh3.googleusercontent.com/a/ACg8ocL7pxHy9EvmSGLBLOonTZ4RMBZWB2HlumGUapKsZuvu=w47-h47-p-rp-mo-br100',
    s1: 'https://maps.gstatic.com/consumer/images/icons/2x/ic_star_rate_14.png',
    s2: 'https://maps.gstatic.com/consumer/images/icons/2x/ic_star_rate_14.png',
    s3: 'https://maps.gstatic.com/consumer/images/icons/2x/ic_star_rate_14.png',
    s4: 'https://maps.gstatic.com/consumer/images/icons/2x/ic_star_rate_14.png',
    s5: 'https://maps.gstatic.com/consumer/images/icons/2x/ic_star_rate_14.png'
  },
  {
    id: 3,
    title: 'Sabir Ali',
    content:
      'The environment is very positive and the attention provided to every student is equal. Based on personal experiance have been there for 2 years loved it..',
    img: 'https://lh3.googleusercontent.com/a/ACg8ocJ60Y-dbTT623QuxkKS3SoA6sAT78ivePW0EoMiLQpC=w47-h47-p-rp-mo-ba4-br100',
    s1: 'https://maps.gstatic.com/consumer/images/icons/2x/ic_star_rate_14.png',
    s2: 'https://maps.gstatic.com/consumer/images/icons/2x/ic_star_rate_14.png',
    s3: 'https://maps.gstatic.com/consumer/images/icons/2x/ic_star_rate_14.png',
    s4: 'https://maps.gstatic.com/consumer/images/icons/2x/ic_star_rate_14.png',
    s5: 'https://maps.gstatic.com/consumer/images/icons/2x/ic_star_rate_14.png'
  },
  {
    id: 4,
    title: 'Rakhi Rana',
    content:
      'I am thankful to this institute for everything.... Helped me understand concepts and made it and quicker to study a difficult subject like science..',
    img: 'https://lh3.googleusercontent.com/a/ACg8ocJwt0QRVz9slEOe4N4psAytAz4zee2eIXNWxEKG7Iy2=w47-h47-p-rp-mo-br100',
    s1: 'https://maps.gstatic.com/consumer/images/icons/2x/ic_star_rate_14.png',
    s2: 'https://maps.gstatic.com/consumer/images/icons/2x/ic_star_rate_14.png',
    s3: 'https://maps.gstatic.com/consumer/images/icons/2x/ic_star_rate_14.png',
    s4: 'https://maps.gstatic.com/consumer/images/icons/2x/ic_star_rate_14.png',
    s5: 'https://maps.gstatic.com/consumer/images/icons/2x/ic_star_rate_14.png'
  }
];

const Reviews = () => {
  const [viewRef, inView] = useInView({
    triggerOnce: true // Trigger only once
  });
  const [viewRef1, inView1] = useInView({
    triggerOnce: true // Trigger only once
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === cardData.length - 1 ? 0 : prevIndex + 1));
    }, 2000); // 0.1 second interval

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cardData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cardData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const setCurrentIndex_click = (id) => {
    setCurrentIndex(id);
  };

  return (
    <div
      ref={viewRef1}
      className={`review_container ${
        inView1 ? 'i_v_about_us' : 'n_v_about_us'
      }`}
    >
      <div className="r_p1">
        <div
          ref={viewRef}
          className={`rev_heading section ${inView ? 'title_aaa' : ''}`}
        >
          <span className="block_aaa"></span>
          <h3>
            Google Reviews<span></span>
          </h3>
        </div>
        <div>
          <img src={f_star} alt="icon" className="icn-2" />
          <img src={f_star} alt="icon" className="icn-2" />
          <img src={f_star} alt="icon" className="icn-2" />
          <img src={f_star} alt="icon" className="icn-2" />
          <img src={h_star} alt="icon" className="icn-2" />
        </div>
        <p className="t3 rev_t3">Rating : 4.6 (227+ reviews)</p>
      </div>
      <div className="review_slide">
        {cardData.map((card, index) => (
          <div
            key={card.id}
            className={`review_card ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex_click(card.id - 1)}
          >
            <img src={card.img} alt="icon" className="icn-1" />
            <h2 className="t1">{card.title}</h2>
            <div>
              <img src={card.s1} alt="icon" className="icn-2" />
              <img src={card.s2} alt="icon" className="icn-2" />
              <img src={card.s3} alt="icon" className="icn-2" />
              <img src={card.s4} alt="icon" className="icn-2" />
              <img src={card.s5} alt="icon" className="icn-2" />
            </div>
            <p className="t2" style={{ cursor: 'pointer' }}>
              {card.content}
            </p>
          </div>
        ))}
      </div>
      <div className="btns_review">
        <button onClick={handlePrev} className="button">
          &#10094;
        </button>
        <button onClick={handleNext} className="button">
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Reviews;
