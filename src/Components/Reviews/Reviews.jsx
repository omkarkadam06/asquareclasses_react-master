import React, { useState } from 'react';
import Slider from 'react-slick';
import './Reviews.css';
import f_star from '../Assets/gold-star-icon.png';
import h_star from '../Assets/gold-half-star-icon.png';
import reviewimgarvi from '../Assets/reviewImage/Aarvi Shirsat.webp';
import reviewimgjuli from '../Assets/reviewImage/Juli Kumari.webp';
import reviewimgkalyan from '../Assets/reviewImage/Kalyan Chakravarthy.webp';
import reviewimgomkar from '../Assets/reviewImage/Omkar Chaudhari.webp';
import reviewimgrahul from '../Assets/reviewImage/Rahul Sharma.webp';
import reviewimgrakhi from '../Assets/reviewImage/Rakhi Rana.webp';
import reviewimgrohit from '../Assets/reviewImage/Rohit Mishra.webp';
import reviewimgsabir from '../Assets/reviewImage/Sabir Ali.webp';
import reviequoteimg from '../Assets/reviewImage/quotes.svg';

const cardData = [
  {
    id: 1,
    title: 'Juli Kumari',
    content:
      'Its best place to study faculty r strict enough so that you complete your work on time and get better understanding...',
    img: reviewimgjuli,
    s1: 'https://maps.gstatic.com/consumer/images/icons/2x/ic_star_rate_14.png',
    s2: 'https://maps.gstatic.com/consumer/images/icons/2x/ic_star_rate_14.png',
    s3: 'https://maps.gstatic.com/consumer/images/icons/2x/ic_star_rate_14.png',
    s4: 'https://maps.gstatic.com/consumer/images/icons/2x/ic_star_rate_14.png',
    s5: 'https://maps.gstatic.com/consumer/images/icons/2x/ic_star_rate_14.png',
  },
  {
    id: 2,
    title: 'Kalyan Chakravarthy',
    content:
      'The efforts of AMIT & SANDEEP Sir are inexplicable. They are like Dhoni & Jadeja of Chennai Super Kings. They put all their blood and sweat into the preparation of the students.',
    img: reviewimgkalyan,
    s1: 'https://maps.gstatic.com/consumer/images/icons/2x/ic_star_rate_14.png',
    s2: 'https://maps.gstatic.com/consumer/images/icons/2x/ic_star_rate_14.png',
    s3: 'https://maps.gstatic.com/consumer/images/icons/2x/ic_star_rate_14.png',
    s4: 'https://maps.gstatic.com/consumer/images/icons/2x/ic_star_rate_14.png',
    s5: 'https://maps.gstatic.com/consumer/images/icons/2x/ic_star_rate_14.png',
  },
  {
    id: 3,
    title: 'Sabir Ali',
    content:
      'The environment is very positive and the attention provided to every student is equal. Based on personal experience, have been there for 2 years and loved it.',
    img: reviewimgsabir,
    s1: 'https://maps.gstatic.com/consumer/images/icons/2x/ic_star_rate_14.png',
    s2: 'https://maps.gstatic.com/consumer/images/icons/2x/ic_star_rate_14.png',
    s3: 'https://maps.gstatic.com/consumer/images/icons/2x/ic_star_rate_14.png',
    s4: 'https://maps.gstatic.com/consumer/images/icons/2x/ic_star_rate_14.png',
    s5: 'https://maps.gstatic.com/consumer/images/icons/2x/ic_star_rate_14.png',
  },
  {
    id: 4,
    title: 'Rakhi Rana',
    content:
      'I am thankful to this institute for everything. Helped me understand concepts and made it easier to study a difficult subject like science.',
    img: reviewimgrakhi,
    s1: 'https://maps.gstatic.com/consumer/images/icons/2x/ic_star_rate_14.png',
    s2: 'https://maps.gstatic.com/consumer/images/icons/2x/ic_star_rate_14.png',
    s3: 'https://maps.gstatic.com/consumer/images/icons/2x/ic_star_rate_14.png',
    s4: 'https://maps.gstatic.com/consumer/images/icons/2x/ic_star_rate_14.png',
    s5: 'https://maps.gstatic.com/consumer/images/icons/2x/ic_star_rate_14.png',
  },
  {
    id: 5,
    title: 'Aarvi Shirsat',
    content:
      'All the teachers at Asquare are very understanding. They help students with whatever doubt they have and never complain about students asking the same doubt repeatedly. I personally have a very good experience at Asquare Academy. Really very grateful for the team at Asquare.',
    img: reviewimgarvi,
    s1: 'https://maps.gstatic.com/consumer/images/icons/2x/ic_star_rate_14.png',
    s2: 'https://maps.gstatic.com/consumer/images/icons/2x/ic_star_rate_14.png',
    s3: 'https://maps.gstatic.com/consumer/images/icons/2x/ic_star_rate_14.png',
    s4: 'https://maps.gstatic.com/consumer/images/icons/2x/ic_star_rate_14.png',
    s5: 'https://maps.gstatic.com/consumer/images/icons/2x/ic_star_rate_14.png',
  },
  {
    id: 6,
    title: 'Rahul Sharma',
    content:
      'The foundation courses at Asquare Academy Pune have been fantastic for my child, providing a solid base for competitive exams. The Pimple Saudagar and Pimpri branches have great facilities, and the teachers are highly dedicated. I’ve seen remarkable progress in my child’s academic performance!',
    img: reviewimgrahul,
    s1: 'https://maps.gstatic.com/consumer/images/icons/2x/ic_star_rate_14.png',
    s2: 'https://maps.gstatic.com/consumer/images/icons/2x/ic_star_rate_14.png',
    s3: 'https://maps.gstatic.com/consumer/images/icons/2x/ic_star_rate_14.png',
    s4: 'https://maps.gstatic.com/consumer/images/icons/2x/ic_star_rate_14.png',
    s5: 'https://maps.gstatic.com/consumer/images/icons/2x/ic_star_rate_14.png',
  },
  {
    id: 7,
    title: 'Rohit Mishra',
    content:
      'I joined asquare academy for my NEET Exam preparation. What make it unique is personal attention given by Amit sir and other teachers, small size batch unique doubt solving and effective monitoring, the mock test is great',
    img: reviewimgrohit,
    s1: 'https://maps.gstatic.com/consumer/images/icons/2x/ic_star_rate_14.png',
    s2: 'https://maps.gstatic.com/consumer/images/icons/2x/ic_star_rate_14.png',
    s3: 'https://maps.gstatic.com/consumer/images/icons/2x/ic_star_rate_14.png',
    s4: 'https://maps.gstatic.com/consumer/images/icons/2x/ic_star_rate_14.png',
    s5: 'https://maps.gstatic.com/consumer/images/icons/2x/ic_star_rate_14.png',
  },
  {
    id: 8,
    title: 'Omkar Chaudhari',
    content:
      'The academy offers a focused and motivating environment for students. The small class sizes allow for personalized attention, which has greatly improved my learning experience. Best teacher and give personal care. Best academy in pune',
    img: reviewimgomkar,
    s1: 'https://maps.gstatic.com/consumer/images/icons/2x/ic_star_rate_14.png',
    s2: 'https://maps.gstatic.com/consumer/images/icons/2x/ic_star_rate_14.png',
    s3: 'https://maps.gstatic.com/consumer/images/icons/2x/ic_star_rate_14.png',
    s4: 'https://maps.gstatic.com/consumer/images/icons/2x/ic_star_rate_14.png',
    s5: 'https://maps.gstatic.com/consumer/images/icons/2x/ic_star_rate_14.png',
  },
];

