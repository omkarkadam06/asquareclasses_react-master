import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Header from '../Components/Header/Header';
import error from '../Components/Assets/errorImg.jpg'

const Footer = React.lazy(() => import('../Components/Footer/Footer.jsx'));

function Error() {
    return(
        <>
        <Navbar />
        <Header />
       <section className="error_page sec_pad">
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <img className='error_img' src={error} alt="" />
                    <div className="error_btn"><Link to='/'>Go To HomePage</Link></div>  
                </div>
            </div>
        </div>
       </section>
       <Footer />
        </>
    )
}
export default Error