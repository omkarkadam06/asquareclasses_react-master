import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import CourseJee11 from './Pages/courses/jee-11th';
import CourseJee12 from './Pages/courses/jee-12th';
import CourseJee12Pass from './Pages/courses/jee-12th-pass';
import CourseJeeCrash from './Pages/courses/jee-crash-course';
import CourseNeet11 from './Pages/courses/neet-11th';
import CourseNeet12 from './Pages/courses/neet-12th';
import CourseNeet12Pass from './Pages/courses/neet-12th-pass';
import CourseNeetCrash from './Pages/courses/neet-crash-course';
import Courses from './Pages/Courses';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Faculty from './Pages/Faculty';
import Director_msg from './Pages/Director_msg';
import Chairman_msg from './Pages/Chairman_msg';
import Home_adword from './Pages/Adword_home';
import Blog from './Pages/Blog';
import Blog_content from './Pages/Blog_content';
import Information_jee_advance from './Pages/information/jee-advance-info';
import Information_jee_mains from './Pages/information/jee-mains-info';
import Information_neet_info from './Pages/information/neet-info';
import Information_mht_cet from './Pages/information/mht-cet-info';
import CourseCet11 from './Pages/courses/cet-11th';
import CourseCet12 from './Pages/courses/cet-12th';
import CourseCet12Pass from './Pages/courses/cet-12th-pass';
import CourseCetCrash from './Pages/courses/cet-crash-course';
import CourseFoundation8 from './Pages/courses/foundation-course-for-std-8th';
import CourseFoundation9 from './Pages/courses/foundation-course-for-std-9th';
import CourseFoundation10 from './Pages/courses/foundation-course-for-std-10th';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/course/jee-11th" element={<CourseJee11 courseName="1" className="1" />} />
          <Route path="/course/jee-12th" element={<CourseJee12 courseName="1" className="2" />} />
          <Route path="/course/jee-12th-pass" element={<CourseJee12Pass courseName="1" className="3" />} />
          <Route path="/course/jee-crash-course" element={<CourseJeeCrash courseName="1" className="4" />} />
          <Route path="/course/neet-11th" element={<CourseNeet11 courseName="2" className="1" />} />
          <Route path="/course/neet-12th" element={<CourseNeet12 courseName="2" className="2" />} />
          <Route path="/course/neet-12th-pass" element={<CourseNeet12Pass courseName="2" className="3" />} />
          <Route path="/course/neet-crash-course" element={<CourseNeetCrash courseName="2" className="4" />} />
          <Route path="/course/cet-11th" element={<CourseCet11 courseName="3" className="1" />} />
          <Route path="/course/cet-12th" element={<CourseCet12 courseName="3" className="2" />} />
          <Route path="/course/cet-12th-pass" element={<CourseCet12Pass courseName="3" className="3" />} />
          <Route path="/course/cet-crash-course" element={<CourseCetCrash courseName="3" className="4" />} />
          <Route path="/course/foundation-course-for-std-8th/" element={<CourseFoundation8 courseName="4" className="1" />} />
          <Route path="/course/foundation-course-for-std-9th/" element={<CourseFoundation9 courseName="4" className="2" />} />
          <Route path="/course/foundation-course-for-std-10th/" element={<CourseFoundation10 courseName="4" className="3" />} />
          <Route path="/about-us/" element={<About />} />
          <Route path="/contact-information/" element={<Contact />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/directors-message/" element={<Director_msg />} />
          <Route path="/chairmans-message/" element={<Chairman_msg />} />
          {/* <Route path="/iit-jee-neet-classes/" element={<Home_adword />} /> */}
          {/* <Route path="/blog" element={<Blog />} />
          <Route path="/blog/neet-practice-strategy-for-repeaters" element={<Blog_content id="1" />} />
          <Route path="/blog/neet-repeater-five-reasons-to-take-a-drop-year" element={<Blog_content id="2" />} />
          <Route path="/blog/the-way-to-improve-your-jee-score" element={<Blog_content id="3" />} />
          <Route path="/blog/a-way-to-be-inspired-for-the-duration-of-neet-and-jee-practice" element={<Blog_content id="4" />} />
          <Route path="/blog/neet-ug-preparation-strategy-for-neet-repeaters-droppers" element={<Blog_content id="5" />} />
          <Route path="/blog/importance-of-foundation-course-for-jee-neet" element={<Blog_content id="6" />} />
          <Route path="/blog/top-preparation-tips-for-iit-jee-aspirants" element={<Blog_content id="7" />} />
          <Route path="/blog/way-of-preparation-for-the-neet-exam" element={<Blog_content id="8" />} />
          <Route path="/blog/understand-the-way-to-get-into-medical-college-after-qualifying-neet-exam" element={<Blog_content id="9" />} /> */}
          <Route path="/jee-advance-info" element={<Information_jee_advance id="1" />} />
          <Route path="/jee-mains-info" element={<Information_jee_mains id="2" />} />
          <Route path="/neet-info" element={<Information_neet_info id="3" />} />
          <Route path="/mht-cet-info" element={<Information_mht_cet id="4" />} />
          {/* Redirect old linksw */}
          <Route path="/jee-main-coaching-in-pune-pimpri-chinchwad-html/" element={<Home />} />
          <Route path="/neet-coaching-in-pune-html/" element={<Home />} />
          <Route path="/classes/medical-html/" element={<Home />} />
          <Route path="/medical-coaching-in-pune-pimpri-chinchwad-html/" element={<Home />} />
          <Route path="/jee-coaching-classes-in-pune-html/" element={<Home />} />
          <Route path="/iit-coaching-in-pune-html/" element={<Home />} />
          <Route path="/jobs/" element={<Home />} />
          <Route path="/crash-course-for-jee-in-pune-html/" element={<Home />} />
          <Route path="/classes/iit-jee-html/" element={<Home />} />
          <Route path="/project/" element={<Home />} />
          <Route path="/cet-classes-in-pimpri-chinchwad-pcmc-area-html/" element={<Home />} />
          <Route path="/crash-course-for-neet-in-pune-html/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
