import React, { useState, useRef, useEffect } from 'react';
import './Form2.css';
import '../style.css';
import { useInView } from 'react-intersection-observer';
import ReCAPTCHA from 'react-google-recaptcha';
import $ from 'jquery';
import 'jquery-validation';
import emailjs from '@emailjs/browser';

function Form2() {
  const form = useRef();
  const recaptchaRef = useRef();
  const [captchaError, setCaptchaError] = useState(false);
  const [viewRef, inView] = useInView({ triggerOnce: true });

  // Send email using emailjs
  const sendEmail = (e) => {
    e.preventDefault();

    // Check if captcha is solved before sending the email
    const recaptchaValue = recaptchaRef.current.getValue();
    if (!recaptchaValue) {
      setCaptchaError(true);
      return;
    }

    emailjs.sendForm('service_rn7kbuy', 'template_m7pls7p', form.current, '2oIY6HvcPeb5RjsHB')
      .then(
        () => {
          alert('Form submitted successfully!');
          // Reload the page when "Okay" is clicked
          window.location.reload();
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  // Handle CAPTCHA change
  const handleCaptchaChange = () => {
    setCaptchaError(false); // Reset captcha error when solved
  };

  useEffect(() => {
    // Prevent pasting into input fields with class no-data
    $('.no-data').on('paste', function (e) {
      e.preventDefault();
    });

    // Custom validation methods using jQuery Validation plugin
    $.validator.addMethod("name_regex", function(value, element) {
      return this.optional(element) || /^([a-zA-Z'-.]+(?: [a-zA-Z'-.]+)?){3,30}$/i.test(value);
    }, "Only a-z or A-Z characters.");

    $.validator.addMethod("phone_regex", function(value, element) {
      return this.optional(element) || /^[0-9\.\+\a-zA-z\-_]{10,13}$/i.test(value);
    }, "Phone Number with only 0-9. Minlength: 10");

    // Initialize jQuery validation on form
    $('#bannerforms').validate({
      rules: {
        name: {
          required: true,
          minlength: 3,
          name_regex: true
        },
        phone: {
          required: true,
          digits: true,
          phone_regex: true
        },
        course: {
          required: true
        },
        class: {
          required: true
        }
      },
      messages: {
        name: {
          required: "Please enter your name",
          minlength: "Your name must consist of at least 3 characters"
        },
        phone: {
          required: "Please provide your phone number",
          digits: "Please enter a valid phone number",
          minlength: "Your phone number must be at least 10 digits"
        },
        course: {
          required: "Please select a course"
        },
        class: {
          required: "Please select a class"
        }
      }
    });
  }, []);

  return (
    <div className="headernewform">
      <div ref={viewRef} className={`section title_aaa f_2_h`}>
        <span className="block_aaa"></span>
        <h3>Contact Form<span></span></h3>
      </div>
      <form className="form2" id="bannerforms" ref={form} onSubmit={sendEmail}>
        <div className="f2_container">
          <input type="text" placeholder="Full Name" id="name" name="name" className="f2_input form-control no-data" autoComplete="name" />
          <input type="number" placeholder="Mobile Number" id="phone" name="phone" className="f2_input form-control no-data" autoComplete="tel" />
          <select name="class" id="class" className="f2_input form-select">
            <option value="">Select Class</option>
            <option value="11th">11th</option>
            <option value="12th">12th</option>
            <option value="12th-pass">12th Pass</option>
            <option value="8-9-10th">8th, 9th, 10th</option>
          </select>
          <select name="course" id="course" className="f2_input form-select">
            <option value="">Select a Course</option>
            <option value="JEE">JEE</option>
            <option value="NEET">NEET</option>
            <option value="CET">CET</option>
          </select>
          <div className="reacptchs">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6LfcF-8pAAAAAB-p8hJS_bGiOCZcj_MWnNik5WXe"
              onChange={handleCaptchaChange}
            />
            {captchaError && <p style={{ color: 'red' }}>Please complete the captcha.</p>}
          </div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Form2;