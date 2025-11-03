import React from 'react';
import './Contact_Form.css';
import '../style.css';
import world_map_3 from '../Assets/world-map-3.png';
import Form2 from '../Form2/Form2';

function Contact_Form() {
  return (
    <div className="contact_form">
      <img src={world_map_3} alt="img" />
      <Form2 />
    </div>
  );
}

export default Contact_Form;