const Reviews = () => {
  const [expandedCards, setExpandedCards] = useState({}); // Track which cards are expanded

  const toggleExpand = (id) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="review_container">
      <div className="r_p1">
        <div className="rev_heading">
          <h3>What Our Students Say About Us</h3>
        </div>
        <div>
          <img src={f_star} alt="icon" className="icn-2" />
          <img src={f_star} alt="icon" className="icn-2" />
          <img src={f_star} alt="icon" className="icn-2" />
          <img src={f_star} alt="icon" className="icn-2" />
          <img src={h_star} alt="icon" className="icn-2" />
        </div>
        <p className="t3 rev_t3">Rating : 4.8 (305+ reviews)</p>
      </div>

      <Slider {...settings}>
        {cardData.map((card) => (
          <div key={card.id} className="review_card">
            <div className="review-topBox">
              <div className="review-id">
                <img src={card.img} alt="icon" className="icn-1 review-img" />
                <div className="review-name">
                  <h2 className="t1">{card.title}</h2>
                  <div className="review-rating">
                    <img src={card.s1} alt="icon" className="icn-2" />
                    <img src={card.s2} alt="icon" className="icn-2" />
                    <img src={card.s3} alt="icon" className="icn-2" />
                    <img src={card.s4} alt="icon" className="icn-2" />
                    <img src={card.s5} alt="icon" className="icn-2" />
                  </div>
                </div>
              </div>
              <img className="quoteicon" src={reviequoteimg} alt="" />
            </div>
            <div className="review_content">
            <p
              className={`t2 review-content ${
                expandedCards[card.id] ? 'expanded' : ''
              }`}
            >
              {card.content}
            </p>
            <button
              className="read-more-btn"
              onClick={() => toggleExpand(card.id)}
            >
              {expandedCards[card.id] ? 'Read less' : 'Read more'}
            </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Reviews;
