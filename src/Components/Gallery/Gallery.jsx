import React, { useState, useEffect } from 'react';
import './Gallery.css'; // Import your CSS file
import { useInView } from 'react-intersection-observer';
import img1 from '../Assets/Gallery/4.jpg';
import img2 from '../Assets/Gallery/5.jpg';
import img3 from '../Assets/Gallery/WhatsApp Image 2024-01-24 at 14.34.42_1167e957.jpg';
import img4 from '../Assets/Gallery/s-1a.png';
import img5 from '../Assets/Gallery/s-f-3a.png';
import img6 from '../Assets/Gallery/DSC_5158.png';
import img7 from '../Assets/Gallery/DSC_5188.png';
import img8 from '../Assets/Gallery/1.1.png';
import img9 from '../Assets/Gallery/1.2.png';
import img10 from '../Assets/Gallery/1.4.png';
import img11 from '../Assets/Gallery/2.3.png';
import img12 from '../Assets/Gallery/3.1.png';
import img13 from '../Assets/Gallery/3.2.png';
import img14 from '../Assets/Gallery/3.3.png';
import img15 from '../Assets/Gallery/3.4.png';
import img16 from '../Assets/Gallery/DSC_5117.png';
import img17 from '../Assets/Gallery/DSC_5118.png';
import img18 from '../Assets/Gallery/DSC_5119.png';
import img19 from '../Assets/Gallery/DSC_5123.png';
import img20 from '../Assets/Gallery/DSC_5125.png';
import img21 from '../Assets/Gallery/DSC_5126.png';

const Gallery = () => {
  useEffect(() => {
    const obj = document.querySelector('#gallery');

    function animStart() {
      if (!obj.classList.contains('active')) {
        obj.classList.add('active');
      }
    }

    document.addEventListener('scroll', animStart);
    window.addEventListener('resize', animStart);
    animStart();

    return () => {
      document.removeEventListener('scroll', animStart);
      window.removeEventListener('resize', animStart);
    };
  }, []);
  //
  const [viewRef, inView] = useInView({
    triggerOnce: true // Trigger only once
  });
  //
  const [showImage, setShowImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleClick = (img) => {
    setShowImage(true);
    setSelectedImage(img);
  };

  const handleClose = () => {
    setShowImage(false);
    setSelectedImage('');
  };
  return (
    <div className="gallery-container">
      <div
        ref={viewRef}
        className={`section gallery-section ${inView ? 'title_aaa' : ''}`}
      >
        <span className="block_aaa"></span>
        <h3>
          Gallery<span></span>
        </h3>
      </div>
      <main>
        <div id="gallery" className="gallery">
          <figure onClick={() => handleClick(img1)}>
            <img src={img1} alt="image" />
            <figcaption className="t3">Self Study</figcaption>
          </figure>

          <figure onClick={() => handleClick(img2)}>
            <img src={img2} alt="image" />
            <figcaption className="t3">Group Study</figcaption>
          </figure>
          <figure onClick={() => handleClick(img3)}>
            <img src={img3} alt="image" />
            <figcaption className="t3">Exams</figcaption>
          </figure>
          <figure onClick={() => handleClick(img4)}>
            <img src={img4} alt="image" />
            <figcaption className="t3">Classroom</figcaption>
          </figure>
          <figure onClick={() => handleClick(img5)}>
            <img src={img5} alt="image" />
            <figcaption className="t3">Memories</figcaption>
          </figure>
          <figure onClick={() => handleClick(img6)}>
            <img src={img6} alt="image" />
            <figcaption className="t3">Drama</figcaption>
          </figure>
          <figure onClick={() => handleClick(img7)}>
            <img src={img7} alt="image" />
            <figcaption className="t3">Farewell</figcaption>
          </figure>
          <figure onClick={() => handleClick(img8)}>
            <img src={img8} alt="image" />
            <figcaption className="t3">Awards</figcaption>
          </figure>
          <figure onClick={() => handleClick(img9)}>
            <img src={img9} alt="image" />
            <figcaption className="t3">Awards</figcaption>
          </figure>
          <figure onClick={() => handleClick(img10)}>
            <img src={img10} alt="image" />
            <figcaption className="t3">Speech</figcaption>
          </figure>
          <figure onClick={() => handleClick(img11)}>
            <img src={img11} alt="image" />
            <figcaption className="t3">Memories</figcaption>
          </figure>
          <figure onClick={() => handleClick(img12)}>
            <img src={img12} alt="image" />
            <figcaption className="t3">Awards</figcaption>
          </figure>
          <figure onClick={() => handleClick(img13)}>
            <img src={img13} alt="image" />
            <figcaption className="t3">Achivements</figcaption>
          </figure>
          <figure onClick={() => handleClick(img14)}>
            <img src={img14} alt="image" />
            <figcaption className="t3">Awards</figcaption>
          </figure>
          <figure onClick={() => handleClick(img15)}>
            <img src={img15} alt="image" />
            <figcaption className="t3">Staff</figcaption>
          </figure>
          <figure onClick={() => handleClick(img16)}>
            <img src={img16} alt="image" />
            <figcaption className="t3">Activities</figcaption>
          </figure>
          <figure onClick={() => handleClick(img17)}>
            <img src={img17} alt="image" />
            <figcaption className="t3">Farewell</figcaption>
          </figure>
          <figure onClick={() => handleClick(img18)}>
            <img src={img18} alt="image" />
            <figcaption className="t3">Classroom Fun</figcaption>
          </figure>
          <figure onClick={() => handleClick(img19)}>
            <img src={img19} alt="image" />
            <figcaption className="t3">Farewell</figcaption>
          </figure>
          <figure onClick={() => handleClick(img20)}>
            <img src={img20} alt="image" />
            <figcaption className="t3">Farewell</figcaption>
          </figure>
          <figure onClick={() => handleClick(img21)}>
            <img src={img21} alt="image" />
            <figcaption className="t3">Classroom</figcaption>
          </figure>
        </div>
        {showImage && (
          <div className="image-modal">
            <div className="modal-content">
              <img src={selectedImage} alt="Selected" className="modal-image" />
              <button className="close-btn subtitle" onClick={handleClose}>
                &#10008;
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Gallery;
