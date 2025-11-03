import React, { useState } from 'react';
import './Faculty.css';
import '../style.css';
import point_icon_3 from '../Assets/point-icon-3.png';
import Faculty_Data from './Faculty_Data';
import { useInView } from 'react-intersection-observer';

function Faculty() {
  //
  const [viewRef, inView] = useInView({
    triggerOnce: true // Trigger only once
  });
  //
  const [viewRef1, inView1] = useInView({
    triggerOnce: true // Trigger only once
  });

  const [selectedFaculty, setSelectedFaculty] = useState('Amit Anupam'); // Set the default selected faculty

  // Find the faculty object based on the selected name
  const faculty = Faculty_Data.find((item) => item.name === selectedFaculty);

  return (
    <div className="faculty_section">
      <div
        ref={viewRef1}
        className={`faculty_section_left  ${
          inView ? 'i_fl_cont' : 'o_fl_cont'
        }`}
      >
        <div ref={viewRef} className={`section ${inView ? 'title_aaa' : ''}`}>
          <span className="block_aaa"></span>
          <h3>
            Faculty<span></span>
          </h3>
        </div>
        <p className="subtitle">Faculty, Academic Guides & Mentors</p>
        <p className="paragraph">
          Meet Our Diverse Team of Accomplished Educators Committed to Nurturing
          Academic Excellence and Fostering Student Success.
        </p>
        <ul>
          {Faculty_Data.map((facultyMember) => (
            <li
              key={facultyMember.id}
              onClick={() => setSelectedFaculty(facultyMember.name)}
              className={
                facultyMember.name === selectedFaculty
                  ? 'selected'
                  : 'not_selected'
              }
            >
              {facultyMember.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="faculty_section_right">
        <img src={faculty.img} alt="img" className="teacher_img" decoding="async"/>
        <div className="qualification_container">
          {faculty.points.map((point, index) => (
            <div key={index}>
              <img src={point_icon_3} alt="logo" className="icn-1" />
              <p className="t2 faculty_t2">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faculty;
