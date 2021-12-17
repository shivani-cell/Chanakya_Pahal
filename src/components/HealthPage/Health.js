import React from "react";
import Navbar from "../navbar";
import Footer from "../Footer";
import Healthcslider from "./Healthcslider";
import Swiperslider from "../FounderSlider/Swiperslider";
import AboutHealth from "./AboutHealth";
function Health(props){
return(
    <>
    <Navbar/>
    <Healthcslider/>
    <AboutHealth/>
    <Swiperslider/>
    <Footer/>
    </>
);
}
export default Health;
