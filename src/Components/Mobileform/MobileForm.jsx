import React from 'react';
import './Mobileform.css';
import Form from '../Form2/Form2.jsx';

const MobileForm = () => {
  return (
    <section className="mobile-form">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileForm;
