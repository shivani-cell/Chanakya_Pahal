import React from 'react';
import Home from "./components/HomePage/Home";
import Education from "./components/EducationPage/Education";
import Contactus from './components/ContactUsPage/Contactus';
import Health from './components/HealthPage/Health';
import Livelihood from './components/LivelihoodPage/Livelihood';
import Womenempowerment from './components/WomenEmpowermentPage/Womenempowerment';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Swiperslider from './components/FounderSlider/Swiperslider';
import Navbar from './components/navbar';
import Aboutus from './components/Aboutuspage/Aboutus';
const App = () => {
  return (
  <>
   <Router>
      <Routes>
        <Route path="/" caseSensitive={false} element={<Home />} />
        <Route path="/about" caseSensitive={false} element={<Aboutus />} />
        <Route path="/contact" caseSensitive={false} element={<Contactus />} />
        <Route path="/education" caseSensitive={false} element={<Education />}/>
        <Route path="/health" caseSensitive={false} element={<Health />}/>
        <Route path="/livelihood" caseSensitive={false} element={<Livelihood />}/>
        <Route path="/womenempowerment" caseSensitive={false} element={<Womenempowerment />}/>
      </Routes>
    </Router>
  </>
  );
};
export default App;