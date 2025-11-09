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
import IITJEE from './Pages/iit-jee';
import NEETCoaching from './Pages/neet-coaching';
import MHTCoaching from './Pages/mht-coaching';
import FoundationCoaching from './Pages/foundation-coaching';
import CBSEPimpri  from './Pages/LocationsPages/cbsetuitionpimpri';
import CbsepcmcPune  from './Pages/LocationsPages/CbsepcmsPune';
import ICSEPune  from './Pages/LocationsPages/ICSEpune';
import CBSEBhosari  from './Pages/LocationsPages/CbseBhosari';
import CBSESaudagar  from './Pages/LocationsPages/CbseSaudagar';
import ICSEChinchwad  from './Pages/LocationsPages/ICSEChinchwad';
import ICSEMoshi  from './Pages/LocationsPages/ICSEMoshi';
import MHTPimpri from './Pages/LocationsPages/MHTPimpri';
import MHTVishrantwadi from './Pages/LocationsPages/MHTVishrantwadi';
import MHTDhanori from './Pages/LocationsPages/MHTDhanori';
import MHTYerawada from './Pages/LocationsPages/MHTYerawada';
import MHTTingreNagar from './Pages/LocationsPages/MHTTingreNagar';
import MHTLohegaon from './Pages/LocationsPages/MHTLohegaon';
import MHTKalyaniNagar from './Pages/LocationsPages/MHTKalyaniNagar';
import MHTVimanNagar from './Pages/LocationsPages/MHTVimanNagar';
import MHTMoshi from './Pages/LocationsPages/MHTMoshi';
import MHTHadapsar from './Pages/LocationsPages/MHTHadapsar';
import MHTNigdi from './Pages/LocationsPages/MHTNigdi';
import MHTBhosari from './Pages/LocationsPages/MHTBhosari';
import MHTChinchwad from './Pages/LocationsPages/MHTChinchwad';
import MHTChakan from './Pages/LocationsPages/MHTChakan';
import NEETPimpri from './Pages/LocationsPages/neet-pages/NEETPimpri';
import NEETSaudagar from './Pages/LocationsPages/neet-pages/NEETSaudagar';
import NEETHadapsar from './Pages/LocationsPages/neet-pages/NEETHadapsar';
import NEETAkurdi from './Pages/LocationsPages/neet-pages/NEETAkurdi';
import NEETAlandi from './Pages/LocationsPages/neet-pages/NEETAlandi';
import NEETVishrantwadi from './Pages/LocationsPages/neet-pages/NEETVishrantwadi';
import NEETAundh from './Pages/LocationsPages/neet-pages/NEETAundh';
import NEETYerwada from './Pages/LocationsPages/neet-pages/NEETYerwada';
import BestNEETPune from './Pages/LocationsPages/neet-pages/BestNEETPune';
import NEETVimanNagar from './Pages/LocationsPages/neet-pages/NEETVimanNagar';
import NEETPratikNagar from './Pages/LocationsPages/neet-pages/NEETPratikNagar';
import NEETTingreNagar from './Pages/LocationsPages/neet-pages/NEETTingreNagar';
import NEETChinchwad from './Pages/LocationsPages/neet-pages/NEETChinchwad';
import NEETShastriNagar from './Pages/LocationsPages/neet-pages/NEETShastriNagar';
import NEETPimpriChinchwad from './Pages/LocationsPages/neet-pages/NEETPimpriChinchwad';
import MHTAlandi from './Pages/LocationsPages/MHTAlandi';
import MHTWanowrie from './Pages/LocationsPages/MHTWanowrie';
import MHTKharadi from './Pages/LocationsPages/MHTKharadi';
import MHTDehuRoad from './Pages/LocationsPages/MHTDehuRoad';
import MHTVidyanagarKalas from './Pages/LocationsPages/MHTVidyanagarKalas';
import MHTChandanNagar from './Pages/LocationsPages/MHTChandanNagar';
import MHTCamp from './Pages/LocationsPages/MHTCamp';
import MHTWakad from './Pages/LocationsPages/MHTWakad';

