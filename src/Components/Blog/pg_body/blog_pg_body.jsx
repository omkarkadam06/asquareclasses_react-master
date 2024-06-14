import React from 'react';
import './blog_pg_body.css';
import { Link } from 'react-router-dom';
import amit_sir from '../../Assets/amit.png';

function Blog_pg_body() {
  const data = [
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
    <div className="blog_pg_body">
      <div className="blog_pg_container" style={{ cursor: 'pointer' }}>
        {data.map((data) => (
          <Link
            to={data.link_to}
            style={{ textDecoration: 'none', cursor: 'pointer' }}
            key={data.id}
          >
            <div className="blog_pg_card" style={{ cursor: 'pointer' }}>
              <div
                className="blog_pg_card__header"
                style={{ cursor: 'pointer' }}
              >
                <img
                  src={data.img}
                  alt="image"
                  className="blog_pg_card__image"
                  width="600"
                  style={{ cursor: 'pointer' }}
                />
              </div>
              <div className="blog_pg_card__body" style={{ cursor: 'pointer' }}>
                <span className="t3 blog_pg_tag" style={{ cursor: 'pointer' }}>
                  {data.tag}
                </span>
                <h4 style={{ color: 'black', cursor: 'pointer' }}>
                  {data.title}
                </h4>
                <p
                  className="t4"
                  style={{ color: 'rgb(128, 128, 128)', cursor: 'pointer' }}
                >
                  {data.paragraph}
                </p>
              </div>
              <div
                className="blog_pg_card__footer"
                style={{ cursor: 'pointer' }}
              >
                <img
                  src={data.creator_img}
                  alt="image"
                  className="blog_pg_user__image"
                  style={{ cursor: 'pointer' }}
                />
                <div
                  className="blog_pg_user__info"
                  style={{ cursor: 'pointer' }}
                >
                  <h5
                    className="t3"
                    style={{ color: 'black', cursor: 'pointer' }}
                  >
                    {data.creator_name}
                  </h5>
                  <small
                    className="t4"
                    style={{ color: 'black', cursor: 'pointer' }}
                  >
                    {data.post_date}
                  </small>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Blog_pg_body;
