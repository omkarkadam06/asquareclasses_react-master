import React from 'react';
import './Features_2.css';
import '../style.css';

const testimonials_1 = [
  {
    quote:
      'If you are a blogger or writer that needs to meet a specific quota of words per post, or per day, you can use ilys to create word documents in a flash. The same is true for freelance writers or anyone else creating copious amounts of text on a deadline.',
    author: 'Hunter Peters',
    profession: 'Journalist'
  }
  // ... other testimonials
];

const Testimonial_1 = ({ quote, author, profession }) => (
  <div className="testimonial">
    <blockquote>{quote}</blockquote>
    <div className="author-info">
      <strong>{author}</strong>
      <span>{profession}</span>
    </div>
  </div>
);

const Features_2 = () => {
  return (
    <div className="testimonials-section">
      <h2>People love ilys</h2>
      <div className="testimonials-container">
        {testimonials_1.map((testimonial, index) => (
          <Testimonial_1 key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Features_2;
