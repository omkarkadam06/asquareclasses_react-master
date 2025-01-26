import React from 'react';
import './Information.css';
import { useInView } from 'react-intersection-observer';
import img from '../Assets/rb_2148192915.png';
import { Link } from 'react-router-dom';
import Form2 from '../Form2/Form2';
import data_info from './Data_info.jsx';
import '../Blog/Content_pg/Content_pg.css';
import banner1 from '../Assets/slider/asquare-banner.webp'


function Information({ data }) {
  const [viewRef1, inView1] = useInView({
    triggerOnce: true // Trigger only once
  });

  const data_content = data_info;
  //
  const data_title = [
    {
      id: 1,
      img: 'https://asquareclasses.mywebsite.show/wp-content/uploads/2023/06/neet-classes-in-pimple-Saudagar-1170x576-1-1024x504.png',
      tag: 'Medical',
      title: 'NEET Practice Strategy for Repeaters',
      paragraph:
        'NEET examination is so tough it is not important that you’ll clean it in a single attempt.',
      creator_img: 'https://i.ibb.co/DR0Qvsd/amit.png',
      creator_name: 'Amit Anupam',
      post_date: '20 Jan, 2024',
      link_to: '/blog/neet-practice-strategy-for-repeaters'
    },
    {
      id: 2,
      img: 'https://asquareclasses.mywebsite.show/wp-content/uploads/2023/06/NEET-Repeater-Classes.png',
      tag: 'Medical',
      title: 'NEET Repeater: Five Reasons to Take a Drop Year',
      paragraph:
        'After the Declaration of NEET Result, There are Three classes of students: (1) one who qualified for NEET and enrol',
      creator_img: 'https://i.ibb.co/DR0Qvsd/amit.png',
      creator_name: 'Amit Anupam',
      post_date: '20 Jan, 2024',
      link_to: '/blog/neet-repeater-five-reasons-to-take-a-drop-year'
    },
    {
      id: 3,
      img: 'https://asquareclasses.mywebsite.show/wp-content/uploads/2023/06/JEE-Coaching-in-Pimple-Saudagar.jpg',
      tag: 'Engineering',
      title: 'The way to Improve your JEE Score',
      paragraph:
        'The joint entrance examination or JEE is an entrance examination this is conducted by the National Testing Agency each year.',
      creator_img: 'https://i.ibb.co/DR0Qvsd/amit.png',
      creator_name: 'Amit Anupam',
      post_date: '20 Jan, 2024',
      link_to: '/blog/the-way-to-improve-your-jee-score'
    },
    {
      id: 4,
      img: 'https://asquareclasses.mywebsite.show/wp-content/uploads/2023/06/neet-institute.png',
      tag: 'Medical',
      title: 'A way to be Inspired for the Duration of NEET and JEE Practice?',
      paragraph:
        'Each Year, lakhs of students aspire to end up doctors. However, just a few get into MBBS courses in India.',
      creator_img: 'https://i.ibb.co/DR0Qvsd/amit.png',
      creator_name: 'Amit Anupam',
      post_date: '20 Jan, 2024',
      link_to:
        '/blog/a-way-to-be-inspired-for-the-duration-of-neet-and-jee-practice'
    },
    {
      id: 5,
      img: 'https://asquareclasses.mywebsite.show/wp-content/uploads/2023/06/neet-repeater.jpg',
      tag: 'Medical',
      title: 'NEET-UG Preparation Strategy for NEET Repeaters & Droppers',
      paragraph:
        'NEET-UG is one of the most complicated tests in India. With every passing year, the exam is getting more difficult.',
      creator_img: 'https://i.ibb.co/DR0Qvsd/amit.png',
      creator_name: 'Amit Anupam',
      post_date: '20 Jan, 2024',
      link_to: '/blog/neet-ug-preparation-strategy-for-neet-repeaters-droppers'
    },
    {
      id: 6,
      img: 'https://asquareclasses.mywebsite.show/wp-content/uploads/2023/06/foundation.jpg',
      tag: 'Foundation',
      title: 'Importance of Foundation Course for JEE/NEET',
      paragraph:
        'In case you are aiming to crack the national-level competitive entrance exam like JEE or NEET, it’s understood that you',
      creator_img: 'https://i.ibb.co/DR0Qvsd/amit.png',
      creator_name: 'Amit Anupam',
      post_date: '20 Jan, 2024',
      link_to: '/blog/importance-of-foundation-course-for-jee-neet'
    },
    {
      id: 7,
      img: 'https://asquareclasses.mywebsite.show/wp-content/uploads/2023/06/best-neet-coaching-in-Pimple-Saudagar-1170x576-1-1024x504.png',
      tag: 'Medical',
      title: 'Way of Preparation for the NEET Exam',
      paragraph:
        'A lot of us face concentration problems and whinge about not being capable of concentrating on the same thing while',
      creator_img: 'https://i.ibb.co/DR0Qvsd/amit.png',
      creator_name: 'Amit Anupam',
      post_date: '20 Jan, 2024',
      link_to: '/blog/top-preparation-tips-for-iit-jee-aspirants'
    },
    {
      id: 8,
      img: 'https://asquareclasses.mywebsite.show/wp-content/uploads/2023/06/iit-jee-classes-pimpri-chinchwad.png',
      tag: 'Engineering',
      title: 'Top Preparation Tips for IIT JEE Aspirants',
      paragraph:
        'Each year, the JEE (Joint front examination) exam is carried out by using the NTA (National testing agency) to provide.',
      creator_img: 'https://i.ibb.co/DR0Qvsd/amit.png',
      creator_name: 'Amit Anupam',
      post_date: '20 Jan, 2024',
      link_to: '/blog/way-of-preparation-for-the-neet-exam'
    },
    {
      id: 9,
      img: 'https://asquareclasses.mywebsite.show/wp-content/uploads/2023/06/medical-coaching-classes-1170x576-1-1024x504.png',
      tag: 'Medical',
      title:
        'Understand the way to Get into Medical College After Qualifying NEET Exam',
      paragraph:
        'Things to know after Qualifying NEET Exam Each Year, lakhs of students aspire to end up doctors.',
      creator_img: 'https://i.ibb.co/DR0Qvsd/amit.png',
      creator_name: 'Amit Anupam',
      post_date: '20 Jan, 2024',
      link_to:
        '/blog/understand-the-way-to-get-into-medical-college-after-qualifying-neet-exam'
    }
  ];

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
          <div className="cont_pgd2_container blog-flex">
            <Link
              to={data_title[7].link_to}
              style={{ textDecoration: 'none' }}
              key={data_title[7].id}
            >
              <div className="blog_pg_card">
                <div className="blog_pg_card__header">
                  <img
                    src={data_title[7].img}
                    alt="image"
                    className="blog_pg_card__image"
                    width="600"
                  />
                </div>
                <div className="blog_pg_card__body">
                  <span className="t3 blog_pg_tag">{data_title[7].tag}</span>
                  <h4 style={{ color: 'black' }}>{data_title[7].title}</h4>
                  <p className="t4" style={{ color: 'rgb(128, 128, 128)' }}>
                    {data_title[7].paragraph}
                  </p>
                </div>
                {/* <div className="blog_pg_card__footer">
                  <img
                    src={data_title[7].creator_img}
                    alt="image"
                    className="blog_pg_user__image"
                  />
                  <div className="blog_pg_user__info">
                    <h5 className="t3" style={{ color: 'black' }}>
                      {data_title[7].creator_name}
                    </h5>
                    <small className="t4" style={{ color: 'black' }}>
                      {data_title[7].post_date}
                    </small>
                  </div>
                </div> */}
              </div>
            </Link>
            <Link
              to={data_title[8].link_to}
              style={{ textDecoration: 'none' }}
              key={data_title[8].id}
            >
              <div className="blog_pg_card">
                <div className="blog_pg_card__header">
                  <img
                    src={data_title[8].img}
                    alt="image"
                    className="blog_pg_card__image"
                    width="600"
                  />
                </div>
                <div className="blog_pg_card__body">
                  <span className="t3 blog_pg_tag">{data_title[8].tag}</span>
                  <h4 style={{ color: 'black' }}>{data_title[8].title}</h4>
                  <p className="t4" style={{ color: 'rgb(128, 128, 128)' }}>
                    {data_title[8].paragraph}
                  </p>
                </div>
                {/* <div className="blog_pg_card__footer">
                  <img
                    src={data_title[8].creator_img}
                    alt="image"
                    className="blog_pg_user__image"
                  />
                  <div className="blog_pg_user__info">
                    <h5 className="t3" style={{ color: 'black' }}>
                      {data_title[8].creator_name}
                    </h5>
                    <small className="t4" style={{ color: 'black' }}>
                      {data_title[8].post_date}
                    </small>
                  </div>
                </div> */}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
