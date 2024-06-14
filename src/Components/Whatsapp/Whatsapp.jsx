import React from 'react';
import './Whatsapp.css';
import '../style.css';
import whatsapp_logo from '../Assets/logo-whatsapp-color.png';

function Whatsapp() {
  return (
    <>
      <a href="https://wa.me/c/919404282283" target="_blank">
        <img src={whatsapp_logo} alt="icon" className="sticky_whatsapp_logo" />
      </a>
    </>
  );
}

export default Whatsapp;
