import React, { useState } from 'react';
import Home_Promo from '../Assets/Home-Promo.png';
import './Introduction.css';
import '../style.css';
import { useInView } from 'react-intersection-observer';
import VideoPopup from '../Popup/video';

function Introduction() {
  const [showModal, setShowModal] = useState(false);
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const [viewRef, inView] = useInView({
    triggerOnce: true // Trigger only once
  });
  //
  const [viewRef1, inView1] = useInView({
    triggerOnce: true // Trigger only once
  });

  return (
    <div className="introduction">
      <div ref={viewRef} className={`section ${inView ? 'title_aaa' : ''}`}>
        <span className="block_aaa"></span>
        <h3>
          Introduction<span></span>
        </h3>
      </div>
      <p className="subtitle">
        Unlock Your Potential with ASQUARE Institute's Inspirational Journey
      </p>
      <img 
        onClick={handleShow}
        ref={viewRef1}
        src={Home_Promo}
        alt="img"
        className={`${inView1 ? 'i_v_about_us' : 'n_v_about_us'}`}
      />
      <VideoPopup showModal={showModal} handleClose={handleClose} />
    </div>
  );
}

export default Introduction;
