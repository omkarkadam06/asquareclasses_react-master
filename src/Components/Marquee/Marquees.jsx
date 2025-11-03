import React from 'react';
import './Marquee.css';

const Marquee = ({ items }) => {
  return (
    <div className="marquee">
      <div className="marquee-content">
        {items.map((item, index) => (
          <div className="marquee-item" key={index}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;