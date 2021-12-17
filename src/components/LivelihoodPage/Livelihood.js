import React from "react";
import Navbar from "../navbar";
import Footer from "../Footer";
import AboutLivelihood from "./Aboutlivelihood";
import Livelihoodcslider from "./Livelihoodcslider";
import Swiperslider from "../FounderSlider/Swiperslider";
function Livelihood(props){
    return(
        <>
    <Navbar/>
    <Livelihoodcslider/>
    <AboutLivelihood/>
    <Swiperslider/>
    <Footer/>
    </>
    );
}
export default Livelihood;