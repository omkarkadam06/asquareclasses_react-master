import React,  { useState, useEffect }  from 'react';
import Slider from "react-slick";
import courses_data_api from './Course_hero_data.jsx';

import './Course_Hero2.css';

function CourseHero2({ courseName, className }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }; // Missing closing brace added here
    

//     let poster_2_a = posters_container[courseName - 1][className - 1][0];
//   let poster_2_b = posters_container[courseName - 1][className - 1][1];
//   let poster_2_c = posters_container[courseName - 1][className - 1][2];
//   let poster_2_d = posters_container[courseName - 1][className - 1][3];

  //
  let [qu, setQu] = useState(
    courses_data_api[courseName - 1][className - 1].qu
  );
  let [st, setSt] = useState(
    courses_data_api[courseName - 1][className - 1].mco
  );
  let [rat, setRat] = useState(
    courses_data_api[courseName - 1][className - 1].rat
  );
  let [br, setbr] = useState(
    courses_data_api[courseName - 1][className - 1].br
  );
  //
  const Count_Data_c_h = [
    // { id: 1, text: 'Qualified', maxCount: qu },
    // { id: 2, text: 'Students', maxCount: st },
    // { id: 3, text: 'Selection Rate', maxCount: rat },
    // { id: 4, text: 'Best Rank', maxCount: br }

    [
      // JEE
      {
        id: 1,
        text: 'Qualified',
        data: 1247
      },
      {
        id: 2,
        text: 'Students',
        data: 1531
      },
      {
        id: 3,
        text: 'Selection Rate',
        data: 81
      },
      {
        id: 4,
        text: 'Best Rank',
        data: 232
      }
    ],
    [
      // NEET
      { id: 1, text: 'Qualified', data: 1857 },
      { id: 2, text: 'Students', data: 2517 },
      { id: 3, text: 'Selection Rate', data: 74 },
      { id: 4, text: 'Highest Score', data: 670 }
    ],
    [
      // CET
      {
        id: 1,
        text: 'Qualified',
        data: 2708
      },
      { id: 2, text: 'Students', data: 2950 },
      { id: 3, text: 'Selection Rate', data: 92 },
      { id: 4, text: 'Highest Score', data: 99 }
    ],
    [
      // Foundation
      { id: 1, text: 'Qualified', data: 430 },
      { id: 2, text: 'Students', data: 860 },
      { id: 3, text: 'Selection Rate', data: 50 },
      { id: 4, text: 'Best Rank', data: 28 }
    ]
  ];

  let counter_d = Count_Data_c_h[courseName - 1];

  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 2;


    return (
        <section className="CourseHero2">
            <Slider {...settings}>
                <div>
                    <div className="courseBanner">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7">
                                    <h1 className="c_h_heading">
                                       {courses_data_api[courseName - 1][className - 1].desc_h}
                                    </h1>
                                </div>
                                <div className="col-lg-5">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h3>2</h3>
                </div>
            </Slider>
        </section>
    );
}

export default CourseHero2;
