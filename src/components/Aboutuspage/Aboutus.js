import React from "react";
import Navbar from "../navbar";
import Footer from "../Footer";
import Slider from "../FounderSlider/Swiperslider";
import About from "./About";
function Aboutus(props){
    return(
    <>
    <Navbar/>
    <About/>
    <Slider/>
    <Footer/>
    </>
    );
}
export default Aboutus;