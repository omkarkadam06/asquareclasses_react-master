import React, { Suspense } from "react";
import '../Components/style.css';
import thankImg from "../Assets/thankyou.webp";
import Navbar from "../Components/Navbar/Navbar";
import Header from "../Components/Header/Header";
import Loading from './Loading.jsx';
import { Link } from 'react-router-dom';

const Footer = React.lazy(() => import("../Components/Footer/Footer.jsx"));

const ThankYou = () => {
  return (
    <>
      <Navbar />
      <Header />
      <section className="thankyou_section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <img className="thankyou_img" src={thankImg} alt="Thank You" />
              <div className="about2-title">
                <h2>Thank You For Submitting The Form</h2>
              </div>
              <p>We will get back to you shortly.</p>
              <Link className="button" to="/">Go To Home Page</Link>
            </div>
          </div>
        </div>
      </section>
      <Suspense fallback={<Loading />}>
        <Footer />
      </Suspense>
    </>
  );
};

export default ThankYou;
