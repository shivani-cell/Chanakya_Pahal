import React, { useEffect, useState } from "react";
import imageSlider from "./imageSlider";
import Slidercontent from "./Slidercontent";
import Arrows from "../Arrows";
import Dots from "./Dots";
import "../Slider.css"
const len = imageSlider.length -1;
function Slider(props){
    const [activeindex, setActiveIndex] = useState(0);
    useEffect(() => {const interval = setInterval(() => {
        setActiveIndex(activeindex === len ?0 :activeindex+1);
    }, 1500 );
    return () => clearInterval(interval);
}, [activeindex]);
    return (
        <div className="slider-container">
                <Slidercontent activeindex={activeindex} imageSlider={imageSlider}/>
                <Arrows 
                    prevslide={() => setActiveIndex(activeindex <1 ? len :activeindex - 1)
                    }
                    nextslide={() => setActiveIndex(activeindex ===len ? 0 :activeindex + 1)
                    }
                    />
                    <Dots activeindex={activeindex} 
                    imageSlider={imageSlider} 
                    onclick={(activeindex) => setActiveIndex(activeindex)}
                     />
        </div>
    );
}
export default Slider;