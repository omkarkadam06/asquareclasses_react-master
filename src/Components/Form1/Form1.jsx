import React, { useState, useRef, useEffect } from 'react';
import './Form1.css';
import '../style.css';
import { useInView } from 'react-intersection-observer';
import ReCAPTCHA from 'react-google-recaptcha';
import $ from 'jquery';
import 'jquery-validation';
// import emailjs from '@emailjs/browser'
import { LongContactForm } from "../../API/form";
import { useNavigate } from "react-router-dom";
function Form1() {
  const navigate = useNavigate();
  const form = useRef();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email_id: '',
    course: '',
    class: '',
    branch: '',
    city: '',
    state: '',
    course_type: '',
    parent_student: ''
  });
  const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const handleChange = ({ target: { name, value } }) => {
      setFormData((prev) => ({
          ...prev,
          [name]: value,
      }));
  };
    const sendEmail = async (e) => {
      e.preventDefault();
      const recaptchaValue = recaptchaRef.current.getValue();
    if (!recaptchaValue) {
      setCaptchaError(true);
      return;
    }
      // emailjs
      //   .sendForm('service_rn7kbuy', 'template_zvz1kgd', form.current, {
      //     publicKey: '2oIY6HvcPeb5RjsHB',
      //   })
      //   .then(
      //     () => {
      //       alert('SUCCESS!');
      //       //toast.success('Successfully Sent!')
      //     },
      //     (error) => {
      //       console.log('FAILED...', error.text);
      //     },
      //   );
      setLoading(true);
          setErrorMessage("");
          try {
            const data = await LongContactForm(formData);
            console.log("API Response:", data);
            if (data?.status === true) {
              setFormData({
                name: '',
                phone: '',
                email_id: '',
                course: '',
                class: '',
                branch: '',
                city: '',
                state: '',
                course_type: '',
                parent_student: ''
              });
              navigate("/thank-you");
            }
          } catch (error) {
              console.error("API Error:", error);
              setErrorMessage("Something went wrong. Please try again later.");
          } finally {
              setLoading(false);
          }
  };
  const [captchaError, setCaptchaError] = useState(false);
  const recaptchaRef = useRef();
  const [viewRef, inView] = useInView({
    triggerOnce: true
  });
  const handleCaptchaChange = (token) => {
    setCaptchaError(false);
  };
  useEffect(() => {
    $('.no-data').on('paste', function (e) {
      e.preventDefault();
    });
    $.validator.addMethod("name_regex", function(value, element) {
      return this.optional(element) || /^([a-zA-Z'-.]+(?: [a-zA-Z'-.]+)?){3,30}$/i.test(value);
    }, "Only a-z or A-Z characters.");
    $.validator.addMethod("phone_regex", function(value, element) {
      return this.optional(element) || /^[0-9\.\+\a-zA-z\-_]{10,13}$/i.test(value);
    }, "Phone Number with only 0-9. Minlength: 13");
    $.validator.addMethod("email_regex", function(value, element) {
      return this.optional(element) || /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+(com|co\.uk|info)+$/i.test(value);
    }, "Please enter a valid email.");
    $('#contactForm').validate({
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
        email: {
          required: true,
          email: true,
          email_regex: true
        },
        course: {
          required: true
        },
        class: {
          required: true
        },
        branch: {
          required: true
        },
        city: {
          required: true
        },
        state: {
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
        email: {
          required: "Please enter your email address",
          email: "Please enter a valid email address"
        },
        course: {
          required: "Please select a course"
        },
        class: {
          required: "Please select a class"
        },
        branch: {
          required: "Please select a branch"
        },
        city: {
          required: "Please enter your city"
        },
        state: {
          required: "Please enter your state"
        }
      }
    });
  }, []);
  return (
    <div className="formbold-main-wrapper">
      <div className="formbold-form-wrapper">
        <form ref={form} onSubmit={sendEmail} id="contactForm">
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
          <div className="bottom-form">
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
                className="formbold-form-input no-data"
                autoComplete="name"
                required onChange={handleChange}
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
                className="formbold-form-input no-data"
                autoComplete="tel"
                required onChange={handleChange}
              />
            </div>
            <div className="formbold-mb-5">
              <label htmlFor="email" className="formbold-form-label">
                {' '}
                Email Address{' '}
              </label>
              <input
                type="email"
                name="email_id"
                id="email"
                placeholder="Enter your email"
                className="formbold-form-input"
                autoComplete="email" onChange={handleChange}
              />
            </div>
          </div>
          <div className="bottom-form">
            <div className="formbold-mb-5 formbold-pt-3">
              <label htmlFor="course" className="formbold-form-label">
                Select Course
              </label>
              <select
                name="course"
                id="course"
                className="formbold-form-input"
                autoComplete="course"
                required onChange={handleChange}
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
                required onChange={handleChange}
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
                required onChange={handleChange}
              >
                <option value="">Select Branch</option>
                <option value="Pimpri Branch">Pimpri (PCMC)</option>
                <option value="Visrantwadi Branch">Visrantwadi Branch</option>
                <option value="Pimple Saudagar">Pimple Saudagar</option>
                <option value="SNBP Rahatni">SNBP Rahatni</option>
                <option value="Hadapsar">Hadapsar</option>
                <option value="Wanwadi">Wanwadi</option>
                <option value="Pune Camp">Pune Camp</option>
              </select>
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
                    required onChange={handleChange}
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
                    required onChange={handleChange}
                  />
                </div>
              </div>
              
            </div>
          </div>
          <div className='formbold-mb-5 formbold-pt-3 d-flex justify-content-between'>
            <div className="form-div d-flex my-3">
                <div className="form-check" style={{ marginRight: '20px' }}>
                  <input className="form-check-input" type="radio" name="course_type" onChange={handleChange} value="Online" id="flexRadioDefault1"/>
                  <label className="form-check-label text-dark" for="flexRadioDefault1">
                    Online
                  </label>
                </div>
                <div class="form-check">
                  <input className="form-check-input" type="radio" name="course_type" onChange={handleChange} value="Offline" id="flexRadioDefault2"/>
                  <label className="form-check-label text-dark" for="flexRadioDefault2">
                    Offline
                  </label>
                </div>
            </div>
            <select name="parent_student" id="parent/student" onChange={handleChange} className="f2_input form-select col-md-6">
            <option value="">Parent/Student</option>
            <option value="Parent">Parent</option>
            <option value="Student">Student</option>
          </select>
          </div>
          <div>
            <div className="reacptchs">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6LfcF-8pAAAAAB-p8hJS_bGiOCZcj_MWnNik5WXe"
              onChange={handleCaptchaChange}
            />
            {captchaError && <p style={{ color: 'red' }}>Please complete the captcha.</p>}
            </div>
            <button className="formbold-btn" disabled={loading} type="submit">{loading ? "Loading..." : "Book Appointment"}</button>
            {errorMessage && <div className="successmessage"><p className="error">{errorMessage}</p></div>}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form1;
