import React, { useState } from 'react';
import './Form2.css';
import '../style.css';
import { useInView } from 'react-intersection-observer';

function Form2() {
  //
  const [viewRef, inView] = useInView({
    triggerOnce: true // Trigger only once
  });
  return (
    <div className="form2_div">
      <form
        className="form2"
        action="https://formbold.com/s/3djLx" method="POST"
      >
        <div ref={viewRef} className={`section title_aaa f_2_h`}>
          <span className="block_aaa"></span>
          <h3>
            Contact Form<span></span>
          </h3>
        </div>
        <div className="f2_container">
          <input
            type="text"
            placeholder="Full Name"
            id="name"
            required
            name="name"
            className="f2_input"
            autoComplete="name"
          />
          <input
            type="number"
            placeholder="Mobile Number"
            id="tel"
            required
            name="tel"
            className="f2_input"
            autoComplete="tel"
          />
          <select required name="class" id="class" className="f2_input">
            <option value="">Select Class</option>
            <option value="11th">11th</option>
            <option value="12th">12th</option>
            <option value="12th-pass">12th Pass</option>
            <option value="8-9-10th">8th, 9th, 10th</option>
          </select>
          <select required name="course" id="course" className="f2_input">
            <option value="">Select a Course</option>
            <option value="JEE">JEE</option>
            <option value="NEET">NEET</option>
            <option value="CET">CET</option>
          </select>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Form2;
