import React, { useState, useRef, useEffect } from 'react';
import './Form2.css';
import '../style.css';
import { useInView } from 'react-intersection-observer';
import ReCAPTCHA from 'react-google-recaptcha';
import $ from 'jquery';
import 'jquery-validation';
// import emailjs from '@emailjs/browser';
import { ContactForm } from "../../API/form";
import { useNavigate } from "react-router-dom";

function Form2() {
  const navigate = useNavigate();
  const form = useRef();
  const recaptchaRef = useRef();
  const [captchaError, setCaptchaError] = useState(false);
  const [viewRef] = useInView({ triggerOnce: true });
  const [formData, setFormData] = useState({
    name: '', phone: '', class: '', branch: '', course: '', parent_student: '', course_type: ''
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const handleChange = ({ target: { name, value } }) => {
    setFormData((prev) => ({
        ...prev,
        [name]: value,
    }));
};

  // Send email using emailjs
  const sendEmail = async (e) => {
    e.preventDefault();

    // Check if captcha is solved before sending the email
    const recaptchaValue = recaptchaRef.current.getValue();
    if (!recaptchaValue) {
      setCaptchaError(true);
      return;
    }
    setLoading(true);
    setErrorMessage("");
    try {
      const data = await ContactForm(formData);
      console.log("API Response:", data);
      if (data?.status === true) {
        setFormData({
          name: '', phone: '', class: '', branch: '', course: '', parent_student: '', course_type: ''
        });
        navigate("/thank-you");
      }
    } catch (error) {
        console.error("API Error:", error);
        setErrorMessage("Something went wrong. Please try again later.");
    } finally {
        setLoading(false);
    }
    // emailjs.sendForm('service_rn7kbuy', 'template_m7pls7p', form.current, '2oIY6HvcPeb5RjsHB')
    //   .then(
    //     () => {
    //       alert('Form submitted successfully!');
    //       // Reload the page when "Okay" is clicked
    //       window.location.reload();
    //     },
    //     (error) => {
    //       console.log('FAILED...', error.text);
    //     }
    //   );
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
    <div className="headernewform banner-form">
      <div ref={viewRef} className={`section title_aaa f_2_h`}>
        <span className="block_aaa"></span>
        <h3>Contact Form<span></span></h3>
      </div>
      <form className="form2" id="bannerforms" ref={form} onSubmit={sendEmail}>
        <div className="f2_container">
          <input type="text" onChange={handleChange} placeholder="Full Name" id="name" name="name" className="f2_input form-control no-data" autoComplete="name" />
          <input type="text" onChange={handleChange} placeholder="Mobile Number" id="phone" name="phone" className="f2_input form-control no-data" autoComplete="tel" />
          <div className='d-flex justify-content-between'>
            <div className="col-md-6">
              <select name="class" id="class" className="f2_input form-select" onChange={handleChange}>
                <option value="">Select Class</option>
                <option value="11th">11th</option>
                <option value="12th">12th</option>
                <option value="12th-pass">12th Pass</option>
                <option value="8-9-10th">8th, 9th, 10th</option>
              </select>
            </div>
            <div className="col-md-6">
          <select name="branch" id="branch" className="f2_input form-select" onChange={handleChange}>
            <option value="">Select Branch</option>
            <option value="Pimpri">Pimpri (PCMC)</option>
            <option value="Vishrantwadi">Vishrantwadi</option>
            <option value="Pimple saudagar">Pimple Saudagar</option>
            <option value="SNBP Rahatni">SNBP Rahatni</option>
            <option value="Hadapsar">Hadapsar</option>
            <option value="Wanwadi">Wanwadi</option>
            <option value="Pune Camp">Pune Camp</option>
          </select>
            </div>
          </div>
          <div className='d-flex justify-content-between'>
          <div className="col-md-6">
            <select name="course" id="course" className="f2_input form-select" onChange={handleChange}>
              <option value="">Select a Course</option>
              <option value="JEE">JEE</option>
              <option value="NEET">NEET</option>
              <option value="CET">CET</option>
              <option value="Foundation">Foundation</option>
            </select>
            </div>

            <div className="col-md-6">
            <select name="parent_student" id="parent/student" className="f2_input form-select" onChange={handleChange}>
              <option value="">Parent/Student</option>
              <option value="Parent">Parent</option>
              <option value="Student">Student</option>
            </select>
            </div>
          </div>
          <div className="form-div d-flex my-3">
              <div className="form-check" style={{ marginRight: '20px' }}>
                <input className="form-check-input" type="radio" name="course_type" id="flexRadioDefault1" value="Online" onChange={handleChange}/>
                <label className="form-check-label" for="flexRadioDefault1">
                  Online
                </label>
              </div>
              <div class="form-check">
                <input className="form-check-input" type="radio" name="course_type" id="flexRadioDefault2" value="Offline" onChange={handleChange}/>
                <label className="form-check-label" for="flexRadioDefault2">
                  Offline
                </label>
              </div>
          </div>
          <div className="reacptchs">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6LfcF-8pAAAAAB-p8hJS_bGiOCZcj_MWnNik5WXe"
              onChange={handleCaptchaChange}
            />
            {captchaError && <p style={{ color: 'red' }}>Please complete the captcha.</p>}
          </div>
          <button disabled={loading} type="submit">{loading ? "Loading..." : "Submit"}</button>
          {errorMessage && <div className="successmessage"><p className="error">{errorMessage}</p></div>}
        </div>
      </form>
    </div>
  );
}

export default Form2;