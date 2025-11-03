import React from 'react';
import './Navbar.css';
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

const Navbar = () => {
  return (
    <nav>
      <p>
        <a href="tel:+919404282283" className="t2">
          (+91)-9404282283
        </a>
      </p>
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
    </nav>
  );
};

export default Navbar;
