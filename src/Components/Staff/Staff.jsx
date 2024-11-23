import React from 'react';
import './Staff.css';
import '../style.css';
import teacher_1 from '../Assets/teacher-img-1-svg.png';
import teacher_2 from '../Assets/teacher-img-2-svg.png';
import Director1 from '../Assets/Complete faculty/director 1.jpg'


function Staff() {
  return (
    <div className="staff_container">
      <div className="staff">
        <div className="s_media_content first_smc col-lg-5">
          <img src={Director1} alt="Learning" className="r_learning_image" />
        </div>
        <div className="r_text_content col-lg-7">
          <p className="subtitle r_subtitle">
            Mr. Ajit Anupam: Architect of Success at ASQUARE Medical & IIT-JEE
            Academy
          </p>
          <p className="paragraph r_about_description">
            Join Mr. Ajit Anupam at ASQUARE, Pune's educational powerhouse.
            Unleash your potential in engineering and medical fields with our
            proven success, expert faculty, and cutting-edge resources. Your
            journey to success begins here, where the impossible becomes 'I'm
            possible.
          </p>
          <ul className="r_about_features">
            <li className="t2">
              <span style={{ color: 'red' }}>✔</span> Founder and Director.
            </li>
            <li className="t2">
              <span style={{ color: 'red' }}>✔</span> A Decade of Educational
              Excellence.
            </li>
            <li className="t2">
              <span style={{ color: 'red' }}>✔</span> Dedicated to Your Success
              in JEE and NEET.
            </li>
          </ul>
        </div>
        <div className="s_media_content last_smc">
          <img src={teacher_2} alt="Learning" className="r_learning_image" />
        </div>
      </div>
      <div className="cd_divider" style={{ width: '40%' }} />
      <div className="staff">
        <div className="r_text_content col-lg-7">
          <p className="subtitle r_subtitle">
            Mr. Arjun Mehta: Enthusiast of Equations
          </p>
          <p className="paragraph r_about_description">
            Embark on success with ASQUARE Medical & IIT-JEE Academy in Pune.
            Let your hard work be the jet fuel propelling you towards academic
            achievement. ASQUARE is not just an institute; it's a dream, a
            synonym for success. Join us on a transformative journey, where
            dreams take flight and success becomes a reality. Enroll today for
            an extraordinary academic experience. -           </p>
          <ul className="r_about_features">
            <li className="t2">
              <span style={{ color: 'red' }}>✔</span> Visionary Chairman.
            </li>
            <li className="t2">
              <span style={{ color: 'red' }}>✔</span> Advocate for Self-Reliance
              and Dedication.
            </li>
            <li className="t2">
              <span style={{ color: 'red' }}>✔</span> ASQUARE: The Convergence
              of Innovation and Opportunity.
            </li>
          </ul>
        </div>
        <div className="s_media_content col-lg-5">
          <img src={teacher_1} alt="Learning" className="r_learning_image" />
        </div>
      </div>
    </div>
  );
}

export default Staff;
