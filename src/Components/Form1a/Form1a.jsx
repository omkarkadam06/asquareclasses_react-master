import React from 'react';
import '../Form1/Form1.css';
import '../style.css';
import { useInView } from 'react-intersection-observer';

function Form1a() {
  //
  const [viewRef, inView] = useInView({
    triggerOnce: true // Trigger only once
  });

  return (
    <div className="formbold-main-wrapper">
      <div className="formbold-form-wrapper">
        <form action="https://formbold.com/s/3V0EZ" method="POST">
          <div
            ref={viewRef}
            className={`section ${
              inView ? 'title_aaa f_1_title' : 'f_1_title'
            }`}
          >
            <span className="block_aaa"></span>
            <h3>
              Contact Form<span></span>
            </h3>
          </div>
          <div className="formbold-mb-5">
            <label htmlFor="name" className="formbold-form-label">
              {' '}
              Full Name{' '}
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              className="formbold-form-input"
              autoComplete="name"
              required
            />
          </div>
          <div className="formbold-mb-5">
            <label htmlFor="phone" className="formbold-form-label">
              {' '}
              Phone Number{' '}
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Enter your phone number"
              className="formbold-form-input"
              autoComplete="tel"
              required
            />
          </div>
          <div className="formbold-mb-5">
            <label htmlFor="email" className="formbold-form-label">
              {' '}
              Email Address{' '}
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="formbold-form-input"
              autoComplete="email"
            />
          </div>
          <div className="formbold-mb-5 formbold-pt-3">
            <label htmlFor="course" className="formbold-form-label">
              Select Course
            </label>
            <select
              name="course"
              id="course"
              className="formbold-form-input"
              autoComplete="course"
              required
            >
              <option value="">Select Course</option>
              <option value="jee">JEE</option>
              <option value="neet">NEET</option>
              <option value="cet">CET</option>
              <option value="foundation">Foundation</option>
            </select>
          </div>

          <div className="formbold-mb-5 formbold-pt-3">
            <label htmlFor="class" className="formbold-form-label">
              Select Class
            </label>
            <select
              name="class"
              id="class"
              className="formbold-form-input"
              autoComplete="class"
              required
            >
              <option value="">Select Class</option>
              <option value="8th">8th</option>
              <option value="9th">9th</option>
              <option value="10th">10th</option>
              <option value="11th">11th</option>
              <option value="12th">12th</option>
              <option value="12th pass">12th Pass</option>
            </select>
          </div>
          <div className="formbold-mb-5 formbold-pt-3">
            <label htmlFor="class" className="formbold-form-label">
              Select Branch
            </label>
            <select
              name="branch"
              id="branch"
              className="formbold-form-input"
              autoComplete="class"
              required
            >
              <option value="">Select Branch</option>
              <option value="Pimpri Branch">Pimpri Branch</option>
              <option value="Visrantwadi Branch">Visrantwadi Branch</option>
              <option value="Pimple Saudagar">Pimple Saudagar</option>
            </select>
          </div>
          <div className="flex flex-wrap formbold--mx-3">
            <div className="w-full sm:w-half formbold-px-3">
              <div className="formbold-mb-5 w-full">
                <label htmlFor="date" className="formbold-form-label">
                  {' '}
                  Date of Birth{' '}
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  className="formbold-form-input"
                  autoComplete="date"
                />
              </div>
            </div>
          </div>

          <div className="formbold-mb-5 formbold-pt-3">
            <label className="formbold-form-label formbold-form-label-2">
              Address Details
            </label>
            <div className="flex flex-wrap formbold--mx-3">
              <div className="w-full sm:w-half formbold-px-3">
                <div className="formbold-mb-5">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    placeholder="Enter city"
                    className="formbold-form-input"
                    autoComplete="address-level1"
                    required
                  />
                </div>
              </div>
              <div className="w-full sm:w-half formbold-px-3">
                <div className="formbold-mb-5">
                  <input
                    type="text"
                    name="state"
                    id="state"
                    placeholder="Enter state"
                    className="formbold-form-input"
                    autoComplete="address-level2"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <button className="formbold-btn">Book Appointment</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form1a;
