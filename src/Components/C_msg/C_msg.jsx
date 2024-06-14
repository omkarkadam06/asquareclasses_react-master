import React from 'react';
import '../style.css';
import teacher_1 from '../Assets/teacher-img-1-svg.png';
import teacher_2 from '../Assets/teacher-img-2-svg.png';
import { useInView } from 'react-intersection-observer';

function C_msg() {
  //
  const [viewRef1, inView1] = useInView({
    triggerOnce: true // Trigger only once
  });

  return (
    <div
      ref={viewRef1}
      className={`staff_container ${inView1 ? 'i_v_about_us' : 'n_v_about_us'}`}
    >
      <div className="staff">
        <div className="s_media_content first_smc">
          <img src={teacher_1} alt="Learning" className="r_learning_image" />
        </div>
        <div className="r_text_content">
          <p className="subtitle r_subtitle">
            Navigating Success: Mrs. Arpita Bharti's Invitation to Academic
            Brilliance
          </p>
          <p className="paragraph r_about_description">
            Hey there, Future Superstars! Embark on your educational journey
            with ASQUARE Medical & IIT-JEE Academy, a leading institute in Pune
            that transforms aspirations into achievements for JEE (Main &
            Advance) NEET & MH-CET success. Picture your path to success as
            meticulously packing a suitcase, with "asquare," "pune," "jee,"
            "neet" "cet" as the compass guiding your way. <br />
            In this educational adventure, your hard work is the jet fuel
            propelling you toward the coveted destination of success. Just as
            atoms join forces in chemistry to create magical compounds, your
            efforts at ASQUARE Medical & IIT-JEE Academy are the secret formula
            for success. Imagine your dedication filling that suitcase, lifting
            you to the divine realm of academic achievement. <br />
            Seize control of your destiny; don't let fate be your author. At
            ASQUARE Medical & IIT-JEE Academy, you are the master of your own
            destiny. Grab that pen and begin writing your success story today.{' '}
            <br />
            Students, you are the gems of the future generation. ASQUARE Medical
            & IIT-JEE Academy recognizes that education is your secret weapon,
            igniting the flames of self-reliance, dedication, and soaring
            achievements. As you pack your metaphorical suitcase with knowledge
            and skills, envision ASQUARE as the catalyst for your academic
            triumphs. <br /> ASQUARE Medical & IIT-JEE Academy is not just any
            ordinary institute; it's the dream of many, the synonym of success,
            and the convergence of innovation and opportunity. It embodies "Ek
            Nayi Soch," a new way of thinking that paves the way for ground
            breaking success in JEE (Main & Advance) NEET & MH-CET exams. <br />
            So, buckle up for the ride of your life! ASQUARE invites you to
            journey together, conquering new horizons and shaping a future
            filled with academic brilliance. Enroll with ASQUARE Medical &
            IIT-JEE Academy in Pune, where your dreams take flight, and success
            becomes a tangible reality. Your academic journey starts here; make
            it extraordinary with ASQUARE Medical & IIT-JEE Academy.
            <br />
            With high-fives and good vibes,
            <br />
            Mrs. Arpita Bharti
          </p>
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
        <div className="s_media_content last_smc">
          <img src={teacher_1} alt="Learning" className="r_learning_image" />
        </div>
      </div>
    </div>
  );
}

export default C_msg;
