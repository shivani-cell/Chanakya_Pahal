import React from "react";
import Navbar from "../navbar";
import Footer from "../Footer";
import Aboutcontact from "./Aboutcontact";
import Swiperslider from "../FounderSlider/Swiperslider";
function Contactus(props){
return(
    <>
     <Navbar/>
     <Aboutcontact/>
     <Swiperslider/>
     <Footer/> 
    </>
);
}
export default Contactus;