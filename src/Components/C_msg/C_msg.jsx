import React from 'react';
import '../style.css';
// import teacher_2 from '../Assets/teacher-img-2-svg.png';
// import './Dm2.css';
import teacher_2 from '../Assets/teacher-img-2-svg.png';
import Director1 from '../Assets/Complete faculty/arpita-bharti.jpg'
import { useInView } from 'react-intersection-observer';

function D_msg() {
  //
  const [viewRef1, inView1] = useInView({
    triggerOnce: true // Trigger only once
  });

  return (
    
    <React.Fragment>
    <section className="top-section">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-4 p-0">
                    <div className="top-poits">
                        <h4>
                        Visionary Chairman.
                        </h4>   
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 p-0">
                    <div className="top-poits" style={{background:'#e3cc33', color:'#05479b'}}>
                        <h4>
                        Advocate for Self-Reliance and Dedication.
                        </h4>   
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 p-0">
                    <div className="top-poits">
                        <h4>
                        ASQUARE: The Convergence of Innovation and Opportunity.
                        </h4>   
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="DMabout2 sec_pad">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6">
                    <div className="dm2Img-Box">
                        <img src={Director1} alt="" />
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 px-4">
                    <div ref={viewRef1} className={`section ${inView1 ? 'title_aaa about_us_title' : ''}`}>
                        <span className="block_aaa"></span>
                        <h3>
                            About Us<span></span>
                        </h3>
                    </div>
                    <div className="about2-title">
                        <h2>Navigating Success: Mrs. Arpita Bharti's Invitation to Academic Brilliance</h2>
                        <p>
                        Hey there, Future Superstars! Embark on your educational journey with ASQUARE Medical & IIT-JEE Academy, a leading institute in Pune that transforms aspirations into achievements for JEE (Main & Advance) NEET & MH-CET success. Picture your path to success as meticulously packing a suitcase, with "asquare," "pune," "jee," "neet" "cet" as the compass guiding your way.
                        </p>
                        <p>
                        In this educational adventure, your hard work is the jet fuel propelling you toward the coveted destination of success. Just as atoms join forces in chemistry to create magical compounds, your efforts at ASQUARE Medical & IIT-JEE Academy are the secret formula for success. Imagine your dedication filling that suitcase, lifting you to the divine realm of academic achievement.
                        </p>
                    </div>
                </div>
                <div className="col-lg-12">
                    <p>
                    Seize control of your destiny; don't let fate be your author. At ASQUARE Medical & IIT-JEE Academy, you are the master of your own destiny. Grab that pen and begin writing your success story today.
                    </p>
                    <p>
                    Students, you are the gems of the future generation. ASQUARE Medical & IIT-JEE Academy recognizes that education is your secret weapon, igniting the flames of self-reliance, dedication, and soaring achievements. As you pack your metaphorical suitcase with knowledge and skills, envision ASQUARE as the catalyst for your academic triumphs.
                    </p>
                    <p>
                    ASQUARE Medical & IIT-JEE Academy is not just any ordinary institute; it's the dream of many, the synonym of success, and the convergence of innovation and opportunity. It embodies "Ek Nayi Soch," a new way of thinking that paves the way for ground breaking success in JEE (Main & Advance) NEET & MH-CET exams.
                    </p>
                    <p>
                    So, buckle up for the ride of your life! ASQUARE invites you to journey together, conquering new horizons and shaping a future filled with academic brilliance. Enroll with ASQUARE Medical & IIT-JEE Academy in Pune, where your dreams take flight, and success becomes a tangible reality. Your academic journey starts here; make it extraordinary with ASQUARE Medical & IIT-JEE Academy.
                    </p>
                    <p>
                        <strong>
                        With high-fives and good vibes,
                        Mrs. Arpita Bharti
                        </strong>
                    </p>
                </div>
            </div>
        </div>
    </section>
</React.Fragment>
  );
}

export default D_msg;
