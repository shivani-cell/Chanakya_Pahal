import React from "react";
import Navbar from "../navbar";
import Slider from "../HomePage/Slider";
import Aboutus from "./Aboutus";
import Footer from "../Footer";
import Swiperslider from "../FounderSlider/Swiperslider";
function Home(props){
    return(
        <>
        <Navbar/>
        <Slider/>
        <Aboutus/>
        <Swiperslider/>
        <Footer/>
        </>
    );
}
export default Home;