// prismplus Start
import Samplepage from "./Pages/courses/samplepage";
import IITJEEChinchwad from "./Pages/LocationsPages/IIT JEE Pages/iit-jee-chinchwad-pune";
import IITJEEPimpri from "./Pages/LocationsPages/IIT JEE Pages/iit-jee-pimpri-pune";
import IITJEEHadapsar from "./Pages/LocationsPages/IIT JEE Pages/iit-jee-hadapsar-pune";
import IITJEEPCMC from "./Pages/LocationsPages/IIT JEE Pages/iit-jee-pcmc-pune";
import IITJEEVishrantwadi from "./Pages/LocationsPages/IIT JEE Pages/iit-jee-vishrantwadi-pune";
import IITJEEMoshi from "./Pages/LocationsPages/IIT JEE Pages/iit-jee-moshi-pune";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/iit-jee-coaching-classes-institute-for-11th-in-pune" element={<CourseJee11 courseName="1" className="1" />} />
          <Route path="/iit-jee-coaching-classes-institute-for-12th-in-pune" element={<CourseJee12 courseName="1" className="2" />} />
          <Route path="/iit-jee-coaching-classes-for-repeaters-12th-pass-in-pune" element={<CourseJee12Pass courseName="1" className="3" />} />
          <Route path="/iit-jee-crash-course-institutes-classes-in-pune" element={<CourseJeeCrash courseName="1" className="4" />} />
          <Route path="/iit-jee-neet-coaching-classes-institute-for-11th-in-pune" element={<CourseNeet11 courseName="2" className="1" />} />
          <Route path="/iit-jee-neet-coaching-classes-institute-for-12th-in-pune" element={<CourseNeet12 courseName="2" className="2" />} />
          <Route path="/neet-coaching-classes-for-repeaters-12th-pass-in-pune" element={<CourseNeet12Pass courseName="2" className="3" />} />
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
          <Route path="/iit-jee-main-advanced-coaching" element={<IITJEE />} />
          <Route path="/neet-coaching-classes-pune" element={<NEETCoaching />} />
          <Route path="/mht-cet-classes-in-pune" element={<MHTCoaching />} />
          <Route path="/foundation-classes-in-pune" element={<FoundationCoaching />} />
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
          
          <Route path='/cbse-tuition-pimpri-chinchwad-pune-8th-9th-10th' element={<CBSEPimpri/>}/>
          <Route path='/cbse-tuition-pcmc-pune-8th-9th-10th' element={<CbsepcmcPune/>}/>
          <Route path='/icse-tuition-classes-pune-8th-9th-10th' element={<ICSEPune/>}/>
          <Route path='/cbse-tuition-bhosari-pune-8th-9th-10th' element={<CBSEBhosari/>}/>
          <Route path='/cbse-tuition-pimple-saudagar-pune-8th-9th-10th' element={<CBSESaudagar/>}/>
          <Route path='/icse-tuition-pimpri-chinchwad-pune-8th-9th-10th' element={<ICSEChinchwad/>}/>
          <Route path='/icse-tuition-classes-moshi-pune-8th-9th-10th' element={<ICSEMoshi/>}/>
          <Route path='/mht-cet-coaching-classes-institute-in-pimpri-pune' element={<MHTPimpri />} />
          <Route path='/mht-cet-coaching-classes-in-vishrantwadi-pune' element={<MHTVishrantwadi />} />
          <Route path='/mht-cet-coaching-classes-institute-in-dhanori-pune' element={<MHTDhanori />} />
          <Route path='/mht-cet-coaching-classes-institute-in-yerawada-pune' element={<MHTYerawada />} />
          <Route path='/mht-cet-coaching-classes-institute-in-tingre-nagar-pune' element={<MHTTingreNagar />} />
          <Route path='/mht-cet-coaching-classes-institute-in-lohegaon-pune' element={<MHTLohegaon />} />
          <Route path='/mht-cet-coaching-classes-institute-in-kalyani-nagar-pune' element={<MHTKalyaniNagar />} />
          <Route path='/mht-cet-coaching-classes-institute-in-viman-nagar-pune' element={<MHTVimanNagar />} />
          <Route path='/mht-cet-coaching-classes-institute-in-moshi-pune' element={<MHTMoshi />} />
          <Route path='/mht-cet-coaching-classes-institute-in-hadapsar-pune' element={<MHTHadapsar />} />
          <Route path='/mht-cet-coaching-classes-institute-in-nigdi-pune' element={<MHTNigdi />} />
          <Route path='/mht-cet-coaching-classes-institute-in-bhosari-pune' element={<MHTBhosari />} />
          <Route path='/mht-cet-coaching-classes-institute-in-chinchwad-pune' element={<MHTChinchwad />} />
          <Route path='/mht-cet-coaching-classes-institute-in-chakan-pune' element={<MHTChakan />} />

          {/* NEET Pages */}
          <Route path='/neet-coaching-classes-institute-pimpri-pune' element={<NEETPimpri/>}/>
          <Route path='/neet-coaching-classes-institute-pimple-saudagar-pune' element={<NEETSaudagar/>}/>
          <Route path='/neet-coaching-classes-institute-in-hadapsar-pune' element={<NEETHadapsar/>}/>
          <Route path='/neet-coaching-classes-institute-in-akurdi-pune' element={<NEETAkurdi/>}/>
          <Route path='/neet-coaching-classes-institute-alandi-pune' element={<NEETAlandi/>}/>
          <Route path='/neet-coaching-classes-Institute-vishrantwadi-pune' element={<NEETVishrantwadi/>}/>
          <Route path='/neet-coaching-classes-institute-aundh-pune' element={<NEETAundh/>}/>
          <Route path='/neet-coaching-classes-institute-yerwada-pune' element={<NEETYerwada/>}/>
          <Route path='/best-neet-coaching-classes-Institute-in-pune-maharashtra' element={<BestNEETPune />} />
          <Route path='/neet-coaching-classes-institute-viman-nagar-pune' element={<NEETVimanNagar/>}/>
          <Route path='/neet-coaching-classes-institute-pratik-nagar-pune' element={<NEETPratikNagar />} />
          <Route path='/neet-coaching-classes-institute-tingre-nagar-pune' element={<NEETTingreNagar />} />
          <Route path='/neet-coaching-classes-institute-chinchwad-pune' element={<NEETChinchwad />} />
          <Route path='/neet-coaching-classes-institute-shastri-nagar-pune' element={<NEETShastriNagar />} />
          <Route path='/neet-coaching-classes-institute-in-pimpri-chinchwad-pune' element={<NEETPimpriChinchwad />} />

          <Route path='/mht-cet-coaching-classes-institute-in-alandi-pune' element={<MHTAlandi />} />
          <Route path='/mht-cet-coaching-classes-institute-in-wanowrie-pune' element={<MHTWanowrie />} />
          <Route path='/mht-cet-coaching-classes-institute-in-kharadi-pune' element={<MHTKharadi />} />
          <Route path='/mht-cet-coaching-classes-institute-in-dehu-road-pune' element={<MHTDehuRoad />} />
          <Route path='/mht-cet-coaching-classes-institute-in-vidyanagar-kalas-pune' element={<MHTVidyanagarKalas />} />
          <Route path='/mht-cet-coaching-classes-institute-in-chandan-nagar-pune' element={<MHTChandanNagar />} />
          <Route path='/mht-cet-coaching-classes-institute-in-pune-camp-area' element={<MHTCamp />} />
          <Route path='/mht-cet-coaching-classes-institute-in-wakad-pune' element={<MHTWakad />} />

{/* Prismplus start */}

          <Route path='/iit-jee-coaching-classes-institute-in-pune' element={<Samplepage />} />
           <Route path='/iit-jee-coaching-classes-institute-chinchwad-pune' element={<IITJEEChinchwad />} />
             <Route path='/iit-jee-coaching-classes-institute-pimpri-pune' element={<IITJEEPimpri />} />
              <Route path='/IIT-JEE-coaching-classes-institute-hadapsar-pune' element={<IITJEEHadapsar />} />
               <Route path='/iit-jee-coaching-classes-institute-pimpri-chinchwad-pune' element={<IITJEEPCMC />} />
               <Route path='/iit-jee-coaching-classes-institute-vishrantwadi-pune' element={<IITJEEVishrantwadi />} />
                <Route path='/iit-jee-coaching-classes-institute-moshi-pune' element={<IITJEEMoshi />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
