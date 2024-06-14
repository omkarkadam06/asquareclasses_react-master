import React from 'react';
import './Achivements.css';
import '../style.css';
import { useInView } from 'react-intersection-observer';

function Achievements() {
  //
  const [viewRef1, inView1] = useInView({
    triggerOnce: true // Trigger only once
  });
  //
  const [viewRef2, inView2] = useInView({
    triggerOnce: true // Trigger only once
  });
  //
  const [viewRef3, inView3] = useInView({
    triggerOnce: true // Trigger only once
  });
  //
  const [viewRef4, inView4] = useInView({
    triggerOnce: true // Trigger only once
  });
  //
  const [viewRef5, inView5] = useInView({
    triggerOnce: true // Trigger only once
  });

  const data_achivements = [
    {
      id: 1,
      heading: `A Decade of Excellence`,
      sub_heading: `Pioneering Vision and Unmatched Commitment`,
      paragraph: `In 2010, Shri AJIT ANUPAM embarked on a visionary journey with just five students in Pune, and shortly after, Er. Amit Anupam, the eminent professor of CHEMISTRY, joined the fold. This marked the birth of an institution that was ahead of its time, offering coaching in all Science subjects - Physics, Chemistry, and Mathematics - under one roof.`,
      viewRef: viewRef1,
      inView: inView1
    },
    {
      id: 2,
      heading: `Our Vision`,
      sub_heading: `Unlocking Destiny through Focused Efforts`,
      paragraph: `Success is a result of relentless dedication; we hold the key to our destiny, and our focused efforts are the path to unlock it. We advocate one mantra: 'Efforts may falter, but don't let your determination waver.
    `,
      viewRef: viewRef2,
      inView: inView2
    },
    {
      id: 3,
      heading: `Our Mission`,
      sub_heading: `Guiding Aspirants to Achieve Ultimate Goals`,
      paragraph: `Our firm's mission is to nurture aspirants into successful individuals, guiding them to higher levels and their ultimate goals. We believe in the enduring power of education, where knowledge is more than facts—it's about values, critical thinking, and the fusion of intelligence and character. We aim to instill in our students the qualities needed for lifelong learning and leadership in their chosen careers.
    `,
      viewRef: viewRef3,
      inView: inView3
    },
    {
      id: 4,
      heading: `The Path to Success
    `,
      sub_heading: `Rooted in Values, Spiritualism, and Unwavering Hard Work`,
      paragraph: `Rooted in Indian values, spiritualism, and unwavering hard work, ASQUARE stands tall with its efficient faculties, all dedicated to guiding students towards success. Our story is one of continuous triumph, adding new chapters of splendid achievements year after year.`,
      viewRef: viewRef4,
      inView: inView4
    },
    {
      id: 5,
      heading: `Revolutionizing Education
    `,
      sub_heading: `Transforming the Educational Landscape`,
      paragraph: `In just a year, this humble beginning evolved into a groundbreaking Pre-Medical coaching institute, boasting a team of exceptional biology faculties. ASQUARE became a unifying force for Pre-engineering and Pre-medical aspirants, redefining the educational landscape.
      `,
      viewRef: viewRef5,
      inView: inView5
    }
  ];

  return (
    <>
      {data_achivements.map((data) => (
        <div
          className="achivements"
          style={{
            backgroundColor: data.id % 2 == 1 ? 'rgb(218, 237, 255)' : '#fff'
          }}
          key={data.id}
        >
          <div
            ref={data.viewRef}
            className={`section ${
              data.inView ? 'title_aaa about_us_title' : ''
            }`}
          >
            <span className="block_aaa"></span>
            <h3>
              {data.heading}
              <span></span>
            </h3>
          </div>
          <p className="subtitle">{data.sub_heading}</p>
          <p className="paragraph achive_div_para">{data.paragraph}</p>
        </div>
      ))}
    </>
  );
}

export default Achievements;
