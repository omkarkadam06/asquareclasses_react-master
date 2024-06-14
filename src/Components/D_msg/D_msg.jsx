import React from 'react';
import '../style.css';
import teacher_2 from '../Assets/teacher-img-2-svg.png';
import { useInView } from 'react-intersection-observer';

function D_msg() {
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
          <img src={teacher_2} alt="Learning" className="r_learning_image" />
        </div>
        <div className="r_text_content">
          <p className="subtitle r_subtitle">
            Mr. Ajit Anupam: Architect of Success at ASQUARE Medical & IIT-JEE
            Academy
          </p>
          <p className="paragraph r_about_description">
            Dear Future Achievers, Unlock your potential with ASQUARE Medical &
            IIT-JEE Academy in Pune, where I, AJIT ANUPAM, stand as a testament
            to the boundless possibilities within the grasp of every determined
            individual. In 2010, I began with a humble roof and a burning belief
            and today, we've built an educational empire known as ASQUARE
            Medical & IIT-JEE Academy. This journey has taught me that if I can,
            you most certainly can too; it's not just a play on words –
            'impossible' whispers 'I'm possible.' <br />
            Dear students in Pune, seize this moment, pick up your pen and
            embark on your odyssey to excellence in ENGINEERING and MEDICAL
            fields with ASQUARE, located right here in Pune. It's more than an
            institution; it's a launchpad for your dreams. <br />
            "Education is the passport to the future; for tomorrow belongs to
            those who prepare for it today." Start your journey with ASQUARE
            Medical & IIT-JEE Academy, a renowned coaching institute in Pune and
            end it with a treasure trove of knowledge. With unwavering
            confidence and dedication, I personally ensure your success. <br />{' '}
            ASQUARE Medical & IIT-JEE Academy in the heart of Pune, is not just
            a coaching center; it's a community fostering growth, learning, and
            success. Our dedicated faculty and state-of-the-art facilities
            create an environment where dreams take flight. Whether you aspire
            to crack JEE (Main & Advance) NEET & MH-CET exams, ASQUARE Medical &
            IIT-JEE Academy is your partner in the journey to success. <br />{' '}
            Why ASQUARE Medical & IIT-JEE Academy in Pune ? Our proven success,
            expert faculty, personalized approach, cutting-edge resources, and
            focus on holistic development set us apart. ASQUARE consistently
            produces top achievers in JEE (Main & Advance) NEET & MH-CET, making
            it the go-to destination for quality education. Our experienced
            faculty provides the guidance needed to excel and our personalized
            approach ensures you receive the attention and support necessary to
            unleash your full potential. <br /> ASQUARE Medical & IIT-JEE
            Academy provides access to cutting-edge resources and technology,
            giving you a competitive edge in your preparation for JEE (Main &
            Advance) NEET & MH-CET. Beyond academics, we focus on your overall
            development, encouraging not just academic success but also personal
            growth. <br />
            In conclusion, choose ASQUARE Medical & IIT-JEE Academy in Pune as
            your educational partner on the journey to success in JEE (Main &
            Advance) NEET & MH-CET. Be a part of a legacy where the impossible
            becomes 'I'm possible.' Start your educational odyssey with us
            today!
            <br />
            Here's to the extraordinary journey that lies ahead.
            <br />
            With aspiration and anticipation,
            <br />
            Mr. Ajit Anupam
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
    </div>
  );
}

export default D_msg;
