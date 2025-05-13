import React, { useState } from 'react';
import './Footer.css';
import '../style.css';
import facebook_logo from '../Assets/logo-facebook.png';
import facebook_logo_color from '../Assets/logo-facebook-color.png';
import insta_logo from '../Assets/logo-insta.png';
import insta_logo_color from '../Assets/logo-insta-color.png';
import telegram_logo from '../Assets/logo-telegram.png';
import telegram_logo_color from '../Assets/logo-telegram-color.png';
import whatsapp_logo from '../Assets/logo-whatsapp.png';
import whatsapp_logo_color from '../Assets/logo-whatsapp-color.png';
import youtube_logo from '../Assets/logo-youtube.png';
import youtube_logo_color from '../Assets/logo-youtube-color.png';
import email from '../Assets/email.png';
import location from '../Assets/location.png';
import phone from '../Assets/phone.png';
import { Link } from 'react-router-dom';

function Footer() {
  const downloadPdf = () => {
    const anchor = document.createElement('a');

    anchor.href = '../Assets/Asquare-Brochure-Admission.pdf';

    anchor.download = 'Asquare_Brochure.pdf';

    document.body.appendChild(anchor);
    anchor.click();

    document.body.removeChild(anchor);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);

  const toggleSearch = () => {
    setIsSearchActive(!isSearchActive);
  };

  const toggleMobileNav = () => {
    setIsMobileNavActive(!isMobileNavActive);
  };

  return (
    <div className="footer">
      <div className="top_container">
        <ul>
          <li className="t1">Asquare Inst.</li>
          <li>
            <Link
              to={'/'}
              className="f_link"
              onClick={scrollToTop}
            >
              Home
            </Link>
          </li>
          <li>
            <Link to={'/about-us/'} className="f_link" onClick={scrollToTop}>
              About Us
            </Link>
          </li>
          <li>
            <Link
              to={'/directors-message/'}
              className="f_link"
              onClick={scrollToTop}
            >
              Director Msg
            </Link>
          </li>
          <li>
            <Link
              to={'/chairmans-message/'}
              className="f_link"
              onClick={scrollToTop}
            >
              Chairman Msg
            </Link>
          </li>
          <li>
            <Link to={'/faculty'} className="f_link" onClick={scrollToTop}>
              Faculty
            </Link>
          </li>
          <li>
            <Link to={'/blog'} className="f_link" onClick={scrollToTop}>
              Blog
            </Link>
          </li>
        </ul>
        <ul>
          <li className="t1">Courses</li>
          <li>
            <Link
              to={'/mht-cet-course-classes-institute-for-11th-in-pune'}
              className="f_link"
              onClick={scrollToTop}
            >
              MHT-CET 11th
            </Link>
          </li>
          <li>
            <Link
              to={'/mht-cet-course-classes-institute-for-12th-in-pune'}
              className="f_link"
              onClick={scrollToTop}
            >
              MHT-CET 12th
            </Link>
          </li>
          <li>
            <Link
              to={'/mht-cet-course-classes-institute-for-12th-pass-in-pune'}
              className="f_link"
              onClick={scrollToTop}
            >
              MHT-CET 12th Pass
            </Link>
          </li>
          <li>
            <Link
              to={'/iit-jee-coaching-classes-institute-for-11th-in-pune'}
              className="f_link"
              onClick={scrollToTop}
            >
              JEE 11th
            </Link>
          </li>
          <li>
            <Link
              to={'/iit-jee-coaching-classes-institute-for-12th-in-pune'}
              className="f_link"
              onClick={scrollToTop}
            >
              JEE 12th
            </Link>
          </li>
          <li>
            <Link
              to={'/iit-jee-coaching-classes-for-repeaters-12th-pass-in-pune'}
              className="f_link"
              onClick={scrollToTop}
            >
              JEE 12th Pass
            </Link>
          </li>
          
         
          {/* <li>
            <Link to={'/course'} className="f_link" onClick={scrollToTop}>
              Courses
            </Link>
          </li> */}
        </ul>

        <ul>
        <li className="t1" style={{visibility:'hidden'}}>a</li>
          <li>
            <Link
              to={'/iit-jee-neet-coaching-classes-institute-for-11th-in-pune'}
              className="f_link"
              onClick={scrollToTop}
            >
              NEET 11th
            </Link>
          </li>
          <li>
            <Link
              to={'/iit-jee-neet-coaching-classes-institute-for-12th-in-pune'}
              className="f_link"
              onClick={scrollToTop}
            >
              NEET 12th
            </Link>
          </li>
          <li>
            <Link
              to={'/neet-coaching-classes-for-repeaters-12th-pass-in-pune'}
              className="f_link"
              onClick={scrollToTop}
            >
              NEET 12th Pass
            </Link>
          </li>
          <li>
            <Link
              to={'/8th-foundation-regular-course-institutes-classes-in-pune'}
              className="f_link"
              onClick={scrollToTop}
            >
              Foundation 8th
            </Link>
          </li>
          <li>
            <Link
              to={'/9th-foundation-regular-course-institutes-classes-in-pune'}
              className="f_link"
              onClick={scrollToTop}
            >
              Foundation 9th
            </Link>
          </li>
          <li>
            <Link
              to={'/8th-foundation-regular-course-institutes-classes-in-pune'}
              className="f_link"
              onClick={scrollToTop}
            >
              Foundation 10th
            </Link>
          </li>
        </ul>
        <ul>
          <li className="t1">Support</li>
          <li>
            <Link to={'/about-us/'} className="f_link" onClick={scrollToTop}>
              About Us
            </Link>
          </li>
          <li>
            <Link
              to={'/contact-information/'}
              className="f_link"
              onClick={scrollToTop}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link className="f_link" onClick={downloadPdf}>
              Brochure
            </Link>
          </li>
        </ul>
        
        <ul>
          <li className="t1">Contact Us</li>
          <div className="top_container_1">
            <img src={location} alt="icon" />
            <div>
              <p>Main Branch</p>
              <p>Nehru Nagar, Pimpri</p>
            </div>
          </div>
          <span className="line_footer" />
          <div className="top_container_1">
            <img src={phone} alt="icon" />
            <div>
              <p>Phone</p>
              <p>(+91) 97661 18877</p>
            </div>
          </div>
          <span className="line_footer" />
          <div className="top_container_1">
            <img src={email} alt="icon" />
            <div>
              <p>Email</p>
              <p>asquareclasses@gmail.com</p>
            </div>
          </div>
        </ul>
      </div>
      <div className="middlecontainer">
        <div className="row">
          <div className="col-md-3">
            <div className="addressfooterbox">
              <h2 className="addressfooterheaing">Pimpri, Branch</h2>
              <div class="heading-under-line "></div>
              <ul>
                <li>ASQUARE Classes Pvt Ltd<br></br> Sai Vrindavan, Office No.501, Near Indian Oil Petrol Pump, Nehru Nagar, Pimpri, Pune Maharashtra - 411018</li>
                <li><a href="tel:+919766118877">(+91) 9766118877</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="addressfooterbox">
              <h2 className="addressfooterheaing">Pimple Saudagar, Branch</h2>
              <div class="heading-under-line "></div>
              <ul>
                <li>Asquare Classes Pvt Ltd<br></br> Office No. 206, Prime Square, Kunal Icon Rd, opposite Datt Raj Mandir, Pimple Saudagar, Maharashtra 411027</li>
                <li><a href="tel:+919579730062">(+91) 9579730062</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="addressfooterbox">
              <h2 className="addressfooterheaing">Vishrantwadi, Branch</h2>
              <div class="heading-under-line "></div>
              <ul>
                <li>Asquare Classes Pvt Ltd<br></br> 156, Shoppers Orbit Mall, Pune Alandi Road, Near Reliance Smart Bazaar, Vishrantwadi, Pune, Maharashtra 411015</li>
                <li><a href="tel:+919766118866">(+91) 9766118866</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="addressfooterbox">
              <h2 className="addressfooterheaing">Rahatani, Branch</h2>
              <div class="heading-under-line "></div>
              <ul>
                <li>ASQUARE Classes Pvt Ltd,<br></br> SNBP College Campus, Survey No. 29 / 2, Pune, Maharashtra 411017</li>
                <li><a href="tel:+919579730062">(+91) 9579730062</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="addressfooterbox">
              <h2 className="addressfooterheaing">Hadapsar, Branch</h2>
              <div class="heading-under-line "></div>
              <ul>
                <li>ASQUARE Classes Pvt Ltd,<br></br> Fortune Plaza, Office No 208,209,210 Near Railway crossing, Sasane Nagar, Hadapsar, Pune 411028</li>
                <li><a href="tel:+919156004396">(+91) 9156004396</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="addressfooterbox">
              <h2 className="addressfooterheaing">Wanwadi, Branch</h2>
              <div class="heading-under-line "></div>
              <ul>
                <li>ASQUARE Classes Pvt Ltd,<br></br> Arihant Avenue, Above Image Electricals, Near Shivaji Maharaj Statue, Divya Nagar, Wanwadi, Pune 411040</li>
                <li><a href="tel:+919156004393">(+91) 9156004393</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom_container">
        <p>Copyright 2023 at asquareclasses.com</p>
        <div className="social-media-icons">
          <a href="https://www.facebook.com/asquarepune" target="_blank">
            <img src={facebook_logo} alt="logo" className="icn-2 s_m_icon" />
          </a>
          <a href="https://www.instagram.com/asquarepune/" target="_blank">
            <img src={insta_logo} alt="logo" className="icn-2 s_m_icon" />
          </a>
          <a href="https://t.me/asquarepune" target="_blank">
            <img src={telegram_logo} alt="logo" className="icn-2 s_m_icon" />
          </a>
          <a href="https://wa.me/c/919404282283" target="_blank">
            <img src={whatsapp_logo} alt="logo" className="icn-2 s_m_icon" />
          </a>
          <a href="https://www.youtube.com/asquareclasses" target="_blank">
            <img src={youtube_logo} alt="logo" className="icn-2 s_m_icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
