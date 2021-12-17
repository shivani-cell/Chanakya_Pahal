import React from "react";
import Navbar from "../navbar";
import Womencslider from "./Womencslider";
import Aboutwomen from "./Aboutwomen";
import Footer from "../Footer";
import Swiperslider from "../FounderSlider/Swiperslider";
function Womenempowerment(props){
return(
    <>
    <Navbar/>
    <Womencslider/>
    <Aboutwomen/>
    <Swiperslider/>
    <Footer/>
    </>
);
}
export default Womenempowerment;