import React from "react";
import Educationcslider from "./Educationcslider";
import Abouteducation from "./Abouteducation";
import Navbar from "../navbar";
import Swiperslider from "../FounderSlider/Swiperslider";
import Footer from "../Footer";
const Education = () => {
    return (
    <div>
      <Navbar/>
    <Educationcslider/>
    <Abouteducation/>
    <Swiperslider/>
    <Footer/>
    </div>
    );
  
  };
  export default Education;