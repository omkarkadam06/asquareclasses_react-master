import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './Components/Hero/Hero2.css';
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
import Directormsg from './Pages/Director_msg';
import Chairmanmsg from './Pages/Chairman_msg';
// import Home_adword from './Pages/Adword_home';
// import Blog from './Pages/Blog';
// import Blog_content from './Pages/Blog_content';
import Informationjeeadvance from './Pages/information/jee-advance-info';
import Informationjeemains from './Pages/information/jee-mains-info';
import Informationneetinfo from './Pages/information/neet-info';
import Informationmhtcet from './Pages/information/mht-cet-info';
import CourseCet11 from './Pages/courses/cet-11th';
import CourseCet12 from './Pages/courses/cet-12th';
import CourseCet12Pass from './Pages/courses/cet-12th-pass';
import CourseCetCrash from './Pages/courses/cet-crash-course';
import CourseFoundation8 from './Pages/courses/foundation-course-for-std-8th';
import CourseFoundation9 from './Pages/courses/foundation-course-for-std-9th';
import CourseFoundation10 from './Pages/courses/foundation-course-for-std-10th';
import ErrorPage from './Pages/Error';
import ThankYou from './Pages/thankyou';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/iit-jee-coaching-classes-institute-for-11th-in-pune" element={<CourseJee11 courseName="1" className="1" />} />
          <Route path="/iit-jee-coaching-classes-institute-for-12th-in-pune" element={<CourseJee12 courseName="1" className="2" />} />
          <Route path="/iit-jee-coaching-classes-institute-for-12th-pass-in-pune" element={<CourseJee12Pass courseName="1" className="3" />} />
          <Route path="/iit-jee-crash-course-institutes-classes-in-pune" element={<CourseJeeCrash courseName="1" className="4" />} />
          <Route path="/iit-jee-neet-coaching-classes-institute-for-11th-in-pune" element={<CourseNeet11 courseName="2" className="1" />} />
          <Route path="/iit-jee-neet-coaching-classes-institute-for-12th-in-pune" element={<CourseNeet12 courseName="2" className="2" />} />
          <Route path="/iit-jee-neet-coaching-classes-institute-for-12th-pass-in-pune" element={<CourseNeet12Pass courseName="2" className="3" />} />
          <Route path="/iit-jee-neet-crash-course-institutes-classes-in-pune" element={<CourseNeetCrash courseName="2" className="4" />} />
          <Route path="/mht-cet-course-classes-institute-for-11th-in-pune" element={<CourseCet11 courseName="3" className="1" />} />
          <Route path="/mht-cet-course-classes-institute-for-12th-in-pune" element={<CourseCet12 courseName="3" className="2" />} />
          <Route path="/mht-cet-course-classes-institute-for-12th-pass-in-pune" element={<CourseCet12Pass courseName="3" className="3" />} />
          <Route path="/mht-cet-crash-course-institutes-classes-in-pune" element={<CourseCetCrash courseName="3" className="4" />} />
          <Route path="/8th-foundation-regular-course-institutes-classes-in-pune" element={<CourseFoundation8 courseName="4" className="1" />} />
          <Route path="/9th-foundation-regular-course-institutes-classes-in-pune" element={<CourseFoundation9 courseName="4" className="2" />} />
          <Route path="/10th-foundation-regular-course-institutes-classes-in-pune" element={<CourseFoundation10 courseName="4" className="3" />} />
          <Route path="/about-us/" element={<About />} />
          <Route path="/contact-information/" element={<Contact />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/directors-message/" element={<Directormsg />} />
          <Route path="/chairmans-message/" element={<Chairmanmsg />} />
          <Route path="/jee-advanced-coaching-classes-institute-in-pune" element={<Informationjeeadvance id="1" />} />
          <Route path="/jee-mains-coaching-classes-institute-in-pune" element={<Informationjeemains id="2" />} />
          <Route path="/neet-coaching-classes-institute-in-pune" element={<Informationneetinfo id="3" />} />
          <Route path="/mht-cet-info" element={<Informationmhtcet id="4" />} />

          {/* Location pages */}
          <Route path="/iit-jee-coaching-classes-institute-in-vishrantwadi-pune" element={<CourseJee11 courseName="1" className="1" />} />
          <Route path="/iit-jee-coaching-classes-institute-in-yerwada-pune" element={<CourseJee11 courseName="1" className="1" />} />
          <Route path="/iit-jee-coaching-classes-institute-in-dhanori-pune" element={<CourseJee11 courseName="1" className="1" />} />
          <Route path="/iit-jee-coaching-classes-institute-in-lohegaon-pune" element={<CourseJee11 courseName="1" className="1" />} />
          <Route path="/iit-jee-coaching-classes-institute-in-dighi-pune" element={<CourseJee11 courseName="1" className="1" />} />
          <Route path="/iit-jee-coaching-classes-institute-in-alandi-pune" element={<CourseJee11 courseName="1" className="1" />} />
          <Route path="/iit-jee-coaching-classes-institute-in-khadki-pune" element={<CourseJee11 courseName="1" className="1" />} />
          <Route path="/iit-jee-coaching-classes-institute-in-tingre-nagar-pune" element={<CourseJee11 courseName="1" className="1" />} />
          <Route path="/iit-jee-coaching-classes-institute-in-shastri-nagar-pune" element={<CourseJee11 courseName="1" className="1" />} />
          <Route path="/iit-jee-coaching-classes-institute-in-pratik-nagar-pune" element={<CourseJee11 courseName="1" className="1" />} />
          <Route path="/iit-jee-coaching-classes-institute-in-viman-nagar-pune" element={<CourseJee11 courseName="1" className="1" />} />
          <Route path="/iit-jee-coaching-classes-institute-in-kalyani-nagar-pune" element={<CourseJee11 courseName="1" className="1" />} />
          <Route path="/iit-jee-coaching-classes-institute-in-wagholi-pune" element={<CourseJee11 courseName="1" className="1" />} />
          <Route path="/iit-jee-coaching-classes-institute-in-pimpri-pune" element={<CourseJee11 courseName="1" className="1" />} />
          <Route path="/iit-jee-coaching-classes-institute-in-chinchwad-pune" element={<CourseJee11 courseName="1" className="1" />} />
          <Route path="/iit-jee-coaching-classes-institute-in-pcmc-pune" element={<CourseJee11 courseName="1" className="1" />} />
          <Route path="/iit-jee-coaching-classes-institute-in-akudi-pune" element={<CourseJee11 courseName="1" className="1" />} />
          <Route path="/iit-jee-coaching-classes-institute-in-nigdi-pune" element={<CourseJee11 courseName="1" className="1" />} />
          <Route path="/iit-jee-coaching-classes-institute-in-bhosari-pune" element={<CourseJee11 courseName="1" className="1" />} />
          <Route path="/iit-jee-coaching-classes-institute-in-moshi-pune" element={<CourseJee11 courseName="1" className="1" />} />
          <Route path="/iit-jee-coaching-classes-institute-in-chakan-pune" element={<CourseJee11 courseName="1" className="1" />} />
          <Route path="/iit-jee-coaching-classes-institute-in-kasarwadi-pune" element={<CourseJee11 courseName="1" className="1" />} />
          <Route path="/iit-jee-coaching-classes-institute-in-dapodi-pune" element={<CourseJee11 courseName="1" className="1" />} />
          <Route path="/iit-jee-coaching-classes-institute-in-ravet-pune" element={<CourseJee11 courseName="1" className="1" />} />
          <Route path="/iit-jee-coaching-classes-institute-in-vishrantwadi-pune" element={<CourseJee11 courseName="1" className="1" />} />
          <Route path="/iit-jee-coaching-classes-institute-in-kalewadi-pune" element={<CourseJee11 courseName="1" className="1" />} />
          <Route path="/iit-jee-coaching-classes-institute-in-wakad-pune" element={<CourseJee11 courseName="1" className="1" />} />
          <Route path="/iit-jee-coaching-classes-institute-in-aundh-pune" element={<CourseJee11 courseName="1" className="1" />} />
          <Route path="/iit-jee-coaching-classes-institute-in-baner-pune" element={<CourseJee11 courseName="1" className="1" />} />
          <Route path="/iit-jee-coaching-classes-institute-in-hinjewadi-pune" element={<CourseJee11 courseName="1" className="1" />} />
          <Route path="/iit-jee-coaching-classes-institute-in-pimple-saudagar-pune" element={<CourseJee11 courseName="1" className="1" />} />
          <Route path="/iit-jee-coaching-classes-institute-in-pimple-gurav-pune" element={<CourseJee11 courseName="1" className="1" />} />
          <Route path="/iit-jee-coaching-classes-institute-in-pimple-nilakh-pune" element={<CourseJee11 courseName="1" className="1" />} />
          {/* NEET pages */}
          <Route path="/neet-coaching-classes-institute-in-vishrantwadi-pune" element={<CourseNeet11 courseName="2" className="1" />} />
          <Route path="/neet-coaching-classes-institute-in-yerwada-pune" element={<CourseNeet11 courseName="2" className="1" />} />
          <Route path="/neet-coaching-classes-institute-in-dhanori-pune" element={<CourseNeet11 courseName="2" className="1" />} />
          <Route path="/neet-coaching-classes-institute-in-lohegaon-pune" element={<CourseNeet11 courseName="2" className="1" />} />
          <Route path="/neet-coaching-classes-institute-in-dighi-pune" element={<CourseNeet11 courseName="2" className="1" />} />
          <Route path="/neet-coaching-classes-institute-in-alandi-pune" element={<CourseNeet11 courseName="2" className="1" />} />
          <Route path="/neet-coaching-classes-institute-in-khadki-pune" element={<CourseNeet11 courseName="2" className="1" />} />
          <Route path="/neet-coaching-classes-institute-in-tingre-nagar-pune" element={<CourseNeet11 courseName="2" className="1" />} />
          <Route path="/neet-coaching-classes-institute-in-shastri-nagar-pune" element={<CourseNeet11 courseName="2" className="1" />} />
          <Route path="/neet-coaching-classes-institute-in-pratik-nagar-pune" element={<CourseNeet11 courseName="2" className="1" />} />
          <Route path="/neet-coaching-classes-institute-in-viman-nagar-pune" element={<CourseNeet11 courseName="2" className="1" />} />
          <Route path="/neet-coaching-classes-institute-in-kalyani-nagar-pune" element={<CourseNeet11 courseName="2" className="1" />} />
          <Route path="/neet-coaching-classes-institute-in-wagholi-pune" element={<CourseNeet11 courseName="2" className="1" />} />
          <Route path="/neet-coaching-classes-institute-in-pimpri-pune" element={<CourseNeet11 courseName="2" className="1" />} />
          <Route path="/neet-coaching-classes-institute-in-chinchwad-pune" element={<CourseNeet11 courseName="2" className="1" />} />
          <Route path="/neet-coaching-classes-institute-in-pcmc-pune" element={<CourseNeet11 courseName="2" className="1" />} />
          <Route path="/neet-coaching-classes-institute-in-akudi-pune" element={<CourseNeet11 courseName="2" className="1" />} />
          <Route path="/neet-coaching-classes-institute-in-nigdi-pune" element={<CourseNeet11 courseName="2" className="1" />} />
          <Route path="/neet-coaching-classes-institute-in-bhosari-pune" element={<CourseNeet11 courseName="2" className="1" />} />
          <Route path="/neet-coaching-classes-institute-in-moshi-pune" element={<CourseNeet11 courseName="2" className="1" />} />
          <Route path="/neet-coaching-classes-institute-in-chakan-pune" element={<CourseNeet11 courseName="2" className="1" />} />
          <Route path="/neet-coaching-classes-institute-in-kasarwadi-pune" element={<CourseNeet11 courseName="2" className="1" />} />
          <Route path="/neet-coaching-classes-institute-in-dapodi-pune" element={<CourseNeet11 courseName="2" className="1" />} />
          <Route path="/neet-coaching-classes-institute-in-ravet-pune" element={<CourseNeet11 courseName="2" className="1" />} />
          <Route path="/neet-coaching-classes-institute-in-kalewadi-pune" element={<CourseNeet11 courseName="2" className="1" />} />
          <Route path="/neet-coaching-classes-institute-in-wakad-pune" element={<CourseNeet11 courseName="2" className="1" />} />
          <Route path="/neet-coaching-classes-institute-in-aundh-pune" element={<CourseNeet11 courseName="2" className="1" />} />
          <Route path="/neet-coaching-classes-institute-in-baner-pune" element={<CourseNeet11 courseName="2" className="1" />} />
          <Route path="/neet-coaching-classes-institute-in-hinjewadi-pune" element={<CourseNeet11 courseName="2" className="1" />} />
          <Route path="/neet-coaching-classes-institute-in-pimple-saudagar-pune" element={<CourseNeet11 courseName="2" className="1" />} />
          <Route path="/neet-coaching-classes-institute-in-pimple-gurav-pune" element={<CourseNeet11 courseName="2" className="1" />} />
          <Route path="/neet-coaching-classes-institute-in-pimple-nilakh-pune" element={<CourseNeet11 courseName="2" className="1" />} />

          {/* CET pages */}
          <Route path="/mht-cet-course-classes-institute-in-vishrantwadi-pune" element={<CourseCet11 courseName="3" className="1" />} />
          <Route path="/mht-cet-course-classes-institute-in-yerwada-pune" element={<CourseCet11 courseName="3" className="1" />} />
          <Route path="/mht-cet-course-classes-institute-in-dhanori-pune" element={<CourseCet11 courseName="3" className="1" />} />
          <Route path="/mht-cet-course-classes-institute-in-lohegaon-pune" element={<CourseCet11 courseName="3" className="1" />} />
          <Route path="/mht-cet-course-classes-institute-in-dighi-pune" element={<CourseCet11 courseName="3" className="1" />} />
          <Route path="/mht-cet-course-classes-institute-in-alandi-pune" element={<CourseCet11 courseName="3" className="1" />} />
          <Route path="/mht-cet-course-classes-institute-in-khadki-pune" element={<CourseCet11 courseName="3" className="1" />} />
          <Route path="/mht-cet-course-classes-institute-in-tingre-nagar-pune" element={<CourseCet11 courseName="3" className="1" />} />
          <Route path="/mht-cet-course-classes-institute-in-shastri-nagar-pune" element={<CourseCet11 courseName="3" className="1" />} />
          <Route path="/mht-cet-course-classes-institute-in-pratik-nagar-pune" element={<CourseCet11 courseName="3" className="1" />} />
          <Route path="/mht-cet-course-classes-institute-in-viman-nagar-pune" element={<CourseCet11 courseName="3" className="1" />} />
          <Route path="/mht-cet-course-classes-institute-in-kalyani-nagar-pune" element={<CourseCet11 courseName="3" className="1" />} />
          <Route path="/mht-cet-course-classes-institute-in-wagholi-pune" element={<CourseCet11 courseName="3" className="1" />} />
          <Route path="/mht-cet-course-classes-institute-in-pimpri-pune" element={<CourseCet11 courseName="3" className="1" />} />
          <Route path="/mht-cet-course-classes-institute-in-chinchwad-pune" element={<CourseCet11 courseName="3" className="1" />} />
          <Route path="/mht-cet-course-classes-institute-in-pcmc-pune" element={<CourseCet11 courseName="3" className="1" />} />
          <Route path="/mht-cet-course-classes-institute-in-akudi-pune" element={<CourseCet11 courseName="3" className="1" />} />
          <Route path="/mht-cet-course-classes-institute-in-nigdi-pune" element={<CourseCet11 courseName="3" className="1" />} />
          <Route path="/mht-cet-course-classes-institute-in-bhosari-pune" element={<CourseCet11 courseName="3" className="1" />} />
          <Route path="/mht-cet-course-classes-institute-in-moshi-pune" element={<CourseCet11 courseName="3" className="1" />} />
          <Route path="/mht-cet-course-classes-institute-in-chakan-pune" element={<CourseCet11 courseName="3" className="1" />} />
          <Route path="/mht-cet-course-classes-institute-in-kasarwadi-pune" element={<CourseCet11 courseName="3" className="1" />} />
          <Route path="/mht-cet-course-classes-institute-in-dapodi-pune" element={<CourseCet11 courseName="3" className="1" />} />
          <Route path="/mht-cet-course-classes-institute-in-ravet-pune" element={<CourseCet11 courseName="3" className="1" />} />
          <Route path="/mht-cet-course-classes-institute-in-kalewadi-pune" element={<CourseCet11 courseName="3" className="1" />} />
          <Route path="/mht-cet-course-classes-institute-in-wakad-pune" element={<CourseCet11 courseName="3" className="1" />} />
          <Route path="/mht-cet-course-classes-institute-in-aundh-pune" element={<CourseCet11 courseName="3" className="1" />} />
          <Route path="/mht-cet-course-classes-institute-in-baner-pune" element={<CourseCet11 courseName="3" className="1" />} />
          <Route path="/mht-cet-course-classes-institute-in-hinjewadi-pune" element={<CourseCet11 courseName="3" className="1" />} />
          <Route path="/mht-cet-course-classes-institute-in-pimple-saudagar-pune" element={<CourseCet11 courseName="3" className="1" />} />
          <Route path="/mht-cet-course-classes-institute-in-pimple-gurav-pune" element={<CourseCet11 courseName="3" className="1" />} />
          <Route path="/mht-cet-course-classes-institute-in-pimple-nilakh-pune" element={<CourseCet11 courseName="3" className="1" />} />

          {/* Foundation pages */}
          <Route path="/class-8th-9th-10th-coaching-Institutes-classes-in-vishrantwadi-pune" element={<CourseFoundation8 courseName="4" className="1" />} />
          <Route path="/class-8th-9th-10th-coaching-Institutes-classes-in-yerwada-pune" element={<CourseFoundation8 courseName="4" className="1" />} />
          <Route path="/class-8th-9th-10th-coaching-Institutes-classes-in-dhanori-pune" element={<CourseFoundation8 courseName="4" className="1" />} />
          <Route path="/class-8th-9th-10th-coaching-Institutes-classes-in-lohegaon-pune" element={<CourseFoundation8 courseName="4" className="1" />} />
          <Route path="/class-8th-9th-10th-coaching-Institutes-classes-in-dighi-pune" element={<CourseFoundation8 courseName="4" className="1" />} />
          <Route path="/class-8th-9th-10th-coaching-Institutes-classes-in-alandi-pune" element={<CourseFoundation8 courseName="4" className="1" />} />
          <Route path="/class-8th-9th-10th-coaching-Institutes-classes-in-khadki-pune" element={<CourseFoundation8 courseName="4" className="1" />} />
          <Route path="/class-8th-9th-10th-coaching-Institutes-classes-in-tingre-nagar-pune" element={<CourseFoundation8 courseName="4" className="1" />} />
          <Route path="/class-8th-9th-10th-coaching-Institutes-classes-in-shastri-nagar-pune" element={<CourseFoundation8 courseName="4" className="1" />} />
          <Route path="/class-8th-9th-10th-coaching-Institutes-classes-in-pratik-nagar-pune" element={<CourseFoundation8 courseName="4" className="1" />} />
          <Route path="/class-8th-9th-10th-coaching-Institutes-classes-in-viman-nagar-pune" element={<CourseFoundation8 courseName="4" className="1" />} />
          <Route path="/class-8th-9th-10th-coaching-Institutes-classes-in-kalyani-nagar-pune" element={<CourseFoundation8 courseName="4" className="1" />} />
          <Route path="/class-8th-9th-10th-coaching-Institutes-classes-in-wagholi-pune" element={<CourseFoundation8 courseName="4" className="1" />} />
          <Route path="/class-8th-9th-10th-coaching-Institutes-classes-in-pimpri-pune" element={<CourseFoundation8 courseName="4" className="1" />} />
          <Route path="/class-8th-9th-10th-coaching-Institutes-classes-in-chinchwad-pune" element={<CourseFoundation8 courseName="4" className="1" />} />
          <Route path="/class-8th-9th-10th-coaching-Institutes-classes-in-pcmc-pune" element={<CourseFoundation8 courseName="4" className="1" />} />
          <Route path="/class-8th-9th-10th-coaching-Institutes-classes-in-akudi-pune" element={<CourseFoundation8 courseName="4" className="1" />} />
          <Route path="/class-8th-9th-10th-coaching-Institutes-classes-in-nigdi-pune" element={<CourseFoundation8 courseName="4" className="1" />} />
          <Route path="/class-8th-9th-10th-coaching-Institutes-classes-in-bhosari-pune" element={<CourseFoundation8 courseName="4" className="1" />} />
          <Route path="/class-8th-9th-10th-coaching-Institutes-classes-in-moshi-pune" element={<CourseFoundation8 courseName="4" className="1" />} />
          <Route path="/class-8th-9th-10th-coaching-Institutes-classes-in-chakan-pune" element={<CourseFoundation8 courseName="4" className="1" />} />
          <Route path="/class-8th-9th-10th-coaching-Institutes-classes-in-kasarwadi-pune" element={<CourseFoundation8 courseName="4" className="1" />} />
          <Route path="/class-8th-9th-10th-coaching-Institutes-classes-in-dapodi-pune" element={<CourseFoundation8 courseName="4" className="1" />} />
          <Route path="/class-8th-9th-10th-coaching-Institutes-classes-in-ravet-pune" element={<CourseFoundation8 courseName="4" className="1" />} />
          <Route path="/class-8th-9th-10th-coaching-Institutes-classes-in-kalewadi-pune" element={<CourseFoundation8 courseName="4" className="1" />} />
          <Route path="/class-8th-9th-10th-coaching-Institutes-classes-in-wakad-pune" element={<CourseFoundation8 courseName="4" className="1" />} />
          <Route path="/class-8th-9th-10th-coaching-Institutes-classes-in-aundh-pune" element={<CourseFoundation8 courseName="4" className="1" />} />
          <Route path="/class-8th-9th-10th-coaching-Institutes-classes-in-baner-pune" element={<CourseFoundation8 courseName="4" className="1" />} />
          <Route path="/class-8th-9th-10th-coaching-Institutes-classes-in-hinjewadi-pune" element={<CourseFoundation8 courseName="4" className="1" />} />
          <Route path="/class-8th-9th-10th-coaching-Institutes-classes-in-pimple-saudagar-pune" element={<CourseFoundation8 courseName="4" className="1" />} />
          <Route path="/class-8th-9th-10th-coaching-Institutes-classes-in-pimple-gurav-pune" element={<CourseFoundation8 courseName="4" className="1" />} />
          <Route path="/class-8th-9th-10th-coaching-Institutes-classes-in-pimple-nilakh-pune" element={<CourseFoundation8 courseName="4" className="1" />} />
          <Route path="/thank-you" element={<ThankYou courseName="4" className="1" />} />
          {/* Catch-all route for 404 */}
          <Route path="*" element={<ErrorPage />} />
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
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
