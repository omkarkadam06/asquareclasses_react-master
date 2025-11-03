import React, { useState } from 'react';
import './Testimonials.css';
import '../style.css';
// import teacher_img_1 from '../Assets/student-img-1.png';
import hollow_star_icon from '../Assets/hollow-star-icon.png';
import gold_star_icon from '../Assets/gold-star-icon.png';
import arrow_logo_2 from '../Assets/arrow-logo-2.png';
import Data from './Data';
import { useInView } from 'react-intersection-observer';

function Testimonials() {
  //
  const [viewRef, inView] = useInView({
    triggerOnce: true // Trigger only once
  });

  let [index, setIndex] = useState(0);

  let i = index;
  function update_index() {
    i = index;
    i++;
    if (i >= Data.length) {
      i = 0;
    }
    setIndex(i);
  }

  function decrease_index() {
    i = index;
    i--;
    if (i < 0) {
      i = Data.length - 1;
    }
    setIndex(i);
  }

  // setInterval(update_index, 3000);

  function testimonial(data) {
    if (data.id === Data[i].id) {
      return (
        <div className="testi_container" key={data.id}>
          <div className="testi_container_left">
            <img className='testi-img' src={data.img} alt="img" decoding="async" />
            <img onClick={decrease_index} src={arrow_logo_2} alt="img" />
            <img onClick={update_index} src={arrow_logo_2} alt="img" />
          </div>
          <div className="testi_container_right">
            <img
              src={data.img}
              alt="img"
              decoding="async"
              className="tcr_img"
            />
            <div>
              <img src={gold_star_icon} alt="start" />
              <img src={gold_star_icon} alt="start" />
              <img src={gold_star_icon} alt="start" />
              <img src={gold_star_icon} alt="start" />
              <img src={gold_star_icon} alt="start" />
              {/* {Data.map()} */}
            </div>
            <p className="t2">{data.feedback}</p>
            <p className="t4">{data.name}</p>
            <p className="t3">{data.achivement}</p>
          </div>
        </div>
      );
    }
  }
  return (
    <div className="testi">
      <div ref={viewRef} className={`section ${inView ? 'title_aaa' : ''}`}>
        <span className="block_aaa"></span>
        <h3>
          Testimonials<span></span>
        </h3>
      </div>
      <p className="subtitle testi_subtitle">Student Success Stories</p>
      {Data.map(testimonial)}
    </div>
  );
}

export default Testimonials;
