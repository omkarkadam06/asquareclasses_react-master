import React, { useState } from 'react';
import './Header.css';
import '../style.css';
import institude_logo from '../Assets/Logo-2.png';
import { Link } from 'react-router-dom';

const Header = () => {
  //
  // for courses
  const [isDropdownVisible1, setDropdownVisible1] = useState(false);
  // for general information
  const [isDropdownVisible2, setDropdownVisible2] = useState(false);
  // for about us
  const [isDropdownVisible3, setDropdownVisible3] = useState(false);

  const handleMouseEnter1 = () => {
    setDropdownVisible1(true);
  };

  const handleMouseLeave1 = () => {
    setDropdownVisible1(false);
  };

  const handleMouseEnter2 = () => {
    setDropdownVisible2(true);
  };

  const handleMouseLeave2 = () => {
    setDropdownVisible2(false);
  };

  const handleMouseEnter3 = () => {
    setDropdownVisible3(true);
  };

  const handleMouseLeave3 = () => {
    setDropdownVisible3(false);
  };

  //
  const [isNestedDropdownVisible1, setNestedDropdownVisible1] = useState(false);
  const [isNestedDropdownVisible2, setNestedDropdownVisible2] = useState(false);
  const [isNestedDropdownVisible3, setNestedDropdownVisible3] = useState(false);
  const [isNestedDropdownVisible4, setNestedDropdownVisible4] = useState(false);

  const handleNestedMouseEnter1 = () => {
    setNestedDropdownVisible1(true);
  };

  const handleNestedMouseLeave1 = () => {
    setNestedDropdownVisible1(false);
  };

  const handleNestedMouseEnter2 = () => {
    setNestedDropdownVisible2(true);
  };

  const handleNestedMouseLeave2 = () => {
    setNestedDropdownVisible2(false);
  };

  const handleNestedMouseEnter3 = () => {
    setNestedDropdownVisible3(true);
  };

  const handleNestedMouseLeave3 = () => {
    setNestedDropdownVisible3(false);
  };

  const handleNestedMouseEnter4 = () => {
    setNestedDropdownVisible4(true);
  };

  const handleNestedMouseLeave4 = () => {
    setNestedDropdownVisible4(false);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
    setDropdownVisible1(false);
    setDropdownVisible2(false);
  };
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);

  const toggleSearch = () => {
    setIsSearchActive(!isSearchActive);
  };

  const toggleMobileNav = () => {
    setIsMobileNavActive(!isMobileNavActive);
  };

  function dropdownClick() {
    handleNestedMouseLeave1();
    handleNestedMouseLeave2();
    handleNestedMouseLeave3();
    handleNestedMouseLeave4();
    scrollToTop();
    setIsMobileNavActive(false);
  }

  return (
    <div className="page-wrapper sticky-div">
      <div className="nav-wrapper">
        <div className="grad-bar"></div>
        <header className="navbar">
          <Link to={'/'} className="nav-item" onClick={scrollToTop}>
            <img src={institude_logo} alt="Company Logo" />
          </Link>
          <div
            className={`menu-toggle ${isMobileNavActive ? 'is-active' : ''}`}
            onClick={toggleMobileNav}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <ul
            className={`nav ${
              isSearchActive ? 'search nav_ul' : 'no-search nav_ul'
            } ${isMobileNavActive ? 'mobile-nav' : ''}`}
          >
            <li className="nav-item-in">
              <Link
                to={'/'}
                className="nav-item nav-item-list"
                onClick={scrollToTop}
              >
                Home
              </Link>
            </li>
            <li className="nav-item-in">
              <Link
                className="nav-item nav-item-list"
                onMouseEnter={handleMouseEnter1}
                onMouseLeave={handleMouseLeave1}
              >
                Courses &#9662;
              </Link>
              {isDropdownVisible1 && (
                <div
                  className="flooter_header"
                  onMouseEnter={handleMouseEnter1}
                  onMouseLeave={handleMouseLeave1}
                >
                  <Link
                    className="nav-item nav-item-list"
                    onMouseEnter={handleMouseEnter1}
                    onMouseLeave={handleMouseLeave1}
                  >
                    <li
                      className="t3"
                      onMouseEnter={handleNestedMouseEnter1}
                      onMouseLeave={handleNestedMouseLeave1}
                    >
                      JEE (M & A) &#8594;
                      {isNestedDropdownVisible1 && (
                        <div className="nested-dropdown-content">
                          <ul>
                            <Link
                              to={'/course/jee-11th'}
                              className="t3 ndc_li"
                              onClick={dropdownClick}
                            >
                              <li>Class 11th</li>
                            </Link>
                            <Link
                              to={'/course/jee-12th'}
                              className="t3 ndc_li"
                              onClick={dropdownClick}
                            >
                              <li>Class 12th</li>
                            </Link>
                            <Link
                              to={'/course/jee-12th-pass'}
                              className="t3 ndc_li"
                              onClick={dropdownClick}
                            >
                              <li>12th-Pass</li>
                            </Link>
                            <Link
                              to={'/course/jee-crash-course'}
                              className="t3 ndc_li"
                              onClick={dropdownClick}
                            >
                              <li>Crash Course</li>
                            </Link>
                          </ul>
                        </div>
                      )}
                    </li>
                  </Link>
                  <Link
                    className="nav-item nav-item-list"
                    onMouseEnter={handleMouseEnter1}
                  >
                    <li
                      className="t3"
                      onMouseEnter={handleNestedMouseEnter2}
                      onMouseLeave={handleNestedMouseLeave2}
                    >
                      NEET &#8594;
                      {isNestedDropdownVisible2 && (
                        <div className="nested-dropdown-content">
                          <ul>
                            <Link
                              to={'/course/neet-11th'}
                              className="t3 ndc_li"
                              onClick={dropdownClick}
                            >
                              <li>Class 11th</li>
                            </Link>
                            <Link
                              to={'/course/neet-12th'}
                              className="t3 ndc_li"
                              onClick={dropdownClick}
                            >
                              <li>Class 12th</li>
                            </Link>
                            <Link
                              to={'/course/neet-12th-pass'}
                              className="t3 ndc_li"
                              onClick={dropdownClick}
                            >
                              <li>12th-Pass</li>
                            </Link>
                            <Link
                              to={'/course/neet-crash-course'}
                              className="t3 ndc_li"
                              onClick={dropdownClick}
                            >
                              <li>Crash Course</li>
                            </Link>
                          </ul>
                        </div>
                      )}
                    </li>
                  </Link>
                  <Link
                    className="nav-item nav-item-list"
                    onMouseEnter={handleMouseEnter1}
                  >
                    <li
                      className="t3"
                      onMouseEnter={handleNestedMouseEnter3}
                      onMouseLeave={handleNestedMouseLeave3}
                    >
                      MHT-CET &#8594;
                      {isNestedDropdownVisible3 && (
                        <div className="nested-dropdown-content">
                          <ul>
                            <Link
                              to={'/course/cet-11th'}
                              className="t3 ndc_li"
                              onClick={dropdownClick}
                            >
                              <li>Class 11th</li>
                            </Link>
                            <Link
                              to={'/course/cet-12th'}
                              className="t3 ndc_li"
                              onClick={dropdownClick}
                            >
                              <li>Class 12th</li>
                            </Link>
                            <Link
                              to={'/course/cet-12th-pass'}
                              className="t3 ndc_li"
                              onClick={dropdownClick}
                            >
                              <li>12th-Pass</li>
                            </Link>
                            <Link
                              to={'/course/cet-crash-course'}
                              className="t3 ndc_li"
                              onClick={dropdownClick}
                            >
                              <li>Crash Course</li>
                            </Link>
                          </ul>
                        </div>
                      )}
                    </li>
                  </Link>
                  <Link
                    className="nav-item nav-item-list"
                    onMouseEnter={handleMouseEnter1}
                  >
                    <li
                      className="t3"
                      onMouseEnter={handleNestedMouseEnter4}
                      onMouseLeave={handleNestedMouseLeave4}
                    >
                      Foundation &#8594;
                      {isNestedDropdownVisible4 && (
                        <div className="nested-dropdown-content">
                          <ul>
                            <Link
                              to={'/course/foundation-course-for-std-8th/'}
                              className="t3 ndc_li"
                              onClick={dropdownClick}
                            >
                              <li>Class 8th</li>
                            </Link>
                            <Link
                              to={'/course/foundation-course-for-std-9th/'}
                              className="t3 ndc_li"
                              onClick={dropdownClick}
                            >
                              <li>Class 9th</li>
                            </Link>
                            <Link
                              to={'/course/foundation-course-for-std-10th/'}
                              className="t3 ndc_li"
                              onClick={dropdownClick}
                            >
                              <li>Class 10th</li>
                            </Link>
                          </ul>
                        </div>
                      )}
                    </li>
                  </Link>
                  <Link
                    to={'/course'}
                    className="nav-item nav-item-list"
                    onClick={scrollToTop}
                    onMouseEnter={handleMouseEnter1}
                  >
                    <li className="t3">Courses</li>
                  </Link>
                </div>
              )}
            </li>
            {/*  */}
            <li className="nav-item-in">
              <Link
                className="nav-item nav-item-list"
                onMouseEnter={handleMouseEnter2}
                onMouseLeave={handleMouseLeave2}
              >
                Information &#9662;
              </Link>
              {isDropdownVisible2 && (
                <div
                  className="flooter_header"
                  onMouseEnter={handleMouseEnter2}
                  onMouseLeave={handleMouseLeave2}
                >
                  <Link
                    to={'/jee-advance-info'}
                    className="nav-item nav-item-list"
                    onClick={scrollToTop}
                    onMouseEnter={handleMouseEnter2}
                    onMouseLeave={handleMouseLeave2}
                  >
                    <li className="t3">JEE Advance</li>
                  </Link>
                  <Link
                    to={'/jee-mains-info'}
                    className="nav-item nav-item-list"
                    onClick={scrollToTop}
                    onMouseEnter={handleMouseEnter2}
                  >
                    <li className="t3">JEE Mains</li>
                  </Link>
                  <Link
                    to={'/neet-info'}
                    className="nav-item nav-item-list"
                    onClick={scrollToTop}
                    onMouseEnter={handleMouseEnter2}
                  >
                    <li className="t3">NEET</li>
                  </Link>
                  <Link
                    to={'/mht-cet-info'}
                    className="nav-item nav-item-list"
                    onClick={scrollToTop}
                    onMouseEnter={handleMouseEnter2}
                  >
                    <li className="t3">MHT-CET</li>
                  </Link>
                </div>
              )}
            </li>
            <li className="nav-item-in">
              <Link
                className="nav-item nav-item-list"
                onMouseEnter={handleMouseEnter3}
                onMouseLeave={handleMouseLeave3}
              >
                About Us &#9662;
              </Link>
              {isDropdownVisible3 && (
                <div
                  className="flooter_header"
                  onMouseEnter={handleMouseEnter3}
                  onMouseLeave={handleMouseLeave3}
                >
                  <Link
                    to={'/directors-message/'}
                    className="nav-item nav-item-list"
                    onClick={scrollToTop}
                    onMouseEnter={handleMouseEnter3}
                    onMouseLeave={handleMouseLeave1}
                  >
                    <li className="t3">Director's Message</li>
                  </Link>
                  <Link
                    to={'/chairmans-message/'}
                    className="nav-item nav-item-list"
                    onClick={scrollToTop}
                    onMouseEnter={handleMouseEnter3}
                  >
                    <li className="t3">Chairman's Message</li>
                  </Link>
                  <Link
                    to={'/faculty'}
                    className="nav-item nav-item-list"
                    onClick={scrollToTop}
                    onMouseEnter={handleMouseEnter3}
                  >
                    <li className="t3">Faculty</li>
                  </Link>
                  <Link
                    to={'/about-us/'}
                    className="nav-item nav-item-list"
                    onClick={scrollToTop}
                    onMouseEnter={handleMouseEnter3}
                  >
                    <li className="t3">About Us</li>
                  </Link>
                </div>
              )}
            </li>
            <li className="nav-item-in">
              <Link
                to={'/blog'}
                className="nav-item nav-item-list"
                onClick={scrollToTop}
              >
                Blog
              </Link>
            </li>
            <li className="nav-item-in">
              <Link
                to={'/contact-information/'}
                className="nav-item nav-item-list"
                onClick={scrollToTop}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </header>
      </div>
    </div>
  );
};

export default Header;
