import React from 'react';
import './Information.css';
import img from '../Assets/rb_2148192915.png';
import { Link } from 'react-router-dom';
import Form2 from '../Form2/Form2';
import data_info from './Data_info.jsx';
import '../Blog/Content_pg/Content_pg.css';
import banner1 from '../Assets/slider/asquare-banner.webp'


function Information({ data }) {

  const data_content = data_info;


  return (
    <div className="content_pg_div">
      <section className="Hero2">
        <div>
          <div className="bannerSlider inner-banner info-banner" style={{ backgroundImage: `url('${banner1}')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-8">
                  <div className="course-title d-flex">
                    <div className="course-name"><h4>General Information</h4></div>
                  </div>
                  <div className="banner-titleSection">
                    <h1 className="banner-title mt-3">
                      {/* <span className="clr-title"></span> */}
                      {data_content[data - 1].title}
                    </h1>
                  </div>
                </div>
                <div className="col-md-4">
                <img src={img} alt="img" />
                  {/* <Form /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
        </div>
    </section>
      {/* <div className="a_u_conatiner">
        <div className="a_u_conatiner_left">
          <div ref={viewRef1}className={`section ${inView1 ? 'title_aaa about_us_title' : ''}`}>
            <span className="block_aaa"></span>
            <h3>
              General Information<span></span>
            </h3>
          </div>
          <p className="subtitle info-title">{data_content[data - 1].title}</p>
          <p className="t2">{data_content[data - 1].post_date}</p>
        </div>
        <div className="a_u_conatiner_right a_u_conatiner_right_b_h">
          <img src={img} alt="img" />
        </div>
      </div> */}
      <div className="cont_pgd_cont2">
        <div className="content_pgd_p1 infoCol-right">
          <div className="t2 cont_cont_pg">
            {data_content[data - 1].content}
          </div>
        </div>
        <div className="content_pgd_p2 info-page-form infoCol-left">
          <Form2 />
        </div>
      </div>
    </div>
  );
}

export default Information;
