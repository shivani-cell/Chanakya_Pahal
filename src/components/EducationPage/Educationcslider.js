import React, { useEffect, useState } from "react";
import EducationSlider from "./EducationSlider";
import EducationSlidercontent from "./EducationSlidercontent";
import Arrows from "../Arrows";
import Educationdots from "./Educationdots";
import "../Slider.css"
const len = EducationSlider.length -1;
function Educationcslider(props){
    const [activeindex, setActiveIndex] = useState(0);
    useEffect(() => {const interval = setInterval(() => {
        setActiveIndex(activeindex === len ?0 :activeindex+1);
    }, 1500 );
    return () => clearInterval(interval);
}, [activeindex]);
    return (
        <div className="slider-container">
                <EducationSlidercontent activeindex={activeindex} EducationSlider={EducationSlider}/>
                <Arrows 
                    prevslide={() => setActiveIndex(activeindex <1 ? len :activeindex - 1)
                    }
                    nextslide={() => setActiveIndex(activeindex ===len ? 0 :activeindex + 1)
                    }
                    />
                    <Educationdots activeindex={activeindex} 
                    EducationSlider={EducationSlider} 
                    onclick={(activeindex) => setActiveIndex(activeindex)}
                     />
        </div>
    );
}
export default Educationcslider;